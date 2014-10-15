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
var Intersection = require('../../controller/Intersection');
var Point2D = require('../../controller/Point2D');

// BinaryLink.js
// the class representing a binary interaction

BinaryLink.prototype = new Link();

function BinaryLink(id, xlvController, fromI, toI) {
    this.id = id;
    this.evidences = d3.map();
    this.interactors = [fromI, toI];	
    this.sequenceLinks = d3.map();
    this.ctrl = xlvController;
    this.ambig = false;
    //used to avoid some unnecessary manipulation of DOM
    this.shown = false;
}

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
}
;
BinaryLink.prototype.showHighlight = function(show) {
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

BinaryLink.prototype.check = function() {
	//~ if (!this.fromInteractor) {//TEMP HACK
		//~ return false;
	//~ }
    if (this.interactors[0].form === 0 && this.interactors[1].form === 0) {
        //~ this.ambig = true;
        //~ var filteredEvids = this.getFilteredEvidences();
        //~ var evidCount = filteredEvids.length;
        //~ for (var i = 0; i < evidCount; i++) {
            //~ var evid = filteredEvids[i];
            //~ if (typeof evid.expansion === 'undefined') {
                //~ this.ambig = false;
            //~ }
        //~ }
        //~ if (evidCount > 0) {
            //~ //tooltip
            //~ this.tooltip = /*this.id + ', ' +*/ evidCount + ' experiment';
            //~ if (evidCount > 1) {
                //~ this.tooltip += 's';
            //~ }
            //~ this.tooltip += ' (';
            //~ var nested_data = d3.nest()
                    //~ .key(function(d) {
                //~ return d.experiment.detmethod.name;
            //~ })
                    //~ .rollup(function(leaves) {
                //~ return leaves.length;
            //~ })
                    //~ .entries(filteredEvids);
//~ 
            //~ nested_data.sort(function(a, b) {
                //~ return b.values - a.values
            //~ });
            //~ var countDetMethods = nested_data.length
            //~ for (var i = 0; i < countDetMethods; i++) {
                //~ if (i > 0) {
                    //~ this.tooltip += ', ';
                //~ }
                //~ this.tooltip += nested_data[i].values + ' ' + nested_data[i].key;
            //~ }
            //~ this.tooltip += ' )';
            //~ //thickLine
            //~ if (evidCount > 1) {
                //~ this.thickLineShown = true
                //~ this.w = evidCount * (45 / BinaryLink.maxNoEvidences);
            //~ }
            //~ else {
//~ //                this.thickLineShown = false;//hack
                //~ this.w = evidCount * (45 / BinaryLink.maxNoEvidences);//hack
            //~ }
            //~ //ambig?
            //~ this.dashedLine(this.ambig);

            //sequence links will have been hidden previously
            this.show();
            return true;

    }
    else {//at least one end was in stick form
        this.hide();
        return false;
    }
};

BinaryLink.prototype.show = function() {
    if (this.ctrl.initComplete) {
        if (!this.shown) {
            this.shown = true;
            if (typeof this.line === 'undefined') {
                this.initSVG();
            }
			this.line.setAttribute("stroke-width", this.ctrl.z * 1);
			this.highlightLine.setAttribute("stroke-width", this.ctrl.z * 10);
			this.setLinkCoordinates(this.interactors[0]);
			this.setLinkCoordinates(this.interactors[1]);
			if (this.thickLineShown) {
				this.ctrl.p_pLinksWide.appendChild(this.thickLine);
			}
			this.ctrl.highlights.appendChild(this.highlightLine);
			this.ctrl.p_pLinks.appendChild(this.line);
			if (this.thickLineShown) {
				this.thickLine.setAttribute("stroke-width", this.w);
			}
		}
    }
};

BinaryLink.prototype.hide = function() {
    if (this.shown) {
        this.shown = false;
		if (this.thickLineShown) {
			this.ctrl.p_pLinksWide.removeChild(this.thickLine);
		}
		this.ctrl.highlights.removeChild(this.highlightLine);
		this.ctrl.p_pLinks.removeChild(this.line);
    }
};

BinaryLink.prototype.setLinkCoordinates = function(interactor) {
    if (this.shown) {//don't waste time changing DOM if link not visible
		var pos = interactor.getPosition();
        if (interactor.type !== 'complex'){
			if (this.interactors[0] === interactor) {
				this.line.setAttribute("x1", pos[0]);
				this.line.setAttribute("y1", pos[1]);
				this.highlightLine.setAttribute("x1", pos[0]);
				this.highlightLine.setAttribute("y1", pos[1]);
				if (this.thickLineShown) {
					this.thickLine.setAttribute("x1", pos[0]);
					this.thickLine.setAttribute("y1", pos[1]);
				}
			}
			else {
				this.line.setAttribute("x2", pos[0]);
				this.line.setAttribute("y2", pos[1]);
				this.highlightLine.setAttribute("x2", pos[0]);
				this.highlightLine.setAttribute("y2", pos[1]);
				if (this.thickLineShown) {
					this.thickLine.setAttribute("x2", pos[0]);
					this.thickLine.setAttribute("y2", pos[1]);
				}
			}
		}else {//interactor is a complex
			var otherEndPos = this.getOtherEnd(interactor).getPosition();
			var naryPath = interactor.naryLink.hull;
			var iPath = new Array();
			for (var pi = 0; pi < naryPath.length; pi++) {
				var p = naryPath[pi];
				iPath.push(new Point2D(p[0],p[1]));
			}
			var a1 = new Point2D(pos[0], pos[1]);
			var a2 = new Point2D(otherEndPos[0], otherEndPos[1]);
			var intersect = Intersection.intersectLinePolygon(a1, a2, iPath); 
			var newPos;
			if (intersect.points[0]){
				newPos = [intersect.points[0].x,intersect.points[0].y]; 
			} else {
				newPos = pos;
			} 
			if (this.interactors[0] === interactor) {
				this.line.setAttribute("x1", newPos[0]);
				this.line.setAttribute("y1", newPos[1]);
				this.highlightLine.setAttribute("x1", newPos[0]);
				this.highlightLine.setAttribute("y1", newPos[1]);
				if (this.thickLineShown) {
					this.thickLine.setAttribute("x1", newPos[0]);
					this.thickLine.setAttribute("y1", newPos[1]);
				}
			}
			else {
				this.line.setAttribute("x2", newPos[0]);
				this.line.setAttribute("y2", newPos[1]);
				this.highlightLine.setAttribute("x2", newPos[0]);
				this.highlightLine.setAttribute("y2", newPos[1]);
				if (this.thickLineShown) {
					this.thickLine.setAttribute("x2", newPos[0]);
					this.thickLine.setAttribute("y2", newPos[1]);
				}
			}
		
		}
	}
};

BinaryLink.prototype.getOtherEnd = function(interactor) {
    return ((this.interactors[0] === interactor) ? this.interactors[1] : this.interactors[0]);
};

module.exports = BinaryLink;
