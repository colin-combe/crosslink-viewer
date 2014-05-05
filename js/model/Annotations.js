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
    while (this.rectDomains.firstChild) {
        this.rectDomains.removeChild(this.rectDomains.firstChild);
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
            var annotPieSlice = document.createElementNS(xiNET.svgns, "path");
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
    this.annotations = [];
    
    if (this.circDomains) this.xlv.emptyElement(this.circDomains);
    if (this.rectDomains) this.xlv.emptyElement(this.rectDomains);
    
    if (posFeats !== undefined && posFeats !== null) {
        var y = -Protein.STICKHEIGHT / 2;
        //draw longest regions first
        posFeats.sort(function(a, b) {
            return (b.end - b.start) - (a.end - a.start);
        });     
        
        for (var i = 0; i < posFeats.length; i++) {
            var anno = posFeats[i];
            anno.start = anno.start - 0;
            anno.end = anno.end - 0;
            var annotPieSlice = document.createElementNS(xiNET.svgns, "path");
            var annotColouredRect = document.createElementNS(xiNET.svgns, "path");
            
            this.annotations.push({anno:anno, pieSlice:annotPieSlice, rect:annotColouredRect});
           // alert(this.form);
            if (this.form === 0) { // ** UR HERE **
				annotPieSlice.setAttribute("d", this.getAnnotationPieSliceArcPath(anno));
				annotColouredRect.setAttribute("d", this.getAnnotationPieSliceApproximatePath(anno));
			} else {
				annotPieSlice.setAttribute("d", this.getAnnotationRectPath(anno));
				annotColouredRect.setAttribute("d", this.getAnnotationRectPath(anno));
			}
            annotPieSlice.setAttribute("stroke", "none");
            annotColouredRect.setAttribute("stroke", "none");
            
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
            annotPieSlice.setAttribute("fill-opacity", "0.5");
            annotColouredRect.setAttribute("fill", "rgb(" + c.r + "," + c.g + "," + c.b + ")");
            annotColouredRect.setAttribute("fill-opacity", "0.5");
            
            var text = anno.name + " [" + anno.start + " - " + anno.end + "]";
            annotPieSlice.name = text;
            //~ annotMouseEventRect.name = text;
            var xlv = this.xlv;
            var self = this;
            annotPieSlice.onmouseover = function(evt) {
                //    for magnifier experiment
                var el = (evt.target.correspondingUseElement) ? evt.target.correspondingUseElement : evt.target;
                xlv.preventDefaultsAndStopPropagation(evt);
                xlv.setTooltip(el.name, el.getAttribute('fill'));
                self.showHighlight(true);
            };
            annotColouredRect.onmouseover = function(evt) {
                //    for magnifier experiment
                var el = (evt.target.correspondingUseElement) ? evt.target.correspondingUseElement : evt.target;
                xlv.preventDefaultsAndStopPropagation(evt);
                xlv.setTooltip(el.name, el.getAttribute('fill'));
                self.showHighlight(true);
            };
            this.circDomains.appendChild(annotPieSlice);
            this.rectDomains.appendChild(annotColouredRect);
        }
    }
};

//TODO: remove this, use rotateAboutPoint instead
Protein.trig = function(radius, angleDegrees) {
		//x = rx + radius * cos(theta) and y = ry + radius * sin(theta)
		var radians = (angleDegrees / 360) * Math.PI * 2;
		return {
			x: (radius * Math.cos(radians)),
			y: (radius * Math.sin(radians))
		};
};
Protein.stepsInArc = 5;

Protein.prototype.getAnnotationPieSliceArcPath = function(annotation) {
	var startAngle = ((annotation.start - 1) / this.size) * 360;
	var endAngle = ((annotation.end) / this.size) * 360;
	var radius = this.getBlobRadius() - 2;
	var arcStart = Protein.trig(radius, startAngle - 90);
	var arcEnd = Protein.trig(radius, endAngle - 90);
	var largeArch = 0;
	if ((endAngle - startAngle) > 180) {
		largeArch = 1;
	}
	return "M0,0 L" + arcStart.x + "," + arcStart.y + " A" + radius + "," 
		+ radius + " 0 " + largeArch + " 1 " + arcEnd.x + "," + arcEnd.y + " Z";
		
		
	//~ 
            //~ //make pie slice
//~ 
            //~ var startAngle = i * sliceAngleDegrees;
            //~ var endAngle = startAngle + sliceAngleDegrees;
//~ 
            //~ var radius = this.getBlobRadius() - 2;
            //~ function trig(radius, angleDegrees) {
                //~ //x = rx + radius * cos(theta) and y = ry + radius * sin(theta)
                //~ var radians = (angleDegrees / 360) * Math.PI * 2;
                //~ return {
                    //~ x: (radius * Math.cos(radians)),
                    //~ y: (radius * Math.sin(radians))
                //~ };
            //~ }
            //~ var arcStart = trig(radius, startAngle - 90);
            //~ var arcEnd = trig(radius, endAngle - 90);
            //~ var largeArch = 0;
            //~ if ((endAngle - startAngle) > 180)
                //~ largeArch = 1;
            //~ annotPieSlice.setAttribute("d", "M0,0 L" + arcStart.x + "," +
                    //~ arcStart.y + " A" + radius + "," + radius + " 0 " +
                    //~ largeArch + ",1 " + arcEnd.x + "," + arcEnd.y + " z");	
};

Protein.prototype.getAnnotationPieSliceApproximatePath = function(annotation) {
	//approximate pie slice
	var startAngle = ((annotation.start - 1) / this.size) * 360;
	var endAngle = ((annotation.end) / this.size) * 360;
	var pieRadius = this.getBlobRadius() - 2;
	var arcStart = Protein.trig(pieRadius, startAngle - 90);
	var arcEnd = Protein.trig(pieRadius, endAngle - 90);
	var approximatePiePath = "M 0,0";
	var stepsInArc = 5;
	for (var sia = 0; sia <= Protein.stepsInArc; sia++) {
		var angle = startAngle + ((endAngle - startAngle) * (sia / stepsInArc));
		var siaCoord = Protein.trig(pieRadius, angle - 90);
		approximatePiePath += " L " + siaCoord.x + "," + siaCoord.y;
	}
	approximatePiePath += " L " + 0 + "," + 0;
	approximatePiePath += "  Z";
	return approximatePiePath;
};

Protein.prototype.getAnnotationRectPath = function(annotation) {
	//domain as rectangle path
	var bottom = Protein.STICKHEIGHT / 2, top = -Protein.STICKHEIGHT / 2;
	var annotX =  ((annotation.start - 0.5) - (this.size/2)) * Protein.UNITS_PER_RESIDUE;//this.getResXUnzoomed(annotation.start - 0.5);
	//~ //Ouch!! Without brackets following may do string concatenation
	var annotSize = (1 + (annotation.end - annotation.start));
	var annotLength = annotSize * Protein.UNITS_PER_RESIDUE;
	var rectPath = "M " + annotX + "," + bottom;
	for (var sia = 0; sia <= Protein.stepsInArc; sia++) {
		var step = annotX + (annotLength * (sia / Protein.stepsInArc));
		rectPath += " L " + step + "," + top;
	}		
	rectPath +=  " L " + (annotX  + annotLength)+ "," + bottom 
		+ " Z";
	return rectPath;
};
