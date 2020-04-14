//    	xiNET Interaction Viewer
//    	Copyright 2014 Rappsilber Laboratory
//
//    	This product includes software developed at
//    	the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//
//		Complex.js
//
//		authors: Colin Combe

Complex.prototype = new Molecule();

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
    this.expanded = 1; //todo - stop using 1 and 0 for expanded instead of true / false
    this.type = 'complex';
    this.size = 10; //hack, layout is using this

    /*
     * Upper group
     * svg group for elements that appear above links
     */

    this.upperGroup = document.createElementNS(this.controller.svgns, "g");
    //~ this.upperGroup.setAttribute("class", "protein upperGroup");

    this.pad = 10; // a border used by xiNET
    this.padding = 40; // used by cola.js

    /* //for polygon
    var points = "15,0 8,-13 -7,-13 -15,0 -8,13 7,13";*/
    //make highlight
    this.highlight = document.createElementNS(this.controller.svgns, "rect");
    /* this.highlight.setAttribute("points", points); */
    // this.highlight.setAttribute("stroke", this.controller.highlightColour);
    this.highlight.setAttribute("stroke-width", "5");
    // this.highlight.setAttribute("fill", "lightGray");
    //this.highlight.setAttribute("fill-opacity", 1);
    //attributes that may change
    d3.select(this.highlight).attr("stroke-opacity", 0);
    //this.upperGroup.appendChild(this.highlight);

    //create label - we will move this svg element around when protein form changes
    this.labelSVG = document.createElementNS(this.controller.svgns, "text");
    this.labelSVG.setAttribute("text-anchor", "end");
    this.labelSVG.setAttribute("fill", "black")
    this.labelSVG.setAttribute("x", 0);
    this.labelSVG.setAttribute("y", 10);
    this.labelSVG.setAttribute("class", "xlv_text proteinLabel");
    this.labelSVG.setAttribute('font-family', 'Arial');
    this.labelSVG.setAttribute('font-size', '16');

    this.labelText = this.name;
    this.labelTextNode = document.createTextNode(this.labelText);
    this.labelSVG.appendChild(this.labelTextNode);
    this.upperGroup.appendChild(this.labelSVG);

    //make blob
    this.outline = document.createElementNS(this.controller.svgns, "rect");
    /* this.outline.setAttribute("points", points); */

    //this.outline.setAttribute("stroke", "black");
    this.outline.setAttribute("rx", this.pad);
    this.outline.setAttribute("ry", this.pad);
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

    this.upperGroup.ontouchstart = function(evt) {
        self.touchStart(evt);
    };
}

Complex.prototype.initMolecule = function() {
    // this.naryLink = naryLink;
    // naryLink.path.setAttribute('fill', );
    // naryLink.path.setAttribute('stroke-linejoin', 'round');
    // naryLink.path.setAttribute('stroke-width', 8);
    this.setForm(this.expanded);
};

Complex.prototype.mouseOver = function(evt) {
    //this.showHighlight(true);
    //doesn't do anything
    /*var p = this.controller.getEventPoint(evt);
    this.controller.model.get("tooltipModel")
        .set("header", CLMSUI.modelUtils.makeTooltipTitle.complex(this))
        .set("contents", CLMSUI.modelUtils.makeTooltipContents.complex(this))
        .set("location", {
            pageX: p.x,
            pageY: p.y
        });*/
};

Complex.prototype.mouseOut = function(evt) {
    //this.showHighlight(false);
    Molecule.prototype.mouseOut.call(this, evt);
};

/*Complex.prototype.getPosition = function() {
    var mapped = this.naryLink.getMappedCoordinates();
    var mc = mapped.length;
    var xSum = 0,
        ySum = 0;
    for (var m = 0; m < mc; m++) {
        xSum += mapped[m][0];
        ySum += mapped[m][1];
    }
    return [xSum / mc, ySum / mc];
};*/

Complex.prototype.setPosition = function(x, y) {
    var x1, y1, x2, y2;
    var z = this.controller.z,
        pad = this.pad;
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
    var pad = 5;
    if (x1) {
        this.outline.setAttribute("x", x1 + pad);
        this.outline.setAttribute("y", y1 + pad - 20);
        this.outline.setAttribute("width", x2 - x1 + (2 * pad));
        this.outline.setAttribute("height", y2 - y1 + (2 * pad) + 20);
    }
    this.labelSVG.setAttribute("transform",
        "translate( " + x1 + " " + (y1 + pad) + ") scale(" + z + ")"); // the hexagon has slightly bigger diameter
    // d3.select(this.labelSVG).attr("transform",
    //     "translate( -" + (20) + " " + Molecule.labelY + ")"); // the hexagon has slightly bigger diameter

};

Complex.prototype.getResidueCoordinates = function(x, y) {
    return this.getPosition()
};

Complex.prototype.setForm = function(form, svgP) {
    // if (!this.busy) {
    //   this.busy = true;
    // var self = this;
    if (form == 0) {
        this.expanded = 0;
        var renderedParticipants = this.renderedParticipants;
        var rpCount = renderedParticipants.length;
        for (var i = 0; i < rpCount; i++) {
            var rp = renderedParticipants[i];
            rp.setAllLinkCoordinates();
            rp.setHidden(true);
            rp.checkLinks();
        }
        // this.naryLink.hide();
        // this.controller.proteinUpper.appendChild(this.upperGroup);
    } else {
        this.expanded = 1;
        // var x1, y1, x2, y2;
        for (var rp of this.renderedParticipants) {
            rp.setAllLinkCoordinates();
            rp.setHidden(rp.participant.hidden);
            rp.checkLinks();
            // var rpBbox = rp.upperGroup.getBBox();
            // console.log("*", rpBbox.x, rpBbox.y);
            // if (!x1 || rpBbox.x + rp.ix < x1) {
            //   x1 = rpBbox.x + rp.ix ;
            // }
            // if (!y1 || rpBbox.y + rp.iy < y1) {
            //   y1 = rpBbox.y + rp.iy ;
            // }
            // if (!x2 || (rpBbox.x + rpBbox.width + rp.ix ) > x2) {
            //   x2 = rpBbox.x + rpBbox.width + rp.ix ;
            // }
            // if (!y2 || (rpBbox.y + rpBbox.height + rp.iy )) {
            //   y2 = rpBbox.y + rpBbox.height + rp.iy ;
            // }
        }
        // this.outline.setAttribute("x", x1);
        // this.outline.setAttribute("y", y1);
        // this.outline.setAttribute("width", x2 - x1);
        // this.outline.setAttribute("height", y2 - y1);

        //   {
        //     x: function(d) {
        //         return d.bounds.x;
        //     },
        //     y: function(d) {
        //         return d.bounds.y;
        //     },
        //     width: function(d) {
        //         return d.bounds.width()
        //     },
        //     height: function(d) {
        //         return d.bounds.height()
        //     }
        // });
        // this.naryLink.show();
        //        this.controller.proteinUpper.removeChild(this.upperGroup);
    }
    // }
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
