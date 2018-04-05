//    xiNET Interaction Viewer
//    Copyright 2013 Rappsilber Laboratory, University of Edinburgh
//
//    This product includes software developed at
//    the Rappsilber Laboratory (http://www.rappsilberlab.org/).
//
//    author: Colin Combe
//
//    Controller.js

"use strict";

var xiNET = {}; //crosslinkviewer's javascript namespace
var d3 = require('d3');
var colorbrewer = require('colorbrewer');
var xiNET_Storage = require('./xiNET_Storage');
var Annotation = require('../model/interactor/Annotation');
var Molecule = require('../model/interactor/Molecule');
var Polymer = require('../model/interactor/Polymer');
var Protein = require('../model/interactor/Protein');
var BioactiveEntity = require('../model/interactor/BioactiveEntity');
var Gene = require('../model/interactor/Gene');
var DNA = require('../model/interactor/DNA');
var RNA = require('../model/interactor/RNA');
var Complex = require('../model/interactor/Complex_symbol');
var MoleculeSet = require('../model/interactor/MoleculeSet');
var Link = require('../model/link/Link');
var NaryLink = require('../model/link/NaryLink');
var SequenceLink = require('../model/link/SequenceLink');
var SequenceDatum = require('../model/link/SequenceDatum');
var BinaryLink = require('../model/link/BinaryLink');
var UnaryLink = require('../model/link/UnaryLink');
var Expand = require ('./Expand');
var Config = require('./Config');

var MouseEventCodes = {}
MouseEventCodes.MOUSE_UP = 0;//start state, also set when mouse up on svgElement
MouseEventCodes.PANNING = 1;//set by mouse down on svgElement - left button, no shift or controller
MouseEventCodes.DRAGGING = 2;//set by mouse down on Protein or Link
MouseEventCodes.ROTATING = 3;//set by mouse down on Rotator, drag?
MouseEventCodes.SELECTING = 4;//set by mouse down on svgElement- right button or left button shift or controller, drag

xiNET.Controller = function(targetDiv) {
    // targetDiv could be div itself or id of div - lets deal with that
    if (typeof targetDiv === "string"){
        targetDiv = document.getElementById(targetDiv);
    }
    this.emptyElement(targetDiv); //avoids prob with 'save - web page complete'
    //create SVG elemnent
    this.svgElement = document.createElementNS(Config.svgns, "svg");
    this.svgElement.setAttribute('id', 'networkSVG');
    this.svgElement.setAttribute("width", "100%");
    this.svgElement.setAttribute("height", "100%");
    this.svgElement.setAttribute("style", "display:block;");
    //add listeners
    var self = this;
    this.svgElement.onmousedown = function(evt) {self.mouseDown(evt);};
    this.svgElement.onmousemove = function(evt) {self.mouseMove(evt);};
    this.svgElement.onmouseup = function(evt) {self.mouseUp(evt);};
    this.svgElement.onmouseout = function(evt) {self.hideTooltip(evt);};
    this.lastMouseUp = new Date().getTime();
    this.svgElement.ontouchstart = function(evt) {self.touchStart(evt);};
    this.svgElement.ontouchmove = function(evt) {self.touchMove(evt);};
    this.svgElement.ontouchend = function(evt) {self.touchEnd(evt);};

    //legend changed callbacks
    this.legendCallbacks = new Array();

    targetDiv.appendChild(this.svgElement);

    // various groups needed
    this.container = document.createElementNS(Config.svgns, "g");
    this.container.setAttribute("id", "container");

    this.naryLinks = document.createElementNS(Config.svgns, "g");
    this.naryLinks.setAttribute("id", "naryLinks");
    this.container.appendChild(this.naryLinks);

    this.p_pLinksWide = document.createElementNS(Config.svgns, "g");
    this.p_pLinksWide.setAttribute("id", "p_pLinksWide");
    this.container.appendChild(this.p_pLinksWide);

    this.highlights = document.createElementNS(Config.svgns, "g");
    this.highlights.setAttribute("class", "highlights");//interactors also contain highlight groups
    this.container.appendChild(this.highlights);

    this.res_resLinks = document.createElementNS(Config.svgns, "g");
    this.res_resLinks.setAttribute("id", "res_resLinks");
    this.container.appendChild(this.res_resLinks);

    this.p_pLinks = document.createElementNS(Config.svgns, "g");
    this.p_pLinks.setAttribute("id", "p_pLinks");
    this.container.appendChild(this.p_pLinks);

    this.proteinUpper = document.createElementNS(Config.svgns, "g");
    this.proteinUpper.setAttribute("id", "proteinUpper");
    this.container.appendChild(this.proteinUpper);

    this.selfRes_resLinks = document.createElementNS(Config.svgns, "g");
    this.selfRes_resLinks.setAttribute("id", "res_resLinks");
    this.container.appendChild(this.selfRes_resLinks);

    this.svgElement.appendChild(this.container);

    //showing title as tooltips is NOT part of svg spec (even though some browsers do this)
    //also more repsonsive / more control if we do out own
    this.tooltip = document.createElementNS(Config.svgns, "text");
    this.tooltip.setAttribute('x', 0);
    this.tooltip.setAttribute('y', 0);
    var tooltipTextNode = document.createTextNode('tooltip');
    this.tooltip.appendChild(tooltipTextNode);

    this.tooltip_bg = document.createElementNS(Config.svgns, "rect");
    this.tooltip_bg.setAttribute('class', 'tooltip_bg');

    this.tooltip_bg.setAttribute('fill-opacity', 0.75);
    this.tooltip_bg.setAttribute('stroke-opacity', 1);
    this.tooltip_bg.setAttribute('stroke-width', 1);

    this.tooltip_subBg = document.createElementNS(Config.svgns, "rect");
    this.tooltip_subBg.setAttribute('fill', 'white');
    this.tooltip_subBg.setAttribute('stroke', 'white');
    this.tooltip_subBg.setAttribute('class', 'tooltip_bg');
    this.tooltip_subBg.setAttribute('opacity', 1);
    this.tooltip_subBg.setAttribute('stroke-width', 1);

    this.svgElement.appendChild(this.tooltip_subBg);
    this.svgElement.appendChild(this.tooltip_bg);
    this.svgElement.appendChild(this.tooltip);

    this.clear();
};

xiNET.Controller.prototype.clear = function() {
    this.sequenceInitComplete = false;
    if (this.force) {
        this.force.stop();
    }
    this.force = null;
    this.emptyElement(this.naryLinks);
    this.emptyElement(this.p_pLinksWide);
    this.emptyElement(this.highlights);
    this.emptyElement(this.p_pLinks);
    this.emptyElement(this.res_resLinks);
    this.emptyElement(this.proteinUpper);
    this.emptyElement(this.selfRes_resLinks);

     //are we panning?
    this.panning = false;
    // if we are dragging something at the moment - this will be the element that is draged
    this.dragElement = null;
    // are we dragging at the moment?
    this.dragging = false;
    // from where did we start dragging
    this.dragStart = {};
    // are we rotating at the moment
    this.rotating = false;

    this.molecules = d3.map();
    this.allNaryLinks = d3.map();
    this.allBinaryLinks = d3.map();
    this.allUnaryLinks = d3.map();
    this.allSequenceLinks = d3.map();

    this.proteinCount = 0;
    this.maxBlobRadius = 30;
    Molecule.MAXSIZE = 100;

    this.z = 1;
    this.scores = null;
    this.selected = d3.map();
    this.selectedLinks = d3.map();

    this.hideTooltip();

    this.resetZoom();
    this.state = MouseEventCodes.MOUSE_UP;
};

xiNET.Controller.prototype.legendChanged = function(colourScheme) {
    var callbacks = this.legendCallbacks;
    var count = callbacks.length;
    for (var i = 0; i < count; i++) {
        callbacks[i](colourScheme);
    }
}

xiNET.Controller.prototype.emptyElement = function(element) {
    while (element.lastChild) {
        element.removeChild(element.lastChild);
    }
};

// reads our MI JSON format
xiNET.Controller.prototype.readMIJSON = function(miJson, expand) {
    //check that we've got a parsed javascript object here, not a String
    miJson = (typeof miJson === 'object') ? miJson : JSON.parse(miJson);
    //default is to expand
    if (typeof expand === 'undefined'){expand = true;}
    this.expand = expand;//naryLink checks this when deciding colour
    var data = miJson.data;
    var dataElementCount = data.length;
    var self = this;
    self.features = d3.map();

    //var complexes = d3.map();
    var needsSequence = d3.set();//things that need seq looked up
    expand? readStoichExpanded() : readStoichUnexpanded();

    // loop through particpants and features
    // init binary, unary and sequence links,
    // and make needed associations between these and containing naryLink
    for (var l = 0; l < dataElementCount; l++) {
            var interaction = data[l];
            if (interaction.object === 'interaction') {
            var jsonParticipants = interaction.participants;
            var participantCount = jsonParticipants.length

            for (var pi = 0; pi < participantCount; pi++){
                var jsonParticipant = jsonParticipants[pi];
                var features = new Array(0);
                if (jsonParticipant.features) features = jsonParticipant.features;

                var fCount = features.length;
                for (var f = 0; f < fCount; f++){// for each feature
                    var feature = features[f];
                    var fromSequenceData = feature.sequenceData;
                    if (feature.linkedFeatures) { // if linked features
                        var linkedFeatureIDs = feature.linkedFeatures;


                        var linkedFeatureCount = linkedFeatureIDs.length;
                        for (var lfi = 0; lfi < linkedFeatureCount; lfi++){ //for each linked feature

                            // !! following is a hack, code can't deal with
                            // !! composite binding region across two different interactors
                            // break feature links to different nodes into seperate binary links
                            var toSequenceData_indexedByNodeId = d3.map();

                            var linkedFeature = self.features.get(linkedFeatureIDs[lfi])
                            var seqDataCount = linkedFeature.sequenceData.length;
                            for (var s = 0; s < seqDataCount; s++){
                                var seqData = linkedFeature.sequenceData[s];
                                var nodeId = seqData.interactorRef;
                                if (expand) {
                                    nodeId = nodeId + '(' + seqData.participantRef + ')';
                                }
                                var toSequenceData = toSequenceData_indexedByNodeId.get(nodeId);
                                if (typeof toSequenceData === 'undefined'){
                                    toSequenceData = new Array();
                                    toSequenceData_indexedByNodeId.set(nodeId, toSequenceData);
                                }
                                toSequenceData = toSequenceData.push(seqData)
                            }

                            var countEndNodes = toSequenceData_indexedByNodeId.values().length;
                            for (var n = 0; n < countEndNodes; n++) {
                                toSequenceData = toSequenceData_indexedByNodeId.values()[n];
                                var fromMolecule = getNode(fromSequenceData[0]);
                                var toMolecule = getNode(toSequenceData[0]);
                                if (fromMolecule && toMolecule) {
                                    var link;
                                    if (fromMolecule === toMolecule){
                                        link = getUnaryLink(fromMolecule, interaction);
                                    }
                                    else {
                                        link = getBinaryLink(fromMolecule, toMolecule, interaction);
                                    }
                                    var sequenceLink = getFeatureLink(fromSequenceData, toSequenceData, interaction);
                                    fromMolecule.sequenceLinks.set(sequenceLink.id, sequenceLink);
                                    toMolecule.sequenceLinks.set(sequenceLink.id, sequenceLink);
                                    link.sequenceLinks.set(sequenceLink.id, sequenceLink);
                                }
                            }

                        }// end for each linked feature

                    }// end if linked features
                }// end for each feature
            }
        }
    }

    //init complexes
    /*var complexes = complexes.values()
    for (var c = 0; c < complexes.length; c++) {
        var interactionId;
        if (expand) {
            interactionId = complexes[c].id.substring(0, complexes[c].id.indexOf('('));
        }
        else {
            interactionId = complexes[c].id;
        }
        var naryLink;
        for (var l = 0; l < dataElementCount; l++) {
            var interaction = data[l];
            if (interaction.id == interactionId) {
                var nLinkId = getNaryLinkIdFromInteraction(interaction);
                naryLink = self.allNaryLinks.get(nLinkId);
            }
        }
        complexes[c].initMolecule(naryLink);
        naryLink.complex = complexes[c];
    }*/
    self.checkLinks();
    self.initLayout();

    //make mi features into annotations
    var features = self.features.values();
    var fCount = features.length;
    for (var f = 0; f < fCount; f++){
        var feature = features[f];
        // add features to interactors/participants/nodes
        var annotName = "";
        if (typeof feature.name !== 'undefined') {
            annotName += feature.name + ', ';
        }
        if (typeof feature.type !== 'undefined') {
            annotName += feature.type.name;
        }
        if (typeof feature.detmethod !== 'undefined') {
            annotName += ', ' + feature.detmethod.name;
        }
        //~ var colour = Molecule.domainColours(feature.name);
        // the id info we need is inside sequenceData att
        if (feature.sequenceData) {
            //~ console.log(JSON.stringify(feature, null, '\t'));
            var seqData = feature.sequenceData;
            var seqDataCount = seqData.length;
            for (var sdi = 0; sdi < seqDataCount; sdi++) {
                var seqDatum = seqData[sdi];
                var mID = seqDatum.interactorRef;
                if (mID) {
                    if (expand) {
                        mID = mID   + "(" + seqDatum.participantRef + ")";
                    }
                    var molecule = self.molecules.get(mID);
                    var sequenceRegex = /(.+)-(.+)/;
                    var match = sequenceRegex.exec(seqDatum.pos);
                    var startRes = match[1] * 1;
                    var endRes = match[2] * 1;
                    if (isNaN(startRes) === false && isNaN(endRes) === false) {
                        var annotation = new Annotation(annotName, startRes, endRes);
                        if (molecule.miFeatures == null) {
                            molecule.miFeatures = new Array();
                        }
                        molecule.miFeatures.push(annotation);
        //              console.log(molecule.id);
                    }
                }
            }
        }
    }

    //lookup missing sequences
    var nsIds = needsSequence.values();
    var nsCount = nsIds.length;
    if (nsCount === 0) {
        self.initPolymers();
    }
    else {
        var countSequences = 0;
        for (var m = 0; m < nsCount; m++){
            xiNET_Storage.getSequence(nsIds[m], function(id, seq){
                    self.molecules.get(id).setSequence(seq);
                    countSequences++;
                    if (countSequences === nsCount){
                        self.initPolymers();
                    }
                }
            );
        }
    }

    function readStoichExpanded(){
        //get interactors
        var interactors = d3.map();
        for (var n = 0; n < dataElementCount; n++) {
            if (data[n].object === 'interactor') {
                var interactor = data[n];
                interactors.set(interactor.id, interactor);
            }
        }

        //get maximum stoichiometry
        var maxStoich = 0;
        for (var l = 0; l < dataElementCount; l++) {
            var interaction = data[l];
            if (interaction.object === 'interaction') {
                var participantCount = interaction.participants.length;
                for (var pi = 0; pi < participantCount; pi++) {
                    var participant = interaction.participants[pi];
                    if (participant.stoichiometry && (participant.stoichiometry-0) > maxStoich){
                        maxStoich = (participant.stoichiometry-0);
                    }
                }
            }
        }
        if (maxStoich < 30){
            miJson = Expand.matrix(miJson);
        }

        indexFeatures();

        //add naryLinks and participants
        for (var l = 0; l < dataElementCount; l++) {
            var interaction = data[l];
            if (interaction.object === 'interaction') {
                var jsonParticipants = interaction.participants;
                var participantCount = jsonParticipants.length

                //init n-ary link
                var nLinkId = getNaryLinkIdFromInteraction(interaction)
                var nLink = self.allNaryLinks.get(nLinkId);
                if (typeof nLink === 'undefined') {
                    //doesn't already exist, make new nLink
                    nLink = new NaryLink(nLinkId, self);
                    self.allNaryLinks.set(nLinkId, nLink);
                    //alot of time is being spent on creating these IDs, stash them in the interaction object?
                    interaction.naryId =  nLinkId;

                }
                nLink.addEvidence(interaction);

                //init participants
                for (var pi = 0; pi < participantCount; pi++){
                    var jsonParticipant = jsonParticipants[pi];

                    var intRef = jsonParticipant.interactorRef;
                    var partRef = jsonParticipant.id;
                    var participantId =  intRef + "(" + partRef + ")";
                    var participant = self.molecules.get(participantId);
                    if (typeof participant === 'undefined'){
                        var interactor = interactors.get(intRef);
                        participant = newMolecule(interactor, participantId, intRef);
                        self.molecules.set(participantId, participant);
                    }

                    participant.naryLinks.set(nLinkId, nLink);
                    //TODO: tidy up whats happening in NaryLink re interactor/participant terminology
                    if (nLink.interactors.indexOf(participant) === -1){
                        nLink.interactors.push(participant);
                    }

                    if (jsonParticipant.stoichiometry && jsonParticipant.stoichiometry !== null){
                        var interactor = self.molecules.get(participantId);
                        interactor.addStoichiometryLabel(jsonParticipant.stoichiometry);
                    }
                }
            }
        }
    };

    function newMolecule(interactor, participantId, interactorRef){
        var participant;
        if (typeof interactor === 'undefined') {
            //must be a previously unencountered complex -
            // MI:0314 - interaction?, MI:0317 - complex? and its many subclasses
            participant = new Complex(participantId, self, interactorRef);
            //complexes.set(participantId, participant);
        }
        //molecule sets
        else if (interactor.type.id === 'MI:1304' //molecule set
                || interactor.type.id === 'MI:1305' //molecule set - candidate set
                || interactor.type.id === 'MI:1307' //molecule set - defined set
                || interactor.type.id === 'MI:1306' //molecule set - open set
            ) {
            participant = new MoleculeSet(participantId, self, interactor); //doesn't really work yet
        }
        //bioactive entities
        else if (interactor.type.id === 'MI:1100' // bioactive entity
                || interactor.type.id === 'MI:0904' // bioactive entity - polysaccharide
                || interactor.type.id === 'MI:0328' //bioactive entity - small mol
            ) {
            participant = new BioactiveEntity(participantId, self, interactor, interactor.label);
        }
        // proteins, peptides
        else if (interactor.type.id === 'MI:0326' || interactor.type.id === 'MI:0327') {
            participant = new Protein(participantId, self, interactor, interactor.label);
            if (typeof interactor.sequence !== 'undefined') {
                participant.setSequence(interactor.sequence);
            }
            else {
                //should look it up using accession number
                if (participantId.indexOf('uniprotkb') === 0){
                    needsSequence.add(participantId);
                } else {
                    participant.setSequence("SEQUENCEMISSING");
                }
            }
        }
        //genes
        else if (interactor.type.id === 'NI:0250') {
            participant = new Gene(participantId, self, interactor, interactor.label);
        }
        //RNA
        else if (interactor.type.id === 'MI:0320' // RNA
                || interactor.type.id === 'MI:0321' // RNA - catalytic
                || interactor.type.id === 'MI:0322' // RNA - guide
                || interactor.type.id === 'MI:0323' // RNA - heterogeneous nuclear
                || interactor.type.id === 'MI:2190' // RNA - long non-coding
                || interactor.type.id === 'MI:0324' // RNA - messenger
                || interactor.type.id === 'MI:0679' // RNA - poly adenine
                || interactor.type.id === 'MI:0608' // RNA - ribosomal
                || interactor.type.id === 'MI:0611' // RNA - signal recognition particle
                || interactor.type.id === 'MI:0610' // RNA - small interfering
                || interactor.type.id === 'MI:0607' // RNA - small nuclear
                || interactor.type.id === 'MI:0609' // RNA - small nucleolar
                || interactor.type.id === 'MI:0325' // RNA - transfer
            ) {
            participant = new RNA(participantId, self, interactor, interactor.label);
        }
        //DNA
        else if (interactor.type.id === 'MI:0319' // DNA
                || interactor.type.id === 'MI:0681' // DNA - double stranded
                || interactor.type.id === 'MI:0680' // DNA - single stranded
            ) {
            participant = new DNA(participantId, self, interactor, interactor.label);
        } else {
            // MI:0329 - unknown participant ?
            // MI:0383 - biopolymer ?
            alert("Unrecognised type:" + interactor.type.name);
        }
        return participant;
    }

    function indexFeatures(){
        //create indexed collection of all features from interactions
        // - still seems like a good starting point?
        for (var l = 0; l < dataElementCount; l++) {
            var interaction = data[l];
            if (interaction.object === 'interaction') {
                var participantCount = interaction.participants.length;
                for (var pi = 0; pi < participantCount; pi++) {
                    var participant = interaction.participants[pi];
                    var features = new Array(0);
                    if (participant.features) features = participant.features;

                    var fCount = features.length;
                    for (var f = 0; f < fCount; f++){
                        var feature = features[f];
                        self.features.set(feature.id, feature);
                    }
                }
            }
        }
    }

    function readStoichUnexpanded(){
        //get interactors
        for (var n = 0; n < dataElementCount; n++) {
            if (data[n].object === 'interactor') {
                var interactor = data[n];
                var participant;
                var participantId = interactor.id;
                participant = newMolecule (interactor, participantId);
                self.molecules.set(participantId, participant);
            }
        }

        indexFeatures();

        //add naryLinks
        for (var l = 0; l < dataElementCount; l++) {
            var interaction = data[l];
            if (interaction.object === 'interaction') {
                var jsonParticipants = interaction.participants;
                var participantCount = jsonParticipants.length

                //init n-ary link
                var nLinkId = getNaryLinkIdFromInteraction(interaction)
                var nLink = self.allNaryLinks.get(nLinkId);
                if (typeof nLink === 'undefined') {
                    //doesn't already exist, make new nLink
                    nLink = new NaryLink(nLinkId, self);
                    self.allNaryLinks.set(nLinkId, nLink);
                }
                nLink.addEvidence(interaction);

                //~ //init participants
                for (var pi = 0; pi < participantCount; pi++){
                    var jsonParticipant = jsonParticipants[pi];
                    var intRef = jsonParticipant.interactorRef;
                    var participantId =  intRef;// + "(" + partRef + ")";
                    var participant = self.molecules.get(participantId);

                    if (typeof participant === 'undefined'){
                        //must be a previously unencountered complex
                        participant = new Complex(participantId, self);
                        //complexes.set(participantId, participant);
                        self.molecules.set(participantId, participant);
                    }


                    participant.naryLinks.set(nLinkId, nLink);
                    //TODO: tidy up whats happening in NaryLink re interactor/participant terminology
                    if (nLink.interactors.indexOf(participant) === -1){
                        nLink.interactors.push(participant);
                    }
                    //~ if (jsonParticipant.stoichiometry && jsonParticipant.stoichiometry !== null){
                        //~ var interactor = self.molecules.get(participantId);
                        //~ interactor.addStoichiometryLabel(jsonParticipant.stoichiometry);
                    //~ }
                }
            }
        }

    };


    function getNaryLinkIdFromInteraction(interaction) {
        if (interaction.naryId) {
            return interaction.naryId;
        }
        var jsonParticipants = interaction.participants;
        var participantCount = jsonParticipants.length

        var pIDs = d3.set();//used to eliminate duplicates
        //make id
        for (var pi = 0; pi < participantCount; pi++) {
            var pID = jsonParticipants[pi].interactorRef;
            if (expand) {
                pID = pID   + "(" + jsonParticipants[pi].id + ")";
            }
            pIDs.add(pID);
        }

        return pIDs.values().sort().join('-');
    };

    function getNode(seqDatum){
        var id = seqDatum.interactorRef;
        if (expand){
            id = id + '(' + seqDatum.participantRef + ')';
        }
        return self.molecules.get(id);
    }

    function getFeatureLink(fromSeqData, toSeqData, interaction){
        function seqDataToString(seqData){
            var nodeIds = d3.set();//used to eliminate duplicates
            //make id
            for (var s = 0; s < seqData.length; s++){
                var seq = seqData[s];
                var id = seq.interactorRef;
                if (expand) {
                    id = id + '(' + seq.participantRef + ')';
                }
                id = id + ':' + seq.pos;
                nodeIds.add(id);
            }
            //sort ids
            return nodeIds.values().sort().join(';');
        }


        var start =  seqDataToString(fromSequenceData);
        var end =  seqDataToString(toSequenceData);
        var seqLinkId, endsSwapped;
        if (start < end){
            seqLinkId  =  start + '><' + end;
            endsSwapped = false;
        } else {
            seqLinkId = end + '><' + start;
            endsSwapped = true;
        }
        var sequenceLink = self.allSequenceLinks.get(seqLinkId);
        if (typeof sequenceLink === 'undefined') {
            var fromFeaturePositions = new Array();
            var seqDatumCount = fromSeqData.length;
            for (var i = 0; i < seqDatumCount; i++) {
                fromFeaturePositions.push(new SequenceDatum(getNode(fromSeqData[i]), fromSeqData[i].pos));
            }
            var toFeaturePositions = new Array();
            seqDatumCount = toSeqData.length;
            for (i = 0; i < seqDatumCount; i++) {
                toFeaturePositions.push(new SequenceDatum(getNode(toSeqData[i]), toSeqData[i].pos));
            }
            //~ if (endsSwapped === false) {
                sequenceLink = new SequenceLink(seqLinkId, fromFeaturePositions, toFeaturePositions, self, interaction);
            //~ }else {
                //~ sequenceLink = new SequenceLink(seqLinkId, toFeaturePositions, fromFeaturePositions, self, interaction);
            //~ }
            self.allSequenceLinks.set(seqLinkId, sequenceLink);
        }

        sequenceLink.addEvidence(interaction);
        var nLinkId = getNaryLinkIdFromInteraction(interaction);
        var nLink = self.allNaryLinks.get(nLinkId);
        nLink.sequenceLinks.set(seqLinkId, sequenceLink);
        return sequenceLink;
    };

    function getUnaryLink(interactor, interaction){
        var linkID = '-' + interactor.id + '-' + interactor.id
        var link = self.allUnaryLinks.get(linkID);
        if (typeof link === 'undefined') {
            link = new UnaryLink(linkID, self, interactor);
            self.allUnaryLinks.set(linkID, link);
            interactor.selfLink = link;
        }
        var nLinkId = getNaryLinkIdFromInteraction(interaction);
        var nLink = self.allNaryLinks.get(nLinkId);
        nLink.unaryLinks.set(linkID, link);
        link.addEvidence(interaction);
        return link;
    };

    function getBinaryLink(sourceMolecule, targetMolecule, interaction){
        var linkID, fi, ti;
        // these links are undirected and should have same ID regardless of which way round
        // source and target are
        if (sourceMolecule.id  < targetMolecule.id) {
            linkID = '-' + sourceMolecule.id + '-' + targetMolecule.id;
            fi = sourceMolecule;
            ti = targetMolecule;
        } else {
            linkID = "-" + targetMolecule.id + '-' + sourceMolecule.id;
            fi = targetMolecule;
            ti = sourceMolecule;
        }
        var link = self.allBinaryLinks.get(linkID);
        if (typeof link === 'undefined') {
            link = new BinaryLink(linkID, self, fi, ti);
            fi.binaryLinks.set(linkID, link);
            ti.binaryLinks.set(linkID, link);
            self.allBinaryLinks.set(linkID, link);
        }
        var nLinkId = getNaryLinkIdFromInteraction(interaction);
        var nLink = self.allNaryLinks.get(nLinkId);
        nLink.binaryLinks.set(linkID, link);
        link.addEvidence(interaction);
        return link;
    }
};

xiNET.Controller.prototype.checkLinks = function() {
    function checkAll(linkMap){
        var links = linkMap.values();
        var c = links.length;
        for (var l = 0; l < c; l++) {
            links[l].check();
        }
    }
    checkAll(this.allNaryLinks);
    checkAll(this.allBinaryLinks);
    checkAll(this.allUnaryLinks);
    checkAll(this.allSequenceLinks);
};

xiNET.Controller.prototype.setAllLinkCoordinates = function() {
    function setAll(linkMap){
        var links = linkMap.values();
        var c = links.length;
        for (var l = 0; l < c; l++) {
            links[l].setLinkCoordinates();
        }
    }
    setAll(this.allNaryLinks);
    setAll(this.allBinaryLinks);
    setAll(this.allUnaryLinks);
    if (this.sequenceInitComplete) {
        setAll(this.allSequenceLinks);
    }
};

xiNET.Controller.prototype.autoLayout = function() {
    if (typeof this.force !== 'undefined' && this.force != null) {
        this.force.stop();
    }
    var width = this.svgElement.parentNode.clientWidth;
    var height = this.svgElement.parentNode.clientHeight;

    var molCount = this.molecules.keys().length;
    var self = this;
    var nodes = this.molecules.values();
    var nodeCount = nodes.length;
    //if force is null choose starting points for nodes
    if (typeof this.force === 'undefined' || this.force == null) {
        for (var n = 0; n < nodeCount; n++) {
            nodes[n].setPosition(Math.random() * width, Math.random() * height);
        }
    }

    //do force directed layout
    var layoutObj = {};
    layoutObj.nodes = [];
    layoutObj.links = [];
    var molLookUp = {};
    var mi = 0;

    for (var n = 0; n < nodeCount; n++) {
        var mol = nodes[n];
        molLookUp[mol.id] = mi;
        mi++;
        var nodeObj = {};
        nodeObj.id = mol.id;
        nodeObj.x = mol.x;
        nodeObj.y = mol.y;
        nodeObj.px = mol.x;
        nodeObj.py = mol.y;
        layoutObj.nodes.push(nodeObj);
    }
    var links = this.allBinaryLinks.values();
    var linkCount = links.length;
    for (var l = 0; l < linkCount; l++) {
        var link = links[l];
            var fromMol = link.interactors[0];
            var toMol = link.interactors[1];
            var source = molLookUp[fromMol.id];
            var target = molLookUp[toMol.id];

            if (source !== target) {

                if (typeof source !== 'undefined' && typeof target !== 'undefined') {
                    var linkObj = {};
                    linkObj.source = source;
                    linkObj.target = target;
                    linkObj.id = link.id;
                    layoutObj.links.push(linkObj);
                }
                else {
                    alert("NOT RIGHT");
                }
            }
    }

    var k = Math.sqrt(layoutObj.nodes.length / (width * height));
    // mike suggests:
    //    .charge(-10 / k)
    //    .gravity(100 * k)
    //following are the parameters for the layout you can play around with
    //see the documentation at https://github.com/mbostock/d3/wiki/Force-Layout
    this.force = d3.layout.force()
            .nodes(layoutObj.nodes)
            .links(layoutObj.links)
            .gravity(105 * k)
            .linkDistance(70) //target distance between linked nodes
            .linkStrength(0.8) //the strength (rigidity) of links
            .charge(-18 / k)
            .friction(0.96) // 1 = frictionless
            .theta(0.99) //Barnes–Hut approximation criterion
            .size([width, height]);
            //also .chargeDistance() and .alpha() // not used

    this.force.on("tick", function(e) {
        var nodes = self.force.nodes();
        // console.log("nodes", nodes);
        for (var n = 0; n < nodeCount; n++) {
            var node = nodes[n];
            var mol = self.molecules.get(node.id);
            var nx = node.x;
            var ny = node.y;
            mol.setPosition(nx, ny);
        }
        self.setAllLinkCoordinates();
    });
    this.force.start();
};

xiNET.Controller.prototype.setAnnotations = function(annotationChoice) {
    this.annotationChoice = annotationChoice;
    //clear all annot's
    var mols = this.molecules.values();
    var molCount = mols.length;
    for (var m = 0; m < molCount; m++) {
        mols[m].clearPositionalFeatures();
    }
    this.legendChanged(null);
    if (this.sequenceInitComplete) { //dont want to be changing annotations while still waiting on sequence
        var self = this;
        if (annotationChoice.toUpperCase() === "MI FEATURES"){
            for (m = 0; m < molCount; m++) {
                var mol = mols[m];
                if (mol.id.indexOf('uniprotkb_') === 0) {//LIMIT IT TO PROTEINS //todo:fix
                    mol.setPositionalFeatures(mol.miFeatures);
                }
            }
            chooseColours();
        }
        else if (annotationChoice.toUpperCase() === "INTERACTOR") {
            for (m = 0; m < molCount; m++) {
                var mol = mols[m];
                if (mol.id.indexOf('uniprotkb_') === 0) {//LIMIT IT TO PROTEINS //todo:fix
                    var annotation = new Annotation (mol.json.label, 1, mol.size);
                    mol.setPositionalFeatures([annotation]);
                }
            }
            chooseColours();
        }
        else if (annotationChoice.toUpperCase() === "SUPERFAM" || annotationChoice.toUpperCase() === "SUPERFAMILY"){
            var molsAnnotated = 0;
            for (m = 0; m < molCount; m++) {
                var mol = mols[m];
                if (mol.id.indexOf('uniprotkb_') === 0) {//LIMIT IT TO PROTEINS //todo:fix
                    xiNET_Storage.getSuperFamFeatures(mol.id, function (id, fts){
                        var m = self.molecules.get(id);
                        m.setPositionalFeatures(fts);
                        molsAnnotated++;
                        if (molsAnnotated === molCount) {
                            chooseColours();
                        }
                    });
                }
                else {
                    molsAnnotated++;
                    if (molsAnnotated === molCount) {
                        chooseColours();
                    }
                }
            }
        }
        else if (annotationChoice.toUpperCase() === "UNIPROT" || annotationChoice.toUpperCase() === "UNIPROTKB") {
            var molsAnnotated = 0;
            for (m = 0; m < molCount; m++) {
                var mol = mols[m];
                if (mol.id.indexOf('uniprotkb_') === 0) {//LIMIT IT TO PROTEINS //todo:fix
                    xiNET_Storage.getUniProtFeatures(mol.id, function (id, fts){
                        var m = self.molecules.get(id);
                        m.setPositionalFeatures(fts);
                        molsAnnotated++;
                        if (molsAnnotated === molCount) {
                            chooseColours();
                        }
                    });
                }
                else {
                    molsAnnotated++;
                    if (molsAnnotated === molCount) {
                        chooseColours();
                    }
                }
            }
        }
    }

    function chooseColours(){
        var categories = d3.set();
        for (m = 0; m < molCount; m++) {
            var mol = mols[m];
            for (var a = 0; a < mol.annotations.length; a++){
                categories.add(mol.annotations[a].name);
            }
        }
        var catCount = categories.values().length;
        var colourScheme;// = null;
        if (catCount < 3){catCount = 3;}
        if (catCount < 21) {
            if (catCount < 9) {
                var reversed = colorbrewer.Accent[catCount].slice().reverse();
                colourScheme = d3.scale.ordinal().range(reversed);
            }
            else if (catCount < 13) {
                var reversed = colorbrewer.Set3[catCount].slice().reverse();
                colourScheme = d3.scale.ordinal().range(reversed);
            }
            else {
                colourScheme = d3.scale.category20();
            }
            for (m = 0; m < molCount; m++) {
                var mol = mols[m];
                for (a = 0; a < mol.annotations.length; a++) {
                    var anno = mol.annotations[a];
                    var c = colourScheme(anno.name);
                    anno.pieSlice.setAttribute("fill", c);
                    anno.pieSlice.setAttribute("stroke", c);
                }
            }
        }
        self.legendChanged(colourScheme);
    }
};

//this can be done before all proteins have their sequences
xiNET.Controller.prototype.initLayout = function() {
    var mols = this.molecules.values();
    var molCount = mols.length;
    for (var m = 0; m < molCount; m++) {
        var mol = mols[m];
        if (mol.upperGroup) {
            this.proteinUpper.appendChild(mol.upperGroup);
        }
    }
    this.autoLayout();
};

//requires all polymers have had sequence set
xiNET.Controller.prototype.initPolymers = function() {//currently only does Proteins
    var mols = this.molecules.values();
    var molCount = mols.length;
    Polymer.MAXSIZE = 0;
    for (var m = 0; m < molCount; m++){
        var molSize = mols[m].size;
        if (molSize > Polymer.MAXSIZE){
            Polymer.MAXSIZE = molSize;
        }
    }
    //this.maxBlobRadius = Math.sqrt(Polymer.MAXSIZE / Math.PI);
    var width = this.svgElement.parentNode.clientWidth;
    Polymer.UNITS_PER_RESIDUE = (((width / 2.5)) - Molecule.LABELMAXLENGTH) / Polymer.MAXSIZE;
    for (var i = 0; i < molCount; i++){
        var mol = mols[i];
        if (mol.json && mol.json.type.name == "protein") {
            mol.init();
        }
    }
    this.sequenceInitComplete = true;

    if (this.annotationChoice){
        xlv.setAnnotations(this.annotationChoice);
    }
    else {
        this.setAnnotations('MI FEATURES');
    }
}

xiNET.Controller.prototype.reset = function() {
    this.resetZoom();
    this.collapseAll();
    this.autoLayout();
};

xiNET.Controller.prototype.resetZoom = function() {
    this.container.setAttribute("transform", "scale(1)");
    var interactors = this.molecules.values();
    var proteinCount = interactors.length;
    for (var p = 0; p < proteinCount; p++) {
        var prot = interactors[p];
        prot.stickZoom = 1;
        if (prot.scale) {
            prot.scale();
            prot.setAllLinkCoordinates();
        }
    }
};

xiNET.Controller.prototype.collapseAll = function() {
    var molecules = this.molecules.values();
    var mCount = molecules.length;
    for (var m = 0; m < mCount; m++) {
        var molecule = molecules[m];
        if (molecule.form === 1){
             molecule.setForm(0);
        }
    }
};

xiNET.Controller.prototype.expandAll = function() {
    var molecules = this.molecules.values();
    var mCount = molecules.length;
    for (var m = 0; m < mCount; m++) {
        var molecule = molecules[m];
        if (molecule.form === 0){
             molecule.setForm(1);
        }
    }
};


xiNET.Controller.prototype.getSVG = function() {
    var svgXml = this.svgElement.outerHTML.replace(/<rect .*?\/rect>/i, "");//take out white background fill
    var viewBox = 'viewBox="0 0 ' + this.svgElement.parentNode.clientWidth + " " + this.svgElement.parentNode.clientHeight + '" ';
    svgXml = svgXml.replace('<svg ','<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events" ' + viewBox);

    return '<?xml version="1.0" encoding="UTF-8" standalone=\"no\"?>'
        + "<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">"
        + svgXml;
}

//listeners also attached to mouse evnts by Molecule (and Rotator) and Link, those consume their events
//mouse down on svgElement must be allowed to propogate (to fire event on Prots/Links)

/**
 * Handle mousedown event.
 */
xiNET.Controller.prototype.mouseDown = function(evt) {
    //prevent default, but allow propogation
    evt.preventDefault();
    //evt.returnValue = false;
    //stop force layout
    if (typeof this.force !== 'undefined' && this.force != null) {
        this.force.stop();
    }

    var p = this.getEventPoint(evt);// seems to be correct, see below
   this.dragStart = this.mouseToSVG(p.x, p.y);

    var rightClick; //which button has just been raised
    if (evt.which)
        rightClick = (evt.which === 3);
    else if (evt.button)
        rightClick = (evt.button === 2);

    if (evt.ctrlKey === true || evt.shiftKey === true || rightClick) {
    } else {
    this.state = MouseEventCodes.PANNING;
    this.panned = false;
    }
    return false;
};

// dragging/rotation/panning/selecting
xiNET.Controller.prototype.mouseMove = function(evt) {
    var p = this.getEventPoint(evt);// seems to be correct, see below
    var c = this.mouseToSVG(p.x, p.y);

    if (this.dragElement != null) { //dragging or rotating
        this.hideTooltip();
        var dx = this.dragStart.x - c.x;
        var dy = this.dragStart.y - c.y;

        if (this.state === MouseEventCodes.DRAGGING) {
            // we are currently dragging things around
            var ox, oy, nx, ny;
            if (typeof this.dragElement.x === 'undefined') { // if not an Molecule
                var nodes = this.dragElement.interactors;
                var nodeCount = nodes.length;
                for (var i = 0; i < nodeCount; i++) {
                    var protein = nodes[i];
                    ox = protein.x;
                    oy = protein.y;
                    nx = ox - dx;
                    ny = oy - dy;
                    protein.setPosition(nx, ny);
                    protein.setAllLinkCoordinates();
                }
                for (i = 0; i < nodeCount; i++) {
                    nodes[i].setAllLinkCoordinates();
                }
            } else {
                //its a protein - drag it TODO: DRAG SELECTED
                ox = this.dragElement.x;
                oy = this.dragElement.y;
                nx = ox - dx;
                ny = oy - dy;
                this.dragElement.setPosition(nx, ny);
                this.dragElement.setAllLinkCoordinates();
            }
            this.dragStart = c;
        }

        else if (this.state === MouseEventCodes.ROTATING) {
            // Distance from mouse x and center of stick.
            var _dx = c.x - this.dragElement.x
            // Distance from mouse y and center of stick.
            var _dy = c.y - this.dragElement.y;
            //see http://en.wikipedia.org/wiki/Atan2#Motivation
            var centreToMouseAngleRads = Math.atan2(_dy, _dx);
            if (this.whichRotator === 0) {
                centreToMouseAngleRads = centreToMouseAngleRads + Math.PI;
            }
            var centreToMouseAngleDegrees = centreToMouseAngleRads * (360 / (2 * Math.PI));
            this.dragElement.setRotation(centreToMouseAngleDegrees);
            this.dragElement.setAllLinkCoordinates();
        }
        else { //not dragging or rotating yet, maybe we should start
            // don't start dragging just on a click - we need to move the mouse a bit first
            if (Math.sqrt(dx * dx + dy * dy) > (5 * this.z)) {
                this.state = MouseEventCodes.DRAGGING;

            }
        }
    }

//    else if (this.state === MouseEventCodes.SELECTING) {
//        this.updateMarquee(this.marquee, c);
//    }
    else if (this.state === MouseEventCodes.PANNING) {
//      setCTM(this.container, this.container.getCTM().translate(c.x - this.dragStart.x, c.y - this.dragStart.y));
    }
    else {
        this.showTooltip(p);
    }
    return false;
};


// this ends all dragging and rotating
xiNET.Controller.prototype.mouseUp = function(evt) {
    var time = new Date().getTime();
    //console.log("Mouse up: " + evt.srcElement + " " + (time - this.lastMouseUp));
    this.preventDefaultsAndStopPropagation(evt);
    //eliminate some spurious mouse up events
    if ((time - this.lastMouseUp) > 150){

        var rightclick, middleclick; //which button has just been raised
        if (evt.which)
            rightclick = (evt.which === 3);
        else if (evt.button)
            rightclick = (evt.button === 2);
        if (evt.which)
            middleclick = (evt.which === 2);
        else if (evt.button)
            middleclick = (evt.button === 1);

        var p = this.getEventPoint(evt);// seems to be correct, see below
        var c = this.mouseToSVG(p.x, p.y);

        if (this.dragElement != null) {
            if (!(this.state === MouseEventCodes.DRAGGING || this.state === MouseEventCodes.ROTATING)) {
                //not dragging or rotating
                if (rightclick) {
                    // RIGHT click
                }
                else if (middleclick) {
                    //can't be used? problem with IE (scroll thingy)
                }
                else { //left click; show matches for link, toggle form for protein, switch stick scale
                    if (typeof this.dragElement.x === 'undefined') { //if not protein
                        //~ this.dragElement.showData();
                    } else if (evt.shiftKey) { //if shift key
                        this.dragElement.switchStickScale(c);
                    } else {
                        if (this.dragElement.isComplexSymbol) {
                            this.dragElement.showData();
                        }
                        else if (this.sequenceInitComplete === true){
                               if (this.dragElement.form === 0) {
                                this.dragElement.setForm(1, c);
                            } else {
                                this.dragElement.setForm(0, c);
                            }
                        }
                    }
                }
                //~ this.checkLinks();
            }
            else if (this.state === MouseEventCodes.ROTATING) {
                //round protein rotation to nearest 5 degrees (looks neater)
                this.dragElement.setRotation(Math.round(this.dragElement.rotation / 5) * 5);
            }
            else {
            } //end of protein drag; do nothing
        }
        else if (rightclick) { //right click on background; show all hidden links
            //~ var links = this.proteinLinks.values();
            //~ var linkCount = links.length;
            //~ for (var l = 0; l < linkCount; l++) {
                //~ var link = links[l];
                //~ link.hidden = false;
            //~ }
            this.checkLinks();
        } else if (/*this.state !== MouseEventCodes.PANNING &&*/ evt.controllerKey === false) {
            this.clearSelection();
        }

        if (this.state === MouseEventCodes.SELECTING) {
            clearInterval(this.marcher);
            this.svgElement.removeChild(this.marquee);
        }
    }

    this.dragElement = null;
    this.whichRotator = -1;
    this.state = MouseEventCodes.MOUSE_UP;

    this.lastMouseUp = time;
    return false;
};

xiNET.Controller.prototype.clearSelection = function() {
    var interactors = this.molecules.values();
    var proteinCount = interactors.length;
    for (var p = 0; p < proteinCount; p++) {
        var prot = interactors[p];
        prot.setSelected(false);
    }
};

//gets mouse position
xiNET.Controller.prototype.getEventPoint = function(evt) {
    var p = this.svgElement.createSVGPoint();
    var element = this.svgElement.parentNode;
    var top = 0, left = 0;
    do {
        top += element.offsetTop  || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
   } while(element);
    p.x = evt.pageX - left;
    p.y = evt.pageY - top;
    return p;
};

// transform the mouse-position into a position on the svg
xiNET.Controller.prototype.mouseToSVG = function(x, y) {
    var p = this.svgElement.createSVGPoint();
    p.x = x;
    p.y = y;
    var p = p.matrixTransform(this.container.getCTM().inverse());
    return p;
};

//stop event propogation and defaults; only do what we ask
xiNET.Controller.prototype.preventDefaultsAndStopPropagation = function(evt) {
    if (evt.stopPropagation)
        evt.stopPropagation();
    if (evt.cancelBubble != null)
        evt.cancelBubble = true;
    if (evt.preventDefault)
        evt.preventDefault();
};


/**
 * Handle touchstart event.
 */
xiNET.Controller.prototype.touchStart = function(evt) {
    //prevent default, but allow propogation
    evt.preventDefault();
    //~ //evt.returnValue = false;
    //~ this.preventDefaultsAndStopPropagation(evt);

    //stop force layout
    if (typeof this.force !== 'undefined' && this.force != null) {
        this.force.stop();
    }

    var p = this.getTouchEventPoint(evt);// seems to be correct, see below
    this.dragStart = this.mouseToSVG(p.x, p.y);
    this.state = MouseEventCodes.PANNING;
    //~ this.panned = false;
};

// dragging/rotation/panning/selecting
xiNET.Controller.prototype.touchMove = function(evt) {
    if (this.sequenceInitComplete) { // just being cautious
        var p = this.getTouchEventPoint(evt);// seems to be correct, see below
        var c = this.mouseToSVG(p.x, p.y);

        if (this.dragElement != null) { //dragging or rotating
            this.hideTooltip();
            var dx = this.dragStart.x - c.x;
            var dy = this.dragStart.y - c.y;

            if (this.state ===  MouseEventCodes.DRAGGING) {
                // we are currently dragging things around
                var ox, oy, nx, ny;
                if (typeof this.dragElement.x === 'undefined') { // if not an Molecule
                    var nodes = this.dragElement.interactors;
                    var nodeCount = nodes.length;
                    for (var i = 0; i < nodeCount; i++) {
                        var protein = nodes[i];
                        ox = protein.x;
                        oy = protein.y;
                        nx = ox - dx;
                        ny = oy - dy;
                        protein.setPosition(nx, ny);
                        protein.setAllLinkCoordinates();
                    }
                    for (i = 0; i < nodeCount; i++) {
                        nodes[i].setAllLinkCoordinates();
                    }
                } else {
                    //its a protein - drag it TODO: DRAG SELECTED
                    ox = this.dragElement.x;
                    oy = this.dragElement.y;
                    nx = ox - dx;
                    ny = oy - dy;
                    this.dragElement.setPosition(nx, ny);
                    this.dragElement.setAllLinkCoordinates();
                }
                this.dragStart = c;
            }

            else if (this.state === MouseEventCodes.ROTATING) {
                // Distance from mouse x and center of stick.
                var _dx = c.x - this.dragElement.x
                // Distance from mouse y and center of stick.
                var _dy = c.y - this.dragElement.y;
                //see http://en.wikipedia.org/wiki/Atan2#Motivation
                var centreToMouseAngleRads = Math.atan2(_dy, _dx);
                if (this.whichRotator === 0) {
                    centreToMouseAngleRads = centreToMouseAngleRads + Math.PI;
                }
                var centreToMouseAngleDegrees = centreToMouseAngleRads * (360 / (2 * Math.PI));
                this.dragElement.setRotation(centreToMouseAngleDegrees);
                this.dragElement.setAllLinkCoordinates();
            }
            else { //not dragging or rotating yet, maybe we should start
                // don't start dragging just on a click - we need to move the mouse a bit first
                if (Math.sqrt(dx * dx + dy * dy) > (5 * this.z)) {
                    this.state = MouseEventCodes.DRAGGING;

                }
            }
        }

//    else if (this.state ===  MouseEventCodes.SELECTING) {
//        this.updateMarquee(this.marquee, c);
//    }
        else
        {

        // if (this.state === MouseEventCodes.PANNING) {
            //~ xiNET.setCTM(this.container, this.container.getCTM()
                //~ .translate(c.x - this.dragStart.x, c.y - this.dragStart.y));
        // }
        // else {
           // // this.showTooltip(p);
        // }
        }
    }
    return false;
};

// this ends all dragging and rotating
xiNET.Controller.prototype.touchEnd = function(evt) {
    this.preventDefaultsAndStopPropagation(evt);
    if (this.dragElement != null) {
        if (!(this.state === MouseEventCodes.DRAGGING || this.state === MouseEventCodes.ROTATING)) { //not dragging or rotating
                if (typeof this.dragElement.x === 'undefined') { //if not protein
                    //this.dragElement.showID();
                } else {
                    if (this.dragElement.form === 0) {
                        this.dragElement.setForm(1);
                    } else {
                        this.dragElement.setForm(0);
                    }
                }
            //~ this.checkLinks();
        }
        else if (this.state === MouseEventCodes.ROTATING) {
            //round protein rotation to nearest 5 degrees (looks neater)
            this.dragElement.setRotation(Math.round(this.dragElement.rotation / 5) * 5);
        }
        else {
        } //end of protein drag; do nothing
    }
    //~ else if (/*this.state !== xiNET.Controller.PANNING &&*/ evt.ctrlKey === false) {
        //~ this.clearSelection();
    //~ }
//~
    //~ if (this.state === xiNET.Controller.SELECTING) {
        //~ clearInterval(this.marcher);
        //~ this.svgElement.removeChild(this.marquee);
    //~ }
    this.dragElement = null;
    this.whichRotator = -1;
    this.state = MouseEventCodes.MOUSE_UP;
    return false;
};

//gets mouse position
xiNET.Controller.prototype.getTouchEventPoint = function(evt) {
    var p = this.svgElement.createSVGPoint();
//    var rect = this.container.getBoundingClientRect();
//   p.x = evt.clientX - rect.left;
//    p.y = evt.clientY - rect.top;
    var element = this.svgElement.parentNode;
    var top = 0, left = 0;
    do {
        top += element.offsetTop  || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
   } while(element);
   //TODO: should do equivalent for horizontal scroll also
    //~ top += getScrollTop();
       p.x = evt.touches[0].pageX - left;
    p.y = evt.touches[0].pageY - top;
 //~ var help = left;////evt.touches[0].pageX;//.toString();
   return p;
};

xiNET.Controller.prototype.showTooltip = function(p)
    {
        var ttX, ttY;
        var length = this.tooltip.getComputedTextLength() + 16;
        var width = this.svgElement.parentNode.clientWidth;
        var height = this.svgElement.parentNode.clientHeight;
        if (p.x + 20 + length < width) {
            ttX = p.x;
        }
        else {
            ttX = width - length - 20;
        }

        if (p.y + 60 < height) {
            ttY = p.y;
        }
        else {
            ttY = height - 60;
        }
        this.tooltip.setAttribute("x", ttX + 22);
        this.tooltip.setAttribute("y", ttY + 47);
        this.tooltip_bg.setAttribute("x", ttX + 16);
        this.tooltip_bg.setAttribute("y", ttY + 28);
        this.tooltip_subBg.setAttribute("x", ttX + 16);
        this.tooltip_subBg.setAttribute("y", ttY + 28);
    };

xiNET.Controller.prototype.setTooltip = function(text, colour) {
    if (text) {
        this.tooltip.firstChild.data = text.toString().replace(/&(quot);/g, '"');
        this.tooltip.setAttribute("display","block");
        var length = this.tooltip.getComputedTextLength();
        this.tooltip_bg.setAttribute("width",length+16);
        this.tooltip_subBg.setAttribute("width",length+16);
        if (typeof colour !== 'undefined' && colour != null){
            this.tooltip_bg.setAttribute('fill', colour);
            this.tooltip_bg.setAttribute('stroke', colour);
            this.tooltip_bg.setAttribute('fill-opacity', '0.5');
        } else {
            this.tooltip_bg.setAttribute('fill','white');
            this.tooltip_bg.setAttribute('stroke','grey');
        }
        this.tooltip_bg.setAttribute('height', 28);
        this.tooltip_subBg.setAttribute('height', 28);
        this.tooltip_bg.setAttribute("display","block");
        this.tooltip_subBg.setAttribute("display","block");
    }
    else {
        this.hideTooltip();
    }
};

xiNET.Controller.prototype.hideTooltip = function(evt){
    this.tooltip.setAttribute("display","none");
    this.tooltip_bg.setAttribute("display","none");
    this.tooltip_subBg.setAttribute("display","none");
};

module.exports = xiNET.Controller;
