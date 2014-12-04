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

var d3 = require('../../node_modules/d3/');// josh - should these be dependencies on files in vendor folder?
var Interactor = require('../model/interactor/Interactor');
var Refresh = require('./Refresh');
var ReadMIJSON = require('./ReadMIJSON');
var Link = require('../model/link/Link');
var Layout = require('./Layout');
var Config = require('./Config');
var MouseEvents = require('./MouseEvents');
var ToolTips = require('./ToolTips');
var TouchEvents = require('./TouchEvents');

var xiNET = {}; //create xiNET's javascript namespace

//~ xiNET.linkWidth = 1.3;// default line width

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

//josh - what can we do about the following, I think its a bit confusing / hard to maintain
// would one big file be better?

// Link to prototype functions that exist in other files.
// Eventually the files will accept this controller as an argument

// Copy functions from Refresh.js to our prototype:
xiNET.Controller.prototype.checkLinks = Refresh.checkLinks;
xiNET.Controller.prototype.scale = Refresh.scale;

// Copy functions from ReadMIJSON.js to our prototype:
xiNET.Controller.prototype.readMIJSON = ReadMIJSON.readMIJSON;

xiNET.Controller.prototype.addFeatures = ReadMIJSON.addFeatures;
xiNET.Controller.prototype.addInteraction = ReadMIJSON.addInteraction;

// Copy functions from Layout.js to our prototype:
xiNET.Controller.prototype.autoLayout = Layout;

// Copy functions from ToolTips.js to our prototype:
xiNET.Controller.prototype.showTooltip = ToolTips.showTooltip
xiNET.Controller.prototype.setTooltip = ToolTips.setTooltip
xiNET.Controller.prototype.hideTooltip = ToolTips.hideTooltip

// Copy functions from TouchEvents.js to our prototype:
for (var property in TouchEvents) {
    if (TouchEvents.hasOwnProperty(property)) {
        xiNET.Controller.prototype[property] = TouchEvents[property];
    }
}

// Copy functions from MouseEvents.js to our prototype:
for (var property in MouseEvents) {
    if (MouseEvents.hasOwnProperty(property)) {
        xiNET.Controller.prototype[property] = MouseEvents[property];
    }
}

/**
 * Sets the current transform matrix of an element. JOSH TODO
 */
xiNET.setCTM = function(element, matrix) {
    var s = "matrix(" + matrix.a + "," + matrix.b + "," + matrix.c + "," + matrix.d + "," + matrix.e + "," + matrix.f + ")";
    element.setAttribute("transform", s);
};


xiNET.Controller.prototype.clear = function() {
    this.initComplete = false;
 	if (this.force) {
		this.force.stop();
	}
 	this.force = null;
    var suspendID = this.svgElement.suspendRedraw(5000);
    this.emptyElement(this.naryLinks);
    this.emptyElement(this.p_pLinksWide);
    this.emptyElement(this.highlights);
    this.emptyElement(this.p_pLinks);
    this.emptyElement(this.res_resLinks);
    this.emptyElement(this.proteinLower);
    this.emptyElement(this.proteinUpper);
	this.svgElement.unsuspendRedraw(suspendID);
    
    this.interactors = d3.map();
    
    this.allNaryLinks = d3.map();
    this.allBinaryLinks = d3.map();
    this.allUnaryLinks = d3.map();
    this.allSequenceLinks = d3.map();
    
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
};

xiNET.Controller.prototype.emptyElement = function(element) {
    while (element.lastChild) {
        element.removeChild(element.lastChild);
    }
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
            if (this.interactors.keys().length < 3) {
               if (prot.toStick) prot.toStick();
            }
            else {
               if (prot.toBlob) prot.toBlob();
            }
            if (prot.lowerGroup){
            this.proteinLower.appendChild(prot.lowerGroup);
            this.proteinUpper.appendChild(prot.upperGroup);
			}
        }
        this.autoLayout(width, height);
    }
    this.initMouseEvents();
    if (typeof this.initTouchEvents === 'function'){
	 	this.initTouchEvents();
	}
}

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
        if (prot.scale) {
			prot.scale();
		}
    }
};

xiNET.Controller.prototype.setCutOff = function(cutOff) {
    this.cutOff = cutOff;
    this.checkLinks();
};

//~ xiNET.Controller.prototype.hideInternal = function(bool) {
    //~ this.intraHidden = bool;
    //~ this.checkLinks();
//~ };
//~ 
//~ xiNET.Controller.prototype.hideAmbig = function(bool) {
    //~ this.ambigHidden = bool;
    //~ this.checkLinks();
//~ };

xiNET.Controller.prototype.exportSVG = function() {
	var svgXml = this.svgElement.parentNode.innerHTML.replace(/<g class="PV_rotator".*?<\/g><\/g>/gi, "")
    //    .replace(/<g class="highlights".*?<g id="p_pLinks"/gi,"<g id=\"p_pLinks\"")
    //    .replace(/<g class="highlights".*?<g class="intraLinks"/gi,"<g class=\"intraLinks\"")
    //    .replace(/xmlns:svg=/gi,"xmlns=")
    //    .replace(/svg:/gi,"")
    .replace(/<rect .*?\/rect>/i, "");//takes out background fill
    
    //~ var blob = new Blob([svgXml], {type: "data:image/svg;charset=utf-8"});
	//~ saveAs(blob, "xiNET_output.svg");
	
	var xml = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n"
    + "<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">"
    + svgXml;
	
	var xmlAsUrl;
    //xmlAsUrl = 'data:xml;filename=ProteinViewExport.xml,'
    xmlAsUrl = 'data:image/svg;filename=ProteinViewExport.svg,';
    xmlAsUrl += encodeURIComponent(xml);
    var win = window.open(xmlAsUrl, 'ProteinViewExport.svg');
};

module.exports = xiNET.Controller;

