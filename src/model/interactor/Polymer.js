//      xiNET Interaction Viewer
//      Copyright 2013 Rappsilber Laboratory
//
//      This product includes software developed at
//      the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//
//      Polymer.js
//
//      authors: Lutz Fischer, Colin Combe

"use strict";

var Molecule = require('./Molecule');
//var Rotator = require('../../controller/Rotator');
var Config = require('../../controller/Config');

Polymer.STICKHEIGHT = 20;//height of stick in pixels
Polymer.MAXSIZE = 0; // residue count of longest sequence
Polymer.UNITS_PER_RESIDUE = 1; //changed during init (calculated on basis of MAXSIZE)
Polymer.transitionTime = 650;

function Polymer() {}

Polymer.prototype = new Molecule();

//sequence = amino acids in UPPERCASE, digits or lowercase can be used for modification info
Polymer.prototype.setSequence = function(sequence){
    //remove modification site info from sequence
    this.sequence = sequence.replace(/[^A-Z]/g, '');
    this.size = this.sequence.length;
}

//by the time we get here all prot's have had their sequence set, so Polymer.MAXSIZE has correct value;
Polymer.prototype.init = function() {
    this.setForm(this.form);
    if (this.selfLink) this.selfLink.initSelfLinkSVG();
    this.setAllLinkCoordinates();
};

Polymer.prototype.getBlobRadius = function() {
    //~ if (this.size) {
        //~ return Math.sqrt(this.size / 2 / Math.PI);
    //~ }
    //~ else
    return 10;
};

Polymer.prototype.showHighlight = function(show) {
    // the only highlighting thing
    if (show === true) {
        //~ this.highlight.setAttribute("stroke", xiNET.highlightColour.toRGB());
        this.highlight.setAttribute("stroke-opacity", "1");
    } else {
        //~ if (this.isSelected == false) {
                this.highlight.setAttribute("stroke-opacity", "0");
        //~ }
        //~ this.highlight.setAttribute("stroke", xiNET.selectedColour.toRGB());
    }
};

Polymer.prototype.setRotation = function(angle) {
    this.rotation = angle % 360;
    if (this.rotation < 0) {
        this.rotation += 360;
    }
    this.upperGroup.setAttribute("transform", "translate(" + this.x + " " + this.y + ")"
            + " scale(" + (this.controller.z) + ") " + "rotate(" + this.rotation + ")");

    var svg = this.controller.svgElement;
    var transformToContainingGroup = this.labelSVG.getAttribute("transform");
    var labelTransform = d3.transform(transformToContainingGroup);
    var sll = this.scaleLabels.length;
    if (this.rotation >= 90 && this.rotation < 270) {
            var k = svg.createSVGMatrix()
                        .translate(Math.abs(labelTransform.translate[0]), -Molecule.labelY)
                        .rotate(180, 0, 0);
            this.labelSVG.transform.baseVal.initialize(svg.createSVGTransformFromMatrix(k));
            if (this.form ===1){
                for (var i = 0; i < sll; i++) {
                       this.scaleLabels[i].setAttribute("transform", "scale(-1,1)");
                    }
                    this.ticks.setAttribute("transform", "scale(1,-1)");
            }
    }
    else {
            var k = svg.createSVGMatrix()
                        .translate(-(Math.abs(labelTransform.translate[0])), Molecule.labelY);
             this.labelSVG.transform.baseVal.initialize(svg.createSVGTransformFromMatrix(k));
            if (this.form ===1){
                for (var j = 0; j < sll; j++) {
                    this.scaleLabels[j].setAttribute("transform", "scale(1,1)");
                }
                this.ticks.setAttribute("transform", "scale(1,1)");
            }
    }
};

Polymer.rotOffset = 20 * 0.7; // see Rotator.js
Polymer.minXDist = 30;
Polymer.prototype.switchStickScale = function(svgP) {
    if (this.isParked) {
        this.toggleParked();
    }
    if (this.form === 0) {
        this.toStick();
    }
    else {
        var pixPerRes = Polymer.UNITS_PER_RESIDUE * this.stickZoom; // / this.controller.z;
        if (pixPerRes > 8) {
            this.stickZoom = 0.5;//this looks like a hack
            this.setPosition(svgP.x, svgP.y);
        }
        else {
            this.stickZoom = this.stickZoom * 3;
            //move stick so same residue is under mouse
            var dx = this.x - (svgP.x);
            var dy = this.y - (svgP.y);
            if (this.rotation === 0 || this.rotation === 180) {
                dy = 0;
            }
            //            console.log(dx + ',' + dy);
            this.setPosition(this.x + (dx * 2), this.y + (dy * 2));
        }
    }
    // when setting the form of prot's,
    // remember following doesn't happen when you just call toStick();
    this.scale();
    this.setAllLinkCoordinates();
};

Polymer.prototype.scale = function() {
    var protLength = (this.size) * Polymer.UNITS_PER_RESIDUE * this.stickZoom;
    if (this.form === 1) {
        var labelTransform = d3.transform(this.labelSVG.getAttribute("transform"));
        var k = this.controller.svgElement.createSVGMatrix().rotate(labelTransform.rotate)
            .translate((-(((this.size / 2) * Polymer.UNITS_PER_RESIDUE * this.stickZoom) + 10)), Molecule.labelY);//.scale(z).translate(-c.x, -c.y);
        this.labelSVG.transform.baseVal.initialize(this.controller.svgElement.createSVGTransformFromMatrix(k));

        if (this.annotations){
            var ca = this.annotations.length;
            for (var a = 0; a < ca; a++){
                var anno = this.annotations[a];
                anno.pieSlice.setAttribute("d", this.getAnnotationRectPath(anno));
            }
        }

        d3.select(this.background)
            .attr("width", protLength)
            .attr("x", this.getResXwithStickZoom(0.5));

        d3.select(this.outline)
            .attr("width", protLength)
            .attr("x", this.getResXwithStickZoom(0.5));

        d3.select(this.highlight)
            .attr("width", protLength + 5)
            .attr("x", this.getResXwithStickZoom(0.5) - 2.5);

    /*  //place rotators
        this.lowerRotator.svg.setAttribute("transform",
            "translate(" + (this.getResXwithStickZoom(0.5) - Polymer.rotOffset) + " 0)");
        this.upperRotator.svg.setAttribute("transform",
            "translate(" + (this.getResXwithStickZoom(this.size  - 0 + 0.5) + Polymer.rotOffset) + " 0)");*/

   /*       //linker modified peptides
        if (this.linkerModifications != null) {
            var mods = this.linkerModifications.residueLinks.values();
            var iModCount = mods.length;
            for (var m = 0; m < iModCount; m++) {
                var mod = mods[m];
                if (mod.shown) {
                   var path = this.getResidueLinkPath(mod);
                   d3.select(mod.line).attr("d", path);
                   d3.select(mod.highlightLine).attr("d", path);
                }
            }
        }*/
        this.setScaleGroup();
        this.setRotation(this.rotation); // places ticks and rotators
    }
};

Polymer.prototype.setScaleGroup = function() {
    this.controller.emptyElement(this.ticks);
    this.upperGroup.appendChild(this.ticks);//will do nothing if this.ticks already appended to this.uppergroup

    this.scaleLabels = new Array();
    var ScaleMajTick = 100;
    var ScaleTicksPerLabel = 2; // varies with scale?
    var pixPerRes = Polymer.UNITS_PER_RESIDUE * this.stickZoom; // / this.controller.z;
    var tick = -1;
    var lastTickX = this.getResXwithStickZoom(this.size);

    for (var res = 1; res <= this.size; res++) {
        if (res === 1 ||
                ((res % 100 === 0) && (200 * pixPerRes > Polymer.minXDist)) ||
                ((res % 10 === 0) && (20 * pixPerRes > Polymer.minXDist))
                ) {
            var tx = this.getResXwithStickZoom(res);
            if (pixPerRes >= 8 || res !== 1) {
                tickAt(this, tx);
            }
            tick = (tick + 1) % ScaleTicksPerLabel;
            // does this one get a label?
            if (tick === 0) {// && tx > 20) {
                if ((tx + Polymer.minXDist) < lastTickX) {
                    scaleLabelAt(this, res, tx);
                }
            }
        }
        if (pixPerRes > 8) {
            var seqLabelGroup = document.createElementNS(Config.svgns, "g");
            seqLabelGroup.setAttribute("transform", "translate(" + this.getResXwithStickZoom(res) + " " + 0 + ")");
            var seqLabel = document.createElementNS(Config.svgns, "text");
            seqLabel.setAttribute('font-family', "'Courier New', monospace");
            seqLabel.setAttribute('font-size', '10px');
            seqLabel.setAttribute("text-anchor", "middle");
            seqLabel.setAttribute("x", 0);//Polymer.getResXwithStickZoom(res));
            seqLabel.setAttribute("y", 3);
            seqLabel.appendChild(document.createTextNode(this.sequence[res - 1]));
            seqLabelGroup.appendChild(seqLabel);
            this.scaleLabels.push(seqLabel);
            this.ticks.appendChild(seqLabelGroup);
        }
    }
    scaleLabelAt(this, this.size, lastTickX);
    if (pixPerRes > 8) {
        tickAt(this, lastTickX);
    }

    function scaleLabelAt(self, text, tickX) {
        var scaleLabelGroup = document.createElementNS(Config.svgns, "g");
        scaleLabelGroup.setAttribute("transform", "translate(" + tickX + " " + 0 + ")");
        var scaleLabel = document.createElementNS(Config.svgns, "text");
        scaleLabel.setAttribute("class", "Polymer xlv_text PolymerLabel");
        scaleLabel.setAttribute('font-family', "'Courier New', monospace");
        scaleLabel.setAttribute('font-size', '14');
        scaleLabel.setAttribute("text-anchor", "middle");
        scaleLabel.setAttribute("x", 0);
        scaleLabel.setAttribute("y", Polymer.STICKHEIGHT + 4);
        scaleLabel.appendChild(document.createTextNode(text));
        scaleLabelGroup.appendChild(scaleLabel);
        self.scaleLabels.push(scaleLabel);
        self.ticks.appendChild(scaleLabelGroup);
    }

    function tickAt(self, tickX) {
        var tick = document.createElementNS(Config.svgns, "line");
        tick.setAttribute("x1", tickX);
        tick.setAttribute("y1", 5);
        tick.setAttribute("x2", tickX);
        tick.setAttribute("y2", 10);
        tick.setAttribute("stroke", "black");
        self.ticks.appendChild(tick);
    }
};

Polymer.prototype.setForm = function(form, svgP) {
    if (this.busy !== true) {
        if (form == 1) {
            this.toStick();
        }
        else {
            this.toCircle(svgP);
            var r = this.getBlobRadius();
            var self = this;
            d3.select(this.background).transition()
                .attr("x", -r).attr("y", -r)
                .attr("width", r * 2).attr("height", r * 2)
                .attr("rx", r).attr("ry", r)
                .duration(Polymer.transitionTime);
            d3.select(this.outline).transition()
                .attr("x", -r).attr("y", -r)
                .attr("width", r * 2).attr("height", r * 2)
                .attr("rx", r).attr("ry", r)
                .duration(Polymer.transitionTime);
            d3.select(this.annotationsSvgGroup).transition()
                .attr("transform", "scale(1, 1)")
                .duration(Polymer.transitionTime);
            d3.select(this.highlight).transition()
                .attr("x", -r).attr("y", -r)
                .attr("width", r * 2).attr("height", r * 2)
                .attr("rx", r).attr("ry", r)
                .duration(Polymer.transitionTime);
        }
    }
};

Polymer.prototype.toCircle = function(svgP) {
    //svgP = null;// temp hack - you can uncomment this is you experience things 'flying off screen'
    this.busy = true;

  var childNodes = []
  for (var i = 0; i < this.upperGroup.childNodes.length; i++) {
    childNodes[i] = this.upperGroup.childNodes[i];
  }

  /*
  if (childNodes.indexOf(this.lowerRotator.svg) > -1) this.upperGroup.removeChild(this.lowerRotator.svg);
  if (childNodes.indexOf(this.upperRotator.svg) > -1) this.upperGroup.removeChild(this.upperRotator.svg);
  */

  var protLength = this.size * Polymer.UNITS_PER_RESIDUE * this.stickZoom;
    var r = this.getBlobRadius();

    var stickZoomInterpol = d3.interpolate(this.stickZoom, 0);
    var rotationInterpol = d3.interpolate((this.rotation > 180)? this.rotation - 360 : this.rotation, 0);
    var labelTransform = d3.transform(this.labelSVG.getAttribute("transform"));
    var labelStartPoint = labelTransform.translate[0];//-(((this.size / 2) * Polymer.UNITS_PER_RESIDUE * this.stickZoom) + 10);
    var labelTranslateInterpol = d3.interpolate(labelStartPoint, -(r + 5));

    var xInterpol = null, yInterpol = null;
    if (typeof svgP !== 'undefined' && svgP !== null) {
        xInterpol = d3.interpolate(this.x, svgP.x);
        yInterpol = d3.interpolate(this.y, svgP.y);
    }

    var self = this;
  d3.select(this.ticks).transition().attr("opacity", 0).duration(Polymer.transitionTime / 4)
                .each("end",
                    function () {
                        if (childNodes.indexOf(self.ticks) > -1) self.upperGroup.removeChild(self.ticks);
                    }
                );

    d3.select(this.highlight).transition()
        .attr("width", (r * 2) + 5).attr("height", (r * 2) + 5)
        .attr("x", -r - 2.5).attr("y", -r - 2.5)
        .attr("rx", r + 2.5).attr("ry", r + 2.5)
        .duration(Polymer.transitionTime);

    //linker modified peptides
    /*if (this.linkerModifications != null) {
        var mods = this.linkerModifications.residueLinks.values();
        var iModCount = mods.length;
        for (var m = 0; m < iModCount; m++) {
            var mod = mods[m];
            if (mod.shown) {
                var selectLine = d3.select(mod.line);
                selectLine.attr("fill", "none");
                selectLine.attr("d", "M 0,0 L 0,0");
            }
        }
    }*/

    var self = this;
    if (this.annotations) {
        var annots = this.annotations;
        var ca = annots.length;
        for (var a = 0; a < ca; a++) {
            var anno = annots[a];
            var pieSlice = anno.pieSlice;
            d3.select(pieSlice).transition().attr("d", this.getAnnotationPieSliceApproximatePath(anno))
                .duration(Polymer.transitionTime).each("end",
                    function () {
                        for (var b = 0; b < ca; b++) {
                            var annoB = self.annotations[b];
                            if (this === annoB.pieSlice){
                                d3.select(this).attr("d", self.getAnnotationPieSliceArcPath(annoB));
                            }
                        }
                    }
                );
        }
    }

    var originalStickZoom = this.stickZoom;
    var originalRotation = this.rotation;
    var cubicInOut = d3.ease('cubic-in-out');
    d3.timer(function(elapsed) {
      return update(elapsed / Polymer.transitionTime);
    });

    function update(interp) {
        var labelTransform = d3.transform(self.labelSVG.getAttribute("transform"));
        var k = self.controller.svgElement.createSVGMatrix().rotate(labelTransform.rotate).translate(labelTranslateInterpol(cubicInOut(interp)), Molecule.labelY);//.scale(z).translate(-c.x, -c.y);
        self.labelSVG.transform.baseVal.initialize(self.controller.svgElement.createSVGTransformFromMatrix(k));
        //~
        if (xInterpol !== null){
            self.setPosition(xInterpol(cubicInOut(interp)), yInterpol(cubicInOut(interp)));
        }

        var rot = rotationInterpol(cubicInOut(interp));
        self.stickZoom = stickZoomInterpol(cubicInOut(interp))
        self.setRotation(rot);
        self.setAllLinkCoordinates();

        if (interp ===  1){ // finished - tidy up
            self.form = 0;
            self.checkLinks();
            self.stickZoom = originalStickZoom;
            self.rotation = originalRotation;
            self.busy = false;
            return true;
        } else if (interp > 1){
            return update(1);
        } else {
            return false;
        }
    }
};

Polymer.prototype.toStick = function() {
    this.busy = true;
    this.form = 1;

    //place rotators
    /*this.upperGroup.appendChild(this.lowerRotator.svg);
    this.upperGroup.appendChild(this.upperRotator.svg);
    this.lowerRotator.svg.setAttribute("transform",
        "translate(" + (this.getResXwithStickZoom(0.5) - Polymer.rotOffset) + " 0)");
    this.upperRotator.svg.setAttribute("transform",
        "translate(" + (this.getResXwithStickZoom(this.size - 0 + 0.5) + Polymer.rotOffset) + " 0)");*/

    //remove prot-prot links - would it be better if checkLinks did this? - think not
    var c = this.binaryLinks.values().length;
    for (var l = 0; l < c; l++) {
        var link = this.binaryLinks.values()[l];
        //out with the old
        if (link.shown) {
            link.hide();
        }
    }

    var protLength = this.size * Polymer.UNITS_PER_RESIDUE * this.stickZoom;
    var r = this.getBlobRadius();

    var lengthInterpol = d3.interpolate((2 * r), protLength);
    var stickZoomInterpol = d3.interpolate(0, this.stickZoom);
    var rotationInterpol = d3.interpolate(0, (this.rotation > 180)? this.rotation - 360 : this.rotation);
    var labelTranslateInterpol = d3.interpolate(-(r + 5), -(((this.size / 2) * Polymer.UNITS_PER_RESIDUE * this.stickZoom) + 10));

    var origStickZoom = this.stickZoom;
    this.stickZoom = 0;
    this.checkLinks(this.binaryLinks);
    this.checkLinks(this.selfLink);
    this.checkLinks(this.sequenceLinks);
    this.stickZoom = origStickZoom;

    d3.select(this.background).transition()//.attr("stroke-opacity", 1)
        .attr("height", Polymer.STICKHEIGHT)
        .attr("y",  -Polymer.STICKHEIGHT / 2)
        .attr("rx", 0).attr("ry", 0)
        .duration(Polymer.transitionTime);

    d3.select(this.outline).transition()//.attr("stroke-opacity", 1)
        .attr("height", Polymer.STICKHEIGHT)
        .attr("y",  -Polymer.STICKHEIGHT / 2)
        .attr("rx", 0).attr("ry", 0)
        .duration(Polymer.transitionTime);

    d3.select(this.highlight).transition()
        .attr("width", protLength + 5).attr("height", Polymer.STICKHEIGHT + 5)
        .attr("x", this.getResXwithStickZoom(0.5) - 2.5).attr("y", (-Polymer.STICKHEIGHT / 2) - 2.5)
        .attr("rx", 0).attr("ry", 0)
        .duration(Polymer.transitionTime);
    //linker modified peptides
    /*if (this.linkerModifications != null) {
        var mods = this.linkerModifications.residueLinks.values();
        var iModCount = mods.length;
        for (var m = 0; m < iModCount; m++) {
            var mod = mods[m];
            if (mod.shown) {
                var path = this.getResidueLinkPath(mod);
                d3.select(mod.line).attr("d","M 0,0 L 0,0 L 0,0 L 0,0");
                d3.select(mod.line).transition().attr("d",path)
                    .duration(Polymer.transitionTime);
                d3.select(mod.highlightLine).attr("d","M 0,0 L 0,0");
                d3.select(mod.highlightLine).transition().attr("d",path)
                    .duration(Polymer.transitionTime);
            }
        }
    }*/
    if (this.annotations) {
        var annots = this.annotations;
        var ca = annots.length;
        for (var a = 0; a < ca; a++) {
            var anno = annots[a];
            var pieSlice = anno.pieSlice;
            pieSlice.setAttribute("d", this.getAnnotationPieSliceApproximatePath(anno));
            d3.select(pieSlice).transition().attr("d", this.getAnnotationRectPath(anno))
                .duration(Polymer.transitionTime);
        }
    }

    var self = this;
    var cubicInOut = d3.ease('cubic-in-out');
    d3.timer(function(elapsed) {
      return update(elapsed / Polymer.transitionTime);
    });

    function update(interp) {
        var labelTransform = d3.transform(self.labelSVG.getAttribute("transform"));
        var k = self.controller.svgElement.createSVGMatrix().rotate(labelTransform.rotate).translate(labelTranslateInterpol(cubicInOut(interp)), Molecule.labelY);//.scale(z).translate(-c.x, -c.y);
        self.labelSVG.transform.baseVal.initialize(self.controller.svgElement.createSVGTransformFromMatrix(k));

        var rot = rotationInterpol(cubicInOut(interp));
        self.setRotation(rot);

        var currentLength = lengthInterpol(cubicInOut(interp));
        d3.select(self.highlight).attr("width", currentLength).attr("x", - (currentLength / 2) + (0.5 * Polymer.UNITS_PER_RESIDUE * self.stickZoom));
        d3.select(self.outline).attr("width", currentLength).attr("x", - (currentLength / 2) + (0.5 * Polymer.UNITS_PER_RESIDUE * self.stickZoom));
        //d3.select(self.annotationsSvgGroup).attr("transform", "scale(" + (self.stickZoom) + ", 1)");
        d3.select(self.background).attr("width", currentLength).attr("x", - (currentLength / 2) + (0.5 * Polymer.UNITS_PER_RESIDUE * self.stickZoom));
        self.stickZoom = stickZoomInterpol(cubicInOut(interp))
        self.setAllLinkCoordinates();

        if (interp ===  1){ // finished - tidy up
            self.busy = false;
            return true;
        } else if (interp > 1){
            return update(1);
        } else {
            return false;
        }
    }

    d3.select(this.ticks).attr("opacity", 0);
    this.setScaleGroup();
    d3.select(this.ticks).transition().attr("opacity", 1)
        .delay(Polymer.transitionTime * 0.8).duration(Polymer.transitionTime / 2);
};

Polymer.prototype.getResXwithStickZoom = function(r) {
    if (isNaN(r) || r === '?' || r === 'n') {
        return ((0 - (this.size/2)) * Polymer.UNITS_PER_RESIDUE * this.stickZoom) - 8;// ;
    }
    return (r - (this.size/2)) * Polymer.UNITS_PER_RESIDUE * this.stickZoom;
 };

//calculate the  coordinates of a residue (relative to this.controller.container)
Polymer.prototype.getResidueCoordinates = function(r, yOff) {
    if (Polymer.UNITS_PER_RESIDUE === undefined)
        alert("Error: Polymer.UNITS_PER_RESIDUE is undefined");
    if (r === undefined)
        alert("Error: residue number is undefined");
    var x = this.getResXwithStickZoom(r * 1) * this.controller.z;
    var y = 0;
    if (x !== 0) {
        var l = Math.abs(x);
        var a = Math.acos(x / l);
        var rotRad = (this.rotation / 360) * Math.PI * 2;
        x = l * Math.cos(rotRad + a);
        y = l * Math.sin(rotRad + a);
        if (typeof yOff !== 'undefined') {
            x += yOff * this.controller.z * Math.cos(rotRad + (Math.PI / 2));
            y += yOff * this.controller.z * Math.sin(rotRad + (Math.PI / 2));
        }
    }
    else {
        y = yOff;
    }
    x = x + this.x;
    y = y + this.y;
    return [x, y];
};

Polymer.stepsInArc = 5;

Polymer.prototype.getAnnotationPieSliceArcPath = function(annotation) {
	//console.log(">>" + annotation.begin);
    var startAngle = ((annotation.begin - 1) / this.size) * 360;
    var endAngle = ((annotation.end - 1) / this.size) * 360;
    var radius = this.getBlobRadius() - 2;
    var arcStart = Molecule.trig(radius, startAngle - 90);
    var arcEnd = Molecule.trig(radius, endAngle - 90);
    var largeArch = 0;
    if ((endAngle - startAngle) > 180 || (endAngle == startAngle)) {
        largeArch = 1;
    }
    return "M0,0 L" + arcStart.x + "," + arcStart.y + " A" + radius + ","
        + radius + " 0 " + largeArch + " 1 " + arcEnd.x + "," + arcEnd.y + " Z";
};

Polymer.prototype.getAnnotationPieSliceApproximatePath = function(annotation) {
    //approximate pie slice
    var startAngle = ((annotation.begin - 1) / this.size) * 360;
    var endAngle = ((annotation.end) / this.size) * 360;
    var pieRadius = this.getBlobRadius() - 2;
    var arcStart = Molecule.trig(pieRadius, startAngle - 90);
    var arcEnd = Molecule.trig(pieRadius, endAngle - 90);
    var approximatePiePath = "M 0,0";
    var stepsInArc = 5;
    for (var sia = 0; sia <= Polymer.stepsInArc; sia++) {
        var angle = startAngle + ((endAngle - startAngle) * (sia / stepsInArc));
        var siaCoord = Molecule.trig(pieRadius, angle - 90);
        approximatePiePath += " L " + siaCoord.x + "," + siaCoord.y;
    }
    approximatePiePath += " L " + 0 + "," + 0;
    approximatePiePath += "  Z";
    return approximatePiePath;
};

Polymer.prototype.getAnnotationRectPath = function(annotation) {
    //domain as rectangle path
    var bottom = Polymer.STICKHEIGHT / 2, top = -Polymer.STICKHEIGHT / 2;
    var annotX = this.getResXwithStickZoom(annotation.begin - 0.5);
    var annotSize = (1 + (annotation.end - annotation.begin));
    var annotLength = annotSize * Polymer.UNITS_PER_RESIDUE * this.stickZoom;
    var rectPath = "M " + annotX + "," + bottom;
    for (var sia = 0; sia <= Polymer.stepsInArc; sia++) {
        var step = annotX + (annotLength * (sia / Polymer.stepsInArc));
        rectPath += " L " + step + "," + top;
    }
    rectPath +=  " L " + (annotX  + annotLength)+ "," + bottom
        + " Z";
    return rectPath;
};

module.exports = Polymer;
