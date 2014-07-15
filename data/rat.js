var miJson = {
"data":[
	{
		"object":"interactor",
		"sequence":"MAQAGRTGYDNREIVMKYIHYKLSQRGYEWDTGDEDSAPLRAAPTPGIFSFQPESNRTPAVHRDTAARTSPLRPLVANAGPALSPVPPVVHLTLRRAGDDFSRRYRRDFAEMSSQLHLTPFTARGRFATVVEELFRDGVNWGRIVAFFEFGGVMCVESVNREMSPLVDNIALWMTEYLNRHLHTWIQDNGGWDAFVELYGPSMRPLFDFSWLSLKTLLSLALVGACITLGAYLGHK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P49950"},
		"label":"bcl2_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-783112"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49950"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P49950"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGTPKQPSLAPAHALGLRKSDPGIRSLGSDAGGRRWRPAAQSMFQIPEFEPSEQEDASTTDRGLGPSLTEDQPGPYLAPGLLGSIVQQQPGQAANNSHHGGAGTMETRSRHSSYPAGTEEDEGMEEELSPFRGRSRSAPPNLWAAQRYGRELRRMSDEFEGSFKGLPRPKSAGTATQMRQSASWTRIIQSWWDRNLGKGGSTPSQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"O35147"},
		"label":"bad_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-783165"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"O35147"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"9569670",
				"name":"bcl2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["11052764"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P49950"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11052764",
				"name":"bad binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["9569670"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSQSNRELVVDFLSYKLSQKGYSWSQFSDVEENRTEAPEETEPERETPSAINGNPSWHLADSPAVNGATGHSSSLDAREVIPMAAVKQALREAGDEFELRYRRAFSDLTSQLHITPGTAYQSFEQVVNELFRDGVNWGRIVAFFSFGGALCVESVDKEMQVLVSRIASWMATYLNDHLEPWIQENGGWDTFVDLYGNNAAAESRKGQERFNRWFLTGMTVAGVVLLGSLFSRK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P53563-1"},
		"label":"p53563-1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-783372"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P53563-1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"6478273",
				"name":"bad binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["29770871"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O35147"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"29770871",
				"name":"bcl2l1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["6478273"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDSEVSNGSGLGAEHITNLLVFGFLRNNDRDFHQELEVLGQELPVQVYLEGDREDELQTDGSRASRSFYHGRIEPDSESQDEVIHNIARHLAQAGDELDHSIQPTLVRQLAAQFMNGSLSEEDKRNCLAKALDEVKTSFPRDMENDKAMLIMTMLLAKKVASHAPSLLRDVFRTTVNFINQNLFSYVRDLVRNEMD",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q9JLT6"},
		"label":"bid_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-783391"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49950"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9JLT6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAKQPSDVNSECDREGGQLQPAERPPQLRPGAPTSLQTESQGNPDGEGDRCPHGSPQGPLAPPASPGPFATRSPLFIFVRRSSLLSRSSSGYFSFDTDRSPAPMSCDKSTQTPSPPCQAFNHYLSAMASIRQSQEEPEDLRPEIRIAQELRRIGDEFNETYTRRAFANDYREAEDHPQMVILQLLRFIFRLVWRRH",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"O88498"},
		"label":"b2l11_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-783432"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P53563-1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"28910122",
				"name":"bcl2l11 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["24251622"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O88498"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"24251622",
				"name":"bcl2l1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["28910122"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MARARQEGSSPEPVEGLARDSPRPFPLGRLMPSAVSCGLCEPGLPAAPAAPALLPAAYLCAPTAPPAVTAALGGPRWPGGHRSRPRGPRPDGPQPSLSPAQQHLESPVPSAPEALAGGPTQAAPGVRVEEEEWAREIGAQLRRMADDLNAQYERRRQEEQHRHRPSPWRVMYNLFMGLLPLPRDPGAPEMEPN",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q80ZG6"},
		"label":"bbc3_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-822366"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49950"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11340345",
				"name":"bbc3 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["8020237"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q80ZG6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"8020237",
				"name":"bcl2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["11340345"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-822389"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P53563-1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P49950"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDGSGEQLGGGGPTSSEQIMKTGAFLLQGFIQDRAGRMAGETPELTLEQPPQDASTKKLSECLRRIGDELDSNMELQRMIADVDTDSPREVFFRVAADMFADGNFNWGRVVALFYFASKLVLKALCTKVPELIRTIMGWTLDFLRERLLVWIQDQGGWDGLLSYFGTPTWQTVTIFVAGVLTASLTIWKKMG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q63690"},
		"label":"bax_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-822435"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q63690"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q63690"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MASGQGPGPPKGDCDEALSASEQQVAQDTEEVFRSYVFYLHQQEQETQGAAAPANPEMDNLSLEPNSVLGQVGRQLALIGDDINRRYDTEFQNLLEQLQPTAGNAYELFTKIASSLFKSGISWGRVVALLGFGYRLALYVYQRGLTGFLGQVTCFLADIILHHYIARWIAQRGGWVAALSLRRDPILSVVVIFGVVLLGQFVVHRFFRS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q9JK59"},
		"label":"q9jk59_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-822472"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9JK59"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9JK59"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-822480"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"O88498"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"7981795",
				"name":"bcl2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["32967074"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P49950"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32967074",
				"name":"bcl2l11 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["7981795"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-822526"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P53563-1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26844659",
				"name":"bid binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["5305794"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9JLT6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"5305794",
				"name":"bcl2l11 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["26844659"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSREMGELTQTRLQKIWIPHSSSSSVLQRRRGSSIPQFTNSPTMVIMVGLPARGKTYISTKLTRYLNWIGTPTKVFNLGQYRREAVSYRNYEFFRPDNTEAQLIRKQCALAALKDVHKYLSREEGHVAVFDATNTTRERRSLILQFAKEHGYKVFFIESICNDPEIIAENIKQVKLGSPDYIDCDQEKVLEDFLKRIECYEINYQPLDEELDSHLSYIKIFDVGTRYMVNRVQDHVQSRTAYYLMNIHVTPRSIYLCRHGESELNLRGRIGGDSGLSARGKQYAYALANFIRSQGISSLKVWTSHMKRTIQTAEALGVPYEQWKALNEIDAGVCEEMTYEEIQEHYPEEFALRDQDKYRYRYPKGESYEDLVQRLEPVIMELERQENVLVICHQAVMRCLLAYFLDKSSDELPYLKCPLHTVLKLTPVAYGCRVESIYLNVEAVNTHRDKPENVDITREAEEALDTVPAHY",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P07953"},
		"label":"f261_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"3.1.3.46"},{"db":"intact","id":"EBI-822569"},{"db":"intenz","id":"2.7.1.105"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P07953"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"20364217",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P07953"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"6193605",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSENSTFSTEDSSSSSYKPHASNLRRAGKKCSWASYMTNSPTLIVMIGLPARGKTYVSKKLTRYLNWIGVPTKVFNLGVYRREAVKSYKSYDFFRHDNEEAMKIRKQCALVALEDVKAYFTEESGQIAVFDATNTTRERRDMILNFAKQNAFKVFFVESVCDDPDVIAANILEVKVSSPDYPERNRENVMEDFLKRIECYKVTYQPLDPDNYDKDLSFIKVMNVGQRFLVNRVQDYIQSKIVYYLMNIHVHPRTIYLCRHGESEFNLLGKIGGDSGLSLRGKQFAQALKKFLEEQEIQDLKVWTSQLKRTIQTAESLGVTYEQWKILNEIDAGVCEEMTYSEIEQRYPEEFALRDQEKYLYRYPGGESYQDLVQRLEPVIMELERQGNVLVISHQAVMRCLLAYFLDKGADELPYLRCPLHIIFKLTPVAYGCKVETITLNVEAVDTHRDKPTHNFPKSQTPVRMRRNSFTPLSSSNTIRRPRNYSVGSRPLKPLSPLRALDMQEGADQPKTQVQQGSAQATEHLQKALEFANGHREVENVLAKHRRPSMASLTLLS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q9JJH5"},
		"label":"f262_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"3.1.3.46"},{"db":"intact","id":"EBI-822625"},{"db":"intenz","id":"2.7.1.105"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9JJH5"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9JJH5"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MPLELTQSRVQKIWVPVDHRPSLPRSCGPKLTNSPTVIVMVGLPARGKTYISKKLTRYLNWIGVPTKVFNVGEYRREAVKQYSSYNFFRPDNEEAMRVRKQCALAALRDVKSYLTKEGGQIAVFDATNTTRERRHMILHFAKENDFKAFFIESVCDDPTVVASNIMEVKISSPDYKDCNSAEAMDDFMKRINCYEASYQPLDPDKCDRDLSFIKVIDVGRRFLVNRVQDHIQSRIVYYLMNIHVQPRTIYLCRHGENEYNVQGKIGGDSGLSSRGKKFANALSKFVEEQNLKDLRVWTSQLKSTIQTAEALRLPYEQWKALNEIDAGVCEELTYEEIRDTYPEEYALREQDKYYYRYPTGESYQDLVQRLEPVIMELERQENVLVICHQAVLRCLLAYFLDKSAEEMPYLKCPLHTVLKLTPVAYGCRVESIYLNVESVSTHRERSEAVKIQHFASVVRPSSYTELDFLSVESAKQDAKKGPNPLMRRNSVTPLASPEPTKKPRINSFEEHVASTSAALPSCLPPEVPTQLPGQPLLGKACLRTVCHIFSKFSPY",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"O35552"},
		"label":"f263_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"3.1.3.46"},{"db":"intact","id":"EBI-822660"},{"db":"intenz","id":"2.7.1.105"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"O35552"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"10076996",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O35552"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"14868252",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MASPRELTQNPLKKIWMPYSNGRPALHASQRGVCMTNCPTLIVMVGLPARGKTYISKKLTRYLNWIGVPTREFNVGQYRRDMVKTYKSFEFFLPDNEEGLKIRKQCALAALNDVRKFLSEEGGHVAVFDATNTTRERRAMIFNFGEQNGYKTFFVESICVDPEVIAANIVQVKLGSPDYVNRDSDEATEDFMRRIECYENSYESLDEEQDRDLSYIKIMDVGQSYVVNRVADHIQSRIVYYLMNIHVTPRSIYLCRHGESELNLKGRIGGDPGLSPRGREFSKHLAQFISDQNIKDLKVWTSQMKRTIQTAEALSVPYEQWKVLNEIDAGVCEEMTYEEIQDHYPLEFALRDQDKYRYRYPKGESYEDLVQRLEPVIMELERQENVLVICHQAVMRCLLAYFLDKAAEELPYLKCPLHTVLKLTPVAYGCKVESIFLNVAAVNTHRDRPQNVDISRPSEEALVTVPAHQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P25114"},
		"label":"f264_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"3.1.3.46"},{"db":"intact","id":"EBI-822703"},{"db":"wwpdb","id":"1BIF"},{"db":"intenz","id":"2.7.1.105"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P25114"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"10872920",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P25114"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"3742458",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSEWESYYKTEGEEEEEEEQSPDTNGEYKYSGRDSLIFLVDASRAMFESQGEDELTPFDMSIQCIQSVYTSKIISSDRDLLAVVFYGTEKDKNSVNFKSIYVLQDLDNPGAKRVLELDRFKGQQGKKHFRDTIGHGSDYSLSEVLWVCANLFSDVQFKMSHKRIMLFTNEDDPHGNDSAKASRARTKASDLRDTGIFLDLMHLKKRGGFDVSLFYRDIISIAEDEDLGVHFEESSKLEDLLRKVRAKETKKRVLSRLKFKLGKDVALMVGVYNLVQKANKPFPVRLYRETNEPVKTKTRTFNVNTGSLLLPSDTKRSLTFGTRQIVLEKEETEELKRFDEPGLILMGFKPMVMLKNHHYLRPSLFLYPEESLVNGSSTLFSALLTKCVEKEVIAVCRYTARKNVSPYFVALVPQEEELDDQNIQVTPAGFQLVFLPYADDKRKVPFTEKVMANPEQIDKMKAIVQKLRFTYRSDSFENPVLQQHFRNLEALALDMMESEQVVDLTLPKVEAIKKRLGSLADEFKELVYPPGYNPEGKIAKRKADNEGSASKKPKVELSEEELKDLFAKGTLGKLTVPALRDICKAYGLKSGPKKQELLEALSRHLEKN",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q6AZ64"},
		"label":"q6az64_rat"
	},
	{
		"object":"interactor",
		"sequence":"MAWSGNKAAVVLCMDVGVAMGNSFPGEESPLEQAKKVMTMFVQRQVFSESKDEIALVLYGTESTDNALAGKDQYQNITVHRHLMLPDFDLLEDIGNKIQPSSQQADFLDALIVCMDLIQRETIGKKFGKKHIEVFTDLSSPFSQDQLDIIICNLKKSGISLQFFLPFPIDKNGEPGETEDHDSSFDHCAPSFPQKGLTEQQKEGIHMVTRVMLSLEGKDGLDEIYSFSESLQQLCIFKKIERRSLPWPCQLTIGPNLSIRIVAYKSIVQEKFKKSWVVVDARTLKKEDIQKETVYCLNDDDETEVSKEDTIQGFRYGSDIIPFSKVDEEQMKYKSEGKCFSVLGFCKSSQVHRRFFMGHQVLKVFAAKDDEAAAVALSSLVHALDELNMVAIVRYAYDKRANPQVGVAFPFIKDAYECLVYVQLPFMEDLRQYMFSSLKNNKKCTPTEAQLSAIDDLIDSMSLVKKNEEEDIIEDLFPTSKIPNPEFQRLYQCLLHRALHLQERLPPIQQHILNMLDPPTEMKAKCEIPLSKVKTLFPLTEVVKKKDQVTAQDVFQDNIEEGPAAKKYKTEKEEGHISISSLAEGNVTKVGSVNPVENFRVLVRQKIASFEEASLQLMSHIEQFLDTNETLYFMKSMDRIKALREEAIQFSEEQRFNSFLEGLREKVEIKQLNHFWEIVVQDGITLITKDESPGSSVTAEEATKFLTPKDKAKEDTTGLEEGGDVDDLLDMI",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q6P7P8"},
		"label":"q6p7p8_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-822856"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q6AZ64"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"18491844",
				"name":"xrcc5 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["377-481"],
				"linkedFeatures":["11284623"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q6P7P8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11284623",
				"name":"xrcc6 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["375-503"],
				"linkedFeatures":["18491844"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MTHEEHHEAKTLGIGKAIAVLTSGGDAQGMNATVRAVVRVGIFTGLRVFFVHEGYQGLVDGGEHIREATWESVSMMLQLGGTVIGSARCKDFREREGRLRAAHNLVKRGITNLCVIGGDGSLTGADTFRSEWSDLLNDLQKDGKITAEERTKSSYLNIVFLVGSIDNDFCGTDMTIGTDSALHRIVEIVDAITTTAQSHQRTFVLEVMGRHCGYLALVTSLSCGADWVFIPECPPDDDWEEHLCRRLSETRTRGSRLNIIIVAEGAIDKNGKPITSEDIKNLVVKRLGYDTRVTVLGHVQRGGTPSAFDRILGSRMGVEAVMALLEGTPDTPACVVSLSGNTAVRLPLMECVQVTKDVTKAMDEKRFDEAIKLRGRSFMNNWEVYKLLAHVRPPVSKGGLHTVAVMNVGAPAAGMNAAVRSTVRIGLIQGNRVLVVHDGFEGLAKGQIEEAGWSYVGGWTGQGGSKLGTKRTLPKKNLEQISANITKYNIQGLVIIGGFEAYTGGLELMEGRKQFDELCIPFVVIPATVSNNVPGSDFSIGADTALNTICTTCDRIKQSAAGTKRRVFIIETMGGYCGYLATMAGLAAGADAAYIFEEPFTIRDLQVNVEHLVQKMKTTVKRGLVLRNEKCNENYTTDFIFNLYSEEGKGIFDSRKNVLGHMQQGGNPTPFDRNFATKMGAKATNWMSGKIKESYRNGRIFANTPDSGCVLGMRKRALVFQPVTELKDQTDFEHRIPKEQWWLKLRPILKILAKYEIDLDTSDHAHLEHISRKRSGEAAV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P47858"},
		"label":"k6pf_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.7.1.11"},{"db":"intact","id":"EBI-822887"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P47858"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P47858"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MATVDLEKLRMSGAGKAIGVLTSGGDAQGMNAAVRAVTRMGIYVGAKVFLIYEGYEGLVEGGENIKPANWLSVSNIIQLGGTIIGSARCKAFTTREGRLAAAYNLLQHGITNLCVIGGDGSLTGANIFRNEWGSLLEELVKEGKISESTAQNYAHLSIAGLVGSIDNDFCGTDMTIGTDSALHRIMEVIDAITTTAQSHQRTFVLEVMGRHCGYLALVSALASGADWLFIPEAPPEDGWENFMCERLGETRSRGSRLNIIIIAEGAIDRHGKPISSSYVKDLVVQRLGFDTRVTVLGHVQRGGTPSAFDRVLSSKMGMEAVMALLEATPDTPACVVSLSGNQSVRLPLMECVQVTKDVQKAMDEKRFDEAIQLRGRSFENNWKIYKLLAHQKVSKEKSNFSLAILNVGAPAAGMNAAVRSAVRTGISEGHTVYVVHDGFEGLAKGQVQEVGWHDVAGWLGRGGSMLGTKRTLPKPHLEAIVENLRTYNIHALLVIGGFEAYEGVLQLVEARGRYEELCIVMCVIPATISNNVPGTDFSLGSDTAVNAAMESCDRIKQSASGTKRRVFIVETMGGYCGYLATVTGIAVGADAAYVFEDPFNIHDLKANVEHMTEKMKTDIQRGLVLRNEKCHEHYTTEFLYNLYSSEGRGVFDCRTNVLGHLQQGGAPTPFDRNYGTKLGVKAMLWMSEKLRDVYRKGRVFANAPDSACVIGLRKKVVAFSSVTELKKETDFEHRMPREQWWLNLRLMLKMLAHYRISMADYVSGELEHVTRRTLSIDKGF",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P30835"},
		"label":"k6pl_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.7.1.11"},{"db":"intact","id":"EBI-822916"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P30835"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P30835"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSDQDSSTSSTSFPKYLEHLSGDGKAIGVLTSGGDAQGMNAAVRAVVRMGIYTGAKVYFIYEGYQGMVDGGSNIVEAKWECVSSILQVGGTIIGSARCQAFRSREGRLKAACNLVRLGITNLCVIGGDGSLTGANLFRKEWSGLLEELAKNGEIDSDTVKKHAYLNVVGMVGSIDNDFCGTDMTIGTDSALHRIIEVVDAIMTTAQSHQRTFVLEVMGRHCGYLALVSALACGADWVFLPESPPEEGWEEEMCLKLSENRARKKRLNIIIVSEGAIDTQNKPITSEKIKELVVTNLGFDTRVTILGHVQRGGTPSAFDRILASRMGVEAVLALLEATPETPACVVSLRGNQAVRLPLMECVQMTQDVQKAMDERRFDEAVKLRGRSFEGNLNTYKRLAIKEPDDKIPKSNCNVAIINVGAPAAGMNAAVRSAVRVGIAEGHKMFAIYDGFDGLANGQIKEIGWGDVGGWTGQGGSILGTKRTLPGKYLEKIAEQMHSKNINALLIIGGFEAYLGLLELAAARNKHEAFCVPMVMVPATVSNNVPGSDFSIGADTALNTITDTCDRIKQSASGTKRRVFIIETMGGYCGYLANMGGLAAGADAAYIFEEQFDIRDLQSNVMHLTEKMKTSIQRGLVLRNENCSVNYTTDFIYQLYSEEGKGVFDCRKNVLGHMQQGGAPSPFDRNFGTKISAKAMEWISAKLKGSHGTGKKFVSDDSICVLGIQKRDLLFKPVAELRKATDFEHRIPKQQWWLKLRPIMKILAKYEASYDMSDVGKLEPVHNHGELSAI",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P47860"},
		"label":"k6pp_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.7.1.11"},{"db":"intact","id":"EBI-823015"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P47860"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P47860"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.7.1.11"},{"db":"intact","id":"EBI-846915"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P47858"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11018114",
				"name":"pfkl binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["28086833"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P30835"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"28086833",
				"name":"pfkm binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["11018114"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.7.1.11"},{"db":"intact","id":"EBI-846927"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P30835"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11660427",
				"name":"pfkm binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["18928506"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P47858"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"18928506",
				"name":"pfkl binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["11660427"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.7.1.11"},{"db":"intact","id":"EBI-846939"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P47858"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"1837000",
				"name":"pfkl binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["4394442"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P30835"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"4394442",
				"name":"pfkm binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1837000"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MEDYIKIEKIGEGTYGVVYKGRHRTTGQIVAMKKIRLESEEEGVPSTAIREISLLKELRHPNIVSLQDVLMQDSRLYLIFEFLSMDLKKYLDSIPPGQFMDSSLVKSYLYQILQGIVFCHSRRVLHRDLKPQNLLIDDKGTIKLADFGLARAFGIPIRVYTHEVVTLWYRSPEVLLGSARYSTPVDIWSIGTIFAELATKKPLFHGDSEIDQLFRIFRALGTPNNEVWPEVESLQDYKNTFPKWKPGSLASHVKNLDENGLDLLSKMLVYDPAKRISGKMALKHPYFDDLDNQIKKM",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P39951"},
		"label":"cdk1_rat"
	},
	{
		"object":"interactor",
		"sequence":"MRRHSSKSGVALPPVGQGPDACQMLTRAQLGQDPPQRTVLGVLTENEQYRRACGQEIATIRCFSGSENVFPAAGKKVLPDNGVSEPAKHGFDIYMDDPEQGDRDSCPGREGIVFEDVYEVDTSMLKSDLHFLLDFNTVSPMLVDSTAHAQSEEATDFGSDVINVTEYAEEIHRYLREAEVRHRPKAHYMRKQPDITEGMRAILVDWLVEVGEEYKLRTETLYLAVNFLDRFLSCMSVLRGKLQLVGTAAILLASKYEEIYPPDVDEFVYITDDTYTKRQLLRMEHLLLKVLAFDLTVPTTNQFLLQYLRRQGVCIRTENLAKYVAELSLLEADPFLKYLPSLVAAAAYCLANYIVNRHFWPETLAAFTGYSLNEIVPCLSELHKACLSIPHRPQQAIREKYKASKYLHVSLMEPPVVLPLQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q6AY13"},
		"label":"ccna1_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"2.7.11.22"},{"db":"intenz","id":"2.7.11.23"},{"db":"intact","id":"EBI-847021"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P39951"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"4085835",
				"name":"ccna1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["18269933"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q6AY13"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"18269933",
				"name":"cdk1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["4085835"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDGSFESPHAMDISIVLEDEKPVNVNEVPDYHEDIHTYLREMEVKCKPKVSYMKRQPDITNSMRAILVDWLVEVGEEYKLQNETLHLAVNYIDRFLSSMSVLRGKLQLVGTAAMLLASKFEEIYPPEVAEFVYITDDTYSKKQVLRMEHLVLKVLAFDLAAPTVNQFLTQYFLHLQPANCKVESLAMFLGELSLIDADPYLKYLPSLIAGAAFHLALYTVTGQSWPESLVQKTGYTLESLKPCLMDLHQTYLKAPQHAQQSIREKYKHSKYHSVSLLNPPETLNV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q6GX89"},
		"label":"q6gx89_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"2.7.11.22"},{"db":"intenz","id":"2.7.11.23"},{"db":"intact","id":"EBI-847040"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P39951"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"6168396",
				"name":"ccna2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["22604565"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q6GX89"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22604565",
				"name":"cdk1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["6168396"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MENFQKVEKIGEGTYGVVYKAKNKLTGEVVALKKIRLDTETEGVPSTAIREISLLKELNHPNIVKLLDVIHTENKLYLVFEFLHQDLKKFMDASALTGLPLPLIKSYLFQLLQGLAFCHSHRVLHRDLKPQNLLINAEGSIKLADFGLARAFGVPVRTYTHEVVTLWYRAPEILLGCKYYSTAVDIWSLGCIFAEMVTRRALFPGDSEIDQLFRIFRTLGTPDEVVWPGVTSMPDYKPSFPKWARQDFSKVVPPLDEDGRSLLSQMLHYDPNKRISAKAALAHPFFQDVTKPVPHLRL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q63699"},
		"label":"cdk2_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EBI-767663"},{"db":"intact","id":"EBI-847108"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q6AY13"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11650805",
				"name":"cdk2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["24974258"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q63699"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"24974258",
				"name":"ccna1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["11650805"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"2.7.11.22"},{"db":"intact","id":"EBI-847117"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q6GX89"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"9970553",
				"name":"cdk2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["4258819"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q63699"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"4258819",
				"name":"ccna2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["9970553"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MALRVTRNTKINTENKAKVSMAGAKRVPVAVAASKPLLRSRTALGDIGNKVSEQSRIPLKKETKKLGSGTVTVKALPKPVDKVPVCEPEVELDEPEPEPVMEVKHSPEPILVDTPSPSPMETSGCAPAEEYLCQAFSDVILAVSDVDADDGGDPNLCSEYVKDIYAYLRQLEEEQSVRPKYLLGREVTGNMRAILIDWLIQVQMKFRLLQETMYMTVSIIDRFMQDSCVPKKMLQLVGVTAMFIASKYEEMYPPEIGDFAFVTNNTYTKHQIRQMEMKILRVLNFSLGRPLPLHFLRRASKIGEVDVEQHTLAKYLMELSMLDYDMVHFAPSQIAAGAFCLALKILDNGEWTPTLQHYLSHTEESLLPVMQHLAKNIVMVNRGLTKHMTIKNKYATSKHAKISTLAQLNCTLVQNLSKAVTKA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P30277"},
		"label":"ccnb1_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"2.7.11.22"},{"db":"intact","id":"EBI-847206"},{"db":"intenz","id":"2.7.11.23"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P39951"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"6372762",
				"name":"ccnb1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1272705"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P30277"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"1272705",
				"name":"cdk1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["6372762"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MEHQLLCCEVETIRRAYPDTNLLNDRVLRAMLKTEETCAPSVSYFKCVQREIVPSMRKIVATWMLEVCEEQKCEEEVFPLAMNYLDRFLSLEPLKKSRLQLLGATCMFVASKMKETIPLTAEKLCIYTDNSIRPEELLQMELLLVNKLKWNLAAMTPHDFIEHFLSKMPEADENKQIIRKHAQTFVALCATDVKFISNPPSMVAAGSVVAAMQGLNLGSPNNFLSCYRTTHFLSRVIKCDPDCLRACQEQIEALLESSLRQAQQNIDPKATEEEGEVEEEAGLACTPTDVRDVDI",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P39948"},
		"label":"ccnd1_rat"
	},
	{
		"object":"interactor",
		"sequence":"MATTRYEPVAEIGVGAYGTVYKARDPHSGHFVALKSVRVPNGGAAGGGLPVSTVREVALLRRLEAFEHPNVVRLMDVCATSRTDRDIKVTLVFEHIDQDLRTYLDKAPPPGLPVETIKDLMRQFLSGLDFLHANCIVHRDLKPENILVTSNGTVKLADFGLARIYSYQMALTPVVVTLWYRAPEVLLQSTYATPVDMWSVGCIFAEMFRRKPLFCGNSEADQLGKIFDLIGLPPEDDWPREVSLPRGAFSPRGPRPVQSVVPEMEESGAQLLLEMLTFNPLKRISAFRALQHSYLHKEESDPE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P35426"},
		"label":"cdk4_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"2.7.11.22"},{"db":"intact","id":"EBI-847309"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P39948"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"16196305",
				"name":"cdk4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["17751655"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P35426"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17751655",
				"name":"ccnd1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["16196305"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MELLCCEVDPVRRAVPDRNLLEDRVLQNLLTIEERYLPQCSYFKCVQKDIQPYMRRMVATWMLEVCEEQKCEEEVFPLAMNYLDRFLAGVPTPKTHLQLLGAVCMFLASKLKETIPLTAEKLCIYTDNSVKPQELLEWELVVLGKLKWNLAAVTPHDFIEHILRKLPQQKEKLSLIRKHAQTFIALCATDFKFAMYPPSMIATGSVGAAICGLQQDEEVNALTCDALTELLTKITHTDVDCLKACQEQIEAVLLNSLQQFRQEQHNGSKSVEDPDQATTPTDVRDVDL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q04827"},
		"label":"ccnd2_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"2.7.11.22"},{"db":"intact","id":"EBI-847329"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P35426"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19613438",
				"name":"ccnd2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["4312914"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q04827"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"4312914",
				"name":"cdk4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["19613438"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MELLCCEGTRLAPRAGPDPRLLGDQRVLQSLLRLEERYVPRGSYFQCVQKEIKPHMRKMLAYWMLEVCEEQRCEEDVFPLAMNYLDRYLSCVPTRKAQLQLLGTVCLLLASKLRETTPLTIEKLCIYTDQAMAPWQLREWEVLVLGKLKWDLAAVIAHDFLALILHRLSLPSDRQALVKKHAQTFLALCATDYTFAMYPPSMIATGSIGAAVLGLGACSMSADELTELLAGITGTEVDCLRACQEQQIEAALRESLREAAQTAPSPVPKAPGGSSSQGPSQTSTPTDVTAIHL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P48961"},
		"label":"ccnd3_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"2.7.11.22"},{"db":"intact","id":"EBI-847373"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P48961"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"9574350",
				"name":"cdk4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["22599347"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P35426"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22599347",
				"name":"ccnd3 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["9574350"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MPRERKERDSKDHTKMKEEGGSDLSVRSRKRKPNVPVFLQDPDEEIAKIDKTVKSQDSSQPWDDDSACVDPCSFIPTPNKEEDNELEYPKTAFQPRKIRPPRASPLPVLNWANREEVWRIMLNKEKTYLRDEHFLQRHPLLQARMRAVLLDWLMEVCEVYKLHRETFYLAQDFFDRYMASQQNIIKTLLQLIGISALFIASKLEEIYPPKLHQFAYVTDGACSGDEILTMELMMMKALKWRLSPLTIVSWLNVYVQVAYVNDTGEVLMPQYPQQVFVQIAELLDLCVLDVGCLEFPYGVLAASALYHFSSLELMQKVSGYQWCDIEKCVKWMVPFAMVIREMGSSKLKHFRGVPMEDSHNIQTHTNSLDLLDKAQAKKAILSEQNRISPPPSGVLTPPHSSKKQSSEQETE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P39949"},
		"label":"ccne1_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"2.7.11.22"},{"db":"intact","id":"EBI-847451"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q63699"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"24618326",
				"name":"ccne1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["513999"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P39949"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"513999",
				"name":"cdk2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["24618326"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSRRSSRLQAKQQHARPNQPDSPQEAQIIQAKKRKTAQDVKKRTEEITKKHQYEIRNCWPPVLSGGISPCIIIETPHKEIGTSDFSRFTNYRFKNLFINPSPLPDLSWACSQEVWQNMLQKESRYVHDKHFEVLHSDLEPQMRSILLDWLLEVCEVYTLHRETFYLAQDFFDRFMLTQKDVNKNMLQLIGITSLFIASKLEEIYAPKLQEFAYVTDGACSEVDILKMELNILKALKWELCPVTVISWLNLFLQVDAVKDIPKVLLPQYSQETFIQIAQLLDLCILAIDSLEFQYRILAAAALCHFTSIEVVKKASGLEWDDISECVDWMVPFVSVVKSVSPVKLKTFKKIPMEDRHNIQTHTNYLALLNEVNYVNIFRKGGQLSPVCNGGIMTPPKSTEKPPVKF",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"D3ZQ41"},
		"label":"d3zq41_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"2.7.11.22"},{"db":"intact","id":"EBI-847695"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"D3ZQ41"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"15295849",
				"name":"cdk2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["16839902"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q63699"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"16839902",
				"name":"ccne2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["15295849"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MQFSGRTRKKLRLAGDQRNACYPHSLQFYLQPPTENISLTEFESLAFDRVKLLKAIENLGVSYVKGTEQYQSKLEAEIRKLKFSYRENLEDEYEPRRRDHISHFILRLAYCQSEDLRRWFIQQEMDLLRFRFSILPKDKVQSFLKDTHLHFEAISDEEKTLREQDIMASSPSLSGVRWESESVYKVPFADALDLFRGRKVYLEDGFAYVPLKDIVAIILNEFRATLSKALALTARSLPAVQSDERLQPLLSHLSHSYTGQDYSTQKSTGKISLDQIDSLSTKSFPPCMRQLHKALRENHHLRHGGRMQYGLFLKGIGLTLEQALQFWKQEFIKGKMDPDKFDKGYSYNIRHSFGKEGKRTDYTPFSCMKIILTNPPSQGDFHGCPFRHSDAELLKQKMQTYKIPASGISQILDLVKGNHYQVACQKYFEMTHNVDDCGFSLNHPNQFFFESQRILTGGKDIKKEASHPETPQHKPSTQKTKDATSALASLDSSLEMDLEGLEDYFSK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"O89044"},
		"label":"pri2_rat"
	},
	{
		"object":"interactor",
		"sequence":"MAPVHGDDCKLETSAVSDSGSFVASRARREKKSKKGRQEALERLKKAKAGEKYKYEVEDLTSVYEEVDEEQYSKLVQARQDDDWIVDDDGIGYVEDGREIFDDDLEDDALDTCGEGSDGKAHRKDRKDVKKPSVTKPNNIKAMFIASAGKKTTDKTVDLSKDDLLGDILQDLNTETPQIAPPPVLIPKKKRSTGASPNPFSVHTATAVPSGKIASPVSRKEPPLTPVPLKRAEFAGDLAQPECPEDEQESGVIEFEDGDFDEPMDTEEVDEEEPVTAKIWDQESEPVEGVKHEADPETGTTSFLDSFLPDVSCWDIDQKDENSFLLQEVQVDSNHLPLVKGADDEQVFQFYWLDAYEDPYNQPGVVFLFGKVWVESAKTHVSCCVMVKNIERTLYFLPREMKIDLNTGKETATPITMKDVYEEFDSKISAKYKIMKFKSKIVEKNYAFEIPDVPEKSEYLEVRYSAEVPQLPQNLKGETFSHVFGTNTSSLELFLMNRKIKGPCWLEVKNPQLLNQPISWCKFEAMALKPDLVNVIKDVSPPPLVVMSFSMKTMQNVQNHQHEIIAMAALVHHNFPLDKAPPKPPFQTHFCVVSKPKDCIFPCAFKEVIKKKNMEVEVAATERTLLGFFLAKVHKLDPDILVGHNICGFELEVLLQRINECKVPFWSKIGRLRRSNMPKLGSRSGFGERNATCGRMICDVEISVKELIHCKSYHLSELVQQILKTERIVIPTENIRNMYSEPSHLLYLLEHIWKDARFILQIMCELNVLPLALQITNIAGNIMSRTLMGGRSERNEFLLLHAFYENNYIVPDKQIFRKPQQKPGDEDEEIDGDTNKYKKGRKKAAYAGGLVLDPKVGFYDKFILLLDFNSLYPSIIQEFNICFTTVQRVASETLKATEDEEQEQIPELPDPNLDMGILPREIRKLVERRKQVKQLMKQQDLNPDLVLQYDIRQKALKLTANSMYGCLGFSYSRFYAKPLAALVTYKGREILMHTKEMVQKMNLEVIYGDTDSIMINTNSTNLEEVFKLGNKVKNEVNKLYKLLEIDIDGVFKSLLLLKKKKYAALVVEPTSDGNYITKQELKGLDIVRRDWCDLAKDTGNFVIGQILSDQSRDTIVENIQKRLIEIGENVLNGSVPVSQFEINKALTKDPQDYPDKKSLPHVHVALWINSQGGRKVKAGDTVSYVICQDGSNLPATQRAYAPEQLQKQDNLAIDTQYYLAQQIHPVVARICEPIDGIDAVLIALWLGLDSTQFRVHQYHKDEENDALLGGPAQLTDEEKYKDCEKFKCLCPSCGTENIYDNVFEGSGMDMEPSLNRCSNIDCKASPATFMVQLSNKLIMDIRRCIKKYYDGWLICEEPTCRNRIRRLPLHFSRNGPLCPACMKAVLRPEYSDKSLYTQLCFYRYIFDADCALEKLPEHEKDKLKKQFFTPRVLQDYRKVKNIAEHFLSWSG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"O89042"},
		"label":"dpola_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.7.7.7"},{"db":"intact","id":"EBI-852435"}],
		"expansion":{"id":"0","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O89044"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"30154083",
				"name":"pola1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-507"],
				"linkedFeatures":["27086720"]
				},
				{
				"id":"13540852",
				"name":"prim1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-507"],
				"linkedFeatures":["14948148"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O89042"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11501148",
				"name":"pola2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1278-1451"],
				"linkedFeatures":["26268569"]
				},
				{
				"id":"27086720",
				"name":"prim2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1274-1451"],
				"linkedFeatures":["30154083"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"YFMELFDPAELPELLKLYYRRLFPYAQYYRWLNYGGVTKNYFQHREFSFTLKDDIYIRYQSFNNQSDLEKEMQKMNPYKIDIGAVYSHRPSQHNTVKLGAFQAQEKELVFDIDMTDYDDVRRCCSSADICSKCWTLMTMAMRIIDRALKEDFGFKHRLWVYSGRRGVHCWVCDESVRKLSSAVRSGIVEYLSLIKGGHDVKKKVHLNEKVHPFVRKSINIIKKYFEEYALVDQDILENKENWDKILALVPETVHDELQKGFQRFHSSPQRWEYLRKVASAPQNTKNDKCGPWLEWEIMLQYCFPRLDINVSKGVNHLLKSPFSVHPKTGRISVPIDFQKVDQFDPFVVPTISAICRELDVVSTNEKEKEENETDSRHRVRDYKRTSLAPYVKVFEQFLENLDKSRKGALLKKSDL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"O89045"},
		"label":"o89045_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.7.7.7"},{"db":"intact","id":"EBI-852435"}],
		"expansion":{"id":"0","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O89044"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"30154083",
				"name":"pola1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-507"],
				"linkedFeatures":["27086720"]
				},
				{
				"id":"13540852",
				"name":"prim1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-507"],
				"linkedFeatures":["14948148"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O89045"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"14948148",
				"name":"prim2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-415"],
				"linkedFeatures":["13540852"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAVSTQQLAEELQIFGLDCEDSLLEKLAELCTLYRQTEERMVSELIAFCTSAGKSCLTGEILSSFEHEVLNKKLSKACHSASKDNRHAGARDIVSIQELIEAEEEEETLLSAYTTPSKGPHKRVSSTPETPLTKRSISTRSPHQLLSPSSFSPSATPSQKYSSRTNRGEVVTTFGSAQGVSWSGRGGSGSISLKVMGYPEPLTSSYKTMFQQLPDIREVLTCKIEELGSELKEHYKIEAFTPLLVPAQEPVILLGQIGCDSNGRLNSKSVILEGDREHSSGAQIPVDVSELKDYSLFPGQVVIMEGFNTTGRRLTATKLYEGVPLPFYQPTEEEGDFEQTMVLVACGPYTTSDSITYDPLLDLISTINHDRPDVCILFGPFLDAKHEQVENCKLTSPFEDIFKQCLRTVIEGTRSSGSHLVFVPSLRDVHHEPVYPQPPFTFSELPREDKKRVQFVSEPCNLSINGVMFGLTSTDLLFHIGAEEICSSSGTSDRFSRILKHILTQRSYYPLYPPHEDMAIDYENFYTYAQLPVTPDVFIVPSELRYFVKDIFGCVCMNPGRLTKGQVGGTFGRLYLRRQPKGTDSEGRQGLSVAAQVVRI",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"O89043"},
		"label":"dpoa2_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.7.7.7"},{"db":"intact","id":"EBI-852435"}],
		"expansion":{"id":"0","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O89044"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"30154083",
				"name":"pola1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-507"],
				"linkedFeatures":["27086720"]
				},
				{
				"id":"13540852",
				"name":"prim1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-507"],
				"linkedFeatures":["14948148"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O89043"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26268569",
				"name":"pola1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-600"],
				"linkedFeatures":["11501148"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MFSEQAAQRAHTLLSPPSASNATFARVPVATYTNSSQPFRLGERSFNRQYAHIYATRLIQMRPFLVSRAQQHWGSQVEVKKLCELQPGEQCCVVGTLFKAMPLQPSILREISEEHNLIPQPPRSKYIHPDDELVLEDELQRIKLKGTIDVSKLVTGTVLAVFGSVKDDGKFQVEDHCFADLAPQNPVPPLDTDRFVLLVSGLGLGGGGGESLLGTQLLVDVVTGQLGDEGEQCSAAHVSRVILAGNLLSHNTQSRDSINKAKYLTKKTQAASVEAVKMLDEILLQLSASVPVDVMPGEFDPTNYTLPQQPLHPCMFPLATAYATLQLVTNPYQATIDGVRFLGTSGQNVSDIFRYSSMEDHLEILEWTLRVRHISPTAPDTLGCYPFYKTDPFIFAECPHVYFCGNTPSFGSKVIRGPEDQAVLLVAVPDFSSTQTACLVNLRGLTCQPISFAGFGAEQDDLEDLGLGP",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q6AXY4"},
		"label":"dpod2_rat"
	},
	{
		"object":"interactor",
		"sequence":"MAEQLYLENIDEFVTDQNKIVTYKWLSYTLGVHVNQAKQMLYEYVERKRKENSGAQLHVTYLVSGSLIQNGHSCHKVAVVREDRLEAVKSKLAVTASIHVYSIQKAMLKDSGPLFNTDYDILKSNLQNCSKFSAIQCAAAVPRAPAESSSSRKFEQSNLQAASETQASELTTNGHGPPASKQASQQPKGIMGMLISKAATKTQDTNKDTKTEAREVTSASSAGGKAPGKGNVMSNFFGKAAMSKLKVNLDSEQAVKEEKTVEQPPVSVAEPKLAAPPALKKSSRKSEPVKMQQKEKKCRGKRVDLSDEEAKETENLKKKRRRIKLPQSDSSEDEVFADSPEMFEAVSPSPPPASPPPDPVPKTEPPPVKRSSGENKRKRKRVLKSKTFVDEEGCMVTEKVYESESCTDSEEETKMKMASAQRPPAATVKREPREERKGPKKGAAALGKANRQVSITGFFQKK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q4V7D0"},
		"label":"q4v7d0_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.7.7.7"},{"db":"intact","id":"EBI-866866"}],
		"expansion":{"id":"1","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q6AXY4"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q4V7D0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGRKRFITDSYPVVKKREGPPGHNKGELAPELGEDTQSLSQEETELELLRQFDLAWQYGPCTGITRLQRWHRAEQMGLKPPVEVYQVLKTHPEDSRFQCSLWHLYPL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q6P6U6"},
		"label":"q6p6u6_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.7.7.7"},{"db":"intact","id":"EBI-866866"}],
		"expansion":{"id":"1","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q6AXY4"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q6P6U6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDGKRRQAPSSGVPPKRACKGLWDEDEPSQFEENLALLEEIEAENRLQEAEEELQLPPEGIVGGQFSTADIDPRWLRPTPLALDPSTEPLIFQQLEIDHYVGTSPPLPEGPPASRNSVPILRAFGVTDEGFSVCCHIHGFAPYFYTPAPPGFGAEHLSELQRELNAAISRDQRGGKELSGPAVLAIELCSRESMFGYHGHGPSPFLRITLALPRLMAPARRLLEQGIRVPGLGTPSFAPYEANVDFEIRFMVDADIVGCNWLELPAGKYVRRAEKKATLCQLEVDVLWSDVISHPPEGQWQRIAPLRVLSFDIECAGRKGIFPEPERDPVIQICSLGLRWGEPEPFLRLALTLRPCAPILGAKVQSYEREEDLLQAWATFILAMDPDVITGYNIQNFDLPYLISRAQTLKVDRFPFLGRVTGLRSNIRDSSFQSRQVGRRDSKVVSMVGRVQMDMLQVLLREYKLRSYTLNAVSFHFLGEQKEDVQHSIITDLQNGNEQTRRRLAVYCLKDAFLPLRLLERLMVLVNNVEMARVTGVPLGYLLSRGQQVKVVSQLLRQAMREGLLMPVVKTEGGEDYTGATVIEPLKGYYDVPIATLDFSSLYPSIMMAHNLCYTTLLRPGAAQKLGLKPDEFIKTPTGDEFVKASVRKGLLPQILENLLSARKRAKAELAQETDPLRRQVLDGRQLALKVSPNSVYGFTGAQVGKLPCLEISQSVTGFGRQMIEKTKQLVETKYTLENGYDANAKVVYGDTDSVMCRFGVSSVAEAMSLGREAANWVSSHFPSPIRLEFEKVYFPYLLISKKRYAGLLFSSRSDAHDRMDCKGLEAVRRDNCPLVANLVTSSLRRILVDRDPDGAVAHAKDVISDLLCNRIDISQLVITKELTRAAADYAGKQAHVELAERMRKRDPGSAPNLGDRVPYVIIGAAKGVAAYMKSEDPLFVLEHSLPIDTQYYLEQQLAKPLLRIFEPILGEGRAESVLLRGDHTRCKTVLTSKVGGLLAFTKRRNSCIGCRSVIDHQGAVCKFCQPRESELYQKEVSHLNALEERFSRLWTQCQRCQGSLHEDVICTSRDCPIFYMRKKVRKDLEDQERLLQRFGPPGPEAW",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"O54747"},
		"label":"dpod1_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.7.7.7"},{"db":"intact","id":"EBI-866866"}],
		"expansion":{"id":"1","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q6AXY4"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O54747"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MEPSSKKVTGRLMLAVGGAVLGSLQFGYNTGVINAPQKVIEEFYNQTWNHRYGESIPSTTLTTLWSLSVAIFSVGGMIGSFSVGLFVNRFGRRNSMLMMNLLAFVSAVLMGFSKLGKSFEMLILGRFIIGVYCGLTTGFVPMYVGEVSPTALRGALGTLHQLGIVVGILIAQVFGLDSIMGNADLWPLLLSVIFIPALLQCILLPFCPESPRFLLINRNEENRAKSVLKKLRGTADVTRDLQEMKEEGRQMMREKKVTILELFRSPAYRQPILIAVVLQLSQQLSGINAVFYYSTSIFEKAGVQQPVYATIGSGIVNTAFTVVSLFVVERAGRRTLHLIGLAGMAGCAVLMTIALALLEQLPWMSYLSIVAIFGFVAFFEVGPGPIPWFIVAELFSQGPRPAAVAVAGFSNWTSNFIVGMCFQYVEQLCGPYVFIIFTVLLVLFFIFTYFKVPETKGRTFDEIASGFRQGGASQSDKTPEELFHPLGADSQV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P11167"},
		"label":"gtr1_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-960674"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P11167"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P11167"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MNGPVDGLCDHSLSEEGAFMFTSESVGEGHPDKICDQISDAVLDAHLKQDPNAKVACETVCKTGMVLLCGEITSMAMIDYQRVVRDTIKHIGYDDSAKGFDFKTCNVLVALEQQSPDIAQCVHLDRNEEDVGAGDQGLMFGYATDETEECMPLTIVLAHKLNTRMADLRRSGVLPWLRPDSKTQVTVQYVQDNGAVIPVRVHTIVISVQHNEDITLEAMREALKEQVIKAVVPAKYLDEDTIYHLQPSGRFVIGGPQGDAGVTGRKIIVDTYGGWGAHGGGAFSGKDYTKVDRSAAYAARWVAKSLVKAGLCRRVLVQVSYAIGVAEPLSISIFTYGTSKKTERDELLEVVNKNFDLRPGVIVRDLDLKKPIYQKTACYGHFGRSEFPWEVPKKLVF",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P13444"},
		"label":"metk1_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"2.5.1.6"},{"db":"intact","id":"EBI-1025657"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P13444"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P13444"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"2.5.1.6"},{"db":"intact","id":"EBI-1025675"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P13444"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P13444"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:18420"},
		"label":"magnesium(2+)"
	},
	{
		"object":"interactor",
		"sequence":"MRKMLAAVSRVLAGAAQKPASRVLVASRNFANDATFEIKKCDLHRLEEGPPVTTVLTREDGLKYYRMMQTVRRMELKADQLYKQKIIRGFCHLCDGQEACCVGLEAGINPTDHLITAYRAHGFTFNRGHAVRAILAELTGRRGGCAKGKGGSMHMYAKNFYGGNGIVGAQVPLGAGIALACKYNGKDEVCLTLYGDGAANQGQIFEAYNMAALWKLPCIFICENNRYGMGTSVERAAASTDYYKRGDFIPGLRVDGMDILCVREATKFAAAYCRSGKGPILMELQTYRYHGHSMSDPGVSYRTREEIQEVRSKSDPIMLLKDRMVNSNLASVEELKEIDVEVRKEIEDAAQFATADPEPPLEELGYHIYSSDPPFEVRGANQWIKFKSVS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P26284"},
		"label":"odpa_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"1.2.4.1"},{"db":"intact","id":"EBI-1163785"}],
		"expansion":{"id":"2","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:18420"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P26284"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAAVAGLVRGPLRQASGLLKRRFHRSAPAAVQLTVREAINQGMDEELERDEKVFLLGEEVAQYDGAYKVSRGLWKKYGDKRIIDTPISEMGFAGIAVGAAMAGLRPICEFMTFNFSMQAIDQVINSAAKTYYMSAGLQPVPIVFRGPNGASAGVAAQHSQCFAAWYGHCPGLKVVSPWNSEDAKGLIKSAIRDDNPVVMLENELMYGVAFELPTEAQSKDFLIPIGKAKIERQGTHITVVAHSRPVGHCLEAAAVLSKEGIECEVINLRTIRPMDIEAIEASVMKTNHLVTVEGGWPQFGVGAEICARIMEGPAFNFLDAPAVRVTGADVPMPYAKILEDNSIPQVKDIIFAIKKTLNI",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P49432"},
		"label":"odpb_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"1.2.4.1"},{"db":"intact","id":"EBI-1163785"}],
		"expansion":{"id":"2","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:18420"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P49432"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:18338"},
		"label":"thiamine(1+) monophosphate chloride"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"1.2.4.1"},{"db":"intact","id":"EBI-1163785"}],
		"expansion":{"id":"2","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:18420"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:18338"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MFEARLIQGSILKKVLEALKDLINEACWDISSGGVNLQSMDSSHVSLVQLTLRSEGFDTYRCDRNLAMGVNLTSMSKILKCAGNEDIITLRAEDNADTLALVFEAPNQEKVSDYEMKLMDLDVEQLGIPEQEYSCVVKMPSGEFARICRDLSHIGDAVVISCAKDGVKFSASGELGNGNIKLSQTSNVDKEEEAVSIEMNEPVQLTFALRYLNFFTKATPLSPTVTLSMSADVPLVVEYKIADMGHLKYYLAPKIEDEEGS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P04961"},
		"label":"pcna_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-1208695"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P04961"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P04961"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:60240"},
		"label":"divalent metal cation"
	},
	{
		"object":"interactor",
		"sequence":"MAGSAWVSKVSRLLGAFHNTKQVTRGFAGGVQTVTLIPGDGIGPEISASVMKIFDAAKAPIQWEERNVTAIQGPGGKWMIPPEAKESMDKNKMGLKGPLKTPIAAGHPSMNLLLRKTFDLYANVRPCVSIEGYKTPYTDVNIVTIRENTEGEYSGIEHVIVDGVVQSIKLITEGASKRIAEFAFEYARNNHRSNVTAVHKANIMRMSDGLFLQKCREVAENCKDIKFNEMYLDTVCLNMVQDPSQFDVLVMPNLYGDILSDLCAGLIGGLGVTQSGNIGANGVAIFESVHGTAPDIAGKDMANPTALLLSAVMMLRHMGLFDHAAKIEAACFATIKDGKSLTKDLGGNSKCSDFTEEICRRVKDLD",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q99NA5"},
		"label":"idh3a_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"1.1.1.41"},{"db":"intact","id":"EBI-1216929"}],
		"expansion":{"id":"3","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:60240"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q99NA5"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAALSNVRWLTRAVLGARNSGAWRGLRTAASAQAASQSQAQDVRVEGAFPVTMLPGDGVGPELMHAVKEVFKAAAVPVEFKEHHLSEVQNMASEEKLEQVLSSMKENKVAIIGKIYTPMEYKGELASYDMQLRRKLDLFANVVHVKSLPGYKTRHNNLDLVIIREQTEGEYSSLEHESARGVIECLKIVTRTKSQRIAKFAFDYATKKGRSKVTAVHKANIMKLGDGLFLQCCEEVAELYPKIKFETMIIDNCCMQLVQNPYQFDVLVMPNLYGNIIDNLAAGLVGGAGVVPGESYSAEYAVFETGARHPFAQAVGRNIANPTAMLLSASNMLRHLNLEYHSSMIADAVKKVIKVGKVRTRDMGGYSTTTDFIKSVIGHLHPHGG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q68FX0"},
		"label":"idh3b_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"1.1.1.41"},{"db":"intact","id":"EBI-1216929"}],
		"expansion":{"id":"3","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:60240"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q68FX0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MALKVAIAAGSAAKAIFKPALLCRPWEVLAAHEAPRRSISSQQTIPPSAKYGGRHTVTMIPGDGIGPELMLHVKSVFRHACVPVDFEEVHVSSNADEEDIRNAIMAIRRNRVALKGNIETNHDLPPSHKSRNNILRTSLDLYANVIHCKSLPGVVTRHKDIDILIVRENTEGEYSSLEHESVAGVVESLKIITKAKSLRIAEYAFKLAQESGRKKVTAVHKANIMKLGDGLFLQCCREVAARYPQITFDSMIVDNTTMQLVSRPQQFDVMVMPNLYGNIVNNVCAGLVGGPGLVAGANYGHVYAVFETATRNTGKSIANKNIANPTATLLASCMMLDHLKLHSYATSIRKAVLASMDNENMHTPDIGGQGTTSQAIQDIIRHIRIINGRAVEA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P41565"},
		"label":"idhg1_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"1.1.1.41"},{"db":"intact","id":"EBI-1216929"}],
		"expansion":{"id":"3","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:60240"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P41565"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAVLLKLGVLCSGQGARALSLRSRAVRPAFVSAFLQDQPTPGWRGTQHIHLSPSHQSGSKAASLHWTSERVVSVLLLGLIPAGYLNPCSVVDYSLAAALTLHSHWGIGQVVTDYVHGDALQKATKAGLLAVSALTFAGLCYFNYHDVGICRAVAMLWKL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q6PCT8"},
		"label":"dhsd_rat"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:26355"},
		"label":"heme b"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"1.3.5.1"},{"db":"intact","id":"EBI-1225062"}],
		"expansion":{"id":"4","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q6PCT8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:26355"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:16238"},
		"label":"fad"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"1.3.5.1"},{"db":"intact","id":"EBI-1225062"}],
		"expansion":{"id":"4","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q6PCT8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:16238"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAAVVGVSLKRGFSATALGRVGLQFQACREAQTAAAAAPRIKTFAIYRWDPDKAGDKPRMQTYKVDLNKCGPMVLDALIKIKNEIDSTLTFRRSCREGICGSCAMNINGGNTLACTRRIDTDLGKVSKIYPLPHMYVIKDLVPDLSNFYAQYKSIEPYLKKKDESQEGKQQYLQSIEDREKLDGLYECILCACCSTSCPSYWWNGDKYLGPAVLMQAYRWMIDSRDEFTEERLAKLQDPFSLYRCHTIMNCTQTCPKGLNPGKAIAEIKKMMATYKEKRALA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P21913"},
		"label":"sdhb_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"1.3.5.1"},{"db":"intact","id":"EBI-1225062"}],
		"expansion":{"id":"4","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q6PCT8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P21913"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAALLLRHIGRHCLRAHLSSQLCIRNAAPLGTTAKEEMARFWNKNTSSNRPVSPHLTIYRWSLPMAMSVCHRGSGIAMSGGVSLFGLSALLLPGNFESYLMLVKSLCLGPALIHAAKFVLVFPLMYHSLNGVRHLMWDLGKGLSISQVQLSGVTVLVLAVLSSAGLAAI",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q641Z9"},
		"label":"q641z9_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"1.3.5.1"},{"db":"intact","id":"EBI-1225062"}],
		"expansion":{"id":"4","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q6PCT8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q641Z9"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAGVGAVSRLLRGRRLALAGATRGFHFSVGESKKASAKVSDAISTQYPVVDHEFDAVVVGAGGAGLRAAFGLSEAGFNTACLTKLFPTRSHTVAAQGGINAALGNMEEDNWRWHFYDTVKGSDWLGDQDAIHYMTEQAPASVVELENYGMPFSRTEDGRIYQRAFGGQSLKFGKGGQAHRCCCVADRTGHSLLHTLYGRSLRYDTSYFVEYFALDLLMENGECRGVIALCIEDGSIHRIRAKNTIIATGGYGRTYFSCTSAHTSTGDGTAMVTRAGLPCQDLEFVQFHPTGIYGAGCLITEGCRGEGGILINSQGERFMERYAPVAKDLASRDVVSRSMTLEIREGRGCGPEKDHVYLQLHHLPPEQLATRLPGISETAMIFAGVDVTKEPIPVLPTVHYNMGGIPTNYKGQVLKHVNGQDQIVPGLYACGEAACASVHGANRLGANSLLDLVVFGRACALSIAESCRPGDKVPPIKANAGEESVMNLDKLRFADGSVRTSELRLSMQKSMQSHAAVFRVGSVLQEGCEKVSQLYGDLQHLKTFDRGMVWNTDLVETLELQNLMLCALQTIYGAEARKESRGAHAREDYKVRIDEYDYSKPIEGQQKKPFAEHWRKHTLSYVDTKTGKVTLDYRPVIDKTLNEADCATVPPAIRSY",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q920L2"},
		"label":"sdha_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"1.3.5.1"},{"db":"intact","id":"EBI-1225062"}],
		"expansion":{"id":"4","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q6PCT8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q920L2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MVLSADDKTNIKNCWGKIGGHGGEYGEEALQRMFAAFPTTKTYFSHIDVSPGSAQVKAHGKKVADALAKAADHVEDLPGALSTLSDLHAHKLRVDPVNFKFLSHCLLVTLACHHPGDFTPAMHASLDKFLASVSTVLTSKYR",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P01946"},
		"label":"hba_rat"
	},
	{
		"object":"interactor",
		"sequence":"MVHLTDAEKATVSGLWGKVNADNVGAEALGRLLVVYPWTQRYFSKFGDLSSASAIMGNPQVKAHGKKVINAFNDGLKHLDNLKGTFAHLSELHCDKLHVDPENFRLLGNMIVIVLGHHLGKEFTPCAQAAFQKVVAGVASALAHKYH",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P11517"},
		"label":"hbb2_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9105480"}],
		"expansion":{"id":"5","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P01946"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"20185705",
				"name":"hbb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["25844451"]
				},
				{
				"id":"5570121",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["158673"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P11517"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"16020398",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["14069569"]
				},
				{
				"id":"25844451",
				"name":"hba binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["20185705"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"organism":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
		"identifier":{"db":"chebi","id":"CHEBI:30413"},
		"label":"heme"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9105480"}],
		"expansion":{"id":"5","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P01946"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"20185705",
				"name":"hbb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["25844451"]
				},
				{
				"id":"5570121",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["158673"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:30413"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"158673",
				"name":"hba binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["5570121"]
				},
				{
				"id":"14069569",
				"name":"hbb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["16020398"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MVHLTDAEKAAVNGLWGKVNPDDVGGEALGRLLVVYPWTQRYFDSFGDLSSASAIMGNPKVKAHGKKVINAFNDGLKHLDNLKGTFAHLSELHCDKLHVDPENFRLLGNMIVIVLGHHLGKEFTPCAQAAFQKVVAGVASALAHKYH",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P02091"},
		"label":"hbb1_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"3DHT"},{"db":"intact","id":"EBI-9105417"},{"db":"wwpdb","id":"3HF4"}],
		"expansion":{"id":"6","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P01946"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"9171867",
				"name":"hbb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["2514698"]
				},
				{
				"id":"19499680",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["4989295"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P02091"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"2565252",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["30309675"]
				},
				{
				"id":"2514698",
				"name":"hba binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["9171867"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"3DHT"},{"db":"intact","id":"EBI-9105417"},{"db":"wwpdb","id":"3HF4"}],
		"expansion":{"id":"6","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P01946"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"9171867",
				"name":"hbb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["2514698"]
				},
				{
				"id":"19499680",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["4989295"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:30413"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"30309675",
				"name":"hbb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["2565252"]
				},
				{
				"id":"4989295",
				"name":"hba binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["19499680"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MASSSSFTYYCPPSSSPVWSEPLYSLRPEHARERLQDDSVETVTSIEQAKVEEKIQEVFSSYKFNHLVPRLVLQREKHFHYLKRGLRQLTDAYECLDASRPWLCYWILHSLELLDEPIPQIVATDVCQFLELCQSPDGGFGGGPGQYPHLAPTYAAVNALCIIGTEEAYNVINREKLLQYLYSLKQPDGSFLMHVGGEVDVRSAYCAASVASLTNIITPDLFEGTAEWIARCQNWEGGIGGVPGMEAHGGYTFCGLAALVILKKERSLNLKSLLQWVTSRQMRFEGGFQGRCNKLVDGCYSFWQAGLLPLLHRALHAQGDPALSMSHWMFHQQALQEYILMCCQCPAGGLLDKPGKSRDFYHTCYCLSGLSIAQHFGSGAMLHDVVMGVPENVLQPTHPVYNIGPDKVIQATTHFLQKPVPGFEECEDAVTSDPATD",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q02293"},
		"label":"fntb_rat"
	},
	{
		"object":"interactor",
		"sequence":"MAATEGVGESAPGGEPGQPEQPPPPPPPPPAQQPQEEEMAAEAGEAAASPMDDGFLSLDSPTYVLYRDRAEWADIDPVPQNDGPSPVVQIIYSEKFRDVYDYFRAVLQRDERSERAFKLTRDAIELNAANYTVWHFRRVLLRSLQKDLQEEMNYIIAIIEEQPKNYQVWHHRRVLVEWLKDPSQELEFIADILNQDAKNYHAWQHRQWVIQEFRLWDNELQYVDQLLKEDVRNNSVWNQRHFVISNTTGYSDRAVLEREVQYTLEMIKLVPHNESAWNYLKGILQDRGLSRYPNLLNQLLDLQPSHSSPYLIAFLVDIYEDMLENQCDNKEDILNKALELCEILAKEKDTIRKEYWRYIGRSLQSKHSRESDIPASV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q04631"},
		"label":"fnta_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1n95"},{"db":"wwpdb","id":"1sa5"},{"db":"wwpdb","id":"1fpp"},{"db":"wwpdb","id":"1o1s"},{"db":"wwpdb","id":"3ksq"},{"db":"wwpdb","id":"3e33"},{"db":"wwpdb","id":"4gto"},{"db":"wwpdb","id":"1kzo"},{"db":"wwpdb","id":"3e32"},{"db":"wwpdb","id":"4gtr"},{"db":"wwpdb","id":"2bed"},{"db":"wwpdb","id":"1jcr"},{"db":"wwpdb","id":"1ft2"},{"db":"wwpdb","id":"3pz4"},{"db":"wwpdb","id":"1o5m"},{"db":"wwpdb","id":"1x81"},{"db":"wwpdb","id":"3eu5"},{"db":"wwpdb","id":"3e34"},{"db":"wwpdb","id":"2zir"},{"db":"wwpdb","id":"2r2l"},{"db":"wwpdb","id":"1tn8"},{"db":"wwpdb","id":"1ni1"},{"db":"chembl","id":"CHEMBL2095197"},{"db":"wwpdb","id":"4gtq"},{"db":"wwpdb","id":"1n94"},{"db":"wwpdb","id":"4gtm"},{"db":"wwpdb","id":"2zis"},{"db":"wwpdb","id":"1d8d"},{"db":"wwpdb","id":"1nl4"},{"db":"wwpdb","id":"4gtp"},{"db":"wwpdb","id":"3e30"},{"db":"wwpdb","id":"1qbq"},{"db":"wwpdb","id":"3euv"},{"db":"intact","id":"EBI-9008875"},{"db":"wwpdb","id":"3ksl"},{"db":"wwpdb","id":"1sa4"},{"db":"intenz","id":"EC 2.5.1.58"},{"db":"wwpdb","id":"1n9a"},{"db":"wwpdb","id":"1o1r"},{"db":"wwpdb","id":"1jcs"},{"db":"wwpdb","id":"3dpy"},{"db":"wwpdb","id":"1ft1"},{"db":"wwpdb","id":"1d8e"},{"db":"wwpdb","id":"1kzp"},{"db":"wwpdb","id":"1o1t"},{"db":"wwpdb","id":"1tn7"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q02293"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"24879446",
				"name":"fnta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["27084307"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q04631"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27084307",
				"name":"fntb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["24879446"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGKENYELYSVELGTGPGGDMAAKMSKKKAGGGGGKKKEKLENMKKEMEMNDHQLSVSELEQKYQTSATKGLKASLAAELLLRDGPNALRPPRGTPEYVKFARQLAGGLQCLMWVAAAICLIAFAIQASEGDLTTDDNLYLALALIAVVVVTGCFGYYQEFKSTNIIASFKNLVPQQATVIRDGDKFQINADQLVVGDLVEMKGGDRVPADIRILSAQGCKVDNSSLTGESEPQTRSPECTHESPLETRNIAFFSTMCLEGTAQGLVVSTGDRTIIGRIASLASGVENEKTPIAIEIEHFVDIIAGLAILFGATFFVVAMCIGYTFLRAMVFFMAIVVAYVPEGLLATVTVCLSLTAKRLASKNCVVKNLEAVETLGSTSVICSDKTGTLTQNRMTVSHLWFDNHIHTADTTEDQSGQTFDQSSETWRALCRVLTLCNRAAFKSGQDAVPVPKRIVIGDASETALLKFSELTLGNAMGYRDRFPKVCEIPFNSTNKFQLSIHTLEDPRDPRHLLVMKGAPERVLERCSSILIKGQELPLDEQWREAFQTAYLSLGGLGERVLGFCQLYLNEKDYPPGYTFDVEAMNFPSSGLCFAGLVSMIDPPRATVPDAVLKCRTAGIRVIMVTGDHPITAKAIAASVGIISEGSETVEDIAARLRMPVDQVNKKDARACVINGMQLKDMDPSELVEALRTHPEMVFARTSPQQKLVIVESCQRLGAIVAVTGDGVNDSPALKKADIGVAMGIAGSDAAKNAADMILLDDNFASIVTGVEQGRLIFDNLKKSIAYTLTKNIPELTPYLIYITVSVPLPLGCITILFIELCTDIFPSVSLAYEKAESDIMHLRPRNPRRDRLVNEPLAAYSYFQIGAIQSFAGFADYFTAMAQEGWFPLLCVGLRPQWEDHHLQDLQDSYGQEWTFGQRLYQQYTCYTVFFISIEMCQIADVLIRKTRRLSAFQQGFFRNRILVIAIVFQVCIGCFLCYCPGMPNIFNFMPIRFQWWLVPMPFGLLIFVYDEIRKLGVRCCPGSWWDQELYY",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P09626"},
		"label":"atp4a_rat"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:39128"},
		"label":"magnesium ion"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"chembl","id":"CHEMBL2095199"},{"db":"intenz","id":"EC 3.6.3.10"},{"db":"intact","id":"EBI-9008897"}],
		"expansion":{"id":"7","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P09626"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"6529226",
				"name":"atp4b binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["13715095"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:39128"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAALQEKKSCSQRMAEFRQYCWNPDTGQMLGRTPARWVWISLYYAAFYVVMTGLFALCIYVLMQTIDPYTPDYQDQLKSPGVTLRPDVYGERGLQISYNISENSSWAGLTHTLHSFLAGYTPASQQDSINCSSEKYFFQETFSAPNHTKFSCKFTADMLQNCSGLVDPSFGFEEGKPCFIIKMNRIVKFLPSNNTAPRVDCTFQDDPQKPRKDIEPLQVQYYPPNGTFSLHYFPYYGKKAQPHYSNPLVAAKFLNVPKNTQVLIVCKIMADHVTFDNPHDPYEGKVEFKLTIQK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P18598"},
		"label":"atp4b_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"chembl","id":"CHEMBL2095199"},{"db":"intenz","id":"EC 3.6.3.10"},{"db":"intact","id":"EBI-9008897"}],
		"expansion":{"id":"7","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P09626"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"6529226",
				"name":"atp4b binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["13715095"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P18598"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"13715095",
				"name":"atp4a binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["6529226"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MHGRLKVKTSEEQAEAKRLEREQKLKLYQSATQAVFQKRQAGELDESVLELTSQILGANPDFATLWNCRREVLQHLETEKSPEESAALVKAELGFLESCLRVNPKSYGTWHHRCWLLSRLPEPNWARELELCARFLEADERNFHCWDYRRFVAAQAAVAPAEELAFTDSLITRNFSNYSSWHYRSCLLPQLHPQPDSGPQGRLPENVLLKELELVQNAFFTDPNDQSAWFYHRWLLGRAEPHDVLCCVHVSREEACLSVCFSRPLTVGSRMGTLLLMVDEAPLSVEWRTPDGRNRPSHVWLCDLPAASLNDQLPQHTFRVIWTGSDSQKECVLLKDRPECWCRDSATDEQLFRCELSVEKSTVLQSELESCKELQELEPENKWCLLTIILLMRALDPLLYEKETLQYFSTLKAVDPMRAAYLDDLRSKFLLENSVLKMEYADVRVLHLAHKDLTVLCHLEQLLLVTHLDLSHNRLRALPPALAALRCLEVLQASDNALENVDGVANLPRLQELLLCNNRLQQSAAIQPLVSCPRLVLLNLQGNSLCQEEGIQERLAEMLPSVSSILT",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q08602"},
		"label":"pgta_rat"
	},
	{
		"object":"interactor",
		"sequence":"MGTQQKDVTIKSDAPDTLLLEKHADYIASYGSKKDDYEYCMSEYLRMSGVYWGLTVMDLMGQLHRMNKEEILVFIKSCQHECGGVSASIGHDPHLLYTLSAVQILTLYDSIHVINVDKVVAYVQSLQKEDGSFAGDIWGEIDTRFSFCAVATLALLGKLDAINVEKAIEFVLSCMNFDGGFGCRPGSESHAGQIYCCTGFLAITSQLHQVNSDLLGWWLCERQLPSGGLNGRPEKLPDVCYSWWVLASLKIIGRLHWIDREKLRSFILACQDEETGGFADRPGDMVDPFHTLFGIAGLSLLGEEQIKPVSPVFCMPEEVLQRVNVQPELVS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q08603"},
		"label":"pgtb2_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"pdbe","id":"3dsw"},{"db":"pdbe","id":"1dce"},{"db":"intenz","id":"2.5.1.60"},{"db":"pdbe","id":"3dss"},{"db":"wwpdb","id":"3pz2"},{"db":"pdbe","id":"3dsv"},{"db":"pdbe","id":"3hxf"},{"db":"pdbe","id":"3dst"},{"db":"intact","id":"EBI-9010427"},{"db":"pdbe","id":"3c72"},{"db":"pdbe","id":"3hxc"},{"db":"wwpdb","id":"3pz1"},{"db":"pdbe","id":"3dsx"},{"db":"wwpdb","id":"3pz3"},{"db":"pdbe","id":"3dsu"},{"db":"pdbe","id":"3hxb"},{"db":"pdbe","id":"3hxe"},{"db":"pdbe","id":"3hxd"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q08602"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"24220444",
				"name":"rabggtb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["24193945"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q08603"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"24193945",
				"name":"rabggta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["24220444"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:18405"},
		"label":"pyridoxal 5'-phosphate"
	},
	{
		"object":"interactor",
		"sequence":"MASSTPSPATSSNAGADPNTTNLRPTTYDTWCGVAHGCTRKLGLKICGFLQRTNSLEEKSRLVSAFRERQASKNLLSCENSDPGARFRRTETDFSNLFAQDLLPAKNGEEQTVQFLLEVVDILLNYVRKTFDRSTKVLDFHHPHQLLEGMEGFNLELSDHPESLEQILVDCRDTLKYGVRTGHPRFFNQLSTGLDIIGLAGEWLTSTANTNMFTYEIAPVFVLMEQITLKKMREIIGWSNKDGDGIFSPGGAISNMYSIMAARYKYFPEVKTKGMAAVPKLVLFTSEHSHYSIKKAGAALGFGTDNVILIKCNERGKIIPADLEAKILDAKQKGFVPLYVNATAGTTVYGAFDPIQEIADICEKYNLWLHVDAAWGGGLLMSRKHRHKLSGIERANSVTWNPHKMMGVLLQCSAILVKEKGILQGCNQMCAGYLFQPDKQYDVSYDTGDKAIQCGRHVDIFKFWLMWKAKGTVGFENQINKCLELAEYLYAKIKNREEFEMVFNGEPEHTNVCFWYIPQSLRGVPDSPERREKLHRVAPKIKALMMESGTTMVGYQPQGDKANFFRMVISNPAATQSDIDFLIEEIERLGQDL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P18088"},
		"label":"dce1_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 4.1.1.15"},{"db":"intact","id":"EBI-9491810"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:18405"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"15036282",
				"name":"gad1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["16369026"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P18088"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"16369026",
				"name":"plp binding site",
				"type":{"id":"MI:1125","name":"direct binding region"},
				"sequenceData":["404-404"],
				"linkedFeatures":["15036282"]
				},
				{
				"id":"1442909",
				"name":"dimerisation domain",
				"type":{"id":"MI:1125","name":"direct binding region"},
				"sequenceData":["89-593"],
				"InterPro":"IPR015424"
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MASPGSGFWSFGSEDGSGDPENPGTARAWCQVAQKFTGGIGNKLCALLYGDSEKPAESGGSVTSRAATRKVACTCDQKPCSCPKGDVNYALLHATDLLPACEGERPTLAFLQDVMNILLQYVVKSFDRSTKVIDFHYPNELLQEYNWELADQPQNLEEILTHCQTTLKYAIKTGHPRYFNQLSTGLDMVGLAADWLTSTANTNMFTYEIAPVFVLLEYVTLKKMREIIGWPGGSGDGIFSPGGAISNMYAMLIARYKMFPEVKEKGMAAVPRLIAFTSEHSHFSLKKGAAALGIGTDSVILIKCDERGKMIPSDLERRILEVKQKGFVPFLVSATAGTTVYGAFDPLLAVADICKKYKIWMHVDAAWGGGLLMSRKHKWKLNGVERANSVTWNPHKMMGVPLQCSALLVREEGLMQSCNQMHASYLFQQDKHYDLSYDTGDKALQCGRHVDVFKLWLMWRAKGTTGFEAHIDKCLELAEYLYNIIKNREGYEMVFDGKPQHTNVCFWFVPPSLRVLEDNEERMSRLSKVAPVIKARMMEYGTTMVSYQPLGDKVNFFRMVISNPAATHQDIDFLIEEIERLGQDL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q05683"},
		"label":"dce2_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 4.1.1.15"},{"db":"intact","id":"EBI-9492270"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:18405"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"24673245",
				"name":"gad2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["17574008"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q05683"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17574008",
				"name":"plp binding site",
				"type":{"id":"MI:1125","name":"direct binding region"},
				"sequenceData":["396-396"],
				"linkedFeatures":["24673245"]
				},
				{
				"id":"20253159",
				"name":"dimerisation domain",
				"type":{"id":"MI:1125","name":"direct binding region"},
				"sequenceData":["84-585"],
				"InterPro":"IPR015424"
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 4.1.1.15"},{"db":"intact","id":"EBI-9447818"}],
		"expansion":{"id":"8","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P18088"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"18687364",
				"name":"plp binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["404-404"]
				},
				{
				"id":"9049676",
				"name":"plp binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["404-404"],
				"linkedFeatures":["29233484"]
				},
				{
				"id":"23188229",
				"name":"gad2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["23397513"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:18405"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17627272",
				"name":"gad2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["9484453"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 4.1.1.15"},{"db":"intact","id":"EBI-9447818"}],
		"expansion":{"id":"8","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P18088"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"18687364",
				"name":"plp binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["404-404"]
				},
				{
				"id":"9049676",
				"name":"plp binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["404-404"],
				"linkedFeatures":["29233484"]
				},
				{
				"id":"23188229",
				"name":"gad2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["23397513"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:18405"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"29233484",
				"name":"gad1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["9049676"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 4.1.1.15"},{"db":"intact","id":"EBI-9447818"}],
		"expansion":{"id":"8","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P18088"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"18687364",
				"name":"plp binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["404-404"]
				},
				{
				"id":"9049676",
				"name":"plp binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["404-404"],
				"linkedFeatures":["29233484"]
				},
				{
				"id":"23188229",
				"name":"gad2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["23397513"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q05683"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"23397513",
				"name":"gad1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["102-585"],
				"linkedFeatures":["23188229"]
				},
				{
				"id":"9484453",
				"name":"plp binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["396-396"],
				"linkedFeatures":["17627272"]
				}]
		}
	}
	]
};
