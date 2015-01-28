//authors: Hendrik Hofstadt, Colin Combe
//see http://en.wikipedia.org/wiki/FASTA_format

"use strict";

xiNET.Controller.prototype.readFasta = function(file){
	var line_array = file.split("\n");
	var tempIdentifier = null;
	var tempDescription;
	var tempSeq;
	var iFirstSpace;
	//Also adds reversed / decoys
	for(var i = 0;i < line_array.length;i++){
		var line = "" + line_array[i];
		// semi-colons indicate comments, ignore them
		if(line.indexOf(";") !== 0){
			// greater-than indicates description line
			if(line.indexOf(">") === 0){
				if (tempIdentifier !== null) {
					var prot = new Protein(tempIdentifier, this, null, nameFromIdentifier(tempIdentifier));
					prot.setSequence(tempSeq.trim());
					this.proteins.set(tempIdentifier, prot);
					
					var decRevProt = new Protein("decoy_reverse_" + tempIdentifier, 
						this, null, "DECOY_" + nameFromIdentifier(tempIdentifier));
					decRevProt.setSequence(tempSeq.trim().split("").reverse().join(""));
					this.proteins.set("decoy_reverse_" + tempIdentifier, decRevProt);
						
					var revProt = new Protein("reverse_" + tempIdentifier, 
						this, null, "DECOY_" + nameFromIdentifier(tempIdentifier));
					revProt.setSequence(tempSeq.trim().split("").reverse().join(""));
					this.proteins.set("reverse_" + tempIdentifier, revProt);			
					
					tempSeq = "";
				}
				iFirstSpace = line.indexOf(" ");
				if (iFirstSpace === -1 ) iFirstSpace = line.length;
				tempIdentifier = line.substring(1, iFirstSpace).trim().replace(/(['"])/g, '');
				tempDescription = line.substring(iFirstSpace).trim();
				//console.log(tempIdentifier);
			}
			else{
				tempSeq += line.trim();			
			}		
		}
	}	
	//there will be one protein still to be added when we get to end
	var prot = new Protein(tempIdentifier, this, null, nameFromIdentifier(tempIdentifier));
	prot.setSequence(tempSeq.trim());
	this.proteins.set(tempIdentifier, prot);
	
	var decRevProt = new Protein("decoy_reverse_" + tempIdentifier, 
		this, null, "DECOY_" + nameFromIdentifier(tempIdentifier));
	decRevProt.setSequence(tempSeq.trim().split("").reverse().join(""));
	this.proteins.set("decoy_reverse_" + tempIdentifier, decRevProt);
		
	var revProt = new Protein("reverse_" + tempIdentifier, 
		this, null, "DECOY_" + nameFromIdentifier(tempIdentifier));
	revProt.setSequence(tempSeq.trim().split("").reverse().join(""));
	this.proteins.set("reverse_" + tempIdentifier, revProt);			
	
	function nameFromIdentifier(ident){
		var name = ident;
		var iBar = ident.indexOf("|");
		if (iBar !== -1) {
			var splitOnBar = ident.split("|");
			if (splitOnBar.length === 3) {
				name = splitOnBar[2];
				var iUnderscore = name.indexOf("_");
				if (iUnderscore !== -1) {
					name = name.substring(0, iUnderscore);
				}
			}
		}
		return name;		
	}
};
