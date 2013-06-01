//    xiNET interaction viewer
//    Copyright 2013 Rappsilber Laboratory
//
//    This product includes software developed at
//    the Rappsilber Laboratory (http://www.rappsilberlab.org/).

//rename to linked features
ResidueLink.prototype = new xinet.Link();
function ResidueLink(id, proteinLink, fromResidue, toResidue, xlvController) {
    this.id = id;
    //this.matches = new Array(0); //rename to evidence, temp commented out as filtering disabled
    this.xlv = xlvController;
    this.proteinLink = proteinLink;

    this.fromResidue = fromResidue;
    this.toResidue = toResidue;

//    var tempSourceRanges = fromResidue.split(/,/);
//    var tempTargetRanges = toResidue.split(/,/);
//
//    var sourceRangeCount = tempSourceRanges.length;
//    var targetRangeCount = tempTargetRanges.length;
//
//    this.sourceRanges = new Array();
//    this.targetRanges = new Array();
//    this.sourceRangeGraphic = new Array();
//    this.targetRangeGraphic = new Array();
//    this.sourceRangeMidPoint = 0;
//    this.sourceRangeMidPoint = 0;
//
//    for (var s = 0; s < sourceRangeCount; s++){
//        var boundFeature = new BoundFeature(tempSourceRanges[s], proteinLink.fromProtein);
//        this.sourceRanges.push(boundFeature);
//        var graphic = null;
//        if (boundFeature.singlePoint !== null) {
//            graphic = document.createElementNS(xinet.svgns, "line");
//        }
//        else {
//            graphic = document.createElementNS(xinet.svgns, "path");
//        }
//    }
//    for (var t = 0; t < targetRangeCount; t++){
//        boundFeature = new BoundFeature(tempTargetRanges[t], proteinLink.toProtein);
//        this.targetRanges.push(boundFeature);
//        var graphic = null;
//        if (boundFeature.singlePoint !== null) {
//            graphic = document.createElementNS(xinet.svgns, "line");
//        }
//        else {
//            graphic = document.createElementNS(xinet.svgns, "path");
//        }
//    }

    this.intra = false;
    if (typeof this.proteinLink !== 'undefined') {
        if (this.proteinLink.fromProtein === this.proteinLink.toProtein) {
            this.intra = true;
        }
    }

    this.ambig = false;
    this.tooltip = this.id;

    //used to avoid some unnecessary manipulation of DOM
    this.shown = false;
    this.dashed = false;

    this.curveMidX = null;
}

ResidueLink.prototype.initSVG = function() {
    if (typeof this.line === 'undefined') {
        if (!this.intra) {
            this.line = document.createElementNS(xinet.svgns, "line");
            this.line.setAttribute("stroke", "#E08214");
            this.line.setAttribute("stroke-linecap", "round");
            this.highlightLine = document.createElementNS(xinet.svgns, "line");
            this.highlightLine.setAttribute("stroke-linecap", "round");

//            this.sourceLines = new Array();
//            this.targetLines = new Array();
//
//            this.sourceSitesMid = 0;
//            this.targetSitesMid = 0;
//
//            for (var sl = 0; sl < this.sourceBindingSites.length; sl++) {
//
//                this.sourceSitesMid += (this.sourceBindingSites[sl] * 1);
//
//                var sourceLine = document.createElementNS(xinet.svgns, "line");
//                sourceLine.setAttribute("stroke", "#E08214");
//                this.sourceLines.push(sourceLine);
//            }
//
//            this.sourceSitesMid = this.sourceSitesMid / this.sourceBindingSites.length;
//
//            for (var tl = 0; tl < this.targetBindingSites.length; tl++) {
//
//                this.targetSitesMid += (this.targetBindingSites[tl] * 1);
//
//                var targetLine = document.createElementNS(xinet.svgns, "line");
//                targetLine.setAttribute("stroke", "#E08214");
//                this.targetLines.push(targetLine);
//            }
//
//            this.targetSitesMid = this.targetSitesMid / this.targetBindingSites.length;


        } else {

            //temp intra links disabed

            //            this.line = document.createElementNS(xinet.svgns, "path");
            //            this.line.setAttribute('stroke', '#8073AC');
            //            this.highlightLine = document.createElementNS(xinet.svgns, "path");
        }

        //        this.line.setAttribute("class", "link");
        //        this.line.setAttribute("fill", "none");
        //        this.highlightLine.setAttribute("class", "link");
        //        this.highlightLine.setAttribute("fill", "none");
        //        this.highlightLine.setAttribute("stroke", xinet.highlightColour.toRGB());
        //        this.highlightLine.setAttribute("stroke-width", "10");
        //        this.highlightLine.setAttribute("stroke-opacity", "0")

        if (typeof this.colour !== 'undefined') {
            this.line.setAttribute("stroke", this.colour.toString());
        }

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
        this.highlightLine.onmousedown = function(evt) {
            self.mouseDown(evt);
        };
        this.highlightLine.onmouseover = function(evt) {
            self.mouseOver(evt);
        };
        this.highlightLine.onmouseout = function(evt) {
            self.mouseOut(evt);
        };
    }
    if (this.intra === true) {
//        this.setUpCurve();
    }
};

ResidueLink.prototype.getFromProtein = function() {
    return this.proteinLink.fromProtein;
};

ResidueLink.prototype.getToProtein = function() {
    return this.proteinLink.toProtein;
};

//andAlternatives means highlight alternative links in case of site ambiguity
ResidueLink.prototype.showHighlight = function(show, andAlternatives) {
    if (typeof andAlternatives === 'undefined') {
        andAlternatives = false;//TODO: tEMP HACK
    }
    if (this.shown) {
        if (show) {
            this.highlightLine.setAttribute("stroke-opacity", "1");
        } else {
            this.highlightLine.setAttribute("stroke-opacity", "0");
        }
    }
    if (andAlternatives && this.ambig) {
        //TODO: we want to highlight smallest possible set of alternatives?
        var mc = this.matches.length;
        for (var m = 0; m < mc; m++) {
            var match = this.matches[m];
            if (match.isAmbig()) {
                var rc = match.residueLinks.length;
                for (var rl = 0; rl < rc; rl++) {
                    var resLink = match.residueLinks[rl];
                    resLink.showHighlight(show, false);
                    resLink.proteinLink.showHighlight(show, false);
                }
            }
        }
    }
};

//used when link clicked
ResidueLink.prototype.showID = function() {
    if (typeof send_match_ids === 'function') {
        var matches = this.getFilteredMatches();
        var matchIDs = new Array();
        var c = matches.length;
        var firstMatch = true;
        for (var i = 0; i < c; i++) {
            if (firstMatch) {
                firstMatch = false;
            }
            else {
                matchIDs = matchIDs + ",";
            }
            matchIDs = matchIDs + matches[i].id;
        }
        send_match_ids(matchIDs);
    }
    else {
        //only same info as in tooltip but may need to print to page if on touch screen
        var fromProt = this.getFromProtein();
        var toProt = this.getToProtein();
        var linkInfo = "<p><strong>" + fromProt.name + " (" + fromProt.accession
                + "), residue " + JSON.stringify(this.sourceBindingSites) + " - "
                + toProt.name + " (" + toProt.accession
                + "), residue " + JSON.stringify(this.targetBindingSites) + "</strong></p>";

        this.xlv.message(linkInfo);
    }
};

ResidueLink.prototype.getFilteredMatches = function() {
    this.ambig = true;
    var filteredMatches = new Array();
    var count = this.matches.length;
    for (var i = 0; i < count; i++) {
        var match = this.matches[i];
        if (match.meetsFilterCriteria()) {
            filteredMatches.push(match);
            if (match.isAmbig() === false) {
                this.ambig = false;
            }
        }
    }
    return filteredMatches;
};

//used when filter changed
ResidueLink.prototype.check = function(filter) {
    if (this.xlv.intraHidden && this.intra) {
        this.hide();
        return false;
    }
    if (this.proteinLink.hidden) {
        this.hide();
        return false;
    }
    //    if (typeof this.matches === 'undefined' || this.matches == null) {
    //        if (this.proteinLink.sc >= this.xlv.cutOff) {
    this.show();
    return true;
//        } else {
//            this.hide();
//            return false;
//        }
//   }
//    var filteredMatches = this.getFilteredMatches();
//    var countFilteredMatches = filteredMatches.length;
//    if (countFilteredMatches > 0) {
//        this.tooltip = this.proteinLink.fromProtein.labelText + '_' + this.fromResidue
//                    + "-"  + this.proteinLink.toProtein.labelText + '_' + this.toResidue + ' (' + countFilteredMatches;
//        if (countFilteredMatches == 1) {
//            this.tooltip += ' match)';
//        } else {
//            this.tooltip += ' matches)';
//        }
//        this.show();
//        this.dashedLine(this.ambig);
//        return true;
//    }
//    else {
//        this.hide();
//        return false;
//    }
};

ResidueLink.prototype.dashedLine = function(dash) {
    if (typeof this.line !== 'undefined') {
        if (dash) {// && !this.dashed){
            if (this.intra) {
                this.dashed = true;
                this.line.setAttribute("stroke-dasharray", (4) + ", " + (4));
            }
            else {
                this.dashed = true;
                this.line.setAttribute("stroke-dasharray", (4 * this.xlv.z) + ", " + (4 * this.xlv.z));
            }
        }
        else if (!dash) {// && this.dashed){
            this.dashed = false;
            this.line.removeAttribute("stroke-dasharray");
        }
    }
};

ResidueLink.prototype.show = function() {
    if (this.xlv.initComplete) {
        if (!this.shown) {
            this.shown = true;
            if (typeof this.line === 'undefined') {
                this.initSVG();
            }
            if (this.intra) {
                this.line.setAttribute("stroke-width", xinet.linkWidth); //this.xlv.z*
                //                this.highlightLine.setAttribute("stroke-width", 10);
                this.proteinLink.fromProtein.intraLinksHighlights.appendChild(this.highlightLine);
                this.proteinLink.fromProtein.intraLinks.appendChild(this.line);
            }
            else {

                                this.line.setAttribute("stroke-width", this.xlv.z * xinet.linkWidth);
                                this.highlightLine.setAttribute("stroke-width", this.xlv.z * 10);
                this.setLinkCoordinates(this.proteinLink.fromProtein);
                this.setLinkCoordinates(this.proteinLink.toProtein);
                                this.xlv.highlights.appendChild(this.highlightLine);
                                this.xlv.res_resLinks.appendChild(this.line);

//                for (var sl = 0; sl < this.sourceBindingSites.length; sl++) {
//                    this.xlv.res_resLinks.appendChild(this.sourceLines[sl]);
//                }
//                for (var tl = 0; tl < this.targetBindingSites.length; tl++) {
//                    this.xlv.res_resLinks.appendChild(this.targetLines[tl]);
//                }
            }
        }
    }
};

ResidueLink.prototype.hide = function() {
    if (this.xlv.initComplete) {
        if (this.shown) {
            this.shown = false;
            if (this.intra) {
                this.proteinLink.fromProtein.intraLinksHighlights.removeChild(this.highlightLine);
                this.proteinLink.fromProtein.intraLinks.removeChild(this.line);
            }
            else {
                this.xlv.res_resLinks.removeChild(this.line);
                this.xlv.highlights.removeChild(this.highlightLine);
            }
        }
    }
};

ResidueLink.prototype.setUpCurve = function() {
    //    alert("yup, here");
    var pathAtt;
    var x1 = this.proteinLink.fromProtein.getResXwithStickZoom(this.fromResidue);
    //    if (this.fromResidue == this.toResidue){
    //        pathAtt = "M " + x1 + " 0 L " + x1 + " 25";
    //    //        this.line.setAttribute("stroke", "red");
    //    }
    //    else {
    var x2 = this.proteinLink.fromProtein.getResXwithStickZoom(this.toResidue);
    var midY = (Math.abs(x2 - x1));
    midY = midY / 2;
    this.curveMidX = x1 + ((x2 - x1) / 2);
    pathAtt = "M " + x1 + " 0 "
            + " L " + x1 + " " + (-((Protein.STICKHEIGHT / 2) + 3))
            + " A " + midY + " " + midY + "  0 1 1 "
            + x2 + " " + (-((Protein.STICKHEIGHT / 2) + 3))
            + " L " + x2 + " 0 "
            ;
    //    }

    this.line.setAttribute("d", pathAtt);
    this.highlightLine.setAttribute("d", pathAtt);
    //
    if (this.homodimer === true) {
        //        alert('true');
        this.line.setAttribute("stroke", "red");
        this.line.setAttribute("transform", "scale (1 -1)");
        this.highlightLine.setAttribute("transform", "scale (1 -1)");
    }
};

// update the links(lines) to fit to the protein
ResidueLink.prototype.setLinkCoordinates = function(interactor) {
    if (this.shown) { //don't waste time changing DOM if link not visible
//        var blobMidPoint = this.proteinLink.getBlobMidPoint();
//
//        var sMid = this.proteinLink.fromProtein.getResidueCoordinates(this.sourceSitesMid);
//        sMid[1] = sMid[1] - 20;
//
//        var countSourceBindingSites = this.sourceBindingSites.length;
//        for (var sbs = 0; sbs < countSourceBindingSites; sbs++) {
//            var s;
//            if (this.proteinLink.fromProtein.form === 1) {
//                s = this.proteinLink.fromProtein.getResidueCoordinates(this.sourceBindingSites[sbs]);
//            }
//            else {
//                s = [this.proteinLink.fromProtein.x, this.proteinLink.fromProtein.y];
//            }
//            var line = this.sourceLines[sbs];
//            line.setAttribute("x1", s[0]);
//            line.setAttribute("y1", s[1]);
//            line.setAttribute("x2", sMid[0]);
//            line.setAttribute("y2", sMid[1]);
//        }
//
//        var tMid = this.proteinLink.toProtein.getResidueCoordinates(this.targetSitesMid);
//        //tMid[1] = tMid[1] - 20;
//        var rotRad = (this.proteinLink.toProtein.rotation / 360) * Math.PI * 2;
//        tMid[0] = tMid[0] + (40 * Math.sin(rotRad));
//        tMid[1] = tMid[1] - (40 * Math.cos(rotRad));
//
//        var countTargetBindingSites = this.targetBindingSites.length;
//        for (var tbs = 0; tbs < countTargetBindingSites; tbs++) {
//            var t;
//            if (this.proteinLink.toProtein.form === 1) {
//                t = this.proteinLink.toProtein.getResidueCoordinates(this.targetBindingSites[tbs]);
//            }
//            else {
//                t = [this.proteinLink.toProtein.x, this.proteinLink.toProtein.y];
//            }
//            line = this.targetLines[tbs];
//            line.setAttribute("x1", t[0]);
//            line.setAttribute("y1", t[1]);
//            line.setAttribute("x2", tMid[0]);
//            line.setAttribute("y2", tMid[1]);
//        }

        if (this.proteinLink.fromProtein === interactor) {
            if (interactor.form === 0) {
                this.line.setAttribute("x1", interactor.x);
                this.line.setAttribute("y1", interactor.y);
                this.highlightLine.setAttribute("x1", interactor.x);
                this.highlightLine.setAttribute("y1", interactor.y);
            }
            else //if (this.form == 1)
            {
                var coord = interactor.getResidueCoordinates(this.fromResidue);
                this.line.setAttribute("x1", coord[0]);
                this.line.setAttribute("y1", coord[1]);
                this.highlightLine.setAttribute("x1", coord[0]);
                this.highlightLine.setAttribute("y1", coord[1]);
            }
        }
        else { //if (link.toProtein === interactor) {
            if (interactor.form === 0) {
                this.line.setAttribute("x2", interactor.x);
                this.line.setAttribute("y2", interactor.y);
                this.highlightLine.setAttribute("x2", interactor.x);
                this.highlightLine.setAttribute("y2", interactor.y);
            }
            else //if (this.form == 1)
            {
                var coord = interactor.getResidueCoordinates(this.toResidue);
                this.line.setAttribute("x2", coord[0]);
                this.line.setAttribute("y2", coord[1]);
                this.highlightLine.setAttribute("x2", coord[0]);
                this.highlightLine.setAttribute("y2", coord[1]);
            }
        }


    }


};

