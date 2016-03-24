//	  xiNET Cross-link Viewer
//	  Copyright 2013 Rappsilber Laboratory, University of Edinburgh
//
//    This product includes software developed at
//    the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//
//	  author: Colin Combe
//
//    Init.js

"use strict";

var xiNET = {}; //crosslinkviewer's javascript namespace
xiNET.svgns = "http://www.w3.org/2000/svg";// namespace for svg elements
xiNET.xlinkNS = "http://www.w3.org/1999/xlink";// namespace for xlink, for use/defs elements
xiNET.linkWidth = 1.3;// default line width
xiNET.homodimerLinkWidth = 1.3;// have considered varying this line width
// highlight and selection colours are global
// (because all instances of xiNET should use same colours for this)
xiNET.highlightColour = new RGBColor("#fdc086");
xiNET.selectedColour = new RGBColor("#ffff99");
xiNET.defaultSelfLinkColour = new RGBColor("#9970ab");
xiNET.defaultInterLinkColour = new RGBColor("#35978f");
xiNET.homodimerLinkColour = new RGBColor("#a50f15");

xiNET.Controller = function(targetDiv) {
	// targetDiv could be div itself or id of div - lets deal with that
	if (typeof targetDiv === "string"){
		targetDiv = document.getElementById(targetDiv);
	}
	this.emptyElement(targetDiv); //avoids prob with 'save - web page complete'
    //create SVG elemnent
    this.svgElement = document.createElementNS(xiNET.svgns, "svg");
    this.svgElement.setAttribute('id', 'networkSVG');
    this.svgElement.setAttribute("width", "100%");
    this.svgElement.setAttribute("height", "100%");
    this.svgElement.setAttribute("style", "display:block;");
    // disable right click context menu (we wish to put right click to our own purposes)
    this.svgElement.oncontextmenu = function() {
        return false;
    };
    //add listeners
    var self = this;
    this.svgElement.onmousedown = function(evt) {
        self.mouseDown(evt);
    };
    this.svgElement.onmousemove = function(evt) {
        self.mouseMove(evt);
    };
    this.svgElement.onmouseup = function(evt) {
        self.mouseUp(evt);
    };
    // even though we don't use jquery, see:
    // http://stackoverflow.com/questions/4258615/what-is-the-difference-between-jquerys-mouseout-and-mouseleave
    this.svgElement.onmouseout = function(evt) {
        self.hideTooltip(evt);
    };    
    var mousewheelevt= (/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
    if (document.attachEvent){ //if IE (and Opera depending on user setting) 
        this.svgElement.attachEvent("on"+mousewheelevt, function(evt) {self.mouseWheel(evt);});
    }
    else if (document.addEventListener) { //WC3 browsers
        this.svgElement.addEventListener(mousewheelevt, function(evt) {self.mouseWheel(evt);}, false);
    }  
    this.lastMouseUp = new Date().getTime();   
     //touchstart
    this.svgElement.ontouchstart = function(evt) {
        self.touchStart(evt);
    };
    //touchmove
    this.svgElement.ontouchmove = function(evt) {
        self.touchMove(evt);
    };
    //touchend
    this.svgElement.ontouchend = function(evt) {
        self.message("touch end");
        self.touchEnd(evt);
    };
    
    targetDiv.appendChild(this.svgElement);
    
	//these attributes are used by checkboxes to hide self links or ambiguous links
	this.selfLinksShown = true;//TODO - fix confusing double negative
	this.ambigShown = true;	
       
    // filled background needed, else cannot click/drag background
    // size is that of large monitor, potentially needs to be bigger coz browser can be zoomed
    // TODO: dynamically resize background to match screen bounding box
    var background = document.createElementNS(xiNET.svgns, "rect");
    background.setAttribute("id", "background_fill");
    background.setAttribute("x", 0);
    background.setAttribute("y", 0);
    background.setAttribute("width", 2560 * 2);
    background.setAttribute("height", 2048 * 2);
    background.setAttribute("fill-opacity", "1");
    background.setAttribute("fill", "#FFFFFF");
    this.svgElement.appendChild(background);
	// various groups needed
    this.container = document.createElementNS(xiNET.svgns, "g");
    this.container.setAttribute("id", "container");

    this.p_pLinksWide = document.createElementNS(xiNET.svgns, "g");
    this.p_pLinksWide.setAttribute("id", "p_pLinksWide");
    this.container.appendChild(this.p_pLinksWide);
 
    this.proteinLower = document.createElementNS(xiNET.svgns, "g");
    this.proteinLower.setAttribute("id", "proteinLower");
    this.container.appendChild(this.proteinLower);

    this.highlights = document.createElementNS(xiNET.svgns, "g");
    this.highlights.setAttribute("class", "highlights");//proteins also contain highlight groups
    this.container.appendChild(this.highlights);

    this.res_resLinks = document.createElementNS(xiNET.svgns, "g");
    this.res_resLinks.setAttribute("id", "res_resLinks");
    this.container.appendChild(this.res_resLinks);

    this.p_pLinks = document.createElementNS(xiNET.svgns, "g");
    this.p_pLinks.setAttribute("id", "p_pLinks");
    this.container.appendChild(this.p_pLinks);

    this.proteinUpper = document.createElementNS(xiNET.svgns, "g");
    this.proteinUpper.setAttribute("id", "proteinUpper");
    this.container.appendChild(this.proteinUpper);

    this.svgElement.appendChild(this.container);
    //showing title as tooltips is NOT part of svg spec (even though browsers do this)
    //also more repsonsive / more control if we do out own
    this.tooltip = document.createElementNS(xiNET.svgns, "text");
	this.tooltip.setAttribute('x', 0);
    this.tooltip.setAttribute('y', 0);
    var tooltipTextNode = document.createTextNode('tooltip');
    this.tooltip.appendChild(tooltipTextNode);

    this.tooltip_bg = document.createElementNS(xiNET.svgns, "rect");
    this.tooltip_bg.setAttribute('class', 'tooltip_bg');
    
    this.tooltip_bg.setAttribute('fill-opacity', 0.75);
    this.tooltip_bg.setAttribute('stroke-opacity', 1);
    this.tooltip_bg.setAttribute('stroke-width', 1);

    this.tooltip_subBg = document.createElementNS(xiNET.svgns, "rect");
    this.tooltip_subBg.setAttribute('fill', 'white');
    this.tooltip_subBg.setAttribute('stroke', 'white');
    this.tooltip_subBg.setAttribute('class', 'tooltip_bg');
    this.tooltip_subBg.setAttribute('opacity', 1);
    this.tooltip_subBg.setAttribute('stroke-width', 1);

    this.svgElement.appendChild(this.tooltip_subBg);
    this.svgElement.appendChild(this.tooltip_bg);
    this.svgElement.appendChild(this.tooltip);

    this.clear();
};

/**
 * Sets the current transform matrix of an element.
 */
xiNET.setCTM = function(element, matrix) {
    var s = "matrix(" + matrix.a + "," + matrix.b + "," + matrix.c + "," + matrix.d + "," + matrix.e + "," + matrix.f + ")";
    element.setAttribute("transform", s);
};

xiNET.Controller.prototype.clear = function() {
    this.sequenceInitComplete = false;
 	if (this.force) {
		this.force.stop();
	}
 	this.force = null;
    this.emptyElement(this.p_pLinksWide);
    this.emptyElement(this.highlights);
    this.emptyElement(this.p_pLinks);
    this.emptyElement(this.res_resLinks);
    this.emptyElement(this.proteinLower);
    this.emptyElement(this.proteinUpper);
 
     //are we panning?
    this.panning = false;
    // if we are dragging something at the moment - this will be the element that is draged
    this.dragElement = null;
    // are we dragging at the moment?
    this.dragging = false;
    // from where did we start dragging
    this.dragStart = {};
    // are we rotating at the moment
    this.rotating = false;
    
    this.proteins = d3.map();
    this.proteinLinks = d3.map();
    this.matches = d3.map();
    this.subgraphs = new Array();
    this.layoutXOffset = 0;

    this.proteinCount = 0;
    this.maxBlobRadius = 30;
    Protein.MAXSIZE = 100;

    this.layout = null;
    this.z = 1;
    this.scores = null;
    this.selected = d3.map();
    this.selectedLinks = d3.map();

    this.hideTooltip();

    this.resetZoom();
    this.state = xiNET.Controller.MOUSE_UP;
};

xiNET.Controller.prototype.emptyElement = function(element) {
    while (element.lastChild) {
        element.removeChild(element.lastChild);
    }
};

xiNET.Controller.prototype.setAnnotations = function(annotationType) {
	this.annotationSet = annotationType;
	if (this.sequenceInitComplete) { //dont want to be changing annotations while still waiting on sequence
		var mols = this.proteins.values(); 
		var molCount = mols.length;
		var self = this;
		for (var m = 0; m < molCount; m++) {
			var mol = mols[m];
			if (annotationType.toUpperCase() === "CUSTOM") {
				mol.setPositionalFeatures(mol.customAnnotations);
			}
			else if (annotationType.toUpperCase() === "SUPERFAM" || annotationType.toUpperCase() === "SUPERFAMILY"){
				xiNET_Storage.getSuperFamFeatures(mol.id, function (id, fts){
					var m = self.proteins.get(id);
					m.setPositionalFeatures(fts);
				});
			}  
			else if (annotationType.toUpperCase() === "UNIPROT" || annotationType.toUpperCase() === "UNIPROTKB") {
				xiNET_Storage.getUniProtFeatures(mol.id, function (id, fts){
					var m = self.proteins.get(id);
					m.setPositionalFeatures(fts);
				});	
			}
			else if (annotationType.toUpperCase() === "LYSINES") {
				var seq = mol.sequence;
				var annots = new Array();
				for (var i =0; i < mol.size; i++){
					var aa = seq[i];
					if (aa === 'K'){
						annots.push(new Annotation ("Lysine", i+1, i+1));
					}
				
				}
				mol.setPositionalFeatures(annots);
			}
			else {
				mol.setPositionalFeatures([])
			}
		}
		return true;
	}
	else return false;
};

//this can be done before all proteins have their sequences
xiNET.Controller.prototype.initLayout = function() {
    if (typeof this.layout !== 'undefined' && this.layout != null) {
        this.loadLayout();
    } else {
        var proteins = this.proteins.values();
        var proteinCount = proteins.length;
        for (var p = 0; p < proteinCount; p++) {
            var prot = proteins[p];
            this.proteinLower.appendChild(prot.lowerGroup);
            this.proteinUpper.appendChild(prot.upperGroup);
        }
        this.autoLayout();
    }
};

//requires all proteins have had sequence set
xiNET.Controller.prototype.initProteins = function() {
	var prots = this.proteins.values();
	var protCount = prots.length;
	Protein.MAXSIZE = 0;
	for (var i = 0; i < protCount; i++){
		var protSize = prots[i].size;
		if (protSize > Protein.MAXSIZE){
			Protein.MAXSIZE = protSize;
		}
	}
	//this.maxBlobRadius = Math.sqrt(Protein.MAXSIZE / Math.PI);
	var width = this.svgElement.parentNode.clientWidth;
	Protein.UNITS_PER_RESIDUE = (((width / 2)) - Protein.LABELMAXLENGTH) / Protein.MAXSIZE;
	for (var i = 0; i < protCount; i++){
		prots[i].init();
	}
	this.sequenceInitComplete = true;
	//~ if (protCount < 3) {
		//~ for (var j =0; j < protCount; j++){
			//~ prots[j].busy = false;
			//~ prots[j].setForm(1);
		//~ }
	//~ }
	if (this.annotationSet){
		xlv.setAnnotations(this.annotationSet);
	}
	else {
		this.setAnnotations('CUSTOM');
	}
}

xiNET.Controller.prototype.reset = function() {
	this.resetZoom();
    var proteins = this.proteins.values();
    var proteinCount = proteins.length;
    for (var p = 0; p < proteinCount; p++) {
        var prot = proteins[p];
        if (prot.isParked === false) {
			prot.setForm(0);
		}
    }
    this.autoLayout();
};

xiNET.Controller.prototype.resetZoom = function() {
    this.container.setAttribute("transform", "scale(1)");
    this.scale();
    //~ var proteins = this.proteins.values();
    //~ var proteinCount = proteins.length;
    //~ for (var p = 0; p < proteinCount; p++) {
        //~ var prot = proteins[p];
        //~ prot.stickZoom = 1;
        //~ prot.scale();
    //~ }
};

xiNET.Controller.prototype.exportSVG = function() {
	var svgXml = this.svgElement.parentNode.innerHTML.replace(/<rect .*?\/rect>/i, "");//take out white background fill
    svgXml = svgXml.replace('<svg ','<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events" ')
    if (Blob) {
		var blob = new Blob([svgXml], {type: "data:image/svg;charset=utf-8"});
		saveAs(blob, "xiNET_output.svg");
	} else {	
		var xml = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n"
		+ "<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">"
		+ svgXml;
		var xmlAsUrl;
		//xmlAsUrl = 'data:xml;filename=xiNET_output.xml,'
		xmlAsUrl = 'data:image/svg;filename=xiNET-output.svg,';
		xmlAsUrl += encodeURIComponent(xml);
		var win = window.open(xmlAsUrl, 'xiNET-output.svg');
	}
};

xiNET.Controller.prototype.message = function(text, preformatted) {
    if (typeof this.messageElement !== 'undefined') {
        if (typeof text === "object") {
            text = JSON.stringify(text, null, ' ');
            text = text.replace(/\\u0000/gi, '');
            preformatted = true;
        }
        if (preformatted)
            text = "<pre>" + text + "</pre>";
        this.messageElement.innerHTML = text;
    }
};

xiNET.Controller.prototype.addProtein = function(id, label, sequence, description, accession, size) {
    var newProt = new Protein(id, this, accession, label);
    newProt.setSequence(sequence);
    newProt.init();
    this.proteins.set(id, newProt);
};

//Positions are one based
xiNET.Controller.prototype.addMatch = function(pep1_protIDs, pep1_positions,
        pep2_protIDs, pep2_positions,
        id, score, linkPos1, linkPos2, pep1_seq, pep2_seq, autovalidated, validated, rejected, dataSetId) { //dataSetId param added for mathieu
    var match = new Match(pep1_protIDs, pep1_positions, pep2_protIDs, pep2_positions,
            id, score, this, linkPos1, linkPos2, pep1_seq, pep2_seq, autovalidated, validated, rejected, dataSetId);
    this.matches.set(id, match);
    return match;
};

// add all matches with single call, arg is an array of arrays
xiNET.Controller.prototype.addMatches = function(matches) {
    var l = matches.length;
    for (var i = 0; i < l; i++) {
        //        alert(matches[i]);
        this.addMatch(matches[i][0], matches[i][1], matches[i][2], matches[i][3],
                matches[i][4], matches[i][5], matches[i][6], matches[i][7],
                matches[i][8], matches[i][9]);
    }
}

// add annotation, 'HUMAN' RESIDUE NUMBERING - STARTS AT ONE
//TODO: make start and end res last args
xiNET.Controller.prototype.addAnnotation = function(protId, annotName, startRes, endRes, colour) {
    protId = protId.toString().trim();
    var protein = this.proteins.get(protId);
    if (protein) {
		//lets just check a few things here...
		// we're using human (starts at 1) numbering
		startRes = parseInt(startRes);
		endRes = parseInt(endRes);
		if (isNaN(startRes) && isNaN(endRes)) {
			startRes = 1;
			endRes = protein.size;
		}
		else if (isNaN(startRes))
			startRes = endRes;
		else if (isNaN(endRes))
			endRes = startRes;

		if (startRes > endRes) {
			var temp = startRes;
			startRes = endRes;
			endRes = temp;
		}

		var annotation = new Annotation(annotName, startRes, endRes, colour);
		if (protein.customAnnotations == null) {
			protein.customAnnotations = new Array();
		}
		protein.customAnnotations.push(annotation);
	}
}

xiNET.Controller.prototype.addAnnotationByName = function(protName, annotName, startRes, endRes, colour) {
    var prots = this.proteins.values(); 
    var protCount = prots.length;
    for (var p = 0; p < protCount; p++) {
        var protein = prots[p];
        if (protein.name == protName) {
            this.addAnnotation(protein.id, annotName, startRes, endRes, colour);
        }
    }
}

// add all matches with single call, arg is an array of arrays
xiNET.Controller.prototype.addAnnotations = function(annotations) {
    var rows = d3.csv.parseRows(annotations);   
    var headers = rows[0];
    for (var h = 0; h < headers.length; h++) {
		headers[h] = headers[h].trim();	
	}
    var iProtId = headers.indexOf('ProteinId');
    var iAnnotName = headers.indexOf('AnnotName');
    if (iAnnotName === -1) {
		iAnnotName = headers.indexOf('Name')
	}
    var iStartRes = headers.indexOf('StartRes');
    if (iStartRes === -1) {
		iStartRes = headers.indexOf('StartResidue')
	}
    var iEndRes = headers.indexOf('EndRes');
    if (iEndRes === -1) {
		iEndRes = headers.indexOf('EndResidue')
	}
    var iColour = headers.indexOf('Color');    
    if (iColour === -1) {
		iColour = headers.indexOf('Colour')
	}

    var l = rows.length;
    for (var i = 1; i < l; i++) {
        this.addAnnotation(rows[i][iProtId], rows[i][iAnnotName], 
							rows[i][iStartRes], rows[i][iEndRes], rows[i][iColour]);
    }
}

xiNET.Controller.prototype.getLayout = function() {
    var myJSONText = JSON.stringify(this.proteins, null, '\t');
    var viewportJSON = "";//ProtNet.svgElement.getAttribute("viewBox");
    var layout = myJSONText.replace(/\\u0000/gi, '');
    //+ "\n{co:" + this.cutOff +"}";
    return layout;
};

xiNET.Controller.prototype.setLayout = function(layoutJSON) {
    this.layout = typeof layoutJSON !== 'object' ? JSON.parse(decodeURIComponent(layoutJSON)) : layoutJSON;
};

xiNET.Controller.prototype.loadLayout = function() {
    for (var prot in this.layout/*.proteins*/) {
        var protState = this.layout[prot];
        var protein = this.proteins.get(prot);
        if (protein !== undefined) {
            protein.setPosition(protState["x"], protState["y"]);
            // protein.toStick();
            //~ if (typeof protState.annot !== 'undefined' && protState.annot != null) {
                //~ if (protState.annot.length > 0) {
                    //~ protein.customAnnotations = protState.annot;
                    //~ protein.setPositionalFeatures(protein.customAnnotations);
                //~ }
            //~ }
            
            //~ if (protState["form"] === 1) {
                if (typeof protState["stickZoom"] !== 'undefined') {
                    protein.stickZoom = protState["stickZoom"];
                    //~ protein.scale();
                }
                //~ protein.setRotation(protein.rotation);
            //~ }
            
            if (typeof protState['rot'] !== 'undefined') {
                protein.rotation = protState["rot"];
            }

            if (typeof protState["form"]) {
                protein.setForm(protState["form"]);
            }
            
			protein.setAllLineCoordinates();// watch out for this

            if (typeof protState["parked"] !== 'undefined') {
                protein.setParked(protState["parked"]);
            }
            if (protState["flipped"]) { //TODO: fix this
                protein.toggleFlipped(); // change to setFlipped(protState["flipped"])
            }
            //~ if (protState["processedDAS"]) {
                //~ protein.processedDAS = d3.map(protState["processedDAS"]);
            //~ }
            this.proteinLower.appendChild(protein.lowerGroup);
            this.proteinUpper.appendChild(protein.upperGroup);
        }
    }

    // incase proteins have been added which are not included in layout -
    var proteins = this.proteins.values();
    var proteinCount = proteins.length;
    for (var p = 0; p < proteinCount; p++) {
        prot = proteins[p];
        if (prot.x == null) {
            //~ prot.initStick();
            prot.toBlob();
            prot.setPosition(20, 20);
            this.proteinLower.appendChild(prot.lowerGroup);
            this.proteinUpper.appendChild(prot.upperGroup);
        }
    }

    // layout info for links (hidden / specified colour)
    //~ for (var l in this.layout.links) {
        //~ var linkState = this.layout.links[l];
        //~ var link = this.proteinLinks.get(l);
        //~ if (link !== undefined) {
            //~ if (typeof linkState.hidden !== 'undefined')
                //~ link.hidden = linkState.hidden;
            //~ var c = linkState.colour;
            //~ if (typeof c !== 'undefined') {
                //~ var resLinks = link.residueLinks.values();
                //~ var resLinkCount = resLinks.length;
                //~ for (var r = 0; r < resLinkCount; r++) {
                    //~ var resLink = resLinks[r];
                    //~ resLink.initSVG();
                    //~ resLink.line.setAttribute('stroke', 'rgb(' + c.r + ',' + c.g + ',' + c.b + ')');
                //~ }
            //~ }
        //~ }
    //~ }
};

xiNET.Controller.prototype.setLinkColour = function(linkID, colour) {
    var proteinLink = this.proteinLinks.get(linkID);
    if (typeof proteinLink !== 'undefined') {
        proteinLink.colour = new RGBColor(colour);
        proteinLink.colourSpecified = true;
    }
    else {
        var protein = this.proteins.get(linkID);
        if (typeof protein !== 'undefined') {
            protein.internalLinkColour = new RGBColor(colour);
        }
    }
};

xiNET.Controller.prototype.parkAll = function() {
    var prots = this.proteins.values();
    var protCount = prots.length;
    for (var p = 0; p < protCount; p++) {
        var protein = prots[p];
        if (protein.isParked === false)
            protein.toggleParked();
    }
};

xiNET.Controller.prototype.setCutOff = function(cutOff) {
    this.cutOff = cutOff;
    this.checkLinks();
};

xiNET.Controller.prototype.showSelfLinks = function(bool) {
    this.selfLinksShown = bool;
    this.checkLinks();
};

xiNET.Controller.prototype.showAmbig = function(bool) {
    this.ambigShown = bool;
    this.checkLinks();
};

//set the message element to use (optional - mainly for debugging)
xiNET.Controller.prototype.setMessageElement = function(e) {
    this.messageElement = e;
};
