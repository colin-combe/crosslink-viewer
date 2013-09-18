xinet.highlightColour=new RGBColor("yellow");xinet.selectedColour=new RGBColor("orange");xinet.Controller.MOUSE_UP=0;xinet.Controller.PANNING=1;xinet.Controller.DRAGGING=2;xinet.Controller.ROTATING=3;xinet.Controller.SELECTING=4;xinet.Controller.prototype.initMouseEvents=function(){var self=this;this.svgElement.onmouseup=function(evt){self.mouseUp(evt);};this.svgElement.onmousedown=function(evt){self.mouseDown(evt);};this.svgElement.onmouseout=function(evt){self.hideTooltip(evt);};this.svgElement.onmousemove=function(evt){self.mouseMove(evt);};if(navigator.userAgent.toLowerCase().indexOf('webkit')>-1){this.svgElement.onmousewheel=function(evt){self.mouseWheel(evt);};}
else{this.svgElement.addEventListener('DOMMouseScroll',function(evt){self.mouseWheel(evt);},false);}
this.marquee=document.createElementNS(xinet.svgNS,'rect');this.marquee.setAttribute('class','marquee');this.marquee.setAttribute('fill','red');}
xinet.Controller.prototype.mouseDown=function(evt){if(evt.preventDefault){evt.preventDefault();}
evt.returnValue=false;if(typeof this.force!=='undefined'&&this.force!=null){this.force.stop();}
var p=this.getEventPoint(evt);this.dragStart=this.mouseToSVG(p.x,p.y);var rightClick;if(evt.which)
rightClick=(evt.which===3);else if(evt.button)
rightClick=(evt.button===2);if(evt.ctrlKey===true||evt.shiftKey===true||rightClick){}else{this.state=xinet.Controller.PANNING;this.panned=false;}
return false;};xinet.Controller.prototype.mouseMove=function(evt){this.preventDefaultsAndStopPropagation(evt);if(this.initComplete){var p=this.getEventPoint(evt);var c=this.mouseToSVG(p.x,p.y);if(this.dragElement!=null){this.hideTooltip();var suspendID=this.svgElement.suspendRedraw(5000);var dx=this.dragStart.x-c.x;var dy=this.dragStart.y-c.y;if(this.state===xinet.Controller.DRAGGING){var ox,oy,nx,ny;if(typeof this.dragElement.x==='undefined'){var prot;if(this.dragElement.fromProtein)
prot=this.dragElement.fromProtein;else
prot=this.dragElement.proteinLink.fromProtein;var prots=this.proteins.values();var protCount=prots.length;for(var p=0;p<protCount;p++){prots[p].subgraph=null;}
var subgraph=prot.getSubgraph();var nodes=subgraph.nodes.values();var nodeCount=nodes.length;for(var i=0;i<nodeCount;i++){var protein=nodes[i];ox=protein.x;oy=protein.y;nx=ox-dx;ny=oy-dy;protein.setPosition(nx,ny);protein.setAllLineCoordinates();}
for(i=0;i<nodeCount;i++){nodes[i].setAllLineCoordinates();}}else{ox=this.dragElement.x;oy=this.dragElement.y;nx=ox-dx;ny=oy-dy;this.dragElement.setPosition(nx,ny);this.dragElement.setAllLineCoordinates();}
this.dragStart=c;}
else if(this.state===xinet.Controller.ROTATING){var _dx=c.x-this.dragElement.x
var _dy=c.y-this.dragElement.y;var centreToMouseAngleRads=Math.atan2(_dy,_dx);if(this.whichRotator===0){centreToMouseAngleRads=centreToMouseAngleRads+Math.PI;}
var centreToMouseAngleDegrees=centreToMouseAngleRads*(360/(2*Math.PI));this.dragElement.setRotation(centreToMouseAngleDegrees);this.dragElement.setAllLineCoordinates();}
else{if(Math.sqrt(dx*dx+dy*dy)>(5*this.z)){this.state=xinet.Controller.DRAGGING;}}
this.svgElement.unsuspendRedraw(suspendID);}
else if(this.state===xinet.Controller.PANNING){xinet.setCTM(this.container,this.container.getCTM().translate(c.x-this.dragStart.x,c.y-this.dragStart.y));}
else{this.showTooltip(p);}}
return false;};xinet.Controller.prototype.mouseUp=function(evt){this.preventDefaultsAndStopPropagation(evt);var rightclick,middleclick;if(evt.which)
rightclick=(evt.which===3);else if(evt.button)
rightclick=(evt.button===2);if(evt.which)
middleclick=(evt.which===2);else if(evt.button)
middleclick=(evt.button===1);var p=this.getEventPoint(evt);var c=this.mouseToSVG(p.x,p.y);if(this.dragElement!=null){if(!(this.state===xinet.Controller.DRAGGING||this.state===xinet.Controller.ROTATING)){if(rightclick){if(typeof this.dragElement.x==='undefined'){if(this.dragElement.intra){if(this.dragElement.proteinLink)
this.dragElement.proteinLink.fromProtein.toggleFlipped();}else{if(this.dragElement.hidden!==undefined){this.dragElement.hidden=true;}else{this.dragElement.proteinLink.hidden=true;}
this.dragElement.highlightLine.setAttribute("stroke-opacity","0");this.checkLinks();}}else{this.dragElement.setParked(!this.dragElement.isParked,c);}}
else if(middleclick){}
else{if(typeof this.dragElement.x==='undefined'){this.dragElement.showID();}else if(evt.shiftKey){this.dragElement.switchStickScale(c);}}
this.checkLinks();}
else if(this.state===xinet.Controller.ROTATING){this.dragElement.setRotation(Math.round(this.dragElement.rotation/5)*5);}
else{}}
else if(rightclick){var links=this.proteinLinks.values();var linkCount=links.length;for(var l=0;l<linkCount;l++){var link=links[l];link.hidden=false;}
this.checkLinks();}else if(this.state!==xinet.Controller.PANNING&&evt.ctrlKey===false){this.clearSelection();}
if(this.state===xinet.Controller.SELECTING){clearInterval(this.marcher);this.svgElement.removeChild(this.marquee);}
this.dragElement=null;this.whichRotator=-1;this.state=xinet.Controller.MOUSE_UP;return false;};xinet.Controller.prototype.updateMarquee=function(rect,p1){var p0=this.dragStart;var xs=[p0.x,p1.x].sort(sortByNumber),ys=[p0.y,p1.y].sort(sortByNumber);rect.setAttribute('x',xs[0]);rect.setAttribute('y',ys[0]);rect.setAttribute('width',xs[1]-xs[0]);rect.setAttribute('height',ys[1]-ys[0]);}
function sortByNumber(a,b){return a-b}
xinet.Controller.prototype.mouseWheel=function(evt){this.preventDefaultsAndStopPropagation(evt);var delta;if(evt.wheelDelta){delta=evt.wheelDelta/3600;}
else{delta=evt.detail/-90;}
var z=1+delta;var g=this.container;var p=this.getEventPoint(evt);var c=this.mouseToSVG(p.x,p.y);var k=this.svgElement.createSVGMatrix().translate(c.x,c.y).scale(z).translate(-c.x,-c.y);xinet.setCTM(g,g.getCTM().multiply(k));this.scale();return false;};xinet.Controller.prototype.clearSelection=function(){var proteins=this.proteins.values();var proteinCount=proteins.length;for(var p=0;p<proteinCount;p++){var prot=proteins[p];prot.setSelected(false);}};xinet.Controller.prototype.getEventPoint=function(evt){var p=this.svgElement.createSVGPoint();var obj=this.svgElement.parentNode;var curleft=0,curtop=0;if(obj.offsetParent){do{curleft+=obj.offsetLeft;curtop+=obj.offsetTop;}while(obj=obj.offsetParent);}
var x=evt.pageX-curleft;var y=evt.pageY-curtop;p.x=x;p.y=y;return p;};xinet.Controller.prototype.mouseToSVG=function(x,y){var p=this.svgElement.createSVGPoint();p.x=x;p.y=y;var p=p.matrixTransform(this.container.getCTM().inverse());return p;};xinet.Controller.prototype.preventDefaultsAndStopPropagation=function(evt){if(evt.stopPropagation)
evt.stopPropagation();if(evt.cancelBubble!=null)
evt.cancelBubble=true;if(evt.preventDefault)
evt.preventDefault();evt.returnValue=false;};xinet.setCTM=function(element,matrix){var s="matrix("+matrix.a+","+matrix.b+","+matrix.c+","+matrix.d+","+matrix.e+","+matrix.f+")";element.setAttribute("transform",s);};