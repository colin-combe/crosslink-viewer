//'superclass' for Protein, ResidueLink, ProteinLink
xinet.Link = function (){};
// event handler for starting dragging or rotation (or flipping internal links)
xinet.Link.prototype.mouseDown = function(evt) {
//    //console.log("clickable mouse down");
    this.xlv.preventDefaultsAndStopPropagation(evt);//see MouseEvents.js
    //if a force layout exists then stop it
    if (this.xlv.force !== undefined){
        this.xlv.force.stop();
    }
    this.xlv.dragElement = this;
            this.xlv.clearSelection();
            this.setSelected(true);
    //store start location
    var p = this.xlv.getEventPoint(evt);// seems to be correct, see above
    this.xlv.dragStart = this.xlv.mouseToSVG(p.x, p.y);
    return false;
}

// highlight on mouseover, all 'subclasses' need a showHighlight method
xinet.Link.prototype.mouseOver = function(evt){
    //console.log("clickable mouse over");
    this.xlv.preventDefaultsAndStopPropagation(evt);
    this.showHighlight(true, true);
    this.xlv.setTooltip(this.tooltip);
    return false;
}

xinet.Link.prototype.mouseOut = function(evt){
    //console.log("clickable mouse out");
    this.xlv.preventDefaultsAndStopPropagation(evt);
    //    if (this.xlv.dragElement == undefined) {
    this.showHighlight(false, true);
    //    } else {
    //        if (this.xlv.dragElement != this){// todo: improve, actually needs to know
    //            // if drag element is part of dragging subgraph
    //            this.showHighlight(false, true);
    //        }
    //    }
    this.xlv.hideTooltip();
    return false;
}


