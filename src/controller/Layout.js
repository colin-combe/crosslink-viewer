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

    var proteinCount = this.molecules.keys().length;
    if (proteinCount === 1) {
        var protein = this.molecules.values()[0];
        protein.setPosition(width / 2, height / 2);
        protein.setAllLinkCoordinates();
        return;
    }
    else if (proteinCount === 2) {
        var p1 = this.molecules.values()[0];
        p1.setPosition(width / 2, height / 3 * 2);
        var p2 = this.molecules.values()[1];
        p2.setPosition(width / 2, height / 3 * 1);
        
        p1.setAllLinkCoordinates();
        p2.setAllLinkCoordinates();
        
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
        var protLookUp = {};
        var pi = 0;

		for (var n = 0; n < nodeCount; n++) {
			var prot = nodes[n];//.id);
			protLookUp[prot.id] = pi;
			pi++;
			var nodeObj = {};
			nodeObj.id = prot.id;
			nodeObj.x = prot.x;
			nodeObj.y = prot.y;
			nodeObj.px = prot.x;
			nodeObj.py = prot.y;
			layoutObj.nodes.push(nodeObj);
		}
		var links = this.allBinaryLinks.values();
		var linkCount = links.length;
		for (var l = 0; l < linkCount; l++) {
			var link = links[l];
				var fromProt = link.interactors[0];
				var toProt = link.interactors[1];
				var source = protLookUp[fromProt.id];
				var target = protLookUp[toProt.id];

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
                var protein = self.molecules.get(node.id);
                var nx = node.x;
                var ny = node.y;
                protein.setPosition(nx, ny);
                protein.setAllLinkCoordinates();
            }
        });
        this.force.start();
    }
};

module.exports = autoLayout;
