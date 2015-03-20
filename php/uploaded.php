<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8">
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <?php
			//your connection string here
			// $connectionString = "host= dbname= user= password=";
			include('../../uploadsConnectionString.php');
			$dbconn = pg_connect($connectionString)
					or die('Could not connect: ' . pg_last_error());
			$uid = $_GET["uid"];
			$query = "SELECT links, filename, layout, fasta, annot FROM upload WHERE rand = '" . $uid . "';";
			// echo $query;
			$result = pg_query($query) or die('Query failed: ' . pg_last_error());
			$line = pg_fetch_array($result, null, PGSQL_ASSOC);
			$clmsCsv = $line['links'];
			$filename = $line['filename'];
			$layout = $line['layout'];
			$fasta = $line['fasta'];
			$annot = $line['annot'];
			echo ('<title> xiNET | ' . $filename . '</title>');
        ?>
			<meta http-equiv="content-type" content="text/html; charset=utf-8" />
			<meta name="description" content="xiNET is a visualisation tool for cross-linking and mass spectrometry data." />
			<meta name="keywords" content="xiNET, biologists, mass-spectrometrists, cross-linking, protein, complexes, 3d, models, rappsilber, software" />	
			<meta name="viewport" content="initial-scale=1, maximum-scale=1">
			<meta name="apple-mobile-web-app-capable" content="yes">
			<meta name="apple-mobile-web-app-status-bar-style" content="black">
			<link rel="icon" type="image/ico" href="images/logos/favicon.ico">
			<link rel="stylesheet" href="../demo/css/reset.css" />
			<link rel="stylesheet" href="../demo/css/noscript.css" />
			<link rel="stylesheet" href="../demo/css/style.css" />
			<link rel="stylesheet" href="../demo/css/noNav.css" />
			<link rel="stylesheet" href="../demo/css/xiNET.css">
		<!--
		<script type="text/javascript" src="./xiNET_2.0.0.js"></script>
		-->
        <!--libraries-->
        <script type="text/javascript" src="../vendor/d3.js"></script>
        <script type="text/javascript" src="../vendor/colorbrewer.js"></script>
       	<script type="text/javascript" src="../vendor/FileSaver.js"></script>
        <script type="text/javascript" src="../vendor/rgbcolor.js"></script>   
        <!--xiNET-->
        <script type="text/javascript" src="../src/controller/Init.js"></script>
        <script type="text/javascript" src="../src/controller/MouseEvents.js"></script>
        <script type="text/javascript" src="../src/controller/Layout.js"></script>
        <script type="text/javascript" src="../src/controller/Refresh.js"></script>
        <script type="text/javascript" src="../src/controller/ToolTips.js"></script>
        <script type="text/javascript" src="../src/model/Match.js"></script>
        <script type="text/javascript" src="../src/model/Link.js"></script>
        <script type="text/javascript" src="../src/model/Protein.js"></script>
        <script type="text/javascript" src="../src/model/Annotation.js"></script>
        <script type="text/javascript" src="../src/model/ProteinLink.js"></script>
        <script type="text/javascript" src="../src/model/ResidueLink.js"></script>
        <script type="text/javascript" src="../src/controller/ExternalControls.js"></script>
        <script type="text/javascript" src="../src/controller/Rotator.js"></script>
        <script type="text/javascript" src="../src/controller/xiNET_Storage.js"></script>
        <script type="text/javascript" src="../src/controller/ReadCSV.js"></script>
        <script type="text/javascript" src="../src/controller/Fasta.js"></script>
    </head>
    <body>

	<!-- Slidey panels -->	
	<div class="overlay-box" id="infoPanel">
	<div id="networkCaption">
		<p>No selection.</p>
	</div>
	</div>

	<div class="overlay-box" id="helpPanel">
	<table class="overlay-table"  bordercolor="#eee" >
		<tr>
			<td>Toggle the proteins between a bar and a circle</td>
			<td>Click on protein</td>
		</tr>
		<tr>
			<td>Zoom</td>
			<td>Mouse wheel</td>
		</tr>
		<tr>
			<td>Pan</td>
			<td>Click and drag on background</td>
		</tr>
		<tr>
			<td>Move protein</td>
			<td>Click and drag on protein</td>
		</tr>
		<tr>
			<td>Expand bar <br>(increases bar length until sequence is visible)</td>
			<td>Shift_left-click on protein</td>
		</tr>
		<tr>
			<td>Rotate bar</td>
			<td>Click and drag on handles that appear at end of bar</td>
		</tr>
		<tr>
			<td>Hide/show protein (and all links to it)</td>
			<td>Right-click on protein</td>
		</tr>
		<tr>
			<td>Hide links between two specific proteins</td>
			<td>Right click on any link between those proteins</td>
		</tr>
		<tr>
			<td>Show all hidden links</td>
			<td>Right click on background</td>
		</tr>
		<tr>
			<td>'Flip' self-links</td>
			<td>Right-click on self-link</td>
		</tr>
	</table> 
</div>	

<div class="overlay-box" id="legendPanel">
	<div><img src="../demo/images/fig3_1.svg"></div>
</div>	


		<script type="text/javascript">
				//<![CDATA[
				helpShown = false;
				infoShown = false;
				legendShown = false;
				function toggleHelpPanel() {
					if (helpShown){
						hideHelpPanel();
					}
					else {
						showHelpPanel();
					}
				}
				
				function toggleInfoPanel() {
					if (infoShown){
						hideInfoPanel();
					}
					else {
						showInfoPanel();
					}
				}
				function toggleLegendPanel() {
					if (legendShown){
						hideLegendPanel();
					}
					else {
						showLegendPanel();
					}
				}
				
				function showHelpPanel() {
						helpShown = true;
						d3.select("#helpPanel").transition().style("height", "500px").style("top", "100px").duration(700);
				}
				function hideHelpPanel() {
						helpShown = false;
						d3.select("#helpPanel").transition().style("height", "0px").style("top", "-95px").duration(700);
				}
				function showInfoPanel() {
						infoShown = true;
						d3.select("#infoPanel").transition().style("height", "300px").style("bottom", "115px").duration(700);

				}
				function hideInfoPanel() {
						infoShown = false;
						d3.select("#infoPanel").transition().style("height", "0px").style("bottom", "-95px").duration(700);

				}
				function showLegendPanel() {
						legendShown = true;
						d3.select("#legendPanel").transition().style("height", "500px").style("top", "100px").duration(700);

				}
				function hideLegendPanel() {
						legendShown = false;
						d3.select("#legendPanel").transition().style("height", "0px").style("top", "-95px").duration(700);

				}
				//]]>
		</script>
		<!-- Main -->
		<div id="main">
			<div class="container">   	 				
				<h1 class="page-header">
					<button class="btn btn-1 btn-1a network-control resetzoom" onclick="saveLayout();">
							Save layout
					</button>
						
					<div style='float:right'>
						<button class="btn btn-1 btn-1a network-control resetzoom" onclick="xlv.reset();">
							Reset
						</button>
						<!--
						<button class="btn btn-1 btn-1a network-control" onclick="xlv.exportSVG('networkSVG');">Export SVG</button>
						-->
						<label class="btn">
								Legend
								<input id="selection" onclick="toggleLegendPanel()" type="checkbox">
						</label>
						<label class="btn">
								Details
								<input id="selection" onclick="toggleInfoPanel()" type="checkbox">
						</label>
						<label class="btn">
								Help
								<input id="help" onclick="toggleHelpPanel()" type="checkbox">
						</label>
					</div>
				</h1>
   	 		</div>				   	
			
			<div id="networkContainer"></div>
			
			<div class="controlsexamplespage">						
						<label>Self-Links
								<input checked="checked" 
									   id="selfLinks" 			
									   onclick="xlv.showSelfLinks(document.getElementById('selfLinks').checked)" 
									   type="checkbox"
								/>
						</label>
						<label>&nbsp;&nbsp;Ambig.
								<input checked="checked" 
									   id="ambig" 			
									   onclick="xlv.showAmbig(document.getElementById('ambig').checked)" 
									   type="checkbox"
								/>
						</label>
						<label>&nbsp;&nbsp;Decoys
								<input checked="checked" 
									   id="decoy" 			
									   onclick="hideDecoys(!document.getElementById('decoy').checked)" 
									   type="checkbox"
								/>
						</label>
						<div id="scoreSlider">&nbsp;&nbsp;
							<p class="scoreLabel" id="scoreLabel1"></p>
							<input id="slide" type="range" min="0" max="100" step="1" value="0" oninput="sliderChanged()"/>
							&nbsp;<p class="scoreLabel" id="scoreLabel2"></p>
							<p id="cutoffLabel">(cut-off)</p>
							
						</div> <!-- outlined scoreSlider -->
						<div style='float:right'>
							<label>Annot.
							<select id="annotationsSelect" onChange="changeAnnotations();">
								<option selected='selected'>Custom</option> 
								<option>UniprotKB</option> 
								<option>SuperFamily</option>  
								<option>None</option>  
							</select>
							</label>	
						</div>
			
					</div>
					<script type="text/javascript">	
							//<![CDATA[
							
							var sliderDecimalPlaces = 1;
							function getMinScore(){
								if (xlv.scores){
									var powerOfTen = Math.pow(10, sliderDecimalPlaces); 
									return (Math.floor(xlv.scores.min * powerOfTen) / powerOfTen)
											.toFixed(sliderDecimalPlaces);
								}
							}
							function getMaxScore(){
								if (xlv.scores){
									var powerOfTen = Math.pow(10, sliderDecimalPlaces); 
									return (Math.ceil(xlv.scores.max * powerOfTen) / powerOfTen)
											.toFixed(sliderDecimalPlaces);
								}
							}
							function sliderChanged(){
								var slide = document.getElementById('slide');
								var powerOfTen = Math.pow(10, sliderDecimalPlaces); 
								
								var cut = ((slide.value / 100) 
											* (getMaxScore() - getMinScore()))
											+ (getMinScore() / 1);
								cut = cut.toFixed(sliderDecimalPlaces);
								var cutoffLabel = document.getElementById("cutoffLabel");
								cutoffLabel.innerHTML = '(' + cut + ')';
								xlv.setCutOff(cut);
							}
							
							//]]>
					</script>
						
		</div> <!-- MAIN -->

		<script>
     		//<![CDATA[
			function hideDecoys(decoysHidden) {
				var protCount = xlv.proteins.values().length;
                var prots = xlv.proteins.values();
                for (var p = 0; p < protCount; p++) {
                    var prot = prots[p];
					if (prot.isDecoy()) {
                        prot.setParked(decoysHidden);
                    }
                }
                xlv.checkLinks();
            }

			var targetDiv = document.getElementById('networkContainer');
			var messageDiv = document.getElementById('networkCaption');
			xlv = new xiNET.Controller(targetDiv);
			xlv.setMessageElement(messageDiv);
			<?php
				echo ('xlv.id="' . $uid . '";');
				echo "\n\n";
				if ($layout != '') {
					echo 'xlv.setLayout(' . $layout . ');';
				}
				echo "\n\n";
				echo('xlv.readCSV("');
				echo preg_replace('/\r\n|\r|\n|\\n/', "\\n", $clmsCsv);
				echo ('","');
				echo preg_replace('/\r\n|\r|\n|\\n/', "\\n", $fasta);
				echo ('","');
				echo preg_replace('/\r\n|\r|\n|\\n/', "\\n", $annot);
				echo('");');
				echo "\n\n";
			?>
			initSlider();
			changeAnnotations();
			xlv.showSelfLinks(document.getElementById('selfLinks').checked);
			xlv.showAmbig(document.getElementById('ambig').checked);
	
				function saveLayout () {
					var layout = xlv.getLayout();
		//            xlv.message(xlv.id + ", layout sent:" + layout, true);
					var xmlhttp = new XMLHttpRequest();
					var url = "./saveLayout.php";
					var params =  "id=" + xlv.id + "&layout="+encodeURIComponent(layout.replace(/[\t\r\n']+/g,""));
					xmlhttp.open("POST", url, true);
					//Send the proper header information along with the request
					xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
					xmlhttp.onreadystatechange = function() {//Call a function when the state changes.
						if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
							xlv.message(xmlhttp.responseText, true);
						}
					}
					xmlhttp.send(params);
				}
            	 
				 function changeAnnotations(){
					var annotationSelect = document.getElementById('annotationsSelect');
					xlv.setAnnotations(annotationSelect.options[annotationSelect.selectedIndex].value);
				 };
				 function initSlider(){
								if (xlv.scores === null){
							d3.select('#scoreSlider').style('display', 'none');
						}
						else {
							document.getElementById('scoreLabel1').innerHTML = "Score:" + getMinScore();
							document.getElementById('scoreLabel2').innerHTML = getMaxScore();
							sliderChanged();
							d3.select('#scoreSlider').style('display', 'inline-block');
						}
				  };

			//]]>
        </script>
	</body>
</html>
