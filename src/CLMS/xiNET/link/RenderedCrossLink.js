//  xiNET cross-link viewer
//  Copyright 2013 Rappsilber Laboratory, University of Edinburgh
//
//  author: Colin Combe
//
//  CLMS.xiNET.RenderedCrossLink.js
//  the class representing a residue-residue link

CLMS.xiNET.RenderedCrossLink = function(crossLink, crosslinkViewer) {
    this.crossLink = crossLink;
    this.controller = crosslinkViewer;

    this.renderedFromProtein = this.controller.renderedProteins.get(this.crossLink.fromProtein.id);
    this.renderedFromProtein.renderedCrosslinks.push(this);
    if (this.crossLink.toProtein) {
        this.renderedToProtein = this.controller.renderedProteins.get(this.crossLink.toProtein.id);
        this.renderedToProtein.renderedCrosslinks.push(this);
    }

    this.pepSvgArr = [];

    this.isSelected = false;
    //~ this.isHighlighted = false;
    //used to avoid some unnecessary manipulation of DOM
    this.shown = false;
}

CLMS.xiNET.RenderedCrossLink.prototype = new CLMS.xiNET.Link();

CLMS.xiNET.RenderedCrossLink.prototype.initSVG = function() {
    if (this.crossLink.isSelfLink() || this.crossLink.isMonoLink()) {
        this.line = document.createElementNS(this.controller.svgns, "path");
        this.line.setAttribute("stroke-width", this.controller.linkWidth);
        this.highlightLine = document.createElementNS(this.controller.svgns, "path");
        this.renderedFromProtein.selfLinksHighlights.appendChild(this.highlightLine);
        this.renderedFromProtein.selfLinks.appendChild(this.line);

    } else {
        this.line = document.createElementNS(this.controller.svgns, "line");
        this.line.setAttribute("stroke-linecap", "round");
        this.highlightLine = document.createElementNS(this.controller.svgns, "line");
        this.highlightLine.setAttribute("stroke-linecap", "round");
        this.controller.highlights.appendChild(this.highlightLine);
        this.controller.res_resLinks.appendChild(this.line);
    }
    this.line.setAttribute("class", "link");
    this.line.setAttribute("fill", "none");
    this.highlightLine.setAttribute("class", "link highlightedLink");
    this.highlightLine.setAttribute("fill", "none");
    //this.highlightLine.setAttribute("stroke", CLMS.xiNET.highlightColour.toRGB());
    this.highlightLine.setAttribute("stroke-width", "10");
    this.highlightLine.setAttribute("stroke-opacity", "0")
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
    // this.line.ontouchstart = function(evt) {
    //     self.touchStart(evt);
    // };
    //todo: following may not work in IE
    this.line.oncontextmenu = function() {
        return false;
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
    // this.highlightLine.ontouchstart = function(evt) {
    //     self.touchStart(evt);
    // };
    //todo: following may not work in IE
    this.highlightLine.oncontextmenu = function() {
        return false;
    };
};

CLMS.xiNET.RenderedCrossLink.prototype.mouseOver = function(evt) {
    this.controller.preventDefaultsAndStopPropagation(evt);
    if (this.renderedFromProtein.busy == false && (!this.renderedToProtein || this.renderedToProtein.busy == false)) {
        var p = this.controller.getEventPoint(evt);

        var toHighlight = [this.crossLink];

        this.controller.model.setMarkedCrossLinks("highlights", toHighlight, true, false);

        this.controller.model.get("tooltipModel")
            .set("header", CLMSUI.modelUtils.makeTooltipTitle.link())
            .set("contents", CLMSUI.modelUtils.makeTooltipContents.link(this.crossLink))
            .set("location", {
                pageX: p.x,
                pageY: p.y
            });
    }
};

CLMS.xiNET.RenderedCrossLink.prototype.mouseDown = function(evt) {
    this.controller.preventDefaultsAndStopPropagation(evt);
    this.controller.d3cola.stop();
    this.controller.dragElement = this;

    var rightclick, middleclick; //which button has just been raised
    if (evt.which)
        rightclick = (evt.which === 3);
    else if (evt.button)
        rightclick = (evt.button === 2);
    if (evt.which)
        middleclick = (evt.which === 2);
    else if (evt.button)
        middleclick = (evt.button === 1);

    if (rightclick && this.crossLink.isSelfLink()) {
        this.renderedFromProtein.toggleFlipped();

    } else {
        var add = evt.shiftKey || evt.ctrlKey;
        this.controller.model.setMarkedCrossLinks("selection", [this.crossLink], false, add);
    }
    //store start location
    this.controller.dragStart = evt;

    d3.select(".custom-menu-margin").style("display", "none");
    d3.select(".group-custom-menu-margin").style("display", "none");
};

/*CLMS.xiNET.RenderedCrossLink.prototype.touchStart = function(evt) {
    this.controller.d3cola.stop();
    this.controller.dragElement = this;
    var add = evt.shiftKey || evt.ctrlKey;
    this.controller.model.setMarkedCrossLinks("selection", [this.crossLink], false, add);
    //store start location
    //var p = this.controller.getTouchEventPoint(evt);// broke
    this.controller.dragStart = evt; //this.controller.mouseToSVG(p.x, p.y);
}*/

// andAlternatives means highlight alternative links in case of site ambiguity,
// need to be able to switch this on and off to avoid inifite loop
CLMS.xiNET.RenderedCrossLink.prototype.showHighlight = function(show) {
    //~ if (!this.renderedFromProtein.busy && (!this.renderedToProtein || !this.renderedToProtein.busy)) {
    var self = this;
    if (this.shown) {
        if (show) {
            //this.highlightLine.setAttribute("stroke", CLMS.xiNET.highlightColour.toRGB());
            d3.select(this.highlightLine).classed("selectedLink", false);
            d3.select(this.highlightLine).classed("highlightedLink", true);
            this.highlightLine.setAttribute("stroke-opacity", "0.7");
            if (this.crossLink.filteredMatches_pp[0].match.matchedPeptides[0].seq_mods) {
                var fromPeptides = [],
                    toPeptides = [];
                //this is where we need the peptide positions
                var filteredMatchesAndPeptidePositions = this.crossLink.filteredMatches_pp;
                var fm_ppCount = filteredMatchesAndPeptidePositions.length;
                for (var fm_pp = 0; fm_pp < fm_ppCount; fm_pp++) {
                    var matchAndPepPos = filteredMatchesAndPeptidePositions[fm_pp];
                    var match = matchAndPepPos.match;

                    var fromPepStart = matchAndPepPos.pepPos[0].start - 1;
                    var fromPepLength = matchAndPepPos.pepPos[0].length;
                    var toPepStart = matchAndPepPos.pepPos[1].start - 1;
                    var toPepLength = matchAndPepPos.pepPos[1].length;

                    fromPeptides.push([fromPepStart, fromPepLength, match.overlap[0], match.overlap[1]]);
                    toPeptides.push([toPepStart, toPepLength, match.overlap[0], match.overlap[1]]);
                }
                if (this.renderedFromProtein.expanded == true) {
                    this.showPeptides(fromPeptides, this.renderedFromProtein);
                }
                if (this.renderedToProtein && this.renderedToProtein.expanded == true) {
                    this.showPeptides(toPeptides, this.renderedToProtein);
                }
            }
        } else {
            d3.select(this.highlightLine).classed("selectedLink", true);
            d3.select(this.highlightLine).classed("highlightedLink", false);
            if (this.isSelected == false) {
                this.highlightLine.setAttribute("stroke-opacity", "0");
            }
            this.removePeptides();
        }
    }
};

CLMS.xiNET.RenderedCrossLink.prototype.showPeptides = function(pepBounds, renderedProtein) {
    var y = -xiNET.RenderedProtein.STICKHEIGHT / 2;
    var count = pepBounds.length;
    var yIncrement = xiNET.RenderedProtein.STICKHEIGHT / count;
    for (var i = 0; i < count; i++) {
        var pep = pepBounds[i];
        var annotColouredRect = document.createElementNS(this.controller.svgns, "rect");
        annotColouredRect.setAttribute("class", "protein");

        //make domain rect's
        var annoSize = pep[1] - 0.2;
        var annotX = ((pep[0] + 0.6) - (renderedProtein.participant.size / 2));
        var annoLength = annoSize;
        annotColouredRect.setAttribute("x", annotX);
        annotColouredRect.setAttribute("y", y);
        annotColouredRect.setAttribute("width", annoLength);
        annotColouredRect.setAttribute("height", yIncrement);
        //style 'em
        d3.select(annotColouredRect).classed("highlightedPeptide", true);
        //annotColouredRect.setAttribute("fill-opacity", "0.7");
        renderedProtein.peptides.appendChild(annotColouredRect);
        this.pepSvgArr.push(annotColouredRect);

        if (typeof pep[2] != "undefined") { //homodimer like
            annotColouredRect = document.createElementNS(this.controller.svgns, "rect");
            annotColouredRect.setAttribute("class", "protein");
            var annotX = ((pep[2] + 0.5) - (renderedProtein.participant.size / 2));
            var annoLength = (pep[3] - pep[2]);
            annotColouredRect.setAttribute("x", annotX);
            annotColouredRect.setAttribute("y", y);
            annotColouredRect.setAttribute("width", annoLength);
            annotColouredRect.setAttribute("height", yIncrement);

            //style 'em
            d3.select(annotColouredRect).classed("peptideOverlap", true);
            annotColouredRect.setAttribute("fill-opacity", "0.5");

            renderedProtein.peptides.appendChild(annotColouredRect);
            this.pepSvgArr.push(annotColouredRect);
        }
        y += yIncrement;
    }
};

CLMS.xiNET.RenderedCrossLink.prototype.removePeptides = function() {
    var pepSvgArrCount = this.pepSvgArr.length;
    for (var p = 0; p < pepSvgArrCount; p++) {
        CLMS.removeDomElement(this.pepSvgArr[p]);
    }
};

CLMS.xiNET.RenderedCrossLink.prototype.setSelected = function(select) {
    if (this.shown) {
        if (select === true) {
            d3.select(this.highlightLine).classed("selectedLink", true);
            d3.select(this.highlightLine).classed("highlightedLink", false);
            this.highlightLine.setAttribute("stroke-opacity", "0.7");
        } else {
            this.highlightLine.setAttribute("stroke-opacity", "0");
            d3.select(this.highlightLine).classed("selectedLink", false);
            d3.select(this.highlightLine).classed("highlightedLink", true);
        }
    }
    this.isSelected = select;
};


//used when filter changed // todo - tidy
CLMS.xiNET.RenderedCrossLink.prototype.check = function(filter) {
    // neither end is a bar which isn't in a collpased group? then hide
    if ((this.renderedFromProtein.expanded == false || (this.renderedFromProtein.inCollapsedGroup())) &&
        (this.renderedToProtein ? (this.renderedToProtein.expanded == false || (this.renderedToProtein.inCollapsedGroup())) : false)) {
        this.hide();
        return false;
    }

    // both ends in a collapsed complex? then hide
    // if (this.renderedFromProtein.complex && !this.renderedFromProtein.complex.expanded
    //     && (this.renderedToProtein && this.renderedToProtein.complex && !this.renderedToProtein.complex.expanded)) {
    //     this.hide();
    //     return false;
    // }

    // either end manually hidden? then hide
    if (this.renderedFromProtein.participant.hidden === true ||
        (this.renderedToProtein && this.renderedToProtein.participant.hidden == true)) {
        this.hide();
        return false;
    }

    // no crosslinks passed filter? then hide
    if (this.crossLink.filteredMatches_pp.length > 0) {
        this.show();
        return true;
    } else {
        this.hide();
        return false;
    }
};

CLMS.xiNET.RenderedCrossLink.prototype.show = function() {
    if (!this.shown) {
        this.shown = true;
        if (typeof this.line === 'undefined') {
            this.initSVG();
        }
        if (!this.renderedToProtein) {
            var path;
            if (this.renderedFromProtein.expanded == true) {
                path = this.renderedFromProtein.getCrossLinkPath(this);
            } else {
                path = this.crossLink.isMonoLink() ? "M 0,0 L 0,0 L 0,0 L 0,0" : this.renderedFromProtein.getAggregateSelfLinkPath();
            }
            this.highlightLine.setAttribute("d", path);
            this.line.setAttribute("d", path);
        } else {
            if (!this.crossLink.isSelfLink()) {
                this.line.setAttribute("stroke-width", this.controller.z * this.controller.linkWidth);
                this.highlightLine.setAttribute("stroke-width", this.controller.z * 10);
                this.setLineCoordinates(this.renderedFromProtein);
                this.setLineCoordinates(this.renderedToProtein);
            }
        }
        d3.select(this.highlightLine).style("display", null);
        d3.select(this.line).style("display", null);
    }

    if (this.crossLink.isSelfLink() && this.renderedToProtein) {
        if (this.homomultimer != this.crossLink.confirmedHomomultimer) {
            var path;
            if (this.renderedFromProtein.expanded == true) {
                path = this.renderedFromProtein.getCrossLinkPath(this);
            } else {
                path = this.renderedFromProtein.getAggregateSelfLinkPath();
            }
            this.highlightLine.setAttribute("d", path);
            this.line.setAttribute("d", path);
            this.homomultimer = this.crossLink.confirmedHomomultimer;
        }
    }

    this.dashedLine(this.crossLink.ambiguous && this.crossLink.isMonoLink() == false);

    if (this.crossLink.isMonoLink()) {
        this.line.setAttribute("fill", this.crossLink.ambiguous ? "none" : this.controller.model.get("linkColourAssignment").getColour(this.crossLink));
    }

    this.line.setAttribute("stroke",
        this.controller.model.get("linkColourAssignment").getColour(this.crossLink));

    this.setSelected(this.isSelected);
};

CLMS.xiNET.RenderedCrossLink.prototype.hide = function() {
    if (this.shown) {
        this.shown = false;
        d3.select(this.highlightLine).style("display", "none");
        d3.select(this.line).style("display", "none");
        this.removePeptides();
    }
};

// there's an efficiency saving possible by passing in the renderedInteractor thats moved,
// then only need to change that end
CLMS.xiNET.RenderedCrossLink.prototype.setLineCoordinates = function() {
    if (this.shown) {
        //if not self link && not linker modified pep
        if (this.crossLink.isSelfLink() === false) {
            //~ if (this.shown) {//don't waste time changing DOM if link not visible
            var x, y;
            // from end
            if (this.renderedFromProtein.expanded == false) {
                x = this.renderedFromProtein.ix;
                y = this.renderedFromProtein.iy;
            } else //if (this.expanded == true)
            {
                var coord = this.getResidueCoordinates(this.crossLink.fromResidue, this.renderedFromProtein);
                x = coord[0];
                y = coord[1];
            }
            this.line.setAttribute("x1", x);
            this.line.setAttribute("y1", y);
            this.highlightLine.setAttribute("x1", x);
            this.highlightLine.setAttribute("y1", y);

            // to end
            if (this.renderedToProtein.expanded == false) {
                x = this.renderedToProtein.ix;
                y = this.renderedToProtein.iy;
            } else //if (this.expanded == true)
            {
                var coord = this.getResidueCoordinates(this.crossLink.toResidue, this.renderedToProtein);
                x = coord[0];
                y = coord[1];
            }
            this.line.setAttribute("x2", x);
            this.line.setAttribute("y2", y);
            this.highlightLine.setAttribute("x2", x);
            this.highlightLine.setAttribute("y2", y);

        }
    }
}

//calculate the  coordinates of a residue (relative to this.controller.container)
CLMS.xiNET.RenderedCrossLink.prototype.getResidueCoordinates = function(r, renderedInteractor) {
    var x = renderedInteractor.getResXwithStickZoom(r) * this.controller.z;
    var y = 0;
    if (renderedInteractor.stickZoom > 8) { //if sequence shown
        var from = this.renderedFromProtein,
            to = this.renderedToProtein;
        var deltaX = from.ix - to.ix;
        var deltaY = from.iy - to.iy;
        var angleBetweenMidPoints = Math.atan2(deltaY, deltaX);
        //todo: tidy up trig code so eveything is always in radians?
        var abmpDeg = angleBetweenMidPoints / (2 * Math.PI) * 360;
        if (abmpDeg < 0) {
            abmpDeg += 360;
        }

        var out; //'out' is value we use to decide which side of letter the line is drawn
        if (renderedInteractor === from) {
            out = (abmpDeg - from.rotation);
            if (out < 0) {
                out += 360;
            }
            var fyOffset = 5;
            if (out < 180) {
                fyOffset = -5;
            }

            y = fyOffset * this.controller.z;
        } else { // renderedInteractor === to
            out = (abmpDeg - to.rotation);
            if (out < 0) {
                out += 360;
            }
            var tyOffset = 5;
            if (out > 180) {
                tyOffset = -5;
            }
            y = tyOffset * this.controller.z;
        }
    }

    var rotated = xiNET.Interactor.rotatePointAboutPoint([x, y], [0, 0], renderedInteractor.rotation);

    x = rotated[0] + renderedInteractor.ix;
    y = rotated[1] + renderedInteractor.iy;
    return [x, y];
};
