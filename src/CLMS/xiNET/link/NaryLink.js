//      xiNET interaction viewer
//      Copyright 2014 Rappsilber Laboratory
//
//      This product includes software developed at
//      the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//
//      author: Colin Combe, Josh Heimbach
//
//		NaryLink.js
//		graphically represents n-ary interactions


NaryLink.naryColours = d3.scale.ordinal().range(colorbrewer.Paired[6]); //d3.scale.category20c();//d3.scale.ordinal().range(colorbrewer.Paired[12]);//
NaryLink.orbitNodeCount = 16;
NaryLink.orbitRadius = 25;

NaryLink.prototype = new Link();

function NaryLink(group, xlvController) {
    this.id = group.id;
    this.name = group.name;
    this.evidences = d3.map();
    this.renderedParticipants = new Array();
    //this.leaves = this.renderedParticipants; // temp (?) for cola
    this.sequenceLinks = d3.map();
    this.binaryLinks = d3.map();
    this.unaryLinks = d3.map();
    this.controller = xlvController;
    this.tooltip = this.id;
    //used to avoid some unnecessary manipulation of DOM
    this.initSVG();
    this.type = "nary";
    // this.x = "x"; //hack
}

NaryLink.prototype.initSVG = function() {
    this.path = document.createElementNS(this.controller.svgns, "path");
    //~ if (this.controller.expand === false){
    this.path.setAttribute('fill', NaryLink.naryColours(this.id));
    //~ }
    //~ else {
    //this.path.setAttribute('fill', '#70BDBD');
    //~ }
    this.path.setAttribute('fill-opacity', 0.3);
    this.path.setAttribute("stroke-dasharray", (8) + ", " + (8));
    this.path.setAttribute("stroke-width", "30");
    this.controller.groupsSVG.appendChild(this.path);

    //set the events for it
    var self = this;
    this.path.onmousedown = function(evt) {
        self.mouseDown(evt);
    };
    this.path.onmouseup = function(evt) {
        self.controller.preventDefaultsAndStopPropagation(evt);
        self.controller.dragElement = null;
        self.controller.dragStart = null;
    };
    this.path.onmouseover = function(evt) {
        self.mouseOver(evt);
    };
    this.path.onmouseout = function(evt) {
        self.mouseOut(evt);
    };
    this.path.ontouchstart = function(evt) {
        self.touchStart(evt);
    };
};

// event handler for starting dragging or rotation (or flipping internal links)
NaryLink.prototype.mouseDown = function(evt) {
    this.controller.preventDefaultsAndStopPropagation(evt); //see MouseEvents.js
    //if a force layout exists then stop it
    if (this.controller.d3cola) {
        this.controller.d3cola.stop();
    }
    this.controller.dragElement = this;
    //store start location
    this.controller.dragStart = evt; //this.controller.mouseToSVG(p.x, p.y);
    var add = evt.ctrlKey || evt.shiftKey;
    var participants = [];
    for (var rp of this.renderedParticipants) {
        rp.participant.manuallyHidden = false;
        participants.push(rp.participant);
    }

    this.controller.model.get("filterModel").trigger("change");
    this.controller.model.setSelectedProteins(participants, add);

    return false;
}

NaryLink.prototype.showHighlight = function(show) {
    this.highlightMolecules(show);
};

NaryLink.prototype.check = function() {
    for (var rp of this.renderedParticipants) {
        if (rp.hidden == false) {
            this.show();
            return true;
        }
    }
    this.hide();
    return false;
};

NaryLink.prototype.show = function() {
    // this.path.setAttribute("stroke-width", this.controller.z * 1);
    this.setLinkCoordinates();
    d3.select(this.path).style("visibility", null);
};

NaryLink.prototype.hide = function() {
    d3.select(this.path).style("visibility", "hidden");
    //    this.controller.groupsSVG.removeChild(this.path);
};

NaryLink.prototype.dashedLine = function(dash) {
    if (dash) {
        // if (this.renderedFromProtein === this.renderedToProtein) {
        //     this.line.setAttribute("stroke-dasharray", (4) + ", " + (4));
        // } else {
        //     this.line.setAttribute("stroke-dasharray", (4 * this.crosslinkViewer.z) + ", " + (4 * this.crosslinkViewer.z));
        // }
            this.path.setAttribute("stroke", NaryLink.naryColours(this.id));
    } else {
        this.path.removeAttribute("stroke", "none");
    }

};

NaryLink.prototype.setLinkCoordinates = function() {
    // Uses d3.geom.hull to calculate a bounding path around an array of vertices
    var calculateHullPath = function(values) {
        var calced = d3.geom.hull(values);
        // self.hull = calced;//hack?
        // if (calced.length == 0) { //means all participants hidden
        //   console.log("!");
        // }
        return "M" + calced.join("L") + "Z";
    };
    var self = this; // TODO: - tidy hack above?
    var mapped = NaryLink.orbitNodes(this.getMappedCoordinates());
    var hullValues = calculateHullPath(mapped);
    if (hullValues != "MZ") {
        this.path.setAttribute('d', hullValues);
    }
    if (this.complex) {
        this.complex.setAllLinkCoordinates();
    }
};

NaryLink.prototype.getMappedCoordinates = function() {
    var renderedParticipants = this.renderedParticipants;
    var mapped = new Array();
    var rpCount = renderedParticipants.length;
    for (var i = 0; i < rpCount; i++) {
        var rp = renderedParticipants[i];
        if (rp.hidden == false) {
            if (rp.type == 'complex') {
                mapped = mapped.concat(NaryLink.orbitNodes(rp.naryLink.getMappedCoordinates()));
            } else if (rpexpanded == true) {
                var start = rp.getResidueCoordinates(0);
                var end = rp.getResidueCoordinates(rp.participant.size);
                if (!isNaN(start[0]) && !isNaN(start[1]) &&
                    !isNaN(end[0]) && !isNaN(end[1])) {
                    mapped.push(start);
                    mapped.push(end);
                } else {
                    mapped.push(rp.getPosition());
                }
            } else {
                mapped.push(rp.getPosition());
            }
        }
    }
    return mapped;
}

//'orbit' nodes - several nodes around interactor positions to give margin
NaryLink.orbitNodes = function(mapped) {
    var orbitNodes = new Array();
    var mc = mapped.length;
    for (var mi = 0; mi < mc; mi++) {
        var m = mapped[mi];
        for (var o = 0; o < NaryLink.orbitNodeCount; o++) {
            var angle = (360 / NaryLink.orbitNodeCount) * o;
            var p = [m[0] + NaryLink.orbitRadius, m[1]];
            orbitNodes.push(Molecule.rotatePointAboutPoint(p, m, angle));
        }
    }
    return orbitNodes;
}
