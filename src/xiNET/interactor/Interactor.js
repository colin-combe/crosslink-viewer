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

//// TODO:
// xiNET.Interactor.prototype.showHighlight = function(show) {
//     //     // default do nothing
//     //     /*
//     //     if (show === true) {
//     //         //~ this.highlight.setAttribute("stroke", xiNET.highlightColour.toRGB());
//     //         this.highlight.setAttribute("stroke-opacity", "1");
//     //     } else {
//     //         //~ if (this.isSelected == false) {
//     //                 this.highlight.setAttribute("stroke-opacity", "0");
//     //         //~ }
//     //         //~ this.highlight.setAttribute("stroke", xiNET.selectedColour.toRGB());
//     //     }
//     //     * */
//     // };
//     // xiNET.RenderedProtein.prototype.showHighlight = function(show) {
//     var d3HighSel = d3.select(this.highlight);
//     this.isHighlighted = show ? true : false; // mjg apr 18
//     if (show === true) {
//         //~ this.highlight.setAttribute("stroke", CLMS.xiNET.highlightColour.toRGB());
//         d3HighSel
//             .classed("selectedProtein", false)
//             .classed("highlightedProtein", true)
//             .attr("stroke-opacity", "1");
//     } else {
//         if (this.isSelected == false) {
//             d3HighSel.attr("stroke-opacity", "0");
//         }
//         //~ this.highlight.setAttribute("stroke", CLMS.xiNET.selectedColour.toRGB());
//         d3HighSel
//             .classed("selectedProtein", true)
//             .classed("highlightedProtein", false);
//     }
// };
//
// xiNET.Interactor.prototype.setSelected = function(select) {
//     //do nothing
//     /*
//      if (select && this.isSelected === false) {
//          this.controller.selected.set(this.id, this);
//          this.isSelected = true;
//          this.highlight.setAttribute("stroke", Config.selectedColour);
//          this.highlight.setAttribute("stroke-opacity", "1");
//      }
//      else if (select === false && this.isSelected === true) {
//          this.controller.selected.remove(this.id);
//          this.isSelected = false;
//          this.highlight.setAttribute("stroke-opacity", "0");
//          this.highlight.setAttribute("stroke", Config.highlightColour);
//      }*/
// };
//
// // more accurately described as setting transform for top svg elements (sets scale also)
// xiNET.Interactor.prototype.setPosition = function(xPos, yPos) {
//     this.px = this.ix;
//     this.py = this.iy;
//     this.ix = xPos;
//     this.iy = yPos;
//     console.log("!", this.ix, this.iy);
//
//     // if (this.expanded == true) {
//     console.log(this.name, "before", this.upperGroup.getAttribute("transform"));
//     this.upperGroup.setAttribute("transform", "translate(" + this.ix + " " + this.iy + ")" +
//         " scale(" + (this.controller.z) + ") "); // + "rotate(" + this.rotation + ")");
//     console.log(this.name, "after", this.upperGroup.getAttribute("transform"));
//         // } else {
//     //     this.upperGroup.setAttribute("transform", "translate(" + this.x + " " + this.y + ")" +
//     //         " scale(" + (this.controller.z) + ") ");
//     // }
// };

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
