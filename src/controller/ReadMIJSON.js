//    xiNET interaction viewer
//    Copyright 2013 Rappsilber Laboratory
//
//    This product includes software developed at
//    the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//
//    author: Colin Combe

"use strict";

var colorbrewer = require('../../node_modules/colorbrewer/colorbrewer');
var xiNET_Storage = require('./xiNET_Storage');
var Annotation = require('../model/interactor/Annotation');
var Interactor = require('../model/interactor/Interactor');
var Protein = require('../model/interactor/Protein');
var SmallMol = require('../model/interactor/SmallMol');
var Gene = require('../model/interactor/Gene');
var DNA = require('../model/interactor/DNA');
var RNA = require('../model/interactor/RNA');
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
	this.expand = expand;//naryLink checks this when deciding colour
	var data = miJson.data;
    var dataElementCount = data.length;
    var self = this;
	self.features = d3.map();
	self.complexes = d3.map();  
	
	var needsSequence = d3.set();//things that need seq looked up
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
				if (jsonParticipant.features) features = jsonParticipant.features;
				
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
	self.checkLinks();
	self.initLayout();
	
	//make mi features into annotations
	var features = self.features.values();
	var fCount = features.length;
	for (var f = 0; f < fCount; f++){
		var feature = features[f];
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
		var colour = Interactor.domainColours(feature.name);
		// the id info we need is inside sequenceData att
		if (feature.sequenceData) {
			//~ console.log(JSON.stringify(feature, null, '\t'));
			var seqData = feature.sequenceData;
			var seqDataCount = seqData.length;
			for (var sdi = 0; sdi < seqDataCount; sdi++) {
				var seqDatum = seqData[sdi];
				var mID = seqDatum.interactorRef; 
				if (expand)	{
					mID = mID	+ "(" + seqDatum.participantRef + ")";
				}
				var molecule = self.molecules.get(mID);
				var sequenceRegex = /(.+)-(.+)/;
				var match = sequenceRegex.exec(seqDatum.pos);
				var startRes = match[1] * 1;
				var endRes = match[2] * 1;
				if (isNaN(startRes) === false && isNaN(endRes) === false) {
					var annotation = new Annotation(annotName, startRes, endRes, colour);
					if (molecule.miFeatures == null) {
						molecule.miFeatures = new Array();
					}
					molecule.miFeatures.push(annotation);
					console.log(molecule.id);
				}
			}
		}
	} 
	
	//lookup missing sequences
	var nsIds = needsSequence.values();
	var nsCount = nsIds.length;
	var countSequences = 0;
	for (var m = 0; m < nsCount; m++){
		xiNET_Storage.getSequence(nsIds[m], function(id, seq){
				self.molecules.get(id).setSequence(seq);
				countSequences++;
				if (countSequences === nsCount){
					self.initPolymers();
				}
			}
		);
	}
	if (nsCount === 0) {
		self.initPolymers();
	}
	
	function readStoichExpanded(){			
		//get interactors
		var interactors = d3.map();
		for (var n = 0; n < dataElementCount; n++) {
			if (data[n].object === 'interactor') {
				var interactor = data[n];
				interactors.set(interactor.id, interactor);
			}
		}
		
		//get maximum stoichiometry
		var maxStoich = 0;
		for (var l = 0; l < dataElementCount; l++) {
			var interaction = data[l];
			if (interaction.object === 'interaction') {
				var participantCount = interaction.participants.length;
				for (var pi = 0; pi < participantCount; pi++) {
					var participant = interaction.participants[pi];
					if (participant.stoichiometry && (participant.stoichiometry-0) > maxStoich){
						maxStoich = (participant.stoichiometry-0);
					}
				}	
			}
		}		
		if (maxStoich < 30){
			miJson = Expand.matrix(miJson);
		}
		
		indexFeatures();	
			
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
					//alot of time is being spent on creating these IDs, stash them in the interaction object?
					interaction.naryId =  nLinkId;

				}
				nLink.addEvidence(interaction);
				
				//init participants
				for (var pi = 0; pi < participantCount; pi++){
					var jsonParticipant = jsonParticipants[pi];
					
					var intRef = jsonParticipant.interactorRef;
					var partRef = jsonParticipant.id;
					var participantId =  intRef + "(" + partRef + ")";   
					var participant = self.molecules.get(participantId);
					if (typeof participant === 'undefined'){
						var interactor = interactors.get(intRef);
						if (typeof interactor === 'undefined') {
							//must be a previously unencountered complex
							interactor = new Complex(intRef, self);
							self.interactors.set(intRef, interactor);
							self.complexes.set(intRef, interactor);
						}
						if (interactor.type.name === 'molecule set') {
							participant = new InteractorSet(participantId, self, interactor); //doesn't really work yet
						}
						else if (interactor.type.name === 'small molecule') {
							participant = new SmallMol(participantId, self, interactor, interactor.label);
						}
						else if (interactor.type.name === 'protein') {
							participant = new Protein(participantId, self, interactor, interactor.label);
							if (typeof interactor.sequence !== 'undefined') {
								participant.setSequence(interactor.sequence);
							}
							else {
								//should look it up using accession number
								if (participantId.indexOf('uniprotkb') === 0){
									needsSequence.add(participantId);
								} else {
									participant.setSequence("SEQUENCEMISSING");
								}
							}
						}
						else if (interactor.type.name === 'peptide') {
							participant = new Protein(participantId, self, interactor, interactor.label);
							//~ if (typeof interactor.sequence !== 'undefined') {
								//~ participant.setSequence(interactor.sequence);
							//~ }
							//~ else {
								//~ //should look it up using accession number
								//~ if (participantId.indexOf('uniprotkb') === 0){
									//~ needsSequence.add(participantId);
								//~ } else {
									//~ participant.setSequence("SEQUENCEMISSING");
								//~ }
							//~ }
						}
						else if (interactor.type.name === 'gene') {
							//its a small mol
							participant = new Gene(participantId, self, interactor, interactor.label);
							//participant.initInteractor(interactor.label);// + ' (' + partRef + ')');
						}else if (interactor.type.name === 'ribonucleic acid') {
							//its a small mol
							participant = new RNA(participantId, self, interactor, interactor.label);
							//participant.initInteractor(interactor.label);// + ' (' + partRef + ')');
						}else if (interactor.type.name === 'deoxyribonucleic acid') {
							//its a small mol
							participant = new DNA(participantId, self, interactor, interactor.label);
							//participant.initInteractor(interactor.label);// + ' (' + partRef + ')');
						} else {
							alert("Unrecognised type:" + interactor.type.name);
							//~ participant = new Complex(participantId, self, interactor);
							//~ self.complexes.set(participantId, participant);
						}
						self.molecules.set(participantId, participant);
					}
					
					participant.naryLinks.set(nLinkId, nLink);				
					//TODO: tidy up whats happening in NaryLink re interactor/participant terminology
					if (nLink.interactors.indexOf(participant) === -1){
						nLink.interactors.push(participant);
					}				
					
					if (jsonParticipant.stoichiometry && jsonParticipant.stoichiometry !== null){
						var interactor = self.molecules.get(participantId); 
						interactor.addStoichiometryLabel(jsonParticipant.stoichiometry);
					}
				}
			}
		}	
	};
	
	function indexFeatures(){
		//create indexed collection of all features from interactions
		// - still seems like a good starting point?  
		for (var l = 0; l < dataElementCount; l++) {
			var interaction = data[l];
			if (interaction.object === 'interaction') {
				var participantCount = interaction.participants.length;
				for (var pi = 0; pi < participantCount; pi++) {
					var participant = interaction.participants[pi];
					var features = new Array(0);
					if (participant.features) features = participant.features;

					var fCount = features.length;
					for (var f = 0; f < fCount; f++){
						var feature = features[f];
						self.features.set(feature.id, feature);
					}		
				}	
			}
		}		
	}
	
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
				self.molecules.set(interactor.id, p);
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
					if (participant.features) features = participant.features;
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
					var participant = self.molecules.get(participantId);
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
						//~ self.molecules.set(participantId, participant);
					//~ }
					//~ 
					participant.naryLinks.set(nLinkId, nLink);				
					//TODO: tidy up whats happening in NaryLink re interactor/participant terminology
					if (nLink.interactors.indexOf(participant) === -1){
						nLink.interactors.push(participant);
					}				
					//~ 
					if (jsonParticipant.stoichiometry && jsonParticipant.stoichiometry !== null){
						var interactor = self.molecules.get(participantId); 
						interactor.addStoichiometryLabel(jsonParticipant.stoichiometry);
					}
				}
			}
		}
		
	};
	

	function getNaryLinkIdFromInteraction(interaction) {
		if (interaction.naryId) {
			return interaction.naryId;
		}
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
			return self.molecules.get(id); 
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
