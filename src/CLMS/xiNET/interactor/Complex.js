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

var Molecule = require('./Molecule');
var Config = require('../../controller/Config');

Complex.prototype = new Molecule();

function Complex(id, xlvController) {
    this.id = id; 
    this.ctrl = xlvController;
    //links
    this.naryLinks = d3.map();
    this.binaryLinks = d3.map();
    this.selfLink = null;
    this.sequenceLinks = d3.map();
    this.form = 0;
    this.type = 'complex';
}

Complex.prototype.initMolecule = function(naryLink)
{
    this.naryLink = naryLink;
	naryLink.path.setAttribute('stroke', 'black');
    naryLink.path.setAttribute('stroke-linejoin', 'round');
    naryLink.path.setAttribute('stroke-width', 8);
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
};

Complex.prototype.setPosition = function(x, y) {};
Complex.prototype.getResidueCoordinates = function(x, y) {return this.getPosition()};
Complex.prototype.showHighlight = function() {};

module.exports = Complex;
