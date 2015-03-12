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
				
-----------------------------------------------------------------------------------------

Other functions you may call (assumes 'xlv' is var name for your instance of xiNET Controller):

xlv.reset()					resets zoom/pan, changes all molecules to blobs (not bars), runs autolayout
xlv.resetZoom()				resets zoom/pan (actually, zooming currently disabled)
xlv.autoLayout()			restarts autolayout

xlv.exportSVG()				exports SVG

Choosing how to annotate proteins:

xlv.setAnnotations("MI features");	//show features from MI data 
xlv.setAnnotations("UniprotKB");	//show annotations from uniprot
xlv.setAnnotations("SuperFamily");	//from SuperFamily
xlv.setAnnotations("None");			//no annotations
xlv.setAnnotations("Interactor");	//colour bars and circles according to interactor (may help indicate stoichiometry)

-----------------------------------------------------------------------------------------

***   USER CONTROLS   ***

Toggle nodes between bar and circle	>	Left-click on node

Pan			>	Left-click and drag on background

Move node	>	Click and drag on node

Rotate bar	>	Click and drag on handles that appear at end of a bar when moused over 

Cycle through different bar lengths (longest length displays sequence)	>	Shift+left-click (this is a bit clumsy)

