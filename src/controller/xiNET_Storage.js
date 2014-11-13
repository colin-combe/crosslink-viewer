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

xiNET_Storage.getUniProtTxt(accession){
	function uniprotWebService(){
		var url = "http://www.uniprot.org/uniprot/" + accession + ".txt";
		
		
		
		
		//~ d3.xml(url, function (xml){
			//~ var uniprotJson = xml2json(xml, '');
			//~ 
			//~ if(typeof(Storage) !== "undefined") {
				//~ localStorage.setItem(accession, uniprotJson);
			//~ }
			//~ 
			//~ //console.log(JSON.stringify(JSON.parse(uniprotJson)), null, "\t"));	
			//~ // console.log(xml2json(xml));	
		//~ });
		
		return "bogus";
	}
	
	var ns = xiNET_Storage.ns
	if(typeof(Storage) !== "undefined") {
		// Code for localStorage/sessionStorage.
		console.log("Local storage found.");
		// Retrieve
		var stored = localStorage.getItem(ns + accession);
		if (typeof stored !== 'undefined'){
			console.log(accession + " from local storage.");
			console.log(JSON.stringify(JSON.parse(stored)), null, "\t"));
			return stored;	
		}
		else {
			// Store
			var retireved = uniprotWebService(accession);
			localStorage.setItem(ns + accession, retrieved);
			console.log(ns + accession + " to local storage.");
			console.log(JSON.stringify(JSON.parse(retreived)), null, "\t"));		
			return retrieved;
		}
	}
	else {
		// Sorry! No Web Storage support..
		console.log("No local storage found.");
		var retireved = uniprotWebService(accession);
		console.log(JSON.stringify(JSON.parse(retreived)), null, "\t"));		
		return retrieved;
	}	
}

xiNET_Storage.getSequence(accession){}
xiNET_Storage.getUniProtFeatures(accession){}
xiNET_Storage.getSuperFamFeatures(accession){}
