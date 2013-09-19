//constructor for annotations
function Annotation(annotName, startRes, endRes, colour, notes) {
    this.name = annotName;
    this.start = startRes;
    this.end = endRes;
    if (colour !== undefined && colour !== null) {
        this.colour = new RGBColor(colour);
    }
    this.notes = notes;
}

Protein.prototype.setAnnotations = function(pos, group, category) {
    //clear
    while (this.circDomains.firstChild) {
        this.circDomains.removeChild(this.circDomains.firstChild);
    }
    while (this.rectDomainsColoured.firstChild) {
        this.rectDomainsColoured.removeChild(this.rectDomainsColoured.firstChild);
    }
    while (this.rectDomainsMouseEvents.firstChild) {
        this.rectDomainsMouseEvents.removeChild(this.rectDomainsMouseEvents.firstChild);
    }
    var g = this.processedDAS.get(group);
    if (pos === true) {
        if (category === 'none') {
            this.setPositionalFeatures(this.customAnnotatiuons);
        }
        else {
            if (g !== undefined) {
                var positional = g['positional'];
                if (positional !== undefined) {
                    this.setPositionalFeatures(positional.get(category));
                }
            }
        }
    }
    else {
        if (g !== undefined) {
            var keywords = g['keywords'];
            if (keywords !== undefined) {
                this.setKeywords(keywords.get(category));
            }
        }
    }
};

Protein.prototype.setKeywords = function(keywords) {
    if (keywords !== undefined && keywords !== null) {
        var numberOfKeywords = keywords.length;
        var sliceAngleDegrees = 359 / numberOfKeywords;
        for (var i = 0; i < numberOfKeywords; i++) {
            var anno = keywords[i];
            var annotPieSlice = document.createElementNS(xinet.svgns, "path");
            annotPieSlice.setAttribute("class", "protein");

            //make pie slice

            var startAngle = i * sliceAngleDegrees;
            var endAngle = startAngle + sliceAngleDegrees;

            var radius = this.getBlobRadius() - 2;
            function trig(radius, angleDegrees) {
                //x = rx + radius * cos(theta) and y = ry + radius * sin(theta)
                var radians = (angleDegrees / 360) * Math.PI * 2;
                return {
                    x: (radius * Math.cos(radians)),
                    y: (radius * Math.sin(radians))
                };
            }
            var arcStart = trig(radius, startAngle - 90);
            var arcEnd = trig(radius, endAngle - 90);
            var largeArch = 0;
            if ((endAngle - startAngle) > 180)
                largeArch = 1;
            annotPieSlice.setAttribute("d", "M0,0 L" + arcStart.x + "," +
                    arcStart.y + " A" + radius + "," + radius + " 0 " +
                    largeArch + ",1 " + arcEnd.x + "," + arcEnd.y + " z");

            //style 'em // u r here
            annotPieSlice.setAttribute("stroke", "none");
            var c;
            //temp
            if (anno.colour == null) { //check why == needed here
                c = new RGBColor(Protein.domainColours(anno.name));
            }
            else {
                c = anno.colour;
            }
            annotPieSlice.setAttribute("fill", "rgb(" + c.r + "," + c.g + "," + c.b + ")");
            annotPieSlice.setAttribute("fill-opacity", "0.85");

            var text = anno.name;
            annotPieSlice.name = text;
            var xlv = this.xlv;
            var self = this;
            annotPieSlice.onmouseover = function(evt) {
                //    for magnifier experiment
                var el = (evt.target.correspondingUseElement) ? evt.target.correspondingUseElement : evt.target;
                xlv.preventDefaultsAndStopPropagation(evt);
                xlv.setTooltip(el.name, el.getAttribute('fill'));// anno.colour);
                self.showHighlight(true);
            };
            this.circDomains.appendChild(annotPieSlice);
        }
    }
};

Protein.prototype.setPositionalFeatures = function(posFeats) {
    if (posFeats !== undefined && posFeats !== null) {
        var y = -Protein.STICKHEIGHT / 2;
        //draw longest regions first
        posFeats.sort(function(a, b) {
            return (b.end - b.start) - (a.end - a.start);
        });
        for (var i = 0; i < posFeats.length; i++) {
            var anno = posFeats[i];
            var annotPieSlice = document.createElementNS(xinet.svgns, "path");
            annotPieSlice.setAttribute("class", "protein");
            var annotColouredRect = document.createElementNS(xinet.svgns, "rect");
            annotColouredRect.setAttribute("class", "protein");
            var annotMouseEventRect = document.createElementNS(xinet.svgns, "rect");
            annotMouseEventRect.setAttribute("class", "protein");

            //make pie slice
            var startAngle = ((anno.start - 1) / this.size) * 360;
            var endAngle = ((anno.end) / this.size) * 360;
            var radius = this.getBlobRadius() - 2;
            function trig(radius, angleDegrees) {
                //x = rx + radius * cos(theta) and y = ry + radius * sin(theta)
                var radians = (angleDegrees / 360) * Math.PI * 2;
                return {
                    x: (radius * Math.cos(radians)),
                    y: (radius * Math.sin(radians))
                };
            }
            var arcStart = trig(radius, startAngle - 90);
            var arcEnd = trig(radius, endAngle - 90);
            var largeArch = 0;
            if ((endAngle - startAngle) > 180)
                largeArch = 1;
            annotPieSlice.setAttribute("d", "M0,0 L" + arcStart.x + "," + arcStart.y + " A" + radius + "," + radius + " 0 " + largeArch + ",1 " + arcEnd.x + "," + arcEnd.y + " z");
            //           annotPieSlice.setAttribute("d","M0,0 L" + arcStart.x + "," + arcStart.y
            //               + " L " + arcEnd.x + "," + arcEnd.y
            //               + " z");
            //
            //make domain rect's
            var annotX = this.getResXUnzoomed(anno.start - 1);
            // for juan
            //            if (this.xlv.sid == 682 )annotX = this.getResXUnzoomed(anno.startRes - 34);
            //            else if (this.name == 'Ska1Domain'){
            //                this.getResXUnzoomed(anno.startRes - 133);
            //            }
            //Ouch!! Without brackets following does string concatenation
            var annoSize = (1 + (anno.end - anno.start));
            var annoLength = annoSize * Protein.UNITS_PER_RESIDUE;
            annotColouredRect.setAttribute("x", annotX);
            annotColouredRect.setAttribute("y", y);//svgHeight);
            annotColouredRect.setAttribute("width", annoLength);
            annotColouredRect.setAttribute("height", Protein.STICKHEIGHT);
            annotMouseEventRect.setAttribute("x", annotX);
            annotMouseEventRect.setAttribute("y", y);//svgHeight);
            annotMouseEventRect.setAttribute("width", annoLength);
            annotMouseEventRect.setAttribute("height", Protein.STICKHEIGHT);

            //style 'em // u r here
            annotPieSlice.setAttribute("stroke", "none");
            var c;
            //temp
            if (anno.colour == null) { // check == here
                if (anno.name === 'alpha_helix') {
                    c = new RGBColor('#7EB6FF88');
                }
                else if (anno.name === 'beta_strand') {
                    c = new RGBColor('#9AFF9A88');
                }
                else if (anno.name === 'turn') {
                    c = new RGBColor('#FF00AA88');
                }
                else {
                    c = new RGBColor(Protein.domainColours(anno.name));
                }
            }
            else {
                c = anno.colour;
            }
            annotPieSlice.setAttribute("fill", "rgb(" + c.r + "," + c.g + "," + c.b + ")");
            annotPieSlice.setAttribute("fill-opacity", "0.85");
            annotColouredRect.setAttribute("fill", "rgb(" + c.r + "," + c.g + "," + c.b + ")");
            annotColouredRect.setAttribute("fill-opacity", "0.85");
            annotMouseEventRect.setAttribute("fill", "rgb(" + c.r + "," + c.g + "," + c.b + ")");
            annotMouseEventRect.setAttribute("fill-opacity", "0");

            var text = anno.name + " [" + anno.start + " - " + anno.end + "]";
            annotPieSlice.name = text;
            annotMouseEventRect.name = text;
            var xlv = this.xlv;
            var self = this;
            annotPieSlice.onmouseover = function(evt) {
                //    for magnifier experiment
                var el = (evt.target.correspondingUseElement) ? evt.target.correspondingUseElement : evt.target;
                xlv.preventDefaultsAndStopPropagation(evt);
                xlv.setTooltip(el.name, el.getAttribute('fill'));// anno.colour);
                self.showHighlight(true);
            };
            annotMouseEventRect.onmouseover = function(evt) {
                //    for magnifier experiment
                var el = (evt.target.correspondingUseElement) ? evt.target.correspondingUseElement : evt.target;
                xlv.preventDefaultsAndStopPropagation(evt);
                xlv.setTooltip(el.name, el.getAttribute('fill'));// anno.colour);
                self.showHighlight(true);
            };
            this.circDomains.appendChild(annotPieSlice);
            this.rectDomainsColoured.appendChild(annotColouredRect);
            this.rectDomainsMouseEvents.appendChild(annotMouseEventRect);
        }
    }
};