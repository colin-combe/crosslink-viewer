xiNET.Controller.prototype.readMITAB = function(mitab) {
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
            //            if (acc == null){alert(row)};
            var accDb = identifier.fields[0].db;

            var alias = rows[row][aliasIndex];
            var labelRegex = new RegExp(".*:(.+?)\\(display_short", "gi");
            var result = labelRegex.exec(alias);
            if (result == null) {
                labelRegex = new RegExp(".*:(.+?)\\(display_", "gi");
                result = labelRegex.exec(alias);
            }
            var label;
            if (result == null) {
                label = alias;
            }
            else {
                var label = result[1];
            }

            var organism = new MiTabData(rows[row][organismIndex]);

            if (!self.proteins.has(acc)) {
                var interactor = new Interactor(acc, self, acc, label, organism);
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
            alert('Sequence DAS lookup FAILED for ' + accession);
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
                Interactor.UNITS_PER_RESIDUE = (((/*width - 350*/1024) * 0.5) - Interactor.LABELMAXLENGTH) / Interactor.MAXSIZE;//TODO: fix that -350 hack
                var proteins = self.proteins.values();
                var proteinCount = proteins.length;
                for (var p = 0; p < proteinCount; p++) {
                    proteins[p].initStick();
                }
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
        var interactions = new Array();
        for (var row = 0; row < countRows; row++) {

            var sourceId = new MiTabData(rows[row][0]).fields[0].val;
            var targetId = new MiTabData(rows[row][1]).fields[0].val;

            var interactionId = new MiTabData(rows[row][13]);
            //            var confidenceScore = new MiTabData(rows[row][14]);

            var interactionDetectionMethod = new MiTabData(rows[row][6]);
            //            var firstAuthor = new MiTabData(rows[row][7]);
            var publicationId = new MiTabData(rows[row][8]);
            var interactionTypes = new MiTabData(rows[row][11]);
            var sourceDatabases = new MiTabData(rows[row][12]);
            //            var complexExpansion = new MiTabData(rows[row][15]);
            var sourceBiologicalRole = new MiTabData(rows[row][16]);
            var targetBiologicalRole = new MiTabData(rows[row][17]);
            var sourceExperimentalRole = new MiTabData(rows[row][18]);
            var targetExperimentalRole = new MiTabData(rows[row][19]);
            //            var sourceAnnotations = new MiTabData(rows[row][25]);
            //            var targetAnnotations = new MiTabData(rows[row][26]);
            //            var interactionAnnotations = new MiTabData(rows[row][27]);
            var hostOrganism = new MiTabData(rows[row][28]);
            //            var interactionParameters = new MiTabData(rows[row][29]);
            //            var creationDate = new MiTabData(rows[row][30]);
            //            var updateDate = new MiTabData(rows[row][31]);
            var negative = new MiTabData(rows[row][35]);
            var sourceFeatures = new MiTabData(rows[row][36]);
            var targetFeatures = new MiTabData(rows[row][37]);
            //            var sourceStochiometry = new MiTabData(rows[row][38]);
            //            var targetStochiometry = new MiTabData(rows[row][39]);
            var sourceParticpantIdentificationMethod = new MiTabData(rows[row][40]);
            var targetParticpantIdentificationMethod = new MiTabData(rows[row][41]);

            var interaction = {};

            if (negative.fields[0].val == 'true'){
                alert('found negative interaction');
            }
            //also score
            //also spoke expansion

            interaction.experiment = {};
            interaction.experiment.detmethod = {};
            interaction.experiment.detmethod.id = interactionDetectionMethod.fields[0].val;
            interaction.experiment.detmethod.name = interactionDetectionMethod.fields[0].desc;
            interaction.experiment.pubid = publicationId.fields[0].val;
            interaction.experiment.host = {};
            interaction.experiment.host.taxid = hostOrganism.fields[0].val;
            interaction.experiment.host.common = hostOrganism.fields[0].desc;
            if (hostOrganism.fields.length > 1) {
                interaction.experiment.host.scientific = hostOrganism.fields[1].desc;
            }
            interaction.experiment.sourceDatabase = {};
            interaction.experiment.sourceDatabase.id = sourceDatabases.fields[0].val;
            interaction.experiment.sourceDatabase.name = sourceDatabases.fields[0].desc;

            interaction.interactionType = {};
            interaction.interactionType.id = interactionTypes.fields[0].val;
            interaction.interactionType.name = interactionTypes.fields[0].desc;

            interaction.source = {};
            interaction.source.id = sourceId;
            interaction.source.bioRole = {};
            interaction.source.bioRole.id = sourceBiologicalRole.fields[0].val;
            interaction.source.bioRole.name = sourceBiologicalRole.fields[0].desc;
            interaction.source.expRole = {};
            interaction.source.expRole.id = sourceExperimentalRole.fields[0].val;
            interaction.source.expRole.name = sourceExperimentalRole.fields[0].desc;
            interaction.source.identificationMethod = {};
            interaction.source.identificationMethod.id = sourceParticpantIdentificationMethod.fields[0].val;
            interaction.source.identificationMethod.name = sourceParticpantIdentificationMethod.fields[0].desc;

            //            interaction.source.features = [];
            var nFields = sourceFeatures.fields.length;
            for (var f = 0; f < nFields; f++){
                var feature = miTabFieldToFeature(sourceFeatures.fields[f]);
                //interaction.source.features.push(feature);
                if (typeof feature.type.name != 'undefined'){
                    if (feature.type.name.indexOf('mutation') !== -1){
                        if (typeof interaction.source.pointMutations === 'undefined'){
                            interaction.source.pointMutations = new Array();
                        }
                        interaction.source.pointMutations.push(feature);
                    } else if (feature.type.name.indexOf('bind') !== -1){
                        if (typeof interaction.source.bindingSites === 'undefined'){
                            interaction.source.bindingSites = new Array();
                        }
                        interaction.source.bindingSites.push(feature);
                    } else {
                        if (typeof interaction.source.experimentalFeatures === 'undefined'){
                            interaction.source.experimentalFeatures = new Array();
                        }
                        interaction.source.experimentalFeatures.push(feature);
                    }
                }
            }

            interaction.target = {};
            interaction.target.id = targetId;
            interaction.target.bioRole = {};
            interaction.target.bioRole.id = targetBiologicalRole.fields[0].val;
            interaction.target.bioRole.name = targetBiologicalRole.fields[0].desc;
            interaction.target.expRole = {};
            interaction.target.expRole.id = targetExperimentalRole.fields[0].val;
            interaction.target.expRole.name = targetExperimentalRole.fields[0].desc;
            interaction.target.identificationMethod = {};
            interaction.target.identificationMethod.id = targetParticpantIdentificationMethod.fields[0].val;
            interaction.target.identificationMethod.name = targetParticpantIdentificationMethod.fields[0].desc;

            //            interaction.target.features = new Array();//targetFeatures.fields;
            nFields = targetFeatures.fields.length;
            for (var f = 0; f < nFields; f++){
                feature = miTabFieldToFeature(targetFeatures.fields[f]);
                //interaction.target.features.push(feature);
                if (typeof feature.type.name != 'undefined'){
                    if (feature.type.name.indexOf('mutation') !== -1){
                        if (typeof interaction.target.pointMutations === 'undefined'){
                            interaction.target.pointMutations = new Array();
                        }
                        interaction.target.pointMutations.push(feature);
                    } else if (feature.type.name.indexOf('bind') !== -1){
                        if (typeof interaction.target.bindingSites === 'undefined'){
                            interaction.target.bindingSites = new Array();
                        }
                        interaction.target.bindingSites.push(feature);
                    } else {
                        if (typeof interaction.target.experimentalFeatures === 'undefined'){
                            interaction.target.experimentalFeatures = new Array();
                        }
                        interaction.target.experimentalFeatures.push(feature);
                    }
                }
            }

            interactions.push(interaction);
            //          self.addInteraction(sourceId, "?", targetId, "?", row, rows[row][14].split(':')[1]);
            self.addInteraction(interaction);
        }
        self.message(interactions);
        var proteins = self.proteins.values();
        var proteinCount = proteins.length;
        for (var p = 0; p < proteinCount; p++) {
            var prot = proteins[p];
            prot.setPositionalFeatures(prot.customAnnotations);
        }


        self.init();
    //        new xiNET.DASUtil(xlv);
    }
};


function miTabFieldToFeature(field) {
    var f = {};
    f.name = field.desc;
    f.type = {};
    f.type.name = field.db;
    f.sequenceData = new Array();
    var segments = field.val.split(',');
    for (var i = 0; i < segments.length; i++) {
        f.sequenceData.push({
            range:segments[i]
        });
    }
    return f;
}


function MiTabData(columnContent) {
    //    console.log(columnContent);
    var first = '("(?:(?:[^"]*(?:\\\\")?)*)"|(?:[^:]*)):';
    var second = '("(?:(?:[^"]*(?:\\\\")?)*)"|(?:[^\\(\\|]*))?';
    var third = '(?:\\(("(?:(?:[^"]*(?:\\\\")?)*)"|(?:[^\\)]*))\\))?';
    var regex = new RegExp(first + second + third + '\\|?', 'g');

    this.fields = new Array();

    var match = regex.exec(columnContent);
    if (match == null) {
        var field = {};
        field.val = columnContent;
        this.fields.push(field);
    }
    while (match != null) {
        var field = {};
        field.db = match[1];
        //        console.log(JSON.stringify(match));
        if (match[2] != null) {
            // eliminate quotes from value TODO: revisit need for this,
            // currently, its a pain having quotes in some JSON used internally by the auto layout
            field.val = match[2].replace(/"/g, '');
        }
        field.desc = match[3];
        match = regex.exec(columnContent);
        this.fields.push(field);
    }
//    console.log(JSON.stringify(this.fields));
}
;