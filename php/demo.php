<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <?php
        $connectionString = "host= dbname= user= password=";
        $dbconn = pg_connect($connectionString)
                or die('Could not connect: ' . pg_last_error());

        $uid = $_GET["uid"];

        $query = "SELECT links, filename, layout FROM upload WHERE rand = '" . $uid . "';";

//            echo $query;

        $result = pg_query($query) or die('Query failed: ' . pg_last_error());

        $line = pg_fetch_array($result, null, PGSQL_ASSOC);

        $csv = $line['links'];
        $filename = $line['filename'];
        $layout = $line['layout'];
        echo ('<title>' . $filename . '</title>');
        ?>

        <link rel='stylesheet' type='text/css'  href='../searches/ppi.css'/>
        <!--        <link rel="stylesheet" href="./files/reset.css" type="text/css" media="screen"/>-->
        <!--        <link rel="stylesheet" href="./files/style.css" type="text/css" media="screen"/>-->
        <!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge;chrome=1"><![endif]-->
        <link rel='stylesheet' type='text/css' href='../xlv/XLV.css' />

               <!--libs-->
        <script type="text/javascript" src="./xlv/lib/d3.v3.js"></script>
        <script type="text/javascript" src="./xlv/lib/colorbrewer.js"></script>
        <script type="text/javascript" src="./xlv/lib/jsdas.js"></script>
        <script type="text/javascript" src="./xlv/lib/rgbcolor.js"></script>
        <script type="text/javascript" src="./js/prototype.js"></script>
        <script type="text/javascript" src="./js/slider.js"></script>
        <!--xiNET-->
        <script type="text/javascript" src="./xlv/controller/Init.js"></script>
        <script type="text/javascript" src="./xlv/controller/MouseEvents.js"></script>
        <script type="text/javascript" src="./xlv/controller/Layout.js"></script>
        <script type="text/javascript" src="./xlv/controller/Refresh.js"></script>
        <script type="text/javascript" src="./xlv/controller/ToolTips.js"></script>
        <script type="text/javascript" src="./xlv/model/Match.js"></script>
        <script type="text/javascript" src="./xlv/model/Liqnk.js"></script>
        <script type="text/javascript" src="./xlv/model/Protein.js"></script>
        <script type="text/javascript" src="./xlv/model/Annotations.js"></script>
        <script type="text/javascript" src="./xlv/model/ProteinLink.js"></script>
        <script type="text/javascript" src="./xlv/model/ResidueLink.js"></script>
        <script type="text/javascript" src="./xlv/controller/ExternalControls.js"></script>
        <script type="text/javascript" src="./xlv/Rotator.js"></script>
        <script type="text/javascript" src="./xlv/InfoBox.js"></script>
        <script type="text/javascript" src="./xlv/DASUtil.js"></script>
        <script type="text/javascript" src="./xlv/ReadCSV.js"></script>

        <link rel='stylesheet' type='text/css' href='./xlv/XLV.css'/>
    </head>
    <body class="home blog">
        <div id="outerDiv">
            <div style="display:inline-block;padding-right:10px;">

                <button type="button" id="save layout" onclick="help()">
                    Help
                </button>
                <button type="button" id="exportSVG" onclick="xlv.exportSVG('networkSVG')">Export SVG</button>

                <button type="button" id="save layout" onclick="saveLayout()">
                    Save Layout
                </button>
                <div class="controlGroup">
                    Intra<input checked="checked" id="intra" onclick="xlv.hideInternal(!document.getElementById('intra').checked)" type="checkbox">
                </div>

                <div class="controlGroup">
                    Ambig.<input checked="checked" id="ambig" onclick="xlv.hideAmbig(!document.getElementById('ambig').checked)" type="checkbox">
                </div>

                <div class="controlGroup">
                    Text filter: <input id="text_filter" onchange="xlv.textFilter(document.getElementById('text_filter').value)" type="text">
                </div>

                <div class="outlined" id="scoreSlider" style="display:none">
                    <div id="track1" style="width:200px; background-color:#ccc; height:10px;display:inline-block;">
                        <div class="selected" id="handle1" style="width: 10px; height: 15px; background-color: rgb(255, 0, 0); cursor: move; left: 0px; position: relative; "></div>
                    </div>
                    <p id="debug1" style="display:inline-block;">cut-off: 0</p>
                </div>

            </div>
            <div id="networkContainer"></div>
            <div id="networkCaption_"> </div>
        </div>

        <script type="text/javascript">//<![CDATA[<!--
            var targetDiv =  document.getElementById('networkContainer');
            var e = document.getElementById('networkCaption_');
            var xlv = new xinet.Controller(targetDiv);
            xlv.setMessageElement(e);
<?php
echo('xlv.readCSV("');
echo str_replace("\n", "\\n", $csv);
echo('");');
echo "\n\n";

echo ('xlv.id="' . $uid . '";');
echo "\n\n";
if ($layout != '') {
    echo 'xlv.setLayout(' . $layout . ');';
}
echo "\n\n";
?>
        document.getElementById('ambig').checked = !xlv.ambigHidden;
        document.getElementById('intra').checked = !xlv.intraHidden;

        function send_match_ids(ids){
            //xlv.message(ids);
            var message = '<pre>\n';
            var splitIds = ids.split(',');
            for (var i = 0; i < splitIds.length; i++){
                var id = splitIds[i];
                message += id + ': ' + JSON.stringify(xlv.matches.get(id).meta) + '\n';
            }
            message += '</pre>';
            xlv.message(message);
        }

//        new Control.Slider('handle1', 'track1', {
//            sliderValue: 0,
//            onSlide: function(v) {
//                var cut = calcCutOff(v);
//                $('debug1').innerHTML = 'cut-off: ' + cut;
//                xlv.setCutOff(cut);
//            },
//            onChange: function(v) {
//                var cut = calcCutOff(v);
//                $('debug1').innerHTML = 'cut-off: ' + cut;
//                xlv.setCutOff(cut);
//            }
//        });
//        function calcCutOff(v) {
//            var result = (v * (xlv.scores.max - xlv.scores.min)) + xlv.scores.min;
//            result = Math.round(result*Math.pow(10,2))/Math.pow(10,2);
//            return result;
//        }

        function saveLayout () {
            var layout = xlv.getLayout();
//            xlv.message(xlv.id + ", layout sent:" + layout, true);

            var xmlhttp;
            if (window.XMLHttpRequest)
            {// code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp=new XMLHttpRequest();
            }
            else
            {// code for IE6, IE5
                xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
            }
            var url = "./saveLayout.php";
            var params =  "id=" + xlv.id + "&layout="+encodeURIComponent(layout.replace(/[\t\r\n']+/g,""));
            xmlhttp.open("POST", url, true);
//            xlv.message(params);
            //Send the proper header information along with the request
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            //chrome doesn't like following
            //  xmlhttp.setRequestHeader("Content-length", params.length);
            //    xmlhttp.setRequestHeader("Connection", "close");

            xmlhttp.onreadystatechange = function() {//Call a function when the state changes.
                if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    xlv.message(xmlhttp.responseText, true);
                }
            }
            xmlhttp.send(params);
        }

        function help() {
            var xmlhttp;
            if (window.XMLHttpRequest)
            {// code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp=new XMLHttpRequest();
            }
            else
            {// code for IE6, IE5
                xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
            }
            var url = "./help.xml";
//            var params =  "id=" + xlv.id + "&layout="+encodeURIComponent(layout);
            xmlhttp.open("POST", url, true);

            //Send the proper header information along with the request
//            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            //chrome doesn't like following
            //  xmlhttp.setRequestHeader("Content-length", params.length);
            //    xmlhttp.setRequestHeader("Connection", "close");

            xmlhttp.onreadystatechange = function() {//Call a function when the state changes.
                if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//                    alert(xmlhttp.responseText);
                    xlv.message(xmlhttp.responseText, true);
                }
            }
            xmlhttp.send();
        }
        </script>
    </body>
</html>
