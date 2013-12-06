var miJson = {
"data":[
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q96B97"},
		"label":"sh3k1_human"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P22681"},
		"label":"cbl_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0018","name":"two hybrid"},
			"host":{"taxid":"4932","common":"yeasx","scientific":"Saccharomyces cerevisiae (Baker's yeast)"},
			"pubid":[{"db":"pubmed","id":"10679202"}],
			"sourceDatabase":{"id":"MI:0486","name":"UniProt"},
			"figures":["no figure"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6307711"},{"db":"imex","id":"IM-17874-1"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q96B97"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0078","name":"nucleotide sequence identification"}],
			"bindingSites":[
				{
				"id":"32777764",
				"name":"region",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["55-331"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P22681"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0078","name":"nucleotide sequence identification"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9534","common":"chlae-cos_7","scientific":"Cercopithecus aethiops simian cells transformed with SV40"},
			"pubid":[{"db":"pubmed","id":"10679202"}],
			"sourceDatabase":{"id":"MI:0486","name":"UniProt"},
			"figures":["3B and 4B"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6307724"},{"db":"imex","id":"IM-17874-2"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q96B97"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"experimentalFeatures":[
				{
				"id":"32777801",
				"name":"n-terminus",
				"type":{"id":"MI:0518","name":"flag tag"},
				"sequenceData":["n-n"]
				}],
			"bindingSites":[
				{
				"id":"33398347",
				"name":"region",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["103-328"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P22681"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0006","name":"anti bait coimmunoprecipitation"},
			"host":{"taxid":"9534","common":"chlae-cos_7","scientific":"Cercopithecus aethiops simian cells transformed with SV40"},
			"pubid":[{"db":"pubmed","id":"10679202"}],
			"sourceDatabase":{"id":"MI:0486","name":"UniProt"},
			"figures":["3C"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6307737"},{"db":"imex","id":"IM-17874-3"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P22681"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0705","name":"anti tag western blot"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q96B97"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0705","name":"anti tag western blot"}],
			"experimentalFeatures":[
				{
				"id":"27485834",
				"name":"n-terminus",
				"type":{"id":"MI:0518","name":"flag tag"},
				"sequenceData":["n-n"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0006","name":"anti bait coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293","scientific":"Homo sapiens transformed primary embryonal kidney cells"},
			"pubid":[{"db":"pubmed","id":"10679202"}],
			"sourceDatabase":{"id":"MI:0486","name":"UniProt"},
			"figures":["5 and 6B"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6307754"},{"db":"imex","id":"IM-17874-4"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q96B97"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0705","name":"anti tag western blot"}],
			"experimentalFeatures":[
				{
				"id":"10553474",
				"name":"n-terminus",
				"type":{"id":"MI:0518","name":"flag tag"},
				"sequenceData":["n-n"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P22681"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0705","name":"anti tag western blot"}],
			"pointMutations":[
				{
				"id":"3515826",
				"name":"tyr700phe-tyr731phe-tyr744phe",
				"type":{"id":"MI:0573","name":"mutation disrupting interaction"},
				"sequenceData":["700-700","731-731","744-744"]
				},
				{
				"id":"1132857",
				"name":"tyr700phe-tyr731phe",
				"type":{"id":"MI:0119","name":"mutation decreasing interaction"},
				"sequenceData":["700-700","731-731"]
				}]
		}
	}
	]
};
