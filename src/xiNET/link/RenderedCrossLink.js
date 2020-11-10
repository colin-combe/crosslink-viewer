//  xiNET cross-link viewer
//  Copyright 2013 Rappsilber Laboratory, University of Edinburgh
//
//  author: Colin Combe
//
//  xiNET.RenderedCrosslink.js
//  the class representing a residue-residue link

xiNET.RenderedCrosslink = function (crossLink, crosslinkViewer) {
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

xiNET.RenderedCrosslink.prototype = new xiNET.Link();

xiNET.RenderedCrosslink.prototype.initSVG = function () {
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
    const self = this;
    const setMouseEvents = function (svgElement) {
        svgElement.onmousedown = function (evt) {
            self.mouseDown(evt);
        };
        svgElement.onmouseover = function (evt) {
            self.mouseOver(evt);
        };
        svgElement.onmouseout = function (evt) {
            self.mouseOut(evt);
        };
        // this.line.ontouchstart = function(evt) {
        //     self.touchStart(evt);
        // };
        svgElement.oncontextmenu = function () {
            return false;
        };
    };
    setMouseEvents(this.line);
    setMouseEvents(this.highlightLine);
};

xiNET.RenderedCrosslink.prototype.mouseOver = function (evt) {
    this.controller.preventDefaultsAndStopPropagation(evt);
    if (this.renderedFromProtein.busy === false && (!this.renderedToProtein || this.renderedToProtein.busy === false)) {
        const p = this.controller.getEventPoint(evt);

        const toHighlight = [this.crossLink];

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

xiNET.RenderedCrosslink.prototype.mouseDown = function (evt) {
    this.controller.preventDefaultsAndStopPropagation(evt);
    this.controller.d3cola.stop();
    this.controller.dragElement = this;

    let rightclick = (evt.button === 2);

    if (rightclick && this.crossLink.isSelfLink()) {
        this.renderedFromProtein.toggleFlipped();
    } else {
        const add = evt.shiftKey || evt.ctrlKey;
        this.controller.model.setMarkedCrossLinks("selection", [this.crossLink], false, add);
    }
    //store start location
    this.controller.dragStart = evt;

    d3.select(".custom-menu-margin").style("display", "none");
    d3.select(".group-custom-menu-margin").style("display", "none");
};

/*xiNET.RenderedCrosslink.prototype.touchStart = function(evt) {
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
xiNET.RenderedCrosslink.prototype.showHighlight = function (show) {
    //~ if (!this.renderedFromProtein.busy && (!this.renderedToProtein || !this.renderedToProtein.busy)) {
    if (this.shown) {
        if (show) {
            //this.highlightLine.setAttribute("stroke", CLMS.xiNET.highlightColour.toRGB());
            d3.select(this.highlightLine).classed("selectedLink", false);
            d3.select(this.highlightLine).classed("highlightedLink", true);
            this.highlightLine.setAttribute("stroke-opacity", "0.7");
            if (this.crossLink.filteredMatches_pp[0].match.matchedPeptides[0].seq_mods) {
                const fromPeptides = [],
                    toPeptides = [];
                //this is where we need the peptide positions
                const filteredMatchesAndPeptidePositions = this.crossLink.filteredMatches_pp;
                const fm_ppCount = filteredMatchesAndPeptidePositions.length;
                for (let fm_pp = 0; fm_pp < fm_ppCount; fm_pp++) {
                    const matchAndPepPos = filteredMatchesAndPeptidePositions[fm_pp];
                    const match = matchAndPepPos.match;

                    const fromPepStart = matchAndPepPos.pepPos[0].start - 1;
                    const fromPepLength = matchAndPepPos.pepPos[0].length;
                    const toPepStart = matchAndPepPos.pepPos[1].start - 1;
                    const toPepLength = matchAndPepPos.pepPos[1].length;

                    fromPeptides.push([fromPepStart, fromPepLength, match.overlap[0], match.overlap[1]]);
                    toPeptides.push([toPepStart, toPepLength, match.overlap[0], match.overlap[1]]);
                }
                if (this.renderedFromProtein.expanded) {
                    this.showPeptides(fromPeptides, this.renderedFromProtein);
                }
                if (this.renderedToProtein && this.renderedToProtein.expanded) {
                    this.showPeptides(toPeptides, this.renderedToProtein);
                }
            }
        } else {
            d3.select(this.highlightLine).classed("selectedLink", true);
            d3.select(this.highlightLine).classed("highlightedLink", false);
            if (this.isSelected === false) {
                this.highlightLine.setAttribute("stroke-opacity", "0");
            }
            this.removePeptides();
        }
    }
};

xiNET.RenderedCrosslink.prototype.showPeptides = function (pepBounds, renderedProtein) {
    let y = -xiNET.RenderedProtein.STICKHEIGHT / 2;
    const count = pepBounds.length;
    const yIncrement = xiNET.RenderedProtein.STICKHEIGHT / count;
    for (let i = 0; i < count; i++) {
        const pep = pepBounds[i];
        let annotColouredRect = document.createElementNS(this.controller.svgns, "rect");
        annotColouredRect.setAttribute("class", "protein");

        //make domain rect's
        const annoSize = pep[1] - 0.2;
        let annotX = ((pep[0] + 0.6) - (renderedProtein.participant.size / 2));
        let annoLength = annoSize;
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
            annotX = ((pep[2] + 0.5) - (renderedProtein.participant.size / 2));
            annoLength = (pep[3] - pep[2]);
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

xiNET.RenderedCrosslink.prototype.removePeptides = function () {
    const pepSvgArrCount = this.pepSvgArr.length;
    for (let p = 0; p < pepSvgArrCount; p++) {
        CLMS.removeDomElement(this.pepSvgArr[p]);
    }
};

xiNET.RenderedCrosslink.prototype.setSelected = function (select) {
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
xiNET.RenderedCrosslink.prototype.check = function () {
    // neither end is a bar which isn't in a collpased group? then hide
    if ((!this.renderedFromProtein.expanded || (this.renderedFromProtein.inCollapsedGroup())) &&
        (this.renderedToProtein ? (!this.renderedToProtein.expanded || this.renderedToProtein.inCollapsedGroup()) : false)) {
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
        (this.renderedToProtein && this.renderedToProtein.participant.hidden === true)) {
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

xiNET.RenderedCrosslink.prototype.show = function () {
    if (!this.shown) {
        this.shown = true;
        if (typeof this.line === 'undefined') {
            this.initSVG();
        }
        if (!this.renderedToProtein) {
            let path;
            if (this.renderedFromProtein.expanded) {
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
        if (this.homomultimer !== this.crossLink.confirmedHomomultimer) {
            let path;
            if (this.renderedFromProtein.expanded) {
                path = this.renderedFromProtein.getCrossLinkPath(this);
            } else {
                path = this.renderedFromProtein.getAggregateSelfLinkPath();
            }
            this.highlightLine.setAttribute("d", path);
            this.line.setAttribute("d", path);
            this.homomultimer = this.crossLink.confirmedHomomultimer;
        }
    }

    this.dashedLine(this.crossLink.ambiguous && this.crossLink.isMonoLink() === false);

    if (this.crossLink.isMonoLink()) {
        this.line.setAttribute("fill", this.crossLink.ambiguous ? "none" : this.controller.model.get("linkColourAssignment").getColour(this.crossLink));
    }

    this.line.setAttribute("stroke",
        this.controller.model.get("linkColourAssignment").getColour(this.crossLink));

    this.setSelected(this.isSelected);
};

xiNET.RenderedCrosslink.prototype.hide = function () {
    if (this.shown) {
        this.shown = false;
        d3.select(this.highlightLine).style("display", "none");
        d3.select(this.line).style("display", "none");
        this.removePeptides();
    }
};

// there's an efficiency saving possible by passing in the renderedInteractor thats moved,
// then only need to change that end
xiNET.RenderedCrosslink.prototype.setLineCoordinates = function () {
    if (this.shown) {
        //if not self link && not linker modified pep
        if (!this.crossLink.isSelfLink() && this.crossLink.toProtein) {
            let x, y;
            const source = this.renderedFromProtein.getRenderedParticipant();
            const target = this.renderedToProtein.getRenderedParticipant();
            if (!source.ix || !source.iy) {
                console.log("NOT");
            }
            // from end
            if (source.type === "group" || !source.expanded) {
                x = source.ix;
                y = source.iy;
            } else {
                const coord = this.getResidueCoordinates(this.crossLink.fromResidue, this.renderedFromProtein);
                x = coord[0];
                y = coord[1];
            }
            this.line.setAttribute("x1", x);
            this.line.setAttribute("y1", y);
            this.highlightLine.setAttribute("x1", x);
            this.highlightLine.setAttribute("y1", y);

            // to end
            if (target.type === "group" || !target.expanded) {
                x = target.ix;
                y = target.iy;
            } else {
                const coord = this.getResidueCoordinates(this.crossLink.toResidue, this.renderedToProtein);
                x = coord[0];
                y = coord[1];
            }
            this.line.setAttribute("x2", x);
            this.line.setAttribute("y2", y);
            this.highlightLine.setAttribute("x2", x);
            this.highlightLine.setAttribute("y2", y);

        }
    }

    /*    if (this.renderedToProtein && this.renderedFromProtein != this.renderedToProtein) {
            if (this.shown) {
                var target = this.renderedFromProtein.getRenderedParticipant();
                var source = this.renderedToProtein.getRenderedParticipant();
                if (!target.ix || !target.iy) {
                    console.log("NOT");
                }

                //     if (this.renderedFromProtein === participant) {
                this.line.setAttribute("x1", source.ix);
                this.line.setAttribute("y1", source.iy);
                this.highlightLine.setAttribute("x1", source.ix);
                this.highlightLine.setAttribute("y1", source.iy);
                this.thickLine.setAttribute("x1", source.ix);
                this.thickLine.setAttribute("y1", source.iy);
                // } else if (this.renderedToProtein === participant) {
                this.line.setAttribute("x2", target.ix);
                this.line.setAttribute("y2", target.iy);
                this.highlightLine.setAttribute("x2", target.ix);
                this.highlightLine.setAttribute("y2", target.iy);
                this.thickLine.setAttribute("x2", target.ix);
                this.thickLine.setAttribute("y2", target.iy);
                // }
            }
        }
    */

}

//calculate the  coordinates of a residue (relative to this.controller.container)
xiNET.RenderedCrosslink.prototype.getResidueCoordinates = function (r, renderedInteractor) {
    let x = renderedInteractor.getResXwithStickZoom(r) * this.controller.z;
    let y = 0;
    if (renderedInteractor.stickZoom >= 8) { //if sequence shown
        const from = this.renderedFromProtein,
            to = this.renderedToProtein;
        const deltaX = from.ix - to.ix;
        const deltaY = from.iy - to.iy;
        const angleBetweenMidPoints = Math.atan2(deltaY, deltaX);
        //todo: tidy up trig code so eveything is always in radians?
        let abmpDeg = angleBetweenMidPoints / (2 * Math.PI) * 360;
        if (abmpDeg < 0) {
            abmpDeg += 360;
        }

        let out; //'out' is value we use to decide which side of letter the line is drawn
        if (renderedInteractor === from) {
            out = (abmpDeg - from.rotation);
            if (out < 0) {
                out += 360;
            }
            let fyOffset = 5;
            if (out < 180) {
                fyOffset = -5;
            }

            y = fyOffset * this.controller.z;
        } else { // renderedInteractor === to
            out = (abmpDeg - to.rotation);
            if (out < 0) {
                out += 360;
            }
            let tyOffset = 5;
            if (out > 180) {
                tyOffset = -5;
            }
            y = tyOffset * this.controller.z;
        }
    }

    const rotated = xiNET.Interactor.rotatePointAboutPoint([x, y], [0, 0], renderedInteractor.rotation);

    x = rotated[0] + renderedInteractor.ix;
    y = rotated[1] + renderedInteractor.iy;
    return [x, y];
};
