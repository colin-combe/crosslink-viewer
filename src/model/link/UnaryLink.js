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

function UnaryLink(id, xlvController) {
    this.id = id;
    this.evidences = d3.map();
    this.interactors = null;
    this.sequenceLinks = d3.map();
    this.ctrl = xlvController;

    //this.ambig = false;
    this.tooltip = this.id;
    //used to avoid some unnecessary manipulation of DOM
    this.shown = false;
    this.thickLineShown = false;
    //layout stuff
    this.hidden = false;
    
	//~ this.initSVG();
}

UnaryLink.prototype.initSVG = function() {
	function trig(radius, angleDegrees) {
		//x = rx + radius * cos(theta) and y = ry + radius * sin(theta)
		var radians = (angleDegrees / 360) * Math.PI * 2;
		return {
			x: (radius * Math.cos(radians)),
			y: -(radius * Math.sin(radians))
		};
    }
    
	var path = this.fromInteractor.getAggregateSelfLinkPath();
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
    this.highlightLine.setAttribute("stroke", Config.highlightColour.toRGB());
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

UnaryLink.prototype.showHighlight = function(show) {
    if (this.shown) {
		if (this.notSubLink === true){
			this.highlightInteractors(show);
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
    }
};

UnaryLink.prototype.check = function() {
	//~ var seqLinks = this.sequenceLinks.values();
    //~ var seqLinkCount = seqLinks.length;
    // if either end of interaction is 'parked', i.e. greyed out,
    // or self-interactors are hidden and this is self interactor
    // or this specific link is hidden
    //~ if (this.fromInteractor.isParked || this.toInteractor.isParked
            //~ || (this.ctrl.intraHidden && this.intra)
            //~ || this.hidden) {
        //~ //if both ends are blobs then hide interactor-level link
        //~ if (this.fromInteractor.form === 0 && this.toInteractor.form === 0) {
            //~ this.hide();
        //~ }
        //~ //else loop through linked features hiding them
        //~ else {
            //~ for (var i = 0; i < seqLinkCount; i++) {
                //~ seqLinks[i].hide();
            //~ }
        //~ }
        //~ return false;
    //~ }
    //~ else // we need to check which interaction evidences match the filter criteria
    if (this.fromInteractor.form === 0) {
   

            //sequence links will have been hidden previously
            this.show();
            return true;
        //~ }
        //~ else {
            //~ this.hide();
            //~ return false;
        //~ }
    }
    else {//at least one end was in stick form
        this.hide();
        //~ var showedResResLink = false
        //~ for (var rl = 0; rl < seqLinkCount; rl++) {
            //~ if (seqLinks[rl].check() === true) {
                //~ showedResResLink = true;
            //~ }
        //~ }
        return false;// showedResResLink;
    }
};

UnaryLink.prototype.show = function() {
    if (this.ctrl.initComplete) {
		// resembles Refresh.js, scale() function
        if (!this.shown) {
            this.shown = true;
			this.line.setAttribute("transform", "translate(" + this.fromInteractor.x
					+ " " + this.fromInteractor.y + ")" + " scale(" + (this.ctrl.z) + ")");
			this.highlightLine.setAttribute("transform", "translate(" + this.fromInteractor.x
					+ " " + this.fromInteractor.y + ")" + " scale(" + (this.ctrl.z) + ")");
			this.ctrl.highlights.appendChild(this.highlightLine);
			this.ctrl.p_pLinks.appendChild(this.line);
        }
    }
};

UnaryLink.prototype.hide = function() {
    if (this.shown) {
        this.shown = false;
        //TODO: be more selective about when to show 'thickLine'
        // if (ProteinLink.maxNoResidueLinks > 1) {
            // this.ctrl.p_pLinksWide.removeChild(this.thickLine);
        // }
        this.ctrl.highlights.removeChild(this.highlightLine);
        this.ctrl.p_pLinks.removeChild(this.line);
	}
};

UnaryLink.prototype.setLinkCoordinates = function(interactor) {
	//actually don't currently need to do anything here,
	//interactor.setPosition is doing it for self links
	//TODO: tidy this up
	
    //~ if (this.shown) {//don't waste time changing DOM if link not visible
		//~ this.line.setAttribute("x1", interactor.x);
		//~ this.line.setAttribute("y1", interactor.y);
		//~ this.highlightLine.setAttribute("x1", interactor.x);
		//~ this.highlightLine.setAttribute("y1", interactor.y);
		//~ if (this.thickLineShown) {
			//~ this.thickLine.setAttribute("x1", interactor.x);
			//~ this.thickLine.setAttribute("y1", interactor.y);
		//~ }
    //~ }
};

module.exports = UnaryLink;
