var miJson = {
"data":[
	{
		"object":"interactor",
		"sequence":"MDGEDIPDFSSLKEETAYWKELSLKYKQSFQEARDELVEFQEGSRELEAELEAQLVQAEQRNRDLQADNQRLKYEVEALKEKLEHQYAQSYKQVSVLEDDLSQTRAIKEQLHKYVRELEQANDDLERAKRATIVSLEDFEQRLNQAIERNAFLESELDEKESLLVSVQRLKDEARDLRQELAVRERQQEVTRKSAPSSPTLDCEKMDSAVQASLSLPATPVGKGTENTFPSPKAIPNGFGTSPLTPSARISALNIVGDLLRKVGALESKLAACRNFAKDQASRKSYISGNVNCGVLNGNGTKFSRSGHTSFFDKGAVNGFDPAPPPPGLGSSRPSSAPGMLPLSV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9GZM8"},
		"label":"ndel1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0071","name":"molecular sieving"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"22843697"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"},
			"figures":["Fig. 2A"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-6388934"},{"db":"imex","id":"IM-18003-1"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9GZM8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"6109217",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9GZM8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"1060852",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MEDSGKTFSSEEEEANYWKDLAMTYKQRAENTQEELREFQEGSREYEAELETQLQQIETRNRDLLSENNRLRMELETIKEKFEVQHSEGYRQISALEDDLAQTKAIKDQLQKYIRELEQANDDLERAKRATIMSLEDFEQRLNQAIERNAFLESELDEKENLLESVQRLKDEARDLRQELAVQQKQEKPRTPMPSSVEAERTDTAVQATGSVPSTPIAHRGPSSSLNTPGSFRRGLDDSTGGTPLTPAARISALNIVGDLLRKVGALESKLASCRNLVYDQSPNRTGGPASGRSSKNRDGGERRPSSTSVPLGDKGLGKRLEFGKPPSHMSSSPLPSAQGVVKMLL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9NXR1"},
		"label":"nde1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0071","name":"molecular sieving"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"22843697"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"},
			"figures":["Fig. 2A"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-6388942"},{"db":"imex","id":"IM-18003-2"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9NXR1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"12337230",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9NXR1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"19001721",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0030","name":"cross-linking study"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"22843697"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"},
			"experimentModifications":["Cross-linking agent - bis(sulfosuccinimidyl)suberate (BS3)"],
			"figures":["Fig. 2B"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6389133"},{"db":"imex","id":"IM-18003-9"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9GZM8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0102","name":"sequence tag identification"}],
			"experimentalFeatures":[
				{
				"id":"24398803",
				"name":"lys-20",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["20-20"],
				"linkedFeatures":["1969002"]
				},
				{
				"id":"8356131",
				"name":"lys-25",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["25-25"],
				"linkedFeatures":["16201639"]
				},
				{
				"id":"6744512",
				"name":"ser-90",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["90-90"],
				"linkedFeatures":["8156646"]
				},
				{
				"id":"18909897",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"24616443",
				"name":"lys-108",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["108-108"],
				"linkedFeatures":["2422688"]
				},
				{
				"id":"16599097",
				"name":"lys-108",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["108-108"],
				"linkedFeatures":["9479700"]
				},
				{
				"id":"8875626",
				"name":"lys-80",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["80-80"],
				"linkedFeatures":["23196274"]
				},
				{
				"id":"24387373",
				"name":"lys-27",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["27-27"],
				"linkedFeatures":["11207603"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9GZM8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0102","name":"sequence tag identification"}],
			"experimentalFeatures":[
				{
				"id":"11207603",
				"name":"lys-27",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["27-27"],
				"linkedFeatures":["24387373"]
				},
				{
				"id":"16201639",
				"name":"lys-27",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["27-27"],
				"linkedFeatures":["8356131"]
				},
				{
				"id":"8156646",
				"name":"ser-95",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["95-95"],
				"linkedFeatures":["6744512"]
				},
				{
				"id":"2422688",
				"name":"tyr-114",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["114-114"],
				"linkedFeatures":["24616443"]
				},
				{
				"id":"25167659",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"23196274",
				"name":"lys-82",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["82-82"],
				"linkedFeatures":["8875626"]
				},
				{
				"id":"9479700",
				"name":"lys-108",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["108-108"],
				"linkedFeatures":["16599097"]
				},
				{
				"id":"1969002",
				"name":"lys-27",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["27-27"],
				"linkedFeatures":["24398803"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0030","name":"cross-linking study"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"22843697"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"},
			"experimentModifications":["Cross-linking agent - bis(sulfosuccinimidyl)suberate (BS3)"],
			"figures":["Fig. 2D, Supp. Table 2."]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6389174"},{"db":"imex","id":"IM-18003-10"}],
		"expansion":{"id":"0","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9GZM8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0102","name":"sequence tag identification"}],
			"experimentalFeatures":[
				{
				"id":"25217668",
				"name":"tyr-114",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["114-114"],
				"linkedFeatures":["7328811"]
				},
				{
				"id":"30575012",
				"name":"ser-95",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["95-95"],
				"linkedFeatures":["21666042"]
				},
				{
				"id":"8476463",
				"name":"lys-108",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["108-108"],
				"linkedFeatures":["25365361"]
				},
				{
				"id":"6568692",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"5933356",
				"name":"lys-27",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["27-27"],
				"linkedFeatures":["31701856"]
				},
				{
				"id":"2268312",
				"name":"lys-82",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["82-82"],
				"linkedFeatures":["5686888"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9GZM8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0102","name":"sequence tag identification"}],
			"experimentalFeatures":[
				{
				"id":"16504587",
				"name":"lys-27",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["27-27"],
				"linkedFeatures":["31660764"]
				},
				{
				"id":"21666042",
				"name":"ser-90",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["90-90"],
				"linkedFeatures":["30575012"]
				},
				{
				"id":"7328811",
				"name":"lys-27",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["27-27"],
				"linkedFeatures":["25217668"]
				},
				{
				"id":"25365361",
				"name":"lys-108",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["108-108"],
				"linkedFeatures":["8476463"]
				},
				{
				"id":"5686888",
				"name":"lys-80",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["80-80"],
				"linkedFeatures":["2268312"]
				},
				{
				"id":"16285230",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"31701856",
				"name":"lys-20",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["20-20"],
				"linkedFeatures":["5933356"]
				},
				{
				"id":"2362852",
				"name":"lys-108",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["108-108"],
				"linkedFeatures":["17570505"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0030","name":"cross-linking study"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"22843697"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"},
			"experimentModifications":["Cross-linking agent - bis(sulfosuccinimidyl)suberate (BS3)"],
			"figures":["Fig. 2D, Supp. Table 2."]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6389174"},{"db":"imex","id":"IM-18003-10"}],
		"expansion":{"id":"0","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9GZM8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0102","name":"sequence tag identification"}],
			"experimentalFeatures":[
				{
				"id":"25217668",
				"name":"tyr-114",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["114-114"],
				"linkedFeatures":["7328811"]
				},
				{
				"id":"30575012",
				"name":"ser-95",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["95-95"],
				"linkedFeatures":["21666042"]
				},
				{
				"id":"8476463",
				"name":"lys-108",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["108-108"],
				"linkedFeatures":["25365361"]
				},
				{
				"id":"6568692",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"5933356",
				"name":"lys-27",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["27-27"],
				"linkedFeatures":["31701856"]
				},
				{
				"id":"2268312",
				"name":"lys-82",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["82-82"],
				"linkedFeatures":["5686888"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9GZM8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0102","name":"sequence tag identification"}],
			"experimentalFeatures":[
				{
				"id":"28486839",
				"name":"tyr-114",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["114-114"],
				"linkedFeatures":["23675660"]
				},
				{
				"id":"28377067",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"24232991",
				"name":"lys-108",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["108-108"],
				"linkedFeatures":["194815"]
				},
				{
				"id":"19476327",
				"name":"lys-82",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["82-82"],
				"linkedFeatures":["15156224"]
				},
				{
				"id":"18964625",
				"name":"ser-95",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["95-95"],
				"linkedFeatures":["4903743"]
				},
				{
				"id":"7527849",
				"name":"lys-27",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["27-27"],
				"linkedFeatures":["20351662"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0030","name":"cross-linking study"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"22843697"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"},
			"experimentModifications":["Cross-linking agent - bis(sulfosuccinimidyl)suberate (BS3)"],
			"figures":["Fig. 2D, Supp. Table 2."]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6389174"},{"db":"imex","id":"IM-18003-10"}],
		"expansion":{"id":"0","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9GZM8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0102","name":"sequence tag identification"}],
			"experimentalFeatures":[
				{
				"id":"25217668",
				"name":"tyr-114",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["114-114"],
				"linkedFeatures":["7328811"]
				},
				{
				"id":"30575012",
				"name":"ser-95",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["95-95"],
				"linkedFeatures":["21666042"]
				},
				{
				"id":"8476463",
				"name":"lys-108",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["108-108"],
				"linkedFeatures":["25365361"]
				},
				{
				"id":"6568692",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"5933356",
				"name":"lys-27",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["27-27"],
				"linkedFeatures":["31701856"]
				},
				{
				"id":"2268312",
				"name":"lys-82",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["82-82"],
				"linkedFeatures":["5686888"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9GZM8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0102","name":"sequence tag identification"}],
			"experimentalFeatures":[
				{
				"id":"31660764",
				"name":"lys-29",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["29-29"],
				"linkedFeatures":["16504587"]
				},
				{
				"id":"15156224",
				"name":"lys-80",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["80-80"],
				"linkedFeatures":["19476327"]
				},
				{
				"id":"194815",
				"name":"lys-108",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["108-108"],
				"linkedFeatures":["24232991"]
				},
				{
				"id":"30071147",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"4903743",
				"name":"ser-90",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["90-90"],
				"linkedFeatures":["18964625"]
				},
				{
				"id":"23675660",
				"name":"lys-27",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["27-27"],
				"linkedFeatures":["28486839"]
				},
				{
				"id":"17570505",
				"name":"lys-113",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["113-113"],
				"linkedFeatures":["2362852"]
				},
				{
				"id":"20351662",
				"name":"lys-29",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["29-29"],
				"linkedFeatures":["7527849"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0030","name":"cross-linking study"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"22843697"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"},
			"experimentModifications":["Cross-linking agent - bis(sulfosuccinimidyl)suberate (BS3)"],
			"figures":["Fig. 2D, Supplemental Table 2"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6389059"},{"db":"imex","id":"IM-18003-8"}],
		"expansion":{"id":"1","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9NXR1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0102","name":"sequence tag identification"}],
			"experimentalFeatures":[
				{
				"id":"8925422",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"21273128",
				"name":"lys-270",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["270-270"],
				"linkedFeatures":["14993441"]
				},
				{
				"id":"989188",
				"name":"lys-315",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["315-315"],
				"linkedFeatures":["15850963"]
				},
				{
				"id":"18512484",
				"name":"lys-107",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["107-107"],
				"linkedFeatures":["22640460"]
				},
				{
				"id":"10956193",
				"name":"lys-270",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["270-270"],
				"linkedFeatures":["27579532"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9NXR1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0102","name":"sequence tag identification"}],
			"experimentalFeatures":[
				{
				"id":"8283759",
				"name":"lys-107",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["107-107"],
				"linkedFeatures":["7811027"]
				},
				{
				"id":"14993441",
				"name":"lys-107",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["107-107"],
				"linkedFeatures":["21273128"]
				},
				{
				"id":"15850963",
				"name":"lys-315",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["315-315"],
				"linkedFeatures":["989188"]
				},
				{
				"id":"14997067",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"28381140",
				"name":"lys-270",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["270-270"],
				"linkedFeatures":["25577463"]
				},
				{
				"id":"27579532",
				"name":"lys-170",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["170-170"],
				"linkedFeatures":["10956193"]
				},
				{
				"id":"22640460",
				"name":"lys-107",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["107-107"],
				"linkedFeatures":["18512484"]
				},
				{
				"id":"14592489",
				"name":"lys-107",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["107-107"],
				"linkedFeatures":["6622137"]
				},
				{
				"id":"31775330",
				"name":"lys-81",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["81-81"],
				"linkedFeatures":["29188904"]
				},
				{
				"id":"12126784",
				"name":"lys-79",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["79-79"],
				"linkedFeatures":["5243804"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0030","name":"cross-linking study"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"22843697"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"},
			"experimentModifications":["Cross-linking agent - bis(sulfosuccinimidyl)suberate (BS3)"],
			"figures":["Fig. 2D, Supplemental Table 2"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6389059"},{"db":"imex","id":"IM-18003-8"}],
		"expansion":{"id":"1","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9NXR1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0102","name":"sequence tag identification"}],
			"experimentalFeatures":[
				{
				"id":"8925422",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"21273128",
				"name":"lys-270",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["270-270"],
				"linkedFeatures":["14993441"]
				},
				{
				"id":"989188",
				"name":"lys-315",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["315-315"],
				"linkedFeatures":["15850963"]
				},
				{
				"id":"18512484",
				"name":"lys-107",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["107-107"],
				"linkedFeatures":["22640460"]
				},
				{
				"id":"10956193",
				"name":"lys-270",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["270-270"],
				"linkedFeatures":["27579532"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9NXR1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0102","name":"sequence tag identification"}],
			"experimentalFeatures":[
				{
				"id":"18683577",
				"name":"lys-270",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["270-270"],
				"linkedFeatures":["12519623"]
				},
				{
				"id":"7811027",
				"name":"lys-107",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["107-107"],
				"linkedFeatures":["8283759"]
				},
				{
				"id":"29188904",
				"name":"lys-107",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["107-107"],
				"linkedFeatures":["31775330"]
				},
				{
				"id":"31018107",
				"name":"lys-107",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["107-107"],
				"linkedFeatures":["19680331"]
				},
				{
				"id":"21303066",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"14844140",
				"name":"lys-315",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["315-315"],
				"linkedFeatures":["8259701"]
				},
				{
				"id":"6116152",
				"name":"lys-270",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["270-270"],
				"linkedFeatures":["16956201"]
				},
				{
				"id":"6622137",
				"name":"lys-112",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["112-112"],
				"linkedFeatures":["14592489"]
				},
				{
				"id":"25577463",
				"name":"lys-26",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["26-26"],
				"linkedFeatures":["28381140"]
				},
				{
				"id":"5243804",
				"name":"lys-81",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["81-81"],
				"linkedFeatures":["12126784"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0030","name":"cross-linking study"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"22843697"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"},
			"experimentModifications":["Cross-linking agent - bis(sulfosuccinimidyl)suberate (BS3)"],
			"figures":["Fig. 2D, Supplemental Table 2"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6389059"},{"db":"imex","id":"IM-18003-8"}],
		"expansion":{"id":"1","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9NXR1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0102","name":"sequence tag identification"}],
			"experimentalFeatures":[
				{
				"id":"8925422",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"21273128",
				"name":"lys-270",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["270-270"],
				"linkedFeatures":["14993441"]
				},
				{
				"id":"989188",
				"name":"lys-315",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["315-315"],
				"linkedFeatures":["15850963"]
				},
				{
				"id":"18512484",
				"name":"lys-107",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["107-107"],
				"linkedFeatures":["22640460"]
				},
				{
				"id":"10956193",
				"name":"lys-270",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["270-270"],
				"linkedFeatures":["27579532"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9NXR1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0102","name":"sequence tag identification"}],
			"experimentalFeatures":[
				{
				"id":"16956201",
				"name":"lys-107",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["107-107"],
				"linkedFeatures":["6116152"]
				},
				{
				"id":"8259701",
				"name":"lys-315",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["315-315"],
				"linkedFeatures":["14844140"]
				},
				{
				"id":"5095908",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"12519623",
				"name":"lys-170",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["170-170"],
				"linkedFeatures":["18683577"]
				},
				{
				"id":"19680331",
				"name":"lys-107",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["107-107"],
				"linkedFeatures":["31018107"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0030","name":"cross-linking study"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"22843697"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"},
			"experimentModifications":["Cross-linking agent - bis(sulfosuccinimidyl)suberate (BS3)"],
			"figures":["Fig. 2D, Supplemental Table 2"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6389028"},{"db":"imex","id":"IM-18003-7"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9NXR1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0102","name":"sequence tag identification"}],
			"experimentalFeatures":[
				{
				"id":"16016907",
				"name":"lys-107",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["107-107"],
				"linkedFeatures":["22511499"]
				},
				{
				"id":"24544119",
				"name":"lys-270",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["270-270"],
				"linkedFeatures":["28385890"]
				},
				{
				"id":"4753457",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"31804726",
				"name":"lys-315",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["315-315"],
				"linkedFeatures":["19938875"]
				},
				{
				"id":"4564624",
				"name":"lys-270",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["270-270"],
				"linkedFeatures":["12204314"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9NXR1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0102","name":"sequence tag identification"}],
			"experimentalFeatures":[
				{
				"id":"33222624",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"28385890",
				"name":"lys-107",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["107-107"],
				"linkedFeatures":["24544119"]
				},
				{
				"id":"12204314",
				"name":"lys-170",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["170-170"],
				"linkedFeatures":["4564624"]
				},
				{
				"id":"19938875",
				"name":"lys-315",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["315-315"],
				"linkedFeatures":["31804726"]
				},
				{
				"id":"22511499",
				"name":"lys-107",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["107-107"],
				"linkedFeatures":["16016907"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0030","name":"cross-linking study"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"22843697"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"},
			"experimentModifications":["Cross-linking agent - bis(sulfosuccinimidyl)suberate (BS3)"],
			"figures":["Fig. 6, Supp. Table 2"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6389311"},{"db":"imex","id":"IM-18003-11"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9NXR1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0102","name":"sequence tag identification"}],
			"experimentalFeatures":[
				{
				"id":"26898337",
				"name":"lys-107",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["107-107"],
				"linkedFeatures":["1497550"]
				},
				{
				"id":"3499912",
				"name":"lys-170",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["170-170"],
				"linkedFeatures":["2104341"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9GZM8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0102","name":"sequence tag identification"}],
			"experimentalFeatures":[
				{
				"id":"1497550",
				"name":"lys-108",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["108-108"],
				"linkedFeatures":["26898337"]
				},
				{
				"id":"2104341",
				"name":"lys-17",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["17-17"],
				"linkedFeatures":["3499912"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0030","name":"cross-linking study"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"22843697"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"},
			"experimentModifications":["Cross-linking agent - bis(sulfosuccinimidyl)suberate (BS3)"],
			"figures":["Fig. 6 and Supp Table 2"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6389324"},{"db":"imex","id":"IM-18003-12"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9NXR1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0102","name":"sequence tag identification"}],
			"experimentalFeatures":[
				{
				"id":"1296016",
				"name":"ser-196",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["196-196"],
				"linkedFeatures":["5320594"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9GZM8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0102","name":"sequence tag identification"}],
			"experimentalFeatures":[
				{
				"id":"5320594",
				"name":"lys-108",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["108-108"],
				"linkedFeatures":["1296016"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0067","name":"light scattering"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"22843697"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"},
			"figures":["Fig. 2B"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-6388959"},{"db":"imex","id":"IM-18003-4"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9GZM8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"664745",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9GZM8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"32310138",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0067","name":"light scattering"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"22843697"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"},
			"figures":["Fig. 2B"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-6388957"},{"db":"imex","id":"IM-18003-3"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9NXR1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"25130481",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9NXR1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"experimentalFeatures":[
				{
				"id":"18361405",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0808","name":"comigration in sds page"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"22843697"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"},
			"figures":["Fig. 2B"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-6388989"},{"db":"imex","id":"IM-18003-6"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9GZM8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0102","name":"sequence tag identification"}],
			"experimentalFeatures":[
				{
				"id":"27899335",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9GZM8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0102","name":"sequence tag identification"}],
			"experimentalFeatures":[
				{
				"id":"14498673",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0808","name":"comigration in sds page"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"22843697"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"},
			"figures":["Fig. 2D"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-6388987"},{"db":"imex","id":"IM-18003-5"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9NXR1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0102","name":"sequence tag identification"}],
			"experimentalFeatures":[
				{
				"id":"6922544",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9NXR1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0102","name":"sequence tag identification"}],
			"experimentalFeatures":[
				{
				"id":"13995499",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				}]
		}
	}
	]
};
