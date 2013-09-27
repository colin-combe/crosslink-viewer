//author: Hendrik Hofstadt

xinet.Controller.prototype.readFasta = function(file){
	var line_array = file.split("\n");
	var tempName;
	var tempSeq;
	for(var i = 0;i < line_array.length;i++){
		if(line_array[i].startsWith(">")){
			tempName = line_array[i].replace(">","");
		}
		else{
			tempSeq = line_array[i];
			xlv.sequences.set(tempName,tempSeq);
		}
	}
}