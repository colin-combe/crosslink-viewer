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
var SequenceDatum = require('../model/link/SequenceDatum');
var BinaryLink = require('../model/link/BinaryLink');
var UnaryLink = require('../model/link/UnaryLink');
var Expand = require ('./Expand');
 
// reads our MI JSON format 
var readMIJSON = function(miJson, expand) {
    //check that we've got a parsed javascript object here, not a String
    miJson = (typeof miJson === 'object') ? miJson : JSON.parse(miJson);
    //default is to expand
	if (typeof expand === 'undefined'){expand = true;}

	var data = miJson.data;
    var dataElementCount = data.length;
    var self = this;
	Polymer.UNITS_PER_RESIDUE = self.svgElement.parentNode.clientWidth / 3000;
	self.features = d3.map();
	//forget complexes for just now   
	//self.complexes = d3.map();  
	
	expand? readStoichExpanded() : readStoichUnexpanded();	
	
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
						// break links to different nodes into seperate binary links 
						var toSequenceData_indexedByNodeId = d3.map();
						var linkedFeatureCount = linkedFeatureIDs.length;
						for (var lfi = 0; lfi < linkedFeatureCount; lfi++){
							var linkedFeature = self.features.get(linkedFeatureIDs[lfi]) 
							var seqDataCount = linkedFeature.sequenceData.length;
							for (var s = 0; s < seqDataCount; s++){
								var seqData = linkedFeature.sequenceData[s];
								var nodeId = seqData.interactorRef;
								if (expand) {
									nodeId = nodeId + '(' + seqData.participantRef + ')';  
								}
								var toSequenceData = toSequenceData_indexedByNodeId.get(nodeId);
								if (typeof toSequenceData === 'undefined'){
									toSequenceData = new Array();
									toSequenceData_indexedByNodeId.set(nodeId, toSequenceData);
								}
								toSequenceData = toSequenceData.push(seqData)
							}
						}
						var countEndNodes = toSequenceData_indexedByNodeId.values().length;
						for (var n = 0; n < countEndNodes; n++) {
							toSequenceData = toSequenceData_indexedByNodeId.values()[n];
							var sequenceLink = getFeatureLink(fromSequenceData, toSequenceData, interaction);
							var fromInteractor = sequenceLink.fromSequenceData[0].node;						
							var toInteractor = sequenceLink.toSequenceData[0].node;						
							if (fromInteractor === toInteractor){
								getUnaryLink(fromInteractor, interaction);
							}
							else {
								getBinaryLink(fromInteractor, toInteractor, interaction);
							}
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
	
	function readStoichExpanded(){			
		//get interactors
		var interactors = d3.map();
		for (var n = 0; n < dataElementCount; n++) {
			if (data[n].object === 'interactor') {
				var interactor = data[n];
				interactors.set(interactor.id, interactor);
			}
		}
		
		Expand.matrix(miJson);
				
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
					//~ if (typeof partRef === 'undefined'){
						//~ partRef = "1";
					//~ }
					var participantId =  intRef + "(" + partRef + ")";   
					var participant = self.participants.get(participantId);
					if (typeof participant === 'undefined'){
						var interactor = interactors.get(intRef);
						if (interactor.type.name === 'molecule set') {
							participant = new InteractorSet(participantId, self, interactor);
						}
						else if (interactor.type.name === 'small molecule') {
							//its a small mol
							participant = new SmallMol(participantId, self, interactor);
							participant.initInteractor(interactor.label);// + ' (' + partRef + ')');
						} else {
							//console.log(JSON.stringify(intRef));
							//unwisely jump to conclusion its a polymer
							participant = new Polymer(participantId, self, interactor);
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
		

	
	};
	
	function readStoichUnexpanded(){
		//get interactors
		for (var n = 0; n < dataElementCount; n++) {
			if (data[n].object === 'interactor') {
				var interactor = data[n];
				var p;
				if (interactor.type.name === 'molecule set') {//ignore interactor sets
					p = new InteractorSet(interactor.id, self, interactor);
				}
				else if (interactor.type.name === 'small molecule') {
					p = new SmallMol(interactor.id, self, interactor);
					p.initInteractor(interactor.label);
				} else {
					p = new Polymer(interactor.id, self, interactor);
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
				self.participants.set(interactor.id, p);
			}
		}
		
		//create indexed collection of all features from interactions
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
		
		//add naryLinks 
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
				
				//~ //init participants
				for (var pi = 0; pi < participantCount; pi++){
					var jsonParticipant = jsonParticipants[pi];
					//~ 
					//console.log(JSON.stringify(jsonParticipant));
					var intRef = jsonParticipant.interactorRef;
					//~ var partRef = jsonParticipant.id;
					//~ if (typeof partRef === 'undefined'){
						//~ partRef = "1";
					//~ }
					var participantId =  intRef;// + "(" + partRef + ")";   
					var participant = self.participants.get(participantId);
					//~ if (typeof participant === 'undefined'){
						//~ var interactor = interactors.get(intRef);
						//~ if (interactor.type.name === 'molecule set') {
							//~ participant = new InteractorSet(participantId, self, interactor);
						//~ }
						//~ else if (interactor.type.name === 'small molecule') {
							//~ //its a small mol
							//~ participant = new SmallMol(participantId, self, interactor);
							//~ participant.initInteractor(interactor.label);// + ' (' + partRef + ')');
						//~ } else {
							//~ //console.log(JSON.stringify(intRef));
							//~ //unwisely jump to conclusion its a polymer
							//~ participant = new Polymer(participantId, self, interactor);
							//~ if (typeof interactor.sequence !== 'undefined') {
								//~ participant.initInteractor(interactor.sequence, interactor.label);// + ' (' + partRef + ')');
							//~ }
							//~ else {
								//~ //hack - should look it up using accession number
								//~ participant.initInteractor('NO_SEQUENCE', interactor.label);// + ' (' + partRef + ')');
							//~ }
						//~ }
						//~ self.participants.set(participantId, participant);
					//~ }
					//~ 
					participant.naryLinks.set(nLinkId, nLink);				
					//TODO: tidy up whats happening in NaryLink re interactor/participant terminology
					if (nLink.interactors.indexOf(participant) === -1){
						nLink.interactors.push(participant);
					}				
					//~ 
					if (jsonParticipant.stoichiometry && jsonParticipant.stoichiometry !== null){
						var interactor = self.participants.get(participantId); 
						interactor.addStoichiometryLabel(jsonParticipant.stoichiometry);
					}
				}
			}
		}
		
	};
	

	function getNaryLinkIdFromInteraction(interaction) {
		var jsonParticipants = interaction.participants;
		var participantCount = jsonParticipants.length    
			
		var pIDs = d3.set();//used to eliminate duplicates
		//make id
		for (var pi = 0; pi < participantCount; pi++) {
			var pID = jsonParticipants[pi].interactorRef; 
			if (expand)	{
				pID = pID	+ "(" + jsonParticipants[pi].id + ")";
			}
			pIDs.add(pID);
		}
		
		return pIDs.values().sort().join('-');
	};
	
	
	function getFeatureLink(fromSeqData, toSeqData, interaction){
		function seqDataToString(seqData){
			var nodeIds = d3.set();//used to eliminate duplicates
			//make id
			for (var s = 0; s < seqData.length; s++){
				var seq = seqData[s];
				var id = seq.interactorRef;
				if (expand) {
					id = id + '(' + seq.participantRef + ')';
				}
				id = id + ':' + seq.pos;
				nodeIds.add(id); 
			}
			//sort ids
			return nodeIds.values().sort().join(';');
		}
		function getNode(seqDatum){
			var id = seqDatum.interactorRef;
			if (expand){
				id = id + '(' + seqDatum.participantRef + ')';
			}
			return self.participants.get(id); 
		}
		
		var start =  seqDataToString(fromSequenceData);
		var end =  seqDataToString(toSequenceData);
		var seqLinkId, endsSwapped;
		if (start < end){
			seqLinkId  =  start + '><' + end;
			endsSwapped = false;
		} else {
			seqLinkId = end + '><' + start;
			endsSwapped = true;
		}			
		var sequenceLink = self.allSequenceLinks.get(seqLinkId);
		if (typeof sequenceLink === 'undefined') {
			var fromFeaturePositions = new Array();
			var seqDatumCount = fromSeqData.length;
			for (var i = 0; i < seqDatumCount; i++) {
				fromFeaturePositions.push(new SequenceDatum(getNode(fromSeqData[i]), fromSeqData[i].pos));
			}
			var toFeaturePositions = new Array();
			seqDatumCount = toSeqData.length;
			for (i = 0; i < seqDatumCount; i++) {
				toFeaturePositions.push(new SequenceDatum(getNode(toSeqData[i]), toSeqData[i].pos));
			}
			//~ if (endsSwapped === false) {
				sequenceLink = new SequenceLink(seqLinkId, fromFeaturePositions, toFeaturePositions, self, interaction);
			//~ }else {
				//~ sequenceLink = new SequenceLink(seqLinkId, toFeaturePositions, fromFeaturePositions, self, interaction);
			//~ }
   			self.allSequenceLinks.set(seqLinkId, sequenceLink);
		}
		
		sequenceLink.addEvidence(interaction);	
		var nLinkId = getNaryLinkIdFromInteraction(interaction);
		var nLink = self.allNaryLinks.get(nLinkId);
		nLink.sequenceLinks.set(seqLinkId, sequenceLink);
		return sequenceLink;						
	};
	
	function getUnaryLink(interactor, interaction){
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
	
	function getBinaryLink(sourceInteractor, targetInteractor, interaction){
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
