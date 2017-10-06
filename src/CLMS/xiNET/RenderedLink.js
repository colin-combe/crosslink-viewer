//  xiNET Cross-link Viewer
//  Copyright 2013 Rappsilber Laboratory
//
//  This product includes software developed at
//  the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//
//  author: Colin Combe
//
//  RenderedLink.js

//'superclass' for CLMS.xiNET.RenderedCrossLink, CLMS.xiNET.P_PLink
CLMS.xiNET.RenderedLink = function (){};

CLMS.xiNET.RenderedLink.prototype.mouseOut = function(evt){
    //~ this.crosslinkViewer.preventDefaultsAndStopPropagation(evt);
    //this.crosslinkViewer.model.set("highlights",[]);
    this.crosslinkViewer.model.setMarkedCrossLinks ("highlights",[]);   // which pokes highlighted matches into changing too
    this.crosslinkViewer.model.get("tooltipModel").set("contents", null);
}


CLMS.xiNET.RenderedLink.prototype.dashedLine = function(dash) {
	if (this.shown) {
		if (dash) {
			if (this.renderedFromProtein === this.renderedToProtein) {
				this.line.setAttribute("stroke-dasharray", (4) + ", " + (4));
			}
			else {
				this.line.setAttribute("stroke-dasharray", (4 * this.crosslinkViewer.z) + ", " + (4 * this.crosslinkViewer.z));
			}
		}
		else {
			this.line.removeAttribute("stroke-dasharray");
		}
	}
};




