//	xiNET cross-link viewer
//	Copyright 2013 Rappsilber Laboratory, University of Edinburgh
//
//	author: Colin Combe
//
//	CLMS.xiNET.RenderedCrossLink.js
// 	the class representing a residue-residue link

CLMS.xiNET.RenderedCrossLink = function (crossLink, crosslinkViewer){
	this.crossLink = crossLink;
	this.crosslinkViewer = crosslinkViewer;

	this.renderedFromProtein =
					this.crosslinkViewer.renderedProteins.get(this.crossLink.getFromProtein().id);
					
	this.renderedFromProtein.renderedCrossLinks.set(crossLink.id, this);				
	
	this.renderedToProtein =
					this.crosslinkViewer.renderedProteins.get(this.crossLink.getToProtein().id);
		

	if (this.renderedToProtein) {
		this.renderedToProtein.renderedCrossLinks.set(crossLink.id, this);
	}
				
	this.tooltip = this.crossLink.id;

	//used to avoid some unnecessary manipulation of DOM
	this.shown = false;
	this.dashed = false;
	this.initSVG();
}

CLMS.xiNET.RenderedCrossLink.prototype = new CLMS.xiNET.RenderedLink();

CLMS.xiNET.RenderedCrossLink.prototype.initSVG = function() {
	if (typeof this.line === 'undefined') {
		if (this.crossLink.isSelfLink() === true || this.crossLink.getToProtein() === null) {
			this.line = document.createElementNS(CLMS.xiNET.svgns, "path");
			this.line.setAttribute("stroke-width", CLMS.xiNET.linkWidth);
			this.highlightLine = document.createElementNS(CLMS.xiNET.svgns, "path");
		} else {
			this.line = document.createElementNS(CLMS.xiNET.svgns, "line");
			this.line.setAttribute("stroke-linecap", "round");
			this.highlightLine = document.createElementNS(CLMS.xiNET.svgns, "line");
			this.highlightLine.setAttribute("stroke-linecap", "round");
		}

		this.line.setAttribute("class", "link");
		this.line.setAttribute("fill", "none");
		//~ this.line.setAttribute("stroke", "#000000"); // temp
		this.highlightLine.setAttribute("class", "link");
		this.highlightLine.setAttribute("fill", "none");
		this.highlightLine.setAttribute("stroke", CLMS.xiNET.highlightColour.toRGB());
		this.highlightLine.setAttribute("stroke-width", "10");
		this.highlightLine.setAttribute("stroke-opacity", "0")

		if (typeof this.colour !== 'undefined'){
			this.line.setAttribute("stroke", this.colour);
		}

		//set the events for it
		var self = this;
		this.line.onmousedown = function(evt) {
			self.mouseDown(evt);
		};
		this.line.onmouseover = function(evt) {
			self.mouseOver(evt);
		};
		this.line.onmouseout = function(evt) {
			self.mouseOut(evt);
		};
		this.line.ontouchstart = function(evt) {
			self.touchStart(evt);
		};

		this.highlightLine.onmousedown = function(evt) {
			self.mouseDown(evt);
		};
		this.highlightLine.onmouseover = function(evt) {
			self.mouseOver(evt);
		};
		this.highlightLine.onmouseout = function(evt) {
			self.mouseOut(evt);
		};
		this.highlightLine.ontouchstart = function(evt) {
			self.touchStart(evt);
		};
	}
	this.isSelected = false;
};


// andAlternatives means highlight alternative links in case of site ambiguity, 
// need to be able to switch this on and off to avoid inifite loop
CLMS.xiNET.RenderedCrossLink.prototype.showHighlight = function(show, andAlternatives) {
	if (!this.renderedFromProtein.busy && (!this.renderedToProtein || !this.renderedToProtein.busy)) {
		//~ if (this.shown) {
			if (show) {
				this.highlightLine.setAttribute("stroke", CLMS.xiNET.highlightColour.toRGB());
				this.highlightLine.setAttribute("stroke-opacity", "0.7");
				var fromPeptides = [], toPeptides = [];
				var filteredMatches = this.crossLink.filteredMatches;
				var fmc = filteredMatches.length;
				for (var m = 0; m < fmc; m++) {
					var match = filteredMatches[m][0];

					var fromPepStart = filteredMatches[m][1] - 1;
					var fromPepLength = filteredMatches[m][2];
					var toPepStart = filteredMatches[m][3] - 1;
					var toPepLength = filteredMatches[m][4];

					fromPeptides.push([fromPepStart, fromPepLength, match.overlap[0], match.overlap[1]]);
					toPeptides.push([toPepStart, toPepLength, match.overlap[0], match.overlap[1]]);
				}
				this.renderedFromProtein.showPeptides(fromPeptides);
				if (this.renderedToProtein) {
					this.renderedToProtein.showPeptides(toPeptides);
				}
				//~ var temp = d3.map();
				//~ temp.set(this.crossLink.id, this.crossLink);
				//~ this.crosslinkViewer.model.set("highlights",temp.values());
			} else {
				this.highlightLine.setAttribute("stroke", CLMS.xiNET.selectedColour.toRGB());
				if (this.isSelected == false) {
					this.highlightLine.setAttribute("stroke-opacity", "0");
				}

				this.renderedFromProtein.removePeptides();
				if (this.renderedToProtein) {
						this.renderedToProtein.removePeptides();
				}
				//~ this.crosslinkViewer.model.set("highlights",[]);
			}
		}
		if (andAlternatives && this.crossLink.ambiguous) {
			//TODO: we want to highlight smallest possible set of alternatives?
			var mc = this.crossLink.matches.length;
			for (var m = 0; m < mc; m++) {
				var match = this.crossLink.matches[m][0];
				if (match.isAmbig()) {
					var rc = match.crossLinks.length;
					for (var rl = 0; rl < rc; rl++) {
						var resLink = match.crossLinks[rl];
						var renderedLink = this.crosslinkViewer.renderedCrossLinks.get(resLink.id);
					 //   if (resLink.isSelected == false) { //not right
							renderedLink.showHighlight(show, false);
					 //}
					}
				}
			}

		}
		
		
	//~ }
};

CLMS.xiNET.RenderedCrossLink.prototype.setSelected = function(select) {
	if (select === true){// && this.isSelected === false) {
		this.isSelected = true;
		this.highlightLine.setAttribute("stroke", CLMS.xiNET.selectedColour.toRGB());
		this.highlightLine.setAttribute("stroke-opacity", "0.7");
	}
	else { //if (select === false && this.isSelected === true) {
		this.isSelected = false;
		this.highlightLine.setAttribute("stroke-opacity", "0");
		this.highlightLine.setAttribute("stroke", CLMS.xiNET.highlightColour.toRGB());
	}
};


//used when filter changed
CLMS.xiNET.RenderedCrossLink.prototype.check = function(filter) {
	
	if (this.renderedFromProtein.isParked === true 
		|| (this.renderedToProtein && this.renderedToProtein.isParked == true)) {
			this.hide();
			return false;	
	}
	
	var filteredMatches = this.crossLink.filteredMatches;
	var countFilteredMatches = filteredMatches.length;
	if (countFilteredMatches > 0) {
		this.dashedLine(this.crossLink.ambiguous);
		this.show();
		return true;
	}
	else {
		this.hide();
		return false;
	}
	/*if (this.crosslinkViewer.selfLinkShown === false && this.selfLink()) {
		this.hide();
		return false;
	}
	if (this.proteinLink.hidden) {
		this.hide();
		return false;
	}
	if (typeof this.matches === 'undefined' || this.matches == null) {
		this.ambig = false;
		this.show();
		return true;
	}
	var filteredMatches = this.getFilteredMatches();
	var countFilteredMatches = filteredMatches.length;
	if (countFilteredMatches > 0) {
		this.show();
		this.dashedLine(this.ambig);
		
		this.tooltip = this.proteinLink.fromProtein.labelText + '_' + this.fromResidue
					+ "-"  + ((this.proteinLink.toProtein != null)? this.proteinLink.toProtein.labelText:'null')
					+ '_' + this.toResidue + ' (' + countFilteredMatches;
		if (countFilteredMatches == 1) {
			this.tooltip += ' match)';
		} else {
			this.tooltip += ' matches)';
		}


		return true;
	}
	else {
		this.hide();
		return false;
	}*/
};

CLMS.xiNET.RenderedCrossLink.prototype.dashedLine = function(dash) {
	//~ if (this.crosslinkViewer.unambigLinkFound == true) {
		if (typeof this.line !== 'undefined' && !isNaN(parseFloat(this.crossLink.toResidue))) {
			if (dash) {// && !this.dashed){
				if (this.crossLink.isSelfLink() === true) {
					this.dashed = true;
					this.line.setAttribute("stroke-dasharray", (4) + ", " + (4));
				}
				else {
					this.dashed = true;
					this.line.setAttribute("stroke-dasharray", (4 * this.crosslinkViewer.z) + ", " + (4 * this.crosslinkViewer.z));
				}
			}
			else if (!dash) {// && this.dashed){
				this.dashed = false;
				this.line.removeAttribute("stroke-dasharray");
			}
		}
	//~ }
};

CLMS.xiNET.RenderedCrossLink.prototype.show = function() {
	//~ if (!this.shown) {
		//~ this.shown = true;
		//~ if (typeof this.line === 'undefined') {
			//~ this.initSVG();
		//~ }
		if (this.crossLink.isSelfLink() || !this.renderedToProtein) {
			var path;
			if (this.renderedFromProtein.form === 1) {
				path =  this.renderedFromProtein.getCrossLinkPath(this);
			}
			else {
				path =  this.renderedFromProtein.getAggregateSelfLinkPath();
			}
			this.line.setAttribute("d", path);
			this.highlightLine.setAttribute("d", path);
			this.renderedFromProtein.selfLinksHighlights.appendChild(this.highlightLine);
			this.renderedFromProtein.selfLinks.appendChild(this.line);

		}
		else {
			this.line.setAttribute("stroke-width", this.crosslinkViewer.z * CLMS.xiNET.linkWidth);
			this.highlightLine.setAttribute("stroke-width", this.crosslinkViewer.z * 10);
			this.setLineCoordinates(this.renderedFromProtein);
			this.setLineCoordinates(this.renderedToProtein);
			this.crosslinkViewer.highlights.appendChild(this.highlightLine);
			this.crosslinkViewer.res_resLinks.appendChild(this.line);
		}
	//~ }
};

CLMS.xiNET.RenderedCrossLink.prototype.hide = function() {
	//~ if (this.shown) {
		//~ this.shown = false;

		if (this.crossLink.isSelfLink() || !this.renderedToProtein) {
			//TODO - there may be issue with contains() in IE
			if (this.renderedFromProtein.selfLinks.contains(this.line)) {
				this.renderedFromProtein.selfLinksHighlights.removeChild(this.highlightLine);
				this.renderedFromProtein.selfLinks.removeChild(this.line);
			}
		}
		else {
			if (this.crosslinkViewer.res_resLinks.contains(this.line)) {
				this.crosslinkViewer.res_resLinks.removeChild(this.line);
				this.crosslinkViewer.highlights.removeChild(this.highlightLine);
			}
		}
		
	//~ }
};

// there's an efficiency saving possible by passing in the renderedInteractor thats moved, 
// then only need to change that end
CLMS.xiNET.RenderedCrossLink.prototype.setLineCoordinates = function() {
	//if not self link && not linker modified pep
	if (this.crossLink.isSelfLink() === false && this.renderedToProtein){		
		//~ if (this.shown) {//don't waste time changing DOM if link not visible
		var x, y;
		// from end
		if (this.renderedFromProtein.form === 0) {
				x = this.renderedFromProtein.x;
				y = this.renderedFromProtein.y;
		}
		else //if (this.form == 1)
		{
			var coord = this.getResidueCoordinates(this.crossLink.fromResidue, this.renderedFromProtein);
			x = coord[0];
			y = coord[1];
		}
		this.line.setAttribute("x1", x);
		this.line.setAttribute("y1", y);
		this.highlightLine.setAttribute("x1", x);
		this.highlightLine.setAttribute("y1", y);
		
		// to end
		if (this.renderedToProtein.form === 0) {
				x = this.renderedToProtein.x;
				y = this.renderedToProtein.y;
		}
		else //if (this.form == 1)
		{
			var coord = this.getResidueCoordinates(this.crossLink.toResidue, this.renderedToProtein);
			x = coord[0];
			y = coord[1];
		}
		this.line.setAttribute("x2", x);
		this.line.setAttribute("y2", y);
		this.highlightLine.setAttribute("x2", x);
		this.highlightLine.setAttribute("y2", y);
			
		//~ } // end if(this.shown){, might put this back in
	}
}

//calculate the  coordinates of a residue (relative to this.crosslinkViewer.container)
CLMS.xiNET.RenderedCrossLink.prototype.getResidueCoordinates = function(r, renderedInteractor) {
	var x = renderedInteractor.getResXwithStickZoom(r) * this.crosslinkViewer.z;
	//var x = (r - (this.size/2)) * Protein.UNITS_PER_RESIDUE * this.stickZoom * this.crosslinkViewer.z;
	var y = 0;
	if (CLMS.xiNET.RenderedProtein.UNITS_PER_RESIDUE * renderedInteractor.stickZoom > 8) {//if sequence shown
			//~ y = 10 * this.crosslinkViewer.z;
		var from = this.renderedFromProtein, to = this.renderedToProtein;
		var deltaX = from.x - to.x;
		var deltaY = from.y - to.y;
		var angleBetweenMidPoints = Math.atan2(deltaY, deltaX);
		//todo: tidy up trig code so eveything is always in radians?
		var abmpDeg = angleBetweenMidPoints / (2 * Math.PI) * 360;
		if (abmpDeg < 0) {
			abmpDeg += 360;
		}

		var out;//'out' is value we use to decide which side of letter the line is drawn
		if (renderedInteractor === from) {
				out = (abmpDeg - from.rotation);
				if (out < 0) {
					out += 360;
				}
				var fyOffset = 5;
				if (out < 180) {
					fyOffset = -5;
				}

				y = fyOffset * this.crosslinkViewer.z;
		}
		else { // renderedInteractor === to
				out = (abmpDeg - to.rotation);
				if (out < 0) {
					out += 360;
				}
				var tyOffset = 5;
				if (out > 180) {
					tyOffset = -5;
				}
				y = tyOffset * this.crosslinkViewer.z;
		}
	}

	var rotated = CLMS.xiNET.RenderedProtein.rotatePointAboutPoint([x, y],[0,0],renderedInteractor.rotation);

	x = rotated[0] + renderedInteractor.x;
	y = rotated[1] + renderedInteractor.y;
	return [x, y];
};

/*
// used by hover highlight?
CLMS.xiNET.RenderedCrossLink.prototype.leastAmbiguousMatches = function() {// yes: plural
	//var leastAmbigMatches
	};

CLMS.xiNET.RenderedCrossLink.prototype.toJSON = function() {
	var m = [];
	var mc = this.matches.length;
	for (var i = 0; i < mc; i++) {
		m.push(this.matches[i].id);
	}
	return {
	//      m: m
	};
};
*/
