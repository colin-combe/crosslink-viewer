//  xiNET cross-link viewer
//  Copyright 2013 Rappsilber Laboratory, University of Edinburgh
//
//  authors: Lutz Fischer, Colin Combe
//
//  CLMS.xiNET.RenderedProtein.js

CLMS.xiNET.RenderedProtein = function(participant, crosslinkViewer) {
    this.participant = participant;
    this.crosslinkViewer = crosslinkViewer;

    this.renderedP_PLinks = [];
    this.renderedCrossLinks = [];

    this.naryLinks = d3.map();

    // layout info
    this.x = 100;
    this.y = 40;
    this.rotation = 0;
    this.previousRotation = this.rotation;
    this.stickZoom = 0.5;
    this.form = null; // 0 = blob, 1 = stick
    this.isFlipped = false;
    //rendered-protein state
    this.isSelected = false;
    this.isHighlighted = false; // mjg apr 18
    //rotators
    this.lowerRotator = new CLMS.xiNET.Rotator(this, 0, this.crosslinkViewer);
    this.upperRotator = new CLMS.xiNET.Rotator(this, 1, this.crosslinkViewer);

    /*
     * Lower group
     * svg group for elements that appear underneath links
     */
    this.lowerGroup = document.createElementNS(this.crosslinkViewer.svgns, "g");
    this.lowerGroup.setAttribute("class", "protein lowerGroup");

    //make highlight
    this.highlight = document.createElementNS(this.crosslinkViewer.svgns, "rect");
    this.highlight.setAttribute("class", "highlightedProtein");
    this.highlight.setAttribute("stroke-width", "5");
    this.highlight.setAttribute("fill", "none");
    this.lowerGroup.appendChild(this.highlight);

    //domains in rectangle form (shown underneath links)
    this.rectDomains = document.createElementNS(this.crosslinkViewer.svgns, "g");
    this.rectDomains.setAttribute("opacity", "0");
    this.lowerGroup.appendChild(this.rectDomains);

    this.peptides = document.createElementNS(this.crosslinkViewer.svgns, "g");
    this.lowerGroup.appendChild(this.peptides);

    /*
     * Upper group
     * svg group for elements that appear above links
     */
    this.upperGroup = document.createElementNS(this.crosslinkViewer.svgns, "g");
    this.upperGroup.setAttribute("class", "protein upperGroup");

    //svg groups for self links
    this.selfLinksHighlights = document.createElementNS(this.crosslinkViewer.svgns, "g");
    this.selfLinks = document.createElementNS(this.crosslinkViewer.svgns, "g");
    this.upperGroup.appendChild(this.selfLinksHighlights);
    this.upperGroup.appendChild(this.selfLinks);

    //create label - we will move this svg element around when protein form changes
    this.labelSVG = document.createElementNS(this.crosslinkViewer.svgns, "text");
    this.labelSVG.setAttribute("text-anchor", "end");
    this.labelSVG.setAttribute("fill", this.participant.is_decoy ? "#FB8072" : "black")
    this.labelSVG.setAttribute("x", 0);
    this.labelSVG.setAttribute("y", 10);
    this.labelSVG.setAttribute("class", "protein xlv_text proteinLabel");
    //choose label text
    this.labelText = this.participant.name;
    if (this.labelText.length > 25) {
        this.labelText = this.labelText.substr(0, 16) + "...";
    }
    this.labelTextNode = document.createTextNode(this.labelText);
    this.labelSVG.appendChild(this.labelTextNode);
    d3.select(this.labelSVG).attr("transform",
        "translate( -" + (5) + " " + CLMS.xiNET.RenderedProtein.labelY + ") rotate(0) scale(1, 1)");
    this.upperGroup.appendChild(this.labelSVG);

    //ticks (and animo acid letters)
    this.ticks = document.createElementNS(this.crosslinkViewer.svgns, "g");

    //make outline
    //http://stackoverflow.com/questions/17437408/how-do-i-change-a-circle-to-a-square-using-d3
    this.outline = document.createElementNS(this.crosslinkViewer.svgns, "rect");
    this.outline.setAttribute("stroke", "black");
    this.outline.setAttribute("stroke-width", "1");
    this.outline.setAttribute("fill", "#EEEEEE");
    this.upperGroup.appendChild(this.outline);
    this.upperGroup.appendChild(this.ticks);
    //domains as pie slices - shown on top of everything
    this.circDomains = document.createElementNS(this.crosslinkViewer.svgns, "g");
    this.circDomains.setAttribute("opacity", 1);
    this.upperGroup.appendChild(this.circDomains);

    this.scaleLabels = [];

    // events
    var self = this;
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
    //going to use right click ourselves
    this.upperGroup.oncontextmenu = function(evt) {
        if (evt.preventDefault) {
            evt.preventDefault();
        }
        if (evt.stopPropogation) {
            evt.stopPropagation();
        }
        evt.returnValue = false;
        return false;
    };

    this.busy = false;
    this.stickZoom = this.crosslinkViewer.defaultBarScale;

    Object.defineProperty(this, "width", {
        get: function width() {
            return this.upperGroup.getBBox().width;
        }
    });
    Object.defineProperty(this, "height", {
        get: function height() {
            return this.upperGroup.getBBox().height;
        }
    });
};

CLMS.xiNET.RenderedProtein.prototype = new Molecule();

//when we get here all prot's should have had their sequence set, so protein.MAXSIZE has correct value;
// - could remove this as part of tidying up overall initialisation?
CLMS.xiNET.RenderedProtein.prototype.init = function() {
    this.busy = false;
    this.showHighlight(this.isHighlighted);
    this.setSelected(this.isSelected);
    this.setPosition(this.x, this.y);
    this.scale();
    this.setAllLinkCoordinates();
    this.setForm(this.newForm);
}

CLMS.xiNET.RenderedProtein.prototype.mouseOver = function(evt) {
    this.crosslinkViewer.model.setHighlightedProteins([this.participant]); // mjg apr 18
    Molecule.prototype.mouseOver.call(this, evt);
};

CLMS.xiNET.RenderedProtein.prototype.getBlobRadius = function() {
    var br = Math.sqrt(this.participant.size / Math.PI) * 0.7;
    return br;
};

//only output the info needed to reproduce the layout, used by save layout function
CLMS.xiNET.RenderedProtein.prototype.toJSON = function() {
    return {
        id: this.participant.id,
        x: this.x,
        y: this.y,
        rot: this.rotation,
        form: this.form,
        stickZoom: this.stickZoom,
        flipped: this.isFlipped,
        manuallyHidden: this.participant.manuallyHidden,
        name: this.participant.name // TODO - having this here is bit of hack
    };
};

CLMS.xiNET.RenderedProtein.prototype.showHighlight = function(show) {
    var d3HighSel = d3.select(this.highlight);
    this.isHighlighted = show ? true : false; // mjg apr 18
    if (show === true) {
        d3HighSel
            .classed("selectedProtein", false)
            .classed("highlightedProtein", true)
            .attr("stroke-opacity", "1");
    } else {
        if (this.isSelected == false) {
            d3HighSel.attr("stroke-opacity", "0");
        }
        d3HighSel
            .classed("selectedProtein", true)
            .classed("highlightedProtein", false);
    }
};

CLMS.xiNET.RenderedProtein.prototype.setSelected = function(select) {
    var d3HighSel = d3.select(this.highlight);
    this.isSelected = select ? true : false;
    if (select === true) {
        d3HighSel
            .classed("selectedProtein", true)
            .classed("highlightedProtein", false)
            .attr("stroke-opacity", "1");
    } else {
        d3HighSel
            .attr("stroke-opacity", "0")
            .classed("selectedProtein", false)
            .classed("highlightedProtein", true);
    }
};

CLMS.xiNET.RenderedProtein.prototype.setRotation = function(angle) {
    this.rotation = angle % 360;
    if (this.rotation < 0) {
        this.rotation += 360;
    }
    this.upperGroup.setAttribute("transform", "translate(" + this.x + " " + this.y + ")" +
        " scale(" + (this.crosslinkViewer.z) + ") " + "rotate(" + this.rotation + ")");
    this.lowerGroup.setAttribute("transform", "translate(" + this.x + " " + this.y + ")" +
        " scale(" + (this.crosslinkViewer.z) + ") " + "rotate(" + this.rotation + ")");

    var svg = this.crosslinkViewer.svgElement;
    var transformToContainingGroup = this.labelSVG.getAttribute("transform");
    var labelTransform = d3.transform(transformToContainingGroup);
    var sll = this.scaleLabels.length;
    if (this.rotation >= 90 && this.rotation < 270) {
        var k = svg.createSVGMatrix()
            .translate(Math.abs(labelTransform.translate[0]), -CLMS.xiNET.RenderedProtein.labelY)
            .rotate(180, 0, 0);
        this.labelSVG.transform.baseVal.initialize(svg.createSVGTransformFromMatrix(k));
        if (this.form === 1) {
            for (var i = 0; i < sll; i++) {
                this.scaleLabels[i].setAttribute("transform", "scale(-1,1)");
            }
            this.ticks.setAttribute("transform", "scale(1,-1)");
        }
    } else {
        var k = svg.createSVGMatrix()
            .translate(-(Math.abs(labelTransform.translate[0])), CLMS.xiNET.RenderedProtein.labelY);
        this.labelSVG.transform.baseVal.initialize(svg.createSVGTransformFromMatrix(k));
        if (this.form === 1) {
            for (var j = 0; j < sll; j++) {
                this.scaleLabels[j].setAttribute("transform", "scale(1,1)");
            }
            this.ticks.setAttribute("transform", "scale(1,1)");
        }
    }
};

// more accurately described as setting transform for top svg elements (sets scale also)
CLMS.xiNET.RenderedProtein.prototype.setPosition = function(x, y) {
    this.px = this.x;
    this.py = this.y;
    this.x = x;
    this.y = y;
    if (this.form === 1) {
        this.upperGroup.setAttribute("transform", "translate(" + this.x + " " + this.y + ")" +
            " scale(" + (this.crosslinkViewer.z) + ") " + "rotate(" + this.rotation + ")");
        this.lowerGroup.setAttribute("transform", "translate(" + this.x + " " + this.y + ")" +
            " scale(" + (this.crosslinkViewer.z) + ") " + "rotate(" + this.rotation + ")");
    } else {
        this.upperGroup.setAttribute("transform", "translate(" + this.x + " " + this.y + ")" +
            " scale(" + (this.crosslinkViewer.z) + ") ");
        this.lowerGroup.setAttribute("transform", "translate(" + this.x + " " + this.y + ")" +
            " scale(" + (this.crosslinkViewer.z) + ") ");
        if (this.selfLink != null) {
            if (typeof this.selfLink.thickLine !== 'undefined') {
                this.selfLink.thickLine.setAttribute("transform", "translate(" + this.x +
                    " " + this.y + ")" + " scale(" + (this.crosslinkViewer.z) + ")");
            }
            this.selfLink.line.setAttribute("transform", "translate(" + this.x +
                " " + this.y + ")" + " scale(" + (this.crosslinkViewer.z) + ")");
            this.selfLink.highlightLine.setAttribute("transform", "translate(" + this.x +
                " " + this.y + ")" + " scale(" + (this.crosslinkViewer.z) + ")");
        }
    }
};

CLMS.xiNET.RenderedProtein.rotOffset = 25 * 0.7; // see CLMS.xiNET.Rotator.js
CLMS.xiNET.RenderedProtein.minXDist = 30;

CLMS.xiNET.RenderedProtein.prototype.setStickScale = function(scale, svgP) {
    var oldScale = this.stickZoom;

    //dist from centre
    var dx = (this.x - svgP.x);
    var dy = (this.y - svgP.y);

    // new dist from centre
    var nx = dx * scale / oldScale;
    var ny = dy * scale / oldScale;

    //required change
    var rx = nx - dx;
    var ry = ny - dy;

    if (this.rotation === 0 || this.rotation === 180) {
        ry = 0;
    }

    //new pos
    var x = this.x + rx;
    var y = this.y + ry;

    this.stickZoom = scale;
    this.scale();
    this.setPosition(x, y)
    this.setAllLinkCoordinates();
};

CLMS.xiNET.RenderedProtein.prototype.scale = function() {
    d3.select(this.peptides).attr("transform", "scale(" + (this.stickZoom) + ", 1)");
    var protLength = (this.participant.size) * this.stickZoom;
    if (this.form === 1) {
        var labelTransform = d3.transform(this.labelSVG.getAttribute("transform"));
        var k = this.crosslinkViewer.svgElement.createSVGMatrix().rotate(labelTransform.rotate)
            .translate((-(((this.participant.size / 2) * this.stickZoom) + 10)), CLMS.xiNET.RenderedProtein.labelY); //.scale(z).translate(-c.x, -c.y);
        this.labelSVG.transform.baseVal.initialize(this.crosslinkViewer.svgElement.createSVGTransformFromMatrix(k));

        if (this.annotations) {
            var annotArr = CLMS.arrayFromMapValues(this.annotations);
            var annotationCount = annotArr.length;
            for (var a = 0; a < annotationCount; a++) {
                var anno = annotArr[a],
                    feature = anno.feature;
                anno.pieSlice.setAttribute("d", this.getAnnotationRectPath(feature));
                anno.colouredRect.setAttribute("d", this.getAnnotationRectPath(feature));
            }
        }

        d3.select(this.outline)
            .attr("width", protLength)
            .attr("x", this.getResXwithStickZoom(0.5));

        d3.select(this.highlight)
            .attr("width", protLength + 5)
            .attr("x", this.getResXwithStickZoom(0.5) - 2.5);

        //place rotators
        this.lowerRotator.svg.setAttribute("transform",
            "translate(" + (this.getResXwithStickZoom(0.5) - CLMS.xiNET.RenderedProtein.rotOffset) + " 0)");
        this.upperRotator.svg.setAttribute("transform",
            "translate(" + (this.getResXwithStickZoom(this.participant.size - 0 + 0.5) + CLMS.xiNET.RenderedProtein.rotOffset) + " 0)");

        for (let residueLink of this.renderedCrossLinks) {
            if (residueLink.crossLink.isSelfLink()) {
                var path = this.getCrossLinkPath(residueLink);
                d3.select(residueLink.line).attr("d", path);
                d3.select(residueLink.highlightLine).attr("d", path);
            }
        }

        this.setScaleGroup();
        this.setRotation(this.rotation); // places ticks and rotators
    }
};

CLMS.xiNET.RenderedProtein.prototype.setScaleGroup = function() {
    d3.select(this.ticks).selectAll("*").remove();

    this.scaleLabels = [];
    var ScaleMajTick = 100;
    var ScaleTicksPerLabel = 2; // varies with scale?
    var tick = -1;
    var lastTickX = this.getResXwithStickZoom(this.participant.size);

    for (var res = 1; res <= this.participant.size; res++) {
        if (res === 1 ||
            ((res % 100 === 0) && (200 * this.stickZoom > CLMS.xiNET.RenderedProtein.minXDist)) ||
            ((res % 10 === 0) && (20 * this.stickZoom > CLMS.xiNET.RenderedProtein.minXDist))
        ) {
            var tx = this.getResXwithStickZoom(res);
            if (this.stickZoom >= 8 || res !== 1) {
                tickAt(this, tx);
            }
            tick = (tick + 1) % ScaleTicksPerLabel;
            // does this one get a label?
            if (tick === 0) { // && tx > 20) {
                if ((tx + CLMS.xiNET.RenderedProtein.minXDist) < lastTickX) {
                    scaleLabelAt(this, res, tx);
                }
            }
        }
        if (this.stickZoom >= 8 && this.participant.sequence) {
            var seqLabelGroup = document.createElementNS(this.crosslinkViewer.svgns, "g");
            seqLabelGroup.setAttribute("transform", "translate(" + this.getResXwithStickZoom(res) + " " + 0 + ")");
            var seqLabel = document.createElementNS(this.crosslinkViewer.svgns, "text");
            seqLabel.setAttribute('font-family', "'Courier New', monospace");
            seqLabel.setAttribute('font-size', '10px');
            seqLabel.setAttribute("text-anchor", "middle");
            seqLabel.setAttribute("x", 0); //protein.getResXwithStickZoom(res));
            seqLabel.setAttribute("y", 3);
            seqLabel.appendChild(document.createTextNode(this.participant.sequence[res - 1]));
            seqLabelGroup.appendChild(seqLabel);
            this.scaleLabels.push(seqLabel);
            this.ticks.appendChild(seqLabelGroup);
        }
    }
    scaleLabelAt(this, this.participant.size, lastTickX);
    if (this.stickZoom >= 8) {
        tickAt(this, lastTickX);
    }

    function scaleLabelAt(self, text, tickX) {
        var scaleLabelGroup = document.createElementNS(self.crosslinkViewer.svgns, "g");
        scaleLabelGroup.setAttribute("transform", "translate(" + tickX + " " + 0 + ")");
        var scaleLabel = document.createElementNS(self.crosslinkViewer.svgns, "text");
        scaleLabel.setAttribute("class", "xinetAxisLabel");
        scaleLabel.setAttribute('font-family', "'Courier New', monospace");
        scaleLabel.setAttribute('font-size', '14');
        scaleLabel.setAttribute("text-anchor", "middle");
        scaleLabel.setAttribute("x", 0);
        scaleLabel.setAttribute("y", CLMS.xiNET.RenderedProtein.STICKHEIGHT + 4);
        scaleLabel.appendChild(document.createTextNode(text));
        scaleLabelGroup.appendChild(scaleLabel);
        self.scaleLabels.push(scaleLabel);
        self.ticks.appendChild(scaleLabelGroup);
    }

    function tickAt(self, tickX) {
        var tick = document.createElementNS(self.crosslinkViewer.svgns, "line");
        tick.setAttribute("x1", tickX);
        tick.setAttribute("y1", 5);
        tick.setAttribute("x2", tickX);
        tick.setAttribute("y2", 10);
        tick.setAttribute("stroke", "black");
        self.ticks.appendChild(tick);
    }
};

CLMS.xiNET.RenderedProtein.prototype.toggleFlipped = function() {
    this.isFlipped = !this.isFlipped;
    if (this.isFlipped) {
        this.selfLinks.setAttribute("transform", "scale (1 -1)");
        this.selfLinksHighlights.setAttribute("transform", "scale (1 -1)");
    } else {
        this.selfLinks.setAttribute("transform", "scale (1 1)");
        this.selfLinksHighlights.setAttribute("transform", "scale (1 1)");
    }
};

CLMS.xiNET.RenderedProtein.prototype.setHidden = function(bool) {
    // MJG
    d3.select(this.upperGroup).style("display", bool ? "none" : null);
    d3.select(this.lowerGroup).style("display", bool ? "none" : null);
    this.hidden = bool ? true : false;
};

CLMS.xiNET.RenderedProtein.prototype.setForm = function(form, svgP) {
    this.crosslinkViewer.model.get("tooltipModel").set("contents", null);
    if (this.busy !== true) {
        if (form == 1) {
            if (this.form !== 1) {
                this.toStick();
            }
        } else {
            if (this.form !== 0) {
                this.toCircle(svgP);
            }
        }
    }
};

CLMS.xiNET.RenderedProtein.prototype.toCircle = function(svgP) {
    this.busy = true;
    CLMS.removeDomElement(this.lowerRotator.svg);
    CLMS.removeDomElement(this.upperRotator.svg);

    var protLength = this.participant.size * this.stickZoom;
    var r = this.getBlobRadius();

    d3.select(this.outline).transition()
        .attr("stroke-opacity", 1) //needed?
        .attr("fill-opacity", 1)
        .attr("fill", "#ffffff")
        .attr("x", -r).attr("y", -r)
        .attr("width", r * 2).attr("height", r * 2)
        .attr("rx", r).attr("ry", r)
        .duration(CLMS.xiNET.RenderedProtein.transitionTime);

    d3.select(this.rectDomains).transition().attr("opacity", 0)
        .attr("transform", "scale(1, 1)")
        .duration(CLMS.xiNET.RenderedProtein.transitionTime);

    d3.select(this.circDomains).transition().attr("opacity", 1)
        .attr("transform", "scale(1, 1)")
        .duration(CLMS.xiNET.RenderedProtein.transitionTime);

    var stickZoomInterpol = d3.interpolate(this.stickZoom, 0);
    var rotationInterpol = d3.interpolate((this.rotation > 180) ? this.rotation - 360 : this.rotation, 0);
    //todo: should take current tranform of label as start
    var labelTransform = d3.transform(this.labelSVG.getAttribute("transform"));
    var labelStartPoint = labelTransform.translate[0]; //-(((this.participant.size / 2) * this.stickZoom) + 10);
    var labelTranslateInterpol = d3.interpolate(labelStartPoint, -(r + 5));

    var xInterpol = null,
        yInterpol = null;
    if (typeof svgP !== 'undefined' && svgP !== null) {
        xInterpol = d3.interpolate(this.x, svgP.x);
        yInterpol = d3.interpolate(this.y, svgP.y);
    }

    var self = this;
    d3.select(this.ticks).transition().attr("opacity", 0).duration(CLMS.xiNET.RenderedProtein.transitionTime / 4)
        .each("end",
            function() {
                d3.select(this).selectAll("*").remove(); //this === self.ticks
                //if (self.upperGroup.contains(self.ticks))self.upperGroup.removeChild(self.ticks);
            }
        );

    d3.select(this.highlight).transition()
        .attr("width", (r * 2) + 5).attr("height", (r * 2) + 5)
        .attr("x", -r - 2.5).attr("y", -r - 2.5)
        .attr("rx", r + 2.5).attr("ry", r + 2.5)
        .duration(CLMS.xiNET.RenderedProtein.transitionTime);

    var renderedCrossLinks = this.renderedCrossLinks;
    var rclCount = renderedCrossLinks.length;
    for (var rcl = 0; rcl < rclCount; rcl++) {
        var residueLink = renderedCrossLinks[rcl];
        var selectLine = d3.select(residueLink.line);
        selectLine.attr("d", this.getCrossLinkPath(residueLink));
        selectLine.transition().attr("d", this.getAggregateSelfLinkPath())
            .duration(CLMS.xiNET.RenderedProtein.transitionTime);
        var highlightLine = d3.select(residueLink.highlightLine);
        highlightLine.attr("d", this.getCrossLinkPath(residueLink));
        highlightLine.transition().attr("d", this.getAggregateSelfLinkPath())
            .duration(CLMS.xiNET.RenderedProtein.transitionTime);
    }

    var self = this;
    if (this.annotations) {
        var annotArr = CLMS.arrayFromMapValues(this.annotations);
        var annotationCount = annotArr.length;
        for (var a = 0; a < annotationCount; a++) {
            var anno = annotArr[a],
                feature = anno.feature,
                pieSlice = anno.pieSlice,
                rectDomain = anno.colouredRect;
            if (feature.type != "DISULFID") {
                d3.select(pieSlice).transition().attr("d", this.getAnnotationPieSliceApproximatePath(feature))
                    .duration(CLMS.xiNET.RenderedProtein.transitionTime).each("end",
                        function() {
                            for (var b = 0; b < annotationCount; b++) {
                                var annoB = annotArr[b];
                                if (this === annoB.pieSlice) {
                                    d3.select(this).attr("d", self.getAnnotationPieSliceArcPath(annoB.feature));
                                }
                            }
                        }
                    );

                d3.select(rectDomain).transition().attr("d", self.getAnnotationPieSliceApproximatePath(feature))
                    .duration(CLMS.xiNET.RenderedProtein.transitionTime);
            } else {
                d3.select(pieSlice).transition().attr("d", this.getDisulfidAnnotationCircPath(feature))
                    .duration(CLMS.xiNET.RenderedProtein.transitionTime);
                d3.select(rectDomain).transition().attr("d", self.getDisulfidAnnotationRectPath(feature))
                    .duration(CLMS.xiNET.RenderedProtein.transitionTime);
            }
        }
    }

    var originalStickZoom = this.stickZoom;
    var originalRotation = this.rotation;
    var cubicInOut = d3.ease('cubic-in-out');
    d3.timer(function(elapsed) {
        return update(elapsed / CLMS.xiNET.RenderedProtein.transitionTime);
    });

    function update(interp) {
        var labelTransform = d3.transform(self.labelSVG.getAttribute("transform"));
        var k = self.crosslinkViewer.svgElement.createSVGMatrix().rotate(labelTransform.rotate).translate(labelTranslateInterpol(cubicInOut(interp)), CLMS.xiNET.RenderedProtein.labelY); //.scale(z).translate(-c.x, -c.y);
        self.labelSVG.transform.baseVal.initialize(self.crosslinkViewer.svgElement.createSVGTransformFromMatrix(k));
        if (xInterpol !== null) {
            self.setPosition(xInterpol(cubicInOut(interp)), yInterpol(cubicInOut(interp)));
        }
        var rot = rotationInterpol(cubicInOut(interp));
        self.stickZoom = stickZoomInterpol(cubicInOut(interp));
        self.setRotation(rot);

        self.setAllLinkCoordinates();

        if (interp === 1) { // finished - tidy up
            //bring in new
            self.form = 0;
            var renderedCrossLinks = self.renderedCrossLinks;
            var rclCount = renderedCrossLinks.length;
            for (var rcl = 0; rcl < rclCount; rcl++) {
                renderedCrossLinks[rcl].check();
            }
            //~ self.setPosition(self.x, self.y);
            //heres ur prob:todo fix
            //~ self.checkLinks();
            var pLinks = self.renderedP_PLinks;
            var plCount = pLinks.length;
            //~ for (var pl = 0; pl < plCount; pl++) {
            //~ pLinks[pl].check();
            //~ }
            for (pl = 0; pl < plCount; pl++) {
                pLinks[pl].update();
            }
            self.stickZoom = originalStickZoom;
            self.rotation = originalRotation;
            //self.removePeptides();
            self.busy = false;
            return true;
        } else if (interp > 1) {
            return update(1);
        } else {
            return false;
        }
    }
    //~ }
};

CLMS.xiNET.RenderedProtein.prototype.toStick = function() {
    this.busy = true;
    this.form = 1;

    //place rotators
    this.upperGroup.appendChild(this.lowerRotator.svg);
    this.upperGroup.appendChild(this.upperRotator.svg);
    this.lowerRotator.svg.setAttribute("transform",
        "translate(" + (this.getResXwithStickZoom(0.5) - CLMS.xiNET.RenderedProtein.rotOffset) + " 0)");
    this.upperRotator.svg.setAttribute("transform",
        "translate(" + (this.getResXwithStickZoom(this.participant.size - 0 + 0.5) + CLMS.xiNET.RenderedProtein.rotOffset) + " 0)");

    var protLength = this.participant.size * this.stickZoom;
    var r = this.getBlobRadius();

    var lengthInterpol = d3.interpolate((2 * r), protLength);
    var stickZoomInterpol = d3.interpolate(0, this.stickZoom);
    var rotationInterpol = d3.interpolate(0, (this.rotation > 180) ? this.rotation - 360 : this.rotation);
    var labelTranslateInterpol = d3.interpolate(-(r + 5), -(((this.participant.size / 2) * this.stickZoom) + 10));

    var origStickZoom = this.stickZoom;
    this.stickZoom = 0;
    this.checkLinks();
    this.stickZoom = origStickZoom;

    d3.select(this.circDomains).transition().attr("opacity", 0)
        //~ .attr("transform", "scale(" + this.stickZoom + ", 1)")
        .duration(CLMS.xiNET.RenderedProtein.transitionTime);
    d3.select(this.rectDomains).transition().attr("opacity", 1)
        //~ .attr("transform", "scale(" + this.stickZoom + ", 1)")
        .duration(CLMS.xiNET.RenderedProtein.transitionTime);

    d3.select(this.outline).transition().attr("stroke-opacity", 1)
        .attr("fill-opacity", 0)
        .attr("fill", "#FFFFFF")
        .attr("height", CLMS.xiNET.RenderedProtein.STICKHEIGHT)
        .attr("y", -CLMS.xiNET.RenderedProtein.STICKHEIGHT / 2)
        .attr("rx", 0).attr("ry", 0)
        .duration(CLMS.xiNET.RenderedProtein.transitionTime);

    d3.select(this.highlight).transition()
        .attr("width", protLength + 5).attr("height", CLMS.xiNET.RenderedProtein.STICKHEIGHT + 5)
        .attr("x", this.getResXwithStickZoom(0.5) - 2.5).attr("y", (-CLMS.xiNET.RenderedProtein.STICKHEIGHT / 2) - 2.5)
        .attr("rx", 0).attr("ry", 0)
        .duration(CLMS.xiNET.RenderedProtein.transitionTime);

    var renderedCrossLinks = this.renderedCrossLinks;
    var rclCount = renderedCrossLinks.length;
    for (var rcl = 0; rcl < rclCount; rcl++) {
        var residueLink = renderedCrossLinks[rcl];
        if (residueLink.crossLink.isSelfLink() === true) {
            d3.select(residueLink.line).attr("d", this.getAggregateSelfLinkPath());
            d3.select(residueLink.line).transition().attr("d", this.getCrossLinkPath(residueLink))
                .duration(CLMS.xiNET.RenderedProtein.transitionTime);
            d3.select(residueLink.highlightLine).attr("d", this.getAggregateSelfLinkPath());
            d3.select(residueLink.highlightLine).transition().attr("d", this.getCrossLinkPath(residueLink))
                .duration(CLMS.xiNET.RenderedProtein.transitionTime);
        }
    }

    if (this.annotations) {
        //var bottom = CLMS.xiNET.RenderedProtein.STICKHEIGHT / 2, top = -CLMS.xiNET.RenderedProtein.STICKHEIGHT / 2;
        var annotArr = CLMS.arrayFromMapValues(this.annotations);
        var annotationCount = annotArr.length;
        for (var a = 0; a < annotationCount; a++) {
            var anno = annotArr[a],
                feature = anno.feature,
                pieSlice = anno.pieSlice,
                rectDomain = anno.colouredRect;

            if (feature.type != "DISULFID") {
                pieSlice.setAttribute("d", this.getAnnotationPieSliceApproximatePath(feature));
                d3.select(pieSlice).transition().attr("d", this.getAnnotationRectPath(feature))
                    .duration(CLMS.xiNET.RenderedProtein.transitionTime);
                d3.select(rectDomain).transition().attr("d", this.getAnnotationRectPath(feature))
                    .duration(CLMS.xiNET.RenderedProtein.transitionTime);
            } else {
                d3.select(pieSlice).transition().attr("d", this.getDisulfidAnnotationRectPath(feature))
                    .duration(CLMS.xiNET.RenderedProtein.transitionTime);
                d3.select(rectDomain).transition().attr("d", this.getDisulfidAnnotationRectPath(feature))
                    .duration(CLMS.xiNET.RenderedProtein.transitionTime);

            }
        }
    }

    var self = this;
    var cubicInOut = d3.ease('cubic-in-out');
    d3.timer(function(elapsed) {
        return update(elapsed / CLMS.xiNET.RenderedProtein.transitionTime);
    });

    //~ update(1);

    function update(interp) {
        var labelTransform = d3.transform(self.labelSVG.getAttribute("transform"));
        var k = self.crosslinkViewer.svgElement.createSVGMatrix().rotate(labelTransform.rotate).translate(labelTranslateInterpol(cubicInOut(interp)), CLMS.xiNET.RenderedProtein.labelY); //.scale(z).translate(-c.x, -c.y);
        self.labelSVG.transform.baseVal.initialize(self.crosslinkViewer.svgElement.createSVGTransformFromMatrix(k));

        var rot = rotationInterpol(cubicInOut(interp));
        self.setRotation(rot);

        var currentLength = lengthInterpol(cubicInOut(interp));
        d3.select(self.outline).attr("width", currentLength).attr("x", -(currentLength / 2) + (0.5 * self.stickZoom));
        self.stickZoom = stickZoomInterpol(cubicInOut(interp))
        self.setAllLinkCoordinates();

        if (interp === 1) { // finished - tidy up
            self.busy = false;
            return true;
        } else if (interp > 1) {
            return update(1);
        } else {
            return false;
        }
    }

    d3.select(this.ticks).attr("opacity", 0);
    this.setScaleGroup();
    d3.select(this.ticks).transition().attr("opacity", 1)
        .delay(CLMS.xiNET.RenderedProtein.transitionTime * 0.8).duration(CLMS.xiNET.RenderedProtein.transitionTime / 2);
};

CLMS.xiNET.RenderedProtein.prototype.getCrossLinkPath = function(renderedCrossLink) {
    var x1 = this.getResXwithStickZoom(renderedCrossLink.crossLink.fromResidue);
    var baseLine = 0;
    if (this.stickZoom >= 8) {
        baseLine = -5;
    }

    //~ following draws little flags - not in use
    //~ if (isNaN(parseFloat(renderedCrossLink.crossLink.toResidue))){ //linker modified peptide
    //~ if (renderedCrossLink.ambig === false){
    //~ renderedCrossLink.line.setAttribute("fill", xiNET.defaultSelfLinkColour.toRGB());
    //~ }
    //~ var p1 = [x1, 26];
    //~ var p3 = [x1, 18];
    //~ var p2 = CLMS.xiNET.RenderedProtein.rotatePointAboutPoint(p1, p3, 60);
    //~ baseLine = baseLine * -1;
    //~ return "M " + x1 + "," + baseLine
    //~ + " L " + p1[0] + "," + p1[1]
    //~ + " L " +  p2[0] + "," + p2[1]
    //~ + " L " + p3[0] + "," + p3[1];
    //~ }
    //~ else {

    var x2 = this.getResXwithStickZoom(renderedCrossLink.crossLink.toResidue);
    var height, cp1, cp2, arcStart, arcEnd, arcRadius;
    arcRadius = (Math.abs(x2 - x1)) / 2;
    var height = -((CLMS.xiNET.RenderedProtein.STICKHEIGHT / 2) + 3);
    if (arcRadius < 15) {
        height = -28 + arcRadius;
    }

    var start = [x1, baseLine];
    var end = [x2, baseLine];

    var angle;

    //~ // draws a a little triangle for *truly* intraMolecular - e.g. internally linked peptides
    //~ // not in use
    //~ if (renderedCrossLink.intraMolecular === true){
    //~ var curveMidX = x1 + ((x2 - x1) / 2);
    //~ arcStart = [ curveMidX, height - arcRadius];
    //~ arcEnd =  [ curveMidX, height - arcRadius];
    //~ cp1 = [ curveMidX, height - arcRadius];
    //~ cp2 =  [ curveMidX, height - arcRadius];

    //~ }
    //~ else
    if (renderedCrossLink.crossLink.confirmedHomomultimer) {
        var curveMidX = x1 + ((x2 - x1) / 2);
        arcStart = [curveMidX, height - arcRadius];
        arcEnd = [curveMidX, height - arcRadius];
        cp1 = Molecule.rotatePointAboutPoint([x1, height - arcRadius], start, -20);
        cp2 = Molecule.rotatePointAboutPoint([x2, height - arcRadius], end, 20);

        //flip
        start[1] = start[1] * -1;
        cp1[1] = cp1[1] * -1;
        arcStart[1] = arcStart[1] * -1;
        arcEnd[1] = arcEnd[1] * -1;
        cp2[1] = cp2[1] * -1;
        end[1] = end[1] * -1;

    } else {
        cp1 = [x1, height];
        cp2 = [x2, baseLine];
        arcStart = [x1, height];
        arcEnd = [x2, height];
    }

    return " M " + start[0] + "," + start[1] +
        " Q " + cp1[0] + ',' + cp1[1] + ' ' + arcStart[0] + "," + arcStart[1] +
        " A " + arcRadius + "," + arcRadius + "  0 0 1 " + arcEnd[0] + "," + arcEnd[1] +
        " Q " + cp2[0] + ',' + cp2[1] + " " + end[0] + "," + end[1];

    //~ }
}

CLMS.xiNET.RenderedProtein.prototype.getResXwithStickZoom = function(r) {
    return (r - (this.participant.size / 2)) * this.stickZoom;
};

//calculate the  coordinates of a residue (relative to this.controller.container)
CLMS.xiNET.RenderedProtein.prototype.getResidueCoordinates = function(r, yOff) {
    if (typeof r === "undefined") {
        alert("Error: residue number is undefined");
    }
    var x = this.getResXwithStickZoom(r * 1) * this.crosslinkViewer.z;
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
    } else {
        y = yOff;
    }
    x = x + this.x;
    y = y + this.y;
    return [x, y];
};

CLMS.xiNET.RenderedProtein.prototype.checkLinks = function() {
    var pLinks = this.renderedP_PLinks;
    var plCount = pLinks.length;
    for (var pl = 0; pl < plCount; pl++) {
        pLinks[pl].check();
    }
    for (pl = 0; pl < plCount; pl++) {
        pLinks[pl].update();
    }
    var renderedCrossLinks = this.renderedCrossLinks;
    var rclCount = renderedCrossLinks.length;
    for (var rcl = 0; rcl < rclCount; rcl++) {
        renderedCrossLinks[rcl].check();
    }
}

CLMS.xiNET.RenderedProtein.prototype.clearPositionalFeatures = function(posFeats) {
    this.annotations = new Map();
    if (this.circDomains) d3.select(this.circDomains).selectAll("*").remove();
    if (this.rectDomains) d3.select(this.rectDomains).selectAll("*").remove();
};

CLMS.xiNET.RenderedProtein.prototype.setPositionalFeatures = function() {
    this.clearPositionalFeatures();
    var annotationTypes = this.crosslinkViewer.model.get("annotationTypes");
    //create new annotations

    // does all of the commented out above, and picks up user-defined annotations
    var featuresShown = this.crosslinkViewer.model.getFilteredFeatures(this.participant);
    var split = _.partition(featuresShown, function(f) {
        return f.type == "disulfide bond";
    });
    var disulfidBonds = split[0];
    featuresShown = split[1];

    if (featuresShown || disulfidBonds) {
        //draw longest regions first
        featuresShown.sort(function(a, b) {
            return (b.end - b.begin) - (a.end - a.begin);
        });

        //~ disulfidBonds.sort(function(a, b) {
        //~ return b.begin - a.begin;
        //~ });

        featuresShown = featuresShown.concat(disulfidBonds);

        var fsLen = featuresShown.length;
        for (var f = 0; f < fsLen; f++) {

            var anno = featuresShown[f];

            var convStart = anno.begin;
            var convEnd = anno.end;
            var alignModel = this.crosslinkViewer.model.get("alignColl").get(this.participant.id);
            var withinAlignedRange = true;

            // mjg next 5 lines
            var annotationTypeModel = annotationTypes.get(annotationTypes.modelId(anno));
            var annotationTypeModelAlignmentID = annotationTypeModel ? annotationTypeModel.get("typeAlignmentID") : undefined;
            var alignmentID = anno.alignmentID || annotationTypeModelAlignmentID; // individual feature alignment ids trump feature type alignment ids (needed for multiple pdb chain alignments)
            // it will be undefined for annotations/annotaion types aligned to search sequence so skips the next bit

            if ( //anno.category != "AA" // this handles not aligning certain features, todo; check for tidier way
                alignmentID && alignModel) {
                //var alignmentID = anno.alignmentID || "Canonical";
                var conv = alignModel.rangeToSearch(alignmentID, anno.begin, anno.end);
                if (conv) {
                    convStart = conv[0];
                    convEnd = conv[1];
                } else {
                    withinAlignedRange = false; // when conv returns null
                }
            }
            //TODO: tooltip requring these to be written into feature object, seems wrong?
            anno.fstart = +convStart; // + to convert to number
            anno.fend = +convEnd;

            var fid = anno.category + "-" + anno.type + "-" + anno.alignmentID + "[" + convStart + " - " + convEnd + "]";

            if (withinAlignedRange) {
                var pieSlice = document.createElementNS(this.crosslinkViewer.svgns, "path");
                var colouredRect = document.createElementNS(this.crosslinkViewer.svgns, "path");

                if (anno.type != "DISULFID") {
                    //if (anno.type != "disulfide bond") {
                    if (this.form === 0) {
                        pieSlice.setAttribute("d", this.getAnnotationPieSliceArcPath(anno));
                        colouredRect.setAttribute("d", this.getAnnotationPieSliceApproximatePath(anno));
                    } else {
                        pieSlice.setAttribute("d", this.getAnnotationRectPath(anno));
                        colouredRect.setAttribute("d", this.getAnnotationRectPath(anno));
                    }
                    pieSlice.setAttribute("stroke-width", 1);
                    pieSlice.setAttribute("fill-opacity", "0.5");
                    colouredRect.setAttribute("stroke-width", 1);
                    colouredRect.setAttribute("fill-opacity", "0.5");

                    var c = annotationTypes.getColour(anno.category, anno.type); // CLMSUI.domainColours(anno.category, anno.type);
                    pieSlice.setAttribute("fill", c);
                    pieSlice.setAttribute("stroke", c);
                    colouredRect.setAttribute("fill", c);
                    colouredRect.setAttribute("stroke", c);
                } else {

                    if (this.form === 0) {
                        pieSlice.setAttribute("d", this.getDisulfidAnnotationCircPath(anno));
                        colouredRect.setAttribute("d", this.getDisulfidAnnotationCircPath(anno));
                    } else {
                        pieSlice.setAttribute("d", this.getDisulfidAnnotationRectPath(anno, f));
                        colouredRect.setAttribute("d", this.getDisulfidAnnotationRectPath(anno, f));
                    }
                    pieSlice.setAttribute("stroke-width", 1);
                    colouredRect.setAttribute("stroke-width", 1);

                    var c = annotationTypes.getColour(anno.category, anno.type); // CLMSUI.domainColours(anno.category, anno.type);
                    pieSlice.setAttribute("fill", "none");
                    pieSlice.setAttribute("stroke", c);
                    colouredRect.setAttribute("fill", "none");
                    colouredRect.setAttribute("stroke", c);
                }

                pieSlice.setAttribute("data-feature", fid);

                var self = this;

                //only needs tooltip on pie slice, its always on top even if transparent
                pieSlice.onmouseover = function(evt) {
                    self.crosslinkViewer.preventDefaultsAndStopPropagation(evt);
                    var feature = self.annotations.get(evt.target.getAttribute("data-feature")).feature;
                    self.crosslinkViewer.model.get("tooltipModel")
                        //.set("header", d.id.replace("_", " "))
                        .set("header", CLMSUI.modelUtils.makeTooltipTitle.feature())
                        .set("contents",
                            CLMSUI.modelUtils.makeTooltipContents.feature(feature)
                        )
                        .set("location", {
                            pageX: evt.pageX,
                            pageY: evt.pageY
                        });
                };

                this.annotations.set(fid, {
                    feature: anno,
                    pieSlice: pieSlice,
                    colouredRect: colouredRect
                });
                this.circDomains.appendChild(pieSlice);
                this.rectDomains.appendChild(colouredRect);
            }
        }
    }
};

CLMS.xiNET.RenderedProtein.prototype.getAnnotationPieSliceArcPath = function(annotation) {
    var startAngle = ((annotation.fstart - 1) / this.participant.size) * 360;
    var endAngle = (annotation.fend / this.participant.size) * 360;
    //just in case
    if (startAngle > endAngle) {
        var temp = startAngle;
        startAngle = endAngle;
        endAngle = temp;
    }
    var largeArcFlag = 0,
        sweepFlag = 1;
    if ((endAngle - startAngle) > 180) { //|| (endAngle - startAngle) == 0) {
        largeArcFlag = 1;
    }
    //hacky
    //actually its not clear there is better solution -
    // https://stackoverflow.com/questions/5737975/circle-drawing-with-svgs-arc-path
    if (annotation.fstart == 1 && annotation.fend == this.participant.size) {
        startAngle = 0.1;
        endAngle = 359.9;
        sweepFlag = 1;
    }

    var radius = this.getBlobRadius() - 2;
    var arcStart = CLMS.xiNET.RenderedProtein.trig(radius, startAngle - 90);
    var arcEnd = CLMS.xiNET.RenderedProtein.trig(radius, endAngle - 90);
    return "M0,0 L" + arcStart.x + "," + arcStart.y + " A" + radius + "," +
        radius + " 0 " + largeArcFlag + " " + sweepFlag + " " + arcEnd.x + "," + arcEnd.y + " Z";
};

CLMS.xiNET.RenderedProtein.prototype.getAnnotationPieSliceApproximatePath = function(annotation) {
    //approximate pie slice
    var startAngle = ((annotation.fstart - 1) / this.participant.size) * 360;
    var endAngle = ((annotation.fend) / this.participant.size) * 360;
    var pieRadius = this.getBlobRadius() - 2;
    var arcStart = CLMS.xiNET.RenderedProtein.trig(pieRadius, startAngle - 90);
    var arcEnd = CLMS.xiNET.RenderedProtein.trig(pieRadius, endAngle - 90);
    var approximatePiePath = "M 0,0";
    var stepsInArc = 5;
    for (var sia = 0; sia <= CLMS.xiNET.RenderedProtein.stepsInArc; sia++) {
        var angle = startAngle + ((endAngle - startAngle) * (sia / stepsInArc));
        var siaCoord = CLMS.xiNET.RenderedProtein.trig(pieRadius, angle - 90);
        approximatePiePath += " L " + siaCoord.x + "," + siaCoord.y;
    }
    approximatePiePath += " L " + 0 + "," + 0;
    approximatePiePath += "  Z";
    return approximatePiePath;
};

CLMS.xiNET.RenderedProtein.prototype.getAnnotationRectPath = function(annotation) {
    //domain as rectangular path
    var bottom = CLMS.xiNET.RenderedProtein.STICKHEIGHT / 2,
        top = -CLMS.xiNET.RenderedProtein.STICKHEIGHT / 2;
    var annotX = this.getResXwithStickZoom(annotation.fstart - 0.5);
    var annotSize = (1 + (annotation.fend - annotation.fstart));
    var annotLength = annotSize * this.stickZoom;
    var rectPath = "M " + annotX + "," + bottom;
    for (var sia = 0; sia <= CLMS.xiNET.RenderedProtein.stepsInArc; sia++) {
        var step = annotX + (annotLength * (sia / CLMS.xiNET.RenderedProtein.stepsInArc));
        rectPath += " L " + step + "," + top;
    }
    rectPath += " L " + (annotX + annotLength) + "," + bottom +
        " Z";
    return rectPath;
};

CLMS.xiNET.RenderedProtein.prototype.getDisulfidAnnotationRectPath = function(annotation, index) {
    var bottom = CLMS.xiNET.RenderedProtein.STICKHEIGHT / 2,
        top = 1.5 * bottom;
    bottom = bottom - 5;

    var annotX = this.getResXwithStickZoom(annotation.fstart - 0.5);
    var annotSize = (1 + (annotation.fend - annotation.fstart));

    var level = annotSize / 20;
    top += annotSize * bottom / 30;


    var annotLength = annotSize * this.stickZoom;
    var rectPath = "M " + annotX + "," + bottom;
    rectPath += " L " + annotX + "," + top;
    rectPath += " L " + (annotX + annotLength) + "," + top;
    rectPath += " L " + (annotX + annotLength) + "," + bottom;
    return rectPath;
};

CLMS.xiNET.RenderedProtein.prototype.getDisulfidAnnotationCircPath = function(annotation) {
    return "M 0,0 L 0,0 L 0,0 L 0,0 ";
};

CLMS.xiNET.RenderedProtein.STICKHEIGHT = 20; // height of stick in pixels
CLMS.xiNET.RenderedProtein.LABELMAXLENGTH = 60; // maximal width reserved for protein-labels
CLMS.xiNET.RenderedProtein.labelY = -5; // label Y offset, better if calc'd half height of label once rendered
CLMS.xiNET.RenderedProtein.transitionTime = 650;
CLMS.xiNET.RenderedProtein.stepsInArc = 5;
