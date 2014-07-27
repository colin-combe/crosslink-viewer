//    xiNET interaction viewer
//    Copyright 2013 Rappsilber Laboratory
//
//    This product includes software developed at
//    the Rappsilber Laboratory (http://www.rappsilberlab.org/).

"use strict";

xiNET.Controller.prototype.changeAnnotations = function(choice, opt) {
    var positional = true;
    if (choice !== 1) {
        positional = false;
    }
    if (typeof opt !== 'undefined' && opt != null){
        var group = opt.options[opt.selectedIndex].parentNode.label;
        var category = opt.options[opt.selectedIndex].value;
    }
    var interactors = this.interactors.values();
    var proteinCount = interactors.length;
    for (var p = 0; p < proteinCount; p++) {
        interactors[p].setAnnotations(positional, group, category);
    }
};

xiNET.Controller.prototype.textFilterKeyUp = function(filterText) {
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

        var interactors = this.interactors.values();
        var proteinCount = interactors.length;
        for (var p = 0; p < proteinCount; p++) {
            var prot = interactors[p];
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

Interactor.prototype.meetsTextFilter = function(filterRegex, fields) {
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

xiNET.Controller.prototype.stepOut = function() {
    var interactors = this.interactors.values();
    var proteinCount = interactors.length;
    var neighbours = [];
    for (var p = 0; p < proteinCount; p++) {
        var prot = interactors[p];
        if (prot.isParked === false) {
            var links = prot.links.values();
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

xiNET.Controller.prototype.stepIn = function() {
    var interactors = this.interactors.values();
    var proteinCount = interactors.length;
    var leaves = [];// nodes with only one connection
    for (var p = 0; p < proteinCount; p++) {
        var prot = interactors[p];
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

xiNET.Controller.prototype.parkUnconnected = function() {
    var interactors = this.interactors.values();
    var proteinCount = interactors.length;
    var unconnected = [];// nodes with only one connection
    for (var p = 0; p < proteinCount; p++) {
        var prot = interactors[p];
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

xiNET.Controller.prototype.exportInteractors = function() {
    //    var myJSONText = JSON.stringify(this.interactors, null, '\t');
    //    myJSONText = myJSONText.replace(/\\u0000/gi, '');//regex replaces a null char that appears in d3.map
    //    xlv.message(myJSONText, true);

    var output = "";
    var prots = this.interactors.values();
    var protCount = prots.length;
    for (var p = 0; p < protCount; p++) {
        var protein = prots[p];
        output += "xlv.addProtein('" + protein.id + "','"
                + protein.name + "','"
                + protein.sequence + "','"
                + "','"
                + protein.accession + "');\n"
    }
    xlv.message(output);
};

xiNET.Controller.prototype.exportLinks = function() {
    var myJSONText = JSON.stringify(this.links, null, '\t');
    myJSONText = myJSONText.replace(/\\u0000/gi, '');//regex replaces a null char that appears in d3.map
    xlv.message(myJSONText, true);
};

xiNET.Controller.prototype.setCutOff = function(cutOff) {
    this.cutOff = cutOff;
    this.checkLinks();
};

xiNET.Controller.prototype.hideInternal = function(bool) {
    this.intraHidden = bool;
    this.checkLinks();
};

xiNET.Controller.prototype.hideAmbig = function(bool) {
    this.ambigHidden = bool;
    this.checkLinks();
};

//TODO:fix
//xiNET.Controller.prototype.setAnnotations = function(positional, group, category) {
//    //    alert(group + ' - ' + category);
//    //clear
//
//    };

xiNET.Controller.prototype.exportSVG = function() {
	var svgXml = this.svgElement.parentNode.innerHTML.replace(/<g class="PV_rotator".*?<\/g><\/g>/gi, "")
    //    .replace(/<g class="highlights".*?<g id="p_pLinks"/gi,"<g id=\"p_pLinks\"")
    //    .replace(/<g class="highlights".*?<g class="intraLinks"/gi,"<g class=\"intraLinks\"")
    //    .replace(/xmlns:svg=/gi,"xmlns=")
    //    .replace(/svg:/gi,"")
    .replace(/<rect .*?\/rect>/i, "");//takes out background fill
    
    var blob = new Blob([svgXml], {type: "data:image/svg;charset=utf-8"});
	saveAs(blob, "xiNET_output.svg");
	
	//~ var xml = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n"
    //~ + "<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">"
    //~ + svgXml;
	//~ 
	//~ var xmlAsUrl;
    //~ xmlAsUrl = 'data:xml;filename=ProteinViewExport.xml,'
    //~ //xmlAsUrl = 'data:image/svg;filename=ProteinViewExport.svg,';
    //~ xmlAsUrl += encodeURIComponent(xml);
    //~ var win = window.open(xmlAsUrl, 'ProteinViewExport.svg');
};

//set the message element to use (optional - mainly for debugging)
xiNET.Controller.prototype.setMessageElement = function(e) {
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
                //            var interactors = xlv.interactors.values();
                //            var proteinCount = interactors.length;
                //            for (var p = 0; p < proteinCount; p++) {
                //                var prot = interactors[p];
                //                prot.setAllLineCoordinates();
                //            }
                xlv.checkLinks();
            }
        };
        xmlhttp.send(params);
    }
}
