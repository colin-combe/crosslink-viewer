This file provides some documentation for the current version of the interaction-viewer. 


The procedure for use is as follows:

1. 	Construct a new instance of the xiNET Controller object, 
	passing the target DIV you would like it to draw into as a parameter to the constructor.
	E.g.:
	
	            var targetDiv = document.getElementById('networkContainer');
                var xlv = new xiNET(targetDiv);
 
2. 	Pass the controller the MI-JSON object and a boolean to say whether or not to expand stoichiometery: eg.:

				xlv.readMIJSON(data, true); // expands stoichiometry
				xlv.readMIJSON(data, false); // doesn't expand stoichiometry
				xlv.readMIJSON(data); // default is true, expands stoichiometry
				
3. 	You're done.
				
4. 	To change dataset without creating a new instance of the controller, 
	call the clear function, then call the readMIJSON() function with the new data.
	E.g. 
	
				xlv.clear();
				xlv.readMIJSON(data2, expand);
				

P.s. Something I said previously about a way to change the initial size of the graphical elements was wrong...
some changes are needed to the code before this will work.


