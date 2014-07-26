//    xiNET interaction viewer
//    Copyright 2013 Rappsilber Laboratory
//
//    This product includes software developed at
//    the Rappsilber Laboratory (http://www.rappsilberlab.org/).

// 'superclass' for SequenceLink, InteractorLink
// terminology? could this class be renamed to Interaction?
// or a 'Link' is a graphical rperesentation of one or many interactions
// i.e. 'link' is a glyph, 'interaction' is biology?

xiNET.Link = function (){};

// event handler for starting dragging or rotation (or flipping internal links)
xiNET.Link.prototype.mouseDown = function(evt) {
//    //console.log("clickable mouse down");
    this.xlv.preventDefaultsAndStopPropagation(evt);//see MouseEvents.js
    //if a force layout exists then stop it
    if (this.xlv.force !== undefined){
        this.xlv.force.stop();
    }
    this.xlv.dragElement = this;

    //store start location
    var p = this.xlv.getEventPoint(evt);// seems to be correct, see above
    this.xlv.dragStart = this.xlv.mouseToSVG(p.x, p.y);
    return false;
}

// highlight on mouseover, all 'subclasses' need a showHighlight method
xiNET.Link.prototype.mouseOver = function(evt){
    //console.log("clickable mouse over");
    this.xlv.preventDefaultsAndStopPropagation(evt);
    this.showHighlight(true, true);
    this.xlv.setTooltip(this.tooltip);
    return false;
}

xiNET.Link.prototype.mouseOut = function(evt){
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

xiNET.Link.prototype.mouseOut = function(evt){
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


