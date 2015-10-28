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
	d3.select(targetDiv).selectAll("*").remove();//avoids prob with 'save - web page complete'
    
    //this is neded to allow the SVG export
    var containingDiv = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
    containingDiv.setAttribute("style", "width:100%;height:100%;display:block;");
    targetDiv.appendChild(containingDiv);
    
    //create SVG elemnent
    this.svgElement = document.createElementNS(xiNET.svgns, "svg");
    this.svgElement.setAttribute('id', 'networkSVG');
    this.svgElement.setAttribute("width", "100%");
    this.svgElement.setAttribute("height", "100%");
    //~ this.svgElement.setAttribute("preserveAspectRatio", "xMinYMin meet");
    //~ this.svgElement.setAttribute("viewBox", "0 0 " + targetDiv.clientWidth + " " + targetDiv.clientHeight); 
    //~ this.svgElement.setAttribute("style", "display:block;");
    // disable right click context menu (we wish to put right click to our own purposes)
    this.svgElement.oncontextmenu = function() {
        return false;
    };
    
    //add listeners
    var self = this;
    this.svgElement.onmousedown = function(evt) { self.mouseDown(evt); };
    this.svgElement.onmousemove = function(evt) { self.mouseMove(evt); };
    this.svgElement.onmouseup = function(evt) { self.mouseUp(evt); };
    this.svgElement.onmouseout = function(evt) { self.hideTooltip(evt); };    
    var mousewheelevt= (/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
    if (document.attachEvent){ //if IE (and Opera depending on user setting) 
        this.svgElement.attachEvent("on"+mousewheelevt, function(evt) {self.mouseWheel(evt);});
    }
    else if (document.addEventListener) { //WC3 browsers
        this.svgElement.addEventListener(mousewheelevt, function(evt) {self.mouseWheel(evt);}, false);
    }  
    this.lastMouseUp = new Date().getTime();   
    this.svgElement.ontouchstart = function(evt) { self.touchStart(evt); };
    this.svgElement.ontouchmove = function(evt) { self.touchMove(evt); };
    this.svgElement.ontouchend = function(evt) { self.touchEnd(evt); };
    //selection and highlight callbacks
    this.linkSelectionCallbacks = [];
    this.linkHighlightsCallbacks = [];
    //legend changed callbacks
    this.legendCallbacks = new Array();

    containingDiv.appendChild(this.svgElement);
    
	//these attributes are used by checkboxes to hide self links or ambiguous links
	this.selfLinksShown = true;
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
    //also more repsonsive / more control if we do our own
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

	this.xiNET_storage = new xiNET_Storage(this);
    this.clear();
};

xiNET.Controller.prototype.clear = function() {
    this.sequenceInitComplete = false;
 	if (this.force) {
		this.force.stop();
	}
 	this.force = null;
 	d3.select(this.p_pLinksWide).selectAll("*").remove();
    d3.select(this.highlights).selectAll("*").remove();
    d3.select(this.p_pLinks).selectAll("*").remove();
    d3.select(this.res_resLinks).selectAll("*").remove();
    d3.select(this.proteinLower).selectAll("*").remove();
    d3.select(this.proteinUpper).selectAll("*").remove();
    
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
    this.matches = [];
    this.groups = d3.set();
    this.subgraphs = [];
    this.layoutXOffset = 0;

    this.proteinCount = 0;
    this.unambigLinkFound = false;
    this.maxBlobRadius = 30;
    Protein.MAXSIZE = 100;

    this.layout = null;
    this.z = 1;
    this.scores = null;
    this.selectedLinks = d3.map();

    this.hideTooltip();

    this.resetZoom();
    this.state = xiNET.Controller.MOUSE_UP;
};
/**
 * Sets the current transform matrix of an element.
 */
xiNET.setCTM = function(element, matrix) {
    var s = "matrix(" + matrix.a + "," + matrix.b + "," + matrix.c + "," + matrix.d + "," + matrix.e + "," + matrix.f + ")";
    element.setAttribute("transform", s);
};

xiNET.Controller.prototype.linkSelectionChanged = function() {
	var callbacks = this.linkSelectionCallbacks;
	var count = callbacks.length;
	for (var i = 0; i < count; i++) {
		callbacks[i](this.selectedLinks);
	}
}

xiNET.Controller.prototype.linkHighlightsChanged = function(highlighted) {
	var callbacks = this.linkHighlightsCallbacks;
	var count = callbacks.length;
	for (var i = 0; i < count; i++) {
		callbacks[i](highlighted);
	}
}

xiNET.Controller.prototype.legendChanged = function() {
	var callbacks = this.legendCallbacks;
	var count = callbacks.length;
	for (var i = 0; i < count; i++) {
		callbacks[i](this.linkColours, this.domainColours);
	}
}

xiNET.Controller.prototype.clearSelection = function() {
	var things = this.selectedLinks.values();
    var count = things.length;
    for (var t = 0; t < count; t++) {
        var thing = things[t];
        thing.setSelected(false);
    }
};

xiNET.Controller.prototype.setAnnotations = function(annotationChoice) {
	this.annotationChoice = annotationChoice;
	//clear all annot's
	var mols = this.proteins.values();
	var molCount = mols.length;
	for (var m = 0; m < molCount; m++) {
		mols[m].clearPositionalFeatures();
	}
	this.domainColours = null;
    this.legendChanged();
	if (this.sequenceInitComplete) { //dont want to be changing annotations while still waiting on sequence
		var self = this;
		if (annotationChoice.toUpperCase() === "CUSTOM"){
			for (m = 0; m < molCount; m++) {
				var mol = mols[m];
				mol.setPositionalFeatures(mol.customAnnotations);
			}
			chooseColours();
		}
		else if (annotationChoice.toUpperCase() === "LYSINES") {
			for (m = 0; m < molCount; m++) {
				var mol = mols[m];
				var seq = mol.sequence;
				var annots = [];
				for (var i =0; i < mol.size; i++){
					var aa = seq[i];
					if (aa === 'K'){
						annots.push(new Annotation ("Lysine", i+1, i+1));
					}
				
				}
				mol.setPositionalFeatures(annots);
			}
			chooseColours();
		}
		else if (annotationChoice.toUpperCase() === "SUPERFAM" || annotationChoice.toUpperCase() === "SUPERFAMILY"){
			var molsAnnotated = 0;
			for (m = 0; m < molCount; m++) {
				var mol = mols[m];
				this.xiNET_storage.getSuperFamFeatures(mol.id, function (id, fts){
					var m = self.proteins.get(id);
					m.setPositionalFeatures(fts);
					molsAnnotated++;
					if (molsAnnotated === molCount) {
						chooseColours();
					}
				});
			}
		}
		else if (annotationChoice.toUpperCase() === "UNIPROT" || annotationChoice.toUpperCase() === "UNIPROTKB") {
			var molsAnnotated = 0;
			for (m = 0; m < molCount; m++) {
				var mol = mols[m];
				this.xiNET_storage.getUniProtFeatures(mol.id, function (id, fts){
					var m = self.proteins.get(id);
					if (m.accession.indexOf("-") === -1 || m.accession === "P02768-A") {
						if (m.accession === "P02768-A") {
							var offset = -24;
							for (var f = 0; f < fts.length; f++) {
								var feature = fts[f];
								feature.start = feature.start + offset;
								feature.end = feature.end + offset;
							}
						}
						m.setPositionalFeatures(fts);
					}
					molsAnnotated++;
					if (molsAnnotated === molCount) {
						chooseColours();
					}
				});
			}
		}
	}

	function chooseColours(){
		var categories = d3.set();
		for (m = 0; m < molCount; m++) {
			var mol = mols[m];
			for (var a = 0; a < mol.annotations.length; a++){
				categories.add(mol.annotations[a].name);
			}
		}
		var catCount = categories.values().length;
		if (catCount < 3){catCount = 3;}
        //~ if (catCount < 21) {
			if (catCount < 9) {
				var reversed = colorbrewer.Accent[catCount].slice().reverse();
				self.domainColours = d3.scale.ordinal().range(reversed);
			}
			else if (catCount < 13) {
				var reversed = colorbrewer.Set3[catCount].slice().reverse();
				self.domainColours = d3.scale.ordinal().range(reversed);
			}
			else {
				self.domainColours = d3.scale.category20();
			}
			for (m = 0; m < molCount; m++) {
				var mol = mols[m];
				for (a = 0; a < mol.annotations.length; a++) {
					var anno = mol.annotations[a];
					var c = self.domainColours(anno.name);
					anno.pieSlice.setAttribute("fill", c);
					anno.pieSlice.setAttribute("stroke", c);
					anno.colouredRect.setAttribute("fill", c);
					anno.colouredRect.setAttribute("stroke", c);
				}
			}
		//~ }
		self.legendChanged();
	}
};

//if no saved layout this can be done before all proteins have their sequences
xiNET.Controller.prototype.initLayout = function() {
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
	Protein.UNITS_PER_RESIDUE = (((width / 2)) - Protein.LABELMAXLENGTH) / Protein.MAXSIZE;  var groupCount = this.groups.values().length;
    if (groupCount > 1 && groupCount < 5) {
		//can now choose link colours for comparing sets
		var catCount = this.groups.values().length;
		//~ if (catCount > 1 && catCount < 6) {
		//~ if (catCount < 3){catCount = 3;}
        // if (catCount < 21) {
			//~ if (catCount < 9) {
				//~ var reversed = colorbrewer.Accent[3];
				this.linkColours = d3.scale.ordinal().range(colorbrewer.Dark2[5]);
			//~ }
			//~ else if (catCount < 13) {
				//~ var reversed = colorbrewer.Set3[catCount];
				//~ this.linkColours = d3.scale.ordinal().range(reversed);
			//~ }
			//~ else {
				//~ this.linkColours = d3.scale.category20();
			//~ }	
		//}	
			var groups = this.groups.values();
			for (var g = 0; g < groupCount; g++) {
				this.linkColours(groups[g]);
			}
			this.legendChanged();
		//~ }
	}    
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

xiNET.Controller.prototype.getSVG = function() {
	var svgXml = this.svgElement.parentNode.innerHTML.replace(/<rect .*?\/rect>/i, "");//take out white background fill   
    var viewBox = 'viewBox="0 0 ' + this.svgElement.parentNode.clientWidth + " " + this.svgElement.parentNode.clientHeight + '" '; 
    svgXml = svgXml.replace('<svg ','<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events" ' + viewBox);
	
	return '<?xml version="1.0" encoding="UTF-8" standalone=\"no\"?>' 
		+ "<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">"
		+ svgXml;
}

/*
xiNET.Controller.prototype.getMatchesCSV = function() {
	var csv = '"Id","Protein1","PepPos1","PepSeq1","LinkPos1","Protein2","PepPos2","PepSeq2","LinkPos2","Score","Group"\r\n';
	var matches = this.matches;
	var matchCount = matches.length;
	for (var i = 0; i < matchCount; i++){
		var match = matches[i];
		if (match.meetsFilterCriteria()){
			csv += '"' + match.id + '","' + match.protein1 + '","' +match.pepPos1 + '","' 
				+ match.pepSeq1 + '","' + match.linkPos1 + '","' 
				+ match.protein2 + '","' + match.pepPos2 + '","'
				+ match.pepSeq2 + '","' + match.linkPos2 + '","'
				+ match.score + '","' + match.group + '"\r\n';
		}
	}
	return csv;
}

xiNET.Controller.prototype.getLinksCSV = function() {
	var csv = '"Protein1","LinkPos1","LinkedRes1","Protein2","LinkPos2","LinkedRes2"\r\n';
	
	var pLinks = this.proteinLinks.values();
	var pLinkCount = pLinks.length;
	for (var pl = 0; pl < pLinkCount; pl++){
		var resLinks = pLinks[pl].residueLinks.values();
		var resLinkCount = resLinks.length;
		for (var rl =0; rl < resLinkCount; rl ++) {
			var residueLink = resLinks[rl];
			var filteredMatches = residueLink.getFilteredMatches();
			if (filteredMatches.length > 0){
				csv += '"' + xiNET.Controller.bestId(residueLink.proteinLink.fromProtein) + '","' 
					+ residueLink.fromResidue + '","' + residueLink.proteinLink.fromProtein.sequence[residueLink.fromResidue - 1] + '","'
					+ xiNET.Controller.bestId(residueLink.proteinLink.toProtein) + '","'
					+ residueLink.toResidue + '","';
				if (residueLink.proteinLink.toProtein && residueLink.toResidue) {
					csv += residueLink.proteinLink.toProtein.sequence[residueLink.toResidue - 1];
				}
				csv += '"\r\n';				
			}
		}		  		
	}
	return csv;
}*/

xiNET.Controller.bestId = function(protein){
	if (protein.accession) {
		return protein.accession;
	}
	if (protein.name) {
		return protein.name;
	}
	return protein.id;
}

xiNET.Controller.prototype.addProtein = function(id, label, sequence, accession) {
    var newProt = new Protein(id, this, accession, label);
    newProt.setSequence(sequence);
    //~ newProt.init();
    this.proteins.set(id, newProt);
};

//Positions are one based
xiNET.Controller.prototype.addMatch = function(id, 
				pep1_protIDs, pep1_positions, pep1_seq, linkPos1, 
				pep2_protIDs, pep2_positions, pep2_seq, linkPos2,
				score, dataSetId, autovalidated, validated, run_name, scan_number) { 
    var match = new Match(this, id,
				pep1_protIDs, pep1_positions, pep1_seq, linkPos1,
				pep2_protIDs, pep2_positions, pep2_seq, linkPos2,
				score, dataSetId, autovalidated, validated, run_name, scan_number);
    return match;
};

// add all matches with single call, arg is an array of arrays
xiNET.Controller.prototype.addMatches = function(matches) {
    var l = matches.length;
    for (var i = 0; i < l; i++) {
        //        alert(matches[i]);
        this.addMatch(matches[i][0], matches[i][1], matches[i][2], matches[i][3],
                matches[i][4], matches[i][5], matches[i][6], matches[i][7],
                matches[i][8], matches[i][9], matches[i][10], matches[i][11],
                matches[i][12], matches[i][13], matches[i][14], matches[i][15]);
    }
}

// add annotation, 'HUMAN' RESIDUE NUMBERING - STARTS AT ONE
//TODO: make start and end res last args
xiNET.Controller.prototype.addAnnotation = function(protId, annotName, startRes, endRes, colour) {
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
			protein.customAnnotations = [];
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
    var myJSONText = JSON.stringify(this.proteins.values(), null, '\t');
    var viewportJSON = "";//ProtNet.svgElement.getAttribute("viewBox");
    var layout = myJSONText.replace(/\\u0000/gi, '');
    //+ "\n{co:" + this.cutOff +"}";
    return layout;
};

xiNET.Controller.prototype.setLayout = function(layoutJSON) {
    this.layout = typeof layoutJSON !== 'object' ? JSON.parse(decodeURIComponent(layoutJSON)) : layoutJSON;
};

xiNET.Controller.prototype.loadLayout = function() {
    for (var prot in this.layout) {
        var protLayout = this.layout[prot];
        var protein = this.proteins.get(protLayout.id);
        if (protein !== undefined) {
              this.proteinLower.appendChild(protein.lowerGroup);
            this.proteinUpper.appendChild(protein.upperGroup);
          protein.setPosition(protLayout["x"], protLayout["y"]);
            if (typeof protLayout['rot'] !== 'undefined') {
                protein.rotation = protLayout["rot"] - 0;
            }
  
            if (protLayout["form"]) {
				//~ if (protLayout["stickZoom"]) {
                    protein.stickZoom = 1;//protLayout["stickZoom"];
                //~ }  
                protein.form = protLayout["form"] - 0;
                // protein.form =1;
                // protein.scale();
                // protein.toStick();
                //~ //protein.setRotation(protein.rotation);
            }
             //~ protein.form = 1;
            //~ protein.init();
            
            //~ if (typeof protLayout["form"]) {
              //~ 
            //~ }
            
			//~ protein.setAllLineCoordinates();// watch out for this

            if (typeof protLayout["parked"] !== 'undefined') {
                protein.setParked(protLayout["parked"]);
            }
            if (protLayout["flipped"]) { //TODO: fix this
                protein.toggleFlipped(); // change to setFlipped(protLayout["flipped"])
            }
        }
        else {console.log("!");}
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

