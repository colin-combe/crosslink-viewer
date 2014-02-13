//		xiNET cross-link viewer
//		Copyright 2013 Rappsilber Laboratory
//
//		author: Colin Combe
//		
//		Match.js

function Match(pep1_protIDs, pep1_positions, pep2_protIDs, pep2_positions,
        id, score, xlvController, 
        //the following attributes are optional
        linkPos1, linkPos2, pep1_seq, pep2_seq, autovalidated, validated, rejected){
				
    this.xlv = xlvController;
    this.residueLinks = new Array();
    this.id = id;
    if (score != null){
		this.score = score - 0;
		if (this.xlv.scores == null){
				this.xlv.scores = {
					'min':this.score,
					'max':this.score
				};
		}
		if (this.score > this.xlv.scores.max) {
			this.xlv.scores.max = this.score;
		}
		else if (this.score < this.xlv.scores.min) {
			this.xlv.scores.min = this.score;
		}
	}
	
	if (typeof autovalidated !== 'undefined'){
		if (autovalidated !== '' && autovalidated !== null){
			if (autovalidated == "t" || autovalidated == "true" || autovalidated === true){
				this.autovalidated = true;
			} else {
				this.autovalidated = false;
			}		
			this.xlv.autoValidatedFound = true;
		}
    }
    if (typeof validated !== 'undefined'){
		//if (validated !== '' && validated !== null){
			this.validated = validated;	
			this.xlv.manualValidatedFound = true;
		//}
	}
	
	if (typeof pep1_seq !== 'undefined'){
		if (pep1_seq !== '' && pep1_seq !== null){
			this.pep1_seq = pep1_seq.replace(/[^A-Z]/g, '');	
			this.link1_pos = linkPos1;	
			this.xlv.pepSeqFound = true;
		}
	}
	if (typeof pep2_seq !== 'undefined'){
		if (pep2_seq !== '' && pep2_seq !== null){
			this.pep2_seq = pep2_seq.replace(/[^A-Z]/g, '');;	
			this.link2_pos = linkPos2;
			this.xlv.pepSeqFound = true;
		}
	}
	
	//lets eliminate all forms of quotation marks
	pep1_protIDs = pep1_protIDs.toString().replace(/(['"])/g, '');
    pep1_positions = pep1_positions.toString().replace(/(['"])/g, '');
    pep2_protIDs = pep2_protIDs.toString().replace(/(['"])/g, '');
    pep2_positions = pep2_positions.toString().replace(/(['"])/g, '');
	
    //semi-colon is seperator. OK, commas will do also
    pep1_protIDs = pep1_protIDs.toString().split(/[;,]/);
    pep1_positions = pep1_positions.toString().split(/[;,]/);
    pep2_protIDs = pep2_protIDs.toString().split(/[;,]/);
    pep2_positions = pep2_positions.toString().split(/[;,]/);

	// the two protein IDs we eventually want to get
	var p1ID, p2ID;
	var res1, res2;
	
	if (pep2_protIDs[0].trim() === '-'){
		if (pep2_positions[0].trim() === 'n/a') { //its a monolink 
			res2 = (pep2_positions[0].trim());
			for (var i = 0; i < pep1_positions.length; i++) {
				var iProt = i, jProt = j;
				if (iProt >= pep1_protIDs.length) {
					iProt = pep1_protIDs.length - 1;
				}
				p1ID = pep1_protIDs[iProt].trim();
				p2ID = p1ID;

				// * residue numbering starts at 1 *
				res1 = (pep1_positions[i] * 1);
				if (typeof linkPos1 !== 'undefined') {
					res1 += linkPos1;
				}
				
				this.associateWithLink(p1ID, p2ID, res1, res2);		
			}		
		} 
		else {
			//loop to produce all alternative linkage site combinations for loop links
			for (var i = 0; i < pep1_positions.length; i++) {
				//must be same number of alternatives for res 2 as for res1 in loop link
			//for (var j = 0; j < pep2_positions.length; j++) {
				// may be more residue positions than prot ids in the arrays
				// ( = multiple positions in one protein)
				var iProt = i, jProt = j;
				if (iProt >= pep1_protIDs.length) {
					iProt = pep1_protIDs.length - 1;
				}
				if (jProt >= pep2_protIDs.length) {
					jProt = pep2_protIDs.length - 1;
				}
				p1ID = pep1_protIDs[iProt].trim();
				p2ID = p1ID;

				// * residue numbering starts at 1 *
				res1 = (pep1_positions[i] * 1);
				res2 = (pep2_positions[i] * 1);
				if (typeof linkPos1 !== 'undefined') {
					res1 += linkPos1;
				}
				if (typeof linkPos2 !== 'undefined') {
					res2 += linkPos2;
				}
				this.associateWithLink(p1ID, p2ID, res1, res2);				
			}			
		}
	}
	else {
		//loop to produce all alternative linkage site combinations
		for (var i = 0; i < pep1_positions.length; i++) {
			for (var j = 0; j < pep2_positions.length; j++) {
				// may be more residue positions than prot ids in the arrays
				// ( = multiple positions in one protein)
				var iProt = i, jProt = j;
				if (iProt >= pep1_protIDs.length) {
					iProt = pep1_protIDs.length - 1;
				}
				if (jProt >= pep2_protIDs.length) {
					jProt = pep2_protIDs.length - 1;
				}
				p1ID = pep1_protIDs[iProt].trim();
				p2ID = pep2_protIDs[jProt].trim();

				// * residue numbering starts at 1 *
				res1 = (pep1_positions[i] * 1);
				res2 = (pep2_positions[j] * 1);
				if (typeof linkPos1 !== 'undefined') {
					res1 += linkPos1;
				}
				if (typeof linkPos2 !== 'undefined') {
					res2 += linkPos2;
				}
				
				this.associateWithLink(p1ID, p2ID, res1, res2);			
			}
		}
	}
	
		//~ //identify homodimers - not working?
	this.hd = false;
	//if peptides overlap its a homodimer:
    //if both peptide sequnces defined
    if (typeof pep1_seq !== 'undefined' && pep1_seq != null
            && typeof pep2_seq !== 'undefined' && pep2_seq != null) {
		//if not ambiguous
        if (pep1_positions.length === 1 && pep2_positions.length === 1) {
			//if self link
            if (p1ID === p2ID) {
                var pep1length;
                //~ if (typeof pep1_seq === "string")
                    pep1length = pep1_seq.replace(/[^A-Z]/g, '').length;
                //~ else
                    //~ pep1length = pep1_seq;
                var pep2length;
                //~ if (typeof pep2_seq === "string")
                    pep2length = pep2_seq.replace(/[^A-Z]/g, '').length;
                //~ else
                    //~ pep2length = pep2_seq;

//                alert(pep1length);
                var pep1_start = (pep1_positions[0] - 0);
                var pep2_start = (pep2_positions[0] - 0);
                var pep1_end = pep1_start  + (pep1length - 1);
                var pep2_end = pep2_start + (pep2length - 1);
                if ((pep1_start >= pep2_start && pep1_start <= pep2_end)
                        || (pep2_start >= pep1_start && pep2_start <= pep1_end)) {
                   //console.log("here");
                    this.hd = true;
                }

            }//end if self link
        }
    }
	
}
	
Match.prototype.associateWithLink = function (p1ID, p2ID, res1, res2){	
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
	var endsReversedInResLinkId = false;
	var residueLinkID;
	if (p1ID === p2ID) {
		if ((res1 - 0) < (res2 - 0) || res2 === 'n/a') {
			residueLinkID = res1 + "-" + res2;
		}
		else {
			residueLinkID = res2 + "-" + res1;
			endsReversedInResLinkId = true;
		}
	}
	else if (p1ID < p2ID) {
		residueLinkID = res1 + "-" +  res2;
	}
	else {
		residueLinkID =  res2 + "-" + res1;
		endsReversedInResLinkId = true;
	}

	//get or create residue link
	resLink = link.residueLinks.get(residueLinkID);
	if (resLink === undefined) {
		//WATCH OUT - residues need to be in correct order
		if (p1ID === p2ID) {
			if ((res1 - 0) < (res2 - 0) || res2 === 'n/a') {
				resLink = new ResidueLink(residueLinkID, link, res1, res2, this.xlv);
			} else {
				resLink = new ResidueLink(residueLinkID, link, res2, res1, this.xlv);
			}
		}
		//
		else if (p1ID == link.fromProtein.id) {
			resLink = new ResidueLink(residueLinkID, link, res1, res2, this.xlv);
		}
		else {
			//WATCH OUT - residues need to be in correct oprder
			resLink = new ResidueLink(residueLinkID, link, res2, res1, this.xlv);
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
	this.residueLinks.push([resLink, endsReversedInResLinkId]);	
}



Match.prototype.meetsFilterCriteria = function() {
    if (this.xlv.ambigHidden && this.isAmbig()) {
        return false;
    }
    if (typeof this.xlv.filter == 'function') {
        return this.xlv.filter(this);
    }
    else if (typeof this.xlv.cutOff !== 'undefined' && typeof this.score !== 'undefined') {
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

Match.prototype.toTableRow = function() {
   var htmlTableRow = "<tr><td><p>" + //<td><p>" + this.id+ "</p></td>
			((typeof this.score !== 'undefined')? this.score.toFixed(2) : 'undefined')
			+ "</p></td>";
			if (this.xlv.autoValidatedFound === true){
				htmlTableRow += "<td><p>" + this.autovalidated
					+ "</p></td>";
			}
			if (this.xlv.manualValidatedFound === true){
				htmlTableRow += "<td><p>" + this.validated
					+ "</p></td>";
			}
			if (this.xlv.pepSeqFound === true){
				htmlTableRow += "<td><p>" + this.pep1_seq
					+ "</p></td>";
				htmlTableRow += "<td><p>" + this.link1_pos
					+ "</p></td>";
				htmlTableRow += "<td><p>" + this.pep2_seq
					+ "</p></td>";
				htmlTableRow += "<td><p>" + this.link2_pos
					+ "</p></td>";			
			}
			htmlTableRow += "</tr>";
			return htmlTableRow;
}
