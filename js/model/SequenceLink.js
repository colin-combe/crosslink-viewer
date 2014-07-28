//    xiNET interaction viewer
//    Copyright 2013 Rappsilber Laboratory
//
//    This product includes software developed at
//    the Rappsilber Laboratory (http://www.rappsilberlab.org/).

"use strict";

//rename to sequence link?
SequenceLink.prototype = new xiNET.Link();
function SequenceLink(id, interactorLink, fromSeqData, toSeqData, xlvController) {
    this.id = id;
    this.xlv = xlvController;
    this.interactorLink = interactorLink;
    this.evidences = new Array();
    this.intra = false;
    if (typeof this.interactorLink !== 'undefined') {
        if (this.interactorLink.fromProtein === this.interactorLink.toProtein) {
            this.intra = true;
        }
    }

    this.fromSequenceData = new Array();
    var seqDatumCount = fromSeqData.length;
    for (var i = 0; i < seqDatumCount; i++) {
        this.fromSequenceData.push(new SequenceDatum(fromSeqData[i]));
    }
    this.toSequenceData = new Array();
    seqDatumCount = toSeqData.length;
    for (i = 0; i < seqDatumCount; i++) {
        this.toSequenceData.push(new SequenceDatum(toSeqData[i]));
    }
    this.ambig = false;
    this.tooltip = this.id;
    //used to avoid some unnecessary manipulation of DOM
    this.shown = false;
    this.dashed = false;
}

SequenceLink.prototype.addEvidence = function(interaction) {
    this.evidences.push(interaction);
    var from = this.interactorLink.fromInteractor, to = this.interactorLink.toInteractor;
    //~ if (interaction.source.identifier.id === this.interactorLink.fromInteractor.id) {
        //~ from = interaction.source;
        //~ to = interaction.target;
    //~ } else {
        //~ from = interaction.target
        //~ to = interaction.source;
    //~ }

    if (typeof from.bindingSites !== 'undefined') {
        this.interactorLink.fromInteractor.addFeature(from.bindingSites[0]);
        //    fromBindingSite = from.bindingSites[0];
    }
    if (typeof to.bindingSites !== 'undefined') {
        this.interactorLink.toInteractor.addFeature(to.bindingSites[0]);
        //    toBindingSite = to.bindingSites[0];
    }

//    if (typeof from.pointMutations !== 'undefined') {
//        this.fromInteractor.addFeature(from.pointMutations[0]);
//    }
//    if (typeof to.pointMutations !== 'undefined') {
//        this.toInteractor.addFeature(to.pointMutations[0]);
//    }
};
SequenceLink.prototype.initSVG = function() {
    if (typeof this.glyph === 'undefined') {
        this.glyph = document.createElementNS(xiNET.svgns, "path");
        this.uncertainGlyph = document.createElementNS(xiNET.svgns, "path");
        this.highlightGlyph = document.createElementNS(xiNET.svgns, "path");
        this.glyph.setAttribute("stroke-linecap", "round");
        this.uncertainGlyph.setAttribute("stroke-linecap", "round");
        this.highlightGlyph.setAttribute("stroke-linecap", "round");
        this.glyph.setAttribute("class", "link");
        this.glyph.setAttribute("fill", "#E08214");
        this.glyph.setAttribute("stroke", "#A08214");
        this.uncertainGlyph.setAttribute("class", "link");
        this.uncertainGlyph.setAttribute("fill", "#A01284");
        this.uncertainGlyph.setAttribute("stroke", "#A01284");
        this.uncertainGlyph.setAttribute("stroke-opacity", "0.7");
        this.uncertainGlyph.setAttribute("fill-opacity", "0.3");
        this.highlightGlyph.setAttribute("class", "link");
        this.highlightGlyph.setAttribute("fill", "none");
        this.highlightGlyph.setAttribute("stroke", xiNET.highlightColour.toRGB());
        this.highlightGlyph.setAttribute("stroke-width", "10");
        this.highlightGlyph.setAttribute("stroke-opacity", "0");
        if (typeof this.colour !== 'undefined') {
            this.glyph.setAttribute("fill", this.colour.toString());
        }

//set the events for it
        var self = this;
        this.uncertainGlyph.onmousedown = function(evt) {
            self.mouseDown(evt);
            self.xlv.res_resLinks.removeChild(self.highlightGlyph);
            self.xlv.res_resLinks.appendChild(self.highlightGlyph);
            self.xlv.res_resLinks.removeChild(self.glyph);
            self.xlv.res_resLinks.appendChild(self.glyph);
            self.xlv.res_resLinks.removeChild(self.uncertainGlyph);
            self.xlv.res_resLinks.appendChild(self.uncertainGlyph);
        };
        this.uncertainGlyph.onmouseover = function(evt) {
            self.mouseOver(evt);
        };
        this.uncertainGlyph.onmouseout = function(evt) {
            self.mouseOut(evt);
        };
        this.glyph.onmousedown = function(evt) {
            self.mouseDown(evt);
            self.xlv.res_resLinks.removeChild(self.highlightGlyph);
            self.xlv.res_resLinks.appendChild(self.highlightGlyph);
            self.xlv.res_resLinks.removeChild(self.glyph);
            self.xlv.res_resLinks.appendChild(self.glyph);
            self.xlv.res_resLinks.removeChild(self.uncertainGlyph);
            self.xlv.res_resLinks.appendChild(self.uncertainGlyph);
        };
        this.glyph.onmouseover = function(evt) {
            self.mouseOver(evt);
        };
        this.glyph.onmouseout = function(evt) {
            self.mouseOut(evt);
        };
        this.highlightGlyph.onmousedown = function(evt) {
            self.mouseDown(evt);
        };
        this.highlightGlyph.onmouseover = function(evt) {
            self.mouseOver(evt);
        };
        this.highlightGlyph.onmouseout = function(evt) {
            self.mouseOut(evt);
        };
    }
};
//SequenceLink.prototype.getFromProtein = function() {
//    return this.interactorLink.fromInteractor;
//};
//
//SequenceLink.prototype.getToProtein = function() {
//    return this.interactorLink.toInteractor;
//};

//andAlternatives means highlight alternative links in case of site ambiguity
SequenceLink.prototype.showHighlight = function(show, andAlternatives) {
    if (typeof andAlternatives === 'undefined') {
        andAlternatives = false; //TODO: tEMP HACK
    }
    if (this.shown) {
        if (show) {
            this.highlightGlyph.setAttribute("stroke-opacity", "1");
        } else {
            this.highlightGlyph.setAttribute("stroke-opacity", "0");
        }
    }
    if (andAlternatives && this.ambig) {
//TODO: we want to highlight smallest possible set of alternatives?
        var mc = this.matches.length;
        for (var m = 0; m < mc; m++) {
            var match = this.matches[m];
            if (match.isAmbig()) {
                var rc = match.sequenceLinks.length;
                for (var rl = 0; rl < rc; rl++) {
                    var resLink = match.sequenceLinks[rl];
                    resLink.showHighlight(show, false);
                    resLink.interactorLink.showHighlight(show, false);
                }
            }
        }
    }
};
//used when link clicked
SequenceLink.prototype.showID = function() {
    var fromInt = this.interactorLink.fromInteractor;
    var toInt = this.interactorLink.toInteractor;
    var linkInfo = "<p><strong>" + fromInt.name + " (" + fromInt.accession
            + ") to" + ' ' + toInt.name + " (" + toInt.accession
            + ")</strong></p><p><strong>" + this.id + "</strong></p>";
    linkInfo += "<pre>" + JSON.stringify(this.getFilteredEvidences(), null, '\t') + "</pre>";
    this.xlv.message(linkInfo);
};

//used when filter changed
SequenceLink.prototype.check = function(filter) {
    var filteredEvids = this.getFilteredEvidences();
    var evidCount = filteredEvids.length;
    if (evidCount === 0 || this.hidden || this.interactorLink.hidden) {
        this.hide();
        return false;
    }
    else {
//        this.ambig = true;
//        for (var i = 0; i < evidCount; i++) {
//            var evid = filteredEvids[i];
//            if (typeof evid.expansion === 'undefined') {
//                this.ambig = false;
//            }
//        } 

//            //tooltip
            this.tooltip = /*this.id + ', ' +*/ evidCount + ' experiment';
            if (evidCount > 1) {
                this.tooltip += 's';
            }
            this.tooltip += ' (';
            var nested_data = d3.nest()
                    .key(function(d) {
                return d.experiment.detmethod.name;
            })
                    .rollup(function(leaves) {
                return leaves.length;
            })
                    .entries(filteredEvids);

            nested_data.sort(function(a, b) {
                return b.values - a.values
            });
            var countDetMethods = nested_data.length
            for (var i = 0; i < countDetMethods; i++) {
                if (i > 0) {
                    this.tooltip += ', ';
                }
                this.tooltip += nested_data[i].values + ' ' + nested_data[i].key;
            }
            this.tooltip += ' )';

//            //fatLine
//            if (evidCount > 1) {
//                this.fatLineShown = true
//                this.w = evidCount * (45 / BinaryLink.maxNoEvidences);
//            }
//            else {
////                this.fatLineShown = false;
//                this.w = evidCount * (45 / BinaryLink.maxNoEvidences);//hack
//            }
//            //ambig?
//            this.dashedLine(this.ambig);

        this.show();
        return true;
    }
};

SequenceLink.prototype.getFilteredEvidences = function() {
    var evids = this.evidences;
    var evidCount = evids.length;
    var filteredEvids = new Array();
    for (var i = 0; i < evidCount; i++) {
        var evid = evids[i];
        if ((this.xlv.hideExpanded === false || typeof evid.expansion === 'undefined')
                && (typeof evid.score === 'undefined' || evid.score >= this.xlv.cutOff)) {
            filteredEvids.push(evid);
        }
    }
    return filteredEvids;
};
SequenceLink.prototype.show = function() {
    if (this.xlv.initComplete) {
        if (!this.shown) {
            this.shown = true;
            if (typeof this.line === 'undefined') {
                this.initSVG();
            }
            this.glyph.setAttribute("stroke-width", this.xlv.z * xiNET.linkWidth);
            this.uncertainGlyph.setAttribute("stroke-width", this.xlv.z * xiNET.linkWidth);
            this.highlightGlyph.setAttribute("stroke-width", this.xlv.z * 10);
            this.setLinkCoordinates();
            this.xlv.res_resLinks.appendChild(this.highlightGlyph);
            this.xlv.res_resLinks.appendChild(this.glyph);
            this.xlv.res_resLinks.appendChild(this.uncertainGlyph);
        }
    }
};
SequenceLink.prototype.hide = function() {
    if (this.xlv.initComplete) {
        if (this.shown) {
            this.shown = false;
            this.xlv.res_resLinks.removeChild(this.glyph);
            this.xlv.res_resLinks.removeChild(this.uncertainGlyph);
            this.xlv.res_resLinks.removeChild(this.highlightGlyph);
        }
    }
};
// update the links(polygons/lines) to fit to the protein
SequenceLink.prototype.setLinkCoordinates = function(interactor) {
	        function isNumber(thing) {
            return (!isNaN(parseFloat(thing)) && isFinite(thing));
        }

        function getPathSegments(midPoint, controlPoint, startRes, endRes, interactor, yOffset) {
            var startPoint, endPoint;
            if (interactor.form === 0) {
                startPoint = [interactor.x, interactor.y];
                endPoint = startPoint;
            }
            else {
                startPoint = interactor.getResidueCoordinates(startRes, yOffset);
                endPoint = interactor.getResidueCoordinates(endRes, yOffset);

            }
            return ' Q' + controlPoint[0] + ',' + controlPoint[1] + ' ' + startPoint[0] + ',' + startPoint[1] +
                    ' L' + endPoint[0] + ',' + endPoint[1] +
                    ' Q' + controlPoint[0] + ',' + controlPoint[1] + ' ' + midPoint[0] + ',' + midPoint[1];
        }

        function sequenceDataMidPoint(sequenceData, interactor) {
//get the smallest start and the biggest end
            var lowestLinkedRes = null, highestLinkedRes = null;
            var sdCount = sequenceData.length;
            for (var s = 0; s < sdCount; s++) {
                var seqDatum = sequenceData[s];
                if (!isNaN(parseFloat(seqDatum.start)) && isFinite(seqDatum.start)) {
                    var start = seqDatum.start * 1;
                    if (lowestLinkedRes === null || start < lowestLinkedRes) {
                        lowestLinkedRes = start;
                    }
                }
                if (!isNaN(parseFloat(seqDatum.uncertainStart)) && isFinite(seqDatum.uncertainStart)) {
                    var uncertainStart = seqDatum.uncertainStart * 1;
                    if (lowestLinkedRes === null || uncertainStart < lowestLinkedRes) {
                        lowestLinkedRes = uncertainStart;
                    }
                }
                if (!isNaN(parseFloat(seqDatum.end)) && isFinite(seqDatum.end)) {
                    var end = seqDatum.end * 1;
                    if (highestLinkedRes === null || end > highestLinkedRes) {
                        highestLinkedRes = end;
                    }
                }
                if (!isNaN(parseFloat(seqDatum.uncertainEnd)) && isFinite(seqDatum.uncertainEnd)) {
                    var uncertainEnd = seqDatum.uncertainEnd * 1;
                    if (highestLinkedRes === null || uncertainEnd > highestLinkedRes) {
                        highestLinkedRes = uncertainEnd;
                    }
                }
            }
            return interactor.getResidueCoordinates((lowestLinkedRes + highestLinkedRes) / 2, 0);
        }
    if (this.shown) { //don't waste time changing DOM if link is not visible
        var fromInteractor = this.interactorLink.fromInteractor;
        var toInteractor = this.interactorLink.toInteractor;
        //calculate mid points of from and to sequence data
        var fMid, tMid;
        if (fromInteractor.form === 0) {
            fMid = [fromInteractor.x, fromInteractor.y];
        }
        else {
            fMid = sequenceDataMidPoint(this.fromSequenceData, fromInteractor);
        }
        if (toInteractor.form === 0) {
            tMid = [toInteractor.x, toInteractor.y];
        }
        else {
            tMid = sequenceDataMidPoint(this.toSequenceData, toInteractor);
        }

//calculate angle from fromInteractor mid point to toInteractor mid point
        var deltaX = fMid[0] - tMid[0];
        var deltaY = fMid[1] - tMid[1];
        var angleBetweenMidPoints = Math.atan2(deltaY, deltaX);
        //todo: tidy up trig code so eveything is always in radian
        var abmpDeg = angleBetweenMidPoints / (2 * Math.PI) * 360;
        if (abmpDeg < 0) {
            abmpDeg += 360;
        }

//out is value we use to decide which side of bat the link glyph is drawn
//first for 'from' interactor
        var out = (abmpDeg - fromInteractor.rotation);
        if (out < 0) {
            out += 360;
        }
        var fyOffset = 10;
        if (out < 180) {
            fyOffset = -10;
        }
        var fRotRad = (this.interactorLink.fromInteractor.rotation / 360) * Math.PI * 2;
        if (out > 180) {
            fRotRad = fRotRad - Math.PI;
        }
//now for 'to' interactor
        out = (abmpDeg - this.interactorLink.toInteractor.rotation);
        if (out < 0) {
            out += 360;
        }
        var tyOffset = 10;
        if (out > 180) {
            tyOffset = -10;
        }
        var tRotRad = (toInteractor.rotation / 360) * Math.PI * 2;
        if (out < 180) {
            tRotRad = tRotRad - Math.PI;
        }

        var ftMid = [fMid[0] + (30 * Math.sin(fRotRad) * this.xlv.z),
            fMid[1] - (30 * Math.cos(fRotRad) * this.xlv.z)];
        if (fromInteractor.form === 0) {
            ftMid = fMid;
        }

        var ttMid = [tMid[0] + (30 * Math.sin(tRotRad) * this.xlv.z),
            tMid[1] - (30 * Math.cos(tRotRad) * this.xlv.z)];
        if (toInteractor.form === 0) {
            ttMid = tMid;
        }

        var triPointMid = [(ftMid[0] + ttMid[0]) / 2, (ftMid[1] + ttMid[1]) / 2];
        var fSDCount = this.fromSequenceData.length;
        var tSDCount = this.toSequenceData.length;
        var seqDatum, highlightStartRes, highlightEndRes;
        var glyphPath = 'M' + triPointMid[0] + ',' + triPointMid[1];
        var uncertainGlyphPath = 'M' + triPointMid[0] + ',' + triPointMid[1];
        var highlightGlyphPath = 'M' + triPointMid[0] + ',' + triPointMid[1];
        for (var f = 0; f < fSDCount; f++) {
            seqDatum = this.fromSequenceData[f];
            glyphPath += getPathSegments(triPointMid, ftMid, seqDatum.start, seqDatum.end, fromInteractor, fyOffset);
            highlightStartRes = seqDatum.start;
            highlightEndRes = seqDatum.end;
            if (isNumber(seqDatum.uncertainStart)) {
                uncertainGlyphPath += getPathSegments(triPointMid, ftMid,
                        seqDatum.uncertainStart, seqDatum.start, fromInteractor, fyOffset);
                highlightStartRes = seqDatum.uncertainStart;
            }
            if (isNumber(seqDatum.uncertainEnd)) {
                uncertainGlyphPath += getPathSegments(triPointMid, ftMid,
                        seqDatum.end, seqDatum.uncertainEnd, fromInteractor, fyOffset);
                highlightEndRes = seqDatum.uncertainEnd;
            }
            highlightGlyphPath += getPathSegments(triPointMid, ftMid,
                    highlightStartRes, highlightEndRes, fromInteractor, fyOffset);
        }
        for (var t = 0; t < tSDCount; t++) {
            seqDatum = this.toSequenceData[t];
            glyphPath += getPathSegments(triPointMid, ttMid, seqDatum.start, seqDatum.end, toInteractor, tyOffset);
            highlightStartRes = seqDatum.start;
            highlightEndRes = seqDatum.end;
            if (isNumber(seqDatum.uncertainStart)) {
                uncertainGlyphPath += getPathSegments(triPointMid, ttMid,
                        seqDatum.uncertainStart, seqDatum.start, toInteractor, tyOffset);
                highlightStartRes = seqDatum.uncertainStart;
            }
            if (isNumber(seqDatum.uncertainEnd)) {
                uncertainGlyphPath += getPathSegments(triPointMid, ttMid,
                        seqDatum.end, seqDatum.uncertainEnd, toInteractor, tyOffset);
                highlightEndRes = seqDatum.uncertainEnd;
            }
            highlightGlyphPath += getPathSegments(triPointMid, ttMid,
                    highlightStartRes, highlightEndRes, toInteractor, tyOffset);
        }

        this.glyph.setAttribute("d", glyphPath);
        this.uncertainGlyph.setAttribute("d", uncertainGlyphPath);
        this.highlightGlyph.setAttribute("d", highlightGlyphPath);
	}

    
};
