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
//		- using one glyph to represent them all prevents uppermost graphic from occluded those lower down 

"use strict";

xiNET.Link = function (){};
xiNET.Link.maxNoEvidences = 0;

//id is particpant interactorRefs, in ascending order, with duplicates eliminated, seperated by dash
xiNET.Link.getIdFromInteraction = function(interaction){
    var linkId = "";
    //sort participants by interactorRef
    var participants = interaction.participants.sort(
		function comparator(a, b) {
			return a.interactorRef - b.interactorRef;
		}
	);
    var participantCount = participants.length;
    var pIDs = d3.set();//used to eliminate duplicates
    for (var pi = 0; pi < participantCount; pi++) {
		var pID = participants[pi].interactorRef;
		if (pIDs.has(pID) === false){
			pIDs.add(pID);
			if (pi > 0) {
				linkId += "-"; 
			}
			linkId += pID;
		}
	}
	return linkId;	
}

xiNET.Link.prototype.initInteractors = function(interaction){
    this.interactors = new Array();//order important for binary links
    //sort participants by interactorRef
    var participants = interaction.participants.sort(
		function comparator(a, b) {
			return a.interactorRef - b.interactorRef;
		}
	);
    var participantCount = participants.length;
    var pIDs = d3.set();//used to eliminate duplicates
    for (var pi = 0; pi < participantCount; pi++) {
		var pID = participants[pi].interactorRef;
		if (pIDs.has(pID) === false){
			pIDs.add(pID);
			var interactor = this.ctrl.interactors.get(pID);
			if (typeof interactor === 'undefined') {
				alert("Fail - no interactor with id " + pID);
			}
			this.interactors.push(interactor);
		}
	}
}
xiNET.Link.prototype.highlightInteractors = function(show){	
	var interactors = this.interactors;
	for (var i = 0; i < interactors.length; i++) {
		interactors[i].showHighlight(show);
	}
}

// event handler for starting dragging or rotation (or flipping internal links)
xiNET.Link.prototype.mouseDown = function(evt) {
    this.ctrl.preventDefaultsAndStopPropagation(evt);//see MouseEvents.js
    //if a force layout exists then stop it
    if (this.ctrl.force !== undefined){
        this.ctrl.force.stop();
    }
    this.ctrl.dragElement = this;
    this.ctrl.clearSelection();
    //this.setSelected(true);
    //store start location
    var p = this.ctrl.getEventPoint(evt);// seems to be correct, see above
    this.ctrl.dragStart = this.ctrl.mouseToSVG(p.x, p.y);
    return false;
}

// highlight on mouseover, all 'subclasses' need a showHighlight method
xiNET.Link.prototype.mouseOver = function(evt){
    //console.log("clickable mouse over");
    this.ctrl.preventDefaultsAndStopPropagation(evt);
    this.showHighlight(true, true);
    this.ctrl.setTooltip(this.tooltip);
    return false;
}

xiNET.Link.prototype.mouseOut = function(evt){
    //console.log("clickable mouse out");
    this.ctrl.preventDefaultsAndStopPropagation(evt);
    //    if (this.ctrl.dragElement == undefined) {
    this.showHighlight(false, true);
    //    } else {
    //        if (this.ctrl.dragElement != this){// todo: improve, actually needs to know
    //            // if drag element is part of dragging subgraph
    //            this.showHighlight(false, true);
    //        }
    //    }
    this.ctrl.hideTooltip();
    return false;
}

xiNET.Link.prototype.touchStart = function(evt) {
//    //console.log("clickable mouse down");
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
    return false;
}

//used when link clicked
xiNET.Link.prototype.showData = function() {
    if (document.getElementById('jsonHeading')) {	
		document.getElementById('jsonHeading').innerHTML = this.id;
	} 
	if ($("#json")) { // json tree depends on jquery
		$("#json").JSONView(this.evidences.values(), {collapsed: false, nl2br: true});
		$('#json').JSONView('toggle', 2);
	} 
	//~ else {    
		//~ var linkInfo = this.id;
		//~ // "<p><strong>" + this.fromInteractor.name + " (" + this.fromInteractor.accession
				//~ // + ") to " + this.toInteractor.name + " (" + this.toInteractor.accession
				//~ // + ")</strong></p>";
		//~ linkInfo += "<pre>" + JSON.stringify(this, null, ' ') + "</pre>";
		//~ this.ctrl.message(linkInfo);
	//~ }
};

xiNET.Link.prototype.toJSON = function() {
    return {
        //~ evidences: this.evidences
        id: this.id
    };
};



//~ BinaryLink.prototype.getFilteredEvidences = function() {
    //~ var seqLinks = this.sequenceLinks.values();
    //~ var seqLinkCount = seqLinks.length;
    //~ // use map to eliminate duplicates 
    //~ // (which result from linked features resulting in multiple SequenceLinks for single interaction)
    //~ var filteredEvids = d3.map();
    //~ for (var i = 0; i < seqLinkCount; i++) {
        //~ var seqLink = seqLinks[i];
        //~ var seqLinkEvids = seqLink.getFilteredEvidences();
        //~ var seqLinkEvidCount = seqLinkEvids.length;
        //~ for (var j = 0; j < seqLinkEvidCount; j++) {
            //~ filteredEvids.set(seqLinkEvids[j].identifiers[0].db + seqLinkEvids[j].identifiers[0].id, seqLinkEvids[j]);
        //~ }
    //~ }
    //~ return filteredEvids.values();
//~ };

