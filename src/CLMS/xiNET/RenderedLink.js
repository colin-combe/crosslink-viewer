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
    this.crosslinkViewer.model.set("highlights",[]);
    this.crosslinkViewer.model.get("tooltipModel").set("contents", null);
}




