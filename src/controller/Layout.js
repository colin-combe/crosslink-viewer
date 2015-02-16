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

var autoLayout = function(width, height) {
    if (typeof this.force !== 'undefined' && this.force != null) {
        this.force.stop();
    }
    if (!width) width = this.svgElement.parentNode.clientWidth;
    if (!height) height = this.svgElement.parentNode.clientHeight;

    var proteinCount = this.participants.keys().length;
    if (proteinCount === 1) {
        var protein = this.participants.values()[0];
        protein.setPosition(width / 2, height / 2);
        protein.setAllLinkCoordinates();
        return;
    }
    else if (proteinCount === 2) {
        var p1 = this.participants.values()[0];
        p1.setPosition(width / 2, height / 3 * 2);
        var p2 = this.participants.values()[1];
        p2.setPosition(width / 2, height / 3 * 1);
        
        p1.setAllLinkCoordinates();
        p2.setAllLinkCoordinates();
        
        return;
    }
    else {
        var self = this; 
        //if force is null choose nice starting points for nodes
        if (typeof this.force === 'undefined' || this.force == null) {
            //Get starting position for force layout by using d3 packed circles layout
            var json = "{\"name\": \"ALL\",\"children\": [";
            var pi = 0;
			var nodes = this.participants.values();
			var nodeCount = nodes.length;
			for (var n = 0; n < nodeCount; n++) {
				var prot = nodes[n];
				if (pi > 0){
					json += ",";
				}
				pi++;
				//TODO: change to actual json obj not string
				json += "{\"name\":\"" + prot.name + "\",\"id\":\"" + prot.id + "\",\"ppLinkCount\":\""
						+ prot.binaryLinks.keys().length + "\",\"size\":\"" + (prot.size) + "\"";
				json += "}";
			}
            json += "]}";
            var jsonObj = JSON.parse(json);
            var packLayout = d3.layout.pack()
                    .size([width - this.layoutXOffset, height])
                    .value(function(d) {
						return d.size;
					})
                    .sort(function comparator(a, b) {
						return (b.ppLinkCount) - (a.ppLinkCount);
					})
					;
            var nodes = packLayout.nodes(jsonObj);
            var nodeCount = nodes.length;
            for (var n = 1; n < nodeCount; n++) {
                var node = nodes[n];
                var protein = this.participants.get(node.id);
                var nx = node.x + Math.random() - 0.5;
                var ny = node.y + Math.random() - 0.5;
                
                protein.setPosition(nx + this.layoutXOffset, ny);
                protein.setAllLinkCoordinates(false);
            }
        }
                
        //do force directed layout
        var linkDistance = 60;
        var layoutObj = {};
        layoutObj.nodes = [];
        layoutObj.links = [];
        var protLookUp = {};
        var pi = 0;

		var nodes = this.participants.values();
		var nodeCount = nodes.length;
		for (var n = 0; n < nodeCount; n++) {
			var prot = nodes[n];//.id);
			protLookUp[prot.id] = pi;
			pi++;
			var nodeObj = {};
			nodeObj.id = prot.id;
			nodeObj.x = prot.x - this.layoutXOffset;
			nodeObj.y = prot.y;
			nodeObj.px = prot.x - this.layoutXOffset;
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
        this.force = d3.layout.force()
                .nodes(layoutObj.nodes)
                .links(layoutObj.links)
                .gravity(95 * k)
                .linkDistance(linkDistance)
                .charge(-18 / k)
                .size([width, height]);
        var nodeCount = this.force.nodes().length;
        var forceLinkCount = this.force.links().length;
        this.force.on("tick", function(e) {
            var nodes = self.force.nodes();
            // console.log("nodes", nodes);
            for (var n = 0; n < nodeCount; n++) {
                var node = nodes[n];
                var protein = self.participants.get(node.id);
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
