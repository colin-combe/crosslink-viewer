// highlight and selection colours are global
// (because all instances of xiNet should use same colours for this)
xinet.highlightColour = new RGBColor("yellow");
xinet.selectedColour = new RGBColor("yellow");

//static var's signifying Controller's status
xinet.Controller.MOUSE_UP = 0;//start state, set when mouse up on svgElement
xinet.Controller.PANNING = 1;//set by mouse down on svgElement - left button, no shift or ctrl
xinet.Controller.DRAGGING = 2;//set by mouse down on Protein or Link
xinet.Controller.ROTATING = 3;//set by mouse down on Rotator, drag?
xinet.Controller.SELECTING = 4;//set by mouse down on svgElement- right button or left button shift or ctrl, drag

//listeners also attached to mouse evnts by Protein (and Rotator) and Link, those consume their events
//mouse down on svgElement must be allowed to propogate (to fire event on Prots/Links)
xinet.Controller.prototype.initMouseEvents = function() {
    //add listeners
    var self = this;
    this.svgElement.onmouseup = function(evt) {
        self.mouseUp(evt);
    };
    this.svgElement.onmousedown = function(evt) {
        self.mouseDown(evt);
    };
    // even though we don't use jquery, see:
    // http://stackoverflow.com/questions/4258615/what-is-the-difference-between-jquerys-mouseout-and-mouseleave
    this.svgElement.onmouseout = function(evt) {
        self.hideTooltip(evt);
    };
    this.svgElement.onmousemove = function(evt) {
        self.mouseMove(evt);
    };
    if (navigator.userAgent.toLowerCase().indexOf('webkit') > -1) {
        //chrome, safari
        //                this.svgElement.addEventListener('mousewheel', self.mouseWheel, false);
        this.svgElement.onmousewheel = function(evt) {
            self.mouseWheel(evt);
        };
    }
    else {
        //others
        this.svgElement.addEventListener('DOMMouseScroll', function(evt) {
            self.mouseWheel(evt);
        }
        , false);
        //        self.svgElement.onscroll = function(evt) { //doesn't work
        //            self.mouseWheel(evt);
        //        };
    }

    this.marquee = document.createElementNS(xinet.svgNS, 'rect');
    this.marquee.setAttribute('class', 'marquee');
    this.marquee.setAttribute('fill', 'red');
}

/**
 * Handle mousedown event.
 */
xinet.Controller.prototype.mouseDown = function(evt) {
    //prevent default, but allow propogation
    if (evt.preventDefault) {
        evt.preventDefault();
    }
    evt.returnValue = false;
    //stop force layout
    if (typeof this.force !== 'undefined' && this.force != null) {
        this.force.stop();
    }

    var p = this.getEventPoint(evt);// seems to be correct, see above
    this.dragStart = this.mouseToSVG(p.x, p.y);

    var rightClick; //which button has just been raised
    if (evt.which)
        rightClick = (evt.which === 3);
    else if (evt.button)
        rightClick = (evt.button === 2);

    if (evt.ctrlKey === true || evt.shiftKey === true || rightClick) {
//        alert("here");
//        this.state = xinet.Controller.SELECTING;
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
    this.state = xinet.Controller.PANNING;
    this.panned = false;
    }
    return false;
};

// dragging/rotation/panning/selecting
xinet.Controller.prototype.mouseMove = function(evt) {
    this.preventDefaultsAndStopPropagation(evt);
    if (this.initComplete) { // just being cautious
        var p = this.getEventPoint(evt);// seems to be correct, see below
        var c = this.mouseToSVG(p.x, p.y);

        if (this.dragElement != null) { //dragging or rotating
            this.hideTooltip();
            var suspendID = this.svgElement.suspendRedraw(5000);
            var dx = this.dragStart.x - c.x;
            var dy = this.dragStart.y - c.y;

            if (this.state === xinet.Controller.DRAGGING) {
                // we are currently dragging things around
                var ox, oy, nx, ny;
                if (typeof this.dragElement.x === 'undefined') { // if not a protein
                    //its a link - drag whole connected subgraph
                    var prot;
                    if (this.dragElement.fromProtein)
                        prot = this.dragElement.fromProtein;
                    else
                        prot = this.dragElement.proteinLink.fromProtein;
                    var prots = this.proteins.values();
                    var protCount = prots.length;
                    for (var p = 0; p < protCount; p++) {
                        prots[p].subgraph = null;
                    }
                    var subgraph = prot.getSubgraph();
                    var nodes = subgraph.nodes.values();
                    var nodeCount = nodes.length;
                    for (var i = 0; i < nodeCount; i++) {
                        var protein = nodes[i];
                        ox = protein.x;
                        oy = protein.y;
                        nx = ox - dx;
                        ny = oy - dy;
                        protein.setPosition(nx, ny);
                        protein.setAllLineCoordinates();
                    }
                    for (i = 0; i < nodeCount; i++) {
                        nodes[i].setAllLineCoordinates();
                    }
                } else {
                    //its a protein - drag it TODO: DRAG SELECTED
                    ox = this.dragElement.x;
                    oy = this.dragElement.y;
                    nx = ox - dx;
                    ny = oy - dy;
                    this.dragElement.setPosition(nx, ny);
                    this.dragElement.setAllLineCoordinates();
                }
                this.dragStart = c;
            }

            else if (this.state === xinet.Controller.ROTATING) {
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
                this.dragElement.setAllLineCoordinates();
            }
            else { //not dragging or rotating yet, maybe we should start
                // don't start dragging just on a click - we need to move the mouse a bit first
                if (Math.sqrt(dx * dx + dy * dy) > (5 * this.z)) {
                    this.state = xinet.Controller.DRAGGING;

                }
            }
            this.svgElement.unsuspendRedraw(suspendID);
        }

//    else if (this.state === xinet.Controller.SELECTING) {
//        this.updateMarquee(this.marquee, c);
//    }
        else if (this.state === xinet.Controller.PANNING) {
            xinet.setCTM(this.container, this.container.getCTM().translate(c.x - this.dragStart.x, c.y - this.dragStart.y));
        }
        else {
            this.showTooltip(p);
        }
    }
    return false;
};

// this ends all dragging and rotating
xinet.Controller.prototype.mouseUp = function(evt) {
    this.preventDefaultsAndStopPropagation(evt);

    var rightclick, middleclick; //which button has just been raised
    if (evt.which)
        rightclick = (evt.which === 3);
    else if (evt.button)
        rightclick = (evt.button === 2);
    if (evt.which)
        middleclick = (evt.which === 2);
    else if (evt.button)
        middleclick = (evt.button === 1);

    var p = this.getEventPoint(evt);// seems to be correct, see above
    var c = this.mouseToSVG(p.x, p.y);

//    var suspendID = this.svgElement.suspendRedraw(5000);

    if (this.dragElement != null) { // mouse up after mouse down on a protein or protein group
        if (!(this.state === xinet.Controller.DRAGGING || this.state === xinet.Controller.ROTATING)) { //not dragging or rotating
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
                    this.dragElement.showID();
                } else if (evt.shiftKey) { //if shift key
                    this.dragElement.switchStickScale(c);
                }
            }
            this.checkLinks();
        }
        else if (this.state === xinet.Controller.ROTATING) {
            //round protein rotation to nearest 5 degrees (looks neater)
            this.dragElement.setRotation(Math.round(this.dragElement.rotation / 5) * 5);
        }
        else {
        } //end of protein drag; do nothing
    }
    else if (rightclick) { //right click on background; show all hidden links
        var links = this.proteinLinks.values();
        var linkCount = links.length;
        for (var l = 0; l < linkCount; l++) {
            var link = links[l];
            link.hidden = false;
        }
        this.checkLinks();
    } else if (this.state !== xinet.Controller.PANNING && evt.ctrlKey === false) {
        this.clearSelection();
    }

    if (this.state === xinet.Controller.SELECTING) {
        clearInterval(this.marcher);
        this.svgElement.removeChild(this.marquee);
    }

//    this.svgElement.unsuspendRedraw(suspendID);

    this.dragElement = null;
    this.whichRotator = -1;
    this.state = xinet.Controller.MOUSE_UP;
    return false;
};


xinet.Controller.prototype.updateMarquee = function(rect, p1) {
    var p0 = this.dragStart;
    var xs = [p0.x, p1.x].sort(sortByNumber),
            ys = [p0.y, p1.y].sort(sortByNumber);
    rect.setAttribute('x', xs[0]);
    rect.setAttribute('y', ys[0]);
    rect.setAttribute('width', xs[1] - xs[0]);
    rect.setAttribute('height', ys[1] - ys[0]);
}


function sortByNumber(a, b) {
    return a - b
}

/**
 * Handle mouse wheel event.
 */
xinet.Controller.prototype.mouseWheel = function(evt) {
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
    xinet.setCTM(g, g.getCTM().multiply(k));
    this.scale();
    return false;
};

xinet.Controller.prototype.clearSelection = function() {
    //~ var proteins = this.proteins.values();
    //~ var proteinCount = proteins.length;
    //~ for (var p = 0; p < proteinCount; p++) {
        //~ var prot = proteins[p];
        //~ prot.setSelected(false);
    //~ }

	var things = this.selected.values();
    var count = things.length;
    for (var t = 0; t < count; t++) {
        var thing = things[t];
        thing.setSelected(false);
    }

};

//gets mouse position
xinet.Controller.prototype.getEventPoint = function(evt) {
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
    p.x = evt.pageX - left;
    p.y = evt.pageY - top;
    return p;
};

// transform the mouse-position into a position on the svg
xinet.Controller.prototype.mouseToSVG = function(x, y) {
    var p = this.svgElement.createSVGPoint();
    p.x = x;
    p.y = y;
    var p = p.matrixTransform(this.container.getCTM().inverse());
    return p;
};

//stop event propogation and defaults; only do what we ask
xinet.Controller.prototype.preventDefaultsAndStopPropagation = function(evt) {
    if (evt.stopPropagation)
        evt.stopPropagation();
    if (evt.cancelBubble != null)
        evt.cancelBubble = true;
    if (evt.preventDefault)
        evt.preventDefault();
    evt.returnValue = false;
};

/**
 * Sets the current transform matrix of an element.
 */
xinet.setCTM = function(element, matrix) {
    var s = "matrix(" + matrix.a + "," + matrix.b + "," + matrix.c + "," + matrix.d + "," + matrix.e + "," + matrix.f + ")";
    element.setAttribute("transform", s);
};
