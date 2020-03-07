//    	xiNET Interaction Viewer
//    	Copyright 2013 Rappsilber Laboratory
//
//    	This product includes software developed at
//    	the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//
//		author: Colin Combe
//
// 		UnaryLink.js
// 		the class representing a self-link

"use strict";

var Config = require('../../controller/Config');
var Link = require('./Link');
var SequenceLink = require('./SequenceLink');

UnaryLink.prototype = new Link();

function UnaryLink(id, xlvController, interactor) {
    this.id = id;
    this.evidences = d3.map();
    this.interactors = [interactor];
    this.sequenceLinks = d3.map();
    this.controller = xlvController;
    this.initSVG();
};

//~ UnaryLink.prototype.getToolTip = function(){
//~ var tooltip = "", fromResidues = "", toResidues = "";
//~ var seqLinks = this.sequenceLinks.values();
//~ var seqLinkCount = seqLinks.length;
//~ for (var sl = 0; sl < seqLinkCount; sl++){
//~ if (sl > 0){
//~ fromResidues += ",";
//~ toResidues += ",";
//~ }
//~ var seqLink = seqLinks[sl];
//~ for (var i = 0; i < seqLink.fromSequenceData.length; i++){
//~ if (i > 0) tooltip += ",";
//~ fromResidues += seqLink.fromSequenceData[i].toString();
//~ }
//~ for (var j = 0; j < seqLink.toSequenceData.length; j++){
//~ if (j > 0) tooltip += ",";
//~ toResidues += seqLink.toSequenceData[j].toString();
//~ }
//~ }
//~ tooltip += this.interactors[0].labelText + " ";
//~ tooltip += fromResidues;
//~ tooltip += " TO ";
//~ tooltip += this.interactors[0].labelText + " ";
//~ tooltip += toResidues;
//~ return tooltip;
//~ };

UnaryLink.prototype.initSVG = function() {
    var path = this.interactors[0].getAggregateSelfLinkPath();
    this.line = document.createElementNS(Config.svgns, "path");
    this.line.setAttribute('d', path);
    this.highlightLine = document.createElementNS(Config.svgns, 'path');
    this.highlightLine.setAttribute('d', path);
    this.thickLine = document.createElementNS(Config.svgns, 'path');
    this.thickLine.setAttribute('d', path);

    this.line.setAttribute("class", "link");
    this.line.setAttribute("fill", "none");
    this.line.setAttribute("stroke", "black");
    this.line.setAttribute("stroke-width", 1);
    this.line.setAttribute("stroke-linecap", "round");
    this.highlightLine.setAttribute("class", "link");
    this.highlightLine.setAttribute("fill", "none");
    this.highlightLine.setAttribute("stroke", Config.highlightColour);
    this.highlightLine.setAttribute("stroke-width", "10");
    this.highlightLine.setAttribute("stroke-linecap", "round");
    this.highlightLine.setAttribute("stroke-opacity", "0");
    this.thickLine.setAttribute("class", "link");
    this.thickLine.setAttribute("fill", "none");
    this.thickLine.setAttribute("stroke", "lightgray");
    this.thickLine.setAttribute("stroke-linecap", "round");
    this.thickLine.setAttribute("stroke-linejoin", "round");
    //set the events for it
    var self = this;
    this.line.onmousedown = function(evt) {
        self.mouseDown(evt);
    };
    this.line.onmouseover = function(evt) {
        self.mouseOver(evt);
    };
    this.line.onmouseout = function(evt) {
        self.mouseOut(evt);
    };
    this.line.ontouchstart = function(evt) {
        self.touchStart(evt);
    };

    this.highlightLine.onmousedown = function(evt) {
        self.mouseDown(evt);
    };
    this.highlightLine.onmouseover = function(evt) {
        self.mouseOver(evt);
    };
    this.highlightLine.onmouseout = function(evt) {
        self.mouseOut(evt);
    };
    this.highlightLine.ontouchstart = function(evt) {
        self.touchStart(evt);
    };

    this.thickLine.onmousedown = function(evt) {
        self.mouseDown(evt);
    };
    this.thickLine.onmouseover = function(evt) {
        self.mouseOver(evt);
    };
    this.thickLine.onmouseout = function(evt) {
        self.mouseOut(evt);
    };
    this.thickLine.ontouchstart = function(evt) {
        self.touchStart(evt);
    };

    this.isSelected = false;
}

UnaryLink.prototype.selfLink = function() {
    return (this.fromProtein === this.toProtein);
}

UnaryLink.prototype.initSelfLinkSVG = function() {
    var path = this.interactors[0].getAggregateSelfLinkPath();
    this.line.setAttribute('d', path);
    this.highlightLine.setAttribute('d', path);
    this.thickLine.setAttribute('d', path);
};

UnaryLink.prototype.showHighlight = function(show) {
    if (this.notSubLink === true) {
        this.highlightMolecules(show);
    }
    if (show) {
        //~ this.highlightLine.setAttribute("stroke", xiNET.highlightColour.toRGB());
        this.highlightLine.setAttribute("stroke-opacity", "1");
    } else {
        //~ this.highlightLine.setAttribute("stroke", xiNET.selectedColour.toRGB());
        //~ if (this.isSelected === false) {
        this.highlightLine.setAttribute("stroke-opacity", "0");
        //~ }
    }
};

UnaryLink.prototype.check = function() {
    if (this.interactors[0].participant.form !== 1) {
        this.show();
        return true;
    } else {
        this.hide();
        return false;
    }
};

UnaryLink.prototype.show = function() {
    this.line.setAttribute("transform", "translate(" + this.interactors[0].x +
        " " + this.interactors[0].y + ")" + " scale(" + (this.controller.z) + ")");
    this.highlightLine.setAttribute("transform", "translate(" + this.interactors[0].x +
        " " + this.interactors[0].y + ")" + " scale(" + (this.controller.z) + ")");
    this.controller.highlights.appendChild(this.highlightLine);
    this.controller.p_pLinks.appendChild(this.line);
};


UnaryLink.prototype.setLinkCoordinates = function() {
    var interactor = this.interactors[0];
    if (typeof this.thickLine !== 'undefined') {
        this.thickLine.setAttribute("transform", "translate(" + interactor.x +
            " " + interactor.y + ")" + " scale(" + (this.controller.z) + ")");
    }
    this.line.setAttribute("transform", "translate(" + interactor.x +
        " " + interactor.y + ")" + " scale(" + (this.controller.z) + ")");
    this.highlightLine.setAttribute("transform", "translate(" + interactor.x +
        " " + interactor.y + ")" + " scale(" + (this.controller.z) + ")");
};

module.exports = UnaryLink;
