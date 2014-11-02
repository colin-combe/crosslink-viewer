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
			$csv = $line['links'];
			$filename = $line['filename'];
			$layout = $line['layout'];
			$fasta = $line['fasta'];
			$annot = $line['annot'];
			echo ('<title> xiNET | ' . $filename . '</title>');
        ?>
        <link rel="stylesheet" href="../demo/css/xiNET.css">
		<link rel="stylesheet" href="../demo/css/bootstrap.css">
		<link rel="stylesheet" href="../demo/css/flat-ui.css" >
		<link rel="stylesheet" href="../demo/css/demo.css">
        <!--libraries-->
        <script type="text/javascript" src="../vendor/d3.js"></script>
        <script type="text/javascript" src="../vendor/colorbrewer.js"></script>
        <script type="text/javascript" src="../vendor/jsdas.js"></script>
        <script type="text/javascript" src="../vendor/Blob.js"></script>
       	<script type="text/javascript" src="../vendor/FileSaver.js"></script>
        <script type="text/javascript" src="../vendor/rgbcolor.js"></script>             
        <script type="text/javascript" src="../vendor/prototype.js"></script>
        <script type="text/javascript" src="../vendor/slider.js"></script>
        <!--xiNET-->
        <script type="text/javascript" src="../src/controller/Init.js"></script>
        <script type="text/javascript" src="../src/controller/MouseEvents.js"></script>
        <script type="text/javascript" src="../src/controller/Layout.js"></script>
        <script type="text/javascript" src="../src/controller/Refresh.js"></script>
        <script type="text/javascript" src="../src/controller/ToolTips.js"></script>
        <script type="text/javascript" src="../src/model/Match.js"></script>
        <script type="text/javascript" src="../src/model/Link.js"></script>
        <script type="text/javascript" src="../src/model/Protein.js"></script>
       	<script type="text/javascript" src="../src/model/Protein_printAnnotationInfo.js"></script>
        <script type="text/javascript" src="../src/model/Annotations.js"></script>
        <script type="text/javascript" src="../src/model/ProteinLink.js"></script>
        <script type="text/javascript" src="../src/model/ResidueLink.js"></script>
        <script type="text/javascript" src="../src/controller/ExternalControls.js"></script>
        <script type="text/javascript" src="../src/controller/Rotator.js"></script>
        <script type="text/javascript" src="../src/controller/DASUtil.js"></script>
        <script type="text/javascript" src="../src/controller/ReadCSV.js"></script>
        <script type="text/javascript" src="../src/controller/Fasta.js"></script>
    </head>
    <body>
	<div id="outerDiv">
			<div class="controls">

				<button class="btn btn-inverse help" onclick="toggleHelpPanel()">Help</button>
				<button class="btn btn-inverse exportsvg" onclick="xlv.exportSVG('networkSVG');">Export Graphic</button>
				<button class="btn btn-inverse savelayout" onclick="saveLayout()">Save Layout</button>
				<button class="btn btn-inverse autolayout" onclick="xlv.autoLayout();">Auto Layout</button>
				<button class="btn btn-inverse resetzoom" onclick="xlv.resetZoom();">Reset Zoom</button>				
				<div class="controlGroup" id="scoreSlider" >
					<p class="scoreLabel" id="scoreLabel1"></p>
					<div id="track1" class="sliderbar">
						<div class="selected" id="handle1"></div> 
					</div> <!-- track1 sliderbar -->
					<p class="scoreLabel" id="scoreLabel2"></p>
					<p id="debug1" style="display:inline-block">&nbsp;&nbsp;Score Cut-Off:</p>
				</div> <!-- outlined scoreSlider -->
				<div class="controlGroup"><p>Self-links&nbsp;
					<input checked="checked" id="internal" onclick=
						"xlv.hideInternal(!document.getElementById('internal').checked)" 
					type="checkbox"></p>
				</div>
				
				 <div class="controlGroup"><p>Ambiguous&nbsp;
					<input checked="checked" id="ambig" onclick=
						"xlv.hideAmbig(!document.getElementById('ambig').checked)" 
					type="checkbox"></p>
                </div>
                
				<div class="controlGroup"><p>Decoy&nbsp;
					<input checked="checked" id="decoy" onclick=
						"hideDecoy(!document.getElementById('decoy').checked)" 
					type="checkbox"></p>
				</div>
			</div>
					
			<div id="networkContainer"></div>
				
			<div class="overlay overlay-box" id="helpPanel">
					<table class="hor-minimalist-a"  bordercolor="#eee" >
						<tr>
							<td>Toggle between circle and bar</td>
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
							<td>Expand bar</td>
							<td>Shift_left-click on protein</td>
						</tr>
						<tr>
							<td>Rotate bar</td>
							<td>Hover over end of bar; drag handle</td>
						</tr>
						<tr>
							<td>Hide/show protein (and links to it)</td>
							<td>Right-click on protein</td>
						</tr>
						<tr>
							<td>Hide/show links between proteins</td>
							<td>Right click on link</td>
						</tr>
						<tr>
							<td>Flip side for self-links</td>
							<td>Right-click on self-link</td>
						</tr>
					</table> 
					<p>&nbsp;</p>
					<p>Tip: To change the size of proteins in relation to the size of
						 the page press Ctrl/- or Ctrl/+. 
						 (This zooms the browser, on a Mac its Cmd/- or Cmd/+.) 
					</p>
				</div>
			</div>	
	
			<div class="info overlay-box"  id="infoPanel">
				<div>
					<button class="btn btn-inverse" id="infoButton" onclick="toggleInfoPanel()">Show More&#x25B2</button>
		
					<div id="networkCaption">
						<h5>No Selection.</h5>
					</div>
				</div>
			</div>	
				
		</div>

		<script type="text/javascript">
                //<![CDATA[
                var targetDiv = document.getElementById('networkContainer');
                var messageDiv = document.getElementById('networkCaption');
                xlv = new xiNET.Controller(targetDiv);
                xlv.setMessageElement(messageDiv);
                <?php
					if ($fasta != '') {
						echo('xlv.readFasta("');
						echo preg_replace('/\r\n|\r|\n|\\n/', "\\n", $fasta);
						echo('");');
						echo "\n\n";
					}
					echo ('xlv.id="' . $uid . '";');
					echo "\n\n";
					if ($layout != '') {
						echo 'xlv.setLayout(' . $layout . ');';
					}
					echo "\n\n";
					echo('xlv.readCSV("');
					echo preg_replace('/\r\n|\r|\n|\\n/', "\\n", $csv);
					echo ('","');
					echo preg_replace('/\r\n|\r|\n|\\n/', "\\n", $annot);
					echo('");');
					echo "\n\n";
				?>

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
                				
				function initSlider(){
					if (xlv.scores != null){
						document.getElementById('scoreLabel1').innerHTML = xlv.scores.min.toFixed(2);
						document.getElementById('scoreLabel2').innerHTML = xlv.scores.max.toFixed(2) + '&nbsp;&nbsp;';
						document.getElementById('debug1').innerHTML = 'Score Cut-Off:' + xlv.scores.min.toFixed(2);
						new Control.Slider('handle1', 'track1', {
							sliderValue: 0,
							onSlide: function(v) {
								var cut = calcCutOff(v);
								document.getElementById('debug1').innerHTML = 'Score Cut-Off: ' + cut;
								xlv.setCutOff(cut);
							},
							onChange: function(v) {
								var cut = calcCutOff(v);
								document.getElementById('debug1').innerHTML = 'Score Cut-Off: ' + cut;
								xlv.setCutOff(cut);
							}
						});
						function calcCutOff(v) {
							var result = (v * (xlv.scores.max - xlv.scores.min)) + xlv.scores.min;
							result = result.toFixed(2);
							return result;
						}
					}
					else {
						//no score
						document.getElementById('scoreSlider').setAttribute("style", "display:none;");
					}
				}				
                //]]>
        </script>
		<script type="text/javascript">
				//<![CDATA[
				helpShown = false;
				infoShown = false;
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
				
				function showHelpPanel() {
						helpShown = true;
						d3.select("#helpPanel").style('display','block');
						d3.select("#helpPanel").transition().style("top", "0%").duration(700);
						d3.select(".help").attr('class', "btn help");
				}
				function hideHelpPanel() {
						helpShown = false;
						d3.select("#helpPanel").transition().style("top", "100%").duration(700);
						//~ d3.select("#helpPanel").transition().style('display','none').delay(700);;
						d3.select(".help").attr('class', "btn btn-inverse help");
				}
				function showInfoPanel() {
						infoShown = true;
						d3.select("#infoPanel").transition().style("height", "300px").duration(700)
						.each("end", 
							function () {
								d3.select("#infoButton").html("Show Less&#x25BC;");
							});
				}
				function hideInfoPanel() {
						infoShown = false;
						d3.select("#infoPanel").transition().style("height", "60px").duration(700)
						.each("end", 
							function () {
								d3.select("#infoButton").html("Show More&#x25B2;");
							});
				}
				//]]>
		</script>
		<script>
     		//<![CDATA[
			function hideDecoy(decoysHidden) {
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
			//]]>
        </script>
	</body>
</html>
