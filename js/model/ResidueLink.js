//		xiNET cross-link viewer
//		Copyright 2013 Rappsilber Laboratory, University of Edinburgh
//
//		author: Colin Combe
//		
//		ResidueLink.js
// 		the class representing a residue-residue link

ResidueLink.prototype = new xiNET.Link();

function ResidueLink(id, proteinLink, fromResidue, toResidue, xlvController, flip) {
    this.id = id;
    //    this.matches = new Array(0); //we don't initialise this here 
    // (save some memory in use case where there is no match info, only link info)
    this.xlv = xlvController;
    this.proteinLink = proteinLink;
    this.fromResidue = fromResidue;
    this.toResidue = toResidue;
    this.intra = false;
    if (typeof this.proteinLink !== 'undefined') {
        if (this.proteinLink.fromProtein === this.proteinLink.toProtein) {
            this.intra = true;
        }
    }

    this.ambig = false;
    this.tooltip = this.id;
    if (flip === true) {
        this.flip = true;
    }
    //used to avoid some unnecessary manipulation of DOM
    this.shown = false;
    this.dashed = false;
    
    this.curveMidX = null; // used by self links
    
    //~ this.initSVG();
}

ResidueLink.prototype.initSVG = function() {
    if (typeof this.line === 'undefined') {
        if (this.intra || this.proteinLink.toProtein === null) {
            this.line = document.createElementNS(xiNET.svgns, "path");
            this.line.setAttribute('stroke', xiNET.defaultSelfLinkColour.toRGB());
            this.highlightLine = document.createElementNS(xiNET.svgns, "path");
        } else {
            this.line = document.createElementNS(xiNET.svgns, "line");
            this.line.setAttribute("stroke", xiNET.defaultInterLinkColour.toRGB());
            this.line.setAttribute("stroke-linecap", "round");
            this.highlightLine = document.createElementNS(xiNET.svgns, "line");
            this.highlightLine.setAttribute("stroke-linecap", "round");
        }

        this.line.setAttribute("class", "link");
        this.line.setAttribute("fill", "none");
        this.highlightLine.setAttribute("class", "link");
        this.highlightLine.setAttribute("fill", "none");
        this.highlightLine.setAttribute("stroke", xiNET.highlightColour.toRGB());
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
        this.highlightLine.onmousedown = function(evt) {
            self.mouseDown(evt);
        };
        this.highlightLine.onmouseover = function(evt) {
            self.mouseOver(evt);
        };
        this.highlightLine.onmouseout = function(evt) {
            self.mouseOut(evt);
        };
    }
    if (this.intra === true) {
        //~ this.setUpCurve();
    }
    this.isSelected = false;
};

ResidueLink.prototype.getFromProtein = function() {
    return this.proteinLink.fromProtein;
};

ResidueLink.prototype.getToProtein = function() {
    return this.proteinLink.toProtein;
};

//andAlternatives means highlight alternative links in case of site ambiguity
ResidueLink.prototype.showHighlight = function(show, andAlternatives) {
    if (typeof andAlternatives === 'undefined') {
		andAlternatives = false;
    }
    if (this.shown) {
        if (show) {
			this.highlightLine.setAttribute("stroke", xiNET.highlightColour.toRGB());
            this.highlightLine.setAttribute("stroke-opacity", "0.7"); 
			var fromPeptides = [], toPeptides = [];
			var filteredMatches = this.getFilteredMatches();
			var fmc = filteredMatches.length;
			for (var m = 0; m < fmc; m++) {
				var match = this.matches[m];
				var rc = match.residueLinks.length;
				for (var rl = 0; rl < rc; rl++) {
					//TODO - yes, fix this hack, its the 'ends switched' problem, see Match.js
					var resLink = match.residueLinks[rl][0];	
					if (resLink == this){
						var endsSwitched = match.residueLinks[rl][1];
						if (endsSwitched === false){
							var fromPepStart = (this.fromResidue - match.linkPos1);//yes.. do not add 1, want start of residue letter 
							var fromPepLength = (match.pepSeq1)? match.pepSeq1.length : 0; 
							var toPepStart = (this.toResidue - match.linkPos2); 
							var toPepLength = (match.pepSeq2)? match.pepSeq2.length : 0;
						} else {
							var fromPepStart = (this.fromResidue - match.linkPos2); 
							var fromPepLength = (match.pepSeq2)? match.pepSeq2.length : 0; 
							var toPepStart = (this.toResidue - match.linkPos1); 
							var toPepLength = (match.pepSeq1)? match.pepSeq1.length : 0;
						} 
						
						fromPeptides.push([fromPepStart, fromPepLength, match.overlap[0], match.overlap[1]]);
						toPeptides.push([toPepStart, toPepLength, match.overlap[0], match.overlap[1]]);
						
					}	
				}
			}
			this.proteinLink.fromProtein.showPeptides(fromPeptides);  
			if (this.proteinLink.toProtein !== null) {
				this.proteinLink.toProtein.showPeptides(toPeptides);  
			}			
        } else {
			this.highlightLine.setAttribute("stroke", xiNET.selectedColour.toRGB());
			if (this.isSelected == false) {
				this.highlightLine.setAttribute("stroke-opacity", "0");
			}
           	this.proteinLink.fromProtein.removePeptides();  
			if (this.proteinLink.toProtein !== null) {
					this.proteinLink.toProtein.removePeptides();  	
			}		
        }
    }
    if (andAlternatives && this.ambig) {
        //TODO: we want to highlight smallest possible set of alternatives?
        var mc = this.matches.length;
        for (var m = 0; m < mc; m++) {
            var match = this.matches[m];
            if (match.isAmbig()) {
                var rc = match.residueLinks.length;
                for (var rl = 0; rl < rc; rl++) {
                    var resLink = match.residueLinks[rl][0];
                 //   if (resLink.isSelected == false) { //not right
						resLink.showHighlight(show, false);
						resLink.proteinLink.showHighlight(show, false);
				 //}
                }
            }
        }
    }
};

ResidueLink.prototype.setSelected = function(select) {
    if (select && this.isSelected === false) {
        this.xlv.selected.set(this.id, this);//ok, 
        this.isSelected = true;
        this.highlightLine.setAttribute("stroke", xiNET.selectedColour.toRGB());
		this.highlightLine.setAttribute("stroke-opacity", "0.7");
    }
    else if (select === false && this.isSelected === true) {
        this.xlv.selected.remove(this.id);
        this.isSelected = false;
        this.highlightLine.setAttribute("stroke-opacity", "0");
        this.highlightLine.setAttribute("stroke", xiNET.highlightColour.toRGB());
 }
};

//used when link clicked
ResidueLink.prototype.showID = function() {
    if (typeof send_match_ids === 'function') {
        var matches = this.getFilteredMatches();
        var matchIDs = new Array();
        var c = matches.length;
        var firstMatch = true;
        for (var i = 0; i < c; i++) {
            if (firstMatch) {
                firstMatch = false;
            }
            else {
                matchIDs = matchIDs + ",";
            }
            matchIDs = matchIDs + matches[i].id;
        }
        send_match_ids(matchIDs);
    }
    else {
		var fromProt = this.getFromProtein();
		var toProt = this.getToProtein();

		var linkInfo = "<h5>" + fromProt.name + " [" + fromProt.id
			+ "], residue " + this.fromResidue + " <br>to<br> "
			+ ((toProt)?toProt.name:"null") + " [" + ((toProt)?toProt.id:"")
			+ "], residue " + this.toResidue + "</h5>";
        
        var matches = this.getFilteredMatches();
        var c = matches.length;
        linkInfo += "<p>" + c + " match";
		if (c > 1){
			linkInfo += "es:</p>";
		} else {
			linkInfo += ":</p>";
		}
		
		var scoresTable = "<table><tr><th>Score</th>";//<th>Id</th>";
		if (this.xlv.autoValidatedFound === true){
			scoresTable += "<th>Auto</th>";
		}
		if (this.xlv.manualValidatedFound === true){
			scoresTable += "<th>Manual</th>";
		}
		scoresTable += "<th>Pep Seq.1</th>";
		scoresTable += "<th>Link Pos.1</th>";
		scoresTable += "<th>Pep Seq.2</th>";
		scoresTable += "<th>Link Pos.2</th>";
		scoresTable += "</tr>";
		for (var j = 0; j < c; j++) {
			scoresTable += matches[j].toTableRow();
		}
		scoresTable += "</table><p>&nbsp;</p>";
		
		linkInfo += scoresTable;
        this.xlv.message(linkInfo);
    }
};

ResidueLink.prototype.getFilteredMatches = function() {
    this.ambig = true;
    this.hd = false;
    this.intraMolecular = false; //i.e. type 1, loop link, intra peptide, internally linked peptide, etc 
    var filteredMatches = new Array();
    var count = this.matches.length;
    for (var i = 0; i < count; i++) {
        var match = this.matches[i];
        if (match.meetsFilterCriteria()) {
            filteredMatches.push(match);
            if (match.isAmbig() === false) {
                this.ambig = false;
            }
            if (match.hd === true) {
                this.hd = true;
            }            
            if (match.type === 1){
				this.intraMolecular = true;
			}
        }
    }
    return filteredMatches;
};

//used when filter changed
ResidueLink.prototype.check = function(filter) {
    if (this.xlv.intraHidden && this.intra) {
        this.hide();
        return false;
    }
    if (this.proteinLink.hidden) {
        this.hide();
        return false;
    }
    if (typeof this.matches === 'undefined' || this.matches == null) {
        if (this.proteinLink.sc >= this.xlv.cutOff) {
            this.show();
            return true;
        } else {
            this.hide();
            return false;
        }
    }
    var filteredMatches = this.getFilteredMatches();
    var countFilteredMatches = filteredMatches.length;
    if (countFilteredMatches > 0) {
        this.tooltip = this.proteinLink.fromProtein.labelText + '_' + this.fromResidue
                    + "-"  + ((this.proteinLink.toProtein != null)? this.proteinLink.toProtein.labelText:'null') 
                    + '_' + this.toResidue + ' (' + countFilteredMatches;
        if (countFilteredMatches == 1) {
            this.tooltip += ' match)';
        } else {
            this.tooltip += ' matches)';
        }
        this.show();
        this.dashedLine(this.ambig);
        if (this.intra === true){
			if (this.hd === true) {
				this.line.setAttribute("stroke", xiNET.homodimerLinkColour.toRGB());			
				this.line.setAttribute("transform", "scale(1, -1)");			
				this.line.setAttribute("stroke-width", xiNET.homodimerLinkWidth);			
				this.highlightLine.setAttribute("transform", "scale(1, -1)");			
			}
			else {
				this.line.setAttribute("stroke", xiNET.defaultSelfLinkColour.toRGB());	
				this.line.setAttribute("transform", "scale(1, 1)");			
				this.line.setAttribute("stroke-width", xiNET.linkWidth);			
				this.highlightLine.setAttribute("transform", "scale(1, 1)");			
			}
		}
        return true;
    }
    else {
        this.hide();
        return false;
    }
};

ResidueLink.prototype.dashedLine = function(dash) {
    if (typeof this.line !== 'undefined' && !isNaN(parseFloat(this.toResidue))) {
        if (dash) {// && !this.dashed){
            if (this.intra) {
                this.dashed = true;
                this.line.setAttribute("stroke-dasharray", (4) + ", " + (4));
            }
            else {
                this.dashed = true;
                this.line.setAttribute("stroke-dasharray", (4 * this.xlv.z) + ", " + (4 * this.xlv.z));
            }
        }
        else if (!dash) {// && this.dashed){
            this.dashed = false;
            this.line.removeAttribute("stroke-dasharray");
        }
    }
};

ResidueLink.prototype.show = function() {
    if (this.xlv.initComplete) {
        if (!this.shown) {
            this.shown = true;
            if (typeof this.line === 'undefined') {
                this.initSVG();
            }
            if (this.intra || this.proteinLink.toProtein === null) {
                this.line.setAttribute("stroke-width", xiNET.linkWidth);
                this.line.setAttribute("d", this.proteinLink.fromProtein.getResidueLinkPath(this));
                this.proteinLink.fromProtein.intraLinksHighlights.appendChild(this.highlightLine);
                this.proteinLink.fromProtein.intraLinks.appendChild(this.line);
            }
            else {
                this.line.setAttribute("stroke-width", this.xlv.z * xiNET.linkWidth);
                this.highlightLine.setAttribute("stroke-width", this.xlv.z * 10);
                this.setLineCoordinates(this.proteinLink.fromProtein);
                this.setLineCoordinates(this.proteinLink.toProtein);
                this.xlv.highlights.appendChild(this.highlightLine);
                this.xlv.res_resLinks.appendChild(this.line);
            }
        }
    }
};

ResidueLink.prototype.hide = function() {
    if (this.xlv.initComplete) {
        if (this.shown) {
            this.shown = false;
            if (this.intra || this.proteinLink.toProtein === null) {
                this.proteinLink.fromProtein.intraLinksHighlights.removeChild(this.highlightLine);
                this.proteinLink.fromProtein.intraLinks.removeChild(this.line);
            }
            else {
                this.xlv.res_resLinks.removeChild(this.line);
                this.xlv.highlights.removeChild(this.highlightLine);
            }
        }
    }
};

ResidueLink.prototype.setLineCoordinates = function(interactor) {
	//a defensive check
    if (interactor.x == null || interactor.y == null) {
        return;
    }
	//non self, not linker modified pep's links only 
	if (this.getToProtein() !== null){
		//don't waste time changing DOM if link not visible
		if (this.shown) {
			var x, y;
			if (this.getFromProtein() === interactor) {
				if (interactor.form === 0) {
						x = interactor.x;
						y = interactor.y;
				}
				else //if (this.form == 1)
				{
					var coord = this.getResidueCoordinates(this.fromResidue, interactor);
					x = coord[0];
					y = coord[1];
				}
				this.line.setAttribute("x1", x);
				this.line.setAttribute("y1", y);
				this.highlightLine.setAttribute("x1", x);
				this.highlightLine.setAttribute("y1", y);				
			}
			else if (this.getToProtein() === interactor) {
				if (interactor.form === 0) {
						x = interactor.x;
						y = interactor.y;
				}
				else //if (this.form == 1)
				{
					var coord = this.getResidueCoordinates(this.toResidue, interactor);
					x = coord[0];
					y = coord[1];
				}
				this.line.setAttribute("x2", x);
				this.line.setAttribute("y2", y);
				this.highlightLine.setAttribute("x2", x);
				this.highlightLine.setAttribute("y2", y);			
			}
		}
	}
}

//calculate the  coordinates of a residue (relative to this.xlv.container)
ResidueLink.prototype.getResidueCoordinates = function(r, interactor) {
    var x = interactor.getResXwithStickZoom(r) * this.xlv.z;
    //var x = (r - (this.size/2)) * Protein.UNITS_PER_RESIDUE * this.stickZoom * this.xlv.z;
    var y = 0;
    if (Protein.UNITS_PER_RESIDUE * interactor.stickZoom > 8) {//if sequence shown
			//~ y = 10 * this.xlv.z;
		var from = this.getFromProtein(), to = this.getToProtein();
		var deltaX = from.x - to.x;
		var deltaY = from.y - to.y;
		var angleBetweenMidPoints = Math.atan2(deltaY, deltaX);
		//todo: tidy up trig code so eveything is always in radians?
		var abmpDeg = angleBetweenMidPoints / (2 * Math.PI) * 360;
		if (abmpDeg < 0) {
			abmpDeg += 360;
		}
		
		var out;//'out' is value we use to decide which side of letter the line is drawn
		if (interactor === from) {
				out = (abmpDeg - from.rotation);
				if (out < 0) {
					out += 360;
				}
				var fyOffset = 5;
				if (out < 180) {
					fyOffset = -5;
				}
				
				y = fyOffset * this.xlv.z;
		}
		else { // interactor === to
				out = (abmpDeg - to.rotation);
				if (out < 0) {
					out += 360;
				}
				var tyOffset = 5;
				if (out > 180) {
					tyOffset = -5;
				}
				y = tyOffset * this.xlv.z;
		}
	}

	var rotated = Protein.rotatePointAboutPoint([x, y],[0,0],interactor.rotation);

    x = rotated[0] + interactor.x;
    y = rotated[1] + interactor.y;
    return [x, y];
};


// used by hover highlight?
ResidueLink.prototype.leastAmbiguousMatches = function() {// yes: plural
    //var leastAmbigMatches
    };

ResidueLink.prototype.toJSON = function() {
    var m = new Array();
    var mc = this.matches.length;
    for (var i = 0; i < mc; i++) {
        m.push(this.matches[i].id);
    }
    return {
    //      m: m
    };
};
