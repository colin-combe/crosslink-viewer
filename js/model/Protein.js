//		xiNET cross-link viewer
//		Copyright 2013 Rappsilber Laboratory, University of Edinburgh
//
//		authors: Lutz Fischer, Colin Combe
//		
//		Protein.js

Protein.STICKHEIGHT = 20; 		// height of stick in pixels
Protein.MAXSIZE = 0; 			// residue count of longest sequence
Protein.UNITS_PER_RESIDUE = 1; 	// this value is changed during init (calculated on basis of MAXSIZE)
Protein.LABELMAXLENGTH = 60; 	// maximal width reserved for protein-labels
Protein.labelY = -5; 			// label Y offset, better if calc'd half height of label once rendered
Protein.domainColours = d3.scale.category20c(); // d3.scale.ordinal().range(colorbrewer.Paired[12]);
Protein.transitionTime = 5000;

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
    
    this.tooltip = this.name + ' [' + this.id + ']';
    if (typeof this.description !== 'undefined' && this.description != '' 
			&& this.description !== null){
				this.tooltip += ' ' + this.description;
	}  
    
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
    this.customAnnotations = null;//TODO: tidy up, not needed have this.annotations instead
	//rotators
	this.lowerRotator = new Rotator(this, 0, this.xlv);
	this.upperRotator = new Rotator(this, 1, this.xlv);
    
    var r = this.getBlobRadius();
	
    /*
     * Lower group
     * svg group for elements that appear underneath links
     */
    this.lowerGroup = document.createElementNS(xiNET.svgns, "g");
    this.lowerGroup.setAttribute("class", "protein lowerGroup");
    this.lowerRotationGroup = document.createElementNS(xiNET.svgns, "g");
    this.lowerGroup.appendChild(this.lowerRotationGroup);
 	
 	//make highlight
    this.highlight = document.createElementNS(xiNET.svgns, "rect");
    //invariant attributes
    if (xiNET.highlightColour !== undefined) {
        this.highlight.setAttribute("stroke", xiNET.highlightColour.toRGB());
	}
    this.highlight.setAttribute("stroke-width", "5");   
    this.highlight.setAttribute("fill", "none");   
    //this.highlight.setAttribute("fill-opacity", 1);   
    //attributes that may change
    d3.select(this.highlight).attr("stroke-opacity", 0)
		.attr("width", (r * 2) + 5).attr("height", (r * 2) + 5)
		.attr("x", -r - 2.5).attr("y", -r - 2.5)
		.attr("rx", r + 2.5).attr("ry", r + 2.5);
	this.lowerRotationGroup.appendChild(this.highlight);   
    
    //domains in rectangle form (shown underneath links) 
    this.rectDomains = document.createElementNS(xiNET.svgns, "g");
    this.rectDomains.setAttribute("opacity", "0");
    this.lowerRotationGroup.appendChild(this.rectDomains);
    
    //svg groups for self links
    this.intraLinksHighlights = document.createElementNS(xiNET.svgns, "g");
    this.intraLinks = document.createElementNS(xiNET.svgns, "g");
    this.lowerRotationGroup.appendChild(this.intraLinksHighlights);
	this.lowerRotationGroup.appendChild(this.intraLinks);    
 
     
	/*
     * Upper group
     * svg group for elements that appear above links
     */
     
    this.upperGroup = document.createElementNS(xiNET.svgns, "g");
    this.upperGroup.setAttribute("class", "protein upperGroup");
    this.upperRotationGroup = document.createElementNS(xiNET.svgns, "g");
    //~ this.upperRotationGroup.setAttribute("class", "protein upperRotationGroup");
    this.upperGroup.appendChild(this.upperRotationGroup);

    //create label - we will move this svg element around when protein form changes
    this.labelSVG = document.createElementNS(xiNET.svgns, "text");
    this.labelSVG.setAttribute("text-anchor", "end");
    this.labelSVG.setAttribute("x", 0);
    this.labelSVG.setAttribute("y", 10);
    this.labelSVG.setAttribute("class", "protein xlv_text proteinLabel");
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
    this.labelSVG.appendChild(this.labelTextNode);
    d3.select(this.labelSVG).attr("transform", 
		"translate( -" + (r + 5) + " " + Protein.labelY + ")");
    this.upperRotationGroup.appendChild(this.labelSVG);
   	
   	//ticks
    this.ticks = document.createElementNS(xiNET.svgns, "g");
    this.upperRotationGroup.appendChild(this.ticks);
    
	//make outline
    //http://stackoverflow.com/questions/17437408/how-do-i-change-a-circle-to-a-square-using-d3
	this.outline = document.createElementNS(xiNET.svgns, "rect");
    this.outline.setAttribute("stroke", "black");
    this.outline.setAttribute("stroke-width", "1");
    d3.select(this.outline).attr("stroke-opacity", 1).attr("fill-opacity", 1)
			.attr("fill", (this.name.indexOf("DECOY_") === -1)? "#ffffff" : "#FB8072")
			.attr("width", r * 2).attr("height", r * 2)
			.attr("x", -r).attr("y", -r)
			.attr("rx", r).attr("ry", r);
    //append outline
    this.upperRotationGroup.appendChild(this.outline);
    
    //domains as pie slices - shown on top of everything
	this.circDomains = document.createElementNS(xiNET.svgns, "g");
    //~ this.circDomains.setAttribute("class", "protein circDomains");
	this.circDomains.setAttribute("opacity", 1);
	this.upperRotationGroup.appendChild(this.circDomains);

    this.scaleLabels = new Array();

    // events
    var self = this;
    //    this.upperGroup.setAttribute('pointer-events','all');
    this.upperGroup.onmousedown = function(evt) {
		self.mouseDown(evt);
    };
    this.upperGroup.onmouseover = function(evt) {
		self.mouseOver(evt);
    };
    this.upperGroup.onmouseout = function(evt) {
		self.mouseOut(evt);
     };
    this.upperGroup.ondblclick = function(evt) {
		self.dblClick(evt);
    };

    this.isSelected = false;
};

Protein.prototype.mouseDown = function(evt) {
           this.xlv.preventDefaultsAndStopPropagation(evt);//see MouseEvents.js
        //if a force layout exists then stop it
        if (this.xlv.force !== undefined) {
            this.xlv.force.stop();
        }
        this.xlv.dragElement = this;
        //~ if (evt.ctrlKey === false) {
            this.xlv.clearSelection();
            this.setSelected(true);
        //~ } else {
            //~ this.setSelected(!this.isSelected);
        //~ }
        //store start location
        var p = this.xlv.getEventPoint(evt);
        this.xlv.dragStart = this.xlv.mouseToSVG(p.x, p.y);
        this.printAnnotationInfo();
        return false;
};

Protein.prototype.mouseOver = function(evt) {
        this.xlv.preventDefaultsAndStopPropagation(evt);
        this.showHighlight(true);
        this.xlv.setTooltip(this.tooltip);
        return false;
};

Protein.prototype.mouseOut = function(evt) {
        this.xlv.preventDefaultsAndStopPropagation(evt);
        this.showHighlight(false);
        this.xlv.hideTooltip();
        return false;
};

Protein.prototype.dblClick = function(evt) {
        var p = this.xlv.getEventPoint(evt);
        var c = this.xlv.mouseToSVG(p.x, p.y);
        if (this.form === 0) {
            this.setForm(1, c);
        } else {
            this.setForm(0, c);
        }
        //this.xlv.checkLinks();
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
        this.highlight.setAttribute("stroke", xiNET.highlightColour.toRGB());
        this.highlight.setAttribute("stroke-opacity", "1");
    } else {
        if (this.isSelected == false) {
                this.highlight.setAttribute("stroke-opacity", "0");
        }
        this.highlight.setAttribute("stroke", xiNET.selectedColour.toRGB());
    }
};

Protein.prototype.setSelected = function(select) {
    if (select && this.isSelected === false) {
        this.xlv.selected.set(this.id, this);
        this.isSelected = true;
		this.highlight.setAttribute("stroke", xiNET.selectedColour.toRGB());
		this.highlight.setAttribute("stroke-opacity", "1");
    }
    else if (select === false && this.isSelected === true) {
        this.xlv.selected.remove(this.id);
        this.isSelected = false;
		this.highlight.setAttribute("stroke-opacity", "0");
		this.highlight.setAttribute("stroke", xiNET.highlightColour.toRGB());
    }
};

Protein.prototype.setRotation = function(angle) {
    // this.previousRotation = this.rotation;
    this.rotation = angle % 360;
    if (this.rotation < 0) {
        this.rotation += 360;
	}
    this.upperRotationGroup.setAttribute("transform", "rotate(" + this.rotation + ")");
    this.lowerRotationGroup.setAttribute("transform", "rotate(" + this.rotation + ")");
    var sll = this.scaleLabels.length;
    if (this.rotation > 90 && this.rotation <= 270) {

        this.labelSVG.setAttribute("transform", " rotate(" + (- 180) + ")" +
                "translate( -" + (((this.size / 2) * Protein.UNITS_PER_RESIDUE * this.stickZoom) + 10) + " " + Protein.labelY + ")");
        //        if (this.previousRotation <= 90 || this.previousRotation > 270){
        for (var i = 0; i < sll; i++) {
		   this.scaleLabels[i].setAttribute("transform", "scale(-1,1)");
        }
        this.ticks.setAttribute("transform", "scale(1,-1)");
        //        }
    }
    else {
        this.labelSVG.setAttribute("transform", " rotate(" + 0 + ")" +
                "translate( -" + (((this.size / 2) * Protein.UNITS_PER_RESIDUE * this.stickZoom) + 10) + " " + Protein.labelY + ")");
        //        if (this.previousRotation > 90 || this.previousRotation <= 270){
        for (var j = 0; j < sll; j++) {
            this.scaleLabels[j].setAttribute("transform", "scale(1,1)");
        }
        this.ticks.setAttribute("transform", "scale(1,1)");
 
        // }
    }
};

// more accurately described as setting transform for top svg elements (sets scale also)
Protein.prototype.setPosition = function(x, y) {
    this.x = x;
    this.y = y;
    //~ this.rectDomainsContainer.setAttribute("transform", "translate(" + this.x + " " + this.y + ")" + " scale(" + (this.xlv.z) + ")");
    this.upperGroup.setAttribute("transform", "translate(" + this.x + " " + this.y + ")" + " scale(" + (this.xlv.z) + ")");
    this.lowerGroup.setAttribute("transform", "translate(" + this.x + " " + this.y + ")" + " scale(" + (this.xlv.z) + ")");
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
    var protLength = (this.size) * Protein.UNITS_PER_RESIDUE * this.stickZoom;
    if (this.form === 1) {
        this.setAllLineCoordinates();
        //place rotators
        this.lowerRotator.svg.setAttribute("transform", 
			"translate(" + (this.getResXwithStickZoom(0.5) - Protein.rotOffset) + " 0)");
        this.upperRotator.svg.setAttribute("transform", 
			"translate(" + (this.getResXwithStickZoom(this.size + 0.5) + Protein.rotOffset) + " 0)");
        //internal links
        if (this.internalLink != null) {
            var resLinks = this.internalLink.residueLinks.values();
            var iLinkCount = resLinks.length;
            for (var l = 0; l < iLinkCount; l++) {
                resLinks[l].setUpCurve();
            }
        }

        if (this.ticks !== null){
            this.lowerRotationGroup.removeChild(this.ticks);
		}
        this.ticks = getScaleGroup(this);
        
        this.lowerRotationGroup.appendChild(this.ticks);
        this.setRotation(this.rotation);
    }

    function getScaleGroup(protein) {
        protein.scaleLabels = new Array();
        //options for scale interval: 1 (special case: show sequence), 10, 100, (1000?)
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
        var scaleGroup = document.createElementNS(xiNET.svgns, "g");
        var tick = -1;
        var lastTickX = protein.getResXwithStickZoom(protein.size);
        
        for (var res = 1; res <= protein.size; res++) {
            if (res === 1 ||
                    ((res % 100 === 0) && (200 * pixPerRes > Protein.minXDist)) ||
                    ((res % 10 === 0) && (20 * pixPerRes > Protein.minXDist))
                    ) {
                var tx = protein.getResXwithStickZoom(res);
                tickAt(scaleGroup, tx);
                tick = (tick + 1) % ScaleTicksPerLabel;
                // does this one get a label?
                if (tick === 0) {// && tx > 20) {
                    if ((tx + Protein.minXDist) < lastTickX) {
                        scaleLabelAt(res, scaleGroup, tx);
                    }
                }
            }
            if (pixPerRes > 8) {
                var seqLabelGroup = document.createElementNS(xiNET.svgns, "g");
                seqLabelGroup.setAttribute("transform", "translate(" + protein.getResXwithStickZoom(res) + " " + 0 + ")");
                var seqLabel = document.createElementNS(xiNET.svgns, "text");
                seqLabel.setAttribute('font-family', 'Arial');
                seqLabel.setAttribute('font-size', '10');
                seqLabel.setAttribute("text-anchor", "middle");
                seqLabel.setAttribute("x", 0);//protein.getResXwithStickZoom(res));
                seqLabel.setAttribute("y", 0);
                
             //   seqLabel.setAttribute("transform", "translate(" + protein.getResXwithStickZoom(res) + " " + 0 + ")");
                
                
                seqLabel.appendChild(document.createTextNode(protein.sequence[res - 1]));
                seqLabelGroup.appendChild(seqLabel);
                protein.scaleLabels.push(seqLabel);
                scaleGroup.appendChild(seqLabelGroup);
            }
        }
        scaleLabelAt(protein.size, scaleGroup, lastTickX);
        tickAt(scaleGroup, lastTickX);
        return scaleGroup;
        
        function scaleLabelAt(text, group, tickX) {
            var scaleLabelGroup = document.createElementNS(xiNET.svgns, "g");
            scaleLabelGroup.setAttribute("transform", "translate(" + tickX + " " + 0 + ")");
            var scaleLabel = document.createElementNS(xiNET.svgns, "text");
            scaleLabel.setAttribute("class", "Xlr_proteinScaleLabelText");
            scaleLabel.setAttribute('font-family', 'Arial');
            scaleLabel.setAttribute('font-size', '14');
            scaleLabel.setAttribute("text-anchor", "middle");
            scaleLabel.setAttribute("x", 0);
            scaleLabel.setAttribute("y", Protein.STICKHEIGHT + 3);
            scaleLabel.appendChild(document.createTextNode(text));
            scaleLabelGroup.appendChild(scaleLabel);
            protein.scaleLabels.push(scaleLabel);
            group.appendChild(scaleLabelGroup);
        }

        function tickAt(group, tickX) {
            var mayt = document.createElementNS(xiNET.svgns, "line");
            mayt.setAttribute("x1", tickX);
            mayt.setAttribute("y1", 2);//(-Protein.STICKHEIGHT / 2) * 0.75);
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
        this.isParked = false;
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
        if (this.form === 1) {
            //~ if (svgP !== undefined && svgP !== null) {
                //~ this.setPosition(svgP.x, svgP.y);
            //~ }
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
            this.toStick();
        }
        else {
            //~ if (typeof svgP !== 'undefined' && svgP !== null) {
                //~ this.setPosition(svgP.x, svgP.y);
            //~ }
            this.toBlob();
            //TODO: temp
            this.xlv.stickUnderMouse = null;
        }
    }
};

Protein.prototype.toBlob = function(svgP) {
    this.form = 0;
	var r = this.getBlobRadius();
	d3.select(this.outline).transition().attr("stroke-opacity", 1).attr("fill-opacity", 1)
		.attr("fill", (this.name.indexOf("DECOY_") === -1)? "#ffffff" : "#FB8072")
		.attr("width", r * 2).attr("height", r * 2)
		.attr("x", -r).attr("y", -r)
		.attr("rx", r).attr("ry", r)
		.duration(Protein.transitionTime);
							
	d3.select(this.highlight).transition()
		.attr("width", (r * 2) + 5).attr("height", (r * 2) + 5)
		.attr("x", -r - 2.5).attr("y", -r - 2.5)
		.attr("rx", r + 2.5).attr("ry", r + 2.5)
		.duration(Protein.transitionTime);
		  
	d3.select(this.labelSVG).transition().attr("transform", 
		"translate( -" + (this.getBlobRadius() + 5) + " " + Protein.labelY + ")")
		.duration(Protein.transitionTime);
	
	d3.select(this.upperRotationGroup).transition().attr("transform", 
		"rotate(0)")
		.duration(Protein.transitionTime);
	
	d3.select(this.lowerRotationGroup).transition().attr("transform", 
		"rotate(0)")
		.duration(Protein.transitionTime);
	
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
		}
	}
	
	//~ this.xlv.checkLinks();
};

Protein.prototype.toParked = function(svgP) {
    this.isParked = true;
     
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
     
    var r = this.getBlobRadius();
	d3.select(this.outline).transition().attr("stroke-opacity", 0).attr("fill-opacity", 1)
		.attr("fill", "#EEEEEE")
		.attr("fill-opacity", 1)
		.attr("width", r * 2).attr("height", r * 2)
		.attr("x", -r).attr("y", -r)
		.attr("rx", r).attr("ry", r)
		.duration(Protein.transitionTime);
							
	d3.select(this.highlight).transition()
		.attr("width", (r * 2) + 5).attr("height", (r * 2) + 5)
		.attr("x", -r - 2.5).attr("y", -r - 2.5)
		.attr("rx", r + 2.5).attr("ry", r + 2.5)
		.duration(Protein.transitionTime);
		  
	d3.select(this.labelSVG).transition().attr("transform", 
		"translate( -" + (this.getBlobRadius() + 5) + " " + Protein.labelY + ")")
		.duration(Protein.transitionTime);
	
	d3.select(this.upperRotationGroup).transition().attr("transform", 
		"rotate(0)")
		.duration(Protein.transitionTime);							
	
	d3.select(this.lowerRotationGroup).transition().attr("transform", 
		"rotate(0)")
		.duration(Protein.transitionTime);							
};

Protein.prototype.toStick = function() {
    this.form = 1;
    
    //remove prot-prot links - would it  be better if checkLinks did this? - think not
	var c = this.proteinLinks.values().length;
	for (var l = 0; l < c; l++) {
		var link = this.proteinLinks.values()[l];
		//out with the old
		if (link.shown) {
			link.hide();
		}
	}
    
    var protLength = (this.size) * Protein.UNITS_PER_RESIDUE * this.stickZoom;
    this.currentLength = 0;
	this.xlv.checkLinks();
	
	var self = this;
	var cubicInOut = d3.ease('cubic-in-out');
	d3.timer(function(elapsed) {
	  return update(elapsed / Protein.transitionTime);
	});
 		
	var r = self.getBlobRadius();
	
	var lengthInterpol = d3.interpolate((2 * r), protLength);
	var rotationInterpol = d3.interpolate(0, (this.rotation > 180)? this.rotation - 360 : this.rotation);	
	var labelTranslateInterpol = d3.interpolate(-(r + 5), -(((this.size / 2) * Protein.UNITS_PER_RESIDUE * this.stickZoom) + 10));

	function update(interp) {
		var rot = rotationInterpol(cubicInOut(interp));
		self.rotation = rot % 360;
		if (self.rotation < 0) {
			self.rotation += 360;
		}
		self.upperRotationGroup.setAttribute("transform", "rotate(" + self.rotation + ")");
		self.lowerRotationGroup.setAttribute("transform", "rotate(" + self.rotation + ")");
		var labelTransform = "";
		var sll = self.scaleLabels.length;
		if (self.rotation > 90 && self.rotation <= 270) {
			labelTransform = " rotate(" + (- 180) + ")";
			for (var i = 0; i < sll; i++) {
			   self.scaleLabels[i].setAttribute("transform", "scale(-1,1)");
			}
		}
		else {
			labelTransform = " rotate(" + 0 + ")";
			for (var j = 0; j < sll; j++) {
				self.scaleLabels[j].setAttribute("transform", "scale(1,1)");
			}
		}
		labelTransform += " translate( " + labelTranslateInterpol(cubicInOut(interp)) 
						+ " " + Protein.labelY + ")";  
		d3.select(self.labelSVG).attr("transform", labelTransform);  
		var currentLength = lengthInterpol(cubicInOut(interp));
		self.currentLength = currentLength;
		d3.select(self.outline).attr("width", currentLength).attr("x", - (currentLength / 2));
		self.stickZoom = currentLength / ((self.size)  * (Protein.UNITS_PER_RESIDUE));	
		
		
				
		self.setAllLineCoordinates();
		
		if (interp ===  1){ // finished - tidy up
			//place rotators
			self.upperRotationGroup.appendChild(self.lowerRotator.svg);
			self.upperRotationGroup.appendChild(self.upperRotator.svg);  
			self.lowerRotator.svg.setAttribute("transform", 
				"translate(" + (self.getResXwithStickZoom(0.5) - Protein.rotOffset) + " 0)");
			self.upperRotator.svg.setAttribute("transform", 
				"translate(" + (self.getResXwithStickZoom(self.size + 0.5) + Protein.rotOffset) + " 0)");
			return true;
		} else if (interp > 1){
			return update(1);
		} else {
			return false;
		}
	}
	
	d3.select(this.outline).transition().attr("stroke-opacity", 1).attr("fill-opacity", 0)
		.attr("fill", (this.name.indexOf("DECOY_") === -1)? "#FFFFFF" : "#FB8072")
		.attr("height", Protein.STICKHEIGHT)
		//~ .attr("x", this.getResXwithStickZoom(0.5))
		.attr("y",  -Protein.STICKHEIGHT / 2)
		.attr("rx", 0).attr("ry", 0)
		.duration(Protein.transitionTime);		

	d3.select(this.highlight).transition()
		.attr("width", protLength + 5).attr("height", Protein.STICKHEIGHT + 5)
		.attr("x", this.getResXwithStickZoom(0.5) - 2.5).attr("y", (-Protein.STICKHEIGHT / 2) - 2.5)
		.attr("rx", 0).attr("ry", 0)
		.duration(Protein.transitionTime);		   
	
	var links = this.proteinLinks.values();
	var c = links.length;
	for (var l = 0; l < c; l++) {
		var link = links[l];
		var resLinks = link.residueLinks.values();
		var resLinkCount = resLinks.length;
		for (var rl = 0; rl < resLinkCount; rl++) {
			var residueLink = resLinks[rl];
			
			if (residueLink.shown) {
				if (residueLink.intra === true) {
					var fromCoord = this.getResidueCoordinates(residueLink.fromResidue);
					if (isNaN(parseFloat(residueLink.toResidue))){ //monolink
						pathAtt = "M " + x1 + " 0 L " + x1 + " 20";
						//        this.line.setAttribute("stroke", "red");
					}
					else {
						var toCoord = this.getResidueCoordinates(residueLink.toResidue);


						var intraR = this.getBlobRadius() + 7;
						var radius = 45;
						var arcStart = Protein.trig(intraR, 25 + radius);
						var arcEnd = Protein.trig(intraR, -25 + radius);
						var cp1 = Protein.trig(intraR, 40 + radius);
						var cp2 = Protein.trig(intraR, -40 + radius);
						var aggPath = 'M 0,0 ' 
							+ 'Q ' + cp1.x + ',' + -cp1.y + ' ' + arcStart.x + ',' + -arcStart.y
							+ ' A ' + intraR + ' ' + intraR + ' 0 0 1 ' + arcEnd.x + ',' + -arcEnd.y
							+ ' Q ' + cp2.x + ',' + -cp2.y + ' 0,0';
						d3.select(residueLink.line).attr("d",aggPath);
						
						var x1 = this.getResXwithStickZoom(residueLink.fromResidue);
						var x2 = this.getResXwithStickZoom(residueLink.toResidue);
						var midY = (Math.abs(x2 - x1));
						midY = midY / 2;
						this.curveMidX = x1 + ((x2 - x1) / 2);
						var path = "M " + x1 + ",0 "
							+ 'Q ' + x1 + "," + (-((Protein.STICKHEIGHT / 2) + 3)) 
									+ ' ' + x1 + "," + (-((Protein.STICKHEIGHT / 2) + 3))
							+ " A " + midY + "," + midY + "  0 0 1 "
								+ x2  + (-((Protein.STICKHEIGHT / 2) + 3))
							+ ' Q '+ x2 + ",0" 
								+ ' ' + x2 + ",0";
						
						d3.select(residueLink.line).transition().attr("d",path)
							.duration(Protein.transitionTime);
						
					}
				}
			}
		}
	}	
	
	if (typeof this.annotations !== 'undefined') {
		var bottom = Protein.STICKHEIGHT / 2, top = -Protein.STICKHEIGHT / 2;
		var annots = this.annotations;
		var ca = annots.length;
		for (var a = 0; a < ca; a++) {
			var anno = annots[a].anno;
			var pieSlice = annots[a].pieSlice;
			var rectDomain = annots[a].rect;

			pieSlice.setAttribute("d", this.getAnnotationPieSliceApproximatePath(anno));
						

			d3.select(pieSlice).transition().attr("d", this.getAnnotationRectPath(anno))
				.duration(Protein.transitionTime);
			d3.select(rectDomain).transition().attr("d", this.getAnnotationRectPath(anno))
				.duration(Protein.transitionTime);
		}
	}

	d3.select(this.circDomains).transition().attr("opacity", 0)
		.duration(Protein.transitionTime);
	d3.select(this.rectDomains).transition().attr("opacity", 1)
		.duration(Protein.transitionTime);
};

Protein.prototype.showPeptides = function(pepBounds) {
	if (this.form=== 1){		
		if (typeof this.peptides === 'undefined'){
			this.peptides = document.createElementNS(xiNET.svgns, "g");
			//~ this.rectDomains.appendChild(this.peptides);
		}
		var y = -Protein.STICKHEIGHT / 2;
		
        var count = pepBounds.length;
        var yIncrement = Protein.STICKHEIGHT / count;
        for (var i = 0; i < count; i++) {
            var pep = pepBounds[i];
                   
            var annotColouredRect = document.createElementNS(xiNET.svgns, "rect");
            annotColouredRect.setAttribute("class", "protein");

            //make domain rect's
            var annotX = this.getResXUnzoomed(pep[0] + 0.5);
            var annoSize = pep[1];
            var annoLength = annoSize * Protein.UNITS_PER_RESIDUE;
            annotColouredRect.setAttribute("x", annotX);
            annotColouredRect.setAttribute("y", y);
            annotColouredRect.setAttribute("width", annoLength);
            annotColouredRect.setAttribute("height", yIncrement);

            //style 'em
            annotColouredRect.setAttribute("fill", xiNET.highlightColour.toRGB());
            annotColouredRect.setAttribute("fill-opacity", "0.7");
            
            this.peptides.appendChild(annotColouredRect);
            y += yIncrement;
        }
   }		
}

Protein.prototype.removePeptides = function() {
	if (this.form === 1) {
		//~ console.log("should remove");
		if (this.peptides.parentNode == this.rectDomains){
		//~ console.log("should remove2");
			this.xlv.emptyElement(this.peptides);
		}
	}
}

Protein.prototype.getResXUnzoomed = function(r) {
	var protLength = (this.size) * Protein.UNITS_PER_RESIDUE ;// * this.stickZoom;
	var rectX = -(protLength / 2);
    return (Protein.UNITS_PER_RESIDUE * r) + rectX;
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
