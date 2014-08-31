//    xiNET interaction viewer
//    Copyright 2013 Rappsilber Laboratory
//
//    This product includes software developed at
//    the Rappsilber Laboratory (http://www.rappsilberlab.org/).

"use strict";

var Config = require('../../controller/Config');
var Link = require('./Link');
var SequenceLink = require('./SequenceLink');

// BinaryLink.js
// the class representing a binary interaction

BinaryLink.prototype = new Link();
//used to calculate width of thivh background line
BinaryLink.maxNoEvidences = 0;
function BinaryLink(id, xlvController, fromI, toI) {
    this.id = id;
    this.evidences = d3.map();
    this.interactors = null;
    this.sequenceLinks = d3.map();
    this.ctrl = xlvController;
    this.fromInteractor = fromI; //its the object. not the ID number
    this.toInteractor = toI; //its the object. not the ID number
    this.ambig = false;
    this.tooltip = this.id;
    //used to avoid some unnecessary manipulation of DOM
    this.shown = false;
    this.thickLineShown = false;
    //layout stuff
    this.hidden = false;
    this.evidenceCount = 0;
    
    this.isBinary = true;
}

BinaryLink.prototype.addEvidence = function(interaction) {
	if (this.evidences.has(interaction.id) === false) {
		this.evidences.set(interaction.id, interaction);
		
		//~ if (this.evidences.values().length > NaryLink.maxNoEvidences) {//TODO: update d3 lib
			//~ xiNET.Link.maxNoEvidences = this.evidences.values().length; //values().length can be replaced with size() in newer d3 lib
		//~ }
			
		if (this.interactors === null){
			this.initInteractors(interaction);
		}    
		  
	 
		for (var pi = 0; pi < interaction.participants.length; pi++){
			var sourceID = interaction.participants[pi].interactorRef;
			var sourceInteractor = this.ctrl.interactors.get(sourceID);
			console.log("yo!" + this.fromInteractor.id + ":" + sourceID);
			if (sourceInteractor === this.fromInteractor) { //heres ur problem
								//~ || sourceIntercator === this.toInteractor ) {
				//~ var reversed = (sourceIntercator === this.toInteractor);			
				var bindingSites = interaction.participants[pi].bindingSites;
				console.log("yo");
				if (bindingSites){
					var bsCount = bindingSites.length;
					for (var bsi = 0; bsi < bsCount; bsi++){

						var bindingSite = bindingSites[bsi];
						var fromSequenceData = bindingSite.sequenceData;
						if (!fromSequenceData) {
							fromSequenceData = ['?-?'];
						}
						if (bindingSite.linkedFeatures){
							var toSequenceData = new Array();
							for (var fi = 0; fi < bindingSite.linkedFeatures.length; fi++){									
								var target = this.ctrl.features.get(bindingSite.linkedFeatures[fi]); 
								var targetInteractor = this.ctrl.interactors.get(target.interactor);
								if (targetInteractor === this.toInteractor) {
									var feature = target.feature;
									toSequenceData = toSequenceData.concat(feature.sequenceData);
								}
							}
							
							if (toSequenceData.length === 0) {
								toSequenceData = ['?-?'];
							}
							
							fromSequenceData = d3.set(fromSequenceData).values();
							fromSequenceData.sort();
							toSequenceData = d3.set(toSequenceData).values();
							toSequenceData.sort();
							  
							var seqLinkId = fromSequenceData.toString() + ':' +
									this.fromInteractor.id + '><' +
									toSequenceData.toString() + ':' + this.toInteractor.id;
							
																	
							var sequenceLink = this.sequenceLinks.get(seqLinkId);
							if (typeof sequenceLink === 'undefined') {
								console.log("*" + seqLinkId);
								sequenceLink = new SequenceLink(seqLinkId, this, fromSequenceData, toSequenceData, this.ctrl, interaction);
								this.sequenceLinks.set(seqLinkId, sequenceLink);
							}
							sequenceLink.addEvidence(interaction);					
						}
					}
				}
				
			}
		}
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
		//~ var participants = interaction.participants;
		//~ //u r here - going to need to set from/to from constructor
		//~ // if (participants.length === 2) {//TEMP
		//~ // if (participants[0].interactorRef < participants[1].interactorRef){
			//~ // this.fromInteractor = this.ctrl.interactors.get(participants[0].interactorRef);
			//~ // this.toInteractor = this.ctrl.interactors.get(participants[1].interactorRef); //its the object. not the ID number
		//~ // } else {
			//~ // this.fromInteractor = this.ctrl.interactors.get(participants[1].interactorRef);
			//~ // this.toInteractor = this.ctrl.interactors.get(participants[0].interactorRef); //its the object. not the ID number
		//~ // }
		//~ var from = this.fromInteractor;
		//~ var to = this.toInteractor
		   //~ 
		//~ var hasLinkedFeatures = false;
		//~ //when LinkedFeatures implemented then one interaction may result in many sequenceLinks
		//~ //for time being one interaction can only result in at most one sequenceLink
		//~ if (hasLinkedFeatures) {
			//~ //LinkedFeatures not yet implemented in JAMI
		//~ }
		//~ //if no linked features may be able to make some assumptions about whats linked to what. 
		//~ // If:
		//~ // 1. it is not a product of expansion   
		//~ // 2. there is no more than one binding site feature at each of interaction
		//~ else if ((typeof interaction.expansion === 'undefined')
				//~ && (typeof from.bindingSites === 'undefined'
				//~ || from.bindingSites.length === 1)
				//~ && (typeof to.bindingSites === 'undefined'
				//~ || to.bindingSites.length === 1)
				//~ ) {
			//~ // first we need to know ID for sequenceLink, 
			//~ // that means knowing the binding sites
			//~ var fromBindingSite, toBindingSite;
			//~ if (typeof from.bindingSites !== 'undefined') {
				//~ fromBindingSite = from.bindingSites[0];
			//~ }
			//~ if (typeof to.bindingSites !== 'undefined') {
				//~ toBindingSite = to.bindingSites[0];
			//~ }
			//~ var fromSequenceData = (typeof fromBindingSite !== 'undefined') ?
					//~ fromBindingSite.sequenceData.sort() : ['?-?'];
			//~ var toSequenceData = (typeof toBindingSite !== 'undefined') ?
					//~ toBindingSite.sequenceData.sort() : ['?-?'];
			//~ var seqLinkId = fromSequenceData.toString() + ':' +
					//~ this.fromInteractor.id + ' to ' +
					//~ toSequenceData.toString() + ':' + this.toInteractor.id;
	//~ //        console.log(seqLinkId);
			//~ var sequenceLink = this.sequenceLinks.get(seqLinkId);
			//~ if (typeof sequenceLink === 'undefined') {
				//~ sequenceLink = new SequenceLink(seqLinkId, this, fromSequenceData, toSequenceData, this.ctrl, interaction);
				//~ this.sequenceLinks.set(seqLinkId, sequenceLink);
			//~ }
			//~ sequenceLink.addEvidence(interaction);
		//~ } else {
			
		if (this.sequenceLinks.values().length === 0) {
			var seqLinkId = '?-?:' +
					this.fromInteractor.id + ' to ' +
					'?-?:' + this.toInteractor.id;
			console.log(seqLinkId);
			var sequenceLink = this.sequenceLinks.get(seqLinkId);
			if (typeof sequenceLink === 'undefined') {
				sequenceLink = new SequenceLink(seqLinkId, this, ['?-?'], ['?-?'], this.ctrl, interaction);
				this.sequenceLinks.set(seqLinkId, sequenceLink);
			}
			sequenceLink.addEvidence(interaction);
		}
		//~ 
		//~ // }//end if participants.length === 2
	}
};

BinaryLink.prototype.initSVG = function() {
	function trig(radius, angleDegrees) {
		//x = rx + radius * cos(theta) and y = ry + radius * sin(theta)
		var radians = (angleDegrees / 360) * Math.PI * 2;
		return {
			x: (radius * Math.cos(radians)),
			y: -(radius * Math.sin(radians))
		};
	}
	
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
	
	//if (participants.length !== 2) {//TEMP
	if (!this.fromInteractor) {//TEMP
		return false;
	}

	
    var seqLinks = this.sequenceLinks.values();
    var seqLinkCount = seqLinks.length;
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
    if (this.fromInteractor.form === 0 && this.toInteractor.form === 0) {
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
        //~ }
        //~ else {
            //~ this.hide();
            //~ return false;
        //~ }
    }
    else {//at least one end was in stick form
        this.hide();
        var showedResResLink = false
        for (var rl = 0; rl < seqLinkCount; rl++) {
            if (seqLinks[rl].check() === true) {
                showedResResLink = true;
            }
        }
        return showedResResLink;
    }
};

//~ BinaryLink.prototype.dashedLine = function(dash) {
    //~ if (typeof this.line === 'undefined') {
        //~ this.initSVG();
    //~ }
    //~ if (dash) {// && !this.dashed) {
        //~ this.dashed = true;
        //~ this.line.setAttribute("stroke-dasharray", (4 * this.ctrl.z) + ", " + (4 * this.ctrl.z));
    //~ }
    //~ else if (!dash) {// && this.dashed) {
        //~ this.dashed = false;
        //~ this.line.removeAttribute("stroke-dasharray");
    //~ }
//~ };

BinaryLink.prototype.show = function() {
    if (this.ctrl.initComplete) {
// TODO: check how some of this compares to whats in Refresh.js, scale()
        if (!this.shown) {
            this.shown = true;
            if (typeof this.line === 'undefined') {
                this.initSVG();
            }
			this.line.setAttribute("stroke-width", this.ctrl.z * 1);
			this.highlightLine.setAttribute("stroke-width", this.ctrl.z * 10);
			this.setLinkCoordinates(this.fromInteractor);
			this.setLinkCoordinates(this.toInteractor);
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
        if (this.fromInteractor === interactor) {
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
    }
};

BinaryLink.prototype.getOtherEnd = function(protein) {
    return ((this.fromInteractor === protein) ? this.toInteractor : this.fromInteractor);
};

module.exports = BinaryLink;
