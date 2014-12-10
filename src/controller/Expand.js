"use strict";

var _ = require('lodash');
var d3 = require('d3');

var matrix = function(json) {

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

					/********** INTERACTOR **********/

						// Clone our interactor and increment its ID
						var clonedInteractor = _.cloneDeep(foundInteractor);
						clonedInteractor.id = clonedInteractor.id + "_" + i;
						clonedInteractor.label = clonedInteractor.label + "_" + i;

						// Push the cloned interactor back onto our JSON object
						json.data.push(clonedInteractor);
						newInteractors.push(clonedInteractor);


					/********** PARTICIPANTS **********/

						// Now clone the participant and link it to the new cloned interactor
						var clonedParticipant = _.cloneDeep(participant);


						clonedParticipant.interactorRef = clonedInteractor.id;
						clonedParticipant.id = clonedParticipant.id + "_" + i;

						// Store a reference from where we were cloned
						clonedParticipant.cloneParentID = participant.id;
						clonedParticipant.cloneIteration = i;
						participant.cloned = true

						// We need to relink to our binding site IDs:
						_.each(clonedParticipant.bindingSites, function(bindingSite) {


							bindingSite.clonedfrom = bindingSite.id;
							bindingSite.id = bindingSite.id + "_" + i;

							// Also, adjust our sequence data
							_.each(bindingSite.sequenceData, function(sequenceData) {
								sequenceData.participantRef = clonedParticipant.id;
								sequenceData.interactorRef = clonedInteractor.id;
							});


						});


						interaction.participants.push(clonedParticipant);
						newParticipants.push(clonedParticipant);

				}
			}

		});

		// Get ALL of our binding sites:
		var bindingSiteMap = d3.map();

		_.each(interaction.participants, function(participant) {

			_.each(participant.bindingSites, function(bindingSite) {

				bindingSite.parentParticipant = participant.id;

				bindingSiteMap.set(bindingSite.id, bindingSite);

			});

		});


		var values = bindingSiteMap.values();

		_.each(values, function(bindingSite) {

			if (bindingSite.clonedfrom) {
				// Find all binding sites that have a linked feature to me and add the clone id
				_.each(values, function(nBindingSite) {

					var linkedFeatures = nBindingSite.linkedFeatures;

					if (_.contains(linkedFeatures, bindingSite.clonedfrom)) {

						var clonedBindingSite = _.cloneDeep(nBindingSite);
						
						clonedBindingSite.id = nBindingSite.id + "_" + bindingSite.id;
						clonedBindingSite.linkedFeatures = []
						clonedBindingSite.linkedFeatures.push(bindingSite.id);

						var parts = _.findWhere(interaction.participants, {id: clonedBindingSite.parentParticipant});
						parts.bindingSites.push(clonedBindingSite);


					}

				});

			}

		});

	});


	return json
}

module.exports = {
    matrix: matrix,
}