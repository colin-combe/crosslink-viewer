//      xiNET interaction viewer
//      Copyright 2014 Rappsilber Laboratory
//
//      This product includes software developed at
//      the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//
//      author: Colin Combe, Josh Heimbach
//
//		NaryLink.js
//		graphically represents n-ary interaction

"use strict";

var colorbrewer = require('../../../node_modules/colorbrewer/colorbrewer');
var Link = require('./Link');
var SequenceLink = require('./SequenceLink');
var BinaryLink = require('./BinaryLink');
var UnaryLink = require('./UnaryLink');
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
}

NaryLink.prototype.addEvidence = function(interaction) {
    if (this.evidences.has(interaction.id) === false) {
        this.evidences.set(interaction.id, interaction);   
		//TODO
        //~ if (this.evidences.values().length > xiNET.Link.maxNoEvidences) {//TODO: update d3 lib
            //~ xiNET.Link.maxNoEvidences = this.evidences.values().length; //values().length can be replaced with size() in newer d3 lib
        //~ }
        var participants = interaction.participants;
        var participantCount = participants.length    
        for (var pi = 0; pi < participantCount; pi++){
			var participant = participants[pi];
			var features = (participant.experimentalFeatures)? participant.experimentalFeatures : new Array(0); // ur here 
			//~ if (participant.bindingSites) {features = features.concat(participant.bindingSites);}
			//~ if (participant.experimentalFeatures) {features = features.concat(participant.experimentalFeatures);}
			var fCount = features.length;
			for (var f = 0; f < fCount; f++){
				var feature = features[f];
				var fromSequenceData = feature.sequenceData;
				if (feature.linkedFeatures) {
					var linkedFeatureIDs = feature.linkedFeatures;
					
					var toSequenceData = new Array();
					var linkedFeatureCount = linkedFeatureIDs.length;
					for (var lfi = 0; lfi < linkedFeatureCount; lfi++){
						var linkedFeature = this.ctrl.features.get(linkedFeatureIDs[lfi]);
						toSequenceData = toSequenceData.concat(linkedFeature.sequenceData)
					}
					
					//TODO: *not dealing with non-contigouous features*
					
					//sequence link
					var start =  fromSequenceData[0].interactorRef + ":" + fromSequenceData[0].pos;
					var end = toSequenceData[0].interactorRef + ":" + toSequenceData[0].pos;
					var seqLinkId;
					if (start < end){
						seqLinkId  =  start + '><' + end;
					} else {
						seqLinkId = end + '><' + start;
					}
					
					var sequenceLink = this.ctrl.allSequenceLinks.get(seqLinkId);
					if (typeof sequenceLink === 'undefined') {
						sequenceLink = new SequenceLink(seqLinkId, fromSequenceData, toSequenceData, this.ctrl, interaction);
						this.ctrl.allSequenceLinks.set(seqLinkId, sequenceLink);
					}
					sequenceLink.addEvidence(interaction);	
					sequenceLink.fromInteractor.sequenceLinks.set(seqLinkId, sequenceLink);
					sequenceLink.toInteractor.sequenceLinks.set(seqLinkId, sequenceLink);
					
					//binaryLink / /unaryLink
					var linkID, fi, ti;   
					// these links are undirected and should have same ID regardless of which way round 
					// source and target are
					if (sequenceLink.fromInteractor.id  < sequenceLink.toInteractor.id) {
						linkID = sequenceLink.fromInteractor.id + '-' + sequenceLink.toInteractor.id;
						fi = sequenceLink.fromInteractor;
						ti = sequenceLink.toInteractor;
					} else {
						linkID = "-" + sequenceLink.toInteractor.id + '-' + sequenceLink.fromInteractor.id;
						fi = sequenceLink.toInteractor;
						ti = sequenceLink.fromInteractor;
					}	
					
										
					var link;
					if (sequenceLink.fromInteractor === sequenceLink.toInteractor){
						link = this.ctrl.allUnaryLinks.get(linkID);
						if (typeof link === 'undefined') {
							link = new UnaryLink(linkID, this.ctrl);
							fi.selfLink = link;
							link.fromInteractor = fi;
							link.initSVG();
							this.ctrl.allUnaryLinks.set(linkID, link);
						}
						this.unaryLinks.set(linkID, link);
					}
					else {
						link = this.ctrl.allBinaryLinks.get(linkID);
						if (typeof link === 'undefined') {
							link = new BinaryLink(linkID, this.ctrl, fi, ti);
							fi.binaryLinks.set(linkID, link);
							ti.binaryLinks.set(linkID, link);
							this.ctrl.allBinaryLinks.set(linkID, link);
						}
						this.binaryLinks.set(linkID, link);
					}
					link.interactors = sequenceLink.interactors;//hack
					//~ link.addEvidence(interaction);


					
					
					
					
					
					
					
					
					
					
					
						
				}			
			}	
        }           
    }
};

NaryLink.prototype.initSVG = function() {

    this.rect = document.createElementNS(Config.svgns, "path");
    this.rect.setAttribute('fill', NaryLink.naryColours(this.id));
    this.rect.setAttribute('opacity', 0.4);
    this.rect.setAttribute('stroke', NaryLink.naryColours(this.id));
    this.rect.setAttribute('stroke-linejoin', 'round');
    this.rect.setAttribute('stroke-width', 40);

    //set the events for it
    var self = this;
    this.rect.onmousedown = function(evt) {
        self.mouseDown(evt);
    };
    this.rect.onmouseover = function(evt) {
        self.mouseOver(evt);
    };
    this.rect.onmouseout = function(evt) {
        self.mouseOut(evt);
    };
    this.rect.ontouchstart = function(evt) {
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
    //~ var subLinks = this.sequenceLinks.values();
    //~ var slCount = subLinks.length ;
    //~ console.log("here");
	//~ for (var sli = 0; sli < slCount; sli++){
		//~ subLinks[sli].check();
	//~ }       
    return true;
};

NaryLink.prototype.show = function() {
    if (this.ctrl.initComplete) {
        if (!this.shown) {
            this.shown = true;
            if (typeof this.rect === 'undefined') {
                this.initSVG();
            }
            // this.rect.setAttribute("stroke-width", this.ctrl.z * 1);
            this.setLinkCoordinates();
            this.ctrl.naryLinks.appendChild(this.rect);
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
        //~ this.ctrl.p_pLinks.removeChild(this.rect);
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
				// Col says - yes, we might care. E.g. case where id of an Unary interaction is 
				//given as interactor in another interacton (interaction with a homodimer) 
            // Just something to think about!
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

        var interactors = this.interactors;

        var mapped = interactors.map(function(i) {
            return i.getPosition();
        });

        var hullValues = calculateHullPath(mapped);
        if (hullValues) {
            this.rect.setAttribute('d', hullValues);
        }
    }
};

module.exports = NaryLink;
