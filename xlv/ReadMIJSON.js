xinet.Controller.prototype.readMIJSON = function(csvContents) {
    var rows = d3.csv.parse(csvContents);
    //    var headers = rows[0];//first row is headers
    //    var iProt1 = headers.indexOf('protein1');
    //    var iRes1 = headers.indexOf('residue1');
    //    var iProt2 = headers.indexOf('protein2');
    //    var iRes2 = headers.indexOf('residue2');
    //    var iDescription = headers.indexOf('description');
    var countRows = rows.length;
    //we're going to need to know when all proteins have been init'ed from DAS
//    var tempStack = d3.map(); // TODO: make tempStack a d3 map keySet,
//    //so if DAS fail its left conatinig the accession no that failed
//    addProteins('protein1', this);
//    addProteins('protein2', this);
//    var server_url = 'http://www.ebi.ac.uk/das-srv/uniprot/das/uniprot/';
//    var client = JSDAS.Simple.getClient(server_url);
//    initProteins(this);
                addCSVLinks(xlv);
    function addProteins(columnName, xlv) {
        for (var row = 0; row < countRows; row++) {
            var prots = rows[row][columnName];
            var accArray = prots.split(';');
            for (var i = 0; i < accArray.length; i++) {
                var acc, name;
                //TODO: have better way to parse accessino out of swissprot id,
                //check for 'sp', need to do same thing in Match.js
                if (accArray[i].indexOf('|') === -1) {
                    acc = accArray[i];
                }
                else {
                    var splitOnBar = accArray[i].split('|');
                    acc = splitOnBar [1];
                    name = splitOnBar[2];
                }
                if (!xlv.proteins.has(acc)) {
                    tempStack.set(acc, 1);
                    xlv.proteins.set(acc, new Protein(acc, xlv, acc, name));
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
            var id = res.SEQUENCE[0].id;
            var seq = res.SEQUENCE[0].textContent;
            var label = res.SEQUENCE[0].label;
            var prot = xlv.proteins.get(id);
            prot.initProtein(seq, label);
            //            var key = '\\u0000' + seq;
            tempStack.remove(id);
            xlv.message('Waiting on DAS response (sequence) for:<br/>' + tempStack.keys().toString());
            if (tempStack.keys().length === 0) {
                xlv.message('All sequences downloaded from DAS');
                addCSVLinks(xlv);
            }
        };
        var keys = xlv.proteins.keys();
        var proteinCount = keys.length;
        for (var p = 0; p < proteinCount; p++) {
            var accession = keys[p];
            //Asking the client to retrieve the sequence
            client.sequence({
                segment: accession
            }, response, error_response);
        }
    }

    function addCSVLinks(xlv) {
        //        xlv.message(this.proteins);
        for (var row = 0; row < countRows; row++) {
            xlv.addMatch(rows[row]['protein1'], rows[row]['residue1'],
                    rows[row]['protein2'], rows[row]['residue2'], row + 1, rows[row]['score']);
        }
        xlv.init();
        new xinet.DASUtil(xlv);
    }
};
