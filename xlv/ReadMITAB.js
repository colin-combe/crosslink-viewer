xinet.Controller.prototype.readMITAB = function(mitab) {
    var rows = d3.tsv.parseRows(mitab);
    var countRows = rows.length;

    //we're going to need to know when all proteins have been init'ed from DAS
    //if DAS fails tempStack is left containig the accession number that failed
    var tempStack = d3.map();

    var self = this;
    addInteractor(0, 4, 9);
    addInteractor(1, 5, 10);
    self.message(tempStack);
    var server_url = 'http://www.ebi.ac.uk/das-srv/uniprot/das/uniprot/';
    var client = JSDAS.Simple.getClient(server_url);
    initProteins();// calls addCSVLinks() when it completes

    function addInteractor(identifierIndex, aliasIndex, organismIndex) {
        for (var row = 0; row < countRows; row++) {
            var identifier = new MiTabData(rows[row][identifierIndex]);
            var acc = identifier.fields[0].val;
            var accDb = identifier.fields[0].db;

            var alias = rows[row][aliasIndex];
            var labelRegex = new RegExp(".*:(.+?)\\(display_short", "gi");
            var result = labelRegex.exec(alias);
            if (result == null) {
                labelRegex = new RegExp(".*:(.+?)\\(display_", "gi");
                result = labelRegex.exec(alias);
            }
            var label = result[1];

            var organism = new MiTabData(rows[row][organismIndex]);

            if (!self.proteins.has(acc)) {
                var interactor = new Protein(acc, self, acc, label, organism);
                self.proteins.set(acc, interactor);
                if (accDb === "uniprotkb") {
                    tempStack.set(acc, alias);
                }
                else {
                    interactor.initProtein('NOSEQUENCE', label, alias);
                }
            }
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
            self.message('<p>Waiting on sequence DAS response for: '
                + tempStack.keys().toString() + '</p>');
            if (tempStack.keys().length === 0) {
                self.message('<p>All sequences downloaded from DAS</p>');
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
        var features = ""
        for (var row = 0; row < countRows; row++) {
            var sourceId = new MiTabData(rows[row][0]).fields[0].val;
            var targetId = new MiTabData(rows[row][1]).fields[0].val;

            var interactionId = new MiTabData(rows[row][13]);
            var confidenceScore = new MiTabData(rows[row][14]);

            var interactionDetectionMethod = new MiTabData(rows[row][6]);
            var firstAuthor = new MiTabData(rows[row][7]);
            var publicationID = new MiTabData(rows[row][8]);
            var interactionTypes = new MiTabData(rows[row][11]);
            var sourceDatabases = new MiTabData(rows[row][12]);
            var complexExpansion = new MiTabData(rows[row][15]);
            var sourceBiologicalRole = new MiTabData(rows[row][16]);
            var targetBiologicalRole = new MiTabData(rows[row][17]);
            var sourceExperimentalRole = new MiTabData(rows[row][16]);
            var targetExperimentalRole = new MiTabData(rows[row][17]);
            var sourceAnnotations = new MiTabData(rows[row][25]);
            var targetAnnotations = new MiTabData(rows[row][26]);
            var interactionAnnotations = new MiTabData(rows[row][27]);
            var hostOrgainsm = new MiTabData(rows[row][28]);
            var interactionParameters = new MiTabData(rows[row][29]);
            var creationDate = new MiTabData(rows[row][30]);
            var updateDate = new MiTabData(rows[row][31]);
            var negative = new MiTabData(rows[row][35]);
            var sourceFeatures = new MiTabData(rows[row][36]);
            var targetFeatures = new MiTabData(rows[row][37]);
            var sourceStochiometry = new MiTabData(rows[row][38]);
            var targetStochiometry = new MiTabData(rows[row][39]);
            var sourceParticpantIdentificationMethod = new MiTabData(rows[row][40]);
            var targetParticpantIdentificationMethod = new MiTabData(rows[row][41]);

            self.addInteraction(sourceId, "?", targetId, "?", row, rows[row][14].split(':')[1]);

        //u r here - add features
        }
        self.init();
    //    new xinet.DASUtil(xlv);
    }
};


function MiTabData(columnContent) {
    console.log(columnContent);
    var first = '("(?:(?:[^"]*(?:\\\\")?)*)"|(?:[^:]*)):';
    var second = '("(?:(?:[^"]*(?:\\\\")?)*)"|(?:[^\\(\\|]*))?';
    var third = '(?:\\(("(?:(?:[^"]*(?:\\\\")?)*)"|(?:[^\\)]*))\\))?';
    var regex = new RegExp (first+second+third+'\\|?', 'g');

    this.fields= new Array();

    var match = regex.exec(columnContent);
    while (match != null){
        var field = {};
        field.db = match[1];
        //eliminate quotes from value
        console.log(JSON.stringify(match));
        if (match.length > 2){
            if (match[2] != null){
                field.val = match[2].replace(/"/g, '');
            }
            field.desc = match[3];
        }
        this.fields.push(field);
        match = regex.exec(columnContent);
    }
    console.log(JSON.stringify(this.fields));
}