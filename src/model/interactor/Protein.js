//    	xiNET Interaction Viewer
//    	Copyright 2013 Rappsilber Laboratory
//
//    	This product includes software developed at
//    	the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//		
//		Protein.js		
//
//		authors: Lutz Fischer, Colin Combe

"use strict";

var Interactor = require('./Interactor');
var Rotator = require('../../controller/Rotator');
var Config = require('../../controller/Config');

Protein.STICKHEIGHT = 20;//height of stick in pixels
Protein.MAXSIZE = 0; // residue count of longest sequence
Protein.UNITS_PER_RESIDUE = 1; //changed during init (calculated on basis of MAXSIZE)
Protein.transitionTime = 650;

Protein.prototype = new Interactor();

function Protein(id, xinetController, json, name) {
    this.id = id; // id may not be accession (multiple Segments with same accesssion)
    this.controller = xinetController;
    this.json = json;  
  	this.name = name;
    this.tooltip = this.name + ' [' + this.id + ']';// + this.accession;
    //links
    this.naryLinks = d3.map();
    this.binaryLinks = d3.map();
    this.selfLink = null;
    this.sequenceLinks = d3.map();
    this.selfLink = null;
    // layout info
    this.x = 40;
    this.y = 40;
    this.rotation = 0;
    this.previousRotation = this.rotation;
    this.stickZoom = 1;
    this.form = 0;//null; // 0 = blob, 1 = stick
    this.isSelected = false;
    //annotation scheme
    this.customAnnotations = null;//TODO: tidy up, not needed have this.annotations instead
	//rotators
	this.lowerRotator = new Rotator(this, 0, this.controller);
	this.upperRotator = new Rotator(this, 1, this.controller);
     
    this.upperGroup = document.createElementNS(Config.svgns, "g");
    this.upperGroup.setAttribute("class", "protein upperGroup");
      	
 	//make highlight
    this.highlight = document.createElementNS(Config.svgns, "rect");
    this.highlight.setAttribute("stroke", Config.highlightColour);
    this.highlight.setAttribute("stroke-width", "5");   
    this.highlight.setAttribute("fill", "none");   
    this.upperGroup.appendChild(this.highlight);   
   	
   	//make background
    //http://stackoverflow.com/questions/17437408/how-do-i-change-a-circle-to-a-square-using-d3
	this.background = document.createElementNS(Config.svgns, "rect");
    this.background.setAttribute("fill", "#FFFFFF");
    this.upperGroup.appendChild(this.background);     	
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
    else {
		this.labelText  = this.id;
	}
    if (this.labelText.length > 25) {
        this.labelText = this.labelText.substr(0, 16) + "...";
    }
	this.labelTextNode = document.createTextNode(this.labelText);
    this.labelSVG.appendChild(this.labelTextNode);
    d3.select(this.labelSVG).attr("transform", 
		"translate( -" + (5) + " " + Interactor.labelY + ") rotate(0) scale(1, 1)");
    this.upperGroup.appendChild(this.labelSVG);   	
   	//ticks (and animo acid letters)
    this.ticks = document.createElementNS(Config.svgns, "g");
    //domains as pie slices - shown on top of everything
	this.circDomains = document.createElementNS(Config.svgns, "g");
    this.circDomains.setAttribute("opacity", 1);
	this.upperGroup.appendChild(this.circDomains);
	
	//make outline
    this.outline = document.createElementNS(Config.svgns, "rect");
    this.outline.setAttribute("stroke", "black");
    this.outline.setAttribute("stroke-width", "1");
    this.outline.setAttribute("fill", "none");
    this.upperGroup.appendChild(this.outline);
 
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
		self.touchStart(evt);
    };
    this.isSelected = false;
	this.showHighlight(false);
};

//sequence = amino acids in UPPERCASE, digits or lowercase can be used for modification info
Protein.prototype.setSequence = function(sequence){
    //remove modification site info from sequence
    this.sequence = sequence.replace(/[^A-Z]/g, '');
    this.size = this.sequence.length;
}

//by the time we get here all prot's have had their sequence set, so protein.MAXSIZE has correct value;
Protein.prototype.init = function() {
    this.setForm(this.form);
    if (this.selfLink) this.selfLink.initSelfLinkSVG();
    this.setAllLinkCoordinates();	
};

Protein.prototype.getBlobRadius = function() {
    return Math.sqrt(this.size / 3 / Math.PI);
};

Protein.prototype.setRotation = function(angle) {
    this.rotation = angle % 360;
    if (this.rotation < 0) {
        this.rotation += 360;
	}
    this.upperGroup.setAttribute("transform", "translate(" + this.x + " " + this.y + ")" 
			+ " scale(" + (this.controller.z) + ") " + "rotate(" + this.rotation + ")");
    
    var svg = this.controller.svgElement;    
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

Protein.rotOffset = 20 * 0.7; // see Rotator.js
Protein.minXDist = 30;
Protein.prototype.switchStickScale = function(svgP) {
    if (this.isParked) {
        this.toggleParked();
    }
    if (this.form === 0) {
        this.toStick();
    }
    else {
        var pixPerRes = Protein.UNITS_PER_RESIDUE * this.stickZoom; // / this.controller.z;
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

Protein.prototype.scale = function() {
    var protLength = (this.size) * Protein.UNITS_PER_RESIDUE * this.stickZoom;
    if (this.form === 1) {
      	var labelTransform = d3.transform(this.labelSVG.getAttribute("transform"));
		var k = this.controller.svgElement.createSVGMatrix().rotate(labelTransform.rotate)
			.translate((-(((this.size / 2) * Protein.UNITS_PER_RESIDUE * this.stickZoom) + 10)), Interactor.labelY);//.scale(z).translate(-c.x, -c.y);
		this.labelSVG.transform.baseVal.initialize(this.controller.svgElement.createSVGTransformFromMatrix(k));
	    
		d3.select(this.circDomains).attr("transform", "scale(" + (this.stickZoom) + ", 1)");
		
		d3.select(this.outline)
			.attr("width", protLength)
			.attr("x", this.getResXwithStickZoom(0.5));
			
		d3.select(this.highlight)
			.attr("width", protLength + 5)
			.attr("x", this.getResXwithStickZoom(0.5) - 2.5);
			
		//place rotators
		this.lowerRotator.svg.setAttribute("transform", 
			"translate(" + (this.getResXwithStickZoom(0.5) - Protein.rotOffset) + " 0)");
        this.upperRotator.svg.setAttribute("transform", 
			"translate(" + (this.getResXwithStickZoom(this.size  - 0 + 0.5) + Protein.rotOffset) + " 0)");
   /*       //linker modified peptides
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
        }*/     
        this.setScaleGroup();
        this.setRotation(this.rotation); // places ticks and rotators
    }
};

Protein.prototype.setScaleGroup = function() {
	this.controller.emptyElement(this.ticks);
	this.upperGroup.appendChild(this.ticks);//will do nothing if this.ticks already appended to this.uppergroup
    
    this.scaleLabels = new Array();
	var ScaleMajTick = 100;
	var ScaleTicksPerLabel = 2; // varies with scale?
	var pixPerRes = Protein.UNITS_PER_RESIDUE * this.stickZoom; // / this.controller.z;
	var tick = -1;
	var lastTickX = this.getResXwithStickZoom(this.size);
	
	for (var res = 1; res <= this.size; res++) {
		if (res === 1 ||
				((res % 100 === 0) && (200 * pixPerRes > Protein.minXDist)) ||
				((res % 10 === 0) && (20 * pixPerRes > Protein.minXDist))
				) {
			var tx = this.getResXwithStickZoom(res);
			if (pixPerRes >= 8 || res !== 1) {
				tickAt(this, tx);
			}
			tick = (tick + 1) % ScaleTicksPerLabel;
			// does this one get a label?
			if (tick === 0) {// && tx > 20) {
				if ((tx + Protein.minXDist) < lastTickX) {
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
		scaleLabel.setAttribute("y", Protein.STICKHEIGHT + 4);
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

Protein.prototype.setForm = function(form, svgP) {
    if (this.busy !== true) {
		if (form == 1) {
			this.toStick();
		}
		else {
			this.toCircle(svgP);
			var r = this.getBlobRadius();
			var self = this;
			d3.select(this.background).transition()
				.attr("x", -r).attr("y", -r)
				.attr("width", r * 2).attr("height", r * 2)
				.attr("rx", r).attr("ry", r)
				.duration(Protein.transitionTime);
			d3.select(this.outline).transition()
				.attr("x", -r).attr("y", -r)
				.attr("width", r * 2).attr("height", r * 2)
				.attr("rx", r).attr("ry", r)
				.duration(Protein.transitionTime);
			d3.select(this.highlight).transition()
				.attr("x", -r).attr("y", -r)
				.attr("width", r * 2).attr("height", r * 2)
				.attr("rx", r).attr("ry", r)
				.duration(Protein.transitionTime);
		}
	}
};

Protein.prototype.toCircle = function(svgP) {
	//svgP = null;// temp hack - you can uncomment this is you experience things 'flying off screen' 
	this.busy = true;
	if (this.upperGroup.contains(this.lowerRotator.svg)) this.upperGroup.removeChild(this.lowerRotator.svg);
	if (this.upperGroup.contains(this.upperRotator.svg))this.upperGroup.removeChild(this.upperRotator.svg);  
			    
    var protLength = this.size * Protein.UNITS_PER_RESIDUE * this.stickZoom;		
	var r = this.getBlobRadius();
	
	var stickZoomInterpol = d3.interpolate(this.stickZoom, 0);
	var rotationInterpol = d3.interpolate((this.rotation > 180)? this.rotation - 360 : this.rotation, 0);	
	var labelTransform = d3.transform(this.labelSVG.getAttribute("transform"));	
	var labelStartPoint = labelTransform.translate[0];//-(((this.size / 2) * Protein.UNITS_PER_RESIDUE * this.stickZoom) + 10);
	var labelTranslateInterpol = d3.interpolate(labelStartPoint, -(r + 5));
	
	var xInterpol = null, yInterpol = null;
	if (typeof svgP !== 'undefined' && svgP !== null) {
		xInterpol = d3.interpolate(this.x, svgP.x);
		yInterpol = d3.interpolate(this.y, svgP.y);
	}	
	
	var self = this;
	d3.select(this.ticks).transition().attr("opacity", 0).duration(Protein.transitionTime / 4)
				.each("end", 
					function () {
						if (self.upperGroup.contains(self.ticks))self.upperGroup.removeChild(self.ticks);
					}
				);
	
	d3.select(this.highlight).transition()
		.attr("width", (r * 2) + 5).attr("height", (r * 2) + 5)
		.attr("x", -r - 2.5).attr("y", -r - 2.5)
		.attr("rx", r + 2.5).attr("ry", r + 2.5)
		.duration(Protein.transitionTime);		   

	//linker modified peptides
	/*if (this.linkerModifications != null) {
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
	}*/

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
				.duration(Protein.transitionTime).each("end", 
					function () {
						for (var b = 0; b < ca; b++) {
							var annoB = annots[b];
							if (this === annoB.pieSlice){
								d3.select(this).attr("d", self.getAnnotationPieSliceArcPath(annoB.anno));
							}
						}
					}
				);
		}
	}

	var originalStickZoom = this.stickZoom;
	var originalRotation = this.rotation;
	var cubicInOut = d3.ease('cubic-in-out');
	d3.timer(function(elapsed) {
	  return update(elapsed / Protein.transitionTime);
	});
 
	function update(interp) {
		var labelTransform = d3.transform(self.labelSVG.getAttribute("transform"));
		var k = self.controller.svgElement.createSVGMatrix().rotate(labelTransform.rotate).translate(labelTranslateInterpol(cubicInOut(interp)), Interactor.labelY);//.scale(z).translate(-c.x, -c.y);
		self.labelSVG.transform.baseVal.initialize(self.controller.svgElement.createSVGTransformFromMatrix(k));
		//~ 
		if (xInterpol !== null){
			self.setPosition(xInterpol(cubicInOut(interp)), yInterpol(cubicInOut(interp)));
		}
		
	   	var rot = rotationInterpol(cubicInOut(interp));
		self.stickZoom = stickZoomInterpol(cubicInOut(interp))
		self.setRotation(rot);	 
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

Protein.prototype.toStick = function() {
	this.busy = true;
    this.form = 1; 
   
    //place rotators
	this.upperGroup.appendChild(this.lowerRotator.svg);
	this.upperGroup.appendChild(this.upperRotator.svg);  
	this.lowerRotator.svg.setAttribute("transform", 
		"translate(" + (this.getResXwithStickZoom(0.5) - Protein.rotOffset) + " 0)");
	this.upperRotator.svg.setAttribute("transform", 
		"translate(" + (this.getResXwithStickZoom(this.size - 0 + 0.5) + Protein.rotOffset) + " 0)");
	//remove prot-prot links - would it be better if checkLinks did this? - think not
	var c = this.binaryLinks.values().length;
	for (var l = 0; l < c; l++) {
		var link = this.binaryLinks.values()[l];
		//out with the old
		if (link.shown) {
			link.hide();
		}
	}
	 			   
    var protLength = this.size * Protein.UNITS_PER_RESIDUE * this.stickZoom;		
	var r = this.getBlobRadius();
	
 	var lengthInterpol = d3.interpolate((2 * r), protLength);
	var stickZoomInterpol = d3.interpolate(0, this.stickZoom);
	var rotationInterpol = d3.interpolate(0, (this.rotation > 180)? this.rotation - 360 : this.rotation);	
	var labelTranslateInterpol = d3.interpolate(-(r + 5), -(((this.size / 2) * Protein.UNITS_PER_RESIDUE * this.stickZoom) + 10));
  
    var origStickZoom = this.stickZoom;	
	this.stickZoom = 0;
    this.checkLinks(this.binaryLinks);
	this.checkLinks(this.selfLink);
	this.checkLinks(this.sequenceLinks);
	this.stickZoom = origStickZoom;
				
	d3.select(this.background).transition()//.attr("stroke-opacity", 1)
	//~ .attr("fill-opacity",  0)
		//.attr("fill", "#FFFFFF")
		.attr("height", Protein.STICKHEIGHT)
		.attr("y",  -Protein.STICKHEIGHT / 2)
		.attr("rx", 0).attr("ry", 0)
		.duration(Protein.transitionTime);
				
	d3.select(this.outline).transition()//.attr("stroke-opacity", 1)
	//~ .attr("fill-opacity",  0)
		//.attr("fill", "#FFFFFF")
		.attr("height", Protein.STICKHEIGHT)
		.attr("y",  -Protein.STICKHEIGHT / 2)
		.attr("rx", 0).attr("ry", 0)
		.duration(Protein.transitionTime);		

	d3.select(this.highlight).transition()
		.attr("width", protLength + 5).attr("height", Protein.STICKHEIGHT + 5)
		.attr("x", this.getResXwithStickZoom(0.5) - 2.5).attr("y", (-Protein.STICKHEIGHT / 2) - 2.5)
		.attr("rx", 0).attr("ry", 0)
		.duration(Protein.transitionTime);		   
	//linker modified peptides
	/*if (this.linkerModifications != null) {
		var mods = this.linkerModifications.residueLinks.values();
		var iModCount = mods.length;
		for (var m = 0; m < iModCount; m++) {
			var mod = mods[m];
			if (mod.shown) {
				var path = this.getResidueLinkPath(mod);
				d3.select(mod.line).attr("d","M 0,0 L 0,0 L 0,0 L 0,0");
				d3.select(mod.line).transition().attr("d",path)
					.duration(Protein.transitionTime);					
				d3.select(mod.highlightLine).attr("d","M 0,0 L 0,0");
				d3.select(mod.highlightLine).transition().attr("d",path)
					.duration(Protein.transitionTime);	
			}
		}
	}*/		
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
		}
	}
	
	var self = this;
	var cubicInOut = d3.ease('cubic-in-out');
	d3.timer(function(elapsed) {
	  return update(elapsed / Protein.transitionTime);
	});
 
	function update(interp) {
		var labelTransform = d3.transform(self.labelSVG.getAttribute("transform"));
		var k = self.controller.svgElement.createSVGMatrix().rotate(labelTransform.rotate).translate(labelTranslateInterpol(cubicInOut(interp)), Interactor.labelY);//.scale(z).translate(-c.x, -c.y);
		self.labelSVG.transform.baseVal.initialize(self.controller.svgElement.createSVGTransformFromMatrix(k));
	   
	   	var rot = rotationInterpol(cubicInOut(interp));
		self.setRotation(rot);
	 
		var currentLength = lengthInterpol(cubicInOut(interp));
		d3.select(self.highlight).attr("width", currentLength).attr("x", - (currentLength / 2) + (0.5 * Protein.UNITS_PER_RESIDUE * self.stickZoom));
		d3.select(self.outline).attr("width", currentLength).attr("x", - (currentLength / 2) + (0.5 * Protein.UNITS_PER_RESIDUE * self.stickZoom));
		d3.select(self.background).attr("width", currentLength).attr("x", - (currentLength / 2) + (0.5 * Protein.UNITS_PER_RESIDUE * self.stickZoom));
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
		.delay(Protein.transitionTime * 0.8).duration(Protein.transitionTime / 2);
};

Protein.prototype.getResXwithStickZoom = function(r) {
	if (isNaN(r) || r === '?' || r === 'n') {
        return ((0 - (this.size/2)) * Protein.UNITS_PER_RESIDUE * this.stickZoom) - 8;// ;
    }
    return (r - (this.size/2)) * Protein.UNITS_PER_RESIDUE * this.stickZoom;
 };

//calculate the  coordinates of a residue (relative to this.controller.container)
Protein.prototype.getResidueCoordinates = function(r, yOff) {
    if (Protein.UNITS_PER_RESIDUE === undefined)
        alert("Error: Protein.UNITS_PER_RESIDUE is undefined");
    if (r === undefined)
        alert("Error: residue number is undefined");
    var x = this.getResXwithStickZoom(r * 1) * this.controller.z;
    var y = 0;
    if (x !== 0) {
        var l = Math.abs(x);
        var a = Math.acos(x / l);
        var rotRad = (this.rotation / 360) * Math.PI * 2;
        x = l * Math.cos(rotRad + a);
        y = l * Math.sin(rotRad + a);
        if (typeof yOff !== 'undefined') {
            x += yOff * this.controller.z * Math.cos(rotRad + (Math.PI / 2));
            y += yOff * this.controller.z * Math.sin(rotRad + (Math.PI / 2));
        }
    }
    else {
        y = yOff;
    }
    x = x + this.x;
    y = y + this.y;
    return [x, y];
};

Protein.prototype.getAnnotationRectPath = function(annotation) {
    //domain as rectangle path
    var bottom = Protein.STICKHEIGHT / 2, top = -Protein.STICKHEIGHT / 2;
    var annotX =  ((annotation.start - 0.5) - (this.size/2)) * Protein.UNITS_PER_RESIDUE;//this.getResXUnzoomed(annotation.start - 0.5);
    //~ Without brackets following may do string concatenation
    var annotSize = (1 + (annotation.end - annotation.start));
    var annotLength = annotSize * Protein.UNITS_PER_RESIDUE;
    var rectPath = "M " + annotX + "," + bottom;
    for (var sia = 0; sia <= Interactor.stepsInArc; sia++) {
        var step = annotX + (annotLength * (sia / Interactor.stepsInArc));
        rectPath += " L " + step + "," + top;
    }       
    rectPath +=  " L " + (annotX  + annotLength)+ "," + bottom 
        + " Z";
    return rectPath;
};

module.exports = Protein;
