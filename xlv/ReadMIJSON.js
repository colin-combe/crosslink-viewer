xinet.Controller.prototype.readMIJSON = function(miJson) {
    var data = miJson.data;
    var dataElementCount = data.length;
    var proteinsMissingSequence = d3.set();
    for (var n = 0; n < dataElementCount; n++) {
        var interactor = data[n];
        if (interactor.object === 'interactor') {
            var p = new Interactor(interactor.identifier.id, this, interactor);
            this.proteins.set(interactor.identifier.id, p);
            var organismText = "organism data missing";
            if (interactor.organism) {
                // interactor.organism.common + ' (' + interactor.organism.scientific + '), '
            }
            //to get seq out of description text
            var description = interactor.type.name + ', '
                    + organismText
                    + interactor.accession;
//        JSON.stringify({
//            "type": interactor.type,
//            "organism": interactor.organism,
//            "accession": interactor.accession,
//        }, null, ' ');
            if (typeof interactor.sequence !== 'undefined') {
                p.initProtein(interactor.sequence, interactor.label, description);
            }
            else {
                if (interactor.identifier.db === 'uniprotkb') {
                    proteinsMissingSequence.add(interactor.identifier.id);
                }
                else {
                    p.initProtein('NOSEQUENCE', interactor.label, description);
                }
            }
        }
    }
    var self = this;
    if (proteinsMissingSequence.values().length === 0) {
        addInteractions();
    }
    else {
        self.message(proteinsMissingSequence);
        initProteinSequences();//calss addInteractions when complete
    }

    function initProteinSequences() {
        var server_url = 'http://www.ebi.ac.uk/das-srv/uniprot/das/uniprot/';
        var client = JSDAS.Simple.getClient(server_url);
        // This function will be executed in case of error
//        var outerFunction = this;
        var error_response = function(e) {
            var id = e.url.substring(e.url.lastIndexOf('=') + 1);
            console.error('Sequence DAS lookup FAILED for ' + id);
            console.error(e.url);
            var p = self.proteins.get(id);
            p.initProtein('NOSEQUENCE');
            proteinsMissingSequence.remove(id);
            var dashIndex = id.lastIndexOf('-')
            if (dashIndex !== -1) {
                var notIsoformAccession = id.substring(dashIndex + 1);
                
                client.sequence({
                    segment: notIsoformAccession
                }, response, error_response);
                self.message('<p>Waiting on sequence DAS response for: '
                        + proteinsMissingSequence.values().toString() + '</p>');
            }
            else {
            
            }
            if (proteinsMissingSequence.values().length === 0) {
                self.message('<p>All sequences downloaded from DAS</p>');
                addInteractions();
            }
        };
        // This function inits the protein
        var response = function(res) {
            //this.message(res);
            var id = res.SEQUENCE[0].id;
            var seq = res.SEQUENCE[0].textContent;
            var label = res.SEQUENCE[0].label;
            var prot = self.proteins.get(id);
            prot.initProtein(seq, label, id);
            //            var key = '\\u0000' + seq;
            proteinsMissingSequence.remove(id);
            self.message('<p>Waiting on sequence DAS response for: '
                    + proteinsMissingSequence.values().toString() + '</p>');
            if (proteinsMissingSequence.values().length === 0) {
                self.message('<p>All sequences downloaded from DAS</p>');
                addInteractions();
            }
        };
        var keys = proteinsMissingSequence.values();
        var proteinCount = keys.length;
        for (var p = 0; p < proteinCount; p++) {
            var accession = keys[p];
            //Asking the client to retrieve the sequence
            client.sequence({
                segment: accession
            }, response, error_response);
        }
    }


    function addInteractions() {
        var width = self.svgElement.parentNode.clientWidth;
        Interactor.UNITS_PER_RESIDUE = (((width - 350) * 0.5) - Interactor.LABELMAXLENGTH) / 2000;//((Interactor.MAXSIZE < 5000)? Interactor.MAXSIZE : 5000);
        var proteins = self.proteins.values();
        var proteinCount = proteins.length;
        for (var p = 0; p < proteinCount; p++) {
            proteins[p].initStick();
        }
        for (var l = 0; l < dataElementCount; l++) {
            var interaction = data[l];
            if (interaction.object === 'interaction') {
                self.addInteraction(interaction);
            }
        }

        for (var p = 0; p < proteinCount; p++) {
            var prot = proteins[p];
            prot.setPositionalFeatures(prot.customAnnotations);
        }

        self.init();
        self.checkLinks();
    }
//    new xinet.DASUtil(this);
};

xinet.Controller.prototype.addInteraction = function(interaction) {
    var sourceInteractor = this.proteins.get(interaction.source.identifier.id);
    if (typeof sourceInteractor === 'undefined') {
        alert("Fail - no interactor with id " + interaction.source.identifier.id);
    }
    var targetInteractor = this.proteins.get(interaction.target.identifier.id);
    if (typeof targetInteractor === 'undefined') {
        alert("Fail - no interactor with id " + interaction.target.identifier.id);
    }

    var linkID; //= interaction.source.id + '_' + interaction.target.id;
    if (interaction.source.identifier.id < interaction.target.identifier.id) {
        linkID = interaction.source.identifier.id + '_' + interaction.target.identifier.id;
    } else {
        linkID = interaction.target.identifier.id + '_' + interaction.source.identifier.id;
    }
    var link = this.proteinLinks.get(linkID);
    if (typeof link === 'undefined') {
        if (interaction.source.identifier.id < interaction.target.identifier.id) {
            link = new InteractorLink(linkID, sourceInteractor, targetInteractor, this);
        } else {
            link = new InteractorLink(linkID, targetInteractor, sourceInteractor, this);
        }
        this.proteinLinks.set(linkID, link);
        sourceInteractor.addLink(link);
        targetInteractor.addLink(link);
    }
    link.addEvidence(interaction);
//        var linkedFeatures = interaction.linkedFeatures;
//        var linkedFeatureCount = linkedFeatures.length;
//        for (var lf = 0; lf < linkedFeatureCount; lf++) {
//            var linkedF = linkedFeatures[lf];
//            var linkedFID = linkedF.sourceSites + '---' + linkedF.targetSites
//            var resLink = new ResidueLink(linkedFID,
//                    link, linkedF.sourceSites, linkedF.targetSites, this);
//            link.residueLinks.set(linkedFID, resLink);
//        }
};
