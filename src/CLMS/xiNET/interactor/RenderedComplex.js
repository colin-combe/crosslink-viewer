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

xiNET.Group = function(id, participantIds, xlvController) {
    this.id = id;
    this.name = id;
    this.controller = xlvController;
    this.renderedParticipants = [];
    for (var p of participantIds) {
        var rp = this.controller.renderedProteins.get(p)
        this.renderedParticipants.push(rp);
        rp.groups.add(this);
    }
    this.expanded = true;
    this.type = 'group';

    this.padding = 40; // used by cola.js

    /*
     * Upper group
     * svg group for elements that appear above links
     */

    this.upperGroup = document.createElementNS(this.controller.svgns, "g");
    this.upperGroup.setAttribute("class", "protein upperGroup");

    //make highlight
    this.highlight = document.createElementNS(this.controller.svgns, "rect");
    this.highlight.setAttribute("stroke", this.controller.highlightColour);
    this.highlight.setAttribute("stroke-width", "5");
    this.highlight.setAttribute("fill", "none");
    d3.select(this.highlight).attr("stroke-opacity", 0);
    this.upperGroup.appendChild(this.highlight);

    //create label - we will move this svg element around when expand / collapse
    this.labelSVG = document.createElementNS(this.controller.svgns, "text");
    this.labelSVG.setAttribute("fill", "black")
    this.labelSVG.setAttribute("x", 0);
    this.labelSVG.setAttribute("y", 0);
    this.labelSVG.setAttribute("class", "xlv_text proteinLabel");
    this.labelSVG.setAttribute('alignment-baseline', 'central');
    this.labelSVG.setAttribute('text-anchor', 'middle');
    this.labelText = this.name;
    this.labelTextNode = document.createTextNode(this.labelText);
    this.labelSVG.appendChild(this.labelTextNode);
    this.upperGroup.appendChild(this.labelSVG);

    //make blob
    this.outline = document.createElementNS(this.controller.svgns, "rect");
    this.outline.setAttribute("stroke", "white");
    this.outline.setAttribute("stroke-width", 3);
    this.outline.setAttribute("stroke-opacity", 1);
    this.outline.setAttribute("fill-opacity", 0.5);
    this.outline.setAttribute("fill", "#cccccc");
    this.upperGroup.appendChild(this.outline);

    this.controller.groupsSVG.appendChild(this.upperGroup);

    // events
    var self = this;
    //    this.upperGroup.setAttribute('pointer-events','all');
    this.upperGroup.onmousedown = function(evt) {
        self.mouseDown(evt);
    };
    this.upperGroup.onmouseover = function(evt) {
        self.mouseOver(evt);
    };
    this.upperGroup.onmouseout = function(evt) {
        self.mouseOut(evt);
    };
    // this.upperGroup.ontouchstart = function(evt) {
    //     self.touchStart(evt);
    // };


    //TODO - this wastes a bit memory coz the property is not on the prototype, fix
    Object.defineProperty(this, "width", {
        get: function width() {
            var w = this.upperGroup.getBBox().width + 10;
            return w;
        }
    });
    Object.defineProperty(this, "height", {
        get: function height() {
            var h = this.upperGroup.getBBox().height + 10;
            return h;
        }
    });
}

xiNET.Group.prototype = new xiNET.Interactor();

xiNET.Group.prototype.init = function() {
    this.setExpanded(this.expanded);
};

// event handler for starting dragging or rotation (or flipping internal links)
xiNET.Group.prototype.mouseDown = function(evt) {
    this.controller.preventDefaultsAndStopPropagation(evt); //see MouseEvents.js
    this.controller.d3cola.stop();
    this.controller.dragElement = this;
    //store start location
    this.controller.dragStart = evt;

    var rightclick; //which button has just been raised
    if (evt.which)
        rightclick = (evt.which === 3);
    else if (evt.button)
        rightclick = (evt.button === 2);

    if (!rightclick) {
        var add = evt.ctrlKey || evt.shiftKey;
        var participants = [];
        for (var rp of this.renderedParticipants) {
            //rp.participant.manuallyHidden = false;
            participants.push(rp.participant);
        }
        // this.controller.model.get("filterModel").trigger("change"); // coz its unhiding things
        this.controller.model.setSelectedProteins(participants, add);
    }
    return false;
}


xiNET.Group.prototype.mouseOver = function(evt) {
    this.showHighlight(true);
    var p = this.controller.getEventPoint(evt);
    this.controller.model.get("tooltipModel")
        .set("header", CLMSUI.modelUtils.makeTooltipTitle.complex(this))
        .set("contents", CLMSUI.modelUtils.makeTooltipContents.complex(this))
        .set("location", {
            pageX: p.x,
            pageY: p.y
        });
};

xiNET.Group.prototype.mouseOut = function(evt) {
    this.showHighlight(false);
    xiNET.Interactor.prototype.mouseOut.call(this, evt);
};

xiNET.Group.prototype.getAverageParticipantPosition = function() {
    var xSum = 0,
        ySum = 0,
        rpCount = this.renderedParticipants.length;
    for (var rp of this.renderedParticipants) {
        xSum += rp.ix;
        ySum += rp.iy;
    }
    return [xSum / rpCount, ySum / rpCount];
}

/* leave this.x and this.y as they were set by cola,
    calculate centre of interactor's glyph,
    call setPosition with those
*/
xiNET.Group.prototype.setPositionFromCola = function() {
    this.px = this.x;
    this.py = this.y;
    var xOffset = 0;
    if (!this.hidden) { // todo - hacky
        xOffset = (this.width / 20); // - (this.getBlobRadius()) + 5)
        // if (this.expanded) {
        //   xOffset = xOffset + (this.participant.size / 2 * this.stickZoom );
        // }
    }
    this.setPosition(this.x /*- xOffset*/ , this.y);
}

/* calculate top left of interactor's glyph,
set this.x and this.y as cola would have them,
    call setPosition with same params this recieved
*/
xiNET.Group.prototype.setPositionFromXinet = function(ix, iy) {
    this.px = this.x;
    this.py = this.y;
    var xOffset = 0;
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

xiNET.Group.prototype.setPosition = function(ix, iy) { //todo - array as coord param?
    if (!this.expanded) {
        this.ix = ix;
        this.iy = iy;
        var pad = 20;

        this.outline.setAttribute("x", this.ix - (pad * this.controller.z));
        this.outline.setAttribute("y", this.iy - (pad * this.controller.z));
        this.outline.setAttribute("width", (2 * (pad * this.controller.z)));
        this.outline.setAttribute("height", (2 * (pad * this.controller.z)));
        this.outline.setAttribute("rx", 5 * this.controller.z);
        this.outline.setAttribute("ry", 5 * this.controller.z);
        this.outline.setAttribute("stroke-width", 3 * this.controller.z);

        this.highlight.setAttribute("x", this.ix - (pad * this.controller.z));
        this.highlight.setAttribute("y", this.iy - (pad * this.controller.z));
        this.highlight.setAttribute("width", (2 * (pad * this.controller.z)));
        this.highlight.setAttribute("height", (2 * (pad * this.controller.z)));
        this.highlight.setAttribute("rx", 5 * this.controller.z);
        this.highlight.setAttribute("ry", 5 * this.controller.z);
        this.highlight.setAttribute("stroke-width", 9 * this.controller.z);

        this.labelSVG.setAttribute("transform", "translate(" + this.ix + " " + this.iy + ")" +
            " scale(" + (this.controller.z) + ")");
    } else {
        console.log("error");
    }
};

xiNET.Group.prototype.updateExpandedGroup = function() {
    var x1, y1, x2, y2;
    var z = this.controller.z,
        pad = 5 * z;
    for (var rp of this.renderedParticipants) {
        if (rp.hidden == false) {
            var rpBbox = rp.upperGroup.getBBox();
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

xiNET.Group.prototype.getResidueCoordinates = function(x, y) {
    return [this.ix, this.iy];
};

xiNET.Group.prototype.setHidden = function(bool) {
    d3.select(this.upperGroup).style("display", bool ? "none" : null);
    d3.select(this.labelSVG).style("display", bool ? "none" : null);
    this.hidden = bool ? true : false;
};

xiNET.Group.prototype.showHighlight = function(show) {
    var d3HighSel = d3.select(this.highlight);
    this.isHighlighted = show ? true : false; // mjg apr 18
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
    for (var rp of this.renderedParticipants) {
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

xiNET.Group.prototype.setExpanded = function(expanded, svgP) {
    // if (!this.busy) {
    //   this.busy = true;
    // var self = this;
    if (!expanded) {
        this.expanded = expanded ? true : false;
        this.controller.proteinUpper.appendChild(this.upperGroup);
        this.upperGroup.appendChild(this.labelSVG);
        this.outline.setAttribute("fill-opacity", 1);
        var renderedParticipants = this.renderedParticipants;
        var rpCount = renderedParticipants.length;

        var pPos = this.getAverageParticipantPosition();
        this.setPositionFromXinet(pPos[0], pPos[1]);

        for (var i = 0; i < rpCount; i++) {
            var rp = renderedParticipants[i];
            rp.setAllLinkCoordinates();
            rp.setHidden(true);
            rp.checkLinks();
        }
    } else {
        this.expanded = expanded ? true : false;
        this.controller.groupsSVG.append(this.upperGroup);
        if (this.upperGroup.contains(this.labelSVG)) {
            this.upperGroup.removeChild(this.labelSVG);
        }
        this.outline.setAttribute("fill-opacity", 0.5);
        for (var rp of this.renderedParticipants) {
            rp.setAllLinkCoordinates();
            rp.setHidden(rp.participant.hidden);
            rp.checkLinks();
        }
        this.updateExpandedGroup();
    }
};

// update all lines (e.g after a move)
xiNET.Group.prototype.setAllLinkCoordinates = function() {
    var renderedParticipants = this.renderedParticipants;
    var rpCount = renderedParticipants.length;
    for (var i = 0; i < rpCount; i++) {
        var rp = renderedParticipants[i];
        rp.setAllLinkCoordinates();
    }
};
