xinet.DASUtil = function(xlvController) {
    this.xlv = xlvController;
    this.dasServers = [
        {
            "name": "SuperFamily 1.75",
            "url": "http://supfam.org/SUPERFAMILY/cgi-bin/das/up/features"
        }
        ,
        {
            "name": "UniProt",
            "url": "http://www.ebi.ac.uk/das-srv/uniprot/das/uniprot/features"
        }
//        ,
//        {
//            "name": "GO",
//            "url": "http://www.ebi.ac.uk/das-srv/uniprot/das/uniprot-goa/features"
//        }
//        ,
//        {
//            "name": "Pfam",
//            "url": "http://das.sanger.ac.uk/das/pfam/features"
//        }
        //        ,
        //        {
        //            "name": "InterPro",
        //            "url": "http://www.ebi.ac.uk/das-srv/interpro/das/InterPro/features"
        //        }
    ];
    //use sequential AJAX requests to download DAS annotations for all proteins
    //(issuing lots of AJAX request at once would clog things up)
    this.lookup(this.xlv.proteins.values()[0], this.dasServers[0]);
};

xinet.DASUtil.prototype.lookup = function(prot, server) {
    var accession = prot.accession;
    if (accession !== undefined && accession !== "" && accession !== "__AMBIGUOUS__") {
        var dasClient = JSDAS.Simple.getClient(server.url);
        var self = this;
        /**
         * This function will be executed in case of error
         */
        var error_response = function() {
            //alert('Bad response getting annotations. Wrong URL?, No XML Response?');
            var message = "<p>FAILED " + server.name + " DAS lookup <strong>"
                    + prot.accession + "</strong> (name: " + prot.name
                    + " id:" + prot.id + ")</p>";
//            self.xlv.message(message);
            //alert(message);
            self.nextDASQuery(prot, server);
        };
        /**
         * This function will be executed in case of success
         * @param res - the DAS result object
         */
        var response = function(res) {
            prot.processDAS(server.name, res);
            self.nextDASQuery(prot, server);
        };
        //Ask the client to retrieve the annotations
        dasClient.features({
            segment: prot.accession
        }, response, error_response);
//        this.xlv.message("<p>Waiting on " + server.name + " DAS for " + "<strong>"
//                + prot.accession + "</strong> (name: " + prot.name + " id:" + prot.id + ")</p>");
    }
    else {
//        this.xlv.message("<p>No accession number for <strong>" + prot.name + "</strong> (id:"
//                + prot.id + '), hence no DAS annotations.</p>');
        this.nextDASQuery(prot, server);
    }
};

xinet.DASUtil.prototype.nextDASQuery = function(prot, server) {
    var proteins = this.xlv.proteins.values();
    var protIndex = proteins.indexOf(prot);
    if (protIndex < proteins.length - 1) {
        this.lookup(proteins[protIndex + 1], server);
    }
    else {
//        this.xlv.message("<p>" + server.name + " DAS complete.</p>");
        var serverIndex = this.dasServers.indexOf(server);
        if (serverIndex < this.dasServers.length - 1) {
            this.lookup(this.xlv.proteins.values()[0], this.dasServers[serverIndex + 1]);
        }
        else {
//            this.xlv.message("<h4>All DAS complete.</h4>");
//            updateMenus(this.xlv);
        }
    }
};

Protein.prototype.processDAS = function(serverName, das) {
    //    console.log(JSON.stringify(das, null, '\t'));
    if (das !== undefined) {
        if (this.processedDAS === undefined) {
            this.processedDAS = d3.map();
        }
        var processed = {};
        if (das.GFF.SEGMENT) {
            var segment = das.GFF.SEGMENT[0];
            var annotations = segment.FEATURE;// get all the annotations
            //var featureStart = segment.start, featureStop = segment.stop, id = segment.id;
            if (annotations !== undefined) {
                var comments = new Array();
                var keywords = d3.map();
                var publications = new Array();
                //used for debugging parsing of positional features
                //                var posTable = '<table><tr><th>Type text</th><th>Type category</th><th>Method</th><th>Label</th><th>Start</th><th>End</th><th>Notes</th></tr>';
                // start annotation loop
                for (var i = 0; i < annotations.length; i++) {
                    var ann = annotations[i];
                    var ann_start = (ann.START) ? ann.START.textContent : 0;
                    var ann_end = (ann.END) ? ann.END.textContent : 0;
                    var typeCat = ann.TYPE.category;
                    var typeText = ann.TYPE.textContent;
                    var method = (ann.METHOD) ? ann.METHOD.textContent : "";
                    var links = ann.LINK;
                    var notes = (ann.NOTE) ? ann.NOTE : new Array();

                    if (typeCat !== undefined)
                        typeCat = typeCat.replace(/\'/gi, '').replace(/\"/gi, '').replace(/&quot;/gi, '').replace(/\n/gi,'');
                    if (typeText !== undefined)
                        typeText = typeText.replace(/\'/gi, '').replace(/\"/gi, '').replace(/&quot;/gi, '').replace(/\n/gi,'');

                    var noteText = undefined;
                    for (var n = 0; n < notes.length; n++) {
                        if (noteText === undefined) {
                            noteText = "";
                        }
                        noteText += notes[n].textContent + ' ';
                    }
                    if (noteText !== undefined) {
                        noteText = noteText.replace(/"/gi, '\'');
                    }
                    //Keywords
                    if (typeCat === "Keyword" || serverName === "GO") {
                        var category, keywordName;
                        if (serverName === 'GO') {
                            category = typeCat;
                            keywordName = typeText;
                        } else {// its a UniProt keyword
                            category = typeText;
                            keywordName = ann.label;
                        }
                        if (category !== 'technical_term') {
                            var firstLink;
                            if (links !== undefined) {
                                if (links.length > 0) {
                                    firstLink = links[0].href;
                                }
                            }
                            var keyword = {
                                name: keywordName,
                                //                                meth: method,
                                link: firstLink
                            };
                            var keywordArray = keywords.get(category);
                            if (keywordArray === undefined) {
                                keywordArray = new Array();
                                keywords.set(category, keywordArray);
                            }
                            keywordArray.push(keyword);
                        }
                    }
                    //Positional features - also easy to identify
                    else if (ann_start > 0 && ann_end > 0) {
                        //                                                posTable = posTable + '<tr>'
                        //                                                + '<td>' + typeText
                        //                                                + '</td><td>' + typeCat
                        //                                                + '</td><td>' + method
                        //                                                + '</td><td>' + ann.label
                        //                                                + '</td><td>' + ann_start
                        //                                                + '</td><td>' + ann_end
                        //                                                + '</td><td>' + noteText
                        //                                                + '</td></tr>';
                        var posFeat;
                        if (serverName === 'SuperFamily 1.75') {
                            if (method !== 'Component') {
                                posFeat = {
                                    name: typeText,
                                    start: ann_start,
                                    end: ann_end,
                                    notes: noteText,
                                    links: links
                                };
                                addPositionalFeature(typeCat);
                            }
                        }
                        else if (serverName === 'UniProt') {
                            if (typeCat === 'Secondary structure') {
                                posFeat = {
                                    name: typeText,
                                    start: ann_start,
                                    end: ann_end,
                                    notes: noteText,
                                    links: links
                                };
                                addPositionalFeature(typeCat);
                            }
                            //ignore some UNiProt pos.feat. we're not currently interested in
                            else if (typeCat !== 'Molecule processing' &&
                                    typeCat !== 'Sequence variation'
                                    && typeCat !== 'Sequence conflict'
                                    && typeCat !== 'Site'
                                    && typeCat !== 'Experimental information'
                                    && typeCat !== 'Amino acid modification'
                                    ) {
                                var residueRegex = new RegExp('_' + ann_start + '_' + ann_end, 'g');
                                var accessionRegex = new RegExp('_' + segment.id, 'g');
                                posFeat = {
                                    name: ann.label.replace(residueRegex, '').replace(accessionRegex, '')
                                            + ' (' + typeText + ')',
                                    start: ann_start,
                                    end: ann_end,
                                    notes: noteText,
                                    links: links
                                };
                                addPositionalFeature(typeCat);
                            }
                        }
                        else if (serverName === 'Pfam') {
                            if (
                                    method === 'Pfam-A' || method === 'Pfam-B'
                                    //                                    method !== 'Uniprot'
                                    //                                    && method !== 'Pfam predicted active site'
                                    //                                    && method !== 'Seg'
                                    ) {
                                var annoName = ann.label.substring(0, ann.label.indexOf(':'));
                                posFeat = {
                                    name: annoName + ' (' + typeText + ')',
                                    start: ann_start,
                                    end: ann_end,
                                    notes: noteText,
                                    links: links
                                };
                                //for InterPro and Pfam swap category and method
                                addPositionalFeature(method);
                            }
                        }
                        else if (serverName === 'InterPro') {
                            if (
                                    method === 'GENE3D'
                                    //                                    method !== 'Pfam' && method !== 'PfamB' && method !== 'SUPERFAMILY'
                                    ) {
                                posFeat = {
                                    name: ann.label + ' (' + typeText + ')',
                                    start: ann_start,
                                    end: ann_end,
                                    notes: noteText,
                                    links: links
                                };
                                //for InterPro and Pfam swap category and method
                                addPositionalFeature(method);
                            }
                        }
                        else {
                            posFeat = {
                                name: ann.label + ' (' + typeText + ')',
                                start: ann_start,
                                end: ann_end,
                                notes: noteText,
                                links: links
                            };
                            addPositionalFeature(typeCat);
                        }
                    }
                    //onto the not positional/not keywords annotations
                    else if (typeCat === "Protein name") {
                        //its the name from UniProt
                        if (serverName === 'UniProt') {
                            var name = ann.label;
                            processed.name = name;
                            processed.href = links[0].href;
                            processed.full = noteText;
                            processed.start = segment.start;
                            processed.stop = segment.stop;
                        }
                    }
                    else if (typeCat === "Taxonomy") {
                        //also UniProt
                        //ignore
                        //                        if (serverName === 'UniProt') {
                        //                            processed.taxon = ann.label;
                        //                            processed.taxonHref = links[0].href;
                        //                        }
                    }
                    else if (typeCat === "Organism") {
                        //UniProt, but ignored
                    }
                    else if (typeCat === "Comment") {
                        comments.push({
                            notes: noteText,
                            links: links
                        }
                        );
                    }
                    //publications - easy to identify
                    else if (typeCat === "Publication") {
                        //ignore
                        //                        publications.push({
                        //                            notes: noteText,
                        //                            links: links
                        //                        }
                        //                        );
                    }
                    //misc/non-positional
                    else {
                        var miscText = typeText + ', ' + typeCat + ', ' +
                                ann.label + ', ' + method + ' ';
                        comments.push({
                            notes: miscText,
                            links: links
                        }
                        );
                    }
                }//end annotation loop
                if (comments.length > 0) {
                    processed.notes = comments;
                }
                if (keywords.keys().length > 0) {
                    processed.keywords = keywords;
                }
                if (publications.length > 0) {
                    processed.publications = publications;
                }
                // for debugging
                //            processed.html = posTable + '</table>';
            }
            this.processedDAS.set(serverName, processed);
            //temp
            if (serverName === 'SuperFamily 1.75' && processed.positional) {
                if (this.customAnnotations === undefined || this.customAnnotations === null) {
                    this.setPositionalFeatures(processed.positional.get('miscellaneous'));
                }
            }
        }

    }
    function addPositionalFeature(cat) {
        var positional = processed.positional;
        if (positional === undefined) {
            positional = d3.map();
            processed.positional = positional;
        }
        var posFeatures = positional.get(cat);
        if (posFeatures === undefined) {
            posFeatures = new Array();
            positional.set(cat, posFeatures);
        }
        posFeatures.push(posFeat);
    }
};

function updateMenus(xlv) {
    var message = "<h6>Positional feature sets</h4>";
    // roll up positional features
    var allPos = new Array();
    var customAnnot = false;
    var prots = xlv.proteins.values();
    var protCount = prots.length;
    for (var p = 0; p < protCount; p++) {
        if (this.customAnnotations !== undefined && this.customAnnotations !== null) {
            customAnnot = true;
        }
        prots[p].processedDAS.forEach(
                function(serverName, das) {
                    if (das.positional) {
                        das.positional = d3.map(das.positional);
                        das.positional.forEach(
                                function(cat, posFeatArray) {
                                    allPos.push({
                                        server: serverName,
                                        category: cat
                                    });
                                }
                        );
                    }
                }
        );
    }
    var nestedPos = d3.nest()
            .key(function(d) {
        return d.server;
    })
            .key(function(d) {
        return d.category;
    })
            .rollup(function(d) {
        return (d.length + " annotated proteins");
    })
            .map(allPos);
    message += '<pre>' + JSON.stringify(nestedPos, null, '\t') + '</pre>';
    //update option menu
    var select = document.getElementById('pos_feat_select');
    //empty menu
    if (typeof select !== 'undefined' && select != null) {
    while (select.firstChild) {
        select.removeChild(select.firstChild);
    }
    //add none option
    var noneOption = document.createElement("option");
    noneOption.setAttribute('value', 'none');
    if (customAnnot) {
        noneOption.appendChild(document.createTextNode('None or custom'));
    } else {
        noneOption.appendChild(document.createTextNode('None'));
    }
    select.appendChild(noneOption);
    d3.keys(nestedPos).forEach(
            function(group) {
                var optGroup = document.createElement("optGroup");
                optGroup.setAttribute('label', group);
                d3.keys(nestedPos[group]).forEach(
                        function(opt) {
                            opt = opt.replace(/\n/gi,'');
                            var option = document.createElement("option");
                            option.setAttribute('value', opt);
                            option.appendChild(document.createTextNode(opt));
                            optGroup.appendChild(option);
                        }
                );
                select.appendChild(optGroup);
            }
    );
    //select.value = 'miscellaneous';
    select.removeAttribute('disabled');

    message += "<h6>Keyword sets</h4>";
    var allKey = new Array();
    for (var p = 0; p < protCount; p++) {
        prots[p].processedDAS.forEach(
                function(serverName, das) {
                    if (das.keywords) {
                        das.keywords = d3.map(das.keywords);
                        das.keywords.forEach(
                                function(cat, posFeatArray) {
                                    allKey.push({
                                        server: serverName,
                                        category: cat
                                    });
                                }
                        );
                    }
                }
        );
    }
    var nestedKeywords = d3.nest()
            .key(function(d) {
        return d.server;
    })
            .key(function(d) {
        return d.category;
    })
            .rollup(function(d) {
        return (d.length + " annotated proteins");
    })
            .map(allKey);
    message += '<pre>' + JSON.stringify(nestedKeywords, null, '\t') + '</pre>';

    //update option menu
    select = document.getElementById('keyword_select');
    //empty menu
    while (select.firstChild) {
        select.removeChild(select.firstChild);
    }
    //add none option
    var noneOption = document.createElement("option");
    noneOption.setAttribute('value', 'none');
    noneOption.appendChild(document.createTextNode('None'));
    select.appendChild(noneOption);
    d3.keys(nestedKeywords).forEach(
            function(group) {
                var optGroup = document.createElement("optGroup");
                optGroup.setAttribute('label', group);
                d3.keys(nestedKeywords[group]).forEach(
                        function(opt) {
                            var option = document.createElement("option");
                            option.setAttribute('value', opt);
                            option.appendChild(document.createTextNode(opt));
                            optGroup.appendChild(option);
                        }
                );
                select.appendChild(optGroup);
            }
    );
    select.removeAttribute('disabled');

    //enable additonal text search checkboxes
//    document.getElementById('notes').removeAttribute('disabled');
    //    document.getElementById('notes').setAttribute('checked', 'checked');
//    document.getElementById('key_text').removeAttribute('disabled');
    //    document.getElementById('key_text').setAttribute('checked', 'checked');
//    document.getElementById('posFeat_text').removeAttribute('disabled');
  }
//    document.getElementById('posFeat_text').setAttribute('checked', 'checked');
//xlv.message(message);
}
