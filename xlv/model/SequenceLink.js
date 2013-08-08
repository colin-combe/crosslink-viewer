//    xiNET interaction viewer
//    Copyright 2013 Rappsilber Laboratory
//
//    This product includes software developed at
//    the Rappsilber Laboratory (http://www.rappsilberlab.org/).

//rename to sequence link?
SequenceLink.prototype = new xinet.Link();
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

    var from, to;
    if (interaction.source.identifier.id === this.interactorLink.fromInteractor.id) {
        from = interaction.source;
        to = interaction.target;
    } else {
        from = interaction.target
        to = interaction.source;
    }

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
        this.glyph = document.createElementNS(xinet.svgns, "path");
        this.highlightGlyph = document.createElementNS(xinet.svgns, "path");
        this.glyph.setAttribute("stroke-linecap", "round");
        this.highlightGlyph.setAttribute("stroke-linecap", "round");


        this.glyph.setAttribute("class", "link");
        this.glyph.setAttribute("fill", "#E08214");
        this.glyph.setAttribute("stroke", "#A08214");
        this.highlightGlyph.setAttribute("class", "link");
        this.highlightGlyph.setAttribute("fill", "none");
        this.highlightGlyph.setAttribute("stroke", xinet.highlightColour.toRGB());
        this.highlightGlyph.setAttribute("stroke-width", "10");
        this.highlightGlyph.setAttribute("stroke-opacity", "0");

        if (typeof this.colour !== 'undefined') {
            this.glyph.setAttribute("fill", this.colour.toString());
        }

        //set the events for it
        var self = this;
        this.glyph.onmousedown = function(evt) {
            self.mouseDown(evt);
            self.xlv.res_resLinks.removeChild(self.highlightGlyph);
            self.xlv.res_resLinks.appendChild(self.highlightGlyph);
            self.xlv.res_resLinks.removeChild(self.glyph);
            self.xlv.res_resLinks.appendChild(self.glyph);
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

SequenceLink.prototype.getFromProtein = function() {
    return this.interactorLink.fromInteractor;
};

SequenceLink.prototype.getToProtein = function() {
    return this.interactorLink.toInteractor;
};

//andAlternatives means highlight alternative links in case of site ambiguity
SequenceLink.prototype.showHighlight = function(show, andAlternatives) {
    if (typeof andAlternatives === 'undefined') {
        andAlternatives = false;//TODO: tEMP HACK
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
    var fromProt = this.interactorLink.fromInteractor;
    var toProt = this.interactorLink.toInteractor;
    var linkInfo = "<p><strong>" + this.fromStartRes + "-" + this.fromEndRes
            + ", " + fromProt.name + " (" + fromProt.accession
            + ") to " + this.toStartRes + "-" + this.toEndRes
            + ", " + toProt.name + " (" + toProt.accession
            + ")</strong></p>";
    linkInfo += "<pre>" + JSON.stringify(this.getFilteredEvidences(), null, '\t') + "</pre>";
    this.xlv.message(linkInfo);
};

//used when filter changed
SequenceLink.prototype.check = function(filter) {
    if (this.interactorLink.hidden || this.getFilteredEvidences().length === 0) {
        this.hide();
        return false;
    }
    else {
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
            this.glyph.setAttribute("stroke-width", this.xlv.z * xinet.linkWidth);
            this.highlightGlyph.setAttribute("stroke-width", this.xlv.z * 10);
            this.setLinkCoordinates();
            this.xlv.res_resLinks.appendChild(this.highlightGlyph);
            this.xlv.res_resLinks.appendChild(this.glyph);
        }
    }
};

SequenceLink.prototype.hide = function() {
    if (this.xlv.initComplete) {
        if (this.shown) {
            this.shown = false;

            this.xlv.res_resLinks.removeChild(this.glyph);
            this.xlv.highlights.removeChild(this.highlightGlyph);
        }
    }
};

// update the links(lines) to fit to the protein
SequenceLink.prototype.setLinkCoordinates = function(interactor) {
    if (this.shown) { //don't waste time changing DOM if link is not visible
        var fromInteractor = this.interactorLink.fromInteractor;
        var toInteractor = this.interactorLink.toInteractor;

        var fromStartRes = this.fromSequenceData[0].start;
        var fromEndRes = this.fromSequenceData[0].end;
        var toStartRes = this.toSequenceData[0].start;
        var toEndRes = this.toSequenceData[0].end;

        var fMid, tMid;
        if (fromInteractor.form === 0) {
            fMid = [fromInteractor.x, fromInteractor.y];
        }
        else {
            fMid = fromInteractor.getResidueCoordinates(
                    (fromStartRes * 1 + fromEndRes * 1) / 2);
        }
        if (toInteractor.form === 0) {
            tMid = [toInteractor.x, toInteractor.y];
        }
        else {
            tMid = toInteractor.getResidueCoordinates(
                    (toStartRes * 1 + toEndRes * 1) / 2);
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
        var out = (abmpDeg - fromInteractor.rotation);
        if (out < 0) {
            out += 360;
        }
        //        xlv.message("FROM END- abmp:" + abmpDeg + "\tfpr:" + fromInteractor.rotation
        //                + "\td: " + out);
        var yOffset = 10;
        if (out < 180) {
            yOffset = -10;
        }
        var fRotRad = (this.interactorLink.fromInteractor.rotation / 360) * Math.PI * 2;
        var fs = fromInteractor.getResidueCoordinates(fromStartRes, yOffset);
        var fe = fromInteractor.getResidueCoordinates(fromEndRes, yOffset);
        if (fromInteractor.form === 0) {
            fs = [fromInteractor.x, fromInteractor.y];
            fe = fs;
        }

        if (out > 180) {
            fRotRad = fRotRad - Math.PI;
        }

        var ftMid = [fMid[0] + (30 * Math.sin(fRotRad) * this.xlv.z),
            fMid[1] - (30 * Math.cos(fRotRad) * this.xlv.z)];
        if (fromInteractor.form === 0) {
            ftMid = fMid;
        }

        out = (abmpDeg - this.interactorLink.toInteractor.rotation);
        if (out < 0) {
            out += 360;
        }
        //        xlv.message("TO END- abmp:" + abmpDeg + "\ttpr:" + this.interactorLink.toProtein.rotation
        //                + "\td: " + out);

        var tRotRad = (toInteractor.rotation / 360) * Math.PI * 2;
        yOffset = 10;
        if (out > 180) {
            yOffset = -10;
        }
        var ts = toInteractor.getResidueCoordinates(toStartRes, yOffset);
        var te = toInteractor.getResidueCoordinates(toEndRes, yOffset);
        if (toInteractor.form === 0) {
            ts = [toInteractor.x, toInteractor.y];
            te = ts;
        }

        if (out < 180) {
            tRotRad = tRotRad - Math.PI;
            //            ts[1] += Interactor.STICKHEIGHT / 2;
            //            te[1] += Interactor.STICKHEIGHT / 2;

        }
        else {
            //            ts[1] -= Interactor.STICKHEIGHT / 2;
            //            te[1] -= Interactor.STICKHEIGHT / 2;

        }

        var ttMid = [tMid[0] + (30 * Math.sin(tRotRad) * this.xlv.z),
            tMid[1] - (30 * Math.cos(tRotRad) * this.xlv.z)];
        if (toInteractor.form === 0) {
            ttMid = tMid;
        }

        var triPointMid = [(ftMid[0] + ttMid[0]) / 2, (ftMid[1] + ttMid[1]) / 2];

        var path = 'M' + fs[0] + ',' + fs[1] +
                ' Q' + ftMid[0] + ',' + ftMid[1] + ' ' + triPointMid[0] + ',' + triPointMid[1] +
                ' Q' + ttMid[0] + ',' + ttMid[1] + ' ' + ts[0] + ',' + ts[1] +
                ' L' + te[0] + ',' + te[1] +
                ' Q ' + ttMid[0] + ',' + ttMid[1] + ' ' + triPointMid[0] + ',' + triPointMid[1]
                + ' Q' + ftMid[0] + ',' + ftMid[1] + ' ' + fe[0] + ',' + fe[1]
                + ' Z';

        this.glyph.setAttribute("d", path);
        this.highlightGlyph.setAttribute("d", path);

        function midPoint(a, b)
        {
            return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
        }
        ;
        function reflect(point, around, scale)
        {
            return [around[0] + scale * (around[0] - point[0]), around[1] + scale * (around[1] - point[1])];
        }
        ;


    }
};

//        this.glyph.setAttribute("d", 'M' + fs[0] + ' ' + fs[1] +
//                ' L' + fMid[0] + ' ' + fMid[1]
//                + ' L' + fe[0] + ' ' + fe[1] + ' Z');

//        var triPointThird = [fMid[0] + ((tMid[0] - fMid[0]) / 3), fMid[1] + ((tMid[1] - fMid[1]) / 3)];
//        var triPointTwoThird = [fMid[0] + ((tMid[0] - fMid[0]) * 2 / 3), fMid[1] + ((tMid[1] - fMid[1]) * 2 / 3)];
//        var reflectFtMid = reflect(ftMid, triPointThird, 0.7);
//        var reflectTtMid = reflect(ttMid, triPointTwoThird, 0.7);
//        var path = 'M' + fs[0] + ',' + fs[1] +
//                ' Q' + ftMid[0] + ',' + ftMid[1] + ' ' + triPointThird[0] + ',' + triPointThird[1] +
//                ' C' + reflectFtMid[0] + ',' + reflectFtMid[1] + ' ' + reflectTtMid[0] + ',' + reflectTtMid[1] + ' ' + triPointTwoThird[0] + ',' + triPointTwoThird[1] +
//                ' Q' + ttMid[0] + ',' + ttMid[1] + ' ' + ts[0] + ',' + ts[1] +
//                ' L' + te[0] + ',' + te[1] +
//                ' Q' + ttMid[0] + ',' + ttMid[1] + ' ' + triPointTwoThird[0] + ',' + triPointTwoThird[1] +
//                ' C' + reflectTtMid[0] + ',' + reflectTtMid[1] + ' ' + reflectFtMid[0] + ',' + reflectFtMid[1] + ' ' + triPointThird[0] + ',' + triPointThird[1] +
//                ' Q' + ftMid[0] + ',' + ftMid[1] + ' ' + fe[0] + ',' + fe[1] +
//                ' Z';