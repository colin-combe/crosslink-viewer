//  xiNET
//
//  Colin Combe, Martin Graham, Rappsilber Laboratory, 2015
//
//  CrosslinkViewerBB.js

    var CLMS = CLMS || {};
    //crosslink-viewer's javascript namespace
    CLMS.xiNET = {}; //TODO? change to CLMS.view.xiNET

    CLMS.xiNET.CrosslinkViewer = Backbone.View.extend({

        initialize: function (viewOptions) {

            var defaultOptions = {};
            this.options = _.extend(defaultOptions, viewOptions.myOptions);

            //avoids prob with 'save - web page complete'
            d3.select(this.el).selectAll("*").remove();

            //create SVG elemnent
            this.svgElement = document.createElementNS(CLMS.xiNET.svgns, "svg");
            this.svgElement.setAttribute("width", "100%");
            this.svgElement.setAttribute("height", "100%");
            // disable right click context menu (we wish to put right click to our own purposes)
            this.svgElement.oncontextmenu = function() {
                return false;
            };

            //add listeners
            var self = this;
            this.svgElement.onmousedown = function(evt) { self.mouseDown(evt); };
            this.svgElement.onmousemove = function(evt) { self.mouseMove(evt); };
            this.svgElement.onmouseup = function(evt) { self.mouseUp(evt); };
            this.svgElement.onmouseout = function(evt) { } //self.hideTooltip(evt); };
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

            //add SVG element to this.el
            this.el.appendChild(this.svgElement);

            // filled background needed, else cannot click/drag background
            // size is that of large monitor, potentially needs to be bigger coz browser can be zoomed
            // TODO: dynamically resize background to match screen bounding box
            var background = document.createElementNS(CLMS.xiNET.svgns, "rect");
            background.setAttribute("id", "background_fill");
            background.setAttribute("x", 0);
            background.setAttribute("y", 0);
            background.setAttribute("width", 2560 * 2);
            background.setAttribute("height", 2048 * 2);
            background.setAttribute("fill-opacity", "1");
            background.setAttribute("fill", "#FFFFFF");
            this.svgElement.appendChild(background);

            // various SVG groups needed
            this.container = document.createElementNS(CLMS.xiNET.svgns, "g");
            this.container.setAttribute("id", "container");

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

            this.svgElement.appendChild(this.container);

            this.clear();

            this.initProteins();

            var crossLinks = this.model.get("clmsModel").get("crossLinks").values();
            for(var crossLink of crossLinks){

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

            for (p_pLink of this.renderedP_PLinks.values()) {
                var p_pCrossLinkCount = p_pLink.crossLinks.length;
                if (p_pCrossLinkCount > CLMS.xiNET.P_PLink.maxNoCrossLinks) {
                    CLMS.xiNET.P_PLink.maxNoCrossLinks = p_pCrossLinkCount;
                }
            }

            if (this.options.layout != null) {
                this.loadLayout(this.options.layout);
            } else {
                var proteins = this.renderedProteins.values();
                for (var prot of proteins) {
                    prot.init();
                    this.proteinLower.appendChild(prot.lowerGroup);
                    this.proteinUpper.appendChild(prot.upperGroup);
                }
                this.autoLayout();
            }

            this.listenTo (this.model.get("interactors"), "change", this.dataChanged);    // any property changing in the filter model means rerendering this view
            this.listenTo (this.model.get("matches"), "change", this.dataChanged);    // any property changing in the filter model means rerendering this view
            this.listenTo (this.model.get("filterModel"), "change", this.render);    // any property changing in the filter model means rerendering this view
            //~ this.listenTo (this.model.get("rangeModel"), "change:scale", this.relayout);
            this.listenTo (this.model, "change:highlights", this.highlightsChanged);
            this.listenTo (this.model, "change:selection", this.selectionChanged);
            this.listenTo (this.model, "change:linkColourAssignment", this.linkColourChanged);
            this.render();
            this.linkColourChanged();
        },

        clear: function () {

            if (this.force) { // d3 force directed layout
                this.force.stop();
            }
            this.force = null;
            d3.select(this.p_pLinksWide).selectAll("*").remove();
            d3.select(this.highlights).selectAll("*").remove();
            d3.select(this.p_pLinks).selectAll("*").remove();
            d3.select(this.res_resLinks).selectAll("*").remove();
            d3.select(this.proteinLower).selectAll("*").remove();
            d3.select(this.proteinUpper).selectAll("*").remove();

            this.panning = false;
            this.dragElement = null;
            this.dragging = false;
            this.dragStart = {};
            this.rotating = false;

            this.renderedProteins = new Map();
            this.renderedCrossLinks = new Map();
            this.renderedP_PLinks = new Map();

            this.maxBlobRadius = 30;
            //~ CLMS.xiNET.RenderedProtein.MAXSIZE = 100; **??

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
                    var c = colourAssignment(rLink.crossLink);
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
            var interactors = this.model.get("clmsModel").get("interactors").values();
            CLMS.xiNET.RenderedProtein.MAXSIZE = 0;
            for (var interactor of interactors) {

                var newProt = new CLMS.xiNET.RenderedProtein(interactor, this);
                this.renderedProteins.set(interactor.id, newProt);

                var protSize = interactor.size;
                if (protSize > CLMS.xiNET.RenderedProtein.MAXSIZE){
                    CLMS.xiNET.RenderedProtein.MAXSIZE = protSize;
                }
            }
            //this.maxBlobRadius = Math.sqrt(Protein.MAXSIZE / Math.PI);
            var width = this.svgElement.parentNode.clientWidth;
            CLMS.xiNET.RenderedProtein.UNITS_PER_RESIDUE = ((width / 2)
                    - CLMS.xiNET.RenderedProtein.LABELMAXLENGTH) / CLMS.xiNET.RenderedProtein.MAXSIZE;
            var prots = this.renderedProteins.values();
            var protCount = prots.length;

            //~ if (protCount < 3) {
                //~ for (var j =0; j < protCount; j++){
                    //~ prots[j].busy = false;
                    //~ prots[j].setForm(1);
                //~ }
            //~ }
            if (this.annotationSet){
                this.setAnnotations(this.annotationSet);
            }
            else {
                this.setAnnotations('CUSTOM');
            }
        },

        reset: function() {
            this.resetZoom();
            var proteins = this.renderedProteins.values();
            for (var prot of proteins) {
                if (prot.form === 1) {
                    prot.setForm(0);
                }
            }
            this.autoLayout();
        },

        resetZoom: function () {
            this.container.setAttribute("transform", "scale(1)");
            this.scale();
            //~ var proteins = this.renderedProteins.values();
            //~ var proteinCount = proteins.length;
            //~ for (var p = 0; p < proteinCount; p++) {
                //~ var prot = proteins[p];
                //~ prot.stickZoom = 1;
                //~ prot.scale();
            //~ }
        },

        scale: function () {
            this.z = this.container.getScreenCTM().inverse().a;

            var proteins = this.renderedProteins.values();
            for (prot of proteins) {
                prot.setPosition(prot.x, prot.y); // this rescales the protein
                if (prot.form !== 0)
                    prot.setAllLineCoordinates();
            }

            for (renderedCrossLink of this.renderedCrossLinks.values()) {
                if (renderedCrossLink.shown && renderedCrossLink.crossLink.isSelfLink() === false) {
                    renderedCrossLink.line.setAttribute("stroke-width", this.z * CLMS.xiNET.linkWidth);
                    renderedCrossLink.highlightLine.setAttribute("stroke-width", this.z * 10);
                    if (renderedCrossLink.crossLink.ambiguous === true) {
                        renderedCrossLink.dashedLine(true); //rescale spacing of dashes
                    }
                }
            }

            for (p_pLink of this.renderedP_PLinks.values()) {
                if ((p_pLink.renderedFromProtein != p_pLink.renderedToProtein)
                    && p_pLink.renderedFromProtein.form === 0 && p_pLink.renderedToProtein.form === 0) {
                    p_pLink.line.setAttribute("stroke-width", this.z * CLMS.xiNET.linkWidth);
                    p_pLink.highlightLine.setAttribute("stroke-width", this.z * 10);
                    p_pLink.thickLine.setAttribute("stroke-width", this.z * p_pLink.w);
                    if (p_pLink.ambig) {
                        p_pLink.dashedLine(true); //rescale spacing of dashes
                    }
                }
            }
        },

        setAnnotations: function (annotationChoice) {
            /*this.annotationChoice = annotationChoice;
            //clear all annot's
            var mols = this.renderedProteins.values();
            for (var mol of mols) {
                mol.clearPositionalFeatures();
            }
            this.domainColours = null;
            this.legendChanged();
            if (this.sequenceInitComplete) { //dont want to be changing annotations while still waiting on sequence
                var self = this;
                if (annotationChoice.toUpperCase() === "CUSTOM"){
                    for (var mol of mols) {
                        mol.setPositionalFeatures(mol.customAnnotations);
                    }
                    chooseColours();
                }
                else if (annotationChoice.toUpperCase() === "LYSINES") {
                    for (m = 0; m < molCount; m++) {
                        var mol = mols[m];
                        var seq = mol.sequence;
                        var annots = [];
                        for (var i =0; i < mol.size; i++){
                            var aa = seq[i];
                            if (aa === 'K'){
                                annots.push(new Annotation ("Lysine", i+1, i+1));
                            }

                        }
                        mol.setPositionalFeatures(annots);
                    }
                    chooseColours();
                }
                else if (annotationChoice.toUpperCase() === "SUPERFAM" || annotationChoice.toUpperCase() === "SUPERFAMILY"){
                    var molsAnnotated = 0;
                    for (m = 0; m < molCount; m++) {
                        var mol = mols[m];
                        this.xiNET_storage.getSuperFamFeatures(mol.id, function (id, fts){
                            var m = self.proteins.get(id);
                            m.setPositionalFeatures(fts);
                            molsAnnotated++;
                            if (molsAnnotated === molCount) {
                                chooseColours();
                            }
                        });
                    }
                }
                else if (annotationChoice.toUpperCase() === "UNIPROT" || annotationChoice.toUpperCase() === "UNIPROTKB") {
                    var molsAnnotated = 0;
                    for (m = 0; m < molCount; m++) {
                        var mol = mols[m];
                        this.xiNET_storage.getUniProtFeatures(mol.interactor.id, function (id, fts){
                            var m = self.renderedProteins.get(id);
                            m.setPositionalFeatures(fts);
                            molsAnnotated++;
                            if (molsAnnotated === molCount) {
                                chooseColours();
                            }
                        });
                    }
                }
            }

            function chooseColours(){
                var categories = d3.set();
                for (var mol of mols) {
                    for (var a = 0; a < mol.annotations.length; a++){
                        categories.add(mol.annotations[a].name);
                    }
                }
                var catCount = categories.values().length;
                if (catCount < 3){catCount = 3;}
                //~ if (catCount < 21) {
                    if (catCount < 9) {
                        var reversed = colorbrewer.Accent[catCount].slice().reverse();
                        self.domainColours = d3.scale.ordinal().range(reversed);
                    }
                    else if (catCount < 13) {
                        var reversed = colorbrewer.Set3[catCount].slice().reverse();
                        self.domainColours = d3.scale.ordinal().range(reversed);
                    }
                    else {
                        self.domainColours = d3.scale.category20();
                    }
                    for (var mol of mols) {
                        for (a = 0; a < mol.annotations.length; a++) {
                            var anno = mol.annotations[a];
                            var c = self.domainColours(anno.name);
                            anno.pieSlice.setAttribute("fill", c);
                            anno.pieSlice.setAttribute("stroke", c);
                            anno.colouredRect.setAttribute("fill", c);
                            anno.colouredRect.setAttribute("stroke", c);
                        }
                    }
                //~ }
                self.legendChanged();
            }*/

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
            if (typeof this.force !== 'undefined' && this.force != null) {
                this.force.stop();
            }

            var p = this.getEventPoint(evt);// seems to be correct, see below
            this.dragStart = this.mouseToSVG(p.x, p.y);
            this.state = CLMS.xiNET.Controller.PANNING;
            this.panned = false;
        },

        // dragging/rotation/panning/selecting
        mouseMove: function(evt) {
            //~ this.preventDefaultsAndStopPropagation(evt);
			var p = this.getEventPoint(evt);// seems to be correct, see below
			var c = this.mouseToSVG(p.x, p.y);

			if (this.dragElement != null) { //dragging or rotating
//                  this.hideTooltip();
				var dx = this.dragStart.x - c.x;
				var dy = this.dragStart.y - c.y;

				if (this.state === CLMS.xiNET.Controller.DRAGGING) {
					// we are currently dragging things around
					var ox, oy, nx, ny;
					if (!this.dragElement.interactor) { // if not a protein
						//its a link - drag whole connected subgraph
						/*var prot = this.dragElement.renderedFromProtein;
						var prots = this.renderedProteins.values();
						for (var protein of prots) {
							protein.subgraph = null;
						}
						var subgraph = prot.interactor.getSubgraph();
						var nodes = subgraph.nodes.values();
						//~ var nodeCount = nodes.length;
						for (node of nodes) {
							var protein = this.renderedProteins.get(node.id);
							ox = protein.x;
							oy = protein.y;
							nx = ox - dx;
							ny = oy - dy;
							protein.setPosition(nx, ny);
							protein.setAllLineCoordinates();
						}
						for (node of nodes) {
							var protein = this.renderedProteins.get(node.id);
							nodes[i].setAllLineCoordinates();
						}*/
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
			else if (this.state === CLMS.xiNET.Controller.PANNING) {
			   this.setCTM(this.container, this.container.getCTM().translate(c.x - this.dragStart.x, c.y - this.dragStart.y));
			}
        },


        // this ends all dragging and rotating
        mouseUp: function(evt) {
            var time = new Date().getTime();
            //console.log("Mouse up: " + evt.srcElement + " " + (time - this.lastMouseUp));
            this.preventDefaultsAndStopPropagation(evt);
            //eliminate some spurious mouse up events
            if ((time - this.lastMouseUp) > 150){
                //which button has just been raised
                var rightclick, middleclick; 
                if (evt.which)
                    rightclick = (evt.which === 3);
                else if (evt.button)
                    rightclick = (evt.button === 2);
                if (evt.which)
                    middleclick = (evt.which === 2);
                else if (evt.button)
                    middleclick = (evt.button === 1);

                var p = this.getEventPoint(evt);
                var c = this.mouseToSVG(p.x, p.y);

                if (this.dragElement != null) {
                    if (!(this.state === CLMS.xiNET.Controller.DRAGGING || this.state === CLMS.xiNET.Controller.ROTATING)) { //not dragging or rotating
                        if (rightclick) {
                            if (typeof this.dragElement.x === 'undefined') {//if not protein or p.group
                                if (this.dragElement.selfLink() == true) {//if internal link
                                    if (this.dragElement.proteinLink)//its a residueLink
                                        this.dragElement.proteinLink.fromProtein.toggleFlipped();
                                } else {
                                    if (this.dragElement.hidden !== undefined) {//if CLMS.xiNET.RenderedProteinLink
                                        this.dragElement.hidden = true;
                                    } else {//its a residue link
                                        this.dragElement.proteinLink.hidden = true;
                                    }
                                    this.dragElement.highlightLine.setAttribute("stroke-opacity", "0");
                                    this.checkLinks();
                                }
                            } else {//right click on protein
                                this.dragElement.setParked(!this.dragElement.isParked, c);
                                this.checkLinks();
                            }
                        }
                        else if (middleclick) {
                            //can't be used? problem with IE (scroll thingy)
                        }
                        else { //left click; toggle form for protein, switch stick scale
                            if (typeof this.dragElement.x === 'undefined') { //if not protein
                                //do nothing
                            } else if (evt.ctrlKey) {
                                
                                this.dragElement.switchStickScale(c);
                            }else if (evt.shiftKey) {
                                this.dragElement.switchStickScale(c);
                            } else {
                                if (this.dragElement.form === 1) {
                                    this.dragElement.setForm(0, c);
                                } else {
                                    this.dragElement.setForm(1, c);
                                }
                            }
                        }
                        //~ this.checkLinks();
                    }
                    else if (this.state === CLMS.xiNET.Controller.ROTATING) {
                        //round protein rotation to nearest 5 degrees (looks neater)
                        this.dragElement.setRotation(Math.round(this.dragElement.rotation / 5) * 5);
                    }
                    else {
                    } //end of protein drag; do nothing
                }
                else if (rightclick) { //right click on background; show all hidden links
                    //~ var links = this.renderedProteinLinks.values();
                    //~ var linkCount = links.length;
                    //~ for (var l = 0; l < linkCount; l++) {
                        //~ var link = links[l];
                        //~ link.hidden = false;
                    //~ }
                    //~ this.checkLinks();
                } else if (/*this.state !== xiNET.Controller.PANNING &&*/ evt.ctrlKey === false) {
                    this.model.set("selection", []);
                }

                if (this.state === CLMS.xiNET.Controller.SELECTING) {
                    clearInterval(this.marcher);
                    this.svgElement.removeChild(this.marquee);
                }
            }

            this.dragElement = null;
            this.whichRotator = -1;
            this.state = CLMS.xiNET.Controller.MOUSE_UP;

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
            var c = this.mouseToSVG(p.x, p.y);
            var k = this.svgElement.createSVGMatrix().translate(c.x, c.y).scale(z).translate(-c.x, -c.y);
            this.setCTM(g, g.getCTM().multiply(k));
            this.scale();
            return false;
        },

        //gets mouse position
        getEventPoint: function(evt) {
            var p = this.svgElement.createSVGPoint();
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
        },

        // transform the mouse-position into a position on the svg
        mouseToSVG: function(x, y) {
            var p = this.svgElement.createSVGPoint();
            p.x = x;
            p.y = y;
            var p = p.matrixTransform(this.container.getCTM().inverse());
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

        getLayout: function() {
            var myJSONText = JSON.stringify(Array.from(this.renderedProteins.values()), null, '\t');
            var viewportJSON = "";//ProtNet.svgElement.getAttribute("viewBox");
            var layout = myJSONText.replace(/\\u0000/gi, '');
            //+ "\n{co:" + this.cutOff +"}";
            return layout;
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

                    //~ if (typeof protLayout["form"]) {
                      //~
                    //~ }

                    //~ protein.setAllLineCoordinates();// watch out for this

                    if (typeof protLayout["parked"] !== 'undefined') {
                        protein.setParked(protLayout["parked"]);
                    }
                    if (protLayout["flipped"]) { //TODO: fix this
                        protein.toggleFlipped(); // change to setFlipped(protLayout["flipped"])
                    }
                }
                else {console.log("!");}
            }

            // incase proteins have been added which are not included in layout -
            var proteinIter = this.renderedProteins.values();
            for (prot of proteinIter) {
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
            if (this.force) {
                this.force.stop();
            }
            var width = this.svgElement.parentNode.clientWidth;
            var height = this.svgElement.parentNode.clientHeight;
            var self = this;
            var prots = this.renderedProteins.values();
            //do force directed layout*/
            var linkDistance = 60;
            layoutObj = {};
            layoutObj.nodes = [];
            var protLookUp = {};
            var pi = 0;
            for (prot of prots) {
                protLookUp[prot.interactor.id] = pi;
                pi++;
                var nodeObj = {};
                nodeObj.id = prot.interactor.id;
                nodeObj.x = prot.x;
                nodeObj.y = prot.y;
                nodeObj.px = prot.x;
                nodeObj.py = prot.y;
                layoutObj.nodes.push(nodeObj);
            }
            var links = new Map();


        var crossLinks = this.model.get("clmsModel").get("crossLinks").values();
        for(var crossLink of crossLinks){
            //visible, non-self cross-links only
            if (crossLink.check() === true && !crossLink.isSelfLink() && crossLink.toProtein) {
                var fromId = crossLink.fromProtein.id;
                var toId = crossLink.toProtein.id;
                var linkId = fromId + "-" + toId;
                if (!links.has(linkId)){
                    var source = protLookUp[fromId];
                    var target = protLookUp[toId];
                    var linkObj = {};
                    linkObj.source = source;
                    linkObj.target = target;
                    linkObj.id = linkId;
                    links.set(linkId, linkObj);
                }
            }
        }

        layoutObj.links = Array.from(links.values());

        var k = Math.sqrt(layoutObj.nodes.length / ((width) * height));
        // mike suggests:
        //    .charge(-10 / k)
        //    .gravity(100 * k)
            this.force = d3.layout.force()
                    .nodes(layoutObj.nodes)
                    .links(layoutObj.links)
                    .gravity(100 * k)
                    //~ .gravity(85 * k)
                    .linkDistance(linkDistance)
                     .charge(-10 / k)
                    //~ .charge(-30 / k)
                    .size([width, height]);
            var nodeCount = this.force.nodes().length;
            var forceLinkCount = this.force.links().length;
            this.force.on("tick", function(e) {
                var nodes = self.force.nodes();
                for (var n = 0; n < nodeCount; n++) {
                    var node = nodes[n];
                    var protein = self.renderedProteins.get(node.id);
                    var nx = node.x;
                    var ny = node.y;
                    protein.setPosition(nx, ny);
                    protein.setAllLineCoordinates();
                }
            });
            this.force.start();
        },

        getSVG: function () {
            return CLMSUI.utils.getSVG(d3.select(this.el).select("svg"));
        },

        render: function () {

            console.log ("re rendering cross-link viewer");
            this.checkLinks();
            //this.stage.handleResize();

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
            for (crossLink of crossLinks) {
                var renderedCrossLink = this.renderedCrossLinks.get(crossLink.id);
                if (renderedCrossLink.renderedFromProtein.form == 1
                    || renderedCrossLink.renderedToProtein.form == 1) {
                    renderedCrossLink.showHighlight(true, true);
                } else {
                    var p_pLink = this.renderedP_PLinks.get(
                        renderedCrossLink.renderedFromProtein.interactor.id + "-" + renderedCrossLink.renderedToProtein.interactor.id);
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
            for (crossLink of crossLinks) {
                var renderedCrossLink = this.renderedCrossLinks.get(crossLink.id);
                renderedCrossLink.setSelected(true);
                var p_pLink = this.renderedP_PLinks.get(
                    renderedCrossLink.renderedFromProtein.interactor.id + "-" + renderedCrossLink.renderedToProtein.interactor.id);
                p_pLink.setSelected(true);
            }
            return this;
        },

        // removes view
        // not really needed unless we want to do something extra on top of the prototype remove function
        remove: function () {
            // this line destroys the containing backbone view and it's events
            Backbone.View.prototype.remove.call(this);
        }

    });

CLMS.xiNET.svgns = "http://www.w3.org/2000/svg";// namespace for svg elements
CLMS.xiNET.xlinkNS = "http://www.w3.org/1999/xlink";// namespace for xlink, for use/defs elements
CLMS.xiNET.linkWidth = 1.3;// default line width
CLMS.xiNET.homodimerLinkWidth = 1.3;// have considered varying this line width
// highlight and selection colours are global
// (because all instances of CLMS.xiNET should use same colours for this)
CLMS.xiNET.highlightColour = new RGBColor("#fdc086");
CLMS.xiNET.selectedColour = new RGBColor("#ffff99");
CLMS.xiNET.defaultSelfLinkColour = new RGBColor("#9970ab");
CLMS.xiNET.defaultInterLinkColour = new RGBColor("#35978f");
CLMS.xiNET.homodimerLinkColour = new RGBColor("#a50f15");

//static var's signifying Controller's status
CLMS.xiNET.Controller = {};
CLMS.xiNET.Controller.MOUSE_UP = 0;//start state, also set when mouse up on svgElement
CLMS.xiNET.Controller.PANNING = 1;//set by mouse down on svgElement - left button, no shift or ctrl
CLMS.xiNET.Controller.DRAGGING = 2;//set by mouse down on Protein or Link
CLMS.xiNET.Controller.ROTATING = 3;//set by mouse down on CLMS.xiNET.Rotator, drag?
CLMS.xiNET.Controller.SCALING_PROTEIN = 4;//set by mouse down on CLMS.xiNET.Rotator, drag?
CLMS.xiNET.Controller.SCALING_ALL_PROTEINS = 5;//set by mouse down on CLMS.xiNET.Rotator, drag?
CLMS.xiNET.Controller.SELECTING = 6;//set by mouse down on svgElement- right button or left button shift or ctrl, drag
