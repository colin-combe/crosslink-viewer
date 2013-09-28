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
};
