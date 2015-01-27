//		xiNET cross-link viewer
//		Copyright 2013 Rappsilber Laboratory, University of Edinburgh
//
//		authors: Lutz Fischer, Colin Combe
//		
//		Protein.js

"use strict";

Protein.STICKHEIGHT = 20; 		// height of stick in pixels
Protein.MAXSIZE = 0; 			// residue count of longest sequence
Protein.UNITS_PER_RESIDUE = 1; 	// this value is changed during init (calculated on basis of MAXSIZE)
Protein.LABELMAXLENGTH = 60; 	// maximal width reserved for protein-labels
Protein.labelY = -5; 			// label Y offset, better if calc'd half height of label once rendered
//~ Protein.domainColours = d3.scale.category20c(); //
Protein.domainColours = d3.scale.ordinal().range(colorbrewer.Paired[5]);
//~ Protein.domainColours = d3.scale.ordinal().range(colorbrewer.Set3[12]);
//~ Protein.domainColours = d3.scale.ordinal().range(colorbrewer.Pastel1[8]);
//~ Protein.domainColours = d3.scale.ordinal().range(colorbrewer.Set3[9]);
Protein.transitionTime = 650;

function Protein(id, xinetController, acc, name) {
    this.id = id; // id may not be accession
    this.xlv = xinetController;
    this.accession = acc;
    this.name = name;
    this.tooltip = this.name + ' [' + this.id + ']';// + this.accession;
    
    //links
    this.proteinLinks = d3.map();
    this.internalLink = null;
    // layout info
    this.x = null;40;
    this.y = null;40;
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
	//~ this.mouseoverControls = new MouseoverControls(this, this.xlv);
	this.lowerRotator = new Rotator(this, 0, this.xlv);
	this.upperRotator = new Rotator(this, 1, this.xlv);
          
    /*
     * Lower group
     * svg group for elements that appear underneath links
     */
    this.lowerGroup = document.createElementNS(xiNET.svgns, "g");
    this.lowerGroup.setAttribute("class", "protein lowerGroup");
 	
 	//make highlight
    this.highlight = document.createElementNS(xiNET.svgns, "rect");
    if (xiNET.highlightColour !== undefined) {
        this.highlight.setAttribute("stroke", xiNET.highlightColour.toRGB());
	}
    this.highlight.setAttribute("stroke-width", "5");   
    this.highlight.setAttribute("fill", "none");   
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
    this.labelSVG.setAttribute("fill", this.isDecoy()? "#FB8072":"black")
    this.labelSVG.setAttribute("x", 0);
    this.labelSVG.setAttribute("y", 10);
    this.labelSVG.setAttribute("class", "protein xlv_text proteinLabel");
    this.labelSVG.setAttribute('font-family', 'Arial');
    this.labelSVG.setAttribute('font-size', '16');
    //choose label text
    if (this.name !== null & this.name !== "") {
        this.labelText = this.name;
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
	this.labelTextNode = document.createTextNode(this.labelText);
    this.labelSVG.appendChild(this.labelTextNode);
    d3.select(this.labelSVG).attr("transform", 
		"translate( -" + (5) + " " + Protein.labelY + ")");
    this.upperGroup.appendChild(this.labelSVG);
   	
   	//ticks (and animo acid letters)
    this.ticks = document.createElementNS(xiNET.svgns, "g");
     
	//make outline
    //http://stackoverflow.com/questions/17437408/how-do-i-change-a-circle-to-a-square-using-d3
	this.outline = document.createElementNS(xiNET.svgns, "rect");
    this.outline.setAttribute("stroke", "black");
    this.outline.setAttribute("stroke-width", "1");
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
		self.xlv.message("protein touch start");
		self.touchStart(evt);
    };
    //~ this.upperGroup.ontouchmove = function(evt) {};
	//~ this.upperGroup.ontouchend = function(evt) {};
    //~ this.upperGroup.ontouchenter = function(evt) {};
    //~ this.upperGroup.ontouchleave = function(evt) {};
    //~ this.upperGroup.ontouchcancel = function(evt) {};
    this.isSelected = false;
	this.showHighlight(false);
}

//sequence = amino acid in UPPERCASE, digits or lowercase can be used for modification info
Protein.prototype.setSequence = function(sequence){//, name, description, size) {
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
    if (typeof this.labeling !== 'undefined') {
        this.labelSVG.innerHTML = '[' + this.labeling + '] ' + this.labelSVG.innerHTML;
    }
    
    
    //remove modification site info from sequence
    this.sequence = sequence.replace(/[^A-Z]/g, '');
    this.size = this.sequence.length;
	// keep track of largest protein size - used for initial scaling of bars
    if (Protein.MAXSIZE < this.size) {
        Protein.MAXSIZE = this.size;
    }
    this.setForm(this.form);
    //this.setAllLineCoordinates();
	//this.setForm(this.form);//some hacks here that need sorted out, 
	// saved layouts will come back with eveyrthing circles
	//~ this.toCircle();
	//~ var r = this.getBlobRadius();	
	//~ var self = this;
	//~ d3.select(this.outline)
		//~ .attr("stroke-opacity", 1).attr("fill-opacity", 1)
		//~ .attr("fill", "#ffffff")
		//~ .attr("x", -r).attr("y", -r)
		//~ .attr("width", r * 2).attr("height", r * 2)
		//~ .attr("rx", r).attr("ry", r);
//~ 
	//~ d3.select(this.rectDomains).attr("opacity", 0)
		//~ .attr("transform", "scale(1, 1)");
		//~ 
	//~ d3.select(this.circDomains).attr("opacity", 1)
		//~ .attr("transform", "scale(1, 1)");
		//~ 
	//~ if (this.internalLink) this.internalLink.initSVG();
	//~ var labelTransform = d3.transform(self.labelSVG.getAttribute("transform"));
	//~ var k = self.xlv.svgElement.createSVGMatrix().rotate(labelTransform.rotate).translate(-(r + 5), Protein.labelY);
	//~ this.labelSVG.transform.baseVal.initialize(this.xlv.svgElement.createSVGTransformFromMatrix(k));
	
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
        
        var message = "";
		//heading, including PDB link
		message += "<h5>" + this.name + " &nbsp;&nbsp;[" + this.id + "] </h5><p>";
		if (typeof this.accession !== "undefined") {
			message += "<a href='http://www.ebi.ac.uk/pdbe-apps/widgets/unipdb?uniprot="
					+ this.accession + "' target='_blank'>PDB</a></p>";
		}
		this.xlv.message(message);
		var self = this;
		xiNET_Storage.getUniProtTxt(this.accession, function (id, txt){
			self.xlv.message(message + "<pre>" + txt + "</pre>");
		});
		        
        return false;
};

Protein.prototype.touchStart = function(evt) {
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
        var p = this.xlv.getTouchEventPoint(evt);
        this.xlv.dragStart = this.xlv.mouseToSVG(p.x, p.y);
        
        var self = this;
        var message = "";
		//heading, including PDB link
		message += "<h5>" + this.name + " &nbsp;&nbsp;[" + this.id + "] </h5><p>";
		if (typeof this.accession !== "undefined") {
			message += "<a href='http://www.ebi.ac.uk/pdbe-apps/widgets/unipdb?uniprot="
					+ this.accession + "' target='_blank'>PDB</a></p>";
		}
		this.xlv.message(message);
		var self = this;
		xiNET_Storage.getUniProtTxt(this.accession, function (id, txt){
			self.xlv.message(message + "<pre>" + txt + "</pre>");
		});
        
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

Protein.prototype.getBlobRadius = function() {
    return Math.sqrt(this.size / Math.PI);
};

Protein.prototype.isDecoy = function() {
    if (this.name.indexOf("DECOY_") === -1 && this.name !== "REV") {
		return false;
	} else {
		return true;
	}
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
        flipped: this.isFlipped//,
        //annot: this.customAnnotations
    };
};

Protein.prototype.addLink = function(link) {
    if (!this.proteinLinks.has(link.id)) {
        this.proteinLinks.set(link.id, link);
    }
    if (link.intra) {
        this.internalLink = link;
    }
    if (link.toProtein === null) {
        this.linkerModifications = link;
    }
};

Protein.prototype.showHighlight = function(show) {
    if (show === true) {
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
    this.rotation = angle % 360;
    if (this.rotation < 0) {
        this.rotation += 360;
	}
    this.upperGroup.setAttribute("transform", "translate(" + this.x + " " + this.y + ")" 
			+ " scale(" + (this.xlv.z) + ") " + "rotate(" + this.rotation + ")");
    this.lowerGroup.setAttribute("transform", "translate(" + this.x + " " + this.y + ")" 
			+ " scale(" + (this.xlv.z) + ") " + "rotate(" + this.rotation + ")");

    var svg = this.xlv.svgElement;    
	var transformToContainingGroup = this.labelSVG.getAttribute("transform");
	var labelTransform = d3.transform(transformToContainingGroup);
	var sll = this.scaleLabels.length;
	if (this.rotation >= 90 && this.rotation < 270) {
			var k = svg.createSVGMatrix()
						.translate(Math.abs(labelTransform.translate[0]), -Protein.labelY)
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
						.translate(-(Math.abs(labelTransform.translate[0])), Protein.labelY);
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
Protein.prototype.setPosition = function(x, y) {
    this.x = x;
    this.y = y;
    if (this.form === 1 && this.isParked === false){
		this.upperGroup.setAttribute("transform", "translate(" + this.x + " " + this.y + ")" 
				+ " scale(" + (this.xlv.z) + ") " + "rotate(" + this.rotation + ")");
		this.lowerGroup.setAttribute("transform", "translate(" + this.x + " " + this.y + ")" 
				+ " scale(" + (this.xlv.z) + ") " + "rotate(" + this.rotation + ")");
    } 
    else {
		this.upperGroup.setAttribute("transform", "translate(" + this.x + " " + this.y + ")" 
				+ " scale(" + (this.xlv.z) + ") ");
		this.lowerGroup.setAttribute("transform", "translate(" + this.x + " " + this.y + ")" 
				+ " scale(" + (this.xlv.z) + ") ");
		if (this.internalLink != null) {
			if (typeof this.internalLink.fatLine !== 'undefined') {
				this.internalLink.fatLine.setAttribute("transform", "translate(" + this.x
						+ " " + this.y + ")" + " scale(" + (this.xlv.z) + ")");
			}
				this.internalLink.line.setAttribute("transform", "translate(" + this.x
						+ " " + this.y + ")" + " scale(" + (this.xlv.z) + ")");
				this.internalLink.highlightLine.setAttribute("transform", "translate(" + this.x
						+ " " + this.y + ")" + " scale(" + (this.xlv.z) + ")");
		}
	}
};

Protein.rotOffset = 25 * 0.7; // see Rotator.js
Protein.minXDist = 30;
Protein.prototype.switchStickScale = function(svgP) {
    if (this.isParked) {
        this.toggleParked();
    }
    if (this.form === 0) {
        this.toStick();
    }
    else {
        var pixPerRes = Protein.UNITS_PER_RESIDUE * this.stickZoom; // / this.xlv.z;
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

Protein.prototype.scale = function() {
    var protLength = (this.size) * Protein.UNITS_PER_RESIDUE * this.stickZoom;
    if (this.form === 1) {
      	var labelTransform = d3.transform(this.labelSVG.getAttribute("transform"));
		var k = this.xlv.svgElement.createSVGMatrix().rotate(labelTransform.rotate)
			.translate((-(((this.size / 2) * Protein.UNITS_PER_RESIDUE * this.stickZoom) + 10)), Protein.labelY);//.scale(z).translate(-c.x, -c.y);
		this.labelSVG.transform.baseVal.initialize(this.xlv.svgElement.createSVGTransformFromMatrix(k));
	    
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
			"translate(" + (this.getResXwithStickZoom(0.5) - Protein.rotOffset) + " 0)");
        this.upperRotator.svg.setAttribute("transform", 
			"translate(" + (this.getResXwithStickZoom(this.size  - 0 + 0.5) + Protein.rotOffset) + " 0)");
        
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

Protein.prototype.setScaleGroup = function() {
	this.xlv.emptyElement(this.ticks);
	this.upperGroup.appendChild(this.ticks);//will do nothing if this.ticks already appended to this.uppergroup
    
    this.scaleLabels = new Array();
	var ScaleMajTick = 100;
	var ScaleTicksPerLabel = 2; // varies with scale?
	var pixPerRes = Protein.UNITS_PER_RESIDUE * this.stickZoom; // / this.xlv.z;
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
		scaleLabel.setAttribute("y", Protein.STICKHEIGHT + 4);
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
    if (this.busy !== true) {
		if (this.isParked === true && bool == false) {
			this.isParked = false; //u r here
			if (this.form === 0) {
				d3.select(this.outline).transition()
					.attr("stroke-opacity", 1).attr("fill-opacity", 1)
					.attr("fill", "#ffffff")
					.duration(Protein.transitionTime);
				this.checkLinks();
				d3.select(this.circDomains).transition().attr("opacity", 1)
					.attr("transform", "scale(1, 1)")
					.duration(Protein.transitionTime);
			}
			else {
				this.toStick();
			}
			this.scale();
			this.setAllLineCoordinates();
		}
		else if (this.isParked === false && bool == true) {
			this.isParked = true;
			var c = this.proteinLinks.values().length;
			for (var l = 0; l < c; l++) {
				var link = this.proteinLinks.values()[l];
				//out with the old (i.e. all links)
				link.hide();
				var resLinks = link.residueLinks.values();
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
					.duration(Protein.transitionTime);	
				d3.select(this.rectDomains).transition().attr("opacity", 0)
					.attr("transform", "scale(1, 1)")
					.duration(Protein.transitionTime);
			}
			else {
				d3.select(this.outline).transition()
					.attr("stroke-opacity", 0)
					.attr("fill", "#EEEEEE")
					.duration(Protein.transitionTime);	
				d3.select(this.circDomains).transition().attr("opacity", 0)
					.attr("transform", "scale(1, 1)")
					.duration(Protein.transitionTime);	
			}
		}
	}
};

Protein.prototype.setForm = function(form, svgP) {
    //~ if (this.busy !== true) {
		if (this.isParked) {
			this.setParked(false);
		}
		else
		{
			if (form == 1) {
				this.toStick();
			}
			else {
				this.toCircle(svgP);
				var r = this.getBlobRadius();
				
				var self = this;
				d3.select(this.outline).transition()
					.attr("stroke-opacity", 1).attr("fill-opacity", 1)
					.attr("fill", "#ffffff")
					.attr("x", -r).attr("y", -r)
					.attr("width", r * 2).attr("height", r * 2)
					.attr("rx", r).attr("ry", r)
					.duration(Protein.transitionTime);

				d3.select(this.rectDomains).transition().attr("opacity", 0)
					.attr("transform", "scale(1, 1)")
					.duration(Protein.transitionTime);
					
				d3.select(this.circDomains).transition().attr("opacity", 1)
					.attr("transform", "scale(1, 1)")
					.duration(Protein.transitionTime);
			}
		}
	//~ }
};

Protein.prototype.toCircle = function(){//svgP) {  
	this.busy = true;
	this.removePeptides();
	if (this.upperGroup.contains(this.lowerRotator.svg)) this.upperGroup.removeChild(this.lowerRotator.svg);
	if (this.upperGroup.contains(this.upperRotator.svg))this.upperGroup.removeChild(this.upperRotator.svg);  
			    
    var protLength = this.size * Protein.UNITS_PER_RESIDUE * this.stickZoom;		
	var r = this.getBlobRadius();
	
	//~ var lengthInterpol = d3.interpolate(protLength, (2 * r));
	var stickZoomInterpol = d3.interpolate(this.stickZoom, 0);
	var rotationInterpol = d3.interpolate((this.rotation > 180)? this.rotation - 360 : this.rotation, 0);	
	var labelTranslateInterpol = d3.interpolate(-(((this.size / 2) * Protein.UNITS_PER_RESIDUE * this.stickZoom) + 10), -(r + 5));
	
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

	d3.select(this.upperGroup).transition().attr("transform", 
			"translate(" + this.x + " " + this.y + ")" 
			+ " scale(" + (this.xlv.z) + ") " + "rotate(" + this.rotation + ")")
			.duration(Protein.transitionTime);
	
	d3.select(this.lowerGroup).transition().attr("transform", 
		"translate(" + this.x + " " + this.y + ")" 
			+ " scale(" + (this.xlv.z) + ") " + "rotate(" + this.rotation + ")")
			.duration(Protein.transitionTime);
	
	 if (this.internalLink != null) {
		var resLinks = this.internalLink.residueLinks.values();
		var resLinkCount = resLinks.length;
		for (var rl = 0; rl < resLinkCount; rl++) {
			var residueLink = resLinks[rl];
			if (residueLink.intra === true && residueLink.shown) {
						var selectLine = d3.select(residueLink.line);
						selectLine.attr("d",this.getResidueLinkPath(residueLink));
						selectLine.transition().attr("d",this.getAggregateSelfLinkPath())
							.duration(Protein.transitionTime);	
						var highlightLine = d3.select(residueLink.highlightLine);
						highlightLine.attr("d",this.getResidueLinkPath(residueLink));
						highlightLine.transition().attr("d",this.getAggregateSelfLinkPath())
							.duration(Protein.transitionTime);					
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
				.duration(Protein.transitionTime).each("end", 
					function () {
						//d3.select(this).attr("d", self.getAnnotationPieSliceArcPath(anno));//mistake - this doesn't work 
						//oh dear, this is a mess...
						//~ for (var b = 0; b < ca; b++) {
							//~ var annoB = annots[b];
							//~ if (this === annoB.pieSlice){
								//~ d3.select(this).attr("d", self.getAnnotationPieSliceArcPath(annoB.anno));
							//~ }
						//~ }
					}
				);
			d3.select(rectDomain).transition().attr("d", self.getAnnotationPieSliceApproximatePath(anno))
				.duration(Protein.transitionTime);
		}
	}

	var originalStickZoom = this.stickZoom;
	var originalRotation = this.rotation;
	var cubicInOut = d3.ease('cubic-in-out');
	d3.timer(function(elapsed) {
	  return update(elapsed / Protein.transitionTime);
	});
 
	function update(interp) {
		//~ if (self.isParked === false) { //that wont work
			var labelTransform = d3.transform(self.labelSVG.getAttribute("transform"));
			var k = self.xlv.svgElement.createSVGMatrix().rotate(labelTransform.rotate).translate(labelTranslateInterpol(cubicInOut(interp)), Protein.labelY);//.scale(z).translate(-c.x, -c.y);
			self.labelSVG.transform.baseVal.initialize(self.xlv.svgElement.createSVGTransformFromMatrix(k));
		//~ }
		//~ if (xInterpol !== null){
			//~ self.setPosition(xInterpol(cubicInOut(interp)), yInterpol(cubicInOut(interp)));
		//~ }
		//~ else {
			//~ self.setPosition(self.getX(), self.getY());
		//~ }
		
	   	var rot = rotationInterpol(cubicInOut(interp));
		self.setRotation(rot);
	 
		self.stickZoom = stickZoomInterpol(cubicInOut(interp))
		self.setAllLineCoordinates();
		
		if (interp ===  1){ // finished - tidy up
			var links = self.proteinLinks.values();
			var c = links.length;
			for (var l = 0; l < c; l++) {
				var link = links[l];
				if (link.toProtein === null || (link.getFromProtein() === self && link.getToProtein().form === 0) ||
						(link.getToProtein() === self && link.getFromProtein().form === 0) ||
						(link.getToProtein() == link.getFromProtein()))
				{
					// swap links - out with the old
					var resLinks = link.residueLinks.values();
					var resLinkCount = resLinks.length; 
					for (var rl = 0; rl < resLinkCount; rl++) {
						var resLink = resLinks[rl];
							resLink.hide();
					}
				}
			}
			//bring in new 
			self.form = 0;
			//~ self.setPosition(self.x, self.y);
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

Protein.prototype.getX = function() {return this.x;}

Protein.prototype.getY = function() {return this.y;}

Protein.prototype.toStick = function() {
	this.busy = true;
    this.form = 1; 
   
    //place rotators
	//~ this.mouseoverControls.add();
	this.upperGroup.appendChild(this.lowerRotator.svg);
	this.upperGroup.appendChild(this.upperRotator.svg);  
	this.lowerRotator.svg.setAttribute("transform", 
		"translate(" + (this.getResXwithStickZoom(0.5) - Protein.rotOffset) + " 0)");
	this.upperRotator.svg.setAttribute("transform", 
		"translate(" + (this.getResXwithStickZoom(this.size - 0 + 0.5) + Protein.rotOffset) + " 0)");
   //remove prot-prot links - would it be better if checkLinks did this? - think not
	var c = this.proteinLinks.values().length;
	for (var l = 0; l < c; l++) {
		var link = this.proteinLinks.values()[l];
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
    this.checkLinks();
	this.stickZoom = origStickZoom;
 	
	d3.select(this.circDomains).transition().attr("opacity", 0)
		.attr("transform", "scale(" + this.stickZoom + ", 1)")
		.duration(Protein.transitionTime);
	d3.select(this.rectDomains).transition().attr("opacity", 1)
		.attr("transform", "scale(" + this.stickZoom + ", 1)")
		.duration(Protein.transitionTime);
				
	d3.select(this.outline).transition().attr("stroke-opacity", 1)
	.attr("fill-opacity",  0)
		.attr("fill", "#FFFFFF")
		.attr("height", Protein.STICKHEIGHT)
		.attr("y",  -Protein.STICKHEIGHT / 2)
		.attr("rx", 0).attr("ry", 0)
		.duration(Protein.transitionTime);		

	d3.select(this.highlight).transition()
		.attr("width", protLength + 5).attr("height", Protein.STICKHEIGHT + 5)
		.attr("x", this.getResXwithStickZoom(0.5) - 2.5).attr("y", (-Protein.STICKHEIGHT / 2) - 2.5)
		.attr("rx", 0).attr("ry", 0)
		.duration(Protein.transitionTime);		   
	
	 if (this.internalLink != null) {
		var resLinks = this.internalLink.residueLinks.values();
		var resLinkCount = resLinks.length;
		for (var rl = 0; rl < resLinkCount; rl++) {
			var residueLink = resLinks[rl];			
			if (residueLink.shown) {
				d3.select(residueLink.line).attr("d",this.getAggregateSelfLinkPath());
				d3.select(residueLink.line).transition().attr("d",this.getResidueLinkPath(residueLink))
					.duration(Protein.transitionTime);					
				d3.select(residueLink.highlightLine).attr("d",this.getAggregateSelfLinkPath());
				d3.select(residueLink.highlightLine).transition().attr("d",this.getResidueLinkPath(residueLink))
					.duration(Protein.transitionTime);					
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
					.duration(Protein.transitionTime);					
				d3.select(mod.highlightLine).attr("d","M 0,0 L 0,0");
				d3.select(mod.highlightLine).transition().attr("d",path)
					.duration(Protein.transitionTime);	
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
	
	var self = this;
	var cubicInOut = d3.ease('cubic-in-out');
	d3.timer(function(elapsed) {
	  return update(elapsed / Protein.transitionTime);
	});
 
	//~ update(1);
 
	function update(interp) {
		var labelTransform = d3.transform(self.labelSVG.getAttribute("transform"));
		var k = self.xlv.svgElement.createSVGMatrix().rotate(labelTransform.rotate).translate(labelTranslateInterpol(cubicInOut(interp)), Protein.labelY);//.scale(z).translate(-c.x, -c.y);
		self.labelSVG.transform.baseVal.initialize(self.xlv.svgElement.createSVGTransformFromMatrix(k));
	   
	   	var rot = rotationInterpol(cubicInOut(interp));
		self.setRotation(rot);
	 
		var currentLength = lengthInterpol(cubicInOut(interp));
		d3.select(self.outline).attr("width", currentLength).attr("x", - (currentLength / 2) + (0.5 * Protein.UNITS_PER_RESIDUE * self.stickZoom));
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
		.delay(Protein.transitionTime * 0.8).duration(Protein.transitionTime / 2);
};

Protein.prototype.getAggregateSelfLinkPath = function() {
	var intraR = this.getBlobRadius() + 7;
	var sectorSize = 45;
	var arcStart = Protein.trig(intraR, 25 + sectorSize);
	var arcEnd = Protein.trig(intraR, -25 + sectorSize);
	var cp1 = Protein.trig(intraR, 40 + sectorSize);
	var cp2 = Protein.trig(intraR, -40 + sectorSize);
	return 'M 0,0 ' 
		+ 'Q ' + cp1.x + ',' + -cp1.y + ' ' + arcStart.x + ',' + -arcStart.y
		+ ' A ' + intraR + ' ' + intraR + ' 0 0 1 ' + arcEnd.x + ',' + -arcEnd.y
		+ ' Q ' + cp2.x + ',' + -cp2.y + ' 0,0';
}

Protein.prototype.getResidueLinkPath = function(residueLink) {			
	var x1 = this.getResXwithStickZoom(residueLink.fromResidue);
	var baseLine = 0;
	if (Protein.UNITS_PER_RESIDUE * this.stickZoom >= 8){
		baseLine = -5;
	}
	if (isNaN(parseFloat(residueLink.toResidue))){ //linker modified peptide
		if (residueLink.ambig === false){
			residueLink.line.setAttribute("fill", xiNET.defaultSelfLinkColour.toRGB());
		}
		var p1 = [x1, 26];
		var p3 = [x1, 18];
		var p2 = Protein.rotatePointAboutPoint(p1, p3, 60);
		baseLine = baseLine * -1;
		return "M " + x1 + "," + baseLine 
			+ " L " + p1[0] + "," + p1[1] 
			+ " L " +  p2[0] + "," + p2[1]
			+ " L " + p3[0] + "," + p3[1];
	}
	else {
		var x2 = this.getResXwithStickZoom(residueLink.toResidue);
		var height, cp1, cp2, arcStart, arcEnd, arcRadius;
		arcRadius = (Math.abs(x2 - x1)) / 2;
		var height = -((Protein.STICKHEIGHT / 2) + 3);
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
			cp1 = Protein.rotatePointAboutPoint([x1, height - arcRadius], start, -20);
			cp2 = Protein.rotatePointAboutPoint([x2, height - arcRadius], end, 20);
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
	}
}


Protein.prototype.showPeptides = function(pepBounds) {
	if (this.form=== 1){		
		var y = -Protein.STICKHEIGHT / 2;
		
        var count = pepBounds.length;
        var yIncrement = Protein.STICKHEIGHT / count;
        for (var i = 0; i < count; i++) {
            var pep = pepBounds[i];
                   
            var annotColouredRect = document.createElementNS(xiNET.svgns, "rect");
            annotColouredRect.setAttribute("class", "protein");

            //make domain rect's
            var annoSize = pep[1];
            if (annoSize > 0){
				var annotX = ((pep[0] + 0.5) - (this.size/2)) * Protein.UNITS_PER_RESIDUE;//this.getResXUnzoomed(pep[0] + 0.5);
				var annoLength = annoSize * Protein.UNITS_PER_RESIDUE;
				annotColouredRect.setAttribute("x", annotX);
				annotColouredRect.setAttribute("y", y);
				annotColouredRect.setAttribute("width", annoLength);
				annotColouredRect.setAttribute("height", yIncrement);
				//style 'em
				annotColouredRect.setAttribute("fill", xiNET.highlightColour.toRGB());
				//annotColouredRect.setAttribute("fill-opacity", "0.7");
				this.peptides.appendChild(annotColouredRect);
			}
			
			if (pep[2]){//homodimer like
				//TODO: eliminate duplication
				annotColouredRect = document.createElementNS(xiNET.svgns, "rect");
				annotColouredRect.setAttribute("class", "protein");
				var annotX = ((pep[2] + 0.5) - (this.size/2)) * Protein.UNITS_PER_RESIDUE;//this.getResXUnzoomed(pep[0] + 0.5);
				var annoLength = (pep[3] - pep[2]) * Protein.UNITS_PER_RESIDUE;
				annotColouredRect.setAttribute("x", annotX);
				annotColouredRect.setAttribute("y", y);
				annotColouredRect.setAttribute("width", annoLength);
				annotColouredRect.setAttribute("height", yIncrement);

				//style 'em
				annotColouredRect.setAttribute("fill", xiNET.homodimerLinkColour.toRGB());
				annotColouredRect.setAttribute("fill-opacity", "0.5");
				
				this.peptides.appendChild(annotColouredRect);		
			}
            y += yIncrement;
        }
   }		
}

Protein.prototype.removePeptides = function() {
	this.xlv.emptyElement(this.peptides);
}

Protein.prototype.getResXwithStickZoom = function(r) {
    return (r - (this.size/2)) * Protein.UNITS_PER_RESIDUE * this.stickZoom;
 };

Protein.rotatePointAboutPoint = function(p, o, theta) {
	theta = (theta / 360) * Math.PI * 2;
	var rx = Math.cos(theta) * (p[0]-o[0]) - Math.sin(theta) * (p[1]-o[1]) + o[0];
	var ry = Math.sin(theta) * (p[0]-o[0]) + Math.cos(theta) * (p[1]-o[1]) + o[1];
	return [rx, ry];
}

Protein.prototype.checkLinks = function() {
    var links = this.proteinLinks.values();
    var c = links.length;
    for (var l = 0; l < c; l++) {
        links[l].check();
    }
}

// update all lines (e.g after a move)
Protein.prototype.setAllLineCoordinates = function() {
    var links = this.proteinLinks.values();
    var c = links.length;
    for (var l = 0; l < c; l++) {
        var link = links[l];
        if (link.getToProtein() !== null && 
			link.getFromProtein().form === 0 && link.getToProtein().form === 0) {
             link.setLineCoordinates(this);
        }
        else {
            var resLinks = link.residueLinks.values();
            var resLinkCount = resLinks.length;
            for (var rl = 0; rl < resLinkCount; rl++) {
                var residueLink = resLinks[rl];
                residueLink.setLineCoordinates(this);
                var otherEnd = residueLink.proteinLink.getOtherEnd(this);
                if (otherEnd && otherEnd.form === 1	&& otherEnd.stickZoom * Protein.UNITS_PER_RESIDUE > 8){
					residueLink.setLineCoordinates(otherEnd);
				}
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
   if (this.subgraph == null) { // don't check for undefined here
        var subgraph = {
            nodes: d3.map(),
            links: d3.map()
        };
        subgraph.nodes.set(this.id, this);
        if (this.isParked === false) {
            this.subgraph = this.addConnectedNodes(subgraph);
        }
        this.xlv.subgraphs.push(subgraph); 
    }
    return this.subgraph;
};

Protein.prototype.addConnectedNodes = function(subgraph) {
    var links = this.proteinLinks.values();
    var c = links.length;
    for (var l = 0; l < c; l++) {
		var link = links[l];
		//visible, non-self links only
        if (link.fromProtein !== link.toProtein && link.check() === true) {
            if (!subgraph.links.has(link.id)) {
                subgraph.links.set(link.id, link);
                var otherEnd;
                if (link.getFromProtein() === this) {
                    otherEnd = link.getToProtein();
                }
                else {
                    otherEnd = link.getFromProtein();
                }
                if (otherEnd !== null) {
					if (!subgraph.nodes.has(otherEnd.id)) {
						subgraph.nodes.set(otherEnd.id, otherEnd);
						otherEnd.subgraph = subgraph;
						otherEnd.addConnectedNodes(subgraph);
					}
				}
            }
        }
    }
    return subgraph;
};


Protein.prototype.setPositionalFeatures = function(posFeats) {
    this.annotations = [];
    
    if (this.circDomains) this.xlv.emptyElement(this.circDomains);
    if (this.rectDomains) this.xlv.emptyElement(this.rectDomains);
    
    if (posFeats !== undefined && posFeats !== null) {
        var y = -Protein.STICKHEIGHT / 2;
        //draw longest regions first
        posFeats.sort(function(a, b) {
            return (b.end - b.start) - (a.end - a.start);
        });     
        
        for (var i = 0; i < posFeats.length; i++) {
            var anno = posFeats[i];
            anno.start = anno.start - 0;
            anno.end = anno.end - 0;
            var annotPieSlice = document.createElementNS(xiNET.svgns, "path");
            var annotColouredRect = document.createElementNS(xiNET.svgns, "path");
            
            this.annotations.push({anno:anno, pieSlice:annotPieSlice, rect:annotColouredRect});
           // alert(this.form);
            if (this.form === 0) { 
				annotPieSlice.setAttribute("d", this.getAnnotationPieSliceArcPath(anno));
				annotColouredRect.setAttribute("d", this.getAnnotationPieSliceApproximatePath(anno));
			} else {
				annotPieSlice.setAttribute("d", this.getAnnotationRectPath(anno));
				annotColouredRect.setAttribute("d", this.getAnnotationRectPath(anno));
			}
            annotPieSlice.setAttribute("stroke", "none");
            annotColouredRect.setAttribute("stroke", "none");
            
            var c;
            //temp
            if (anno.colour == null) { // check == here
                if (anno.name === 'alpha_helix') {
                    c = new RGBColor('#7EB6FF88');
                }
                else if (anno.name === 'beta_strand') {
                    c = new RGBColor('#9AFF9A88');
                }
                else if (anno.name === 'turn') {
                    c = new RGBColor('#FF00AA88');
                }
                else {
                    c = new RGBColor(Protein.domainColours(anno.name));
                }
            }
            else {
                c = anno.colour;
            }
            annotPieSlice.setAttribute("fill", c.toRGB());//"rgb(" + c.r + "," + c.g + "," + c.b + ")");
            annotPieSlice.setAttribute("fill-opacity", "0.5");
            annotColouredRect.setAttribute("fill", c.toRGB());// "rgb(" + c.r + "," + c.g + "," + c.b + ")");
            annotColouredRect.setAttribute("fill-opacity", "0.5");
            
            var text = anno.name + " [" + anno.start + " - " + anno.end + "]";
            annotPieSlice.name = text;
            //~ annotMouseEventRect.name = text;
            var xlv = this.xlv;
            var self = this;
            annotPieSlice.onmouseover = function(evt) {
                //    for magnifier experiment
                var el = (evt.target.correspondingUseElement) ? evt.target.correspondingUseElement : evt.target;
                xlv.preventDefaultsAndStopPropagation(evt);
                xlv.setTooltip(el.name, el.getAttribute('fill'));
                self.showHighlight(true);
            };
            annotColouredRect.onmouseover = function(evt) {
                //    for magnifier experiment
                var el = (evt.target.correspondingUseElement) ? evt.target.correspondingUseElement : evt.target;
                xlv.preventDefaultsAndStopPropagation(evt);
                xlv.setTooltip(el.name, el.getAttribute('fill'));
                self.showHighlight(true);
            };
            this.circDomains.appendChild(annotPieSlice);
            this.rectDomains.appendChild(annotColouredRect);
        }
    }
};

//TODO: remove this, use rotateAboutPoint instead
Protein.trig = function(radius, angleDegrees) {
		//x = rx + radius * cos(theta) and y = ry + radius * sin(theta)
		var radians = (angleDegrees / 360) * Math.PI * 2;
		return {
			x: (radius * Math.cos(radians)),
			y: (radius * Math.sin(radians))
		};
};
Protein.stepsInArc = 5;

Protein.prototype.getAnnotationPieSliceArcPath = function(annotation) {
	var startAngle = ((annotation.start - 1) / this.size) * 360;
	var endAngle = ((annotation.end) / this.size) * 360;
	var radius = this.getBlobRadius() - 2;
	var arcStart = Protein.trig(radius, startAngle - 90);
	var arcEnd = Protein.trig(radius, endAngle - 90);
	var largeArch = 0;
	if ((endAngle - startAngle) > 180) {
		largeArch = 1;
	}
	return "M0,0 L" + arcStart.x + "," + arcStart.y + " A" + radius + "," 
		+ radius + " 0 " + largeArch + " 1 " + arcEnd.x + "," + arcEnd.y + " Z";
};

Protein.prototype.getAnnotationPieSliceApproximatePath = function(annotation) {
	//approximate pie slice
	var startAngle = ((annotation.start - 1) / this.size) * 360;
	var endAngle = ((annotation.end) / this.size) * 360;
	var pieRadius = this.getBlobRadius() - 2;
	var arcStart = Protein.trig(pieRadius, startAngle - 90);
	var arcEnd = Protein.trig(pieRadius, endAngle - 90);
	var approximatePiePath = "M 0,0";
	var stepsInArc = 5;
	for (var sia = 0; sia <= Protein.stepsInArc; sia++) {
		var angle = startAngle + ((endAngle - startAngle) * (sia / stepsInArc));
		var siaCoord = Protein.trig(pieRadius, angle - 90);
		approximatePiePath += " L " + siaCoord.x + "," + siaCoord.y;
	}
	approximatePiePath += " L " + 0 + "," + 0;
	approximatePiePath += "  Z";
	return approximatePiePath;
};

Protein.prototype.getAnnotationRectPath = function(annotation) {
	//domain as rectangle path
	var bottom = Protein.STICKHEIGHT / 2, top = -Protein.STICKHEIGHT / 2;
	var annotX =  ((annotation.start - 0.5) - (this.size/2)) * Protein.UNITS_PER_RESIDUE;//this.getResXUnzoomed(annotation.start - 0.5);
	//~ //Ouch!! Without brackets following may do string concatenation
	var annotSize = (1 + (annotation.end - annotation.start));
	var annotLength = annotSize * Protein.UNITS_PER_RESIDUE;
	var rectPath = "M " + annotX + "," + bottom;
	for (var sia = 0; sia <= Protein.stepsInArc; sia++) {
		var step = annotX + (annotLength * (sia / Protein.stepsInArc));
		rectPath += " L " + step + "," + top;
	}		
	rectPath +=  " L " + (annotX  + annotLength)+ "," + bottom 
		+ " Z";
	return rectPath;
};
