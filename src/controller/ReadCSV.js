//    xiNET Cross-link Viewer
//    Copyright 2013 Rappsilber Laboratory
//
//    This product includes software developed at
//    the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//
//    author: Colin Combe, Hendrik Hofstadt
//
//    ReadCSV.js

"use strict";

xiNET.Controller.prototype.readCSV = function(csv, fasta, annotations) {
    var self = this;
    var rows = d3.csv.parseRows(csv);    
    var headers = rows[0];
    for (var h = 0; h < headers.length; h++) {
		headers[h] = headers[h].trim();	
	}
    //console.log(headers.toString());
    var iProt1 = headers.indexOf('Protein1');
    var iRes1 = headers.indexOf('PepPos1');
    var iProt2 = headers.indexOf('Protein2');
    var iRes2 = headers.indexOf('PepPos2');
    var iScore = headers.indexOf('Score');    
    var iId = headers.indexOf('Id');
    var iLinkPosition1 = headers.indexOf('LinkPos1');
    var iPepSeq1 = headers.indexOf('PepSeq1');
    var iLinkPosition2 = headers.indexOf('LinkPos2');
    var iPepSeq2 = headers.indexOf('PepSeq2');
    var iType = headers.indexOf('Type');//for xQuest looplinks and monolinks 
    //missing Protein column
    if (iProt1 === -1){
		alert("Failed to read column 'Protein1' from CSV file");
		return;
	}    
    if (iProt2 === -1){
		alert("Failed to read column 'Protein2' from CSV file");
		return;
	}
	//missing Residue column(s) 
    if (iLinkPosition1 === -1){
		// we could try a different sometimes used column name
		iLinkPosition1 = headers.indexOf('AbsPos1');
		if (iLinkPosition1 === -1){
			alert("Failed to read column 'LinkPos1' from CSV file");
			return;
		}
	}
    if (iLinkPosition2 === -1){
		// we could try a different sometimes used column name
		iLinkPosition2 = headers.indexOf('AbsPos2');
		if (iLinkPosition2 === -1){
			alert("Failed to read column 'LinkPos2' from CSV file");
			return;
		}
	}
	// no score? no problem, we can still proceed
    if (iScore === -1){
		// we could try a different sometimes used column name
		iScore = headers.indexOf('ld-Score');
	}
	
	var countRows = rows.length;
	if (fasta){ //FASTA file provided
		var line_array = fasta.split("\n");
		var tempIdentifier = null;
		var tempDescription;
		var tempSeq;
		var iFirstSpace;
		for(var i = 0;i < line_array.length;i++){
			var line = "" + line_array[i];
			// semi-colons indicate comments, ignore them
			if(line.indexOf(";") !== 0){
				// greater-than indicates description line
				if(line.indexOf(">") === 0){
					if (tempIdentifier !== null) {
						var name = nameFromIdentifier(tempIdentifier);
						//accession number is null
						var prot = new Protein(tempIdentifier, this, null, name);
						prot.setSequence(tempSeq.trim());
						this.proteins.set(tempIdentifier, prot);
						
						//Also adds xQuest reversed & decoys 
						var decRevProt = new Protein("decoy_reverse_" + tempIdentifier, 
							this, null, "DECOY_" + name);
						decRevProt.setSequence(tempSeq.trim().split("").reverse().join(""));
						this.proteins.set("decoy_reverse_" + tempIdentifier, decRevProt);
						var revProt = new Protein("reverse_" + tempIdentifier, 
							this, null, "DECOY_" + name);
						revProt.setSequence(tempSeq.trim().split("").reverse().join(""));
						this.proteins.set("reverse_" + tempIdentifier, revProt);			
						
						tempSeq = "";
					}
					iFirstSpace = line.indexOf(" ");
					if (iFirstSpace === -1 ) iFirstSpace = line.length;
					tempIdentifier = line.substring(1, iFirstSpace).trim().replace(/(['"])/g, '');
					tempDescription = line.substring(iFirstSpace).trim();
					//console.log(tempIdentifier);
				}
				else{
					tempSeq += line.trim();			
				}		
			}
		}	
		name = nameFromIdentifier(tempIdentifier);
		//there will be one protein still to be added when we get to end
		var prot = new Protein(tempIdentifier, this, null, name);
		prot.setSequence(tempSeq.trim());
		this.proteins.set(tempIdentifier, prot);
		//same for xQuest decoys
		var decRevProt = new Protein("decoy_reverse_" + tempIdentifier, 
			this, null, "DECOY_" + name);
		decRevProt.setSequence(tempSeq.trim().split("").reverse().join(""));
		this.proteins.set("decoy_reverse_" + tempIdentifier, decRevProt);			
		var revProt = new Protein("reverse_" + tempIdentifier, 
			this, null, "DECOY_" + name);
		revProt.setSequence(tempSeq.trim().split("").reverse().join(""));
		this.proteins.set("reverse_" + tempIdentifier, revProt);	
	
		//read links
		addCSVLinks();	
    	//take out unlinked
		var prots = this.proteins.values();
		var protCount = prots.length;
		for (var p = 0; p < protCount; p++) {
			var prot = prots[p];
			if (prot.proteinLinks.keys().length === 0) {
				this.proteins.remove(prot.id);
			}
		}
		if (annotations){
			self.addAnnotations(annotations);
		}						
		self.initProteins();
	}
	else { // no FASTA file 
		//we may encounter proteins with 
		//different ids/names but the same accession number.		
		addProteins(iProt1);
		addProteins(iProt2);
		var prots = this.proteins.values();
		var protCount = prots.length;
		var countSequences = 0;
		for (var p = 0; p < protCount; p++){
			var id = prots[p].id;
			xiNET_Storage.getSequence(id, function(ident, seq){
					self.proteins.get(ident).setSequence(seq);
					countSequences++;
					if (countSequences === protCount){
						if (annotations){
							self.addAnnotations(annotations);
						}
						self.initProteins();
					}
				}
			);
		}
		addCSVLinks();
	}
	
	this.initLayout();
	
    function addProteins(columnIndex) {
        for (var row = 1; row < countRows; row++) {
            var prots = rows[row][columnIndex].replace(/(['"])/g, '');
            var accArray = prots.split(/[;,]/);
            for (var i = 0; i < accArray.length; i++) {
				var id = accArray[i].trim();
				if (id.trim() !== '-' && id.trim() !== 'n/a'){
					var acc = "", name = "";
					if (accArray[i].indexOf('|') === -1) {
						acc = accArray[i].trim();
					}
					else {
						var splitOnBar = accArray[i].split('|');
						acc = splitOnBar [1].trim();
						name = splitOnBar[2].trim();
						var iUnderscore = name.indexOf("_");
						if (iUnderscore !== -1) {
							name = name.substring(0, iUnderscore).trim();
						}
					}
					if (!self.proteins.has(id)) {
						var protein = new Protein(id, self, acc, name);
						self.proteins.set(id, protein);
					}
				}
            }
        }
    }
	
	function nameFromIdentifier(ident){
		var name = ident;
		var iBar = ident.indexOf("|");
		if (iBar !== -1) {
			var splitOnBar = ident.split("|");
			if (splitOnBar.length === 3) {
				name = splitOnBar[2];
				var iUnderscore = name.indexOf("_");
				if (iUnderscore !== -1) {
					name = name.substring(0, iUnderscore);
				}
			}
		}
		return name;		
	}

    function addCSVLinks() {
        var prot1, prot2, id, score;
		for (var row = 1; row < countRows; row++) {
			prot1 = rows[row][iProt1];
			prot2 = rows[row][iProt2];
			if (iId !== -1){
				id = rows[row][iId];
			}
			else {
				id = row;
			}
			if (iScore !== -1){
				score = rows[row][iScore];
			} 
			var xQuestCrosslinkIdRegex = /(.*)-(.*)-a(\d*)-b(\d*)/; //only appiles to type 2 products (i.e. cross-linked peptides)
			var xQuestOtherIdRegex = /(.*)-(.*)-(.*)/;
			var m = xQuestCrosslinkIdRegex.exec(id);
			var m2 = xQuestOtherIdRegex.exec(id);
			if (m !== null){
				var pep1_seq = m[1], pep2_seq = m[2],
					linkPos1 = m[3] - 0, linkPos2 = m[4] - 0;
				var peptidePositions1 = rows[row][iLinkPosition1].toString().split(/[;,]/);
				for (var pp = 0; pp < peptidePositions1.length; pp++){
					peptidePositions1[pp] = parseInt(peptidePositions1[pp]) - linkPos1 + 1;
				}
				var peptidePositions2 = rows[row][iLinkPosition2].toString().split(/[;,]/);
				for (pp = 0; pp < peptidePositions2.length; pp++){
					peptidePositions2[pp] = parseInt(peptidePositions2[pp]) - linkPos2 + 1;
				}
				self.addMatch(prot1,  peptidePositions1.join(';'), 
								prot2, peptidePositions2.join(';'), 
								id, score, linkPos1, linkPos2, pep1_seq, pep2_seq);
			} else if (iType !== -1 && m2 !== null && (rows[row][iType] === "intralink" || rows[row][iType] === "monolink")) {
				var pep1_seq = m2[1];
				var linkPos1 = parseInt(m2[2].substring(1));
				var peptidePositions1 = rows[row][iLinkPosition1].toString().split(/[;,]/);
				for (var pp = 0; pp < peptidePositions1.length; pp++){
					peptidePositions1[pp] = parseInt(peptidePositions1[pp]) - linkPos1 + 1;
				}
				if (rows[row][iType] === "intralink") {//its an internally linked peptide
					var linkPos2 = parseInt(m2[3].substring(1));
					self.addMatch(prot1,  peptidePositions1.join(';'), 
							null, null, 
							id, score, linkPos1, linkPos2, pep1_seq, null);	
				} else { //its a linker modified peptide
					self.addMatch(prot1,  peptidePositions1.join(';'), 
							null, null, 
							id, score, linkPos1, null, pep1_seq, null);					
				}				
			}
			else {
				var m = rows[row];
				self.addMatch(prot1, m[iRes1], prot2, m[iRes2], id, score,
					m[iLinkPosition1], m[iLinkPosition2],
					m[iPepSeq1],m[iPepSeq2]);
			}
		}     
    }
};
