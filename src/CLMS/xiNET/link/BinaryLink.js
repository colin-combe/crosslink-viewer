//    xiNET interaction viewer
//    Copyright 2013 Rappsilber Laboratory
//
//    This product includes software developed at
//    the Rappsilber Laboratory (http://www.rappsilberlab.org/).

"use strict";

var Config = require('../../controller/Config');
var Link = require('./Link');
var SequenceLink = require('./SequenceLink');
//josh - following are libraries and should be in 'vendor'?
//  but I don't know how to set up the dependency if its there
var Intersection = require('intersectionjs');
var Point2D = require('point2d');

// BinaryLink.js
// the class representing a binary interaction

BinaryLink.prototype = new Link();

function BinaryLink(id, xlvController, fromI, toI) {
    this.id = id;
    this.evidences = d3.map();
    this.interactors = [fromI, toI];
    this.sequenceLinks = d3.map();
    this.controller = xlvController;
}

//~ BinaryLink.prototype.getToolTip = function(){
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
//~ tooltip += this.interactors[1].labelText + " ";
//~ tooltip += toResidues;
//~ return tooltip;
//~ }

BinaryLink.prototype.initSVG = function() {
    this.line = document.createElementNS(Config.svgns, "line");
    this.highlightLine = document.createElementNS(Config.svgns, "line");
    this.thickLine = document.createElementNS(Config.svgns, "line");

    this.line.setAttribute("class", "link");
    this.line.setAttribute("fill", "none");
    this.line.setAttribute("stroke", "black");
    this.line.setAttribute("stroke-width", "1");
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
};
BinaryLink.prototype.showHighlight = function(show) {
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

BinaryLink.prototype.check = function() {
    if (this.interactors[0].participant.form === 0 && this.interactors[1].participant.form === 0) {
        this.show();
        return true;
    } else { //at least one end was in stick form
        this.hide();
        return false;
    }
};

BinaryLink.prototype.show = function() {
    if (typeof this.line === 'undefined') {
        this.initSVG();
    }
    this.line.setAttribute("stroke-width", this.controller.z * 1);
    this.highlightLine.setAttribute("stroke-width", this.controller.z * 10);
    this.setLinkCoordinates(this.interactors[0]);
    this.setLinkCoordinates(this.interactors[1]);
    if (this.thickLineShown) {
        this.controller.p_pLinksWide.appendChild(this.thickLine);
    }
    this.controller.highlights.appendChild(this.highlightLine);
    this.controller.p_pLinks.appendChild(this.line);
    if (this.thickLineShown) {
        this.thickLine.setAttribute("stroke-width", this.w);
    }
};

BinaryLink.prototype.hide = function() {
    var p_pLinksWide = []
    var highlights = []
    var p_pLinks = []

    for (var i = 0; i < this.controller.p_pLinksWide.childNodes.length; i++) {
        p_pLinksWide[i] = this.controller.p_pLinksWide.childNodes[i];
    }

    for (var i = 0; i < this.controller.highlights.childNodes.length; i++) {
        highlights[i] = this.controller.highlights.childNodes[i];
    }

    for (var i = 0; i < this.controller.p_pLinks.childNodes.length; i++) {
        p_pLinks[i] = this.controller.p_pLinks.childNodes[i];
    }

    if (p_pLinksWide.indexOf(this.thickLine) > -1) {
        this.controller.p_pLinksWide.removeChild(this.thickLine);
    }
    if (highlights.indexOf(this.highlightLine) > -1) {
        this.controller.highlights.removeChild(this.highlightLine);
    }
    if (p_pLinks.indexOf(this.line) > -1) {
        this.controller.p_pLinks.removeChild(this.line);
    }
};

BinaryLink.prototype.setLinkCoordinates = function() {
    var pos1 = this.interactors[0].getPosition();
    var pos2 = this.interactors[1].getPosition();

    if (this.interactors[0].type === 'complex') {
        var naryPath = this.interactors[0].naryLink.hull;
        var iPath = new Array();
        for (var pi = 0; pi < naryPath.length; pi++) {
            var p = naryPath[pi];
            iPath.push(new Point2D(p[0], p[1]));
        }
        var a1 = new Point2D(pos1[0], pos1[1]);
        var a2 = new Point2D(pos2[0], pos2[1]);
        var intersect = Intersection.intersectLinePolygon(a1, a2, iPath);
        var newPos;
        if (intersect.points[0]) {
            pos1 = [intersect.points[0].x, intersect.points[0].y];
        }
    }

    if (this.interactors[1].type === 'complex') {
        var naryPath = this.interactors[0].naryLink.hull;
        var iPath = new Array();
        for (var pi = 0; pi < naryPath.length; pi++) {
            var p = naryPath[pi];
            iPath.push(new Point2D(p[0], p[1]));
        }
        var a1 = new Point2D(pos1[0], pos1[1]);
        var a2 = new Point2D(pos2[0], pos2[1]);
        var intersect = Intersection.intersectLinePolygon(a1, a2, iPath);
        var newPos;
        if (intersect.points[0]) {
            pos2 = [intersect.points[0].x, intersect.points[0].y];
        }
    }

    this.line.setAttribute("x1", pos1[0]);
    this.line.setAttribute("y1", pos1[1]);
    this.highlightLine.setAttribute("x1", pos1[0]);
    this.highlightLine.setAttribute("y1", pos1[1]);
    if (this.thickLineShown) {
        this.thickLine.setAttribute("x1", pos1[0]);
        this.thickLine.setAttribute("y1", pos1[1]);
    }
    this.line.setAttribute("x2", pos2[0]);
    this.line.setAttribute("y2", pos2[1]);
    this.highlightLine.setAttribute("x2", pos2[0]);
    this.highlightLine.setAttribute("y2", pos2[1]);
    if (this.thickLineShown) {
        this.thickLine.setAttribute("x2", pos2[0]);
        this.thickLine.setAttribute("y2", pos2[1]);
    }
};

BinaryLink.prototype.getOtherEnd = function(interactor) {
    return ((this.interactors[0] === interactor) ? this.interactors[1] : this.interactors[0]);
};

module.exports = BinaryLink;
