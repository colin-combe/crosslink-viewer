//authors: Hendrik Hofstadt, Colin Combe

xinet.Controller.prototype.readFasta = function(file){
	var line_array = file.split("\n");
	var tempName = null;
	var tempDescription;
	var tempSeq;
	var iFirstSpace;
	for(var i = 0;i < line_array.length;i++){
		var line = "" + line_array[i];
		if(line.indexOf(";") !== 0){
			if(line.indexOf(">") === 0){
				if (tempName !== null) {
					var prot = new Protein(tempName, this);
					prot.initProtein(tempSeq.trim(), tempName, tempDescription);
					this.proteins.set(tempName, prot);
					tempSeq = "";
				}
				iFirstSpace = line.indexOf(" ");
				if (iFirstSpace === -1 ) iFirstSpace = line.length;
				tempName = line.substring(1, iFirstSpace).trim();
				tempDescription = line.substring(iFirstSpace).trim();
				console.log(tempName);
			}
			else{
				tempSeq += line;			
			}		
		}
	}
	//there will be one protein still to be added when we get to end
	var prot = new Protein(tempName, this);
	prot.initProtein(tempSeq.trim(), tempName, tempDescription);
	this.proteins.set(tempName, prot);
};
