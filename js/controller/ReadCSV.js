xinet.Controller.prototype.readCSV = function(csvContents) {
    var rows = d3.csv.parse(csvContents);
    
    var headers = d3.keys(rows[0]);
    console.log(headers.toString());
    
    var countRows = rows.length;
	if (this.proteins.keys().length === 0) {
		var accLookupMap = d3.map();
		var server_url = 'http://www.ebi.ac.uk/das-srv/uniprot/das/uniprot/';
		var client = JSDAS.Simple.getClient(server_url);
		addProteins('Protein1', this);
		addProteins('Protein2', this);
		initProteins(this);	
	} else {
		addCSVLinks(xlv);
	}
	
    function addProteins(columnName, xlv) {
        for (var row = 0; row < countRows; row++) {
            var prots = rows[row][columnName];
            var accArray = prots.split(';');
            for (var i = 0; i < accArray.length; i++) {
				var id = accArray[i].trim();
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

    function initProteins(xlv) {
        // This function will be executed in case of error
        var error_response = function() {
            alert('Bad response, Wrong URL?, No Sequence XML?');
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
        for (var row = 0; row < countRows; row++) {
			var id = rows[row]['Id'];
			if (id == null){
				id = row + 1;
			}
			xlv.addMatch(rows[row]['Protein1'].trim(), rows[row]['Residue1'],
                    rows[row]['Protein2'].trim(), rows[row]['Residue2'], id, rows[row]['Score']);
        }
        xlv.init();
        if (typeof initSlider === "function"){
			initSlider();
		}
		new xinet.DASUtil(xlv);
    }
};

xinet.Controller.prototype.readXQuest = function(csvContents) {
    var rows = d3.csv.parse(csvContents);
    //    var headers = rows[0];//first row is headers
    //    var iProt1 = headers.indexOf('protein1');
    //    var iRes1 = headers.indexOf('residue1');
    //    var iProt2 = headers.indexOf('protein2');
    //    var iRes2 = headers.indexOf('residue2');
    //    var iDescription = headers.indexOf('description');
    var countRows = rows.length;
    var prot1, prot2;
    for (var row = 0; row < countRows; row++) {
		 prot1 = rows[row]['Protein1'].trim();
		 prot2 = rows[row]['Protein2'].trim();
		 if (prot1.toLowerCase().indexOf("reverse") === -1 && prot2.toLowerCase().indexOf("reverse") === -1
		 && prot1.toLowerCase().indexOf("decoy") === -1 && prot2.toLowerCase().indexOf("decoy") === -1) {
			xlv.addMatch(prot1, rows[row]['AbsPos1'], prot2, rows[row]['AbsPos2'], 
					rows[row]['Id'], rows[row]['ld-Score']);
		 }
    }
    xlv.init();
	if (typeof initSlider === "function"){
		initSlider();
	}
};
