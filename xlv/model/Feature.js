//    xiNET interaction viewer
//    Copyright 2013 Rappsilber Laboratory
//
//    This product includes software developed at
//    the Rappsilber Laboratory (http://www.rappsilberlab.org/).

/* construtor parameter is string with following format:
 *
 *              "?" = unknown (represented as link to circle beside interactor's label,
 *                             also accepts '?-?')
 *              "n" = residue 1
 *              "c" = residue at interactor.sequence.length
 *              "n-n" = n-terminal range (represented as link to triangle beside n terminal)
 *              "c-c" = c-terminal range (represented as link to triangle beside c terminal)
 *              "123" = specific residue
 *              "123-456" = residue range
 *              "86..123-456..464" = residue range with fuzzy boundaries
 *              "86..123-456" = residue range with one fuzzy boundary
 *              "23..45" = fuzzy range
 *              "<8" = range between 1 and 8
 *              ">256" = range between 256 and interactor.sequence.length
 */

function BoundFeature(featureRange, interactor) {
    this.singlePoint = null;    // link to this bound feature can be represented with a line,
    // inc. unknown, n-term range, etc
    this.range = null; //requires a filled polygon to represent

    this.graphic = null;

    featureRange = featureRange.trim();

    if (/-|\.|<|>/gi.test(featureRange) === false || featureRange === 'n-n'
        || featureRange  === 'c-c' || featureRange  === '?-?') {
        this.line = document.createElementNS(xinet.svgns, "line");
        if (featureRange === 'n') {
            this.singlePoint = 1 * 1;
        }
        else if (featureRange === 'c') {
            this.singlePoint = interactor.size * 1;
        }
        else {
            this.singlePoint = featureRange * 1;
        }
    }
    else { //its a range, including greater than and less than (which are shown as uncertain)
        var range = {
            'uncertainStart':null,
            'start':null,
            'end':null,
            'uncertainEnd':null,
            'midPoint': 0
        };
        if (featureRange.indexOf('<') === 0) {
            range.uncertainStart = 1;
            range.uncertainEnd = featureRange.substring(1);
        }
        else if (featureRange.indexOf('>') === 0) {
            range.uncertainStart = featureRange.substring(1);
            range.uncertainEnd = interactor.size;
        }
        else if (featureRange.indexOf('-') === -1) {
            var firstDotPosition = featureRange.indexOf('.');
            range.uncertainStart = featureRange.substring(0, firstDotPosition) * 1;
            range.uncertainEnd = featureRange.substring(firstDotPosition + 2) * 1;
        }
        //        else if (featureRange.indexOf('.') === -1) {
        //            var dashPosition = featureRange.indexOf('-');
        //            range.start = featureRange.substring(0, dashPosition) * 1;
        //            range.end = featureRange.substring(dashPosition + 1) * 1;
        //        }
        else { // its contains dots and dashes
            var dashPosition = featureRange.indexOf('-');
            var firstPart = featureRange.substring(0, dashPosition);
            var secondPart = featureRange.substring(dashPosition + 1);
            if (firstPart.indexOf('.') === -1){
                range.start = firstPart;
            }
            else {
                var firstDotPosition = firstPart.indexOf('.');
                range.uncertainStart = firstPart.substring(0, firstDotPosition) * 1;
                range.start = firstPart.substring(firstDotPosition + 2) * 1;
            }
            if (secondPart.indexOf('.') === -1){
                range.end = secondPart;
            }
            else {
                var firstDotPosition = secondPart.indexOf('.');
                range.end = secondPart.substring(0, firstDotPosition) * 1;
                range.uncertainEnd = secondPart.substring(firstDotPosition + 2) * 1;
            }
        }

        var sum = 0, count = 0;
        if (range.uncertainStart !== null){
            sum += range.uncertainStart;
            count++;
        }
        if (range.start !== null){
            sum += range.start;
            count++;
        }
        if (range.end !== null){
            sum += range.end;
            count++;
        }
        if (range.uncertainEnd !== null){
            sum += range.uncertainEnd;
            count++;
        }
        range.midPoint = sum/count;
        this.range = range;
    }
    console.log(featureRange);
    console.log(JSON.stringify(this));
}

BoundFeature.prototype.setLinkCoordinates = function () {

}

