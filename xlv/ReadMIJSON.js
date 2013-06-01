xinet.Controller.prototype.readMIJSON = function(miJson) {
    var interactors = miJson.interactors;
    var interactorCount = interactors.length;
    for (var n = 0; n < interactorCount; n++) {
        var interactor = interactors[n];
        //TODO: rename Protein 'class' to Interactor
        var p = new Protein(interactor.accession, this, interactor.accession, interactor.label);
        this.proteins.set(interactor.accession, p);
        //to get seq out of descriptino text
        var description = JSON.stringify({
            "type": interactor.type,
            "organism": interactor.organism,
            "accession": interactor.accession,
            "meta": interactor.meta
        }, null, ' ');
        p.initProtein(interactor.sequence, interactor.label, description);
    }

    var interactions = miJson.interactions;
    var interactionCount = interactions.length;
    for (var l = 0; l < interactionCount; l++) {
        var interaction = interactions[l];
        var sourceInteractor = this.proteins.get(interaction.source);
        if (typeof sourceInteractor === 'undefined') {
            alert("Error - no interactor with accession " + interaction.source);
        }
        var targetInteractor = this.proteins.get(interaction.target);
        if (typeof targetInteractor === 'undefined') {
            alert("Error - no interactor with accession " + interaction.target);
        }
        var linkID = interaction.source + '_' + interaction.target;
        var link = new ProteinLink(linkID, sourceInteractor, targetInteractor, this);
        this.proteinLinks.set(linkID, link);
        sourceInteractor.addLink(link);
        targetInteractor.addLink(link);
        var linkedFeatures = interaction.linkedFeatures;
        var linkedFeatureCount = linkedFeatures.length;
        for (var lf = 0; lf < linkedFeatureCount; lf++) {
            var linkedF = linkedFeatures[lf];
            var linkedFID = linkedF.sourceSites + '---' + linkedF.targetSites
            var resLink = new ResidueLink(linkedFID,
                    link, linkedF.sourceSites, linkedF.targetSites, this);
            link.residueLinks.set(linkedFID, resLink);
        }
    }

    xlv.init();
    this.checkLinks();
//    new xinet.DASUtil(this);
}
;
