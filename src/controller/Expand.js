"use strict";

var _ = require('lodash');
var d3 = require('d3');

var matrix = function(json) {
	var startTime =  +new Date();
	// We'll need collections of our interactions and interactors for later..
	var interactions = _.where(json.data, {object: "interaction"});
	var interactors = _.where(json.data, {object: "interactor"});

	var newParticipants = [];
	var newInteractors = [];

	// Loop through our interaction objects
	_.each(interactions, function(interaction) {

		// Get a collection of participants where the stoichiometry is greater than one.
		var participantsToExpand = _.filter(interaction.participants, function(participant) {
			if (participant.stoichiometry > 1) {
				return participant;
			}
		});

		// Loop through our participants that need expanding
		_.each(participantsToExpand, function(participant) {

			// Do we have an interactor? TODO: Will his affect complexes?
			var foundInteractor = _.findWhere(interactors, {id: participant.interactorRef});

			// If we found an interactor, then time to clone!
			if (foundInteractor) {

				for (var i = 0; i < participant.stoichiometry - 1; i++) {

					/********** PARTICIPANTS **********/
					// Now clone the participant and link it to the new cloned interactor
					var clonedParticipant = _.cloneDeep(participant);
					
					//~ clonedParticipant.interactorRef = clonedInteractor.id;
					clonedParticipant.id = clonedParticipant.id + "_" + i;

					// Store a reference from where we were cloned
					clonedParticipant.cloneParentID = participant.id;
					clonedParticipant.cloneIteration = i;
					participant.cloned = true

					// We need to relink to our binding site IDs:
					_.each(clonedParticipant.features, function(feature) {

						feature.clonedfrom = feature.id;
						feature.id = feature.id + "_" + i;

						// Also, adjust our sequence data
						_.each(feature.sequenceData, function(sequenceData) {
							sequenceData.participantRef = clonedParticipant.id;
							//~ sequenceData.interactorRef = clonedInteractor.id;
						});
					});
					interaction.participants.push(clonedParticipant);
					newParticipants.push(clonedParticipant);

				}
			}

		});

		// Get ALL of our binding sites:
		var featureMap = d3.map();

		_.each(interaction.participants, function(participant) {

			_.each(participant.features, function(feature) {
				feature.parentParticipant = participant.id;
				featureMap.set(feature.id, feature);
			});

		});


		var values = featureMap.values();

		_.each(values, function(feature) {

			if (feature.clonedfrom) {
				// Find all binding sites that have a linked feature to me and add the clone id
				_.each(values, function(nFeature) {

					var linkedFeatures = nFeature.linkedFeatures;

					if (_.contains(linkedFeatures, feature.clonedfrom)) {
						var clonedFeature = _.cloneDeep(nFeature);
						clonedFeature.id = nFeature.id + "_" + feature.id;
						clonedFeature.linkedFeatures = []
						clonedFeature.linkedFeatures.push(feature.id);

						var parts = _.findWhere(interaction.participants, {id: clonedFeature.parentParticipant});
						parts.features.push(clonedFeature);
					}
				});
			}
		});
	});


	//clear stoich info from participant?
	_.each(interactions, function(interaction) {
		_.each(interaction.participants, function(participant) {
			participant.stoichiometry = null;
		});
	});

	//actually the expansion code doesn't seem to take up that much time
	//console.log("Expand time:" + ( +new Date() - startTime));

	return json
}

module.exports = {
    matrix: matrix,
}
