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

var Interactor = require('../model/interactor/Interactor');

var autoLayout = function(width, height) {

    //functions used...
    function xForColumn(c) {
        return (c * ((/*2 **/ self.maxBlobRadius) + Interactor.LABELMAXLENGTH)) - self.maxBlobRadius;
    };

    function yForRow(r) {
        return (r * self.maxBlobRadius);
    };
        
    function reorderedNodes(linearGraph) {
        var reorderedNodes = [];
        appendNode(getStartNode());
        return reorderedNodes;

        function getStartNode() {
            var ns = linearGraph.nodes.values();
            var count = ns.length;
            //                    alert (nodeCount);
            for (var n = 0; n < count; n++) {
                if (ns[n].countExternalLinks() < 2) {
                    //                            alert("got start");
                    return ns[n];
                }
            }
            console.error("missed linear subgraph start");
            return null;
        }

        function appendNode(currentNode) {
            reorderedNodes.push(currentNode.id);
            for (var l = 0; l < currentNode.links.values().length; l++) {
                var link = currentNode.links.values()[l];
                if (/*link.isBinary && */link.check() === true) {
                    var nextNode = link.getOtherEnd(currentNode);
                    if (reorderedNodes.indexOf(nextNode.id) === -1) {
                        //                    alert("here");
                        appendNode(nextNode);
                        break;
                    }
                }
            }
        }
    }
    
    if (typeof this.force !== 'undefined' && this.force != null) {
        this.force.stop();
    }
    if (!width) width = this.svgElement.parentNode.clientWidth;
    if (!height) height = this.svgElement.parentNode.clientHeight;

    var proteinCount = this.interactors.keys().length;
    if (proteinCount === 1) {
        var protein = this.interactors.values()[0];
        protein.setPosition(width / 2, height / 2);
        return;
    }
    else if (proteinCount === 2) {
        var p1 = this.interactors.values()[0];
        p1.setPosition(width / 2, height / 3 * 2);
        var p2 = this.interactors.values()[1];
        p2.setPosition(width / 2, height / 3 * 1);
        return;
    }
    else {
        var self = this;
        //Init subgraphs
        //clear subgraphs
        this.subgraphs.length = 0;
        var prots = this.interactors.values();
        var proteinCount = prots.length;
        for (var p = 0; p < proteinCount; p++) {
            prots[p].subgraph = null;
        }
        //init subgraphs
        for (var p = 0; p < proteinCount; p++) {
            prots[p].getSubgraph();//adds new subgraphs to this.subgraphs
        }
        //~ //sort subgraphs by decreasing size
        this.subgraphs.sort(function(a, b) {
            return b.nodes.values().length - a.nodes.values().length;
        });
        //Sort subgraphs into linear and non-linear sets
        var linearGraphs = [];
        var nonLinearGraphs = [];
        var graphCount = this.subgraphs.length;
        for (var g = 0; g < graphCount; g++) {
            var graph = this.subgraphs[g];
            var nodes = graph.nodes.values();
            var nodeCount = nodes.length;
            var isLinear = true;
            if (nodeCount === 1) {
                isLinear = true;
            }
            else {
                var endFound = false;
                for (var n = 0; n < nodeCount; n++) {
					var linkCount = nodes[n].countExternalLinks();
					if (linkCount > 2) {
                        isLinear = false;
                        break;
                    }
                    else if (linkCount < 2) {
                        endFound = true;
                    }
                }
                //check not circular
                if (!endFound) {
                    isLinear = false;
                }
            }
            if (isLinear === true) {
                linearGraphs.push(graph);
            } else {
                nonLinearGraphs.push(graph);
            }
        }
        //Grid layout linear graphs
        var column = 0.5, row = 0, parkedRow = 0, parkedColumn = -1;
        if (linearGraphs.length > 0) {
            column++;
            for (var g = 0; g < linearGraphs.length; g++) {
                var nodes = linearGraphs[g].nodes.keys(); //
                var nodeCount = nodes.length;
                if (nodeCount > 2) {
                    nodes = reorderedNodes(linearGraphs[g]);
                }
                for (var n = 0; n < nodeCount; n++) {
                    var p = this.interactors.get(nodes[n]);
                    var x, y;
                    if (p.isParked === true) {
                        parkedRow++;
                        x = xForColumn(parkedColumn);
                        y = yForRow(parkedRow);
                        if (y > height) {
                            parkedColumn--;
                            parkedRow = 1;
                            x = xForColumn(parkedColumn);
                            y = yForRow(parkedRow);
                        }
                    }
                    else {
                        row++;
                        if (proteinCount < 60 || nodeCount > 1) {
                        row++;
                        }
                        x = xForColumn(column);
                        y = yForRow(row);
                        var lastNodeY = yForRow(row + ((nodeCount - n) * 2));
                        if ((lastNodeY + this.maxBlobRadius) > height) {
                            row = 1;
                            column++;
                            if (((column - 0.5) % 2) === 0) {row += 1} 
                            //~ if (proteinCount < 60) {
                                row++;
                            //~ }
                            x = xForColumn(column);
                            y = yForRow(row);
                        }
                    }
                    p.setPosition(x, y);
//                p.fixed = true;
                    p.setAllLinkCoordinates();
                }
             }
        }
        //~ //remember edge of gridded interactors
        this.layoutXOffset = xForColumn(column + 1);
        //if force is null choose nice starting points for nodes
        if (typeof this.force === 'undefined' || this.force == null) {
            //Get starting position for force layout by using d3 packed circles layout
            var json = "{\"name\": \"ALL\",\"children\": [";
            var pi = 0;
            for (var g = 0; g < nonLinearGraphs.length; g++) {
                var nodes = nonLinearGraphs[g].nodes.values();
                var nodeCount = nodes.length;
                for (var n = 0; n < nodeCount; n++) {
                    var prot = this.interactors.get(nodes[n].id);
//                prot.fixed = false;
                    if (pi > 0){
                        json += ",";
                    }
                    pi++;
                    //TODO: change to actual json obj not string
                    json += "{\"name\":\"" + prot.name + "\",\"id\":\"" + prot.id + "\",\"ppLinkCount\":\""
                            + prot.binaryLinks.keys().length + "\",\"size\":\"" + (prot.size) + "\"";
                    json += "}";
                }
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
            //~ this.message(layoutObj);
            var nodes = packLayout.nodes(jsonObj);
            var nodeCount = nodes.length;
            for (var n = 1; n < nodeCount; n++) {
                var node = nodes[n];
                var protein = this.interactors.get(node.id);
                var nx = node.x + Math.random() - 0.5;
                var ny = node.y + Math.random() - 0.5;
                
                protein.setPosition(nx + this.layoutXOffset, ny);
                protein.setAllLinkCoordinates(false);
            }
        }
        //do force directed layout
        var gWidth = width - this.layoutXOffset;
        if (gWidth < 200) {
            gWidth = width;
        }
        var linkDistance = 60;
        var layoutObj = {};
        layoutObj.nodes = [];
        layoutObj.links = [];
        var protLookUp = {};
        var pi = 0;

        for (var g = 0; g < nonLinearGraphs.length; g++) {
            var nodes = nonLinearGraphs[g].nodes.values();
            var nodeCount = nodes.length;
            for (var n = 0; n < nodeCount; n++) {
                var prot = this.interactors.get(nodes[n].id);
//        if (prot.fixed === false) {
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
//        }
        }
        for (var g = 0; g < nonLinearGraphs.length; g++) {
            var links = nonLinearGraphs[g].links.values();
            var linkCount = links.length;
            for (var l = 0; l < linkCount; l++) {
                var link = links[l];
//            if (link.check() === true) { //not needed due to way subgraphs init'ed
               //~ if (link.isBinary === true){
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
				//~ } else {
					//~ for (var i = 0; i < link.evidences.values().length; i++) {
					//~ var participants = link.evidences.values()[i].participants;
					//~ var participantCount = participants.length; 
					//~ var fakeHub = this.interactors.get(participants[0].interactorRef);
					//~ var fromProt = fakeHub;
					//~ var source = protLookUp[fromProt.id];
					//~ for (var p = 1; p < participantCount; p++){
						//~ var participant = this.interactors.get(participants[p].interactorRef);
						//~ var toProt = participant;
						//~ if (typeof toProt !== "undefined") {
							//~ var target = protLookUp[toProt.id];
							//~ var linkObj = {};
							//~ linkObj.source = source;
							//~ linkObj.target = target;
							//~ linkObj.id = link.id;
							//~ layoutObj.links.push(linkObj);		
						//~ }				
					//~ }
				//~ }
				//~ }
                //        } // closing unused link.check()
            }
        }
        var k = Math.sqrt(layoutObj.nodes.length / ((gWidth) * height));
// mike suggests:
//    .charge(-10 / k)
//    .gravity(100 * k)
        this.force = d3.layout.force()
                .nodes(layoutObj.nodes)
                .links(layoutObj.links)
                .gravity(85 * k)
                .linkDistance(linkDistance)
                .charge(-25 / k)
                .size([gWidth - xForColumn(1), height - yForRow(2)]);
        var nodeCount = this.force.nodes().length;
        var forceLinkCount = this.force.links().length;
        this.force.on("tick", function(e) {
            var nodes = self.force.nodes();
            // console.log("nodes", nodes);
            for (var n = 0; n < nodeCount; n++) {
                var node = nodes[n];
                var protein = self.interactors.get(node.id);
                var nx = node.x;
                var ny = node.y;
                protein.setPosition(nx + self.layoutXOffset, ny + yForRow(1));
                protein.setAllLinkCoordinates();
            }
        });
        this.force.start();
    }
};

module.exports = autoLayout;
