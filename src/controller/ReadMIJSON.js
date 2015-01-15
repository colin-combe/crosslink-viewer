//    xiNET interaction viewer
//    Copyright 2013 Rappsilber Laboratory
//
//    This product includes software developed at
//    the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//
//    author: Colin Combe

"use strict";
var xiNET_Storage = require('./xiNET_Storage');
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
var readMIJSON = function(miJson) {
    //check that we've got a parsed javacsript object here, not a String
    miJson = (typeof miJson === 'object') ? miJson : JSON.parse(miJson);

	Expand.matrix(miJson);
         
    var data = miJson.data;
    var dataElementCount = data.length;
    
    //get interactors
    var interactors = d3.map();
    for (var n = 0; n < dataElementCount; n++) {
        if (data[n].object === 'interactor') {
            var interactor = data[n];
			interactors.set(interactor.id, interactor);
		}
    }
    
    var self = this;
	Polymer.UNITS_PER_RESIDUE = self.svgElement.parentNode.clientWidth / 2000;
	
	self.features = d3.map();
	
	//forget complexes for just now   
	//self.complexes = d3.map();  
	
	//create indexed collection of all features from interactions
	// - still seems like a good starting point?  
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
				if (participant.ptms) {
					features = features.concat(participant.ptms);
				}
				var fCount = features.length;
				for (var f = 0; f < fCount; f++){
					var feature = features[f];
					self.features.set(feature.id, feature);
				}		
			}	
		}
	}
	
	//add naryLinks and participants
	for (var l = 0; l < dataElementCount; l++) {
		var interaction = data[l];
		if (interaction.object === 'interaction') {
			var jsonParticipants = interaction.participants;
			var participantCount = jsonParticipants.length    
			
			//init n-ary link
			var nLinkId = getNaryLinkIdFromInteraction(interaction)
			var nLink = self.allNaryLinks.get(nLinkId);
			if (typeof nLink === 'undefined') {
				//doesn't already exist, make new nLink
				nLink = new NaryLink(nLinkId, self);
				self.allNaryLinks.set(nLinkId, nLink);
			}
			nLink.addEvidence(interaction);
			
			//init participants
			for (var pi = 0; pi < participantCount; pi++){
				var jsonParticipant = jsonParticipants[pi];
				
				//~ console.log(JSON.stringify(jsonParticipant));
				var intRef = jsonParticipant.interactorRef;
				var partRef = jsonParticipant.id;
				if (typeof partRef === 'undefined'){
					partRef = "1";
				}
				var participantId =  intRef + "(" + partRef + ")";   
				var participant = self.participants.get(participantId);
				//only deal with SmallMols and Polymers 
				if (typeof participant === 'undefined'){
					var interactor = interactors.get(intRef);
					if (intRef.indexOf('chebi') === 0) {
						//its a small mol
						participant = new SmallMol(participantId, this, interactor);
						participant.initInteractor(interactor.label);// + ' (' + partRef + ')');
					} else {
						//console.log(JSON.stringify(intRef));
						//unwisely jump to conclusion its a polymer
						participant = new Polymer(participantId, this, interactor);
						if (typeof interactor.sequence !== 'undefined') {
							participant.initInteractor(interactor.sequence, interactor.label);// + ' (' + partRef + ')');
						}
						else {
							//hack - should look it up using accession number
							participant.initInteractor('NO_SEQUENCE', interactor.label);// + ' (' + partRef + ')');
						}
					}
					self.participants.set(participantId, participant);
				}
				
				participant.naryLinks.set(nLinkId, nLink);				
				//TODO: tidy up whats happening in NaryLink re interactor/participant terminology
				if (nLink.interactors.indexOf(participant) === -1){
					nLink.interactors.push(participant);
				}				
				
				if (jsonParticipant.stoichiometry && jsonParticipant.stoichiometry !== null){
					var interactor = self.participants.get(participantId); 
					interactor.addStoichiometryLabel(jsonParticipant.stoichiometry);
				}
			}
		}
	}

	// loop through particpants and features
	// init binary, unary and sequence links, 
	// and make needed associations between these and containing naryLink		
	for (var l = 0; l < dataElementCount; l++) {
			var interaction = data[l];
			if (interaction.object === 'interaction') {
				var jsonParticipants = interaction.participants;
				var participantCount = jsonParticipants.length    
		
			for (var pi = 0; pi < participantCount; pi++){
				var jsonParticipant = jsonParticipants[pi];			
				var features = new Array(0); 
				if (jsonParticipant.bindingSites) {
					features = features.concat(jsonParticipant.bindingSites);
				}
				if (jsonParticipant.experimentalFeatures) {
					features = features.concat(jsonParticipant.experimentalFeatures);
				}
				if (jsonParticipant.ptms) {
					features = features.concat(jsonParticipant.ptms);
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
		}
	}
	
	//init complexes
	//~ var complexes = self.complexes.values()
	//~ for (var c = 0; c < complexes.length; c++) {
		//~ var interactionId = complexes[c].id;
		//~ var naryLink;
		//~ for (var l = 0; l < dataElementCount; l++) {
			//~ var interaction = data[l];
			//~ if (interaction.id == interactionId) {
				//~ var nLinkId = getIdFromInteraction(interaction);
				//~ naryLink = self.allNaryLinks.get(nLinkId);
			//~ }
		//~ }						
		//~ complexes[c].initInteractor(naryLink);
		//~ naryLink.complex = complexes[c];           
	//~ }

	self.init();
	self.checkLinks();   

	function getNaryLinkIdFromInteraction(interaction) {
		var pIDs = d3.set();//used to eliminate duplicates
		//make id
		for (var pi = 0; pi < participantCount; pi++) {
			var pID = jsonParticipants[pi].interactorRef 
					+ "(" + jsonParticipants[pi].id + ")";;
			pIDs.add(pID);
		}
		// sort participant IDs
		pIDs = pIDs.values().sort();
		return  pIDs.join('-');
	};
	
	
	function getSequenceLink(fromSequenceData, toSequenceData){
		//~ function seqDataComparator(a, b){
			//~ if (a.interactorRef != b.interactorRef){
				//~ return a.interactorRef - b.interactorRef;
			//~ } else if (a.pos < b.pos){
				//~ return -1;
			//~ }
			//~ else {
				//~ return 1;
			//~ }
		//~ }
		function seqDataToString(seqData){
			var string = "";
			for (var s = 0; s < seqData.length; s++){
				if (s > 0){
					string += ';';
				}
				var seq = seqData[s];
				string += seq.interactorRef + '(' + seq.participantRef + '):' + seq.pos;
			}
			return string;
		}
		//~ fromSequenceData = fromSequenceData.sort(seqDataComparator);
		//~ toSequenceData = toSequenceData.sort(seqDataComparator);
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
		var nLinkId = getNaryLinkIdFromInteraction(interaction);
		var nLink = self.allNaryLinks.get(nLinkId);
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
		var nLinkId = getNaryLinkIdFromInteraction(interaction);
		var nLink = self.allNaryLinks.get(nLinkId);
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
		var nLinkId = getNaryLinkIdFromInteraction(interaction);
		var nLink = self.allNaryLinks.get(nLinkId);
		nLink.binaryLinks.set(linkID, link);
		link.addEvidence(interaction);		
		return link;
	}
};

module.exports = {readMIJSON: readMIJSON};
