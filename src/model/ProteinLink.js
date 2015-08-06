//		xiNET Cross-link Viewer
//		Copyright 2013 Rappsilber Laboratory
//
//		author: Colin Combe
//
//		ProteinLink.js
// 		the class representing a protein-protein link

"use strict";

//static variable used to calculate width of the background line
ProteinLink.maxNoResidueLinks = 0;

ProteinLink.prototype = new xiNET.Link();

function ProteinLink(id, fromP, toP, xlvController) {
    this.id = id;
    this.residueLinks = d3.map();
    this.controller = xlvController;
    this.fromProtein = fromP; //its the object. not the ID number
    this.toProtein = toP; //its the object. not the ID number
    this.ambig = false;
    this.tooltip = this.id;
    //used to avoid some unnecessary manipulation of DOM
    this.shown = false;
    //layout stuff
    this.hidden = false;
    
    if (!this.selfLink()) {
        this.line = document.createElementNS(xiNET.svgns, "line");
        this.highlightLine = document.createElementNS(xiNET.svgns, "line");
        this.fatLine = document.createElementNS(xiNET.svgns, "line");
    } else {
        this.line = document.createElementNS(xiNET.svgns, "path");
        this.highlightLine = document.createElementNS(xiNET.svgns, 'path');
        this.fatLine = document.createElementNS(xiNET.svgns, 'path');
    }
    this.line.setAttribute("class", "link");
    this.line.setAttribute("fill", "none");
    this.line.setAttribute("stroke", "black");
    this.line.setAttribute("stroke-width", 1);
    this.line.setAttribute("stroke-linecap", "round");
    this.highlightLine.setAttribute("class", "link");
    this.highlightLine.setAttribute("fill", "none");
    this.highlightLine.setAttribute("stroke", xiNET.highlightColour.toRGB());
    this.highlightLine.setAttribute("stroke-width", "10");
    this.highlightLine.setAttribute("stroke-linecap", "round");
    this.highlightLine.setAttribute("stroke-opacity", "0");
    this.fatLine.setAttribute("class", "link");
    this.fatLine.setAttribute("fill", "none");
    this.fatLine.setAttribute("stroke", "lightgray");
    this.fatLine.setAttribute("stroke-linecap", "round");
    this.fatLine.setAttribute("stroke-linejoin", "round");
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
    
    this.fatLine.onmousedown = function(evt) {
        self.mouseDown(evt);
    };
    this.fatLine.onmousedown = function(evt) {
        self.mouseDown(evt);
    };
    this.fatLine.onmouseover = function(evt) {
        self.mouseOver(evt);
    };
    this.fatLine.onmouseout = function(evt) {
        self.mouseOut(evt);
    };
    this.fatLine.ontouchstart = function(evt) {
        self.touchStart(evt);
    };
    
    this.isSelected = false;
}

ProteinLink.prototype.selfLink = function() {
	return (this.fromProtein === this.toProtein);
}

ProteinLink.prototype.initSelfLinkSVG = function() {
	var path = this.fromProtein.getAggregateSelfLinkPath();
	this.line.setAttribute('d', path);
	this.highlightLine.setAttribute('d', path);
	this.fatLine.setAttribute('d', path);
};

ProteinLink.prototype.getFromProtein = function() {
    return this.fromProtein;
};

ProteinLink.prototype.getToProtein = function() {
    return this.toProtein;
};

ProteinLink.prototype.showHighlight = function(show, andAlternatives) {
    if (typeof andAlternatives === 'undefined') {
        andAlternatives = false;
    }
    if (this.shown) {
        if (show) {
			this.highlightLine.setAttribute("stroke", xiNET.highlightColour.toRGB());
            this.highlightLine.setAttribute("stroke-opacity", "1");
        } else {
			this.highlightLine.setAttribute("stroke", xiNET.selectedColour.toRGB());
			if (this.isSelected == false) {
				this.highlightLine.setAttribute("stroke-opacity", "0");
			}
			
        }
    }
    if (andAlternatives && this.ambig) {
        //TODO: we want to highlight smallest possible set of alternatives
        var rc = this.residueLinks.values().length;
        for (var rl = 0; rl < rc; rl++) {
            var resLink = this.residueLinks.values()[rl];
            var mc = resLink.matches.length;
            for (var m = 0; m < mc; m++) {
                var match = resLink.matches[m][0];
                if (match.isAmbig()) {
                    var mrc = match.residueLinks.length;
                    for (var mrl = 0; mrl < mrc; mrl++) {
                        var resLink = match.residueLinks[mrl];
                        if (resLink.shown === true) {
							if (resLink.isSelected == false) {
								resLink.showHighlight(show, false);
							}
                        }
                        if (resLink.proteinLink.shown === true) {
							{
								resLink.proteinLink.showHighlight(show, false);
							}
                        }
                    }
                }

            }
        }
    }
};

ProteinLink.prototype.setSelected = function(select) {
    if (select === true && this.isSelected === false) {
        this.controller.selectedLinks.set(this.id, this);//ok, 
        this.isSelected = true;
        this.highlightLine.setAttribute("stroke", xiNET.selectedColour.toRGB());
		this.highlightLine.setAttribute("stroke-opacity", "1");
		this.controller.linkSelectionChanged();
    }
    else if (select === false && this.isSelected === true) {
        this.controller.selectedLinks.remove(this.id);
        this.isSelected = false;
        this.highlightLine.setAttribute("stroke-opacity", "0");
        this.highlightLine.setAttribute("stroke", xiNET.highlightColour.toRGB());
		this.controller.linkSelectionChanged();
	}
};



//its an array of match id's its going to return
ProteinLink.prototype.getFilteredMatches = function() {
    var resLinks = this.residueLinks.values();
    var resLinkCount = resLinks.length;
    var filteredMatches = d3.map();
    for (var i = 0; i < resLinkCount; i++) {
        var resLink = resLinks[i];
        var mCount = resLink.matches.length;
        for (var m = 0; m < mCount; m++) {
            var match = resLink.matches[m];
            if (match.meetsFilterCriteria()) {
                filteredMatches.set(match.id);
            }
        }
    }
    return filteredMatches.keys();
};

ProteinLink.prototype.check = function() {
	//currently no representation of monolinks at proteinLink level (hence checks for this.toProtein !== null)
	if (this.fromProtein.isParked || (this.toProtein !== null && this.toProtein.isParked)) {
        this.hide();
        return false;
    }
    if (this.selfLink() && this.controller.selfLinksShown === false) {
        if (this.fromProtein.form === 0) {
            this.hide();
        } else {
            var resLinks = this.residueLinks.values();
            var resLinkCount = resLinks.length;
            for (var i = 0; i < resLinkCount; i++) {
                resLinks[i].hide();
            }
        }
        return false;
    }
    if (this.hidden) {
        if (this.fromProtein.form === 0 && (this.toProtein !== null && this.toProtein.form === 0)) {
            this.hide();
        } else {
            var resLinks = this.residueLinks.values();
            var resLinkCount = resLinks.length;
            for (var i = 0; i < resLinkCount; i++) {
                resLinks[i].hide();
            }
        }
        return false;
    }
	var resLinks = this.residueLinks.values();
	var resLinkCount = resLinks.length;
	this.hd = false;
	if (this.fromProtein.form === 0 && (this.toProtein !== null && this.toProtein.form === 0)) {

		this.ambig = true;
		var filteredResLinks = [];
		var filteredMatches = d3.map();
		var altProteinLinks = d3.map();
		for (var i = 0; i < resLinkCount; i++) {
			var resLink = resLinks[i];
			var resLinkMeetsCriteria = false;
			if (resLink.matches){
				var mCount = resLink.matches.length;
				for (var m = 0; m < mCount; m++) {
					var match = resLink.matches[m][0];
					if (match.meetsFilterCriteria()) {
						if (match.hd === true) {
							this.hd = true;
						}
						if (resLinkMeetsCriteria === false) {
							resLinkMeetsCriteria = true;
							filteredResLinks.push(resLink);
						}
						filteredMatches.set(match.id, match);
						if (match.isAmbig()) {
							for (var mrl = 0; mrl < match.residueLinks.length; mrl++) {
								altProteinLinks.set(match.residueLinks[mrl].proteinLink.id);
							}
						}
						else {
							this.ambig = false;
						}
					}
				}
			}
			else {
				filteredResLinks.push(resLink);
			}
		}
		var filteredResLinkCount = filteredResLinks.length;
		if (filteredResLinkCount > 0) {
			this.tooltip = this.id + ', ' + filteredResLinkCount + ' unique cross-link';
			if (filteredResLinkCount > 1)
				this.tooltip += 's';
			this.tooltip += ' (' + filteredMatches.keys().length;
			if (filteredMatches.keys().length === 1) {
				this.tooltip += ' match)';
			} else {
				this.tooltip += ' matches)';
			}
			this.w = filteredResLinkCount * (45 / ProteinLink.maxNoResidueLinks);
			//acknowledge following line is a bit strange
			this.ambig = (this.ambig && (altProteinLinks.keys().length > 1));
			this.dashedLine(this.ambig);
			
			if (this.controller.groups.values().length > 1) {
				var groupCheck = d3.set();
				var matchArray = filteredMatches.values();
				var countFilteredMatches = matchArray.length;
				for (var i=0; i < countFilteredMatches; i++) {
					var match = matchArray[i];
					groupCheck.add(match.group);
				}
				if (groupCheck.values().length == 1){
					var c = this.controller.linkColours(groupCheck.values()[0]);
					//~ //console.log(">"+groupCheck.values()[0] + "\t" + c);
					this.line.setAttribute("stroke", c);				
				}
				else  {
					this.line.setAttribute("stroke", "#000000");
				}
				//else this.line.setAttribute("stroke", "purple");//shouldn't happen
			}
			else if (this.selfLink()) {
				if (this.hd) {
					this.line.setAttribute("stroke", xiNET.homodimerLinkColour.toRGB());			
					this.line.setAttribute("stroke-width", xiNET.homodimerLinkWidth);			
				}
				else {
					this.line.setAttribute("stroke", "black");	
					this.line.setAttribute("stroke-width", 1);			
				}
			}
			this.show();
			return true;
		}
		else {
			this.hide();
			return false;
		}
	}
	else {
		if (!(this.toProtein === null && this.fromProtein.form === 0)){
			var showedResResLink = false;
			//at least one end was in stick form
			for (var rl = 0; rl < resLinkCount; rl++) {
				if (resLinks[rl].check() === true) {
					showedResResLink = true;
				}
			}
			return showedResResLink; //is this most sensible thing to return? Or false becuase ProteinLink was not shown? 
		}
	}
};

ProteinLink.prototype.dashedLine = function(dash) {
    if (dash){
        if (this.selfLink() === true) {
			this.line.setAttribute("stroke-dasharray", (4) + ", " + (4));
		} else {
			this.line.setAttribute("stroke-dasharray", (4 * this.controller.z) + ", " + (4 * this.controller.z));
		}
    }
    else if (!dash){
        this.line.removeAttribute("stroke-dasharray");
    }
};

ProteinLink.prototype.show = function() {
        // TODO?: check how some of this compares to whats in Refresh.js, scale()
        if (!this.shown) {
            this.shown = true;
            if (this.selfLink()) {
                if (ProteinLink.maxNoResidueLinks > 1) {
                    this.fatLine.setAttribute("transform", "translate(" +
                        this.fromProtein.x + " " + this.fromProtein.y + ")"  // possibly not neccessary
                        + " scale(" + (this.controller.z) + ")");
                    this.controller.p_pLinksWide.appendChild(this.fatLine);
                }
				this.line.setAttribute("transform", "translate(" + this.fromProtein.x
						+ " " + this.fromProtein.y + ")" + " scale(" + (this.controller.z) + ")");
				this.highlightLine.setAttribute("transform", "translate(" + this.fromProtein.x
						+ " " + this.fromProtein.y + ")" + " scale(" + (this.controller.z) + ")");

                this.controller.highlights.appendChild(this.highlightLine);
                this.controller.p_pLinks.appendChild(this.line);
            }
            else {
                this.line.setAttribute("stroke-width", this.controller.z * 1);
                this.highlightLine.setAttribute("stroke-width", this.controller.z * 10);
                this.setLineCoordinates(this.fromProtein);
                this.setLineCoordinates(this.toProtein);
                if (ProteinLink.maxNoResidueLinks > 1) {
                    this.controller.p_pLinksWide.appendChild(this.fatLine);
                }
                this.controller.highlights.appendChild(this.highlightLine);
                this.controller.p_pLinks.appendChild(this.line);
            }
        }
        if (ProteinLink.maxNoResidueLinks > 1) {
            if (this.selfLink()) {
                this.fatLine.setAttribute("stroke-width", this.w);
            } else {
                this.fatLine.setAttribute("stroke-width", this.controller.z * this.w);
            }
        }
};

ProteinLink.prototype.hide = function() {
    if (this.shown) {
        this.shown = false;
        if (this.selfLink()) {
            //TODO: be more selective about when to show 'fatLine'
            if (ProteinLink.maxNoResidueLinks > 1) {
                this.controller.p_pLinksWide.removeChild(this.fatLine);
            }
            this.controller.highlights.removeChild(this.highlightLine);
            this.controller.p_pLinks.removeChild(this.line);
        } else {
            if (ProteinLink.maxNoResidueLinks > 1) {
                this.controller.p_pLinksWide.removeChild(this.fatLine);
            }
            this.controller.highlights.removeChild(this.highlightLine);
            this.controller.p_pLinks.removeChild(this.line);
        }
    }
};

ProteinLink.prototype.setLineCoordinates = function(interactor) {
	//if not linker modified pep
	if (this.selfLink() !== false && this.getToProtein() !== null){
		//don't waste time changing DOM if this not visible
		if (this.shown) {
			if (this.getFromProtein() === interactor) {
						this.line.setAttribute("x1", interactor.x);
						this.line.setAttribute("y1", interactor.y);
						this.highlightLine.setAttribute("x1", interactor.x);
						this.highlightLine.setAttribute("y1", interactor.y);
						this.fatLine.setAttribute("x1", interactor.x);
						this.fatLine.setAttribute("y1", interactor.y);
			}
			else if (this.getToProtein() === interactor) {
						this.line.setAttribute("x2", interactor.x);
						this.line.setAttribute("y2", interactor.y);
						this.highlightLine.setAttribute("x2", interactor.x);
						this.highlightLine.setAttribute("y2", interactor.y);
						this.fatLine.setAttribute("x2", interactor.x);
						this.fatLine.setAttribute("y2", interactor.y);
			}
		}
	}
}

ProteinLink.prototype.getOtherEnd = function(protein) {
    if (this.fromProtein === protein) {
        return this.toProtein;
    }
    else {
        return this.fromProtein;
    }
};
