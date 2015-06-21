//    xiNET Cross-link Viewer
//    Copyright 2013 Rappsilber Laboratory
//
//    This product includes software developed at
//    the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//
//    author: Colin Combe

"use strict";

xiNET.Controller.prototype.showTooltip = function(p)
    {
        var ttX, ttY;
		var length = this.tooltip.getComputedTextLength() + 16;
		var width = this.svgElement.parentNode.clientWidth;
		var height = this.svgElement.parentNode.clientHeight;
		if (p.x + 20 + length < width) {
			ttX = p.x;
		}
		else {
			ttX = width - length - 20;
		}

        if (p.y + 60 < height) {
			ttY = p.y;
		}
		else {
			ttY = height - 60;
		}
        this.tooltip.setAttribute("x", ttX + 22);
        this.tooltip.setAttribute("y", ttY + 47);
        this.tooltip_bg.setAttribute("x", ttX + 16);
        this.tooltip_bg.setAttribute("y", ttY + 28);
        this.tooltip_subBg.setAttribute("x", ttX + 16);
        this.tooltip_subBg.setAttribute("y", ttY + 28);
    };

xiNET.Controller.prototype.setTooltip = function(text, colour) {
	if (text) {
		this.tooltip.firstChild.data = text.toString().replace(/&(quot);/g, '"');
		this.tooltip.setAttribute("display","block");
		var length = this.tooltip.getComputedTextLength();
			this.tooltip_bg.setAttribute("width",length+16);
			this.tooltip_subBg.setAttribute("width",length+16);
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
		this.tooltip_bg.setAttribute("display","block");
		this.tooltip_subBg.setAttribute("display","block");
	}
	else {
		this.hideTooltip();
	}
};

xiNET.Controller.prototype.hideTooltip = function(evt){
    this.tooltip.setAttribute("display","none");
    this.tooltip_bg.setAttribute("display","none");
    this.tooltip_subBg.setAttribute("display","none");
};
