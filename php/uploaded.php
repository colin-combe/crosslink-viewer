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
			$query = "SELECT links, filename, layout, fasta FROM upload WHERE rand = '" . $uid . "';";
			// echo $query;
			$result = pg_query($query) or die('Query failed: ' . pg_last_error());
			$line = pg_fetch_array($result, null, PGSQL_ASSOC);
			$csv = $line['links'];
			$filename = $line['filename'];
			$layout = $line['layout'];
			$fasta = $line['fasta'];
			echo ('<title> xiNET | ' . $filename . '</title>');
        ?>
        <link rel="stylesheet" href="../css/xiNET.css">
		<link rel="stylesheet" href="../css/bootstrap.css">
		<link rel="stylesheet" href="../css/flat-ui.css" >
		<link rel="stylesheet" href="../css/demo.css">
        <!--libraries-->
        <script type="text/javascript" src="../lib/d3.js"></script>
        <script type="text/javascript" src="../lib/colorbrewer.js"></script>
        <script type="text/javascript" src="../lib/jsdas.js"></script>
        <script type="text/javascript" src="../lib/rgbcolor.js"></script>
        <script type="text/javascript" src="../lib/prototype.js"></script>
        <script type="text/javascript" src="../lib/slider.js"></script>
        <!--xiNET-->
        <script type="text/javascript" src="../js/controller/Init.js"></script>
        <script type="text/javascript" src="../js/controller/MouseEvents.js"></script>
        <script type="text/javascript" src="../js/controller/Layout.js"></script>
        <script type="text/javascript" src="../js/controller/Refresh.js"></script>
        <script type="text/javascript" src="../js/controller/ToolTips.js"></script>
        <script type="text/javascript" src="../js/model/Match.js"></script>
        <script type="text/javascript" src="../js/model/Link.js"></script>
        <script type="text/javascript" src="../js/model/Protein.js"></script>
        <script type="text/javascript" src="../js/model/Annotations.js"></script>
        <script type="text/javascript" src="../js/model/ProteinLink.js"></script>
        <script type="text/javascript" src="../js/model/ResidueLink.js"></script>
        <script type="text/javascript" src="../js/controller/ExternalControls.js"></script>
        <script type="text/javascript" src="../js/model/Rotator.js"></script>
        <script type="text/javascript" src="../js/controller/DASUtil.js"></script>
        <script type="text/javascript" src="../js/controller/ReadCSV.js"></script>
        <script type="text/javascript" src="../js/controller/Fasta.js"></script>
    </head>
    <body>
	<div id="outerDiv">
			<div class="controls">

				<button class="btn btn-inverse help" onclick="toggleHelpPanel()">Help</button>
				<button class="btn btn-inverse info" onclick="toggleInfoPanel()">Selection</button>
				<button class="btn btn-inverse exportsvg" onclick="xlv.exportSVG('networkSVG');">Export</button>
				<button class="btn btn-inverse savelayout" onclick="saveLayout()">Save</button>
				<button class="btn btn-inverse autolayout" onclick="xlv.autoLayout();">Auto</button>
				<button class="btn btn-inverse resetzoom" onclick="xlv.resetZoom();">Reset Zoom</button>
				
				<div class="outlined" id="scoreSlider" >
					<p class="scoreLabel" id="scoreLabel1"></p>
					<div id="track1" class="sliderbar">
						<div class="selected" id="handle1"></div> 
					</div> <!-- track1 sliderbar -->
					<p class="scoreLabel" id="scoreLabel2"></p>
					<p id="debug1">&nbsp;&nbsp;Score Cut-Off:</p>
				</div> <!-- outlined scoreSlider -->
				
				<div class="controlGroup">Self Links&nbsp;&nbsp;
					<input checked="checked" id="internal" onclick=
						"xlv.hideInternal(!document.getElementById('internal').checked)" 
					type="checkbox">
				</div>
				
				 <div class="controlGroup">Ambiguous&nbsp;&nbsp;
				 <input checked="checked" id="ambig" onclick="xlv.hideAmbig(!document.getElementById('ambig').checked)" type="checkbox">
                </div>
			</div>
					
			<div id="networkContainer"></div>
				
			<div class="overlay-box" id="infoPanel">
				<div>
					<h4>Selection Details:</h4>
					<div id="networkCaption">
						<p>No Selection.</p>
					</div>
				</div>
			</div>
			<div class="overlay-box" id="helpPanel">
				<div>
					<h4>Help:</h4>	
					<table class="hor-minimalist-a"  bordercolor="#eee" >
						<tr>
							<td>Toggle the proteins between a bar and a circle</td>
							<td>Double-click on protein</td>
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
							<td>Hide/show links between two specific proteins</td>
							<td>Right click on any link between those proteins</td>
						</tr>
						<tr>
							<td>'Flip' side of bar on which internal links are shown</td>
							<td>Right-click on internal link</td>
						</tr>
					</table> 
					<p>&nbsp;</p>
					<p>Tip: To change the size of proteins in relation to the size of
						 the page press Ctrl/- or Ctrl/+. 
						 (This zooms the browser, on a Mac its Cmd/- or Cmd/+.) 
					</p>
				</div>
			</div>	
		</div>

		<script type="text/javascript">
                //<![CDATA[
                var targetDiv = document.getElementById('networkContainer');
                var messageDiv = document.getElementById('networkCaption');
                xlv = new xinet.Controller(targetDiv);
                xlv.setMessageElement(messageDiv);
                <?php
					if ($fasta != '') {
						echo('xlv.readFasta("');
						echo str_replace("\n", "\\n", $fasta);
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
					echo str_replace("\n", "\\n", $csv);
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
						d3.select("#helpPanel").transition().style('display','none').delay(700);;
						d3.select(".help").attr('class', "btn btn-inverse help");
				}
				function showInfoPanel() {
						infoShown = true;
						d3.select("#infoPanel").style('display','block');
						d3.select("#infoPanel").transition().style("top", "0%").duration(700);
						d3.select(".info").attr('class', "btn info");	
				}
				function hideInfoPanel() {
						infoShown = false;
						d3.select("#infoPanel").transition().style("top", "100%").duration(700);
						d3.select("#infoPanel").transition().style('display','none').delay(700);;
						d3.select(".info").attr('class', "btn btn-inverse info");
				}
				//]]>
		</script>
	</body>
</html>
