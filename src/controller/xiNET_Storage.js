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
xiNET_Storage.ns = "xiNET."

xiNET_Storage.getUniProtTxt = function (accession, callback){
	function uniprotWebService(){
		var url = "http://www.uniprot.org/uniprot/" + accession + ".txt";
		d3.text(url, function (txt){
			console.log(accession + " retrieved from UniProt.");
			if(typeof(Storage) !== "undefined") {
				localStorage.setItem(xiNET_Storage.ns  + "UniProtKB."+ accession, txt);
				console.log(accession + " UniProt added to local storage.");
			}
			callback(txt)
		});
	}
	
	if(typeof(Storage) !== "undefined") {
		// Code for localStorage/sessionStorage.
		console.log("Local storage found.");
		// Retrieve
		var stored = localStorage.getItem(xiNET_Storage.ns + "UniProtKB." + accession);
		if (stored){
			console.log(accession + " UniProt from local storage.");
			callback(stored);	
		}
		else {
			console.log(accession + " UniProt not in local storage.");
			uniprotWebService();
		}
	}
	else {
		console.log("No local storage found.");
		uniprotWebService();
	}	
}

xiNET_Storage.getSequence = function (accession, callback){
	xiNET_Storage.getUniProtTxt(accession, function(txt){
			var sequence = "";
			var lines = txt.split('\n');
			var lineCount = lines.length;
			for (var l = 0; l < lineCount; l++){
				var line = lines[l];
				if (line.indexOf("SQ") === 0){
					//sequence = line;
					l++;
					for (l; l < lineCount; l++){
						line = lines[l];
						sequence += line;
					}
				}
			}
			callback(sequence.replace(/[^A-Z]/g, ''));
		}
	);
}

xiNET_Storage.getUniProtFeatures = function (accession, callback){
	xiNET_Storage.getUniProtTxt(accession, function(txt){
			var features = new Array();
			var lines = txt.split('\n');
			var lineCount = lines.length;
			for (var l = 0; l < lineCount; l++){
				var line = lines[l];
				if (line.indexOf("FT") === 0){
					//sequence = line;
					l++;
					for (l; l < lineCount; l++){
						line = lines[l];
						sequence += line;
					}
				}
			}
			callback(sequence.replace(/[^A-Z]/g, ''));
		}
	);
}

xiNET_Storage.getSuperFamFeatures = function (accession, callback){
	function superFamDAS(){
		var url = "http://supfam.org/SUPERFAMILY/cgi-bin/das/up/features?segment=" + accession;
		d3.xml(url, function (xml){
			console.log(accession + " SuperFamDAS  retrieved.");
			if(typeof(Storage) !== "undefined") {
				localStorage.setItem(xiNET_Storage.ns  + "SuperFamDAS." + accession, xml);
				console.log(accession + " SuperFamDAS added to local storage.");
			}
			console.log(new XMLSerializer().serializeToString(xml));
			callback(xml2json(xml))
		});
	}
	
	
	
	
	if(typeof(Storage) !== "undefined") {
		// Code for localStorage/sessionStorage.
		console.log("Local storage found.");
		// Retrieve
		var stored = localStorage.getItem(xiNET_Storage.ns + "SuperFamDAS."  + accession);
		if (stored){
			console.log(accession + " SuperFamDAS from local storage.");
			callback(stored);	
		}
		else {
			console.log(accession + " SuperFamDAS not in local storage.");
			superFamDAS();
		}
	}
	else {
		console.log("No local storage found.");
		superFamDAS();
	}
}
