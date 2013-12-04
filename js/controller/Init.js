//		xiNET Cross-link Viewer
//		Copyright 2013 Rappsilber Laboratory
//
//		author: Colin Combe
//
//		Init.js

var xiNET = {}; //crosslinkviewer's javascript namespace

xiNET.svgns = "http://www.w3.org/2000/svg";// namespace for svg elements
xiNET.xlinkNS = "http://www.w3.org/1999/xlink";// namespace for xlink, for use/defs elements

xiNET.linkWidth = 1.5;// default line width

// highlight and selection colours are global
// (because all instances of xiNET should use same colours for this)
xiNET.highlightColour = new RGBColor("#FDC086");
xiNET.selectedColour = new RGBColor("yellow");
xiNET.defaultSelfLinkColour = new RGBColor("#8073AC'");
xiNET.defaultInterLinkColour = new RGBColor("#E08214");


xiNET.Controller = function(targetDiv) {// targetDiv could be div itself or id of div
	if (typeof targetDiv === "string"){
		targetDiv = document.getElementById(targetDiv);
	}
	
	//these attributes are used by checkboxes to hide self links or ambiguous links
	this.intraHidden = false;
	this.ambigHidden = false;
	
    this.fields = {}; // not sure about this, used by text search
    this.emptyElement(targetDiv); //avoids prob with 'save - web page complete'
    //create SVG elemnent
    this.svgElement = document.createElementNS(xiNET.svgns, "svg");
    this.svgElement.setAttribute('id', 'networkSVG');
    targetDiv.appendChild(this.svgElement);
    
    this.panning = false;
    // if we are dragging something at the moment - this will be the element that is draged
    this.dragElement = null;
    // are we dragging at the moment?
    this.dragging = false;
    // from where did we start dragging
    this.dragStart = {};
    // are we rotating at the moment
    this.rotating = false;

    //~ this.svgElement.setAttribute("class", "Xlv");
    // disable right click context menu (we wish to put right click to our own purposes)
    // doesn't work in Opera, Opera requires user to specify this thru options/prefs
    this.svgElement.oncontextmenu = function() {
        return false;
    };

    // background needed in some versions of chrome, else cannot click/drag background
    // size is that of large monitor, potentially needs to be bigger coz browser can be zoomed
    // TODO: dynamically resize background to match screen bounding box
    var background = document.createElementNS(xiNET.svgns, "rect");
    background.setAttribute("id", "XlvBackground");
    background.setAttribute("x", 0);
    background.setAttribute("y", 0);
    background.setAttribute("width", 2560 * 2);
    background.setAttribute("height", 2048 * 2);
    background.setAttribute("fill-opacity", "1");
    background.setAttribute("fill", "#FFFFFF");
    this.svgElement.appendChild(background);

    this.container = document.createElementNS(xiNET.svgns, "g");
    this.container.setAttribute("id", "container");

    var useDefs = false;//show magnifier using use and defs elements
    var defs;
    if (useDefs === true) {
        //for magnifier... chrome only
        defs = document.createElementNS(xiNET.svgns, "defs");
        defs.appendChild(this.container);
    }

    this.p_pLinksWide = document.createElementNS(xiNET.svgns, "g");
    this.p_pLinksWide.setAttribute("id", "p_pLinksWide");
    this.container.appendChild(this.p_pLinksWide);

    this.proteinLower = document.createElementNS(xiNET.svgns, "g");
    this.proteinLower.setAttribute("id", "proteinLower");
    this.container.appendChild(this.proteinLower);

    this.highlights = document.createElementNS(xiNET.svgns, "g");
    this.highlights.setAttribute("class", "highlights");//proteins also contain highlight groups
    this.container.appendChild(this.highlights);

    this.p_pLinks = document.createElementNS(xiNET.svgns, "g");
    this.p_pLinks.setAttribute("id", "p_pLinks");
    this.container.appendChild(this.p_pLinks);

    this.res_resLinks = document.createElementNS(xiNET.svgns, "g");
    this.res_resLinks.setAttribute("id", "res_resLinks");
    this.container.appendChild(this.res_resLinks);

    this.proteinUpper = document.createElementNS(xiNET.svgns, "g");
    this.proteinUpper.setAttribute("id", "proteinUpper");
    this.container.appendChild(this.proteinUpper);

    if (useDefs === false) {//this is normal
        this.svgElement.appendChild(this.container);
    }
    else {//for use/defs magnifier - test code only
        var use = document.createElementNS(xiNET.svgns, "use");
        use.setAttributeNS(xiNET.xlinkNS, "href", "#container");
        this.svgElement.appendChild(use);

        var cp = document.createElementNS(xiNET.svgns, "clipPath");
        cp.setAttribute('id', 'CP');
        var c = document.createElementNS(xiNET.svgns, "circle");
        c.setAttribute('cx', '341');
        c.setAttribute('cy', '192');
        c.setAttribute('r', '50');
        cp.appendChild(c);
        this.svgElement.appendChild(cp);

        var mag = document.createElementNS(xiNET.svgns, 'g');
        mag.setAttribute('id', 'clippedI');
        mag.setAttribute('transform', 'translate(-341, -192) scale(2)');
        var magUse = document.createElementNS(xiNET.svgns, "use");
        magUse.setAttributeNS(xiNET.xlinkNS, "href", "#container");
        magUse.setAttribute("clip-path", "url(#CP)");
        magUse.setAttribute('opacity', '1.0');
        mag.appendChild(magUse);
        var magFrame = document.createElementNS(xiNET.svgns, "circle");
        magFrame.setAttribute('cx', '341');
        magFrame.setAttribute('cy', '192');
        magFrame.setAttribute('r', '50');
        magFrame.setAttribute('fill', 'none');
        magFrame.setAttribute('stroke', 'gray');
        magFrame.setAttribute('stroke-with', 'gray');
        mag.appendChild(magFrame);

        this.svgElement.appendChild(mag);
        this.svgElement.appendChild(defs);
    }
    //showing title as tooltips is not part of svg spec
    //also more repsonsive if we do out own
    this.tooltip = document.createElementNS(xiNET.svgns, "text");
  //  this.tooltip.setAttribute('class', 'tooltip');
  //  this.tooltip.setAttribute('id', 'tooltip');
    this.tooltip.setAttribute('x', 0);
    this.tooltip.setAttribute('y', 0);
    var tooltipTextNode = document.createTextNode('tooltip');
    this.tooltip.appendChild(tooltipTextNode);

    this.tooltip_bg = document.createElementNS(xiNET.svgns, "rect");
    this.tooltip_bg.setAttribute('class', 'tooltip_bg');
    this.tooltip_bg.setAttribute('id', 'tooltip_bg');

    this.tooltip_bg.setAttribute('fill-opacity', 0.75);
    this.tooltip_bg.setAttribute('stroke-opacity', 1);
    this.tooltip_bg.setAttribute('stroke-width', 1);

    this.tooltip_subBg = document.createElementNS(xiNET.svgns, "rect");
    this.tooltip_subBg.setAttribute('fill', 'white');
    this.tooltip_subBg.setAttribute('stroke', 'white');
    this.tooltip_subBg.setAttribute('class', 'tooltip_bg');
    this.tooltip_subBg.setAttribute('id', 'tooltip_bg');
    this.tooltip_subBg.setAttribute('opacity', 1);
    this.tooltip_subBg.setAttribute('stroke-width', 1);

    this.svgElement.appendChild(this.tooltip_subBg);
    this.svgElement.appendChild(this.tooltip_bg);
    this.svgElement.appendChild(this.tooltip);

    this.clear();
};

xiNET.Controller.prototype.clear = function() {
    this.initComplete = false;
    this.proteins = d3.map();
    this.proteinLinks = d3.map();
    this.matches = d3.map();
    this.subgraphs = new Array();
    this.layoutXOffset = 0;

    this.proteinCount = 0;
    this.maxBlobRadius = 0;
    Protein.MAXSIZE = 0;

    this.layout = null;
    this.z = 1;
    this.scores = null;
    this.selected = d3.map();
    this.selectedLinks = d3.map();


    this.tooltip.setAttribute('visibility', 'hidden');
    this.tooltip_bg.setAttribute('visibility', 'hidden');

    this.resetZoom();
    this.state = xiNET.Controller.MOUSE_UP;
    //    var suspendID = this.svgElement.suspendRedraw(5000);
    this.emptyElement(this.p_pLinksWide);
    this.emptyElement(this.highlights);
    this.emptyElement(this.p_pLinks);
    this.emptyElement(this.res_resLinks);
    this.emptyElement(this.proteinLower);
    this.emptyElement(this.proteinUpper);
//    this.svgElement.unsuspendRedraw(suspendID);
};

xiNET.Controller.prototype.emptyElement = function(element) {
    while (element.lastChild) {
        element.removeChild(element.lastChild);
    }
};

xiNET.Controller.prototype.toJSON = function() {
    return {
        //        links: this.proteinLinks,
        proteins: this.proteins
    };
};

xiNET.Controller.prototype.message = function(text, preformatted) {
    if (typeof this.messageElement !== 'undefined') {
        if (typeof text === "object") {
            text = JSON.stringify(text, null, '\t');
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
    newProt.initProtein(sequence, label, description, size);
    this.proteins.set(id, newProt);
};

//Positions are one based
xiNET.Controller.prototype.addMatch = function(pep1_protIDs, pep1_positions,
        pep2_protIDs, pep2_positions,
        id, score, linkPos1, linkPos2, pep1_seq, pep2_seq, autovalidated, validated) {
    var match = new Match(pep1_protIDs, pep1_positions, pep2_protIDs, pep2_positions,
            id, score, this, linkPos1, linkPos2, pep1_seq, pep2_seq, autovalidated, validated);
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
xiNET.Controller.prototype.addAnnotation = function(protName, annotName, startRes, endRes, colour) {
    var prots = this.proteins.values();
    var protCount = prots.length;
    for (var p = 0; p < protCount; p++) {
        var protein = prots[p];
        if (protein.name == protName) {

            //lets just check a few things here...
            // we're using human (starts at 1) numbering
            if (startRes == null && endRes == null) {
                startRes = 1;
                endRes = protein.size;
            }
            else if (startRes == null)
                startRes = endRes;
            else if (endRes == null)
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
            protein.setPositionalFeatures(protein.customAnnotations);
        }
    }
}

xiNET.Controller.prototype.init = function(width, height) {
    //initial dimensions
    var containingDiv = this.svgElement.parentNode;
    if (typeof containingDiv !== 'undefined' && containingDiv != null) {
        width = containingDiv.clientWidth;
        height = containingDiv.clientHeight;
    } else {
        width = 800;
        height = 480;
    }
    this.svgElement.setAttribute("width", "100%");
    this.svgElement.setAttribute("height", "100%");
    this.svgElement.setAttribute("style", "display:block;");

    this.maxBlobRadius = Math.sqrt(Protein.MAXSIZE / Math.PI);
    Protein.UNITS_PER_RESIDUE = ((width / 2)) / 2000;//(((width - 350)  * 0.5) - Protein.LABELMAXLENGTH) / Protein.MAXSIZE;

    this.initComplete = true;

    if (typeof this.layout !== 'undefined' && this.layout != null) {
        this.loadLayout();
    } else {
        //make inital form sticks or blobs
        var proteins = this.proteins.values();
        var proteinCount = proteins.length;
        for (var p = 0; p < proteinCount; p++) {
            var prot = proteins[p];
            prot.initStick();//needed, todo - remove
            if (this.proteins.keys().length < 3) {
                prot.toStick();
            }
            else {
                prot.toBlob();
            }
            prot.setPosition(0, 0);
            //            this.proteinLower.appendChild(prot.rectDomainsColoured);
            this.proteinUpper.appendChild(prot.upperGroup);
        }
        this.autoLayout(width, height);
    }
//    this.message('#proteins: ' + this.proteins.values().length +
//            '\n#protein - protein links: ' + this.proteinLinks.values().length);

    //temp
//    this.geneNames = d3.map();
//    this.getGeneName(0);
	this.checkLinks();
    this.initMouseEvents();
}


xiNET.Controller.prototype.getGeneName = function(pi) {
    var prot = this.proteins.values()[pi];
    var xmlhttp = new XMLHttpRequest();
    var url = "http://129.215.14.148/jb/uniprot/sequence.php?id=" + prot.accession + "&dat";
    var params = "";//;
    xmlhttp.open("GET", url, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onreadystatechange = function() {//Call a function when the state changes.
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var response = xmlhttp.responseText;
           var gnRegex = /GN( *)(.*)/g
           var gn = gnRegex.exec(response)[2];
           //alert(gn);
           xlv.geneNames.set(prot.accession, gn);

            var proteins = xlv.proteins.values();
            var protIndex = proteins.indexOf(prot);
            if (protIndex < proteins.length - 1) {
                xlv.getGeneName(protIndex + 1);
            }
            else {
                xlv.message(xlv.geneNames);
            }
        }
    };
    xmlhttp.send(params);
}

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
            //            protein.colourSpecified = true;
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

xiNET.Controller.prototype.resetZoom = function() {
    //    var conBBox = this.container.getBBox();
    //    var w = this.svgElement.parentNode.clientWidth;//getAttribute("viewBox");
    //    var h = this.svgElement.parentNode.clientHeight;//getAttribute("width");
    //    alert(vb + " "  + w + " "  + h + " " + "");
    this.container.setAttribute("transform", "scale(1)");
    this.scale();
    var proteins = this.proteins.values();
    var proteinCount = proteins.length;
    for (var p = 0; p < proteinCount; p++) {
        var prot = proteins[p];
        prot.stickZoom = 1;
        prot.scale();
    }
};

xiNET.Controller.prototype.getLayout = function() {
    var myJSONText = JSON.stringify(this, null, '\t');
    var viewportJSON = "";//ProtNet.svgElement.getAttribute("viewBox");
    var layout = myJSONText.replace(/\\u0000/gi, '');
    //+ "\n{co:" + this.cutOff +"}";
    return layout;
};

xiNET.Controller.prototype.setLayout = function(layoutJSON) {
    this.layout = typeof layoutJSON !== 'object' ? JSON.parse(decodeURIComponent(layoutJSON)) : layoutJSON;
};

xiNET.Controller.prototype.loadLayout = function() {
    var suspendID = this.svgElement.suspendRedraw(5000);
    for (var prot in this.layout.proteins) {
        var protState = this.layout.proteins[prot];
        var protein = this.proteins.get(prot);
        if (protein !== undefined) {
            protein.setPosition(protState["x"], protState["y"]);
            protein.initStick();
            if (typeof protState.annot !== 'undefined' && protState.annot != null) {
                if (protState.annot.length > 0) {
                    protein.customAnnotations = protState.annot;
                    protein.setPositionalFeatures(protein.customAnnotations);
                }
            }
            if (typeof protState["form"] !== 'undefined') {
                protein.setForm(protState["form"] - 0);
            }
            else {
                protein.toBlob();
            }
            if (typeof protState['rot'] !== 'undefined') {
                protein.rotation = protState["rot"];
            }

            if (protState["form"] === 1) {
                if (typeof protState["stickZoom"] !== 'undefined' && protState["stickZoom"] !== 1) {
                    protein.stickZoom = protState["stickZoom"];
                    protein.scale();
                }
                protein.setRotation(protein.rotation);
            }
            protein.setAllLineCoordinates();// watch out for this

            if (typeof protState["parked"] !== 'undefined') {
                protein.setParked(protState["parked"]);
            }
            if (protState["flipped"]) { //TODO: fix this
                protein.toggleFlipped(); // change to setFlipped(protState["flipped"])
            }
            if (protState["processedDAS"]) {
                protein.processedDAS = d3.map(protState["processedDAS"]);
            }
            //            this.proteinLower.appendChild(protein.rectDomains);
            this.proteinUpper.appendChild(protein.upperGroup);
        }
    }

    // incase proteins have been added which are not included in layout -
    var proteins = this.proteins.values();
    var proteinCount = proteins.length;
    for (var p = 0; p < proteinCount; p++) {
        prot = proteins[p];
        if (prot.form == null) {
            prot.initStick();
            prot.toBlob();
            prot.setPosition(20, 20);
            //            this.proteinLower.appendChild(prot.rectDomains);
            this.proteinUpper.appendChild(prot.upperGroup);
        }
    }

    // layout info for links (hidden / specified colour)
    for (var l in this.layout.links) {
        var linkState = this.layout.links[l];
        var link = this.proteinLinks.get(l);
        if (link !== undefined) {
            if (typeof linkState.hidden !== 'undefined')
                link.hidden = linkState.hidden;
            var c = linkState.colour;
            if (typeof c !== 'undefined') {
                var resLinks = link.residueLinks.values();
                var resLinkCount = resLinks.length;
                for (var r = 0; r < resLinkCount; r++) {
                    var resLink = resLinks[r];
                    resLink.initSVG();
                    resLink.line.setAttribute('stroke', 'rgb(' + c.r + ',' + c.g + ',' + c.b + ')');
                }
            }
        }
    }
    this.svgElement.unsuspendRedraw(suspendID);
};
