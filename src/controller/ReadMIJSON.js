//    xiNET interaction viewer
//    Copyright 2013 Rappsilber Laboratory
//
//    This product includes software developed at
//    the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//
//    author: Colin Combe

"use strict";

var SmallMol = require('../model/interactor/SmallMol');
var Polymer = require('../model/interactor/Polymer');
var Complex = require('../model/interactor/Complex');
var InteractorSet = require('../model/interactor/InteractorSet');
var NaryLink = require('../model/link/NaryLink');

// reads our MI JSON format 
var readMIJSON = function(miJson, controller) {
    //just check that we've got a parsed javacsript object here, not a String
    miJson = (typeof miJson === 'object') ? miJson : JSON.parse(miJson);
	
	//interactors for which we can look up sequence and uniprot features
	var uniprotInteractors = d3.set();
     
    var data = miJson.data;
    var dataElementCount = data.length;
    for (var n = 0; n < dataElementCount; n++) {
        if (data[n].object === 'interactor') {
            var interactor = data[n];
			var p;
			if (interactor.type.name === 'molecule set') {//ignore participant sets
					p = new InteractorSet(interactor.id, this, interactor);
			}
			else if (interactor.type.name === 'small molecule') {
				p = new SmallMol(interactor.id, this, interactor);
			} else {
				p = new Polymer(interactor.id, this, interactor);
			}
			this.interactors.set(interactor.id, p);
			if (typeof interactor.sequence !== 'undefined') {
				p.initInteractor(interactor.sequence, interactor.label);
			}
			else {
				//~ if (interactor.identifier.db === 'uniprotkb') {
					//~ interactorsMissingSequence.add(interactor.identifier.id);
				//~ }
				//~ else {
					p.initInteractor('NO_SEQUENCE_NO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCENO_SEQUENCE'
					, interactor.label);
				//~ }
			}

        }
    }
    
    var self = this;// the javascript bodge 

    //we will download missing sequences before doing second iteration to add links
    //~ if (interactorsMissingSequence.values().length === 0) {//if no missing sequences
        addInteractions();
		//~ this.message(this.links);
    //~ }
    //~ else {
        //~ this.message(interactorsMissingSequence);
        //~ initProteinSequences();//calls addInteractions when complete
    //~ }
    
    function addInteractions() {
        var width = self.svgElement.parentNode.clientWidth;
        Polymer.UNITS_PER_RESIDUE = ((width / 2)) / 1000;//((Interactor.MAXSIZE < 5000)? Interactor.MAXSIZE : 5000);
        
        //probably temp
        self.features = d3.map();       
        self.complexes = d3.map();  
        
        //add features from interactions   
        for (var l = 0; l < dataElementCount; l++) {
            var interaction = data[l];
            if (interaction.object === 'interaction') {
				var participantCount = interaction.participants.length;
				for (var pi = 0; pi < participantCount; pi++) {
					var participant = interaction.participants[pi];
					var features = new Array(0);
					if (participant.bindingSites) {features = features.concat(participant.bindingSites);}
					if (participant.experimentalFeatures) {features = features.concat(participant.experimentalFeatures);}
					var fCount = features.length;
					for (var f = 0; f < fCount; f++){
						var feature = features[f];
							self.features.set(feature.id, feature);
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
            complexes[c].initInteractor();
            
        }
        //show features
        //~ var interactors = self.interactors.values();
        //~ var proteinCount = interactors.length;
        //~ for (var p = 0; p < proteinCount; p++) {
            //~ var prot = interactors[p];
            //~ prot.setPositionalFeatures(prot.customAnnotations);
        //~ }
        self.init();
        self.checkLinks();
    
};

var addFeatures = function(interaction) {

};

// Moved from Link.js

var getIdFromInteraction = function(interaction){

    return linkId;  
}

var addInteraction = function(interaction) {
    
    if (typeof interaction.confidences !== 'undefined') {
        var confidences = interaction.confidences;
        var confCount = confidences.length;
        for (var c = 0; c < confCount; c++){
            var conf = confidences[c];
            if (conf.type === 'intact-miscore'){
                interaction.score = conf.value * 1.0;
            }
        }
    }
    
    // link id is particpant interactorRefs, in ascending order, 
    // with duplicates eliminated, seperated by dash
	var linkId = "";
    // sort participants by interactorRef
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
    
    var link = this.allNaryLinks.get(linkId);
	
	
    if (typeof link === 'undefined') {
		var interactorIds = linkId.split('-');
		var iCount = interactorIds.length;
		
		link = new NaryLink(linkId, this);
		this.allNaryLinks.set(linkId, link);
		
		for (var i = 0; i < iCount; i++) {
			var interactor = this.interactors.get(interactorIds[i]);
			if (typeof interactor === 'undefined') {
				//must be a previously unencountered complex
				interactor = new Complex(interactorIds[i], this);
				this.interactors.set(interactorIds[i], interactor);
			}
			interactor.naryLinks.set(linkId, link);
			link.interactors.push(interactor);
		}
	}
    //all other initialisation to do with links takes place within Links 
    link.addEvidence(interaction);
};

var toJSON = function() {
    return {
        interactors: this.interactors,
        features: this.features,
		links: this.links,
    };
};

    //~ function initProteinSequences() {
        //~ var server_url = 'http://www.ebi.ac.uk/das-srv/uniprot/das/uniprot/';
        //~ var client = JSDAS.Simple.getClient(server_url);
        //~ // This function will be executed in case of error
        //~ var error_response = function(e) {
            //~ //we need to parse id out of URL, this is not ideal
            //~ var id = e.url.substring(e.url.lastIndexOf('=') + 1);
            //~ console.error('Sequence DAS lookup FAILED for ' + id);
            //~ console.error(e.url);
            //~ var p = self.interactors.get(id);
            //~ p.initProtein('MISSING');
            //~ interactorsMissingSequence.remove(id);
            //~ self.message('<p>Waiting on sequence DAS response for: '
                    //~ + interactorsMissingSequence.values().toString() + '</p>');
            //~ if (interactorsMissingSequence.values().length === 0) {
                //~ self.message('<p>All DAS sequence queries returned</p>');
                //~ addInteractions();
			//~ //	this.message(this);
            //~ }
        //~ };
        //~ 
        //~ // This function inits the protein with sequence
        //~ var response = function(res) {
            //~ var id = res.SEQUENCE[0].id;
            //~ var seq = res.SEQUENCE[0].textContent;
            //~ var label = res.SEQUENCE[0].label;
            //~ var prot = self.interactors.get(id);
            //~ prot.initProtein(seq, label, id);
            //~ interactorsMissingSequence.remove(id);
            //~ self.message('<p>Waiting on sequence DAS response for: '
                    //~ + interactorsMissingSequence.values().toString() + '</p>');
            //~ if (interactorsMissingSequence.values().length === 0) {
                //~ self.message('<p>All sequences downloaded from DAS</p>');
                //~ addInteractions();
            //~ }
        //~ };
//~ 
        //~ //send off the DAS sequence requests
        //~ var keys = interactorsMissingSequence.values();
        //~ var proteinCount = keys.length;
        //~ for (var p = 0; p < proteinCount; p++) {
            //~ var accession = keys[p];
            //~ //Asking the client to retrieve the sequence
            //~ client.sequence({
                //~ segment: accession
            //~ }, response, error_response);
        //~ }
    //~ }


//~ 
//~ function loadLayout(layoutDesc) {
    //~ this.currentLayoutName = layoutDesc;
    //~ if (layoutDesc != '') {
        //~ var xmlhttp = new XMLHttpRequest();
        //~ var url = "../searches/getLayout.php";
        //~ var params = "sid=" + this.sid + "&desc=" + layoutDesc;
        //~ xmlhttp.open("POST", url, true);
        //~ xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        //~ xmlhttp.onreadystatechange = function() {//Call a function when the state changes.
            //~ if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                //~ var response = xmlhttp.responseText;
                //~ this.message("response:" + response, true);
                //~ this.setLayout(response);
                //~ this.loadLayout();
                //~ //            var interactors = this.interactors.values();
                //~ //            var proteinCount = interactors.length;
                //~ //            for (var p = 0; p < proteinCount; p++) {
                //~ //                var prot = interactors[p];
                //~ //                prot.setAllLineCoordinates();
                //~ //            }
                //~ this.checkLinks();
            //~ }
        //~ };
        //~ xmlhttp.send(params);
    //~ }
//~ }


module.exports = {readMIJSON: readMIJSON, addInteraction: addInteraction, toJSON: toJSON};
