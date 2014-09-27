//    xiNET Interaction Viewer
//    Copyright 2013 Rappsilber Laboratory
//
//    This product includes software developed at
//    the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//
//    author: Colin Combe

"use strict";

//constructor for annotations
function Feature(annotName, startRes, endRes, colour, notes) {
    this.name = annotName;
    this.start = startRes;
    this.end = endRes;
    if (colour !== undefined && colour !== null) {
        this.colour = colour;
    }
    this.notes = notes;
}

module.exports = Feature;
