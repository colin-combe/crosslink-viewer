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
            console.log("arg options", viewOptions);
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

            var chartDiv = mainDivSel.append("div")
                .attr("class", "panelInner distoDiv")
                .attr("id", "currentSampleDistogram")
                .style("position", "relative")
                .style("height", "100%")
            ;
           			
		

            //~ this.chartDiv = mainDivSel.append("div")
                //~ .attr("class", "panelInner")
                //~ .attr("id", "ngl")
                //.style("position", "relative")
                //~ .style("height", "calc( 100% - 40px )")
            //~ ;
 //~ 
            //~ this.chartDiv.selectAll("*").remove();
            
            
            //~ 
			//~ //create 3D network viewer
			//~ if ( ! Detector.webgl ) {
				//~ alert("no webGL = no 3D graphics");//Detector.addGetWebGLMessage(); // the Detector message messes up web page layout
			//~ }
			//~ else {
				//~ this.stage = new NGL.Stage( "ngl" );//this.chartDiv[0][0] );
				//~ this.stage.loadFile( "rcsb://1AO6", { sele: ":A" } )
//~ 
//~ 
				//~ .then( function(
				//~ structureComp ){
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
					//~ linkList = transformLinkList( linkList, "A" );
					//~ 
					//~ var crosslinkData = new CrosslinkData( linkList );
//~ 
					//~ var xlRepr = new CrosslinkRepresentation(
						//~ self.stage, structureComp, crosslinkData, {
							//~ highlightedColor: "lightgreen",
							//~ sstrucColor: "wheat",
							//~ displayedDistanceColor: "tomato"
						//~ }
					//~ );
				//~ });
				//~ 
			//~ }        

            this.listenTo (this.model.get("filterModel"), "change", this.render);    // any property changing in the filter model means rerendering this view
            this.listenTo (this.model.get("rangeModel"), "change:scale", this.relayout); 
                       
            if (viewOptions.displayEventName) {
                this.listenTo (CLMSUI.vent, viewOptions.displayEventName, this.setVisible);
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
