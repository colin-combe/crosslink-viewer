//    	xiNET Interaction Viewer
//    	Copyright 2014 Rappsilber Laboratory
//
//    	This product includes software developed at
//    	the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//
//		xiNET.Group.js
//
//		authors: Colin Combe

var xiNET = xiNET || {};

xiNET.Group = function (id, participantIds, xlvController) {
    this.id = id;
    this.name = id;
    this.controller = xlvController;

    this.renderedParticipants = [];
    for (let pId of participantIds) {
        this.renderedParticipants.push(this.controller.renderedProteins.get(pId));
    }
    this.parentGroups = new Set();
    this.subgroups = [];

    this.expanded = true;
    this.type = 'group';

    this.padding = 40; // used by cola.js

    this.upperGroup = document.createElementNS(this.controller.svgns, "g");
    this.upperGroup.setAttribute("class", "protein upperGroup");

    //make highlight
    this.highlight = document.createElementNS(this.controller.svgns, "rect");
    this.highlight.setAttribute("class", "highlightedProtein");
    this.highlight.setAttribute("stroke-width", "5");
    this.highlight.setAttribute("fill", "none");
    this.highlight.setAttribute("stroke-opacity", "0");
    this.upperGroup.appendChild(this.highlight);

    //create label - we will move this svg element around when expand / collapse
    this.labelSVG = document.createElementNS(this.controller.svgns, "text");
    this.labelSVG.setAttribute("fill", "black")
    this.labelSVG.setAttribute("x", "0");
    this.labelSVG.setAttribute("y", "0");
    this.labelSVG.setAttribute("class", "xlv_text proteinLabel");
    this.labelSVG.setAttribute("alignment-baseline", "central");
    this.labelSVG.setAttribute("text-anchor", "middle");
    this.labelText = this.name;
    this.labelTextNode = document.createTextNode(this.labelText);
    this.labelSVG.appendChild(this.labelTextNode);
    this.upperGroup.appendChild(this.labelSVG);

    //make blob
    this.outline = document.createElementNS(this.controller.svgns, "rect");
    this.outline.setAttribute("stroke", "white");
    this.outline.setAttribute("stroke-width", "3");
    this.outline.setAttribute("stroke-opacity", "1");
    this.outline.setAttribute("fill-opacity", "0.5");
    this.outline.setAttribute("fill", "#cccccc");
    this.upperGroup.appendChild(this.outline);

    //need to change this if default is unexpanded
    this.controller.groupsSVG.appendChild(this.upperGroup);

    // events - todo: move to initEvents function in Interactor?
    const self = this;
    //    this.upperGroup.setAttribute('pointer-events','all');
    this.upperGroup.onmousedown = function (evt) {
        self.mouseDown(evt);
    };
    this.upperGroup.onmouseover = function (evt) {
        self.mouseOver(evt);
    };
    this.upperGroup.onmouseout = function (evt) {
        self.mouseOut(evt);
    };
    // this.upperGroup.ontouchstart = function(evt) {
    //     self.touchStart(evt);
    // };


    //TODO - this wastes a bit memory coz the property is not on the prototype, fix
    Object.defineProperty(this, "width", {
        get: function width() {
            return this.upperGroup.getBBox().width + 10;
        }
    });
    Object.defineProperty(this, "height", {
        get: function height() {
            return this.upperGroup.getBBox().height + 10;
        }
    });
}

xiNET.Group.prototype = new xiNET.Interactor();

xiNET.Group.prototype.unhiddenParticipantCount = function () {
    let count = 0;
    for (let renderedParticipant of this.renderedParticipants) {
        if (!renderedParticipant.participant.hidden) {
            count++;
        }
    }
    return count;
};

// result depends on whats hidden
xiNET.Group.prototype.isSubsetOf = function (anotherGroup) {
    for (let renderedParticipant of this.renderedParticipants) {
        if (!renderedParticipant.participant.hidden && anotherGroup.renderedParticipants.indexOf(renderedParticipant) === -1) {
            return false;
        }
    }
    return true;
};

xiNET.Group.prototype.contains = function (renderedProtein) {
    for (let rp of this.renderedParticipants) {
        if (rp === renderedProtein) {
            return true;
        }
    }
    return false;
};

xiNET.Group.prototype.containsInSubgroup = function (renderedProtein) {
    for (let subgroup of this.subgroups) {
        if (subgroup.contains(renderedProtein)) {
            return true;
        }
    }
    return false;
};

xiNET.Group.prototype.init = function () {
    this.setExpanded(this.expanded);
};

// event handler for starting dragging or rotation (or flipping internal links)
xiNET.Group.prototype.mouseDown = function (evt) {
    this.controller.preventDefaultsAndStopPropagation(evt); //see MouseEvents.js
    this.controller.d3cola.stop();
    this.controller.dragElement = this;
    //store start location
    this.controller.dragStart = evt;

    let rightClick = (evt.button === 2);

    if (!rightClick) {
        const add = evt.ctrlKey || evt.shiftKey;
        const participants = [];
        for (let rp of this.renderedParticipants) {
            //rp.participant.manuallyHidden = false;
            participants.push(rp.participant);
        }
        // this.controller.model.get("filterModel").trigger("change"); // if its unhiding things
        this.controller.model.setSelectedProteins(participants, add);
    }
    return false;
}


xiNET.Group.prototype.mouseOver = function (evt) {
    this.showHighlight(true);
    const p = this.controller.getEventPoint(evt);
    this.controller.model.get("tooltipModel")
        .set("header", CLMSUI.modelUtils.makeTooltipTitle.complex(this))
        .set("contents", CLMSUI.modelUtils.makeTooltipContents.complex(this))
        .set("location", {
            pageX: p.x,
            pageY: p.y
        });
};

xiNET.Group.prototype.mouseOut = function (evt) {
    this.showHighlight(false);
    xiNET.Interactor.prototype.mouseOut.call(this, evt);
};

xiNET.Group.prototype.getAverageParticipantPosition = function () {
    let xSum = 0,
        ySum = 0;
    const rpCount = this.renderedParticipants.length;
    for (let rp of this.renderedParticipants) {
        xSum += rp.ix;
        ySum += rp.iy;
    }
    return [xSum / rpCount, ySum / rpCount];
}

/* leave this.x and this.y as they were set by cola,
    calculate centre of interactor's glyph,
    call setPosition with those
*/
xiNET.Group.prototype.setPositionFromCola = function () {
    this.px = this.x;
    this.py = this.y;
    let xOffset = 0;
    if (!this.hidden) { // todo - hacky
        xOffset = (this.width / 20); // - (this.getBlobRadius()) + 5)
        // if (this.expanded) {
        //   xOffset = xOffset + (this.participant.size / 2 * this.stickZoom );
        // }
    }
    this.setPosition(this.x /*- xOffset*/, this.y);
}

/* calculate top left of interactor's glyph,
set this.x and this.y as cola would have them,
    call setPosition with same params this recieved
*/
xiNET.Group.prototype.setPositionFromXinet = function (ix, iy) {
    this.px = this.x;
    this.py = this.y;
    let xOffset = 0;
    if (!this.hidden) { // todo - hacky
        xOffset = (this.width / 2); // - (this.getBlobRadius()) + 5)
        // if (this.expanded) {
        //   xOffset = xOffset + (this.participant.size / 2 * this.stickZoom );
        // }
    }
    this.x = ix - xOffset;
    this.y = iy;
    this.setPosition(ix, iy);
}

//also setting size of collapsed group symbol; scaling line widths, corner radii
xiNET.Group.prototype.setPosition = function (ix, iy) { //todo - array as coord param?
    if (!this.expanded) {
        this.ix = ix;
        this.iy = iy;
        const symbolWidth = 20;
        const x = this.ix - (symbolWidth * this.controller.z);
        const y = this.iy - (symbolWidth * this.controller.z);
        const scaledWidth = 2 * (symbolWidth * this.controller.z);
        const cornerRadii = 5 * this.controller.z;

        this.outline.setAttribute("x", x);
        this.outline.setAttribute("y", y);
        this.outline.setAttribute("width", scaledWidth);
        this.outline.setAttribute("height", scaledWidth);
        this.outline.setAttribute("rx", cornerRadii);
        this.outline.setAttribute("ry", cornerRadii);
        this.outline.setAttribute("stroke-width", 3 * this.controller.z);

        this.highlight.setAttribute("x", x);
        this.highlight.setAttribute("y", y);
        this.highlight.setAttribute("width", scaledWidth);
        this.highlight.setAttribute("height", scaledWidth);
        this.highlight.setAttribute("rx", cornerRadii);
        this.highlight.setAttribute("ry", cornerRadii);
        this.highlight.setAttribute("stroke-width", 9 * this.controller.z);

        this.labelSVG.setAttribute("transform", "translate(" + this.ix + " " + this.iy + ")" +
            " scale(" + (this.controller.z) + ")");
    } else {
        console.log("error - calling setPosition on unexpanded Group");
    }
};

xiNET.Group.prototype.updateExpandedGroup = function () {
    let x1, y1, x2, y2;
    const z = this.controller.z,
        pad = 5 * z;

    for (let rp of this.renderedParticipants) {
        if (!rp.hidden && !this.containsInSubgroup(rp)) {
            const rpBbox = rp.upperGroup.getBBox();
            if (!x1 || (rpBbox.x * z) + rp.ix < x1) {
                x1 = (rpBbox.x * z) + rp.ix;
            }
            if (!y1 || (rpBbox.y * z) + rp.iy < y1) {
                y1 = (rpBbox.y * z) + rp.iy;
            }
            if (!x2 || ((rpBbox.x + rpBbox.width) * z) + rp.ix > x2) {
                x2 = ((rpBbox.x + rpBbox.width) * z) + rp.ix;
            }
            if (!y2 || ((rpBbox.y + rpBbox.height) * z) + rp.iy > y2) {
                y2 = ((rpBbox.y + rpBbox.height) * z) + rp.iy;
            }
        }
    }

    for (let sg of this.subgroups){
        sg.updateExpandedGroup();
        const sgBbox = sg.upperGroup.getBBox();
        if (!x1 || (sgBbox.x) < x1) {
            x1 = (sgBbox.x);
        }
        if (!y1 || (sgBbox.y) < y1) {
            y1 = (sgBbox.y);
        }
        if (!x2 || ((sgBbox.x + sgBbox.width)) > x2) {
            x2 = ((sgBbox.x + sgBbox.width));
        }
        if (!y2 || ((sgBbox.y + sgBbox.height)) > y2) {
            y2 = ((sgBbox.y + sgBbox.height));
        }
    }

    // const symbolWidth = 20;
    // const x = this.ix - (symbolWidth * this.controller.z);
    // const y = this.iy - (symbolWidth * this.controller.z);
    // const scaledWidth = 2 * (symbolWidth * this.controller.z);
    // const cornerRadii = 5 * this.controller.z;

    this.outline.setAttribute("x", x1 - pad);
    this.outline.setAttribute("y", y1 - pad);
    this.outline.setAttribute("width", x2 - x1 + (2 * pad));
    this.outline.setAttribute("height", y2 - y1 + (2 * pad));
    this.outline.setAttribute("rx", pad);
    this.outline.setAttribute("ry", pad);
    this.outline.setAttribute("stroke-width", 3 * this.controller.z);

    this.highlight.setAttribute("x", x1 - pad);
    this.highlight.setAttribute("y", y1 - pad);
    this.highlight.setAttribute("width", x2 - x1 + (2 * pad));
    this.highlight.setAttribute("height", y2 - y1 + (2 * pad));
    this.highlight.setAttribute("rx", pad);
    this.highlight.setAttribute("ry", pad);
    this.highlight.setAttribute("stroke-width", 9 * this.controller.z);
};

xiNET.Group.prototype.setHidden = function (bool) {
    d3.select(this.upperGroup).style("display", bool ? "none" : null);
    d3.select(this.labelSVG).style("display", bool ? "none" : null);
    this.hidden = !!bool;
};

xiNET.Group.prototype.showHighlight = function (show) {
    const d3HighSel = d3.select(this.highlight);
    this.isHighlighted = !!show;
    if (show === true) {
        d3HighSel
            .classed("selectedProtein", false)
            .classed("highlightedProtein", true)
            .attr("stroke-opacity", "1");
    } else {
        // if (this.isSelected == false) {
        d3HighSel.attr("stroke-opacity", "0");
        // }
        d3HighSel
            .classed("selectedProtein", true)
            .classed("highlightedProtein", false);
    }
    for (let rp of this.renderedParticipants) {
        rp.showHighlight(show);
    }
}

//// TODO:
// xiNET.RenderedProtein.prototype.setSelected = function(select) {
//     var d3HighSel = d3.select(this.highlight);
//     this.isSelected = select ? true : false;
//     if (select === true) {
//         d3HighSel
//             .classed("selectedProtein", true)
//             .classed("highlightedProtein", false)
//             .attr("stroke-opacity", "1");
//     } else {
//         d3HighSel
//             .attr("stroke-opacity", "0")
//             .classed("selectedProtein", false)
//             .classed("highlightedProtein", true);
//     }
// };


xiNET.Group.prototype.setExpanded = function (expanded, svgP) {
    // if (!this.busy) {
    //   this.busy = true;
    // var self = this;

    this.expanded = !!expanded;
    if (!expanded) { // is collapsing
        this.hideSubgroups();
        this.controller.proteinUpper.appendChild(this.upperGroup);
        this.upperGroup.appendChild(this.labelSVG);
        this.outline.setAttribute("fill-opacity", "1");
        const pPos = this.getAverageParticipantPosition(); // todo - use svgP
        this.setPositionFromXinet(pPos[0], pPos[1]);
        for (let rp of this.renderedParticipants) {
            rp.setAllLinkCoordinates();
            rp.setHidden(true);
            rp.checkLinks();
        }
    } else { // is expanding
        this.showSubgroups();
        this.controller.groupsSVG.appendChild(this.upperGroup);
        if (this.upperGroup.contains(this.labelSVG)) {
            this.upperGroup.removeChild(this.labelSVG);
        }
        this.outline.setAttribute("fill-opacity", "0.5");
        for (let rp of this.renderedParticipants) {
            rp.setAllLinkCoordinates();
            rp.setHidden(rp.participant.hidden);
            rp.checkLinks();
        }
        this.updateExpandedGroup();
    }

};

xiNET.Group.prototype.hideSubgroups = function () {
    for (let subgroup of this.subgroups) {
        subgroup.hideSubgroups();
        subgroup.upperGroup.parentNode.removeChild(subgroup.upperGroup);
    }
};

xiNET.Group.prototype.showSubgroups = function () {
    for (let subgroup of this.subgroups) {
        subgroup.setExpanded(subgroup.expanded);
        subgroup.showSubgroups();
    }
};

// update all lines (e.g after a move)
xiNET.Group.prototype.setAllLinkCoordinates = function () {
    for (let rp of this.renderedParticipants) {
        rp.setAllLinkCoordinates();
    }
};
