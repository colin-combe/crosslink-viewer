//    xiNET Cross-link Viewer
//    Copyright 2013 Rappsilber Laboratory
//
//    This product includes software developed at
//    the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//
//    author: Colin Combe
//
//    Rotator.js
//    see http://stackoverflow.com/questions/1369004/this-keyword-in-event-methods-when-using-javascript-prototype-object

"use strict";

function Rotator(proteinRegion, upperOrLower, xlvController) {
    var self = this;
    this.ctrl = xlvController;
    this.proteinOrPartThereof = proteinRegion;
    this.upperOrLower = upperOrLower;

    var RADIUS = 14;
    var SYMBOL_RADIUS = 20;// not really, gets scaled down

    this.svg = document.createElementNS(xiNET.svgns, "g");
    this.rotatorSymbol = document.createElementNS(xiNET.svgns, "g");

    var rotatorCircle = document.createElementNS(xiNET.svgns, "circle");
    rotatorCircle.setAttribute("r", RADIUS);
    rotatorCircle.setAttribute("stroke", "none");
    rotatorCircle.setAttribute("fill", "gray");
    rotatorCircle.setAttribute("fill-opacity", "0.0");
    this.svg.appendChild(rotatorCircle);

    var symbolCircle = document.createElementNS(xiNET.svgns, "circle");
    symbolCircle.setAttribute("r", SYMBOL_RADIUS);
    symbolCircle.setAttribute("stroke", "black");
    symbolCircle.setAttribute("stroke-width", "1");
    symbolCircle.setAttribute("fill", "none");
    this.rotatorSymbol.appendChild(symbolCircle);

    var arrow1 = document.createElementNS(xiNET.svgns, "path");
    //    arrow1.setAttribute("id","arrow");
    arrow1.setAttribute("d", "M 19.818182,-3 L 16,3.10345 L 23.636363,3.10345 L 19.818182,-3 z ");
    arrow1.setAttribute("stroke", "black");
    arrow1.setAttribute("stroke-width", "1");
    arrow1.setAttribute("fill", "black");

    this.rotatorSymbol.appendChild(arrow1);
    var arrow2 = document.createElementNS(xiNET.svgns, "path");
    //    arrow2.setAttribute("id","arrow");
    arrow2.setAttribute("d", "M 19.818182,-3 L 16,3.10345 L 23.636363,3.10345 L 19.818182,-3 z ");
    arrow2.setAttribute("stroke", "black");
    arrow2.setAttribute("stroke-width", "1");
    arrow2.setAttribute("fill", "black");
    arrow2.setAttribute("transform", "rotate(180)");
    this.rotatorSymbol.appendChild(arrow2);
    this.rotatorSymbol.setAttribute("transform", "rotate(45) scale (0.7, 0.7)");

    this.rotatorSymbol.setAttribute("display", "none");

    this.inner = document.createElementNS(xiNET.svgns, "g");
    this.inner.setAttribute("class","PV_rotator");
    this.inner.appendChild(this.rotatorSymbol);

    this.svg.appendChild(this.inner);
    //    this.svg.setAttribute("class","PV_rotator");

    //set the events for it
    this.svg.onmouseover = function(evt) {
        self.rotatorMouseOver(evt);
    };
    this.svg.onmouseout = function(evt) {
        self.rotatorMouseOut(evt);
    };
    this.svg.onmousedown = function(evt) {
        self.rotatorMouseDown(evt);
    };
}

Rotator.prototype.rotatorMouseOver = function (evt) {
//    console.log("rotator mouseover (this = " + this.toString() + ')');
    if (!this.ctrl.rotating) {
        this.rotatorSymbol.setAttribute("display", "block");
    }
}

Rotator.prototype.rotatorMouseOut = function (evt) {
    //if (!rotateEnabled) {
    this.rotatorSymbol.setAttribute("display", "none");
//}
}

Rotator.prototype.rotatorMouseDown = function (evt) {
    this.ctrl.state = xiNET.Controller.ROTATING;
    this.ctrl.dragElement = this.proteinOrPartThereof;
    var p = this.ctrl.getEventPoint(evt);// seems to be correct, see above
    var c = this.ctrl.mouseToSVG(p.x, p.y);
    this.ctrl.whichRotator = this.upperOrLower;
    return false;
}
