//    xiNET Crosslink Viewer
//    Copyright 2013 Rappsilber Laboratory
//
//    This product includes software developed at
//    the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//
//    author: Colin Combe
//
//    CLMS.xiNET.Rotator.js

CLMS.xiNET.Rotator = function(protein, upperOrLower, controller) {
    var self = this;
    this.controller = controller;
    this.protein = protein;
    this.upperOrLower = upperOrLower;

    var RADIUS = 14;
    var SYMBOL_RADIUS = 20; // not really, gets scaled down

    this.svg = document.createElementNS(this.controller.svgns, "g");
    this.rotatorSymbol = document.createElementNS(this.controller.svgns, "g");

    var rotatorCircle = document.createElementNS(this.controller.svgns, "circle");
    rotatorCircle.setAttribute("r", RADIUS);
    rotatorCircle.setAttribute("stroke", "none");
    rotatorCircle.setAttribute("fill", "gray");
    rotatorCircle.setAttribute("fill-opacity", "0.0");
    this.svg.appendChild(rotatorCircle);

    var symbolCircle = document.createElementNS(this.controller.svgns, "circle");
    symbolCircle.setAttribute("r", SYMBOL_RADIUS);
    symbolCircle.setAttribute("stroke", "black");
    symbolCircle.setAttribute("stroke-width", "1");
    symbolCircle.setAttribute("fill", "none");
    this.rotatorSymbol.appendChild(symbolCircle);

    var arrow1 = document.createElementNS(this.controller.svgns, "path");
    arrow1.setAttribute("d", "M 19.818182,-3 L 16,3.10345 L 23.636363,3.10345 L 19.818182,-3 z ");
    arrow1.setAttribute("stroke", "black");
    arrow1.setAttribute("stroke-width", "1");
    arrow1.setAttribute("fill", "black");

    this.rotatorSymbol.appendChild(arrow1);
    var arrow2 = document.createElementNS(this.controller.svgns, "path");
    arrow2.setAttribute("d", "M 19.818182,-3 L 16,3.10345 L 23.636363,3.10345 L 19.818182,-3 z ");
    arrow2.setAttribute("stroke", "black");
    arrow2.setAttribute("stroke-width", "1");
    arrow2.setAttribute("fill", "black");
    arrow2.setAttribute("transform", "rotate(180)");
    this.rotatorSymbol.appendChild(arrow2);
    this.rotatorSymbol.setAttribute("transform", "rotate(45) scale (0.7, 0.7)");

    this.rotatorSymbol.setAttribute("display", "none");

    this.inner = document.createElementNS(this.controller.svgns, "g");
    this.inner.setAttribute("class", "PV_rotator");
    this.inner.appendChild(this.rotatorSymbol);

    this.svg.appendChild(this.inner);

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

CLMS.xiNET.Rotator.prototype.rotatorMouseOver = function(evt) {
    this.rotatorSymbol.setAttribute("display", "block");
}

CLMS.xiNET.Rotator.prototype.rotatorMouseOut = function(evt) {
    this.rotatorSymbol.setAttribute("display", "none");
}

CLMS.xiNET.Rotator.prototype.rotatorMouseDown = function(evt) {
    this.controller.state = this.controller.STATES.ROTATING;
    this.controller.dragElement = this.protein;
    this.controller.whichRotator = this.upperOrLower;
}
