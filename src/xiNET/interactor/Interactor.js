//      xiNET Interaction Viewer
//      Copyright 2013 Rappsilber Laboratory
//
//      This product includes software developed at
//      the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//
//      xiNET.Interactor.js
//
//      authors: Colin Combe

var xiNET = xiNET || {};

xiNET.Interactor = function () {
};

xiNET.Interactor.prototype.mouseDown = function (evt) {
    this.controller.preventDefaultsAndStopPropagation(evt);
    this.controller.d3cola.stop();
    this.controller.dragElement = this;
    this.controller.dragStart = evt;
    this.controller.mouseMoved = false;

    //d3.select(".custom-menu-margin").style("display", "none");
    //d3.select(".group-custom-menu-margin").style("display", "none");
    return false;
};

xiNET.Interactor.prototype.mouseOver = function (evt) {
    const p = this.controller.getEventPoint(evt);
    this.controller.model.get("tooltipModel")
        .set("header", CLMSUI.modelUtils.makeTooltipTitle.interactor(this.participant))
        .set("contents", CLMSUI.modelUtils.makeTooltipContents.interactor(this.participant))
        .set("location", {
            pageX: p.x,
            pageY: p.y
        });
};

xiNET.Interactor.prototype.mouseOut = function (evt) {
    //this.controller.preventDefaultsAndStopPropagation(evt); // isn't stopping mouseOut in controller getting called
    this.controller.model.setHighlightedProteins([]);
    this.controller.model.get("tooltipModel").set("contents", null);
};

xiNET.Interactor.prototype.showHighlight = function (show) {
    const d3HighSel = d3.select(this.highlight);
    if (show === true) {
        d3HighSel
            .classed("selectedProtein", false)
            .classed("highlightedProtein", true)
            .attr("stroke-opacity", "1");
    } else {
        if (!this.isSelected) {
            d3HighSel.attr("stroke-opacity", "0");
        }
        d3HighSel
            .classed("selectedProtein", true)
            .classed("highlightedProtein", false);
    }
    this.isHighlighted = !!show; // mjg apr 18
};

xiNET.Interactor.prototype.setSelected = function (select) {
    const d3HighSel = d3.select(this.highlight);
    if (select === true) {
        d3HighSel
            .classed("selectedProtein", true)
            .classed("highlightedProtein", false)
            .attr("stroke-opacity", "1");
    } else {
        d3HighSel
            .attr("stroke-opacity", "0")
            .classed("selectedProtein", false)
            .classed("highlightedProtein", true);
    }
    this.isSelected = !!select;
};

xiNET.Interactor.prototype.getAggregateSelfLinkPath = function () {
    const intraR = this.getBlobRadius() + 7;
    const sectorSize = 45;
    const arcStart = xiNET.Interactor.trig(intraR, 25 + sectorSize);
    const arcEnd = xiNET.Interactor.trig(intraR, -25 + sectorSize);
    const cp1 = xiNET.Interactor.trig(intraR, 40 + sectorSize);
    const cp2 = xiNET.Interactor.trig(intraR, -40 + sectorSize);
    return 'M 0,0 ' +
        'Q ' + cp1.x + ',' + -cp1.y + ' ' + arcStart.x + ',' + -arcStart.y +
        ' A ' + intraR + ' ' + intraR + ' 0 0 1 ' + arcEnd.x + ',' + -arcEnd.y +
        ' Q ' + cp2.x + ',' + -cp2.y + ' 0,0';
}

xiNET.Interactor.rotatePointAboutPoint = function (p, o, theta) {
    theta = (theta / 360) * Math.PI * 2; //TODO: change theta arg to radians not degrees
    const rx = Math.cos(theta) * (p[0] - o[0]) - Math.sin(theta) * (p[1] - o[1]) + o[0];
    const ry = Math.sin(theta) * (p[0] - o[0]) + Math.cos(theta) * (p[1] - o[1]) + o[1];
    return [rx, ry];
}

//// TODO:
/*
xiNET.Interactor.prototype.checkLinks = function() {
    function checkAll(linkMap) {
        var links = linkMap.values();
        var c = links.length;
        for (var l = 0; l < c; l++) {
            links[l].check();
        }
    }
    checkAll(this.naryLinks);
    checkAll(this.binaryLinks);
    checkAll(this.sequenceLinks);
    if (this.selfLink !== null) {
        this.selfLink.check();
    }
}*/


// update all lines (e.g after a move)
xiNET.Interactor.prototype.setAllLinkCoordinates = function () {
    for (let pl of this.renderedP_PLinks) {
        pl.setLineCoordinates(this);
    }
    for (let rcl of this.renderedCrosslinks) {
        rcl.setLineCoordinates(this);
    }
};

xiNET.Interactor.trig = function (radius, angleDegrees) { //TODO: change theta arg to radians not degrees
    //x = rx + radius * cos(theta) and y = ry + radius * sin(theta)
    const radians = (angleDegrees / 360) * Math.PI * 2;
    return {
        x: (radius * Math.cos(radians)),
        y: (radius * Math.sin(radians))
    };
};

// xiNET.Interactor.prototype.getX = function() {
//     return this.ix;
// }
//
// xiNET.Interactor.prototype.getY = function() {
//     return this.iy;
// }

xiNET.Interactor.prototype.updateName = function () {
    this.labelTextNode.textContent = this.participant.name;
};

xiNET.Interactor.prototype.showLabel = function (show) {
    d3.select(this.labelSVG).attr("display", show ? null : "none");
};

xiNET.Interactor.prototype.getRenderedParticipant = function () {
    if (this.inCollapsedGroup()) {
        const groupIt = this.parentGroups.values();
        const firstGroup = groupIt.next().value;
        return firstGroup.getRenderedParticipant();
    } else {
        return this;
    }
}

xiNET.Interactor.prototype.inCollapsedGroup = function () {
    // todo - sanity check, if firstgroup.expanded then parentGroups.size == 1
    // console.log("**", this.participant? this.participant.name : "group", this.parentGroups.size);
    if (this.parentGroups.size > 0) {
        // const groupIt = this.parentGroups.values();
        // const firstGroup = groupIt.next().value;
        // if (firstGroup.expanded) {
        //     return firstGroup.inCollapsedGroup();
        // } else {
        //     return true;
        // }
        for (let pg of this.parentGroups.values()) {
            if (!pg.expanded) {
                // if (this.parentGroups.size > 1) {alert("somethings gone wrong");}
                return true;
            } else {
                return pg.inCollapsedGroup();
            }
        }
    }
    return false;
}


// xiNET.Interactor.prototype.getTopParentGroups = function(results) {
//     if (!results) {
//         results = new Set();
//     }
//     for (var pg of this.parentGroups) {
//         if (pg.parentGroups.size) {
//             pg.getTopParentGroups(results);
//         } else {
//             results.add(pg);
//         }
//     }
//     return results;
// }
