var miJson = {
"data":[
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P23528"},
		"label":"CFL1"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P63104"},
		"label":"YWHAZ"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0004","name":"affinity chromatography technology"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"12361576"}],
			"source":{"id":"MI:0469","name":"IntAct"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-445553"}],
		"confidences":[{"type":"intact-miscore","value":"0.52"}],
		"parameters":[{"type":"kd","value":"6.2x10^(-8)",  "unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P23528"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"6166383",
				"type":{"name":"his tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"26056784",
				"type":{"name":"radiolabel"},
				"sequenceData":[{"range":"?-?"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P63104"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"O70368"},
		"label":"Cacna1a"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q9JIR4"},
		"label":"Rims1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0077","name":"nuclear magnetic resonance"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21241895"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Supp. Fig. 1B"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-3507505"}],
		"confidences":[{"type":"intact-miscore","value":"0.56"}],
		"parameters":[{"type":"kd","value":"2.34x10^(-5)", "unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"O70368"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"pointMutations":[
				{
				"id":"5309741",
				"type":{"name":"mutation"},
				"sequenceData":[{"range":"779-779"}]
				}],
			"otherFeatures":[
				{
				"id":"19583390",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"779-791"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9JIR4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"2628939",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"593-708"}]
				},
				{
				"id":"26956311",
				"type":{"name":"15n label"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"2780950",
				"type":{"name":"isotope label"},
				"sequenceData":[{"range":"?-?"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0679","name":"poly adenine"},
		"organism":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
		"identifier":{"db":"intact","id":"EBI-4412187"},
		"label":"par"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9Z0X1"},
		"label":"Aifm1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0049","name":"filter binding"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21467298"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"S4b and S4c"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4412524"}],
		"confidences":[{"type":"intact-miscore","value":"0.69"}],
		"parameters":[{"type":"bmax","value":"2.0x10^(-10)", "unit":"mol"},{"type":"kd","value":"1.0x10^(-7)", "unit":"molar"}],
		"source":{
			"identifier":{"db":"intact","id":"EBI-4412187"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0833","name":"autoradiography"}],
			"otherFeatures":[
				{
				"id":"20727434",
				"type":{"name":"biotin tag"},
				"sequenceData":[{"range":"?-?"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9Z0X1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0833","name":"autoradiography"}],
			"otherFeatures":[
				{
				"id":"3874052",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":[{"range":"588-588"},{"range":"589-589"},{"range":"592-592"}]
				},
				{
				"id":"15606519",
				"type":{"name":"his tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"3779465",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"?-?"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0049","name":"filter binding"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21467298"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"1e, 3b and S4a"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4412468"}],
		"confidences":[{"type":"intact-miscore","value":"0.69"}],
		"parameters":[{"type":"kd","value":"1.24x10^(-6)", "unit":"molar"},{"type":"bmax","value":"4.573x10^(-12)", "unit":"mol"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Z0X1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0833","name":"autoradiography"}],
			"otherFeatures":[
				{
				"id":"2929821",
				"type":{"name":"mutation disrupting interaction"},
				"sequenceData":[{"range":"588-588"},{"range":"589-589"},{"range":"592-592"}]
				},
				{
				"id":"17160330",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"567-592"}]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-4412187"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0833","name":"autoradiography"}],
			"otherFeatures":[
				{
				"id":"13328393",
				"type":{"name":"32p radiolabel"},
				"sequenceData":[{"range":"?-?"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0807","name":"comigration in gel electrophoresis"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21467298"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"3d"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4412501"}],
		"confidences":[{"type":"intact-miscore","value":"0.69"}],
		"parameters":[{"type":"kd","value":"1.24x10^(-6)", "unit":"molar"},{"type":"bmax","value":"4.55x10^(-12)", "unit":"mol"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Z0X1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0833","name":"autoradiography"}],
			"otherFeatures":[
				{
				"id":"26453615",
				"type":{"name":"mutation disrupting interaction"},
				"sequenceData":[{"range":"588-588"},{"range":"589-589"},{"range":"592-592"}]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-4412187"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0833","name":"autoradiography"}],
			"otherFeatures":[
				{
				"id":"9688764",
				"type":{"name":"32p radiolabel"},
				"sequenceData":[{"range":"?-?"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
		"identifier":{"db":"uniprotkb","id":"Q24008"},
		"label":"inaD"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
		"identifier":{"db":"uniprotkb","id":"Q9W2S5"},
		"label":"X11Lbeta"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0053","name":"fluorescence polarization spectroscopy"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21703451"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig. 1A"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4307020"}],
		"confidences":[{"type":"intact-miscore","value":"0.56"}],
		"parameters":[{"type":"kd","value":"5.04x10^(-4)", "unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q24008"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"26425437",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"580-665"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9W2S5"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"5862378",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"2131-2139"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
		"identifier":{"db":"uniprotkb","id":"P19334"},
		"label":"trp"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0053","name":"fluorescence polarization spectroscopy"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21703451"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig. 6B"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4307161"}],
		"confidences":[{"type":"intact-miscore","value":"0.75"}],
		"parameters":[{"type":"kd","value":"1.4x10^(-6)", "unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P19334"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"16471729",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"1267-1275"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q24008"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"16291471",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"473-674"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
		"identifier":{"db":"uniprotkb","id":"A3RLX3"},
		"label":"Kon"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0053","name":"fluorescence polarization spectroscopy"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21703451"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Figs. 1A, 1B, 5F, 5G, Supp. Fig. 4A"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4307022"}],
		"confidences":[{"type":"intact-miscore","value":"0.62"}],
		"parameters":[{"type":"kd","value":"1.3x10^(-6)", "unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"A3RLX3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"22172629",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"2372-2381"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q24008"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"33414193",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"580-665"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
		"identifier":{"db":"uniprotkb","id":"P13217"},
		"label":"norpA"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0053","name":"fluorescence polarization spectroscopy"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21703451"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Supp. Fig. 6C"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4373471"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"kd","value":"3.0x10^(-5)", "unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P13217"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"25383554",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"1086-1095"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q24008"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"10351444",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"473-674"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q00657"},
		"label":"Cspg4"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0053","name":"fluorescence polarization spectroscopy"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21703451"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig. 1A"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4307053"}],
		"confidences":[{"type":"intact-miscore","value":"0.62"}],
		"parameters":[{"type":"kd","value":"1.2x10^(-6)", "unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q24008"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"21083505",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"580-665"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q00657"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"15668093",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"2318-2326"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9JLB9"},
		"label":"Pvrl3"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0053","name":"fluorescence polarization spectroscopy"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21703451"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig. 1A"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4307051"}],
		"confidences":[{"type":"intact-miscore","value":"0.56"}],
		"parameters":[{"type":"kd","value":"1.3x10^(-4)", "unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q24008"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"32012057",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"580-665"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9JLB9"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"14886914",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"540-549"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q63372"},
		"label":"Nrxn1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0053","name":"fluorescence polarization spectroscopy"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21703451"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig. 1A"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4307049"}],
		"confidences":[{"type":"intact-miscore","value":"0.56"}],
		"parameters":[{"type":"kd","value":"8.2x10^(-5)", "unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q63372"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"22528701",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"1522-1530"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q24008"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"16053322",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"580-665"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q9JHY1"},
		"label":"F11r"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0053","name":"fluorescence polarization spectroscopy"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21703451"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig. 1A"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4307055"}],
		"confidences":[{"type":"intact-miscore","value":"0.56"}],
		"parameters":[{"type":"kd","value":"3.4x10^(-4)", "unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9JHY1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"30562042",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"291-300"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q24008"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"4999541",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"580-665"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O43521"},
		"label":"BCL2L11"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q92843"},
		"label":"BCL2L2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0107","name":"surface plasmon resonance"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21199865"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 2"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-4321327"}],
		"confidences":[{"type":"intact-miscore","value":"0.79"}],
		"parameters":[{"type":"ic50","value":"6.7x10^(-8)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O43521"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"6997089",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"141-166"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q92843"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q07812"},
		"label":"BAX"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0107","name":"surface plasmon resonance"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21199865"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 2"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-4321327"}],
		"confidences":[{"type":"intact-miscore","value":"0.67"}],
		"parameters":[{"type":"ic50","value":"6.7x10^(-8)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O43521"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"25352765",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"141-166"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q07812"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0684","name":"ancillary"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"29751107",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":[{"range":"74-74"}]
				},
				{
				"id":"32278793",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"48-81"}]
				},
				{
				"id":"1623405",
				"type":{"name":"mutation disrupting interaction"},
				"sequenceData":[{"range":"74-74"}]
				},
				{
				"id":"4815156",
				"type":{"name":"mutation disrupting interaction"},
				"sequenceData":[{"range":"74-74"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0107","name":"surface plasmon resonance"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21199865"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 2"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-4321313"}],
		"confidences":[{"type":"intact-miscore","value":"0.67"}],
		"parameters":[{"type":"ic50","value":"9.4x10^(-8)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O43521"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"21202114",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"141-166"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q07812"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0684","name":"ancillary"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"29420695",
				"type":{"name":"mutation disrupting interaction"},
				"sequenceData":[{"range":"74-74"}]
				},
				{
				"id":"15512193",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"48-81"}]
				},
				{
				"id":"29057219",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":[{"range":"74-74"}]
				},
				{
				"id":"13480046",
				"type":{"name":"mutation disrupting interaction"},
				"sequenceData":[{"range":"74-74"}]
				},
				{
				"id":"33168310",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":[{"range":"74-74"}]
				},
				{
				"id":"20012340",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":[{"range":"74-74"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P10415"},
		"label":"BCL2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0107","name":"surface plasmon resonance"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21199865"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 2"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-4321313"}],
		"confidences":[{"type":"intact-miscore","value":"0.84"}],
		"parameters":[{"type":"ic50","value":"9.4x10^(-8)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O43521"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"31335791",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"141-166"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P10415"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0107","name":"surface plasmon resonance"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21199865"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 2"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-4321162"}],
		"confidences":[{"type":"intact-miscore","value":"0.67"}],
		"parameters":[{"type":"ic50","value":"1.84x10^(-7)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O43521"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"14863189",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"141-166"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q07812"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0684","name":"ancillary"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"26435810",
				"type":{"name":"mutation disrupting interaction"},
				"sequenceData":[{"range":"74-74"}]
				},
				{
				"id":"12432643",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"48-81"}]
				},
				{
				"id":"11985823",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":[{"range":"74-74"}]
				},
				{
				"id":"18471958",
				"type":{"name":"mutation disrupting interaction"},
				"sequenceData":[{"range":"74-74"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q07817-1"},
		"label":"BCL2L1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0107","name":"surface plasmon resonance"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21199865"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 2"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-4321162"}],
		"confidences":[{"type":"intact-miscore","value":"0.94"}],
		"parameters":[{"type":"ic50","value":"1.84x10^(-7)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O43521"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"12606779",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"141-166"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q07817-1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"19461870",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"1-44"},{"range":"85-209"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0107","name":"surface plasmon resonance"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21199865"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 2"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-4321165"}],
		"confidences":[{"type":"intact-miscore","value":"0.67"}],
		"parameters":[{"type":"ic50","value":"1.0x10^(-7)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O43521"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"7056873",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"141-166"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q07812"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0684","name":"ancillary"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"23506867",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":[{"range":"74-74"}]
				},
				{
				"id":"10044878",
				"type":{"name":"mutation disrupting interaction"},
				"sequenceData":[{"range":"74-74"}]
				},
				{
				"id":"11918020",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"48-81"}]
				},
				{
				"id":"19764978",
				"type":{"name":"mutation disrupting interaction"},
				"sequenceData":[{"range":"74-74"}]
				},
				{
				"id":"1114115",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":[{"range":"74-74"}]
				},
				{
				"id":"1565898",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":[{"range":"74-74"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q07820"},
		"label":"MCL1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0107","name":"surface plasmon resonance"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21199865"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 2"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-4321165"}],
		"confidences":[{"type":"intact-miscore","value":"0.88"}],
		"parameters":[{"type":"ic50","value":"1.0x10^(-7)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O43521"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"11383252",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"141-166"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q07820"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"24499883",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"173..175-323..328"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P62805"},
		"label":"HIST1H4A"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q12830-4"},
		"label":"BPTF"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0065","name":"isothermal titration calorimetry"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21596426"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig. 1E"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4288998"}],
		"confidences":[{"type":"intact-miscore","value":"0.68"}],
		"parameters":[{"type":"kd","value":"1.3x10^(-4)", "unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P62805"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"23110255",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"12-26"}]
				},
				{
				"id":"21514757",
				"type":{"name":"N-acetylated L-lysine"},
				"sequenceData":[{"range":"21-21"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q12830-4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"15964986",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"2781-2890"}]
				},
				{
				"id":"22293109",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"n-n"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0065","name":"isothermal titration calorimetry"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21596426"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig. 1E"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4289000"}],
		"confidences":[{"type":"intact-miscore","value":"0.68"}],
		"parameters":[{"type":"kd","value":"6.9x10^(-6)", "unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P62805"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"11508030",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"12-26"}]
				},
				{
				"id":"7726332",
				"type":{"name":"N-acetylated L-lysine"},
				"sequenceData":[{"range":"13-13"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q12830-4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"811720",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"2781-2890"}]
				},
				{
				"id":"19480755",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"n-n"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0065","name":"isothermal titration calorimetry"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21596426"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig. 1E"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4288996"}],
		"confidences":[{"type":"intact-miscore","value":"0.68"}],
		"parameters":[{"type":"kd","value":"9.9x10^(-5)", "unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P62805"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"31952838",
				"type":{"name":"N-acetylated L-lysine"},
				"sequenceData":[{"range":"17-17"}]
				},
				{
				"id":"26219575",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"12-26"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q12830-4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"2056742",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"2781-2890"}]
				},
				{
				"id":"6613606",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"n-n"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0053","name":"fluorescence polarization spectroscopy"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21596426"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Figs. 1C,  2B, Supp. Fig. 1F"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4288945"}],
		"confidences":[{"type":"intact-miscore","value":"0.68"}],
		"parameters":[{"type":"kd","value":"2.1x10^(-4)", "unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P62805"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"22608339",
				"type":{"name":"N-acetylated L-lysine"},
				"sequenceData":[{"range":"17-17"}]
				},
				{
				"id":"7971559",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"12-26"}]
				},
				{
				"id":"28705408",
				"type":{"name":"fluorescein label"},
				"sequenceData":[{"range":"?-?"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q12830-4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"6182315",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"2781-2890"}]
				},
				{
				"id":"21648882",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"n-n"}]
				},
				{
				"id":"22057969",
				"type":{"name":"mutation disrupting interaction"},
				"sequenceData":[{"range":"2870-2870"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"intact","id":"EBI-4289209"},
		"label":"h3_peptide_1-8"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0053","name":"fluorescence polarization spectroscopy"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21596426"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig. 4B"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4289492"}],
		"confidences":[{"type":"intact-miscore","value":"0.56"}],
		"parameters":[{"type":"kd","value":"2.1x10^(-4)", "unit":"molar"}],
		"source":{
			"identifier":{"db":"intact","id":"EBI-4289209"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"18923308",
				"type":{"name":"fluorescein label"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"15136722",
				"type":{"name":"N6,N6,N6-trimethyl-L-lysine"},
				"sequenceData":[{"range":"4-4"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q12830-4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"26752749",
				"type":{"name":"mutation disrupting interaction"},
				"sequenceData":[{"range":"2748-2748"}]
				},
				{
				"id":"4067003",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"2722-2890"}]
				},
				{
				"id":"3753023",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"n-n"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0053","name":"fluorescence polarization spectroscopy"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21596426"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig. 1C, Supp. Fig. 1F"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4288947"}],
		"confidences":[{"type":"intact-miscore","value":"0.68"}],
		"parameters":[{"type":"kd","value":"2.7x10^(-4)", "unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P62805"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"28290629",
				"type":{"name":"N-acetylated L-lysine"},
				"sequenceData":[{"range":"13-13"}]
				},
				{
				"id":"14306161",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"12-26"}]
				},
				{
				"id":"26156414",
				"type":{"name":"fluorescein label"},
				"sequenceData":[{"range":"?-?"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q12830-4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"14247437",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"2781-2890"}]
				},
				{
				"id":"12258573",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"n-n"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0053","name":"fluorescence polarization spectroscopy"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21596426"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig. 1C, Supp. Fig. 1F"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4288943"}],
		"confidences":[{"type":"intact-miscore","value":"0.68"}],
		"parameters":[{"type":"kd","value":"3.2x10^(-4)", "unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P62805"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"5629279",
				"type":{"name":"N-acetylated L-lysine"},
				"sequenceData":[{"range":"21-21"}]
				},
				{
				"id":"21350489",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"12-26"}]
				},
				{
				"id":"6588476",
				"type":{"name":"fluorescein label"},
				"sequenceData":[{"range":"?-?"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q12830-4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"2891371",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"n-n"}]
				},
				{
				"id":"8461448",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"2781-2890"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0053","name":"fluorescence polarization spectroscopy"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21596426"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Figs. 1C,  2B, Supp. Fig. 1F"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4289466"}],
		"confidences":[{"type":"intact-miscore","value":"0.68"}],
		"parameters":[{"type":"kd","value":"2.1x10^(-4)", "unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P62805"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"7888229",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"12-26"}]
				},
				{
				"id":"3916375",
				"type":{"name":"fluorescein label"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"22279806",
				"type":{"name":"N-acetylated L-lysine"},
				"sequenceData":[{"range":"17-17"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q12830-4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"22797392",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"n-n"}]
				},
				{
				"id":"31275026",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"2722-2890"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0327","name":"peptide"},
		"organism":{"taxid":"-1","common":"in vitro","scientific":"In vitro"},
		"identifier":{"db":"intact","id":"EBI-1177816"},
		"label":"h3_peptide-2-21"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0107","name":"surface plasmon resonance"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21596426"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig. 2C"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4289175"}],
		"confidences":[{"type":"intact-miscore","value":"0.56"}],
		"parameters":[{"type":"kd","value":"9.9x10^(-5)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-1177816"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"9192299",
				"type":{"name":"biotin tag"},
				"sequenceData":[{"range":"?-?"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q12830-4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"10378355",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"2722-2890"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0107","name":"surface plasmon resonance"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21596426"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig. 2C"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4289175"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"kd","value":"9.9x10^(-5)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-1177816"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"13905160",
				"type":{"name":"biotin tag"},
				"sequenceData":[{"range":"?-?"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P62805"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0684","name":"ancillary"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"30961619",
				"type":{"name":"N-acetylated L-lysine"},
				"sequenceData":[{"range":"17-17"}]
				},
				{
				"id":"9800632",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"12-26"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:17283"},
		"label":"1-phosphatidyl-1d-myo-inositol 3-phosphate"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q13596"},
		"label":"SNX1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0049","name":"filter binding"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"23416715"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig. 4F"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4404601"}],
		"confidences":[{"type":"intact-miscore","value":"0.60"}],
		"parameters":[{"type":"kd","value":"1.4x10^(-7)", "unit":"kelvin"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:17283"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0421","name":"identification by antibody"}],
			"otherFeatures":[
				{
				"id":"521452",
				"type":{"name":"biotin tag"},
				"sequenceData":[{"range":"?-?"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q13596"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0421","name":"identification by antibody"}],
			"otherFeatures":[
				{
				"id":"6349096",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"6164599",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"143-272"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9Y3D6"},
		"label":"FIS1"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0327","name":"peptide"},
		"organism":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
		"identifier":{"db":"intact","id":"EBI-4392615"},
		"label":"pep1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0084","name":"phage display"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19864424"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"4a and 4e"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4393814"}],
		"confidences":[{"type":"intact-miscore","value":"0.56"}],
		"parameters":[{"type":"ic50","value":"6.78x10^(-5)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Y3D6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0411","name":"enzyme linked immunosorbent assay"}],
			"experimentalFeatures":[
				{
				"id":"25899876",
				"type":{"name":"experimental feature"},
				"sequenceData":[{"range":"32-122"}]
				}],
			"otherFeatures":[
				{
				"id":"31131058",
				"type":{"name":"myc tag"},
				"sequenceData":[{"range":"n-n"}]
				},
				{
				"id":"5442802",
				"type":{"name":"his tag"},
				"sequenceData":[{"range":"n-n"}]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-4392615"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0411","name":"enzyme linked immunosorbent assay"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0327","name":"peptide"},
		"organism":{"taxid":"-1","common":"in vitro","scientific":"In vitro"},
		"identifier":{"db":"intact","id":"EBI-4392634"},
		"label":"ph1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0084","name":"phage display"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19864424"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"4a and 4e"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4393814"}],
		"confidences":[{"type":"intact-miscore","value":"0.54"}],
		"parameters":[{"type":"ic50","value":"6.78x10^(-5)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Y3D6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0411","name":"enzyme linked immunosorbent assay"}],
			"experimentalFeatures":[
				{
				"id":"7797664",
				"type":{"name":"experimental feature"},
				"sequenceData":[{"range":"32-122"}]
				}],
			"otherFeatures":[
				{
				"id":"25292190",
				"type":{"name":"myc tag"},
				"sequenceData":[{"range":"n-n"}]
				},
				{
				"id":"18306082",
				"type":{"name":"his tag"},
				"sequenceData":[{"range":"n-n"}]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-4392634"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0411","name":"enzyme linked immunosorbent assay"}],
			"otherFeatures":[
				{
				"id":"9740137",
				"type":{"name":"fusion protein"},
				"sequenceData":[{"range":"c-c"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0327","name":"peptide"},
		"organism":{"taxid":"-1","common":"in vitro","scientific":"In vitro"},
		"identifier":{"db":"intact","id":"EBI-4392720"},
		"label":"ph13"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0084","name":"phage display"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19864424"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"4d and 4e"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4393757"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"4.02x10^(-5)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Y3D6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0411","name":"enzyme linked immunosorbent assay"}],
			"experimentalFeatures":[
				{
				"id":"23965177",
				"type":{"name":"experimental feature"},
				"sequenceData":[{"range":"32-122"}]
				}],
			"otherFeatures":[
				{
				"id":"28890871",
				"type":{"name":"myc tag"},
				"sequenceData":[{"range":"n-n"}]
				},
				{
				"id":"2691004",
				"type":{"name":"his tag"},
				"sequenceData":[{"range":"n-n"}]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-4392720"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0411","name":"enzyme linked immunosorbent assay"}],
			"otherFeatures":[
				{
				"id":"29887233",
				"type":{"name":"fusion protein"},
				"sequenceData":[{"range":"c-c"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0327","name":"peptide"},
		"organism":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
		"identifier":{"db":"intact","id":"EBI-4393355"},
		"label":"pep13"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0084","name":"phage display"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19864424"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"4d and 4e"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4393757"}],
		"confidences":[{"type":"intact-miscore","value":"0.65"}],
		"parameters":[{"type":"ic50","value":"4.02x10^(-5)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Y3D6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0411","name":"enzyme linked immunosorbent assay"}],
			"experimentalFeatures":[
				{
				"id":"4890830",
				"type":{"name":"experimental feature"},
				"sequenceData":[{"range":"32-122"}]
				}],
			"otherFeatures":[
				{
				"id":"25378506",
				"type":{"name":"myc tag"},
				"sequenceData":[{"range":"n-n"}]
				},
				{
				"id":"26171428",
				"type":{"name":"his tag"},
				"sequenceData":[{"range":"n-n"}]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-4393355"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0411","name":"enzyme linked immunosorbent assay"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0327","name":"peptide"},
		"organism":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
		"identifier":{"db":"intact","id":"EBI-4393353"},
		"label":"pep4"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0084","name":"phage display"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19864424"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"4c and 4e"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4393838"}],
		"confidences":[{"type":"intact-miscore","value":"0.56"}],
		"parameters":[{"type":"ic50","value":"5.07x10^(-5)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Y3D6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0411","name":"enzyme linked immunosorbent assay"}],
			"experimentalFeatures":[
				{
				"id":"31706449",
				"type":{"name":"experimental feature"},
				"sequenceData":[{"range":"32-122"}]
				}],
			"otherFeatures":[
				{
				"id":"12357150",
				"type":{"name":"his tag"},
				"sequenceData":[{"range":"n-n"}]
				},
				{
				"id":"18248114",
				"type":{"name":"myc tag"},
				"sequenceData":[{"range":"n-n"}]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-4393353"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0411","name":"enzyme linked immunosorbent assay"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0327","name":"peptide"},
		"organism":{"taxid":"-1","common":"in vitro","scientific":"In vitro"},
		"identifier":{"db":"intact","id":"EBI-4392686"},
		"label":"ph4"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0084","name":"phage display"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19864424"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"4c and 4e"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4393838"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"5.07x10^(-5)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Y3D6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0411","name":"enzyme linked immunosorbent assay"}],
			"experimentalFeatures":[
				{
				"id":"8549963",
				"type":{"name":"experimental feature"},
				"sequenceData":[{"range":"32-122"}]
				}],
			"otherFeatures":[
				{
				"id":"19157736",
				"type":{"name":"his tag"},
				"sequenceData":[{"range":"n-n"}]
				},
				{
				"id":"29310343",
				"type":{"name":"myc tag"},
				"sequenceData":[{"range":"n-n"}]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-4392686"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0411","name":"enzyme linked immunosorbent assay"}],
			"otherFeatures":[
				{
				"id":"6330655",
				"type":{"name":"fusion protein"},
				"sequenceData":[{"range":"c-c"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0084","name":"phage display"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19864424"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"1c, 1d, 2a and 2b"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4393092"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ec50","value":"1.0x10^(6)", "unit":"parameter unit"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Y3D6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0411","name":"enzyme linked immunosorbent assay"}],
			"otherFeatures":[
				{
				"id":"31782850",
				"type":{"name":"mutation disrupting interaction"},
				"sequenceData":[{"range":"42-42"}]
				},
				{
				"id":"21360867",
				"type":{"name":"mutation disrupting interaction"},
				"sequenceData":[{"range":"58-58"}]
				},
				{
				"id":"13228332",
				"type":{"name":"mutation disrupting interaction"},
				"sequenceData":[{"range":"77-77"}]
				},
				{
				"id":"30472956",
				"type":{"name":"his tag"},
				"sequenceData":[{"range":"n-n"}]
				},
				{
				"id":"17680053",
				"type":{"name":"necessary binding region"},
				"sequenceData":[{"range":"32-122"}]
				},
				{
				"id":"24166053",
				"type":{"name":"myc tag"},
				"sequenceData":[{"range":"n-n"}]
				},
				{
				"id":"16020374",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":[{"range":"91-91"}]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-4392720"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0411","name":"enzyme linked immunosorbent assay"}],
			"otherFeatures":[
				{
				"id":"13676443",
				"type":{"name":"fusion protein"},
				"sequenceData":[{"range":"c-c"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0327","name":"peptide"},
		"organism":{"taxid":"-1","common":"in vitro","scientific":"In vitro"},
		"identifier":{"db":"intact","id":"EBI-4392868"},
		"label":"ph9"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0084","name":"phage display"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19864424"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"1c, 1d, 2a and 2b"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4393049"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ec50","value":"5.3x10^(6)", "unit":"parameter unit"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Y3D6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0411","name":"enzyme linked immunosorbent assay"}],
			"otherFeatures":[
				{
				"id":"12122347",
				"type":{"name":"myc tag"},
				"sequenceData":[{"range":"n-n"}]
				},
				{
				"id":"31332340",
				"type":{"name":"necessary binding region"},
				"sequenceData":[{"range":"32-122"}]
				},
				{
				"id":"32946703",
				"type":{"name":"his tag"},
				"sequenceData":[{"range":"n-n"}]
				},
				{
				"id":"20003078",
				"type":{"name":"mutation increasing interaction"},
				"sequenceData":[{"range":"58-58"}]
				},
				{
				"id":"9883409",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":[{"range":"42-42"}]
				},
				{
				"id":"16022517",
				"type":{"name":"mutation increasing interaction"},
				"sequenceData":[{"range":"91-91"}]
				},
				{
				"id":"16139149",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":[{"range":"77-77"}]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-4392868"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0411","name":"enzyme linked immunosorbent assay"}],
			"otherFeatures":[
				{
				"id":"30214280",
				"type":{"name":"fusion protein"},
				"sequenceData":[{"range":"c-c"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0327","name":"peptide"},
		"organism":{"taxid":"-1","common":"in vitro","scientific":"In vitro"},
		"identifier":{"db":"intact","id":"EBI-4392652"},
		"label":"ph2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0084","name":"phage display"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19864424"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"3a, 3b, 4b, 4e and 4f"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4393606"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"5.2x10^(-6)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Y3D6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0411","name":"enzyme linked immunosorbent assay"}],
			"experimentalFeatures":[
				{
				"id":"32189467",
				"type":{"name":"experimental feature"},
				"sequenceData":[{"range":"32-122"}]
				}],
			"otherFeatures":[
				{
				"id":"10272075",
				"type":{"name":"myc tag"},
				"sequenceData":[{"range":"n-n"}]
				},
				{
				"id":"5218268",
				"type":{"name":"his tag"},
				"sequenceData":[{"range":"n-n"}]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-4392652"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0411","name":"enzyme linked immunosorbent assay"}],
			"otherFeatures":[
				{
				"id":"25699763",
				"type":{"name":"fusion protein"},
				"sequenceData":[{"range":"c-c"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0327","name":"peptide"},
		"organism":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
		"identifier":{"db":"intact","id":"EBI-4393351"},
		"label":"pep2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0084","name":"phage display"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19864424"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"3a, 3b, 4b, 4e and 4f"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4393606"}],
		"confidences":[{"type":"intact-miscore","value":"0.65"}],
		"parameters":[{"type":"ic50","value":"5.2x10^(-6)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Y3D6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0411","name":"enzyme linked immunosorbent assay"}],
			"experimentalFeatures":[
				{
				"id":"23275591",
				"type":{"name":"experimental feature"},
				"sequenceData":[{"range":"32-122"}]
				}],
			"otherFeatures":[
				{
				"id":"15293014",
				"type":{"name":"myc tag"},
				"sequenceData":[{"range":"n-n"}]
				},
				{
				"id":"2745175",
				"type":{"name":"his tag"},
				"sequenceData":[{"range":"n-n"}]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-4393351"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0411","name":"enzyme linked immunosorbent assay"}],
			"otherFeatures":[
				{
				"id":"828528",
				"type":{"name":"mutation disrupting interaction"},
				"sequenceData":[{"range":"7-7"}]
				},
				{
				"id":"33539718",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":[{"range":"8-8"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0107","name":"surface plasmon resonance"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19864424"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"5j and 5k"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4393935"}],
		"confidences":[{"type":"intact-miscore","value":"0.65"}],
		"parameters":[{"type":"kd","value":"0.31x10^(-6) ~0.02", "unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Y3D6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"21151438",
				"type":{"name":"experimental feature"},
				"sequenceData":[{"range":"1-122"}]
				}],
			"otherFeatures":[
				{
				"id":"16579154",
				"type":{"name":"his tag"},
				"sequenceData":[{"range":"n-n"}]
				},
				{
				"id":"9838079",
				"type":{"name":"myc tag"},
				"sequenceData":[{"range":"n-n"}]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-4393355"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0107","name":"surface plasmon resonance"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19864424"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"5c and 5k"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4393893"}],
		"confidences":[{"type":"intact-miscore","value":"0.56"}],
		"parameters":[{"type":"kd","value":"3.05x10^(-5) ~0.454", "unit":"molar"}],
		"source":{
			"identifier":{"db":"intact","id":"EBI-4393353"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9Y3D6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"27296482",
				"type":{"name":"experimental feature"},
				"sequenceData":[{"range":"32-122"}]
				}],
			"otherFeatures":[
				{
				"id":"15779934",
				"type":{"name":"myc tag"},
				"sequenceData":[{"range":"n-n"}]
				},
				{
				"id":"32675815",
				"type":{"name":"his tag"},
				"sequenceData":[{"range":"n-n"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0107","name":"surface plasmon resonance"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19864424"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"5b, 5e, 5g and 5k"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4393879"}],
		"confidences":[{"type":"intact-miscore","value":"0.65"}],
		"parameters":[{"type":"kd","value":"8.9x10^(-6) ~0.17", "unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Y3D6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"11299397",
				"type":{"name":"experimental feature"},
				"sequenceData":[{"range":"32-122"}]
				}],
			"otherFeatures":[
				{
				"id":"24446859",
				"type":{"name":"his tag"},
				"sequenceData":[{"range":"n-n"}]
				},
				{
				"id":"4347180",
				"type":{"name":"myc tag"},
				"sequenceData":[{"range":"n-n"}]
				},
				{
				"id":"15055830",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":[{"range":"42-42"}]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-4393351"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"9363478",
				"type":{"name":"mutation disrupting interaction"},
				"sequenceData":[{"range":"7-7"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0107","name":"surface plasmon resonance"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19864424"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"5d, 5k and 5h"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4393905"}],
		"confidences":[{"type":"intact-miscore","value":"0.65"}],
		"parameters":[{"type":"kd","value":"0.31x10^(-5) ~0.087", "unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Y3D6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"2165595",
				"type":{"name":"experimental feature"},
				"sequenceData":[{"range":"32-122"}]
				}],
			"otherFeatures":[
				{
				"id":"24152206",
				"type":{"name":"his tag"},
				"sequenceData":[{"range":"n-n"}]
				},
				{
				"id":"18179071",
				"type":{"name":"myc tag"},
				"sequenceData":[{"range":"n-n"}]
				},
				{
				"id":"22549907",
				"type":{"name":"mutation disrupting interaction"},
				"sequenceData":[{"range":"42-42"}]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-4393355"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0107","name":"surface plasmon resonance"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19864424"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"5a and 5k"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4393863"}],
		"confidences":[{"type":"intact-miscore","value":"0.56"}],
		"parameters":[{"type":"kd","value":"9.78x10^(-5) ~1.328", "unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Y3D6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"32533955",
				"type":{"name":"experimental feature"},
				"sequenceData":[{"range":"32-122"}]
				}],
			"otherFeatures":[
				{
				"id":"28724842",
				"type":{"name":"his tag"},
				"sequenceData":[{"range":"n-n"}]
				},
				{
				"id":"30810736",
				"type":{"name":"myc tag"},
				"sequenceData":[{"range":"n-n"}]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-4392615"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0107","name":"surface plasmon resonance"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19864424"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"5i and 5k"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4393949"}],
		"confidences":[{"type":"intact-miscore","value":"0.65"}],
		"parameters":[{"type":"kd","value":"1.46x10^(-5) ~0.462", "unit":"molar"}],
		"source":{
			"identifier":{"db":"intact","id":"EBI-4393351"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9Y3D6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"24054760",
				"type":{"name":"experimental feature"},
				"sequenceData":[{"range":"1-122"}]
				}],
			"otherFeatures":[
				{
				"id":"24562387",
				"type":{"name":"his tag"},
				"sequenceData":[{"range":"n-n"}]
				},
				{
				"id":"33431531",
				"type":{"name":"myc tag"},
				"sequenceData":[{"range":"n-n"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0030","name":"cross-linking study"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19864424"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"5f"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4393988"}],
		"confidences":[{"type":"intact-miscore","value":"0.65"}],
		"parameters":[{"type":"kd","value":"0.31x10^(-5) ~0.087", "unit":"molar"}],
		"source":{
			"identifier":{"db":"intact","id":"EBI-4393355"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0705","name":"anti tag western blot"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9Y3D6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0705","name":"anti tag western blot"}],
			"experimentalFeatures":[
				{
				"id":"14780827",
				"type":{"name":"experimental feature"},
				"sequenceData":[{"range":"32-122"}]
				}],
			"otherFeatures":[
				{
				"id":"17905186",
				"type":{"name":"myc tag"},
				"sequenceData":[{"range":"n-n"}]
				},
				{
				"id":"16316379",
				"type":{"name":"his tag"},
				"sequenceData":[{"range":"n-n"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0030","name":"cross-linking study"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19864424"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"5f"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4393972"}],
		"confidences":[{"type":"intact-miscore","value":"0.65"}],
		"parameters":[{"type":"kd","value":"8.9x10^(-6) ~0.17", "unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Y3D6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0705","name":"anti tag western blot"}],
			"experimentalFeatures":[
				{
				"id":"22566565",
				"type":{"name":"experimental feature"},
				"sequenceData":[{"range":"32-122"}]
				}],
			"otherFeatures":[
				{
				"id":"10519800",
				"type":{"name":"his tag"},
				"sequenceData":[{"range":"n-n"}]
				},
				{
				"id":"7990655",
				"type":{"name":"myc tag"},
				"sequenceData":[{"range":"n-n"}]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-4393351"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0705","name":"anti tag western blot"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"organism":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
		"identifier":{"db":"chebi","id":"CHEBI:62878"},
		"label":"xav939"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9H2K2"},
		"label":"TNKS2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0053","name":"fluorescence polarization spectroscopy"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig 2c"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4398927"}],
		"confidences":[{"type":"intact-miscore","value":"0.54"}],
		"parameters":[{"type":"kd","value":"0.093x10^(-6)", "unit":"molar"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62878"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"14105722",
				"type":{"name":"cy5 label"},
				"sequenceData":[{"range":"?-?"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9H2K2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"12818976",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"29086271",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"959..959-1166"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O95271"},
		"label":"TNKS"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0053","name":"fluorescence polarization spectroscopy"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig 2c"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4398859"}],
		"confidences":[{"type":"intact-miscore","value":"0.54"}],
		"parameters":[{"type":"kd","value":"0.099x10^(-6)", "unit":"molar"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62878"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"31999426",
				"type":{"name":"cy5 label"},
				"sequenceData":[{"range":"?-?"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O95271"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"3932167",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"1112..1112-1317..1317"}]
				},
				{
				"id":"19267322",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P09874"},
		"label":"PARP1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0053","name":"fluorescence polarization spectroscopy"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig 2c"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4398985"}],
		"confidences":[{"type":"intact-miscore","value":"0.54"}],
		"parameters":[{"type":"kd","value":"1.2x10^(-6)", "unit":"molar"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62878"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"25616143",
				"type":{"name":"cy5 label"},
				"sequenceData":[{"range":"?-?"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P09874"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"27168535",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"organism":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
		"identifier":{"db":"chebi","id":"CHEBI:15846"},
		"label":"nad+"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0415","name":"enzymatic study"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig 3H, 5C."}]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399019"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"kd","value":"0.093x10^(-6)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:15846"},
			"bioRole":{"id":"MI:0580","name":"electron acceptor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0867","name":"tag visualisation by fluorescence"}],
			"otherFeatures":[
				{
				"id":"12864392",
				"type":{"name":"biotin tag"},
				"sequenceData":[{"range":"?-?"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9H2K2"},
			"bioRole":{"id":"MI:0898","name":"putative self"},
			"expRole":{"id":"MI:0898","name":"putative self"},
			"identificationMethods":[{"id":"MI:0867","name":"tag visualisation by fluorescence"}],
			"otherFeatures":[
				{
				"id":"20632381",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"872-1166"}]
				},
				{
				"id":"16939420",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0415","name":"enzymatic study"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig 3H, 5C."}]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399019"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"kd","value":"0.093x10^(-6)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:15846"},
			"bioRole":{"id":"MI:0580","name":"electron acceptor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0867","name":"tag visualisation by fluorescence"}],
			"otherFeatures":[
				{
				"id":"25039388",
				"type":{"name":"biotin tag"},
				"sequenceData":[{"range":"?-?"}]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:62878"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0867","name":"tag visualisation by fluorescence"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:62883"},
		"label":"iwr-1-exo"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0415","name":"enzymatic study"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig  3I."}]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399869"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"0.056x10^(-6)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62883"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15846"},
			"bioRole":{"id":"MI:0580","name":"electron acceptor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0415","name":"enzymatic study"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig  3I."}]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399869"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"0.056x10^(-6)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62883"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9H2K2"},
			"bioRole":{"id":"MI:0898","name":"putative self"},
			"expRole":{"id":"MI:0898","name":"putative self"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0415","name":"enzymatic study"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig  3I."}]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399769"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"0.0040x10^(-6)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:15846"},
			"bioRole":{"id":"MI:0580","name":"electron acceptor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9H2K2"},
			"bioRole":{"id":"MI:0898","name":"putative self"},
			"expRole":{"id":"MI:0898","name":"putative self"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:62880"},
		"label":"veliparib\/abt-888"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0415","name":"enzymatic study"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig  3I."}]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399769"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"0.0040x10^(-6)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:15846"},
			"bioRole":{"id":"MI:0580","name":"electron acceptor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:62880"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:62882"},
		"label":"iwr-1-endo"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0415","name":"enzymatic study"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig  3I."}]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399858"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"6.5x10^(-6)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62882"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15846"},
			"bioRole":{"id":"MI:0580","name":"electron acceptor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0415","name":"enzymatic study"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig  3I."}]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399858"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"6.5x10^(-6)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62882"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9H2K2"},
			"bioRole":{"id":"MI:0898","name":"putative self"},
			"expRole":{"id":"MI:0898","name":"putative self"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9UGN5"},
		"label":"PARP2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0415","name":"enzymatic study"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig  3I."}]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399811"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"0.011x10^(-6)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:15846"},
			"bioRole":{"id":"MI:0580","name":"electron acceptor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9UGN5"},
			"bioRole":{"id":"MI:0898","name":"putative self"},
			"expRole":{"id":"MI:0898","name":"putative self"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0415","name":"enzymatic study"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig  3I."}]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399811"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"0.011x10^(-6)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:15846"},
			"bioRole":{"id":"MI:0580","name":"electron acceptor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:62880"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0415","name":"enzymatic study"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig  3I."}]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399737"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"0.011x10^(-6)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:15846"},
			"bioRole":{"id":"MI:0580","name":"electron acceptor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9UGN5"},
			"bioRole":{"id":"MI:0898","name":"putative self"},
			"expRole":{"id":"MI:0898","name":"putative self"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0415","name":"enzymatic study"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig  3I."}]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399737"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"0.011x10^(-6)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:15846"},
			"bioRole":{"id":"MI:0580","name":"electron acceptor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:62878"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0415","name":"enzymatic study"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig  3I."}]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399849"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"0.13x10^(-6)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62882"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15846"},
			"bioRole":{"id":"MI:0580","name":"electron acceptor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0415","name":"enzymatic study"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig  3I."}]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399849"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"0.13x10^(-6)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62882"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O95271"},
			"bioRole":{"id":"MI:0898","name":"putative self"},
			"expRole":{"id":"MI:0898","name":"putative self"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0415","name":"enzymatic study"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig  3I."}]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399746"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"2.2x10^(-6)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:15846"},
			"bioRole":{"id":"MI:0580","name":"electron acceptor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P09874"},
			"bioRole":{"id":"MI:0898","name":"putative self"},
			"expRole":{"id":"MI:0898","name":"putative self"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0415","name":"enzymatic study"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig  3I."}]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399746"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"2.2x10^(-6)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:15846"},
			"bioRole":{"id":"MI:0580","name":"electron acceptor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:62878"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0415","name":"enzymatic study"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig  3I."}]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399725"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"15.0x10^(-6)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:15846"},
			"bioRole":{"id":"MI:0580","name":"electron acceptor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O95271"},
			"bioRole":{"id":"MI:0898","name":"putative self"},
			"expRole":{"id":"MI:0898","name":"putative self"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0415","name":"enzymatic study"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig  3I."}]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399725"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"15.0x10^(-6)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:15846"},
			"bioRole":{"id":"MI:0580","name":"electron acceptor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:62880"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0415","name":"enzymatic study"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig  3I."}]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399702"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"4.0x10^(-6)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:15846"},
			"bioRole":{"id":"MI:0580","name":"electron acceptor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9H2K2"},
			"bioRole":{"id":"MI:0898","name":"putative self"},
			"expRole":{"id":"MI:0898","name":"putative self"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0415","name":"enzymatic study"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig  3I."}]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399702"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"4.0x10^(-6)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:15846"},
			"bioRole":{"id":"MI:0580","name":"electron acceptor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:62878"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0415","name":"enzymatic study"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig  3I."}]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399802"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"0.0080x10^(-6)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:15846"},
			"bioRole":{"id":"MI:0580","name":"electron acceptor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P09874"},
			"bioRole":{"id":"MI:0898","name":"putative self"},
			"expRole":{"id":"MI:0898","name":"putative self"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0415","name":"enzymatic study"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig  3I."}]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399802"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"0.0080x10^(-6)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:15846"},
			"bioRole":{"id":"MI:0580","name":"electron acceptor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:62880"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0415","name":"enzymatic study"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig  3I."}]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399792"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"0.0040x10^(-6)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:15846"},
			"bioRole":{"id":"MI:0580","name":"electron acceptor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O95271"},
			"bioRole":{"id":"MI:0898","name":"putative self"},
			"expRole":{"id":"MI:0898","name":"putative self"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0415","name":"enzymatic study"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig  3I."}]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399792"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"0.0040x10^(-6)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:15846"},
			"bioRole":{"id":"MI:0580","name":"electron acceptor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:62878"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0415","name":"enzymatic study"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig  3I."}]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399878"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"0.13x10^(-6)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62883"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15846"},
			"bioRole":{"id":"MI:0580","name":"electron acceptor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0415","name":"enzymatic study"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig  3I."}]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399878"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"0.13x10^(-6)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62883"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O95271"},
			"bioRole":{"id":"MI:0898","name":"putative self"},
			"expRole":{"id":"MI:0898","name":"putative self"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:29108"},
		"label":"calcium(2+)"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9031","common":"chick","scientific":"Gallus gallus (Chicken)"},
		"identifier":{"db":"uniprotkb","id":"P62149"},
		"label":"CALM"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21884935"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"4A, 4B Supp Fig. 4"}]
		},
		"interactionType":{"id":"MI:0217","name":"phosphorylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4421695"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ec50","value":"6.0x10^(-6)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:29108"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P62149"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9UQM7"},
		"label":"CAMK2A"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21884935"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"4A, 4B Supp Fig. 4"}]
		},
		"interactionType":{"id":"MI:0217","name":"phosphorylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4421695"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ec50","value":"6.0x10^(-6)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:29108"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9UQM7"},
			"bioRole":{"id":"MI:0898","name":"putative self"},
			"expRole":{"id":"MI:0898","name":"putative self"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"26790717",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"1-474"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9HBF4"},
		"label":"ZFYVE1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0107","name":"surface plasmon resonance"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"23416715"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig. 4, Supporting Information Table 3"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4404564"}],
		"confidences":[{"type":"intact-miscore","value":"0.60"}],
		"parameters":[{"type":"kd","value":"2.25x10^(-7)", "unit":"molar"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:17283"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"4664648",
				"type":{"name":"biotin tag"},
				"sequenceData":[{"range":"?-?"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9HBF4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"15594486",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"715-777"}]
				},
				{
				"id":"2868213",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q96BR1"},
		"label":"SGK3"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0107","name":"surface plasmon resonance"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"23416715"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig. 5, Supp. Table 4"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4404586"}],
		"confidences":[{"type":"intact-miscore","value":"0.60"}],
		"parameters":[{"type":"kd","value":"9.0x10^(-8)", "unit":"molar"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:17283"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"21905217",
				"type":{"name":"biotin tag"},
				"sequenceData":[{"range":"?-?"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q96BR1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"1756487",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"12-124"}]
				},
				{
				"id":"26936546",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O14964"},
		"label":"HGS"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0107","name":"surface plasmon resonance"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"23416715"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig. 5A, Supporting Information Table 4"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4404551"}],
		"confidences":[{"type":"intact-miscore","value":"0.60"}],
		"parameters":[{"type":"kd","value":"2.5x10^(-8)", "unit":"molar"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:17283"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"6147782",
				"type":{"name":"biotin tag"},
				"sequenceData":[{"range":"?-?"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O14964"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"11688861",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"151-220"}]
				},
				{
				"id":"27058272",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q96M96"},
		"label":"FGD4"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0107","name":"surface plasmon resonance"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"23416715"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig. 5D"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4404576"}],
		"confidences":[{"type":"intact-miscore","value":"0.60"}],
		"parameters":[{"type":"kd","value":"1.95x10^(-7)", "unit":"molar"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:17283"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"5165021",
				"type":{"name":"biotin tag"},
				"sequenceData":[{"range":"?-?"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q96M96"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"3201069",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"559-619"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q8IX07"},
		"label":"ZFPM1"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q09028"},
		"label":"RBBP4"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0107","name":"surface plasmon resonance"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21047798"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Supplemental Figure 1"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399315"}],
		"confidences":[{"type":"intact-miscore","value":"0.65"}],
		"parameters":[{"type":"kd","value":"1.36x10^(-6)", "unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q8IX07"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"12621140",
				"type":{"name":"biotin tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"25948274",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"1-15"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q09028"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0065","name":"isothermal titration calorimetry"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21047798"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Figure 1"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4412006"}],
		"confidences":[{"type":"intact-miscore","value":"0.65"}],
		"parameters":[{"type":"kd","value":"1.54x10^(-6)", "unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q8IX07"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"5699121",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"1-15"}]
				},
				{
				"id":"20785379",
				"type":{"name":"biotin tag"},
				"sequenceData":[{"range":"?-?"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q09028"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q13794"},
		"label":"PMAIP1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0107","name":"surface plasmon resonance"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21454712"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"1a"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4370352"}],
		"confidences":[{"type":"intact-miscore","value":"0.74"}],
		"parameters":[{"type":"kd","value":"3.4x10^(-9) ~0.8", "unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q13794"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"4677928",
				"type":{"name":"his tag"},
				"sequenceData":[{"range":"n-n"}]
				},
				{
				"id":"3902281",
				"type":{"name":"tag"},
				"sequenceData":[{"range":"?-?"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q07820"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"20290587",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"n-n"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P10415-1"},
		"label":"BCL2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0107","name":"surface plasmon resonance"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21454712"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"1b, 1d, s1b, S1c and 1e"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4370302"}],
		"confidences":[{"type":"intact-miscore","value":"0.54"}],
		"parameters":[{"type":"kd","value":"25.0x10^(-8) ~1.5", "unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q13794"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"10217370",
				"type":{"name":"his tag"},
				"sequenceData":[{"range":"n-n"}]
				},
				{
				"id":"25310701",
				"type":{"name":"tag"},
				"sequenceData":[{"range":"?-?"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P10415-1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"27427682",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":[{"range":"59-59"},{"range":"117-117"}]
				},
				{
				"id":"6278953",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"n-n"}]
				},
				{
				"id":"1683934",
				"type":{"name":"mutation increasing interaction"},
				"sequenceData":[{"range":"31-31"},{"range":"60-60"}]
				},
				{
				"id":"15493888",
				"type":{"name":"mutation increasing interaction"},
				"sequenceData":[{"range":"48-48"},{"range":"129-129"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0107","name":"surface plasmon resonance"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21454712"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"S1a"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4370368"}],
		"confidences":[{"type":"intact-miscore","value":"0.68"}],
		"parameters":[{"type":"kd","value":"7.0x10^(-8) ~4.0", "unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q13794"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"23387093",
				"type":{"name":"tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"10268916",
				"type":{"name":"his tag"},
				"sequenceData":[{"range":"n-n"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q07817-1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"19235919",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"n-n"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0327","name":"peptide"},
		"organism":{"taxid":"-1","common":"in vitro","scientific":"In vitro"},
		"identifier":{"db":"intact","id":"EBI-4392836"},
		"label":"ph8"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0084","name":"phage display"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19864424"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"1c, 1d, 2a and 2b"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4393106"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ec50","value":"2.1x10^(7)", "unit":"parameter unit"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Y3D6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0411","name":"enzyme linked immunosorbent assay"}],
			"otherFeatures":[
				{
				"id":"1152907",
				"type":{"name":"myc tag"},
				"sequenceData":[{"range":"n-n"}]
				},
				{
				"id":"16001744",
				"type":{"name":"his tag"},
				"sequenceData":[{"range":"n-n"}]
				},
				{
				"id":"2546668",
				"type":{"name":"necessary binding region"},
				"sequenceData":[{"range":"32-122"}]
				},
				{
				"id":"19963527",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":[{"range":"77-77"}]
				},
				{
				"id":"16237341",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":[{"range":"91-91"}]
				},
				{
				"id":"2804837",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":[{"range":"42-42"}]
				},
				{
				"id":"30476892",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":[{"range":"58-58"}]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-4392836"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0411","name":"enzyme linked immunosorbent assay"}],
			"otherFeatures":[
				{
				"id":"16720915",
				"type":{"name":"fusion protein"},
				"sequenceData":[{"range":"c-c"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:40520"},
		"label":"abh"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P05089"},
		"label":"ARG1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0065","name":"isothermal titration calorimetry"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"16141327"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig 6"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-2643756"}],
		"confidences":[{"type":"intact-miscore","value":"0.56"}],
		"parameters":[{"type":"kd","value":"5.0x10^(-9)", "unit":"molar"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:40520"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P05089"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:59346"},
		"label":"bec"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0065","name":"isothermal titration calorimetry"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"16141327"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig 7"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-2643764"}],
		"confidences":[{"type":"intact-miscore","value":"0.56"}],
		"parameters":[{"type":"koff","value":"270.0x10^(-9)", "unit":"molar"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:59346"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P05089"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"A8K8P3"},
		"label":"SFI1"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P41208"},
		"label":"CETN2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0065","name":"isothermal titration calorimetry"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"16956364"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig 2 and Fig 3"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-2659498"}],
		"confidences":[{"type":"intact-miscore","value":"0.65"}],
		"parameters":[{"type":"kon","value":"1.0x10^(7)", "unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"A8K8P3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"20935297",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"641-660"}]
				},
				{
				"id":"7777071",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"475-494"}]
				},
				{
				"id":"14732323",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"111-130"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P41208"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"8000886",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"94-172"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0017","name":"classical fluorescence spectroscopy"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"16956364"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig 5"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-2659539"}],
		"confidences":[{"type":"intact-miscore","value":"0.65"}],
		"parameters":[{"type":"kon","value":"1.5x10^(6)", "unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P41208"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"18291494",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"94-172"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"A8K8P3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"32997440",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"641-660"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0680","name":"single stranded deoxyribonucleic acid"},
		"organism":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
		"identifier":{"db":"intact","id":"EBI-4413045"},
		"label":"p21_promoter_human_dna"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"O88898-1"},
		"label":"Tp63"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0053","name":"fluorescence polarization spectroscopy"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21335238"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig. 3B"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4413800"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"kd","value":"3.8x10^(-7)", "unit":"molar"}],
		"source":{
			"identifier":{"db":"intact","id":"EBI-4413045"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O88898-1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"pointMutations":[
				{
				"id":"330120",
				"type":{"name":"mutation"},
				"sequenceData":[{"range":"644-646"}]
				}],
			"otherFeatures":[
				{
				"id":"11854491",
				"type":{"name":"maltose binding protein tag"},
				"sequenceData":[{"range":"n-n"}]
				},
				{
				"id":"25772535",
				"type":{"name":"his tag"},
				"sequenceData":[{"range":"?-?"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0680","name":"single stranded deoxyribonucleic acid"},
		"organism":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
		"identifier":{"db":"intact","id":"EBI-4413858"},
		"label":"cctattctagacatgtgaggacatgtcgatacttattcc"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0053","name":"fluorescence polarization spectroscopy"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21335238"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Supp. Fig. 3A"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4413971"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"kd","value":"3.8x10^(-7)", "unit":"molar"}],
		"source":{
			"identifier":{"db":"intact","id":"EBI-4413858"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O88898-1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"pointMutations":[
				{
				"id":"4839036",
				"type":{"name":"mutation"},
				"sequenceData":[{"range":"644-646"}]
				}],
			"otherFeatures":[
				{
				"id":"27291192",
				"type":{"name":"his tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"27535250",
				"type":{"name":"maltose binding protein tag"},
				"sequenceData":[{"range":"n-n"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0053","name":"fluorescence polarization spectroscopy"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21335238"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig. 3a"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4413786"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"kd","value":"7.5x10^(-6)", "unit":"molar"}],
		"source":{
			"identifier":{"db":"intact","id":"EBI-4413045"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O88898-1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"2228437",
				"type":{"name":"maltose binding protein tag"},
				"sequenceData":[{"range":"n-n"}]
				},
				{
				"id":"6597453",
				"type":{"name":"his tag"},
				"sequenceData":[{"range":"?-?"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0053","name":"fluorescence polarization spectroscopy"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21335238"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Supp. Fig. 3a"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4413933"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"kd","value":"3.5x10^(-6)", "unit":"molar"}],
		"source":{
			"identifier":{"db":"intact","id":"EBI-4413858"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O88898-1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"19551658",
				"type":{"name":"maltose binding protein tag"},
				"sequenceData":[{"range":"n-n"}]
				},
				{
				"id":"6165421",
				"type":{"name":"his tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"6149506",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":[{"range":"318-318"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"O88898-5"},
		"label":"Tp63"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0053","name":"fluorescence polarization spectroscopy"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21335238"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig. 3C"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4413820"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"kd","value":"3.4x10^(-7)", "unit":"molar"}],
		"source":{
			"identifier":{"db":"intact","id":"EBI-4413045"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O88898-5"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"7100506",
				"type":{"name":"his tag"},
				"sequenceData":[{"range":"n-n"}]
				},
				{
				"id":"18655235",
				"type":{"name":"maltose binding protein tag"},
				"sequenceData":[{"range":"n-n"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0053","name":"fluorescence polarization spectroscopy"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21335238"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Supp. Fig. 3A"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4413913"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"kd","value":"3.4x10^(-7)", "unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"O88898-5"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"5924809",
				"type":{"name":"his tag"},
				"sequenceData":[{"range":"c-c"}]
				},
				{
				"id":"22266741",
				"type":{"name":"maltose binding protein tag"},
				"sequenceData":[{"range":"n-n"}]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-4413858"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:15422"},
		"label":"atp"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9UM73"},
		"label":"ALK"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21575866"}],
			"source":{"id":"MI:0469","name":"IntAct"}
		},
		"interactionType":{"id":"MI:0414","name":"enzymatic reaction"},
		"identifiers":[{"db":"intact","id":"EBI-3956565"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"kd","value":"2.4x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0842","name":"phosphate donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9UM73"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"organism":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
		"identifier":{"db":"chebi","id":"CHEBI:62268"},
		"label":"ch5424802"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21575866"}],
			"source":{"id":"MI:0469","name":"IntAct"}
		},
		"interactionType":{"id":"MI:0414","name":"enzymatic reaction"},
		"identifiers":[{"db":"intact","id":"EBI-3956565"}],
		"confidences":[{"type":"intact-miscore","value":"0.62"}],
		"parameters":[{"type":"kd","value":"2.4x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62268"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9UM73"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21575866"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig 4B"}]
		},
		"interactionType":{"id":"MI:0217","name":"phosphorylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-3956590"}],
		"confidences":[{"type":"intact-miscore","value":"0.62"}],
		"parameters":[{"type":"ki","value":"0.83x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62268"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9UM73"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"4536327",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"1081-1410"}]
				},
				{
				"id":"6393126",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0327","name":"peptide"},
		"organism":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
		"identifier":{"db":"intact","id":"EBI-3956539"},
		"label":"gastrintide"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21575866"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig 4B"}]
		},
		"interactionType":{"id":"MI:0217","name":"phosphorylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-3956590"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ki","value":"0.83x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9UM73"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"2569862",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"1081-1410"}]
				},
				{
				"id":"7122710",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3956539"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21575866"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1\/Table S1"}]
		},
		"interactionType":{"id":"MI:0217","name":"phosphorylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-3956534"}],
		"confidences":[{"type":"intact-miscore","value":"0.62"}],
		"parameters":[{"type":"ic50","value":"1.9x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62268"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9UM73"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21575866"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1\/Table S1"}]
		},
		"interactionType":{"id":"MI:0217","name":"phosphorylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-3956534"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"1.9x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9UM73"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3956539"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"22730182",
				"type":{"name":"biotin tag"},
				"sequenceData":[{"range":"n-n"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0114","name":"x-ray crystallography"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21575866"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig 6B"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-3956686"}],
		"confidences":[{"type":"intact-miscore","value":"0.62"}],
		"parameters":[{"type":"ic50","value":"1.9x10^(-9)", "unit":"molar"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62268"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9UM73"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"8970973",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"1069-1411"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:62166"},
		"label":"dcc-2036"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0327","name":"peptide"},
		"organism":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
		"identifier":{"db":"intact","id":"EBI-3946155"},
		"label":"abl-tide"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951532"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"61.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62166"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P53667"},
		"label":"LIMK1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951532"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"61.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P53667"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P00519"},
		"label":"ABL1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 1"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946187"}],
		"confidences":[{"type":"intact-miscore","value":"0.61"}],
		"parameters":[{"type":"ic50","value":"1.1x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P00519"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"15091334",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"229-499"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:49375"},
		"label":"dasatinib"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 1"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946187"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"1.1x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:49375"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951668"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"90.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62166"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9NYL2"},
		"label":"MLTK"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951668"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"90.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9NYL2"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951659"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"33.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62166"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P07947"},
		"label":"YES1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951659"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"33.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P07947"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951650"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"38.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62166"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q16288"},
		"label":"NTRK3"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951650"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"38.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q16288"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951641"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"35.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62166"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q16620"},
		"label":"NTRK2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951641"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"35.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q16620"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951632"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"34.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62166"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P12931"},
		"label":"SRC"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951632"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"34.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P12931"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951619"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"70.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62166"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P09619"},
		"label":"PDGFRB"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951619"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"70.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P09619"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951610"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"87.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62166"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q06418"},
		"label":"TYRO3"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951610"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"87.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q06418"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951596"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"35.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62166"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P80192"},
		"label":"MAP3K9"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951596"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"35.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P80192"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951558"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"13.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62166"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P07948-2"},
		"label":"LYN"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951558"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"13.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P07948-2"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951546"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"29.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62166"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P07948"},
		"label":"LYN"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951546"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"29.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P07948"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951577"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"11.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62166"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q8N4C8"},
		"label":"MINK1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951577"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"11.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q8N4C8"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951495"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"40.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62166"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P08631"},
		"label":"HCK"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951495"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"40.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P08631"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3950096"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"12.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62166"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P06241"},
		"label":"FYN"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3950096"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"12.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P06241"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951523"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"47.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62166"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O94804"},
		"label":"STK10"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951523"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"47.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O94804"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951514"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"99.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62166"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9Y4K4"},
		"label":"MAP4K5"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951514"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"99.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9Y4K4"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951504"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"45.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62166"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O95819"},
		"label":"MAP4K4"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951504"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"45.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O95819"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3950078"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"37.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62166"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P42685"},
		"label":"FRK"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3950078"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"37.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P42685"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3950060"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"10.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62166"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P22607"},
		"label":"FGFR3"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3950060"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"10.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P22607"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3950037"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"64.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62166"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P54760"},
		"label":"EPHB4"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3950037"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"64.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P54760"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3950049"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"14.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62166"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P11362"},
		"label":"FGFR1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3950049"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"14.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P11362"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3950069"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"38.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62166"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P09769"},
		"label":"FGR"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3950069"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"38.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P09769"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3950087"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"39.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62166"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P51617"},
		"label":"IRAK1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3950087"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"39.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P51617"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3950011"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"17.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62166"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9UF33"},
		"label":"EPHA6"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3950011"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"17.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9UF33"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946395"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"19.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62166"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q16832"},
		"label":"DDR2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946395"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"19.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q16832"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3950024"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"88.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62166"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q15375"},
		"label":"EPHA7"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3950024"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"88.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q15375"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946372"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"59.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62166"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q13882"},
		"label":"PTK6"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946372"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"59.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q13882"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946362"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"42.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62166"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P30530"},
		"label":"AXL"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946362"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"42.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P30530"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P41240"},
		"label":"CSK"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946385"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"25.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P41240"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946385"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"25.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62166"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946341"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"5.5x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62166"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P04629"},
		"label":"NTRK1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946341"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"5.5x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P04629"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P42684"},
		"label":"ABL2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946352"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"18.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P42684"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946352"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"18.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62166"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946305"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"7.6x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62166"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q12866"},
		"label":"MERTK"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946305"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"7.6x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q12866"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946317"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"6.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62166"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q02763"},
		"label":"TEK"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946317"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"6.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q02763"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5."}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946261"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"5.5x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62166"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P21802"},
		"label":"FGFR2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5."}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946261"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"5.5x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P21802"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5."}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946244"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"2.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62166"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P36888"},
		"label":"FLT3"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5."}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946244"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"2.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P36888"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5."}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946272"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"4.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62166"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P35968"},
		"label":"KDR"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5."}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946272"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"4.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P35968"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"24417480",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"991-1171"},{"range":"807-939"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 1"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946215"}],
		"confidences":[{"type":"intact-miscore","value":"0.61"}],
		"parameters":[{"type":"ic50","value":"0.87x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P00519"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"13884241",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"229-499"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"organism":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
		"identifier":{"db":"chebi","id":"CHEBI:52172"},
		"label":"nilotinib"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 1"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946215"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"0.87x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:52172"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 1"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946157"}],
		"confidences":[{"type":"intact-miscore","value":"0.61"}],
		"parameters":[{"type":"ic50","value":"0.82x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P00519"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"14927396",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"229-499"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 1"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946157"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"0.82x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62166"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P51451"},
		"label":"BLK"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5."}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946229"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"1.2x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P51451"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5."}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946229"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"1.2x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62166"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 1"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946172"}],
		"confidences":[{"type":"intact-miscore","value":"0.61"}],
		"parameters":[{"type":"ic50","value":"75.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P00519"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"31817359",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"229-499"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:45783"},
		"label":"imatinib"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 1"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946172"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"75.0x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:45783"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946293"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"6.3x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62166"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P06239"},
		"label":"LCK"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"TABLE 2, TABLE S5"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946293"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"6.3x10^(-9)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-3946155"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P06239"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"6239","common":"caeel","scientific":"Caenorhabditis elegans"},
		"identifier":{"db":"uniprotkb","id":"O62479"},
		"label":"sas-6"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0065","name":"isothermal titration calorimetry"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21277013"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig. 2E, S3A"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-3842349"}],
		"confidences":[{"type":"intact-miscore","value":"0.69"}],
		"parameters":[{"type":"kd","value":"1.1x10^(-4)", "unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"O62479"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"30931963",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"1-168"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O62479"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"14688457",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"1-168"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"3055","common":"chlre","scientific":"Chlamydomonas reinhardtii"},
		"identifier":{"db":"uniprotkb","id":"A9CQL4"},
		"label":"CrSAS-6"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0065","name":"isothermal titration calorimetry"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21277013"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Supp. Fig. 4D"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4291520"}],
		"confidences":[{"type":"intact-miscore","value":"0.56"}],
		"parameters":[{"type":"kd","value":"0", "unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"A9CQL4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"8949356",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"1-159"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"A9CQL4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"20863188",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"1-159"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0016","name":"circular dichroism"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21277013"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig. 1F"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-3842305"}],
		"confidences":[{"type":"intact-miscore","value":"0.69"}],
		"parameters":[{"type":"kd","value":"9.0x10^(-7)", "unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"O62479"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"6251267",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"181-408"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O62479"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"6131844",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"181-408"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0029","name":"cosedimentation through density gradient"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21277013"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig. 2D, 2F"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-3842365"}],
		"confidences":[{"type":"intact-miscore","value":"0.69"}],
		"parameters":[{"type":"kd","value":"1.1x10^(-4)", "unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"O62479"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"12245160",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"1-168"}]
				},
				{
				"id":"15081425",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":[{"range":"154-154"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O62479"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"3346521",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"1-168"}]
				},
				{
				"id":"7760420",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":[{"range":"154-154"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9BY76"},
		"label":"ANGPTL4"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P63000"},
		"label":"RAC1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0006","name":"anti bait coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-a5rt3"},
			"host":{"taxid":"9606","common":"human-a5rt3"},
			"pubid":[{"db":"pubmed","id":"21397862"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig 3K."}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-3843710"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"parameters":[{"type":"kd","value":"1.0x10^(-7)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9BY76"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P63000"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"ptms":[
				{
				"id":"3307594",
				"type":{"name":"biological feature"},
				"sequenceData":[{"range":"?-?"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q05397"},
		"label":"PTK2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0006","name":"anti bait coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-a5rt3"},
			"host":{"taxid":"9606","common":"human-a5rt3"},
			"pubid":[{"db":"pubmed","id":"21397862"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig 3K."}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-3843710"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"parameters":[{"type":"kd","value":"1.0x10^(-7)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9BY76"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q05397"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"otherFeatures":[
				{
				"id":"24595355",
				"type":{"name":"O4&apos;-phospho-L-tyrosine"},
				"sequenceData":[{"range":"397-397"}]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P18084"},
		"label":"ITGB5"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0006","name":"anti bait coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-a5rt3"},
			"host":{"taxid":"9606","common":"human-a5rt3"},
			"pubid":[{"db":"pubmed","id":"21397862"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig 3K."}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-3843710"}],
		"confidences":[{"type":"intact-miscore","value":"0.59"}],
		"parameters":[{"type":"kd","value":"1.0x10^(-7)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9BY76"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P18084"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0006","name":"anti bait coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-a5rt3"},
			"host":{"taxid":"9606","common":"human-a5rt3"},
			"pubid":[{"db":"pubmed","id":"21397862"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig 3K."}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-3843710"}],
		"confidences":[{"type":"intact-miscore","value":"0.59"}],
		"parameters":[{"type":"kd","value":"1.0x10^(-7)", "unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9BY76"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P18084"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}]
		}
	}
	]
};