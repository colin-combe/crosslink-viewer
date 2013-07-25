var miJson = {
"data":[
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q5S007"},
		"label":"LRRK2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"22303461"},{"db":"imex","id":"IM-18692"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["2A\/D"]
		},
		"interactionType":{"id":"MI:0217","name":"phosphorylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-6512095"},{"db":"imex","id":"IM-18692-4"}],
		"confidences":[{"type":"intact-miscore","value":"0.98"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q5S007"},
			"bioRole":{"id":"MI:0898","name":"putative self"},
			"expRole":{"id":"MI:0898","name":"putative self"},
			"identificationMethods":[{"id":"MI:0821","name":"molecular weight estimation by autoradiography"}],
			"experimentalFeatures":[
				{
				"id":"11765404",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["n-n"]
				}],
			"pointMutations":[
				{
				"id":"9723181",
				"type":{"name":"mutation increasing interaction rate"},
				"sequenceData":["2019-2019"]
				},
				{
				"id":"7426130",
				"type":{"name":"mutation increasing interaction rate"},
				"sequenceData":["2020-2020"]
				}],
			"bindingSites":[
				{
				"id":"22050116",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["970-2527"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q5S007"},
			"bioRole":{"id":"MI:0898","name":"putative self"},
			"expRole":{"id":"MI:0898","name":"putative self"},
			"identificationMethods":[{"id":"MI:0821","name":"molecular weight estimation by autoradiography"}],
			"experimentalFeatures":[
				{
				"id":"11765404",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["n-n"]
				}],
			"pointMutations":[
				{
				"id":"9723181",
				"type":{"name":"mutation increasing interaction rate"},
				"sequenceData":["2019-2019"]
				},
				{
				"id":"7426130",
				"type":{"name":"mutation increasing interaction rate"},
				"sequenceData":["2020-2020"]
				}],
			"bindingSites":[
				{
				"id":"22050116",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["970-2527"]
				}]
		},
		"intramolecular":"true"
	}
	]
};
