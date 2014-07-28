//    	xiNET Interaction Viewer
//    	Copyright 2013 Rappsilber Laboratory
//
//    	This product includes software developed at
//    	the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//		
//		Interactor.js		
//
//		authors: Lutz Fischer, Colin Combe

"use strict";

Interactor.STICKHEIGHT = 20;//height of stick in pixels
Interactor.MAXSIZE = 0; // residue count of longest sequence
Interactor.UNITS_PER_RESIDUE = 1; //changed during init (calculated on basis of MAXSIZE)
Interactor.LABELMAXLENGTH = 60; // maximal width reserved for protein-labels
Interactor.labelY = -5; //label Y offset, better if calc'd half height of label once rendered
//~ Interactor.domainColours = d3.scale.ordinal().range(colorbrewer.Paired[6]);//d3.scale.category20c();//d3.scale.ordinal().range(colorbrewer.Paired[12]);//
//~ Protein.domainColours = d3.scale.category20c(); //
//~ Protein.domainColours = d3.scale.ordinal().range(colorbrewer.Paired[5]);
//~ Protein.domainColours = d3.scale.ordinal().range(colorbrewer.Set3[12]);
Interactor.domainColours = d3.scale.ordinal().range(colorbrewer.Pastel1[8]);
//~ Interactor.domainColours = d3.scale.ordinal().range(colorbrewer.Set3[9]);

Interactor.transitionTime = 650;

function Interactor(id, xlvController, json) {
    this.id = id; // id may not be accession (multiple Segments with same accesssion)
    this.ctrl = xlvController;
    this.json = json;  
    this.experimentalFeatures = d3.map();  
}

Interactor.prototype.toJSON = function() {
    return {
        interactor: this.json
    };
};

Interactor.prototype.initInteractor = function(sequence, name, description, size)
{
    this.accession = this.json.identifier.id;
    this.name = this.json.label.substring(0, this.json.label.indexOf('_'));
    this.organism = this.json.organism;

    this.description = description;
    this.tooltip = this.description;
    if (this.name == null) {
        this.name = name;
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
    if (Interactor.MAXSIZE < this.size) {
        Interactor.MAXSIZE = this.size;
    }
    //links
    this.links = d3.map();
    this.internalLink = null;
    // layout info
    this.x = null;
    this.y = null;
    this.rotation = 0;
    this.previousRotation = this.rotation;
    this.stickZoom = 1;
    this.form = 0;//null; // 0 = blob, 1 = stick
    this.isParked = false;
    this.isFlipped = false;
    this.isSelected = false;
    //annotation scheme
    this.customAnnotations = null;//TODO: tidy up, not needed have this.annotations instead
	//rotators
	//~ this.mouseoverControls = new MouseoverControls(this, this.ctrl);
	this.lowerRotator = new Rotator(this, 0, this.ctrl);
	this.upperRotator = new Rotator(this, 1, this.ctrl);
    
    var r = this.getBlobRadius();
	
    /*
     * Lower group
     * svg group for elements that appear underneath links
     */
    this.lowerGroup = document.createElementNS(xiNET.svgns, "g");
    this.lowerGroup.setAttribute("class", "protein lowerGroup");
 	
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
	this.lowerGroup.appendChild(this.highlight);   
    
    //domains in rectangle form (shown underneath links) 
    this.rectDomains = document.createElementNS(xiNET.svgns, "g");
    this.rectDomains.setAttribute("opacity", "0");
    this.lowerGroup.appendChild(this.rectDomains);
    
    this.peptides = document.createElementNS(xiNET.svgns, "g");
	this.lowerGroup.appendChild(this.peptides);
	
	/*
     * Upper group
     * svg group for elements that appear above links
     */
     
    this.upperGroup = document.createElementNS(xiNET.svgns, "g");
    this.upperGroup.setAttribute("class", "protein upperGroup");
    
    //svg groups for self links
    this.intraLinksHighlights = document.createElementNS(xiNET.svgns, "g");
    this.intraLinks = document.createElementNS(xiNET.svgns, "g");
    this.upperGroup.appendChild(this.intraLinksHighlights);
	this.upperGroup.appendChild(this.intraLinks);    
    
    //create label - we will move this svg element around when protein form changes
    this.labelSVG = document.createElementNS(xiNET.svgns, "text");
    this.labelSVG.setAttribute("text-anchor", "end");
    this.labelSVG.setAttribute("fill", "black")
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
		"translate( -" + (r + 5) + " " + Interactor.labelY + ")");
    this.upperGroup.appendChild(this.labelSVG);
   	
   	//ticks (and animo acid letters)
    this.ticks = document.createElementNS(xiNET.svgns, "g");
     
	//make outline
    //http://stackoverflow.com/questions/17437408/how-do-i-change-a-circle-to-a-square-using-d3
	this.outline = document.createElementNS(xiNET.svgns, "rect");
    this.outline.setAttribute("stroke", "black");
    this.outline.setAttribute("stroke-width", "1");
    d3.select(this.outline).attr("stroke-opacity", 1).attr("fill-opacity", 1)
			.attr("fill", "#ffffff")
			.attr("width", r * 2).attr("height", r * 2)
			.attr("x", -r).attr("y", -r)
			.attr("rx", r).attr("ry", r);
    //append outline
    this.upperGroup.appendChild(this.outline);
    
    //domains as pie slices - shown on top of everything
	this.circDomains = document.createElementNS(xiNET.svgns, "g");
    //~ this.circDomains.setAttribute("class", "protein circDomains");
	this.circDomains.setAttribute("opacity", 1);
	this.upperGroup.appendChild(this.circDomains);

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
     
    this.upperGroup.ontouchstart = function(evt) {
		self.ctrl.message("protein touch start");
		self.touchStart(evt);
    };
    //~ this.upperGroup.ontouchmove = function(evt) {};
	//~ this.upperGroup.ontouchend = function(evt) {
		//~ self.ctrl.message("protein touch end");
		//~ self.mouseOut(evt);
    //~ };
    //~ this.upperGroup.ontouchenter = function(evt) {
        //~ self.message("protein touch enter");
    	//~ self.touchStart(evt);
    //~ };
    //~ this.upperGroup.ontouchleave = function(evt) {
        //~ self.message("protein touch leave");
    	//~ self.mouseOut(evt);
    //~ };
    //~ this.upperGroup.ontouchcancel = function(evt) {
        //~ self.message("protein touch cancel");
    	//~ self.mouseOut(evt);
    //~ };
    this.isSelected = false;
};

Interactor.prototype.mouseDown = function(evt) {
           this.ctrl.preventDefaultsAndStopPropagation(evt);//see MouseEvents.js
        //if a force layout exists then stop it
        if (this.ctrl.force !== undefined) {
            this.ctrl.force.stop();
        }
        this.ctrl.dragElement = this;
        //~ if (evt.ctrlKey === false) {
            this.ctrl.clearSelection();
            this.setSelected(true);
        //~ } else {
            //~ this.setSelected(!this.isSelected);
        //~ }
        //store start location
        var p = this.ctrl.getEventPoint(evt);
        this.ctrl.dragStart = this.ctrl.mouseToSVG(p.x, p.y);
        //this.printAnnotationInfo();
        return false;
};

Interactor.prototype.touchStart = function(evt) {
           this.ctrl.preventDefaultsAndStopPropagation(evt);//see MouseEvents.js
        //if a force layout exists then stop it
        if (this.ctrl.force !== undefined) {
            this.ctrl.force.stop();
        }
        this.ctrl.dragElement = this;
        //~ if (evt.ctrlKey === false) {
            this.ctrl.clearSelection();
            this.setSelected(true);
        //~ } else {
            //~ this.setSelected(!this.isSelected);
        //~ }
        //store start location
        var p = this.ctrl.getTouchEventPoint(evt);
        this.ctrl.dragStart = this.ctrl.mouseToSVG(p.x, p.y);
        this.printAnnotationInfo();
        return false;
};

Interactor.prototype.mouseOver = function(evt) {
        this.ctrl.preventDefaultsAndStopPropagation(evt);
        this.showHighlight(true);
        this.ctrl.setTooltip(this.tooltip);
        return false;
};

Interactor.prototype.mouseOut = function(evt) {
        this.ctrl.preventDefaultsAndStopPropagation(evt);
        this.showHighlight(false);
        this.ctrl.hideTooltip();
        return false;
};

Interactor.prototype.getBlobRadius = function() {
    if (this.accession.indexOf("CHEBI") !== -1) {
        return 10;
    }
    else if (this.json.type.name === 'peptide' || this.json.type.name === 'single stranded deoxyribonucleic acid'){
        return 5;
    }
    else {
        return Math.sqrt(this.size / 3 / Math.PI);
    }
};

//only output the info needed to reproduce the layout
//~ Interactor.prototype.toJSON = function() {
    //~ return {
        //~ //for saved interactors
        //~ //        name: this.name,
        //~ //        accession: this.accession,
        //~ //        description: this.description,
        //~ //        sequence: this.sequence,
        //~ //        processedDAS: this.processedDAS,
        //~ //for saved layout
        //~ //        name: this.name,
        //~ x: this.x,
        //~ y: this.y,
        //~ rot: this.rotation,
        //~ form: this.form,
        //~ stickZoom: this.stickZoom,
        //~ parked: this.isParked,
        //~ flipped: this.isFlipped,
        //~ annot: this.customAnnotations
    //~ };
//~ };

Interactor.prototype.addLink = function(link) {
    if (!this.links.has(link.id)) {
        this.links.set(link.id, link);
    }
    if (link.arity == 1) {
        this.internalLink = link;
    }
};

Interactor.prototype.addFeature = function(feature) {
    if (typeof feature !== 'undefined') {
        var annotName = "";
        if (typeof feature.name !== 'undefined') {
            annotName += feature.name + ', ';
        }
        if (typeof feature.type !== 'undefined') {
            annotName += feature.type.name;
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
    if (show === true) {
        //~ this.highlight.setAttribute("stroke", xiNET.highlightColour.toRGB());
        this.highlight.setAttribute("stroke-opacity", "1");
    } else {
		//~ if (this.isSelected == false) {
                this.highlight.setAttribute("stroke-opacity", "0");
        //~ }
        //~ this.highlight.setAttribute("stroke", xiNET.selectedColour.toRGB());
    }
};

Interactor.prototype.setSelected = function(select) {
    if (select && this.isSelected === false) {
        this.ctrl.selected.set(this.id, this);
        this.isSelected = true;
		this.highlight.setAttribute("stroke", xiNET.selectedColour.toRGB());
		this.highlight.setAttribute("stroke-opacity", "1");
    }
    else if (select === false && this.isSelected === true) {
        this.ctrl.selected.remove(this.id);
        this.isSelected = false;
		this.highlight.setAttribute("stroke-opacity", "0");
		this.highlight.setAttribute("stroke", xiNET.highlightColour.toRGB());
    }
};

Interactor.prototype.setRotation = function(angle) {
    this.rotation = angle % 360;
    if (this.rotation < 0) {
        this.rotation += 360;
	}
    this.upperGroup.setAttribute("transform", "translate(" + this.x + " " + this.y + ")" 
			+ " scale(" + (this.ctrl.z) + ") " + "rotate(" + this.rotation + ")");
    this.lowerGroup.setAttribute("transform", "translate(" + this.x + " " + this.y + ")" 
			+ " scale(" + (this.ctrl.z) + ") " + "rotate(" + this.rotation + ")");

    var svg = this.ctrl.svgElement;    
	var transformToContainingGroup = this.labelSVG.getAttribute("transform");
	var labelTransform = d3.transform(transformToContainingGroup);
	var sll = this.scaleLabels.length;
	if (this.rotation >= 90 && this.rotation < 270) {
			var k = svg.createSVGMatrix()
						.translate(Math.abs(labelTransform.translate[0]), -Interactor.labelY)
						.rotate(180, 0, 0);
			this.labelSVG.transform.baseVal.initialize(svg.createSVGTransformFromMatrix(k));
			if (this.form ===1){
				for (var i = 0; i < sll; i++) {
					   this.scaleLabels[i].setAttribute("transform", "scale(-1,1)");
					}
					this.ticks.setAttribute("transform", "scale(1,-1)");
			}
	}
    else {
    		var k = svg.createSVGMatrix()
						.translate(-(Math.abs(labelTransform.translate[0])), Interactor.labelY);
			this.labelSVG.transform.baseVal.initialize(svg.createSVGTransformFromMatrix(k));
			if (this.form ===1){
				for (var j = 0; j < sll; j++) {
					this.scaleLabels[j].setAttribute("transform", "scale(1,1)");
				}
				this.ticks.setAttribute("transform", "scale(1,1)");
			}
	}
};

// more accurately described as setting transform for top svg elements (sets scale also)
Interactor.prototype.setPosition = function(x, y) {
    this.x = x;
    this.y = y;
    if (this.form === 1 && this.isParked === false){
		this.upperGroup.setAttribute("transform", "translate(" + this.x + " " + this.y + ")" 
				+ " scale(" + (this.ctrl.z) + ") " + "rotate(" + this.rotation + ")");
		this.lowerGroup.setAttribute("transform", "translate(" + this.x + " " + this.y + ")" 
				+ " scale(" + (this.ctrl.z) + ") " + "rotate(" + this.rotation + ")");
    } 
    else {
		this.upperGroup.setAttribute("transform", "translate(" + this.x + " " + this.y + ")" 
				+ " scale(" + (this.ctrl.z) + ") ");
		this.lowerGroup.setAttribute("transform", "translate(" + this.x + " " + this.y + ")" 
				+ " scale(" + (this.ctrl.z) + ") ");
		if (this.internalLink != null) {
			if (typeof this.internalLink.thickLine !== 'undefined') {
				this.internalLink.thickLine.setAttribute("transform", "translate(" + this.x
						+ " " + this.y + ")" + " scale(" + (this.ctrl.z) + ")");
			}
				this.internalLink.line.setAttribute("transform", "translate(" + this.x
						+ " " + this.y + ")" + " scale(" + (this.ctrl.z) + ")");
				this.internalLink.highlightLine.setAttribute("transform", "translate(" + this.x
						+ " " + this.y + ")" + " scale(" + (this.ctrl.z) + ")");
		}
	}
};
Interactor.rotOffset = 20 * 0.7; // see Rotator.js
Interactor.minXDist = 30;
Interactor.prototype.switchStickScale = function(svgP) {
    if (this.isParked) {
        this.toggleParked();
    }
    if (this.form === 0) {
        this.toStick();
    }
    else {
        var pixPerRes = Interactor.UNITS_PER_RESIDUE * this.stickZoom; // / this.ctrl.z;
        if (pixPerRes > 8) {
            this.stickZoom = 0.5;//this looks like a hack
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
    // remember following doesn't happen when you just call toStick();
    this.scale();
    this.setAllLineCoordinates();
};

Interactor.prototype.scale = function() {
    var protLength = (this.size) * Interactor.UNITS_PER_RESIDUE * this.stickZoom;
    if (this.form === 1) {
      	var labelTransform = d3.transform(this.labelSVG.getAttribute("transform"));
		var k = this.ctrl.svgElement.createSVGMatrix().rotate(labelTransform.rotate)
			.translate((-(((this.size / 2) * Interactor.UNITS_PER_RESIDUE * this.stickZoom) + 10)), Interactor.labelY);//.scale(z).translate(-c.x, -c.y);
		this.labelSVG.transform.baseVal.initialize(this.ctrl.svgElement.createSVGTransformFromMatrix(k));
	    
		d3.select(this.rectDomains).attr("transform", "scale(" + (this.stickZoom) + ", 1)");
		d3.select(this.circDomains).attr("transform", "scale(" + (this.stickZoom) + ", 1)");
		d3.select(this.peptides).attr("transform", "scale(" + (this.stickZoom) + ", 1)");
		
		d3.select(this.outline)
			.attr("width", protLength)
			.attr("x", this.getResXwithStickZoom(0.5));
			
		d3.select(this.highlight)
			.attr("width", protLength + 5)
			.attr("x", this.getResXwithStickZoom(0.5) - 2.5);
			
		//place rotators
		//this.mouseoverControls.place();
        this.lowerRotator.svg.setAttribute("transform", 
			"translate(" + (this.getResXwithStickZoom(0.5) - Interactor.rotOffset) + " 0)");
        this.upperRotator.svg.setAttribute("transform", 
			"translate(" + (this.getResXwithStickZoom(this.size  - 0 + 0.5) + Interactor.rotOffset) + " 0)");
        
        //internal links
        if (this.internalLink != null) {
            var resLinks = this.internalLink.residueLinks.values();
            var iLinkCount = resLinks.length;
            for (var l = 0; l < iLinkCount; l++) {
				var residueLink = resLinks[l];
				if (residueLink.shown) {
					var path = this.getResidueLinkPath(residueLink);
					d3.select(residueLink.line).attr("d", path);
					d3.select(residueLink.highlightLine).attr("d", path);
				}
            }
        }

       //linker modified peptides
        if (this.linkerModifications != null) {
            var mods = this.linkerModifications.residueLinks.values();
            var iModCount = mods.length;
            for (var m = 0; m < iModCount; m++) {
				var mod = mods[m];
				if (mod.shown) {
				   var path = this.getResidueLinkPath(mod);
				   d3.select(mod.line).attr("d", path);
				   d3.select(mod.highlightLine).attr("d", path);
				}
            }
        }
        this.setScaleGroup();
        this.setRotation(this.rotation); // places ticks and rotators
    }
};

Interactor.prototype.setScaleGroup = function() {
	this.ctrl.emptyElement(this.ticks);
	this.upperGroup.appendChild(this.ticks);//will do nothing if this.ticks already appended to this.uppergroup
    
    this.scaleLabels = new Array();
	var ScaleMajTick = 100;
	var ScaleTicksPerLabel = 2; // varies with scale?
	var pixPerRes = Interactor.UNITS_PER_RESIDUE * this.stickZoom; // / this.ctrl.z;
	var tick = -1;
	var lastTickX = this.getResXwithStickZoom(this.size);
	
	for (var res = 1; res <= this.size; res++) {
		if (res === 1 ||
				((res % 100 === 0) && (200 * pixPerRes > Interactor.minXDist)) ||
				((res % 10 === 0) && (20 * pixPerRes > Interactor.minXDist))
				) {
			var tx = this.getResXwithStickZoom(res);
			if (pixPerRes >= 8 || res !== 1) {
				tickAt(this, tx);
			}
			tick = (tick + 1) % ScaleTicksPerLabel;
			// does this one get a label?
			if (tick === 0) {// && tx > 20) {
				if ((tx + Interactor.minXDist) < lastTickX) {
					scaleLabelAt(this, res, tx);
				}
			}
		}
		if (pixPerRes > 8) {
			var seqLabelGroup = document.createElementNS(xiNET.svgns, "g");
			seqLabelGroup.setAttribute("transform", "translate(" + this.getResXwithStickZoom(res) + " " + 0 + ")");
			var seqLabel = document.createElementNS(xiNET.svgns, "text");
			seqLabel.setAttribute('font-family', "'Courier New', monospace");
			seqLabel.setAttribute('font-size', '10px');
			seqLabel.setAttribute("text-anchor", "middle");
			seqLabel.setAttribute("x", 0);//protein.getResXwithStickZoom(res));
			seqLabel.setAttribute("y", 3);
			seqLabel.appendChild(document.createTextNode(this.sequence[res - 1]));
			seqLabelGroup.appendChild(seqLabel);
			this.scaleLabels.push(seqLabel);
			this.ticks.appendChild(seqLabelGroup);
		}
	}
	scaleLabelAt(this, this.size, lastTickX);
	if (pixPerRes > 8) {
		tickAt(this, lastTickX);
	}
	
	function scaleLabelAt(self, text, tickX) {
		var scaleLabelGroup = document.createElementNS(xiNET.svgns, "g");
		scaleLabelGroup.setAttribute("transform", "translate(" + tickX + " " + 0 + ")");
		var scaleLabel = document.createElementNS(xiNET.svgns, "text");
		scaleLabel.setAttribute("class", "protein xlv_text proteinLabel");
		scaleLabel.setAttribute('font-family', "'Courier New', monospace");
		scaleLabel.setAttribute('font-size', '14');
		scaleLabel.setAttribute("text-anchor", "middle");
		scaleLabel.setAttribute("x", 0);
		scaleLabel.setAttribute("y", Interactor.STICKHEIGHT + 4);
		scaleLabel.appendChild(document.createTextNode(text));
		scaleLabelGroup.appendChild(scaleLabel);
		self.scaleLabels.push(scaleLabel);
		self.ticks.appendChild(scaleLabelGroup);
	}

	function tickAt(self, tickX) {
		var tick = document.createElementNS(xiNET.svgns, "line");
		tick.setAttribute("x1", tickX);
		tick.setAttribute("y1", 5);
		tick.setAttribute("x2", tickX);
		tick.setAttribute("y2", 10);
		tick.setAttribute("stroke", "black");
		self.ticks.appendChild(tick);
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
    if (this.busy !== true) {
		if (this.isParked === true && bool == false) {
			this.isParked = false;
			if (this.form === 0) {
				this.toBlob(svgP);
			}
			else {
				this.toStick();
			}
			this.scale();
			this.setAllLineCoordinates();
		}
		else if (this.isParked === false && bool == true) {
			this.isParked = true;
			this.toParked(svgP);
		}
	}
};

Interactor.prototype.setForm = function(form, svgP) {
    if (this.busy !== true) {
		if (this.isParked) {
			this.setParked(false);
		}
		else
		{
			if (form == 1) {
				this.toStick();
			}
			else {
				this.toBlob(svgP);
			}
		}
	}
};

Interactor.prototype.toBlob = function(svgP) {
	if (this.form === 1){ //this is causing from parked it below to run when tool opens 
		this.toCircle(svgP);
		var r = this.getBlobRadius();
		
		var self = this;
		d3.select(this.outline).transition()
			.attr("stroke-opacity", 1).attr("fill-opacity", 1)
			.attr("fill", "#ffffff")
			.attr("x", -r).attr("y", -r)
			.attr("width", r * 2).attr("height", r * 2)
			.attr("rx", r).attr("ry", r)
			.duration(Interactor.transitionTime);

		d3.select(this.rectDomains).transition().attr("opacity", 0)
			.attr("transform", "scale(1, 1)")
			.duration(Interactor.transitionTime);
	}
	else {//from parked
		d3.select(this.outline).transition()
			.attr("stroke-opacity", 1).attr("fill-opacity", 1)
			.attr("fill", "#ffffff")
			.duration(Interactor.transitionTime);
		this.checkLinks();
	}
	d3.select(this.circDomains).transition().attr("opacity", 1)
		.attr("transform", "scale(1, 1)")
		.duration(Interactor.transitionTime);
};

Interactor.prototype.toCircle = function(svgP) {// both 'blob' and 'parked' form are circles   
	this.busy = true;
	//~ this.removePeptides();
	//this.mouseoverControls.remove();
	this.upperGroup.removeChild(this.lowerRotator.svg);
	this.upperGroup.removeChild(this.upperRotator.svg);  
			    
    var protLength = this.size * Interactor.UNITS_PER_RESIDUE * this.stickZoom;		
	var r = this.getBlobRadius();
	
	//~ var lengthInterpol = d3.interpolate(protLength, (2 * r));
	var stickZoomInterpol = d3.interpolate(this.stickZoom, 0);
	var rotationInterpol = d3.interpolate((this.rotation > 180)? this.rotation - 360 : this.rotation, 0);	
	var labelTranslateInterpol = d3.interpolate(-(((this.size / 2) * Interactor.UNITS_PER_RESIDUE * this.stickZoom) + 10), -(r + 5));
	
	var xInterpol = null, yInterpol = null;
	if (typeof svgP !== 'undefined' && svgP !== null) {
		xInterpol = d3.interpolate(this.x, svgP.x);
		yInterpol = d3.interpolate(this.y, svgP.y);
	}	
	
	var self = this;
	d3.select(this.ticks).transition().attr("opacity", 0).duration(Interactor.transitionTime / 4)
				.each("end", 
					function () {
						self.upperGroup.removeChild(self.ticks);
					}
				);
	
	d3.select(this.highlight).transition()
		.attr("width", (r * 2) + 5).attr("height", (r * 2) + 5)
		.attr("x", -r - 2.5).attr("y", -r - 2.5)
		.attr("rx", r + 2.5).attr("ry", r + 2.5)
		.duration(Interactor.transitionTime);		   

	d3.select(this.upperGroup).transition().attr("transform", 
			"translate(" + this.x + " " + this.y + ")" 
			+ " scale(" + (this.ctrl.z) + ") " + "rotate(" + this.rotation + ")")
			.duration(Interactor.transitionTime);
	
	d3.select(this.lowerGroup).transition().attr("transform", 
		"translate(" + this.x + " " + this.y + ")" 
			+ " scale(" + (this.ctrl.z) + ") " + "rotate(" + this.rotation + ")")
			.duration(Interactor.transitionTime);
	
	 if (this.internalLink != null) {
		var resLinks = this.internalLink.sequenceLinks.values();
		var resLinkCount = resLinks.length;
		for (var rl = 0; rl < resLinkCount; rl++) {
			var residueLink = resLinks[rl];
			if (residueLink.intra === true && residueLink.shown) {
						var selectLine = d3.select(residueLink.line);
						selectLine.attr("d",this.getResidueLinkPath(residueLink));
						selectLine.transition().attr("d",this.getAggregateSelfLinkPath())
							.duration(Interactor.transitionTime);	
						var highlightLine = d3.select(residueLink.highlightLine);
						highlightLine.attr("d",this.getResidueLinkPath(residueLink));
						highlightLine.transition().attr("d",this.getAggregateSelfLinkPath())
							.duration(Interactor.transitionTime);					
			}
		}
	}	
	
	//linker modified peptides
	if (this.linkerModifications != null) {
		var mods = this.linkerModifications.residueLinks.values();
		var iModCount = mods.length;
		for (var m = 0; m < iModCount; m++) {
			var mod = mods[m];
			if (mod.shown) {
				var selectLine = d3.select(mod.line);
				selectLine.attr("fill", "none");
				selectLine.attr("d", "M 0,0 L 0,0");
			}
		}
	}
	
	var self = this;
	if (typeof this.annotations !== 'undefined') {
		var annots = this.annotations;
		var ca = annots.length;
		for (var a = 0; a < ca; a++) {
			//TODO: structure of this is not ideal...
			var anno = annots[a].anno;
			var pieSlice = annots[a].pieSlice;
			var rectDomain = annots[a].rect;

			d3.select(pieSlice).transition().attr("d", this.getAnnotationPieSliceApproximatePath(anno))
				.duration(Interactor.transitionTime).each("end", 
					function () {
						//d3.select(this).attr("d", self.getAnnotationPieSliceArcPath(anno));//mistake - this doesn't work 
						//this is a mess...
						for (var b = 0; b < ca; b++) {
							var annoB = annots[b];
							if (this === annoB.pieSlice){
								d3.select(this).attr("d", self.getAnnotationPieSliceArcPath(annoB.anno));
							}
						}
					}
				);
			d3.select(rectDomain).transition().attr("d", this.getAnnotationPieSliceApproximatePath(anno))
				.duration(Interactor.transitionTime);
		}
	}

	var originalStickZoom = this.stickZoom;
	var originalRotation = this.rotation;
	var cubicInOut = d3.ease('cubic-in-out');
	d3.timer(function(elapsed) {
	  return update(elapsed / Interactor.transitionTime);
	});
 
	// update(1);
 
	function update(interp) {
		var labelTransform = d3.transform(self.labelSVG.getAttribute("transform"));
		var k = self.ctrl.svgElement.createSVGMatrix().rotate(labelTransform.rotate).translate(labelTranslateInterpol(cubicInOut(interp)), Interactor.labelY);//.scale(z).translate(-c.x, -c.y);
		self.labelSVG.transform.baseVal.initialize(self.ctrl.svgElement.createSVGTransformFromMatrix(k));
		
		if (xInterpol !== null){
			self.setPosition(xInterpol(cubicInOut(interp)), yInterpol(cubicInOut(interp)));
		}
		
	   	var rot = rotationInterpol(cubicInOut(interp));
		self.setRotation(rot);
	 
		self.stickZoom = stickZoomInterpol(cubicInOut(interp))
		self.setAllLineCoordinates();
		
		if (interp ===  1){ // finished - tidy up
			var links = self.links.values();
			var c = links.length;
			for (var l = 0; l < c; l++) {
				var link = links[l];
				//~ if (link.toInteractor === null || (link.getFromInteractor() === self && link.getToInteractor().form === 0) ||
						//~ (link.getToInteractor() === self && link.getFromInteractor().form === 0) ||
						//~ (link.getToInteractor() == link.getFromInteractor()))
				if (link.sequenceLinks) {
					// swap links - out with the old
					var resLinks = link.sequenceLinks.values();
					var resLinkCount = resLinks.length; 
					for (var rl = 0; rl < resLinkCount; rl++) {
						var resLink = resLinks[rl];
							resLink.hide();
					}
				}
			}
			//bring in new 
			self.form = 0;
			self.checkLinks();
			self.stickZoom = originalStickZoom;
			self.rotation = originalRotation;
			self.busy = false;
			return true;
		} else if (interp > 1){
			return update(1);
		} else {
			return false;
		}
	}
};

Interactor.prototype.toParked = function(svgP) {   
    var c = this.links.values().length;
    for (var l = 0; l < c; l++) {
        var link = this.links.values()[l];
        //out with the old (i.e. all links)
        link.hide();
		var resLinks = link.sequenceLinks.values();
		var resLinkCount = resLinks.length; 
		for (var rl = 0; rl < resLinkCount; rl++) {
			var resLink = resLinks[rl];
				resLink.hide();
		}
    }       
    
    if (this.form === 1){
		this.toCircle(svgP);
		var r = this.getBlobRadius();
		d3.select(this.outline).transition()
			.attr("stroke-opacity", 0).attr("fill-opacity", 1)
			.attr("fill", "#EEEEEE")
			.attr("x", -r).attr("y", -r)
			.attr("width", r * 2).attr("height", r * 2)
			.attr("rx", r).attr("ry", r)
			.duration(Interactor.transitionTime);	
		d3.select(this.rectDomains).transition().attr("opacity", 0)
			.attr("transform", "scale(1, 1)")
			.duration(Interactor.transitionTime);
	}
	else {
		d3.select(this.outline).transition()
			.attr("stroke-opacity", 0)
			.attr("fill", "#EEEEEE")
			.duration(Interactor.transitionTime);	
		d3.select(this.circDomains).transition().attr("opacity", 0)
			.attr("transform", "scale(1, 1)")
			.duration(Interactor.transitionTime);	
	}
};

Interactor.prototype.toStick = function() {
	this.busy = true;
    this.form = 1; 
   
    //place rotators
	//~ this.mouseoverControls.add();
	this.upperGroup.appendChild(this.lowerRotator.svg);
	this.upperGroup.appendChild(this.upperRotator.svg);  
	this.lowerRotator.svg.setAttribute("transform", 
		"translate(" + (this.getResXwithStickZoom(0.5) - Interactor.rotOffset) + " 0)");
	this.upperRotator.svg.setAttribute("transform", 
		"translate(" + (this.getResXwithStickZoom(this.size - 0 + 0.5) + Interactor.rotOffset) + " 0)");
   //remove prot-prot links - would it be better if checkLinks did this? - think not
	var c = this.links.values().length;
	for (var l = 0; l < c; l++) {
		var link = this.links.values()[l];
		//out with the old
		if (link.shown) {
			link.hide();
		}
	}
	 			   
    var protLength = this.size * Interactor.UNITS_PER_RESIDUE * this.stickZoom;		
	var r = this.getBlobRadius();
	
 	var lengthInterpol = d3.interpolate((2 * r), protLength);
	var stickZoomInterpol = d3.interpolate(0, this.stickZoom);
	var rotationInterpol = d3.interpolate(0, (this.rotation > 180)? this.rotation - 360 : this.rotation);	
	var labelTranslateInterpol = d3.interpolate(-(r + 5), -(((this.size / 2) * Interactor.UNITS_PER_RESIDUE * this.stickZoom) + 10));
  
    var origStickZoom = this.stickZoom;	
	this.stickZoom = 0;
    this.checkLinks();
	this.stickZoom = origStickZoom;
 	
	d3.select(this.circDomains).transition().attr("opacity", 0)
		.attr("transform", "scale(" + this.stickZoom + ", 1)")
		.duration(Interactor.transitionTime);
	d3.select(this.rectDomains).transition().attr("opacity", 1)
		.attr("transform", "scale(" + this.stickZoom + ", 1)")
		.duration(Interactor.transitionTime);
				
	d3.select(this.outline).transition().attr("stroke-opacity", 1)
	.attr("fill-opacity",  0)
		.attr("fill", "#FFFFFF")
		.attr("height", Interactor.STICKHEIGHT)
		.attr("y",  -Interactor.STICKHEIGHT / 2)
		.attr("rx", 0).attr("ry", 0)
		.duration(Interactor.transitionTime);		

	d3.select(this.highlight).transition()
		.attr("width", protLength + 5).attr("height", Interactor.STICKHEIGHT + 5)
		.attr("x", this.getResXwithStickZoom(0.5) - 2.5).attr("y", (-Interactor.STICKHEIGHT / 2) - 2.5)
		.attr("rx", 0).attr("ry", 0)
		.duration(Interactor.transitionTime);		   
	
	 if (this.internalLink != null) {
		var resLinks = this.internalLink.sequenceLinks.values();
		var resLinkCount = resLinks.length;
		for (var rl = 0; rl < resLinkCount; rl++) {
			var residueLink = resLinks[rl];			
			if (residueLink.shown) {
				d3.select(residueLink.line).attr("d",this.getAggregateSelfLinkPath());
				d3.select(residueLink.line).transition().attr("d",this.getResidueLinkPath(residueLink))
					.duration(Interactor.transitionTime);					
				d3.select(residueLink.highlightLine).attr("d",this.getAggregateSelfLinkPath());
				d3.select(residueLink.highlightLine).transition().attr("d",this.getResidueLinkPath(residueLink))
					.duration(Interactor.transitionTime);					
			}
		}
	}	

   //linker modified peptides
	if (this.linkerModifications != null) {
		var mods = this.linkerModifications.residueLinks.values();
		var iModCount = mods.length;
		for (var m = 0; m < iModCount; m++) {
			var mod = mods[m];
			if (mod.shown) {
				var path = this.getResidueLinkPath(mod);
				d3.select(mod.line).attr("d","M 0,0 L 0,0 L 0,0 L 0,0");
				d3.select(mod.line).transition().attr("d",path)
					.duration(Interactor.transitionTime);					
				d3.select(mod.highlightLine).attr("d","M 0,0 L 0,0");
				d3.select(mod.highlightLine).transition().attr("d",path)
					.duration(Interactor.transitionTime);	
			}
		}
	}	
	
	if (typeof this.annotations !== 'undefined') {
		var bottom = Interactor.STICKHEIGHT / 2, top = -Interactor.STICKHEIGHT / 2;
		var annots = this.annotations;
		var ca = annots.length;
		for (var a = 0; a < ca; a++) {
			var anno = annots[a].anno;
			var pieSlice = annots[a].pieSlice;
			var rectDomain = annots[a].rect;

			pieSlice.setAttribute("d", this.getAnnotationPieSliceApproximatePath(anno));
						
			d3.select(pieSlice).transition().attr("d", this.getAnnotationRectPath(anno))
				.duration(Interactor.transitionTime);
			d3.select(rectDomain).transition().attr("d", this.getAnnotationRectPath(anno))
				.duration(Interactor.transitionTime);
		}
	}
	
	var self = this;
	var cubicInOut = d3.ease('cubic-in-out');
	d3.timer(function(elapsed) {
	  return update(elapsed / Interactor.transitionTime);
	});
 
	//~ update(1);
 
	function update(interp) {
		var labelTransform = d3.transform(self.labelSVG.getAttribute("transform"));
		var k = self.ctrl.svgElement.createSVGMatrix().rotate(labelTransform.rotate).translate(labelTranslateInterpol(cubicInOut(interp)), Interactor.labelY);//.scale(z).translate(-c.x, -c.y);
		self.labelSVG.transform.baseVal.initialize(self.ctrl.svgElement.createSVGTransformFromMatrix(k));
	   
	   	var rot = rotationInterpol(cubicInOut(interp));
		self.setRotation(rot);
	 
		var currentLength = lengthInterpol(cubicInOut(interp));
		d3.select(self.outline).attr("width", currentLength).attr("x", - (currentLength / 2) + (0.5 * Interactor.UNITS_PER_RESIDUE * self.stickZoom));
		self.stickZoom = stickZoomInterpol(cubicInOut(interp))
		self.setAllLineCoordinates();
		
		if (interp ===  1){ // finished - tidy up
			self.busy = false;
			return true;
		} else if (interp > 1){
			return update(1);
		} else {
			return false;
		}
	}

	d3.select(this.ticks).attr("opacity", 0);
    this.setScaleGroup();
    d3.select(this.ticks).transition().attr("opacity", 1)
		.delay(Interactor.transitionTime * 0.8).duration(Interactor.transitionTime / 2);
};

Interactor.prototype.getAggregateSelfLinkPath = function() {
	var intraR = this.getBlobRadius() + 7;
	var sectorSize = 45;
	var arcStart = Interactor.trig(intraR, 25 + sectorSize);
	var arcEnd = Interactor.trig(intraR, -25 + sectorSize);
	var cp1 = Interactor.trig(intraR, 40 + sectorSize);
	var cp2 = Interactor.trig(intraR, -40 + sectorSize);
	return 'M 0,0 ' 
		+ 'Q ' + cp1.x + ',' + -cp1.y + ' ' + arcStart.x + ',' + -arcStart.y
		+ ' A ' + intraR + ' ' + intraR + ' 0 0 1 ' + arcEnd.x + ',' + -arcEnd.y
		+ ' Q ' + cp2.x + ',' + -cp2.y + ' 0,0';
}

Interactor.prototype.getResidueLinkPath = function(residueLink) {			
	var x1 = this.getResXwithStickZoom(residueLink.fromResidue);
	var baseLine = 0;
	if (Interactor.UNITS_PER_RESIDUE * this.stickZoom >= 8){
		baseLine = -5;
	}
	//~ if (isNaN(parseFloat(residueLink.toResidue))){ //linker modified peptide
		//~ if (residueLink.ambig === false){
			//~ residueLink.line.setAttribute("fill", xiNET.defaultSelfLinkColour.toRGB());
		//~ }
		//~ var p1 = [x1, 26];
		//~ var p3 = [x1, 18];
		//~ var p2 = Interactor.rotatePointAboutPoint(p1, p3, 60);
		//~ baseLine = baseLine * -1;
		//~ return "M " + x1 + "," + baseLine 
			//~ + " L " + p1[0] + "," + p1[1] 
			//~ + " L " +  p2[0] + "," + p2[1]
			//~ + " L " + p3[0] + "," + p3[1];
	//~ }
	//~ else {
		var x2 = this.getResXwithStickZoom(residueLink.toResidue);
		var height, cp1, cp2, arcStart, arcEnd, arcRadius;
		arcRadius = (Math.abs(x2 - x1)) / 2;
		var height = -((Interactor.STICKHEIGHT / 2) + 3);
		if (arcRadius < 15){
			height = -28 + arcRadius;
		}
		
		var start = [x1, baseLine];
		var end = [x2, baseLine];
		
		var angle;
		if (residueLink.intraMolecular === true){
			
			var curveMidX = x1 + ((x2 - x1) / 2);
			arcStart = [ curveMidX, height - arcRadius];
			arcEnd =  [ curveMidX, height - arcRadius];
			cp1 = [ curveMidX, height - arcRadius];
			cp2 =  [ curveMidX, height - arcRadius];
			//flip
			//~ start[1] = start[1] * -1;
			//~ cp1[1] = cp1[1] * -1;
			//~ arcStart[1] = arcStart[1] * -1;
			//~ arcEnd[1] = arcEnd[1] * -1;
			//~ cp2[1] = cp2[1] * -1;
			//~ end[1] = end[1] * -1;
		}
		else if (residueLink.hd){	
			var curveMidX = x1 + ((x2 - x1) / 2);
			arcStart = [curveMidX, height - arcRadius];
			arcEnd = [curveMidX, height - arcRadius];
			cp1 = Interactor.rotatePointAboutPoint([x1, height - arcRadius], start, -20);
			cp2 = Interactor.rotatePointAboutPoint([x2, height - arcRadius], end, 20);
		}
		else {	
			cp1 = [x1, height];
			cp2 = [x2, baseLine];
			arcStart = [x1, height];
			arcEnd =  [x2, height];
		}		
		
		return " M " + start[0] + "," + start[1]	 
			+ " Q "  + cp1[0] + ',' + cp1[1] + ' ' + arcStart[0] + "," + arcStart[1]
			+ " A " + arcRadius + "," + arcRadius + "  0 0 1 " + arcEnd[0]  + "," + arcEnd[1]
			+ " Q "+ cp2[0] + ',' + cp2[1] +  " "  + end[0] + "," + end[1];
	//~ }
}

Interactor.prototype.getResXwithStickZoom = function(r) {
	if (isNaN(r) || r === '?' || r === 'n') {
        return ((0 - (this.size/2)) * Interactor.UNITS_PER_RESIDUE * this.stickZoom) - 8;// ;
    }
    return (r - (this.size/2)) * Interactor.UNITS_PER_RESIDUE * this.stickZoom;
 };

//calculate the  coordinates of a residue (relative to this.ctrl.container)
Interactor.prototype.getResidueCoordinates = function(r, yOff) {
    if (Interactor.UNITS_PER_RESIDUE === undefined)
        alert("Error: Interactor.UNITS_PER_RESIDUE is undefined");
    if (r === undefined)
        alert("Error: residue number is undefined");
  //  console.log(r * 1);
    var x = this.getResXwithStickZoom(r * 1) * this.ctrl.z;
    var y = 0;
    if (x !== 0) {
        var l = Math.abs(x);
        var a = Math.acos(x / l);
        var rotRad = (this.rotation / 360) * Math.PI * 2;
        x = l * Math.cos(rotRad + a);
        y = l * Math.sin(rotRad + a);
        if (typeof yOff !== 'undefined') {
            x += yOff * this.ctrl.z * Math.cos(rotRad + (Math.PI / 2));
            y += yOff * this.ctrl.z * Math.sin(rotRad + (Math.PI / 2));
        }
    }
    else {
        y = yOff;
    }
    x = x + this.x;
    y = y + this.y;
    if (isNaN(y)){
		console.log([x, y]);
	}
    return [x, y];
};

Interactor.rotatePointAboutPoint = function(p, o, theta) {
	theta = (theta / 360) * Math.PI * 2;
	var rx = Math.cos(theta) * (p[0]-o[0]) - Math.sin(theta) * (p[1]-o[1]) + o[0];
	var ry = Math.sin(theta) * (p[0]-o[0]) + Math.cos(theta) * (p[1]-o[1]) + o[1];
	return [rx, ry];
}

Interactor.prototype.checkLinks = function() {
    var links = this.links.values();
    var c = links.length;
    for (var l = 0; l < c; l++) {
        links[l].check();
    }
}

// update all lines (e.g after a move)
Interactor.prototype.setAllLineCoordinates = function() {
    var links = this.links.values();
    var c = links.length;
    for (var l = 0; l < c; l++) {
        var link = links[l];
        if (link.fromInteractor){//TEMP
			if (link.fromInteractor.form === 0 && link.toInteractor.form === 0) {
				link.setLinkCoordinates(this);
			}
			else {
				var resLinks = link.sequenceLinks.values();
				var resLinkCount = resLinks.length;
				for (var rl = 0; rl < resLinkCount; rl++) {
					resLinks[rl].setLinkCoordinates(this);
				}
			}
		} else {
			link.setLinkCoordinates(this);
		}
    }
};

Interactor.prototype.countExternalLinks = function() {
    if (this.isParked) {
        return 0;
    }
    var countExternal = 0;
    var c = this.links.keys().length;
    for (var l = 0; l < c; l++) {
        var link = this.links.values()[l];
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
        this.ctrl.subgraphs.push(subgraph); 
    }
    return this.subgraph;
};
Interactor.prototype.addConnectedNodes = function(subgraph) {
    //~ var count = this.links.values().length;
    //~ for (var i = 0; i < count; i++) {
        //~ var externalLink = this.links.values()[i];
        //~ if (externalLink.isBinary) {
			//if (externalLink.check() === true) {
				//~ if (!subgraph.links.has(externalLink.id)) {
					//~ subgraph.links.set(externalLink.id, externalLink);
					//~ var otherEnd;
					//~ if (externalLink.fromInteractor === this) {
						//~ otherEnd = externalLink.toInteractor;
					//~ }
					//~ else {
						//~ otherEnd = externalLink.fromInteractor;
					//~ }
					//~ if (!subgraph.nodes.has(otherEnd.id)) {
						//~ subgraph.nodes.set(otherEnd.id, otherEnd);
						//~ //                  console.log(otherEnd.id);
						//~ //            console.log(JSON.stringify(subgraph.nodes.keys()));
						//~ otherEnd.subgraph = subgraph;
						//~ otherEnd.addConnectedNodes(subgraph);
					//~ }
				//~ }
			//}
		//~ }
    //~ }
    return subgraph;
};
