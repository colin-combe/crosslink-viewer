xiNET.Controller.prototype.autoLayout = function() {
    if (typeof this.force !== 'undefined' && this.force != null) {
        this.force.stop();
    }
    var width = this.svgElement.parentNode.clientWidth;
    var height = this.svgElement.parentNode.clientHeight;

    var proteinCount = this.proteins.keys().length;
    if (proteinCount === 1) {
        var protein = this.proteins.values()[0];
        protein.setPosition(width / 2, height / 4 * 3);
        return;
    }
    else if (proteinCount === 2) {
        var p1 = this.proteins.values()[0];
        p1.setPosition(width / 2, height / 2);
        var p2 = this.proteins.values()[1];
        p2.setPosition(width / 2, height - 32);
        return;
    }
    else {
        var self = this;
        //Init subgraphs
        //clear subgraphs
        this.subgraphs.length = 0;
        var prots = this.proteins.values();
        var proteinCount = prots.length;
        for (var p = 0; p < proteinCount; p++) {
            prots[p].subgraph = null;
        }
        //init subgraphs
        for (var p = 0; p < proteinCount; p++) {
            prots[p].getSubgraph();//adds new subgraphs to this.subgraphs
        }
        //sort subgraphs by decreasing size
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
        var column = 1, row = 1, parkedRow = 0, parkedColumn = -1;
        var singleCount = 0;
        var yOffset = 0;
        if (linearGraphs.length > 0) {
            yOffset = yForRow(4);
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
                        row++;
                        if (proteinCount < 60 || nodeCount > 1) {
                            row++;
                        }
                    }
                    p.setPosition(x, y);
//                p.fixed = true;
                    this.proteinUpper.appendChild(p.upperGroup);//TODO: why is this here?
                    p.setAllLineCoordinates();//TODO: check this is needed
                }
                if (nodeCount === 1){
                    singleCount++;
                }
                if (nodeCount > 1 || singleCount % 3 === 0) {
                    column++;
                    row = 1;
                }

            }
        }
        //remember edge of gridded proteins
        //this.layoutXOffset = xForColumn(column + 0.5);
        //if force is null choose nice starting points for nodes
        if (typeof this.force === 'undefined' || this.force == null) {
            //Get starting position for force layout by using d3 packed circles layout
            var json = "{\"name\": \"ALL\",\"children\": [";
            var pi = 0;
            for (var g = 0; g < nonLinearGraphs.length; g++) {
                var nodes = nonLinearGraphs[g].nodes.values();
                var nodeCount = nodes.length;
                for (var n = 0; n < nodeCount; n++) {
                    var prot = this.proteins.get(nodes[n].id);
//                prot.fixed = false;
                    if (pi > 0){
                        json += ",";
                    }
                    pi++;
                    json += "{\"name\":\"" + prot.name + "\",\"id\":\"" + prot.id + "\",\"ppLinkCount\":\""
                            + prot.proteinLinks.keys().length + "\",\"size\":\"" + (prot.size) + "\"";
                    json += "}";
                }
            }
            json += "]}";
            var jsonObj = JSON.parse(json);
            var packLayout = d3.layout.pack()
                    .size([width, height])
                    //    .children(json.children);
                    .value(function(d) {
                return d.size;
            })
                    .sort(function comparator(a, b) {
                return (b.ppLinkCount - 0) - (a.ppLinkCount - 0);
            });
            var nodes = packLayout.nodes(jsonObj);
            var nodeCount = nodes.length;
            for (var n = 1; n < nodeCount; n++) {
                var node = nodes[n];
                var protein = this.proteins.get(node.id);
                var nx = node.x;
                var ny = node.y;
                protein.setPosition(nx + this.layoutXOffset, ny);
                protein.setAllLineCoordinates(false);
            }
        }
        //do force directed layout
        //TODO: don't create JSON string, just create object
        var linkDistance = 60;
        var json = "{\"nodes\":[";
        var protLookUp = {};
        var pi = 0;

//         for (var g = 0; g < linearGraphs.length; g++) {
//             var nodes = linearGraphs[g].nodes.values();
//             var nodeCount = nodes.length;
//             for (var n = 0; n < nodeCount; n++) {
//                 var prot = this.proteins.get(nodes[n].id);
//                 protLookUp[prot.id] = pi;
//                 if (pi > 0)
//                     json += ",";
//                pi++;
//                 json += "{\"id\":\"" + prot.id + "\"" + ",\"x\":" + (prot.x)
//                         + ",\"y\":" + prot.y + ",\"px\":" + (prot.x) + ""
//                         + ",\"py\":" + prot.y
//                         + ",\"fixed\":\"true\"";
//                 json += "}";
//             }
//         }
         var nodesInPlay = 0;
        for (var g = 0; g < nonLinearGraphs.length; g++) {
            var nodes = nonLinearGraphs[g].nodes.values();
            var nodeCount = nodes.length;
            for (var n = 0; n < nodeCount; n++) {
                nodesInPlay++;
                var prot = this.proteins.get(nodes[n].id);
                protLookUp[prot.id] = pi;
                if (pi > 0)
                    json += ",";
                pi++;
                json += "{\"id\":\"" + prot.id + "\"" + ",\"x\":" + (prot.x)
                        + ",\"y\":" + prot.y + ",\"px\":" + (prot.x) + ""
                        + ",\"py\":" + prot.y
                        + ",\"radius\":" + prot.getBlobRadius()
                 + "}";
            }
        }
        json += "],\"links\":[";
        var li = 0;
        for (var g = 0; g < nonLinearGraphs.length; g++) {
            var links = nonLinearGraphs[g].links.values();
            var linkCount = links.length;
            for (var l = 0; l < linkCount; l++) {
                var link = links[l];
//            if (link.check() === true) { //not needed due to way subgraphs init'ed
                var fromProt = link.fromProtein;
                var toProt = link.toProtein;
                var source = protLookUp[fromProt.id];
                var target = protLookUp[toProt.id];

                if (source !== target) {

                    if (typeof source !== 'undefined' && typeof target !== 'undefined') {
                        if (li > 0)
                            json += ",";
                        li++;
                        json += "{\"source\":" + source + ", \"target\":" + target
                                + ", \"id\":\"" + link.id
                                + "\"}";
                    }
                    else {
                        alert("NOT RIGHT");
                    }
                }
                //        } // closing unused link.check()
            }
        }
        json += "]}";
//        this.message(json);
        var jsonObj = JSON.parse(json);
        var k = Math.sqrt(nodesInPlay / ((width) * (height - yOffset)));
// mike suggests:
//    .charge(-10 / k)
//    .gravity(100 * k)
        this.force = d3.layout.force()
                .nodes(jsonObj.nodes)
                .links(jsonObj.links)
                .gravity(40 * k)
                .linkDistance(linkDistance)
                .charge(function(n){
                            var chrg = -15 / k  * (n.radius / 8);
                     //       console.log((-15 / k) + " - " + chrg);
                            return chrg;})//-15 / k;})
                .size([width, (height - yOffset)]);
        var nodeCount = this.force.nodes().length;
        var forceLinkCount = this.force.links().length;
        this.force.on("tick", function(e) {
            var nodes = self.force.nodes();
            for (var n = 0; n < nodeCount; n++) {
                var node = nodes[n];
                var protein = self.proteins.get(node.id);
                var nx = node.x;
                var ny = node.y;
                protein.setPosition(nx, ny + yOffset);
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
        return (c * ((2 * self.maxBlobRadius) + Protein.LABELMAXLENGTH)) - self.maxBlobRadius;
    }
    ;

    function yForRow(r) {
        return (r * self.maxBlobRadius);
    }
    ;
};
