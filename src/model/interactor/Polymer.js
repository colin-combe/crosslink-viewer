//    	xiNET Interaction Viewer
//    	Copyright 2013 Rappsilber Laboratory
//
//    	This product includes software developed at
//    	the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//		
//		Polymer.js		
//
//		authors: Lutz Fischer, Colin Combe

"use strict";

var Interactor = require('./Interactor');
var Rotator = require('../../controller/Rotator');
var Config = require('../../controller/Config');

Polymer.STICKHEIGHT = 20;//height of stick in pixels
Polymer.MAXSIZE = 0; // residue count of longest sequence
Polymer.UNITS_PER_RESIDUE = 1; //changed during init (calculated on basis of MAXSIZE)
Polymer.transitionTime = 650;

Polymer.prototype = new Interactor();

function Polymer(id, xlvController, json) {
    this.id = id; // id may not be accession (multiple Segments with same accesssion)
    this.ctrl = xlvController;
    this.json = json;  
    //~ this.features = d3.map();  
    //links
    this.naryLinks = d3.map();
    this.binaryLinks = d3.map();
    this.selfLink = null;
    this.sequenceLinks = d3.map();
    this.selfLink = null;
}

Polymer.prototype.initInteractor = function(sequence, name, description, size)
{
    this.accession = this.json.identifier.id;
    this.name = name;
    if (this.json.label.indexOf('_') !== -1) { //take out organism suffix
		this.json.label.substring(0, this.json.label.indexOf('_'));
	}
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
    if (Polymer.MAXSIZE < this.size) {
        Polymer.MAXSIZE = this.size;
    }

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
    this.lowerGroup = document.createElementNS(Config.svgns, "g");
    this.lowerGroup.setAttribute("class", "protein lowerGroup");
 	
 	//make highlight
    this.highlight = document.createElementNS(Config.svgns, "rect");
    //invariant attributes
    this.highlight.setAttribute("stroke", Config.highlightColour);
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
    this.rectDomains = document.createElementNS(Config.svgns, "g");
    this.rectDomains.setAttribute("opacity", "0");
    this.lowerGroup.appendChild(this.rectDomains);
    
    this.peptides = document.createElementNS(Config.svgns, "g");
	this.lowerGroup.appendChild(this.peptides);
	
	/*
     * Upper group
     * svg group for elements that appear above links
     */
     
    this.upperGroup = document.createElementNS(Config.svgns, "g");
    this.upperGroup.setAttribute("class", "protein upperGroup");
    
    //svg groups for self links
    this.intraLinksHighlights = document.createElementNS(Config.svgns, "g");
    this.intraLinks = document.createElementNS(Config.svgns, "g");
    this.upperGroup.appendChild(this.intraLinksHighlights);
	this.upperGroup.appendChild(this.intraLinks);    
    
    //create label - we will move this svg element around when protein form changes
    this.labelSVG = document.createElementNS(Config.svgns, "text");
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
    this.ticks = document.createElementNS(Config.svgns, "g");
     
	//make outline
    //http://stackoverflow.com/questions/17437408/how-do-i-change-a-circle-to-a-square-using-d3
	this.outline = document.createElementNS(Config.svgns, "rect");
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
	this.circDomains = document.createElementNS(Config.svgns, "g");
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

Polymer.prototype.getBlobRadius = function() {
    return Math.sqrt(this.size / 3 / Math.PI);
};

Polymer.prototype.setRotation = function(angle) {
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

Polymer.rotOffset = 20 * 0.7; // see Rotator.js
Polymer.minXDist = 30;
Polymer.prototype.switchStickScale = function(svgP) {
    if (this.isParked) {
        this.toggleParked();
    }
    if (this.form === 0) {
        this.toStick();
    }
    else {
        var pixPerRes = Polymer.UNITS_PER_RESIDUE * this.stickZoom; // / this.ctrl.z;
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
    this.setAllLinkCoordinates();
};

Polymer.prototype.scale = function() {
    var protLength = (this.size) * Polymer.UNITS_PER_RESIDUE * this.stickZoom;
    if (this.form === 1) {
      	var labelTransform = d3.transform(this.labelSVG.getAttribute("transform"));
		var k = this.ctrl.svgElement.createSVGMatrix().rotate(labelTransform.rotate)
			.translate((-(((this.size / 2) * Polymer.UNITS_PER_RESIDUE * this.stickZoom) + 10)), Interactor.labelY);//.scale(z).translate(-c.x, -c.y);
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
			"translate(" + (this.getResXwithStickZoom(0.5) - Polymer.rotOffset) + " 0)");
        this.upperRotator.svg.setAttribute("transform", 
			"translate(" + (this.getResXwithStickZoom(this.size  - 0 + 0.5) + Polymer.rotOffset) + " 0)");
        
        this.setScaleGroup();
        this.setRotation(this.rotation); // places ticks and rotators
    }
};

Polymer.prototype.setScaleGroup = function() {
	this.ctrl.emptyElement(this.ticks);
	this.upperGroup.appendChild(this.ticks);//will do nothing if this.ticks already appended to this.uppergroup
    
    this.scaleLabels = new Array();
	var ScaleMajTick = 100;
	var ScaleTicksPerLabel = 2; // varies with scale?
	var pixPerRes = Polymer.UNITS_PER_RESIDUE * this.stickZoom; // / this.ctrl.z;
	var tick = -1;
	var lastTickX = this.getResXwithStickZoom(this.size);
	
	for (var res = 1; res <= this.size; res++) {
		if (res === 1 ||
				((res % 100 === 0) && (200 * pixPerRes > Polymer.minXDist)) ||
				((res % 10 === 0) && (20 * pixPerRes > Polymer.minXDist))
				) {
			var tx = this.getResXwithStickZoom(res);
			if (pixPerRes >= 8 || res !== 1) {
				tickAt(this, tx);
			}
			tick = (tick + 1) % ScaleTicksPerLabel;
			// does this one get a label?
			if (tick === 0) {// && tx > 20) {
				if ((tx + Polymer.minXDist) < lastTickX) {
					scaleLabelAt(this, res, tx);
				}
			}
		}
		if (pixPerRes > 8) {
			var seqLabelGroup = document.createElementNS(Config.svgns, "g");
			seqLabelGroup.setAttribute("transform", "translate(" + this.getResXwithStickZoom(res) + " " + 0 + ")");
			var seqLabel = document.createElementNS(Config.svgns, "text");
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
		var scaleLabelGroup = document.createElementNS(Config.svgns, "g");
		scaleLabelGroup.setAttribute("transform", "translate(" + tickX + " " + 0 + ")");
		var scaleLabel = document.createElementNS(Config.svgns, "text");
		scaleLabel.setAttribute("class", "protein xlv_text proteinLabel");
		scaleLabel.setAttribute('font-family', "'Courier New', monospace");
		scaleLabel.setAttribute('font-size', '14');
		scaleLabel.setAttribute("text-anchor", "middle");
		scaleLabel.setAttribute("x", 0);
		scaleLabel.setAttribute("y", Polymer.STICKHEIGHT + 4);
		scaleLabel.appendChild(document.createTextNode(text));
		scaleLabelGroup.appendChild(scaleLabel);
		self.scaleLabels.push(scaleLabel);
		self.ticks.appendChild(scaleLabelGroup);
	}

	function tickAt(self, tickX) {
		var tick = document.createElementNS(Config.svgns, "line");
		tick.setAttribute("x1", tickX);
		tick.setAttribute("y1", 5);
		tick.setAttribute("x2", tickX);
		tick.setAttribute("y2", 10);
		tick.setAttribute("stroke", "black");
		self.ticks.appendChild(tick);
	}
};

Polymer.prototype.setForm = function(form, svgP) {
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

Polymer.prototype.toBlob = function(svgP) {
	if (this.form === 1){ 
		this.toCircle(svgP);
		var r = this.getBlobRadius();
		
		var self = this;
		d3.select(this.outline).transition()
			.attr("stroke-opacity", 1).attr("fill-opacity", 1)
			.attr("fill", "#ffffff")
			.attr("x", -r).attr("y", -r)
			.attr("width", r * 2).attr("height", r * 2)
			.attr("rx", r).attr("ry", r)
			.duration(Polymer.transitionTime);

		d3.select(this.rectDomains).transition().attr("opacity", 0)
			.attr("transform", "scale(1, 1)")
			.duration(Polymer.transitionTime);
	}
	else {//from parked
		d3.select(this.outline).transition()
			.attr("stroke-opacity", 1).attr("fill-opacity", 1)
			.attr("fill", "#ffffff")
			.duration(Polymer.transitionTime);
		this.checkLinks();
	}
	d3.select(this.circDomains).transition().attr("opacity", 1)
		.attr("transform", "scale(1, 1)")
		.duration(Polymer.transitionTime);
};

Polymer.prototype.toCircle = function(svgP) {// both 'blob' and 'parked' form are circles   
	this.busy = true;
	this.upperGroup.removeChild(this.lowerRotator.svg);
	this.upperGroup.removeChild(this.upperRotator.svg);  
			    
    var protLength = this.size * Polymer.UNITS_PER_RESIDUE * this.stickZoom;		
	var r = this.getBlobRadius();
	
	var stickZoomInterpol = d3.interpolate(this.stickZoom, 0);
	var rotationInterpol = d3.interpolate((this.rotation > 180)? this.rotation - 360 : this.rotation, 0);	
	var labelTranslateInterpol = d3.interpolate(-(((this.size / 2) * Polymer.UNITS_PER_RESIDUE * this.stickZoom) + 10), -(r + 5));
	
	var xInterpol = null, yInterpol = null;
	if (typeof svgP !== 'undefined' && svgP !== null) {
		xInterpol = d3.interpolate(this.x, svgP.x);
		yInterpol = d3.interpolate(this.y, svgP.y);
	}	
	
	var self = this;
	d3.select(this.ticks).transition().attr("opacity", 0).duration(Polymer.transitionTime / 4)
				.each("end", 
					function () {
						self.upperGroup.removeChild(self.ticks);
					}
				);
	
	d3.select(this.highlight).transition()
		.attr("width", (r * 2) + 5).attr("height", (r * 2) + 5)
		.attr("x", -r - 2.5).attr("y", -r - 2.5)
		.attr("rx", r + 2.5).attr("ry", r + 2.5)
		.duration(Polymer.transitionTime);		   

	d3.select(this.upperGroup).transition().attr("transform", 
			"translate(" + this.x + " " + this.y + ")" 
			+ " scale(" + (this.ctrl.z) + ") " + "rotate(" + this.rotation + ")")
			.duration(Polymer.transitionTime);
	
	d3.select(this.lowerGroup).transition().attr("transform", 
		"translate(" + this.x + " " + this.y + ")" 
			+ " scale(" + (this.ctrl.z) + ") " + "rotate(" + this.rotation + ")")
			.duration(Polymer.transitionTime);
		
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
				.duration(Polymer.transitionTime).each("end", 
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
				.duration(Polymer.transitionTime);
		}
	}

	var originalStickZoom = this.stickZoom;
	var originalRotation = this.rotation;
	var cubicInOut = d3.ease('cubic-in-out');
	d3.timer(function(elapsed) {
	  return update(elapsed / Polymer.transitionTime);
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
		self.setAllLinkCoordinates();
		
		if (interp ===  1){ // finished - tidy up
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

Polymer.prototype.toStick = function() {
	this.busy = true;
    this.form = 1; 
   
    //place rotators
	//~ this.mouseoverControls.add();
	this.upperGroup.appendChild(this.lowerRotator.svg);
	this.upperGroup.appendChild(this.upperRotator.svg);  
	this.lowerRotator.svg.setAttribute("transform", 
		"translate(" + (this.getResXwithStickZoom(0.5) - Polymer.rotOffset) + " 0)");
	this.upperRotator.svg.setAttribute("transform", 
		"translate(" + (this.getResXwithStickZoom(this.size - 0 + 0.5) + Polymer.rotOffset) + " 0)");
	//remove prot-prot links - would it be better if checkLinks did this? - think not
	var c = this.binaryLinks.values().length;
	for (var l = 0; l < c; l++) {
		var link = this.binaryLinks.values()[l];
		//out with the old
		if (link.shown) {
			link.hide();
		}
	}
	 			   
    var protLength = this.size * Polymer.UNITS_PER_RESIDUE * this.stickZoom;		
	var r = this.getBlobRadius();
	
 	var lengthInterpol = d3.interpolate((2 * r), protLength);
	var stickZoomInterpol = d3.interpolate(0, this.stickZoom);
	var rotationInterpol = d3.interpolate(0, (this.rotation > 180)? this.rotation - 360 : this.rotation);	
	var labelTranslateInterpol = d3.interpolate(-(r + 5), -(((this.size / 2) * Polymer.UNITS_PER_RESIDUE * this.stickZoom) + 10));
  
    var origStickZoom = this.stickZoom;	
	this.stickZoom = 0;
    this.checkLinks(this.binaryLinks);
	this.checkLinks(this.selfLink);
	this.checkLinks(this.sequenceLinks);
	this.stickZoom = origStickZoom;
 	
	d3.select(this.circDomains).transition().attr("opacity", 0)
		.attr("transform", "scale(" + this.stickZoom + ", 1)")
		.duration(Polymer.transitionTime);
	d3.select(this.rectDomains).transition().attr("opacity", 1)
		.attr("transform", "scale(" + this.stickZoom + ", 1)")
		.duration(Polymer.transitionTime);
				
	d3.select(this.outline).transition().attr("stroke-opacity", 1)
	.attr("fill-opacity",  0)
		.attr("fill", "#FFFFFF")
		.attr("height", Polymer.STICKHEIGHT)
		.attr("y",  -Polymer.STICKHEIGHT / 2)
		.attr("rx", 0).attr("ry", 0)
		.duration(Polymer.transitionTime);		

	d3.select(this.highlight).transition()
		.attr("width", protLength + 5).attr("height", Polymer.STICKHEIGHT + 5)
		.attr("x", this.getResXwithStickZoom(0.5) - 2.5).attr("y", (-Polymer.STICKHEIGHT / 2) - 2.5)
		.attr("rx", 0).attr("ry", 0)
		.duration(Polymer.transitionTime);		   
		
	if (typeof this.annotations !== 'undefined') {
		var bottom = Polymer.STICKHEIGHT / 2, top = -Polymer.STICKHEIGHT / 2;
		var annots = this.annotations;
		var ca = annots.length;
		for (var a = 0; a < ca; a++) {
			var anno = annots[a].anno;
			var pieSlice = annots[a].pieSlice;
			var rectDomain = annots[a].rect;

			pieSlice.setAttribute("d", this.getAnnotationPieSliceApproximatePath(anno));
						
			d3.select(pieSlice).transition().attr("d", this.getAnnotationRectPath(anno))
				.duration(Polymer.transitionTime);
			d3.select(rectDomain).transition().attr("d", this.getAnnotationRectPath(anno))
				.duration(Polymer.transitionTime);
		}
	}
	
	var self = this;
	var cubicInOut = d3.ease('cubic-in-out');
	d3.timer(function(elapsed) {
	  return update(elapsed / Polymer.transitionTime);
	});
 
	//~ update(1);
 
	function update(interp) {
		var labelTransform = d3.transform(self.labelSVG.getAttribute("transform"));
		var k = self.ctrl.svgElement.createSVGMatrix().rotate(labelTransform.rotate).translate(labelTranslateInterpol(cubicInOut(interp)), Interactor.labelY);//.scale(z).translate(-c.x, -c.y);
		self.labelSVG.transform.baseVal.initialize(self.ctrl.svgElement.createSVGTransformFromMatrix(k));
	   
	   	var rot = rotationInterpol(cubicInOut(interp));
		self.setRotation(rot);
	 
		var currentLength = lengthInterpol(cubicInOut(interp));
		d3.select(self.outline).attr("width", currentLength).attr("x", - (currentLength / 2) + (0.5 * Polymer.UNITS_PER_RESIDUE * self.stickZoom));
		self.stickZoom = stickZoomInterpol(cubicInOut(interp))
		self.setAllLinkCoordinates();
		
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
		.delay(Polymer.transitionTime * 0.8).duration(Polymer.transitionTime / 2);
};

Polymer.prototype.getResXwithStickZoom = function(r) {
	if (isNaN(r) || r === '?' || r === 'n') {
        return ((0 - (this.size/2)) * Polymer.UNITS_PER_RESIDUE * this.stickZoom) - 8;// ;
    }
    return (r - (this.size/2)) * Polymer.UNITS_PER_RESIDUE * this.stickZoom;
 };

//calculate the  coordinates of a residue (relative to this.ctrl.container)
Polymer.prototype.getResidueCoordinates = function(r, yOff) {
    if (Polymer.UNITS_PER_RESIDUE === undefined)
        alert("Error: Polymer.UNITS_PER_RESIDUE is undefined");
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
    //~ if (isNaN(y)){
		//~ console.log([x, y]);
	//~ }
    return [x, y];
};

Polymer.prototype.getAnnotationRectPath = function(annotation) {
    //domain as rectangle path
    var bottom = Polymer.STICKHEIGHT / 2, top = -Polymer.STICKHEIGHT / 2;
    var annotX =  ((annotation.start - 0.5) - (this.size/2)) * Polymer.UNITS_PER_RESIDUE;//this.getResXUnzoomed(annotation.start - 0.5);
    //~ //Ouch!! Without brackets following may do string concatenation
    var annotSize = (1 + (annotation.end - annotation.start));
    var annotLength = annotSize * Polymer.UNITS_PER_RESIDUE;
    var rectPath = "M " + annotX + "," + bottom;
    for (var sia = 0; sia <= Interactor.stepsInArc; sia++) {
        var step = annotX + (annotLength * (sia / Interactor.stepsInArc));
        rectPath += " L " + step + "," + top;
    }       
    rectPath +=  " L " + (annotX  + annotLength)+ "," + bottom 
        + " Z";
    return rectPath;
};

module.exports = Polymer;
