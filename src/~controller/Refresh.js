//    xiNET cross-link viewer
//    Copyright 2013 Rappsilber Laboratory
//
//    This product includes software developed at
//    the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//
//    author: Colin Combe
"use strict";

xiNET.Controller.prototype.checkLinks = function() {
	var links = this.proteinLinks.values();
	var linkCount = links.length;
	for (var l = 0; l < linkCount; l++) {
		links[l].check();
	}
	this.linkSelectionChanged();
};

//~ xiNET.Controller.prototype.scale = function() {
//~ 
//~ };
