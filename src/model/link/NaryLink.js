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
//~ var SequenceLink = require('./SequenceLink');
//~ var BinaryLink = require('./BinaryLink');
//~ var UnaryLink = require('./UnaryLink');
var Config = require('../../controller/Config');

NaryLink.naryColours = d3.scale.ordinal().range(colorbrewer.Paired[6]);//d3.scale.category20c();//d3.scale.ordinal().range(colorbrewer.Paired[12]);//

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
    this.path.setAttribute('opacity', 0.3);
    this.path.setAttribute('stroke', NaryLink.naryColours(this.id));
    this.path.setAttribute('stroke-linejoin', 'round');
    this.path.setAttribute('stroke-width', 40);

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
        //we will iterate through all interactors and sublinks and highlight them
        this.highlightInteractors(show);
        //~ var subLinks = this.subLinks.values();
        //~ for (var s = 0; s < subLinks.length; s++) {
            //~ subLinks[s].showHighlight(show);
        //~ }
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
            if (typeof this.path === 'undefined') {
                this.initSVG();
            }
            // this.path.setAttribute("stroke-width", this.ctrl.z * 1);
            this.setLinkCoordinates();
            this.ctrl.naryLinks.appendChild(this.path);
        }
    }
};

NaryLink.prototype.hide = function() {
    //~ if (this.shown) {
        //~ this.shown = false;
        //~ if (this.thickLineShown) {
            //~ this.ctrl.p_pLinksWide.removeChild(this.thickLine);
        //~ }
        //this.ctrl.highlights.removeChild(this.highlightLine);
        //~ this.ctrl.p_pLinks.removeChild(this.path);
    //~ }
};

NaryLink.prototype.setLinkCoordinates = function(interactor) {

    // Uses d3.geom.hull to calculate a bounding path around an array of vertices 
    var calculateHullPath = function(values) {
        
        // d3.geom.hull does not like a situation where there are less than three points. 
        if (values.length == 2) {
            return "M" + values[0] + "L" + values[1] + "Z";
        } else if (values.length == 1) {
            // A single point SVG path does not get stroked, so the browser won't render something like the following:
            // return "M" + values[0] + "L" + values[0] + "Z";
            // A possible fix would be to transform the point into a tiny box, but do we care? Should single nodes get links?
            
            //josh, see hack in getMappedCoordinates()
            
            return;
        }

        // If all points are 0,0 then we can't have a path! (This breaks the d3 hull function)
        var haspoints = values.some(function(nextpoint) {
            return nextpoint.some(function(coordinate) {
                return coordinate !== 0;
            })
        });

        if (haspoints) {
            var calced = d3.geom.hull(values);
            return "M" + calced.join("L") + "Z";
        }

    };

    if (this.shown) {//don't waste time changing DOM if link not visible
		var mapped = this.getMappedCoordinates();
        var hullValues = calculateHullPath(mapped);
        if (hullValues) {
            this.path.setAttribute('d', hullValues);
        }
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
	//hack - not saying this best way to deal with this
	if (mapped.length === 1) mapped.push(interactors[0].getPosition());
	return mapped;
}

module.exports = NaryLink;
