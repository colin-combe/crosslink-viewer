//  xiNET cross-link viewer
//  Copyright 2013 Rappsilber Laboratory, University of Edinburgh
//
//  authors: Lutz Fischer, Colin Combe
//
//  CLMS.xiNET.RenderedProtein.js

CLMS.xiNET.RenderedProtein = function (participant, crosslinkViewer) {
    this.participant = participant;
    this.crosslinkViewer = crosslinkViewer;
    //~ this.index = participant.id;

    this.renderedP_PLinks = new Map();
    this.renderedCrossLinks = new Map();

    // layout info
    this.x = null;
    this.y = null;
    this.rotation = 0;
    this.previousRotation = this.rotation;
    this.stickZoom = 1;
    this.form = 0;//null; // 0 = blob, 1 = stick
    this.isFlipped = false;
    this.isSelected = false;
    //annotation scheme
    //rotators
    this.lowerRotator = new CLMS.xiNET.Rotator(this, 0, this.crosslinkViewer);
    this.upperRotator = new CLMS.xiNET.Rotator(this, 1, this.crosslinkViewer);

    /*
     * Lower group
     * svg group for elements that appear underneath links
     */
    this.lowerGroup = document.createElementNS(CLMS.xiNET.svgns, "g");
    this.lowerGroup.setAttribute("class", "protein lowerGroup");

    //make highlight
    this.highlight = document.createElementNS(CLMS.xiNET.svgns, "rect");
    if (CLMS.xiNET.highlightColour !== undefined) {
        this.highlight.setAttribute("stroke", CLMS.xiNET.highlightColour.toRGB());
    }
    this.highlight.setAttribute("stroke-width", "5");
    this.highlight.setAttribute("fill", "none");
    this.lowerGroup.appendChild(this.highlight);

    //domains in rectangle form (shown underneath links)
    this.rectDomains = document.createElementNS(CLMS.xiNET.svgns, "g");
    this.rectDomains.setAttribute("opacity", "0");
    this.lowerGroup.appendChild(this.rectDomains);

    this.peptides = document.createElementNS(CLMS.xiNET.svgns, "g");
    this.lowerGroup.appendChild(this.peptides);

    /*
     * Upper group
     * svg group for elements that appear above links
     */

    this.upperGroup = document.createElementNS(CLMS.xiNET.svgns, "g");
    this.upperGroup.setAttribute("class", "protein upperGroup");

    //svg groups for self links
    this.selfLinksHighlights = document.createElementNS(CLMS.xiNET.svgns, "g");
    this.selfLinks = document.createElementNS(CLMS.xiNET.svgns, "g");
    this.upperGroup.appendChild(this.selfLinksHighlights);
    this.upperGroup.appendChild(this.selfLinks);

    //create label - we will move this svg element around when protein form changes
    this.labelSVG = document.createElementNS(CLMS.xiNET.svgns, "text");
    this.labelSVG.setAttribute("text-anchor", "end");
    this.labelSVG.setAttribute("fill", this.participant.is_decoy? "#FB8072":"black")
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
    this.ticks = document.createElementNS(CLMS.xiNET.svgns, "g");

    //make outline
    //http://stackoverflow.com/questions/17437408/how-do-i-change-a-circle-to-a-square-using-d3
    this.outline = document.createElementNS(CLMS.xiNET.svgns, "rect");
    this.outline.setAttribute("stroke", "black");
    this.outline.setAttribute("stroke-width", "1");
    this.outline.setAttribute("fill", "#EEEEEE");
    this.upperGroup.appendChild(this.outline);
    this.upperGroup.appendChild(this.ticks);
    //domains as pie slices - shown on top of everything
    this.circDomains = document.createElementNS(CLMS.xiNET.svgns, "g");
    this.circDomains.setAttribute("opacity", 1);
    this.upperGroup.appendChild(this.circDomains);

    this.scaleLabels = [];

    // events
    var self = this;
    this.upperGroup.onmousedown = function(evt) {self.mouseDown(evt);};
    this.upperGroup.onmouseover = function(evt) {self.mouseOver(evt);};
    this.upperGroup.onmouseout = function(evt) {self.mouseOut(evt);};
    this.upperGroup.ontouchstart = function(evt) {self.touchStart(evt);};
    
    this.busy = false;
    this.showHighlight(false);
    
    //this.get width() {return 50;};
    Object.defineProperty(this, "width", {
		get: function width() {
			return  this.upperGroup.getBBox().width;
		}
	});
    Object.defineProperty(this, "height", {
		get: function height() {
			return  this.upperGroup.getBBox().height;
		}
	});
};


//by the we get here all prot's have had their sequence set, so protein.MAXSIZE has correct value;
CLMS.xiNET.RenderedProtein.prototype.init = function() {
    this.setForm(this.form);
    //if (this.selfLink) this.selfLink.initSelfLinkSVG();
}

CLMS.xiNET.RenderedProtein.prototype.mouseDown = function(evt) {
        this.crosslinkViewer.preventDefaultsAndStopPropagation(evt);//see MouseEvents.js
        //if a force layout exists then stop it
        if (this.crosslinkViewer.cola) {
            this.crosslinkViewer.cola.stop();
        }
        this.crosslinkViewer.dragElement = this;
        //~ if (evt.ctrlKey === false) {
            //~ this.crosslinkViewer.clearSelection();
            //~ this.setSelected(true);
        //~ } else {
            //~ this.setSelected(!this.isSelected);
        //~ }
        //store start location
        //var p = this.crosslinkViewer.getEventPoint(evt);
        this.crosslinkViewer.dragStart = evt;//this.crosslinkViewer.mouseToSVG(p.x, p.y);
        return false;
};

CLMS.xiNET.RenderedProtein.prototype.touchStart = function(evt) {
           this.crosslinkViewer.preventDefaultsAndStopPropagation(evt);//see MouseEvents.js
        //if a force layout exists then stop it
        if (this.crosslinkViewer.force !== undefined) {
            this.crosslinkViewer.force.stop();
        }
        this.crosslinkViewer.dragElement = this;
        //~ this.crosslinkViewer.clearSelection();
        //~ this.setSelected(true);
        //store start location
        //var p = this.crosslinkViewer.getTouchEventPoint(evt); //oh dear - now broken
        this.crosslinkViewer.dragStart = evt;//this.crosslinkViewer.mouseToSVG(p.x, p.y);
        return false;
};

CLMS.xiNET.RenderedProtein.prototype.mouseOver = function(evt) {
    //~ this.crosslinkViewer.preventDefaultsAndStopPropagation(evt);
    this.showHighlight(true);
    var p = this.crosslinkViewer.getEventPoint(evt);
    this.crosslinkViewer.model.get("tooltipModel")
		.set("header", CLMSUI.modelUtils.makeTooltipTitle.interactor (this.participant))
		.set("contents", CLMSUI.modelUtils.makeTooltipContents.interactor (this.participant))
        .set("location", {pageX: p.x, pageY: p.y})
    ;
};

CLMS.xiNET.RenderedProtein.prototype.mouseOut = function(evt) {
    //~ this.crosslinkViewer.preventDefaultsAndStopPropagation(evt);
    this.showHighlight(false);
    this.crosslinkViewer.model.get("tooltipModel").set("contents", null);
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
        flipped: this.isFlipped
    };
};

CLMS.xiNET.RenderedProtein.prototype.showHighlight = function(show) {
    if (show === true) {
        this.highlight.setAttribute("stroke", CLMS.xiNET.highlightColour.toRGB());
        this.highlight.setAttribute("stroke-opacity", "1");
    } else {
        if (this.isSelected == false) {
                this.highlight.setAttribute("stroke-opacity", "0");
        }
        this.highlight.setAttribute("stroke", CLMS.xiNET.selectedColour.toRGB());
    }
};

CLMS.xiNET.RenderedProtein.prototype.setSelected = function(select) {
    if (select){// && this.isSelected === false) {
		this.isSelected = true;
        this.highlight.setAttribute("stroke", CLMS.xiNET.selectedColour.toRGB());
        this.highlight.setAttribute("stroke-opacity", "1");
    }
    else {//if (select === false && this.isSelected === true) {
        this.isSelected = false;
        this.highlight.setAttribute("stroke-opacity", "0");
        this.highlight.setAttribute("stroke", CLMS.xiNET.highlightColour.toRGB());
    }
};

CLMS.xiNET.RenderedProtein.prototype.setRotation = function(angle) {
    this.rotation = angle % 360;
    if (this.rotation < 0) {
        this.rotation += 360;
    }
    this.upperGroup.setAttribute("transform", "translate(" + this.x + " " + this.y + ")"
            + " scale(" + (this.crosslinkViewer.z) + ") " + "rotate(" + this.rotation + ")");
    this.lowerGroup.setAttribute("transform", "translate(" + this.x + " " + this.y + ")"
            + " scale(" + (this.crosslinkViewer.z) + ") " + "rotate(" + this.rotation + ")");

    var svg = this.crosslinkViewer.svgElement;
    var transformToContainingGroup = this.labelSVG.getAttribute("transform");
    var labelTransform = d3.transform(transformToContainingGroup);
    var sll = this.scaleLabels.length;
    if (this.rotation >= 90 && this.rotation < 270) {
            var k = svg.createSVGMatrix()
                        .translate(Math.abs(labelTransform.translate[0]), -CLMS.xiNET.RenderedProtein.labelY)
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
                        .translate(-(Math.abs(labelTransform.translate[0])), CLMS.xiNET.RenderedProtein.labelY);
            this.labelSVG.transform.baseVal.initialize(svg.createSVGTransformFromMatrix(k));
            if (this.form ===1){
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
    if (this.form === 1){
        this.upperGroup.setAttribute("transform", "translate(" + this.x + " " + this.y + ")"
                + " scale(" + (this.crosslinkViewer.z) + ") " + "rotate(" + this.rotation + ")");
        this.lowerGroup.setAttribute("transform", "translate(" + this.x + " " + this.y + ")"
                + " scale(" + (this.crosslinkViewer.z) + ") " + "rotate(" + this.rotation + ")");
    }
    else {
        this.upperGroup.setAttribute("transform", "translate(" + this.x + " " + this.y + ")"
                + " scale(" + (this.crosslinkViewer.z) + ") ");
        this.lowerGroup.setAttribute("transform", "translate(" + this.x + " " + this.y + ")"
                + " scale(" + (this.crosslinkViewer.z) + ") ");
        if (this.selfLink != null) {
            if (typeof this.selfLink.thickLine !== 'undefined') {
                this.selfLink.thickLine.setAttribute("transform", "translate(" + this.x
                        + " " + this.y + ")" + " scale(" + (this.crosslinkViewer.z) + ")");
            }
                this.selfLink.line.setAttribute("transform", "translate(" + this.x
                        + " " + this.y + ")" + " scale(" + (this.crosslinkViewer.z) + ")");
                this.selfLink.highlightLine.setAttribute("transform", "translate(" + this.x
                        + " " + this.y + ")" + " scale(" + (this.crosslinkViewer.z) + ")");
        }
    }
};

CLMS.xiNET.RenderedProtein.rotOffset = 25 * 0.7; // see CLMS.xiNET.Rotator.js
CLMS.xiNET.RenderedProtein.minXDist = 30;
CLMS.xiNET.RenderedProtein.prototype.switchStickScale = function(svgP) {
    if (this.form === 0) {
        this.toStick();
    }
    else {
        var pixPerRes = CLMS.xiNET.RenderedProtein.UNITS_PER_RESIDUE * this.stickZoom; // / this.crosslinkViewer.z;
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
    this.setAllLineCoordinates();
};

CLMS.xiNET.RenderedProtein.prototype.scale = function() {
    var protLength = (this.participant.size) * CLMS.xiNET.RenderedProtein.UNITS_PER_RESIDUE * this.stickZoom;
    if (this.form === 1) {
        var labelTransform = d3.transform(this.labelSVG.getAttribute("transform"));
        var k = this.crosslinkViewer.svgElement.createSVGMatrix().rotate(labelTransform.rotate)
            .translate((-(((this.participant.size / 2) * CLMS.xiNET.RenderedProtein.UNITS_PER_RESIDUE * this.stickZoom) + 10)), CLMS.xiNET.RenderedProtein.labelY);//.scale(z).translate(-c.x, -c.y);
        this.labelSVG.transform.baseVal.initialize(this.crosslinkViewer.svgElement.createSVGTransformFromMatrix(k));

        if (this.annotations) {
			var annotArr = Array.from(this.annotations.values());
			var annotationCount = annotArr.length;
			for (var a = 0; a < annotationCount; a++){
				var anno = annotArr[a], feature = anno.feature;
				anno.pieSlice.setAttribute("d", this.getAnnotationRectPath(feature));
				anno.colouredRect.setAttribute("d", this.getAnnotationRectPath(feature));
			}
		}

        d3.select(this.peptides).attr("transform", "scale(" + (this.stickZoom) + ", 1)");

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
            "translate(" + (this.getResXwithStickZoom(this.participant.size  - 0 + 0.5) + CLMS.xiNET.RenderedProtein.rotOffset) + " 0)");

        //internal links
        for (residueLink of this.renderedCrossLinks.values()) {
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
    //~ this.upperGroup.appendChild(this.ticks);
    d3.select(this.ticks).selectAll("*").remove();

    this.scaleLabels = [];
    var ScaleMajTick = 100;
    var ScaleTicksPerLabel = 2; // varies with scale?
    var pixPerRes = CLMS.xiNET.RenderedProtein.UNITS_PER_RESIDUE * this.stickZoom; // / this.crosslinkViewer.z;
    var tick = -1;
    var lastTickX = this.getResXwithStickZoom(this.participant.size);

    for (var res = 1; res <= this.participant.size; res++) {
        if (res === 1 ||
                ((res % 100 === 0) && (200 * pixPerRes > CLMS.xiNET.RenderedProtein.minXDist)) ||
                ((res % 10 === 0) && (20 * pixPerRes > CLMS.xiNET.RenderedProtein.minXDist))
                ) {
            var tx = this.getResXwithStickZoom(res);
            if (pixPerRes >= 8 || res !== 1) {
                tickAt(this, tx);
            }
            tick = (tick + 1) % ScaleTicksPerLabel;
            // does this one get a label?
            if (tick === 0) {// && tx > 20) {
                if ((tx + CLMS.xiNET.RenderedProtein.minXDist) < lastTickX) {
                    scaleLabelAt(this, res, tx);
                }
            }
        }
        if (pixPerRes >= 8 && this.participant.sequence) {
            var seqLabelGroup = document.createElementNS(CLMS.xiNET.svgns, "g");
            seqLabelGroup.setAttribute("transform", "translate(" + this.getResXwithStickZoom(res) + " " + 0 + ")");
            var seqLabel = document.createElementNS(CLMS.xiNET.svgns, "text");
            seqLabel.setAttribute('font-family', "'Courier New', monospace");
            seqLabel.setAttribute('font-size', '10px');
            seqLabel.setAttribute("text-anchor", "middle");
            seqLabel.setAttribute("x", 0);//protein.getResXwithStickZoom(res));
            seqLabel.setAttribute("y", 3);
            seqLabel.appendChild(document.createTextNode(this.participant.sequence[res - 1]));
            seqLabelGroup.appendChild(seqLabel);
            this.scaleLabels.push(seqLabel);
            this.ticks.appendChild(seqLabelGroup);
        }
    }
    scaleLabelAt(this, this.participant.size, lastTickX);
    if (pixPerRes > 8) {
        tickAt(this, lastTickX);
    }

    function scaleLabelAt(self, text, tickX) {
        var scaleLabelGroup = document.createElementNS(CLMS.xiNET.svgns, "g");
        scaleLabelGroup.setAttribute("transform", "translate(" + tickX + " " + 0 + ")");
        var scaleLabel = document.createElementNS(CLMS.xiNET.svgns, "text");
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
        var tick = document.createElementNS(CLMS.xiNET.svgns, "line");
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
    }
    else {
        this.selfLinks.setAttribute("transform", "scale (1 1)");
        this.selfLinksHighlights.setAttribute("transform", "scale (1 1)");
    }
};

CLMS.xiNET.RenderedProtein.prototype.setHidden = function(bool) {
	if (bool) {
		this.upperGroup.remove();
		this.lowerGroup.remove();
	} else {
		this.crosslinkViewer.proteinUpper.appendChild(this.upperGroup);
		this.crosslinkViewer.proteinLower.appendChild(this.lowerGroup);
	}
    this.hidden = bool; 
};

CLMS.xiNET.RenderedProtein.prototype.setForm = function(form, svgP) {
    
    this.crosslinkViewer.model.get("tooltipModel").set("contents", null);

    if (this.busy !== true) {
            if (form == 1) {
                this.toStick();
            }
            else {
                this.toCircle(svgP);
                var r = this.getBlobRadius();

                var self = this;
                d3.select(this.outline).transition()
                    .attr("stroke-opacity", 1).attr("fill-opacity", 1)
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
            }
        //~ }
    }
};

CLMS.xiNET.RenderedProtein.prototype.toCircle = function(svgP) {
    //if (!this.participant.hidden){
		this.busy = true;
		this.removePeptides();
		if (this.upperGroup.contains(this.lowerRotator.svg)) this.upperGroup.removeChild(this.lowerRotator.svg);
		if (this.upperGroup.contains(this.upperRotator.svg))this.upperGroup.removeChild(this.upperRotator.svg);

		var protLength = this.participant.size * CLMS.xiNET.RenderedProtein.UNITS_PER_RESIDUE * this.stickZoom;
		var r = this.getBlobRadius();

		var stickZoomInterpol = d3.interpolate(this.stickZoom, 0);
		var rotationInterpol = d3.interpolate((this.rotation > 180)? this.rotation - 360 : this.rotation, 0);
		//todo: should take current tranform of label as start
		var labelTransform = d3.transform(this.labelSVG.getAttribute("transform"));
		var labelStartPoint = labelTransform.translate[0];//-(((this.participant.size / 2) * CLMS.xiNET.RenderedProtein.UNITS_PER_RESIDUE * this.stickZoom) + 10);
		var labelTranslateInterpol = d3.interpolate(labelStartPoint, -(r + 5));

		var xInterpol = null, yInterpol = null;
		if (typeof svgP !== 'undefined' && svgP !== null) {
			xInterpol = d3.interpolate(this.x, svgP.x);
			yInterpol = d3.interpolate(this.y, svgP.y);
		}

		var self = this;
		d3.select(this.ticks).transition().attr("opacity", 0).duration(CLMS.xiNET.RenderedProtein.transitionTime / 4)
					.each("end",
						function () {
							d3.select(this).selectAll("*").remove();//this === self.ticks
							//if (self.upperGroup.contains(self.ticks))self.upperGroup.removeChild(self.ticks);
						}
					);

		d3.select(this.highlight).transition()
			.attr("width", (r * 2) + 5).attr("height", (r * 2) + 5)
			.attr("x", -r - 2.5).attr("y", -r - 2.5)
			.attr("rx", r + 2.5).attr("ry", r + 2.5)
			.duration(CLMS.xiNET.RenderedProtein.transitionTime);

		//~ if (this.selfLink != null) {
		var crossLinkIter = this.renderedCrossLinks.values();
		//~ var resLinkCount = resLinks.length;
		for (residueLink of crossLinkIter) {
			//~ var residueLink = resLinks[rl];
			//~ if (residueLink.shown) {
						var selectLine = d3.select(residueLink.line);
						selectLine.attr("d",this.getCrossLinkPath(residueLink));
						selectLine.transition().attr("d",this.getAggregateSelfLinkPath())
							.duration(CLMS.xiNET.RenderedProtein.transitionTime);
						var highlightLine = d3.select(residueLink.highlightLine);
						highlightLine.attr("d",this.getCrossLinkPath(residueLink));
						highlightLine.transition().attr("d",this.getAggregateSelfLinkPath())
							.duration(CLMS.xiNET.RenderedProtein.transitionTime);
			//~ }
		}
		//~ }

		var self = this;
		if (this.annotations) {
			var annotArr = Array.from(this.annotations.values());
			var annotationCount = annotArr.length;
			for (var a = 0; a < annotationCount; a++){
				var anno = annotArr[a], feature = anno.feature, 
					pieSlice = anno.pieSlice, rectDomain = anno.colouredRect;
				
				d3.select(pieSlice).transition().attr("d", this.getAnnotationPieSliceApproximatePath(feature))
					.duration(CLMS.xiNET.RenderedProtein.transitionTime).each("end",
						function () {
							for (var b = 0; b < annotationCount; b++) {
								var annoB = annotArr[b];
								if (this === annoB.pieSlice){
									d3.select(this).attr("d", self.getAnnotationPieSliceArcPath(annoB.feature));
								}
							}
						}
					);
					
				d3.select(rectDomain).transition().attr("d", self.getAnnotationPieSliceApproximatePath(feature))
					.duration(CLMS.xiNET.RenderedProtein.transitionTime);
			}
		}

		var originalStickZoom = this.stickZoom;
		var originalRotation = this.rotation;
		var cubicInOut = d3.ease('cubic-in-out');
		d3.timer(function(elapsed) {
		  return update(elapsed / CLMS.xiNET.RenderedProtein.transitionTime);
		});
	 //~ }
	 //~ else {
		 //~ var self = this;
			//~ var labelTransform = d3.transform(self.labelSVG.getAttribute("transform"));
			//~ var k = self.crosslinkViewer.svgElement.createSVGMatrix().rotate(labelTransform.rotate).translate(labelTranslateInterpol(cubicInOut(1)), CLMS.xiNET.RenderedProtein.labelY);//.scale(z).translate(-c.x, -c.y);
			//~ self.labelSVG.transform.baseVal.initialize(self.crosslinkViewer.svgElement.createSVGTransformFromMatrix(k));

	 //~ }
		function update(interp) {
			var labelTransform = d3.transform(self.labelSVG.getAttribute("transform"));
			var k = self.crosslinkViewer.svgElement.createSVGMatrix().rotate(labelTransform.rotate).translate(labelTranslateInterpol(cubicInOut(interp)), CLMS.xiNET.RenderedProtein.labelY);//.scale(z).translate(-c.x, -c.y);
			self.labelSVG.transform.baseVal.initialize(self.crosslinkViewer.svgElement.createSVGTransformFromMatrix(k));
			if (xInterpol !== null){
				 self.setPosition(xInterpol(cubicInOut(interp)), yInterpol(cubicInOut(interp)));
			}
			var rot = rotationInterpol(cubicInOut(interp));
			self.stickZoom = stickZoomInterpol(cubicInOut(interp));
			if (self.form == 1) self.setRotation(rot);
			self.setAllLineCoordinates();

			if (interp ===  1){ // finished - tidy up
				for (renderedCrossLink of self.renderedCrossLinks.values()) {
					renderedCrossLink.hide();
				}
				//bring in new
				self.form = 0;
				//~ self.setPosition(self.x, self.y);
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
	//~ }
};

CLMS.xiNET.RenderedProtein.prototype.getX = function() {return this.x;}

CLMS.xiNET.RenderedProtein.prototype.getY = function() {return this.y;}

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

    var protLength = this.participant.size * CLMS.xiNET.RenderedProtein.UNITS_PER_RESIDUE * this.stickZoom;
    var r = this.getBlobRadius();

    var lengthInterpol = d3.interpolate((2 * r), protLength);
    var stickZoomInterpol = d3.interpolate(0, this.stickZoom);
    var rotationInterpol = d3.interpolate(0, (this.rotation > 180)? this.rotation - 360 : this.rotation);
    var labelTranslateInterpol = d3.interpolate(-(r + 5), -(((this.participant.size / 2) * CLMS.xiNET.RenderedProtein.UNITS_PER_RESIDUE * this.stickZoom) + 10));

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
    .attr("fill-opacity",  0)
        .attr("fill", "#FFFFFF")
        .attr("height", CLMS.xiNET.RenderedProtein.STICKHEIGHT)
        .attr("y",  -CLMS.xiNET.RenderedProtein.STICKHEIGHT / 2)
        .attr("rx", 0).attr("ry", 0)
        .duration(CLMS.xiNET.RenderedProtein.transitionTime);

    d3.select(this.highlight).transition()
        .attr("width", protLength + 5).attr("height", CLMS.xiNET.RenderedProtein.STICKHEIGHT + 5)
        .attr("x", this.getResXwithStickZoom(0.5) - 2.5).attr("y", (-CLMS.xiNET.RenderedProtein.STICKHEIGHT / 2) - 2.5)
        .attr("rx", 0).attr("ry", 0)
        .duration(CLMS.xiNET.RenderedProtein.transitionTime);

    var crossLinkIter = this.renderedCrossLinks.values();
    for (residueLink of crossLinkIter) {
        //~ var residueLink = resLinks[rl];
        if (residueLink.crossLink.isSelfLink() === true) {
            d3.select(residueLink.line).attr("d",this.getAggregateSelfLinkPath());
            d3.select(residueLink.line).transition().attr("d",this.getCrossLinkPath(residueLink))
                .duration(CLMS.xiNET.RenderedProtein.transitionTime);
            d3.select(residueLink.highlightLine).attr("d",this.getAggregateSelfLinkPath());
            d3.select(residueLink.highlightLine).transition().attr("d",this.getCrossLinkPath(residueLink))
                .duration(CLMS.xiNET.RenderedProtein.transitionTime);
        }
    }

    if (this.annotations) {
		var bottom = CLMS.xiNET.RenderedProtein.STICKHEIGHT / 2, top = -CLMS.xiNET.RenderedProtein.STICKHEIGHT / 2;
		var annotArr = Array.from(this.annotations.values());
		var annotationCount = annotArr.length;
		for (var a = 0; a < annotationCount; a++){
			var anno = annotArr[a], feature = anno.feature, 
				pieSlice = anno.pieSlice, rectDomain = anno.colouredRect;
			pieSlice.setAttribute("d", this.getAnnotationPieSliceApproximatePath(feature));
			d3.select(pieSlice).transition().attr("d", this.getAnnotationRectPath(feature))
				.duration(CLMS.xiNET.RenderedProtein.transitionTime);
			d3.select(rectDomain).transition().attr("d", this.getAnnotationRectPath(feature))
				.duration(CLMS.xiNET.RenderedProtein.transitionTime);
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
        var k = self.crosslinkViewer.svgElement.createSVGMatrix().rotate(labelTransform.rotate).translate(labelTranslateInterpol(cubicInOut(interp)), CLMS.xiNET.RenderedProtein.labelY);//.scale(z).translate(-c.x, -c.y);
        self.labelSVG.transform.baseVal.initialize(self.crosslinkViewer.svgElement.createSVGTransformFromMatrix(k));

        var rot = rotationInterpol(cubicInOut(interp));
        self.setRotation(rot);

        var currentLength = lengthInterpol(cubicInOut(interp));
        d3.select(self.outline).attr("width", currentLength).attr("x", - (currentLength / 2) + (0.5 * CLMS.xiNET.RenderedProtein.UNITS_PER_RESIDUE * self.stickZoom));
        self.stickZoom = stickZoomInterpol(cubicInOut(interp))
        self.setAllLineCoordinates();

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
        .delay(CLMS.xiNET.RenderedProtein.transitionTime * 0.8).duration(CLMS.xiNET.RenderedProtein.transitionTime / 2);
};

CLMS.xiNET.RenderedProtein.prototype.getAggregateSelfLinkPath = function() {
    var intraR = this.getBlobRadius() + 7;
    var sectorSize = 45;
    var arcStart = CLMS.xiNET.RenderedProtein.trig(intraR, 25 + sectorSize);
    var arcEnd = CLMS.xiNET.RenderedProtein.trig(intraR, -25 + sectorSize);
    var cp1 = CLMS.xiNET.RenderedProtein.trig(intraR, 40 + sectorSize);
    var cp2 = CLMS.xiNET.RenderedProtein.trig(intraR, -40 + sectorSize);
    return 'M 0,0 '
        + 'Q ' + cp1.x + ',' + -cp1.y + ' ' + arcStart.x + ',' + -arcStart.y
        + ' A ' + intraR + ' ' + intraR + ' 0 0 1 ' + arcEnd.x + ',' + -arcEnd.y
        + ' Q ' + cp2.x + ',' + -cp2.y + ' 0,0';
}

CLMS.xiNET.RenderedProtein.prototype.getCrossLinkPath = function(renderedCrossLink) {
    var x1 = this.getResXwithStickZoom(renderedCrossLink.crossLink.fromResidue);
    var baseLine = 0;
    if (CLMS.xiNET.RenderedProtein.UNITS_PER_RESIDUE * this.stickZoom >= 8){
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
    if (arcRadius < 15){
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
    if (renderedCrossLink.crossLink.confirmedHomomultimer){
        var curveMidX = x1 + ((x2 - x1) / 2);
        arcStart = [curveMidX, height - arcRadius];
        arcEnd = [curveMidX, height - arcRadius];
        cp1 = CLMS.xiNET.RenderedProtein.rotatePointAboutPoint([x1, height - arcRadius], start, -20);
        cp2 = CLMS.xiNET.RenderedProtein.rotatePointAboutPoint([x2, height - arcRadius], end, 20);

        //flip
        start[1] = start[1] * -1;
        cp1[1] = cp1[1] * -1;
        arcStart[1] = arcStart[1] * -1;
        arcEnd[1] = arcEnd[1] * -1;
        cp2[1] = cp2[1] * -1;
        end[1] = end[1] * -1;

    }
    else {
        cp1 = [x1, height];
        cp2 = [x2, baseLine];
        arcStart = [x1, height];
        arcEnd =  [x2, height];
    }

    return " M " + start[0] + "," + start[1]
        + " Q "  + cp1[0] + ',' + cp1[1] + ' ' + arcStart[0] + "," + arcStart[1]
        + " A " + arcRadius + "," + arcRadius + "  0 0 1 " + arcEnd[0]  + "," + arcEnd[1]
        + " Q "+ cp2[0] + ',' + cp2[1] +  " "  + end[0] + "," + end[1];

    //~ }
}


CLMS.xiNET.RenderedProtein.prototype.showPeptides = function(pepBounds) {
    if (this.form=== 1){
        var y = -CLMS.xiNET.RenderedProtein.STICKHEIGHT / 2;

        var count = pepBounds.length;
        var yIncrement = CLMS.xiNET.RenderedProtein.STICKHEIGHT / count;
        for (var i = 0; i < count; i++) {
            var pep = pepBounds[i];

            var annotColouredRect = document.createElementNS(CLMS.xiNET.svgns, "rect");
            annotColouredRect.setAttribute("class", "protein");

            //make domain rect's
            var annoSize = pep[1];
            if (annoSize > 0){
                var annotX = ((pep[0] + 0.5) - (this.participant.size/2)) * CLMS.xiNET.RenderedProtein.UNITS_PER_RESIDUE;//this.getResXUnzoomed(pep[0] + 0.5);
                var annoLength = annoSize * CLMS.xiNET.RenderedProtein.UNITS_PER_RESIDUE;
                annotColouredRect.setAttribute("x", annotX);
                annotColouredRect.setAttribute("y", y);
                annotColouredRect.setAttribute("width", annoLength);
                annotColouredRect.setAttribute("height", yIncrement);
                //style 'em
                annotColouredRect.setAttribute("fill", CLMS.xiNET.highlightColour.toRGB());
                //annotColouredRect.setAttribute("fill-opacity", "0.7");
                this.peptides.appendChild(annotColouredRect);
            }

            if (pep[2]){//homodimer like
                //TODO: eliminate duplication
                annotColouredRect = document.createElementNS(CLMS.xiNET.svgns, "rect");
                annotColouredRect.setAttribute("class", "protein");
                var annotX = ((pep[2] + 0.5) - (this.participant.size/2)) * CLMS.xiNET.RenderedProtein.UNITS_PER_RESIDUE;//this.getResXUnzoomed(pep[0] + 0.5);
                var annoLength = (pep[3] - pep[2]) * CLMS.xiNET.RenderedProtein.UNITS_PER_RESIDUE;
                annotColouredRect.setAttribute("x", annotX);
                annotColouredRect.setAttribute("y", y);
                annotColouredRect.setAttribute("width", annoLength);
                annotColouredRect.setAttribute("height", yIncrement);

                //style 'em
                annotColouredRect.setAttribute("fill", CLMS.xiNET.homodimerLinkColour.toRGB());
                annotColouredRect.setAttribute("fill-opacity", "0.5");

                this.peptides.appendChild(annotColouredRect);
            }
            y += yIncrement;
        }
   }
}

CLMS.xiNET.RenderedProtein.prototype.removePeptides = function() {
    d3.select(this.peptides).selectAll("*").remove();
}

CLMS.xiNET.RenderedProtein.prototype.getResXwithStickZoom = function(r) {
    return (r - (this.participant.size/2)) * CLMS.xiNET.RenderedProtein.UNITS_PER_RESIDUE * this.stickZoom;
 };

CLMS.xiNET.RenderedProtein.rotatePointAboutPoint = function(p, o, theta) {
    theta = (theta / 360) * Math.PI * 2;
    var rx = Math.cos(theta) * (p[0]-o[0]) - Math.sin(theta) * (p[1]-o[1]) + o[0];
    var ry = Math.sin(theta) * (p[0]-o[0]) + Math.cos(theta) * (p[1]-o[1]) + o[1];
    return [rx, ry];
}

CLMS.xiNET.RenderedProtein.prototype.checkLinks = function() {
    var pLinks = this.renderedP_PLinks.values();
    for (var pLink of pLinks) {
        pLink.check();
    }
    var links = this.renderedCrossLinks.values();
    for (var link of links) {
        link.check();
    }
}

// update all lines (e.g after a move)
CLMS.xiNET.RenderedProtein.prototype.setAllLineCoordinates = function() {
	
    var pLinks = this.renderedP_PLinks.values();
    for (var pLink of pLinks) {
        pLink.setLineCoordinates(this);
    }
    
    var renderedCrosslinkIter = this.renderedCrossLinks.values();
    for (var renderedCrosslink of renderedCrosslinkIter) {
        renderedCrosslink.setLineCoordinates(this);
    }
    
};

CLMS.xiNET.RenderedProtein.prototype.hasExternalLink = function() {
	for (p_pLink of this.renderedP_PLinks.values()) {
		if (p_pLink.crossLinks[0].isSelfLink() === false) return true; 
	}
	return false;
};

CLMS.xiNET.RenderedProtein.prototype.clearPositionalFeatures = function(posFeats) {
    this.annotations = new Map ();
    if (this.circDomains) d3.select(this.circDomains).selectAll("*").remove();
    if (this.rectDomains) d3.select(this.rectDomains).selectAll("*").remove();
}

CLMS.xiNET.RenderedProtein.prototype.setPositionalFeatures = function() {
    this.clearPositionalFeatures();
    //create new annotations
    var featuresShown = [];         
    			    
	//TODO: here we need to add the aligned region annotatiion, if they're selected
	
	//add uniprot features
	if (this.participant.uniprot) {
		for (var feature of this.participant.uniprot.features) {
			var annotationTypeId = feature.category + "-" + feature.type
			var filtered = this.crosslinkViewer.model.get("annotationTypes").filter({id:annotationTypeId})
			var annotationType = filtered[0];
			if (annotationType.get("shown") === true) {
				featuresShown.push(feature);
			}
		}
	}
	
	if (featuresShown) {                    
        //draw longest regions first
        featuresShown.sort(function(a, b) {
            return (b.end - b.begin) - (a.end - a.begin);
        });
        
        var fsLen = featuresShown.length;
        for (var f = 0; f < fsLen;f++) {
            
            var anno = featuresShown[f];

			var convStart = anno.begin;
			var convEnd = anno.end;
			var alignModel = this.crosslinkViewer.model.get("alignColl").get(this.participant.id);
			if (alignModel) {
				convStart = alignModel.mapToSearch ("Canonical", anno.begin);
				convEnd = alignModel.mapToSearch ("Canonical", anno.end);
				if (convStart <= 0) { convStart = -convStart; }   // <= 0 indicates no equal index match, do the - to find nearest index
				if (convEnd <= 0) { convEnd = -convEnd; }         // <= 0 indicates no equal index match, do the - to find nearest index
				//TODO: tooltip requring these to be written into feature object, seems wrong? 
				anno.fstart = convStart;
				anno.fend =convEnd;
			}
			
			var fid = anno.category + "-" + anno.type + "[" + convStart + " - " + convEnd + "]";
            
			var pieSlice = document.createElementNS(CLMS.xiNET.svgns, "path");
            var colouredRect = document.createElementNS(CLMS.xiNET.svgns, "path");
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
	
			var c = CLMSUI.domainColours(anno.category + "-" + anno.type);
			pieSlice.setAttribute("fill", c);
			pieSlice.setAttribute("stroke", c);
			colouredRect.setAttribute("fill", c);
			colouredRect.setAttribute("stroke", c);
            
            pieSlice.setAttribute("data-feature", fid);
            
            var self = this;
            
            //only needs tooltip on pie slice, its always on top even if transparent
            pieSlice.onmouseover = function (evt) {
				self.crosslinkViewer.preventDefaultsAndStopPropagation(evt);
				var feature = self.annotations.get(evt.target.getAttribute("data-feature")).feature;
				self.crosslinkViewer.model.get("tooltipModel")
                    //.set("header", d.id.replace("_", " "))
                    .set("header", CLMSUI.modelUtils.makeTooltipTitle.feature())
                    .set("contents", 
						CLMSUI.modelUtils.makeTooltipContents.feature(feature)
					)
                    .set("location", {pageX: evt.pageX, pageY: evt.pageY})
                ;
			} ;
			
			this.annotations.set(fid, {feature: anno, pieSlice:pieSlice, colouredRect: colouredRect});
			this.circDomains.appendChild(pieSlice);
            this.rectDomains.appendChild(colouredRect);
        }
    }
};

//TODO: remove this, use rotateAboutPoint instead
CLMS.xiNET.RenderedProtein.trig = function(radius, angleDegrees) {
        //x = rx + radius * cos(theta) and y = ry + radius * sin(theta)
        var radians = (angleDegrees / 360) * Math.PI * 2;
        return {
            x: (radius * Math.cos(radians)),
            y: (radius * Math.sin(radians))
        };
};

CLMS.xiNET.RenderedProtein.prototype.getAnnotationPieSliceArcPath = function(annotation) {
	var convStart = annotation.begin;
	var convEnd = annotation.end;
	var alignModel = this.crosslinkViewer.model.get("alignColl").get(this.participant.id);
    if (alignModel) {
		convStart = alignModel.mapToSearch ("Canonical", annotation.begin);
		convEnd = alignModel.mapToSearch ("Canonical", annotation.end);
		if (convStart <= 0) { convStart = -convStart; }   // <= 0 indicates no equal index match, do the - to find nearest index
		if (convEnd <= 0) { convEnd = -convEnd; }         // <= 0 indicates no equal index match, do the - to find nearest index
	}

    var startAngle = ((convStart - 1) / this.participant.size) * 360;
    var endAngle = ((convEnd) / this.participant.size) * 360;
    var radius = this.getBlobRadius() - 2;
    var arcStart = CLMS.xiNET.RenderedProtein.trig(radius, startAngle - 90);
    var arcEnd = CLMS.xiNET.RenderedProtein.trig(radius, endAngle - 90);
    var largeArch = 0;
    if ((endAngle - startAngle) > 180 || (endAngle == startAngle)) {
        largeArch = 1;
    }
    return "M0,0 L" + arcStart.x + "," + arcStart.y + " A" + radius + ","
        + radius + " 0 " + largeArch + " 1 " + arcEnd.x + "," + arcEnd.y + " Z";
};

CLMS.xiNET.RenderedProtein.prototype.getAnnotationPieSliceApproximatePath = function(annotation) {
	//TODO - eliminate duplication
	var convStart = annotation.begin;
	var convEnd = annotation.end;
	var alignModel = this.crosslinkViewer.model.get("alignColl").get(this.participant.id);
    if (alignModel) {
		convStart = alignModel.mapToSearch ("Canonical", annotation.begin);
		convEnd = alignModel.mapToSearch ("Canonical", annotation.end);
		if (convStart <= 0) { convStart = -convStart; }   // <= 0 indicates no equal index match, do the - to find nearest index
		if (convEnd <= 0) { convEnd = -convEnd; }         // <= 0 indicates no equal index match, do the - to find nearest index
	}
	
    //approximate pie slice
    var startAngle = ((convStart - 1) / this.participant.size) * 360;
    var endAngle = ((convEnd) / this.participant.size) * 360;
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
	//TODO - eliminate duplication
	var convStart = annotation.begin;
	var convEnd = annotation.end;
	var alignModel = this.crosslinkViewer.model.get("alignColl").get(this.participant.id);
    if (alignModel) {
		convStart = alignModel.mapToSearch ("Canonical", annotation.begin);
		convEnd = alignModel.mapToSearch ("Canonical", annotation.end);
		if (convStart <= 0) { convStart = -convStart; }   // <= 0 indicates no equal index match, do the - to find nearest index
		if (convEnd <= 0) { convEnd = -convEnd; }         // <= 0 indicates no equal index match, do the - to find nearest index
	}

    //domain as rectangular path
    var bottom = CLMS.xiNET.RenderedProtein.STICKHEIGHT / 2, top = -CLMS.xiNET.RenderedProtein.STICKHEIGHT / 2;
    var annotX = this.getResXwithStickZoom(convStart - 0.5);
    var annotSize = (1 + (convEnd - convStart));
    var annotLength = annotSize * CLMS.xiNET.RenderedProtein.UNITS_PER_RESIDUE * this.stickZoom;
    var rectPath = "M " + annotX + "," + bottom;
    for (var sia = 0; sia <= CLMS.xiNET.RenderedProtein.stepsInArc; sia++) {
        var step = annotX + (annotLength * (sia / CLMS.xiNET.RenderedProtein.stepsInArc));
        rectPath += " L " + step + "," + top;
    }
    rectPath +=  " L " + (annotX  + annotLength)+ "," + bottom
        + " Z";
    return rectPath;
};

//TODO: should be some sort of config options
CLMS.xiNET.RenderedProtein.STICKHEIGHT = 20;        // height of stick in pixels
CLMS.xiNET.RenderedProtein.MAXSIZE = 100;           // residue count of longest sequence
CLMS.xiNET.RenderedProtein.UNITS_PER_RESIDUE = 1;   // this value is changed during init (calculated on basis of MAXSIZE)
CLMS.xiNET.RenderedProtein.LABELMAXLENGTH = 60;     // maximal width reserved for protein-labels
CLMS.xiNET.RenderedProtein.labelY = -5;             // label Y offset, better if calc'd half height of label once rendered
CLMS.xiNET.RenderedProtein.transitionTime = 650;
CLMS.xiNET.RenderedProtein.stepsInArc = 5;
