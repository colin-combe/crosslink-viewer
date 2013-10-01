//authors: Hendrik Hofstadt, Colin Combe
//see http://en.wikipedia.org/wiki/FASTA_format

xinet.Controller.prototype.readFasta = function(file){
	var line_array = file.split("\n");
	var tempIdentifier = null;
	var tempDescription;
	var tempSeq;
	var iFirstSpace;
	for(var i = 0;i < line_array.length;i++){
		var line = "" + line_array[i];
		// semi-colons indicate comments, ignore them
		if(line.indexOf(";") !== 0){
			// greater-than indicates description line
			if(line.indexOf(">") === 0){
				if (tempIdentifier !== null) {
					var prot = new Protein(tempIdentifier, this);
					prot.initProtein(tempSeq.trim(), 
									nameFromIdentifier(tempIdentifier), 
									tempDescription);
					this.proteins.set(tempIdentifier, prot);
					tempSeq = "";
				}
				iFirstSpace = line.indexOf(" ");
				if (iFirstSpace === -1 ) iFirstSpace = line.length;
				tempIdentifier = line.substring(1, iFirstSpace).trim();
				tempDescription = line.substring(iFirstSpace).trim();
				console.log(tempIdentifier);
			}
			else{
				tempSeq += line.trim();			
			}		
		}
	}
	
	//add reversed
	for(var i = 0;i < line_array.length;i++){
		var line = "" + line_array[i];
		// semi-colons indicate comments, ignore them
		if(line.indexOf(";") !== 0){
			// greater-than indicates description line
			if(line.indexOf(">") === 0){
				if (tempIdentifier !== null) {
					tempIdentifier = "decoy_reverse_" + tempIdentifier;
					var prot = new Protein(tempIdentifier, this);
					prot.initProtein(tempSeq.trim().split("").reverse().join(""), 
									"DECOY_" + nameFromIdentifier(tempIdentifier), 
									"DECOY. " + tempDescription);
					this.proteins.set(tempIdentifier, prot);
					tempSeq = "";
				}
				iFirstSpace = line.indexOf(" ");
				if (iFirstSpace === -1 ) iFirstSpace = line.length;
				tempIdentifier = line.substring(1, iFirstSpace).trim();
				tempDescription = line.substring(iFirstSpace).trim();
				console.log(tempIdentifier);
			}
			else{
				tempSeq += line.trim();			
			}		
		}
	}	
	for(var i = 0;i < line_array.length;i++){
		var line = "" + line_array[i];
		// semi-colons indicate comments, ignore them
		if(line.indexOf(";") !== 0){
			// greater-than indicates description line
			if(line.indexOf(">") === 0){
				if (tempIdentifier !== null) {
					tempIdentifier = "reverse_" + tempIdentifier;
					var prot = new Protein(tempIdentifier, this);
					prot.initProtein(tempSeq.trim().split("").reverse().join(""), 
									"DECOY_" + nameFromIdentifier(tempIdentifier), 
									"DECOY. " + tempDescription);
					this.proteins.set(tempIdentifier, prot);
					tempSeq = "";
				}
				iFirstSpace = line.indexOf(" ");
				if (iFirstSpace === -1 ) iFirstSpace = line.length;
				tempIdentifier = line.substring(1, iFirstSpace).trim();
				tempDescription = line.substring(iFirstSpace).trim();
				console.log(tempIdentifier);
			}
			else{
				tempSeq += line.trim();			
			}		
		}
	}	
	
	
	//there will be one protein still to be added when we get to end
	var prot = new Protein(tempIdentifier, this);
	prot.initProtein(tempSeq.trim(), 
				nameFromIdentifier(tempIdentifier), 
				tempDescription);
	this.proteins.set(tempIdentifier, prot);
	
	function nameFromIdentifier(ident){
		var name = ident;
		var iBar = ident.indexOf("|");
		if (iBar !== -1) {
			splitOnBar = ident.split("|");
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
