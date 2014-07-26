//    xiNET interaction viewer
//    Copyright 2013 Rappsilber Laboratory
//
//    This product includes software developed at
//    the Rappsilber Laboratory (http://www.rappsilberlab.org/).

// NaryLink.js
// the class representing an n-ary interaction
NaryLink.naryColours = d3.scale.ordinal().range(colorbrewer.Paired[6]);//d3.scale.category20c();//d3.scale.ordinal().range(colorbrewer.Paired[12]);//

NaryLink.prototype = new xiNET.Link();
//used to calculate width of thivh background line
NaryLink.maxNoEvidences = 0;
function NaryLink(id, xlvController) {
    this.id = id;
    this.evidences = new Array();
    this.sequenceLinks = d3.map();
    this.xlv = xlvController;

    this.ambig = false;
    this.tooltip = this.id;
    //used to avoid some unnecessary manipulation of DOM
    this.shown = false;
    this.fatLineShown = false;
    //layout stuff
    this.hidden = false;
    this.evidenceCount = 0;
}

NaryLink.prototype.addEvidence = function(interaction) {
    this.evidenceCount++;
    if (this.evidenceCount > NaryLink.maxNoEvidences) {
        NaryLink.maxNoEvidences = this.evidenceCount;
    }
    
    this.evidences.push(interaction);
    
    
    
    //~ for (var pi = 0; pi < interaction.participants.length; pi++){
		//~ var sourceID = interaction.participants[pi].interactorRef;
		//~ var sourceInteractor = this.xlv.interactors.get(sourceID);
		//~ var bindingSites = interaction.participants[pi].bindingSites;
		//~ if (bindingSites){
			//~ var bsCount = bindingSites.length;
			//~ for (var bsi = 0; bsi < bsCount; bsi++){
//~ 
				//~ var bindingSite = bindingSites[bsi];
				//~ if (bindingSite.linkedFeatures){
					//~ for (var fi = 0; fi < bindingSite.linkedFeatures.length; fi++){									
						//~ var target = this.xlv.features.get(bindingSite.linkedFeatures[fi]); 
						//~ var targetInteractor = this.xlv.interactors.get(target.interactor);
						//~ var linkID, fromInteractor, toInteractor;	
						//~ // these links are undirected and should have same ID regardless of which way round 
						//~ // source and target are
						//~ if (sourceID < target.interactor) {
							//~ linkID = sourceID + '-' + target.interactor;
							//~ fromInteractor = sourceInteractor;
							//~ toInteractor = targetInteractor; 
						//~ } else {
							//~ linkID = target.interactor + '-' + sourceID;
							//~ fromInteractor = targetInteractor;
							//~ toInteractor = sourceInteractor; 
						//~ }
						//~ 
					//~ }
										//~ 
					//~ var link = this.xlv.links.get(linkID);
					//~ if (typeof link === 'undefined') {
						//~ if (fromInteractor === toInteractor){
							//~ link = new UnaryLink(linkID, this);
						//~ }else {
							//~ link = new BinaryLink(linkID, this);
						//~ }
						//~ this.xlv.links.set(linkID, link);
						//~ fromInteractor.addLink(link);
						//~ toInteractor.addLink(link);
					//~ }
					//~ link.addEvidence(interaction);
				//~ }
			//~ }
		//~ }
	//~ }			
	
    
    
    
    
    //~ this.fromInteractor = this.xlv.interactors.get(participants[0].interactorRef);
    //~ this.toInteractor = this.xlv.interactors.get(participants[1].interactorRef); //its the object. not the ID number
    //this.intra = false;
    //if (this.fromInteractor === this.toInteractor) {
    //    this.intra = true;
    //}
    //~ var from = this.fromInteractor;
    //~ var to = this.toInteractor
       //~ 
    //~ var hasLinkedFeatures = false;
    //~ //when LinkedFeatures implemented then one interaction may result in many sequenceLinks
    //~ //for time being one interaction can only result in at most one sequenceLink
    //~ if (hasLinkedFeatures) {
        //~ //LinkedFeatures not yet implemented in JAMI
    //~ }
    //~ //if no linked features may be able to make some assumptions about whats linked to what. 
    //~ // If:
    //~ // 1. it is not a product of expansion   
    //~ // 2. there is no more than one binding site feature at each of interaction
    //~ else if ((typeof interaction.expansion === 'undefined')
            //~ && (typeof from.bindingSites === 'undefined'
            //~ || from.bindingSites.length === 1)
            //~ && (typeof to.bindingSites === 'undefined'
            //~ || to.bindingSites.length === 1)
            //~ ) {
        //~ // first we need to know ID for sequenceLink, 
        //~ // that means knowing the binding sites
        //~ var fromBindingSite, toBindingSite;
        //~ if (typeof from.bindingSites !== 'undefined') {
            //~ fromBindingSite = from.bindingSites[0];
        //~ }
        //~ if (typeof to.bindingSites !== 'undefined') {
            //~ toBindingSite = to.bindingSites[0];
        //~ }
        //~ var fromSequenceData = (typeof fromBindingSite !== 'undefined') ?
                //~ fromBindingSite.sequenceData.sort() : ['?-?'];
        //~ var toSequenceData = (typeof toBindingSite !== 'undefined') ?
                //~ toBindingSite.sequenceData.sort() : ['?-?'];
        //~ var seqLinkId = fromSequenceData.toString() + ':' +
                //~ this.fromInteractor.id + ' to ' +
                //~ toSequenceData.toString() + ':' + this.toInteractor.id;
//~ //        console.log(seqLinkId);
        //~ var sequenceLink = this.sequenceLinks.get(seqLinkId);
        //~ if (typeof sequenceLink === 'undefined') {
            //~ sequenceLink = new SequenceLink(seqLinkId, this, fromSequenceData, toSequenceData, this.xlv, interaction);
            //~ this.sequenceLinks.set(seqLinkId, sequenceLink);
        //~ }
        //~ sequenceLink.addEvidence(interaction);
    //~ } else {
        //~ var seqLinkId = '?-?:' +
                //~ this.fromInteractor.id + ' to ' +
                //~ '?-?:' + this.toInteractor.id;
//~ //        console.log(seqLinkId);
        //~ var sequenceLink = this.sequenceLinks.get(seqLinkId);
        //~ if (typeof sequenceLink === 'undefined') {
            //~ sequenceLink = new SequenceLink(seqLinkId, this, ['?-?'], ['?-?'], this.xlv, interaction);
            //~ this.sequenceLinks.set(seqLinkId, sequenceLink);
        //~ }
        //~ sequenceLink.addEvidence(interaction);
    //~ }
};

NaryLink.prototype.initSVG = function() {

	this.line = document.createElementNS(xiNET.svgns, "rect");
	this.line.setAttribute('fill', NaryLink.naryColours(this.id));
	this.line.setAttribute('opacity', 0.4);
	this.line.setAttribute('rx', '30');
	this.line.setAttribute('ry', '30');
	
	//~ this.highlightLine = document.createElementNS(xiNET.svgns, "line");
	//~ this.fatLine = document.createElementNS(xiNET.svgns, "line");

    //~ this.line.setAttribute("class", "link");
    //~ this.line.setAttribute("fill", "none");
    //~ this.line.setAttribute("stroke", "black");
    //~ this.line.setAttribute("stroke-width", "1");
    //~ this.line.setAttribute("stroke-linecap", "round");
    //~ this.highlightLine.setAttribute("class", "link");
    //~ this.highlightLine.setAttribute("fill", "none");
    //~ this.highlightLine.setAttribute("stroke", xiNET.highlightColour.toRGB());
    //~ this.highlightLine.setAttribute("stroke-width", "10");
    //~ this.highlightLine.setAttribute("stroke-linecap", "round");
    //~ this.highlightLine.setAttribute("stroke-opacity", "0");
    //~ this.fatLine.setAttribute("class", "link");
    //~ this.fatLine.setAttribute("fill", "none");
    //~ this.fatLine.setAttribute("stroke", "lightgray");
    //~ this.fatLine.setAttribute("stroke-linecap", "round");
    //~ this.fatLine.setAttribute("stroke-linejoin", "round");

    //set the events for it
    var self = this;
    this.line.onmousedown = function(evt) {
        self.mouseDown(evt);
    };
    //TODO: problem here for big data sets - temp hack, remove some mouse listeners
    this.line.onmouseover = function(evt) {
        self.mouseOver(evt);
    };
    this.line.onmouseout = function(evt) {
        self.mouseOut(evt);
    };
    //~ this.highlightLine.onmousedown = function(evt) {
        //~ self.mouseDown(evt);
    //~ };
    //~ this.highlightLine.onmouseover = function(evt) {
//~ //        this.xlv.setTooltip(this.tooltip);
        //~ self.mouseOver(evt);
    //~ };
    //~ this.highlightLine.onmouseout = function(evt) {
//~ //         this.xlv.hideTooltip();
        //~ self.mouseOut(evt);
    //~ };
    //~ this.fatLine.onmousedown = function(evt) {
        //~ self.mouseDown(evt);
    //~ };
    //~ this.fatLine.onmousedown = function(evt) {
        //~ self.mouseDown(evt);
    //~ };
    //~ this.fatLine.onmouseover = function(evt) {
        //~ self.mouseOver(evt);
    //~ };
    //~ this.fatLine.onmouseout = function(evt) {
        //~ self.mouseOut(evt);
    //~ };
};

NaryLink.prototype.showHighlight = function(show, andAlternatives) {
    //~ if (typeof andAlternatives === 'undefined') {
        //~ andAlternatives = false; //TODO: tEMP HACK
    //~ }
    //~ if (this.shown) {
        //~ if (show) {
            //~ this.highlightLine.setAttribute("stroke-opacity", "1");
        //~ } else {
            //~ this.highlightLine.setAttribute("stroke-opacity", "0");
        //~ }
    //~ }
//    if (andAlternatives && this.ambig) {
////TODO: we want to highlight smallest possible set of alternatives
//        var rc = this.sequenceLinks.values().length;
//        for (var rl = 0; rl < rc; rl++) {
//            var resLink = this.sequenceLinks.values()[rl];
//            var mc = resLink.matches.length;
//            for (var m = 0; m < mc; m++) {
//                var match = resLink.matches[m];
//                if (match.isAmbig()) {
//                    var mrc = match.sequenceLinks.length;
//                    for (var mrl = 0; mrl < mrc; mrl++) {
//                        var resLink = match.sequenceLinks[mrl];
//                        if (resLink.shown === true) {
//                            resLink.showHighlight(show, false);
//                        }
//                        if (resLink.proteinLink.shown === true) {
//                            resLink.proteinLink.showHighlight(show, false);
//                        }
//                    }
//                }
//
//            }
//        }
//    }
};



NaryLink.prototype.getFilteredEvidences = function() {
    var seqLinks = this.sequenceLinks.values();
    var seqLinkCount = seqLinks.length;
    // use map to eliminate duplicates 
    // (which result from linked features resulting in multiple SequenceLinks for single interaction)
    var filteredEvids = d3.map();
    for (var i = 0; i < seqLinkCount; i++) {
        var seqLink = seqLinks[i];
        var seqLinkEvids = seqLink.getFilteredEvidences();
        var seqLinkEvidCount = seqLinkEvids.length;
        for (var j = 0; j < seqLinkEvidCount; j++) {
            filteredEvids.set(seqLinkEvids[j].identifiers[0].db + seqLinkEvids[j].identifiers[0].id, seqLinkEvids[j]);
        }
    }
    return filteredEvids.values();
};

NaryLink.prototype.check = function() {

	
    //~ var seqLinks = this.sequenceLinks.values();
    //~ var seqLinkCount = seqLinks.length;
    // if either end of interaction is 'parked', i.e. greyed out,
    // or self-interactors are hidden and this is self interactor
    // or this specific link is hidden
    //~ if (this.fromInteractor.isParked || this.toInteractor.isParked
            //~ || (this.xlv.intraHidden && this.intra)
            //~ || this.hidden) {
        //~ //if both ends are blobs then hide interactor-level link
        //~ if (this.fromInteractor.form === 0 && this.toInteractor.form === 0) {
            //~ this.hide();
        //~ }
        //~ //else loop through linked features hiding them
        //~ else {
            //~ for (var i = 0; i < seqLinkCount; i++) {
                //~ seqLinks[i].hide();
            //~ }
        //~ }
        //~ return false;
    //~ }
    //~ else // we need to check which interaction evidences match the filter criteria
    //~ if (this.fromInteractor.form === 0 && this.toInteractor.form === 0) {
        //~ this.ambig = true;
        //~ var filteredEvids = this.getFilteredEvidences();
        //~ var evidCount = filteredEvids.length;
        //~ for (var i = 0; i < evidCount; i++) {
            //~ var evid = filteredEvids[i];
            //~ if (typeof evid.expansion === 'undefined') {
                //~ this.ambig = false;
            //~ }
        //~ }
        //~ if (evidCount > 0) {
            //~ //tooltip
            //~ this.tooltip = /*this.id + ', ' +*/ evidCount + ' experiment';
            //~ if (evidCount > 1) {
                //~ this.tooltip += 's';
            //~ }
            //~ this.tooltip += ' (';
            //~ var nested_data = d3.nest()
                    //~ .key(function(d) {
                //~ return d.experiment.detmethod.name;
            //~ })
                    //~ .rollup(function(leaves) {
                //~ return leaves.length;
            //~ })
                    //~ .entries(filteredEvids);
//~ 
            //~ nested_data.sort(function(a, b) {
                //~ return b.values - a.values
            //~ });
            //~ var countDetMethods = nested_data.length
            //~ for (var i = 0; i < countDetMethods; i++) {
                //~ if (i > 0) {
                    //~ this.tooltip += ', ';
                //~ }
                //~ this.tooltip += nested_data[i].values + ' ' + nested_data[i].key;
            //~ }
            //~ this.tooltip += ' )';
            //~ //fatLine
            //~ if (evidCount > 1) {
                //~ this.fatLineShown = true
                //~ this.w = evidCount * (45 / NaryLink.maxNoEvidences);
            //~ }
            //~ else {
//~ //                this.fatLineShown = false;//hack
                //~ this.w = evidCount * (45 / NaryLink.maxNoEvidences);//hack
            //~ }
            //~ //ambig?
            //~ this.dashedLine(this.ambig);

            //sequence links will have been hidden previously
            this.show();
            return true;
        //~ }
        //~ else {
            //~ this.hide();
            //~ return false;
        //~ }
    //~ }
    //~ else {//at least one end was in stick form
        //~ this.hide();
        //~ var showedResResLink = false
        //~ for (var rl = 0; rl < seqLinkCount; rl++) {
            //~ if (seqLinks[rl].check() === true) {
                //~ showedResResLink = true;
            //~ }
        //~ }
        //~ return showedResResLink;
    //~ }
};

NaryLink.prototype.dashedLine = function(dash) {
    if (typeof this.line === 'undefined') {
        this.initSVG();
    }
    if (dash) {// && !this.dashed) {
        this.dashed = true;
        this.line.setAttribute("stroke-dasharray", (4 * this.xlv.z) + ", " + (4 * this.xlv.z));
    }
    else if (!dash) {// && this.dashed) {
        this.dashed = false;
        this.line.removeAttribute("stroke-dasharray");
    }
};

NaryLink.prototype.show = function() {
    if (this.xlv.initComplete) {
// TODO: check how some of this compares to whats in Refresh.js, scale()
        if (!this.shown) {
            this.shown = true;
            if (typeof this.line === 'undefined') {
                this.initSVG();
            }
			this.line.setAttribute("stroke-width", this.xlv.z * 1);
			//~ this.highlightLine.setAttribute("stroke-width", this.xlv.z * 10);
			this.setLinkCoordinates();
			//~ if (this.fatLineShown) {
				//~ this.xlv.p_pLinksWide.appendChild(this.fatLine);
			//~ }
			//~ this.xlv.highlights.appendChild(this.highlightLine);
			this.xlv.naryLinks.appendChild(this.line);
			if (this.fatLineShown) {
				if (this.intra) {
					this.fatLine.setAttribute("stroke-width", this.w);
				} else {
					this.fatLine.setAttribute("stroke-width", this.xlv.z * this.w);
				}
			}
		}
    }
};

NaryLink.prototype.hide = function() {
    if (this.shown) {
        this.shown = false;
        if (this.intra) {
           if (this.fatLineShown) {
                this.xlv.p_pLinksWide.removeChild(this.fatLine);
            }
            this.fromInteractor.upperGroup.removeChild(this.highlightLine);
            this.fromInteractor.upperGroup.removeChild(this.line);
        } else {
            if (this.fatLineShown) {
                this.xlv.p_pLinksWide.removeChild(this.fatLine);
            }
            this.xlv.highlights.removeChild(this.highlightLine);
            this.xlv.p_pLinks.removeChild(this.line);
        }
    }
};

NaryLink.prototype.getOtherEnd = function(protein) {
    return ((this.fromInteractor === protein) ? this.toInteractor : this.fromInteractor);
};

NaryLink.prototype.setLinkCoordinates = function(interactor) {
    if (this.shown) {//don't waste time changing DOM if link not visible
		var northerly = null, southerly = null, 
			westerly = null, easterly = null; //bounding interactors
		for (var i = 0; i < this.evidences.length; i++) {
			var participants = this.evidences[i].participants;
			var participantCount = participants.length; 
			//TODO: if evidence.check() ==== true
			for (var p = 0; p < participantCount; p++){
				var participant = this.xlv.interactors.get(participants[p].interactorRef);
				
				if (westerly === null || participant.x < westerly.x) {
					westerly = participant;
				}
				
				if (easterly === null || participant.x > easterly.x) {
					easterly = participant;
				}
				
				if (southerly === null || participant.y > southerly.y) {
					southerly = participant;
				}
				
				if (northerly === null || participant.y < northerly.y) {
					northerly = participant;
				}
				
			}
		}
		
		this.line.setAttribute('x',westerly.x - 20);
		this.line.setAttribute('y',northerly.y - 20);
		this.line.setAttribute('width',(easterly.x - westerly.x) + 40);
		this.line.setAttribute('height',(southerly.y - northerly.y) + 40);
    }
};
