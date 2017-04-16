//  xiNET
//
//  Colin Combe, Martin Graham, Rappsilber Laboratory, 2015
//
//  CrosslinkViewerBB.js

    var CLMS = CLMS || {};
    //crosslink-viewer's javascript namespace
    CLMS.xiNET = {}; //TODO? change to CLMS.view.xiNET

    CLMS.xiNET.CrosslinkViewer = Backbone.View.extend({
        events: {
            "change .clickToSelect": "setClickModeSelect",
            "change .clickToPan": "setClickModePan",
            "click .saveLayout": "saveLayout",
            "click .resetLayout": "reset",
            "click .downloadButton": "downloadSVG"
        },

        setClickModeSelect: function (){
            this.clickModeIsSelect = true;
        },

        setClickModePan: function (){
            this.clickModeIsSelect = false;
        },

        initialize: function () {

            this.clickModeIsSelect = false;

            //avoids prob with 'save - web page complete'
            d3.select(this.el).selectAll("*").remove();

            d3.select(this.el).html(
                "<div class='xinetControls'>" +
                    "<div class='xinetButtonBar'>" +
                        "<label><span>PAN</span><input type='radio' name='clickMode' class='clickToPan' checked></label>" +
                        "<label><span>SELECT</span><input type='radio' name='clickMode' class='clickToSelect'></label>" +
                        "<button class='btn btn-1 btn-1a resetLayout' >Auto Layout</button>" +
                        "<button class='btn btn-1 btn-1a saveLayout'>Save Layout</button>" +
                        "<button class='btn btn-1 btn-1a downloadButton'>Export Graphic</button>" +
                    "</div>" +
                "</div>");


            //create SVG elemnent
            this.svgElement = d3.select(this.el).append("div").style("height", "100%").append("svg").node();//document.createElementNS(CLMS.xiNET.svgns, "svg");
            this.svgElement.setAttribute("width", "100%");
            this.svgElement.setAttribute("height", "100%");
			this.svgElement.setAttribute("style", "pointer-events:visible");
			// disable right click context menu (we wish to put right click to our own purposes)
			//~ this.svgElement.oncontextmenu = function() {
				//~ return false;
			//~ };
            //add listeners
            var self = this;
            this.svgElement.onmousedown = function(evt) { self.mouseDown(evt); };
            this.svgElement.onmousemove = function(evt) { self.mouseMove(evt); };
            this.svgElement.onmouseup = function(evt) { self.mouseUp(evt); };
            //this.svgElement.onmouseout = function(evt) { } //self.hideTooltip(evt); };
            var mousewheelevt= (/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
            if (document.attachEvent){ //if IE (and Opera depending on user setting)
                this.svgElement.attachEvent("on"+mousewheelevt, function(evt) {self.mouseWheel(evt);});
            }
            else if (document.addEventListener) { //WC3 browsers
                this.svgElement.addEventListener(mousewheelevt, function(evt) {self.mouseWheel(evt);}, false);
            }
            this.lastMouseUp = new Date().getTime();
            this.svgElement.ontouchstart = function(evt) { self.touchStart(evt); };
            this.svgElement.ontouchmove = function(evt) { self.touchMove(evt); };
            this.svgElement.ontouchend = function(evt) { self.touchEnd(evt); };

            
            // various SVG groups needed
            this.wrapper = document.createElementNS(CLMS.xiNET.svgns, "g"); //in effect, a hack for fact firefox doesn't support getCTM on svgElement
            var identM = this.svgElement.createSVGMatrix()
            var s = "matrix(" + identM.a + "," + identM.b + "," + identM.c + "," + identM.d + "," + identM.e + "," + identM.f + ")";
            this.wrapper.setAttribute("transform", s);
            this.container = document.createElementNS(CLMS.xiNET.svgns, "g");
            this.container.setAttribute("id", "container");
			this.wrapper.appendChild(this.container);
            this.p_pLinksWide = document.createElementNS(CLMS.xiNET.svgns, "g");
            this.p_pLinksWide.setAttribute("id", "p_pLinksWide");
            this.container.appendChild(this.p_pLinksWide);

            this.proteinLower = document.createElementNS(CLMS.xiNET.svgns, "g");
            this.proteinLower.setAttribute("id", "proteinLower");
            this.container.appendChild(this.proteinLower);

            this.highlights = document.createElementNS(CLMS.xiNET.svgns, "g");
            this.highlights.setAttribute("class", "highlights");//proteins also contain highlight groups
            this.container.appendChild(this.highlights);

            this.res_resLinks = document.createElementNS(CLMS.xiNET.svgns, "g");
            this.res_resLinks.setAttribute("id", "res_resLinks");
            this.container.appendChild(this.res_resLinks);

            this.p_pLinks = document.createElementNS(CLMS.xiNET.svgns, "g");
            this.p_pLinks.setAttribute("id", "p_pLinks");
            this.container.appendChild(this.p_pLinks);

            this.proteinUpper = document.createElementNS(CLMS.xiNET.svgns, "g");
            this.proteinUpper.setAttribute("id", "proteinUpper");
            this.container.appendChild(this.proteinUpper);

            this.svgElement.appendChild(this.wrapper);
            
            //var is a d3 selection unlike those above
            this.selectionRectSel = d3.select(this.svgElement).append("rect")
					.attr("x", 10)
                    .attr("y", 10)
                    .attr("width", 50)
                    .attr("height", 100)
                    .attr("stroke", "red")
                    .attr("stroke-dasharray","4,4")
                    .attr("stroke-dashoffset","32")
                    .style("animation", "dash 2s linear infinite")
                    .attr("fill", "none")
                    .attr("display", "none")
                    ;
                    
            this.clear();

            this.update();



            this.listenTo (this.model, "filteringDone", this.render);    // any property changing in the filter model means rerendering this view
            this.listenTo (this.model, "hiddenChanged", this.hiddenParticipantsChanged);
            this.listenTo (this.model, "change:highlights", this.highlightsChanged);
            this.listenTo (this.model, "change:selection", this.selectionChanged);
            this.listenTo (this.model, "change:linkColourAssignment", this.linkColourChanged);
            this.listenTo (this.model, "currentColourModelChanged", this.linkColourChanged); // mjg - when current colour scale changes its internal values
            this.listenTo (this.model.get("annotationTypes"), "change:shown", this.setAnnotations);
            this.listenTo (this.model.get("alignColl"), "bulkAlignChange", this.setAnnotations);
            this.listenTo (this.model, "change:selectedProtein", this.selectedParticipantsChanged);
            this.listenTo (this.model.get("clmsModel"), "change:matches", this.update);
            this.render();
            this.linkColourChanged();
            return this;
        },

        clear: function () {

            if (this.cola) { // cola layout
                this.cola.stop();
            }
            this.cola = null;
            d3.select(this.p_pLinksWide).selectAll("*").remove();
            d3.select(this.highlights).selectAll("*").remove();
            d3.select(this.p_pLinks).selectAll("*").remove();
            d3.select(this.res_resLinks).selectAll("*").remove();
            d3.select(this.proteinLower).selectAll("*").remove();
            d3.select(this.proteinUpper).selectAll("*").remove();

            //~ this.panning = false;
            this.dragElement = null;
            //~ this.dragging = false;
            this.dragStart = {};
            //~ this.rotating = false;

            this.renderedProteins = new Map();
            this.renderedCrossLinks = []; // new Map();
            this.renderedP_PLinks = new Map();

            this.layout = null;
            this.z = 1;

            this.resetZoom();
            this.state = CLMS.xiNET.Controller.MOUSE_UP;

        },

        linkColourChanged: function() {
            var colourAssignment = this.model.get("linkColourAssignment");
            var renderedCrossLinksArr = this.renderedCrossLinks;
            var rclCount = renderedCrossLinksArr.length;
            for (var rcl = 0 ; rcl < rclCount; rcl++) {
				var rLink = renderedCrossLinksArr[rcl];
                if (rLink.shown) {
                    var c = colourAssignment.getColour(rLink.crossLink);
                    rLink.line.setAttribute("stroke",c);
                }
            }
        },

        render: function() {
			if (this.cola == null) { 
				if (this.model.get("clmsModel").get("xiNETLayout")) {
					this.loadLayout(this.model.get("clmsModel").get("xiNETLayout"));
				} else {
					this.autoLayout();
				}
			}
			
			CLMS.xiNET.P_PLink.maxNoCrossLinks = 0;
            var pLinksArr = Array.from(this.renderedP_PLinks.values());
            var plCount = pLinksArr.length;
            for (var pl = 0; pl < plCount; pl++) {
                var p_pCrossLinkCount = pLinksArr[pl].check();
				if (p_pCrossLinkCount > CLMS.xiNET.P_PLink.maxNoCrossLinks) {
                    CLMS.xiNET.P_PLink.maxNoCrossLinks = p_pCrossLinkCount;
                }
            }
			for (pl = 0; pl < plCount; pl++) {
                pLinksArr[pl].update();
            }
			
            var cLinksArr = this.renderedCrossLinks;
            var clCount = cLinksArr.length;
            for (var cl = 0; cl < clCount; cl++) {
                cLinksArr[cl].check();
            }
        },

        update: function () {
			if (this.cola) { // cola layout
                this.cola.stop();
            }
            this.cola = null;
            
            var participantsArr = Array.from(this.model.get("clmsModel").get("participants").values());
            var pCount = participantsArr.length;
            for (var p =0; p < pCount; p++) {
				var participant = participantsArr[p];
                if (participant.is_decoy == false) {
                    var newProt = new CLMS.xiNET.RenderedProtein(participant, this);
                    this.renderedProteins.set(participant.id, newProt);

                    var protSize = participant.size;
                    if (protSize > CLMS.xiNET.RenderedProtein.MAXSIZE){
                        CLMS.xiNET.RenderedProtein.MAXSIZE = protSize;
                    }
                }
            }
            var width = this.svgElement.parentNode.clientWidth;
            CLMS.xiNET.RenderedProtein.UNITS_PER_RESIDUE = ((width / 2)
                    - CLMS.xiNET.RenderedProtein.LABELMAXLENGTH) / CLMS.xiNET.RenderedProtein.MAXSIZE;


			var renderedParticipantArr = Array.from(this.renderedProteins.values());
			var rpCount = renderedParticipantArr.length;
			for (var rp = 0 ; rp < rpCount; rp++) {
				var prot = renderedParticipantArr[rp];
				prot.init();//prot.init() is just calling prot.setForm(prot.form))
				this.proteinLower.appendChild(prot.lowerGroup);
				this.proteinUpper.appendChild(prot.upperGroup);
			}
                
                
			//~ if (pCount < 3) {
				//~ var renderedParticipantsArr = Array.from(this.renderedProteins.values());
				//~ var rpCount =  renderedParticipantsArr.length;
				//~ for (var rp = 0; rp < rpCount; rp++ ) {
					//~ var renderedParticipant = renderedParticipantsArr[rp];
					//~ if (renderedParticipant.hidden == false) {//todo: appears to be not working
						//~ renderedParticipant.busy = false;
						//~ renderedParticipant.setForm(1);
					//~ } 
				//~ }
			//~ }
			
			this.renderedCrossLinks = [];
			
			var crossLinksArr = Array.from(this.model.get("clmsModel").get("crossLinks").values());
            var clCount = crossLinksArr.length; 
            var clmsModel = this.model.get("clmsModel");          
            for(var cl =0 ; cl < clCount; cl++){
				var crossLink = crossLinksArr[cl];
                if (clmsModel.isDecoyLink(crossLink) == false) {
					var renderedCrossLink = new CLMS.xiNET.RenderedCrossLink(crossLink, this);
                    //this.renderedCrossLinks.set(crossLink.id, renderedCrossLink);
					this.renderedCrossLinks.push(renderedCrossLink);

                    var p_pId = crossLink.fromProtein.id + "-" + crossLink.toProtein.id;
                    var p_pLink = this.renderedP_PLinks.get(p_pId);
                    if (typeof p_pLink == 'undefined') {
                        p_pLink = new CLMS.xiNET.P_PLink(p_pId, crossLink, this);
                        this.renderedP_PLinks.set(p_pId, p_pLink);
                    }
                    p_pLink.crossLinks.push(crossLink);
                }
            }
            //this.autoLayout();
        },

        reset: function() {
            this.resetZoom();
            this.autoLayout();
        },

        resetZoom: function () {
            this.container.setAttribute("transform", "scale(1)");
            this.scale();
            var proteins = this.renderedProteins.values();
            var proteinCount = proteins.length;
            for (var p = 0; p < proteinCount; p++) {
                var prot = proteins[p];
                prot.stickZoom = 1;
                prot.scale();
            }
        },

        scale: function () {
            this.z = this.container.getCTM().inverse().a;

            var renderedParticipantArr = Array.from(this.renderedProteins.values());
			var rpCount = renderedParticipantArr.length;
			for (var rp = 0 ; rp < rpCount; rp++) {
				var prot = renderedParticipantArr[rp];
				prot.setPosition(prot.x, prot.y); // this rescales the protein
                if (prot.form !== 0)
                    prot.setAllLineCoordinates();
            }
			
			var renderedCrossLinksArr = this.renderedCrossLinks;
            var rclCount = renderedCrossLinksArr.length;
            for (var rcl = 0 ; rcl < rclCount; rcl++) {
				var renderedCrossLink = renderedCrossLinksArr[rcl];
                if (renderedCrossLink.shown && renderedCrossLink.crossLink.isSelfLink() === false) {
					if (renderedCrossLink.line) {//TODO: er, whys this here? looks like a hack filtering out never rendered crossLinks that somehow have shown = true?
						renderedCrossLink.line.setAttribute("stroke-width", this.z * CLMS.xiNET.linkWidth);
						renderedCrossLink.highlightLine.setAttribute("stroke-width", this.z * 10);
						if (renderedCrossLink.crossLink.ambiguous === true) {
							renderedCrossLink.dashedLine(true); //rescale spacing of dashes
						}
					}
                }
            }

            var p_pLinksArr = Array.from(this.renderedP_PLinks.values());
            var plCount = p_pLinksArr.length;
            for (var pl = 0; pl < plCount; pl++) {
            	var p_pLink = p_pLinksArr[pl];
                if ((p_pLink.renderedFromProtein != p_pLink.renderedToProtein)
                    && p_pLink.renderedFromProtein.form === 0 && p_pLink.renderedToProtein.form === 0) {
                    if (p_pLink.line) {
						p_pLink.line.setAttribute("stroke-width", this.z * CLMS.xiNET.linkWidth);
						p_pLink.highlightLine.setAttribute("stroke-width", this.z * 10);
						p_pLink.thickLine.setAttribute("stroke-width", this.z * p_pLink.w);
						if (p_pLink.ambiguous) {
							p_pLink.dashedLine(true); //rescale spacing of dashes
						}
					}
                }
            }
        },

        setAnnotations: function () {
			var annotationTypes = this.model.get("annotationTypes");
			var renderedParticipants = Array.from(this.renderedProteins.values());
			var rpLen = renderedParticipants.length;
			for (var p = 0; p < rpLen; p++ ) {
				renderedParticipants[p].setPositionalFeatures();
            }
        },

        setCTM: function(element, matrix) {
            var s = "matrix(" + matrix.a + "," + matrix.b + "," + matrix.c + "," + matrix.d + "," + matrix.e + "," + matrix.f + ")";
            element.setAttribute("transform", s);
        },

        /**
         * Handle mousedown event.
         */
        mouseDown: function(evt) {
            //prevent default, but allow propogation
            evt.preventDefault();
            //stop force layout
            if (typeof this.cola !== 'undefined' && this.cola != null) {
                this.cola.stop();
            }

            this.dragStart = evt;
            this.state = CLMS.xiNET.Controller.SELECT_PAN;
            this.mouseMoved = false;
            
            //var toHighlight = [] // todo we dont have synched participant highlighting
            this.idsToSelect = [];                 
        },

        // dragging/rotation/SELECT_PAN/selecting
        mouseMove: function(evt) {
            var p = this.getEventPoint(evt);// seems to be correct, see below
            var c = p.matrixTransform(this.container.getCTM().inverse());
            var ds = this.getEventPoint(this.dragStart).matrixTransform(this.container.getCTM().inverse());
			var dx = ds.x - c.x;
			var dy = ds.y - c.y;
			if (Math.sqrt(dx * dx + dy * dy) > (5 * this.z)) {
				this.mouseMoved = true;
			}  
            if (this.dragElement != null) { //dragging or rotating
				if (this.state === CLMS.xiNET.Controller.DRAGGING) {
                    // we are currently dragging things around
                    var ox, oy, nx, ny;
                    if (this.dragElement.participant) {
                        //its a protein - drag it, or drag all selcted if it is selected
                        var toDrag;
                        if (this.dragElement.isSelected === false) {
                            toDrag = [this.dragElement.participant.id];
                        }
                        else {
                            toDrag = Array.from(this.model.get("selectedProtein").keys());
                        }
                        
                        for (var d = 0; d < toDrag.length; d++) {
                            var renderedProtein = this.renderedProteins.get(toDrag[d]);
                            ox = renderedProtein.x;
                            oy = renderedProtein.y;
                            nx = ox - dx;
                            ny = oy - dy;
                            renderedProtein.setPosition(nx, ny);
                            renderedProtein.setAllLineCoordinates();
                        }
                    }
                    this.dragStart = evt;
                }

                else if (this.state === CLMS.xiNET.Controller.ROTATING) {
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
                        this.state = CLMS.xiNET.Controller.DRAGGING;

                    }
                }
            }
            else if (this.state === CLMS.xiNET.Controller.SELECT_PAN) {
				if (this.clickModeIsSelect) {
					//SELECT
					var ds = this.getEventPoint(this.dragStart).matrixTransform(this.wrapper.getCTM().inverse());
					var dx = c.x - ds.x;
					var dy = c.y - ds.y;
					
					var sx = p.x - ds.x;
					var sy = p.y - ds.y;

					var rectX = ds.x;
					if (sx < 0) {
						rectX += sx;
					}
					var rectY = ds.y;
					if (sy < 0) {
						rectY += sy;
					}
					
					this.selectionRectSel.attr("display", "inline")
						.attr("x", rectX)
						.attr("y", rectY)
						.attr("width", Math.abs(sx))
						.attr("height", Math.abs(sy));
                    ;
                    
                    var renderedParticipantArr = Array.from(this.renderedProteins.values());
					var rpCount = renderedParticipantArr.length;
					for (var rp = 0 ; rp < rpCount; rp++) {
						var renderedParticipant = renderedParticipantArr[rp];
						if (renderedParticipant.participant.hidden !== true) {
							var svgRect = this.svgElement.createSVGRect();
							svgRect.x = rectX;
							svgRect.y = rectY;
							svgRect.width = Math.abs(sx);
							svgRect.height = Math.abs(sy);
							//~ d3.select(svgRect).attr("x", rectX)
								//~ .attr("y", rectY)
								//~ .attr("width", Math.abs(sx))
								//~ .attr("height", Math.abs(sy));
							var intersects = this.svgElement.getIntersectionList(svgRect, renderedParticipant.upperGroup );
							//~ var intersects = this.svgElement.checkIntersection(
									//~ renderedParticipant.upperGroup.getBBox(), this.selectionRectSel.node());
							if (intersects.length > 0) {
								renderedParticipant.showHighlight(true);
								this.idsToSelect.push(renderedParticipant.participant.id);
							} else {
								renderedParticipant.showHighlight(false);
							}
						}
					
					}
                    
										
				} else {
					//PAN
					var ds = this.getEventPoint(this.dragStart).matrixTransform(this.container.getCTM().inverse());
					var dx = c.x - ds.x;
					var dy = c.y - ds.y;
				
					this.setCTM(this.container, 
								this.container.getCTM()
								.translate(dx, dy)
								);
					this.dragStart = evt;
  				}                    
  				
          }

  
        },


        // this ends all dragging and rotating
        mouseUp: function(evt) {
            var time = new Date().getTime();
            //console.log("Mouse up: " + evt.srcElement + " " + (time - this.lastMouseUp));
            this.preventDefaultsAndStopPropagation(evt);
            
            //remove selection rect, may not be shown but just do this now
            this.selectionRectSel.attr("display", "none");
            
            //eliminate some spurious mouse up events
            if ((time - this.lastMouseUp) > 150){

                var p = this.getEventPoint(evt);
                var c = p.matrixTransform(this.container.getCTM().inverse());

                if (this.dragElement != null) {
                    if (!(this.state === CLMS.xiNET.Controller.DRAGGING || this.state === CLMS.xiNET.Controller.ROTATING)) { //not dragging or rotating
                            if (this.dragElement.x) { //if protein
								if (evt.ctrlKey || evt.shiftKey) {
									this.dragElement.switchStickScale(c);
								}else {
									if (this.dragElement.form === 1) {
										this.dragElement.setForm(0, c);
									} else {
										this.dragElement.setForm(1, c);
									}
								}
                            } // else flip selflink
                    }
                    else if (this.state === CLMS.xiNET.Controller.ROTATING) {
                        //round protein rotation to nearest 5 degrees (looks neater)
                        this.dragElement.setRotation(Math.round(this.dragElement.rotation / 5) * 5);
                    }
                    else {
                    } //end of protein drag; do nothing
                }
                else if (!this.mouseMoved) { //unselct crosslinks
					this.model.calcMatchingCrosslinks ("selection", [], false, add);
					if (!this.clickModeIsSelect) {
						this.model.setSelectedProteins([]);
					}
                }
                
				if (this.clickModeIsSelect) {
					var add = evt.ctrlKey || evt.shiftKey;
					this.model.setSelectedProteins(this.idsToSelect, add);
				}
				
				this.dragElement = null;
				this.whichRotator = -1;
				this.state = CLMS.xiNET.Controller.MOUSE_UP;           
            
            }


            this.lastMouseUp = time;
            return false;
        },

        /**
         * Handle mouse wheel event.
         */
        mouseWheel: function(evt) {
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
            var p = this.getEventPoint(evt);
            var c = p.matrixTransform(g.getCTM().inverse());
            var k = this.svgElement.createSVGMatrix().translate(c.x, c.y).scale(z).translate(-c.x, -c.y);
            this.setCTM(g, g.getCTM().multiply(k));
            this.scale();
            return false;
        },
        
       getEventPoint: function(evt) {
            var p = this.svgElement.createSVGPoint();
            var element = this.svgElement.parentNode;
            var top = 0, left = 0;
            do {
                top += element.offsetTop  || 0;
                left += element.offsetLeft || 0;
                element = element.offsetParent;
           } while(element);
            p.x = evt.clientX - left;//CLMSUI.utils.crossBrowserElementX(evt);//, this.svgElement);
            p.y = evt.clientY - top;//CLMSUI.utils.crossBrowserElementY(evt);//, this.svgElement);
            return p;
        },   

        //stop event propogation and defaults; only do what we ask
        preventDefaultsAndStopPropagation: function(evt) {
            if (evt.stopPropagation)
                evt.stopPropagation();
            if (evt.cancelBubble != null)
                evt.cancelBubble = true;
            if (evt.preventDefault)
                evt.preventDefault();
            // evt.returnValue = false;
        },

        saveLayout: function () {
            var myJSONText = JSON.stringify(Array.from(this.renderedProteins.values()), null, '\t');
            var viewportJSON = "";//ProtNet.svgElement.getAttribute("viewBox");
            var layout = myJSONText.replace(/\\u0000/gi, '');
            //+ "\n{co:" + this.cutOff +"}";

            var xmlhttp = new XMLHttpRequest();
            var url = "./php/saveLayout.php";
            var sid = CLMSUI.compositeModelInst.get("clmsModel").get("sid");
            var params =  "sid=" + sid + "&layout="+encodeURIComponent(layout.replace(/[\t\r\n']+/g,""));
            xmlhttp.open("POST", url, true);
            //Send the proper header information along with the request
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlhttp.onreadystatechange = function() {//Call a function when the state changes.
                if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    console.log("Saved layout " + xmlhttp.responseText, true);
                }
            };
            xmlhttp.send(params);
        },

        loadLayout: function(layout) {
            for (var prot in layout) {
                var protLayout = layout[prot];
                var protein = this.renderedProteins.get(protLayout.id);
                if (protein !== undefined) {
                    this.proteinLower.appendChild(protein.lowerGroup);
                    this.proteinUpper.appendChild(protein.upperGroup);
                    protein.setPosition(protLayout["x"], protLayout["y"]);
                    if (typeof protLayout['rot'] !== 'undefined') {
                        protein.rotation = protLayout["rot"] - 0;
                    }
                    //some tidying required
                    if (protLayout["form"]) {
                        if (protLayout["stickZoom"]) {
                            protein.stickZoom = protLayout["stickZoom"];
                            d3.select(protein.peptides).attr("transform", "scale(" + (protein.stickZoom) + ", 1)");
                        }
                        protein.form = protLayout["form"] - 0;
                        // protein.form =1;
                        // protein.scale();
                        if (protein.form === 1){
                             protein.toStick();
                        }
                        //~ //protein.setRotation(protein.rotation);
                    }
                     //~ protein.form = 1;
                    protein.init();

                    if (protLayout["flipped"]) { //TODO: fix this
                        protein.toggleFlipped(); // change to setFlipped(protLayout["flipped"])
                    }
                }
                else {console.log("!");}
            }

            // incase proteins have been added which are not included in layout -
            var renderedParticipantArr = Array.from(this.renderedProteins.values());
			var rpCount = renderedParticipantArr.length;
			for (var rp = 0 ; rp < rpCount; rp++) {
				var prot = renderedParticipantArr[rp];
			    if (prot.x == null) {
                    prot.init()
                    prot.setPosition(20, 20);
                    this.proteinLower.appendChild(prot.lowerGroup);
                    this.proteinUpper.appendChild(prot.upperGroup);
                }
            }

            // layout info for links (hidden / specified colour)
            //~ for (var l in this.layout.links) {
                //~ var linkState = this.layout.links[l];
                //~ var link = this.proteinLinks.get(l);
                //~ if (link !== undefined) {
                    //~ if (typeof linkState.hidden !== 'undefined')
                        //~ link.hidden = linkState.hidden;
                    //~ var c = linkState.colour;
                    //~ if (typeof c !== 'undefined') {
                        //~ var resLinks = link.residueLinks.values();
                        //~ var resLinkCount = resLinks.length;
                        //~ for (var r = 0; r < resLinkCount; r++) {
                            //~ var resLink = resLinks[r];
                            //~ resLink.initSVG();
                            //~ resLink.line.setAttribute('stroke', 'rgb(' + c.r + ',' + c.g + ',' + c.b + ')');
                        //~ }
                    //~ }
                //~ }
            //~ }
        },

        autoLayout: function() {
            if (this.cola) {
                this.cola.stop();
            } 
            
			var nodes = []; // not hidden nodes
            var renderedParticipantArr = Array.from(this.renderedProteins.values());
			var rpCount = renderedParticipantArr.length;
			for (var rp = 0 ; rp < rpCount; rp++) {
				var renderedParticipant = renderedParticipantArr[rp];
				if (renderedParticipant.participant.hidden === false) {
					nodes.push(renderedParticipant);
				}
			}			
            
			this.cola = cola.d3adaptor().avoidOverlaps(true).nodes(nodes);
                    
            //~ var nodeIds =  Array.from(this.renderedProteins.keys());
            var links = new Map();

            var filteredCrossLinks = this.model.getFilteredCrossLinks();
            var clCount = filteredCrossLinks.length;
            for(var cl = 0; cl < clCount; ++cl){
				var crossLink = filteredCrossLinks[cl];
                //visible, non-self cross-links only
                if (crossLink.isSelfLink() === false) {
                    var fromId = crossLink.fromProtein.id;
                    var toId = crossLink.toProtein.id;
                    var linkId = fromId + "-" + toId;
                    if (!links.has(linkId)){
                        //~ var source = nodeIds.indexOf(fromId);
                        //~ var target = nodeIds.indexOf(toId);
                        var linkObj = {};
                        linkObj.source = this.renderedProteins.get(crossLink.fromProtein.id);
                        linkObj.target = this.renderedProteins.get(crossLink.toProtein.id);
                        linkObj.id = linkId;
                        links.set(linkId, linkObj);
                    }
                }
            }

			var bBox = this.svgElement.getBoundingClientRect();
			var width = bBox.width;
            var height = bBox.height;
            var k = 30;//Math.sqrt((width * height ) / (this.renderedProteins.size * this.renderedProteins.size));
			console.log("autolayout link length:",k);
            
            var linkArr = Array.from(links.values());
			
			this.cola.size([width, height]).links(linkArr);

            var self = this;
           
            this.cola.symmetricDiffLinkLengths(k).on("tick", function(e) {
                var nodesArr = self.cola.nodes(); // these nodes are our RenderedProteins
                var nCount = nodesArr.length;
                for (var n = 0; n < nCount; n++) {
					var node = nodesArr[n];
					var offsetX = node.x;// - node.upperGroup.getBBox().x;
                    var offsetY = node.y ;//- node.upperGroup.getBBox().y;
                    node.setPosition(offsetX, offsetY);
                    node.setAllLineCoordinates();
                }
            });
            this.cola.start(10, 15, 20);
        },

        downloadSVG: function () {
            var svg = CLMSUI.utils.getSVG(d3.select(this.el).select("svg"));
            download(svg, 'application/svg', 'xiNET-output.svg');
        },

		highlightsChanged: function () {
            var pLinksArr = Array.from(this.renderedP_PLinks.values());
            var plCount = pLinksArr.length;
            for (var pl = 0; pl < plCount; pl++) {
                pLinksArr[pl].showHighlight(false);
            }

			//TODO - structure could be improved here (if removePeptides didn't remove all hightlighted pepides from protien)
            var renderedCrossLinks = this.renderedCrossLinks;
            var rclCount = renderedCrossLinks.length;
	        for (var rcl =0; rcl < rclCount; rcl++) {
				renderedCrossLinks[rcl].showHighlight(false);
			}

			var highlightedCrossLinks = this.model.get("highlights");

            for (var rcl =0; rcl < rclCount; rcl++) {
                var renderedCrossLink = renderedCrossLinks[rcl];
				if (highlightedCrossLinks.indexOf(renderedCrossLink.crossLink) != -1) {
					
					if (renderedCrossLink.renderedFromProtein.form == 1
						|| renderedCrossLink.renderedToProtein.form == 1) {
						renderedCrossLink.showHighlight(true, true);
					} else {
						var p_pLink = this.renderedP_PLinks.get(
							renderedCrossLink.renderedFromProtein.participant.id + "-" + renderedCrossLink.renderedToProtein.participant.id);
						p_pLink.showHighlight(true, true);
					}
				}
				// can't have this here, it calls remove Peptides which removes ALL highlighted pep's from protein
				// so need peptide removing loop before
				//~ else {
					//~ renderedCrossLink.showHighlight(false);
				//~ }
            }    
            return this;
        },

        selectionChanged: function () {
            var pLinksArr = Array.from(this.renderedP_PLinks.values());
            var plCount = pLinksArr.length;
            for (var pl = 0; pl < plCount; pl++) {
                pLinksArr[pl].setSelected(false);
            }

            var selectedCrossLinks = this.model.get("selection");
            var renderedCrossLinks = this.renderedCrossLinks;
            var rclCount = renderedCrossLinks.length;
            for (var rcl =0; rcl < rclCount; rcl++) {
                var renderedCrossLink = renderedCrossLinks[rcl];
                if (selectedCrossLinks.indexOf(renderedCrossLink.crossLink) != -1) {
					renderedCrossLink.setSelected(true);
					var p_pLink = this.renderedP_PLinks.get(
						renderedCrossLink.renderedFromProtein.participant.id + "-" + renderedCrossLink.renderedToProtein.participant.id);
					p_pLink.setSelected(true);
				}else {
					renderedCrossLink.setSelected(false);
				}
            }
            return this;
        },

        selectedParticipantsChanged: function () {
            var renderedParticipantArr = Array.from(this.renderedProteins.values());
			var rpCount = renderedParticipantArr.length;
			for (var rp = 0 ; rp < rpCount; rp++) {
				var renderedParticipant = renderedParticipantArr[rp];
			    renderedParticipant.setSelected(false);
            }
            var selectedParticipantsArr = Array.from(this.model.get("selectedProtein").values());
            var spCount = selectedParticipantsArr.length
            for (var sp =0; sp < spCount; sp++ ) {
                var renderedParticipant = this.renderedProteins.get(selectedParticipantsArr[sp].id);
                renderedParticipant.setSelected(true);
            }
            return this;
        },

        hiddenParticipantsChanged: function () {
            var renderedParticipantArr = Array.from(this.renderedProteins.values());
			var rpCount = renderedParticipantArr.length;
			for (var rp = 0 ; rp < rpCount; rp++) {
				var renderedParticipant = renderedParticipantArr[rp];
			    renderedParticipant.setHidden(renderedParticipant.participant.hidden);
            }
            return this;
        },
        
    });

CLMS.xiNET.svgns = "http://www.w3.org/2000/svg";// namespace for svg elements
CLMS.xiNET.linkWidth = 1.3;// default line width
CLMS.xiNET.homodimerLinkWidth = 1.3;// have considered varying this line width
// highlight and selection colours are global
// (because all instances of CLMS.xiNET should use same colours for this)
CLMS.xiNET.highlightColour = new RGBColor("#fdc086");
CLMS.xiNET.selectedColour = new RGBColor("#ffff99");
CLMS.xiNET.defaultSelfLinkColour = new RGBColor("#9970ab");
CLMS.xiNET.defaultInterLinkColour = new RGBColor("#35978f");
CLMS.xiNET.homodimerLinkColour = new RGBColor("#a50f15");

//static var's signifying Controller's status - TOD: get rid of all this
CLMS.xiNET.Controller = {};
CLMS.xiNET.Controller.MOUSE_UP = 0;//start state, also set when mouse up on svgElement
CLMS.xiNET.Controller.SELECT_PAN = 1;//set by mouse down on svgElement - left button, no shift or ctrl
CLMS.xiNET.Controller.DRAGGING = 2;//set by mouse down on Protein or Link
CLMS.xiNET.Controller.ROTATING = 3;//set by mouse down on CLMS.xiNET.Rotator, drag?
CLMS.xiNET.Controller.SCALING_PROTEIN = 4;//set by mouse down on CLMS.xiNET.Rotator, drag?
CLMS.xiNET.Controller.SCALING_ALL_PROTEINS = 5;//set by mouse down on CLMS.xiNET.Rotator, drag?
CLMS.xiNET.Controller.SELECTING = 6;//set by mouse down on svgElement- right button or left button shift or ctrl, drag
