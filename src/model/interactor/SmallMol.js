//    	xiNET Interaction Viewer
//    	Copyright 2013 Rappsilber Laboratory
//
//    	This product includes software developed at
//    	the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//		
//		SmallMol.js		
//
//		authors: Colin Combe

"use strict";

var Interactor = require('./Interactor');
var Config = require('../../controller/Config');

SmallMol.prototype = new Interactor();

function SmallMol(id, xlvController, json) {
    this.id = id; // id may not be accession (multiple Segments with same accesssion)
    this.ctrl = xlvController;
    this.json = json;  
    //links
    this.naryLinks = d3.map();
    this.binaryLinks = d3.map();
    this.selfLink = null;
    this.sequenceLinks = d3.map();
}

SmallMol.prototype.initInteractor = function(name)
{
    this.name = name;
    // layout info
    this.x = null;
    this.y = null;
    this.rotation = 0;
    this.previousRotation = this.rotation;
    this.stickZoom = 1;
    this.form = 0;//null; // 0 = blob, 1 = stick
    this.isParked = false;
    this.isSelected = false;
    
    this.size = 10;//hack, layout is using this
       
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
    this.highlight.setAttribute("stroke", Config.highlightColour);
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
    this.labelSVG.setAttribute("fill", "black")
    this.labelSVG.setAttribute("x", 0);
    this.labelSVG.setAttribute("y", 10);
    this.labelSVG.setAttribute("class", "protein xlv_text proteinLabel");
    this.labelSVG.setAttribute('font-family', 'Arial');
    this.labelSVG.setAttribute('font-size', '16');
    
    this.labelText = this.name;
    this.labelTextNode = document.createTextNode(this.labelText);
    this.labelSVG.appendChild(this.labelTextNode);
    d3.select(this.labelSVG).attr("transform", 
		"translate( -" + (15) + " " + Interactor.labelY + ")");
    this.upperGroup.appendChild(this.labelSVG);
   	 
	//make outline
    //http://stackoverflow.com/questions/17437408/how-do-i-change-a-circle-to-a-square-using-d3
	this.outline = document.createElementNS(Config.svgns, "rect");
	
	//make blob
	this.outline = document.createElementNS(Config.svgns, "polygon");
	this.outline.setAttribute("points", points);
   
    this.outline.setAttribute("stroke", "black");
    this.outline.setAttribute("stroke-width", "1");
    d3.select(this.outline).attr("stroke-opacity", 1).attr("fill-opacity", 1)
			.attr("fill", "#ffffff");
    //append outline
    this.upperGroup.appendChild(this.outline);

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

SmallMol.prototype.setForm = function(form, svgP) {
};

module.exports = SmallMol;
