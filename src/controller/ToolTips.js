//    xiNET Interaction Viewer
//    Copyright 2013 Rappsilber Laboratory
//
//    This product includes software developed at
//    the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//
//    author: Colin Combe

"use strict";

var showTooltip = function(p)
    {
        //TODO: if its going ot be off the right of the screen put it to left of the cursor
//        var x = (Math.round(p.x / 10) * 10) + 0.5, y = (Math.round(p.y / 10) * 10) + 0.5;
    var x = p.x, y = p.y;
        this.tooltip.setAttribute("x", x + 22);
        this.tooltip.setAttribute("y",y + 47);

        this.tooltip_bg.setAttributeNS(null,"x", x + 16);
        this.tooltip_bg.setAttributeNS(null,"y", y + 28);

        this.tooltip_subBg.setAttributeNS(null,"x", x + 16);
        this.tooltip_subBg.setAttributeNS(null,"y", y + 28);
    };

var setTooltip = function(text, colour) {
    //TODO: format tooltips (line breaks)
    if (typeof text === 'undefined') text = "undefined";
    this.tooltip.firstChild.data = text.toString().replace(/&(quot);/g, '"');
    this.tooltip.setAttribute("visibility","visible");
    var length = this.tooltip.getComputedTextLength();
    this.tooltip_bg.setAttributeNS(null,"width",length+16);
    this.tooltip_subBg.setAttributeNS(null,"width",length+16);
    if (typeof colour !== 'undefined' && colour != null){
        this.tooltip_bg.setAttribute('fill', colour);
        this.tooltip_bg.setAttribute('stroke', colour);
        this.tooltip_bg.setAttribute('fill-opacity', '0.5');
    } else {
        this.tooltip_bg.setAttribute('fill','white');
        this.tooltip_bg.setAttribute('stroke','grey');
    }

    this.tooltip_bg.setAttribute('height', 28);
    this.tooltip_subBg.setAttribute('height', 28);

    this.tooltip.setAttribute("visibility","visible");
    this.tooltip_bg.setAttributeNS(null,"visibility","visible");
    this.tooltip_subBg.setAttributeNS(null,"visibility","visible");
};


var hideTooltip = function(evt){
    this.tooltip.setAttributeNS(null,"visibility","hidden");
    this.tooltip_bg.setAttributeNS(null,"visibility","hidden");
    this.tooltip_subBg.setAttributeNS(null,"visibility","hidden");
};

module.exports = {
    showTooltip: showTooltip,
    setTooltip: setTooltip,
    hideTooltip: hideTooltip
}


