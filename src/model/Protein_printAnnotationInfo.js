//		xiNET cross-link viewer
//		Copyright 2013 Rappsilber Laboratory, University of Edinburgh
//
//		authors: Colin Combe
//		
//		Protein_printAnnotationInfo.js

//NOT USED NOW - only thing of value in here is the highlightRegex function, 
//can be used to highlight bits of text that meet a text filter

//~ "use strict";
//~ 
//~ Protein.prototype.printAnnotationInfo = function() {
    //~ var self = this;
    //~ var message = "";
    //~ //heading, including PDB link
    //~ message += "<h5>" + highlightRegex(this.name, this.xlv.fields.names)
            //~ + " &nbsp;&nbsp;[" + highlightRegex(this.id, self.xlv.fields.names) + "] </h5><p>";
    //~ if (this.processedDAS) {
        //~ //do UniProt first
        //~ var uniprot = this.processedDAS.get('UniProt');
        //~ if (typeof uniprot !== 'undefined') {
            //~ message += "<a href='" + uniprot.href + "' target='_blank'>"
                    //~ + highlightRegex(uniprot.name, self.xlv.fields.names) + "</a>. ";
            //~ message += "Segment start: " + uniprot.start + ", stop: " + uniprot.stop + ". ";
//~ 
        //~ }
    //~ }
    //~ if (typeof this.accession !== "undefined") {
		//~ message += "<a href='http://www.ebi.ac.uk/pdbe-apps/widgets/unipdb?uniprot="
				//~ + this.accession + "' target='_blank'>PDB</a></p>";
	//~ }
    //~ //non DAS info -
    //~ //original FASTA file info
    //~ if (typeof this.description !== 'undefined' && this.description !== '') {
        //~ message += "<p>FASTA: " + highlightRegex(this.description, self.xlv.fields.names) + "</p>";
    //~ }
    //~ if (typeof this.geneName !== 'undefined') {
        //~ message += "<p>Gene names: " + highlightRegex(this.geneName, self.xlv.fields.names) + "</p>";
    //~ }
    //~ //TODO: print custom domain annotation info
//~ 
    //~ if (this.processedDAS) {
        //~ //do UniProt first
        //~ var uniprot = this.processedDAS.get('UniProt');
        //~ if (uniprot) {
            //~ message += "<p>" + highlightRegex(uniprot.full, self.xlv.fields.names) + "</p>";
            //~ printProcessedDAS(uniprot, 'UniProt');
        //~ }
        //~ //and the others
        //~ this.processedDAS.forEach(
                //~ function(serverName, processed) {
                    //~ if (serverName !== 'UniProt') { // done UniProt already
                        //~ printProcessedDAS(processed, serverName);
                    //~ }
                //~ }
        //~ );
        //~ //        message += '<pre>' +
        //~ //        JSON.stringify(this.processedDAS, null, '\t').replace(/\\u0000/gi, '')
        //~ //        + '</pre>';
    //~ }
//~ 
    //~ this.xlv.message(message);
//~ 
    //~ function printProcessedDAS(processed, serverName) {
        //~ message += "<h6>" + serverName + "</h6>";
        //~ //notes
        //~ if (processed.notes) {
            //~ message += "<h7>Notes:</h7>";
            //~ processed.notes.forEach(function(n) {
                //~ printNotes(n);
            //~ });
        //~ }
        //~ //keywords
        //~ if (processed.keywords) {
            //~ message += "<h7>Keywords:</h7><br/>";
            //~ var keywordString = "";
            //~ var keywords = processed.keywords;
            //~ var categories = keywords.keys();
            //~ var catCount = categories.length;
            //~ for (var c = 0; c < catCount; c++) {
                //~ var category = categories[c];
                //~ keywordString += '<h8>' + category + ':</h8> ';
                //~ var keywordArray = keywords.get(category);
                //~ var keywordCount = keywordArray.length;
                //~ for (var k = 0; k < keywordCount; k++) {
                    //~ var keyword = keywordArray[k];
                    //~ if (k > 0) {
                        //~ keywordString += ', ';
                    //~ }
                    //~ if (keyword.link) {
                        //~ keywordString += "<a href='" + keyword.link
                                //~ + "'  target='_blank' >"
                                //~ + highlightRegex(keyword.name, self.xlv.fields.key_text) + "</a>";
                    //~ }
                    //~ else {
                        //~ keywordString += "<span  target='_blank' >"
                                //~ + highlightRegex(keyword.name, self.xlv.fields.key_text) + "</span>";
                    //~ }
                //~ }
                //~ keywordString += '</p>';
            //~ }
            //~ message += keywordString;
        //~ }
        //~ //positional features
        //~ if (processed.positional) {
            //~ processed.positional.forEach(
                    //~ function(category, features) {
                        //~ message += "<h7>Positional features: " + category + "</h7>";
                        //~ message += "<table><tr><th>Name</th><th>Start</th><th>End</th><th>Notes</th></tr>";
                        //~ for (var i = 0; i < features.length; i++) {
                            //~ var anno = features[i];
                            //~ message += "<tr>"
                                    //~ + "<td><p>" + highlightRegex(anno.name, self.xlv.fields.pos_text)
                                    //~ + "</p></td><td><p>" + anno.start
                                    //~ + "</p></td><td><p>" + anno.end
                                    //~ + "</p></td><td>";
                            //~ if (anno.notes !== undefined) {
                                //~ message += "<p>" + anno.notes;
                                //~ var links = anno.links;
                                //~ if (links !== undefined && links !== null) {
                                    //~ var linkString = "";
                                    //~ for (var l = 0; l < links.length; l++) {
                                        //~ linkString += " <a href='" + links[l].href + "' target='_blank'>"
                                                //~ + links[l].textContent + "</a>";
                                    //~ }
                                    //~ message += linkString;
                                //~ }
                                //~ message += "</p>";
                            //~ }
                            //~ message += "</td></tr>";
                        //~ }
                        //~ message += "</table><p>&nbsp;</p>";
                    //~ }
            //~ );
        //~ }
       //~ 
        //~ //        if (processed.html) {
        //~ //            message += processed.html;
        //~ //        }
    //~ }
    //~ function printNotes(n) {
        //~ message += "<p>" + highlightRegex(n.notes, self.xlv.fields.notes);
        //~ var links = n.links;
        //~ if (links !== undefined && links !== null) {
            //~ var linkString = "";
            //~ for (var l = 0; l < links.length; l++) {
                //~ linkString += " <a href='" + links[l].href + "' target='_blank'>"
                        //~ + links[l].textContent + "</a>";
            //~ }
            //~ message += linkString;
        //~ }
        //~ message += "</p>";
    //~ }
//~ 
    //~ function highlightRegex(annotationText, doIt) {
        //~ if (doIt === true) {
            //~ var regex;
            //~ var countRegex = self.xlv.textFilterRegex.length;
            //~ var matches = new Array();
            //~ var NOTs = new Array();
            //~ //matches
            //~ for (var r = 0; r < countRegex; r++) {
                //~ regex = self.xlv.textFilterRegex[r];
                //~ regex.lastIndex = 0;
                //~ var result = regex.exec(annotationText);
                //~ while (result != null) {
                    //~ var match = result[0];
                    //~ matches.push({start: (regex.lastIndex - match.length), stop: regex.lastIndex});
                    //~ result = regex.exec(annotationText);
                //~ }
            //~ }
//~ 
            //~ var openSpan = "<span class='highlight'>";
            //~ var closeSpan = "</span>";
            //~ var highlightSpanTagLength = openSpan.length + closeSpan.length;
            //~ for (var i = 0; i < matches.length; i++) {
                //~ var match = matches[i];
                //~ annotationText = insert((i * highlightSpanTagLength) + match.start, openSpan, annotationText);
                //~ annotationText = insert((i * highlightSpanTagLength) + openSpan.length + match.stop, closeSpan, annotationText);
            //~ }
//~ 
            //~ //NOTs
            //~ countRegex = self.xlv.textFilterRegexNOT.length;
            //~ for (var r = 0; r < countRegex; r++) {
                //~ regex =  new RegExp(">[^<]+(" + self.xlv.textFilterRegexNOT[r].source + ")", "gi");
                //~ regex.lastIndex = 0;
                //~ result = regex.exec(">" + annotationText);
                //~ //console.log("in regex loop");
                //~ while (result != null) {
                     //~ var match = result[1];
                    //~ NOTs.push({start: (regex.lastIndex - match.length - 1), stop: regex.lastIndex - 1});
                    //~ result = regex.exec(">" + annotationText);
            //~ //console.log(JSON.stringify(NOTs));
                       //~ }
            //~ }
            //~ var openSpanNOT = "<span class='NOT'>";
            //~ var highlightSpanNotTagLength = openSpanNOT.length + closeSpan.length;
//~ 
            //~ for (var i = 0; i < NOTs.length; i++) {
                //~ //console.log("in insert loop");
                //~ var match = NOTs[i];
                //~ annotationText = insert((i * highlightSpanNotTagLength) + match.start, openSpanNOT, annotationText);
                //~ annotationText = insert((i * highlightSpanNotTagLength) + openSpanNOT.length + match.stop, closeSpan, annotationText);
            //~ }
//~ 
        //~ }
        //~ return annotationText;
    //~ }
    //~ function insert(index, string, target) {
        //~ return target.substring(0, index) + string + target.substring(index, target.length);
    //~ }
    //~ ;
//~ };
