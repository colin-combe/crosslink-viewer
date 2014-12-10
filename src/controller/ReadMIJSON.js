//    xiNET interaction viewer
//    Copyright 2013 Rappsilber Laboratory
//
//    This product includes software developed at
//    the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//
//    author: Colin Combe

"use strict";
var colorbrewer = require('../../node_modules/colorbrewer/colorbrewer');
var Feature = require('../model/interactor/Feature');
var SmallMol = require('../model/interactor/SmallMol');
var Polymer = require('../model/interactor/Polymer');
var Complex = require('../model/interactor/Complex');
var InteractorSet = require('../model/interactor/InteractorSet');
var NaryLink = require('../model/link/NaryLink');
var SequenceLink = require('../model/link/SequenceLink');
var BinaryLink = require('../model/link/BinaryLink');
var UnaryLink = require('../model/link/UnaryLink');
var Expand = require ('./Expand');
 
// reads our MI JSON format 
var readMIJSON = function(miJson, controller) {
    //check that we've got a parsed javacsript object here, not a String
    miJson = (typeof miJson === 'object') ? miJson : JSON.parse(miJson);

    Expand.matrix(miJson);
    
	//interactors for which we can look up sequence and uniprot features
	var uniprotInteractors = d3.set();
     
    var data = miJson.data;
    var dataElementCount = data.length;
    for (var n = 0; n < dataElementCount; n++) {
        if (data[n].object === 'interactor') {
            var interactor = data[n];
			var p;
			if (interactor.type.name === 'molecule set') {//ignore interactor sets
				p = new InteractorSet(interactor.id, this, interactor);
			}
			else if (interactor.type.name === 'small molecule') {
				p = new SmallMol(interactor.id, this, interactor);
				p.initInteractor(interactor.label);
			} else {
				p = new Polymer(interactor.id, this, interactor);
				//TODO - get features and sequences from uniprot webservice
				//~ if (interactor.identifier.db === 'uniprotkb') { 
					//~ uniprotInteractors.add
				//temp
				if (typeof interactor.sequence !== 'undefined') {
					p.initInteractor(interactor.sequence, interactor.label);
				}
				else {
					//hack
					p.initInteractor('NO_SEQUENCE_NO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCE_NO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCE'
						, interactor.label);
				}
			}
			this.interactors.set(interactor.id, p);
        }
    }
    
    var self = this;
	//TODO - get features and sequences from uniprot webservice, will call addInteractions when finished		
    addInteractions();

    function addInteractions() {
        var width = self.svgElement.parentNode.clientWidth;
        Polymer.UNITS_PER_RESIDUE = ((width / 2)) / 1000;//((Interactor.MAXSIZE < 5000)? Interactor.MAXSIZE : 5000);
        self.features = d3.map();       
        self.complexes = d3.map();  
        var domainColours =  d3.scale.ordinal().range(colorbrewer.Pastel1[8]);
        //create indexed collection of features from interactions   
        for (var l = 0; l < dataElementCount; l++) {
            var interaction = data[l];
            if (interaction.object === 'interaction') {
				var participantCount = interaction.participants.length;
				for (var pi = 0; pi < participantCount; pi++) {
					var participant = interaction.participants[pi];
					var features = new Array(0);
					if (participant.bindingSites) {
						features = features.concat(participant.bindingSites);
					}
					if (participant.experimentalFeatures) {
						features = features.concat(participant.experimentalFeatures);
					}
					var fCount = features.length;
					for (var f = 0; f < fCount; f++){
						var feature = features[f];
						self.features.set(feature.id, feature);
						// add features to interactors/participants/nodes
						var annotName = "";
						if (typeof feature.name !== 'undefined') {
							annotName += feature.name + ', ';
						}
						if (typeof feature.type !== 'undefined') {
							annotName += feature.type.name;
						}
						if (typeof feature.detmethod !== 'undefined') {
							annotName += ', ' + feature.detmethod.name;
						}
						var colour = domainColours(feature.name);
						// the id info we need is inside sequenceData att
						if (feature.sequenceData) {
							//~ console.log(JSON.stringify(feature, null, '\t'));
							var seqData = feature.sequenceData;
							var seqDataCount = seqData.length;
							for (var sdi = 0; sdi < seqDataCount; sdi++) {
								var seqDatum = seqData[sdi];
								var interactor = self.interactors.get(seqDatum.interactorRef);
								var sequenceRegex = /(.+)-(.+)/;
								var match = sequenceRegex.exec(seqDatum.pos);
								var startRes = match[1] * 1;
								var endRes = match[2] * 1;
								if (isNaN(startRes) === false && isNaN(endRes) === false) {
									var annotation = new Feature(annotName, startRes, endRes, colour);
									if (interactor.miFeatures == null) {
										interactor.miFeatures = new Array();
									}
									interactor.miFeatures.push(annotation);
								}
							}
						}
					}		
				}	
	        }
        }
        //add interactions
        for (var l = 0; l < dataElementCount; l++) {
            var interaction = data[l];
            if (interaction.object === 'interaction') {
                self.addInteraction(interaction);
            }
        }
        //init complexes
        var complexes = self.complexes.values()
        for (var c = 0; c < complexes.length; c++) {
			var interactionId = complexes[c].id;
			var naryLink;
			for (var l = 0; l < dataElementCount; l++) {
				var interaction = data[l];
				if (interaction.id == interactionId) {
					var nLinkId = getIdFromInteraction(interaction);
					naryLink = self.allNaryLinks.get(nLinkId);
				}
			}						
            complexes[c].initInteractor(naryLink);
            naryLink.complex = complexes[c];           
        }
        //show features
        var interactors = self.interactors.values();
        var proteinCount = interactors.length;
        for (var p = 0; p < proteinCount; p++) {
            var prot = interactors[p];
            prot.setPositionalFeatures(prot.miFeatures);
        }
        self.init();
        self.checkLinks();   
	}
};

// naryLink id is particpant interactorRefs, in ascending order, 
// with duplicates eliminated, seperated by dash
var getIdFromInteraction = function(interaction) {
	var nLinkId = "";
	// sort participants by interactorRef
	var participants = interaction.participants.sort(
		function comparator(a, b) {
			return a.interactorRef - b.interactorRef;
		}
	);
	var participantCount = participants.length;
	var pIDs = d3.set();//used to eliminate duplicates
	//make id
	for (var pi = 0; pi < participantCount; pi++) {
		var pID = participants[pi].interactorRef;
		
		if (pIDs.has(pID) === false){
			pIDs.add(pID);
			if (pi > 0) {
				nLinkId += "-"; 
			}
			nLinkId += pID;
		}
	}		
	return nLinkId;
};

var addInteraction = function(interaction) {
	function getNaryLink(){
		var nLinkId = getIdFromInteraction(interaction);
		var nLink = self.allNaryLinks.get(nLinkId);
		if (typeof nLink === 'undefined') {
			//doesn't already exist, make new nLink
			var interactorIds = nLinkId.split('-');
			var iCount = interactorIds.length;
			
			nLink = new NaryLink(nLinkId, self);
			self.allNaryLinks.set(nLinkId, nLink);
			
			for (var i = 0; i < iCount; i++) {
				var interactor = self.interactors.get(interactorIds[i]);
				if (typeof interactor === 'undefined') {
					//must be a previously unencountered complex
					interactor = new Complex(interactorIds[i], self);
					self.interactors.set(interactorIds[i], interactor);
					self.complexes.set(interactorIds[i], interactor);
				}
				interactor.naryLinks.set(nLinkId, nLink);				
				nLink.interactors.push(interactor);
			}
		}
		nLink.addEvidence(interaction);
		return nLink;
	};
	
	function getSequenceLink(fromSequenceData, toSequenceData){
		function seqDataComparator(a, b){
			if (a.interactorRef != b.interactorRef){
				return a.interactorRef - b.interactorRef;
			} else if (a.pos < b.pos){
				return -1;
			}
			else {
				return 1;
			}
		}
		function seqDataToString(seqData){
			var string = "";
			for (var s = 0; s < seqData.length; s++){
				if (s > 0){
					string += ';';
				}
				var seq = seqData[s];
				string += seq.interactorRef + ':' + seq.pos;
			}
			return string;
		}
		fromSequenceData = fromSequenceData.sort(seqDataComparator);
		toSequenceData = toSequenceData.sort(seqDataComparator);
		var start =  seqDataToString(fromSequenceData);
		var end =  seqDataToString(toSequenceData);
		var seqLinkId;
		if (start < end){
			seqLinkId  =  start + '><' + end;
		} else {
			seqLinkId = end + '><' + start;
		}			
		var sequenceLink = self.allSequenceLinks.get(seqLinkId);
		if (typeof sequenceLink === 'undefined') {
			sequenceLink = new SequenceLink(seqLinkId, fromSequenceData, toSequenceData, self, interaction);
			self.allSequenceLinks.set(seqLinkId, sequenceLink);
		}
		sequenceLink.addEvidence(interaction);	
		//TODO - get rid of following
		sequenceLink.fromInteractor.sequenceLinks.set(seqLinkId, sequenceLink);
		sequenceLink.toInteractor.sequenceLinks.set(seqLinkId, sequenceLink);
		nLink.sequenceLinks.set(seqLinkId, sequenceLink);
		return sequenceLink;						
	};
	
	function getUnaryLink(interactor){
		var linkID = '-' + interactor.id + '-' + interactor.id
		var link = self.allUnaryLinks.get(linkID);
		if (typeof link === 'undefined') {
			link = new UnaryLink(linkID, self, interactor);
			self.allUnaryLinks.set(linkID, link);
			interactor.selfLink = link;
		}
		nLink.unaryLinks.set(linkID, link);			
		link.addEvidence(interaction);			
		return link;
	};
	
	function getBinaryLink(sourceInteractor, targetInteractor){
		var linkID, fi, ti;   
		// these links are undirected and should have same ID regardless of which way round 
		// source and target are
		if (sourceInteractor.id  < targetInteractor.id) {
			linkID = '-' + sourceInteractor.id + '-' + targetInteractor.id;
			fi = sourceInteractor;
			ti = targetInteractor;
		} else {
			linkID = "-" + targetInteractor.id + '-' + sourceInteractor.id;
			fi = targetInteractor;
			ti = sourceInteractor;
		}			
		var link = self.allBinaryLinks.get(linkID);
		if (typeof link === 'undefined') {
			link = new BinaryLink(linkID, self, fi, ti);
			fi.binaryLinks.set(linkID, link);
			ti.binaryLinks.set(linkID, link);
			self.allBinaryLinks.set(linkID, link);
		}
		nLink.binaryLinks.set(linkID, link);
		link.addEvidence(interaction);		
		return link;
	}
	
	var self = this;
    //init n-ary link
    var nLink = getNaryLink(interaction);//note - this var gets used by the get*Link functions above    
    // loop through particpants and features
    // init binary, unary and sequence links, 
    // and make needed associations between these and containing naryLink
    var participants = interaction.participants;
    var participantCount = participants.length    
    for (var pi = 0; pi < participantCount; pi++){
		var participant = participants[pi];
						
		if (participant.stoichiometry){
			var interactor = self.interactors.get(participant.interactorRef); 
			interactor.addStoichiometryLabel(participants[pi].stoichiometry);
		}
		
		//TODO: check if participant is complex - need to change logic if is
		var features = new Array(0); 
		if (participant.bindingSites) {
			features = features.concat(participant.bindingSites);
		}
		if (participant.experimentalFeatures) {
			features = features.concat(participant.experimentalFeatures);
		}
		var fCount = features.length;
		for (var f = 0; f < fCount; f++){
			var feature = features[f];
			var fromSequenceData = feature.sequenceData;
			if (feature.linkedFeatures) {
				var linkedFeatureIDs = feature.linkedFeatures;
				var toSequenceData = new Array();
				var linkedFeatureCount = linkedFeatureIDs.length;
				for (var lfi = 0; lfi < linkedFeatureCount; lfi++){
					var linkedFeature = this.features.get(linkedFeatureIDs[lfi]);
					toSequenceData = toSequenceData.concat(linkedFeature.sequenceData)
				}
				var sequenceLink = getSequenceLink(fromSequenceData, toSequenceData);						
				if (sequenceLink.fromInteractor === sequenceLink.toInteractor){
					getUnaryLink(sequenceLink.fromInteractor);
				}
				else {
					getBinaryLink(sequenceLink.fromInteractor, sequenceLink.toInteractor);
				}
			}			
		}	
	}           
};

module.exports = {readMIJSON: readMIJSON, addInteraction: addInteraction};
