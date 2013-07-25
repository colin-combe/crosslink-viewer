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
			"pubid":[{"db":"pubmed","id":"12361576"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-445553"}],
		"confidences":[{"type":"intact-miscore","value":"0.52"}],
		"parameters":[{"type":"kd","value":"6.2x10^(-8)","unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P23528"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"7176273",
				"type":{"name":"his tag"},
				"sequenceData":["?-?"]
				},
				{
				"id":"13724945",
				"type":{"name":"radiolabel"},
				"sequenceData":["?-?"]
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
			"pubid":[{"db":"pubmed","id":"21241895"},{"db":"imex","id":"IM-15334"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Supp. Fig. 1B"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-3507505"},{"db":"imex","id":"IM-15334-9"}],
		"confidences":[{"type":"intact-miscore","value":"0.56"}],
		"parameters":[{"type":"kd","value":"2.34x10^(-5)","unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"O70368"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"pointMutations":[
				{
				"id":"13266771",
				"type":{"name":"mutation"},
				"sequenceData":["779-779"]
				}],
			"bindingSites":[
				{
				"id":"5428064",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["779-791"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9JIR4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"28531029",
				"type":{"name":"15n label"},
				"sequenceData":["?-?"]
				},
				{
				"id":"28175810",
				"type":{"name":"isotope label"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"30705273",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["593-708"]
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
			"pubid":[{"db":"pubmed","id":"21467298"},{"db":"imex","id":"IM-17227"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["S4b and S4c"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4412524"}],
		"confidences":[{"type":"intact-miscore","value":"0.69"}],
		"parameters":[{"type":"bmax","value":"2.0x10^(-10)","unit":"mol"},{"type":"kd","value":"1.0x10^(-7)","unit":"molar"}],
		"source":{
			"identifier":{"db":"intact","id":"EBI-4412187"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0833","name":"autoradiography"}],
			"experimentalFeatures":[
				{
				"id":"29921964",
				"type":{"name":"biotin tag"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9Z0X1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0833","name":"autoradiography"}],
			"experimentalFeatures":[
				{
				"id":"18179949",
				"type":{"name":"his tag"},
				"sequenceData":["?-?"]
				},
				{
				"id":"3753334",
				"type":{"name":"flag tag"},
				"sequenceData":["?-?"]
				}],
			"pointMutations":[
				{
				"id":"33509728",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":["588-588","589-589","592-592"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0049","name":"filter binding"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21467298"},{"db":"imex","id":"IM-17227"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["1e, 3b and S4a"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4412468"}],
		"confidences":[{"type":"intact-miscore","value":"0.69"}],
		"parameters":[{"type":"kd","value":"1.24x10^(-6)","unit":"molar"},{"type":"bmax","value":"4.573x10^(-12)","unit":"mol"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Z0X1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0833","name":"autoradiography"}],
			"pointMutations":[
				{
				"id":"20413120",
				"type":{"name":"mutation disrupting interaction"},
				"sequenceData":["588-588","589-589","592-592"]
				}],
			"bindingSites":[
				{
				"id":"22806786",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["567-592"]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-4412187"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0833","name":"autoradiography"}],
			"experimentalFeatures":[
				{
				"id":"21385198",
				"type":{"name":"32p radiolabel"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0807","name":"comigration in gel electrophoresis"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21467298"},{"db":"imex","id":"IM-17227"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["3d"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4412501"}],
		"confidences":[{"type":"intact-miscore","value":"0.69"}],
		"parameters":[{"type":"kd","value":"1.24x10^(-6)","unit":"molar"},{"type":"bmax","value":"4.55x10^(-12)","unit":"mol"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Z0X1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0833","name":"autoradiography"}],
			"pointMutations":[
				{
				"id":"19508891",
				"type":{"name":"mutation disrupting interaction"},
				"sequenceData":["588-588","589-589","592-592"]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-4412187"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0833","name":"autoradiography"}],
			"experimentalFeatures":[
				{
				"id":"25589773",
				"type":{"name":"32p radiolabel"},
				"sequenceData":["?-?"]
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
			"pubid":[{"db":"pubmed","id":"21703451"},{"db":"imex","id":"IM-16552"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig. 1A"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4307020"},{"db":"imex","id":"IM-16552-2"}],
		"confidences":[{"type":"intact-miscore","value":"0.56"}],
		"parameters":[{"type":"kd","value":"5.04x10^(-4)","unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q24008"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"20166107",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["580-665"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9W2S5"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"14191483",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["2131-2139"]
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
			"pubid":[{"db":"pubmed","id":"21703451"},{"db":"imex","id":"IM-16552"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig. 6B"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4307161"},{"db":"imex","id":"IM-16552-1"}],
		"confidences":[{"type":"intact-miscore","value":"0.75"}],
		"parameters":[{"type":"kd","value":"1.4x10^(-6)","unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P19334"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11367730",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["1267-1275"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q24008"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32057085",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["473-674"]
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
			"pubid":[{"db":"pubmed","id":"21703451"},{"db":"imex","id":"IM-16552"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Figs. 1A, 1B, 5F, 5G, Supp. Fig. 4A"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4307022"},{"db":"imex","id":"IM-16552-4"}],
		"confidences":[{"type":"intact-miscore","value":"0.62"}],
		"parameters":[{"type":"kd","value":"1.3x10^(-6)","unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"A3RLX3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"14381540",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["2372-2381"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q24008"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17971560",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["580-665"]
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
			"pubid":[{"db":"pubmed","id":"21703451"},{"db":"imex","id":"IM-16552"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Supp. Fig. 6C"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4373471"},{"db":"imex","id":"IM-16552-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"kd","value":"3.0x10^(-5)","unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P13217"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"24567153",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["1086-1095"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q24008"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"12869346",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["473-674"]
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
			"pubid":[{"db":"pubmed","id":"21703451"},{"db":"imex","id":"IM-16552"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig. 1A"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4307053"},{"db":"imex","id":"IM-16552-8"}],
		"confidences":[{"type":"intact-miscore","value":"0.62"}],
		"parameters":[{"type":"kd","value":"1.2x10^(-6)","unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q24008"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"31860110",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["580-665"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q00657"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11250516",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["2318-2326"]
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
			"pubid":[{"db":"pubmed","id":"21703451"},{"db":"imex","id":"IM-16552"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig. 1A"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4307051"},{"db":"imex","id":"IM-16552-9"}],
		"confidences":[{"type":"intact-miscore","value":"0.56"}],
		"parameters":[{"type":"kd","value":"1.3x10^(-4)","unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q24008"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"8205007",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["580-665"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9JLB9"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26406593",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["540-549"]
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
			"pubid":[{"db":"pubmed","id":"21703451"},{"db":"imex","id":"IM-16552"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig. 1A"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4307049"},{"db":"imex","id":"IM-16552-6"}],
		"confidences":[{"type":"intact-miscore","value":"0.56"}],
		"parameters":[{"type":"kd","value":"8.2x10^(-5)","unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q63372"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"24706882",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["1522-1530"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q24008"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"12473643",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["580-665"]
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
			"pubid":[{"db":"pubmed","id":"21703451"},{"db":"imex","id":"IM-16552"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig. 1A"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4307055"},{"db":"imex","id":"IM-16552-10"}],
		"confidences":[{"type":"intact-miscore","value":"0.56"}],
		"parameters":[{"type":"kd","value":"3.4x10^(-4)","unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9JHY1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"29996263",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["291-300"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q24008"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"25411885",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["580-665"]
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
			"pubid":[{"db":"pubmed","id":"21199865"},{"db":"imex","id":"IM-16869"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 2"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-4321327"},{"db":"imex","id":"IM-16869-6"}],
		"confidences":[{"type":"intact-miscore","value":"0.79"}],
		"parameters":[{"type":"ic50","value":"6.7x10^(-8)","unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O43521"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"16743523",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["141-166"]
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
			"pubid":[{"db":"pubmed","id":"21199865"},{"db":"imex","id":"IM-16869"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 2"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-4321327"},{"db":"imex","id":"IM-16869-6"}],
		"confidences":[{"type":"intact-miscore","value":"0.67"}],
		"parameters":[{"type":"ic50","value":"6.7x10^(-8)","unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O43521"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"20940721",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["141-166"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q07812"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0684","name":"ancillary"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"pointMutations":[
				{
				"id":"31828850",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":["74-74"]
				},
				{
				"id":"22736709",
				"type":{"name":"mutation disrupting interaction"},
				"sequenceData":["74-74"]
				},
				{
				"id":"17997250",
				"type":{"name":"mutation disrupting interaction"},
				"sequenceData":["74-74"]
				}],
			"bindingSites":[
				{
				"id":"20133468",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["48-81"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0107","name":"surface plasmon resonance"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21199865"},{"db":"imex","id":"IM-16869"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 2"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-4321313"},{"db":"imex","id":"IM-16869-5"}],
		"confidences":[{"type":"intact-miscore","value":"0.67"}],
		"parameters":[{"type":"ic50","value":"9.4x10^(-8)","unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O43521"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"6309077",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["141-166"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q07812"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0684","name":"ancillary"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"pointMutations":[
				{
				"id":"4667299",
				"type":{"name":"mutation disrupting interaction"},
				"sequenceData":["74-74"]
				},
				{
				"id":"26598825",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":["74-74"]
				},
				{
				"id":"763638",
				"type":{"name":"mutation disrupting interaction"},
				"sequenceData":["74-74"]
				},
				{
				"id":"16679251",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":["74-74"]
				},
				{
				"id":"14454637",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":["74-74"]
				}],
			"bindingSites":[
				{
				"id":"5010147",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["48-81"]
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
			"pubid":[{"db":"pubmed","id":"21199865"},{"db":"imex","id":"IM-16869"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 2"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-4321313"},{"db":"imex","id":"IM-16869-5"}],
		"confidences":[{"type":"intact-miscore","value":"0.84"}],
		"parameters":[{"type":"ic50","value":"9.4x10^(-8)","unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O43521"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17484435",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["141-166"]
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
			"pubid":[{"db":"pubmed","id":"21199865"},{"db":"imex","id":"IM-16869"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 2"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-4321162"},{"db":"imex","id":"IM-16869-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.67"}],
		"parameters":[{"type":"ic50","value":"1.84x10^(-7)","unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O43521"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"24753126",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["141-166"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q07812"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0684","name":"ancillary"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"pointMutations":[
				{
				"id":"17950393",
				"type":{"name":"mutation disrupting interaction"},
				"sequenceData":["74-74"]
				},
				{
				"id":"4368209",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":["74-74"]
				},
				{
				"id":"32947226",
				"type":{"name":"mutation disrupting interaction"},
				"sequenceData":["74-74"]
				}],
			"bindingSites":[
				{
				"id":"28794452",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["48-81"]
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
			"pubid":[{"db":"pubmed","id":"21199865"},{"db":"imex","id":"IM-16869"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 2"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-4321162"},{"db":"imex","id":"IM-16869-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.94"}],
		"parameters":[{"type":"ic50","value":"1.84x10^(-7)","unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O43521"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26342987",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["141-166"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q07817-1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"29423188",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["1-44","85-209"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0107","name":"surface plasmon resonance"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21199865"},{"db":"imex","id":"IM-16869"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 2"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-4321165"},{"db":"imex","id":"IM-16869-4"}],
		"confidences":[{"type":"intact-miscore","value":"0.67"}],
		"parameters":[{"type":"ic50","value":"1.0x10^(-7)","unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O43521"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"23872318",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["141-166"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q07812"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0684","name":"ancillary"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"pointMutations":[
				{
				"id":"11719307",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":["74-74"]
				},
				{
				"id":"1879101",
				"type":{"name":"mutation disrupting interaction"},
				"sequenceData":["74-74"]
				},
				{
				"id":"7339988",
				"type":{"name":"mutation disrupting interaction"},
				"sequenceData":["74-74"]
				},
				{
				"id":"17100784",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":["74-74"]
				},
				{
				"id":"19182761",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":["74-74"]
				}],
			"bindingSites":[
				{
				"id":"13681621",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["48-81"]
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
			"pubid":[{"db":"pubmed","id":"21199865"},{"db":"imex","id":"IM-16869"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 2"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-4321165"},{"db":"imex","id":"IM-16869-4"}],
		"confidences":[{"type":"intact-miscore","value":"0.88"}],
		"parameters":[{"type":"ic50","value":"1.0x10^(-7)","unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O43521"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"8441753",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["141-166"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q07820"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"12418684",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["173..175-323..328"]
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
			"pubid":[{"db":"pubmed","id":"21596426"},{"db":"imex","id":"IM-15795"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig. 1E"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4288998"},{"db":"imex","id":"IM-15795-5"}],
		"confidences":[{"type":"intact-miscore","value":"0.68"}],
		"parameters":[{"type":"kd","value":"1.3x10^(-4)","unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P62805"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"12264761",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["12-26"]
				}],
			"otherFeatures":[
				{
				"id":"8974789",
				"type":{"name":"N-acetylated L-lysine"},
				"sequenceData":["21-21"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q12830-4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"12117457",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["n-n"]
				}],
			"bindingSites":[
				{
				"id":"16262327",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["2781-2890"],
				"InterPro":"IPR001487"
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0065","name":"isothermal titration calorimetry"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21596426"},{"db":"imex","id":"IM-15795"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig. 1E"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4289000"},{"db":"imex","id":"IM-15795-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.68"}],
		"parameters":[{"type":"kd","value":"6.9x10^(-6)","unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P62805"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"33268061",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["12-26"]
				}],
			"otherFeatures":[
				{
				"id":"18802909",
				"type":{"name":"N-acetylated L-lysine"},
				"sequenceData":["13-13"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q12830-4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"4861638",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["n-n"]
				}],
			"bindingSites":[
				{
				"id":"4516912",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["2781-2890"],
				"InterPro":"IPR001487"
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0065","name":"isothermal titration calorimetry"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21596426"},{"db":"imex","id":"IM-15795"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig. 1E"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4288996"},{"db":"imex","id":"IM-15795-4"}],
		"confidences":[{"type":"intact-miscore","value":"0.68"}],
		"parameters":[{"type":"kd","value":"9.9x10^(-5)","unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P62805"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"15627703",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["12-26"]
				}],
			"otherFeatures":[
				{
				"id":"24268593",
				"type":{"name":"N-acetylated L-lysine"},
				"sequenceData":["17-17"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q12830-4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"28125457",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["n-n"]
				}],
			"bindingSites":[
				{
				"id":"23280050",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["2781-2890"],
				"InterPro":"IPR001487"
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0053","name":"fluorescence polarization spectroscopy"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21596426"},{"db":"imex","id":"IM-15795"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Figs. 1C,  2B, Supp. Fig. 1F"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4288945"},{"db":"imex","id":"IM-15795-20"}],
		"confidences":[{"type":"intact-miscore","value":"0.68"}],
		"parameters":[{"type":"kd","value":"2.1x10^(-4)","unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P62805"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"23136542",
				"type":{"name":"fluorescein label"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"27114588",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["12-26"]
				}],
			"otherFeatures":[
				{
				"id":"12150765",
				"type":{"name":"N-acetylated L-lysine"},
				"sequenceData":["17-17"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q12830-4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"5647691",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["n-n"]
				}],
			"pointMutations":[
				{
				"id":"28811873",
				"type":{"name":"mutation disrupting interaction"},
				"sequenceData":["2870-2870"]
				}],
			"bindingSites":[
				{
				"id":"17156513",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["2781-2890"]
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
			"pubid":[{"db":"pubmed","id":"21596426"},{"db":"imex","id":"IM-15795"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig. 4B"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4289492"},{"db":"imex","id":"IM-15795-19"}],
		"confidences":[{"type":"intact-miscore","value":"0.56"}],
		"parameters":[{"type":"kd","value":"2.1x10^(-4)","unit":"molar"}],
		"source":{
			"identifier":{"db":"intact","id":"EBI-4289209"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"23401001",
				"type":{"name":"fluorescein label"},
				"sequenceData":["?-?"]
				}],
			"otherFeatures":[
				{
				"id":"9129144",
				"type":{"name":"N6,N6,N6-trimethyl-L-lysine"},
				"sequenceData":["4-4"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q12830-4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"22664114",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["n-n"]
				}],
			"pointMutations":[
				{
				"id":"5861827",
				"type":{"name":"mutation disrupting interaction"},
				"sequenceData":["2748-2748"]
				}],
			"bindingSites":[
				{
				"id":"3929576",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["2722-2890"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0053","name":"fluorescence polarization spectroscopy"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21596426"},{"db":"imex","id":"IM-15795"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig. 1C, Supp. Fig. 1F"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4288947"},{"db":"imex","id":"IM-15795-16"}],
		"confidences":[{"type":"intact-miscore","value":"0.68"}],
		"parameters":[{"type":"kd","value":"2.7x10^(-4)","unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P62805"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"9275605",
				"type":{"name":"fluorescein label"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"1203023",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["12-26"]
				}],
			"otherFeatures":[
				{
				"id":"19446596",
				"type":{"name":"N-acetylated L-lysine"},
				"sequenceData":["13-13"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q12830-4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"18785887",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["n-n"]
				}],
			"bindingSites":[
				{
				"id":"20764085",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["2781-2890"],
				"InterPro":"IPR001487"
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0053","name":"fluorescence polarization spectroscopy"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21596426"},{"db":"imex","id":"IM-15795"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig. 1C, Supp. Fig. 1F"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4288943"},{"db":"imex","id":"IM-15795-17"}],
		"confidences":[{"type":"intact-miscore","value":"0.68"}],
		"parameters":[{"type":"kd","value":"3.2x10^(-4)","unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P62805"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"4814550",
				"type":{"name":"fluorescein label"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"18418940",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["12-26"]
				}],
			"otherFeatures":[
				{
				"id":"27505018",
				"type":{"name":"N-acetylated L-lysine"},
				"sequenceData":["21-21"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q12830-4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"30984084",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["n-n"]
				}],
			"bindingSites":[
				{
				"id":"18285053",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["2781-2890"],
				"InterPro":"IPR001487"
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0053","name":"fluorescence polarization spectroscopy"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21596426"},{"db":"imex","id":"IM-15795"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Figs. 1C,  2B, Supp. Fig. 1F"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4289466"},{"db":"imex","id":"IM-15795-18"}],
		"confidences":[{"type":"intact-miscore","value":"0.68"}],
		"parameters":[{"type":"kd","value":"2.1x10^(-4)","unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P62805"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"25411576",
				"type":{"name":"fluorescein label"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"11554100",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["12-26"]
				}],
			"otherFeatures":[
				{
				"id":"10262644",
				"type":{"name":"N-acetylated L-lysine"},
				"sequenceData":["17-17"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q12830-4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"14488863",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["n-n"]
				}],
			"bindingSites":[
				{
				"id":"9809631",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["2722-2890"],
				"InterPro":"IPR001487"
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
			"pubid":[{"db":"pubmed","id":"21596426"},{"db":"imex","id":"IM-15795"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig. 2C"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4289175"},{"db":"imex","id":"IM-15795-29"}],
		"confidences":[{"type":"intact-miscore","value":"0.56"}],
		"parameters":[{"type":"kd","value":"9.9x10^(-5)","unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-1177816"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"17548342",
				"type":{"name":"biotin tag"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q12830-4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"25083384",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["2722-2890"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0107","name":"surface plasmon resonance"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21596426"},{"db":"imex","id":"IM-15795"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig. 2C"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4289175"},{"db":"imex","id":"IM-15795-29"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"kd","value":"9.9x10^(-5)","unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-1177816"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"21414603",
				"type":{"name":"biotin tag"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P62805"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0684","name":"ancillary"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"10406974",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["12-26"]
				}],
			"otherFeatures":[
				{
				"id":"24312778",
				"type":{"name":"N-acetylated L-lysine"},
				"sequenceData":["17-17"]
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
			"pubid":[{"db":"pubmed","id":"23416715"},{"db":"imex","id":"IM-15829"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig. 4F"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4404601"}],
		"confidences":[{"type":"intact-miscore","value":"0.60"}],
		"parameters":[{"type":"kd","value":"1.4x10^(-7)","unit":"kelvin"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:17283"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0421","name":"identification by antibody"}],
			"experimentalFeatures":[
				{
				"id":"32542360",
				"type":{"name":"biotin tag"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q13596"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0421","name":"identification by antibody"}],
			"experimentalFeatures":[
				{
				"id":"2204750",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"11146116",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["143-272"],
				"InterPro":"IPR001683"
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
			"pubid":[{"db":"pubmed","id":"19864424"},{"db":"imex","id":"IM-17186"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["4a and 4e"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4393814"},{"db":"imex","id":"IM-17186-39"}],
		"confidences":[{"type":"intact-miscore","value":"0.56"}],
		"parameters":[{"type":"ic50","value":"6.78x10^(-5)","unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Y3D6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0411","name":"enzyme linked immunosorbent assay"}],
			"experimentalFeatures":[
				{
				"id":"31943304",
				"type":{"name":"myc tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"212233",
				"type":{"name":"experimental feature"},
				"sequenceData":["32-122"]
				},
				{
				"id":"10241795",
				"type":{"name":"his tag"},
				"sequenceData":["n-n"]
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
			"pubid":[{"db":"pubmed","id":"19864424"},{"db":"imex","id":"IM-17186"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["4a and 4e"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4393814"},{"db":"imex","id":"IM-17186-39"}],
		"confidences":[{"type":"intact-miscore","value":"0.54"}],
		"parameters":[{"type":"ic50","value":"6.78x10^(-5)","unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Y3D6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0411","name":"enzyme linked immunosorbent assay"}],
			"experimentalFeatures":[
				{
				"id":"33174795",
				"type":{"name":"myc tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"28344803",
				"type":{"name":"experimental feature"},
				"sequenceData":["32-122"]
				},
				{
				"id":"18834451",
				"type":{"name":"his tag"},
				"sequenceData":["n-n"]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-4392634"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0411","name":"enzyme linked immunosorbent assay"}],
			"experimentalFeatures":[
				{
				"id":"31675754",
				"type":{"name":"fusion protein"},
				"sequenceData":["c-c"]
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
			"pubid":[{"db":"pubmed","id":"19864424"},{"db":"imex","id":"IM-17186"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["4d and 4e"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4393757"},{"db":"imex","id":"IM-17186-37"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"4.02x10^(-5)","unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Y3D6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0411","name":"enzyme linked immunosorbent assay"}],
			"experimentalFeatures":[
				{
				"id":"33342712",
				"type":{"name":"experimental feature"},
				"sequenceData":["32-122"]
				},
				{
				"id":"31946444",
				"type":{"name":"myc tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"19433882",
				"type":{"name":"his tag"},
				"sequenceData":["n-n"]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-4392720"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0411","name":"enzyme linked immunosorbent assay"}],
			"experimentalFeatures":[
				{
				"id":"6423554",
				"type":{"name":"fusion protein"},
				"sequenceData":["c-c"]
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
			"pubid":[{"db":"pubmed","id":"19864424"},{"db":"imex","id":"IM-17186"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["4d and 4e"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4393757"},{"db":"imex","id":"IM-17186-37"}],
		"confidences":[{"type":"intact-miscore","value":"0.65"}],
		"parameters":[{"type":"ic50","value":"4.02x10^(-5)","unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Y3D6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0411","name":"enzyme linked immunosorbent assay"}],
			"experimentalFeatures":[
				{
				"id":"16075151",
				"type":{"name":"experimental feature"},
				"sequenceData":["32-122"]
				},
				{
				"id":"28335152",
				"type":{"name":"myc tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"24410133",
				"type":{"name":"his tag"},
				"sequenceData":["n-n"]
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
			"pubid":[{"db":"pubmed","id":"19864424"},{"db":"imex","id":"IM-17186"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["4c and 4e"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4393838"},{"db":"imex","id":"IM-17186-40"}],
		"confidences":[{"type":"intact-miscore","value":"0.56"}],
		"parameters":[{"type":"ic50","value":"5.07x10^(-5)","unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Y3D6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0411","name":"enzyme linked immunosorbent assay"}],
			"experimentalFeatures":[
				{
				"id":"24621203",
				"type":{"name":"experimental feature"},
				"sequenceData":["32-122"]
				},
				{
				"id":"15304902",
				"type":{"name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"1224664",
				"type":{"name":"myc tag"},
				"sequenceData":["n-n"]
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
			"pubid":[{"db":"pubmed","id":"19864424"},{"db":"imex","id":"IM-17186"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["4c and 4e"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4393838"},{"db":"imex","id":"IM-17186-40"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"5.07x10^(-5)","unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Y3D6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0411","name":"enzyme linked immunosorbent assay"}],
			"experimentalFeatures":[
				{
				"id":"14068132",
				"type":{"name":"experimental feature"},
				"sequenceData":["32-122"]
				},
				{
				"id":"18567287",
				"type":{"name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"4180406",
				"type":{"name":"myc tag"},
				"sequenceData":["n-n"]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-4392686"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0411","name":"enzyme linked immunosorbent assay"}],
			"experimentalFeatures":[
				{
				"id":"30665902",
				"type":{"name":"fusion protein"},
				"sequenceData":["c-c"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0084","name":"phage display"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19864424"},{"db":"imex","id":"IM-17186"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["1c, 1d, 2a and 2b"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4393092"},{"db":"imex","id":"IM-17186-17"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ec50","value":"1.0x10^(6)","unit":"parameter unit"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Y3D6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0411","name":"enzyme linked immunosorbent assay"}],
			"experimentalFeatures":[
				{
				"id":"5743047",
				"type":{"name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"20860035",
				"type":{"name":"myc tag"},
				"sequenceData":["n-n"]
				}],
			"pointMutations":[
				{
				"id":"17917840",
				"type":{"name":"mutation disrupting interaction"},
				"sequenceData":["42-42"]
				},
				{
				"id":"27680796",
				"type":{"name":"mutation disrupting interaction"},
				"sequenceData":["58-58"]
				},
				{
				"id":"32503582",
				"type":{"name":"mutation disrupting interaction"},
				"sequenceData":["77-77"]
				},
				{
				"id":"21556533",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":["91-91"]
				}],
			"bindingSites":[
				{
				"id":"13458237",
				"type":{"name":"necessary binding region"},
				"sequenceData":["32-122"]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-4392720"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0411","name":"enzyme linked immunosorbent assay"}],
			"experimentalFeatures":[
				{
				"id":"2171130",
				"type":{"name":"fusion protein"},
				"sequenceData":["c-c"]
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
			"pubid":[{"db":"pubmed","id":"19864424"},{"db":"imex","id":"IM-17186"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["1c, 1d, 2a and 2b"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4393049"},{"db":"imex","id":"IM-17186-14"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ec50","value":"5.3x10^(6)","unit":"parameter unit"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Y3D6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0411","name":"enzyme linked immunosorbent assay"}],
			"experimentalFeatures":[
				{
				"id":"16524584",
				"type":{"name":"myc tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"32216790",
				"type":{"name":"his tag"},
				"sequenceData":["n-n"]
				}],
			"pointMutations":[
				{
				"id":"33284484",
				"type":{"name":"mutation increasing interaction"},
				"sequenceData":["58-58"]
				},
				{
				"id":"26388026",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":["42-42"]
				},
				{
				"id":"14640938",
				"type":{"name":"mutation increasing interaction"},
				"sequenceData":["91-91"]
				},
				{
				"id":"15603102",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":["77-77"]
				}],
			"bindingSites":[
				{
				"id":"13463799",
				"type":{"name":"necessary binding region"},
				"sequenceData":["32-122"]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-4392868"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0411","name":"enzyme linked immunosorbent assay"}],
			"experimentalFeatures":[
				{
				"id":"28545426",
				"type":{"name":"fusion protein"},
				"sequenceData":["c-c"]
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
			"pubid":[{"db":"pubmed","id":"19864424"},{"db":"imex","id":"IM-17186"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["3a, 3b, 4b, 4e and 4f"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4393606"},{"db":"imex","id":"IM-17186-29"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"5.2x10^(-6)","unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Y3D6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0411","name":"enzyme linked immunosorbent assay"}],
			"experimentalFeatures":[
				{
				"id":"27901165",
				"type":{"name":"experimental feature"},
				"sequenceData":["32-122"]
				},
				{
				"id":"11697637",
				"type":{"name":"myc tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"6780142",
				"type":{"name":"his tag"},
				"sequenceData":["n-n"]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-4392652"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0411","name":"enzyme linked immunosorbent assay"}],
			"experimentalFeatures":[
				{
				"id":"3005291",
				"type":{"name":"fusion protein"},
				"sequenceData":["c-c"]
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
			"pubid":[{"db":"pubmed","id":"19864424"},{"db":"imex","id":"IM-17186"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["3a, 3b, 4b, 4e and 4f"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4393606"},{"db":"imex","id":"IM-17186-29"}],
		"confidences":[{"type":"intact-miscore","value":"0.65"}],
		"parameters":[{"type":"ic50","value":"5.2x10^(-6)","unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Y3D6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0411","name":"enzyme linked immunosorbent assay"}],
			"experimentalFeatures":[
				{
				"id":"10515942",
				"type":{"name":"experimental feature"},
				"sequenceData":["32-122"]
				},
				{
				"id":"10248659",
				"type":{"name":"myc tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"14316901",
				"type":{"name":"his tag"},
				"sequenceData":["n-n"]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-4393351"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0411","name":"enzyme linked immunosorbent assay"}],
			"pointMutations":[
				{
				"id":"5332800",
				"type":{"name":"mutation disrupting interaction"},
				"sequenceData":["7-7"]
				},
				{
				"id":"4498314",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":["8-8"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0107","name":"surface plasmon resonance"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19864424"},{"db":"imex","id":"IM-17186"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["5j and 5k"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4393935"},{"db":"imex","id":"IM-17186-45"}],
		"confidences":[{"type":"intact-miscore","value":"0.65"}],
		"parameters":[{"type":"kd","value":"0.31x10^(-6) ~0.02","unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Y3D6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"5030238",
				"type":{"name":"experimental feature"},
				"sequenceData":["1-122"]
				},
				{
				"id":"19597210",
				"type":{"name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"10939",
				"type":{"name":"myc tag"},
				"sequenceData":["n-n"]
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
			"pubid":[{"db":"pubmed","id":"19864424"},{"db":"imex","id":"IM-17186"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["5c and 5k"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4393893"},{"db":"imex","id":"IM-17186-43"}],
		"confidences":[{"type":"intact-miscore","value":"0.56"}],
		"parameters":[{"type":"kd","value":"3.05x10^(-5) ~0.454","unit":"molar"}],
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
				"id":"16083289",
				"type":{"name":"experimental feature"},
				"sequenceData":["32-122"]
				},
				{
				"id":"30898830",
				"type":{"name":"myc tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"28256924",
				"type":{"name":"his tag"},
				"sequenceData":["n-n"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0107","name":"surface plasmon resonance"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19864424"},{"db":"imex","id":"IM-17186"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["5b, 5e, 5g and 5k"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4393879"},{"db":"imex","id":"IM-17186-42"}],
		"confidences":[{"type":"intact-miscore","value":"0.65"}],
		"parameters":[{"type":"kd","value":"8.9x10^(-6) ~0.17","unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Y3D6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"22501086",
				"type":{"name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"17312078",
				"type":{"name":"myc tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"13631753",
				"type":{"name":"experimental feature"},
				"sequenceData":["32-122"]
				}],
			"pointMutations":[
				{
				"id":"32780219",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":["42-42"]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-4393351"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"pointMutations":[
				{
				"id":"6935374",
				"type":{"name":"mutation disrupting interaction"},
				"sequenceData":["7-7"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0107","name":"surface plasmon resonance"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19864424"},{"db":"imex","id":"IM-17186"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["5d, 5k and 5h"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4393905"},{"db":"imex","id":"IM-17186-44"}],
		"confidences":[{"type":"intact-miscore","value":"0.65"}],
		"parameters":[{"type":"kd","value":"0.31x10^(-5) ~0.087","unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Y3D6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"28299040",
				"type":{"name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"21457100",
				"type":{"name":"myc tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"20006779",
				"type":{"name":"experimental feature"},
				"sequenceData":["32-122"]
				}],
			"pointMutations":[
				{
				"id":"4981716",
				"type":{"name":"mutation disrupting interaction"},
				"sequenceData":["42-42"]
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
			"pubid":[{"db":"pubmed","id":"19864424"},{"db":"imex","id":"IM-17186"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["5a and 5k"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4393863"},{"db":"imex","id":"IM-17186-41"}],
		"confidences":[{"type":"intact-miscore","value":"0.56"}],
		"parameters":[{"type":"kd","value":"9.78x10^(-5) ~1.328","unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Y3D6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"9405353",
				"type":{"name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"849296",
				"type":{"name":"experimental feature"},
				"sequenceData":["32-122"]
				},
				{
				"id":"13500823",
				"type":{"name":"myc tag"},
				"sequenceData":["n-n"]
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
			"pubid":[{"db":"pubmed","id":"19864424"},{"db":"imex","id":"IM-17186"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["5i and 5k"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4393949"},{"db":"imex","id":"IM-17186-46"}],
		"confidences":[{"type":"intact-miscore","value":"0.65"}],
		"parameters":[{"type":"kd","value":"1.46x10^(-5) ~0.462","unit":"molar"}],
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
				"id":"13263607",
				"type":{"name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"19365882",
				"type":{"name":"experimental feature"},
				"sequenceData":["1-122"]
				},
				{
				"id":"4404019",
				"type":{"name":"myc tag"},
				"sequenceData":["n-n"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0030","name":"cross-linking study"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19864424"},{"db":"imex","id":"IM-17186"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["5f"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4393988"},{"db":"imex","id":"IM-17186-48"}],
		"confidences":[{"type":"intact-miscore","value":"0.65"}],
		"parameters":[{"type":"kd","value":"0.31x10^(-5) ~0.087","unit":"molar"}],
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
				"id":"30833473",
				"type":{"name":"myc tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"3542598",
				"type":{"name":"experimental feature"},
				"sequenceData":["32-122"]
				},
				{
				"id":"14886447",
				"type":{"name":"his tag"},
				"sequenceData":["n-n"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0030","name":"cross-linking study"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19864424"},{"db":"imex","id":"IM-17186"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["5f"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4393972"},{"db":"imex","id":"IM-17186-47"}],
		"confidences":[{"type":"intact-miscore","value":"0.65"}],
		"parameters":[{"type":"kd","value":"8.9x10^(-6) ~0.17","unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Y3D6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0705","name":"anti tag western blot"}],
			"experimentalFeatures":[
				{
				"id":"14677731",
				"type":{"name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"30008530",
				"type":{"name":"experimental feature"},
				"sequenceData":["32-122"]
				},
				{
				"id":"30256499",
				"type":{"name":"myc tag"},
				"sequenceData":["n-n"]
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
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig 2c"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4398927"}],
		"confidences":[{"type":"intact-miscore","value":"0.54"}],
		"parameters":[{"type":"kd","value":"0.093x10^(-6)","unit":"molar"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62878"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"3572736",
				"type":{"name":"cy5 label"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9H2K2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"18108262",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"6868426",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["959..959-1166"],
				"InterPro":"IPR012317"
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
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig 2c"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4398859"}],
		"confidences":[{"type":"intact-miscore","value":"0.54"}],
		"parameters":[{"type":"kd","value":"0.099x10^(-6)","unit":"molar"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62878"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"10392644",
				"type":{"name":"cy5 label"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O95271"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"18356845",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"24046250",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["1112..1112-1317..1317"]
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
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig 2c"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4398985"}],
		"confidences":[{"type":"intact-miscore","value":"0.54"}],
		"parameters":[{"type":"kd","value":"1.2x10^(-6)","unit":"molar"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:62878"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"15755959",
				"type":{"name":"cy5 label"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P09874"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"32393254",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
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
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig 3H, 5C."]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399019"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"kd","value":"0.093x10^(-6)","unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:15846"},
			"bioRole":{"id":"MI:0580","name":"electron acceptor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0867","name":"tag visualisation by fluorescence"}],
			"experimentalFeatures":[
				{
				"id":"12773899",
				"type":{"name":"biotin tag"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9H2K2"},
			"bioRole":{"id":"MI:0898","name":"putative self"},
			"expRole":{"id":"MI:0898","name":"putative self"},
			"identificationMethods":[{"id":"MI:0867","name":"tag visualisation by fluorescence"}],
			"experimentalFeatures":[
				{
				"id":"9670959",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"2149359",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["872-1166"],
				"InterPro":"IPR012317"
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0415","name":"enzymatic study"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig 3H, 5C."]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399019"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"kd","value":"0.093x10^(-6)","unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:15846"},
			"bioRole":{"id":"MI:0580","name":"electron acceptor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0867","name":"tag visualisation by fluorescence"}],
			"experimentalFeatures":[
				{
				"id":"19722078",
				"type":{"name":"biotin tag"},
				"sequenceData":["?-?"]
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
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig  3I."]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399869"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"0.056x10^(-6)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig  3I."]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399869"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"0.056x10^(-6)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig  3I."]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399769"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"0.0040x10^(-6)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig  3I."]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399769"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"0.0040x10^(-6)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig  3I."]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399858"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"6.5x10^(-6)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig  3I."]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399858"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"6.5x10^(-6)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig  3I."]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399811"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"0.011x10^(-6)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig  3I."]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399811"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"0.011x10^(-6)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig  3I."]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399737"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"0.011x10^(-6)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig  3I."]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399737"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"0.011x10^(-6)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig  3I."]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399849"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"0.13x10^(-6)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig  3I."]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399849"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"0.13x10^(-6)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig  3I."]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399746"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"2.2x10^(-6)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig  3I."]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399746"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"2.2x10^(-6)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig  3I."]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399725"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"15.0x10^(-6)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig  3I."]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399725"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"15.0x10^(-6)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig  3I."]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399702"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"4.0x10^(-6)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig  3I."]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399702"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"4.0x10^(-6)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig  3I."]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399802"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"0.0080x10^(-6)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig  3I."]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399802"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"0.0080x10^(-6)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig  3I."]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399792"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"0.0040x10^(-6)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig  3I."]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399792"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"0.0040x10^(-6)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig  3I."]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399878"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"0.13x10^(-6)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"19759537"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig  3I."]
		},
		"interactionType":{"id":"MI:0557","name":"adp ribosylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399878"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"0.13x10^(-6)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21884935"},{"db":"imex","id":"IM-16595"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["4A, 4B Supp Fig. 4"]
		},
		"interactionType":{"id":"MI:0217","name":"phosphorylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4421695"},{"db":"imex","id":"IM-16595-2"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ec50","value":"6.0x10^(-6)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21884935"},{"db":"imex","id":"IM-16595"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["4A, 4B Supp Fig. 4"]
		},
		"interactionType":{"id":"MI:0217","name":"phosphorylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-4421695"},{"db":"imex","id":"IM-16595-2"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ec50","value":"6.0x10^(-6)","unit":"molar"}],
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
			"bindingSites":[
				{
				"id":"18297884",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["1-474"]
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
			"pubid":[{"db":"pubmed","id":"23416715"},{"db":"imex","id":"IM-15829"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig. 4, Supporting Information Table 3"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4404564"}],
		"confidences":[{"type":"intact-miscore","value":"0.60"}],
		"parameters":[{"type":"kd","value":"2.25x10^(-7)","unit":"molar"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:17283"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"6173553",
				"type":{"name":"biotin tag"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9HBF4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"8615493",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"13227080",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["715-777"],
				"InterPro":"IPR000306"
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
			"pubid":[{"db":"pubmed","id":"23416715"},{"db":"imex","id":"IM-15829"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig. 5, Supp. Table 4"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4404586"}],
		"confidences":[{"type":"intact-miscore","value":"0.60"}],
		"parameters":[{"type":"kd","value":"9.0x10^(-8)","unit":"molar"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:17283"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"9424814",
				"type":{"name":"biotin tag"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q96BR1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"25943850",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"31998532",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["12-124"],
				"InterPro":"IPR001683"
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
			"pubid":[{"db":"pubmed","id":"23416715"},{"db":"imex","id":"IM-15829"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig. 5A, Supporting Information Table 4"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4404551"}],
		"confidences":[{"type":"intact-miscore","value":"0.60"}],
		"parameters":[{"type":"kd","value":"2.5x10^(-8)","unit":"molar"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:17283"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"22460353",
				"type":{"name":"biotin tag"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O14964"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"3808803",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"26256004",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["151-220"],
				"InterPro":"IPR011011"
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
			"pubid":[{"db":"pubmed","id":"23416715"},{"db":"imex","id":"IM-15829"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig. 5D"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4404576"}],
		"confidences":[{"type":"intact-miscore","value":"0.60"}],
		"parameters":[{"type":"kd","value":"1.95x10^(-7)","unit":"molar"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:17283"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"10327615",
				"type":{"name":"biotin tag"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q96M96"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32709909",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["559-619"],
				"InterPro":"IPR000306"
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
			"pubid":[{"db":"pubmed","id":"21047798"},{"db":"imex","id":"IM-17214"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Supplemental Figure 1"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4399315"},{"db":"imex","id":"IM-17214-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.65"}],
		"parameters":[{"type":"kd","value":"1.36x10^(-6)","unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q8IX07"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"33192392",
				"type":{"name":"biotin tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"22110320",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["1-15"]
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
			"pubid":[{"db":"pubmed","id":"21047798"},{"db":"imex","id":"IM-17214"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Figure 1"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4412006"},{"db":"imex","id":"IM-17214-4"}],
		"confidences":[{"type":"intact-miscore","value":"0.65"}],
		"parameters":[{"type":"kd","value":"1.54x10^(-6)","unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q8IX07"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"26373697",
				"type":{"name":"biotin tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"8682641",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["1-15"]
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
			"pubid":[{"db":"pubmed","id":"21454712"},{"db":"imex","id":"IM-16929"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["1a"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4370352"},{"db":"imex","id":"IM-16929-2"}],
		"confidences":[{"type":"intact-miscore","value":"0.74"}],
		"parameters":[{"type":"kd","value":"3.4x10^(-9) ~0.8","unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q13794"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"938343",
				"type":{"name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"156434",
				"type":{"name":"tag"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q07820"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"11948158",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["n-n"]
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
			"pubid":[{"db":"pubmed","id":"21454712"},{"db":"imex","id":"IM-16929"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["1b, 1d, s1b, S1c and 1e"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4370302"},{"db":"imex","id":"IM-16929-1"}],
		"confidences":[{"type":"intact-miscore","value":"0.54"}],
		"parameters":[{"type":"kd","value":"25.0x10^(-8) ~1.5","unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q13794"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"22985480",
				"type":{"name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"4790863",
				"type":{"name":"tag"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P10415-1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"22952635",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["n-n"]
				}],
			"pointMutations":[
				{
				"id":"23198170",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":["59-59","117-117"]
				},
				{
				"id":"22698751",
				"type":{"name":"mutation increasing interaction"},
				"sequenceData":["31-31","60-60"]
				},
				{
				"id":"17577129",
				"type":{"name":"mutation increasing interaction"},
				"sequenceData":["48-48","129-129"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0107","name":"surface plasmon resonance"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21454712"},{"db":"imex","id":"IM-16929"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["S1a"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4370368"},{"db":"imex","id":"IM-16929-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.68"}],
		"parameters":[{"type":"kd","value":"7.0x10^(-8) ~4.0","unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q13794"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"5592376",
				"type":{"name":"tag"},
				"sequenceData":["?-?"]
				},
				{
				"id":"5114937",
				"type":{"name":"his tag"},
				"sequenceData":["n-n"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q07817-1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"303495",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["n-n"]
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
			"pubid":[{"db":"pubmed","id":"19864424"},{"db":"imex","id":"IM-17186"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["1c, 1d, 2a and 2b"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4393106"},{"db":"imex","id":"IM-17186-18"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ec50","value":"2.1x10^(7)","unit":"parameter unit"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Y3D6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0411","name":"enzyme linked immunosorbent assay"}],
			"experimentalFeatures":[
				{
				"id":"567853",
				"type":{"name":"myc tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"14460343",
				"type":{"name":"his tag"},
				"sequenceData":["n-n"]
				}],
			"pointMutations":[
				{
				"id":"236039",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":["77-77"]
				},
				{
				"id":"7685286",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":["91-91"]
				},
				{
				"id":"15604386",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":["42-42"]
				},
				{
				"id":"1480889",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":["58-58"]
				}],
			"bindingSites":[
				{
				"id":"25476251",
				"type":{"name":"necessary binding region"},
				"sequenceData":["32-122"]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-4392836"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0411","name":"enzyme linked immunosorbent assay"}],
			"experimentalFeatures":[
				{
				"id":"24803425",
				"type":{"name":"fusion protein"},
				"sequenceData":["c-c"]
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
			"pubid":[{"db":"pubmed","id":"16141327"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig 6"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-2643756"}],
		"confidences":[{"type":"intact-miscore","value":"0.56"}],
		"parameters":[{"type":"kd","value":"5.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"16141327"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig 7"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-2643764"}],
		"confidences":[{"type":"intact-miscore","value":"0.56"}],
		"parameters":[{"type":"koff","value":"270.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"16956364"},{"db":"imex","id":"IM-20476"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig 2 and Fig 3"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-2659498"},{"db":"imex","id":"IM-20476-1"}],
		"confidences":[{"type":"intact-miscore","value":"0.65"}],
		"parameters":[{"type":"kon","value":"1.0x10^(7)","unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"A8K8P3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"5587032",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["641-660"]
				},
				{
				"id":"15954272",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["475-494"]
				},
				{
				"id":"9993758",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["111-130"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P41208"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"25169128",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["94-172"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0017","name":"classical fluorescence spectroscopy"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"16956364"},{"db":"imex","id":"IM-20476"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig 5"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-2659539"},{"db":"imex","id":"IM-20476-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.65"}],
		"parameters":[{"type":"kon","value":"1.5x10^(6)","unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P41208"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"30374417",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["94-172"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"A8K8P3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"5706974",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["641-660"]
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
			"pubid":[{"db":"pubmed","id":"21335238"},{"db":"imex","id":"IM-16609"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig. 3B"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4413800"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"kd","value":"3.8x10^(-7)","unit":"molar"}],
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
			"experimentalFeatures":[
				{
				"id":"18559324",
				"type":{"name":"maltose binding protein tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"4574760",
				"type":{"name":"his tag"},
				"sequenceData":["?-?"]
				}],
			"pointMutations":[
				{
				"id":"14794734",
				"type":{"name":"mutation"},
				"sequenceData":["644-646"]
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
			"pubid":[{"db":"pubmed","id":"21335238"},{"db":"imex","id":"IM-16609"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Supp. Fig. 3A"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4413971"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"kd","value":"3.8x10^(-7)","unit":"molar"}],
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
			"experimentalFeatures":[
				{
				"id":"16757535",
				"type":{"name":"his tag"},
				"sequenceData":["?-?"]
				},
				{
				"id":"21552028",
				"type":{"name":"maltose binding protein tag"},
				"sequenceData":["n-n"]
				}],
			"pointMutations":[
				{
				"id":"4855768",
				"type":{"name":"mutation"},
				"sequenceData":["644-646"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0053","name":"fluorescence polarization spectroscopy"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21335238"},{"db":"imex","id":"IM-16609"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig. 3a"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4413786"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"kd","value":"7.5x10^(-6)","unit":"molar"}],
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
			"experimentalFeatures":[
				{
				"id":"32788362",
				"type":{"name":"maltose binding protein tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"9573108",
				"type":{"name":"his tag"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0053","name":"fluorescence polarization spectroscopy"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21335238"},{"db":"imex","id":"IM-16609"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Supp. Fig. 3a"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4413933"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"kd","value":"3.5x10^(-6)","unit":"molar"}],
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
			"experimentalFeatures":[
				{
				"id":"462609",
				"type":{"name":"maltose binding protein tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"24007229",
				"type":{"name":"his tag"},
				"sequenceData":["?-?"]
				}],
			"pointMutations":[
				{
				"id":"31014713",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":["318-318"]
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
			"pubid":[{"db":"pubmed","id":"21335238"},{"db":"imex","id":"IM-16609"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig. 3C"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4413820"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"kd","value":"3.4x10^(-7)","unit":"molar"}],
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
			"experimentalFeatures":[
				{
				"id":"21101046",
				"type":{"name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"8502922",
				"type":{"name":"maltose binding protein tag"},
				"sequenceData":["n-n"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0053","name":"fluorescence polarization spectroscopy"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21335238"},{"db":"imex","id":"IM-16609"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Supp. Fig. 3A"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4413913"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"kd","value":"3.4x10^(-7)","unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"O88898-5"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"295262",
				"type":{"name":"his tag"},
				"sequenceData":["c-c"]
				},
				{
				"id":"29969295",
				"type":{"name":"maltose binding protein tag"},
				"sequenceData":["n-n"]
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
			"pubid":[{"db":"pubmed","id":"21575866"},{"db":"imex","id":"IM-17129"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"}
		},
		"interactionType":{"id":"MI:0414","name":"enzymatic reaction"},
		"identifiers":[{"db":"intact","id":"EBI-3956565"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"kd","value":"2.4x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21575866"},{"db":"imex","id":"IM-17129"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"}
		},
		"interactionType":{"id":"MI:0414","name":"enzymatic reaction"},
		"identifiers":[{"db":"intact","id":"EBI-3956565"}],
		"confidences":[{"type":"intact-miscore","value":"0.62"}],
		"parameters":[{"type":"kd","value":"2.4x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21575866"},{"db":"imex","id":"IM-17129"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig 4B"]
		},
		"interactionType":{"id":"MI:0217","name":"phosphorylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-3956590"},{"db":"imex","id":"IM-17129-2"}],
		"confidences":[{"type":"intact-miscore","value":"0.62"}],
		"parameters":[{"type":"ki","value":"0.83x10^(-9)","unit":"molar"}],
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
			"experimentalFeatures":[
				{
				"id":"8375678",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"9178234",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["1081-1410"]
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
			"pubid":[{"db":"pubmed","id":"21575866"},{"db":"imex","id":"IM-17129"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig 4B"]
		},
		"interactionType":{"id":"MI:0217","name":"phosphorylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-3956590"},{"db":"imex","id":"IM-17129-2"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ki","value":"0.83x10^(-9)","unit":"molar"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9UM73"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"8857631",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"22759428",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["1081-1410"]
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
			"pubid":[{"db":"pubmed","id":"21575866"},{"db":"imex","id":"IM-17129"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1\/Table S1"]
		},
		"interactionType":{"id":"MI:0217","name":"phosphorylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-3956534"},{"db":"imex","id":"IM-17129-1"}],
		"confidences":[{"type":"intact-miscore","value":"0.62"}],
		"parameters":[{"type":"ic50","value":"1.9x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21575866"},{"db":"imex","id":"IM-17129"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1\/Table S1"]
		},
		"interactionType":{"id":"MI:0217","name":"phosphorylation reaction"},
		"identifiers":[{"db":"intact","id":"EBI-3956534"},{"db":"imex","id":"IM-17129-1"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"parameters":[{"type":"ic50","value":"1.9x10^(-9)","unit":"molar"}],
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
			"experimentalFeatures":[
				{
				"id":"30740670",
				"type":{"name":"biotin tag"},
				"sequenceData":["n-n"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0114","name":"x-ray crystallography"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21575866"},{"db":"imex","id":"IM-17129"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig 6B"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-3956686"}],
		"confidences":[{"type":"intact-miscore","value":"0.62"}],
		"parameters":[{"type":"ic50","value":"1.9x10^(-9)","unit":"molar"}],
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
			"bindingSites":[
				{
				"id":"20859304",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["1069-1411"]
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951532"},{"db":"imex","id":"IM-16879-31"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"61.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951532"},{"db":"imex","id":"IM-16879-31"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"61.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 1"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946187"},{"db":"imex","id":"IM-16879-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.61"}],
		"parameters":[{"type":"ic50","value":"1.1x10^(-9)","unit":"molar"}],
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
			"bindingSites":[
				{
				"id":"5631398",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["229-499"]
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 1"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946187"},{"db":"imex","id":"IM-16879-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"1.1x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951668"},{"db":"imex","id":"IM-16879-42"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"90.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951668"},{"db":"imex","id":"IM-16879-42"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"90.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951659"},{"db":"imex","id":"IM-16879-41"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"33.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951659"},{"db":"imex","id":"IM-16879-41"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"33.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951650"},{"db":"imex","id":"IM-16879-40"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"38.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951650"},{"db":"imex","id":"IM-16879-40"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"38.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951641"},{"db":"imex","id":"IM-16879-39"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"35.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951641"},{"db":"imex","id":"IM-16879-39"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"35.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951632"},{"db":"imex","id":"IM-16879-38"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"34.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951632"},{"db":"imex","id":"IM-16879-38"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"34.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951619"},{"db":"imex","id":"IM-16879-37"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"70.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951619"},{"db":"imex","id":"IM-16879-37"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"70.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951610"},{"db":"imex","id":"IM-16879-36"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"87.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951610"},{"db":"imex","id":"IM-16879-36"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"87.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951596"},{"db":"imex","id":"IM-16879-35"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"35.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951596"},{"db":"imex","id":"IM-16879-35"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"35.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951558"},{"db":"imex","id":"IM-16879-33"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"13.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951558"},{"db":"imex","id":"IM-16879-33"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"13.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951546"},{"db":"imex","id":"IM-16879-32"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"29.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951546"},{"db":"imex","id":"IM-16879-32"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"29.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951577"},{"db":"imex","id":"IM-16879-34"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"11.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951577"},{"db":"imex","id":"IM-16879-34"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"11.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951495"},{"db":"imex","id":"IM-16879-27"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"40.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951495"},{"db":"imex","id":"IM-16879-27"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"40.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3950096"},{"db":"imex","id":"IM-16879-26"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"12.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3950096"},{"db":"imex","id":"IM-16879-26"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"12.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951523"},{"db":"imex","id":"IM-16879-30"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"47.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951523"},{"db":"imex","id":"IM-16879-30"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"47.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951514"},{"db":"imex","id":"IM-16879-29"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"99.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951514"},{"db":"imex","id":"IM-16879-29"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"99.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951504"},{"db":"imex","id":"IM-16879-28"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"45.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3951504"},{"db":"imex","id":"IM-16879-28"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"45.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3950078"},{"db":"imex","id":"IM-16879-24"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"37.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3950078"},{"db":"imex","id":"IM-16879-24"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"37.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3950060"},{"db":"imex","id":"IM-16879-22"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"10.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3950060"},{"db":"imex","id":"IM-16879-22"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"10.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3950037"},{"db":"imex","id":"IM-16879-20"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"64.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3950037"},{"db":"imex","id":"IM-16879-20"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"64.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3950049"},{"db":"imex","id":"IM-16879-21"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"14.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3950049"},{"db":"imex","id":"IM-16879-21"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"14.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3950069"},{"db":"imex","id":"IM-16879-23"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"38.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3950069"},{"db":"imex","id":"IM-16879-23"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"38.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3950087"},{"db":"imex","id":"IM-16879-25"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"39.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3950087"},{"db":"imex","id":"IM-16879-25"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"39.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3950011"},{"db":"imex","id":"IM-16879-18"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"17.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3950011"},{"db":"imex","id":"IM-16879-18"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"17.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946395"},{"db":"imex","id":"IM-16879-17"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"19.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946395"},{"db":"imex","id":"IM-16879-17"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"19.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3950024"},{"db":"imex","id":"IM-16879-19"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"88.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3950024"},{"db":"imex","id":"IM-16879-19"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"88.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946372"},{"db":"imex","id":"IM-16879-15"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"59.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946372"},{"db":"imex","id":"IM-16879-15"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"59.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946362"},{"db":"imex","id":"IM-16879-14"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"42.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946362"},{"db":"imex","id":"IM-16879-14"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"42.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946385"},{"db":"imex","id":"IM-16879-16"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"25.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946385"},{"db":"imex","id":"IM-16879-16"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"25.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946341"},{"db":"imex","id":"IM-16879-12"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"5.5x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946341"},{"db":"imex","id":"IM-16879-12"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"5.5x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946352"},{"db":"imex","id":"IM-16879-13"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"18.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946352"},{"db":"imex","id":"IM-16879-13"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"18.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946305"},{"db":"imex","id":"IM-16879-10"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"7.6x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946305"},{"db":"imex","id":"IM-16879-10"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"7.6x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946317"},{"db":"imex","id":"IM-16879-11"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"6.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946317"},{"db":"imex","id":"IM-16879-11"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"6.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5."]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946261"},{"db":"imex","id":"IM-16879-7"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"5.5x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5."]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946261"},{"db":"imex","id":"IM-16879-7"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"5.5x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5."]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946244"},{"db":"imex","id":"IM-16879-6"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"2.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5."]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946244"},{"db":"imex","id":"IM-16879-6"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"2.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5."]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946272"},{"db":"imex","id":"IM-16879-8"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"4.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5."]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946272"},{"db":"imex","id":"IM-16879-8"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"4.0x10^(-9)","unit":"molar"}],
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
			"bindingSites":[
				{
				"id":"1698697",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["991-1171","807-939"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 1"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946215"},{"db":"imex","id":"IM-16879-4"}],
		"confidences":[{"type":"intact-miscore","value":"0.61"}],
		"parameters":[{"type":"ic50","value":"0.87x10^(-9)","unit":"molar"}],
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
			"bindingSites":[
				{
				"id":"28741695",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["229-499"]
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 1"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946215"},{"db":"imex","id":"IM-16879-4"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"0.87x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 1"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946157"},{"db":"imex","id":"IM-16879-1"}],
		"confidences":[{"type":"intact-miscore","value":"0.61"}],
		"parameters":[{"type":"ic50","value":"0.82x10^(-9)","unit":"molar"}],
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
			"bindingSites":[
				{
				"id":"12078148",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["229-499"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0424","name":"protein kinase assay"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 1"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946157"},{"db":"imex","id":"IM-16879-1"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"0.82x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5."]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946229"},{"db":"imex","id":"IM-16879-5"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"1.2x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5."]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946229"},{"db":"imex","id":"IM-16879-5"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"1.2x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 1"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946172"},{"db":"imex","id":"IM-16879-2"}],
		"confidences":[{"type":"intact-miscore","value":"0.61"}],
		"parameters":[{"type":"ic50","value":"75.0x10^(-9)","unit":"molar"}],
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
			"bindingSites":[
				{
				"id":"26681190",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["229-499"]
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 1"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946172"},{"db":"imex","id":"IM-16879-2"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"75.0x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946293"},{"db":"imex","id":"IM-16879-9"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"6.3x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21481795"},{"db":"imex","id":"IM-16879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["TABLE 2, TABLE S5"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-3946293"},{"db":"imex","id":"IM-16879-9"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"parameters":[{"type":"ic50","value":"6.3x10^(-9)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21277013"},{"db":"imex","id":"IM-15770"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig. 2E, S3A"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-3842349"},{"db":"imex","id":"IM-15770-1"}],
		"confidences":[{"type":"intact-miscore","value":"0.69"}],
		"parameters":[{"type":"kd","value":"1.1x10^(-4)","unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"O62479"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"9337330",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["1-168"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O62479"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"31995269",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["1-168"]
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
			"pubid":[{"db":"pubmed","id":"21277013"},{"db":"imex","id":"IM-15770"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Supp. Fig. 4D"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-4291520"},{"db":"imex","id":"IM-15770-2"}],
		"confidences":[{"type":"intact-miscore","value":"0.56"}],
		"parameters":[{"type":"kd","value":"0","unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"A9CQL4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"1165141",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["1-159"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"A9CQL4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"20298030",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["1-159"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0016","name":"circular dichroism"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21277013"},{"db":"imex","id":"IM-15770"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig. 1F"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-3842305"},{"db":"imex","id":"IM-15770-4"}],
		"confidences":[{"type":"intact-miscore","value":"0.69"}],
		"parameters":[{"type":"kd","value":"9.0x10^(-7)","unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"O62479"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"1089678",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["181-408"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O62479"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27066107",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["181-408"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0029","name":"cosedimentation through density gradient"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"21277013"},{"db":"imex","id":"IM-15770"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig. 2D, 2F"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-3842365"},{"db":"imex","id":"IM-15770-9"}],
		"confidences":[{"type":"intact-miscore","value":"0.69"}],
		"parameters":[{"type":"kd","value":"1.1x10^(-4)","unit":"molar"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"O62479"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"pointMutations":[
				{
				"id":"2635915",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":["154-154"]
				}],
			"bindingSites":[
				{
				"id":"9989730",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["1-168"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O62479"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"pointMutations":[
				{
				"id":"24569154",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":["154-154"]
				}],
			"bindingSites":[
				{
				"id":"12944408",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["1-168"]
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
			"pubid":[{"db":"pubmed","id":"21397862"},{"db":"imex","id":"IM-15743"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig 3K."]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-3843710"},{"db":"imex","id":"IM-15743-1"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"parameters":[{"type":"kd","value":"1.0x10^(-7)","unit":"molar"}],
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
			"otherFeatures":[
				{
				"id":"23295306",
				"type":{"name":"biological feature"},
				"sequenceData":["?-?"]
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
			"pubid":[{"db":"pubmed","id":"21397862"},{"db":"imex","id":"IM-15743"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig 3K."]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-3843710"},{"db":"imex","id":"IM-15743-1"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"parameters":[{"type":"kd","value":"1.0x10^(-7)","unit":"molar"}],
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
				"id":"11104739",
				"type":{"name":"O4&apos;-phospho-L-tyrosine"},
				"sequenceData":["397-397"]
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
			"pubid":[{"db":"pubmed","id":"21397862"},{"db":"imex","id":"IM-15743"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig 3K."]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-3843710"},{"db":"imex","id":"IM-15743-1"}],
		"confidences":[{"type":"intact-miscore","value":"0.59"}],
		"parameters":[{"type":"kd","value":"1.0x10^(-7)","unit":"molar"}],
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
			"pubid":[{"db":"pubmed","id":"21397862"},{"db":"imex","id":"IM-15743"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig 3K."]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-3843710"},{"db":"imex","id":"IM-15743-1"}],
		"confidences":[{"type":"intact-miscore","value":"0.59"}],
		"parameters":[{"type":"kd","value":"1.0x10^(-7)","unit":"molar"}],
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
