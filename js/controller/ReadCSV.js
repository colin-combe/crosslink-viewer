xiNET.Controller.prototype.readCSV = function(csvContents) {
    var rows = d3.csv.parseRows(csvContents);
    
    var headers = rows[0];
    console.log(headers.toString());
    
    var iProt1 = headers.indexOf('Protein1');
    var iRes1 = headers.indexOf('Residue1');
    var iProt2 = headers.indexOf('Protein2');
    var iRes2 = headers.indexOf('Residue2');
    var iScore = headers.indexOf('Score');    
    var iId = headers.indexOf('Id');
    
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
    if (iRes1 === -1){
		// we could try a different sometimes used column name
		iRes1 = headers.indexOf('AbsPos1');
		if (iRes1 === -1){
			alert("Failed to read column 'Residue1' from CSV file");
			return;
		}
	}
    if (iRes2 === -1){
		// we could try a different sometimes used column name
		iRes2 = headers.indexOf('AbsPos2');
		if (iRes2 === -1){
			alert("Failed to read column 'Residue1' from CSV file");
			return;
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
		
		//We are likely going to encounter things like proteins with 
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
				if (id !== '-'){
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
			//~ //ignore mathces where protien name continas string "reverse" or "decoy" 
			//~ if (prot1.toLowerCase().indexOf("reverse") === -1 
				//~ && prot2.toLowerCase().indexOf("reverse") === -1
				//~ && prot1.toLowerCase().indexOf("decoy") === -1 
				//~ && prot2.toLowerCase().indexOf("decoy") === -1) {
				if (iId !== -1){
					id = rows[row][iId];
				}
				else {
					id = row;
				}
				if (iScore !== -1){
					score = rows[row][iScore];
				} 
				xlv.addMatch(prot1, rows[row][iRes1], 
								prot2, rows[row][iRes2], 
								id, score);
		}
        //~ }
		var protCount = xlv.proteins.values().length;
		var prots = xlv.proteins.values();
		for (var p = 0; p < protCount; p++) {
			var prot = prots[p];
			if (/*prot.name.indexOf("DECOY_") !== -1 &&*/ prot.proteinLinks.keys().length === 0) {
				xlv.proteins.remove(prot.id);
			}
		}       
        xlv.init();
        if (typeof initSlider === "function"){
			initSlider();
		}
		new xiNET.DASUtil(xlv);
    }
};
//~ 
//~ xiNET.Controller.prototype.readXQuest = function(csvContents) {
    //~ var rows = d3.csv.parse(csvContents);
    //~ //    var headers = rows[0];//first row is headers
    //~ //    var iProt1 = headers.indexOf('protein1');
    //~ //    var iRes1 = headers.indexOf('residue1');
    //~ //    var iProt2 = headers.indexOf('protein2');
    //~ //    var iRes2 = headers.indexOf('residue2');
    //~ //    var iDescription = headers.indexOf('description');
    //~ var countRows = rows.length;
    //~ var prot1, prot2;
    //~ for (var row = 0; row < countRows; row++) {
		 //~ prot1 = rows[row]['Protein1'].trim();
		 //~ prot2 = rows[row]['Protein2'].trim();
		 //~ if (prot1.toLowerCase().indexOf("reverse") === -1 && prot2.toLowerCase().indexOf("reverse") === -1
		 //~ && prot1.toLowerCase().indexOf("decoy") === -1 && prot2.toLowerCase().indexOf("decoy") === -1) {
			//~ xlv.addMatch(prot1, rows[row]['AbsPos1'], prot2, rows[row]['AbsPos2'], 
					//~ rows[row]['Id'], rows[row]['ld-Score']);
		 //~ }
    //~ }
    //~ xlv.init();
	//~ if (typeof initSlider === "function"){
		//~ initSlider();
	//~ }
//~ };
