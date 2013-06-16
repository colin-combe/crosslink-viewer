xinet.Controller.prototype.readMIJSON = function(miJson) {
    var interactors = miJson.interactors;
    var interactorCount = interactors.length;
    for (var n = 0; n < interactorCount; n++) {
        var interactor = interactors[n];
        //TODO: rename Protein 'class' to Interactor
        var p = new Protein(interactor.accession, this, interactor.accession, interactor.label);
        this.proteins.set(interactor.accession, p);
        //to get seq out of descriptino text
        var description = interactor.type.name + ', '
                + interactor.organism.common + ' (' + interactor.organism.scientific + '), '
                + interactor.accession;
//        JSON.stringify({
//            "type": interactor.type,
//            "organism": interactor.organism,
//            "accession": interactor.accession,
//        }, null, ' ');
        p.initProtein(interactor.sequence, interactor.label, description);
    }

    Protein.UNITS_PER_RESIDUE = (((/*width - 350*/800) * 0.5) - Protein.LABELMAXLENGTH) / Protein.MAXSIZE;//TODO: fix that -350 hack
    var proteins = this.proteins.values();
    var proteinCount = proteins.length;
    for (var p = 0; p < proteinCount; p++) {
        proteins[p].initStick();
    }

    var interactions = miJson.interactions;
    var interactionCount = interactions.length;
    for (var l = 0; l < interactionCount; l++) {
        var interaction = interactions[l];
        var sourceInteractor = this.proteins.get(interaction.source.id);
        if (typeof sourceInteractor === 'undefined') {
            alert("Fail - no interactor with id " + interaction.source.id);
        }
        var targetInteractor = this.proteins.get(interaction.target.id);
        if (typeof targetInteractor === 'undefined') {
            alert("Fail - no interactor with id " + interaction.target.id);
        }

        var linkID; //= interaction.source.id + '_' + interaction.target.id;
        if (interaction.source.id < interaction.target.id) {
            linkID = interaction.source.id + '_' + interaction.target.id;
        } else {
            linkID = interaction.target.id + '_' + interaction.source.id;
        }
        var link = this.proteinLinks.get(linkID);
        if (typeof link === 'undefined') {
            if (interaction.source.id < interaction.target.id) {
                link = new ProteinLink(linkID, sourceInteractor, targetInteractor, this);
            } else {
                link = new ProteinLink(linkID, sourceInteractor, targetInteractor, this);
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
    }
    for (var p = 0; p < proteinCount; p++) {
        var prot = proteins[p];
        prot.setPositionalFeatures(prot.customAnnotations);
    }
    xlv.init();
    this.checkLinks();
//    new xinet.DASUtil(this);
}
;
