//      xiNET interaction viewer
//      Copyright 2014 Rappsilber Laboratory
//
//      This product includes software developed at
//      the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//
//      author: Colin Combe, Josh Heimbach
//
//		NaryLink.js
//		graphically represents n-ary interactions

"use strict";

var colorbrewer = require('../../../node_modules/colorbrewer/colorbrewer');
var Link = require('./Link');
var Config = require('../../controller/Config');
var Interactor = require('../interactor/Interactor');

NaryLink.naryColours = d3.scale.ordinal().range(colorbrewer.Paired[6]);//d3.scale.category20c();//d3.scale.ordinal().range(colorbrewer.Paired[12]);//
NaryLink.orbitNodes = 16;
NaryLink.orbitRadius = 20;

NaryLink.prototype = new Link();

function NaryLink(id, xlvController) {
    this.id = id;
    this.evidences = d3.map();
    this.interactors = new Array();
    this.sequenceLinks = d3.map();
    this.binaryLinks = d3.map();
    this.unaryLinks = d3.map();
    this.ctrl = xlvController;
    this.tooltip = this.id;
    //used to avoid some unnecessary manipulation of DOM
    this.shown = false;
    //layout stuff
    this.hidden = false;  
    this.initSVG();
}

NaryLink.prototype.initSVG = function() {
    this.path = document.createElementNS(Config.svgns, "path");
    this.path.setAttribute('fill', NaryLink.naryColours(this.id));
    this.path.setAttribute('fill-opacity', 0.3);

    //set the events for it
    var self = this;
    this.path.onmousedown = function(evt) {
        self.mouseDown(evt);
    };
    this.path.onmouseover = function(evt) {
        self.mouseOver(evt);
    };
    this.path.onmouseout = function(evt) {
        self.mouseOut(evt);
    };
    this.path.ontouchstart = function(evt) {
        self.touchStart(evt);
    };
};

NaryLink.prototype.showHighlight = function(show) {
    if (this.shown) {
        this.highlightInteractors(show);
    }
};


NaryLink.prototype.check = function() {
    this.show();  
    return true;
};

NaryLink.prototype.show = function() {
    if (this.ctrl.initComplete) {
        if (!this.shown) {
            this.shown = true;
            this.path.setAttribute("stroke-width", this.ctrl.z * 1);
            this.setLinkCoordinates();
            this.ctrl.naryLinks.appendChild(this.path);
        }
    }
};

NaryLink.prototype.hide = function() {
    if (this.ctrl.initComplete) {
		if (this.shown) {
			this.shown = false;
			if (this.thickLineShown) {
				this.ctrl.p_pLinksWide.removeChild(this.thickLine);
			}
			this.ctrl.p_pLinks.removeChild(this.path);
		}
	}
};

NaryLink.prototype.setLinkCoordinates = function(interactor) {
    // Uses d3.geom.hull to calculate a bounding path around an array of vertices 
    var calculateHullPath = function(values) {
		var calced = d3.geom.hull(values);
		self.hull = calced;//hack?
		return "M" + calced.join("L") + "Z";
    };
	var self = this;// TODO: - tidy hack above
    if (this.shown) {//don't waste time changing DOM if link not visible
		var mapped = this.orbitNodes(this.getMappedCoordinates());
        var hullValues = calculateHullPath(mapped);
        if (hullValues) {
            this.path.setAttribute('d', hullValues);
        }
    }
    if (this.complex){
		this.complex.setAllLinkCoordinates();
	}
};

NaryLink.prototype.getMappedCoordinates = function() {
	var interactors = this.interactors;
	var mapped = new Array();
	var ic = interactors.length;
	for (var i = 0; i < ic; i ++) {
		var interactor = interactors[i];
		if (interactor.form === 1){
			var start = interactor.getResidueCoordinates(0);
			var end = interactor.getResidueCoordinates(interactor.size);
			if (!isNaN(start[0]) && !isNaN(start[1]) && 
								!isNaN(end[0]) && !isNaN(end[1])){
				mapped.push(start);
				mapped.push(end);
			} else {
				mapped.push(interactor.getPosition());
			}
		} else {
			mapped.push(interactor.getPosition());
		}
	}
	return mapped;
}

//'orbit' nodes - several nodes around interactor positions to give margin
NaryLink.prototype.orbitNodes = function(mapped) {
	var orbitNodes = new Array();
	var mc = mapped.length;
	for (var mi = 0; mi < mc; mi++){
		var m = mapped[mi];
		for (var o = 0; o < NaryLink.orbitNodes; o++){
			var angle = (360 / NaryLink.orbitNodes) * o;
			var p = [m[0] + NaryLink.orbitRadius, m[1]];
			orbitNodes.push(Interactor.rotatePointAboutPoint(p, m, angle));
		}
	}
	return orbitNodes;
}


module.exports = NaryLink;
