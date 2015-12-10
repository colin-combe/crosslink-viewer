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
};

//~ xiNET.Controller.prototype.clear = function() {
//~ 
//~ };

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

//~ xiNET.Controller.prototype.legendChanged = function() {
//~ 
//~ }

xiNET.Controller.prototype.clearSelection = function() {
	var things = this.selectedLinks.values();
    var count = things.length;
    for (var t = 0; t < count; t++) {
        var thing = things[t];
        thing.setSelected(false);
    }
};

//~ xiNET.Controller.prototype.setAnnotations = function(annotationChoice) {
//~ };

//if no saved layout this can be done before all proteins have their sequences

//requires all proteins have had sequence set
//~ xiNET.Controller.prototype.initProteins = function() {
//~ 
//~ }

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

//~ xiNET.Controller.prototype.resetZoom = function() {
//~ 
//~ };

xiNET.Controller.prototype.getSVG = function() {
	var svgXml = this.svgElement.parentNode.innerHTML.replace(/<rect .*?\/rect>/i, "");//take out white background fill   
    var viewBox = 'viewBox="0 0 ' + this.svgElement.parentNode.clientWidth + " " + this.svgElement.parentNode.clientHeight + '" '; 
    svgXml = svgXml.replace('<svg ','<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events" ' + viewBox);
	
	return '<?xml version="1.0" encoding="UTF-8" standalone=\"no\"?>' 
		+ "<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">"
		+ svgXml;
}

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

