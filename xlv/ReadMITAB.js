xinet.Controller.prototype.readMITAB = function(mitab) {
    //xlv.message(mitab); 
    var rows = d3.tsv.parseRows(mitab);
    //xlv.message(rows); 
    var countRows = rows.length;

    //we're going to need to know when all proteins have been init'ed from DAS
    var tempStack = d3.map();
    //so if DAS fail its left containig the accession no that failed

    var self = this;
    addInteractor(0, 4);
    addInteractor(1, 5);
    self.message(tempStack);
    var server_url = 'http://www.ebi.ac.uk/das-srv/uniprot/das/uniprot/';
    var client = JSDAS.Simple.getClient(server_url);
    initProteins();
//                addCSVLinks(xlv);

    function addInteractor(identifierIndex, aliasIndex) {
        for (var row = 0; row < countRows; row++) {
            var acc = getAccession( rows[row][identifierIndex]);
            var database = rows[row][identifierIndex].split(':')[0];
            var alias = rows[row][aliasIndex];
            var labelRegex = new RegExp(".*:(.+?)\\(display_short", "gi");
            var result = labelRegex.exec(alias);
            if (result == null) {
                labelRegex = new RegExp(".*:(.+?)\\(display_", "gi");
                result = labelRegex.exec(alias);
            }
            var label = result[1];

//            for (var i = 0; i < accArray.length; i++) {
//                var acc, name;
//                //TODO: have better way to parse accessino out of swissprot id,
//                //check for 'sp', need to do same thing in Match.js
//                if (accArray[i].indexOf('|') === -1) {
//                    acc = accArray[i];
//                }
//                else {
//                    var splitOnBar = accArray[i].split('|');
//                    acc = splitOnBar [1];
//                    name = splitOnBar[2];
//                }
            if (!self.proteins.has(acc)) {
                var interactor = new Protein(acc, self, acc, label);
                self.proteins.set(acc, interactor);
                if (database === "uniprotkb") {
                    tempStack.set(acc, alias);
                }
                else {
                    interactor.initProtein('NOSEQUENCE', label, alias);
                }
            }
//            }
        }
    }

    function initProteins() {
        // This function will be executed in case of error
        var error_response = function() {
            alert('Sequence DAS lookup FAILED');
        };
        // This function inits the protein
        var response = function(res) {
            //this.message(res);
            var id = res.SEQUENCE[0].id;
            var seq = res.SEQUENCE[0].textContent;
            var label = res.SEQUENCE[0].label;
            var prot = self.proteins.get(id);
            prot.initProtein(seq, label, tempStack.get(id));
            //            var key = '\\u0000' + seq;
            tempStack.remove(id);
            self.message('<p>Waiting on sequence DAS response for: ' + tempStack.keys().toString() + '</p>');
            if (tempStack.keys().length === 0) {
                self.message('<p>All sequences downloaded from DAS</p>');
//                self.init();

                addCSVLinks();
            }
        };
        var keys = tempStack.keys();
        var proteinCount = keys.length;
        for (var p = 0; p < proteinCount; p++) {
            var accession = keys[p];
            //Asking the client to retrieve the sequence
            client.sequence({
                segment: accession
            }, response, error_response);
        }
    }

    function addCSVLinks() {
        //        xlv.message(this.proteins);
        for (var row = 0; row < countRows; row++) {
            var sourceId = getAccession(rows[row][0]);
            var targetId = getAccession(rows[row][1]);
            self.addMatch(sourceId,"?", targetId, "?", row , rows[row][14].split(':')[1]);
            //u r here - add features
        }
        self.init();
    //    new xinet.DASUtil(xlv);
    }
    
    function getAccession(alias){
        return alias.substring(alias.indexOf(':') + 1).replace(/"/gi, '');
    }
};
