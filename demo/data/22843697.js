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
				"id":"33283106",
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
				"id":"508872",
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
				"id":"17332007",
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
				"id":"13033086",
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
				"id":"33098950",
				"name":"lys-20",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["20-20"],
				"linkedFeatures":["28686303"]
				},
				{
				"id":"20623910",
				"name":"lys-25",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["25-25"],
				"linkedFeatures":["8779536"]
				},
				{
				"id":"18834883",
				"name":"ser-90",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["90-90"],
				"linkedFeatures":["5378795"]
				},
				{
				"id":"5771475",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"28882394",
				"name":"lys-108",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["108-108"],
				"linkedFeatures":["27991800"]
				},
				{
				"id":"25058784",
				"name":"lys-108",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["108-108"],
				"linkedFeatures":["21312104"]
				},
				{
				"id":"32529916",
				"name":"lys-80",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["80-80"],
				"linkedFeatures":["27943930"]
				},
				{
				"id":"25811435",
				"name":"lys-27",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["27-27"],
				"linkedFeatures":["21105531"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9GZM8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0102","name":"sequence tag identification"}],
			"experimentalFeatures":[
				{
				"id":"21105531",
				"name":"lys-27",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["27-27"],
				"linkedFeatures":["25811435"]
				},
				{
				"id":"8779536",
				"name":"lys-27",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["27-27"],
				"linkedFeatures":["20623910"]
				},
				{
				"id":"5378795",
				"name":"ser-95",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["95-95"],
				"linkedFeatures":["18834883"]
				},
				{
				"id":"27991800",
				"name":"tyr-114",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["114-114"],
				"linkedFeatures":["28882394"]
				},
				{
				"id":"16774241",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"27943930",
				"name":"lys-82",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["82-82"],
				"linkedFeatures":["32529916"]
				},
				{
				"id":"21312104",
				"name":"lys-108",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["108-108"],
				"linkedFeatures":["25058784"]
				},
				{
				"id":"28686303",
				"name":"lys-27",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["27-27"],
				"linkedFeatures":["33098950"]
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
				"id":"12280348",
				"name":"tyr-114",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["114-114"],
				"linkedFeatures":["2498225"]
				},
				{
				"id":"11078677",
				"name":"ser-95",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["95-95"],
				"linkedFeatures":["5787035"]
				},
				{
				"id":"21955192",
				"name":"lys-108",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["108-108"],
				"linkedFeatures":["2832603"]
				},
				{
				"id":"27376693",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"21712083",
				"name":"lys-27",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["27-27"],
				"linkedFeatures":["10531150"]
				},
				{
				"id":"30979258",
				"name":"lys-82",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["82-82"],
				"linkedFeatures":["4274144"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9GZM8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0102","name":"sequence tag identification"}],
			"experimentalFeatures":[
				{
				"id":"29061639",
				"name":"lys-27",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["27-27"],
				"linkedFeatures":["20666788"]
				},
				{
				"id":"5787035",
				"name":"ser-90",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["90-90"],
				"linkedFeatures":["11078677"]
				},
				{
				"id":"2498225",
				"name":"lys-27",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["27-27"],
				"linkedFeatures":["12280348"]
				},
				{
				"id":"2832603",
				"name":"lys-108",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["108-108"],
				"linkedFeatures":["21955192"]
				},
				{
				"id":"4274144",
				"name":"lys-80",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["80-80"],
				"linkedFeatures":["30979258"]
				},
				{
				"id":"24788324",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"10531150",
				"name":"lys-20",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["20-20"],
				"linkedFeatures":["21712083"]
				},
				{
				"id":"5534212",
				"name":"lys-108",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["108-108"],
				"linkedFeatures":["625865"]
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
				"id":"12280348",
				"name":"tyr-114",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["114-114"],
				"linkedFeatures":["2498225"]
				},
				{
				"id":"11078677",
				"name":"ser-95",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["95-95"],
				"linkedFeatures":["5787035"]
				},
				{
				"id":"21955192",
				"name":"lys-108",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["108-108"],
				"linkedFeatures":["2832603"]
				},
				{
				"id":"27376693",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"21712083",
				"name":"lys-27",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["27-27"],
				"linkedFeatures":["10531150"]
				},
				{
				"id":"30979258",
				"name":"lys-82",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["82-82"],
				"linkedFeatures":["4274144"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9GZM8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0102","name":"sequence tag identification"}],
			"experimentalFeatures":[
				{
				"id":"16377156",
				"name":"tyr-114",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["114-114"],
				"linkedFeatures":["3871080"]
				},
				{
				"id":"32764716",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"14814010",
				"name":"lys-108",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["108-108"],
				"linkedFeatures":["5187048"]
				},
				{
				"id":"4310894",
				"name":"lys-82",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["82-82"],
				"linkedFeatures":["9185732"]
				},
				{
				"id":"663779",
				"name":"ser-95",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["95-95"],
				"linkedFeatures":["16071688"]
				},
				{
				"id":"3684842",
				"name":"lys-27",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["27-27"],
				"linkedFeatures":["23223512"]
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
				"id":"12280348",
				"name":"tyr-114",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["114-114"],
				"linkedFeatures":["2498225"]
				},
				{
				"id":"11078677",
				"name":"ser-95",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["95-95"],
				"linkedFeatures":["5787035"]
				},
				{
				"id":"21955192",
				"name":"lys-108",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["108-108"],
				"linkedFeatures":["2832603"]
				},
				{
				"id":"27376693",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"21712083",
				"name":"lys-27",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["27-27"],
				"linkedFeatures":["10531150"]
				},
				{
				"id":"30979258",
				"name":"lys-82",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["82-82"],
				"linkedFeatures":["4274144"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9GZM8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0102","name":"sequence tag identification"}],
			"experimentalFeatures":[
				{
				"id":"20666788",
				"name":"lys-29",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["29-29"],
				"linkedFeatures":["29061639"]
				},
				{
				"id":"9185732",
				"name":"lys-80",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["80-80"],
				"linkedFeatures":["4310894"]
				},
				{
				"id":"5187048",
				"name":"lys-108",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["108-108"],
				"linkedFeatures":["14814010"]
				},
				{
				"id":"12420432",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"16071688",
				"name":"ser-90",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["90-90"],
				"linkedFeatures":["663779"]
				},
				{
				"id":"3871080",
				"name":"lys-27",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["27-27"],
				"linkedFeatures":["16377156"]
				},
				{
				"id":"625865",
				"name":"lys-113",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["113-113"],
				"linkedFeatures":["5534212"]
				},
				{
				"id":"23223512",
				"name":"lys-29",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["29-29"],
				"linkedFeatures":["3684842"]
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
				"id":"32416703",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"4229371",
				"name":"lys-270",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["270-270"],
				"linkedFeatures":["14761695"]
				},
				{
				"id":"31906648",
				"name":"lys-315",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["315-315"],
				"linkedFeatures":["21655918"]
				},
				{
				"id":"6105585",
				"name":"lys-107",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["107-107"],
				"linkedFeatures":["7121439"]
				},
				{
				"id":"1380565",
				"name":"lys-270",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["270-270"],
				"linkedFeatures":["17054220"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9NXR1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0102","name":"sequence tag identification"}],
			"experimentalFeatures":[
				{
				"id":"8330659",
				"name":"lys-107",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["107-107"],
				"linkedFeatures":["24311330"]
				},
				{
				"id":"14761695",
				"name":"lys-107",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["107-107"],
				"linkedFeatures":["4229371"]
				},
				{
				"id":"21655918",
				"name":"lys-315",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["315-315"],
				"linkedFeatures":["31906648"]
				},
				{
				"id":"8217641",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"3858905",
				"name":"lys-270",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["270-270"],
				"linkedFeatures":["29460831"]
				},
				{
				"id":"17054220",
				"name":"lys-170",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["170-170"],
				"linkedFeatures":["1380565"]
				},
				{
				"id":"7121439",
				"name":"lys-107",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["107-107"],
				"linkedFeatures":["6105585"]
				},
				{
				"id":"18999022",
				"name":"lys-107",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["107-107"],
				"linkedFeatures":["12597182"]
				},
				{
				"id":"25926747",
				"name":"lys-81",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["81-81"],
				"linkedFeatures":["12986231"]
				},
				{
				"id":"21562467",
				"name":"lys-79",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["79-79"],
				"linkedFeatures":["12520063"]
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
				"id":"32416703",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"4229371",
				"name":"lys-270",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["270-270"],
				"linkedFeatures":["14761695"]
				},
				{
				"id":"31906648",
				"name":"lys-315",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["315-315"],
				"linkedFeatures":["21655918"]
				},
				{
				"id":"6105585",
				"name":"lys-107",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["107-107"],
				"linkedFeatures":["7121439"]
				},
				{
				"id":"1380565",
				"name":"lys-270",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["270-270"],
				"linkedFeatures":["17054220"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9NXR1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0102","name":"sequence tag identification"}],
			"experimentalFeatures":[
				{
				"id":"4870047",
				"name":"lys-270",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["270-270"],
				"linkedFeatures":["11635287"]
				},
				{
				"id":"24311330",
				"name":"lys-107",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["107-107"],
				"linkedFeatures":["8330659"]
				},
				{
				"id":"12986231",
				"name":"lys-107",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["107-107"],
				"linkedFeatures":["25926747"]
				},
				{
				"id":"32607616",
				"name":"lys-107",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["107-107"],
				"linkedFeatures":["25234962"]
				},
				{
				"id":"29546523",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"16381527",
				"name":"lys-315",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["315-315"],
				"linkedFeatures":["10222199"]
				},
				{
				"id":"5821013",
				"name":"lys-270",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["270-270"],
				"linkedFeatures":["22611487"]
				},
				{
				"id":"12597182",
				"name":"lys-112",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["112-112"],
				"linkedFeatures":["18999022"]
				},
				{
				"id":"29460831",
				"name":"lys-26",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["26-26"],
				"linkedFeatures":["3858905"]
				},
				{
				"id":"12520063",
				"name":"lys-81",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["81-81"],
				"linkedFeatures":["21562467"]
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
				"id":"32416703",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"4229371",
				"name":"lys-270",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["270-270"],
				"linkedFeatures":["14761695"]
				},
				{
				"id":"31906648",
				"name":"lys-315",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["315-315"],
				"linkedFeatures":["21655918"]
				},
				{
				"id":"6105585",
				"name":"lys-107",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["107-107"],
				"linkedFeatures":["7121439"]
				},
				{
				"id":"1380565",
				"name":"lys-270",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["270-270"],
				"linkedFeatures":["17054220"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9NXR1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0102","name":"sequence tag identification"}],
			"experimentalFeatures":[
				{
				"id":"22611487",
				"name":"lys-107",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["107-107"],
				"linkedFeatures":["5821013"]
				},
				{
				"id":"10222199",
				"name":"lys-315",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["315-315"],
				"linkedFeatures":["16381527"]
				},
				{
				"id":"27334754",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"11635287",
				"name":"lys-170",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["170-170"],
				"linkedFeatures":["4870047"]
				},
				{
				"id":"25234962",
				"name":"lys-107",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["107-107"],
				"linkedFeatures":["32607616"]
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
				"id":"21493734",
				"name":"lys-107",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["107-107"],
				"linkedFeatures":["31739368"]
				},
				{
				"id":"28766901",
				"name":"lys-270",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["270-270"],
				"linkedFeatures":["33054065"]
				},
				{
				"id":"12506339",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"9079461",
				"name":"lys-315",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["315-315"],
				"linkedFeatures":["26501157"]
				},
				{
				"id":"3424467",
				"name":"lys-270",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["270-270"],
				"linkedFeatures":["9168116"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9NXR1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0102","name":"sequence tag identification"}],
			"experimentalFeatures":[
				{
				"id":"6585231",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				},
				{
				"id":"33054065",
				"name":"lys-107",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["107-107"],
				"linkedFeatures":["28766901"]
				},
				{
				"id":"9168116",
				"name":"lys-170",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["170-170"],
				"linkedFeatures":["3424467"]
				},
				{
				"id":"26501157",
				"name":"lys-315",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["315-315"],
				"linkedFeatures":["9079461"]
				},
				{
				"id":"31739368",
				"name":"lys-107",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["107-107"],
				"linkedFeatures":["21493734"]
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
				"id":"15476751",
				"name":"lys-107",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["107-107"],
				"linkedFeatures":["3809131"]
				},
				{
				"id":"31772114",
				"name":"lys-170",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["170-170"],
				"linkedFeatures":["8691499"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9GZM8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0102","name":"sequence tag identification"}],
			"experimentalFeatures":[
				{
				"id":"3809131",
				"name":"lys-108",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["108-108"],
				"linkedFeatures":["15476751"]
				},
				{
				"id":"8691499",
				"name":"lys-17",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["17-17"],
				"linkedFeatures":["31772114"]
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
				"id":"15590193",
				"name":"ser-196",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["196-196"],
				"linkedFeatures":["31381159"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9GZM8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0102","name":"sequence tag identification"}],
			"experimentalFeatures":[
				{
				"id":"31381159",
				"name":"lys-108",
				"type":{"id":"MI:0912","name":"spdp cross linker"},
				"sequenceData":["108-108"],
				"linkedFeatures":["15590193"]
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
				"id":"14588149",
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
				"id":"795449",
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
				"id":"14459493",
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
				"id":"19506621",
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
				"id":"15920889",
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
				"id":"19352334",
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
				"id":"11575141",
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
				"id":"28357563",
				"name":"n-terminal",
				"type":{"id":"MI:0521","name":"his tag"},
				"sequenceData":["n-n"]
				}]
		}
	}
	]
};