//  xiNET Cross-link Viewer
//  Copyright 2013 Rappsilber Laboratory
//
//  author: Colin Combe
//
//  CLMS.xiNET.P_PLink.js
//  the class representing a protein-protein link

CLMS.xiNET.P_PLink = function (p_pId, crossLink, crosslinkViewer) {
	this.id = p_pId;
    this.crosslinkViewer = crosslinkViewer;
    this.crossLinks = [];

    this.renderedFromProtein =
                    this.crosslinkViewer.renderedProteins.get(crossLink.fromProtein.id);
    this.renderedFromProtein.renderedP_PLinks.push(this);

    if (crossLink.toProtein) {
		this.renderedToProtein =
                    this.crosslinkViewer.renderedProteins.get(crossLink.toProtein.id);
		this.renderedToProtein.renderedP_PLinks.push(this);
	}

    this.name = crossLink.fromProtein.name + " - " + crossLink.toProtein.name;
    //used to avoid some unnecessary manipulation of DOM
    this.shown = false;
    //layout stuff
    this.hidden = false;
    
    this.isSelected = false;
};

//static variable used to calculate width of the background line
CLMS.xiNET.P_PLink.maxNoCrossLinks = 0;
   
CLMS.xiNET.P_PLink.prototype = new CLMS.xiNET.RenderedLink();
   
CLMS.xiNET.P_PLink.prototype.initSVG = function() {
    if (this.crossLinks[0].isSelfLink() === false) {
        this.line = document.createElementNS(CLMS.xiNET.svgns, "line");
        this.highlightLine = document.createElementNS(CLMS.xiNET.svgns, "line");
        this.thickLine = document.createElementNS(CLMS.xiNET.svgns, "line");
    } else {
        this.renderedFromProtein.selfLink = this;

        this.line = document.createElementNS(CLMS.xiNET.svgns, "path");
        this.highlightLine = document.createElementNS(CLMS.xiNET.svgns, 'path');
        this.thickLine = document.createElementNS(CLMS.xiNET.svgns, 'path');
        
		this.initSelfLinkSVG();
    }

    this.line.setAttribute("class", "link");
    this.line.setAttribute("fill", "none");
    this.line.setAttribute("stroke-width", CLMS.xiNET.linkWidth);
    this.line.setAttribute("stroke-linecap", "round");

    this.highlightLine.setAttribute("class", "link");
    this.highlightLine.setAttribute("fill", "none");
    this.highlightLine.setAttribute("stroke", CLMS.xiNET.highlightColour.toRGB());
    this.highlightLine.setAttribute("stroke-width", "10");
    this.highlightLine.setAttribute("stroke-linecap", "round");
    this.highlightLine.setAttribute("stroke-opacity", "0");

    this.thickLine.setAttribute("class", "link");
    this.thickLine.setAttribute("fill", "none");
    this.thickLine.setAttribute("stroke", "lightgray");
    this.thickLine.setAttribute("stroke-linecap", "round");
    this.thickLine.setAttribute("stroke-linejoin", "round");

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
    this.thickLine.onmousedown = function(evt) {
        self.mouseDown(evt);
    };
    this.thickLine.onmousedown = function(evt) {
        self.mouseDown(evt);
    };
    this.thickLine.onmouseover = function(evt) {
        self.mouseOver(evt);
    };
    this.thickLine.onmouseout = function(evt) {
        self.mouseOut(evt);
    };
    this.thickLine.ontouchstart = function(evt) {
        self.touchStart(evt);
    };

}

CLMS.xiNET.P_PLink.prototype.mouseOver = function(evt){
    var p = this.crosslinkViewer.getEventPoint(evt);

	var toHighlight = this.crossLinks.slice(0);
    
    this.crosslinkViewer.model.calcMatchingCrosslinks ("highlights", toHighlight, true, false);
    
    this.crosslinkViewer.model.get("tooltipModel")
						//TODO - reuse other multiLink tooltips in CLM-UI?
                        .set("header", "Linked Protein Pair")
                        .set("contents", [
                            ["From", this.renderedFromProtein.participant.name],
                            ["To", this.renderedToProtein.participant.name],
                            ["Unique Linked Residue Pairs", this.filteredCrossLinkCount],
                            ["Matches", this.filteredMatches? this.filteredMatches.size : "filter not yet applied"]
                        ])
                        .set("location", {pageX: p.x, pageY: p.y})
                    ;
};

// event handler for starting dragging or rotation (or flipping internal links)
CLMS.xiNET.P_PLink.prototype.mouseDown = function(evt) {
    //if a force layout exists then stop it
    if (this.crosslinkViewer.force){
        this.crosslinkViewer.force.stop();
    }
    this.crosslinkViewer.dragElement = this;
    if (evt.shiftKey || evt.ctrlKey) {
        var selection = this.crosslinkViewer.model.get("selection");
        if (this.isSelected){
            var self =this;
            selection = selection.filter(function (d) {
                    return self.crossLinks.indexOf(d) == -1;
            });
        } else {
            selection = selection.concat(this.crossLinks);
        }
        this.crosslinkViewer.model.set("selection",selection);
    } else {
        this.crosslinkViewer.model.set("selection", _.clone(this.crossLinks));
    }
    //store start location
    //var p = this.crosslinkViewer.getEventPoint(evt);
    this.crosslinkViewer.dragStart = evt;//this.crosslinkViewer.mouseToSVG(p.x, p.y);
};

CLMS.xiNET.P_PLink.prototype.touchStart = function(evt) {
    //if a force layout exists then stop it
    if (this.crosslinkViewer.force !== undefined){
        this.crosslinkViewer.force.stop();
    }
    this.crosslinkViewer.dragElement = this;
    this.crosslinkViewer.model.set("selection", this.crossLinks);
    //store start location
    //var p = this.crosslinkViewer.getTouchEventPoint(evt);// oh dear, now broken
    this.crosslinkViewer.dragStart = evt;
}

CLMS.xiNET.P_PLink.prototype.initSelfLinkSVG = function() {
    var path = this.renderedFromProtein.getAggregateSelfLinkPath();
    this.line.setAttribute('d', path);
    this.highlightLine.setAttribute('d', path);
    this.thickLine.setAttribute('d', path);
};

CLMS.xiNET.P_PLink.prototype.showHighlight = function(show) {
    if (this.shown) {
        if (show) {
            this.highlightLine.setAttribute("stroke", CLMS.xiNET.highlightColour.toRGB());
            this.highlightLine.setAttribute("stroke-opacity", "1");
        } else {
            this.highlightLine.setAttribute("stroke", CLMS.xiNET.selectedColour.toRGB());
            if (this.isSelected == false) {
                this.highlightLine.setAttribute("stroke-opacity", "0");
            }
        }
    }
};

CLMS.xiNET.P_PLink.prototype.setSelected = function(select) {
    this.isSelected = select;
    if (select === true) {
        if (this.shown) {
            this.highlightLine.setAttribute("stroke", CLMS.xiNET.selectedColour.toRGB());
            this.highlightLine.setAttribute("stroke-opacity", "1");
        }
   }
    else {
        if (this.shown) {
            this.highlightLine.setAttribute("stroke-opacity", "0");
            this.highlightLine.setAttribute("stroke", CLMS.xiNET.highlightColour.toRGB());
        }
    }
};

CLMS.xiNET.P_PLink.prototype.check = function() {
    this.ambiguous = true;
    this.hd = false;

    var filteredCrossLinks = new Set();
    this.filteredMatches = new Map ();
    var altP_PLinks = new Map();
	
	var crossLinks = this.crossLinks;
	var clCount = crossLinks.length;
    for (var cl = 0; cl < clCount; cl++) {
		var crossLink = crossLinks[cl];
        if (crossLink.filteredMatches_pp.length > 0) {
            filteredCrossLinks.add(crossLink);
        }
        var filteredMatchesAndPepPos =  crossLink.filteredMatches_pp;
        var fm_ppCount = filteredMatchesAndPepPos.length;
        for (var fm_pp = 0; fm_pp < fm_ppCount; fm_pp++) {
            var match = filteredMatchesAndPepPos[fm_pp].match;
            this.filteredMatches.set(match.id, match);
            if (match.hd === true) {
                this.hd = true;
            }
            if (match.crossLinks.length === 1) {
                this.ambiguous = false;
            } else {
				var matchCrossLinks = match.crossLinks;
				var mclCount = matchCrossLinks.length;
				for (var mcl = 0; mcl < mclCount; mcl++) {
					var matchCrossLink = matchCrossLinks[mcl];
					var p_pId = matchCrossLink.fromProtein.id + "-" + matchCrossLink.toProtein.id;
					var p_pLink = this.crosslinkViewer.renderedP_PLinks.get(p_pId);
                
					altP_PLinks.set(p_pLink.id, p_pId);
				}
			}

        }
    }

    this.filteredCrossLinkCount = filteredCrossLinks.size;
    if (this.filteredCrossLinkCount > 0) {
        this.ambiguous = this.ambiguous && altP_PLinks.size > 1;
    }
    return this.filteredCrossLinkCount;
};

CLMS.xiNET.P_PLink.prototype.update = function() {
	if (this.renderedFromProtein.participant.hidden || this.renderedToProtein.participant.hidden
            || this.renderedFromProtein.form == 1 || this.renderedToProtein.form == 1
            || this.filteredCrossLinkCount === 0) {
        this.hide();
    }
	else {
		this.show();
	}
}

CLMS.xiNET.P_PLink.prototype.show = function() {
    if (!this.shown) {
        if (typeof this.line === 'undefined') {
            this.initSVG();
        }
        this.shown = true;
        if (this.renderedFromProtein === this.renderedToProtein) {
            this.thickLine.setAttribute("transform", "translate(" +
                this.renderedFromProtein.x + " " + this.renderedFromProtein.y + ")"  // possibly not neccessary
                + " scale(" + (this.crosslinkViewer.z) + ")");
            this.crosslinkViewer.p_pLinksWide.appendChild(this.thickLine);
            this.line.setAttribute("transform", "translate(" + this.renderedFromProtein.x
                    + " " + this.renderedFromProtein.y + ")" + " scale(" + (this.crosslinkViewer.z) + ")");
            this.highlightLine.setAttribute("transform", "translate(" + this.renderedFromProtein.x
                    + " " + this.renderedFromProtein.y + ")" + " scale(" + (this.crosslinkViewer.z) + ")");

            this.crosslinkViewer.highlights.appendChild(this.highlightLine);
            this.crosslinkViewer.p_pLinks.appendChild(this.line);
        }
        else {
            this.line.setAttribute("stroke-width", this.crosslinkViewer.z * CLMS.xiNET.linkWidth);
            this.highlightLine.setAttribute("stroke-width", this.crosslinkViewer.z * 10);
            this.setLineCoordinates(this.renderedFromProtein);
            this.setLineCoordinates(this.renderedToProtein);
            this.crosslinkViewer.p_pLinksWide.appendChild(this.thickLine);
            this.crosslinkViewer.highlights.appendChild(this.highlightLine);
            this.crosslinkViewer.p_pLinks.appendChild(this.line);
        }
    }
	if (this.filteredCrossLinkCount < 2) {
		this.thickLine.setAttribute("stroke-width", 0);
	} else {
		this.w = this.filteredCrossLinkCount * (45 / CLMS.xiNET.P_PLink.maxNoCrossLinks);
		if (this.renderedFromProtein === this.renderedToProtein) {
			this.thickLine.setAttribute("stroke-width", this.w);
		} else {
			this.thickLine.setAttribute("stroke-width", this.crosslinkViewer.z * this.w);
		}
	}
	if (this.ambiguous){
		if (this.renderedFromProtein === this.renderedToProtein) {
			this.line.setAttribute("stroke-dasharray", (4) + ", " + (4));
		} else {
			this.line.setAttribute("stroke-dasharray", (4 * this.crosslinkViewer.z) + ", " + (4 * this.crosslinkViewer.z));
		}
	}
	else if (!dash){
		this.line.removeAttribute("stroke-dasharray");
	}
	//U R HERE - colours
    this.line.setAttribute("stroke", "black");
    
    this.setSelected(this.isSelected);
};

CLMS.xiNET.P_PLink.prototype.hide = function() {
    if (this.shown) {
        this.shown = false;
        if (this.renderedFromProtein === this.renderedToProtein) {
            this.crosslinkViewer.p_pLinksWide.removeChild(this.thickLine);
            this.crosslinkViewer.highlights.removeChild(this.highlightLine);
            this.crosslinkViewer.p_pLinks.removeChild(this.line);
        } else {
            this.crosslinkViewer.p_pLinksWide.removeChild(this.thickLine);
            this.crosslinkViewer.highlights.removeChild(this.highlightLine);
            this.crosslinkViewer.p_pLinks.removeChild(this.line);
        }
    }
};

CLMS.xiNET.P_PLink.prototype.setLineCoordinates = function(interactor) {
    if (this.renderedFromProtein != this.renderedToProtein){
        if (this.shown) {
            if (this.renderedFromProtein === interactor) {
                        this.line.setAttribute("x1", interactor.x);
                        this.line.setAttribute("y1", interactor.y);
                        this.highlightLine.setAttribute("x1", interactor.x);
                        this.highlightLine.setAttribute("y1", interactor.y);
                        this.thickLine.setAttribute("x1", interactor.x);
                        this.thickLine.setAttribute("y1", interactor.y);
            }
            else if (this.renderedToProtein === interactor) {
                        this.line.setAttribute("x2", interactor.x);
                        this.line.setAttribute("y2", interactor.y);
                        this.highlightLine.setAttribute("x2", interactor.x);
                        this.highlightLine.setAttribute("y2", interactor.y);
                        this.thickLine.setAttribute("x2", interactor.x);
                        this.thickLine.setAttribute("y2", interactor.y);
            }
        }
    }
}

CLMS.xiNET.P_PLink.prototype.getOtherEnd = function(protein) {
    if (this.fromProtein === protein) {
        return this.toProtein;
    }
    else {
        return this.fromProtein;
    }
};
