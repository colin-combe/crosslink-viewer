//		xiNET cross-link viewer
//		Copyright 2013 Rappsilber Laboratory
//
//		author: Colin Combe
//
//		ProteinLink.js
// 		the class representing a protein-protein link

//static variable used to calculate width of the background line
ProteinLink.maxNoResidueLinks = 0;

ProteinLink.prototype = new xinet.Link();

function ProteinLink(id, fromP, toP, xlvController) {
    this.id = id;
    this.residueLinks = d3.map();
    this.xlv = xlvController;
    this.fromProtein = fromP; //its the object. not the ID number
    this.toProtein = toP; //its the object. not the ID number
    this.intra = false;
    if (this.fromProtein === this.toProtein) {
        this.intra = true;
    }
    this.ambig = false;
    this.tooltip = this.id;
    //used to avoid some unnecessary manipulation of DOM
    this.shown = false;
    this.dashed = false;
    //layout stuff
    this.hidden = false;
}

ProteinLink.prototype.initSVG = function() {
    if (!this.intra) {
        this.line = document.createElementNS(xinet.svgns, "line");
        this.highlightLine = document.createElementNS(xinet.svgns, "line");
        this.fatLine = document.createElementNS(xinet.svgns, "line");
    } else {
        function trig(radius, angleDegrees) {
            //x = rx + radius * cos(theta) and y = ry + radius * sin(theta)
            var radians = (angleDegrees / 360) * Math.PI * 2;
            return {
                x: (radius * Math.cos(radians)),
                y: -(radius * Math.sin(radians))
            };
        }
        var intraR = this.fromProtein.getBlobRadius() + 7;
        var r = 45;
        var arcStart = trig(intraR, 25 + r);
        var arcEnd = trig(intraR, -25 + r);
        var cp1 = trig(intraR, 40 + r);
        var cp2 = trig(intraR, -40 + r);
        var path = 'M0,0 Q' + cp1.x + ',' + cp1.y + ' ' + arcStart.x + ',' + arcStart.y
        + ' A' + intraR + ',' + intraR + ' 0 0,1 ' + arcEnd.x + ',' + arcEnd.y
        + ' Q' + cp2.x + ',' + cp2.y + ' 0,0';
        this.line = document.createElementNS(xinet.svgns, "path");
        this.line.setAttribute('d', path);
        this.highlightLine = document.createElementNS(xinet.svgns, 'path');
        this.highlightLine.setAttribute('d', path);
        this.fatLine = document.createElementNS(xinet.svgns, 'path');
        this.fatLine.setAttribute('d', path);
    }

    this.line.setAttribute("class", "link");
    this.line.setAttribute("fill", "none");
    this.line.setAttribute("stroke", "black");
    this.line.setAttribute("stroke-width", "1");
    this.line.setAttribute("stroke-linecap", "round");
    this.highlightLine.setAttribute("class", "link");
    this.highlightLine.setAttribute("fill", "none");
    this.highlightLine.setAttribute("stroke", xinet.highlightColour.toRGB());
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
    //TODO: problem here for big data sets - temp hack, remove some mouse listeners
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
        //        this.xlv.setTooltip(this.tooltip);
        self.mouseOver(evt);
    };
    this.highlightLine.onmouseout = function(evt) {
        //         this.xlv.hideTooltip();
        self.mouseOut(evt);
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
    
    this.isSelected = false;
}
;
ProteinLink.prototype.getFromProtein = function() {
    return this.fromProtein;
};
ProteinLink.prototype.getToProtein = function() {
    return this.toProtein;
};
ProteinLink.prototype.showHighlight = function(show, andAlternatives) {
    if (typeof andAlternatives === 'undefined') {
        andAlternatives = false;//TODO: tEMP HACK
    }
    if (this.shown) {
        if (show) {
            this.highlightLine.setAttribute("stroke-opacity", "1");
        } else {
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
                var match = resLink.matches[m];
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
    if (select && this.isSelected === false) {
        this.xlv.selected.set(this.id, this);//ok, 
        this.isSelected = true;
		this.highlightLine.setAttribute("stroke-opacity", "1");
    }
    else if (select === false && this.isSelected === true) {
        this.xlv.selected.remove(this.id);
        this.isSelected = false;
		this.highlightLine.setAttribute("stroke-opacity", "0");
    }
};

//used when link clicked
ProteinLink.prototype.showID = function() {
    if (typeof send_match_ids === 'function') {
        var matchIDs
        var matches = this.getFilteredMatches();
        var c = matches.length;
        var matchIDs = "";
        var firstMatch = true;
        for (var i = 0; i < c; i++) {
            if (firstMatch === true) {
                firstMatch = false;
            }
            else {
                matchIDs = matchIDs + ",";
            }
            matchIDs = matchIDs + matches[i];
        }//
        send_match_ids(matchIDs);
    }
    else {
        var linkInfo = "<h5>" + this.fromProtein.name + " [" + this.fromProtein.id
        + "] <br>to<br> " + this.toProtein.name + " [" + this.toProtein.id
        + "]</h5>";
        
        //todo: remove this code duplication
        var resLinks = this.residueLinks.values();
        var resLinkCount = resLinks.length;
      
		var filteredResLinks = new Array();
        var filteredMatches = d3.map();
        var altProteinLinks = d3.map();
          
        for (var i = 0; i < resLinkCount; i++) {
			var resLink = resLinks[i];
			var resLinkMeetsCriteria = false;
			var mCount = resLink.matches.length;
			for (var m = 0; m < mCount; m++) {
				var match = resLink.matches[m];
				if (match.meetsFilterCriteria()) {
					if (resLinkMeetsCriteria === false) {
						resLinkMeetsCriteria = true;
						filteredResLinks.push(resLink);
					}
					filteredMatches.set(match.id);
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
		var filteredResLinkCount = filteredResLinks.length;

            
		linkInfo += "<h5>" + filteredResLinkCount
			+ " unique residue - residue linkage site";
		if (filteredResLinkCount > 1){
			 linkInfo += "s";
		}
		linkInfo += ":</h5>";
   
        
      for (var i = 0; i < filteredResLinkCount; i ++ ){
            var rl = filteredResLinks [i];
            linkInfo += "<h7>" + this.fromProtein.name + ", residue " + rl.fromResidue + " - "
            + this.toProtein.name + ", residue " + rl.toResidue + "</h7>";
            var matches = rl.getFilteredMatches();
			var c = matches.length;
			linkInfo += "<p>" + c + " match";
			if (c > 1){
				linkInfo += "es:</p>";
			} else {
				linkInfo += ":</p>";
			}
			var scores = "<table>";//<tr><th>Id</th><th>Score</th></tr>";
			for (var j = 0; j < c; j++) {
			   scores += "<tr><td><p>" + matches[j].id
						+ "</p></td><td><p>" + 
						((typeof matches[j].score !== 'undefined')? matches[j].score.toFixed(2) : 'undefined')
						+ "</p></td></tr>";
			}
			scores += "</table><p>&nbsp;</p>";
			linkInfo += scores;
        }
        this.xlv.message(linkInfo);
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
    if (this.fromProtein.isParked || this.toProtein.isParked) {
        this.hide();
        return false;
    }
    if (this.xlv.intraHidden && this.intra) {
        if (this.fromProtein.form === 0 && this.toProtein.form === 0) {
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
        if (this.fromProtein.form === 0 && this.toProtein.form === 0) {
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
    if (typeof this.sc !== 'undefined') {
        if (this.sc >= this.xlv.cutOff) {
            if (this.fromProtein.form === 0 && this.toProtein.form === 0) {
                this.show();
            } else {
                var resLinks = this.residueLinks.values();
                var resLinkCount = resLinks.length;
                for (var i = 0; i < resLinkCount; i++) {
                    resLinks[i].show();
                }
            }
            return true;
        }
        else {
            if (this.fromProtein.form === 0 && this.toProtein.form === 0) {
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
    }
    else {
        var resLinks = this.residueLinks.values();
        var resLinkCount = resLinks.length;
        if (this.fromProtein.form === 0 && this.toProtein.form === 0) {

            this.ambig = true;
            var filteredResLinks = new Array();
            var filteredMatches = d3.map();
            var altProteinLinks = d3.map();
            for (var i = 0; i < resLinkCount; i++) {
                var resLink = resLinks[i];
                var resLinkMeetsCriteria = false;
                var mCount = resLink.matches.length;
                for (var m = 0; m < mCount; m++) {
                    var match = resLink.matches[m];
                    if (match.meetsFilterCriteria()) {
                        if (resLinkMeetsCriteria === false) {
                            resLinkMeetsCriteria = true;
                            filteredResLinks.push(resLink);
                        }
                        filteredMatches.set(match.id);
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
                //acknowledge following line is a bit confusing...
                this.ambig = (this.ambig && (altProteinLinks.keys().length > 1));
                this.dashedLine(this.ambig);
                this.show();
                return true;
            }
            else {
                this.hide();
                return false;
            }
        }
        else {
            var showedResResLink = false;
            //at least one end was in stick form
            for (var rl = 0; rl < resLinkCount; rl++) {
                if (resLinks[rl].check() === true) {
                    showedResResLink = true;
                }
            }
            //TODO: fix this - always returning true if one end is stick
            return showedResResLink;
        }
    }
};
ProteinLink.prototype.dashedLine = function(dash) {
    //TODO: oops, bit of a hack..
    if (typeof this.line === 'undefined'){
        this.initSVG();
    }
    if (dash){// && !this.dashed) {
        this.dashed = true;
        this.line.setAttribute("stroke-dasharray", (4 * this.xlv.z) + ", " + (4 * this.xlv.z));
    }
    else if (!dash){// && this.dashed) {
        this.dashed = false;
        this.line.removeAttribute("stroke-dasharray");
    }
};
ProteinLink.prototype.show = function() {
    if (this.xlv.initComplete) {
        // TODO: check how some of this compares to whats in Refresh.js, scale()
        if (!this.shown) {
            this.shown = true;
            if (typeof this.line === 'undefined') {
                this.initSVG();
            }
            if (this.intra) {
                //this.line.setAttribute("stroke-width", 1);//this.xlv.z*

                if (ProteinLink.maxNoResidueLinks > 1) {
                    this.fatLine.setAttribute("transform", "translate(" +
                        this.fromProtein.x + " " + this.fromProtein.y + ")"  // possibly not neccessary
                        + " scale(" + (this.xlv.z) + ")");
                    this.xlv.p_pLinksWide.appendChild(this.fatLine);
                }

                this.fromProtein.upperGroup.appendChild(this.highlightLine);
                this.fromProtein.upperGroup.appendChild(this.line);
                this.fromProtein.upperGroup.appendChild(this.fromProtein.blob);
                this.fromProtein.upperGroup.appendChild(this.fromProtein.circDomains);
            }
            else {
                this.line.setAttribute("stroke-width", this.xlv.z * 1);
                this.highlightLine.setAttribute("stroke-width", this.xlv.z * 10);
                this.fromProtein.setLineCoordinates(this);
                this.toProtein.setLineCoordinates(this);
                if (ProteinLink.maxNoResidueLinks > 1) {
                    this.xlv.p_pLinksWide.appendChild(this.fatLine);
                }
                this.xlv.highlights.appendChild(this.highlightLine);
                this.xlv.p_pLinks.appendChild(this.line);
            }
        }
        if (ProteinLink.maxNoResidueLinks > 1) {
            if (this.intra) {
                this.fatLine.setAttribute("stroke-width", this.w);
            } else {
                this.fatLine.setAttribute("stroke-width", this.xlv.z * this.w);
            }
        }
    }
};
ProteinLink.prototype.hide = function() {
    if (this.shown) {
        this.shown = false;
        if (this.intra) {
            //TODO: be more selective about when to show 'fatLine'
            if (ProteinLink.maxNoResidueLinks > 1) {
                this.xlv.p_pLinksWide.removeChild(this.fatLine);
            }
            this.fromProtein.upperGroup.removeChild(this.highlightLine);
            this.fromProtein.upperGroup.removeChild(this.line);
        } else {
            if (ProteinLink.maxNoResidueLinks > 1) {
                this.xlv.p_pLinksWide.removeChild(this.fatLine);
            }
            this.xlv.highlights.removeChild(this.highlightLine);
            this.xlv.p_pLinks.removeChild(this.line);
        }
    }
};
ProteinLink.prototype.getOtherEnd = function(protein) {
    if (this.fromProtein === protein) {
        return this.toProtein;
    }
    else {
        return this.fromProtein;
    }
};
ProteinLink.prototype.toJSON = function() {
    return {
        //    id : this.id,
        sc: this.residueLinks.values()[0].matches[0].score,
        rl: this.residueLinks
    };
};
