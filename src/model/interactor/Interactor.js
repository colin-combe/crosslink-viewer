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

Interactor.LABELMAXLENGTH = 60; // maximal width reserved for protein-labels
Interactor.labelY = -5; //label Y offset, better if calc'd half height of label once rendered
//~ Interactor.domainColours = d3.scale.ordinal().range(colorbrewer.Paired[6]);//d3.scale.category20c();//d3.scale.ordinal().range(colorbrewer.Paired[12]);//
//~ Interactor.domainColours = d3.scale.category20c(); //
//~ Protein.domainColours = d3.scale.ordinal().range(colorbrewer.Paired[5]);
//~ Protein.domainColours = d3.scale.ordinal().range(colorbrewer.Set3[12]);
Interactor.domainColours = d3.scale.ordinal().range(colorbrewer.Pastel1[8]);
//~ Interactor.domainColours = d3.scale.ordinal().range(colorbrewer.Set3[9]);

function Interactor(id, xlvController, json) {
    this.id = id; // id may not be accession (multiple Segments with same accesssion)
    this.ctrl = xlvController;
    this.json = json;  
    this.features = d3.map();  
}

Interactor.prototype.toJSON = function() {
    return {
        interactor: this.json
		//~ id: this.id
    };
};

Interactor.prototype.mouseDown = function(evt) {
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
		document.getElementById('jsonHeading').innerHTML = this.json.label;
	} 
	if ($("#json")) { // json tree depends on jquery
		$("#json").JSONView({interactor:this.json, features: this.features.values()}, {collapsed: false, nl2br: true});
		$('#json').JSONView('toggle', 2);
	}	
}

Interactor.prototype.mouseOver = function(evt) {
        this.ctrl.preventDefaultsAndStopPropagation(evt);
        this.showHighlight(true);
        this.ctrl.setTooltip(this.tooltip);
        return false;
};

Interactor.prototype.mouseOut = function(evt) {
        this.ctrl.preventDefaultsAndStopPropagation(evt);
        this.showHighlight(false);
        this.ctrl.hideTooltip();
        return false;
};

Interactor.prototype.getBlobRadius = function() {
    if (this.accession.indexOf("CHEBI") !== -1) {
        return 10;
    }
    else if (this.json.type.name === 'peptide' || this.json.type.name === 'single stranded deoxyribonucleic acid'){
        return 5;
    }
    else {
        return Math.sqrt(this.size / 3 / Math.PI);
    }
};

//only output the info needed to reproduce the layout
//~ Interactor.prototype.toJSON = function() {
    //~ return {
        //~ //for saved interactors
        //~ //        name: this.name,
        //~ //        accession: this.accession,
        //~ //        description: this.description,
        //~ //        sequence: this.sequence,
        //~ //        processedDAS: this.processedDAS,
        //~ //for saved layout
        //~ //        name: this.name,
        //~ x: this.x,
        //~ y: this.y,
        //~ rot: this.rotation,
        //~ form: this.form,
        //~ stickZoom: this.stickZoom,
        //~ parked: this.isParked,
        //~ flipped: this.isFlipped,
        //~ annot: this.customAnnotations
    //~ };
//~ };

Interactor.prototype.addLink = function(link) {
    if (!this.links.has(link.id)) {
        this.links.set(link.id, link);
    }
    if (link.arity == 1) {
        this.internalLink = link;
    }
};

Interactor.prototype.addFeature = function(feature) {
    if (typeof feature !== 'undefined') {
        var annotName = "";
        if (typeof feature.name !== 'undefined') {
            annotName += feature.name + ', ';
        }
        if (typeof feature.type !== 'undefined') {
            annotName += feature.type.name;
        }
        if (typeof feature.detmethod !== 'undefined') {
            annotName += ', ' + feature.detmethod.name;
        }
        var colour = Interactor.domainColours(feature.type.name);
        var segments = feature.sequenceData;
        var countSegments = segments.length;

        for (var i = 0; i < countSegments; i++) {
            var segment = segments[i];
            var sequenceRegex = /(.+)-(.+)/;
            var match = sequenceRegex.exec(segment);
            var startRes = match[1] * 1;
            var endRes = match[2] * 1;
            if (isNaN(startRes) === false && isNaN(endRes) === false) {
//                console.log(segment.range);
//                console.log(match);
                var annotation = new Annotation(annotName, startRes, endRes, colour);
                if (this.customAnnotations == null) {
                    this.customAnnotations = new Array();
                }
                this.customAnnotations.push(annotation);
            }
        }
    }
}

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
		this.highlight.setAttribute("stroke", xiNET.selectedColour.toRGB());
		this.highlight.setAttribute("stroke-opacity", "1");
    }
    else if (select === false && this.isSelected === true) {
        this.ctrl.selected.remove(this.id);
        this.isSelected = false;
		this.highlight.setAttribute("stroke-opacity", "0");
		this.highlight.setAttribute("stroke", xiNET.highlightColour.toRGB());
    }
};

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
		if (this.internalLink != null) {
			if (typeof this.internalLink.thickLine !== 'undefined') {
				this.internalLink.thickLine.setAttribute("transform", "translate(" + this.x
						+ " " + this.y + ")" + " scale(" + (this.ctrl.z) + ")");
			}
				this.internalLink.line.setAttribute("transform", "translate(" + this.x
						+ " " + this.y + ")" + " scale(" + (this.ctrl.z) + ")");
				this.internalLink.highlightLine.setAttribute("transform", "translate(" + this.x
						+ " " + this.y + ")" + " scale(" + (this.ctrl.z) + ")");
		}
	}
};

Interactor.prototype.setParked = function(bool, svgP) {
    if (this.busy !== true) {
		if (this.isParked === true && bool == false) {
			this.isParked = false;
			if (this.form === 0) {
				this.toBlob(svgP);
			}
			else {
				this.toStick();
			}
			this.scale();
			this.setAllLineCoordinates();
		}
		else if (this.isParked === false && bool == true) {
			this.isParked = true;
			this.toParked(svgP);
		}
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

Interactor.rotatePointAboutPoint = function(p, o, theta) {
	theta = (theta / 360) * Math.PI * 2;
	var rx = Math.cos(theta) * (p[0]-o[0]) - Math.sin(theta) * (p[1]-o[1]) + o[0];
	var ry = Math.sin(theta) * (p[0]-o[0]) + Math.cos(theta) * (p[1]-o[1]) + o[1];
	return [rx, ry];
}

Interactor.prototype.checkLinks = function() {
    var links = this.links.values();
    var c = links.length;
    for (var l = 0; l < c; l++) {
        links[l].check();
    }
}

// update all lines (e.g after a move)
Interactor.prototype.setAllLineCoordinates = function() {
    var links = this.links.values();
    var c = links.length;
    for (var l = 0; l < c; l++) {
        var link = links[l];
        if (link.fromInteractor){//TEMP
			if (link.fromInteractor.form === 0 && link.toInteractor.form === 0) {
				link.setLinkCoordinates(this);
			}
			else {
				var resLinks = link.sequenceLinks.values();
				var resLinkCount = resLinks.length;
				for (var rl = 0; rl < resLinkCount; rl++) {
					resLinks[rl].setLinkCoordinates(this);
				}
			}
		} else {
			link.setLinkCoordinates(this);
		}
    }
};
//~ 
Interactor.prototype.countExternalLinks = function() {
    //~ //if (this.isParked) {
    //~ //    return 0;
    //~ //}
    var countExternal = d3.set();
    var c = this.links.keys().length;
    for (var l = 0; l < c; l++) {
        var link = this.links.values()[l];
        for (var i = 0; i < link.interactors.length; i++) {
       //~ // {
         //~ //   if (link.check() === true) {
                countExternal.add(link.interactors[i].id);
           //~ //}
      //~ //  }
		}
    }
    return countExternal.values().length - 1;
};

Interactor.prototype.getSubgraph = function() {
    if (this.subgraph == null) { // don't check for undefined here
        var subgraph = {
            nodes: d3.map(),
            links: d3.map()
        };
        //if (this.isParked === false) {
            //~ this.subgraph = 
            this.addConnectedNodes(subgraph);
        //}
        this.ctrl.subgraphs.push(subgraph); 
    }
    return this.subgraph;
};

Interactor.prototype.addConnectedNodes = function(subgraph) {
	this.subgraph = subgraph;
	subgraph.nodes.set(this.id, this);
    var count = this.links.values().length;
    for (var i = 0; i < count; i++) {
        var externalLink = this.links.values()[i];
        if (subgraph.links.has(externalLink.id) === false) {
			//~ if (externalLink.check() === true) {
        	subgraph.links.set(externalLink.id, externalLink);
			for (var i = 0; i < externalLink.interactors.length; i++) {
				var otherEnd = externalLink.interactors[i];
				otherEnd.addConnectedNodes(subgraph);
			}
			//~ }
		}
    }
    //~ console.debug(subgraph.nodes.keys());
};
