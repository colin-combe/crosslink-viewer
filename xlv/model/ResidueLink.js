//    xiNET interaction viewer
//    Copyright 2013 Rappsilber Laboratory
//
//    This product includes software developed at
//    the Rappsilber Laboratory (http://www.rappsilberlab.org/).

//rename to sequence link?
ResidueLink.prototype = new xinet.Link();
function ResidueLink(id, proteinLink, fromBinding, toBinding, xlvController, interaction) {
    this.id = id;
    this.xlv = xlvController;
    this.proteinLink = proteinLink;
    //    if (fromBinding === '?-?') {
    //        this.fromStartRes = -1;
    //        this.fromEndRes = -1;
    //    } else {
    var match = /(.+)-(.+)/.exec(fromBinding);
    this.fromStartRes = match[1] * 1;
    this.fromEndRes = match[2] * 1;
    //    }
    //    if (toBinding === '?-?') {
    //        this.toStartRes = -1;
    //        this.toEndRes = -1;
    //    } else {
    match = /(.+)-(.+)/.exec(toBinding);
    this.toStartRes = match[1] * 1;
    this.toEndRes = match[2] * 1;
    //    }
    this.evidence = interaction;//todo: needs to be an array

    this.intra = false;
    if (typeof this.proteinLink !== 'undefined') {
        if (this.proteinLink.fromProtein === this.proteinLink.toProtein) {
            this.intra = true;
        }
    }
    this.ambig = false;
    this.tooltip = this.id;
    this.curveMidX = null;
    //used to avoid some unnecessary manipulation of DOM
    this.shown = false;
    this.dashed = false;
}

ResidueLink.prototype.initSVG = function() {
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
    var fromProt = this.proteinLink.fromProtein;
    var toProt = this.proteinLink.toProtein;
    var linkInfo = "<p><strong>" + this.fromStartRes + "-" + this.fromEndRes
    + ", " + fromProt.name + " (" + fromProt.accession
    + ") to " + this.toStartRes + "-" + this.toEndRes
    + ", " + toProt.name + " (" + toProt.accession
    + ")</strong></p>";
    linkInfo += "<pre>" + JSON.stringify(this.evidence, null, '\t') + "</pre>";
    this.xlv.message(linkInfo);
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
    //        if (this.proteinLink.sc >= this.xlv.cutOff) {
    this.show();
    return true;
//        } else {
//            this.hide();
//            return false;
//        }
//   }
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

                this.glyph.setAttribute("stroke-width", this.xlv.z * xinet.linkWidth);
                this.highlightGlyph.setAttribute("stroke-width", this.xlv.z * 10);
                this.setLinkCoordinates();
                this.xlv.highlights.appendChild(this.highlightGlyph);
                this.xlv.res_resLinks.appendChild(this.glyph);
            }
        }
    }
};

ResidueLink.prototype.hide = function() {
    if (this.xlv.initComplete) {
        if (this.shown) {
            this.shown = false;
            if (this.intra) {
            //                this.proteinLink.fromProtein.intraLinksHighlights.removeChild(this.highlightLine);
            //                this.proteinLink.fromProtein.intraLinks.removeChild(this.line);
            }
            else {
                this.xlv.res_resLinks.removeChild(this.glyph);
                this.xlv.highlights.removeChild(this.highlightGlyph);
            }
        }
    }
};

// update the links(lines) to fit to the protein
ResidueLink.prototype.setLinkCoordinates = function(interactor) {
    if (this.shown) { //don't waste time changing DOM if link is not visible
        var fromInteractor = this.proteinLink.fromProtein;
        var toInteractor = this.proteinLink.toProtein;

        var fMid, tMid;
        if (fromInteractor.form === 0) {
            fMid = [fromInteractor.x, fromInteractor.y];
        }
        else {
            fMid = fromInteractor.getResidueCoordinates(
                (this.fromStartRes + this.fromEndRes) / 2);
        }
        if (toInteractor.form === 0) {
            tMid = [toInteractor.x, toInteractor.y];
        }
        else {
            tMid = toInteractor.getResidueCoordinates(
                (this.toStartRes + this.toEndRes) / 2);
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
        var fRotRad = (this.proteinLink.fromProtein.rotation / 360) * Math.PI * 2;
        var fs = fromInteractor.getResidueCoordinates(this.fromStartRes, yOffset);
        var fe = fromInteractor.getResidueCoordinates(this.fromEndRes, yOffset);
        if (fromInteractor.form === 0) {
            fs = [fromInteractor.x, fromInteractor.y];
            fe = fs;
        }

        if (out > 180) {
            fRotRad = fRotRad - Math.PI;
        }

        var ftMid = [fMid[0] + (30 * Math.sin(fRotRad)),
        fMid[1] - (30 * Math.cos(fRotRad))];
        if (fromInteractor.form === 0) {
            ftMid = fMid;
        }

        out = (abmpDeg - this.proteinLink.toProtein.rotation);
        if (out < 0){
            out += 360;
        }
        //        xlv.message("TO END- abmp:" + abmpDeg + "\ttpr:" + this.proteinLink.toProtein.rotation
        //                + "\td: " + out);

        var tRotRad = (toInteractor.rotation / 360) * Math.PI * 2;
        yOffset = 10;
        if (out > 180) {
            yOffset = -10;
        }
        var ts = toInteractor.getResidueCoordinates(this.toStartRes, yOffset);
        var te = toInteractor.getResidueCoordinates(this.toEndRes, yOffset);
        if (toInteractor.form === 0) {
            ts = [toInteractor.x, toInteractor.y];
            te = ts;
        }

        if (out < 180) {
            tRotRad = tRotRad - Math.PI;
        //            ts[1] += Protein.STICKHEIGHT / 2;
        //            te[1] += Protein.STICKHEIGHT / 2;

        }
        else {
        //            ts[1] -= Protein.STICKHEIGHT / 2;
        //            te[1] -= Protein.STICKHEIGHT / 2;

        }

        var ttMid = [tMid[0] + (30 * Math.sin(tRotRad)),
        tMid[1] - (30 * Math.cos(tRotRad))];
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
        };
        function reflect(point, around, scale)
        {
            return [around[0] + scale * (around[0] - point[0]), around[1] + scale * (around[1] - point[1])];
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
    }
};