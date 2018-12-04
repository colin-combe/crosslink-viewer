"use strict";

var d3 = require('d3');

var matrix = function(json) {
	var startTime =  +new Date();

	// We'll need collections of our interactions and interactors for later..
	var interactions = json.data.filter(function(interaction) {
		return interaction.object == "interaction";
	})

	var interactors = json.data.filter(function(interactor) {
		return interactor.object == "interactor";
	})

	var newParticipants = [];
	var newInteractors = [];

	// Loop through our interactions
	interactions.forEach(function(interaction) {

		// Get a collection of participants where the stoichiometry is greater than one.
		var participantsToExpand = interaction.participants.filter(function(participant) {
			if (participant.stoichiometry > 1) {
				return participant;
			}
		})

		// Loop through our participants that need expanding
		participantsToExpand.forEach(function(participant) {

			// Do we have an interactor? TODO: Will his affect complexes?
			var foundInteractor = findFirstObjWithAttr(interactors, "id", participant.interactorRef);

			// If we found an interactor then we need to clone it.
			if (foundInteractor) {

				for (var i = 0; i < participant.stoichiometry - 1; i++) {
					/********** PARTICIPANTS **********/
					// Now clone the participant and link it to the new cloned interactor
					// This method of cloning appears to work so far.
					var clonedParticipant = JSON.parse(JSON.stringify(participant));
					
					//~ clonedParticipant.interactorRef = clonedInteractor.id;
					clonedParticipant.id = clonedParticipant.id + "_" + i;

					// Store a reference from where we were cloned
					clonedParticipant.cloneParentID = participant.id;
					clonedParticipant.cloneIteration = i;
					participant.cloned = true

					// We need to relink to our binding site IDs:
					if (clonedParticipant.features) {
						clonedParticipant.features.forEach(function(feature) {

							feature.clonedfrom = feature.id;
							feature.id = feature.id + "_" + i;

							// Also, adjust our sequence data
							feature.sequenceData.forEach(function(sequenceData) {
								sequenceData.participantRef = clonedParticipant.id;
								//~ sequenceData.interactorRef = clonedInteractor.id;
							});
						});
					}

					interaction.participants.push(clonedParticipant);
					newParticipants.push(clonedParticipant);

				}
			}
		});

		// Get ALL of our features.
		var featureMap = d3.map();
		interaction.participants.forEach(function(participant) {
			if (participant.features) {
				participant.features.forEach(function(feature) {
					feature.parentParticipant = participant.id;
					featureMap.set(feature.id, feature);
				});
			}
		});


		var values = featureMap.values();

		values.forEach(function(feature) {
			if (feature.clonedfrom) {
				// Find all binding sites that have a linked feature to me and add the clone id
				values.forEach(function(nFeature) {
					var linkedFeatures = nFeature.linkedFeatures;
					if (linkedFeatures) {
						if (linkedFeatures.indexOf(feature.clonedfrom) > -1) {
							var clonedFeature = JSON.parse(JSON.stringify(nFeature));
							clonedFeature.id = nFeature.id + "_" + feature.id;
							clonedFeature.linkedFeatures = []
							clonedFeature.linkedFeatures.push(feature.id);

							var parts = findFirstObjWithAttr(interaction.participants, "id", clonedFeature.parentParticipant);
							parts.features.push(clonedFeature);
						}
					}
				});
			}
		});
	});


	//clear stoich info from participant?
	interactions.forEach(function(interaction) {
		interaction.participants.forEach(function(participant) {
			participant.stoichiometry = null;
		});
	});

	//actually the expansion code doesn't seem to take up that much time
	//console.log("Expand time:" + ( +new Date() - startTime));
	return json
}

// Returns the first object in an array that has an attribute with a matching value.
function findFirstObjWithAttr(collection, attribute, value) {
    for(var i = 0; i < collection.length; i += 1) {
        if(collection[i][attribute] === value) {
            return collection[i];
        }
    }
}

module.exports = {
    matrix: matrix
}