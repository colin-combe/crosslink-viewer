//    	xiNET interaction viewer
//    	Copyright 2013 Rappsilber Laboratory
//
//    	This product includes software developed at
//    	the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//
//    	author: Colin Combe
//
//		Layout.js

"use strict";

var autoLayout = function() {
    if (typeof this.force !== 'undefined' && this.force != null) {
        this.force.stop();
    }
    var width = this.svgElement.parentNode.clientWidth;
    var height = this.svgElement.parentNode.clientHeight;

    var molCount = this.molecules.keys().length;
    if (molCount === 1) {
        var mol = this.molecules.values()[0];
        mol.setPosition(width / 2, height / 2);
        mol.setAllLinkCoordinates();
        return;
    }
    else if (molCount === 2) {
        var m1 = this.molecules.values()[0];
        m1.setPosition(width / 2, height / 3 * 2);
        var m2 = this.molecules.values()[1];
        m2.setPosition(width / 2, height / 3 * 1);
        
        m1.setAllLinkCoordinates();
        m2.setAllLinkCoordinates();
        
        return;
    }
    else {
        var self = this; 
        var nodes = this.molecules.values();
		var nodeCount = nodes.length;
		//if force is null choose starting points for nodes
        if (typeof this.force === 'undefined' || this.force == null) {
			for (var n = 0; n < nodeCount; n++) {
				nodes[n].setPosition(Math.random() * width, Math.random() * height);
			}               
        }
                
        //do force directed layout
        var layoutObj = {};
        layoutObj.nodes = [];
        layoutObj.links = [];
        var molLookUp = {};
        var mi = 0;

		for (var n = 0; n < nodeCount; n++) {
			var mol = nodes[n];
			molLookUp[mol.id] = mi;
			mi++;
			var nodeObj = {};
			nodeObj.id = mol.id;
			nodeObj.x = mol.x;
			nodeObj.y = mol.y;
			nodeObj.px = mol.x;
			nodeObj.py = mol.y;
			layoutObj.nodes.push(nodeObj);
		}
		var links = this.allBinaryLinks.values();
		var linkCount = links.length;
		for (var l = 0; l < linkCount; l++) {
			var link = links[l];
				var fromMol = link.interactors[0];
				var toMol = link.interactors[1];
				var source = molLookUp[fromMol.id];
				var target = molLookUp[toMol.id];

				if (source !== target) {

					if (typeof source !== 'undefined' && typeof target !== 'undefined') {
						var linkObj = {};
						linkObj.source = source;
						linkObj.target = target;
						linkObj.id = link.id;
						layoutObj.links.push(linkObj);
					}
					else {
						alert("NOT RIGHT");
					}
				}
		}
		
        var k = Math.sqrt(layoutObj.nodes.length / (width * height));
		// mike suggests:
		//    .charge(-10 / k)
		//    .gravity(100 * k)
		//following are the parameters for the layout you can play around with
		//see the documentation at https://github.com/mbostock/d3/wiki/Force-Layout
        this.force = d3.layout.force()
                .nodes(layoutObj.nodes)
                .links(layoutObj.links)
                .gravity(105 * k)
                .linkDistance(70) //target distance between linked nodes
                .linkStrength(0.8) //the strength (rigidity) of links
                .charge(-18 / k)
                .friction(0.95) // 1 = frictionless
                .theta(0.95) //Barnes–Hut approximation criterion
                .size([width, height]);
                //also .chargeDistance() and .alpha() // not used
                
        this.force.on("tick", function(e) {
            var nodes = self.force.nodes();
            // console.log("nodes", nodes);
            for (var n = 0; n < nodeCount; n++) {
                var node = nodes[n];
                var mol = self.molecules.get(node.id);
                var nx = node.x;
                var ny = node.y;
                mol.setPosition(nx, ny);
            }
            self.controller.setAllLinkCoordinates();
        });
        this.force.start();
    }
};

module.exports = autoLayout;
