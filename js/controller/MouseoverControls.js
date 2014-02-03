// MouseoverControls.js

function MouseoverControls(protein, xlvController) {
    var self = this;
    this.xlv = xlvController;
    this.protein = protein;
    
    this.oneEndGroup = this.makeGroup(0);
	this.sizeEndGroup = this.makeGroup(1);
    
    
	//~ if (upperOrLower === 0) {
		//~ this.group.setAttribute("transform","scale(-1,1)");
	//~ }
	//~ 
  
	//~ 
	//~ this.arrow1.onmouseover = function(evt){
		//~ self.arrow1.setAttribute("opacity", 1);
	//~ }		
	//~ this.arrow1.onmouseout = function(evt){
		//~ self.arrow1.setAttribute("opacity", 0);
	//~ }
    //~ this.arrow1.onmousedown = function(evt) {
        //~ //self.rotatorMouseDown(evt);
    //~ };   
    		
    //set the events for it
    //~ this.svg.onmouseover = function(evt) {
        //~ self.rotatorMouseOver(evt);
    //~ };
    //~ this.svg.onmouseout = function(evt) {
        //~ self.rotatorMouseOut(evt);
    //~ };
    //~ this.svg.onmousedown = function(evt) {
        //~ self.rotatorMouseDown(evt);
    //~ };    
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
				"translate(" + this.protein.getResXwithStickZoom(this.protein.size + 0.5) + " 0)");
	this.sizeEndGroup.setAttribute("transform", 
				"translate(" + this.protein.getResXwithStickZoom(0.5) + " 0) scale(-1,1)");
}

MouseoverControls.prototype.makeGroup = function(lowerOrUpper){
	var controlGroup = document.createElementNS(xiNET.svgns, "g");
    
    var arrow1 =  MouseoverControls.makeTriangle([5, -10],[5, 10]);
    arrow1.setAttribute("opacity", "0");
    controlGroup.appendChild(arrow1);
    
    var rotationArrowGroup = document.createElementNS(xiNET.svgns, "g");
	rotationArrowGroup.setAttribute("opacity", "0");
	controlGroup.appendChild(rotationArrowGroup);
	
	var arrow2 =  MouseoverControls.makeTriangle([-20, -15],[0, -15]);
    rotationArrowGroup.appendChild(arrow2);
    var arrow3 =  MouseoverControls.makeTriangle([0, 15],[-20, 15]);
    rotationArrowGroup.appendChild(arrow3);

   //~ var arrow4 =  Rotator.makeTriangle([25, -10],[25, 10]);
    //~ this.rotatorSymbol.appendChild(arrow4);	
	
	var self = this;
	
     
	rotationArrowGroup.onmouseover = function(evt){
		rotationArrowGroup.setAttribute("opacity", 1);
	}		
	rotationArrowGroup.onmouseout = function(evt){
		rotationArrowGroup.setAttribute("opacity", 0);
	}
    rotationArrowGroup.onmousedown = function(evt) {
		self.xlv.whichRotator = lowerOrUpper;
        self.rotatorMouseDown(evt);
    };  
    
    return controlGroup;
}

MouseoverControls.makeTriangle = function(p1, p2){	
    var arrow = document.createElementNS(xiNET.svgns, "path");
    var path =  MouseoverControls.getEquilateralTrianglePath(p1, p2);
    arrow.setAttribute("d", path);
    arrow.setAttribute("stroke", "black");
    arrow.setAttribute("stroke-width", "2");
    arrow.setAttribute("stroke-linejoin", "round");    
    arrow.setAttribute("fill", "yellow");
    arrow.setAttribute("fill-opacity", 0.7);
    return arrow;
}

MouseoverControls.getEquilateralTrianglePath = function(p1, p2){
	var p3 = MouseoverControls.rotatePointAboutPoint(p1, p2, 60);
	return "M " + p1[0] + "," + p1[1] + " L " + p2[0] +"," + p2[1] 
			+ " L " + p2[0] +"," + p2[1] + " L " + p3[0] +"," + p3[1] + " Z";
}

// http://stackoverflow.com/questions/786472/rotate-a-point-by-an-angle
//~ p'x = cos(theta) * (px-ox) - sin(theta) * (py-oy) + ox
//~ p'y = sin(theta) * (px-ox) + cos(theta) * (py-oy) + oy
//ok, lets use arrays with x in cell 0 and y in cell 1
MouseoverControls.rotatePointAboutPoint = function(p, o, theta) {
	theta = (theta / 360) * Math.PI * 2;
	var rx = Math.cos(theta) * (p[0]-o[0]) - Math.sin(theta) * (p[1]-o[1]) + o[0];
	var ry = Math.sin(theta) * (p[0]-o[0]) + Math.cos(theta) * (p[1]-o[1]) + o[1];
	return [rx, ry];
}

//~ MouseoverControls.prototype.rotatorMouseOver = function (evt) {
    //~ this.rotationArrowGroup.setAttribute("opacity", "1");
//~ }
//~ 
//~ MouseoverControls.prototype.rotatorMouseOut = function (evt) {
	//~ if (this.xlv.state !== xiNET.Controller.ROTATING) {
		//~ this.rotatorArrowGroup.setAttribute("opacity", "0");
	//~ }
//~ }

MouseoverControls.prototype.rotatorMouseDown = function (evt) {
    this.xlv.state = xiNET.Controller.ROTATING;
    this.xlv.dragElement = this.proteinOrPartThereof;
    var p = this.xlv.getEventPoint(evt);// seems to be correct, see above
    var c = this.xlv.mouseToSVG(p.x, p.y);
    return false;
}
