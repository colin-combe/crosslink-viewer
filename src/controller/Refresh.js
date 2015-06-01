//    xiNET cross-link viewer
//    Copyright 2013 Rappsilber Laboratory
//
//    This product includes software developed at
//    the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//
//    author: Colin Combe
"use strict";

xiNET.Controller.prototype.checkLinks = function() {
    //if (this.sequenceInitComplete) {
		var links = this.proteinLinks.values();
		var linkCount = links.length;
		for (var l = 0; l < linkCount; l++) {
			links[l].check();
		}
	//}
};

xiNET.Controller.prototype.scale = function() {
    //if (this.sequenceInitComplete) {
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
};
