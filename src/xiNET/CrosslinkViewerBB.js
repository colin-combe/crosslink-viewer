//  xiNET
//
//  Colin Combe, Martin Graham, Rappsilber Laboratory, 2015
//
//  CrosslinkViewerBB.js

var CLMSUI = CLMSUI || {};

CLMSUI.CrosslinkViewer = Backbone.View.extend({
    events: {
        "click .collapse": "collapseParticipant",
        "click .collapseGroup": "collapseParticipant",
        "click .ungroup": "ungroup"
    },

    svgns: "http://www.w3.org/2000/svg", // namespace for svg elements
    linkWidth: 1, // default line width
    //static var's signifying Controller's status
    STATES: {
        MOUSE_UP: 0,
        SELECT_PAN: 1,
        DRAGGING: 2,
        ROTATING: 3
    },

    barScales: [0.01, 0.2, 0.5, 0.8, 1, 2, 4, 8],

    initialize: function () {
        // this.debug = true;
        this.fixedSize = this.model.get("xinetFixedSize");
        var self = this;

        //avoids prob with 'save - web page complete'
        d3.select(this.el).selectAll("*").remove();

        //protein context menu
        const customMenuSel = d3.select(this.el)
            .append("div").classed("custom-menu-margin", true)
            .append("div").classed("custom-menu", true)
            .append("ul");
        customMenuSel.append("li").classed("collapse", true).text("Collapse");
        const scaleButtonsListItemSel = customMenuSel.append("li").text("Scale: ");
        const scaleButtons = scaleButtonsListItemSel.selectAll("ul.custom-menu")
            .data(this.barScales)
            .enter()
            .append("div")
            .attr("class", "barScale")
            .append("label");
        scaleButtons.append("span")
            .text(function (d) {
                if (d === 8) return "AA";
                else return d;
            });
        scaleButtons.append("input")
            // .attr ("id", function(d) { return d*100; })
            .attr("class", function (d) {
                return "scaleButton scaleButton_" + (d * 100);
            })
            .attr("name", "scaleButtons")
            .attr("type", "radio")
            .on("change", function (d) {
                self.contextMenuParticipant.setStickScale(d, self.contextMenuPoint);
            });
        const contextMenu = d3.select(".custom-menu-margin").node();
        contextMenu.onmouseout = function (evt) {
            let e = evt.toElement || evt.relatedTarget;
            do {
                if (e === this) return;
                e = e.parentNode;
            } while (e);
            self.contextMenuParticipant = null;
            d3.select(this).style("display", "none");
        };

        //group context menu
        const groupCustomMenuSel = d3.select(this.el)
            .append("div").classed("group-custom-menu-margin", true)
            .append("div").classed("custom-menu", true)
            .append("ul");
        groupCustomMenuSel.append("li").classed("collapseGroup", true).text("Collapse");
        groupCustomMenuSel.append("li").classed("ungroup", true).text("Ungroup");
        // groupCustomMenuSel.append("li").classed("ungroupAll", true).text("Clear All Groups");
        const groupContextMenu = d3.select(".group-custom-menu-margin").node();
        groupContextMenu.onmouseout = function (evt) {
            let e = evt.toElement || evt.relatedTarget;
            do {
                if (e === this) return;
                e = e.parentNode;
            } while (e);
            self.contextMenuParticipant = null;
            d3.select(this).style("display", "none");
        };


        //create SVG elemnent
        this.svgElement = d3.select(this.el).append("div").style("height", "100%").append("svg").node(); //document.createElementNS(this.svgns, "svg");
        this.svgElement.setAttribute("width", "100%");
        this.svgElement.setAttribute("height", "100%");
        this.svgElement.setAttribute("style", "pointer-events:visible");
        //add listeners
        var self = this;
        this.svgElement.onmousedown = function (evt) {
            self.mouseDown(evt);
        };
        this.svgElement.onmousemove = function (evt) {
            self.mouseMove(evt);
        };
        this.svgElement.onmouseup = function (evt) {
            self.mouseUp(evt);
        };
        this.svgElement.onmouseout = function (evt) {
            self.mouseOut(evt);
        };

        this.el.oncontextmenu = function (evt) {
            if (evt.preventDefault) { // necessary for addEventListener, works with traditional
                evt.preventDefault();
            }
            if (evt.stopPropogation) {
                evt.stopPropagation();
            }
            evt.returnValue = false; // necessary for attachEvent, works with traditional
            return false; // works with traditional, not with attachEvent or addEventListener
        };

        const mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel"; //FF doesn't recognize mousewheel as of FF3.x
        if (document.attachEvent) { //if IE (and Opera depending on user setting)
            this.svgElement.attachEvent("on" + mousewheelevt, function (evt) {
                self.mouseWheel(evt);
            });
        } else if (document.addEventListener) { //WC3 browsers
            this.svgElement.addEventListener(mousewheelevt, function (evt) {
                self.mouseWheel(evt);
            }, false);
        }

        this.lastMouseUp = new Date().getTime();

        this.svgElement.ontouchstart = function (evt) {
            self.touchStart(evt);
        };
        this.svgElement.ontouchmove = function (evt) {
            self.touchMove(evt);
        };
        this.svgElement.ontouchend = function (evt) {
            self.touchEnd(evt);
        };

        // various SVG groups needed
        this.wrapper = document.createElementNS(this.svgns, "g"); //in effect, a hack for fact firefox doesn't support getCTM on svgElement
        const identM = this.svgElement.createSVGMatrix();
        const s = "matrix(" + identM.a + "," + identM.b + "," + identM.c + "," + identM.d + "," + identM.e + "," + identM.f + ")";
        this.wrapper.setAttribute("transform", s);
        this.container = document.createElementNS(this.svgns, "g");
        this.container.setAttribute("id", "container");
        this.wrapper.appendChild(this.container);

        this.groupsSVG = document.createElementNS(this.svgns, "g");
        this.groupsSVG.setAttribute("id", "groupsSVG");
        this.container.appendChild(this.groupsSVG);

        this.p_pLinksWide = document.createElementNS(this.svgns, "g");
        this.p_pLinksWide.setAttribute("id", "p_pLinksWide");
        this.container.appendChild(this.p_pLinksWide);

        this.proteinLower = document.createElementNS(this.svgns, "g");
        this.proteinLower.setAttribute("id", "proteinLower");
        this.container.appendChild(this.proteinLower);

        this.highlights = document.createElementNS(this.svgns, "g");
        this.highlights.setAttribute("class", "highlights"); //proteins also contain highlight groups
        this.container.appendChild(this.highlights);

        this.res_resLinks = document.createElementNS(this.svgns, "g");
        this.res_resLinks.setAttribute("id", "res_resLinks");
        this.container.appendChild(this.res_resLinks);

        this.p_pLinks = document.createElementNS(this.svgns, "g");
        this.p_pLinks.setAttribute("id", "p_pLinks");
        this.container.appendChild(this.p_pLinks);

        this.proteinUpper = document.createElementNS(this.svgns, "g");
        this.proteinUpper.setAttribute("id", "proteinUpper");
        this.container.appendChild(this.proteinUpper);

        this.svgElement.appendChild(this.wrapper);

        //is a d3 selection unlike those above
        this.selectionRectSel = d3.select(this.svgElement).append("rect")
            .attr("x", 10)
            .attr("y", 10)
            .attr("width", 50)
            .attr("height", 100)
            .attr("stroke", "red")
            .attr("stroke-dasharray", "4,4")
            .attr("stroke-dashoffset", "32")
            .style("animation", "dash 2s linear infinite")
            .attr("fill", "none")
            .attr("display", "none");

        this.clear();
        this.update();

        this.listenTo(this.model, "filteringDone", this.render);
        this.listenTo(this.model, "hiddenChanged", this.hiddenProteinsChanged);
        this.listenTo(this.model, "change:highlights", this.highlightedLinksChanged);
        this.listenTo(this.model, "change:selection", this.selectedLinksChanged);

        this.listenTo(this.model, "change:linkColourAssignment currentColourModelChanged", this.render);
        this.listenTo(this.model, "change:proteinColourAssignment currentProteinColourModelChanged", this.proteinMetadataUpdated);

        this.listenTo(this.model.get("annotationTypes"), "change:shown", this.setAnnotations);
        this.listenTo(this.model.get("alignColl"), "bulkAlignChange", this.setAnnotations);
        this.listenTo(this.model, "change:selectedProteins", this.selectedProteinsChanged);
        this.listenTo(this.model, "change:highlightedProteins", this.highlightedProteinsChanged);
        this.listenTo(this.model.get("clmsModel"), "change:matches", this.update);

        this.listenTo(CLMSUI.vent, "proteinMetadataUpdated", this.proteinMetadataUpdated);
        this.listenTo(this.model, "change:groups", this.groupsChanged);

        this.listenTo(CLMSUI.vent, "xinetSvgDownload", this.downloadSVG);
        this.listenTo(CLMSUI.vent, "xinetAutoLayout", this.autoLayout);
        this.listenTo(CLMSUI.vent, "xinetLoadLayout", this.loadLayout);
        this.listenTo(CLMSUI.vent, "xinetSaveLayout", this.saveLayout);

        this.listenTo(this.model, "change:xinetShowLabels", this.showLabels);
        this.listenTo(this.model, "change:xinetFixedSize", this.setFixedSize);
        this.listenTo(this.model, "change:xinetThickLinks", this.render);
        this.listenTo(this.model, "change:xinetPpiSteps", this.render);
        return this;
    },

    clear: function () {
        if (this.d3cola) { // cola layout
            this.d3cola.stop();
        }
        this.d3cola = cola.d3adaptor()
            // .groupCompactness(1e-5)
            .avoidOverlaps(true);

        d3.select(this.groupsSVG).selectAll("*").remove();
        d3.select(this.p_pLinksWide).selectAll("*").remove();
        d3.select(this.highlights).selectAll("*").remove();
        d3.select(this.p_pLinks).selectAll("*").remove();
        d3.select(this.res_resLinks).selectAll("*").remove();
        d3.select(this.proteinLower).selectAll("*").remove();
        d3.select(this.proteinUpper).selectAll("*").remove();

        this.dragElement = null;
        this.dragStart = null;

        this.renderedProteins = new Map();
        this.renderedCrosslinks = new Map();
        this.renderedP_PLinks = new Map();
        // all xiNET.Groups in play
        this.groupMap = new Map();
        // only those xiNET.Groups that would currently be used by autolayout
        // this.groupArr = new Map();

        this.z = 1;
        this.container.setAttribute("transform", "scale(1)");
        this.state = this.STATES.MOUSE_UP;
    },

    collapseParticipant: function (evt) {
        d3.select(".custom-menu-margin").style("display", "none");
        this.contextMenuParticipant.setExpanded(false, this.contextMenuPoint);
        this.contextMenuParticipant = null;
    },

    ungroup: function (evt) {
        d3.select(".custom-menu-margin").style("display", "none");
        this.model.get("groups").delete(this.contextMenuParticipant.id);
        this.model.trigger("change:groups");
        this.contextMenuParticipant = null;
    },

    render: function () {
        this.d3cola.stop();

        if (this.wasEmpty) {
            this.wasEmpty = false;
            if (this.model.get("clmsModel").get("xiNETLayout")) {
                this.loadLayout(this.model.get("clmsModel").get("xiNETLayout").layout);
            } else {
                this.autoLayout();
            }
        }

        for (let p_pLink of this.renderedP_PLinks.values()) {
            p_pLink.check();
            p_pLink.update();
        }
        for (let cLink of this.renderedCrosslinks.values()) {
            cLink.check();
        }
    },

    update: function () {
        this.d3cola.stop();

        this.wasEmpty = (this.renderedProteins.size === 0);

        // calculate default bar scale
        let maxSeqLength = 0;
        for (let participant of this.model.get("clmsModel").get("participants").values()) {
            if (participant.is_decoy === false && this.renderedProteins.has(participant.id) === false) {
                const newProt = new xiNET.RenderedProtein(participant, this);
                this.renderedProteins.set(participant.id, newProt);

                const protSize = participant.size;
                if (protSize > maxSeqLength) {
                    maxSeqLength = protSize;
                }
            }
        }
        const width = this.svgElement.parentNode.clientWidth;
        const defaultPixPerRes = ((width * 0.8) - xiNET.RenderedProtein.LABELMAXLENGTH) / maxSeqLength;

        // https://stackoverflow.com/questions/12141150/from-list-of-integers-get-number-closest-to-a-given-value/12141511#12141511
        function takeClosest(myList, myNumber) {
            const bisect = d3.bisector(function (d) {
                return d;
            }).left;
            const pos = bisect(myList, myNumber);
            if (pos === 0 || pos === 1) {
                return myList[1]; // don't return smallest scale as default
            }
            if (pos === myList.length) {
                return myList[myList.length - 1]
            }
            return myList[pos - 1];
        }

        this.defaultBarScale = takeClosest(this.barScales, defaultPixPerRes);

        const expand = this.renderedProteins.values().size < 5;
        for (let rp of this.renderedProteins.values()) {
            this.proteinLower.appendChild(rp.lowerGroup);
            this.proteinUpper.appendChild(rp.upperGroup);
            if (!rp.stickZoom) {
                rp.stickZoom = this.defaultBarScale;
            }
            rp.scale();
            if (expand) {
                rp.toStickNoTransition()
            }
        }

        for (let crossLink of this.model.get("clmsModel").get("crossLinks").values()) {
            if (!crossLink.isDecoyLink() && !crossLink.isLinearLink()) {
                if (!this.renderedCrosslinks.has(crossLink.id)) {
                    const renderedCrossLink = new xiNET.RenderedCrosslink(crossLink, this);
                    this.renderedCrosslinks.set(crossLink.id, renderedCrossLink);
                    const toId = crossLink.toProtein ? crossLink.toProtein.id : "null";
                    const p_pId = crossLink.fromProtein.id + "-" + toId;
                    let p_pLink = this.renderedP_PLinks.get(p_pId);
                    if (typeof p_pLink == 'undefined') {
                        p_pLink = new xiNET.P_PLink(p_pId, crossLink, this);
                        this.renderedP_PLinks.set(p_pId, p_pLink);
                    }
                    p_pLink.crossLinks.push(crossLink);
                }
            }
        }
    },

    zoomToFullExtent: function () {
        // this.container.setAttribute("transform", "scale(1)");
        const width = this.svgElement.parentNode.clientWidth;
        const height = this.svgElement.parentNode.clientHeight;
        const bbox = this.container.getBBox();
        const xr = width / bbox.width;
        const yr = height / bbox.height;
        let scaleFactor;
        if (yr < xr) {
            scaleFactor = yr;
        } else {
            scaleFactor = xr;
        }
        // if (scaleFactor > 1) {
        //     scaleFactor = scaleFactor / 0.8;
        // }
        this.container.setAttribute("transform", "scale(" + scaleFactor + ") translate(" + ((width / scaleFactor) - bbox.width - bbox.x) + " " + -bbox.y + ")");
        this.scale();
    },

    scale: function () {
        this.z = this.container.getCTM().inverse().a;
        for (let prot of this.renderedProteins.values()) {
            prot.setPositionFromXinet(prot.ix, prot.iy); // this rescales the protein
            if (prot.expanded)
                prot.setAllLinkCoordinates();
        }
        for (let renderedCrossLink of this.renderedCrosslinks.values()) {
            if (renderedCrossLink.shown && renderedCrossLink.crossLink.isSelfLink() === false) {
                renderedCrossLink.line.setAttribute("stroke-width", this.z * this.linkWidth);
                renderedCrossLink.highlightLine.setAttribute("stroke-width", this.z * 10);
                if (renderedCrossLink.crossLink.ambiguous === true) {
                    renderedCrossLink.dashedLine(true); //rescale spacing of dashes
                }
            }
        }
        for (let p_pLink of this.renderedP_PLinks.values()) {
            if (p_pLink.renderedFromProtein !== p_pLink.renderedToProtein &&
                !p_pLink.renderedFromProtein.expanded && !p_pLink.renderedToProtein.expanded) {
                if (p_pLink.line) {
                    p_pLink.line.setAttribute("stroke-width", this.z * this.linkWidth);
                    p_pLink.highlightLine.setAttribute("stroke-width", this.z * 10);
                    p_pLink.thickLine.setAttribute("stroke-width", this.z * p_pLink.w);
                    if (p_pLink.ambiguous) {
                        p_pLink.dashedLine(true); //rescale spacing of dashes
                    }
                }
            }
        }
        for (let g of this.groupMap.values()) {
            if (!g.hidden) {
                if (g.expanded) {
                    g.updateExpandedGroup();
                } else {
                    g.setPositionFromXinet(g.ix, g.iy);
                }
            }
        }
    },

    setAnnotations: function () {
        for (let renderedProtein of this.renderedProteins.values()) {
            renderedProtein.setPositionalFeatures();
        }
    },

    setCTM: function (element, matrix) {
        const s = "matrix(" + matrix.a + "," + matrix.b + "," + matrix.c + "," + matrix.d + "," + matrix.e + "," + matrix.f + ")";
        element.setAttribute("transform", s);
    },

    /**
     * Handle mousedown event.
     */
    mouseDown: function (evt) {
        //prevent default, but allow propogation
        evt.preventDefault();
        //stop layout
        this.d3cola.stop();
        this.dragStart = evt;
        this.state = this.STATES.SELECT_PAN;
        this.mouseMoved = false;
        this.toSelect = [];
        d3.select(".custom-menu-margin").style("display", "none");
        d3.select(".group-custom-menu-margin").style("display", "none");
    },

    // dragging/rotation/panning/selecting
    mouseMove: function (evt) {
        if (this.dragStart) {
            const p = this.getEventPoint(evt); // seems to be correct, see below
            const c = p.matrixTransform(this.container.getCTM().inverse());
            var ds = this.getEventPoint(this.dragStart).matrixTransform(this.container.getCTM().inverse());
            var dx = ds.x - c.x;
            var dy = ds.y - c.y;
            if (Math.sqrt(dx * dx + dy * dy) > (5 * this.z)) {
                this.mouseMoved = true;
            }
            if (this.dragElement != null) { //dragging or rotating
                if (this.state === this.STATES.DRAGGING) {
                    // we are currently dragging things around
                    let ox, oy, nx, ny;
                    if (this.dragElement.participant) {
                        //its a protein - drag it, or drag all selcted if it is selected
                        var toDrag;
                        if (this.dragElement.isSelected === false) {
                            toDrag = [this.dragElement.participant];
                        } else {
                            toDrag = this.model.get("selectedProteins");
                        }

                        for (var d = 0; d < toDrag.length; d++) {
                            var renderedProtein = this.renderedProteins.get(toDrag[d].id);
                            ox = renderedProtein.ix;
                            oy = renderedProtein.iy;
                            nx = ox - dx;
                            ny = oy - dy;
                            renderedProtein.setPositionFromXinet(nx, ny);
                            renderedProtein.setAllLinkCoordinates();
                        }
                    } else if (this.dragElement.type === "group") {
                        if (this.dragElement.expanded) {
                            var toDrag = this.dragElement.renderedParticipants;
                            for (var d = 0; d < toDrag.length; d++) {
                                var renderedProtein = toDrag[d];
                                ox = renderedProtein.ix;
                                oy = renderedProtein.iy;
                                nx = ox - dx;
                                ny = oy - dy;
                                renderedProtein.setPositionFromXinet(nx, ny);
                                renderedProtein.setAllLinkCoordinates();
                            }
                            this.dragElement.updateExpandedGroup();
                        } else {
                            ox = this.dragElement.ix;
                            oy = this.dragElement.iy;
                            nx = ox - dx;
                            ny = oy - dy;
                            this.dragElement.setPositionFromXinet(nx, ny);
                            this.dragElement.setAllLinkCoordinates();
                        }
                    }
                    this.dragStart = evt;
                } else if (this.state === this.STATES.ROTATING) {
                    // Distance from mouse x and center of stick.
                    const _dx = c.x - this.dragElement.ix;
                    // Distance from mouse y and center of stick.
                    const _dy = c.y - this.dragElement.iy;
                    //see http://en.wikipedia.org/wiki/Atan2#Motivation
                    let centreToMouseAngleRads = Math.atan2(_dy, _dx);
                    if (this.whichRotator === 0) {
                        centreToMouseAngleRads = centreToMouseAngleRads + Math.PI;
                    }
                    const centreToMouseAngleDegrees = centreToMouseAngleRads * (360 / (2 * Math.PI));
                    this.dragElement.setRotation(centreToMouseAngleDegrees);
                    this.dragElement.setAllLinkCoordinates();
                } else { //not dragging or rotating yet, maybe we should start
                    // don't start dragging just on a click - we need to move the mouse a bit first
                    if (Math.sqrt(dx * dx + dy * dy) > (5 * this.z)) {
                        this.state = this.STATES.DRAGGING;

                    }
                }
            } else if (this.state === this.STATES.SELECT_PAN) {
                if (!this.model.get("xinetDragToPan")) {
                    //SELECT
                    var ds = this.getEventPoint(this.dragStart).matrixTransform(this.wrapper.getCTM().inverse());
                    var dx = c.x - ds.x;
                    var dy = c.y - ds.y;

                    const sx = p.x - ds.x;
                    const sy = p.y - ds.y;

                    let rectX = ds.x;
                    if (sx < 0) {
                        rectX += sx;
                    }
                    let rectY = ds.y;
                    if (sy < 0) {
                        rectY += sy;
                    }

                    this.selectionRectSel.attr("display", "inline")
                        .attr("x", rectX)
                        .attr("y", rectY)
                        .attr("width", Math.abs(sx))
                        .attr("height", Math.abs(sy));

                    const renderedParticipantArr = CLMS.arrayFromMapValues(this.renderedProteins);
                    const rpCount = renderedParticipantArr.length;
                    for (let rp = 0; rp < rpCount; rp++) {
                        const renderedParticipant = renderedParticipantArr[rp];
                        if (renderedParticipant.hidden !== true) {
                            const svgRect = this.svgElement.createSVGRect();
                            svgRect.x = rectX;
                            svgRect.y = rectY;
                            svgRect.width = Math.abs(sx);
                            svgRect.height = Math.abs(sy);
                            const intersects = this.svgElement.getIntersectionList(svgRect, renderedParticipant.upperGroup);
                            if (intersects.length > 0) {
                                renderedParticipant.showHighlight(true);
                                this.toSelect.push(renderedParticipant.participant);
                            } else {
                                renderedParticipant.showHighlight(false);
                            }
                        }

                    }


                } else {
                    //PAN
                    var ds = this.getEventPoint(this.dragStart).matrixTransform(this.container.getCTM().inverse());
                    var dx = c.x - ds.x;
                    var dy = c.y - ds.y;

                    this.setCTM(this.container,
                        this.container.getCTM()
                            .translate(dx, dy)
                    );
                    this.dragStart = evt;
                }
            }
        }
    },

    // this ends all dragging and rotating
    mouseUp: function (evt) {
        this.preventDefaultsAndStopPropagation(evt);

        //remove selection rect, may not be shown but just do this now
        this.selectionRectSel.attr("display", "none");

        //eliminate some spurious mouse up events
        const time = new Date().getTime();
        if ((time - this.lastMouseUp) > 150) {

            const rightclick = (evt.button === 2);

            const p = this.getEventPoint(evt);
            const c = p.matrixTransform(this.container.getCTM().inverse());

            if (this.dragElement != null) { // a thing has been clicked
                if (!(this.state === this.STATES.DRAGGING || this.state === this.STATES.ROTATING)) { //not dragging or rotating
                    if (this.dragElement.ix || this.dragElement.type === "group") { //if the thing is protein or group, in pther words not a link, todo-tidy
                        if (rightclick) {
                            if (!this.dragElement.expanded) {
                                this.dragElement.setExpanded(true);
                            } else {
                                this.model.get("tooltipModel").set("contents", null);
                                this.contextMenuParticipant = this.dragElement;
                                this.contextMenuPoint = c;

                                if (this.dragElement.type !== "group") {
                                    var menu = d3.select(".custom-menu-margin")
                                    menu.style("top", (evt.pageY - 20) + "px").style("left", (evt.pageX - 20) + "px").style("display", "block");
                                    d3.select(".scaleButton_" + (this.dragElement.stickZoom * 100)).property("checked", true)
                                } else {
                                    var menu = d3.select(".group-custom-menu-margin")
                                    menu.style("top", (evt.pageY - 20) + "px").style("left", (evt.pageX - 20) + "px").style("display", "block");
                                }
                            }
                        } else if (this.dragElement.participant) { // its a protein
                            var add = evt.ctrlKey || evt.shiftKey;
                            this.model.setSelectedProteins([this.dragElement.participant], add);
                        }
                    }
                } else if (this.state === this.STATES.ROTATING) {
                    //round protein rotation to nearest 5 degrees (looks neater)
                    this.dragElement.setRotation(Math.round(this.dragElement.rotation / 5) * 5);
                    this.dragElement.setAllLinkCoordinates();
                } else {
                } //end of protein drag; do nothing
            } else if (!this.mouseMoved) { //unselect crosslinks
                var add = evt.ctrlKey || evt.shiftKey;
                this.model.setMarkedCrossLinks("selection", [], false, add);
                this.model.setSelectedProteins([]);
            } else if (!this.model.get("xinetDragToPan")) {
                var add = evt.ctrlKey || evt.shiftKey;
                this.model.setSelectedProteins(this.toSelect, add);
            }

            this.dragElement = null;
            this.whichRotator = -1;
            this.state = this.STATES.MOUSE_UP;

        }


        this.lastMouseUp = time;
        return false;
    },

    /**
     * Handle mouse wheel event.
     */
    mouseWheel: function (evt) {
        this.preventDefaultsAndStopPropagation(evt);
        this.d3cola.stop();
        let delta;
        //see http://stackoverflow.com/questions/5527601/normalizing-mousewheel-speed-across-browsers
        if (evt.wheelDelta) {
            delta = evt.wheelDelta / 3600; // Chrome/Safari
        } else {
            delta = evt.detail / -90; // Mozilla
        }
        const z = 1 + delta;
        const g = this.container;
        const p = this.getEventPoint(evt);
        const c = p.matrixTransform(g.getCTM().inverse());
        const k = this.svgElement.createSVGMatrix().translate(c.x, c.y).scale(z).translate(-c.x, -c.y);
        this.setCTM(g, g.getCTM().multiply(k));
        this.scale();
        return false;
    },

    mouseOut: function (evt) {
        // don't, causes prob's - RenderedInteractor mouseOut getting getting propogated?
        // d3.select(".custom-menu-margin").style("display", "none");
        // d3.select(".group-custom-menu-margin").style("display", "none");
    },

    getEventPoint: function (evt) {
        const p = this.svgElement.createSVGPoint();
        let element = this.svgElement.parentNode;
        let top = 0,
            left = 0;
        do {
            top += element.offsetTop || 0;
            left += element.offsetLeft || 0;
            element = element.offsetParent;
        } while (element);
        p.x = evt.clientX - left; //CLMSUI.utils.crossBrowserElementX(evt);//, this.svgElement);
        p.y = evt.clientY - top; //CLMSUI.utils.crossBrowserElementY(evt);//, this.svgElement);
        return p;
    },

    //stop event propogation and defaults; only do what we ask
    preventDefaultsAndStopPropagation: function (evt) {
        if (evt.stopPropagation)
            evt.stopPropagation();
        if (evt.cancelBubble != null)
            evt.cancelBubble = true;
        if (evt.preventDefault)
            evt.preventDefault();
        // evt.returnValue = false;
    },

    saveLayout: function (callback) {
        const layout = {};
        layout.proteins = Array.from(this.renderedProteins.values());
        layout.groups = this.model.get("groups");
        const myJSONText = JSON.stringify(layout, null);
        console.log("SAVING", layout);
        callback(myJSONText.replace(/\\u0000/gi, ''));
    },

    loadLayout: function (layout) {
        console.log("LOADING", layout);
        let proteinPositions, groups;
        // for backwards compatibility (after groups added to layout)
        if (layout.proteins) {
            proteinPositions = layout.proteins;
            groups = layout.groups;
        } else {
            proteinPositions = layout;
        }
        let layoutIsDodgy = false;
        for (let protLayout of proteinPositions) {
            const protein = this.renderedProteins.get(protLayout.id);
            if (protein !== undefined) {
                protein.setPositionFromXinet(protLayout["x"], protLayout["y"]);
                if (typeof protLayout['rot'] !== 'undefined') {
                    protein.rotation = protLayout["rot"] - 0;
                }
                protein.ix = protLayout["x"];
                protein.iy = protLayout["y"];
                protein.newForm = protLayout["form"] - 0;
                if (this.barScales.indexOf(+protLayout["stickZoom"]) > -1) {
                    protein.stickZoom = protLayout["stickZoom"];
                }
                protein.rotation = protLayout["rot"] - 0;
                protein.flipped = protLayout["flipped"];
                protein.participant.manuallyHidden = protLayout["manuallyHidden"];
            } else {
                layoutIsDodgy = true;
                console.log("! protein in layout but not search:" + protLayout.id);
            }
        }

        for (let rp of this.renderedProteins.values()) {
            rp.setEverything();
        }

        if (groups) {
            this.model.set("groups", groups);
        } else {
            this.model.trigger("hiddenChanged");
        }

        this.model.get("filterModel").trigger("change", this.model.get("filterModel"));

        this.zoomToFullExtent();

        if (layoutIsDodgy) {
            alert("Looks like something went wrong with the saved layout, if you can't see your proteins click Auto layout");
        }
    },

    groupsChanged: function () {
        this.d3cola.stop();

        // a Map with group id as key and Set of protein ids to group as value
        const modelGroups = this.model.get("groups");

        //clear out old groups (can u remove while iterating)
        const groupIdsToremove = [];
        for (var group of this.groupMap.values()) {
            if (!modelGroups.has(group.id)) {
                group.parentGroups = []; //don't think necessary but just in case
                group.subroups = [];
                groupIdsToremove.push(group.id);
                for (let rp of group.renderedParticipants) {
                    rp.parentGroups.delete(group);
                }
                if (group.expanded) {
                    this.groupsSVG.removeChild(group.upperGroup);
                } else {
                    this.proteinUpper.removeChild(group.upperGroup);
                }
            }
        }
        for (let rgId of groupIdsToremove) {
            this.groupMap.delete(rgId);
        }

        //init
        for (let g of modelGroups.entries()) {
            if (!this.groupMap.has(g[0])) {
                var group = new xiNET.Group(g[0], g[1], this);
                group.init(); // z ordering... later
                this.groupMap.set(group.id, group);
            }
        }

        this.hiddenProteinsChanged();
    },


    // handle changes to manually hidden proteins,
    // but also deal with stuff to do with groups / group hierarchy
    // specifically subgroups could change as result of things being hidden so this is here
    // (i.e overlapping group becomes subgroup)
    hiddenProteinsChanged: function () {
        this.d3cola.stop();

        // parent groups may change, so clear
        for (var g of this.groupMap.values()) {
            g.subgroups = []; // subgroups as xiNET.Groups
            g.parentGroups = new Set();
            g.leaves = []; // different from g.renderedParticipants coz only contains ungrouped RenderedProteins, used by cola.js
            //g.groups = []; // indexes of subgroups in resulting groupArr, used by cola.js
            for (var rp of g.renderedParticipants) {
                rp.parentGroups.delete(g); // sometimes it won't have contained g as parentGroup
            }
        }

        //sort it by count not hidden (not manually hidden and not filtered)
        const sortedGroupMap = new Map([...this.groupMap.entries()].sort((a, b) => a[1].unhiddenParticipantCount() - b[1].unhiddenParticipantCount()));

        // get maximal set of possible subgroups
        const groups = Array.from(sortedGroupMap.values());
        const gCount = groups.length; // contains xiNET.Groups
        for (var gi = 0; gi < gCount - 1; gi++) {
            var group1 = groups[gi];
            if (group1.unhiddenParticipantCount() > 0) {
                for (var gj = gi + 1; gj < gCount; gj++) {
                    var group2 = groups[gj];
                    if (group1.isSubsetOf(group2)) {
                        group2.subgroups.push(group1);
                        console.log(group1.name, "is SUBSET of", group2.name)
                    }
                }
            }
        }

        //remove obselete subgroups
        for (var gi = 0; gi < gCount; gi++) {
            var group1 = groups[gi];
            //if subgroup has parent also in group1.subgroups then remove it
            const subgroupCount = group1.subgroups.length;
            const subgroupsToRemove = [];
            for (var gj = 0; gj < subgroupCount - 1; gj++) {
                const subgroup1 = group1.subgroups[gj];
                for (let gk = gj + 1; gk < subgroupCount; gk++) {
                    const subgroup2 = group1.subgroups[gk];
                    if (subgroup1.isSubsetOf(subgroup2)) {
                        subgroupsToRemove.push(subgroup2);
                    }
                }
            }
            for (let sgToremove of subgroupsToRemove) {
                const index = group1.subgroups.indexOf(sgToremove);
                group1.subgroups = group1.subgroups.splice(index, 1);
            }
        }

        //sort out parentGroups
        for (var group1 of groups) {
            for (var group2 of group1.subgroups) {
                group2.parentGroups.add(group1);
            }
        }


        let manuallyHidden = 0;
        for (let renderedParticipant of this.renderedProteins.values()) {
            if (renderedParticipant.participant.manuallyHidden === true) {
                manuallyHidden++;
            }
            if (renderedParticipant.inCollapsedGroup() === false) {
                renderedParticipant.setHidden(renderedParticipant.participant.hidden);
            } else {
                renderedParticipant.setHidden(true);
            }
        }

        if (manuallyHidden === 0) {
            d3.select("#hiddenProteinsMessage").style("display", "none");
        } else {
            const pSel = d3.select("#hiddenProteinsText");
            pSel.text((manuallyHidden > 1) ? (manuallyHidden + " Hidden Proteins") : (manuallyHidden + " Hidden Protein"));
            const messgeSel = d3.select("#hiddenProteinsMessage");
            messgeSel.style("display", "block");
        }


        for (let group of this.groupMap.values()) { // todo z-ordering, do earlier?
            let hasVisible = false;
            for (let p of group.renderedParticipants) {
                if (p.participant.hidden === false) {
                    hasVisible = true;
                }
            }
            if (!hasVisible) {
                group.setHidden(true);
            } else {
                group.setHidden(false);
                if (group.expanded) {
                    group.updateExpandedGroup();
                }
            }
        }

        for (var g of groups) {
            // delete g.index;
            if (!g.hidden && g.expanded) {
                // if (g.expanded) { // if it contains visible participants it must be
                g.leaves = [];

                // g.groups = [];
                // for (var rp of g.renderedParticipants) {
                //     var i = nodeArr.indexOf(rp);
                //     if (i != -1) {
                //         g.leaves.push(i);
                //     }
                // }
                // if (g.leaves.length > 0) {
                //     groups.push(g);
                // }

                // put any rp not contained in a subgroup(recursive) in group1.leaves

                for (var rp of g.renderedParticipants) {
                    if (!rp.hidden) {
                        let inSubGroup = false;
                        for (let subgroup of g.subgroups) {
                            // UR HERE
                            if (subgroup.contains(rp)) {
                                inSubGroup = true;
                                // break; ?
                            }
                        }
                        if (!inSubGroup) {
                            //g.leaves.push(nodeArr.indexOf(rp)); /// URHERE - MOVE UP
                            rp.parentGroups.add(g); /// URHERE - MOVE UP
                        }
                    }
                }
                // if (groupSet.has(g)) { //shouldn't need this? (coz g not hidden)
                // groups.push(g);
                // }
            }
            // } // end expanded check
        }

        return this;
    },

    autoLayout: function () {
        this.d3cola.stop();

        const fixSelected = this.model.get("xinetFixSelected");
        for (renderedProtein of this.renderedProteins.values()) {
            if (!fixSelected) {
                delete renderedProtein.x;
                delete renderedProtein.y;
                delete renderedProtein.px; // todo - check if this is necessry
                delete renderedProtein.py;
            }
            delete renderedProtein.index;
        }

        //// TODO: prune leaves from network then layout, then add back leaves and layout again

        const self = this;
        const links = new Map();
        const nodeSet = new Set();
        const selected = this.model.get("selectedProteins");
        const filteredCrossLinks = this.model.getFilteredCrossLinks();

        const groupSet = new Set();

        //THINK THIS COULD MOVE UP

        for (let crossLink of filteredCrossLinks) {
            const source = this.renderedProteins.get(crossLink.fromProtein.id).getRenderedParticipant();
            nodeSet.add(source);

            const fromId = crossLink.fromProtein.id;
            const toId = crossLink.toProtein.id;
            const linkId = fromId + "-" + toId;
            if (!links.has(linkId)) {
                const linkObj = {};
                linkObj.source = source;
                linkObj.target = this.renderedProteins.get(crossLink.toProtein.id).getRenderedParticipant();
                if (!linkObj.target) {
                    alert("!");
                }
                nodeSet.add(linkObj.target);

                linkObj.source.fixed = fixSelected && selected.indexOf(source.participant) !== -1;
                linkObj.target.fixed = fixSelected && selected.indexOf(linkObj.target.participant) !== -1;

                //if in group (expanded? - no must be expanded, coz getRenderedParticipant)
                // then add highest parent (all parents must also be expanded)
                // if (linkObj.source.parentGroups.size) {
                //     // u r here - i think it needs to be all parent groups?
                //     var topGroups = linkObj.source.getTopParentGroups();
                //     for (var tg of topGroups) {
                //         groupSet.add(tg);
                //     }
                // }
                // if (linkObj.target.parentGroups.size) {
                //     var topGroups = linkObj.target.getTopParentGroups();
                //     for (var tg of topGroups) {
                //         groupSet.add(tg);
                //     }
                // }

                linkObj.id = linkId;
                links.set(linkId, linkObj);
            }
        }


        const linkArr = Array.from(links.values());
        const nodeArr = Array.from(nodeSet);

        //temp(?)
        // for (var link of linkArr){
        //  //change to sourec / target to indexes? seems not to be necessary
        // }

        const groups = [];
        if (this.groupMap) {
            for (var g of this.groupMap.values()) {
                delete g.index;
                if (!g.hidden && g.expanded) {
                    // if (g.expanded) { // if it contains visible participants it must be
//                    g.leaves = [];
                    g.groups = [];
                    // for (var rp of g.renderedParticipants) {
                    //     var i = nodeArr.indexOf(rp);
                    //     if (i != -1) {
                    //         g.leaves.push(i);
                    //     }
                    // }
                    // if (g.leaves.length > 0) {
                    //     groups.push(g);
                    // }

                    // put any rp not contained in a subgroup(recursive) in group1.leaves

                    for (let rp of g.renderedParticipants) {
                        if (!rp.hidden) {
                            let inSubGroup = false;
                            for (let subgroup of g.subgroups) {
                                // UR HERE
                                if (subgroup.contains(rp)) {
                                    inSubGroup = true;
                                    // break; ?
                                }
                            }
                            if (!inSubGroup) {
                                g.leaves.push(nodeArr.indexOf(rp)); /// URHERE - MOVE UP
                            }
                        }
                    }
                    // if (groupSet.has(g)) { //shouldn't need this? (coz g not hidden)
                    groups.push(g);
                    // }
                }
                // } // end expanded check
            }
            //need to use indexes of groups
            for (var g of groups) {
                for (let i = 0; i < g.subgroups.length; i++) {
                    g.groups[i] = groups.indexOf(g.subgroups[i]);
                }
            }
        }
        console.log("groups", groups);

        delete this.d3cola._lastStress;
        delete this.d3cola._alpha;
        delete this.d3cola._descent;
        // delete this.d3cola._rootGroup;

        const length = (nodeArr.length < 20) ? 40 : 20;
        const width = this.svgElement.parentNode.clientWidth;
        const height = this.svgElement.parentNode.clientHeight;

        this.d3cola.nodes(nodeArr)
            .groups(groups)
            .links(linkArr)
            .size([height, width])
            .symmetricDiffLinkLengths(length);

        if (self.debug) {
            var participantDebugSel = d3.select(this.groupsSVG).selectAll('.node')
                .data(nodeArr);
            participantDebugSel.enter().append('rect')
                .classed('node', true)
                .attr({
                    rx: 5,
                    ry: 5
                })
                .style('stroke', "red")
                .style('fill', "none");
            var groupDebugSel = d3.select(this.groupsSVG).selectAll('.group')
                .data(groups);
            groupDebugSel.enter().append('rect')
                .classed('group', true)
                .attr({
                    rx: 5,
                    ry: 5
                })
                .style('stroke', "blue")
                .style('fill', "none");
            groupDebugSel.exit().remove();
            participantDebugSel.exit().remove();
        }

        this.d3cola.on("tick", function (e) {
            for (let node of self.d3cola.nodes()) {
                node.setPositionFromCola(node.x, node.y);
                node.setAllLinkCoordinates();
            }
            for (let g of self.d3cola.groups()) {
                if (g.expanded) {
                    g.updateExpandedGroup();
                }
            }
            self.zoomToFullExtent();

            if (self.debug) {
                groupDebugSel.attr({
                    x: function (d) {
                        return d.bounds.x;
                    },
                    y: function (d) {
                        return d.bounds.y;
                    },
                    width: function (d) {
                        return d.bounds.width()
                    },
                    height: function (d) {
                        return d.bounds.height()
                    }
                });
                participantDebugSel.attr({
                    x: function (d) {
                        return d.bounds.x;
                    },
                    y: function (d) {
                        return d.bounds.y;
                    },
                    width: function (d) {
                        return d.bounds.width()
                    },
                    height: function (d) {
                        return d.bounds.height()
                    }
                });
            }
        });
        this.d3cola.start(30, 0, 60, 0);
    },

    downloadSVG: function () {
        const svgArr = [this.svgElement];
        const svgStrings = CLMSUI.svgUtils.capture(svgArr);
        let svgXML = CLMSUI.svgUtils.makeXMLStr(new XMLSerializer(), svgStrings[0]);
        //bit of a hack
        const bBox = this.svgElement.getBoundingClientRect();
        const width = Math.round(bBox.width);
        const height = Math.round(bBox.height);
        svgXML = svgXML.replace('width="100%"', 'width="' + width + 'px"');
        svgXML = svgXML.replace('height="100%"', 'height="' + height + 'px"');
        const fileName = CLMSUI.utils.makeLegalFileName(CLMSUI.utils.searchesToString() + "--xiNET--" + CLMSUI.utils.filterStateToString());
        download(svgXML, 'application/svg', fileName + ".svg");
    },

    highlightedLinksChanged: function () {
        for (var p_pLink of this.renderedP_PLinks.values()) {
            p_pLink.showHighlight(false);
        }
        const highlightedCrossLinks = this.model.getMarkedCrossLinks("highlights");
        for (let renderedCrossLink of this.renderedCrosslinks.values()) {
            if (highlightedCrossLinks.indexOf(renderedCrossLink.crossLink) !== -1) {
                if (renderedCrossLink.renderedFromProtein.expanded ||
                    !renderedCrossLink.renderedToProtein || renderedCrossLink.renderedToProtein.expanded) {
                    renderedCrossLink.showHighlight(true);
                } else if (renderedCrossLink.renderedToProtein) {
                    var p_pLink = this.renderedP_PLinks.get(
                        renderedCrossLink.renderedFromProtein.participant.id + "-" + renderedCrossLink.renderedToProtein.participant.id);
                    p_pLink.showHighlight(true);
                }
            } else {
                renderedCrossLink.showHighlight(false);
            }
        }
        return this;
    },

    selectedLinksChanged: function () {
        for (var p_pLink of this.renderedP_PLinks.values()) {
            p_pLink.setSelected(false);
        }
        const selectedCrossLinks = this.model.getMarkedCrossLinks("selection");
        for (let renderedCrossLink of this.renderedCrosslinks.values()) {
            if (selectedCrossLinks.indexOf(renderedCrossLink.crossLink) !== -1) {
                renderedCrossLink.setSelected(true);
                if (renderedCrossLink.renderedToProtein) {
                    var p_pLink = this.renderedP_PLinks.get(
                        renderedCrossLink.renderedFromProtein.participant.id + "-" + renderedCrossLink.renderedToProtein.participant.id);
                    p_pLink.setSelected(true);
                }
            } else {
                renderedCrossLink.setSelected(false);
            }
        }
        return this;
    },

    selectedProteinsChanged: function () {
        const selectedProteins = this.model.get("selectedProteins");
        for (var renderedProtein of this.renderedProteins.values()) {
            if (selectedProteins.indexOf(renderedProtein.participant) === -1 && renderedProtein.isSelected === true) {
                renderedProtein.setSelected(false);
            }
        }
        for (let selectedProtein of selectedProteins) {
            if (selectedProtein.is_decoy !== true) {
                var renderedProtein = this.renderedProteins.get(selectedProtein.id);
                if (renderedProtein.isSelected === false) {
                    renderedProtein.setSelected(true);
                }
            }
        }
        return this;
    },

    highlightedProteinsChanged: function () {
        const highlightedProteins = this.model.get("highlightedProteins");
        for (var renderedProtein of this.renderedProteins.values()) {
            if (highlightedProteins.indexOf(renderedProtein.participant) === -1 && renderedProtein.isHighlighted === true) {
                renderedProtein.showHighlight(false);
                renderedProtein.isHighlighted = false;
            }
        }
        for (let highlightedProtein of highlightedProteins) {
            if (highlightedProtein.is_decoy !== true) {
                var renderedProtein = this.renderedProteins.get(highlightedProtein.id);
                if (renderedProtein.isHighlighted === false) {
                    renderedProtein.showHighlight(true);
                }
            }
        }
        return this;
    },

    proteinMetadataUpdated: function (meta) {
        // update prots
        const renderedParticipantArr = CLMS.arrayFromMapValues(this.renderedProteins);
        const protColourModel = CLMSUI.compositeModelInst.get("proteinColourAssignment");
        const rpCount = renderedParticipantArr.length;
        for (let rp = 0; rp < rpCount; rp++) {
            const renderedParticipant = renderedParticipantArr[rp];
            renderedParticipant.updateName();

            if (protColourModel) {
                d3.select(renderedParticipant.outline)
                    .attr("fill", protColourModel.getColour(renderedParticipant.participant));
            }

        }

        //TODO - move this
        // update groups
        const groupMap = new Map(); // rename that var
        for (let participant of meta.items.values()) {
            if (participant.meta && participant.meta.complex) {
                let group = participant.meta.complex;
                if (groupMap.get(group)) {
                    groupMap.get(group).add(participant.id);
                } else {
                    const groupParticipants = new Set();
                    groupParticipants.add(participant.id);
                    groupMap.set(group, groupParticipants)
                }
            }
        }
        this.model.set("groups", groupMap);
        this.model.trigger("change:groups");

        return this;
    },

    showLabels: function () {
        const show = this.model.get("xinetShowLabels");
        for (let renderedParticipant of this.renderedProteins.values()) {
            renderedParticipant.showLabel(show);
        }
        return this;
    },

    setFixedSize: function () {
        this.fixedSize = this.model.get("xinetFixedSize");
        for (let renderedParticipant of this.renderedProteins.values()) {
            renderedParticipant.resize();
        }
        return this;
    },

});
