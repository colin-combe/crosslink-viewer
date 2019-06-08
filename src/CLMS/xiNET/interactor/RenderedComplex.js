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

function Complex(group, xlvController) {
    this.id = group.id;
    this.name = group.name;
    this.participant = group;
    this.crosslinkViewer = xlvController;
    //links
    this.naryLinks = d3.map();
    this.binaryLinks = d3.map();
    this.selfLink = null;
    this.sequenceLinks = d3.map();
    this.form = 0;
    this.type = 'complex';

    this.size = 10; //hack, layout is using this

    /*
     * Upper group
     * svg group for elements that appear above links
     */

    this.upperGroup = document.createElementNS(this.crosslinkViewer.svgns, "g");
    //~ this.upperGroup.setAttribute("class", "protein upperGroup");

    //for polygon
    var points = "15,0 8,-13 -7,-13 -15,0 -8,13 7,13";
    //make highlight
    this.highlight = document.createElementNS(this.crosslinkViewer.svgns, "polygon");
    this.highlight.setAttribute("points", points);
    // this.highlight.setAttribute("stroke", this.controller.highlightColour);
    this.highlight.setAttribute("stroke-width", "5");
    this.highlight.setAttribute("fill", "none");
    //this.highlight.setAttribute("fill-opacity", 1);
    //attributes that may change
    d3.select(this.highlight).attr("stroke-opacity", 0);
    this.upperGroup.appendChild(this.highlight);

    //create label - we will move this svg element around when protein form changes
    this.labelSVG = document.createElementNS(this.crosslinkViewer.svgns, "text");
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
    d3.select(this.labelSVG).attr("transform",
        "translate( -" + (20) + " " + Molecule.labelY + ")"); // the hexagon has slightly bigger diameter
    this.upperGroup.appendChild(this.labelSVG);

    //make blob
    this.outline = document.createElementNS(this.crosslinkViewer.svgns, "polygon");
    this.outline.setAttribute("points", points);

    this.outline.setAttribute("stroke", "black");
    this.outline.setAttribute("stroke-width", "1");
    d3.select(this.outline).attr("stroke-opacity", 1).attr("fill-opacity", 1)
        .attr("fill", "#ffffff");
    //append outline
    this.upperGroup.appendChild(this.outline);

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


    // Object.defineProperty(this, "x", {
    //     get: function _x() {
    //         var mapped = this.naryLink.getMappedCoordinates();
    //         var mc = mapped.length;
    //         var xSum = 0;
    //         for (var m = 0; m < mc; m++) {
    //             xSum += mapped[m][0];
    //         }
    //         return xSum / mc;
    //     }
    // });
    //
    // Object.defineProperty(this, "y", {
    //     get: function _y() {
    //         var mapped = this.naryLink.getMappedCoordinates();
    //         var mc = mapped.length;
    //         var ySum = 0;
    //         for (var m = 0; m < mc; m++) {
    //             ySum += mapped[m][1];
    //         }
    //         return ySum / mc;
    //     }
    // });

    this.isSelected = false;
}

Complex.prototype.initMolecule = function(naryLink) {
    this.naryLink = naryLink;
    naryLink.path.setAttribute('stroke', 'black');
    naryLink.path.setAttribute('stroke-linejoin', 'round');
    naryLink.path.setAttribute('stroke-width', 8);
    this.setForm(this.form);
    // var pos = this.getPosition();; //todo tidy up
    // this.setPosition(pos[0], pos[1]);
};

Complex.prototype.mouseOver = function(evt) {
    this.showHighlight(true);
    Molecule.prototype.mouseOver.call(this, evt);
};

Complex.prototype.mouseOut = function(evt) {
    this.showHighlight(false);
    Molecule.prototype.mouseOut.call(this, evt);
};

Complex.prototype.getPosition = function() {
    var mapped = this.naryLink.getMappedCoordinates();
    var mc = mapped.length;
    var xSum = 0,
        ySum = 0;
    for (var m = 0; m < mc; m++) {
        xSum += mapped[m][0];
        ySum += mapped[m][1];
    }
    return [xSum / mc, ySum / mc];
};

// Complex.prototype.setPosition = function(x, y) {};
Complex.prototype.getResidueCoordinates = function(x, y) {
    return this.getPosition()
};

Complex.prototype.setForm = function(form, svgP) {
    if (form == 0) {
        this.form = 0;
        var renderedParticipants = this.naryLink.renderedParticipants;
        var rpCount = renderedParticipants.length;
        for (var i = 0; i < rpCount; i++) {
            var rp = renderedParticipants[i];
            rp.setAllLinkCoordinates();
            rp.setHidden(true);
            rp.checkLinks();
        }
        this.naryLink.hide();
        this.crosslinkViewer.proteinUpper.appendChild(this.upperGroup);
    } else {
        this.form = 1;
        var renderedParticipants = this.naryLink.renderedParticipants;
        var rpCount = renderedParticipants.length;
        for (var i = 0; i < rpCount; i++) {
            var rp = renderedParticipants[i];
            rp.setAllLinkCoordinates();
            rp.setHidden(false);
            rp.checkLinks();
        }
        this.naryLink.show();
        this.crosslinkViewer.proteinUpper.removeChild(this.upperGroup);
    }
};

// update all lines (e.g after a move)
Complex.prototype.setAllLinkCoordinates = function() {
    var renderedParticipants = this.naryLink.renderedParticipants;
    var rpCount = renderedParticipants.length;
    for (var i = 0; i < rpCount; i++) {
        var rp = renderedParticipants[i];
        rp.setAllLinkCoordinates();
    }
};
