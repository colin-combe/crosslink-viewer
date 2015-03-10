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

var xiNET = {}; //crosslinkviewer's javascript namespace
var d3 = require('../../node_modules/d3/');// josh - should these be dependencies on files in vendor folder?
var xiNET_Storage = require('./xiNET_Storage');
var Interactor = require('../model/interactor/Interactor');
var Polymer = require('../model/interactor/Polymer');
var Refresh = require('./Refresh');
var ReadMIJSON = require('./ReadMIJSON');
var Link = require('../model/link/Link');
var Layout = require('./Layout');
var Config = require('./Config');
var MouseEvents = require('./MouseEvents');
var ToolTips = require('./ToolTips');
var TouchEvents = require('./TouchEvents');

xiNET.Controller = function(targetDiv) {
	// targetDiv could be div itself or id of div - lets deal with that
	if (typeof targetDiv === "string"){
		targetDiv = document.getElementById(targetDiv);
	}
	this.emptyElement(targetDiv); //avoids prob with 'save - web page complete'
    //create SVG elemnent
    this.svgElement = document.createElementNS(Config.svgns, "svg");
    this.svgElement.setAttribute('id', 'networkSVG');
    this.svgElement.setAttribute("width", "100%");
    this.svgElement.setAttribute("height", "100%");
    this.svgElement.setAttribute("style", "display:block;");
    // disable right click context menu (we may wish to put right click to our own purposes)
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
	
	// various groups needed
    this.container = document.createElementNS(Config.svgns, "g");
    this.container.setAttribute("id", "container");

    this.naryLinks = document.createElementNS(Config.svgns, "g");
    this.naryLinks.setAttribute("id", "naryLinks");
    this.container.appendChild(this.naryLinks);
	
	this.p_pLinksWide = document.createElementNS(Config.svgns, "g");
    this.p_pLinksWide.setAttribute("id", "p_pLinksWide");
    this.container.appendChild(this.p_pLinksWide);
 
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

	this.svgElement.appendChild(this.container);
    
    //showing title as tooltips is NOT part of svg spec (even though some browsers do this)
    //also more repsonsive / more control if we do out own
    this.tooltip = document.createElementNS(Config.svgns, "text");
    this.tooltip.setAttribute('x', 0);
    this.tooltip.setAttribute('y', 0);
    var tooltipTextNode = document.createTextNode('tooltip');
    this.tooltip.appendChild(tooltipTextNode);

    this.tooltip_bg = document.createElementNS(Config.svgns, "rect");
    this.tooltip_bg.setAttribute('class', 'tooltip_bg');
    //~ this.tooltip_bg.setAttribute('id', 'tooltip_bg');

    this.tooltip_bg.setAttribute('fill-opacity', 0.75);
    this.tooltip_bg.setAttribute('stroke-opacity', 1);
    this.tooltip_bg.setAttribute('stroke-width', 1);

    this.tooltip_subBg = document.createElementNS(Config.svgns, "rect");
    this.tooltip_subBg.setAttribute('fill', 'white');
    this.tooltip_subBg.setAttribute('stroke', 'white');
    this.tooltip_subBg.setAttribute('class', 'tooltip_bg');
    //~ this.tooltip_subBg.setAttribute('id', 'tooltip_bg');
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
    this.sequenceInitComplete = false;
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
    this.emptyElement(this.proteinUpper);
	this.svgElement.unsuspendRedraw(suspendID);
      
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
 
 	this.molecules = d3.map();
    this.allNaryLinks = d3.map();
    this.allBinaryLinks = d3.map();
    this.allUnaryLinks = d3.map();
    this.allSequenceLinks = d3.map();
    
    this.proteinCount = 0;
    this.maxBlobRadius = 30;
    Interactor.MAXSIZE = 100;

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

xiNET.Controller.prototype.setAnnotations = function(annotationType) {
	if (this.sequenceInitComplete) { //dont want to be changing annotations while still waiting on sequence
		var mols = this.molecules.values(); 
		var molCount = mols.length;
		var self = this;
		for (var m = 0; m < molCount; m++) {
			var mol = mols[m];
			if (annotationType.toUpperCase() === "MI FEATURES") {
				mol.setPositionalFeatures(mol.miFeatures);
			}
			else if (annotationType.toUpperCase() === "SUPERFAM" || annotationType.toUpperCase() === "SUPERFAMILY"){
				if (mol.id.indexOf('uniprotkb_') === 0) {
					xiNET_Storage.getSuperFamFeatures(mol.id, function (id, fts){
						var m = self.molecules.get(id);
						m.setPositionalFeatures(fts);
					});
				}
			}  
			else if (annotationType.toUpperCase() === "UNIPROT" || annotationType.toUpperCase() === "UNIPROTKB") {
				if (mol.id.indexOf('uniprotkb_') === 0) {
					xiNET_Storage.getUniProtFeatures(mol.id, function (id, fts){
						var m = self.molecules.get(id);
						m.setPositionalFeatures(fts);
					});
				}
			}
			else {
				mol.setPositionalFeatures([])
			}
		}
		return true;
	}
	else return false;
}

//this can be done before all proteins have their sequences
xiNET.Controller.prototype.initLayout = function() {
	var mols = this.molecules.values();
	var molCount = mols.length;
	for (var m = 0; m < molCount; m++) {
		var mol = mols[m];
		this.proteinUpper.appendChild(mol.upperGroup);
	}
	this.autoLayout();
}

//requires all polymers have had sequence set
xiNET.Controller.prototype.initPolymers = function() {//currently only does Proteins
	var mols = this.molecules.values();
	var molCount = mols.length;
	Polymer.MAXSIZE = 0;
	for (var m = 0; m < molCount; m++){
		var molSize = mols[m].size;
		if (molSize > Polymer.MAXSIZE){
			Polymer.MAXSIZE = molSize;
		}
	}
	//this.maxBlobRadius = Math.sqrt(Polymer.MAXSIZE / Math.PI);
	var width = this.svgElement.parentNode.clientWidth;
	Polymer.UNITS_PER_RESIDUE = (((width / 2)) - Interactor.LABELMAXLENGTH) / Polymer.MAXSIZE;
	for (var i = 0; i < molCount; i++){
		var mol = mols[i];
		if (mol.json.type.name == "protein") {
			mol.init();
		}
	}
	this.sequenceInitComplete = true;
	this.setAnnotations('MI FEATURES');
}

xiNET.Controller.prototype.resetZoom = function() {
    this.container.setAttribute("transform", "scale(1)");
    this.scale();
    var interactors = this.molecules.values();
    var proteinCount = interactors.length;
    for (var p = 0; p < proteinCount; p++) {
        var prot = interactors[p];
        prot.stickZoom = 1;
        if (prot.scale) {
			prot.scale();
			prot.setAllLinkCoordinates();
		}
    }
};

xiNET.Controller.prototype.setCutOff = function(cutOff) {
    this.cutOff = cutOff;
    this.checkLinks();
};

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

