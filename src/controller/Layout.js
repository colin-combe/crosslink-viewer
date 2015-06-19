//    xiNET interaction viewer
//    Copyright 2013 Rappsilber Laboratory
//
//    This product includes software developed at
//    the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//
//    author: Colin Combe

"use strict";

xiNET.Controller.prototype.autoLayout = function() {
    if (this.force) {this.force.stop();}
    var width = this.svgElement.parentNode.clientWidth;
    var height = this.svgElement.parentNode.clientHeight;
	var self = this;
	//clear subgraphs
	this.subgraphs.length = 0;
	for (var p = 0; p < proteinCount; p++) {
		prots[p].subgraph = null;
	}
	var prots = this.proteins.values();
	var proteinCount = prots.length;
	//~ for (var p = 0; p < proteinCount; p++) {
		//~ var prot = prots[p];
		//~ var park = true;
		//~ for (var ppl = 0; ppl < prot.proteinLinks.values().length; ppl++){
			//~ var protLink = prot.proteinLinks.values()[ppl];
			//~ if (protLink.getFilteredMatches().length > 0){
				//~ if (this.intraHidden === false || 
					//~ (this.intraHidden === true && protLink.intra != true)) {
						//~ park = false;
					//~ }
			//~ }
		//~ }
		//~ // for (var ppl = 0; ppl < prot.proteinLinks.values().length; ppl++){
			//~ // var protLink = prot.proteinLinks.values()[ppl];
			//~ // if (protLink.getFilteredMatches().length > 0){
				//~ // park = false;
			//~ // }
		//~ // }
		//~ prot.setParked(park);
	//~ }
	//init subgraphs
	for (var p = 0; p < proteinCount; p++) {
		prots[p].getSubgraph();//adds new subgraphs to this.subgraphs
	}
	//sort subgraphs by size
	this.subgraphs.sort(function(a, b) {
		return a.nodes.values().length - b.nodes.values().length;
	});
     
    if (proteinCount === 1) {
        var protein = prots[0];
        protein.setPosition(width / 2, height / 4 * 3);
        return;
    }
    else if (proteinCount === 2) {
        var p1 = prots[0];
        p1.setPosition(width / 2, height * 0.3);
        p1.setAllLineCoordinates();
        var p2 = prots[1];
        p2.setPosition(width / 2, height * 0.6);
        p2.setAllLineCoordinates();
        return;
    }
    else {
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
                    if (nodes[n].countExternalLinks() > 2) {
                        isLinear = false;
                        break;
                    }
                    else if (nodes[n].countExternalLinks() < 2) {
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
        var column = 0, row = 0, parkedRow = 0, parkedColumn = -1;
        if (linearGraphs.length > 0) {
            column++;
            for (var g = 0; g < linearGraphs.length; g++) {
                var nodes = linearGraphs[g].nodes.keys(); //
                var nodeCount = nodes.length;
                if (nodeCount > 2) {
                    nodes = reorderedNodes(linearGraphs[g]);
                }
                for (var n = 0; n < nodeCount; n++) {
                    var p = this.proteins.get(nodes[n]);
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
                        var lastNodeY = yForRow(row + ((nodeCount - 1 - n) * 2));
                        if ((lastNodeY + this.maxBlobRadius) > height) {
                            column++;
                            row = 1;
                            if (proteinCount < 60) {
                                row++;
                            }
                            x = xForColumn(column);
                            y = yForRow(row);
                        }
                    }
                    p.setPosition(x, y);
//                p.fixed = true;
                    //~ this.proteinUpper.appendChild(p.upperGroup);//TODO: why is this here?
                    p.setAllLineCoordinates();
                }
            }
        }
        //remember edge of gridded proteins
        this.layoutXOffset = xForColumn(column + 0.5);
        //if force is null choose nice starting points for nodes
        if (typeof this.force === 'undefined' || this.force == null) {
            //Get starting position for force layout by using d3 packed circles layout
            var layoutObj = {};
            var children = [];
            layoutObj.NAME = "ALL";
            layoutObj.children = children;
            for (var g = 0; g < nonLinearGraphs.length; g++) {
				var nodes = nonLinearGraphs[g].nodes.values();
				var nodeCount = nodes.length;
				for (var n = 0; n < nodeCount; n++) {
					var prot = this.proteins.get(nodes[n].id);
					var nodeObj = {};
					nodeObj.id = prot.id;
					nodeObj.x = prot.x - this.layoutXOffset;
					nodeObj.y = prot.y;
					nodeObj.px = prot.x - this.layoutXOffset;
					nodeObj.py = prot.y;
					nodeObj.linkCount = prot.proteinLinks.keys().length;
					nodeObj.size = 30;
					layoutObj.children.push(nodeObj);
				}
			}
            var packLayout = d3.layout.pack()
                    .size([width - this.layoutXOffset, height])
                    .value(function(d) {
						return d.size;
					})
                    .sort(function comparator(a, b) {
						return (b.linkCount) - (a.linkCount);
					});
            var nodes = packLayout.nodes(layoutObj);
            var nodeCount = nodes.length;
            for (var n = 1; n < nodeCount; n++) {
                var node = nodes[n];
                var protein = this.proteins.get(node.id);
                var nx = node.x;
                var ny = node.y;
                var rotated = Protein.rotatePointAboutPoint([nx, ny], 
					[(width - this.layoutXOffset / 2), height / 2], 90)
                protein.setPosition(rotated[0] + this.layoutXOffset, rotated[1]);
                protein.setAllLineCoordinates(false);
            }
        }
        //do force directed layout
        var gWidth = width - this.layoutXOffset;
        if (gWidth < 200) {
            gWidth = width;
        }
        var linkDistance = 60;
        layoutObj = {};
        layoutObj.nodes = [];
        layoutObj.links = [];
        var protLookUp = {};
        var pi = 0;

        for (var g = 0; g < nonLinearGraphs.length; g++) {
            var nodes = nonLinearGraphs[g].nodes.values();
            var nodeCount = nodes.length;
            for (var n = 0; n < nodeCount; n++) {
                var prot = this.proteins.get(nodes[n].id);
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
				var fromProt = link.fromProtein;
				var toProt = link.toProtein;
				if (toProt) {
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
                .charge(-30 / k)
                .size([gWidth, height]);
        var nodeCount = this.force.nodes().length;
        var forceLinkCount = this.force.links().length;
        this.force.on("tick", function(e) {
            var nodes = self.force.nodes();
            for (var n = 0; n < nodeCount; n++) {
                var node = nodes[n];
                var protein = self.proteins.get(node.id);
                var nx = node.x;
                var ny = node.y;
                protein.setPosition(nx + self.layoutXOffset, ny);
                protein.setAllLineCoordinates();
            }
        });
        this.force.start();
    }

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
            for (var l = 0; l < currentNode.proteinLinks.values().length; l++) {
                var link = currentNode.proteinLinks.values()[l];
                if (link.check() === true) {
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

    //functions used...
    function xForColumn(c) {
        return (c * ((2 * 30) + Protein.LABELMAXLENGTH)) - 30;
    }
    ;

    function yForRow(r) {
        return (r * 30);
    }
    ;
};
