//    xiNET cross-link viewer
//    Copyright 2013 Rappsilber Laboratory
//
//    This product includes software developed at
//    the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//
//    author: Colin Combe
"use strict";

xiNET.Controller.prototype.checkLinks = function() {
    //if (this.initComplete) {
		var suspendID = this.svgElement.suspendRedraw(5000);
		var links = this.proteinLinks.values();
		var linkCount = links.length;
		for (var l = 0; l < linkCount; l++) {
			links[l].check();
		}
		this.svgElement.unsuspendRedraw(suspendID);
	//}
};

xiNET.Controller.prototype.scale = function() {
    var suspendID = this.svgElement.suspendRedraw(5000);
    //if (this.initComplete) {
        this.z = this.container.getScreenCTM().inverse().a;

        var proteins = this.proteins.values();
        var proteinCount = proteins.length;
        for (var p = 0; p < proteinCount; p++) {
            var prot = proteins[p];
            prot.setPosition(prot.x, prot.y); // this rescales the protein //TODO: check if this always need to happen
            if (prot.form !== 0)
                prot.setAllLineCoordinates();
        }

        var links = this.proteinLinks.values();
        var linkCount = links.length;
        for (var l = 0; l < linkCount; l++) {
            var protLink = links[l];
            if (protLink.fromProtein !== protLink.toProtein && protLink.toProtein !== null) {
                if (!protLink.fromProtein.isParked && !protLink.toProtein.isParked) {
                    if (protLink.fromProtein.form === 0 && protLink.toProtein.form === 0) {
                        protLink.line.setAttribute("stroke-width", this.z * xiNET.linkWidth);
                        protLink.highlightLine.setAttribute("stroke-width", this.z * 10);
                        protLink.fatLine.setAttribute("stroke-width", this.z * protLink.w);
                        if (protLink.ambig) {
                            protLink.dashedLine(true); //rescale spacing of dashes
                        }
                    }
                    else {
                        //inter protein res links
                        var c2 = protLink.residueLinks.keys().length;
                        for (var rl = 0; rl < c2; rl++) {
                            var resLink = protLink.residueLinks.values()[rl];
                            if (resLink.check()) {
                                protLink.residueLinks.values()[rl].line.setAttribute("stroke-width", this.z * xiNET.linkWidth);
                                protLink.residueLinks.values()[rl].highlightLine.setAttribute("stroke-width", this.z * 10);
                                if (resLink.ambig) {
                                    resLink.dashedLine(true); //rescale spacing of dashes
                                }
                            }
                        }
                    }
                }
            }
        }
    //}
    this.svgElement.unsuspendRedraw(suspendID);
};


//            var matchingNeighbour = false;
//            var links = prot.proteinLinks.values();
//            var linkCount = links.length;
//            for (var l = 0; l < linkCount; l++ ){
//                var link = links[l];
//                if (link.getOtherEnd(prot).meetsTextFilter(text))
//                    matchingNeighbour = true;
//            }
//            if (matchingNeighbour === true) {
//                prot.setParked(false);
//            } else {



//
//   function defoliate(subgraph){
//        var nodes = subgraph.nodes.values();
//        var nodeCount = nodes.length;
//        var leaves = [];
//        for (var n = 0; n < nodeCount; n++){
//            if (nodes[n].externalLinks.length == 1){
//                leaves.push(nodes[n]);
//            }
//
//        }
//        for (var l = 0; l < leaves.length; l++){
//            var leaf = leaves[l];
//            var link = leaf.externalLinks[0];
//
//            d3.select(leaf.labelSVG).attr("opacity", "1");
//            d3.select(link.line).attr("opacity", "1");
//            d3.select(link.fatLine).attr("opacity", "1");
//            d3.select(leaf.g).attr("opacity", "1");
//
//            subgraph.links.remove(link.id);
//            subgraph.nodes.remove(leaf.id);
//            var otherEnd = link.getOtherEnd(leaf);
//            otherEnd.removeLink(link.id);
//
//            d3.select(leaf.blob).transition().duration(1000)
//            .attr("stroke", "red")
//            .attr("stroke-width", "5");
//
//            d3.select(leaf.labelSVG).transition().delay(2000).duration(1000)
//            .attr("opacity", "0");
//            d3.select(link.line).transition().delay(2000).duration(1000)
//            .attr("opacity", "0");
//            d3.select(link.fatLine).transition().delay(2000).duration(1000)
//            .attr("opacity", "0");
//            d3.select(link.highlightLine).attr("opacity", "0");
//            d3.select(leaf.g).transition().delay(2000).duration(1000)
//            .attr("r", "0")
//            .attr("transform", "translate("+otherEnd.x+","+otherEnd.y+")");
//
//            d3.select(leaf.blob).transition().delay(3000).duration(1).attr("opacity", "0");
//
//            otherEnd.nest(leaf);
//
//
//        }
//        if (leaves.length > 0) return true;
//        else
//            return false;
//    }
