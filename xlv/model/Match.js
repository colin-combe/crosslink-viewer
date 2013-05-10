//Match.js

function Match(pep1_protIDs, pep1_positions, pep2_protIDs, pep2_positions,
        id, meta, xlvController, linkPos1, linkPos2, pep1_seq, pep2_seq) {

    this.xlv = xlvController;
    this.residueLinks = new Array();

    this.id = id;
    this.meta = meta;
    if (this.meta != undefined) {
//        if (this.meta.score != undefined){
//            this.score = this.meta.score - 0;
            if (this.xlv.scores == null){
                this.xlv.scores = {
                    'min':this.score,
                    'max':this.score
                };
            }
//            else
        this.score = meta - 0;
        if (this.score > this.xlv.scores.max) {
            this.xlv.scores.max = this.score
        }
        else if (this.score < this.xlv.scores.min) {
            this.xlv.scores.min = this.score
        }
//        }
    }
//semi-colon is seperator
    pep1_protIDs = pep1_protIDs.toString().split(";");
    pep1_positions = pep1_positions.toString().split(";");
    pep2_protIDs = pep2_protIDs.toString().split(";");
    pep2_positions = pep2_positions.toString().split(";");

//identify homodimers
    var hd = false;
//if peptides overlap // TODO: i think theres an error here
//    if (typeof pep1_seq !== 'undefined' && pep1_seq != null
//            && typeof pep2_seq !== 'undefined' && pep2_seq != null) {
//        if (pep1_positions.length === 1 && pep2_positions.length === 1) {
//            if (p1ID === p2ID) {
//                var pep1length;
//                if (typeof pep1_seq === "string")
//                    pep1length = pep1_seq.replace(/[^A-Z]/g, '').length;
//                else
//                    pep1length = pep1_seq;
//                var pep2length;
//                if (typeof pep2_seq === "string")
//                    pep2length = pep2_seq.replace(/[^A-Z]/g, '').length;
//                else
//                    pep2length = pep2_seq;
//
////                alert(pep1length);
//                var pep1_start = (pep1_positions[0] - 0 + 1);
//                var pep2_start = (pep2_positions[0] - 0 + 1);
//                var pep1_end = pep1_start  + (pep1length - 0);
//                var pep2_end = pep2_start + (pep2length - 0);
//                if ((pep1_start >= pep2_start && pep1_start <= pep2_end)
//                        || (pep2_start >= pep1_start && pep2_start <= pep1_end)) {
////                    alert('hd');
//                    hd = true;
//                }
//            }
//        }
//    }


//loop to produce all alternative linkage site combinations
    for (var i = 0; i < pep1_positions.length; i++) {
        for (var j = 0; j < pep2_positions.length; j++) {
            // the two protein IDs we eventually want to get
            var p1ID, p2ID;
            // may be more residue positions than prot ids in the arrays
            // ( = multiple positions in one protein)
            var iProt = i, jProt = j;
            if (iProt >= pep1_protIDs.length) {
                iProt = pep1_protIDs.length - 1;
            }
            if (jProt >= pep2_protIDs.length) {
                jProt = pep2_protIDs.length - 1;
            }
            //check for swissprot format sp|acession|name
            function swissProt(id) {
                if (id.indexOf('|') === -1) {
                    return id;
                }
                else {
                    var splitOnBar = id.split('|');
                    return splitOnBar [1];
                }
            }
            p1ID = swissProt(pep1_protIDs[iProt]);
            p2ID = swissProt(pep2_protIDs[jProt]);
            // sometimes database sends out unwanted quotes marks around field
            if (p1ID[0] === "'")
                p1ID = p1ID.substring(1, p1ID.length - 1);
            if (p2ID[0] === "'")
                p2ID = p2ID.substring(1, p2ID.length - 1);
            // * residue numbering starts at 1 *
            var res1 = (pep1_positions[i] * 1);
            var res2 = (pep2_positions[j] * 1);
            if (typeof linkPos1 !== 'undefined') {
                res1 += linkPos1;
            }
            if (typeof linkPos2 !== 'undefined') {
                res2 += linkPos2;
            }
            // we don't want two different ID's, e.g. one thats "33-66" and one thats "66-33"
            //following puts lower protein_ID first in link_ID
            var proteinLinkID, fromProt, toProt;
            if (p1ID <= p2ID) {
                proteinLinkID = "" + p1ID + "-" + p2ID;
                fromProt = this.xlv.proteins.get(p1ID);
                toProt = this.xlv.proteins.get(p2ID);
            }
            else {
                proteinLinkID = "" + p2ID + "-" + p1ID;
                fromProt = this.xlv.proteins.get(p2ID);
                toProt = this.xlv.proteins.get(p1ID);

            }
            //get or create protein-protein link
            var link = this.xlv.proteinLinks.get(proteinLinkID);
            if (link === undefined) {
                if (fromProt === undefined || toProt === undefined) {
                    alert("Something has gone wrong; a link has been added before a protein it links to. " +
                            p1ID + "-" + p2ID);
                }
                link = new ProteinLink(proteinLinkID, fromProt, toProt, this.xlv);
                this.xlv.proteinLinks.set(proteinLinkID, link);
                fromProt.addLink(link);
                toProt.addLink(link);
            }
            // again, order id string by prot id or by residue if intra protein link
            var residueLinkID;
            if (p1ID === p2ID) {
                if ((res1 - 0) < (res2 - 0)) {
                    residueLinkID = res1 + "-" + res2;
                }
                else {
                    residueLinkID = res2 + "-" + res1;
                }
            }
            else if (p1ID < p2ID) {
                residueLinkID = res1 + "-" +  res2;
            }
            else {
                residueLinkID =  res2 + "-" + res1;
            }

//            if (hd === true)
//                residueLinkID += "_hd";

            //get or create residue link
            var resLink = link.residueLinks.get(residueLinkID);
            if (resLink === undefined) {
                //WATCH OUT - residues need to be in correct oprder
                if (p1ID === p2ID) {
                    if ((res1 - 0) < (res2 - 0)) {
                        resLink = new ResidueLink(residueLinkID, link, res1, res2, this.xlv, hd);
                    } else {
                        resLink = new ResidueLink(residueLinkID, link, res2, res1, this.xlv, hd);
                    }
                }
                //
                else if (p1ID == link.fromProtein.id) {
                    //// yeah... watch this, refactor so don't need type conversion
                    resLink = new ResidueLink(residueLinkID, link, res1, res2, this.xlv, hd);
                }
                else {
                    //WATCH OUT - residues need to be in correct oprder
                    resLink = new ResidueLink(residueLinkID, link, res2, res1, this.xlv, hd);
                }
                link.residueLinks.set(residueLinkID, resLink);
                if (link.residueLinks.keys().length > ProteinLink.maxNoResidueLinks) {
                    ProteinLink.maxNoResidueLinks = link.residueLinks.keys().length;
                }
            }
            //we have residue link we want - associate this match with it
            if (typeof resLink.matches === 'undefined' || resLink.matches == null){
                resLink.matches = new Array(0);
            }
            resLink.matches.push(this);
            this.residueLinks.push(resLink);
            // has colour been specified?
            if (typeof this.meta !== 'undefined' && typeof this.meta.colour !== 'undefined')
                resLink.colour = this.meta.colour;
        }
    }
}

Match.prototype.meetsFilterCriteria = function() {
    if (this.xlv.ambigHidden && this.isAmbig()) {
        return false;
    }
    if (typeof this.xlv.filter == 'function') {
        return this.xlv.filter(this);
    }
    else if (this.xlv.cutOff != undefined && this.score != undefined) {
        if (this.score >= this.xlv.cutOff)
            return true;
        else
            return false;
    }
    else {
        return true;
    }
}

Match.prototype.isAmbig = function() {
    if (this.residueLinks.length > 1) {
        return true;
    }
    return false;
}