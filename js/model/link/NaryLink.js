//      xiNET interaction viewer
//      Copyright 2014 Rappsilber Laboratory
//
//      This product includes software developed at
//      the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//
//      author: Colin Combe

"use strict";

// NaryLink.js
// graphically represents an n-ary interaction
NaryLink.naryColours = d3.scale.ordinal().range(colorbrewer.Paired[6]);//d3.scale.category20c();//d3.scale.ordinal().range(colorbrewer.Paired[12]);//

NaryLink.prototype = new xiNET.Link();

function NaryLink(id, xlvController) {
    this.id = id;
    this.evidences = d3.map();
    this.interactors = null;// will be new Array();//need order for binary links so use array
    this.subLinks = d3.map();
    this.ctrl = xlvController;

    //this.ambig = false;
    this.tooltip = this.id;
    //used to avoid some unnecessary manipulation of DOM
    this.shown = false;
    //this.thickLineShown = false;
    //layout stuff
    this.hidden = false;
}

NaryLink.prototype.addEvidence = function(interaction) {
    if (this.evidences.has(interaction.id) === false) {
        this.evidences.set(interaction.id, interaction);
    
        //~ if (this.evidences.values().length > NaryLink.maxNoEvidences) {//TODO: update d3 lib
            //~ xiNET.Link.maxNoEvidences = this.evidences.values().length; //values().length can be replaced with size() in newer d3 lib
        //~ }
            
        if (this.interactors === null){
            this.initInteractors(interaction);
        }    
            
        for (var pi = 0; pi < interaction.participants.length; pi++){
            var sourceID = interaction.participants[pi].interactorRef;
            var sourceInteractor = this.ctrl.interactors.get(sourceID);
                    
            var bindingSites = interaction.participants[pi].bindingSites;
            if (bindingSites){
                var bsCount = bindingSites.length;
                for (var bsi = 0; bsi < bsCount; bsi++){

                    var bindingSite = bindingSites[bsi];
                    if (bindingSite.linkedFeatures){
                        for (var fi = 0; fi < bindingSite.linkedFeatures.length; fi++){                                 
                            var target = this.ctrl.features.get(bindingSite.linkedFeatures[fi]); 
                            var targetInteractor = this.ctrl.interactors.get(target.interactor);
                            var linkID, fromInteractor, toInteractor;   
                            // these links are undirected and should have same ID regardless of which way round 
                            // source and target are
                            if (sourceID - 0 < target.interactor - 0) {
                                linkID = sourceID + '-' + target.interactor;
                                fromInteractor = sourceInteractor;
                                toInteractor = targetInteractor; 
                            } else {
                                linkID = target.interactor + '-' + sourceID;
                                fromInteractor = targetInteractor;
                                toInteractor = sourceInteractor; 
                            }
                            
                        }
                                            
                        var link = this.ctrl.links.get(linkID);
                        if (typeof link === 'undefined') {
                            if (fromInteractor === toInteractor){
                                link = new UnaryLink(linkID, this.ctrl);
                                fromInteractor.addLink(link);
                            }else {
                                link = new BinaryLink(linkID, this.ctrl, fromInteractor,toInteractor);
                                fromInteractor.addLink(link);
                                toInteractor.addLink(link);
                            }
                            this.ctrl.links.set(linkID, link);
                        }
                        this.subLinks.set(linkID, link);
                        link.addEvidence(interaction);
                    }
                }
            }
        }           
    }
};

NaryLink.prototype.initSVG = function() {

    this.rect = document.createElementNS(xiNET.svgns, "path");
    this.rect.setAttribute('fill', NaryLink.naryColours(this.id));
    this.rect.setAttribute('opacity', 0.4);
    this.rect.setAttribute('stroke', NaryLink.naryColours(this.id));
    this.rect.setAttribute('stroke-linejoin', 'round');
    this.rect.setAttribute('stroke-width', 40);

    //set the events for it
    var self = this;
    this.rect.onmousedown = function(evt) {
        self.mouseDown(evt);
    };
    this.rect.onmouseover = function(evt) {
        self.mouseOver(evt);
        console.log("interactors", this.ctrl);
    };
    this.rect.onmouseout = function(evt) {
        self.mouseOut(evt);
    };
    this.rect.ontouchstart = function(evt) {
        console.log("touchstart");
        self.touchStart(evt);
    };
};

NaryLink.prototype.showHighlight = function(show) {
    //~ if (this.shown) {
        //~ //we will iterate through all interactors and sublinks and highlight them
        //~ this.highlightInteractors(show);
        //~ var subLinks = this.subLinks.values();
        //~ for (var s = 0; s < subLinks.length; s++) {
            //~ subLinks[s].showHighlight(show);
        //~ }
    //~ }
};



//~ NaryLink.prototype.getFilteredEvidences = function() {
    //~ var seqLinks = this.sequenceLinks.values();
    //~ var seqLinkCount = seqLinks.length;
    //~ // use map to eliminate duplicates 
    //~ // (which result from linked features resulting in multiple SequenceLinks for single interaction)
    //~ var filteredEvids = d3.map();
    //~ for (var i = 0; i < seqLinkCount; i++) {
        //~ var seqLink = seqLinks[i];
        //~ var seqLinkEvids = seqLink.getFilteredEvidences();
        //~ var seqLinkEvidCount = seqLinkEvids.length;
        //~ for (var j = 0; j < seqLinkEvidCount; j++) {
            //~ filteredEvids.set(seqLinkEvids[j].identifiers[0].db + seqLinkEvids[j].identifiers[0].id, seqLinkEvids[j]);
        //~ }
    //~ }
    //~ return filteredEvids.values();
//~ };

NaryLink.prototype.check = function() {

    
    //~ var seqLinks = this.sequenceLinks.values();
    //~ var seqLinkCount = seqLinks.length;
    // if either end of interaction is 'parked', i.e. greyed out,
    // or self-interactors are hidden and this is self interactor
    // or this specific link is hidden
    //~ if (this.fromInteractor.isParked || this.toInteractor.isParked
            //~ || (this.ctrl.intraHidden && this.intra)
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
            //~ //thickLine
            //~ if (evidCount > 1) {
                //~ this.thickLineShown = true
                //~ this.w = evidCount * (45 / NaryLink.maxNoEvidences);
            //~ }
            //~ else {
//~ //                this.thickLineShown = false;//hack
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

NaryLink.prototype.show = function() {
    if (this.ctrl.initComplete) {
        if (!this.shown) {
            this.shown = true;
            if (typeof this.rect === 'undefined') {
                this.initSVG();
            }
            // this.rect.setAttribute("stroke-width", this.ctrl.z * 1);
            this.setLinkCoordinates();
            this.ctrl.naryLinks.appendChild(this.rect);
        }
    }
};

NaryLink.prototype.hide = function() {
    //~ if (this.shown) {
        //~ this.shown = false;
        //~ if (this.thickLineShown) {
            //~ this.ctrl.p_pLinksWide.removeChild(this.thickLine);
        //~ }
        //this.ctrl.highlights.removeChild(this.highlightLine);
        //~ this.ctrl.p_pLinks.removeChild(this.rect);
    //~ }
};


// Uses d3.geom.hull to calculate a path's move-to points based on an array of vertices. 
var hullPath = function(values) {
    // d3.geom.hull fails when values aren't perfect ([0,0] vertices, or less than three nodes)
    // TODO: Figure out a better way than try catching!
    var returnval = null;

    try {
        var calced = d3.geom.hull(values);
        returnval = "M" + calced.join("L") + "Z";
    } catch(err) {
        return null
    }

    return returnval;
};

NaryLink.prototype.setLinkCoordinates = function(interactor) {

    if (this.shown) {//don't waste time changing DOM if link not visible
        var northerly = null, southerly = null, 
            westerly = null, easterly = null; //bounding interactors

        var interactors = this.interactors;

        var mapped = interactors.map(function(i) {
            return [i.x, i.y];
        });

        var hullValues = hullPath(mapped);
        this.rect.setAttribute('d',hullValues);
    }
};
