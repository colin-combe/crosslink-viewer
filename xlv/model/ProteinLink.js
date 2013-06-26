//    xiNET interaction viewer
//    Copyright 2013 Rappsilber Laboratory
//
//    This product includes software developed at
//    the Rappsilber Laboratory (http://www.rappsilberlab.org/).

//ProteinLink.js
// the class representing a protein-protein link

ProteinLink.prototype = new xinet.Link();
//used to calculate width of thivh background line
ProteinLink.maxNoEvidences = 0;
function ProteinLink(id, fromP, toP, xlvController) {
    this.id = id;
    this.residueLinks = d3.map();
    this.xlv = xlvController;
    this.fromProtein = fromP; //its the object. not the ID number
    this.toProtein = toP; //its the object. not the ID number
    this.intra = false;
    if (this.fromProtein === this.toProtein) {
        this.intra = true;
    }
    this.ambig = false;
    this.tooltip = this.id;
    //used to avoid some unnecessary manipulation of DOM
    this.shown = false;
    this.dashed = false;
    //layout stuff
    this.hidden = false;
    this.evidences = new Array();
}

ProteinLink.prototype.addEvidence = function(interaction) {
    this.evidences.push(interaction);
    if (this.evidences.length > ProteinLink.maxNoEvidences) {
        ProteinLink.maxNoEvidences = this.evidences.length;
    }


//adding features
//we will do this here for moment...
//not really right place, needs to be associated with the sequence links
//features for an experiemnt should dissappear when experiemntal
// evidience does not meet filter criteria

//NB. source and target in JSON may not correspond to source and 
// target in InteractionLink,
//may have had to swap them around (to get consistent id's)

    var source, target;
    if (interaction.source.id === this.fromProtein.id) {
        source = interaction.source;
        target = interaction.target;
    } else {
        source = interaction.target
        target = interaction.source;
    }

    var fromBindingSite, toBindingSite;
    //TODO: use LinkedFeatures to know which bindinsSites are linked to which
    //TODO: decide what to assume about linkedFeatures when reading mitab
    if (typeof source.bindingSites !== 'undefined') {
        this.fromProtein.addFeature(source.bindingSites[0]);
        fromBindingSite = source.bindingSites[0];
    }
    if (typeof target.bindingSites !== 'undefined') {
        this.toProtein.addFeature(target.bindingSites[0]);
        toBindingSite = target.bindingSites[0];
    }

    if (typeof source.pointMutations !== 'undefined') {
        this.fromProtein.addFeature(source.pointMutations[0]);
    }
    if (typeof target.pointMutations !== 'undefined') {
        this.toProtein.addFeature(target.pointMutations[0]);
    }
    var fromBinding = (typeof fromBindingSite !== 'undefined') ?
            fromBindingSite.sequenceData[0].range : '?-?';
    var toBinding = (typeof toBindingSite !== 'undefined') ?
            toBindingSite.sequenceData[0].range : '?-?';
    var seqLinkId = fromBinding + ':' +
            this.fromProtein.id + ' to ' +
            toBinding + ':' + this.toProtein.id;
    console.log(seqLinkId);
    this.residueLinks.set(seqLinkId,
            new ResidueLink(seqLinkId, this, fromBinding, toBinding, this.xlv, interaction));
};

ProteinLink.prototype.initSVG = function() {
    if (!this.intra) {
        this.line = document.createElementNS(xinet.svgns, "line");
        this.highlightLine = document.createElementNS(xinet.svgns, "line");
        this.fatLine = document.createElementNS(xinet.svgns, "line");
    } else {
        function trig(radius, angleDegrees) {
//x = rx + radius * cos(theta) and y = ry + radius * sin(theta)
            var radians = (angleDegrees / 360) * Math.PI * 2;
            return {
                x: (radius * Math.cos(radians)),
                y: -(radius * Math.sin(radians))
            };
        }
        var intraR = this.fromProtein.getBlobRadius() + 7;
        var r = 45;
        var arcStart = trig(intraR, 15 + r);
        var arcEnd = trig(intraR, -35 + r);
        var cp1 = trig(intraR, 30 + r);
        var cp2 = trig(intraR, -50 + r);
        var path = 'M0,0 Q' + cp1.x + ',' + cp1.y + ' ' + arcStart.x + ',' + arcStart.y
                + ' A' + intraR + ',' + intraR + ' 0 0,1 ' + arcEnd.x + ',' + arcEnd.y
                + ' Q' + cp2.x + ',' + cp2.y + ' 0,0';
        this.line = document.createElementNS(xinet.svgns, "path");
        this.line.setAttribute('d', path);
        this.highlightLine = document.createElementNS(xinet.svgns, 'path');
        this.highlightLine.setAttribute('d', path);
        this.fatLine = document.createElementNS(xinet.svgns, 'path');
        this.fatLine.setAttribute('d', path);
    }

    this.line.setAttribute("class", "link");
    this.line.setAttribute("fill", "none");
    this.line.setAttribute("stroke", "black");
    this.line.setAttribute("stroke-width", "1");
    this.line.setAttribute("stroke-linecap", "round");
    this.highlightLine.setAttribute("class", "link");
    this.highlightLine.setAttribute("fill", "none");
    this.highlightLine.setAttribute("stroke", xinet.highlightColour.toRGB());
    this.highlightLine.setAttribute("stroke-width", "10");
    this.highlightLine.setAttribute("stroke-linecap", "round");
    this.highlightLine.setAttribute("stroke-opacity", "0");
    this.fatLine.setAttribute("class", "link");
    this.fatLine.setAttribute("fill", "none");
    this.fatLine.setAttribute("stroke", "lightgray");
    this.fatLine.setAttribute("stroke-linecap", "round");
    this.fatLine.setAttribute("stroke-linejoin", "round");
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
    this.highlightLine.onmousedown = function(evt) {
        self.mouseDown(evt);
    };
    this.highlightLine.onmouseover = function(evt) {
//        this.xlv.setTooltip(this.tooltip);
        self.mouseOver(evt);
    };
    this.highlightLine.onmouseout = function(evt) {
//         this.xlv.hideTooltip();
        self.mouseOut(evt);
    };
    this.fatLine.onmousedown = function(evt) {
        self.mouseDown(evt);
    };
    this.fatLine.onmousedown = function(evt) {
        self.mouseDown(evt);
    };
    this.fatLine.onmouseover = function(evt) {
        self.mouseOver(evt);
    };
    this.fatLine.onmouseout = function(evt) {
        self.mouseOut(evt);
    };
};
ProteinLink.prototype.showHighlight = function(show, andAlternatives) {
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
    if (andAlternatives && this.ambig) {
//TODO: we want to highlight smallest possible set of alternatives
        var rc = this.residueLinks.values().length;
        for (var rl = 0; rl < rc; rl++) {
            var resLink = this.residueLinks.values()[rl];
            var mc = resLink.matches.length;
            for (var m = 0; m < mc; m++) {
                var match = resLink.matches[m];
                if (match.isAmbig()) {
                    var mrc = match.residueLinks.length;
                    for (var mrl = 0; mrl < mrc; mrl++) {
                        var resLink = match.residueLinks[mrl];
                        if (resLink.shown === true) {
                            resLink.showHighlight(show, false);
                        }
                        if (resLink.proteinLink.shown === true) {
                            resLink.proteinLink.showHighlight(show, false);
                        }
                    }
                }

            }
        }
    }
};
//used when link clicked
ProteinLink.prototype.showID = function() {
    var linkInfo = "<p><strong>" + this.fromProtein.name + " (" + this.fromProtein.accession
            + ") - " + this.toProtein.name + " (" + this.toProtein.accession
            + ")</strong></p>";
    linkInfo += "<pre>" + JSON.stringify(this.evidences, null, '\t') + "</pre>";
    this.xlv.message(linkInfo);
};
//TEMP - this was used by filtering...
//its an array of match id's its going to return
ProteinLink.prototype.getFilteredMatches = function() {
    var resLinks = this.residueLinks.values();
    var resLinkCount = resLinks.length;
    var filteredMatches = d3.map();
    for (var i = 0; i < resLinkCount; i++) {
        var resLink = resLinks[i];
        var mCount = resLink.matches.length;
        for (var m = 0; m < mCount; m++) {
            var match = resLink.matches[m];
            if (match.meetsFilterCriteria()) {
                filteredMatches.set(match.id);
            }
        }
    }
    return filteredMatches.keys();
};
ProteinLink.prototype.check = function() {
    var resLinks = this.residueLinks.values();
    var resLinkCount = resLinks.length;
    // if either end of interaction is 'parked', i.e. greyed out,
    // or self-interactors are hidden and this is self interactor
    // or this specific link is hidden
    if (this.fromProtein.isParked || this.toProtein.isParked
            || (this.xlv.intraHidden && this.intra)
            || this.hidden) {
//if both ends are blobs then hide interactor-level link
        if (this.fromProtein.form === 0 && this.toProtein.form === 0) {
            this.hide();
        }
//else loop through linked features hiding them
        else {
            for (var i = 0; i < resLinkCount; i++) {
                resLinks[i].hide();
            }
        }
        return false;
    }
    else // we need to check which linked features match the filter criteria
    if (this.fromProtein.form === 0 && this.toProtein.form === 0) {

//TEMP HACK -

//            this.ambig = true;
//            var filteredResLinks = new Array();
//            var filteredMatches = d3.map();
//            var altProteinLinks = d3.map();
//            for (var i = 0; i < resLinkCount; i++) {
//                var resLink = resLinks[i];
//                var resLinkMeetsCriteria = false;
//                var mCount = resLink.matches.length;
//                for (var m = 0; m < mCount; m++) {
//                    var match = resLink.matches[m];
//                    if (match.meetsFilterCriteria()) {
//                        if (resLinkMeetsCriteria === false) {
//                            resLinkMeetsCriteria = true;
//                            filteredResLinks.push(resLink);
//                        }
//                        filteredMatches.set(match.id);
//                        if (match.isAmbig()) {
//                            for (var mrl = 0; mrl < match.residueLinks.length; mrl++) {
//                                altProteinLinks.set(match.residueLinks[mrl].proteinLink.id);
//                            }
//                        }
//                        else {
//                            this.ambig = false;
//                        }
//                    }
//                }
//            }
//            var filteredResLinkCount = filteredResLinks.length;
//            if (filteredResLinkCount > 0) {
        var countEvidences = this.evidences.length;
        this.tooltip = /*this.id + ', ' +*/ countEvidences + ' experiment';
        if (countEvidences > 1) {
            this.tooltip += 's';
        }
        this.tooltip += ' (';
        var nested_data = d3.nest()
           .key(function(d) { return d.experiment.detmethod.name;})
           .rollup(function(leaves) { return leaves.length;})
           .entries(this.evidences);
           
        nested_data.sort(function (a, b) {return b.values - a.values});
           
        var countDetMethods = nested_data.length
        for (var i = 0; i < countDetMethods; i++) {
            if (i > 0) {
                this.tooltip += ', ';
            }
            this.tooltip += nested_data[i].values + ' ' + nested_data[i].key;
        }

        this.tooltip += ' )';
        this.w = countEvidences * (45 / ProteinLink.maxNoEvidences);
        //                //acknowledge following line is a bit confusing...
        //                this.ambig = (this.ambig && (altProteinLinks.keys().length > 1));
        //                this.dashedLine(this.ambig);

        //linkedfeature links will have been hidden previously
        this.show();
        return true;
    }
    else {
        this.hide();
        //                return false;
        //            }
        //        }
        //        else {
        var showedResResLink = false
        //            //at least one end was in stick form
        for (var rl = 0; rl < resLinkCount; rl++) {
            if (resLinks[rl].check() === true) {
                showedResResLink = true;
            }
        }
////TODO: fix this? - always returning true if one end is stick?
        return showedResResLink;
    }
};
ProteinLink.prototype.dashedLine = function(dash) {
    if (typeof this.line === 'undefined') {
        this.initSVG();
    }
    if (dash && !this.dashed) {
        this.dashed = true;
        this.line.setAttribute("stroke-dasharray", (4 * this.xlv.z) + ", " + (4 * this.xlv.z));
    }
    else if (!dash && this.dashed) {
        this.dashed = false;
        this.line.removeAttribute("stroke-dasharray");
    }
};
ProteinLink.prototype.show = function() {
    if (this.xlv.initComplete) {
// TODO: check how some of this compares to whats in Refresh.js, scale()
        if (!this.shown) {
            this.shown = true;
            if (typeof this.line === 'undefined') {
                this.initSVG();
            }
            if (this.intra) {
//this.line.setAttribute("stroke-width", 1);//this.xlv.z*

                if (ProteinLink.maxNoEvidences > 1) {
                    this.fatLine.setAttribute("transform", "translate(" +
                            this.fromProtein.x + " " + this.fromProtein.y + ")"  // possibly not neccessary
                            + " scale(" + (this.xlv.z) + ")");
                    this.xlv.p_pLinksWide.appendChild(this.fatLine);
                }

                this.fromProtein.upperGroup.appendChild(this.highlightLine);
                this.fromProtein.upperGroup.appendChild(this.line);
                this.fromProtein.upperGroup.appendChild(this.fromProtein.blob);
                this.fromProtein.upperGroup.appendChild(this.fromProtein.circDomains);
            }
            else {
                this.line.setAttribute("stroke-width", this.xlv.z * 1);
                this.highlightLine.setAttribute("stroke-width", this.xlv.z * 10);
                this.setLinkCoordinates(this.fromProtein);
                this.setLinkCoordinates(this.toProtein);
                if (ProteinLink.maxNoEvidences > 1) {
                    this.xlv.p_pLinksWide.appendChild(this.fatLine);
                }
                this.xlv.highlights.appendChild(this.highlightLine);
                this.xlv.p_pLinks.appendChild(this.line);
            }
        }
        if (ProteinLink.maxNoEvidences > 1) {
            if (this.intra) {
                this.fatLine.setAttribute("stroke-width", this.w);
            } else {
                this.fatLine.setAttribute("stroke-width", this.xlv.z * this.w);
            }
        }
    }
};
ProteinLink.prototype.hide = function() {
    if (this.shown) {
        this.shown = false;
        if (this.intra) {
//TODO: be more selective about when to show 'fatLine'
            if (ProteinLink.maxNoEvidences > 1) {
                this.xlv.p_pLinksWide.removeChild(this.fatLine);
            }
            this.fromProtein.upperGroup.removeChild(this.highlightLine);
            this.fromProtein.upperGroup.removeChild(this.line);
        } else {
            if (ProteinLink.maxNoEvidences > 1) {
                this.xlv.p_pLinksWide.removeChild(this.fatLine);
            }
            this.xlv.highlights.removeChild(this.highlightLine);
            this.xlv.p_pLinks.removeChild(this.line);
        }
    }
};
ProteinLink.prototype.getOtherEnd = function(protein) {
    return ((this.fromProtein === protein) ? this.toProtein : this.fromProtein);
};
ProteinLink.prototype.setLinkCoordinates = function(interactor) {
    if (this.shown) {//don't waste time changing DOM if link not visible
        if (this.fromProtein === interactor) {
            this.line.setAttribute("x1", interactor.x);
            this.line.setAttribute("y1", interactor.y);
            this.highlightLine.setAttribute("x1", interactor.x);
            this.highlightLine.setAttribute("y1", interactor.y);
            //                    if ( link.fatLine.getAttribute("stroke-width") > this.xlv.linkWidth){
            this.fatLine.setAttribute("x1", interactor.x);
            this.fatLine.setAttribute("y1", interactor.y);
            //                    }
        }
        else {
            this.line.setAttribute("x2", interactor.x);
            this.line.setAttribute("y2", interactor.y);
            this.highlightLine.setAttribute("x2", interactor.x);
            this.highlightLine.setAttribute("y2", interactor.y);
            //                    if ( link.fatLine.getAttribute("stroke-width") > this.xlv.linkWidth){
            this.fatLine.setAttribute("x2", interactor.x);
            this.fatLine.setAttribute("y2", interactor.y);
            //                    }
        }
    }
};