//    	xiNET Interaction Viewer
//    	Copyright 2013 Rappsilber Laboratory
//
//    	This product includes software developed at
//    	the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//
//		author: Colin Combe
//		
//		Link.js
//		The graphical representation of one or many interactions.
//		One link represents all interactions with same particpants.
//		E.g. psi-mi may conatins multiple experiments giving evidence for same interaction
//		- using one glyph to represent them all prevents uppermost graphic from occluding those lower down 

"use strict";

var Config = require('../../controller/Config');

var Link = function (){};
Link.maxNoEvidences = 0;

Link.prototype.addEvidence = function(interaction) {
	if (!this.evidences) {
		this.evidences = d3.map();
	}
	if (this.evidences.has(interaction.id) === false) {
		this.evidences.set(interaction.id, interaction);
		if (this.evidences.values().length > Link.maxNoEvidences) {
			//values().length can be replaced with size() in newer d3 lib
            Link.maxNoEvidences = this.evidences.values().length; 
            return true;
        }
	} else {
		return false;
	}
};

Link.prototype.highlightInteractors = function(show){	
	var interactors = this.interactors;
	for (var i = 0; i < interactors.length; i++) {
		interactors[i].showHighlight(show);
	}
}

// event handler for starting dragging or rotation (or flipping internal links)
Link.prototype.mouseDown = function(evt) {
    this.ctrl.preventDefaultsAndStopPropagation(evt);//see MouseEvents.js
    //if a force layout exists then stop it
    if (this.ctrl.force){
        this.ctrl.force.stop();
    }
    this.ctrl.dragElement = this;
    this.ctrl.clearSelection();
    //this.setSelected(true);
    //store start location
    var p = this.ctrl.getEventPoint(evt);// seems to be correct, see above
    this.ctrl.dragStart = this.ctrl.mouseToSVG(p.x, p.y);
    this.showData();
    return false;
}

// highlight on mouseover, all 'subclasses' need a showHighlight method
Link.prototype.mouseOver = function(evt){
    //console.log("clickable mouse over");
    this.ctrl.preventDefaultsAndStopPropagation(evt);
    this.showHighlight(true, true);
    this.ctrl.setTooltip(this.id);
    return false;
}

Link.prototype.mouseOut = function(evt){
    this.ctrl.preventDefaultsAndStopPropagation(evt);
    this.showHighlight(false, true);
    this.ctrl.hideTooltip();
    return false;
}

Link.prototype.touchStart = function(evt) {
    this.ctrl.preventDefaultsAndStopPropagation(evt);//see MouseEvents.js
    //if a force layout exists then stop it
    if (this.ctrl.force !== undefined){
        this.ctrl.force.stop();
    }
    this.ctrl.dragElement = this;
            this.ctrl.clearSelection();
            this.setSelected(true);
    //store start location
    var p = this.ctrl.getTouchEventPoint(evt);// seems to be correct, see above
    this.ctrl.dragStart = this.ctrl.mouseToSVG(p.x, p.y);
    this.showData();
    return false;
}

//used when link clicked
Link.prototype.showData = function() {
    if (document.getElementById('jsonHeading')) {	
		document.getElementById('jsonHeading').innerHTML = this.id;
	} 
    if (document.getElementById('json')) {	
		document.getElementById('json').innerHTML = 
			"<pre>" + JSON.stringify(this.filteredEvidence(), null, ' ') + "</pre>";
	} 
};

Link.prototype.filteredEvidence = function() {
    //TODO - filtering
    return this.evidences.values();
    //~ if (typeof interaction.confidences !== 'undefined') {
        //~ var confidences = interaction.confidences;
        //~ var confCount = confidences.length;
        //~ for (var c = 0; c < confCount; c++){
            //~ var conf = confidences[c];
            //~ if (conf.type === 'intact-miscore'){
                //~ interaction.score = conf.value * 1.0;
            //~ }
        //~ }
    //~ } 
};

module.exports = Link;
