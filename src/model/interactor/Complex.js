//    	xiNET Interaction Viewer
//    	Copyright 2014 Rappsilber Laboratory
//
//    	This product includes software developed at
//    	the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//		
//		Complex.js		
//
//		authors: Colin Combe

"use strict";

var Interactor = require('./Interactor');
var Config = require('../../controller/Config');

Complex.prototype = new Interactor();

function Complex(id, xlvController) {
    this.id = id; 
    this.ctrl = xlvController;
    //links
    this.naryLinks = d3.map();
    this.binaryLinks = d3.map();
    this.selfLink = null;
    this.sequenceLinks = d3.map();
    this.form = 0;
}

Complex.prototype.toJSON = function() {
    return {
        //~ interactor: this.json
		id: this.id
    };
};

Complex.prototype.initInteractor = function(naryLink)
{
    this.naryLink = naryLink;
	this.isParked = false;
    this.isSelected = false;
};

Complex.prototype.getPosition = function(){
	var mapped = this.naryLink.getMappedCoordinates();
	var mc = mapped.length;
	var xSum = 0, ySum = 0;
	for (var m = 0; m < mc; m++){
		xSum += mapped[m][0];
		ySum += mapped[m][1];
	}
	return [xSum / mc, ySum / mc];
	
	//~ return [200, 230];
};

Complex.prototype.getBlobRadius = function() {
    return 10;//hack
};

Complex.prototype.setParked = function(bool, svgP) {};
Complex.prototype.setForm = function(form, svgP) {};
Complex.prototype.toParked = function(svgP) {};
Complex.prototype.setPosition = function(x, y) {};
Complex.prototype.getResidueCoordinates = function(x, y) {return this.getPosition()};
Complex.prototype.showHighlight = function() {};

module.exports = Complex;
