//    xiNET interaction viewer
//    Copyright 2013 Rappsilber Laboratory
//
//    This product includes software developed at
//    the Rappsilber Laboratory (http://www.rappsilberlab.org/).

"use strict";

// BinaryLink.js
// the class representing an n-ary interaction

BinaryLink.prototype = new xiNET.Link();
//used to calculate width of thivh background line
BinaryLink.maxNoEvidences = 0;
function BinaryLink(id, xlvController, fromI, toI) {
    this.id = id;
    this.evidences = new Array();
    this.sequenceLinks = d3.map();
    this.xlv = xlvController;
    this.fromInteractor = fromI; //its the object. not the ID number
    this.toInteractor = toI; //its the object. not the ID number
    this.ambig = false;
    this.tooltip = this.id;
    //used to avoid some unnecessary manipulation of DOM
    this.shown = false;
    this.thickLineShown = false;
    //layout stuff
    this.hidden = false;
    this.evidenceCount = 0;
    
    this.isBinary = true;
}

BinaryLink.prototype.addEvidence = function(interaction) {
    this.evidenceCount++;
    if (this.evidenceCount > BinaryLink.maxNoEvidences) {
        BinaryLink.maxNoEvidences = this.evidenceCount;
    }
    
    this.evidences.push(interaction);
    
    var participants = interaction.participants;
    //u r here - going to need to set from/to from constructor
    //~ if (participants.length === 2) {//TEMP
    //~ if (participants[0].interactorRef < participants[1].interactorRef){
		//~ this.fromInteractor = this.xlv.interactors.get(participants[0].interactorRef);
		//~ this.toInteractor = this.xlv.interactors.get(participants[1].interactorRef); //its the object. not the ID number
	//~ } else {
		//~ this.fromInteractor = this.xlv.interactors.get(participants[1].interactorRef);
		//~ this.toInteractor = this.xlv.interactors.get(participants[0].interactorRef); //its the object. not the ID number
	//~ }
    var from = this.fromInteractor;
    var to = this.toInteractor
       
    var hasLinkedFeatures = false;
    //when LinkedFeatures implemented then one interaction may result in many sequenceLinks
    //for time being one interaction can only result in at most one sequenceLink
    if (hasLinkedFeatures) {
        //LinkedFeatures not yet implemented in JAMI
    }
    //if no linked features may be able to make some assumptions about whats linked to what. 
    // If:
    // 1. it is not a product of expansion   
    // 2. there is no more than one binding site feature at each of interaction
    else if ((typeof interaction.expansion === 'undefined')
            && (typeof from.bindingSites === 'undefined'
            || from.bindingSites.length === 1)
            && (typeof to.bindingSites === 'undefined'
            || to.bindingSites.length === 1)
            ) {
        // first we need to know ID for sequenceLink, 
        // that means knowing the binding sites
        var fromBindingSite, toBindingSite;
        if (typeof from.bindingSites !== 'undefined') {
            fromBindingSite = from.bindingSites[0];
        }
        if (typeof to.bindingSites !== 'undefined') {
            toBindingSite = to.bindingSites[0];
        }
        var fromSequenceData = (typeof fromBindingSite !== 'undefined') ?
                fromBindingSite.sequenceData.sort() : ['?-?'];
        var toSequenceData = (typeof toBindingSite !== 'undefined') ?
                toBindingSite.sequenceData.sort() : ['?-?'];
        var seqLinkId = fromSequenceData.toString() + ':' +
                this.fromInteractor.id + ' to ' +
                toSequenceData.toString() + ':' + this.toInteractor.id;
//        console.log(seqLinkId);
        var sequenceLink = this.sequenceLinks.get(seqLinkId);
        if (typeof sequenceLink === 'undefined') {
            sequenceLink = new SequenceLink(seqLinkId, this, fromSequenceData, toSequenceData, this.xlv, interaction);
            this.sequenceLinks.set(seqLinkId, sequenceLink);
        }
        sequenceLink.addEvidence(interaction);
    } else {
        var seqLinkId = '?-?:' +
                this.fromInteractor.id + ' to ' +
                '?-?:' + this.toInteractor.id;
//        console.log(seqLinkId);
        var sequenceLink = this.sequenceLinks.get(seqLinkId);
        if (typeof sequenceLink === 'undefined') {
            sequenceLink = new SequenceLink(seqLinkId, this, ['?-?'], ['?-?'], this.xlv, interaction);
            this.sequenceLinks.set(seqLinkId, sequenceLink);
        }
        sequenceLink.addEvidence(interaction);
    }
    
	//~ }//end if participants.length === 2
};

BinaryLink.prototype.initSVG = function() {
	function trig(radius, angleDegrees) {
		//x = rx + radius * cos(theta) and y = ry + radius * sin(theta)
		var radians = (angleDegrees / 360) * Math.PI * 2;
		return {
			x: (radius * Math.cos(radians)),
			y: -(radius * Math.sin(radians))
		};
	}
	
	this.line = document.createElementNS(xiNET.svgns, "line");
	this.highlightLine = document.createElementNS(xiNET.svgns, "line");
	this.thickLine = document.createElementNS(xiNET.svgns, "line");

    this.line.setAttribute("class", "link");
    this.line.setAttribute("fill", "none");
    this.line.setAttribute("stroke", "black");
    this.line.setAttribute("stroke-width", "1");
    this.line.setAttribute("stroke-linecap", "round");
    this.highlightLine.setAttribute("class", "link");
    this.highlightLine.setAttribute("fill", "none");
    this.highlightLine.setAttribute("stroke", xiNET.highlightColour.toRGB());
    this.highlightLine.setAttribute("stroke-width", "10");
    this.highlightLine.setAttribute("stroke-linecap", "round");
    this.highlightLine.setAttribute("stroke-opacity", "0");
    this.thickLine.setAttribute("class", "link");
    this.thickLine.setAttribute("fill", "none");
    this.thickLine.setAttribute("stroke", "lightgray");
    this.thickLine.setAttribute("stroke-linecap", "round");
    this.thickLine.setAttribute("stroke-linejoin", "round");
    //set the events for it
    var self = this;
    this.line.onmousedown = function(evt) {
        self.mouseDown(evt);
    };
    this.line.onmouseover = function(evt) {
        self.mouseOver(evt);
    };
    this.line.onmouseout = function(evt) {
        self.mouseOut(evt);
    };
    this.line.ontouchstart = function(evt) {
        self.touchStart(evt);
    };
    
    this.highlightLine.onmousedown = function(evt) {
        self.mouseDown(evt);
    };
    this.highlightLine.onmouseover = function(evt) {
        self.mouseOver(evt);
    };
    this.highlightLine.onmouseout = function(evt) {
        self.mouseOut(evt);
    };
    this.highlightLine.ontouchstart = function(evt) {
        self.touchStart(evt);
    };
    
    this.thickLine.onmousedown = function(evt) {
        self.mouseDown(evt);
    };
    this.thickLine.onmousedown = function(evt) {
        self.mouseDown(evt);
    };
    this.thickLine.onmouseover = function(evt) {
        self.mouseOver(evt);
    };
    this.thickLine.onmouseout = function(evt) {
        self.mouseOut(evt);
    };
    this.thickLine.ontouchstart = function(evt) {
        self.touchStart(evt);
    };
    
    this.isSelected = false;
}
;
BinaryLink.prototype.showHighlight = function(show, andAlternatives) {
    if (typeof andAlternatives === 'undefined') {
        andAlternatives = false; //TODO: tEMP HACK
    }
    if (this.shown) {
        if (show) {
            this.highlightLine.setAttribute("stroke-opacity", "1");
        } else {
            this.highlightLine.setAttribute("stroke-opacity", "0");
        }
    }
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

BinaryLink.prototype.getFilteredEvidences = function() {
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

BinaryLink.prototype.check = function() {
	
	//if (participants.length !== 2) {//TEMP
	if (!this.fromInteractor) {//TEMP
		return false;
	}

	
    var seqLinks = this.sequenceLinks.values();
    var seqLinkCount = seqLinks.length;
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
    if (this.fromInteractor.form === 0 && this.toInteractor.form === 0) {
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
            //~ //thickLine
            //~ if (evidCount > 1) {
                //~ this.thickLineShown = true
                //~ this.w = evidCount * (45 / BinaryLink.maxNoEvidences);
            //~ }
            //~ else {
//~ //                this.thickLineShown = false;//hack
                //~ this.w = evidCount * (45 / BinaryLink.maxNoEvidences);//hack
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
    }
    else {//at least one end was in stick form
        this.hide();
        var showedResResLink = false
        for (var rl = 0; rl < seqLinkCount; rl++) {
            if (seqLinks[rl].check() === true) {
                showedResResLink = true;
            }
        }
        return showedResResLink;
    }
};

BinaryLink.prototype.dashedLine = function(dash) {
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

BinaryLink.prototype.show = function() {
    if (this.xlv.initComplete) {
// TODO: check how some of this compares to whats in Refresh.js, scale()
        if (!this.shown) {
            this.shown = true;
            if (typeof this.line === 'undefined') {
                this.initSVG();
            }
            //~ if (this.intra) {
//this.line.setAttribute("stroke-width", 1);//this.xlv.z*
//~ 
                //~ if (this.thickLineShown) {
                    //~ this.thickLine.setAttribute("transform", "translate(" +
                            //~ this.fromInteractor.x + " " + this.fromInteractor.y + ")"  // possibly not neccessary
                            //~ + " scale(" + (this.xlv.z) + ")");
                    //~ this.xlv.p_pLinksWide.appendChild(this.thickLine);
                //~ }
//~ 
                //~ this.fromInteractor.upperGroup.appendChild(this.highlightLine);
                //~ this.fromInteractor.upperGroup.appendChild(this.line);
                //~ this.fromInteractor.upperGroup.appendChild(this.fromInteractor.blob);
                //~ this.fromInteractor.upperGroup.appendChild(this.fromInteractor.circDomains);
            //~ }
            //~ else {
                this.line.setAttribute("stroke-width", this.xlv.z * 1);
                this.highlightLine.setAttribute("stroke-width", this.xlv.z * 10);
                this.setLinkCoordinates(this.fromInteractor);
                this.setLinkCoordinates(this.toInteractor);
                if (this.thickLineShown) {
                    this.xlv.p_pLinksWide.appendChild(this.thickLine);
                }
                this.xlv.highlights.appendChild(this.highlightLine);
                this.xlv.p_pLinks.appendChild(this.line);
            //~ }
        if (this.thickLineShown) {
            if (this.intra) {
                this.thickLine.setAttribute("stroke-width", this.w);
            } else {
                this.thickLine.setAttribute("stroke-width", this.xlv.z * this.w);
            }
        }
		}
    }
};

BinaryLink.prototype.hide = function() {
    if (this.shown) {
        this.shown = false;
        if (this.intra) {
           if (this.thickLineShown) {
                this.xlv.p_pLinksWide.removeChild(this.thickLine);
            }
            this.fromInteractor.upperGroup.removeChild(this.highlightLine);
            this.fromInteractor.upperGroup.removeChild(this.line);
        } else {
            if (this.thickLineShown) {
                this.xlv.p_pLinksWide.removeChild(this.thickLine);
            }
            this.xlv.highlights.removeChild(this.highlightLine);
            this.xlv.p_pLinks.removeChild(this.line);
        }
    }
};

BinaryLink.prototype.setLinkCoordinates = function(interactor) {
    if (this.shown) {//don't waste time changing DOM if link not visible
        if (this.fromInteractor === interactor) {
            this.line.setAttribute("x1", interactor.x);
            this.line.setAttribute("y1", interactor.y);
            this.highlightLine.setAttribute("x1", interactor.x);
            this.highlightLine.setAttribute("y1", interactor.y);
            if (this.thickLineShown) {
                this.thickLine.setAttribute("x1", interactor.x);
                this.thickLine.setAttribute("y1", interactor.y);
            }
        }
        else {
            this.line.setAttribute("x2", interactor.x);
            this.line.setAttribute("y2", interactor.y);
            this.highlightLine.setAttribute("x2", interactor.x);
            this.highlightLine.setAttribute("y2", interactor.y);
            if (this.thickLineShown) {
                this.thickLine.setAttribute("x2", interactor.x);
                this.thickLine.setAttribute("y2", interactor.y);
            }
        }
    }
};
BinaryLink.prototype.getOtherEnd = function(protein) {
    return ((this.fromInteractor === protein) ? this.toInteractor : this.fromInteractor);
};

