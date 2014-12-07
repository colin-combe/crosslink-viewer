//    	xiNET Interaction Viewer
//    	Copyright 2013 Rappsilber Laboratory
//
//    	This product includes software developed at
//    	the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//		
//		Interactor.js		
//
//		authors: Colin Combe

"use strict";

var colorbrewer = require('../../../node_modules/colorbrewer/colorbrewer');//Josh - should path for this be ../../../vendor...?
var Config = require('../../controller/Config');

//josh - should these be moved to Config.js?
Interactor.LABELMAXLENGTH = 90; // maximal width reserved for protein-labels
Interactor.labelY = -5; //label Y offset, better if calc'd half height of label once rendered
Interactor.domainColours = d3.scale.ordinal().range(colorbrewer.Pastel1[8]);

function Interactor() {}

Interactor.prototype.addStoichiometryLabel = function(stoich) {
	if (this.labelSVG) {//complexes don't have labels (yet?)
		this.labelSVG.innerHTML =  this.labelSVG.innerHTML + ' ['+stoich+']';
	}
}

Interactor.prototype.mouseDown = function(evt) {
        this.ctrl.preventDefaultsAndStopPropagation(evt);//see MouseEvents.js
        //if a force layout exists then stop it
        if (this.ctrl.force) {
            this.ctrl.force.stop();
        }

        this.ctrl.dragElement = this;
        //~ if (evt.ctrlKey === false) {
            this.ctrl.clearSelection();
            this.setSelected(true);
        //~ } else {
            //~ this.setSelected(!this.isSelected);
        //~ }
        //store start location
        var p = this.ctrl.getEventPoint(evt);
        this.ctrl.dragStart = this.ctrl.mouseToSVG(p.x, p.y);
        this.showData();
        return false;
};

Interactor.prototype.touchStart = function(evt) {
           this.ctrl.preventDefaultsAndStopPropagation(evt);//see MouseEvents.js
        //if a force layout exists then stop it
        if (this.ctrl.force !== undefined) {
            this.ctrl.force.stop();
        }
        this.ctrl.dragElement = this;
        //~ if (evt.ctrlKey === false) {
            this.ctrl.clearSelection();
            this.setSelected(true);
        //~ } else {
            //~ this.setSelected(!this.isSelected);
        //~ }
        //store start location
        var p = this.ctrl.getTouchEventPoint(evt);
        this.ctrl.dragStart = this.ctrl.mouseToSVG(p.x, p.y);
        this.showData();
        return false;
};

Interactor.prototype.showData = function(evt) {
    if (document.getElementById('jsonHeading')) {	
		document.getElementById('jsonHeading').innerHTML = this.id;
	} 
    if (document.getElementById('json')) {	
		document.getElementById('json').innerHTML = 
			"<pre>" + JSON.stringify(this.json, null, ' ') + "</pre>";
	} 
}

Interactor.prototype.mouseOver = function(evt) {
        this.ctrl.preventDefaultsAndStopPropagation(evt);
        this.showHighlight(true);
        this.ctrl.setTooltip(this.id);
        return false;
};

Interactor.prototype.mouseOut = function(evt) {
        this.ctrl.preventDefaultsAndStopPropagation(evt);
        this.showHighlight(false);
        this.ctrl.hideTooltip();
        return false;
};

Interactor.prototype.showHighlight = function(show) {
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

Interactor.prototype.setSelected = function(select) {
    if (select && this.isSelected === false) {
        this.ctrl.selected.set(this.id, this);
        this.isSelected = true;
		this.highlight.setAttribute("stroke", Config.selectedColour);
		this.highlight.setAttribute("stroke-opacity", "1");
    }
    else if (select === false && this.isSelected === true) {
        this.ctrl.selected.remove(this.id);
        this.isSelected = false;
		this.highlight.setAttribute("stroke-opacity", "0");
		this.highlight.setAttribute("stroke", Config.highlightColour);
    }
};

Interactor.prototype.getPosition = function(){
	return [this.x, this.y];
}

// more accurately described as setting transform for top svg elements (sets scale also)
Interactor.prototype.setPosition = function(x, y) {
    this.x = x;
    this.y = y;
    if (this.form === 1 && this.isParked === false){
		this.upperGroup.setAttribute("transform", "translate(" + this.x + " " + this.y + ")" 
				+ " scale(" + (this.ctrl.z) + ") " + "rotate(" + this.rotation + ")");
		this.lowerGroup.setAttribute("transform", "translate(" + this.x + " " + this.y + ")" 
				+ " scale(" + (this.ctrl.z) + ") " + "rotate(" + this.rotation + ")");
    } 
    else {
		this.upperGroup.setAttribute("transform", "translate(" + this.x + " " + this.y + ")" 
				+ " scale(" + (this.ctrl.z) + ") ");
		this.lowerGroup.setAttribute("transform", "translate(" + this.x + " " + this.y + ")" 
				+ " scale(" + (this.ctrl.z) + ") ");
	}
};

Interactor.prototype.getAggregateSelfLinkPath = function() {
	var intraR = this.getBlobRadius() + 7;
	var sectorSize = 45;
	var arcStart = Interactor.trig(intraR, 25 + sectorSize);
	var arcEnd = Interactor.trig(intraR, -25 + sectorSize);
	var cp1 = Interactor.trig(intraR, 40 + sectorSize);
	var cp2 = Interactor.trig(intraR, -40 + sectorSize);
	return 'M 0,0 ' 
		+ 'Q ' + cp1.x + ',' + -cp1.y + ' ' + arcStart.x + ',' + -arcStart.y
		+ ' A ' + intraR + ' ' + intraR + ' 0 0 1 ' + arcEnd.x + ',' + -arcEnd.y
		+ ' Q ' + cp2.x + ',' + -cp2.y + ' 0,0';
}

//Josh - this gets used from a couple of different files, where do you think it should go?
Interactor.rotatePointAboutPoint = function(p, o, theta) {
	theta = (theta / 360) * Math.PI * 2;//TODO: change theta arg to radians not degrees
	var rx = Math.cos(theta) * (p[0]-o[0]) - Math.sin(theta) * (p[1]-o[1]) + o[0];
	var ry = Math.sin(theta) * (p[0]-o[0]) + Math.cos(theta) * (p[1]-o[1]) + o[1];
	return [rx, ry];
}

Interactor.prototype.checkLinks = function() {
    function checkAll(linkMap){
		var links = linkMap.values();
		var c = links.length;
		for (var l = 0; l < c; l++) {
			links[l].check();
		}	
	}    
    checkAll(this.naryLinks);
    checkAll(this.binaryLinks);
    checkAll(this.sequenceLinks);
    if (this.selfLink !== null) {
		this.selfLink.check();
	}
}

// update all lines (e.g after a move)
Interactor.prototype.setAllLinkCoordinates = function() {
    var links = this.naryLinks.values();
    var c = links.length;
    for (var l = 0; l < c; l++) {
		//if interactor count > 2
        links[l].setLinkCoordinates(this);
    }    
    links = this.binaryLinks.values();
    c = links.length;
    for (var l = 0; l < c; l++) {
        var link = links[l];
        link.setLinkCoordinates(this);
        link.setLinkCoordinates(link.getOtherEnd(this));
    }
    if (this.selfLink) {
		this.selfLink.setLinkCoordinates(this); 
	}
    links = this.sequenceLinks.values();
    c = links.length;
    for (var l = 0; l < c; l++) {
        links[l].setLinkCoordinates(this);
    }    
};

//TODO: following 3 functions are used by auto layout and need work
Interactor.prototype.countExternalLinks = function() {
    return this.binaryLinks.length;
};

Interactor.prototype.getSubgraph = function() {
    if (this.subgraph == null) { // don't check for undefined here
        var subgraph = {
            nodes: d3.map(),
            links: d3.map()
        };
        this.addConnectedNodes(subgraph);
        this.ctrl.subgraphs.push(subgraph); 
    }
    return this.subgraph;
};

Interactor.prototype.addConnectedNodes = function(subgraph) {
	this.subgraph = subgraph;
	subgraph.nodes.set(this.id, this);	
	var count = this.binaryLinks.values().length;
    for (var bi = 0; bi < count; bi++) {
		var binaryLink = this.binaryLinks.values()[bi];
        if (subgraph.links.has(binaryLink.id) === false) {
        	subgraph.links.set(binaryLink.id, binaryLink);
				var otherEnd = binaryLink.getOtherEnd(this);
				 if (otherEnd) {
					 otherEnd.addConnectedNodes(subgraph);
				 }
		}
    }
    //~ console.debug(subgraph.nodes.keys());
};

Interactor.prototype.setPositionalFeatures = function(posFeats) {
    this.annotations = [];
    
    if (this.circDomains) this.ctrl.emptyElement(this.circDomains);
    if (this.rectDomains) this.ctrl.emptyElement(this.rectDomains);
    
    if (posFeats !== undefined && posFeats !== null) {
        var y = -Interactor.STICKHEIGHT / 2;
        //draw longest regions first
        posFeats.sort(function(a, b) {
            return (b.end - b.start) - (a.end - a.start);
        });     
        
        for (var i = 0; i < posFeats.length; i++) {
            var anno = posFeats[i];
            anno.start = anno.start - 0;
            anno.end = anno.end - 0;
            var annotPieSlice = document.createElementNS(Config.svgns, "path");
            var annotColouredRect = document.createElementNS(Config.svgns, "path");
            
            this.annotations.push({anno:anno, pieSlice:annotPieSlice, rect:annotColouredRect});
           // alert(this.form);
            if (this.form === 0) {
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
                    c = new RGBColor(Interactor.domainColours(anno.name));
                }
            }
            else {
                c = anno.colour;
            }
            //console.log(JSON.stringify(c));
            annotPieSlice.setAttribute("fill", c);//"rgb(" + c.r + "," + c.g + "," + c.b + ")");
            annotPieSlice.setAttribute("fill-opacity", "1");
            annotColouredRect.setAttribute("fill", c);//"rgb(" + c.r + "," + c.g + "," + c.b + ")");
            annotColouredRect.setAttribute("fill-opacity", "1");
            
            var text = anno.name + " [" + anno.start + " - " + anno.end + "]";
            annotPieSlice.name = text;
            //~ annotMouseEventRect.name = text;
            var xlv = this.ctrl;
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
            if (this.rectDomains) {
                this.rectDomains.appendChild(annotColouredRect);
            }
        }
    }
};

//TODO: remove this, use rotateAboutPoint instead
Interactor.trig = function(radius, angleDegrees) {
        //x = rx + radius * cos(theta) and y = ry + radius * sin(theta)
        var radians = (angleDegrees / 360) * Math.PI * 2;
        return {
            x: (radius * Math.cos(radians)),
            y: (radius * Math.sin(radians))
        };
};
Interactor.stepsInArc = 5;

Interactor.prototype.getAnnotationPieSliceArcPath = function(annotation) {
    var startAngle = ((annotation.start - 1) / this.size) * 360;
    var endAngle = ((annotation.end - 1) / this.size) * 360;
    var radius = this.getBlobRadius() - 2;
    var arcStart = Interactor.trig(radius, startAngle - 90);
    var arcEnd = Interactor.trig(radius, endAngle - 90);
    var largeArch = 0;
    if ((endAngle - startAngle) > 180 || (endAngle == startAngle)) {
        largeArch = 1;
    }
    //~ console.debug("M0,0 L" + arcStart.x + "," + arcStart.y + " A" + radius + "," 
        //~ + radius + " 0 " + largeArch + " 1 " + arcEnd.x + "," + arcEnd.y + " Z");
    return "M0,0 L" + arcStart.x + "," + arcStart.y + " A" + radius + "," 
        + radius + " 0 " + largeArch + " 1 " + arcEnd.x + "," + arcEnd.y + " Z"; 
};

Interactor.prototype.getAnnotationPieSliceApproximatePath = function(annotation) {
    //approximate pie slice
    var startAngle = ((annotation.start - 1) / this.size) * 360;
    var endAngle = ((annotation.end) / this.size) * 360;
    var pieRadius = this.getBlobRadius() - 2;
    var arcStart = Interactor.trig(pieRadius, startAngle - 90);
    var arcEnd = Interactor.trig(pieRadius, endAngle - 90);
    var approximatePiePath = "M 0,0";
    var stepsInArc = 5;
    for (var sia = 0; sia <= Interactor.stepsInArc; sia++) {
        var angle = startAngle + ((endAngle - startAngle) * (sia / stepsInArc));
        var siaCoord = Interactor.trig(pieRadius, angle - 90);
        approximatePiePath += " L " + siaCoord.x + "," + siaCoord.y;
    }
    approximatePiePath += " L " + 0 + "," + 0;
    approximatePiePath += "  Z";
    return approximatePiePath;
};

module.exports = Interactor;
