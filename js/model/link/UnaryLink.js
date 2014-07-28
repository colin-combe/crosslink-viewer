//    	xiNET Interaction Viewer
//    	Copyright 2013 Rappsilber Laboratory
//
//    	This product includes software developed at
//    	the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//
//		author: Colin Combe
//
// 		UnaryLink.js
// 		the class representing a self-link

"use strict";

UnaryLink.prototype = new xiNET.Link();

function UnaryLink(id, xlvController) {
    this.id = id;
    this.evidences = new Array();
    this.interactors = null;
    this.sequenceLinks = d3.map();
    this.xlv = xlvController;

    //this.ambig = false;
    this.tooltip = this.id;
    //used to avoid some unnecessary manipulation of DOM
    this.shown = false;
    this.thickLineShown = false;
    //layout stuff
    this.hidden = false;
    this.arity = 1;
}

UnaryLink.prototype.addEvidence = function(interaction) {
    this.evidences.push(interaction);
    //~ if (this.evidences.values().length > NaryLink.maxNoEvidences) {//TODO: update d3 lib
        //~ xiNET.Link.maxNoEvidences = this.evidences.values().length; //values().length can be replaced with size() in newer d3 lib
    //~ }
        
    if (this.interactors === null){
		this.initInteractors(interaction);
		//TODO: sort this out?
		this.fromInteractor = this.interactors[0]; 
		this.toInteractor = this.interactors[0]; 
		this.initSVG();
	}    
           
    
    
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
        var seqLinkId = '?-?:' +
                this.interactors[0].id + ' to ' +
                '?-?:' + this.interactors[0].id;
//        console.log(seqLinkId);
        var sequenceLink = this.sequenceLinks.get(seqLinkId);
        if (typeof sequenceLink === 'undefined') {
            sequenceLink = new SequenceLink(seqLinkId, this, ['?-?'], ['?-?'], this.xlv, interaction);
            this.sequenceLinks.set(seqLinkId, sequenceLink);
        }
        sequenceLink.addEvidence(interaction);
    //~ }
};

UnaryLink.prototype.initSVG = function() {
	function trig(radius, angleDegrees) {
		//x = rx + radius * cos(theta) and y = ry + radius * sin(theta)
		var radians = (angleDegrees / 360) * Math.PI * 2;
		return {
			x: (radius * Math.cos(radians)),
			y: -(radius * Math.sin(radians))
		};
    }
    
	var path = this.fromInteractor.getAggregateSelfLinkPath();
	this.line = document.createElementNS(xiNET.svgns, "path");
	this.line.setAttribute('d', path);
	this.highlightLine = document.createElementNS(xiNET.svgns, 'path');
	this.highlightLine.setAttribute('d', path);
	this.thickLine = document.createElementNS(xiNET.svgns, 'path');
	this.thickLine.setAttribute('d', path);
   
    this.line.setAttribute("class", "link");
    this.line.setAttribute("fill", "none");
    this.line.setAttribute("stroke", "black");
    this.line.setAttribute("stroke-width", 1);
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
};

UnaryLink.prototype.showHighlight = function(show) {
    if (this.shown) {
		if (this.notSubLink === true){
			this.highlightInteractors(show);
		}
        if (show) {
			//~ this.highlightLine.setAttribute("stroke", xiNET.highlightColour.toRGB());
            this.highlightLine.setAttribute("stroke-opacity", "1");
        } else {
			//~ this.highlightLine.setAttribute("stroke", xiNET.selectedColour.toRGB());
			//~ if (this.isSelected === false) {
				this.highlightLine.setAttribute("stroke-opacity", "0");
			//~ }			
        }
    }
};

UnaryLink.prototype.check = function() {
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
                //~ this.w = evidCount * (45 / UnaryLink.maxNoEvidences);
            //~ }
            //~ else {
//~ //                this.thickLineShown = false;//hack
                //~ this.w = evidCount * (45 / UnaryLink.maxNoEvidences);//hack
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

//~ UnaryLink.prototype.dashedLine = function(dash) {
    //~ if (dash){// && !this.dashed) {
        //~ this.dashed = true;
        //~ this.line.setAttribute("stroke-dasharray", (4) + ", " + (4));
    //~ }
    //~ else if (!dash){// && this.dashed) {
        //~ this.dashed = false;
        //~ this.line.removeAttribute("stroke-dasharray");
    //~ }
//~ };

UnaryLink.prototype.show = function() {
    if (this.xlv.initComplete) {
		// resembles Refresh.js, scale() function
        if (!this.shown) {
            this.shown = true;
			this.line.setAttribute("transform", "translate(" + this.fromInteractor.x
					+ " " + this.fromInteractor.y + ")" + " scale(" + (this.xlv.z) + ")");
			this.highlightLine.setAttribute("transform", "translate(" + this.fromInteractor.x
					+ " " + this.fromInteractor.y + ")" + " scale(" + (this.xlv.z) + ")");
			this.xlv.highlights.appendChild(this.highlightLine);
			this.xlv.p_pLinks.appendChild(this.line);
        }
    }
};

UnaryLink.prototype.hide = function() {
    if (this.shown) {
        this.shown = false;
        //TODO: be more selective about when to show 'thickLine'
        // if (ProteinLink.maxNoResidueLinks > 1) {
            // this.xlv.p_pLinksWide.removeChild(this.thickLine);
        // }
        this.xlv.highlights.removeChild(this.highlightLine);
        this.xlv.p_pLinks.removeChild(this.line);
	}
};

UnaryLink.prototype.setLinkCoordinates = function(interactor) {
	//actually don't currently need to do anything here,
	//interactor.setPosition is doing it for self links
	//TODO: tidy this up
	
    //~ if (this.shown) {//don't waste time changing DOM if link not visible
		//~ this.line.setAttribute("x1", interactor.x);
		//~ this.line.setAttribute("y1", interactor.y);
		//~ this.highlightLine.setAttribute("x1", interactor.x);
		//~ this.highlightLine.setAttribute("y1", interactor.y);
		//~ if (this.thickLineShown) {
			//~ this.thickLine.setAttribute("x1", interactor.x);
			//~ this.thickLine.setAttribute("y1", interactor.y);
		//~ }
    //~ }
};
