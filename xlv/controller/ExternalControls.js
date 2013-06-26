xinet.Controller.prototype.changeAnnotations = function(choice, opt) {
    var positional = true;
    if (choice !== 1) {
        positional = false;
    }
    if (typeof opt !== 'undefined' && opt != null){
        var group = opt.options[opt.selectedIndex].parentNode.label;
        var category = opt.options[opt.selectedIndex].value;
    }
    var proteins = this.proteins.values();
    var proteinCount = proteins.length;
    for (var p = 0; p < proteinCount; p++) {
        proteins[p].setAnnotations(positional, group, category);
    }
};

xinet.Controller.prototype.textFilterKeyUp = function(filterText) {
    this.textFilterRegex = new Array();
    this.textFilterRegexNOT = new Array();
    this.fields = {//would be nice if element names weren't hard coded in here
        names: document.getElementById('names').checked,
        notes: document.getElementById('notes').checked,
        key_text: document.getElementById('key_text').checked,
        pos_text: document.getElementById('posFeat_text').checked
    };
    if (filterText === '!') {
        this.parkAll();
    //        this.textFilterRegexNOT[0] = new RegExp("*", 'gi');
    }
    else if (filterText === '') {
    //        this.unparkAll();
    }
    else {
        var filters = filterText.split(' ');
        var filterCount = filters.length;
        for (var i = 0; i < filterCount; i++) {
            var filter = filters[i];
            if (filter !== '') {
                if (filter[0] !== '!') {
                    this.textFilterRegex.push(new RegExp(filter, 'gi'));
                }
                else {
                    this.textFilterRegexNOT.push(new RegExp(filter.substring(1), 'gi'));
                }
            }
        }

        var proteins = this.proteins.values();
        var proteinCount = proteins.length;
        for (var p = 0; p < proteinCount; p++) {
            var prot = proteins[p];
            if (prot.meetsTextFilter(this.textFilterRegex, this.fields)) {
                prot.setParked(false);
            } else {
                prot.setParked(true);
            }
        }
    }
    this.message("<p>Text filter: " + filterText
        //            + "<br/>" + JSON.stringify(this.textFilterRegex, '\t')
        //            + "<br/>" + JSON.stringify(this.textFilterRegexNOT, '\t')
        + "<br/>" + JSON.stringify(this.fields, '\t') + "</p>");
    this.checkLinks();
};

Protein.prototype.meetsTextFilter = function(filterRegex, fields) {
    var searchString = "";

    if (fields.names === true) {
        searchString += this.name + "," + this.accession + ",";
        if (typeof this.description !== 'undefined' && this.description !== '') {
            searchString += this.description + ",";
        }
        if (typeof this.geneName !== 'undefined') {
            searchString += this.geneName + ",";
        }
        if (typeof this.processedDAS !== 'undefined') {
            var uniprot = this.processedDAS.get('UniProt');
            if (typeof uniprot !== 'undefined') {
                searchString += uniprot.name + "," + uniprot.full + ",";
            }
        }
    }

    if (typeof this.processedDAS !== 'undefined') {
        if (fields.notes === true) {
            this.processedDAS.forEach(function(k, v) {
                if (typeof v.notes !== 'undefined') {
                    v.notes.forEach(function(n) {
                        searchString += n.notes + ",";
                    });
                }
            });
        }
        if (fields.key_text === true) {
            this.processedDAS.forEach(function(k, v) {
                if (typeof v.keywords !== 'undefined') {
                    v.keywords.forEach(function(category, keyword) {
                        keyword.forEach(function(word) {
                            searchString += word.name + ",";
                        });
                    });
                }
            });
        }
        if (fields.pos_text === true) {
            this.processedDAS.forEach(function(k, v) {
                if (typeof v.positional !== 'undefined') {
                    v.positional.forEach(function(category, pos) {
                        pos.forEach(function(posAnnotation) {
                            searchString += posAnnotation.name + ",";
                        });
                    });
                }
            });
        }
    }

    var regex;
    var countRegex = this.xlv.textFilterRegex.length;
    for (var r = 0; r < countRegex; r++) {
        regex = this.xlv.textFilterRegex[r];
        regex.lastIndex = 0;
        if (regex.test(searchString) === false) {
            return false;
        }
    }
    //NOTs
    countRegex = this.xlv.textFilterRegexNOT.length;
    for (var r = 0; r < countRegex; r++) {
        regex = this.xlv.textFilterRegexNOT[r];
        regex.lastIndex = 0;
        if (regex.test(searchString) === true) {
            return false;
        }
    }
    return true;
};

xinet.Controller.prototype.stepOut = function() {
    var proteins = this.proteins.values();
    var proteinCount = proteins.length;
    var neighbours = [];
    for (var p = 0; p < proteinCount; p++) {
        var prot = proteins[p];
        if (prot.isParked === false) {
            var links = prot.proteinLinks.values();
            var linkCount = links.length;
            for (var l = 0; l < linkCount; l++) {
                var link = links[l];
                if (link.intra === false && link.sc >= this.cutOff) { // TODO: temp hack for mycoplasma
                    neighbours.push(link.getOtherEnd(prot));
                }
            }
        }
    }
    var neighbourCount = neighbours.length;
    for (var n = 0; n < neighbourCount; n++) {
        neighbours[n].setParked(false);
    }
    this.checkLinks();
};

xinet.Controller.prototype.stepIn = function() {
    var proteins = this.proteins.values();
    var proteinCount = proteins.length;
    var leaves = [];// nodes with only one connection
    for (var p = 0; p < proteinCount; p++) {
        var prot = proteins[p];
        if (prot.countExternalLinks() <= 1) {
            leaves.push(prot);
        }
    }
    var leafCount = leaves.length;
    for (var l = 0; l < leafCount; l++) {
        leaves[l].setParked(true);
    }
//            var leaf = leaves[l];
//            var link = leaf.externalLinks[0];
//
//            d3.select(leaf.labelSVG).attr("opacity", "1");
//            d3.select(link.line).attr("opacity", "1");
//            d3.select(link.fatLine).attr("opacity", "1");
//            d3.select(leaf.g).attr("opacity", "1");
//
//            subgraph.links.remove(link.id);
//            subgraph.nodes.remove(leaf.id);
//            var otherEnd = link.getOtherEnd(leaf);
//            otherEnd.removeLink(link.id);
//
//            d3.select(leaf.blob).transition().duration(1000)
//            .attr("stroke", "red")
//            .attr("stroke-width", "5");
//
//            d3.select(leaf.labelSVG).transition().delay(2000).duration(1000)
//            .attr("opacity", "0");
//            d3.select(link.line).transition().delay(2000).duration(1000)
//            .attr("opacity", "0");
//            d3.select(link.fatLine).transition().delay(2000).duration(1000)
//            .attr("opacity", "0");
//            d3.select(link.highlightLine).attr("opacity", "0");
//            d3.select(leaf.g).transition().delay(2000).duration(1000)
//            .attr("r", "0")
//            .attr("transform", "translate("+otherEnd.x+","+otherEnd.y+")");
//
//            d3.select(leaf.blob).transition().delay(3000).duration(1).attr("opacity", "0");
//
//            otherEnd.nest(leaf);
//
//
//        }
//        if (leaves.length > 0) return true;
//        else
//            return false;
};

xinet.Controller.prototype.parkUnconnected = function() {
    var proteins = this.proteins.values();
    var proteinCount = proteins.length;
    var unconnected = [];// nodes with only one connection
    for (var p = 0; p < proteinCount; p++) {
        var prot = proteins[p];
        if (prot.countExternalLinks() === 0) {
            unconnected.push(prot);
        }
    }
    ;
    var unconnectedCount = unconnected.length;
    for (var u = 0; u < unconnectedCount; u++) {
        unconnected[u].setParked(true);
    }
};

xinet.Controller.prototype.exportProteins = function() {
    //    var myJSONText = JSON.stringify(this.proteins, null, '\t');
    //    myJSONText = myJSONText.replace(/\\u0000/gi, '');//regex replaces a null char that appears in d3.map
    //    xlv.message(myJSONText, true);

    var output = "";
    var prots = this.proteins.values();
    var protCount = prots.length;
    for (var p = 0; p < protCount; p++) {
        var protein = prots[p];
        output += "xlv.addProtein('" + protein.id + "','"
                                    + protein.name  + "','"
                                    + protein.sequence  + "','"
                                      + "','"
                                    + protein.accession  +  "');\n"
    }
xlv.message(output);
};

xinet.Controller.prototype.exportLinks = function() {
    var myJSONText = JSON.stringify(this.proteinLinks, null, '\t');
    myJSONText = myJSONText.replace(/\\u0000/gi, '');//regex replaces a null char that appears in d3.map
    xlv.message(myJSONText, true);
};

xinet.Controller.prototype.setCutOff = function(cutOff) {
    this.cutOff = cutOff;
    this.checkLinks();
};

xinet.Controller.prototype.hideInternal = function(bool) {
    this.intraHidden = bool;
    this.checkLinks();
};

xinet.Controller.prototype.hideAmbig = function(bool) {
    this.ambigHidden = bool;
    this.checkLinks();
};

//TODO:fix
//xinet.Controller.prototype.setAnnotations = function(positional, group, category) {
//    //    alert(group + ' - ' + category);
//    //clear
//
//    };

xinet.Controller.prototype.exportSVG = function(containerName) {
    alert("You will likely need to manually rename the downloaded file so its file extension is '.svg'.\n\n You can then edit it in tools such as Inkscape or Illustrator.");
    var rawSVG = document.getElementById(containerName).parentNode.innerHTML;
    //TODO: rotator hide not working
    var svgXml = rawSVG.replace(/<g class="PV_rotator".*?<\/g><\/g>/gi, "")
    //    .replace(/<g class="highlights".*?<g id="p_pLinks"/gi,"<g id=\"p_pLinks\"")
    //    .replace(/<g class="highlights".*?<g class="intraLinks"/gi,"<g class=\"intraLinks\"")
    //    .replace(/xmlns:svg=/gi,"xmlns=")
    //    .replace(/svg:/gi,"")
    .replace(/<rect .*?\/rect>/i, "");

    var args = [];
    args.source = svgXml;
    var prettyXml = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n"
    + "<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">"
    + svgXml;//markup_beauty(args);

    //    alert("/");

    var xmlAsUrl;
    //    if (this.messageElement != null) { // if running in Col's developemnt PHP version
    //        // this will make it really open in new window, instead of download
    //        xmlAsUrl = 'data:xml;filename=ProteinViewExport.xml,'
    //    //       xmlAsUrl = 'data:image/svg+xml;filename=ProteinViewExport.svg,'
    //    }
    //    else {
    xmlAsUrl = 'data:image/svg;filename=ProteinViewExport.svg,';
    //    }
    xmlAsUrl += encodeURIComponent(prettyXml);
    var win = window.open(xmlAsUrl, 'ProteinViewExport.svg');
};

//set the message element to use (optional - mainly for debugging)
xinet.Controller.prototype.setMessageElement = function(e) {
    this.messageElement = e;
};

function saveLayout() {
    var layout = xlv.getLayout();
    //        xlv.message("layout sent:" + layout, true);
    var defaultDesc = this.currentLayoutName;
    var desc = '';
    while (desc === '' || desc === 'default') {
        desc = prompt("Enter description of layout:", defaultDesc);
    }
    if (desc != null) {
        var xmlhttp;
        if (window.XMLHttpRequest)
        {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        var url = "./saveLayout.php";
        var params = "sid=" + xlv.sid + "&layout=" + encodeURIComponent(
            layout) + "&desc=" + desc;
        xmlhttp.open("POST", url, true);
        //Send the proper header information along with the request
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        //chrome doesn't like following
        //  xmlhttp.setRequestHeader("Content-length", params.length);
        //    xmlhttp.setRequestHeader("Connection", "close");

        xmlhttp.onreadystatechange = function() {//Call a function when the state changes.
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                //                xlv.message("response:" + xmlhttp.responseText, true)
                xlv.message("<br>Layout saved");
                var select = document.getElementById('load_layout');
                var optionlist = select.options;
                for (var option = 0; option < optionlist.length; option++ )
                {
                    if (optionlist[option].text == desc)
                    {
                        return;
                    }
                }
                var newLayoutOption = document.createElement("option");
                newLayoutOption.setAttribute("value", desc);
                newLayoutOption.appendChild(document.createTextNode(desc));
                select.appendChild(newLayoutOption);
            }
        };
        xmlhttp.send(params);
    }
}


function loadLayout(layoutDesc) {
    this.currentLayoutName = layoutDesc;
    if (layoutDesc != '') {
        var xmlhttp = new XMLHttpRequest();
        var url = "../searches/getLayout.php";
        var params = "sid=" + xlv.sid + "&desc=" + layoutDesc;
        xmlhttp.open("POST", url, true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.onreadystatechange = function() {//Call a function when the state changes.
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                var response = xmlhttp.responseText;
                xlv.message("response:" + response, true);
                xlv.setLayout(response);
                xlv.loadLayout();
                //            var proteins = xlv.proteins.values();
                //            var proteinCount = proteins.length;
                //            for (var p = 0; p < proteinCount; p++) {
                //                var prot = proteins[p];
                //                prot.setAllLineCoordinates();
                //            }
                xlv.checkLinks();
            }
        };
        xmlhttp.send(params);
    }
}

function help() {
    var helpText = "<P>Tip: To change the size of proteins in relation to the size of the page press Ctrl/- or Ctrl/+.<br/> (This zooms the browser, on a Mac its Cmd/- or Cmd/+.)   </P>\
<TABLE >\
	<TR>\
		<TD>\
			<P><B>Action</B></P>\
		</TD>\
		<TD>\
			<P><B>User control</B></P>\
		</TD>\
\
	</TR>\
	<TR>\
		<TD>\
			<P>Toggle protein between a bar and a circle</P>\
		</TD>\
		<TD >\
			<P>Double-click on protein</P>\
		</TD>\
	</TR>\
	<TR>\
		<TD>\
			<P>Zoom</P>\
		</TD>\
		<TD>\
			<P>Mouse wheel</P>\
		</TD>\
	</TR>\
	<TR>\
		<TD >\
			<P>Pan</P>\
		</TD>\
		<TD >\
			<P>Click and drag on background</P>\
		</TD>\
	</TR>\
	<TR>\
		<TD >\
			<P>Move protein</P>\
		</TD>\
		<TD>\
			<P>Click and drag on protein</P>\
		</TD>\
	</TR>\
	<TR>\
		<TD >\
			<P >Expand bar (increases length until sequence is visible)</P>\
		</TD>\
		<TD >\
			<P >Shift and left-click on protein</P>\
		</TD>\
	</TR>\
	<TR>\
		<TD>\
			<P>Rotate stick</P>\
		</TD>\
		<TD >\
			<P>Click and drag on handles that appear at end of stick</P>\
		</TD>\
	</TR>\
	<TR>\
		<TD >\
			<P >Hide/show protein (and all links to it)</P>\
		</TD>\
		<TD >\
			<P >Right-click on protein</P>\
		</TD>\
	</TR>\
	<TR>\
		<TD >\
			<P >Hide links between two specific proteins</P>\
		</TD>\
		<TD >\
			<P >Right click on any link between those proteins</P>\
		</TD>\
	</TR>\
	<TR>\
		<TD >\
			<P >Unhide all links between visible proteins</P>\
		</TD>\
		<TD >\
			<P >Right-click on background</P>\
		</TD>\
	</TR>\
	<TR>\
		<TD >\
			<P >'Flip' side of bar on which internal links are shown</P>\
		</TD>\
		<TD >\
			<P >Right-click on internal link</P>\
		</TD>\
	</TR>\
</TABLE>\
";
    xlv.message(helpText);

}