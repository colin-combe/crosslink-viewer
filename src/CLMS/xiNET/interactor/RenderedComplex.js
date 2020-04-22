//    	xiNET Interaction Viewer
//    	Copyright 2014 Rappsilber Laboratory
//
//    	This product includes software developed at
//    	the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//
//		Complex.js
//
//		authors: Colin Combe

Complex.prototype = new Molecule(); // TODO - renameing - Complex to Group, Molecule to Interactor

function Complex(group, xlvController) { // TODO: rename to Group
    this.id = group.id;
    this.name = group.name;
    this.controller = xlvController;
    this.renderedParticipants = [];
    for (var p of group.participants) {
        this.renderedParticipants.push(this.controller.renderedProteins.get(p));
    }
    //links
    // this.selfLink = null;
    this.expanded = 0; //todo - stop using 1 and 0 for expanded instead of true / false
    this.type = 'complex';
    this.size = 10; //hack, layout is using this

    /*
     * Upper group
     * svg group for elements that appear above links
     */

    this.upperGroup = document.createElementNS(this.controller.svgns, "g");
    //~ this.upperGroup.setAttribute("class", "protein upperGroup");

    this.pad = 5; // a border used by xiNET
    this.padding = 40; // used by cola.js

    /* //for polygon
    var points = "15,0 8,-13 -7,-13 -15,0 -8,13 7,13";*/
    //make highlight
    /*this.highlight = document.createElementNS(this.controller.svgns, "rect");
    /* this.highlight.setAttribute("points", points); */
    /* // this.highlight.setAttribute("stroke", this.controller.highlightColour);
    this.highlight.setAttribute("stroke-width", "5");
    // this.highlight.setAttribute("fill", "lightGray");
    //this.highlight.setAttribute("fill-opacity", 1);
    //attributes that may change
    d3.select(this.highlight).attr("stroke-opacity", 0);*/
    //this.upperGroup.appendChild(this.highlight);

    //create label - we will move this svg element around when protein form changes
    this.labelSVG = document.createElementNS(this.controller.svgns, "text");
    // this.labelSVG.setAttribute("text-anchor", "end");
    this.labelSVG.setAttribute("fill", "black")
    this.labelSVG.setAttribute("x", 0);
    this.labelSVG.setAttribute("y", 0);
    this.labelSVG.setAttribute("class", "xlv_text proteinLabel");
    // this.labelSVG.setAttribute('font-family', 'Arial');
    // this.labelSVG.setAttribute('font-size', '16');
    this.labelSVG.setAttribute('alignment-baseline', 'central');
    this.labelSVG.setAttribute('text-anchor', 'middle');

    this.labelText = this.name;
    this.labelTextNode = document.createTextNode(this.labelText);
    this.labelSVG.appendChild(this.labelTextNode);
    //this.upperGroup.appendChild(this.labelSVG);

    //make blob
    this.outline = document.createElementNS(this.controller.svgns, "rect");
    /* this.outline.setAttribute("points", points); */

    //this.outline.setAttribute("stroke", "black");

    d3.select(this.outline).attr("stroke-opacity", 1).attr("fill-opacity", 0.5)
        .attr("fill", "#cccccc");
    //append outline
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
            // console.log("* " + this.labelText + " width", w + " *");
            return w;
        }
    });
    Object.defineProperty(this, "height", {
        get: function height() {
            var h = this.upperGroup.getBBox().height + 10;
            // console.log(this.labelText + " height", h);
            return h;
        }
    });
}

Complex.prototype.initMolecule = function() {
    this.setForm(this.expanded);
};

// event handler for starting dragging or rotation (or flipping internal links)
Complex.prototype.mouseDown = function(evt) {
    this.controller.preventDefaultsAndStopPropagation(evt); //see MouseEvents.js
    this.controller.d3cola.stop();
    this.controller.dragElement = this;
    //store start location
    this.controller.dragStart = evt; //this.controller.mouseToSVG(p.x, p.y);

    var rightclick, middleclick; //which button has just been raised
    if (evt.which)
        rightclick = (evt.which === 3);
    else if (evt.button)
        rightclick = (evt.button === 2);
    // if (evt.which)
    //     middleclick = (evt.which === 2);
    // else if (evt.button)
    //     middleclick = (evt.button === 1);

    if (!rightclick) {
        var add = evt.ctrlKey || evt.shiftKey;
        var participants = [];
        if (this.expanded == true) {
            for (var rp of this.renderedParticipants) {
                //rp.participant.manuallyHidden = false;
                participants.push(rp.participant);
            }
        }

        // this.controller.model.get("filterModel").trigger("change"); // coz its unhiding things
        this.controller.model.setSelectedProteins(participants, add);
    }
    return false;
}

Complex.prototype.mouseOver = function(evt) {
    this.showHighlight(true);
    //doesn't do anything
    var p = this.controller.getEventPoint(evt);
    this.controller.model.get("tooltipModel")
        .set("header", CLMSUI.modelUtils.makeTooltipTitle.complex(this))
        .set("contents", CLMSUI.modelUtils.makeTooltipContents.complex(this))
        .set("location", {
            pageX: p.x,
            pageY: p.y
        });
};

Complex.prototype.mouseOut = function(evt) {
    this.showHighlight(false);
    Molecule.prototype.mouseOut.call(this, evt);
};

Complex.prototype.getAverageParticipantPosition = function() {
    var xSum = 0,
        ySum = 0,
        rpCount = this.renderedParticipants.length;
    for (var rp of this.renderedParticipants) {
        xSum += rp.ix;
        ySum += rp.iy;
    }
    return [xSum / rpCount, ySum / rpCount];
}

Complex.prototype.getPosition = function() {
    return [this.ix, this.iy];
};

/* leave this.x and this.y as they were set by cola,
    calculate centre of interactor's glyph,
    call setPosition with those
*/
Complex.prototype.setPositionFromCola = function() {
    this.px = this.x;
    this.py = this.y;
    var xOffset = 0;
    if (!this.hidden) { // todo - hacky
        xOffset = (this.width / 20);// - (this.getBlobRadius()) + 5)
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
Complex.prototype.setPositionFromXinet = function(ix, iy) {
    this.px = this.x;
    this.py = this.y;
    var xOffset = 0;
    if (!this.hidden) { // todo - hacky
        xOffset = (this.width / 2);// - (this.getBlobRadius()) + 5)
        // if (this.expanded) {
        //   xOffset = xOffset + (this.participant.size / 2 * this.stickZoom );
        // }
    }
    this.x = ix - xOffset;
    this.y = iy;
    this.setPosition(ix, iy);
}

Complex.prototype.setPosition = function(ix, iy) { //todo - array as coord param?
    if (this.expanded == false) {

        this.ix = ix;
        this.iy = iy;
        var pad = 20;
        this.outline.setAttribute("x", this.ix - (pad * this.controller.z));
        this.outline.setAttribute("y", this.iy - (pad * this.controller.z));
        this.outline.setAttribute("width", (2 * (pad * this.controller.z)));
        this.outline.setAttribute("height", (2 * (pad * this.controller.z)));
        this.outline.setAttribute("rx", 5 * this.controller.z);
        this.outline.setAttribute("ry", 5 * this.controller.z);


        // this.upperGroup.setAttribute("transform", "translate(" + this.ix + " " + this.iy + ")" +
        //     " scale(" + (this.controller.z) + ") " + "rotate(" + this.rotation + ")");
        this.labelSVG.setAttribute("transform", "translate(" + this.ix + " " + this.iy + ")" +
            " scale(" + (this.controller.z) + ")");


        // d3.select(this.labelSVG).attr("transform",
        //     "translate( -" + (20) + " " + Molecule.labelY + ")"); // the hexagon has slightly bigger diameter

    } else {
        alert("error");
    }
};

Complex.prototype.updateExpandedGroup = function() {

    var x1, y1, x2, y2;
    var z = this.controller.z,
        pad = this.pad * z;
    for (var rp of this.renderedParticipants) {
        if (rp.hidden == false) {
            // rp.setAllLinkCoordinates();
            // rp.setHidden(rp.participant.hidden);
            // rp.checkLinks();
            var rpBbox = rp.upperGroup.getBBox();
            // console.log("*", rpBbox.x, rpBbox.y);
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

    if (x1) {
        this.outline.setAttribute("x", x1 - pad);
        this.outline.setAttribute("y", y1 - pad);
        this.outline.setAttribute("width", x2 - x1 + (2 * pad));
        this.outline.setAttribute("height", y2 - y1 + (2 * pad));
        this.outline.setAttribute("rx", pad);
        this.outline.setAttribute("ry", pad);
        // this.labelSVG.setAttribute("transform",
        //     "translate( " + x1 + " " + (y1) + ") scale(" + z + ")");
    }
};

Complex.prototype.getResidueCoordinates = function(x, y) {
    return this.getPosition()
};

Complex.prototype.setHidden = function(bool) {
  d3.select(this.upperGroup).style("display", bool ? "none" : null);
  d3.select(this.labelSVG).style("display", bool ? "none" : null);
  //d3.select(this.lowerGroup).style("display", bool ? "none" : null);
    this.hidden = bool ? true : false;
};

Complex.prototype.showHighlight = function(show) {
    for (var rp of this.renderedParticipants) {
        rp.showHighlight(show);
    }
}

Complex.prototype.setForm = function(form, svgP) {
    // if (!this.busy) {
    //   this.busy = true;
    // var self = this;
    if (form == 0) {
        this.expanded = 0;
        this.controller.proteinUpper.appendChild(this.upperGroup);
        this.controller.proteinUpper.appendChild(this.labelSVG);
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
        this.expanded = 1;
        this.controller.groupsSVG.append(this.upperGroup);
        if (this.controller.proteinUpper.contains(this.labelSVG)) {
            this.controller.proteinUpper.removeChild(this.labelSVG);
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
Complex.prototype.setAllLinkCoordinates = function() {
    var renderedParticipants = this.renderedParticipants;
    var rpCount = renderedParticipants.length;
    for (var i = 0; i < rpCount; i++) {
        var rp = renderedParticipants[i];
        rp.setAllLinkCoordinates();
    }
};
