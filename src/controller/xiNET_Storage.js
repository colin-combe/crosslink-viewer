//    xiNET Cross-link Viewer
//    Copyright 2014 Rappsilber Laboratory
//
//    This product includes software developed at
//    the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//
//    author: Colin Combe
//
//    xiNET_Storage.js

"use strict";

function xiNET_Storage() {}

xiNET_Storage.ns = "xiNET.";

xiNET_Storage.accessionFromId = function (id){
	id = id + "";
	if (id.indexOf('|') !== -1){
		return id.split('|')[1];
	} else {
		return id;
	}	
}

xiNET_Storage.getUniProtTxt = function (id, callback){
	var accession = xiNET_Storage.accessionFromId(id);
	function uniprotWebService(){
		var url = "http://www.uniprot.org/uniprot/" + accession + ".txt";
		d3.text(url, function (txt){
			//~ console.log(accession + " retrieved from UniProt.");
			if(typeof(Storage) !== "undefined") {
				localStorage.setItem(xiNET_Storage.ns  + "UniProtKB."+ accession, txt);
				//~ console.log(accession + " UniProt added to local storage.");
			}
			callback(id, txt);
		});
	}
	
	if(typeof(Storage) !== "undefined") {
		// Code for localStorage/sessionStorage.
		//~ console.log("Local storage found.");
		// Retrieve
		var stored = localStorage.getItem(xiNET_Storage.ns + "UniProtKB." + accession);
		if (stored){
			//~ console.log(accession + " UniProt from local storage.");
			callback(id, stored);	
		}
		else {
			//~ console.log(accession + " UniProt not in local storage.");
			uniprotWebService();
		}
	}
	else {
		//~ console.log("No local storage found.");
		uniprotWebService();
	}	
}

xiNET_Storage.getSequence = function (id, callback){
	var accession = xiNET_Storage.accessionFromId(id);
	//~ xiNET_Storage.getUniProtTxt(accession, function(accession, txt){
			//~ var sequence = "";
			//~ var lines = txt.split('\n');
			//~ var lineCount = lines.length;
			//~ for (var l = 0; l < lineCount; l++){
				//~ var line = lines[l];
				//~ if (line.indexOf("SQ") === 0){
					//~ //sequence = line;
					//~ l++;
					//~ for (l; l < lineCount; l++){
						//~ line = lines[l];
						//~ sequence += line;
					//~ }
				//~ }
			//~ }
			//~ callback(id, sequence.replace(/[^A-Z]/g, ''));
		//~ }
	//~ );
	
	function uniprotWebServiceFASTA(){
		var url = "http://www.uniprot.org/uniprot/" + accession + ".fasta";
		d3.text(url, function (txt){
			//~ console.log(txt);
			//~ console.log(accession + " retrieved from UniProt.");
			var sequence = "";
			var lines = txt.split('\n');
			var lineCount = lines.length;
			for (var l = 1; l < lineCount; l++){
				var line = lines[l];
				//~ if (line.indexOf("SQ") === 0){
					//sequence = line;
					//~ l++;
					//~ for (l; l < lineCount; l++){
						line = lines[l];
						sequence += line;
					//~ }
				//~ }
			}
			//~ console.log(sequence);
			sequence = sequence.replace(/[^A-Z]/g, '');
			if(typeof(Storage) !== "undefined") {
					localStorage.setItem(xiNET_Storage.ns  + "UniProtKB.fasta."+ accession, sequence);
			}
			callback(id, sequence);
		});
	}
	
	if(typeof(Storage) !== "undefined") {
		// Code for localStorage/sessionStorage.
		//~ console.log("Local storage found.");
		// Retrieve
		var stored = localStorage.getItem(xiNET_Storage.ns + "UniProtKB.fasta." + accession);
		if (stored){
			//~ console.log(accession + " UniProt from local storage.");
			callback(id, stored);	
		}
		else {
			//~ console.log(accession + " UniProt not in local storage.");
			uniprotWebServiceFASTA();
		}
	}
	else {
		//~ console.log("No local storage found.");
		uniprotWebServiceFASTA();
	}	
}

xiNET_Storage.getUniProtFeatures = function (id, callback){
	var accession = xiNET_Storage.accessionFromId(id);
		xiNET_Storage.getUniProtTxt(id, function(id, txt){
			var features = new Array();
			if (txt !== null) {
				var lines = txt.split('\n');
				var lineCount = lines.length;
				for (var l = 0; l < lineCount; l++){
					var line = lines[l];
					if (line.indexOf("FT") === 0){
						var fields = line.split(/\s{2,}/g);
						if (fields.length > 4 && fields[1] !== 'CHAIN') {	
							features.push(new Annotation (fields[1], fields[2], fields[3], null, fields[4])); 
						}
					}
				}
			}
			callback(id, features);
		}
	);
}

xiNET_Storage.getSuperFamFeatures = function (id, callback){
	var accession = xiNET_Storage.accessionFromId(id);
	function superFamDAS(){
		var url = "http://supfam.org/SUPERFAMILY/cgi-bin/das/up/features?segment=" + accession;
		d3.xml(url, function (xml){
			xml = new XMLSerializer().serializeToString(xml);
			//~ console.log(accession + " SuperFamDAS  retrieved.");
			if(typeof(Storage) !== "undefined") {
				localStorage.setItem(xiNET_Storage.ns  + "SuperFamDAS." + accession, xml);
				//~ console.log(accession + " SuperFamDAS added to local storage.");
			}
			parseSuperFamDAS(xml);
		});
	}
	
	function parseSuperFamDAS (dasXml){
		//~ console.log(dasXml);
		if (window.DOMParser)
		{
			  var parser=new DOMParser();
			  var xmlDoc=parser.parseFromString(dasXml,"text/xml");
		}
		else // Internet Explorer
		{
		  var xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
		  xmlDoc.async=false;
		  xmlDoc.loadXML(dasXml);
		}
		var features = new Array();
		var xmlFeatures = xmlDoc.getElementsByTagName('FEATURE');
		var featureCount = xmlFeatures.length;
		for (var f = 0; f < featureCount; f++) {
			var xmlFeature = xmlFeatures[f]; 
			var type = xmlFeature.getElementsByTagName('TYPE')[0];//might need to watch for text nodes getting mixed in here 
			var category = type.getAttribute('category')
			if (category === 'miscellaneous') {
				var name = type.getAttribute('id');
				var start = xmlFeature.getElementsByTagName('START')[0].textContent;
				var end = xmlFeature.getElementsByTagName('END')[0].textContent;
				features.push(new Annotation(name, start, end));
			}
		} 
		//~ console.log(JSON.stringify(features));
		callback(id, features);
  	}
	
	if(typeof(Storage) !== "undefined") {
		//~ console.log("Local storage found.");
		// Retrieve
		var stored = localStorage.getItem(xiNET_Storage.ns + "SuperFamDAS."  + accession);
		if (stored){
			//~ console.log(accession + " SuperFamDAS from local storage.");
			parseSuperFamDAS(stored);	
		}
		else {
			//~ console.log(accession + " SuperFamDAS not in local storage.");
			superFamDAS();
		}
	}
	else {
		//~ console.log("No local storage found.");
		superFamDAS();
	}
}
