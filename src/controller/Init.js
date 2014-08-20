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

var RGBColor = require('../../vendor/rgbcolor');
var d3 = require('../../node_modules/d3/');
var Interactor = require('../model/interactor/Interactor');
var Refresh = require('./Refresh');
var ReadMIJSON = require('./ReadMIJSON');
var Link = require('../model/link/Link');
var Layout = require('./Layout');
var Config = require('./Config');
// var MouseEvents = require('./MouseEvents');

var xiNET = {}; //create xiNET's javascript namespace

// Config.svgns = "http://www.w3.org/2000/svg";// namespace for svg elements
// Config.xlinkNS = "http://www.w3.org/1999/xlink";// namespace for xlink, for use/defs elements

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
    this.svgElement = document.createElementNS(Config.svgns, "svg");
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
    var background = document.createElementNS(Config.svgns, "rect");
    background.setAttribute("id", "background_fill");
    background.setAttribute("x", 0);
    background.setAttribute("y", 0);
    background.setAttribute("width", 2560 * 2);
    background.setAttribute("height", 2048 * 2);
    background.setAttribute("fill-opacity", "1");
    background.setAttribute("fill", "#FFFFFF");
    this.svgElement.appendChild(background);

    this.container = document.createElementNS(Config.svgns, "g");
    this.container.setAttribute("id", "container");

    var useDefs = false;//show magnifier using use and defs elements - experimental
    // see https://bugzilla.mozilla.org/show_bug.cgi?id=265895
    var defs;
    if (useDefs === true) {
        //for magnifier... chrome only
        defs = document.createElementNS(Config.svgns, "defs");
        defs.appendChild(this.container);
    }

    this.naryLinks = document.createElementNS(Config.svgns, "g");
    this.naryLinks.setAttribute("id", "naryLinks");
    this.container.appendChild(this.naryLinks);
	
	this.p_pLinksWide = document.createElementNS(Config.svgns, "g");
    this.p_pLinksWide.setAttribute("id", "p_pLinksWide");
    this.container.appendChild(this.p_pLinksWide);
 
    this.proteinLower = document.createElementNS(Config.svgns, "g");
    this.proteinLower.setAttribute("id", "proteinLower");
    this.container.appendChild(this.proteinLower);

    this.highlights = document.createElementNS(Config.svgns, "g");
    this.highlights.setAttribute("class", "highlights");//interactors also contain highlight groups
    this.container.appendChild(this.highlights);

    this.res_resLinks = document.createElementNS(Config.svgns, "g");
    this.res_resLinks.setAttribute("id", "res_resLinks");
    this.container.appendChild(this.res_resLinks);

    this.p_pLinks = document.createElementNS(Config.svgns, "g");
    this.p_pLinks.setAttribute("id", "p_pLinks");
    this.container.appendChild(this.p_pLinks);

    this.proteinUpper = document.createElementNS(Config.svgns, "g");
    this.proteinUpper.setAttribute("id", "proteinUpper");
    this.container.appendChild(this.proteinUpper);



    if (useDefs === false) {//this is normal
        this.svgElement.appendChild(this.container);
    }
    else {//for use/defs magnifier - test code only
        var use = document.createElementNS(Config.svgns, "use");
        use.setAttributeNS(Config.xlinkNS, "href", "#container");
        this.svgElement.appendChild(use);

        var cp = document.createElementNS(Config.svgns, "clipPath");
        cp.setAttribute('id', 'CP');
        var c = document.createElementNS(Config.svgns, "circle");
        c.setAttribute('cx', '341');
        c.setAttribute('cy', '192');
        c.setAttribute('r', '50');
        cp.appendChild(c);
        this.svgElement.appendChild(cp);

        var mag = document.createElementNS(Config.svgns, 'g');
        mag.setAttribute('id', 'clippedI');
        mag.setAttribute('transform', 'translate(-341, -192) scale(2)');
        var magUse = document.createElementNS(Config.svgns, "use");
        magUse.setAttributeNS(Config.xlinkNS, "href", "#container");
        magUse.setAttribute("clip-path", "url(#CP)");
        magUse.setAttribute('opacity', '1.0');
        mag.appendChild(magUse);
        var magFrame = document.createElementNS(Config.svgns, "circle");
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
    this.tooltip = document.createElementNS(Config.svgns, "text");
  //  this.tooltip.setAttribute('class', 'tooltip');
  //  this.tooltip.setAttribute('id', 'tooltip');
    this.tooltip.setAttribute('x', 0);
    this.tooltip.setAttribute('y', 0);
    var tooltipTextNode = document.createTextNode('tooltip');
    this.tooltip.appendChild(tooltipTextNode);

    this.tooltip_bg = document.createElementNS(Config.svgns, "rect");
    this.tooltip_bg.setAttribute('class', 'tooltip_bg');
    this.tooltip_bg.setAttribute('id', 'tooltip_bg');

    this.tooltip_bg.setAttribute('fill-opacity', 0.75);
    this.tooltip_bg.setAttribute('stroke-opacity', 1);
    this.tooltip_bg.setAttribute('stroke-width', 1);

    this.tooltip_subBg = document.createElementNS(Config.svgns, "rect");
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

// Link to prototype functions that exist in other files.
// Eventually the files will accept this controller as an argument

// From Refresh.js
xiNET.Controller.prototype.checkLinks = Refresh.checkLinks;
xiNET.Controller.prototype.scale = Refresh.scale;

// From ReadMYJSON
// xiNET.Controller.prototype.readMIJSON = function(value) {ReadMIJSON.readMIJSON(value, this);}
xiNET.Controller.prototype.readMIJSON = ReadMIJSON.readMIJSON;

xiNET.Controller.prototype.addFeatures = ReadMIJSON.addFeatures;
xiNET.Controller.prototype.addInteraction = ReadMIJSON.addInteraction;
xiNET.Controller.prototype.toJSON = ReadMIJSON.toJSON;

// From Layout.js
xiNET.Controller.prototype.autoLayout = Layout;

// From MouseEvents
//static var's signifying Controller's status
xiNET.Controller.MOUSE_UP = 0;//start state, also set when mouse up on svgElement
xiNET.Controller.PANNING = 1;//set by mouse down on svgElement - left button, no shift or ctrl
xiNET.Controller.DRAGGING = 2;//set by mouse down on Protein or Link
xiNET.Controller.ROTATING = 3;//set by mouse down on Rotator, drag?
xiNET.Controller.SELECTING = 4;//set by mouse down on svgElement- right button or left button shift or ctrl, drag

/**
 * Sets the current transform matrix of an element. JOSH TODO
 */
xiNET.setCTM = function(element, matrix) {
    var s = "matrix(" + matrix.a + "," + matrix.b + "," + matrix.c + "," + matrix.d + "," + matrix.e + "," + matrix.f + ")";
    element.setAttribute("transform", s);
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

    // this.initMouseEvents();
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

