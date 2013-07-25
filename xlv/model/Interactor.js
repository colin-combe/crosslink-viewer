//      xiNET interaction viewer
//      Copyright 2013 Rappsilber Laboratory

//TODO - implement start and end residues (and rename class as Segment?)
//TODO - move link posiitons to middle of residue letters - avoids a prob when rotated 180
Interactor.STICKHEIGHT = 20;//height of stick in pixels
Interactor.MAXSIZE = 0; // residue count of longest sequence
Interactor.UNITS_PER_RESIDUE = 1; //changed during init (calculated on basis of MAXSIZE)
Interactor.LABELMAXLENGTH = 60; // maximal width reserved for protein-labels
Interactor.labelY = -5; //label Y offset, better if calc'd half height of label once rendered
Interactor.domainColours = d3.scale.ordinal().range(colorbrewer.Paired[6]);//d3.scale.category20c();//d3.scale.ordinal().range(colorbrewer.Paired[12]);//

//http://stackoverflow.com/questions/4179283/how-to-overload-constructor-of-an-object-in-js-javascript
function Interactor(id, xlvController, json) {
    this.id = id; // id may not be accession (multiple Segments with same accesssion)
    this.xlv = xlvController;
    this.json = json;    
}

Interactor.prototype.initProtein = function(sequence, name, description, size)
{
    this.accession = this.json.identifier.id;
    this.name = this.json.label;
    this.organism = this.json.organism;

    this.description = description;
    this.tooltip = this.description;
    if (this.name == null) {
        this.name = name;
    }
    //check for labeling modifications in sequnce now, we're about to lose this info
    if (/\d/.test(sequence)) {//is there a digit in the sequence
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
    this.sequence = sequence.replace(/[^A-Z]/g, '');//remove modification site info from seq
    if (typeof size !== 'undefined' && size != null) {
        this.size = size;
    } else {
        this.size = this.sequence.length;
    }
    // get the largest protein size - for scaling purposes
    if (Interactor.MAXSIZE < this.size) {
        Interactor.MAXSIZE = this.size;
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
    this.customAnnotations = null;//new Array();

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
    //    this.labelSVG.setAttribute("class", "proteinLabel");
    this.labelSVG.setAttribute("text-anchor", "end");
    this.labelSVG.setAttribute("x", 0);
    this.labelSVG.setAttribute("y", 10);
    //    this.labelSVG.setAttribute("class", "Xlr_protein Xlr_proteinLabel");
    this.labelSVG.setAttribute('font-family', 'Arial');
    this.labelSVG.setAttribute('font-size', '16');

    //choose label text
    if (this.name !== null & this.name !== "") {
        this.labelText = this.name;
    }
    else if (description !== null & description !== "") {
        this.labelText = description;
        this.name = description;
    }
    else {
        this.labelText = this.accession;
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
    if (this.accession.indexOf("CHEBI") !== -1) {
        var points = "0, -10  8.66,5 -8.66,5";
        this.blob = document.createElementNS(xinet.svgns, "polygon");
        this.blob.setAttribute("points", points);
        this.blobHighlight = document.createElementNS(xinet.svgns, "polygon");
        this.blobHighlight.setAttribute("points", points);
        this.parked = document.createElementNS(xinet.svgns, "polygon");
        this.parked.setAttribute("points", points);
    }
    else {
        this.blob = document.createElementNS(xinet.svgns, "circle");
        this.blob.setAttribute("r", this.getBlobRadius());
        this.blobHighlight = document.createElementNS(xinet.svgns, "circle");
        this.blobHighlight.setAttribute("r", this.getBlobRadius());
        this.parked = document.createElementNS(xinet.svgns, "circle");
        this.parked.setAttribute("r", this.getBlobRadius());
    }
    this.blob.setAttribute("cx", 0);
    this.blob.setAttribute("cy", 0);
    //style it
    this.blob.setAttribute("fill", "white");
    this.blob.setAttribute("fill-opacity", "1");
    this.blob.setAttribute("stroke", "black");
    this.blob.setAttribute("stroke-width", "1");
    //make blobHighlight
    this.blobHighlight.setAttribute("cx", 0);
    this.blobHighlight.setAttribute("cy", 0);
    //    this.blobHighlight.setAttribute("class", "Xlr_protein Xlr_blob");
    //style it
    this.blobHighlight.setAttribute("stroke-opacity", "0");
    if (xinet.highlightColour !== undefined)
        this.blobHighlight.setAttribute("stroke", xinet.highlightColour.toRGB());
    this.blobHighlight.setAttribute("stroke-width", "10");

    //make parked blob //TODO: don't use new SVG element, change attributes of blob
    this.parked.setAttribute("cx", 0);
    this.parked.setAttribute("cy", 0);
    this.parked.setAttribute("class", "Xlr_protein Xlr_parked");
    this.parked.setAttribute("fill", "lightGrey");
    this.parked.setAttribute("fill-opacity", "0.75");
    this.parked.setAttribute("stroke", "none");

    //STICK = EVRYTHING THAT ROTATES: rectangle, annotation, intra links, outline, scale,
    //but NOT LABEL. cannot currently be made until after all proteins (for scaling)
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
        if (evt.ctrlKey === false) {
            self.xlv.clearSelection();
            self.setSelected(true);
        } else {
            self.setSelected(!this.isSelected);
        }
        //store start location
        var p = self.xlv.getEventPoint(evt);
        self.xlv.dragStart = self.xlv.mouseToSVG(p.x, p.y);
        //self.xlv.message(JSON.stringify(self.json));
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
};

Interactor.prototype.getBlobRadius = function() {
    if (this.accession.indexOf("CHEBI") !== -1) {
        return 10;
    }
    else {
        return Math.sqrt(this.size / 3 / Math.PI);
    }
};

//only output the info needed to reproduce the layout
Interactor.prototype.toJSON = function() {
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

Interactor.prototype.addLink = function(link) {
    if (!this.proteinLinks.has(link.id)) {
        this.proteinLinks.set(link.id, link);
    }
    if (link.intra) {
        this.internalLink = link;
    }
};

Interactor.prototype.addFeature = function(feature) {
    if (typeof feature !== 'undefined') {
        var annotName = feature.name;
        if (typeof feature.type !== 'undefined') {
            annotName += ', ' + feature.type.name;
        }
        if (typeof feature.detmethod !== 'undefined') {
            annotName += ', ' + feature.detmethod.name;
        }
        var colour = Interactor.domainColours(feature.type.name);
        var segments = feature.sequenceData;
        var countSegments = segments.length;

        for (var i = 0; i < countSegments; i++) {
            var segment = segments[i];
            var sequenceRegex = /(.+)-(.+)/;
            var match = sequenceRegex.exec(segment);
            var startRes = match[1] * 1;
            var endRes = match[2] * 1;
            if (isNaN(startRes) === false && isNaN(endRes) === false) {
//                console.log(segment.range);
//                console.log(match);
                var annotation = new Annotation(annotName, startRes, endRes, colour);
                if (this.customAnnotations == null) {
                    this.customAnnotations = new Array();
                }
                this.customAnnotations.push(annotation);
            }
        }
    }
}

Interactor.prototype.showHighlight = function(show) {
    if (show) {
        this.blobHighlight.setAttribute("stroke", xinet.highlightColour.toRGB());
        this.rectHighlight.setAttribute("stroke", xinet.highlightColour.toRGB());
        this.blobHighlight.setAttribute("stroke-opacity", "1");
        this.rectHighlight.setAttribute("stroke-opacity", "1");
    } else {
        if (this.isSelected === false) {
            if (this.form !== 1)
                this.blobHighlight.setAttribute("stroke-opacity", "0");
            else
                this.rectHighlight.setAttribute("stroke-opacity", "0");
        }
        this.blobHighlight.setAttribute("stroke", xinet.selectedColour.toRGB());
        this.rectHighlight.setAttribute("stroke", xinet.selectedColour.toRGB());
    }
};

Interactor.prototype.setSelected = function(select) {
    //    if (select && this.isSelected === false) {
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
    //    else if (select === false && this.isSelected === true) {
    //        this.xlv.selectedProteins.remove(this.id);
    //        this.isSelected = false;
    //        if (this.form !== 1) {
    //            this.blobHighlight.setAttribute("stroke-opacity", "0");
    //            this.blobHighlight.setAttribute("stroke", xinet.highlightColour.toRGB());
    //        }
    //        else {
    //            this.rectHighlight.setAttribute("stroke-opacity", "0");
    //            this.rectHighlight.setAttribute("stroke", xinet.selectedColour.toRGB());
    //        }
    //    }
};
Interactor.prototype.setRotation = function(angle) {
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
                "translate( -" + (((this.size / 2) * Interactor.UNITS_PER_RESIDUE * this.stickZoom) + 10) + " " + Interactor.labelY + ")");
        //        if (this.previousRotation <= 90 || this.previousRotation > 270){
        for (var i = 0; i < sll; i++) {
            this.scaleLabels[i].setAttribute("transform", "rotate(180)");
        }
        //        }
    }
    else {
        this.labelSVG.setAttribute("transform", " rotate(" + this.rotation + ")" +
                "translate( -" + (((this.size / 2) * Interactor.UNITS_PER_RESIDUE * this.stickZoom) + 10) + " " + Interactor.labelY + ")");
        //        if (this.previousRotation > 90 || this.previousRotation <= 270){
        for (var j = 0; j < sll; j++) {
            this.scaleLabels[j].setAttribute("transform", "rotate(0)");
            //            }
        }
    }
};
// seting the x,y position on the svg
// - now more accurately described as setting transform for top group (sets scale on top group also)
Interactor.prototype.setPosition = function(x, y) {
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
Interactor.rotOffset = 20 * 0.7; // see Rotator.js
Interactor.minXDist = 30;
Interactor.prototype.switchStickScale = function(svgP) {
    if (this.isParked) {
        this.toggleParked();
        //        this.xlv.stickUnderMouse = null;
    }
    if (this.form === 0) {
        this.fromBlob();
        this.toStick();
    }
    else {
        var pixPerRes = Interactor.UNITS_PER_RESIDUE * this.stickZoom; // / this.xlv.z;
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

Interactor.prototype.scale = function() {
    //    alert('in scale');
    var protLength = (this.size) * Interactor.UNITS_PER_RESIDUE * this.stickZoom;
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
        this.lowerRotator.svg.setAttribute("transform", "translate(" + (this.getResXwithStickZoom(0) - Interactor.rotOffset) + " 0)");
        this.upperRotator.svg.setAttribute("transform", "translate("
                + (this.getResXwithStickZoom(this.size) + Interactor.rotOffset) + " 0)");
        //internal links
//        if (this.internalLink != null) {
//            var resLinks = this.internalLink.residueLinks.values();
//            var iLinkCount = resLinks.length;
//            for (var l = 0; l < iLinkCount; l++) {
//                resLinks[l].setUpCurve();
//            }
//        }

        if (this.ticks !== null)
            this.rectAndTicks.removeChild(this.ticks);
        this.ticks = getScaleGroup(this);
        this.p.setAttribute("x", this.getResXwithStickZoom(0));
        this.p.setAttribute("y", -Interactor.STICKHEIGHT / 2); //svgHeight);
        this.p.setAttribute("width", protLength);
        this.p.setAttribute("height", Interactor.STICKHEIGHT);
        this.rectHighlight.setAttribute("x", this.getResXwithStickZoom(0));
        this.rectHighlight.setAttribute("y", -Interactor.STICKHEIGHT / 2); //svgHeight);
        this.rectHighlight.setAttribute("width", protLength);
        this.rectHighlight.setAttribute("height", Interactor.STICKHEIGHT);
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
        var pixPerRes = Interactor.UNITS_PER_RESIDUE * protein.stickZoom; // / this.xlv.z;
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
                    ((res % 100 === testOffset100) && (200 * pixPerRes > Interactor.minXDist)) ||
                    ((res % 10 === testOffset10) && (20 * pixPerRes > Interactor.minXDist))
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
                    if ((tx + Interactor.minXDist) < lastTickX) {
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
                seqLabel.setAttribute("y", 0); //Interactor.STICKHEIGHT + 3);
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
            scaleLabel.setAttribute("class", "Xlr_proteinScaleLabelText xlv_text");
            scaleLabel.setAttribute('font-family', 'Arial');
            scaleLabel.setAttribute('font-size', '14');
            scaleLabel.setAttribute("text-anchor", "middle");
            scaleLabel.setAttribute("x", 0);
            scaleLabel.setAttribute("y", Interactor.STICKHEIGHT + 3);
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
            mayt.setAttribute("y1", (-Interactor.STICKHEIGHT / 2) * 0.75);
            mayt.setAttribute("x2", tickX);
            mayt.setAttribute("y2", ((-Interactor.STICKHEIGHT / 2) + Interactor.STICKHEIGHT) * 0.75);
            mayt.setAttribute("stroke", "black");
            group.appendChild(mayt);
        }
    }
};

Interactor.prototype.toggleFlipped = function() {
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

Interactor.prototype.setParked = function(bool, svgP) {
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

Interactor.prototype.setForm = function(form, svgP) {
    if (this.isParked) {
        this.form = form;
        this.setParked(false);
        //TODO: temp
        this.xlv.stickUnderMouse = null;
    }
    else
    {
        if (form == 1) {
            if (this.accession.indexOf("CHEBI") === -1) { // CAN'T TOGGLE SMALL MOLECULES
                if (this.form === 0) {
                    this.fromBlob();
                }
                this.toStick();
            }
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

Interactor.prototype.fromBlob = function() {
    this.upperGroup.removeChild(this.circDomains);
    this.upperGroup.removeChild(this.blob);
    //following causes prob for use/defs
    this.upperGroup.removeChild(this.blobHighlight);
};

Interactor.prototype.fromParked = function() {
    this.isParked = false;
    this.upperGroup.removeChild(this.parked);
};

Interactor.prototype.toBlob = function() {
    this.form = 0;
    if (this.isParked === false) {
        //following causes prob for use/defs
        this.upperGroup.appendChild(this.blobHighlight);
        this.upperGroup.appendChild(this.blob);
        this.upperGroup.appendChild(this.circDomains);
        this.labelSVG.setAttribute("transform", "translate( -" + (this.getBlobRadius() + 5) + " " + Interactor.labelY + ")");
        var links = this.proteinLinks.values();
        var c = links.length;
        for (var l = 0; l < c; l++) {
            var link = links[l];
            if ((link.fromProtein === this && link.toProtein.form === 0) ||
                    (link.toProtein === this && link.fromProtein.form === 0))
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

Interactor.prototype.toParked = function() {
    this.isParked = true;
    this.upperGroup.appendChild(this.parked);
    this.labelSVG.setAttribute("transform", "translate( -" + (this.getBlobRadius() + 5) + " " + Interactor.labelY + ")");
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

Interactor.prototype.fromStick = function() {
    this.xlv.proteinLower.removeChild(this.rectDomainsColouredContainer);
    //    this.xlv.proteinLower.removeChild(this.rectHighlight);
    this.upperGroup.removeChild(this.stick);
//    this.upperGroup.removeChild(this.rectDomainsMouseEvents);
};

Interactor.prototype.toStick = function() {
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

Interactor.prototype.initStick = function() {
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
        var protLength = this.size * Interactor.UNITS_PER_RESIDUE;
        this.rectX = -(protLength / 2);
        var y = -Interactor.STICKHEIGHT / 2;
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
        p.setAttribute("width", (protein.size) * Interactor.UNITS_PER_RESIDUE);
        p.setAttribute("height", Interactor.STICKHEIGHT);
        //style it
        //        p.setAttribute("fill", "white");
        p.setAttribute("fill-opacity", "0");
        p.setAttribute("stroke", "none");
        //        p.appendChild(protein.protTooltip);
        protein.rect.appendChild(p);
    }
};

Interactor.prototype.getResXUnzoomed = function(r) {
    return (Interactor.UNITS_PER_RESIDUE * r) + this.rectX;
};

Interactor.prototype.getResXwithStickZoom = function(r) {
    if (isNaN(r) || r === '?' || r === 'n') {
        return (this.rectX * this.stickZoom) - 8;// ;
    }
    return this.getResXUnzoomed(r) * this.stickZoom;
};

//calculate the  coordinates of a residue (relative to this.xlv.container)
Interactor.prototype.getResidueCoordinates = function(r, yOff) {
    if (Interactor.UNITS_PER_RESIDUE === undefined)
        alert("Error: Interactor.UNITS_PER_RESIDUE is undefined");
    if (r === undefined)
        alert("Error: residue number is undefined");
  //  console.log(r * 1);
    var x = this.getResXwithStickZoom(r * 1) * this.xlv.z;
    var y = 0;
    if (x !== 0) {
        var l = Math.abs(x);
        var a = Math.acos(x / l);
        var rotRad = (this.rotation / 360) * Math.PI * 2;
        x = l * Math.cos(rotRad + a);
        y = l * Math.sin(rotRad + a);
        if (typeof yOff !== 'undefined') {
            x += yOff * this.xlv.z * Math.cos(rotRad + (Math.PI / 2));
            y += yOff * this.xlv.z * Math.sin(rotRad + (Math.PI / 2));
        }
    }
    else {
        y = yOff;
    }
    x = x + this.x;
    y = y + this.y;
    return [x, y];
};

// update all lines (e.g after a move)
Interactor.prototype.setAllLineCoordinates = function() {
    var links = this.proteinLinks.values();
    var c = links.length;
    for (var l = 0; l < c; l++) {
        var link = links[l];
        if (link.fromProtein.form === 0 && link.toProtein.form === 0) {
            link.setLinkCoordinates(this);
        }
        else {
            var resLinks = link.residueLinks.values();
            var resLinkCount = resLinks.length;
            for (var rl = 0; rl < resLinkCount; rl++) {
                resLinks[rl].setLinkCoordinates(this);
            }
        }
    }
};

Interactor.prototype.countExternalLinks = function() {
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

Interactor.prototype.getSubgraph = function(subgraphs) {
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
Interactor.prototype.addConnectedNodes = function(subgraph) {
    var count = this.proteinLinks.values().length;
    for (var i = 0; i < count; i++) {
        var externalLink = this.proteinLinks.values()[i];
        if (externalLink.check() === true) {
            if (!subgraph.links.has(externalLink.id)) {
                subgraph.links.set(externalLink.id, externalLink);
                var otherEnd;
                if (externalLink.fromProtein === this) {
                    otherEnd = externalLink.toProtein;
                }
                else {
                    otherEnd = externalLink.fromProtein;
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