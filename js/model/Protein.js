//		xiNET cross-link viewer
//		Copyright 2013 Rappsilber Laboratory
//
//		authors: Lutz Fischer, Colin Combe
//		
//		Protein.js
//		TODO - merge with Interactor class in interaction-viewer
//		TODO - implement start and end residues? (and rename class as Segment?)
//		TODO - move link positions to middle of residue letters? - avoids a prob when rotated 180

Protein.STICKHEIGHT = 20; 		// height of stick in pixels
Protein.MAXSIZE = 0; 			// residue count of longest sequence
Protein.UNITS_PER_RESIDUE = 1; 	// this value is changed during init (calculated on basis of MAXSIZE)
Protein.LABELMAXLENGTH = 60; 	// maximal width reserved for protein-labels
Protein.labelY = -5; 			// label Y offset, better if calc'd half height of label once rendered
Protein.domainColours = d3.scale.category20c(); // d3.scale.ordinal().range(colorbrewer.Paired[12]);

function Protein(id, xlvController, acc, name) {
    this.id = id; // id may not be accession
    this.xlv = xlvController;
    this.accession = acc;
    this.name = name;
    this.tooltip = this.id;
}

//sequence = amino acid in UPPERCASE, digits or lowercase can be used for modification info
Protein.prototype.initProtein = function(sequence, name, description, size) {
    if (this.name == null) {
        this.name = name;
    }
    this.description = description;
    //check for labeling modifications in sequence now, we're about to lose this info
    if (/\d/.test(sequence)) {//is there a digit in the sequence?
        this.labeling = '';// as in silac labelling
        if (sequence.indexOf('K4') !== -1)
            this.labeling += 'K4';
        if (sequence.indexOf('K6') !== -1)
            this.labeling += 'K6';
        if (sequence.indexOf('K8') !== -1)
            this.labeling += 'K8';
        if (sequence.indexOf('K10') !== -1)
            this.labeling += 'R4';
        if (sequence.indexOf('R6') !== -1)
            this.labeling += 'R6';
        if (sequence.indexOf('R8') !== -1)
            this.labeling += 'R8';
        if (sequence.indexOf('R10') !== -1)
            this.labeling += 'R10';
    }
    //remove modification site info from sequence
    this.sequence = sequence.replace(/[^A-Z]/g, '');
    if (typeof size != "undefined") {
		this.size = size;
	}
	else {
		this.size = this.sequence.length;
	}
    // keep track of largest protein size - used for initial scaling of bars
    if (Protein.MAXSIZE < this.size) {
        Protein.MAXSIZE = this.size;
    }
    //links
    this.proteinLinks = d3.map();
    this.internalLink = null;
    // layout info
    this.x = null;
    this.y = null;
    this.rotation = 0;
    this.previousRotation = this.rotation;
    this.stickZoom = 1;
    this.form = null; // 0 = blob, 1 = stick
    this.isParked = false;
    this.isFlipped = false;
    this.isSelected = false;
    //annotation scheme
    this.customAnnotations = null;

    //TODO: remove need for this?
    this.rectX;

    //svg elements we always need
    this.upperGroup = document.createElementNS(xinet.svgns, "g");
    this.upperGroup.setAttribute("class", "protein");
    this.rectDomainsColouredContainer = document.createElementNS(xinet.svgns, "g");
    this.rectDomainsColouredContainer.setAttribute("class", "protein");
    this.rectDomainsColoured = document.createElementNS(xinet.svgns, "g");
    this.rectDomainsColoured.setAttribute("class", "protein");
    this.rectDomainsMouseEvents = document.createElementNS(xinet.svgns, "g");
    this.rectDomainsMouseEvents.setAttribute("class", "protein");
    this.circDomains = document.createElementNS(xinet.svgns, "g");
    this.circDomains.setAttribute("class", "protein");

    //add label to it - we will move this svg element around when protein form changes
    this.labelSVG = document.createElementNS(xinet.svgns, "text");
    this.labelSVG.setAttribute("text-anchor", "end");
    this.labelSVG.setAttribute("x", 0);
    this.labelSVG.setAttribute("y", 10);
    //    this.labelSVG.setAttribute("class", "proteinLabel");
    this.labelSVG.setAttribute('font-family', 'Arial');
    this.labelSVG.setAttribute('font-size', '16');

    //choose label text
    if (this.name !== null & this.name !== "") {
        this.labelText = this.name;
    }
    else if (description != null & description !== "") {
        this.labelText = description;
        this.name = description;
    }
    else if (this.accession != null & this.accession !== "") {
        this.labelText = this.accession;
    }
    else {
		this.labelText  = this.id;
	}
    if (this.labelText.length > 25) {
        this.labelText = this.labelText.substr(0, 16) + "...";
    }
    if (typeof this.labeling !== 'undefined') {
        this.labelText = '[' + this.labeling + '] ' + this.labelText;
    }
    this.labelTextNode = document.createTextNode(this.labelText);
    this.labelSVG.setAttribute('class', 'xlv_text');
    this.labelSVG.appendChild(this.labelTextNode);
    //append label
    this.upperGroup.appendChild(this.labelSVG);

    //make blob
    this.blob = document.createElementNS(xinet.svgns, "circle");
    this.blob.setAttribute("cx", 0);
    this.blob.setAttribute("cy", 0);
    this.blob.setAttribute("r", this.getBlobRadius());
    //style it
    if (this.name.indexOf("DECOY_") !== -1){
		this.blob.setAttribute("fill", "#FB8072");
		//this.blob.setAttribute("fill-opacity", "0.5");
	}else{
		this.blob.setAttribute("fill", "white");
		
    }
    this.blob.setAttribute("fill-opacity", "1");
    this.blob.setAttribute("stroke", "black");
    this.blob.setAttribute("stroke-width", "1");
    //make blobHighlight
    this.blobHighlight = document.createElementNS(xinet.svgns, "circle");
    this.blobHighlight.setAttribute("cx", 0);
    this.blobHighlight.setAttribute("cy", 0);
    this.blobHighlight.setAttribute("r", this.getBlobRadius());
    //style it
    this.blobHighlight.setAttribute("stroke-opacity", "0");
    if (xinet.highlightColour !== undefined)
        this.blobHighlight.setAttribute("stroke", xinet.highlightColour.toRGB());
    this.blobHighlight.setAttribute("stroke-width", "10");

    //make parked blob //TODO: don't use new SVG element, change attributes of blob
    this.parked = document.createElementNS(xinet.svgns, "circle");
    this.parked.setAttribute("cx", 0);
    this.parked.setAttribute("cy", 0);
    this.parked.setAttribute("r", this.getBlobRadius());
    this.parked.setAttribute("class", "Xlr_protein Xlr_parked");
    this.parked.setAttribute("fill", "lightGrey");
    this.parked.setAttribute("fill-opacity", "0.75");
    this.parked.setAttribute("stroke", "none");

    //STICK = EVRYTHING THAT ROTATES: rectangle, annotation, intra links, outline, scale,
    //but NOT LABEL. Cannot currently be made until after all proteins (for scaling)
    this.stick = null;//see getStick() //protein as stick,

    //svg groups for intra protein links
    this.intraLinksHighlights = document.createElementNS(xinet.svgns, "g");
    this.intraLinksHighlights.setAttribute("class", "highlights");
    this.intraLinks = document.createElementNS(xinet.svgns, "g");
    this.intraLinks.setAttribute("class", "intraLinks");

    this.rectAndTicks = document.createElementNS(xinet.svgns, "g");
    ////don't want to scale ticks but do want to add listener to both rect and ticks
    this.rectAndTicks.setAttribute("class", "rectAndTicks");
    // stick symbol minus label, scale labels/sequence and intra links, i.e. rectangular bits to scale
    this.rect = document.createElementNS(xinet.svgns, "g");
    this.rect.setAttribute("class", "rect");
    this.rectAndTicks.appendChild(this.rect);

    this.p = document.createElementNS(xinet.svgns, "rect");//protein stick outline
    //style it
    this.p.setAttribute("fill", "none");
    this.p.setAttribute("stroke", "black");
    this.p.setAttribute("stroke-width", "0.75");

    this.rectHighlight = document.createElementNS(xinet.svgns, "rect");
    this.rectHighlight.setAttribute("stroke-opacity", "0");
    if (xinet.highlightColour !== undefined)
        this.rectHighlight.setAttribute("stroke", xinet.highlightColour.toRGB());
    this.rectHighlight.setAttribute("stroke-width", "10");
    this.rectHighlight.setAttribute("fill", "none");
    //    this.rectHighlight.setAttribute("class", "pOutline Xlr_protein");

    this.rectDomainsColouredContainer.appendChild(this.rectHighlight);
    this.rectDomainsColouredContainer.appendChild(this.rectDomainsColoured);
    this.rectAndTicks.appendChild(this.p);

    this.ticks = null;//document.createElementNS(xinet.svgns, "g");
    this.scaleLabels = new Array();

    // events
    var self = this;
    //    this.upperGroup.setAttribute('pointer-events','all');
    this.upperGroup.onmousedown = function(evt) {
        self.xlv.preventDefaultsAndStopPropagation(evt);//see MouseEvents.js
        //if a force layout exists then stop it
        if (self.xlv.force !== undefined) {
            self.xlv.force.stop();
        }
        self.xlv.dragElement = self;
        //~ if (evt.ctrlKey === false) {
            self.xlv.clearSelection();
            self.setSelected(true);
        //~ } else {
            //~ self.setSelected(!this.isSelected);
        //~ }
        //store start location
        var p = self.xlv.getEventPoint(evt);
        self.xlv.dragStart = self.xlv.mouseToSVG(p.x, p.y);
        self.printAnnotationInfo();
        return false;
    };
    this.upperGroup.onmouseover = function(evt) {
        self.xlv.preventDefaultsAndStopPropagation(evt);
        self.showHighlight(true);
        self.xlv.setTooltip(self.tooltip);
        return false;
    };
    this.upperGroup.onmouseout = function(evt) {
        self.xlv.preventDefaultsAndStopPropagation(evt);
        self.showHighlight(false);
        self.xlv.hideTooltip();
        return false;
    };
    this.upperGroup.ondblclick = function(evt) {
        var p = self.xlv.getEventPoint(evt);
        var c = self.xlv.mouseToSVG(p.x, p.y);
        if (self.form === 0) {
            self.setForm(1, c);
        } else {
             self.setForm(0, c);
        }
        self.xlv.checkLinks();
    };
    
    this.isSelected = false;
};

Protein.prototype.getBlobRadius = function() {
    return Math.sqrt(this.size / Math.PI);
};

//only output the info needed to reproduce the layout
Protein.prototype.toJSON = function() {
    return {
        //for saved proteins
        //        name: this.name,
        //        accession: this.accession,
        //        description: this.description,
        //        sequence: this.sequence,
        //        processedDAS: this.processedDAS,
        //for saved layout
        //        name: this.name,
        x: this.x,
        y: this.y,
        rot: this.rotation,
        form: this.form,
        stickZoom: this.stickZoom,
        parked: this.isParked,
        flipped: this.isFlipped,
        annot: this.customAnnotations
    };
};

Protein.prototype.addLink = function(link) {
    if (!this.proteinLinks.has(link.id)) {
        this.proteinLinks.set(link.id, link);
    }
    if (link.intra) {
        this.internalLink = link;
    }
};

Protein.prototype.showHighlight = function(show) {
    if (show) {
        this.blobHighlight.setAttribute("stroke", xinet.highlightColour.toRGB());
        this.rectHighlight.setAttribute("stroke", xinet.highlightColour.toRGB());
        this.blobHighlight.setAttribute("stroke-opacity", "1");
        this.rectHighlight.setAttribute("stroke-opacity", "1");
    } else {
        if (this.isSelected == false) {
            if (this.form !== 1)
                this.blobHighlight.setAttribute("stroke-opacity", "0");
            else
                this.rectHighlight.setAttribute("stroke-opacity", "0");
        }
        this.blobHighlight.setAttribute("stroke", xinet.selectedColour.toRGB());
        this.rectHighlight.setAttribute("stroke", xinet.selectedColour.toRGB());
    }
};

Protein.prototype.setSelected = function(select) {
    if (select && this.isSelected === false) {
        this.xlv.selected.set(this.id, this);
        this.isSelected = true;
        if (this.form !== 1) {
            this.blobHighlight.setAttribute("stroke", xinet.selectedColour.toRGB());
            this.blobHighlight.setAttribute("stroke-opacity", "1");
        }
        else {
            this.rectHighlight.setAttribute("stroke", xinet.selectedColour.toRGB());
            this.rectHighlight.setAttribute("stroke-opacity", "1");
        }
    }
    else if (select === false && this.isSelected === true) {
        this.xlv.selected.remove(this.id);
        this.isSelected = false;
        if (this.form !== 1) {
            this.blobHighlight.setAttribute("stroke-opacity", "0");
            this.blobHighlight.setAttribute("stroke", xinet.highlightColour.toRGB());
        }
        else {
            this.rectHighlight.setAttribute("stroke-opacity", "0");
            this.rectHighlight.setAttribute("stroke", xinet.selectedColour.toRGB());
        }
    }
};
Protein.prototype.setRotation = function(angle) {
    this.previousRotation = this.rotation;
    this.rotation = angle % 360;
    if (this.rotation < 0)
        this.rotation += 360;
    //    this.xlv.message(this.rotation);
    this.rectHighlight.setAttribute("transform", "rotate(" + this.rotation + ")");
    this.stick.setAttribute("transform", "rotate(" + this.rotation + ")");
    this.rectDomainsColoured.setAttribute("transform", "rotate(" + this.rotation + ") scale(" + (this.stickZoom) + " 1 )");
    var sll = this.scaleLabels.length;
    if (this.rotation > 90 && this.rotation <= 270) {

        this.labelSVG.setAttribute("transform", " rotate(" + (this.rotation - 180) + ")" +
                "translate( -" + (((this.size / 2) * Protein.UNITS_PER_RESIDUE * this.stickZoom) + 10) + " " + Protein.labelY + ")");
        //        if (this.previousRotation <= 90 || this.previousRotation > 270){
        for (var i = 0; i < sll; i++) {
            this.scaleLabels[i].setAttribute("transform", "rotate(180)");
        }
        //        }
    }
    else {
        this.labelSVG.setAttribute("transform", " rotate(" + this.rotation + ")" +
                "translate( -" + (((this.size / 2) * Protein.UNITS_PER_RESIDUE * this.stickZoom) + 10) + " " + Protein.labelY + ")");
        //        if (this.previousRotation > 90 || this.previousRotation <= 270){
        for (var j = 0; j < sll; j++) {
            this.scaleLabels[j].setAttribute("transform", "rotate(0)");
            //            }
        }
    }
};
// seting the x,y position on the svg
// - now more accurately described as setting transform for top group (sets scale on top group also)
Protein.prototype.setPosition = function(x, y) {
    this.x = x;
    this.y = y;
    this.rectDomainsColouredContainer.setAttribute("transform", "translate(" + this.x + " " + this.y + ")" + " scale(" + (this.xlv.z) + ")");
    this.upperGroup.setAttribute("transform", "translate(" + this.x + " " + this.y + ")" + " scale(" + (this.xlv.z) + ")");
    if (this.internalLink != null) {
        if (typeof this.internalLink.fatLine !== 'undefined') {
            this.internalLink.fatLine.setAttribute("transform", "translate(" + this.x
                    + " " + this.y + ")" + " scale(" + (this.xlv.z) + ")");
        }
    }
};
Protein.rotOffset = 20 * 0.7; // see Rotator.js
Protein.minXDist = 30;
Protein.prototype.switchStickScale = function(svgP) {
    if (this.isParked) {
        this.toggleParked();
        //        this.xlv.stickUnderMouse = null;
    }
    if (this.form === 0) {
        this.fromBlob();
        this.toStick();
    }
    else {
        var pixPerRes = Protein.UNITS_PER_RESIDUE * this.stickZoom; // / this.xlv.z;
        if (pixPerRes > 8) {
            this.stickZoom = 0.5;
            this.setPosition(svgP.x, svgP.y);
        }
        else {
            this.stickZoom = this.stickZoom * 3;
            //move stick so same residue is under mouse
            var dx = this.x - (svgP.x);
            var dy = this.y - (svgP.y);
            if (this.rotation === 0 || this.rotation === 180) {
                dy = 0;
            }
            //            console.log(dx + ',' + dy);
            this.setPosition(this.x + (dx * 2), this.y + (dy * 2));
        }
    }
    // when setting the form of prot's,
    // remember following doesn't happen when you just call fromBlob();toStick();
    this.scale();
    this.setAllLineCoordinates();
};

Protein.prototype.scale = function() {
    //    alert('in scale');
    var protLength = (this.size) * Protein.UNITS_PER_RESIDUE * this.stickZoom;
    //    this.setPosition(this.x, this.y);
    if (this.form === 1) {
        this.setRotation(this.rotation); //places label
        this.setAllLineCoordinates();
        this.rect.setAttribute("transform",
                " scale(" + (this.stickZoom) + " 1 )");
        //        this.rectDomainsColoured.setAttribute("transform",
        //            " scale("+(this.stickZoom) + " 1 )");
        this.rectDomainsMouseEvents.setAttribute("transform",
                " scale(" + (this.stickZoom) + " 1 )");
        //place rotators
        this.lowerRotator.svg.setAttribute("transform", "translate(" + (this.getResXwithStickZoom(0) - Protein.rotOffset) + " 0)");
        this.upperRotator.svg.setAttribute("transform", "translate("
                + (this.getResXwithStickZoom(this.size) + Protein.rotOffset) + " 0)");
        //internal links
        if (this.internalLink != null) {
            var resLinks = this.internalLink.residueLinks.values();
            var iLinkCount = resLinks.length;
            for (var l = 0; l < iLinkCount; l++) {
                resLinks[l].setUpCurve();
            }
        }

        if (this.ticks !== null)
            this.rectAndTicks.removeChild(this.ticks);
        this.ticks = getScaleGroup(this);
        this.p.setAttribute("x", this.getResXwithStickZoom(0));
        this.p.setAttribute("y", -Protein.STICKHEIGHT / 2); //svgHeight);
        this.p.setAttribute("width", protLength);
        this.p.setAttribute("height", Protein.STICKHEIGHT);
        this.rectHighlight.setAttribute("x", this.getResXwithStickZoom(0));
        this.rectHighlight.setAttribute("y", -Protein.STICKHEIGHT / 2); //svgHeight);
        this.rectHighlight.setAttribute("width", protLength);
        this.rectHighlight.setAttribute("height", Protein.STICKHEIGHT);
        this.rectAndTicks.appendChild(this.ticks);
        this.setRotation(this.rotation);
    }

    function getScaleGroup(protein) {
        protein.scaleLabels = new Array();
        //options for scale interval: 1 (special case: show sequence), 10, 100, 1000
        //need to know number of pix for 1 em.
        // calc pix per unit
        var ScaleMajTick = 100;
        // every ScaleMinTick paint a small tick
        //var  ScaleMinTick 	  = 20;
        // every ScaleTicksPerLabel "big" ticks write a label
        var ScaleTicksPerLabel = 2; // varies with scale?
        // we label the end - so dont write the previous label, unless it's at least ScaleMaxScaleTextDist residues away
        //var ScaleMaxScaleTextDist = 50;
        var pixPerRes = Protein.UNITS_PER_RESIDUE * protein.stickZoom; // / this.xlv.z;
        var scaleGroup = document.createElementNS(xinet.svgns, "g");
        var tick = -1;
        var lastTickX = protein.getResXwithStickZoom(protein.size);
        var testOffset100 = 0;
        var testOffset10 = 0;
        // for juan
        //	alert (this.name + ',' + (this.name == 'Ska1Domain'))
        //        if (xinet.sid == 682){
        //            testOffset10 = 7;
        //            testOffset100 = 67;
        //        }
        //
        //        else if (protein.name == 'Ska1Domain'){
        //            testOffset10 = 8;
        //            testOffset100 = 138;
        //        }
        for (var res = 1; res <= protein.size; res++) {
            if (res === 1 ||
                    ((res % 100 === testOffset100) && (200 * pixPerRes > Protein.minXDist)) ||
                    ((res % 10 === testOffset10) && (20 * pixPerRes > Protein.minXDist))
                    ) {
                var tx = protein.getResXwithStickZoom(res);
                // for juan
                //                if (xinet.sid == 682 && res == 1)
                //                    tx =  protein.getResXwithStickZoom(res + 4);
                //                else if (protein.name == 'Ska1Domain' && res == 1){
                //                    tx =  protein.getResXwithStickZoom(res + 132);
                //                }
                tickAt(scaleGroup, tx);
                tick = (tick + 1) % ScaleTicksPerLabel;
                // does this one get a label?
                if (tick === 0) {// && tx > 20) {
                    if ((tx + Protein.minXDist) < lastTickX) {
                        // for juan
                        //                        if (xinet.sid == 682 && res == 1)
                        //                            scaleLabelAt(res + 4, scaleGroup, tx);
                        //                        if (protein.name == 'Ska1Domain' && res == 1){
                        //                            scaleLabelAt(res + 132, scaleGroup, tx);
                        //                        }
                        //                        else
                        scaleLabelAt(res, scaleGroup, tx);
                    }
                }
            }
            if (pixPerRes > 8) {
                var seqLabelGroup = document.createElementNS(xinet.svgns, "g");
                seqLabelGroup.setAttribute("transform", "translate(" + protein.getResXwithStickZoom(res) + " " + 0 + ")");
                var seqLabel = document.createElementNS(xinet.svgns, "text");
                //                seqLabel.setAttribute("class", "Xlr_proteinSeqLabelText");
                seqLabel.setAttribute('font-family', 'Arial');
                seqLabel.setAttribute('font-size', '10');
                seqLabel.setAttribute("text-anchor", "end");
                seqLabel.setAttribute("x", 0);
                seqLabel.setAttribute("y", 0); //Protein.STICKHEIGHT + 3);
                seqLabel.appendChild(document.createTextNode(protein.sequence[res - 1]));
                seqLabelGroup.appendChild(seqLabel);
                protein.scaleLabels.push(seqLabel);
                scaleGroup.appendChild(seqLabelGroup);
            }
            //            if (res == 1) res = 0; // means next tick will be 100 not 101
        }
        scaleLabelAt(protein.size, scaleGroup, lastTickX);
        tickAt(scaleGroup, lastTickX);
        return scaleGroup;
        function scaleLabelAt(text, group, tickX) {
            var scaleLabelGroup = document.createElementNS(xinet.svgns, "g");
            scaleLabelGroup.setAttribute("transform", "translate(" + tickX + " " + 0 + ")");
            var scaleLabel = document.createElementNS(xinet.svgns, "text");
            scaleLabel.setAttribute("class", "Xlr_proteinScaleLabelText");
            scaleLabel.setAttribute('font-family', 'Arial');
            scaleLabel.setAttribute('font-size', '14');
            scaleLabel.setAttribute("text-anchor", "middle");
            scaleLabel.setAttribute("x", 0);
            scaleLabel.setAttribute("y", Protein.STICKHEIGHT + 3);
            // for juan
            if (xinet.sid === 682)
                text = text + 33;
            else if (protein.name === 'Ska1Domain') {
                text = text + 132;
            }
            scaleLabel.appendChild(document.createTextNode(text));
            scaleLabelGroup.appendChild(scaleLabel);
            protein.scaleLabels.push(scaleLabel);
            group.appendChild(scaleLabelGroup);
        }

        function tickAt(group, tickX) {
            var mayt = document.createElementNS(xinet.svgns, "line");
            mayt.setAttribute("x1", tickX);
            mayt.setAttribute("y1", (-Protein.STICKHEIGHT / 2) * 0.75);
            mayt.setAttribute("x2", tickX);
            mayt.setAttribute("y2", ((-Protein.STICKHEIGHT / 2) + Protein.STICKHEIGHT) * 0.75);
            mayt.setAttribute("stroke", "black");
            group.appendChild(mayt);
        }
    }
};

Protein.prototype.toggleFlipped = function() {
    this.isFlipped = !this.isFlipped;
    if (this.isFlipped) {
        this.intraLinks.setAttribute("transform", "scale (1 -1)");
        this.intraLinksHighlights.setAttribute("transform", "scale (1 -1)");
    }
    else {
        this.intraLinks.setAttribute("transform", "scale (1 1)");
        this.intraLinksHighlights.setAttribute("transform", "scale (1 1)");
    }
};

Protein.prototype.setParked = function(bool, svgP) {
    if (this.isParked === true && bool == false) {
        this.fromParked();
        if (this.form === 0) {
            this.toBlob();
        }
        else {
            this.toStick();
        }
        this.scale();
        this.setAllLineCoordinates();
    }
    else if (this.isParked === false && bool == true) {
        if (this.form === 0) {
            this.fromBlob();
        }
        else {
            this.fromStick();
            if (svgP !== undefined && svgP !== null) {
                this.setPosition(svgP.x, svgP.y);
            }
        }
        this.toParked();
    }
};

Protein.prototype.setForm = function(form, svgP) {
    if (this.isParked) {
        this.form = form;
        this.setParked(false);
        //TODO: temp
        this.xlv.stickUnderMouse = null;
    }
    else
    {
        if (form == 1) {
            if (this.form === 0) {
                this.fromBlob();
            }
            this.toStick();
        }
        else {
            if (this.form === 1) {
                this.fromStick();
            }
            //          console.log(JSON.stringify(svgP, null, '\t'));
            if (svgP !== undefined && svgP !== null) {
                this.setPosition(svgP.x, svgP.y);
            }
            this.toBlob();
            //TODO: temp
            this.xlv.stickUnderMouse = null;
        }
        this.scale();
        this.setAllLineCoordinates();
    }
};

Protein.prototype.fromBlob = function() {
    this.upperGroup.removeChild(this.circDomains);
    this.upperGroup.removeChild(this.blob);
    //following causes prob for use/defs
    this.upperGroup.removeChild(this.blobHighlight);
};

Protein.prototype.fromParked = function() {
    this.isParked = false;
    this.upperGroup.removeChild(this.parked);
};

Protein.prototype.toBlob = function() {
    this.form = 0;
    if (this.isParked === false) {
        //following causes prob for use/defs
        this.upperGroup.appendChild(this.blobHighlight);
        this.upperGroup.appendChild(this.blob);
        this.upperGroup.appendChild(this.circDomains);
        this.labelSVG.setAttribute("transform", "translate( -" + (this.getBlobRadius() + 5) + " " + Protein.labelY + ")");
        var links = this.proteinLinks.values();
        var c = links.length;
        for (var l = 0; l < c; l++) {
            var link = links[l];
            if ((link.getFromProtein() === this && link.getToProtein().form === 0) ||
                    (link.getToProtein() === this && link.getFromProtein().form === 0))
            {
                // swap links
                //out with the old
                //would it  be better if checkLinks did this? no, slower
                for (var rl in link.residueLinks) {
                    var resLink = link.residueLinks[rl];
                    //TODO: !fix this issue to do with iterating residueLinks!
                    if (resLink.shown) {
                        resLink.hide();
                    }
                }
                //in with the new
                //// done by setAllLineCoordinates
            }
        }
    }
};

Protein.prototype.toParked = function() {
    this.isParked = true;
    this.upperGroup.appendChild(this.parked);
    this.labelSVG.setAttribute("transform", "translate( -" + (this.getBlobRadius() + 5) + " " + Protein.labelY + ")");
    var c = this.proteinLinks.values().length;
    for (var l = 0; l < c; l++) {
        var link = this.proteinLinks.values()[l];
        //out with the old (i.e. all links)
        link.hide();
        for (var rl in link.residueLinks) {
            var resLink = link.residueLinks[rl];
            if (resLink.shown) {//TODO: fix fact this line is required, prob is with for...in loop (when certain libs loaded)
                resLink.hide();
            }
        }
    }
};

Protein.prototype.fromStick = function() {
    this.xlv.proteinLower.removeChild(this.rectDomainsColouredContainer);
    //    this.xlv.proteinLower.removeChild(this.rectHighlight);
    this.upperGroup.removeChild(this.stick);
//    this.upperGroup.removeChild(this.rectDomainsMouseEvents);
};

Protein.prototype.toStick = function() {
    //    if (this.accession === 'P75489') {
    //           alert('P75489');
    //    }
    this.form = 1;
    if (this.isParked === false) {
        if (this.stick === null)
            this.initStick();
        //    this.xlv.proteinLower.appendChild(this.rectHighlight);

        this.xlv.proteinLower.appendChild(this.rectDomainsColouredContainer);
        //    this.stick.setAttribute("transform","rotate(" + this.rotation + ")");
        this.setRotation(this.rotation);
        this.upperGroup.appendChild(this.stick);
        //    this.upperGroup.appendChild(this.rectDomainsMouseEvents);
        if (this.internalLink != null) {
            var intraResLinks = this.internalLink.residueLinks.values();
            var rlCount = intraResLinks.length;
            if (typeof intraResLinks[0].line === 'undefined') {
                for (var irl = 0; irl < rlCount; irl++) {
                    intraResLinks[irl].initSVG();
                }
            }
        }
        this.scale();
        if (this.isSelected === true) {
            this.rectHighlight.setAttribute("stroke", xinet.selectedColour.toRGB());
            this.rectHighlight.setAttribute("stroke-opacity", "1");
        }

        //        if (select && this.isSelected === false) {
        //        this.xlv.selectedProteins.set(this.id, this);
        //        this.isSelected = true;
        //        if (this.form !== 1) {
        //            this.blobHighlight.setAttribute("stroke", xinet.selectedColour.toRGB());
        //            this.blobHighlight.setAttribute("stroke-opacity", "1");
        //        }
        //        else {
        //            this.rectHighlight.setAttribute("stroke", xinet.selectedColour.toRGB());
        //            this.rectHighlight.setAttribute("stroke-opacity", "1");
        //        }
        //    }
        //would it  be better if checkLinks did this? - think not
        var c = this.proteinLinks.values().length;
        for (var l = 0; l < c; l++) {
            var link = this.proteinLinks.values()[l];
            //out with the old
            if (link.shown) {
                link.hide();
            }
        }
    }
// checkLinks brings in new
};

Protein.prototype.initStick = function() {
    if (this.stick !== null) {
        //        alert("this shouldn't really happen...");
    }
    else {
        //rotators
        this.lowerRotator = new Rotator(this, 0, this.xlv);
        this.upperRotator = new Rotator(this, 1, this.xlv);
        this.stick = document.createElementNS(xinet.svgns, "g");
        this.stick.appendChild(this.rectAndTicks);
        this.stick.setAttribute("class", "stick");
        this.stick.appendChild(this.intraLinksHighlights);
        this.stick.appendChild(this.intraLinks);
        this.stick.appendChild(this.rectDomainsMouseEvents);
        var protLength = this.size * Protein.UNITS_PER_RESIDUE;
        this.rectX = -(protLength / 2);
        var y = -Protein.STICKHEIGHT / 2;
        getBackgroundRect(this);
        this.rectAndTicks.appendChild(this.rect);
        this.stick.appendChild(this.lowerRotator.svg);
        this.stick.appendChild(this.upperRotator.svg);
    }

    function getBackgroundRect(protein) {
        var p = document.createElementNS(xinet.svgns, "rect");
        p.setAttribute("class", "pBackground Xlr_protein");
        p.setAttribute("x", protein.getResXUnzoomed(0));
        p.setAttribute("y", y); //svgHeight);
        p.setAttribute("width", (protein.size) * Protein.UNITS_PER_RESIDUE);
        p.setAttribute("height", Protein.STICKHEIGHT);
        p.setAttribute("fill-opacity", "0");
        p.setAttribute("stroke", "none");
        //style it
        if (protein.name.indexOf("DECOY_") !== -1){
			p.setAttribute("fill", "#FB8072");
			p.setAttribute("fill-opacity", "1");
        }
        //        p.appendChild(protein.protTooltip);
        protein.rect.appendChild(p);
    }
};
Protein.prototype.getResXUnzoomed = function(r) {
    return (Protein.UNITS_PER_RESIDUE * r) + this.rectX;
};
Protein.prototype.getResXwithStickZoom = function(r) {
    return this.getResXUnzoomed(r) * this.stickZoom;
};
//calculate the  coordinates of a residue (relative to this.xlv.container)
Protein.prototype.getResidueCoordinates = function(r) {
    if (Protein.UNITS_PER_RESIDUE === undefined)
        alert("Error: Protein.UNITS_PER_RESIDUE is undefined");
    if (r === undefined)
        alert("Error: residue number is undefined");
    var x = this.getResXwithStickZoom(r) * this.xlv.z;
    var y = 0;
    if (x !== 0) {
        var l = Math.abs(x);
        var a = Math.acos(x / l);
        var rotRad = (this.rotation / 360) * Math.PI * 2;
        if (this.rotation !== 0) {
            x = l * Math.cos(rotRad + a);
            y = l * Math.sin(rotRad + a);
        }
    }
    x = x + this.x;
    y = y + this.y;
    return [x, y];
};
// update all lines (e.g after a move)
Protein.prototype.setAllLineCoordinates = function() {
    var links = this.proteinLinks.values();
    var c = links.length;
    for (var l = 0; l < c; l++) {
        var link = links[l];
        if (link.getFromProtein().form === 0 && link.getToProtein().form === 0) {
            this.setLineCoordinates(link);
        }
        else {
            var resLinks = link.residueLinks.values();
            var resLinkCount = resLinks.length;
            for (var rl = 0; rl < resLinkCount; rl++) {
                var residueLink = resLinks[rl];
                this.setLineCoordinates(residueLink);
            }
        }
    }
};
// update the links(lines) to fit to the protein
Protein.prototype.setLineCoordinates = function(link) {
    //a defensive check
    if (this.x == null || this.y == null) {
        return;
    }
    //don't waste time changing DOM if link not visible
    if (link.shown) {
        if (link.getFromProtein() === this) {
            if (this.form === 0) {
                if (link.getToProtein().form === 0) {
                    link.line.setAttribute("x1", this.x);
                    link.line.setAttribute("y1", this.y);
                    //                    if (moveHighlight == false){
                    link.highlightLine.setAttribute("x1", this.x);
                    link.highlightLine.setAttribute("y1", this.y);
                    //                    }
                    //                    if ( link.fatLine.getAttribute("stroke-width") > this.xlv.linkWidth){
                    link.fatLine.setAttribute("x1", this.x);
                    link.fatLine.setAttribute("y1", this.y);
                    //                    }
                }
                else {
                    link.setLineCoord(true, [this.x, this.y]);
                }
            }
            else //if (this.form == 1)
            {
                var coord = this.getResidueCoordinates(link.fromResidue);
                link.setLineCoord(true, coord);
            }
        }
        else if (link.getToProtein() === this) {
            if (this.form === 0) {
                if (link.getFromProtein().form === 0) {
                    link.line.setAttribute("x2", this.x);
                    link.line.setAttribute("y2", this.y);
                    //                    if (moveHighlight == false){
                    link.highlightLine.setAttribute("x2", this.x);
                    link.highlightLine.setAttribute("y2", this.y);
                    //                    }
                    //                    if ( link.fatLine.getAttribute("stroke-width") > this.xlv.linkWidth){
                    link.fatLine.setAttribute("x2", this.x);
                    link.fatLine.setAttribute("y2", this.y);
                    //                    }
                }
                else {
                    link.setLineCoord(false, [this.x, this.y]);
                }
            }
            else //if (this.form == 1)
            {
                var coord = this.getResidueCoordinates(link.toResidue);
                link.setLineCoord(false, coord);
            }
        }
    }
};
Protein.prototype.countExternalLinks = function() {
    if (this.isParked) {
        return 0;
    }
    var countExternal = 0;
    var c = this.proteinLinks.keys().length;
    for (var l = 0; l < c; l++) {
        var link = this.proteinLinks.values()[l];
        if (!link.intra)
        {
            if (link.check() === true) {
                countExternal++;
            }
        }
    }
    return countExternal;
};
Protein.prototype.getSubgraph = function(subgraphs) {
    //u r here
    if (this.subgraph == null) { // don't check for undefined here
        var subgraph = {
            nodes: d3.map(),
            links: d3.map()
        };
        subgraph.nodes.set(this.id, this);
        if (this.isParked === false) {
            this.subgraph = this.addConnectedNodes(subgraph);
        }
        //        else {
        //            this.subgraph = subgraph;
        //        }
        this.xlv.subgraphs.push(subgraph); //TODO: fix this
    }
    //    if (this.subgraph.nodes.keys().length > 1) {alert(this.subgraph.nodes.keys());}
    return this.subgraph;
};
Protein.prototype.addConnectedNodes = function(subgraph) {
    var count = this.proteinLinks.values().length;
    for (var i = 0; i < count; i++) {
        var externalLink = this.proteinLinks.values()[i];
        if (externalLink.check() === true) {
            if (!subgraph.links.has(externalLink.id)) {
                subgraph.links.set(externalLink.id, externalLink);
                var otherEnd;
                if (externalLink.getFromProtein() === this) {
                    otherEnd = externalLink.getToProtein();
                }
                else {
                    otherEnd = externalLink.getFromProtein();
                }
                if (!subgraph.nodes.has(otherEnd.id)) {
                    subgraph.nodes.set(otherEnd.id, otherEnd);
                    //                  console.log(otherEnd.id);
                    //            console.log(JSON.stringify(subgraph.nodes.keys()));
                    otherEnd.subgraph = subgraph;
                    otherEnd.addConnectedNodes(subgraph);
                }
            }
        }
    }
    return subgraph;
};


Protein.prototype.printAnnotationInfo = function() {
    var self = this;
    var message = "";
    //heading, including PDB link
    message += "<h5>" + highlightRegex(this.name, this.xlv.fields.names)
            + " &nbsp;&nbsp;[" + highlightRegex(this.id, self.xlv.fields.names) + "] </h5><p>";
    if (this.processedDAS) {
        //do UniProt first
        var uniprot = this.processedDAS.get('UniProt');
        if (typeof uniprot !== 'undefined') {
            message += "<a href='" + uniprot.href + "' target='_blank'>"
                    + highlightRegex(uniprot.name, self.xlv.fields.names) + "</a>. ";
            message += "Segment start: " + uniprot.start + ", stop: " + uniprot.stop + ". ";

        }
    }
    if (typeof this.accession !== "undefined") {
		message += "<a href='http://www.ebi.ac.uk/pdbe-apps/widgets/unipdb?uniprot="
				+ this.accession + "' target='_blank'>PDB</a></p>";
	}
    //non DAS info -
    //original FASTA file info
    if (typeof this.description !== 'undefined' && this.description !== '') {
        message += "<p>FASTA: " + highlightRegex(this.description, self.xlv.fields.names) + "</p>";
    }
    if (typeof this.geneName !== 'undefined') {
        message += "<p>Gene names: " + highlightRegex(this.geneName, self.xlv.fields.names) + "</p>";
    }
    //TODO: print custom domain annotation info

    if (this.processedDAS) {
        //do UniProt first
        var uniprot = this.processedDAS.get('UniProt');
        if (uniprot) {
            message += "<p>" + highlightRegex(uniprot.full, self.xlv.fields.names) + "</p>";
            printProcessedDAS(uniprot, 'UniProt');
        }
        //and the others
        this.processedDAS.forEach(
                function(serverName, processed) {
                    if (serverName !== 'UniProt') { // done UniProt already
                        printProcessedDAS(processed, serverName);
                    }
                }
        );
        //        message += '<pre>' +
        //        JSON.stringify(this.processedDAS, null, '\t').replace(/\\u0000/gi, '')
        //        + '</pre>';
    }

    xlv.message(message);

    function printProcessedDAS(processed, serverName) {
        message += "<h6>" + serverName + "</h6>";
        //notes
        if (processed.notes) {
            message += "<h7>Notes:</h7>";
            processed.notes.forEach(function(n) {
                printNotes(n);
            });
        }
        //keywords
        if (processed.keywords) {
            message += "<h7>Keywords:</h7><br/>";
            var keywordString = "";
            var keywords = processed.keywords;
            var categories = keywords.keys();
            var catCount = categories.length;
            for (var c = 0; c < catCount; c++) {
                var category = categories[c];
                keywordString += '<h8>' + category + ':</h8> ';
                var keywordArray = keywords.get(category);
                var keywordCount = keywordArray.length;
                for (var k = 0; k < keywordCount; k++) {
                    var keyword = keywordArray[k];
                    if (k > 0) {
                        keywordString += ', ';
                    }
                    if (keyword.link) {
                        keywordString += "<a href='" + keyword.link
                                + "'  target='_blank' >"
                                + highlightRegex(keyword.name, self.xlv.fields.key_text) + "</a>";
                    }
                    else {
                        keywordString += "<span  target='_blank' >"
                                + highlightRegex(keyword.name, self.xlv.fields.key_text) + "</span>";
                    }
                }
                keywordString += '</p>';
            }
            message += keywordString;
        }
        //positional features
        if (processed.positional) {
            processed.positional.forEach(
                    function(category, features) {
                        message += "<h7>Positional features: " + category + "</h7>";
                        message += "<table><tr><th>Name</th><th>Start</th><th>End</th><th>Notes</th></tr>";
                        for (var i = 0; i < features.length; i++) {
                            var anno = features[i];
                            message += "<tr>"
                                    + "<td><p>" + highlightRegex(anno.name, self.xlv.fields.pos_text)
                                    + "</p></td><td><p>" + anno.start
                                    + "</p></td><td><p>" + anno.end
                                    + "</p></td><td>";
                            if (anno.notes !== undefined) {
                                message += "<p>" + anno.notes;
                                var links = anno.links;
                                if (links !== undefined && links !== null) {
                                    var linkString = "";
                                    for (var l = 0; l < links.length; l++) {
                                        linkString += " <a href='" + links[l].href + "' target='_blank'>"
                                                + links[l].textContent + "</a>";
                                    }
                                    message += linkString;
                                }
                                message += "</p>";
                            }
                            message += "</td></tr>";
                        }
                        message += "</table><p>&nbsp;</p>";
                    }
            );
        }
       
        //        if (processed.html) {
        //            message += processed.html;
        //        }
    }
    function printNotes(n) {
        message += "<p>" + highlightRegex(n.notes, self.xlv.fields.notes);
        var links = n.links;
        if (links !== undefined && links !== null) {
            var linkString = "";
            for (var l = 0; l < links.length; l++) {
                linkString += " <a href='" + links[l].href + "' target='_blank'>"
                        + links[l].textContent + "</a>";
            }
            message += linkString;
        }
        message += "</p>";
    }

    function highlightRegex(annotationText, doIt) {
        if (doIt === true) {
            var regex;
            var countRegex = self.xlv.textFilterRegex.length;
            var matches = new Array();
            var NOTs = new Array();
            //matches
            for (var r = 0; r < countRegex; r++) {
                regex = self.xlv.textFilterRegex[r];
                regex.lastIndex = 0;
                var result = regex.exec(annotationText);
                while (result != null) {
                    var match = result[0];
                    matches.push({start: (regex.lastIndex - match.length), stop: regex.lastIndex});
                    result = regex.exec(annotationText);
                }
            }

            var openSpan = "<span class='highlight'>";
            var closeSpan = "</span>";
            var highlightSpanTagLength = openSpan.length + closeSpan.length;
            for (var i = 0; i < matches.length; i++) {
                var match = matches[i];
                annotationText = insert((i * highlightSpanTagLength) + match.start, openSpan, annotationText);
                annotationText = insert((i * highlightSpanTagLength) + openSpan.length + match.stop, closeSpan, annotationText);
            }

            //NOTs
            countRegex = self.xlv.textFilterRegexNOT.length;
            for (var r = 0; r < countRegex; r++) {
                regex =  new RegExp(">[^<]+(" + self.xlv.textFilterRegexNOT[r].source + ")", "gi");
                regex.lastIndex = 0;
                result = regex.exec(">" + annotationText);
                //console.log("in regex loop");
                while (result != null) {
                     var match = result[1];
                    NOTs.push({start: (regex.lastIndex - match.length - 1), stop: regex.lastIndex - 1});
                    result = regex.exec(">" + annotationText);
            //console.log(JSON.stringify(NOTs));
                       }
            }
            var openSpanNOT = "<span class='NOT'>";
            var highlightSpanNotTagLength = openSpanNOT.length + closeSpan.length;

            for (var i = 0; i < NOTs.length; i++) {
                //console.log("in insert loop");
                var match = NOTs[i];
                annotationText = insert((i * highlightSpanNotTagLength) + match.start, openSpanNOT, annotationText);
                annotationText = insert((i * highlightSpanNotTagLength) + openSpanNOT.length + match.stop, closeSpan, annotationText);
            }

        }
        return annotationText;
    }
    function insert(index, string, target) {
        return target.substring(0, index) + string + target.substring(index, target.length);
    }
    ;
};
