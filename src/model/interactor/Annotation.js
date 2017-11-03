//    xiNET Interaction Viewer
//    Copyright 2013 Rappsilber Laboratory
//
//    This product includes software developed at
//    the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//
//    author: Colin Combe

"use strict";

//constructor for annotations
function Annotation(annotName, startRes, endRes, colour, notes) {
    this.description = annotName;
    this.begin = startRes;
    this.end = endRes;
    if (colour !== undefined && colour !== null) {
        this.colour = colour;
    }
    //~ this.description = notes;
}

module.exports = Annotation;
