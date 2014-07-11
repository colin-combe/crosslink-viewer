xiNET.Controller.prototype.readCSV = function(csvContents, manualAnnotations) {
    var rows = d3.csv.parseRows(csvContents);
    
    var headers = rows[0];
    console.log(headers.toString());
    
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
			iLinkPosition1 = headers.indexOf('Residue1');//backwards compatibility
			if (iLinkPosition1 === -1){		
				alert("Failed to read column 'LinkPos1' from CSV file");
				return;
			}
		}
	}
    if (iLinkPosition2 === -1){
		// we could try a different sometimes used column name
		iLinkPosition2 = headers.indexOf('AbsPos2');
		if (iLinkPosition2 === -1){
			iLinkPosition2 = headers.indexOf('Residue2');//backwards compatibility
			if (iLinkPosition2 === -1){
				alert("Failed to read column 'LinkPos2' from CSV file");
				return;
			}
		}
	}
	// no score? no problem, we can still proceed
    if (iScore === -1){
		// we could try a different sometimes used column name
		iScore = headers.indexOf('ld-Score');
	}
	
	// if a Fasta file has been provided then this.proteins will not be empty
    var countRows = rows.length;
	if (this.proteins.keys().length === 0) {
		//No protein data. We will need to look up accession numbers to get sequences.
		
		//We are going to encounter things like proteins with 
		//differnt ids/names but the same accession number.		
		var accLookupMap = d3.map();
		//The following server is not returning results for protein isoforms.
		var server_url = 'http://www.ebi.ac.uk/das-srv/uniprot/das/uniprot/';
		var client = JSDAS.Simple.getClient(server_url);
		addProteins(iProt1, this);
		addProteins(iProt2, this);
		initProteins(this);	
	} else {
		//We already had protein data - can just add links.
		addCSVLinks(xlv);
	}
	
    function addProteins(columnIndex, xlv) {
        for (var row = 1; row < countRows; row++) {
            var prots = rows[row][columnIndex].replace(/(['"])/g, '');
            var accArray = prots.split(/[;,]/);
            for (var i = 0; i < accArray.length; i++) {
				var id = accArray[i].trim();
				if (id.trim() !== '-' && id.trim() !== 'n/a'){
					var acc, name;
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
					if (!xlv.proteins.has(id)) {
						var protein = new Protein(id, xlv, acc, name);
						xlv.proteins.set(id, protein);
						var accLookupEntry = accLookupMap.get(acc);
						if (typeof accLookupEntry === "undefined") {
							accLookupMap.set(acc, [id]);
						}else{
							accLookupEntry.push(id);
						}
					}
				}
            }
        }
    }

    function initProteins(xlv) {
        // This function will be executed in case of error
        var error_response = function() {
            alert('No FASTA file and DAS sequence look up failed.');
        };
        // This function inits the protein
        var response = function(res) {
            //this.message(res);
            var acc = res.SEQUENCE[0].id.trim();
            var seq = res.SEQUENCE[0].textContent.trim();
            var label = res.SEQUENCE[0].label.trim();
            var pids = accLookupMap.get(acc);
            for (var i = 0; i<pids.length; i++) {
				var prot = xlv.proteins.get(pids[i]);
				prot.initProtein(seq, label);
			}
			accLookupMap.remove(acc);
            xlv.message('Waiting on DAS response (sequence) for:<br/>' + accLookupMap.keys().toString());
            if (accLookupMap.keys().length === 0) {
                xlv.message('All sequences downloaded from DAS');
                addCSVLinks(xlv);
            }
        };
        var keys = accLookupMap.keys();
        var accCount = keys.length;
        for (var p = 0; p < accCount; p++) {
            var accession = keys[p];
            //Asking the client to retrieve the sequence
            client.sequence({
                segment: accession
            }, response, error_response);
        }
    }

    function addCSVLinks(xlv) {
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
				xlv.addMatch(prot1,  peptidePositions1.join(';'), 
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
					xlv.addMatch(prot1,  peptidePositions1.join(';'), 
							null, null, 
							id, score, linkPos1, linkPos2, pep1_seq, null);	
				} else { //its a linker modified peptide
					xlv.addMatch(prot1,  peptidePositions1.join(';'), 
							null, null, 
							id, score, linkPos1, null, pep1_seq, null);					
				}				
			}
			else {
				var m = rows[row];
				xlv.addMatch(prot1, m[iRes1], prot2, m[iRes2], id, score,
					m[iLinkPosition1], m[iLinkPosition2],
					m[iPepSeq1],m[iPepSeq2]);
			}
		}
		var protCount = xlv.proteins.values().length;
		var prots = xlv.proteins.values();
		for (var p = 0; p < protCount; p++) {
			var prot = prots[p];
			if (prot.proteinLinks.keys().length === 0) {
				xlv.proteins.remove(prot.id);
			}
		}       
        xlv.init();
        if (typeof initSlider === "function"){
			initSlider();
		}
		if (manualAnnotations){
			xlv.addAnnotations(manualAnnotations);
		}
		else {
			new xiNET.DASUtil(xlv);
		}
    }
};
