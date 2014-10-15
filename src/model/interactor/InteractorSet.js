//    	xiNET Interaction Viewer
//    	Copyright 2013 Rappsilber Laboratory
//
//    	This product includes software developed at
//    	the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//		
//		InteractorSet.js		
//
//		authors: Colin Combe

"use strict";

var Interactor = require('./Interactor');
var Config = require('../../controller/Config');

InteractorSet.prototype = new Interactor();

function InteractorSet(id, xlvController, json) {
    this.id = id; // id may not be accession (multiple Segments with same accesssion)
    this.ctrl = xlvController;
    this.json = json;  
    //links
    this.naryLinks = d3.map();
    this.binaryLinks = d3.map();
    this.selfLink = null;
    this.sequenceLinks = d3.map();
}

InteractorSet.prototype.toJSON = function() {
    return {
        interactor: this.json
		//~ id: this.id
    };
};

InteractorSet.prototype.initInteractor = function(sequence, name, description, size)
{
    //this.accession = this.json.identifier.id;
    this.name = name;
    //this.organism = this.json.organism;
	
	this.size = 10;//HACK
	
    this.description = description;
    this.tooltip = this.description;
    if (this.name == null) {
        this.name = name;
    }
   
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
	    
	var r = this.getBlobRadius();

    /*
     * Lower group
     * svg group for elements that appear underneath links
     */
    this.lowerGroup = document.createElementNS(Config.svgns, "g");
    this.lowerGroup.setAttribute("class", "protein lowerGroup");
 	//for polygon
 	var points = "0, -10  8.66,5 -8.66,5";
 	//make highlight
    this.highlight = document.createElementNS(Config.svgns, "polygon");
    this.highlight.setAttribute("points", points);
      //invariant attributes
    if (xiNET.highlightColour !== undefined) {
        this.highlight.setAttribute("stroke", xiNET.highlightColour.toRGB());
	}
    this.highlight.setAttribute("stroke-width", "5");   
    this.highlight.setAttribute("fill", "none");   
    //this.highlight.setAttribute("fill-opacity", 1);   
    //attributes that may change
    d3.select(this.highlight).attr("stroke-opacity", 0);
	this.lowerGroup.appendChild(this.highlight);   
    

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
    this.labelSVG.setAttribute("fill", "red")
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
   	
     
	//make outline
    //http://stackoverflow.com/questions/17437408/how-do-i-change-a-circle-to-a-square-using-d3
	this.outline = document.createElementNS(Config.svgns, "rect");
	
	    //make blob
    //~ if (this.accession.indexOf("CHEBI") !== -1) {
        this.outline = document.createElementNS(Config.svgns, "polygon");
        this.outline.setAttribute("points", points);
        //~ this.blobHighlight = document.createElementNS(Config.svgns, "polygon");
        //~ this.blobHighlight.setAttribute("points", points);
        //~ this.parked = document.createElementNS(Config.svgns, "polygon");
        //~ this.parked.setAttribute("points", points);
    //~ }
	
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

InteractorSet.prototype.getBlobRadius = function() {
    return 10;
};

InteractorSet.prototype.setParked = function(bool, svgP) {
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

InteractorSet.prototype.setForm = function(form, svgP) {
};


InteractorSet.prototype.toParked = function(svgP) {   
    var c = this.links.values().length;
    for (var l = 0; l < c; l++) {
        var link = this.links.values()[l];
        //out with the old (i.e. all links)
        link.hide();
		if (link.sequenceLinks) {
			var resLinks = link.sequenceLinks.values();
			var resLinkCount = resLinks.length; 
			for (var rl = 0; rl < resLinkCount; rl++) {
				var resLink = resLinks[rl];
				resLink.hide();
			}
		}
	}       
    
		d3.select(this.outline).transition()
			.attr("stroke-opacity", 0)
			.attr("fill", "#EEEEEE")
			.duration(InteractorSet.transitionTime);	
		d3.select(this.circDomains).transition().attr("opacity", 0)
			.attr("transform", "scale(1, 1)")
			.duration(InteractorSet.transitionTime);	
};

module.exports = InteractorSet;
