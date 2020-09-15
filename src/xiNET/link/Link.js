//  xiNET Crosslink Viewer
//  Copyright 2013 Rappsilber Laboratory
//
//  This product includes software developed at
//  the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//
//  author: Colin Combe
//
//  Link.js

//'superclass' for xiNET.RenderedCrossLink, xiNET.P_PLink
xiNET.Link = function () {
};

xiNET.Link.prototype.mouseOut = function (evt) {
    this.controller.model.setMarkedCrossLinks("highlights", []); // which pokes highlighted matches into changing too
    this.controller.model.get("tooltipModel").set("contents", null);
}

xiNET.Link.prototype.dashedLine = function (dash) {
    if (this.shown) {
        if (dash) {
            if (this.renderedFromProtein === this.renderedToProtein) {
                this.line.setAttribute("stroke-dasharray", (4) + ", " + (4));
            } else {
                this.line.setAttribute("stroke-dasharray", (4 * this.controller.z) + ", " + (4 * this.controller.z));
            }
        } else {
            this.line.removeAttribute("stroke-dasharray");
        }
    }
};