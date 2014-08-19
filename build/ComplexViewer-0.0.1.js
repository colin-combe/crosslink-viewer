!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.xiNET=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
//    xiNET Interaction Viewer
//    Copyright 2013 Rappsilber Laboratory, University of Edinburgh
//
//    This product includes software developed at
//    the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//
//	  author: Colin Combe
//
//    Init.js

"use strict";

var xiNET = {}; //create xiNET's javascript namespace

xiNET.svgns = "http://www.w3.org/2000/svg";// namespace for svg elements
xiNET.xlinkNS = "http://www.w3.org/1999/xlink";// namespace for xlink, for use/defs elements

xiNET.linkWidth = 1.3;// default line width

// highlight and selection colours are static
// (because all instances of xiNET should use same colours for this)
xiNET.highlightColour = new RGBColor("#ffff99");//"#fdc086");//"yellow");
xiNET.selectedColour = new RGBColor("#ffff99");//"yellow");

xiNET.Controller = function(targetDiv) {// targetDiv could be div itself or id of div
	if (typeof targetDiv === "string"){
		targetDiv = document.getElementById(targetDiv);
	}
	
	//these attributes are used by checkboxes to hide self links or ambiguous links
	this.intraHidden = false;
	this.ambigHidden = false;
	
    this.fields = {}; //used by text search
    this.emptyElement(targetDiv); //avoids prob with 'save - web page complete'
    
    //create SVG elemnent
    this.svgElement = document.createElementNS(xiNET.svgns, "svg");
    this.svgElement.setAttribute('id', 'networkSVG');
    targetDiv.appendChild(this.svgElement);
    
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

    // disable right click context menu (we wish to put right click to our own purposes)
    this.svgElement.oncontextmenu = function() {
        return false;
    };

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

    this.container = document.createElementNS(xiNET.svgns, "g");
    this.container.setAttribute("id", "container");

    var useDefs = false;//show magnifier using use and defs elements - experimental
    // see https://bugzilla.mozilla.org/show_bug.cgi?id=265895
    var defs;
    if (useDefs === true) {
        //for magnifier... chrome only
        defs = document.createElementNS(xiNET.svgns, "defs");
        defs.appendChild(this.container);
    }

    this.naryLinks = document.createElementNS(xiNET.svgns, "g");
    this.naryLinks.setAttribute("id", "naryLinks");
    this.container.appendChild(this.naryLinks);
	
	this.p_pLinksWide = document.createElementNS(xiNET.svgns, "g");
    this.p_pLinksWide.setAttribute("id", "p_pLinksWide");
    this.container.appendChild(this.p_pLinksWide);
 
    this.proteinLower = document.createElementNS(xiNET.svgns, "g");
    this.proteinLower.setAttribute("id", "proteinLower");
    this.container.appendChild(this.proteinLower);

    this.highlights = document.createElementNS(xiNET.svgns, "g");
    this.highlights.setAttribute("class", "highlights");//interactors also contain highlight groups
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
    //showing title as tooltips is NOT part of svg spec (even though some browsers do this)
    //also more repsonsive / more control if we do out own
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
    this.interactors = d3.map();
    this.links = d3.map();
    this.matches = d3.map();
    this.subgraphs = new Array();
    this.layoutXOffset = 0;

    this.proteinCount = 0;
    this.maxBlobRadius = 0;
    Interactor.MAXSIZE = 0;

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
    this.emptyElement(this.naryLinks);
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

xiNET.Controller.prototype.message = function(text, preformatted) {
    //~ if (typeof this.messageElement !== 'undefined') {
        //~ if (typeof text === "object") {
            //~ text = JSON.stringify(text, null, ' ');
            //~ text = text.replace(/\\u0000/gi, '');
            //~ preformatted = true;
        //~ }
        //~ if (preformatted)
            //~ text = "<pre>" + text + "</pre>";
        //~ this.messageElement.innerHTML = text;
    //~ }
};

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

    this.maxBlobRadius = Math.sqrt(2000 / Math.PI);//((Interactor.MAXSIZE < 5000)? Interactor.MAXSIZE : 5000)
   // Interactor.UNITS_PER_RESIDUE = (((width - 350)  * 0.5) - Interactor.LABELMAXLENGTH) / Interactor.MAXSIZE;//TODO: fix that -350 hack
    
    this.initComplete = true;

    if (typeof this.layout !== 'undefined' && this.layout != null) {
        this.loadLayout();
    } else {
        //make inital form sticks or blobs
        var interactors = this.interactors.values();
        var proteinCount = interactors.length;
        for (var p = 0; p < proteinCount; p++) { //temp
			var prot = interactors[p];
            prot.setPosition(0, 0);
		}
        for (var p = 0; p < proteinCount; p++) {
            var prot = interactors[p];
           // prot.initStick();//needed, todo - remove
            if (this.interactors.keys().length < 3) {
               if (prot.toStick) prot.toStick();
            }
            else {
               if (prot.toBlob) prot.toBlob();
            }
            this.proteinLower.appendChild(prot.lowerGroup);
            this.proteinUpper.appendChild(prot.upperGroup);
        }
        this.autoLayout(width, height);
    }
//    this.message('#interactors: ' + this.interactors.values().length +
//            '\n# links: ' + this.links.values().length);

    this.initMouseEvents();
    if (typeof this.initTouchEvents === 'function'){
		this.initTouchEvents();
	}
}

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
    var interactors = this.interactors.values();
    var proteinCount = interactors.length;
    for (var p = 0; p < proteinCount; p++) {
        var prot = interactors[p];
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
    for (var prot in this.layout.interactors) {
        var protState = this.layout.interactors[prot];
        var protein = this.interactors.get(prot);
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

            if (typeof protState["form"] !== 'undefined' && protState["form"] === 1) {
                protein.toStick();
            }
            else {
                protein.toBlob();
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

    // incase interactors have been added which are not included in layout -
    var interactors = this.interactors.values();
    var proteinCount = interactors.length;
    for (var p = 0; p < proteinCount; p++) {
        prot = interactors[p];
        if (prot.x == null) {
            //prot.initStick();
            prot.toBlob();
            prot.setPosition(20, 20);
            this.proteinLower.appendChild(prot.lowerGroup);
            this.proteinUpper.appendChild(prot.upperGroup);
        }
    }

    // layout info for links (hidden / specified colour)
    for (var l in this.layout.links) {
        var linkState = this.layout.links[l];
        var link = this.links.get(l);
        if (link !== undefined) {
            if (typeof linkState.hidden !== 'undefined')
                link.hidden = linkState.hidden;
            var c = linkState.colour;
            if (typeof c !== 'undefined') {
                var resLinks = link.sequenceLinks.values();
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

module.exports = xiNET.Controller;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2h1YS9yZXBvcy9qb3Noa2gvaW50ZXJhY3Rpb24tdmlld2VyL25vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9qb3NodWEvcmVwb3Mvam9zaGtoL2ludGVyYWN0aW9uLXZpZXdlci9zcmMvY29udHJvbGxlci9Jbml0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gICAgeGlORVQgSW50ZXJhY3Rpb24gVmlld2VyXG4vLyAgICBDb3B5cmlnaHQgMjAxMyBSYXBwc2lsYmVyIExhYm9yYXRvcnksIFVuaXZlcnNpdHkgb2YgRWRpbmJ1cmdoXG4vL1xuLy8gICAgVGhpcyBwcm9kdWN0IGluY2x1ZGVzIHNvZnR3YXJlIGRldmVsb3BlZCBhdFxuLy8gICAgdGhlIFJhcHBzaWxiZXIgTGFib3JhdG9yeSAoaHR0cDovL3d3dy5yYXBwc2lsYmVybGFiLm9yZy8pLlxuLy9cbi8vXHQgIGF1dGhvcjogQ29saW4gQ29tYmVcbi8vXG4vLyAgICBJbml0LmpzXG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgeGlORVQgPSB7fTsgLy9jcmVhdGUgeGlORVQncyBqYXZhc2NyaXB0IG5hbWVzcGFjZVxuXG54aU5FVC5zdmducyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjsvLyBuYW1lc3BhY2UgZm9yIHN2ZyBlbGVtZW50c1xueGlORVQueGxpbmtOUyA9IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiOy8vIG5hbWVzcGFjZSBmb3IgeGxpbmssIGZvciB1c2UvZGVmcyBlbGVtZW50c1xuXG54aU5FVC5saW5rV2lkdGggPSAxLjM7Ly8gZGVmYXVsdCBsaW5lIHdpZHRoXG5cbi8vIGhpZ2hsaWdodCBhbmQgc2VsZWN0aW9uIGNvbG91cnMgYXJlIHN0YXRpY1xuLy8gKGJlY2F1c2UgYWxsIGluc3RhbmNlcyBvZiB4aU5FVCBzaG91bGQgdXNlIHNhbWUgY29sb3VycyBmb3IgdGhpcylcbnhpTkVULmhpZ2hsaWdodENvbG91ciA9IG5ldyBSR0JDb2xvcihcIiNmZmZmOTlcIik7Ly9cIiNmZGMwODZcIik7Ly9cInllbGxvd1wiKTtcbnhpTkVULnNlbGVjdGVkQ29sb3VyID0gbmV3IFJHQkNvbG9yKFwiI2ZmZmY5OVwiKTsvL1wieWVsbG93XCIpO1xuXG54aU5FVC5Db250cm9sbGVyID0gZnVuY3Rpb24odGFyZ2V0RGl2KSB7Ly8gdGFyZ2V0RGl2IGNvdWxkIGJlIGRpdiBpdHNlbGYgb3IgaWQgb2YgZGl2XG5cdGlmICh0eXBlb2YgdGFyZ2V0RGl2ID09PSBcInN0cmluZ1wiKXtcblx0XHR0YXJnZXREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXREaXYpO1xuXHR9XG5cdFxuXHQvL3RoZXNlIGF0dHJpYnV0ZXMgYXJlIHVzZWQgYnkgY2hlY2tib3hlcyB0byBoaWRlIHNlbGYgbGlua3Mgb3IgYW1iaWd1b3VzIGxpbmtzXG5cdHRoaXMuaW50cmFIaWRkZW4gPSBmYWxzZTtcblx0dGhpcy5hbWJpZ0hpZGRlbiA9IGZhbHNlO1xuXHRcbiAgICB0aGlzLmZpZWxkcyA9IHt9OyAvL3VzZWQgYnkgdGV4dCBzZWFyY2hcbiAgICB0aGlzLmVtcHR5RWxlbWVudCh0YXJnZXREaXYpOyAvL2F2b2lkcyBwcm9iIHdpdGggJ3NhdmUgLSB3ZWIgcGFnZSBjb21wbGV0ZSdcbiAgICBcbiAgICAvL2NyZWF0ZSBTVkcgZWxlbW5lbnRcbiAgICB0aGlzLnN2Z0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoeGlORVQuc3ZnbnMsIFwic3ZnXCIpO1xuICAgIHRoaXMuc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ldHdvcmtTVkcnKTtcbiAgICB0YXJnZXREaXYuYXBwZW5kQ2hpbGQodGhpcy5zdmdFbGVtZW50KTtcbiAgICBcbiAgICAvL2FyZSB3ZSBwYW5uaW5nP1xuICAgIHRoaXMucGFubmluZyA9IGZhbHNlO1xuICAgIC8vIGlmIHdlIGFyZSBkcmFnZ2luZyBzb21ldGhpbmcgYXQgdGhlIG1vbWVudCAtIHRoaXMgd2lsbCBiZSB0aGUgZWxlbWVudCB0aGF0IGlzIGRyYWdlZFxuICAgIHRoaXMuZHJhZ0VsZW1lbnQgPSBudWxsO1xuICAgIC8vIGFyZSB3ZSBkcmFnZ2luZyBhdCB0aGUgbW9tZW50P1xuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAvLyBmcm9tIHdoZXJlIGRpZCB3ZSBzdGFydCBkcmFnZ2luZ1xuICAgIHRoaXMuZHJhZ1N0YXJ0ID0ge307XG4gICAgLy8gYXJlIHdlIHJvdGF0aW5nIGF0IHRoZSBtb21lbnRcbiAgICB0aGlzLnJvdGF0aW5nID0gZmFsc2U7XG5cbiAgICAvLyBkaXNhYmxlIHJpZ2h0IGNsaWNrIGNvbnRleHQgbWVudSAod2Ugd2lzaCB0byBwdXQgcmlnaHQgY2xpY2sgdG8gb3VyIG93biBwdXJwb3NlcylcbiAgICB0aGlzLnN2Z0VsZW1lbnQub25jb250ZXh0bWVudSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIC8vIGZpbGxlZCBiYWNrZ3JvdW5kIG5lZWRlZCwgZWxzZSBjYW5ub3QgY2xpY2svZHJhZyBiYWNrZ3JvdW5kXG4gICAgLy8gc2l6ZSBpcyB0aGF0IG9mIGxhcmdlIG1vbml0b3IsIHBvdGVudGlhbGx5IG5lZWRzIHRvIGJlIGJpZ2dlciBjb3ogYnJvd3NlciBjYW4gYmUgem9vbWVkXG4gICAgLy8gVE9ETzogZHluYW1pY2FsbHkgcmVzaXplIGJhY2tncm91bmQgdG8gbWF0Y2ggc2NyZWVuIGJvdW5kaW5nIGJveFxuICAgIHZhciBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhpTkVULnN2Z25zLCBcInJlY3RcIik7XG4gICAgYmFja2dyb3VuZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJhY2tncm91bmRfZmlsbFwiKTtcbiAgICBiYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZShcInhcIiwgMCk7XG4gICAgYmFja2dyb3VuZC5zZXRBdHRyaWJ1dGUoXCJ5XCIsIDApO1xuICAgIGJhY2tncm91bmQuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgMjU2MCAqIDIpO1xuICAgIGJhY2tncm91bmQuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIDIwNDggKiAyKTtcbiAgICBiYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZShcImZpbGwtb3BhY2l0eVwiLCBcIjFcIik7XG4gICAgYmFja2dyb3VuZC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwiI0ZGRkZGRlwiKTtcbiAgICB0aGlzLnN2Z0VsZW1lbnQuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZCk7XG5cbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh4aU5FVC5zdmducywgXCJnXCIpO1xuICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFpbmVyXCIpO1xuXG4gICAgdmFyIHVzZURlZnMgPSBmYWxzZTsvL3Nob3cgbWFnbmlmaWVyIHVzaW5nIHVzZSBhbmQgZGVmcyBlbGVtZW50cyAtIGV4cGVyaW1lbnRhbFxuICAgIC8vIHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0yNjU4OTVcbiAgICB2YXIgZGVmcztcbiAgICBpZiAodXNlRGVmcyA9PT0gdHJ1ZSkge1xuICAgICAgICAvL2ZvciBtYWduaWZpZXIuLi4gY2hyb21lIG9ubHlcbiAgICAgICAgZGVmcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh4aU5FVC5zdmducywgXCJkZWZzXCIpO1xuICAgICAgICBkZWZzLmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICB0aGlzLm5hcnlMaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh4aU5FVC5zdmducywgXCJnXCIpO1xuICAgIHRoaXMubmFyeUxpbmtzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmFyeUxpbmtzXCIpO1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubmFyeUxpbmtzKTtcblx0XG5cdHRoaXMucF9wTGlua3NXaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhpTkVULnN2Z25zLCBcImdcIik7XG4gICAgdGhpcy5wX3BMaW5rc1dpZGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwX3BMaW5rc1dpZGVcIik7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5wX3BMaW5rc1dpZGUpO1xuIFxuICAgIHRoaXMucHJvdGVpbkxvd2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhpTkVULnN2Z25zLCBcImdcIik7XG4gICAgdGhpcy5wcm90ZWluTG93ZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm90ZWluTG93ZXJcIik7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5wcm90ZWluTG93ZXIpO1xuXG4gICAgdGhpcy5oaWdobGlnaHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhpTkVULnN2Z25zLCBcImdcIik7XG4gICAgdGhpcy5oaWdobGlnaHRzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaGlnaGxpZ2h0c1wiKTsvL2ludGVyYWN0b3JzIGFsc28gY29udGFpbiBoaWdobGlnaHQgZ3JvdXBzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5oaWdobGlnaHRzKTtcblxuICAgIHRoaXMucmVzX3Jlc0xpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhpTkVULnN2Z25zLCBcImdcIik7XG4gICAgdGhpcy5yZXNfcmVzTGlua3Muc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyZXNfcmVzTGlua3NcIik7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yZXNfcmVzTGlua3MpO1xuXG4gICAgdGhpcy5wX3BMaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh4aU5FVC5zdmducywgXCJnXCIpO1xuICAgIHRoaXMucF9wTGlua3Muc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwX3BMaW5rc1wiKTtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnBfcExpbmtzKTtcblxuICAgIHRoaXMucHJvdGVpblVwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhpTkVULnN2Z25zLCBcImdcIik7XG4gICAgdGhpcy5wcm90ZWluVXBwZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm90ZWluVXBwZXJcIik7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5wcm90ZWluVXBwZXIpO1xuXG4gICAgaWYgKHVzZURlZnMgPT09IGZhbHNlKSB7Ly90aGlzIGlzIG5vcm1hbFxuICAgICAgICB0aGlzLnN2Z0VsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIpO1xuICAgIH1cbiAgICBlbHNlIHsvL2ZvciB1c2UvZGVmcyBtYWduaWZpZXIgLSB0ZXN0IGNvZGUgb25seVxuICAgICAgICB2YXIgdXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhpTkVULnN2Z25zLCBcInVzZVwiKTtcbiAgICAgICAgdXNlLnNldEF0dHJpYnV0ZU5TKHhpTkVULnhsaW5rTlMsIFwiaHJlZlwiLCBcIiNjb250YWluZXJcIik7XG4gICAgICAgIHRoaXMuc3ZnRWxlbWVudC5hcHBlbmRDaGlsZCh1c2UpO1xuXG4gICAgICAgIHZhciBjcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh4aU5FVC5zdmducywgXCJjbGlwUGF0aFwiKTtcbiAgICAgICAgY3Auc2V0QXR0cmlidXRlKCdpZCcsICdDUCcpO1xuICAgICAgICB2YXIgYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh4aU5FVC5zdmducywgXCJjaXJjbGVcIik7XG4gICAgICAgIGMuc2V0QXR0cmlidXRlKCdjeCcsICczNDEnKTtcbiAgICAgICAgYy5zZXRBdHRyaWJ1dGUoJ2N5JywgJzE5MicpO1xuICAgICAgICBjLnNldEF0dHJpYnV0ZSgncicsICc1MCcpO1xuICAgICAgICBjcC5hcHBlbmRDaGlsZChjKTtcbiAgICAgICAgdGhpcy5zdmdFbGVtZW50LmFwcGVuZENoaWxkKGNwKTtcblxuICAgICAgICB2YXIgbWFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhpTkVULnN2Z25zLCAnZycpO1xuICAgICAgICBtYWcuc2V0QXR0cmlidXRlKCdpZCcsICdjbGlwcGVkSScpO1xuICAgICAgICBtYWcuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKC0zNDEsIC0xOTIpIHNjYWxlKDIpJyk7XG4gICAgICAgIHZhciBtYWdVc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoeGlORVQuc3ZnbnMsIFwidXNlXCIpO1xuICAgICAgICBtYWdVc2Uuc2V0QXR0cmlidXRlTlMoeGlORVQueGxpbmtOUywgXCJocmVmXCIsIFwiI2NvbnRhaW5lclwiKTtcbiAgICAgICAgbWFnVXNlLnNldEF0dHJpYnV0ZShcImNsaXAtcGF0aFwiLCBcInVybCgjQ1ApXCIpO1xuICAgICAgICBtYWdVc2Uuc2V0QXR0cmlidXRlKCdvcGFjaXR5JywgJzEuMCcpO1xuICAgICAgICBtYWcuYXBwZW5kQ2hpbGQobWFnVXNlKTtcbiAgICAgICAgdmFyIG1hZ0ZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhpTkVULnN2Z25zLCBcImNpcmNsZVwiKTtcbiAgICAgICAgbWFnRnJhbWUuc2V0QXR0cmlidXRlKCdjeCcsICczNDEnKTtcbiAgICAgICAgbWFnRnJhbWUuc2V0QXR0cmlidXRlKCdjeScsICcxOTInKTtcbiAgICAgICAgbWFnRnJhbWUuc2V0QXR0cmlidXRlKCdyJywgJzUwJyk7XG4gICAgICAgIG1hZ0ZyYW1lLnNldEF0dHJpYnV0ZSgnZmlsbCcsICdub25lJyk7XG4gICAgICAgIG1hZ0ZyYW1lLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgJ2dyYXknKTtcbiAgICAgICAgbWFnRnJhbWUuc2V0QXR0cmlidXRlKCdzdHJva2Utd2l0aCcsICdncmF5Jyk7XG4gICAgICAgIG1hZy5hcHBlbmRDaGlsZChtYWdGcmFtZSk7XG5cbiAgICAgICAgdGhpcy5zdmdFbGVtZW50LmFwcGVuZENoaWxkKG1hZyk7XG4gICAgICAgIHRoaXMuc3ZnRWxlbWVudC5hcHBlbmRDaGlsZChkZWZzKTtcbiAgICB9XG4gICAgLy9zaG93aW5nIHRpdGxlIGFzIHRvb2x0aXBzIGlzIE5PVCBwYXJ0IG9mIHN2ZyBzcGVjIChldmVuIHRob3VnaCBzb21lIGJyb3dzZXJzIGRvIHRoaXMpXG4gICAgLy9hbHNvIG1vcmUgcmVwc29uc2l2ZSAvIG1vcmUgY29udHJvbCBpZiB3ZSBkbyBvdXQgb3duXG4gICAgdGhpcy50b29sdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhpTkVULnN2Z25zLCBcInRleHRcIik7XG4gIC8vICB0aGlzLnRvb2x0aXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0b29sdGlwJyk7XG4gIC8vICB0aGlzLnRvb2x0aXAuc2V0QXR0cmlidXRlKCdpZCcsICd0b29sdGlwJyk7XG4gICAgdGhpcy50b29sdGlwLnNldEF0dHJpYnV0ZSgneCcsIDApO1xuICAgIHRoaXMudG9vbHRpcC5zZXRBdHRyaWJ1dGUoJ3knLCAwKTtcbiAgICB2YXIgdG9vbHRpcFRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ3Rvb2x0aXAnKTtcbiAgICB0aGlzLnRvb2x0aXAuYXBwZW5kQ2hpbGQodG9vbHRpcFRleHROb2RlKTtcblxuICAgIHRoaXMudG9vbHRpcF9iZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh4aU5FVC5zdmducywgXCJyZWN0XCIpO1xuICAgIHRoaXMudG9vbHRpcF9iZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rvb2x0aXBfYmcnKTtcbiAgICB0aGlzLnRvb2x0aXBfYmcuc2V0QXR0cmlidXRlKCdpZCcsICd0b29sdGlwX2JnJyk7XG5cbiAgICB0aGlzLnRvb2x0aXBfYmcuc2V0QXR0cmlidXRlKCdmaWxsLW9wYWNpdHknLCAwLjc1KTtcbiAgICB0aGlzLnRvb2x0aXBfYmcuc2V0QXR0cmlidXRlKCdzdHJva2Utb3BhY2l0eScsIDEpO1xuICAgIHRoaXMudG9vbHRpcF9iZy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsIDEpO1xuXG4gICAgdGhpcy50b29sdGlwX3N1YkJnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhpTkVULnN2Z25zLCBcInJlY3RcIik7XG4gICAgdGhpcy50b29sdGlwX3N1YkJnLnNldEF0dHJpYnV0ZSgnZmlsbCcsICd3aGl0ZScpO1xuICAgIHRoaXMudG9vbHRpcF9zdWJCZy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICd3aGl0ZScpO1xuICAgIHRoaXMudG9vbHRpcF9zdWJCZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rvb2x0aXBfYmcnKTtcbiAgICB0aGlzLnRvb2x0aXBfc3ViQmcuc2V0QXR0cmlidXRlKCdpZCcsICd0b29sdGlwX2JnJyk7XG4gICAgdGhpcy50b29sdGlwX3N1YkJnLnNldEF0dHJpYnV0ZSgnb3BhY2l0eScsIDEpO1xuICAgIHRoaXMudG9vbHRpcF9zdWJCZy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsIDEpO1xuXG4gICAgdGhpcy5zdmdFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMudG9vbHRpcF9zdWJCZyk7XG4gICAgdGhpcy5zdmdFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMudG9vbHRpcF9iZyk7XG4gICAgdGhpcy5zdmdFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMudG9vbHRpcCk7XG5cbiAgICB0aGlzLmNsZWFyKCk7XG59O1xuXG54aU5FVC5Db250cm9sbGVyLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5pdENvbXBsZXRlID0gZmFsc2U7XG4gICAgdGhpcy5pbnRlcmFjdG9ycyA9IGQzLm1hcCgpO1xuICAgIHRoaXMubGlua3MgPSBkMy5tYXAoKTtcbiAgICB0aGlzLm1hdGNoZXMgPSBkMy5tYXAoKTtcbiAgICB0aGlzLnN1YmdyYXBocyA9IG5ldyBBcnJheSgpO1xuICAgIHRoaXMubGF5b3V0WE9mZnNldCA9IDA7XG5cbiAgICB0aGlzLnByb3RlaW5Db3VudCA9IDA7XG4gICAgdGhpcy5tYXhCbG9iUmFkaXVzID0gMDtcbiAgICBJbnRlcmFjdG9yLk1BWFNJWkUgPSAwO1xuXG4gICAgdGhpcy5sYXlvdXQgPSBudWxsO1xuICAgIHRoaXMueiA9IDE7XG4gICAgdGhpcy5zY29yZXMgPSBudWxsO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBkMy5tYXAoKTtcbiAgICB0aGlzLnNlbGVjdGVkTGlua3MgPSBkMy5tYXAoKTtcblxuXG4gICAgdGhpcy50b29sdGlwLnNldEF0dHJpYnV0ZSgndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgICB0aGlzLnRvb2x0aXBfYmcuc2V0QXR0cmlidXRlKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuXG4gICAgdGhpcy5yZXNldFpvb20oKTtcbiAgICB0aGlzLnN0YXRlID0geGlORVQuQ29udHJvbGxlci5NT1VTRV9VUDtcbiAgICAvLyAgICB2YXIgc3VzcGVuZElEID0gdGhpcy5zdmdFbGVtZW50LnN1c3BlbmRSZWRyYXcoNTAwMCk7XG4gICAgdGhpcy5lbXB0eUVsZW1lbnQodGhpcy5uYXJ5TGlua3MpO1xuICAgIHRoaXMuZW1wdHlFbGVtZW50KHRoaXMucF9wTGlua3NXaWRlKTtcbiAgICB0aGlzLmVtcHR5RWxlbWVudCh0aGlzLmhpZ2hsaWdodHMpO1xuICAgIHRoaXMuZW1wdHlFbGVtZW50KHRoaXMucF9wTGlua3MpO1xuICAgIHRoaXMuZW1wdHlFbGVtZW50KHRoaXMucmVzX3Jlc0xpbmtzKTtcbiAgICB0aGlzLmVtcHR5RWxlbWVudCh0aGlzLnByb3RlaW5Mb3dlcik7XG4gICAgdGhpcy5lbXB0eUVsZW1lbnQodGhpcy5wcm90ZWluVXBwZXIpO1xuLy8gICAgdGhpcy5zdmdFbGVtZW50LnVuc3VzcGVuZFJlZHJhdyhzdXNwZW5kSUQpO1xufTtcblxueGlORVQuQ29udHJvbGxlci5wcm90b3R5cGUuZW1wdHlFbGVtZW50ID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIHdoaWxlIChlbGVtZW50Lmxhc3RDaGlsZCkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQubGFzdENoaWxkKTtcbiAgICB9XG59O1xuXG54aU5FVC5Db250cm9sbGVyLnByb3RvdHlwZS5tZXNzYWdlID0gZnVuY3Rpb24odGV4dCwgcHJlZm9ybWF0dGVkKSB7XG4gICAgLy9+IGlmICh0eXBlb2YgdGhpcy5tZXNzYWdlRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy9+IGlmICh0eXBlb2YgdGV4dCA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgLy9+IHRleHQgPSBKU09OLnN0cmluZ2lmeSh0ZXh0LCBudWxsLCAnICcpO1xuICAgICAgICAgICAgLy9+IHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcXFx1MDAwMC9naSwgJycpO1xuICAgICAgICAgICAgLy9+IHByZWZvcm1hdHRlZCA9IHRydWU7XG4gICAgICAgIC8vfiB9XG4gICAgICAgIC8vfiBpZiAocHJlZm9ybWF0dGVkKVxuICAgICAgICAgICAgLy9+IHRleHQgPSBcIjxwcmU+XCIgKyB0ZXh0ICsgXCI8L3ByZT5cIjtcbiAgICAgICAgLy9+IHRoaXMubWVzc2FnZUVsZW1lbnQuaW5uZXJIVE1MID0gdGV4dDtcbiAgICAvL34gfVxufTtcblxueGlORVQuQ29udHJvbGxlci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAvL2luaXRpYWwgZGltZW5zaW9uc1xuICAgIHZhciBjb250YWluaW5nRGl2ID0gdGhpcy5zdmdFbGVtZW50LnBhcmVudE5vZGU7XG4gICAgaWYgKHR5cGVvZiBjb250YWluaW5nRGl2ICE9PSAndW5kZWZpbmVkJyAmJiBjb250YWluaW5nRGl2ICE9IG51bGwpIHtcbiAgICAgICAgd2lkdGggPSBjb250YWluaW5nRGl2LmNsaWVudFdpZHRoO1xuICAgICAgICBoZWlnaHQgPSBjb250YWluaW5nRGl2LmNsaWVudEhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aWR0aCA9IDgwMDtcbiAgICAgICAgaGVpZ2h0ID0gNDgwO1xuICAgIH1cbiAgICB0aGlzLnN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxMDAlXCIpO1xuICAgIHRoaXMuc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIxMDAlXCIpO1xuICAgIHRoaXMuc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6YmxvY2s7XCIpO1xuXG4gICAgdGhpcy5tYXhCbG9iUmFkaXVzID0gTWF0aC5zcXJ0KDIwMDAgLyBNYXRoLlBJKTsvLygoSW50ZXJhY3Rvci5NQVhTSVpFIDwgNTAwMCk/IEludGVyYWN0b3IuTUFYU0laRSA6IDUwMDApXG4gICAvLyBJbnRlcmFjdG9yLlVOSVRTX1BFUl9SRVNJRFVFID0gKCgod2lkdGggLSAzNTApICAqIDAuNSkgLSBJbnRlcmFjdG9yLkxBQkVMTUFYTEVOR1RIKSAvIEludGVyYWN0b3IuTUFYU0laRTsvL1RPRE86IGZpeCB0aGF0IC0zNTAgaGFja1xuICAgIFxuICAgIHRoaXMuaW5pdENvbXBsZXRlID0gdHJ1ZTtcblxuICAgIGlmICh0eXBlb2YgdGhpcy5sYXlvdXQgIT09ICd1bmRlZmluZWQnICYmIHRoaXMubGF5b3V0ICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5sb2FkTGF5b3V0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy9tYWtlIGluaXRhbCBmb3JtIHN0aWNrcyBvciBibG9ic1xuICAgICAgICB2YXIgaW50ZXJhY3RvcnMgPSB0aGlzLmludGVyYWN0b3JzLnZhbHVlcygpO1xuICAgICAgICB2YXIgcHJvdGVpbkNvdW50ID0gaW50ZXJhY3RvcnMubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBwID0gMDsgcCA8IHByb3RlaW5Db3VudDsgcCsrKSB7IC8vdGVtcFxuXHRcdFx0dmFyIHByb3QgPSBpbnRlcmFjdG9yc1twXTtcbiAgICAgICAgICAgIHByb3Quc2V0UG9zaXRpb24oMCwgMCk7XG5cdFx0fVxuICAgICAgICBmb3IgKHZhciBwID0gMDsgcCA8IHByb3RlaW5Db3VudDsgcCsrKSB7XG4gICAgICAgICAgICB2YXIgcHJvdCA9IGludGVyYWN0b3JzW3BdO1xuICAgICAgICAgICAvLyBwcm90LmluaXRTdGljaygpOy8vbmVlZGVkLCB0b2RvIC0gcmVtb3ZlXG4gICAgICAgICAgICBpZiAodGhpcy5pbnRlcmFjdG9ycy5rZXlzKCkubGVuZ3RoIDwgMykge1xuICAgICAgICAgICAgICAgaWYgKHByb3QudG9TdGljaykgcHJvdC50b1N0aWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgIGlmIChwcm90LnRvQmxvYikgcHJvdC50b0Jsb2IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvdGVpbkxvd2VyLmFwcGVuZENoaWxkKHByb3QubG93ZXJHcm91cCk7XG4gICAgICAgICAgICB0aGlzLnByb3RlaW5VcHBlci5hcHBlbmRDaGlsZChwcm90LnVwcGVyR3JvdXApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXV0b0xheW91dCh3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG4vLyAgICB0aGlzLm1lc3NhZ2UoJyNpbnRlcmFjdG9yczogJyArIHRoaXMuaW50ZXJhY3RvcnMudmFsdWVzKCkubGVuZ3RoICtcbi8vICAgICAgICAgICAgJ1xcbiMgbGlua3M6ICcgKyB0aGlzLmxpbmtzLnZhbHVlcygpLmxlbmd0aCk7XG5cbiAgICB0aGlzLmluaXRNb3VzZUV2ZW50cygpO1xuICAgIGlmICh0eXBlb2YgdGhpcy5pbml0VG91Y2hFdmVudHMgPT09ICdmdW5jdGlvbicpe1xuXHRcdHRoaXMuaW5pdFRvdWNoRXZlbnRzKCk7XG5cdH1cbn1cblxueGlORVQuQ29udHJvbGxlci5wcm90b3R5cGUucGFya0FsbCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBwcm90cyA9IHRoaXMucHJvdGVpbnMudmFsdWVzKCk7XG4gICAgdmFyIHByb3RDb3VudCA9IHByb3RzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBwID0gMDsgcCA8IHByb3RDb3VudDsgcCsrKSB7XG4gICAgICAgIHZhciBwcm90ZWluID0gcHJvdHNbcF07XG4gICAgICAgIGlmIChwcm90ZWluLmlzUGFya2VkID09PSBmYWxzZSlcbiAgICAgICAgICAgIHByb3RlaW4udG9nZ2xlUGFya2VkKCk7XG4gICAgfVxufTtcblxueGlORVQuQ29udHJvbGxlci5wcm90b3R5cGUucmVzZXRab29tID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgdmFyIGNvbkJCb3ggPSB0aGlzLmNvbnRhaW5lci5nZXRCQm94KCk7XG4gICAgLy8gICAgdmFyIHcgPSB0aGlzLnN2Z0VsZW1lbnQucGFyZW50Tm9kZS5jbGllbnRXaWR0aDsvL2dldEF0dHJpYnV0ZShcInZpZXdCb3hcIik7XG4gICAgLy8gICAgdmFyIGggPSB0aGlzLnN2Z0VsZW1lbnQucGFyZW50Tm9kZS5jbGllbnRIZWlnaHQ7Ly9nZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiKTtcbiAgICAvLyAgICBhbGVydCh2YiArIFwiIFwiICArIHcgKyBcIiBcIiAgKyBoICsgXCIgXCIgKyBcIlwiKTtcbiAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgXCJzY2FsZSgxKVwiKTtcbiAgICB0aGlzLnNjYWxlKCk7XG4gICAgdmFyIGludGVyYWN0b3JzID0gdGhpcy5pbnRlcmFjdG9ycy52YWx1ZXMoKTtcbiAgICB2YXIgcHJvdGVpbkNvdW50ID0gaW50ZXJhY3RvcnMubGVuZ3RoO1xuICAgIGZvciAodmFyIHAgPSAwOyBwIDwgcHJvdGVpbkNvdW50OyBwKyspIHtcbiAgICAgICAgdmFyIHByb3QgPSBpbnRlcmFjdG9yc1twXTtcbiAgICAgICAgcHJvdC5zdGlja1pvb20gPSAxO1xuICAgICAgICBwcm90LnNjYWxlKCk7XG4gICAgfVxufTtcblxueGlORVQuQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0TGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG15SlNPTlRleHQgPSBKU09OLnN0cmluZ2lmeSh0aGlzLCBudWxsLCAnXFx0Jyk7XG4gICAgdmFyIHZpZXdwb3J0SlNPTiA9IFwiXCI7Ly9Qcm90TmV0LnN2Z0VsZW1lbnQuZ2V0QXR0cmlidXRlKFwidmlld0JveFwiKTtcbiAgICB2YXIgbGF5b3V0ID0gbXlKU09OVGV4dC5yZXBsYWNlKC9cXFxcdTAwMDAvZ2ksICcnKTtcbiAgICAvLysgXCJcXG57Y286XCIgKyB0aGlzLmN1dE9mZiArXCJ9XCI7XG4gICAgcmV0dXJuIGxheW91dDtcbn07XG5cbnhpTkVULkNvbnRyb2xsZXIucHJvdG90eXBlLnNldExheW91dCA9IGZ1bmN0aW9uKGxheW91dEpTT04pIHtcbiAgICB0aGlzLmxheW91dCA9IHR5cGVvZiBsYXlvdXRKU09OICE9PSAnb2JqZWN0JyA/IEpTT04ucGFyc2UoZGVjb2RlVVJJQ29tcG9uZW50KGxheW91dEpTT04pKSA6IGxheW91dEpTT047XG59O1xuXG54aU5FVC5Db250cm9sbGVyLnByb3RvdHlwZS5sb2FkTGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN1c3BlbmRJRCA9IHRoaXMuc3ZnRWxlbWVudC5zdXNwZW5kUmVkcmF3KDUwMDApO1xuICAgIGZvciAodmFyIHByb3QgaW4gdGhpcy5sYXlvdXQuaW50ZXJhY3RvcnMpIHtcbiAgICAgICAgdmFyIHByb3RTdGF0ZSA9IHRoaXMubGF5b3V0LmludGVyYWN0b3JzW3Byb3RdO1xuICAgICAgICB2YXIgcHJvdGVpbiA9IHRoaXMuaW50ZXJhY3RvcnMuZ2V0KHByb3QpO1xuICAgICAgICBpZiAocHJvdGVpbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwcm90ZWluLnNldFBvc2l0aW9uKHByb3RTdGF0ZVtcInhcIl0sIHByb3RTdGF0ZVtcInlcIl0pO1xuICAgICAgICAgICAgLy8gcHJvdGVpbi50b1N0aWNrKCk7XG4gICAgICAgICAgICAvL34gaWYgKHR5cGVvZiBwcm90U3RhdGUuYW5ub3QgIT09ICd1bmRlZmluZWQnICYmIHByb3RTdGF0ZS5hbm5vdCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy9+IGlmIChwcm90U3RhdGUuYW5ub3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAvL34gcHJvdGVpbi5jdXN0b21Bbm5vdGF0aW9ucyA9IHByb3RTdGF0ZS5hbm5vdDtcbiAgICAgICAgICAgICAgICAgICAgLy9+IHByb3RlaW4uc2V0UG9zaXRpb25hbEZlYXR1cmVzKHByb3RlaW4uY3VzdG9tQW5ub3RhdGlvbnMpO1xuICAgICAgICAgICAgICAgIC8vfiB9XG4gICAgICAgICAgICAvL34gfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL34gaWYgKHByb3RTdGF0ZVtcImZvcm1cIl0gPT09IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHByb3RTdGF0ZVtcInN0aWNrWm9vbVwiXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvdGVpbi5zdGlja1pvb20gPSBwcm90U3RhdGVbXCJzdGlja1pvb21cIl07XG4gICAgICAgICAgICAgICAgICAgIC8vfiBwcm90ZWluLnNjYWxlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vfiBwcm90ZWluLnNldFJvdGF0aW9uKHByb3RlaW4ucm90YXRpb24pO1xuICAgICAgICAgICAgLy9+IH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm90U3RhdGVbJ3JvdCddICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHByb3RlaW4ucm90YXRpb24gPSBwcm90U3RhdGVbXCJyb3RcIl07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgcHJvdFN0YXRlW1wiZm9ybVwiXSAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvdFN0YXRlW1wiZm9ybVwiXSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHByb3RlaW4udG9TdGljaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvdGVpbi50b0Jsb2IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuXHRcdFx0cHJvdGVpbi5zZXRBbGxMaW5lQ29vcmRpbmF0ZXMoKTsvLyB3YXRjaCBvdXQgZm9yIHRoaXNcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm90U3RhdGVbXCJwYXJrZWRcIl0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcHJvdGVpbi5zZXRQYXJrZWQocHJvdFN0YXRlW1wicGFya2VkXCJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm90U3RhdGVbXCJmbGlwcGVkXCJdKSB7IC8vVE9ETzogZml4IHRoaXNcbiAgICAgICAgICAgICAgICBwcm90ZWluLnRvZ2dsZUZsaXBwZWQoKTsgLy8gY2hhbmdlIHRvIHNldEZsaXBwZWQocHJvdFN0YXRlW1wiZmxpcHBlZFwiXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vfiBpZiAocHJvdFN0YXRlW1wicHJvY2Vzc2VkREFTXCJdKSB7XG4gICAgICAgICAgICAgICAgLy9+IHByb3RlaW4ucHJvY2Vzc2VkREFTID0gZDMubWFwKHByb3RTdGF0ZVtcInByb2Nlc3NlZERBU1wiXSk7XG4gICAgICAgICAgICAvL34gfVxuICAgICAgICAgICAgdGhpcy5wcm90ZWluTG93ZXIuYXBwZW5kQ2hpbGQocHJvdGVpbi5sb3dlckdyb3VwKTtcbiAgICAgICAgICAgIHRoaXMucHJvdGVpblVwcGVyLmFwcGVuZENoaWxkKHByb3RlaW4udXBwZXJHcm91cCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpbmNhc2UgaW50ZXJhY3RvcnMgaGF2ZSBiZWVuIGFkZGVkIHdoaWNoIGFyZSBub3QgaW5jbHVkZWQgaW4gbGF5b3V0IC1cbiAgICB2YXIgaW50ZXJhY3RvcnMgPSB0aGlzLmludGVyYWN0b3JzLnZhbHVlcygpO1xuICAgIHZhciBwcm90ZWluQ291bnQgPSBpbnRlcmFjdG9ycy5sZW5ndGg7XG4gICAgZm9yICh2YXIgcCA9IDA7IHAgPCBwcm90ZWluQ291bnQ7IHArKykge1xuICAgICAgICBwcm90ID0gaW50ZXJhY3RvcnNbcF07XG4gICAgICAgIGlmIChwcm90LnggPT0gbnVsbCkge1xuICAgICAgICAgICAgLy9wcm90LmluaXRTdGljaygpO1xuICAgICAgICAgICAgcHJvdC50b0Jsb2IoKTtcbiAgICAgICAgICAgIHByb3Quc2V0UG9zaXRpb24oMjAsIDIwKTtcbiAgICAgICAgICAgIHRoaXMucHJvdGVpbkxvd2VyLmFwcGVuZENoaWxkKHByb3QubG93ZXJHcm91cCk7XG4gICAgICAgICAgICB0aGlzLnByb3RlaW5VcHBlci5hcHBlbmRDaGlsZChwcm90LnVwcGVyR3JvdXApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbGF5b3V0IGluZm8gZm9yIGxpbmtzIChoaWRkZW4gLyBzcGVjaWZpZWQgY29sb3VyKVxuICAgIGZvciAodmFyIGwgaW4gdGhpcy5sYXlvdXQubGlua3MpIHtcbiAgICAgICAgdmFyIGxpbmtTdGF0ZSA9IHRoaXMubGF5b3V0LmxpbmtzW2xdO1xuICAgICAgICB2YXIgbGluayA9IHRoaXMubGlua3MuZ2V0KGwpO1xuICAgICAgICBpZiAobGluayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGxpbmtTdGF0ZS5oaWRkZW4gIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgIGxpbmsuaGlkZGVuID0gbGlua1N0YXRlLmhpZGRlbjtcbiAgICAgICAgICAgIHZhciBjID0gbGlua1N0YXRlLmNvbG91cjtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzTGlua3MgPSBsaW5rLnNlcXVlbmNlTGlua3MudmFsdWVzKCk7XG4gICAgICAgICAgICAgICAgdmFyIHJlc0xpbmtDb3VudCA9IHJlc0xpbmtzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IHJlc0xpbmtDb3VudDsgcisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNMaW5rID0gcmVzTGlua3Nbcl07XG4gICAgICAgICAgICAgICAgICAgIHJlc0xpbmsuaW5pdFNWRygpO1xuICAgICAgICAgICAgICAgICAgICByZXNMaW5rLmxpbmUuc2V0QXR0cmlidXRlKCdzdHJva2UnLCAncmdiKCcgKyBjLnIgKyAnLCcgKyBjLmcgKyAnLCcgKyBjLmIgKyAnKScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnN2Z0VsZW1lbnQudW5zdXNwZW5kUmVkcmF3KHN1c3BlbmRJRCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHhpTkVULkNvbnRyb2xsZXI7XG4iXX0=
(1)
});
