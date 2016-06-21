//	xiNET Cross-link Viewer
//	Copyright 2013 Rappsilber Laboratory
//
//  This product includes software developed at
//  the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//
//	author: Colin Combe
//
//	RenderedLink.js


//'superclass' for CLMS.xiNET.RenderedCrossLink, CLMS.xiNET.RenderedProteinLink
CLMS.xiNET.RenderedLink = function (){};

// event handler for starting dragging or rotation (or flipping internal links)
CLMS.xiNET.RenderedLink.prototype.mouseDown = function(evt) {
//    //console.log("clickable mouse down");
	this.crosslinkViewer.preventDefaultsAndStopPropagation(evt);//see MouseEvents.js
	//if a force layout exists then stop it
	if (this.crosslinkViewer.force){
		this.crosslinkViewer.force.stop();
	}
	this.crosslinkViewer.dragElement = this;
	
	if (this.renderedFromProtein.form === 0 && this.renderedToProtein.form === 0){
		var fromProtId = this.renderedFromProtein.interactor.id;
		var toProtId = this.renderedToProtein.interactor.id;		
		var allCrossLinks = this.crosslinkViewer.model.get("clmsModel").get("crossLinks").values();
		var selection = [];
		for (crossLink of allCrossLinks){
			if (crossLink.fromProtein.id === fromProtId && crossLink.toProtein.id === toProtId){
				selection.push(crossLink);
			}
		}
		this.crosslinkViewer.model.set("selection", selection);
	} else {
		this.crosslinkViewer.model.set("selection",[this.crossLink]);
	}
	
	//store start location
	var p = this.crosslinkViewer.getEventPoint(evt);// seems to be correct, see above
	this.crosslinkViewer.dragStart = this.crosslinkViewer.mouseToSVG(p.x, p.y);
	return false;
};

// highlight on mouseover, all 'subclasses' need a showHighlight method
CLMS.xiNET.RenderedLink.prototype.mouseOver = function(evt){
	
	var p = this.crosslinkViewer.getEventPoint(evt);// seems to be correct, see below
			
	
	this.crosslinkViewer.preventDefaultsAndStopPropagation(evt);
	if (this.renderedFromProtein.form === 0 && this.renderedToProtein.form === 0){
		var fromProtId = this.renderedFromProtein.interactor.id;
		var toProtId = this.renderedToProtein.interactor.id;		
		var allCrossLinks = this.crosslinkViewer.model.get("clmsModel").get("crossLinks").values();
		var selection = [];
		for (crossLink of allCrossLinks){
			if (crossLink.fromProtein.id === fromProtId && crossLink.toProtein.id === toProtId){
				selection.push(crossLink);
			}
		}
		this.crosslinkViewer.model.set("highlights", selection);
	} else {
		this.crosslinkViewer.model.set("highlights",[this.crossLink]);
	}
	
//	this.crosslinkViewer.setTooltip(this.tooltip);
this.crosslinkViewer.model.get("tooltipModel")
                    .set("header", "Linked Residue Pair")
                    .set("contents", [
                        ["From", this.crossLink.fromResidue, this.crossLink.fromProtein.name],
                        ["To", this.crossLink.toResidue, this.crossLink.toProtein.name],
                        ["Current<br>Matches", this.crossLink.filteredMatches.length]
                    ])
                    .set("location", {pageX: p.x, pageY: p.y})
                ;
};

CLMS.xiNET.RenderedLink.prototype.mouseOut = function(evt){
	//console.log("clickable mouse out");
	//~ this.crosslinkViewer.preventDefaultsAndStopPropagation(evt);
	//    if (this.crosslinkViewer.dragElement == undefined) {
	//~ this.showHighlight(false, true);
	this.crosslinkViewer.model.set("highlights",[]);
	//    } else {
	//        if (this.crosslinkViewer.dragElement != this){// todo: improve, actually needs to know
	//            // if drag element is part of dragging subgraph
	//            this.showHighlight(false, true);
	//        }
	//    }
//	this.crosslinkViewer.hideTooltip();
	//~ return false;
	
	this.crosslinkViewer.model.get("tooltipModel").set("contents", null);
}

CLMS.xiNET.RenderedLink.prototype.touchStart = function(evt) {
//    //console.log("clickable mouse down");
	this.crosslinkViewer.preventDefaultsAndStopPropagation(evt);//see MouseEvents.js
	//if a force layout exists then stop it
	if (this.crosslinkViewer.force !== undefined){
		this.crosslinkViewer.force.stop();
	}
	this.crosslinkViewer.dragElement = this;
			this.crosslinkViewer.clearSelection();
			this.setSelected(true);
	//store start location
	var p = this.crosslinkViewer.getTouchEventPoint(evt);// seems to be correct, see above
	this.crosslinkViewer.dragStart = this.crosslinkViewer.mouseToSVG(p.x, p.y);
	return false;
}


