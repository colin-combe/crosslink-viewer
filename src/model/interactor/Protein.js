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

var Molecule = require('./Molecule');
var Polymer = require('./Polymer');
var Rotator = require('../../controller/Rotator');
var Config = require('../../controller/Config');

Protein.prototype = new Polymer();

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
    if (this.name) {
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
		"translate( " + (this.x - 5) + " " + (this.y + Molecule.labelY) + ") rotate(0) scale(1, 1)");
    
    this.labelContainer = document.createElementNS(Config.svgns, "g");
    this.labelContainer.appendChild(this.labelSVG);   	
   	
   	//ticks (and animo acid letters)
    this.ticks = document.createElementNS(Config.svgns, "g");
    //svg group for annotations
	this.annotationsSvgGroup = document.createElementNS(Config.svgns, "g");
    this.annotationsSvgGroup.setAttribute("opacity", 1);
	this.upperGroup.appendChild(this.annotationsSvgGroup);
	 
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
    
    this.labelSVG.onmousedown = function(evt) {
		self.mouseDown(evt, true);
    };
    this.labelSVG.onmouseover = function(evt) {
		self.mouseOver(evt);
    };
    this.labelSVG.onmouseout = function(evt) {
		self.mouseOut(evt);
    };
    this.labelSVG.ontouchstart = function(evt) {
		self.touchStart(evt, true);
    };

    
    this.isSelected = false;
	this.showHighlight(false);
};

Protein.prototype.showData = function(evt) {
    var url = "http://www.uniprot.org/uniprot/" + this.json.identifier.id;
	//~ alert (url);
	var win = window.open(url, '_blank');
	//~ win.focus();
}
module.exports = Protein;
