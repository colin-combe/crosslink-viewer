//		xiNET cross-link viewer
//		Copyright 2013 Rappsilber Laboratory
//
//		author: Colin Combe
//		
//		Match.js

function Match(pep1_protIDs, pep1_positions, pep2_protIDs, pep2_positions,
        id, score, xlvController, 
        //the following attributes are optional
        linkPos1, linkPos2, pepSeq1, pepSeq2, autovalidated, validated, rejected){
	//TODO this.type = //mono/loop/cross-link 			
    this.xlv = xlvController;
    this.residueLinks = new Array();
    this.id = id.toString().trim();
  	
  	//sanitise the inputs  
    //http://stackoverflow.com/questions/5515310/is-there-a-standard-function-to-check-for-null-undefined-or-blank-variables-in
    
    if (typeof score != 'undefined' && score){
		score = parseFloat(score);
		if (!isNaN(score)){
			this.score = parseFloat(score);
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
	}
	
	if (typeof autovalidated != 'undefined' && autovalidated){
		autovalidated = autovalidated.trim();
		if (autovalidated !== ''){
			if (autovalidated == "t" || autovalidated == "true" || autovalidated === true){
				this.autovalidated = true;
			} else {
				this.autovalidated = false;
			}		
			this.xlv.autoValidatedFound = true;
		}
    }
    if (typeof validated != 'undefined' && validated){
		validated = validated.trim();
		if (validated !== ''){
			this.validated = validated;	
			this.xlv.manualValidatedFound = true;
		}
	}
	if (typeof linkPos1 != 'undefined' && linkPos1) {
		linkPos1 = parseInt(linkPos1);
		if (!isNaN(linkPos1)){
			this.linkPos1 = linkPos1;	
			if (typeof pepSeq1 != 'undefined' && pepSeq1){
				//TODO: collect modification info from lower case letters in peptide sequence
				this.pepSeq1 = pepSeq1.replace(/[^A-Z]/g, '');	
			}
		}
	}

	if (typeof linkPos2 != 'undefined' && linkPos2) {
		linkPos2 = parseInt(linkPos2);
		if (!isNaN(linkPos2)){
			this.linkPos2 = linkPos2;	
			if (typeof pepSeq2 !== 'undefined' && pepSeq2){
				this.pepSeq2 = pepSeq2.replace(/[^A-Z]/g, '');;	
			}
		}
	}	
	
	if (typeof pep1_protIDs  != 'undefined' && pep1_protIDs){
		pep1_protIDs = pep1_protIDs.toString().trim();
		if (pep1_protIDs !== '' && pep1_protIDs !== '-' && pep1_protIDs !== 'n/a'){
			// eliminate all forms of quotation mark
			pep1_protIDs = pep1_protIDs.toString().replace(/(['"])/g, '');
			pep1_protIDs = pep1_protIDs.split(/[;,]/);			
			var pep1ProtIDCount = pep1_protIDs.length
			for (var p1 = 0; p1 < pep1ProtIDCount; p1++ ){
				pep1_protIDs[p1] = pep1_protIDs[p1].trim();
			}			
		}
		else {
			pep1_protIDs = null;
		}
	}
	else {
		pep1_protIDs = null;
	}

	if (typeof pep2_protIDs  != 'undefined' && pep2_protIDs){
		pep2_protIDs = pep2_protIDs.toString().trim();
		if (pep2_protIDs !== '' && pep2_protIDs !== '-' && pep2_protIDs !== 'n/a'){
			// eliminate all forms of quotation mark
			pep2_protIDs = pep2_protIDs.toString().replace(/(['"])/g, '');
			pep2_protIDs = pep2_protIDs.split(/[;,]/);			
			var pep2ProtIDCount = pep2_protIDs.length
			for (var p2 = 0; p2 < pep2ProtIDCount; p2++ ){
				pep2_protIDs[p2] = pep2_protIDs[p2].trim();
			}		
		}
		else {
			pep2_protIDs = null;
		}
	}
	else {
		pep2_protIDs = null;
	}
	
	if (typeof pep1_positions  != 'undefined' && pep1_positions){
		pep1_positions = pep1_positions.toString().trim();
		if (pep1_positions !== '' && pep1_positions !== '-' && pep1_positions !== 'n/a'){
			// eliminate all forms of quotation mark
			pep1_positions = pep1_positions.toString().replace(/(['"])/g, '');
			pep1_positions = pep1_positions.split(/[;,]/);
			var pep1PosCount = pep1_positions.length;
			for (var i1 = 0; i1 < pep1PosCount; i1++ ){
				pep1_positions[i1] = parseInt(pep1_positions[i1]);
				if (isNaN(pep1_positions[i1]) || pep1_positions[i1] < 1) {
					throw { name: 'FatalError', message: 'Absurd non-numerical position or position < 1. Match id:' + this.id };
				}
			}			
		}
		else {
			pep1_positions = null;
		}
	}
	else {
		pep1_positions = null;
	}

	if (typeof pep2_positions  != 'undefined' && pep2_positions){
		pep2_positions = pep2_positions.toString().trim();
		if (pep2_positions !== '' && pep2_positions !== '-' && pep2_positions !== 'n/a'){
			// eliminate all forms of quotation mark
			pep2_positions = pep2_positions.toString().replace(/(['"])/g, '');
			pep2_positions = pep2_positions.split(/[;,]/);	
			var pep2PosCount = pep2_positions.length;
			for (var i2 = 0; i2 < pep2PosCount; i2++ ){
				pep2_positions[i2] = parseInt(pep2_positions[i2]);
				if (isNaN(pep2_positions[i2]) || pep2_positions[i2] < 1) {
					throw { name: 'FatalError', message: 'Absurd non-numerical position or position < 1. Match id:' + this.id  };
				}
			}			
		}
		else {
			pep2_positions = null;
		}
	}
	else {
		pep2_positions = null;
	}

	// the protein IDs and residue numers we eventually want to get
	var p1ID, p2ID, res1, res2;
	
	if (pep2_protIDs === null){
		if (pep2_positions === null) { //its a linker modified peptide (mono-link) 
			for (var i = 0; i < pep1_positions.length; i++) {
				var iProt = i, jProt = j;
				if (iProt >= pep1_protIDs.length) {
					iProt = pep1_protIDs.length - 1;
				}
				p1ID = pep1_protIDs[iProt];
				res1 = pep1_positions[i];
				if (typeof this.linkPos1 != 'undefined') {
					// * residue numbering starts at 1 *
					res1 += this.linkPos1 - 1;
				}
				this.associateWithLink(p1ID, null, res1, null);		
			}		
		} 
		else {// its an internally linked peptide (loop-link)
			//loop to produce all alternative linkage site combinations for loop links
			for (var i = 0; i < pep1_positions.length; i++) {
				//must be same number of alternatives for res 2 as for res1 in loop link
				
				// we allow following, though its not documented
				// may be more residue positions than prot ids in the arrays
				// ( = multiple positions in one protein)
				var iProt = i;
				if (iProt >= pep1_protIDs.length) {
					iProt = pep1_protIDs.length - 1;
				}
				//~ if (jProt >= pep2_protIDs.length) {
					//~ jProt = pep2_protIDs.length - 1;
				//~ }
				p1ID = pep1_protIDs[iProt];
				//~ p2ID = p1ID;

				// * residue numbering starts at 1 *
				res1 = pep1_positions[i];
				res2 = pep2_positions[i];
				if (typeof this.linkPos1 != 'undefined') {
					res1 += this.linkPos1 - 1;
				}
				if (typeof this.linkPos1 != 'undefined') {
					res2 += this.linkPos2 - 1;
				}
				this.associateWithLink(p1ID, null, res1, res2);				
			}			
		}
	}
	else { //its cross-linked peptides
		//loop to produce all alternative linkage site combinations 
		//(position1 count * position2 count alternative)
		for (var i = 0; i < pep1_positions.length; i++) {
			for (var j = 0; j < pep2_positions.length; j++) {
				// allowed, but undocumneted:
				// may be more residue positions than prot ids in the arrays
				// ( = multiple positions in one protein, we use the last protein id encountered)
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
				res1 = pep1_positions[i] - 0;
				res2 = pep2_positions[j] - 0;// U R HERE
				if (typeof this.linkPos1 != 'undefined') {
					res1 += (this.linkPos1 - 1);
				}
				if (typeof this.linkPos2 != 'undefined') {
					res2 += (this.linkPos2 - 1);
				}
				
				this.associateWithLink(p1ID, p2ID, res1, res2);			
			}
		}
	}
	
	//identify homodimers: if peptides overlap its a homodimer
	this.hd = false;
	//if self link
    if (p1ID === p2ID) {
		//if unambiguous cross-link
        if (pep1_positions && pep2_positions 
			&& pep1_positions.length === 1 && pep2_positions.length === 1) {
			//if both peptide sequnces defined
			if (typeof this.pepSeq1 !== 'undefined'	&& typeof this.pepSeq2 !== 'undefined') {
			
				var pep1length = this.pepSeq1.length;
				var pep2length = this.pepSeq2.length;
				var pep1_start = pep1_positions[0];
				var pep2_start = pep2_positions[0];
				var pep1_end = pep1_start  + (pep1length - 1);
				var pep2_end = pep2_start + (pep2length - 1);
				if ((pep1_start >= pep2_start && pep1_start <= pep2_end)
						|| (pep2_start >= pep1_start && pep2_start <= pep1_end)) {
				   //console.log("here");
					this.hd = true;
				}
			}
			else if (res1 === res2) {
				this.hd = true;
			}
		}//end if self link
    }	
}
	
Match.prototype.associateWithLink = function (p1ID, p2ID, res1, res2){	
	// we don't want two different ID's, e.g. one thats "33-66" and one thats "66-33"
	//following puts lower protein_ID first in link_ID
	var proteinLinkID, fromProt, toProt;
	//watch out for following - its a bit trixy 
	if (p2ID === null) { //its  a loop link or mono link
		fromProt = this.xlv.proteins.get(p1ID);
		if (res2 === null){// its a monolink
			proteinLinkID = "" + p1ID + "-null";
			toProt = null;
		}
		else { //its a loop link
			proteinLinkID = "" + p1ID + "-" + p1ID;
			toProt = fromProt;
		}
	}
	else if (p1ID <= p2ID) {
		proteinLinkID = "" + p1ID + "-" + p2ID;
		fromProt = this.xlv.proteins.get(p1ID);
		toProt = (p2ID !== null)? this.xlv.proteins.get(p2ID) : null;
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
		if (toProt !== null){
			toProt.addLink(link);
		}
	}
	// again, order id string by prot id or by residue if intra protein link
	var endsReversedInResLinkId = false;
	var residueLinkID;
	if (p1ID === p2ID || p2ID === null) {
		if ((res1 - 0) < (res2 - 0) || res2 === null) {
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
	//TODO: do something about this  - its horrible.
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
   var htmlTableRow = "<tr><td><p>" +// + this.id+ "</p></td>" +
			((typeof this.score !== 'undefined')? this.score.toFixed(4) : 'undefined')
			+ "</p></td>";
			if (this.xlv.autoValidatedFound === true){
				htmlTableRow += "<td><p>" + this.autovalidated
					+ "</p></td>";
			}
			if (this.xlv.manualValidatedFound === true){
				htmlTableRow += "<td><p>" + this.validated
					+ "</p></td>";
			}
			htmlTableRow += "<td><p>" + this.pepSeq1
				+ "</p></td>";
			htmlTableRow += "<td><p>" + this.linkPos1
				+ "</p></td>";
			htmlTableRow += "<td><p>" + this.pepSeq2
				+ "</p></td>";
			htmlTableRow += "<td><p>" + this.linkPos2
				+ "</p></td>";			
			htmlTableRow += "</tr>";
			return htmlTableRow;
}
