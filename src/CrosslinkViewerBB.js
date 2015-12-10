//		a distance histogram
//
//		Martin Graham, Colin Combe, Rappsilber Laboratory, 2015
//
//		CrosslinkViewerBB.js

(function(win) {
    "use strict";

    win.CLMS = win.CLMS || {};
    
    win.CLMS.CrosslinkViewerBB = Backbone.View.extend({
        tagName: "div",
        //className: "dynDiv",
        events: {
            // following line commented out, mouseup sometimes not called on element if pointer drifts outside element 
            // and dragend not supported by zepto, fallback to d3 instead (see later)
            // "mouseup .dynDiv_resizeDiv_tl, .dynDiv_resizeDiv_tr, .dynDiv_resizeDiv_bl, .dynDiv_resizeDiv_br": "relayout",    // do resize without dyn_div alter function
            "click .downloadButton": "downloadSVG"
        },

        initialize: function (viewOptions) {
			//~ console.log("arg options", viewOptions);
            
            
            
            var defaultOptions = {
                //~ xlabel: "Distance",
                //~ ylabel: "Count",
                //~ seriesName: "Cross Links",
                //~ chartTitle: "Distogram",
                //~ maxX: 80
            };
            this.options = _.extend(defaultOptions, viewOptions.myOptions);

            this.displayEventName = viewOptions.displayEventName;

            var self = this;

            // this.el is the dom element this should be getting added to, replaces targetDiv
            var mainDivSel = d3.select(this.el);
	
			mainDivSel.selectAll("*").remove();//avoids prob with 'save - web page complete'
			
			//this is neded to allow the SVG export
			var containingDiv = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
			containingDiv.setAttribute("style", "width:100%;height:100%;display:block;");
			mainDivSel.node().appendChild(containingDiv);
			
			//create SVG elemnent
			this.svgElement = document.createElementNS(xiNET.svgns, "svg");
			this.svgElement.setAttribute('id', 'networkSVG');
			this.svgElement.setAttribute("width", "100%");
			this.svgElement.setAttribute("height", "100%");
			//~ this.svgElement.setAttribute("preserveAspectRatio", "xMinYMin meet");
			//~ this.svgElement.setAttribute("viewBox", "0 0 " + targetDiv.clientWidth + " " + targetDiv.clientHeight); 
			//~ this.svgElement.setAttribute("style", "display:block;");
			// disable right click context menu (we wish to put right click to our own purposes)
			this.svgElement.oncontextmenu = function() {
				return false;
			};
			
			//add listeners
			var self = this;
			//~ this.svgElement.onmousedown = function(evt) { self.mouseDown(evt); };
			//~ this.svgElement.onmousemove = function(evt) { self.mouseMove(evt); };
			//~ this.svgElement.onmouseup = function(evt) { self.mouseUp(evt); };
			//~ this.svgElement.onmouseout = function(evt) { self.hideTooltip(evt); };    
			//~ var mousewheelevt= (/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
			//~ if (document.attachEvent){ //if IE (and Opera depending on user setting) 
				//~ this.svgElement.attachEvent("on"+mousewheelevt, function(evt) {self.mouseWheel(evt);});
			//~ }
			//~ else if (document.addEventListener) { //WC3 browsers
				//~ this.svgElement.addEventListener(mousewheelevt, function(evt) {self.mouseWheel(evt);}, false);
			//~ }  
			//~ this.lastMouseUp = new Date().getTime();   
			//~ this.svgElement.ontouchstart = function(evt) { self.touchStart(evt); };
			//~ this.svgElement.ontouchmove = function(evt) { self.touchMove(evt); };
			//~ this.svgElement.ontouchend = function(evt) { self.touchEnd(evt); };
			//selection and highlight callbacks
			this.linkSelectionCallbacks = [];
			this.linkHighlightsCallbacks = [];
			//legend changed callbacks
			this.legendCallbacks = new Array();

			containingDiv.appendChild(this.svgElement);
			
			//these attributes are used by checkboxes to hide self links or ambiguous links
			this.selfLinksShown = true;
			this.ambigShown = true;	
			   
			// filled background needed, else cannot click/drag background
			// size is that of large monitor, potentially needs to be bigger coz browser can be zoomed
			// TODO: dynamically resize background to match screen bounding box
			var background = document.createElementNS(xiNET.svgns, "rect");
			background.setAttribute("id", "background_fill");
			background.setAttribute("x", 0);
			background.setAttribute("y", 0);
			background.setAttribute("width", 2560 * 2);
			background.setAttribute("height", 2048 * 2);
			background.setAttribute("fill-opacity", "1");
			background.setAttribute("fill", "#FFFFFF");
			this.svgElement.appendChild(background);
			// various groups needed
			this.container = document.createElementNS(xiNET.svgns, "g");
			this.container.setAttribute("id", "container");

			this.p_pLinksWide = document.createElementNS(xiNET.svgns, "g");
			this.p_pLinksWide.setAttribute("id", "p_pLinksWide");
			this.container.appendChild(this.p_pLinksWide);
		 
			this.proteinLower = document.createElementNS(xiNET.svgns, "g");
			this.proteinLower.setAttribute("id", "proteinLower");
			this.container.appendChild(this.proteinLower);

			this.highlights = document.createElementNS(xiNET.svgns, "g");
			this.highlights.setAttribute("class", "highlights");//proteins also contain highlight groups
			this.container.appendChild(this.highlights);

			this.res_resLinks = document.createElementNS(xiNET.svgns, "g");
			this.res_resLinks.setAttribute("id", "res_resLinks");
			this.container.appendChild(this.res_resLinks);

			this.p_pLinks = document.createElementNS(xiNET.svgns, "g");
			this.p_pLinks.setAttribute("id", "p_pLinks");
			this.container.appendChild(this.p_pLinks);

			this.proteinUpper = document.createElementNS(xiNET.svgns, "g");
			this.proteinUpper.setAttribute("id", "proteinUpper");
			this.container.appendChild(this.proteinUpper);

			this.svgElement.appendChild(this.container);
			//showing title as tooltips is NOT part of svg spec (even though browsers do this)
			//also more repsonsive / more control if we do our own
			this.tooltip = document.createElementNS(xiNET.svgns, "text");
			this.tooltip.setAttribute('x', 0);
			this.tooltip.setAttribute('y', 0);
			var tooltipTextNode = document.createTextNode('tooltip');
			this.tooltip.appendChild(tooltipTextNode);

			this.tooltip_bg = document.createElementNS(xiNET.svgns, "rect");
			this.tooltip_bg.setAttribute('class', 'tooltip_bg');
			
			this.tooltip_bg.setAttribute('fill-opacity', 0.75);
			this.tooltip_bg.setAttribute('stroke-opacity', 1);
			this.tooltip_bg.setAttribute('stroke-width', 1);

			this.tooltip_subBg = document.createElementNS(xiNET.svgns, "rect");
			this.tooltip_subBg.setAttribute('fill', 'white');
			this.tooltip_subBg.setAttribute('stroke', 'white');
			this.tooltip_subBg.setAttribute('class', 'tooltip_bg');
			this.tooltip_subBg.setAttribute('opacity', 1);
			this.tooltip_subBg.setAttribute('stroke-width', 1);

			this.svgElement.appendChild(this.tooltip_subBg);
			this.svgElement.appendChild(this.tooltip_bg);
			this.svgElement.appendChild(this.tooltip);

			//~ this.xiNET_storage = new xiNET_Storage(this);
			this.clear();
			this.initProteins();
			this.initLayout();

		//~ 
							//~ var linkList = [];
							//~ 
							//~ for(var crossLink of CLMSUI.xlv.crossLinks.values()){
		//~ 
								//~ linkList.push( {
									//~ fromResidue: crossLink.fromResidue,
									//~ toResidue: crossLink.toResidue
								//~ } );
		//~ 
							//~ }
							//~       

            this.listenTo (this.model.get("filterModel"), "change", this.render);    // any property changing in the filter model means rerendering this view
            this.listenTo (this.model.get("rangeModel"), "change:scale", this.relayout); 
                       
            if (viewOptions.displayEventName) {
                this.listenTo (CLMSUI.vent, viewOptions.displayEventName, this.setVisible);
            }
        },
        
        clear: function () {
		
		    this.sequenceInitComplete = false;
			if (this.force) {
				this.force.stop();
			}
			this.force = null;
			d3.select(this.p_pLinksWide).selectAll("*").remove();
			d3.select(this.highlights).selectAll("*").remove();
			d3.select(this.p_pLinks).selectAll("*").remove();
			d3.select(this.res_resLinks).selectAll("*").remove();
			d3.select(this.proteinLower).selectAll("*").remove();
			d3.select(this.proteinUpper).selectAll("*").remove();
			
			//are we panning?
			this.panning = false;
			// if we are dragging something at the moment - this will be the element that is draged
			this.dragElement = null;
			// are we dragging at the moment?
			this.dragging = false;
			// from where did we start dragging
			this.dragStart = {};
			// are we rotating at the moment
			this.rotating = false;
			
			this.proteins = d3.map();
			this.proteinLinks = d3.map();
			this.matches = [];
			this.groups = d3.set();
			this.subgraphs = [];
			this.layoutXOffset = 0;

			this.proteinCount = 0;
			this.unambigLinkFound = false;
			this.maxBlobRadius = 30;
			Protein.MAXSIZE = 100;

			this.layout = null;
			this.z = 1;
			this.scores = null;
			this.selectedLinks = d3.map();

			this.hideToolTip();

			this.resetZoom();
			this.state = xiNET.Controller.MOUSE_UP;
		
		},

		initProteins: function () {
			var interactors = this.model.get("clmsModel").get("interactors").values();
			Protein.MAXSIZE = 0;
			for (var interactor of interactors) {
				
				var newProt = new Protein(interactor.id, this, interactor.accession, interactor.label);
				newProt.setSequence(interactor.sequence);
				//~ newProt.init();
				this.proteins.set(interactor.id, newProt);
				
				var protSize = interactor.size;
				if (protSize > Protein.MAXSIZE){
					Protein.MAXSIZE = protSize;
				}
			}
			//this.maxBlobRadius = Math.sqrt(Protein.MAXSIZE / Math.PI);
			var width = this.svgElement.parentNode.clientWidth;
			Protein.UNITS_PER_RESIDUE = (((width / 2)) - Protein.LABELMAXLENGTH) / Protein.MAXSIZE;
			var prots = this.proteins.values();
			var protCount = prots.length;
			for (var i = 0; i < protCount; i++){
				prots[i].init();
			}
			this.sequenceInitComplete = true;
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
        
        initLayout: function (){
  	var prots = this.proteins.values();
	var protCount = prots.length;
	Protein.MAXSIZE = 0;
	for (var i = 0; i < protCount; i++){
		var protSize = prots[i].size;
		if (protSize > Protein.MAXSIZE){
			Protein.MAXSIZE = protSize;
		}
	}
	//this.maxBlobRadius = Math.sqrt(Protein.MAXSIZE / Math.PI);
	var width = this.svgElement.parentNode.clientWidth;
	Protein.UNITS_PER_RESIDUE = (((width / 2)) - Protein.LABELMAXLENGTH) / Protein.MAXSIZE;  var groupCount = this.groups.values().length;
    if (groupCount > 1 && groupCount < 5) {
		//can now choose link colours for comparing sets
		var catCount = this.groups.values().length;
		//~ if (catCount > 1 && catCount < 6) {
		//~ if (catCount < 3){catCount = 3;}
        // if (catCount < 21) {
			//~ if (catCount < 9) {
				//~ var reversed = colorbrewer.Accent[3];
				this.linkColours = d3.scale.ordinal().range(colorbrewer.Dark2[5]);
			//~ }
			//~ else if (catCount < 13) {
				//~ var reversed = colorbrewer.Set3[catCount];
				//~ this.linkColours = d3.scale.ordinal().range(reversed);
			//~ }
			//~ else {
				//~ this.linkColours = d3.scale.category20();
			//~ }	
		//}	
			var groups = this.groups.values();
			for (var g = 0; g < groupCount; g++) {
				this.linkColours(groups[g]);
			}
			this.legendChanged();
		//~ }
	}    
	if (typeof this.layout !== 'undefined' && this.layout != null) {
        this.loadLayout();
    } else {
        var proteins = this.proteins.values();
        var proteinCount = proteins.length;
        for (var p = 0; p < proteinCount; p++) {
            var prot = proteins[p];
            this.proteinLower.appendChild(prot.lowerGroup);
            this.proteinUpper.appendChild(prot.upperGroup);
        }
        //~ this.autoLayout();
    }			
		},

		hideToolTip: function () {
			this.tooltip.setAttribute("display","none");
			this.tooltip_bg.setAttribute("display","none");
			this.tooltip_subBg.setAttribute("display","none");		
		},

		resetZoom: function () {
		    this.container.setAttribute("transform", "scale(1)");
			this.scale();
			//~ var proteins = this.proteins.values();
			//~ var proteinCount = proteins.length;
			//~ for (var p = 0; p < proteinCount; p++) {
				//~ var prot = proteins[p];
				//~ prot.stickZoom = 1;
				//~ prot.scale();
			//~ }
		},

        scale: function () {
			//if (this.sequenceInitComplete) {
				this.z = this.container.getScreenCTM().inverse().a;

				var proteins = this.proteins.values();
				var proteinCount = proteins.length;
				for (var p = 0; p < proteinCount; p++) {
					var prot = proteins[p];
					prot.setPosition(prot.x, prot.y); // this rescales the protein //TODO: check if this always need to happen
					if (prot.form !== 0)
						prot.setAllLineCoordinates();
				}

				var links = this.proteinLinks.values();
				var linkCount = links.length;
				for (var l = 0; l < linkCount; l++) {
					var protLink = links[l];
					if (protLink.fromProtein !== protLink.toProtein && protLink.toProtein !== null) {
						if (!protLink.fromProtein.isParked && !protLink.toProtein.isParked) {
							if (protLink.fromProtein.form === 0 && protLink.toProtein.form === 0) {
								protLink.line.setAttribute("stroke-width", this.z * xiNET.linkWidth);
								protLink.highlightLine.setAttribute("stroke-width", this.z * 10);
								protLink.fatLine.setAttribute("stroke-width", this.z * protLink.w);
								if (protLink.ambig) {
									protLink.dashedLine(true); //rescale spacing of dashes
								}
							}
							else {
								//inter protein res links
								var c2 = protLink.residueLinks.keys().length;
								for (var rl = 0; rl < c2; rl++) {
									var resLink = protLink.residueLinks.values()[rl];
									if (resLink.check()) {
										protLink.residueLinks.values()[rl].line.setAttribute("stroke-width", this.z * xiNET.linkWidth);
										protLink.residueLinks.values()[rl].highlightLine.setAttribute("stroke-width", this.z * 10);
										if (resLink.ambig) {
											resLink.dashedLine(true); //rescale spacing of dashes
										}
									}
								}
							}
						}
					}
				}
			//}			
		},
        
        setAnnotations: function (annotationChoice) {
			this.annotationChoice = annotationChoice;
			//clear all annot's
			var mols = this.proteins.values();
			var molCount = mols.length;
			for (var m = 0; m < molCount; m++) {
				mols[m].clearPositionalFeatures();
			}
			this.domainColours = null;
			this.legendChanged();
			if (this.sequenceInitComplete) { //dont want to be changing annotations while still waiting on sequence
				var self = this;
				if (annotationChoice.toUpperCase() === "CUSTOM"){
					for (m = 0; m < molCount; m++) {
						var mol = mols[m];
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
						this.xiNET_storage.getUniProtFeatures(mol.id, function (id, fts){
							var m = self.proteins.get(id);
							if (m.accession.indexOf("-") === -1 || m.accession === "P02768-A") {
								if (m.accession === "P02768-A") {
									var offset = -24;
									for (var f = 0; f < fts.length; f++) {
										var feature = fts[f];
										feature.start = feature.start + offset;
										feature.end = feature.end + offset;
									}
								}
								m.setPositionalFeatures(fts);
							}
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
				for (m = 0; m < molCount; m++) {
					var mol = mols[m];
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
					for (m = 0; m < molCount; m++) {
						var mol = mols[m];
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
			}
			
		},
		
		legendChanged: function () {
			var callbacks = this.legendCallbacks;
			var count = callbacks.length;
			for (var i = 0; i < count; i++) {
				callbacks[i](this.linkColours, this.domainColours);
			}
		},
        
        downloadSVG: function () {
            //~ var svgString = CLMSUI.utils.getSVG(d3.select(this.el).select("svg"));
            //~ download(svgString, 'application/svg', 'distogram.svg');
        },

        hideView: function () {
            win.CLMSUI.vent.trigger (this.displayEventName, false);
        },

        setVisible: function (show) {
            console.log("event display in distogram", show);
            d3.select(this.el).style('display', show ? 'block' : 'none');

            if (show) {
                this
                    .relayout() // need to resize first sometimes so render gets correct width/height coords
                    .render()
                ;
            }
        },

        render: function () {

            console.log ("re rendering cross-link viewer");
	
			//this.stage.handleResize();

            return this;
        },

        recalcRandomBinning: function () {
            console.log ("precalcing random bins for distogram view");
            var randArr = this.model.get("distancesModel").flattenedDistances();
            var thresholds = d3.range(0, this.options.maxX);
            var binnedData = d3.layout.histogram()
                .bins(thresholds)
                (randArr)
            ;
            this.randArrLength = randArr.length;
            this.precalcedDistributions = this.precalcedDistributions || {};
            this.precalcedDistributions["Random"] = binnedData;
        },

        relayout: function () {
			//this.stage.handleResize();
            return this;
        },

        // removes view
        // not really needed unless we want to do something extra on top of the prototype remove function (like destroy c3 view just to be sure)
        remove: function () {
            // this line destroys the c3 chart and it's events and points the this.chart reference to a dead end
            this.chart = this.chart.destroy();

            // remove drag listener
            d3.select(this.el).selectAll(".dynDiv_resizeDiv_tl, .dynDiv_resizeDiv_tr, .dynDiv_resizeDiv_bl, .dynDiv_resizeDiv_br").on(".drag", null); 

            // this line destroys the containing backbone view and it's events
            Backbone.View.prototype.remove.call(this);
        }

    });
    
} (this));
