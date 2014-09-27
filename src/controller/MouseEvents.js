//      xiNET interaction viewer
//      Copyright 2013 Rappsilber Laboratory
//
//      This product includes software developed at
//      the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//
//      author: Colin Combe

"use strict";

//static var's signifying Controller's status

var MouseEventCodes = {}

MouseEventCodes.MOUSE_UP = 0;//start state, also set when mouse up on svgElement
MouseEventCodes.PANNING = 1;//set by mouse down on svgElement - left button, no shift or ctrl
MouseEventCodes.DRAGGING = 2;//set by mouse down on Protein or Link
MouseEventCodes.ROTATING = 3;//set by mouse down on Rotator, drag?
MouseEventCodes.SELECTING = 4;//set by mouse down on svgElement- right button or left button shift or ctrl, drag

//listeners also attached to mouse evnts by Interactor (and Rotator) and Link, those consume their events
//mouse down on svgElement must be allowed to propogate (to fire event on Prots/Links)

var initMouseEvents = function() {

    //add listeners
    var self = this;
    this.svgElement.onmousedown = function(evt) {
        self.mouseDown(evt);
    };
    this.svgElement.onmousemove = function(evt) {
        self.mouseMove(evt);
    };
    this.svgElement.onmouseup = function(evt) {
        self.mouseUp(evt);
    };
    // even though we don't use jquery, see:
    // http://stackoverflow.com/questions/4258615/what-is-the-difference-between-jquerys-mouseout-and-mouseleave
    this.svgElement.onmouseout = function(evt) {
        self.hideTooltip(evt);
    };
     
    var mousewheelevt= (/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
    if (document.attachEvent){ //if IE (and Opera depending on user setting) 
        this.svgElement.attachEvent("on"+mousewheelevt, function(evt) {self.mouseWheel(evt);});
    }
    else if (document.addEventListener) { //WC3 browsers
        this.svgElement.addEventListener(mousewheelevt, function(evt) {self.mouseWheel(evt);}, false);
    }
              
    //~ this.marquee = document.createElementNS(Config.svgns, 'rect');
    //~ this.marquee.setAttribute('class', 'marquee');
    //~ this.marquee.setAttribute('fill', 'red');
    
    this.lastMouseUp = new Date().getTime();
}

/**
 * Handle mousedown event.
 */
var mouseDown = function(evt) {
    //prevent default, but allow propogation
    evt.preventDefault();
    //evt.returnValue = false;
    //stop force layout
    if (typeof this.force !== 'undefined' && this.force != null) {
        this.force.stop();
    }

    var p = this.getEventPoint(evt);// seems to be correct, see below
    console.log("dragSTART");
    console.log("this.dragstart", this.mouseToSVG(p.x, p.y));
    this.dragStart = this.mouseToSVG(p.x, p.y);

    var rightClick; //which button has just been raised
    if (evt.which)
        rightClick = (evt.which === 3);
    else if (evt.button)
        rightClick = (evt.button === 2);

    if (evt.ctrlKey === true || evt.shiftKey === true || rightClick) {
//        alert("here");
//        this.state = MouseEventCodes.SELECTING;
////        //      marquee.style.strokeDashoffset=0;
//               this.marquee.setAttribute('x', 100);
//    this.marquee.setAttribute('y', 100);
//    this.marquee.setAttribute('width', 100);
//    this.marquee.setAttribute('height', 100);
//   this.svgElement.appendChild(this.marquee);
// //        this.updateMarquee(this.marquee, this.dragStart);
//////      var offset = 0, marcher = setInterval(function(){
//////        marquee.style.strokeDashoffset = offset--;
//////      },30);
////        //clear selection if ctrl not pressed
////        if (evt.ctrlKey === false) {
////            this.clearSelection();
////        }
    } else {
    this.state = MouseEventCodes.PANNING;
    this.panned = false;
    }
    return false;
};

// dragging/rotation/panning/selecting
var mouseMove = function(evt) {
    this.preventDefaultsAndStopPropagation(evt);
    if (this.initComplete) { // just being cautious
        var p = this.getEventPoint(evt);// seems to be correct, see below
        var c = this.mouseToSVG(p.x, p.y);

        if (this.dragElement != null) { //dragging or rotating
            this.hideTooltip();
            var suspendID = this.svgElement.suspendRedraw(5000);
            var dx = this.dragStart.x - c.x;
            var dy = this.dragStart.y - c.y;

            if (this.state === MouseEventCodes.DRAGGING) {
                // we are currently dragging things around
                var ox, oy, nx, ny;
                if (typeof this.dragElement.x === 'undefined') { // if not an Interactor
                    var nodes = this.dragElement.interactors;
                    var nodeCount = nodes.length;
                    for (var i = 0; i < nodeCount; i++) {
                        var protein = nodes[i];
                        ox = protein.x;
                        oy = protein.y;
                        nx = ox - dx;
                        ny = oy - dy;
                        protein.setPosition(nx, ny);
                        protein.setAllLinkCoordinates();
                    }
                    for (i = 0; i < nodeCount; i++) {
                        nodes[i].setAllLinkCoordinates();
                    }
                } else {
                    //its a protein - drag it TODO: DRAG SELECTED
                    ox = this.dragElement.x;
                    oy = this.dragElement.y;
                    nx = ox - dx;
                    ny = oy - dy;
                    this.dragElement.setPosition(nx, ny);
                    this.dragElement.setAllLinkCoordinates();
                }
                this.dragStart = c;
            }

            else if (this.state === MouseEventCodes.ROTATING) {
                // Distance from mouse x and center of stick.
                var _dx = c.x - this.dragElement.x
                // Distance from mouse y and center of stick.
                var _dy = c.y - this.dragElement.y;
                //see http://en.wikipedia.org/wiki/Atan2#Motivation
                var centreToMouseAngleRads = Math.atan2(_dy, _dx);
                if (this.whichRotator === 0) {
                    centreToMouseAngleRads = centreToMouseAngleRads + Math.PI;
                }
                var centreToMouseAngleDegrees = centreToMouseAngleRads * (360 / (2 * Math.PI));
                this.dragElement.setRotation(centreToMouseAngleDegrees);
                this.dragElement.setAllLinkCoordinates();
            }
            else { //not dragging or rotating yet, maybe we should start
                // don't start dragging just on a click - we need to move the mouse a bit first
                if (Math.sqrt(dx * dx + dy * dy) > (5 * this.z)) {
                    this.state = MouseEventCodes.DRAGGING;

                }
            }
            this.svgElement.unsuspendRedraw(suspendID);
        }

//    else if (this.state === MouseEventCodes.SELECTING) {
//        this.updateMarquee(this.marquee, c);
//    }
        else if (this.state === MouseEventCodes.PANNING) {
            setCTM(this.container, this.container.getCTM().translate(c.x - this.dragStart.x, c.y - this.dragStart.y));
        }
        else {
            this.showTooltip(p);
        }
    }
    return false;
};


// this ends all dragging and rotating
var mouseUp = function(evt) {
    var time = new Date().getTime();
    //console.log("Mouse up: " + evt.srcElement + " " + (time - this.lastMouseUp));
    this.preventDefaultsAndStopPropagation(evt);
    //eliminate some spurious mouse up events
    if ((time - this.lastMouseUp) > 150){
    
        var rightclick, middleclick; //which button has just been raised
        if (evt.which)
            rightclick = (evt.which === 3);
        else if (evt.button)
            rightclick = (evt.button === 2);
        if (evt.which)
            middleclick = (evt.which === 2);
        else if (evt.button)
            middleclick = (evt.button === 1);

        var p = this.getEventPoint(evt);// seems to be correct, see below
        var c = this.mouseToSVG(p.x, p.y);

        var suspendID = this.svgElement.suspendRedraw(5000);

        if (this.dragElement != null) { 
            if (!(this.state === MouseEventCodes.DRAGGING || this.state === MouseEventCodes.ROTATING)) { //not dragging or rotating
                if (rightclick) { // RIGHT click
                    if (typeof this.dragElement.x === 'undefined') {//if not protein or p.group
                        if (this.dragElement.intra) {//if internal link
                            if (this.dragElement.proteinLink)
                                this.dragElement.proteinLink.fromProtein.toggleFlipped();
                        } else {
                            if (this.dragElement.hidden !== undefined) {//if ProteinLink
                                this.dragElement.hidden = true;
                            } else {//its a residue link
                                this.dragElement.proteinLink.hidden = true;
                            }
                            this.dragElement.highlightLine.setAttribute("stroke-opacity", "0");
                            this.checkLinks();
                        }
                    } else {//right click on protein
                        this.dragElement.setParked(!this.dragElement.isParked, c);
                    }
                }
                else if (middleclick) {
                    //can't be used? problem with IE (scroll thingy)
                }
                else { //left click; show matches for link, toggle form for protein, switch stick scale
                    if (typeof this.dragElement.x === 'undefined') { //if not protein
                        //~ this.dragElement.showData();
                    } else if (evt.shiftKey) { //if shift key
                        this.dragElement.switchStickScale(c);
                    } else {
                        if (this.dragElement.form === 0) {
                            this.dragElement.setForm(1, c);
                        } else {
                            this.dragElement.setForm(0, c);
                        }
                    }
                }
                //~ this.checkLinks();
            }
            else if (this.state === MouseEventCodes.ROTATING) {
                //round protein rotation to nearest 5 degrees (looks neater)
                this.dragElement.setRotation(Math.round(this.dragElement.rotation / 5) * 5);
            }
            else {
            } //end of protein drag; do nothing
        }
        else if (rightclick) { //right click on background; show all hidden links
            //~ var links = this.proteinLinks.values();
            //~ var linkCount = links.length;
            //~ for (var l = 0; l < linkCount; l++) {
                //~ var link = links[l];
                //~ link.hidden = false;
            //~ }
            this.checkLinks();
        } else if (/*this.state !== MouseEventCodes.PANNING &&*/ evt.ctrlKey === false) {
            this.clearSelection();
        }

        if (this.state === MouseEventCodes.SELECTING) {
            clearInterval(this.marcher);
            this.svgElement.removeChild(this.marquee);
        }
		this.svgElement.unsuspendRedraw(suspendID);
	}
        
	this.dragElement = null;
	this.whichRotator = -1;
	this.state = MouseEventCodes.MOUSE_UP;

    this.lastMouseUp = time;
    return false;
};


var updateMarquee = function(rect, p1) {
    var p0 = this.dragStart;
    var xs = [p0.x, p1.x].sort(sortByNumber),
            ys = [p0.y, p1.y].sort(sortByNumber);
    rect.setAttribute('x', xs[0]);
    rect.setAttribute('y', ys[0]);
    rect.setAttribute('width', xs[1] - xs[0]);
    rect.setAttribute('height', ys[1] - ys[0]);
}


var sortByNumber = function(a, b) {
    return a - b
}

/**
 * Handle mouse wheel event.
 */
var mouseWheel = function(evt) {
    this.preventDefaultsAndStopPropagation(evt);
    var delta;
    //see http://stackoverflow.com/questions/5527601/normalizing-mousewheel-speed-across-browsers
    if (evt.wheelDelta) {
        delta = evt.wheelDelta / 3600; // Chrome/Safari
    }
    else {
        delta = evt.detail / -90; // Mozilla
    }
    var z = 1 + delta;
    var g = this.container;
    var p = this.getEventPoint(evt);// seems to be correct, see above
    var c = this.mouseToSVG(p.x, p.y);
    var k = this.svgElement.createSVGMatrix().translate(c.x, c.y).scale(z).translate(-c.x, -c.y);
    setCTM(g, g.getCTM().multiply(k));
    this.scale();
    return false;
};

var clearSelection = function() {
    var interactors = this.interactors.values();
    var proteinCount = interactors.length;
    for (var p = 0; p < proteinCount; p++) {
        var prot = interactors[p];
        prot.setSelected(false);
    }
};

//gets mouse position
var getEventPoint = function(evt) {
    var p = this.svgElement.createSVGPoint();
//    var rect = this.container.getBoundingClientRect();
//   p.x = evt.clientX - rect.left;
//    p.y = evt.clientY - rect.top;
    var element = this.svgElement.parentNode;
    var top = 0, left = 0;
    do {
        top += element.offsetTop  || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
   } while(element);
   //TODO: should do equivalent for horizontal scroll also
    top += getScrollTop();
    p.x = evt.pageX - left;
    p.y = evt.pageY - top;
    return p;
};


var getScrollTop = function(){
    if(typeof pageYOffset!= 'undefined'){
        //most browsers except IE before #9
        return pageYOffset;
    }
    else{
        var B= document.body; //IE 'quirks'
        var D= document.documentElement; //IE with doctype
        D= (D.clientHeight)? D: B;
        return D.scrollTop;
    }
}

// transform the mouse-position into a position on the svg
var mouseToSVG = function(x, y) {
    var p = this.svgElement.createSVGPoint();
    p.x = x;
    p.y = y;
    var p = p.matrixTransform(this.container.getCTM().inverse());
    return p;
};

//stop event propogation and defaults; only do what we ask
var preventDefaultsAndStopPropagation = function(evt) {
    if (evt.stopPropagation)
        evt.stopPropagation();
    if (evt.cancelBubble != null)
        evt.cancelBubble = true;
    if (evt.preventDefault)
        evt.preventDefault();
    //~ evt.returnValue = false;
};



/**
 * Sets the current transform matrix of an element.
 */
 var setCTM = function(element, matrix) {
     var s = "matrix(" + matrix.a + "," + matrix.b + "," + matrix.c + "," + matrix.d + "," + matrix.e + "," + matrix.f + ")";
     element.setAttribute("transform", s);
 };

module.exports = {
    initMouseEvents: initMouseEvents,
    mouseDown: mouseDown,
    mouseMove: mouseMove,
    mouseUp: mouseUp,
    updateMarquee: updateMarquee,
    mouseWheel: mouseWheel,
    clearSelection: clearSelection,
    getEventPoint: getEventPoint,
    preventDefaultsAndStopPropagation: preventDefaultsAndStopPropagation,
    setCTM: setCTM,
    getScrollTop: getScrollTop,
    sortByNumber: sortByNumber,
    mouseToSVG: mouseToSVG

}
