var miJson = {
"data":[
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q9QX70"},
		"label":"Egfr"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9913","common":"bovin","scientific":"Bos taurus (Bovine)"},
		"identifier":{"db":"uniprotkb","id":"P62157"},
		"label":"CALM"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"1321833"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig. 1, Fig. 2 and Fig. 3"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1256840"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9QX70"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P62157"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"1321833"}],
			"source":{"id":"MI:0469","name":"IntAct"}
		},
		"interactionType":{"id":"MI:0217","name":"phosphorylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-1256855"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9QX70"},
			"bioRole":{"id":"MI:0898","name":"putative self"},
			"expRole":{"id":"MI:0898","name":"putative self"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9QX70"},
			"bioRole":{"id":"MI:0898","name":"putative self"},
			"expRole":{"id":"MI:0898","name":"putative self"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"intramolecular":"true"
	}
	]
};