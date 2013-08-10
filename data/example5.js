var miJson = {
"data":[
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P46109"},
		"label":"CRKL"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P06213"},
		"label":"INSR"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0018","name":"two hybrid"},
			"host":{"taxid":"4932","common":"yeasx"},
			"pubid":[{"db":"pubmed","id":"15522217"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-475939"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P46109"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"pointMutations":[
				{
				"id":"23303925",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":["33-33","53-53","72-72"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P06213"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"pointMutations":[
				{
				"id":"6117932",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":["1057-1057"]
				}],
			"bindingSites":[
				{
				"id":"13317442",
				"type":{"name":"binding-associated region"},
				"sequenceData":["700..979-1382"]//uncertainbit added by col for test
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"sequence": "MAGNFDSEERSSWYWGRLSRQEAVALLQGQRHGVFLVRDSSTSPGDYVLSVSENSRVSHYIINSSGPRPPVPPSPAQPPPGVSPSRLRIGDQEFDSLPALLEFYKIHYLDTTTLIEPVSRSRQGSGVILRQEEAEYVRALFDFNGNDEEDLPFKKGDILRIRDKPEEQWWNAEDSEGKRGMIPVPYVEKYRPASASVSALIGGR",
        "organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P46108-2"},
		"label":"CRK-2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0018","name":"two hybrid"},
			"host":{"taxid":"4932","common":"yeasx"},
			"pubid":[{"db":"pubmed","id":"15522217"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-475952"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P46108-2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P06213"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"18189246",
				"type":{"name":"binding-associated region"},
				"sequenceData":["979-1382"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		 "sequence": "MAGNFDSEERSSWYWGRLSRQEAVALLQGQRHGVFLVRDSSTSPGDYVLSVSENSRVSHYIINSSGPRPPVPPSPAQPPPGVSPSRLRIGDQEFDSLPALLEFYKIHYLDTTTLIEPVSRSRQGSGVILRQEEAEYVRALFDFNGNDEEDLPFKKGDILRIRDKPEEQWWNAEDSEGKRGMIPVPYVEKYRPASASVSALIGGNQEGSHPQPLGGPEPGPYAQPSVNTPLPNLQNGPIYARVIQKRVPNAYDKTALALEVGELVKVTKINVSGQWEGECNGKRGHFPFTHVRLLDQQNPDEDFS",  
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P46108-1"},
		"label":"CRK-1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0018","name":"two hybrid"},
			"host":{"taxid":"4932","common":"yeasx"},
			"pubid":[{"db":"pubmed","id":"15522217"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-475961"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P46108-1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P06213"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"25797638",
				"type":{"name":"binding-associated region"},
				"sequenceData":["979-1382"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0018","name":"two hybrid"},
			"host":{"taxid":"4932","common":"yeasx"},
			"pubid":[{"db":"pubmed","id":"15522217"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-475971"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P46108-1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"24091185",
				"type":{"name":"binding-associated region"},
				"sequenceData":["1-114"],
				"linkedFeatures": ["32777849"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P06213"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32777849",
				"type":{"name":"binding-associated region"},
				"sequenceData":["979-1382"],
				"linkedFeatures": ["24091185"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P08069"},
		"label":"IGF1R"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0018","name":"two hybrid"},
			"host":{"taxid":"4932","common":"yeasx"},
			"pubid":[{"db":"pubmed","id":"15522217"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-476005"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P46108-1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P08069"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"96921",
				"type":{"name":"binding-associated region"},
				"sequenceData":["959-1367", "128..256-516..580"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0018","name":"two hybrid"},
			"host":{"taxid":"4932","common":"yeasx"},
			"pubid":[{"db":"pubmed","id":"15522217"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-476017"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P46109"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"pointMutations":[
				{
				"id":"18342976",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":["72-72","53-53","33-33"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P06213"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"pointMutations":[
				{
				"id":"25832829",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":["1057-1057"]
				}],
			"bindingSites":[
				{
				"id":"11575212",
				"type":{"name":"binding-associated region"},
				"sequenceData":["979-1382"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0018","name":"two hybrid"},
			"host":{"taxid":"4932","common":"yeasx"},
			"pubid":[{"db":"pubmed","id":"15522217"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-476030"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P08069"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"29560314",
				"type":{"name":"binding-associated region"},
				"sequenceData":["959-1367"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P46108-1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"13279013",
				"type":{"name":"binding-associated region"},
				"sequenceData":["1-114..170"]
				}]
		}
	}
	]
};
