//  xiNET Crosslink Viewer
//  Copyright 2013 Rappsilber Laboratory
//
//  author: Colin Combe
//
//  xiNET.P_PLink.js
//  the class representing a protein-protein link

xiNET.P_PLink = function (p_pId, crossLink, crosslinkViewer) {
    this.id = p_pId;
    this.controller = crosslinkViewer;
    this.crossLinks = [];
    this.renderedFromProtein = this.controller.renderedProteins.get(crossLink.fromProtein.id);
    this.renderedFromProtein.renderedP_PLinks.push(this);
    if (crossLink.toProtein) {
        this.renderedToProtein = this.controller.renderedProteins.get(crossLink.toProtein.id);
        this.renderedToProtein.renderedP_PLinks.push(this);
    }
    this.shown = false; //used to avoid some unnecessary manipulation of DOM
    this.isSelected = false;
    // this.colours = new Set(); // TODO - problems here
};

xiNET.P_PLink.prototype = new xiNET.Link();

xiNET.P_PLink.prototype.initSVG = function () {
    if (this.crossLinks[0].isSelfLink() === false) {
        this.line = document.createElementNS(this.controller.svgns, "line");
        this.highlightLine = document.createElementNS(this.controller.svgns, "line");
        this.thickLine = document.createElementNS(this.controller.svgns, "line");
    } else {
        this.renderedFromProtein.selfLink = this;

        this.line = document.createElementNS(this.controller.svgns, "path");
        this.highlightLine = document.createElementNS(this.controller.svgns, 'path');
        this.thickLine = document.createElementNS(this.controller.svgns, 'path');

        this.initSelfLinkSVG();
    }

    this.line.setAttribute("class", "link");
    this.line.setAttribute("fill", "none");
    this.line.setAttribute("stroke-width", this.controller.linkWidth);
    this.line.setAttribute("stroke-linecap", "round");

    this.highlightLine.setAttribute("class", "link highlightedLink");
    this.highlightLine.setAttribute("fill", "none");
    this.highlightLine.setAttribute("stroke-width", "10");
    this.highlightLine.setAttribute("stroke-linecap", "round");
    this.highlightLine.setAttribute("stroke-opacity", "0");

    this.thickLine.setAttribute("class", "link");
    this.thickLine.setAttribute("fill", "none");
    this.thickLine.setAttribute("stroke", "#ddd");
    this.thickLine.setAttribute("stroke-linecap", "round");
    this.thickLine.setAttribute("stroke-linejoin", "round");

    this.controller.p_pLinksWide.appendChild(this.thickLine);
    this.controller.highlights.appendChild(this.highlightLine);
    this.controller.p_pLinks.appendChild(this.line);

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
    setMouseEvents(this.thickLine);
};

xiNET.P_PLink.prototype.mouseOver = function (evt) {
    const p = this.controller.getEventPoint(evt);

    const toHighlight = this.crossLinks.slice(0);

    this.controller.model.setMarkedCrossLinks("highlights", toHighlight, true, false);

    this.controller.model.get("tooltipModel")
        //TODO - reuse other multiLink tooltips in CLM-UI?
        .set("header", "Linked Protein Pair")
        .set("contents", [
            ["From", this.renderedFromProtein.participant.name],
            ["To", this.renderedToProtein.participant.name],
            ["Unique Linked Residue Pairs", this.filteredCrossLinkCount],
            ["Matches", this.filteredMatchCount ? this.filteredMatchCount : "filter not yet applied"]
        ])
        .set("location", {
            pageX: p.x,
            pageY: p.y
        });
};

// event handler for starting dragging or rotation (or flipping internal links)
xiNET.P_PLink.prototype.mouseDown = function (evt) {
    //stop layout
    this.controller.d3cola.stop();

    this.controller.dragElement = this;
    if (evt.shiftKey || evt.ctrlKey) {
        let selection = this.controller.model.get("selection");
        if (this.isSelected) {
            const self = this;
            selection = selection.filter(function (d) {
                return self.crossLinks.indexOf(d) === -1;
            });
        } else {
            selection = selection.concat(this.crossLinks);
        }
        this.controller.model.setMarkedCrossLinks("selection", selection);
    } else {
        this.controller.model.setMarkedCrossLinks("selection", _.clone(this.crossLinks));
    }

    //store start location
    this.controller.dragStart = evt;

    d3.select(".custom-menu-margin").style("display", "none");
    d3.select(".group-custom-menu-margin").style("display", "none");
};

/*xiNET.P_PLink.prototype.touchStart = function(evt) {
    this.controller.d3cola.stop();
    this.controller.dragElement = this;
    this.controller.model.setMarkedCrossLinks("selection", this.crossLinks);
    //store start location
    //var p = this.controller.getTouchEventPoint(evt);// oh dear, now broken
    this.controller.dragStart = evt;
}*/

xiNET.P_PLink.prototype.initSelfLinkSVG = function () {
    const path = this.renderedFromProtein.getAggregateSelfLinkPath();
    this.line.setAttribute('d', path);
    this.highlightLine.setAttribute('d', path);
    this.thickLine.setAttribute('d', path);
};

xiNET.P_PLink.prototype.showHighlight = function (show) {
    if (this.shown) {
        if (show) {
            d3.select(this.highlightLine).classed("selectedLink", false);
            d3.select(this.highlightLine).classed("highlightedLink", true);
            this.highlightLine.setAttribute("stroke-opacity", "1");
        } else {
            d3.select(this.highlightLine).classed("selectedLink", true);
            d3.select(this.highlightLine).classed("highlightedLink", false);
            if (this.isSelected === false) {
                this.highlightLine.setAttribute("stroke-opacity", "0");
            }
        }
    }
};

xiNET.P_PLink.prototype.setSelected = function (select) {
    if (this.shown) {
        if (select === true) {
            d3.select(this.highlightLine).classed("selectedLink", true);
            d3.select(this.highlightLine).classed("highlightedLink", false);
            this.highlightLine.setAttribute("stroke-opacity", "1");
        } else {
            this.highlightLine.setAttribute("stroke-opacity", "0");
            d3.select(this.highlightLine).classed("selectedLink", false);
            d3.select(this.highlightLine).classed("highlightedLink", true);
        }
    }
    this.isSelected = select;
};

xiNET.P_PLink.prototype.check = function () {
    // this.ambiguous = true; // todo - looks like this could be removed
    this.hd = false;

    const filteredCrossLinks = new Set();
    const filteredMatches = new Set();
    const altP_PLinks = new Set();

    // this.colours.clear();

    for (let crossLink of this.crossLinks) {

        if (crossLink.filteredMatches_pp.length > 0) {
            filteredCrossLinks.add(crossLink.id);
            // this.colours.add(CLMSUI.compositeModelInst.get("linkColourAssignment").getColour(crossLink));
        }

        for (let m of crossLink.filteredMatches_pp) {
            // i think there's a performance improvement to be had here
            const match = m.match; // oh dear, this...
            filteredMatches.add(match.id);
            if (match.hd === true) {
                this.hd = true;
            }
            if (match.crossLinks.length === 1) {
                // this.ambiguous = false; //yeah... whats this doing when this.ambiguous gets set later, just before end of function
            } else {
                const matchCrossLinks = match.crossLinks;
                for (let matchCrossLink of match.crossLinks) {
                    if (!matchCrossLink.isDecoyLink()) {
                        altP_PLinks.add(matchCrossLink.p_pLink.id);
                    }
                }
            }
        }
    }

    this.filteredMatchCount = filteredMatches.size;
    this.filteredCrossLinkCount = filteredCrossLinks.size;
    if (this.filteredCrossLinkCount > 0) {
        this.ambiguous = altP_PLinks.size > 1;
    }
    return this.filteredCrossLinkCount;
};

xiNET.P_PLink.prototype.update = function () {
    if (!this.renderedToProtein || // todo - ok... check why this is here
        //hide if prot either end is hidden
        this.renderedFromProtein.participant.hidden ||
        this.renderedToProtein.participant.hidden ||
        // or either end is expanded to bar and not in collapsed group
        (this.renderedFromProtein.expanded && !this.renderedFromProtein.inCollapsedGroup()) ||
        (this.renderedToProtein.expanded && !this.renderedToProtein.inCollapsedGroup()) ||
        // or no matches pass filter
        this.filteredCrossLinkCount === 0 ||
        // or is self link in collapsed group
        (this.crossLinks[0].isSelfLink() && this.renderedFromProtein.inCollapsedGroup())) {
        this.hide();
    } else {
        this.show();
    }
}

xiNET.P_PLink.prototype.show = function () {
    //if (!this.shown) { - causing problems with load layout, TODO - look at again
    if (typeof this.line === 'undefined') {
        this.initSVG();
    }
    this.shown = true;
    if (this.renderedFromProtein === this.renderedToProtein) {
        this.thickLine.setAttribute("transform", "translate(" +
            this.renderedFromProtein.ix + " " + this.renderedFromProtein.iy + ")" // possibly not neccessary
            +
            " scale(" + (this.controller.z) + ")");
        this.line.setAttribute("transform", "translate(" + this.renderedFromProtein.ix +
            " " + this.renderedFromProtein.iy + ")" + " scale(" + (this.controller.z) + ")");
        this.highlightLine.setAttribute("transform", "translate(" + this.renderedFromProtein.ix +
            " " + this.renderedFromProtein.iy + ")" + " scale(" + (this.controller.z) + ")");

    } else {
        this.line.setAttribute("stroke-width", this.controller.z * this.controller.linkWidth);
        this.highlightLine.setAttribute("stroke-width", this.controller.z * 10);
        this.setLineCoordinates(this.renderedFromProtein);
        this.setLineCoordinates(this.renderedToProtein);
    }
    d3.select(this.thickLine).style("display", null);
    d3.select(this.line).style("display", null);
    d3.select(this.highlightLine).style("display", null);
    //}

    if (this.controller.model.get("xinetThickLinks") === false) {
        d3.select(this.thickLine).style("display", "none");
    } else {
        d3.select(this.thickLine).style("display", null);
        const steps = this.controller.model.get("xinetPpiSteps");

        let thickLineWidth;
        if (this.filteredCrossLinkCount < steps[0]) {
            thickLineWidth = 1;
        } else if (this.filteredCrossLinkCount < steps[1]) {
            thickLineWidth = 5;
        } else {
            thickLineWidth = 10;
        }
        this.w = thickLineWidth; // TODO - tidy up
        if (this.renderedFromProtein === this.renderedToProtein) {
            this.thickLine.setAttribute("stroke-width", thickLineWidth);
        } else {
            this.thickLine.setAttribute("stroke-width", this.controller.z * thickLineWidth);
        }
    }

    this.dashedLine(this.ambiguous);

    // if (this.colours.size === 1 && CLMSUI.compositeModelInst.get("linkColourAssignment").get("id") !== "Default") { // todo - fix this
    //     this.line.setAttribute("stroke", Array.from(this.colours)[0]);
    // } else {
    this.line.setAttribute("stroke", CLMSUI.compositeModelInst.get("linkColourAssignment").getColour(this));
    // }

    this.setSelected(this.isSelected);
};

xiNET.P_PLink.prototype.hide = function () {
    if (this.shown) {
        this.shown = false;
        d3.select(this.thickLine).style("display", "none");
        d3.select(this.highlightLine).style("display", "none");
        d3.select(this.line).style("display", "none");
    }
};

xiNET.P_PLink.prototype.setLineCoordinates = function () {
    if (this.renderedToProtein && this.renderedFromProtein !== this.renderedToProtein) {
        if (this.shown) {
            const source = this.renderedFromProtein.getRenderedParticipant();
            const target = this.renderedToProtein.getRenderedParticipant();
            if (!source.ix || !source.iy) {
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
}
/*
xiNET.P_PLink.prototype.getOtherEnd = function(protein) {
    if (this.fromProtein === protein) {
        return this.toProtein;
    } else {
        return this.fromProtein;
    }
};*/
