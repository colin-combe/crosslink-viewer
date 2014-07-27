//    	xiNET Interaction Viewer
//    	Copyright 2013 Rappsilber Laboratory
//
//    	This product includes software developed at
//    	the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//
//		author: Colin Combe
//		
//		Link.js

"use strict";


// 'superclass' for SequenceLink, BinaryLink
// terminology? could this class be renamed to Interaction?
// or a 'Link' is a graphical rperesentation of one or many links
// i.e. 'link' is a glyph, 'interaction' is biology?

xiNET.Link = function (){};
xiNET.Link.maxNoEvidences = 0;

// event handler for starting dragging or rotation (or flipping internal links)
xiNET.Link.prototype.mouseDown = function(evt) {
//    //console.log("clickable mouse down");
    this.xlv.preventDefaultsAndStopPropagation(evt);//see MouseEvents.js
    //if a force layout exists then stop it
    if (this.xlv.force !== undefined){
        this.xlv.force.stop();
    }
    this.xlv.dragElement = this;
    this.xlv.clearSelection();
    //this.setSelected(true);
    //store start location
    var p = this.xlv.getEventPoint(evt);// seems to be correct, see above
    this.xlv.dragStart = this.xlv.mouseToSVG(p.x, p.y);
    return false;
}

// highlight on mouseover, all 'subclasses' need a showHighlight method
xiNET.Link.prototype.mouseOver = function(evt){
    //console.log("clickable mouse over");
    this.xlv.preventDefaultsAndStopPropagation(evt);
    this.showHighlight(true, true);
    this.xlv.setTooltip(this.tooltip);
    return false;
}

xiNET.Link.prototype.mouseOut = function(evt){
    //console.log("clickable mouse out");
    this.xlv.preventDefaultsAndStopPropagation(evt);
    //    if (this.xlv.dragElement == undefined) {
    this.showHighlight(false, true);
    //    } else {
    //        if (this.xlv.dragElement != this){// todo: improve, actually needs to know
    //            // if drag element is part of dragging subgraph
    //            this.showHighlight(false, true);
    //        }
    //    }
    this.xlv.hideTooltip();
    return false;
}

xiNET.Link.prototype.touchStart = function(evt) {
//    //console.log("clickable mouse down");
    this.xlv.preventDefaultsAndStopPropagation(evt);//see MouseEvents.js
    //if a force layout exists then stop it
    if (this.xlv.force !== undefined){
        this.xlv.force.stop();
    }
    this.xlv.dragElement = this;
            this.xlv.clearSelection();
            this.setSelected(true);
    //store start location
    var p = this.xlv.getTouchEventPoint(evt);// seems to be correct, see above
    this.xlv.dragStart = this.xlv.mouseToSVG(p.x, p.y);
    return false;
}

//used when link clicked
xiNET.Link.prototype.showID = function() {
    var linkInfo = this.id;
    //~ "<p><strong>" + this.fromInteractor.name + " (" + this.fromInteractor.accession
            //~ + ") to " + this.toInteractor.name + " (" + this.toInteractor.accession
            //~ + ")</strong></p>";
    linkInfo += "<pre>" + JSON.stringify(this, null, ' ') + "</pre>";
    this.xlv.message(linkInfo);
};

xiNET.Link.prototype.toJSON = function() {
    return {
        evidences: this.evidences
    };
};

