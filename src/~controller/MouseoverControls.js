// MouseoverControls.js

//NOT CURRENTLY USED

"use strict";

function MouseoverControls(protein, xlvController) {
    var self = this;
    this.xlv = xlvController;
    this.protein = protein;
    this.scaleArrows = [];
	this.oneEndGroup = this.makeGroup(0);
	this.sizeEndGroup = this.makeGroup(1);
}

MouseoverControls.prototype.add = function(){
	this.protein.upperGroup.appendChild(this.oneEndGroup);
	this.protein.upperGroup.appendChild(this.sizeEndGroup);
	this.place();
}

MouseoverControls.prototype.remove = function(){
	this.protein.upperGroup.removeChild(this.oneEndGroup);
	this.protein.upperGroup.removeChild(this.sizeEndGroup);
}

MouseoverControls.prototype.place = function(){
	this.oneEndGroup.setAttribute("transform", 
				"translate(" + this.protein.getResXwithStickZoom((this.protein.size - 0) + 0.5) + " 0)");
	this.sizeEndGroup.setAttribute("transform", 
				"translate(" + this.protein.getResXwithStickZoom(0.5) + " 0) scale(-1,1)");
}

MouseoverControls.prototype.makeGroup = function(lowerOrUpper){
	var controlGroup = document.createElementNS(xiNET.svgns, "g");
    
    var rotationArrowGroup = document.createElementNS(xiNET.svgns, "g");
	rotationArrowGroup.setAttribute("opacity", "0");
	controlGroup.appendChild(rotationArrowGroup);
	
	var arrow2 =  MouseoverControls.makeTriangle([-20, -15],[0, -15]);
    rotationArrowGroup.appendChild(arrow2);
    var arrow3 =  MouseoverControls.makeTriangle([0, 15],[-20, 15]);
    rotationArrowGroup.appendChild(arrow3);

    //~ var scaleArrowGroup = document.createElementNS(xiNET.svgns, "g");
    //~ var scaleRect = document.createElementNS(xiNET.svgns, "rect");
    //~ d3.select(scaleRect).attr("x", 5).attr("y", -5)
						//~ .attr("width", 40).attr("height", 10);
    //~ controlGroup.appendChild(scaleArrowGroup);
    //~ 
    //~ var arrow1 =  MouseoverControls.makeTriangle([5, -10],[5, 10]);
    //~ arrow1.setAttribute("opacity", "0");
    //~ scaleArrowGroup.appendChild(arrow1);
    //~ this.scaleArrows[lowerOrUpper] = arrow1;
    //~ 
    //~ var arrow4 =  MouseoverControls.makeTriangle([25, -10],[25, 10]);
    //~ arrow4.setAttribute("opacity", "0");
    //~ this.scaleArrows[lowerOrUpper + 2] = arrow4;
    //~ this.scaleArrows[lowerOrUpper + 2].setAttribute("opacity", "0");
    //~ this.scaleArrows[lowerOrUpper + 2].setAttribute("fill", "none");
    //~ scaleArrowGroup.appendChild(arrow4);
    
	var self = this;
     
	rotationArrowGroup.onmouseover = function(evt){
		rotationArrowGroup.setAttribute("opacity", 1);
	}		
	rotationArrowGroup.onmouseout = function(evt){
		//~ if (self.xlv.state !== xiNET.Controller.ROTATING) {		
			rotationArrowGroup.setAttribute("opacity", 0);
		//~ }
	}
    rotationArrowGroup.onmousedown = function(evt) {
		self.xlv.whichRotator = lowerOrUpper;
        self.rotatorMouseDown(evt);
    };  
    
	//~ scaleArrowGroup.onmouseover = function(evt){
		//~ self.scaleArrows[0].setAttribute("opacity", 1);
		//~ self.scaleArrows[1].setAttribute("opacity", 1);
		//~ self.scaleArrows[2].setAttribute("opacity", 1);
		//~ self.scaleArrows[3].setAttribute("opacity", 1);
	//~ }		
	//~ scaleArrowGroup.onmouseout = function(evt){
		//~ self.scaleArrows[0].setAttribute("opacity", 0);
		//~ self.scaleArrows[1].setAttribute("opacity", 0);
		//~ self.scaleArrows[2].setAttribute("opacity", 0);
		//~ self.scaleArrows[3].setAttribute("opacity", 0);
	//~ }
	
    //~ arrow1.onmousedown = function(evt) {
		//~ self.xlv.state = xiNET.Controller.SCALING_PROTEIN;
    //~ };  
    //~ 
  	//~ arrow4.onmouseover = function(evt){
		//~ self.scaleArrows[2].setAttribute("fill", "yellow");
		//~ self.scaleArrows[3].setAttribute("fill", "yellow");
	//~ }		
	//~ arrow4.onmouseout = function(evt){
		//~ self.scaleArrows[2].setAttribute("fill", "none");
		//~ self.scaleArrows[3].setAttribute("fill", "none");
	//~ }
    //~ arrow4.onmousedown = function(evt) {
		//~ self.xlv.state = xiNET.Controller.SCALING_ALL_PROTEINS;
    //~ };  
    
    return controlGroup;
}

MouseoverControls.makeTriangle = function(p1, p2){	
	var g =  document.createElementNS(xiNET.svgns, "g");
	
	var r =  document.createElementNS(xiNET.svgns, "path");
    var p3 = MouseoverControls.rotatePointAboutPoint(p1, p2, 88);
    var p4 = MouseoverControls.rotatePointAboutPoint(p2, p1, -88);
	path = "M " + p1[0] + "," + p1[1] + " L " + p2[0] +"," + p2[1] 
			+ " L " + p2[0] +"," + p2[1] + " L " + p3[0] +"," + p3[1]
			+ " L " + p4[0] +"," + p4[1] + " Z";
	r.setAttribute("d", path);
    //~ r.setAttribute("stroke", "black");
    //~ r.setAttribute("stroke-width", "2");
    //~ r.setAttribute("stroke-linejoin", "round");    
    r.setAttribute("fill", "black");
    r.setAttribute("fill-opacity", 0.5);
    
    var arrow = document.createElementNS(xiNET.svgns, "path");
    var p3 = MouseoverControls.rotatePointAboutPoint(p1, p2, 60);
	path = "M " + p1[0] + "," + p1[1] + " L " + p2[0] +"," + p2[1] 
			+ " L " + p2[0] +"," + p2[1] + " L " + p3[0] +"," + p3[1] + " Z";
	arrow.setAttribute("d", path);
    arrow.setAttribute("stroke", "black");
    arrow.setAttribute("stroke-width", "2");
    arrow.setAttribute("stroke-linejoin", "round");    
    arrow.setAttribute("fill", "yellow");
    arrow.setAttribute("fill-opacity", 0.7);
    
    g.appendChild(r);
    g.appendChild(arrow);
    return g;
}

// http://stackoverflow.com/questions/786472/rotate-a-point-by-an-angle
//~ p'x = cos(theta) * (px-ox) - sin(theta) * (py-oy) + ox
//~ p'y = sin(theta) * (px-ox) + cos(theta) * (py-oy) + oy
MouseoverControls.rotatePointAboutPoint = function(p, o, theta) {
	theta = (theta / 360) * Math.PI * 2;
	var rx = Math.cos(theta) * (p[0]-o[0]) - Math.sin(theta) * (p[1]-o[1]) + o[0];
	var ry = Math.sin(theta) * (p[0]-o[0]) + Math.cos(theta) * (p[1]-o[1]) + o[1];
	return [rx, ry];
}

MouseoverControls.prototype.rotatorMouseDown = function (evt) {
    this.xlv.state = xiNET.Controller.ROTATING;
    this.xlv.dragElement = this.proteinOrPartThereof;
    var p = this.xlv.getEventPoint(evt);// seems to be correct, see above
    var c = this.xlv.mouseToSVG(p.x, p.y);
    return false;
}
