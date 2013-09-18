Protein.STICKHEIGHT = 20;
Protein.MAXSIZE = 0;
Protein.UNITS_PER_RESIDUE = 1;
Protein.LABELMAXLENGTH = 60;
Protein.labelY = -5;
Protein.domainColours = d3.scale.category20c();

function Protein(id, xlvController, acc, name) {
    this.id = id;
    this.accession = acc;
    this.xlv = xlvController;
    this.name = name;
    this.tooltip = this.accession;
}
Protein.prototype.initProtein = function (sequence, name, description, size) {
    if (this.name == null) {
        this.name = name;
    }
    if (/\d/.test(sequence)) {
        this.labeling = '';
        if (sequence.indexOf('K4') !== -1)
            this.labeling += 'K4';
        if (sequence.indexOf('K6') !== -1)
            this.labeling += 'K6';
        if (sequence.indexOf('K8') !== -1)
            this.labeling += 'K8';
        if (sequence.indexOf('K10') !== -1)
            this.labeling += 'R4';
        if (sequence.indexOf('R6') !== -1)
            this.labeling += 'R6';
        if (sequence.indexOf('R8') !== -1)
            this.labeling += 'R8';
        if (sequence.indexOf('R10') !== -1)
            this.labeling += 'R10';
    }
    this.sequence = sequence.replace(/[^A-Z]/g, '');
    if (typeof size !== 'undefined') {
        this.size = size;
    } else {
        this.size = this.sequence.length;
    }
    if (Protein.MAXSIZE < this.size) {
        Protein.MAXSIZE = this.size;
    }
    this.proteinLinks = d3.map();
    this.internalLink = null;
    this.x = null;
    this.y = null;
    this.rotation = 0;
    this.previousRotation = this.rotation;
    this.stickZoom = 1;
    this.form = null;
    this.isParked = false;
    this.isFlipped = false;
    this.isSelected = false;
    this.customAnnotations = null;
    this.rectX;
    this.upperGroup = document.createElementNS(xinet.svgns, "g");
    this.upperGroup.setAttribute("class", "protein");
    this.rectDomainsColouredContainer = document.createElementNS(xinet.svgns, "g");
    this.rectDomainsColouredContainer.setAttribute("class", "protein");
    this.rectDomainsColoured = document.createElementNS(xinet.svgns, "g");
    this.rectDomainsColoured.setAttribute("class", "protein");
    this.rectDomainsMouseEvents = document.createElementNS(xinet.svgns, "g");
    this.rectDomainsMouseEvents.setAttribute("class", "protein");
    this.circDomains = document.createElementNS(xinet.svgns, "g");
    this.circDomains.setAttribute("class", "protein");
    this.labelSVG = document.createElementNS(xinet.svgns, "text");
    this.labelSVG.setAttribute("text-anchor", "end");
    this.labelSVG.setAttribute("x", 0);
    this.labelSVG.setAttribute("y", 10);
    this.labelSVG.setAttribute('font-family', 'Arial');
    this.labelSVG.setAttribute('font-size', '16');
    if (this.name !== null & this.name !== "") {
        this.labelText = this.name;
    } else if (description !== null & description !== "") {
        this.labelText = description;
        this.name = description;
    } else {
        this.labelText = this.accession;
    }
    var organismCheck = this.labelText.indexOf("_CHICK");
    if (organismCheck === -1) {
        organismCheck = this.labelText.indexOf("_MYCPN");
    }
    if (organismCheck === -1) {
        organismCheck = this.labelText.indexOf("_ECOLI");
    }
    if (organismCheck !== -1) {
        this.labelText = this.labelText.substring(0, organismCheck);
    }
    if (this.labelText.length > 19) {
        this.labelText = this.labelText.substr(0, 16) + "...";
    }
    if (typeof this.labeling !== 'undefined') {
        this.labelText = '[' + this.labeling + '] ' + this.labelText;
    }
    this.labelTextNode = document.createTextNode(this.labelText);
    this.labelSVG.setAttribute('class', 'xlv_text');
    this.labelSVG.appendChild(this.labelTextNode);
    this.upperGroup.appendChild(this.labelSVG);
    this.blob = document.createElementNS(xinet.svgns, "circle");
    this.blob.setAttribute("cx", 0);
    this.blob.setAttribute("cy", 0);
    this.blob.setAttribute("r", this.getBlobRadius());
    this.blob.setAttribute("fill", "white");
    this.blob.setAttribute("fill-opacity", "1");
    this.blob.setAttribute("stroke", "black");
    this.blob.setAttribute("stroke-width", "1");
    this.blobHighlight = document.createElementNS(xinet.svgns, "circle");
    this.blobHighlight.setAttribute("cx", 0);
    this.blobHighlight.setAttribute("cy", 0);
    this.blobHighlight.setAttribute("r", this.getBlobRadius());
    this.blobHighlight.setAttribute("stroke-opacity", "0");
    if (xinet.highlightColour !== undefined)
        this.blobHighlight.setAttribute("stroke", xinet.highlightColour.toRGB());
    this.blobHighlight.setAttribute("stroke-width", "10");
    this.parked = document.createElementNS(xinet.svgns, "circle");
    this.parked.setAttribute("cx", 0);
    this.parked.setAttribute("cy", 0);
    this.parked.setAttribute("r", this.getBlobRadius());
    this.parked.setAttribute("class", "Xlr_protein Xlr_parked");
    this.parked.setAttribute("fill", "lightGrey");
    this.parked.setAttribute("fill-opacity", "0.75");
    this.parked.setAttribute("stroke", "none");
    this.stick = null;
    this.intraLinksHighlights = document.createElementNS(xinet.svgns, "g");
    this.intraLinksHighlights.setAttribute("class", "highlights");
    this.intraLinks = document.createElementNS(xinet.svgns, "g");
    this.intraLinks.setAttribute("class", "intraLinks");
    this.rectAndTicks = document.createElementNS(xinet.svgns, "g");
    this.rectAndTicks.setAttribute("class", "rectAndTicks");
    this.rect = document.createElementNS(xinet.svgns, "g");
    this.rect.setAttribute("class", "rect");
    this.rectAndTicks.appendChild(this.rect);
    this.p = document.createElementNS(xinet.svgns, "rect");
    this.p.setAttribute("fill", "none");
    this.p.setAttribute("stroke", "black");
    this.p.setAttribute("stroke-width", "0.75");
    this.rectHighlight = document.createElementNS(xinet.svgns, "rect");
    this.rectHighlight.setAttribute("stroke-opacity", "0");
    if (xinet.highlightColour !== undefined)
        this.rectHighlight.setAttribute("stroke", xinet.highlightColour.toRGB());
    this.rectHighlight.setAttribute("stroke-width", "10");
    this.rectHighlight.setAttribute("fill", "none");
    this.rectDomainsColouredContainer.appendChild(this.rectHighlight);
    this.rectDomainsColouredContainer.appendChild(this.rectDomainsColoured);
    this.rectAndTicks.appendChild(this.p);
    this.ticks = null;
    this.scaleLabels = new Array();
    var self = this;
    this.upperGroup.onmousedown = function (evt) {
        self.xlv.preventDefaultsAndStopPropagation(evt);
        if (self.xlv.force !== undefined) {
            self.xlv.force.stop();
        }
        self.xlv.dragElement = self;
        if (evt.ctrlKey === false) {
            self.xlv.clearSelection();
            self.setSelected(true);
        } else {
            self.setSelected(!this.isSelected);
        }
        var p = self.xlv.getEventPoint(evt);
        self.xlv.dragStart = self.xlv.mouseToSVG(p.x, p.y);
        self.printAnnotationInfo();
        return false;
    };
    this.upperGroup.onmouseover = function (evt) {
        self.xlv.preventDefaultsAndStopPropagation(evt);
        self.showHighlight(true);
        self.xlv.setTooltip(self.tooltip);
        return false;
    };
    this.upperGroup.onmouseout = function (evt) {
        self.xlv.preventDefaultsAndStopPropagation(evt);
        self.showHighlight(false);
        self.xlv.hideTooltip();
        return false;
    };
    this.upperGroup.ondblclick = function (evt) {
        var p = self.xlv.getEventPoint(evt);
        var c = self.xlv.mouseToSVG(p.x, p.y);
        if (self.form === 0) {
            self.setForm(1, c);
        } else {
            self.setForm(0, c);
        }
        self.xlv.checkLinks();
    };
};
Protein.prototype.getBlobRadius = function () {
    return Math.sqrt(this.size / Math.PI);
};
Protein.prototype.toJSON = function () {
    return {
        x: this.x,
        y: this.y,
        rot: this.rotation,
        form: this.form,
        stickZoom: this.stickZoom,
        parked: this.isParked,
        flipped: this.isFlipped,
        annot: this.customAnnotations
    };
};
Protein.prototype.addLink = function (link) {
    if (!this.proteinLinks.has(link.id)) {
        this.proteinLinks.set(link.id, link);
    }
    if (link.intra) {
        this.internalLink = link;
    }
};
Protein.prototype.showHighlight = function (show) {
    if (show) {
        this.blobHighlight.setAttribute("stroke", xinet.highlightColour.toRGB());
        this.rectHighlight.setAttribute("stroke", xinet.highlightColour.toRGB());
        this.blobHighlight.setAttribute("stroke-opacity", "1");
        this.rectHighlight.setAttribute("stroke-opacity", "1");
    } else {
        if (this.isSelected === false) {
            if (this.form !== 1)
                this.blobHighlight.setAttribute("stroke-opacity", "0");
            else
                this.rectHighlight.setAttribute("stroke-opacity", "0");
        }
        this.blobHighlight.setAttribute("stroke", xinet.selectedColour.toRGB());
        this.rectHighlight.setAttribute("stroke", xinet.selectedColour.toRGB());
    }
};
Protein.prototype.setSelected = function (select) {};
Protein.prototype.setRotation = function (angle) {
    this.previousRotation = this.rotation;
    this.rotation = angle % 360;
    if (this.rotation < 0)
        this.rotation += 360;
    this.rectHighlight.setAttribute("transform", "rotate(" + this.rotation + ")");
    this.stick.setAttribute("transform", "rotate(" + this.rotation + ")");
    this.rectDomainsColoured.setAttribute("transform", "rotate(" + this.rotation + ") scale(" + (this.stickZoom) + " 1 )");
    var sll = this.scaleLabels.length;
    if (this.rotation > 90 && this.rotation <= 270) {
        this.labelSVG.setAttribute("transform", " rotate(" + (this.rotation - 180) + ")" + "translate( -" + (((this.size / 2) * Protein.UNITS_PER_RESIDUE * this.stickZoom) + 10) + " " + Protein.labelY + ")");
        for (var i = 0; i < sll; i++) {
            this.scaleLabels[i].setAttribute("transform", "rotate(180)");
        }
    } else {
        this.labelSVG.setAttribute("transform", " rotate(" + this.rotation + ")" + "translate( -" + (((this.size / 2) * Protein.UNITS_PER_RESIDUE * this.stickZoom) + 10) + " " + Protein.labelY + ")");
        for (var j = 0; j < sll; j++) {
            this.scaleLabels[j].setAttribute("transform", "rotate(0)");
        }
    }
};
Protein.prototype.setPosition = function (x, y) {
    this.x = x;
    this.y = y;
    this.rectDomainsColouredContainer.setAttribute("transform", "translate(" + this.x + " " + this.y + ")" + " scale(" + (this.xlv.z) + ")");
    this.upperGroup.setAttribute("transform", "translate(" + this.x + " " + this.y + ")" + " scale(" + (this.xlv.z) + ")");
    if (this.internalLink != null) {
        if (typeof this.internalLink.fatLine !== 'undefined') {
            this.internalLink.fatLine.setAttribute("transform", "translate(" + this.x + " " + this.y + ")" + " scale(" + (this.xlv.z) + ")");
        }
    }
};
Protein.rotOffset = 20 * 0.7;
Protein.minXDist = 30;
Protein.prototype.switchStickScale = function (svgP) {
    if (this.isParked) {
        this.toggleParked();
    }
    if (this.form === 0) {
        this.fromBlob();
        this.toStick();
    } else {
        var pixPerRes = Protein.UNITS_PER_RESIDUE * this.stickZoom;
        if (pixPerRes > 8) {
            this.stickZoom = 0.5;
            this.setPosition(svgP.x, svgP.y);
        } else {
            this.stickZoom = this.stickZoom * 3;
            var dx = this.x - (svgP.x);
            var dy = this.y - (svgP.y);
            if (this.rotation === 0 || this.rotation === 180) {
                dy = 0;
            }
            this.setPosition(this.x + (dx * 2), this.y + (dy * 2));
        }
    }
    this.scale();
    this.setAllLineCoordinates();
};
Protein.prototype.scale = function () {
    var protLength = (this.size) * Protein.UNITS_PER_RESIDUE * this.stickZoom;
    if (this.form === 1) {
        this.setRotation(this.rotation);
        this.setAllLineCoordinates();
        this.rect.setAttribute("transform", " scale(" + (this.stickZoom) + " 1 )");
        this.rectDomainsMouseEvents.setAttribute("transform", " scale(" + (this.stickZoom) + " 1 )");
        this.lowerRotator.svg.setAttribute("transform", "translate(" + (this.getResXwithStickZoom(0) - Protein.rotOffset) + " 0)");
        this.upperRotator.svg.setAttribute("transform", "translate(" + (this.getResXwithStickZoom(this.size) + Protein.rotOffset) + " 0)");
        if (this.internalLink != null) {
            var resLinks = this.internalLink.residueLinks.values();
            var iLinkCount = resLinks.length;
            for (var l = 0; l < iLinkCount; l++) {
                resLinks[l].setUpCurve();
            }
        }
        if (this.ticks !== null)
            this.rectAndTicks.removeChild(this.ticks);
        this.ticks = getScaleGroup(this);
        this.p.setAttribute("x", this.getResXwithStickZoom(0));
        this.p.setAttribute("y", -Protein.STICKHEIGHT / 2);
        this.p.setAttribute("width", protLength);
        this.p.setAttribute("height", Protein.STICKHEIGHT);
        this.rectHighlight.setAttribute("x", this.getResXwithStickZoom(0));
        this.rectHighlight.setAttribute("y", -Protein.STICKHEIGHT / 2);
        this.rectHighlight.setAttribute("width", protLength);
        this.rectHighlight.setAttribute("height", Protein.STICKHEIGHT);
        this.rectAndTicks.appendChild(this.ticks);
        this.setRotation(this.rotation);
    }

    function getScaleGroup(protein) {
        protein.scaleLabels = new Array();
        var ScaleMajTick = 100;
        var ScaleTicksPerLabel = 2;
        var pixPerRes = Protein.UNITS_PER_RESIDUE * protein.stickZoom;
        var scaleGroup = document.createElementNS(xinet.svgns, "g");
        var tick = -1;
        var lastTickX = protein.getResXwithStickZoom(protein.size);
        var testOffset100 = 0;
        var testOffset10 = 0;
        for (var res = 1; res <= protein.size; res++) {
            if (res === 1 || ((res % 100 === testOffset100) && (200 * pixPerRes > Protein.minXDist)) || ((res % 10 === testOffset10) && (20 * pixPerRes > Protein.minXDist))) {
                var tx = protein.getResXwithStickZoom(res);
                tickAt(scaleGroup, tx);
                tick = (tick + 1) % ScaleTicksPerLabel;
                if (tick === 0) {
                    if ((tx + Protein.minXDist) < lastTickX) {
                        scaleLabelAt(res, scaleGroup, tx);
                    }
                }
            }
            if (pixPerRes > 8) {
                var seqLabelGroup = document.createElementNS(xinet.svgns, "g");
                seqLabelGroup.setAttribute("transform", "translate(" + protein.getResXwithStickZoom(res) + " " + 0 + ")");
                var seqLabel = document.createElementNS(xinet.svgns, "text");
                seqLabel.setAttribute('font-family', 'Arial');
                seqLabel.setAttribute('font-size', '10');
                seqLabel.setAttribute("text-anchor", "end");
                seqLabel.setAttribute("x", 0);
                seqLabel.setAttribute("y", 0);
                seqLabel.appendChild(document.createTextNode(protein.sequence[res - 1]));
                seqLabelGroup.appendChild(seqLabel);
                protein.scaleLabels.push(seqLabel);
                scaleGroup.appendChild(seqLabelGroup);
            }
        }
        scaleLabelAt(protein.size, scaleGroup, lastTickX);
        tickAt(scaleGroup, lastTickX);
        return scaleGroup;

        function scaleLabelAt(text, group, tickX) {
            var scaleLabelGroup = document.createElementNS(xinet.svgns, "g");
            scaleLabelGroup.setAttribute("transform", "translate(" + tickX + " " + 0 + ")");
            var scaleLabel = document.createElementNS(xinet.svgns, "text");
            scaleLabel.setAttribute("class", "Xlr_proteinScaleLabelText");
            scaleLabel.setAttribute('font-family', 'Arial');
            scaleLabel.setAttribute('font-size', '14');
            scaleLabel.setAttribute("text-anchor", "middle");
            scaleLabel.setAttribute("x", 0);
            scaleLabel.setAttribute("y", Protein.STICKHEIGHT + 3);
            if (xinet.sid === 682)
                text = text + 33;
            else if (protein.name === 'Ska1Domain') {
                text = text + 132;
            }
            scaleLabel.appendChild(document.createTextNode(text));
            scaleLabelGroup.appendChild(scaleLabel);
            protein.scaleLabels.push(scaleLabel);
            group.appendChild(scaleLabelGroup);
        }

        function tickAt(group, tickX) {
            var mayt = document.createElementNS(xinet.svgns, "line");
            mayt.setAttribute("x1", tickX);
            mayt.setAttribute("y1", (-Protein.STICKHEIGHT / 2) * 0.75);
            mayt.setAttribute("x2", tickX);
            mayt.setAttribute("y2", ((-Protein.STICKHEIGHT / 2) + Protein.STICKHEIGHT) * 0.75);
            mayt.setAttribute("stroke", "black");
            group.appendChild(mayt);
        }
    }
};
Protein.prototype.toggleFlipped = function () {
    this.isFlipped = !this.isFlipped;
    if (this.isFlipped) {
        this.intraLinks.setAttribute("transform", "scale (1 -1)");
        this.intraLinksHighlights.setAttribute("transform", "scale (1 -1)");
    } else {
        this.intraLinks.setAttribute("transform", "scale (1 1)");
        this.intraLinksHighlights.setAttribute("transform", "scale (1 1)");
    }
};
Protein.prototype.setParked = function (bool, svgP) {
    if (this.isParked === true && bool == false) {
        this.fromParked();
        if (this.form === 0) {
            this.toBlob();
        } else {
            this.toStick();
        }
        this.scale();
        this.setAllLineCoordinates();
    } else if (this.isParked === false && bool == true) {
        if (this.form === 0) {
            this.fromBlob();
        } else {
            this.fromStick();
            if (svgP !== undefined && svgP !== null) {
                this.setPosition(svgP.x, svgP.y);
            }
        }
        this.toParked();
    }
};
Protein.prototype.setForm = function (form, svgP) {
    if (this.isParked) {
        this.form = form;
        this.setParked(false);
        this.xlv.stickUnderMouse = null;
    } else {
        if (form == 1) {
            if (this.form === 0) {
                this.fromBlob();
            }
            this.toStick();
        } else {
            if (this.form === 1) {
                this.fromStick();
            }
            if (svgP !== undefined && svgP !== null) {
                this.setPosition(svgP.x, svgP.y);
            }
            this.toBlob();
            this.xlv.stickUnderMouse = null;
        }
        this.scale();
        this.setAllLineCoordinates();
    }
};
Protein.prototype.fromBlob = function () {
    this.upperGroup.removeChild(this.circDomains);
    this.upperGroup.removeChild(this.blob);
    this.upperGroup.removeChild(this.blobHighlight);
};
Protein.prototype.fromParked = function () {
    this.isParked = false;
    this.upperGroup.removeChild(this.parked);
};
Protein.prototype.toBlob = function () {
    this.form = 0;
    if (this.isParked === false) {
        this.upperGroup.appendChild(this.blobHighlight);
        this.upperGroup.appendChild(this.blob);
        this.upperGroup.appendChild(this.circDomains);
        this.labelSVG.setAttribute("transform", "translate( -" + (this.getBlobRadius() + 5) + " " + Protein.labelY + ")");
        var links = this.proteinLinks.values();
        var c = links.length;
        for (var l = 0; l < c; l++) {
            var link = links[l];
            if ((link.getFromProtein() === this && link.getToProtein().form === 0) || (link.getToProtein() === this && link.getFromProtein().form === 0)) {
                for (var rl in link.residueLinks) {
                    var resLink = link.residueLinks[rl];
                    if (resLink.shown) {
                        resLink.hide();
                    }
                }
            }
        }
    }
};
Protein.prototype.toParked = function () {
    this.isParked = true;
    this.upperGroup.appendChild(this.parked);
    this.labelSVG.setAttribute("transform", "translate( -" + (this.getBlobRadius() + 5) + " " + Protein.labelY + ")");
    var c = this.proteinLinks.values().length;
    for (var l = 0; l < c; l++) {
        var link = this.proteinLinks.values()[l];
        link.hide();
        for (var rl in link.residueLinks) {
            var resLink = link.residueLinks[rl];
            if (resLink.shown) {
                resLink.hide();
            }
        }
    }
};
Protein.prototype.fromStick = function () {
    this.xlv.proteinLower.removeChild(this.rectDomainsColouredContainer);
    this.upperGroup.removeChild(this.stick);
};
Protein.prototype.toStick = function () {
    this.form = 1;
    if (this.isParked === false) {
        if (this.stick === null)
            this.initStick();
        this.xlv.proteinLower.appendChild(this.rectDomainsColouredContainer);
        this.setRotation(this.rotation);
        this.upperGroup.appendChild(this.stick);
        if (this.internalLink != null) {
            var intraResLinks = this.internalLink.residueLinks.values();
            var rlCount = intraResLinks.length;
            if (typeof intraResLinks[0].line === 'undefined') {
                for (var irl = 0; irl < rlCount; irl++) {
                    intraResLinks[irl].initSVG();
                }
            }
        }
        this.scale();
        if (this.isSelected === true) {
            this.rectHighlight.setAttribute("stroke", xinet.selectedColour.toRGB());
            this.rectHighlight.setAttribute("stroke-opacity", "1");
        }
        var c = this.proteinLinks.values().length;
        for (var l = 0; l < c; l++) {
            var link = this.proteinLinks.values()[l];
            if (link.shown) {
                link.hide();
            }
        }
    }
};
Protein.prototype.initStick = function () {
    if (this.stick !== null) {} else {
        this.lowerRotator = new Rotator(this, 0, this.xlv);
        this.upperRotator = new Rotator(this, 1, this.xlv);
        this.stick = document.createElementNS(xinet.svgns, "g");
        this.stick.appendChild(this.rectAndTicks);
        this.stick.setAttribute("class", "stick");
        this.stick.appendChild(this.intraLinksHighlights);
        this.stick.appendChild(this.intraLinks);
        this.stick.appendChild(this.rectDomainsMouseEvents);
        var protLength = this.size * Protein.UNITS_PER_RESIDUE;
        this.rectX = -(protLength / 2);
        var y = -Protein.STICKHEIGHT / 2;
        getBackgroundRect(this);
        this.rectAndTicks.appendChild(this.rect);
        this.stick.appendChild(this.lowerRotator.svg);
        this.stick.appendChild(this.upperRotator.svg);
    }

    function getBackgroundRect(protein) {
        var p = document.createElementNS(xinet.svgns, "rect");
        p.setAttribute("class", "pBackground Xlr_protein");
        p.setAttribute("x", protein.getResXUnzoomed(0));
        p.setAttribute("y", y);
        p.setAttribute("width", (protein.size) * Protein.UNITS_PER_RESIDUE);
        p.setAttribute("height", Protein.STICKHEIGHT);
        p.setAttribute("fill-opacity", "0");
        p.setAttribute("stroke", "none");
        protein.rect.appendChild(p);
    }
};
Protein.prototype.getResXUnzoomed = function (r) {
    return (Protein.UNITS_PER_RESIDUE * r) + this.rectX;
};
Protein.prototype.getResXwithStickZoom = function (r) {
    return this.getResXUnzoomed(r) * this.stickZoom;
};
Protein.prototype.getResidueCoordinates = function (r) {
    if (Protein.UNITS_PER_RESIDUE === undefined)
        alert("Error: Protein.UNITS_PER_RESIDUE is undefined");
    if (r === undefined)
        alert("Error: residue number is undefined");
    var x = this.getResXwithStickZoom(r) * this.xlv.z;
    var y = 0;
    if (x !== 0) {
        var l = Math.abs(x);
        var a = Math.acos(x / l);
        var rotRad = (this.rotation / 360) * Math.PI * 2;
        if (this.rotation !== 0) {
            x = l * Math.cos(rotRad + a);
            y = l * Math.sin(rotRad + a);
        }
    }
    x = x + this.x;
    y = y + this.y;
    return [x, y];
};
Protein.prototype.setAllLineCoordinates = function () {
    var links = this.proteinLinks.values();
    var c = links.length;
    for (var l = 0; l < c; l++) {
        var link = links[l];
        if (link.getFromProtein().form === 0 && link.getToProtein().form === 0) {
            this.setLineCoordinates(link);
        } else {
            var resLinks = link.residueLinks.values();
            var resLinkCount = resLinks.length;
            for (var rl = 0; rl < resLinkCount; rl++) {
                var residueLink = resLinks[rl];
                this.setLineCoordinates(residueLink);
            }
        }
    }
};
Protein.prototype.setLineCoordinates = function (link) {
    if (this.x == null || this.y == null) {
        return;
    }
    if (link.shown) {
        if (link.getFromProtein() === this) {
            if (this.form === 0) {
                if (link.getToProtein().form === 0) {
                    link.line.setAttribute("x1", this.x);
                    link.line.setAttribute("y1", this.y);
                    link.highlightLine.setAttribute("x1", this.x);
                    link.highlightLine.setAttribute("y1", this.y);
                    link.fatLine.setAttribute("x1", this.x);
                    link.fatLine.setAttribute("y1", this.y);
                } else {
                    link.setLineCoord(true, [this.x, this.y]);
                }
            } else {
                var coord = this.getResidueCoordinates(link.fromResidue);
                link.setLineCoord(true, coord);
            }
        } else if (link.getToProtein() === this) {
            if (this.form === 0) {
                if (link.getFromProtein().form === 0) {
                    link.line.setAttribute("x2", this.x);
                    link.line.setAttribute("y2", this.y);
                    link.highlightLine.setAttribute("x2", this.x);
                    link.highlightLine.setAttribute("y2", this.y);
                    link.fatLine.setAttribute("x2", this.x);
                    link.fatLine.setAttribute("y2", this.y);
                } else {
                    link.setLineCoord(false, [this.x, this.y]);
                }
            } else {
                var coord = this.getResidueCoordinates(link.toResidue);
                link.setLineCoord(false, coord);
            }
        }
    }
};
Protein.prototype.countExternalLinks = function () {
    if (this.isParked) {
        return 0;
    }
    var countExternal = 0;
    var c = this.proteinLinks.keys().length;
    for (var l = 0; l < c; l++) {
        var link = this.proteinLinks.values()[l];
        if (!link.intra) {
            if (link.check() === true) {
                countExternal++;
            }
        }
    }
    return countExternal;
};
Protein.prototype.getSubgraph = function (subgraphs) {
    if (this.subgraph == null) {
        var subgraph = {
            nodes: d3.map(),
            links: d3.map()
        };
        subgraph.nodes.set(this.id, this);
        if (this.isParked === false) {
            this.subgraph = this.addConnectedNodes(subgraph);
        }
        this.xlv.subgraphs.push(subgraph);
    }
    return this.subgraph;
};
Protein.prototype.addConnectedNodes = function (subgraph) {
    var count = this.proteinLinks.values().length;
    for (var i = 0; i < count; i++) {
        var externalLink = this.proteinLinks.values()[i];
        if (externalLink.check() === true) {
            if (!subgraph.links.has(externalLink.id)) {
                subgraph.links.set(externalLink.id, externalLink);
                var otherEnd;
                if (externalLink.getFromProtein() === this) {
                    otherEnd = externalLink.getToProtein();
                } else {
                    otherEnd = externalLink.getFromProtein();
                }
                if (!subgraph.nodes.has(otherEnd.id)) {
                    subgraph.nodes.set(otherEnd.id, otherEnd);
                    otherEnd.subgraph = subgraph;
                    otherEnd.addConnectedNodes(subgraph);
                }
            }
        }
    }
    return subgraph;
};