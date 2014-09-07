//    xiNET interaction viewer
//    Copyright 2013 Rappsilber Laboratory
//
//    This product includes software developed at
//    the Rappsilber Laboratory (http://www.rappsilberlab.org/).

"use strict";

/* construtor parameter is string with following format:
 *
 *              "?-?" = unknown 
 *              "n-n" = n-terminal range (to be represented as link to box beside n terminal)
 *              "c-c" = c-terminal range (to be represented as link to box beside c terminal)
 *              "123-123" = specific residue
 *              "123-456" = segment? don't say range
 *              "86..123-456..464" = segment with fuzzy boundaries
 *              "86..123-456" = segment with one fuzzy boundary
 *              "<8-123" = uncertain start between 1 and 8 to 123
 *              "123->256" = runcertain end between 256 and interactor.sequence.length
 */

function SequenceDatum(sequenceDatumString) {
	
	//from a complex (bit of a hack)
	if (typeof sequenceDatumString !== "string"){
		sequenceDatumString = sequenceDatumString.pos;
	}          
	
    sequenceDatumString = sequenceDatumString.trim();

    this.uncertainStart = null;
    this.start = '?';
    this.end = '?';
    this.uncertainEnd = null;

    var dashPosition = sequenceDatumString.indexOf('-');
    var firstPart = sequenceDatumString.substring(0, dashPosition);
    var secondPart = sequenceDatumString.substring(dashPosition + 1);

    if (firstPart.indexOf('.') === -1) {
        this.start = firstPart;
    }
    else {
        var firstDotPosition = firstPart.indexOf('.');
        this.uncertainStart = firstPart.substring(0, firstDotPosition) * 1;
        this.start = firstPart.substring(firstDotPosition + 2) * 1;
    }
    
    if (secondPart.indexOf('.') === -1) {
        this.end = secondPart;
    }
    else {
        var firstDotPosition = secondPart.indexOf('.');
        this.end = secondPart.substring(0, firstDotPosition) * 1;
        this.uncertainEnd = secondPart.substring(firstDotPosition + 2) * 1;
    }
    
//        var match = /(.+)-(.+)/.exec(fromSequenceData[0]);
//    this.fromStartRes = match[1];
//    this.fromEndRes = match[2];
//    match = /(.+)-(.+)/.exec(toSequenceData[0]);
//    this.toStartRes = match[1];
//    this.toEndRes = match[2];



//    var sum = 0, count = 0;
//    if (range.uncertainStart !== null) {
//        sum += range.uncertainStart;
//        count++;
//    }
//    if (range.start !== null) {
//        sum += range.start;
//        count++;
//    }
//    if (range.end !== null) {
//        sum += range.end;
//        count++;
//    }
//    if (range.uncertainEnd !== null) {
//        sum += range.uncertainEnd;
//        count++;
//    }
//    this.midPoint = sum / count;

//    console.log(sequenceDatumString);
//    console.log(JSON.stringify(this));
}

//there was confusion...
//
//On 06/06/13 09:22, marine@ebi.ac.uk wrote:
//> Concerning the ranges, I think there was a confusion :
//>
//> "n" = residue 1
//> "c" = residue at interactor.sequence.length
//>
//> In fact n is always used to describe a position that is unknown but we
//> know it is in the N-terminal portion (somewhere at the beginning of the
//> sequence) and c is always used to describe a position that is unknown but
//> we know it is in the C-terminal portion of the sequence (somewhere at the
//> end of the sequence). If we have an exact N-terminal position (residue 1),
//> it will be represented as a certain position of 1. Same for C-terminal
//> position (residue at interactor.sequence.length). We always use '-' to
//> separate the start position from the end position so c-c means that the
//> start and end positions of a feature are unknown but are bot in the
//> C-terminal poriton of the sequence.
//>
//> You will never have "123" = specific residue but rather "123-123" =
//> specific residue which means the start and the end of the feature are
//> known and are the same so it represents a single residue. If you want,
//> JAMI could merge the start and end and give you 123 instead of 123-123 if
//> it is what you want.
//> "123-456" does not mean residue range, it means that the feature sequence
//> is a sequence of 133 amino acids where the start position and the end
//> positions are certain. For me, residue range is what you call 'residue
//> range with fuzzy boundaries'. If the start is 22..25, it means that the
//> starting amino acid position for the feature sequence is fuzzy and is
//> between the 22nd and the 25th amino acid but we don't know which one it
//> is. 22..22 will mean that the starting amino acid position for the feature
//> sequence is fuzzy and is around amino acid 22 in the interactor sequence.
//>
//> "<8" = range between 1 and 8 : I have the same comment as for "123"
//> instead of "123-123". JAMI could give you "<8" if both start and end
//> positions of the feature are <8 but it could happen that you have a
//> feature such as "<8->22" or "<8-22", etc.

module.exports = SequenceDatum;
