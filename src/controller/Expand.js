"use strict";

var _ = require('lodash');

// another way to clone is :
// var newObject = JSON.parse(JSON.stringify(oldObject));
// see http://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-clone-an-object/5344074#5344074

var matrix = function(json) {

	// We'll need collections of our interactions and interactors for later..
	var interactions = _.where(json.data, {object: "interaction"});
	var interactors = _.where(json.data, {object: "interactor"});

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

					// Clone our interactor and increment its ID
					var clonedInteractor = _.cloneDeep(foundInteractor); //hopefully not needed?
					clonedInteractor.id = clonedInteractor.id + "_" + i; //hopefully not needed?
					// Push the cloned interactor back onto our JSON object
					json.data.push(clonedInteractor); //hopefully not needed?

					// Now clone the participant and link it to the new cloned itneractor
					var clonedParticipant = _.cloneDeep(participant);
					clonedParticipant.interactorRef = clonedInteractor.id;
					clonedParticipant.id = clonedParticipant.id + "_" + i;

					// We need to relink to our binding site IDs:
					_.each(clonedParticipant.bindingSites, function(bindingSite) {
						bindingSite.id = bindingSite.id + "_" + i;

						// Also, adjust our sequence data
						_.each(bindingSite.sequenceData, function(sequenceData) {
							sequenceData.participantRef = clonedParticipant.id;
							sequenceData.interactorRef = clonedInteractor.id; //hopefully not needed?
						});

					});

					interaction.participants.push(clonedParticipant);

				}
			}

		});

	});

	return json
}

module.exports = {
    matrix: matrix,
}
