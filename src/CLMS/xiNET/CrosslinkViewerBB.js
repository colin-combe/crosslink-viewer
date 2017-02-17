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

        initialize: function (viewOptions) {

            var defaultOptions = {};
            this.options = _.extend(defaultOptions, viewOptions.myOptions);

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

            this.initProteins();

            var crossLinks = this.model.get("clmsModel").get("crossLinks").values();
            
            for(var crossLink of crossLinks){
                if (crossLink.matches_pp[0].match.is_decoy == false && crossLink.toProtein) {
            
                    var renderedCrossLink = new CLMS.xiNET.RenderedCrossLink(crossLink, this);
                    this.renderedCrossLinks.set(crossLink.id, renderedCrossLink);

                    var p_pId = crossLink.fromProtein.id + "-" + crossLink.toProtein.id;
                    var p_pLink = this.renderedP_PLinks.get(p_pId);
                    if (typeof p_pLink == 'undefined') {
                        p_pLink = new CLMS.xiNET.P_PLink(p_pId, crossLink, this);
                        this.renderedP_PLinks.set(p_pId, p_pLink);
                    }
                    p_pLink.crossLinks.push(crossLink);
                }
            }
			
            for (var p_pLink of this.renderedP_PLinks.values()) {
                var p_pCrossLinkCount = p_pLink.crossLinks.length;
                if (p_pCrossLinkCount > CLMS.xiNET.P_PLink.maxNoCrossLinks) {
                    CLMS.xiNET.P_PLink.maxNoCrossLinks = p_pCrossLinkCount;
                }
            }

            if (this.model.get("clmsModel").get("xiNETLayout")) {
                this.loadLayout(this.model.get("clmsModel").get("xiNETLayout"));
            } else {
                var proteins = this.renderedProteins.values();
                for (var prot of proteins) {
                    prot.init();
                    this.proteinLower.appendChild(prot.lowerGroup);
                    this.proteinUpper.appendChild(prot.upperGroup);
                }
                this.autoLayout();
            }

            this.listenTo (this.model, "filteringDone", this.render);    // any property changing in the filter model means rerendering this view
            this.listenTo (this.model, "hiddenChanged", this.hiddenParticipantsChanged);
            this.listenTo (this.model, "change:highlights", this.highlightsChanged);
            this.listenTo (this.model, "change:selection", this.selectionChanged);
            this.listenTo (this.model, "change:linkColourAssignment", this.linkColourChanged);
            this.listenTo (this.model, "currentColourModelChanged", this.linkColourChanged); // mjg - when current colour scale changes its internal values
            this.listenTo (this.model.get("annotationTypes"), "change:shown", this.setAnnotations);
            this.listenTo (this.model, "change:selectedProtein", this.selectedParticipantsChanged);
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
            this.renderedCrossLinks = new Map();
            this.renderedP_PLinks = new Map();

            this.layout = null;
            this.z = 1;
            this.scores = null;

            this.resetZoom();
            this.state = CLMS.xiNET.Controller.MOUSE_UP;

        },

        linkColourChanged: function() {
            var colourAssignment = this.model.get("linkColourAssignment");
            var renderedLinks = this.renderedCrossLinks.values();
            for (var rLink of renderedLinks) {
                if (rLink.shown) {
                    var c = colourAssignment.getColour(rLink.crossLink);
                    rLink.line.setAttribute("stroke",c);
                }
            }
        },

        checkLinks: function() {

            var  pLinks = this.renderedP_PLinks.values();
            for (var pLink of pLinks) {
                pLink.check();
            }

            var  cLinks = this.renderedCrossLinks.values();
            for (var cLink of cLinks) {
                cLink.check();
            }

        },

        initProteins: function () {
            var interactors = this.model.get("clmsModel").get("participants").values();
            for (var interactor of interactors) {
                if (interactor.is_decoy == false) {
                    var newProt = new CLMS.xiNET.RenderedProtein(interactor, this);
                    this.renderedProteins.set(interactor.id, newProt);

                    var protSize = interactor.size;
                    if (protSize > CLMS.xiNET.RenderedProtein.MAXSIZE){
                        CLMS.xiNET.RenderedProtein.MAXSIZE = protSize;
                    }
                }
            }
            var width = this.svgElement.parentNode.clientWidth;
            CLMS.xiNET.RenderedProtein.UNITS_PER_RESIDUE = ((width / 2)
                    - CLMS.xiNET.RenderedProtein.LABELMAXLENGTH) / CLMS.xiNET.RenderedProtein.MAXSIZE;
            var prots = this.renderedProteins.values();
            var protCount = prots.length;

            if (protCount < 3) {
                 for (var j =0; j < protCount; j++){
                     prots[j].busy = false;
                     prots[j].setForm(1);
                }
            }
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

            var proteins = this.renderedProteins.values();
            for (var prot of proteins) {
                prot.setPosition(prot.x, prot.y); // this rescales the protein
                if (prot.form !== 0)
                    prot.setAllLineCoordinates();
            }

            for (var renderedCrossLink of this.renderedCrossLinks.values()) {
                if (renderedCrossLink.shown && renderedCrossLink.crossLink.isSelfLink() === false) {
					//TODO: hmmm
					if (renderedCrossLink.line) {
						renderedCrossLink.line.setAttribute("stroke-width", this.z * CLMS.xiNET.linkWidth);
						renderedCrossLink.highlightLine.setAttribute("stroke-width", this.z * 10);
						if (renderedCrossLink.crossLink.ambiguous === true) {
							renderedCrossLink.dashedLine(true); //rescale spacing of dashes
						}
					}
                }
            }

            for (var p_pLink of this.renderedP_PLinks.values()) {
                if ((p_pLink.renderedFromProtein != p_pLink.renderedToProtein)
                    && p_pLink.renderedFromProtein.form === 0 && p_pLink.renderedToProtein.form === 0) {
                    //TODO: hmmm
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
			for (var prot of this.renderedProteins.values()) {
                var featuresShown = [];
                //here we need to add the aligned region annotatiion, if they're selected
				
				//add uniprot features
				if (prot.participant.uniprot) {
					for (var feature of prot.participant.uniprot.features) {
						var annotationTypeId = feature.category + "-" + feature.type
						var filtered = this.model.get("annotationTypes").filter({id:annotationTypeId})
						var annotationType = filtered[0];
						if (annotationType.get("shown") === true) {
							featuresShown.push(feature);
						}
					}
				}
				//set positional features, aka annotated regions 
				prot.setPositionalFeatures(featuresShown);
            }
            var self = this;

            for (var mol of self.renderedProteins.values()) {
                for (a = 0; a < mol.annotations.length; a++) {
                    var anno = mol.annotations[a];
                    var c = CLMSUI.domainColours(anno.category + "-" + anno.type);
                    anno.pieSlice.setAttribute("fill", c);
                    anno.pieSlice.setAttribute("stroke", c);
                    anno.colouredRect.setAttribute("fill", c);
                    anno.colouredRect.setAttribute("stroke", c);
                }
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

            //var p = this.getEventPoint(evt);
            this.dragStart = evt;//this.mouseToSVG(p.x, p.y);
            this.state = CLMS.xiNET.Controller.SELECT_PAN;
            this.panned = false;
            
            //var toHighlight = [] // oops we dont have synched participant highlighting
            this.idsToSelect = [];                 
        },

        // dragging/rotation/SELECT_PAN/selecting
        mouseMove: function(evt) {
            var p = this.getEventPoint(evt);// seems to be correct, see below
            var c = p.matrixTransform(this.container.getCTM().inverse());//this.mouseToSVG(p.x, p.y);
            
            if (this.dragElement != null) { //dragging or rotating
				var ds = this.getEventPoint(this.dragStart).matrixTransform(this.container.getCTM().inverse());
                var dx = ds.x - c.x;
				var dy = ds.y - c.y;
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
                            toDrag = this.model.get("selectedProtein").keys();
                        }
                        for (interactorId of toDrag) {
                            var renderedProtein = this.renderedProteins.get(interactorId);
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
                    
                    for (renderedParticipant of this.renderedProteins.values()) {
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
            var add = evt.ctrlKey || evt.shiftKey;
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
                            }
                    }
                    else if (this.state === CLMS.xiNET.Controller.ROTATING) {
                        //round protein rotation to nearest 5 degrees (looks neater)
                        this.dragElement.setRotation(Math.round(this.dragElement.rotation / 5) * 5);
                    }
                    else {
                    } //end of protein drag; do nothing
                }

                else if (/*this.state !== xiNET.Controller.SELECT_PAN &&*/ evt.ctrlKey === false) {
                    if (this.clickModeIsSelect) {
						//this.model.set("selection", this.toSelect);
						this.model.setSelectedProteins(this.idsToSelect, add);
                 

                                //~ } else {
                                    //~ var add = evt.ctrlKey || evt.shiftKey;
                                    //~ this.model.setSelectedProteins([this.dragElement.participant.id], add);
                                    //~ this.model.calcMatchingCrosslinks ("selection", this.dragElement.participant.crossLinks, false, add);
                                //~ }
					}
					//hmmm...
					if (this.idsToSelect.length === 0 && add === false) {
						this.model.calcMatchingCrosslinks ("selection", [], false, add);
					}
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
            var p = this.getEventPoint(evt);// seems to be correct, see above
            var c = p.matrixTransform(this.container.getCTM().inverse());
            var k = this.svgElement.createSVGMatrix().translate(c.x, c.y).scale(z).translate(-c.x, -c.y);
            this.setCTM(g, g.getScreenCTM().multiply(k));
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
            var proteinIter = this.renderedProteins.values();
            for (var prot of proteinIter) {
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
            for (var renderedParticipant of this.renderedProteins.values()) {
				if (renderedParticipant.participant.hidden === false) {
					nodes.push(renderedParticipant);
				}
			}			
            
			this.cola = cola.d3adaptor().avoidOverlaps(true).nodes(nodes);
                    
            var nodeIds =  Array.from(this.renderedProteins.keys());
            var links = new Map();

            var filteredCrossLinks = this.model.filteredNotDecoyNotLinearCrossLinks;//get("clmsModel").get("crossLinks").values();
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
                var nodes = self.cola.nodes(); // these nodes are our RenderedProteins
                for (var node of nodes) {
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

        render: function () {
            console.log ("re rendering cross-link viewer");
            this.checkLinks();
            return this;
        },

        highlightsChanged: function () {
            for (var renderedCrossLink of this.renderedCrossLinks.values()) {
                renderedCrossLink.showHighlight(false);
            }
            for (var p_pLink of this.renderedP_PLinks.values()) {
                p_pLink.showHighlight(false);
            }
            var crossLinks = this.model.get("highlights");
            for (var crossLink of crossLinks) {
                var renderedCrossLink = this.renderedCrossLinks.get(crossLink.id);
                if (renderedCrossLink.renderedFromProtein.form == 1
                    || renderedCrossLink.renderedToProtein.form == 1) {
                    renderedCrossLink.showHighlight(true, true);
                } else {
                    var p_pLink = this.renderedP_PLinks.get(
                        renderedCrossLink.renderedFromProtein.participant.id + "-" + renderedCrossLink.renderedToProtein.participant.id);
                    p_pLink.showHighlight(true, true);
                }
            }
            return this;
        },

        selectionChanged: function () {
            for (var renderedCrossLink of this.renderedCrossLinks.values()) {
                renderedCrossLink.setSelected(false);
            }
            for (var p_pLink of this.renderedP_PLinks.values()) {
                p_pLink.setSelected(false);
            }
            var crossLinks = this.model.get("selection");
            for (var crossLink of crossLinks) {
                var renderedCrossLink = this.renderedCrossLinks.get(crossLink.id);
                renderedCrossLink.setSelected(true);
                var p_pLink = this.renderedP_PLinks.get(
                    renderedCrossLink.renderedFromProtein.participant.id + "-" + renderedCrossLink.renderedToProtein.participant.id);
                p_pLink.setSelected(true);
            }
            return this;
        },

        selectedParticipantsChanged: function () {
            for (var renderedInteractor of this.renderedProteins.values()) {
                renderedInteractor.setSelected(false);
            }
            var selectedInteractors = this.model.get("selectedProtein").values();
            for (var interactor of selectedInteractors) {
                var renderedInteractor = this.renderedProteins.get(interactor.id);
                renderedInteractor.setSelected(true);
            }
            return this;
        },

        hiddenParticipantsChanged: function () {
            for (var renderedInteractor of this.renderedProteins.values()) {
                renderedInteractor.setHidden(renderedInteractor.participant.hidden);
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
