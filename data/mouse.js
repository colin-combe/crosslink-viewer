var miJson = {
"data":[
	{
		"object":"interactor",
		"sequence":"MAQAGRTGYDNREIVMKYIHYKLSQRGYEWDAGDADAAPLGAAPTPGIFSFQPESNPMPAVHRDMAARTSPLRPLVATAGPALSPVPPVVHLTLRRAGDDFSRRYRRDFAEMSSQLHLTPFTARGRFATVVEELFRDGVNWGRIVAFFEFGGVMCVESVNREMSPLVDNIALWMTEYLNRHLHTWIQDNGGWDAFVELYGPSMRPLFDFSWLSLKTLLSLALVGACITLGAYLGHK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P10417"},
		"label":"bcl2_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-783070"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P10417"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"25254542",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P10417"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"23087990",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGTPKQPSLAPAHALGLRKSDPGIRSLGSDAGGRRWRPAAQSMFQIPEFEPSEQEDASATDRGLGPSLTEDQPGPYLAPGLLGSNIHQQGRAATNSHHGGAGAMETRSRHSSYPAGTEEDEGMEEELSPFRGRSRSAPPNLWAAQRYGRELRRMSDEFEGSFKGLPRPKSAGTATQMRQSAGWTRIIQSWWDRNLGKGGSTPSQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q61337"},
		"label":"bad_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-783123"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q61337"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"16406967",
				"name":"bcl2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1573371"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P10417"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"1573371",
				"name":"bad binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["16406967"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSQSNRELVVDFLSYKLSQKGYSWSQFSDVEENRTEAPEETEAERETPSAINGNPSWHLADSPAVNGATGHSSSLDAREVIPMAAVKQALREAGDEFELRYRRAFSDLTSQLHITPGTAYQSFEQVVNELFRDGVNWGRIVAFFSFGGALCVESVDKEMQVLVSRIASWMATYLNDHLEPWIQENGGWDTFVDLYGNNAAAESRKGQERFNRWFLTGMTVAGVVLLGSLFSRK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q64373-1"},
		"label":"q64373-1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-783361"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q61337"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"2768174",
				"name":"bcl2l1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["18261364"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q64373-1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"18261364",
				"name":"bad binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["2768174"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDSEVSNGSGLGAEHITDLLVFGFLQSSGCTRQELEVLGRELPVQAYWEADLEDELQTDGSQASRSFNQGRIEPDSESQEEIIHNIARHLAQIGDEMDHNIQPTLVRQLAAQFMNGSLSEEDKRNCLAKALDEVKTAFPRDMENDKAMLIMTMLLAKKVASHAPSLLRDVFHTTVNFINQNLFSYVRNLVRNEMD",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P70444"},
		"label":"bid_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-783409"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P10417"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"29912970",
				"name":"bid binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1236044"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P70444"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"1236044",
				"name":"bcl2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["29912970"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAKQPSDVSSECDREGGQLQPAERPPQLRPGAPTSLQTEPQGNPDGEGDRCPHGSPQGPLAPPASPGPFATRSPLFIFVRRSSLLSRSSSGYFSFDTDRSPAPMSCDKSTQTPSPPCQAFNHYLSAMASIRQSQEEPEDLRPEIRIAQELRRIGDEFNETYTRRVFANDYREAEDHPQMVILQLLRFIFRLVWRRH",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"O54918"},
		"label":"b2l11_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-783421"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"O54918"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"4008876",
				"name":"bcl2l1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["33444968"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q64373-1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"33444968",
				"name":"bcl2l11 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["4008876"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MARARQEGSSPEPVEGLARDSPRPFPLGRLMPSAVSCSLCEPGLPAAPAAPALLPAAYLCAPTAPPAVTAALGGPRWPGGHRSRPRGPRPDGPQPSLSPAQQHLESPVPSAPEALAGGPTQAAPGVRVEEEEWAREIGAQLRRMADDLNAQYERRRQEEQHRHRPSPWRVMYNLFMGLLPLPRDPGAPEMEPN",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q99ML1"},
		"label":"bbc3_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-822322"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P10417"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"5748592",
				"name":"bbc3 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["13391554"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q99ML1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"13391554",
				"name":"bcl2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["5748592"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-822379"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q99ML1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22288515",
				"name":"bcl2l1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1398971"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q64373-1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"1398971",
				"name":"bbc3 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["22288515"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDGSGEQLGSGGPTSSEQIMKTGAFLLQGFIQDRAGRMAGETPELTLEQPPQDASTKKLSECLRRIGDELDSNMELQRMIADVDTDSPREVFFRVAADMFADGNFNWGRVVALFYFASKLVLKALCTKVPELIRTIMGWTLDFLRERLLVWIQDQGGWEGLLSYFGTPTWQTVTIFVAGVLTASLTIWKKMG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q07813"},
		"label":"bax_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-822399"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q07813"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q07813"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MASGQGPGPPKVGCDESPSPSEQQVAQDTEEVFRSYVFYLHQQEQETQGRPPANPEMDNLPLEPNSILGQVGRQLALIGDDINRRYDTEFQNLLEQLQPTAGNAYELFTKIASSLFKSGISWGRVVALLGFGYRLALYVYQRGLTGFLGQVTCFLADIILHHYIARWIAQRGGWVAALNFRRDPILTVMVIFGVVLLGQFVVHRFFRS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"O08734"},
		"label":"bak_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-822454"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"O08734"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O08734"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-822492"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P10417"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"24410823",
				"name":"bcl2l11 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["2672529"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O54918"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"2672529",
				"name":"bcl2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["24410823"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-822507"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q64373-1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"21378563",
				"name":"bid binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["8660631"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P70444"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"8660631",
				"name":"bcl2l11 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21378563"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSREMGELTQTRLQKIWIPHSSSSSLLQRRRGSSIPQFTNSPTMVIMVGLPARGKTYISTKLTRYLNWIGTPTKVFNLGQYRREAVSYRNYEFFRPDNMEAQLIRKQCALAALKDVHKYLSREEGHVAVFDATNTTRERRSLILQFAKEHGYKVFFIESICNDPDIIAENIKQVKLGSPDYIDCDQEKVLEDFLKRIECYEINYQPLDEELDSHLSYIKIFDVGTRYMVNRVQDHVQSRTAYYLMNIHVTPRSIYLCRHGESELNLRGRIGGDSGLSARGKQYAYALANFIRSQSISSLKVWTSHMKRTIQTAEALGVPYEQWKALNEIDAGVCEEMTYEEIQEHYPEEFALRDQDKYRYRYPKGESYEDLVQRLEPVIMELERQENVLVICHQAVMRCLLAYFLDKSSDELPYLKCPLHTVLKLTPVAYGCRVESIYLNVEAVNTHRDKPENVDITREPEEALDTVPAHY",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P70266"},
		"label":"f261_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"3.1.3.46"},{"db":"intact","id":"EBI-822542"},{"db":"intenz","id":"2.7.1.105"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P70266"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"107147",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P70266"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22435784",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSENSTFSTEDSCNSSYKPHASNLRRAGKTCSWASYMTNSPTLIVMIGLPARGKTYVSKKLTRYLNWIGVPTKVFNLGVYRREAVKSYQSYDFFRHDNEEAMKIRKQCALVALEDVKAYFTEESGQIAVFDATNTTRERRDMILNFAKQNAFKVFFVESVCDDPDVIAANILEVKVSSPDYPERNRENVMEDFLKRIECYKVTYQPLDPDNYDKDLSFIKVMNVGQRFLVNRVQDYIQSKIVYYLMNIHVHPRTIYLCRHGESEFNLLGKIGGDSGLSVRGKQFAHALKKFLEEQEIQDLKVWTSQLKRTIQTAESLGVTYEQWKILNEIDAGVCEEMTYSEIEQRYPEEFALRDQEKYLYRYPGGESYQDLVQRLEPVIMELERQGNILVISHQAVMRCLLAYFLDKGADELPYLRCPLHIIFKLTPVAYGCKVETITLNVDAVDTHRDKPTHNFPKSQTPVRMRRNSFTPLSSSNTIRRPRNYSVGSRPLKPLSPLRALDMQEGADQPKTQVSIPVV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P70265"},
		"label":"f262_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"3.1.3.46"},{"db":"intact","id":"EBI-822646"},{"db":"intenz","id":"2.7.1.105"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P70265"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27073943",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P70265"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"123617",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MPLELTQSRVQKIWVPVDHRPSLPRSCGPKLTNSPTVIVMVGLPARGKTYISKKLTRYLNWIGVPTKVFNVGEYRREAVKQYSSYNFFRPDNEEAMRVRKQCALAALRDVKSYLTKEGGQIAVFDATNTTRERRHMILNFAKENDFKAFFIESVCDDPTVVASNIMEVKISSPDYKDCNSAEAMDDFMKRINCYEASYQPLDPDKCDRDLSLIKVIDVGRRFLVNRVQDHIQSRIVYYLMNIHVQPRTIYLCRHGENEYNLQGKIGGDSSLSSRGKKFANALSKFVEEQNLKDLRVWTSQLKSTIQTAEALRLPYEQWKALNEIDAGVCEELTYEEIRDTYPEEYALREQDKYYYRYPTGESYQDLVQRLEPVIMELERQENVLVICHQAVLRCLLAYFLDKSAEEMPYLKCPLHTVLKLTPVAYGCRVESIYLNVESVSTHRERSEDAKKGPNPLMRRNSVTPLASPEPTKKPRINSFEERVASTSAALPSCLPPEVPTQLPGQNMKSSRSGADSSQKH",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9ESY2"},
		"label":"q9esy2_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"3.1.3.46"},{"db":"intact","id":"EBI-822686"},{"db":"intenz","id":"2.7.1.105"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9ESY2"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"30818183",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9ESY2"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"15000074",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MASPRELTQNPLKKIWMPYSNGRPALHASQRGVCMTNCPTLIVMVGLPARGKTYISKKLTRYLNWIGVPTREFNVGQYRRDIVKTYKSFEFFLPDNEEGLKIRKQCALAALSDVRKFLSEEGGHVAVFDATNTTRERRAMIFNFGEQNGYKTFFVESICVDPEVVAANIVQVKLGSPDYVNRDSDEATEDFMRRIECYENSYESLDEDLDRDLSYIKIMDVGQSYVVNRVADHIQSRIVYYLMNIHVTPRSIYLCRHGESELNLKGRIGGDPGLSPRGREFSKHLAQFISDQNIKDLKVWTSQMKRTIQTAEALSVPYEQWKVLNEIDAGVCEEMTYEEIQDHYPLEFALRDQDKYRYRYPKGESYEDLVQRLEPVIMELERQENVLVICHQAVMRCLLAYFLDKAAEELPYLKCPLHTVLKLTPVAYGCKVESIFLNVAAVNTHRDRPQNVDISRPSEEALVTVPAHQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q6DTY7"},
		"label":"f264_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"3.1.3.46"},{"db":"intact","id":"EBI-822735"},{"db":"intenz","id":"2.7.1.105"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q6DTY7"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11805673",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q6DTY7"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"10595302",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAWSGNKAAVVLCVDVGVAMGNSFPGEESPIEQAKKVMTMFVQRQVFSESKDEIALVLYGTDGTDNALAGKDQYQNITVCRHLMLPDFDLLEDIGNKIQPSSQQADFLDALIVCMDLIQRETIGKKFGKKHIEVFTDLSSPFSQDQLDVIICNLKKSGISLQFFLPFPIDKNGEPGERGDLDSGLDHLKPSFPQKGLTEQQKEGIRMVTRVMLSLEGEDGLDEIYSFSESLRQLCVFKKIERRSMPWPCQLTIGPNLSIKIVAYKSIVQEKFKKSWVVVDARTLKKEDIQKETVYCLNDDDETEVSKEDTIQGYRYGSDIIPFSKVDEEQMKYKSEGKCFSVLGFCKSSQVHRRFFMGHQVLKVFAAKDDEAAAVALSSLVHALDELNMVAIVRYAYDKRSNPQVGVAFPYIKDAYECLVYVQLPFMEDLRQYMFSSLKNNKKCTPTEAQLSAIDDLIDSMSLVKKNEEEDIVEDLFPTSKIPNPEFQRLYQCLLHRALHLQERLPPIQQHILNMLDPPTEMKAKCESPLSKVKTLFPLTEVIKKKNQVTAQDVFQDNHEEGPAAKKYKTEKEEDHISISSLAEGNITKVGSVNPVENFRFLVRQKIASFEEASLQLISHIEQFLDTNETLYFMKSMDCIKAFREEAIQFSEEQRFNSFLEALREKVEIKQLNHFWEIVVQDGVTLITKDEGPGSSITAEEATKFLAPKDKAKEDTTGPEEAGDVDDLLDMI",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P27641"},
		"label":"xrcc5_mouse"
	},
	{
		"object":"interactor",
		"sequence":"MSEWESYYKTEGEEEEEEEESPDTGGEYKYSGRDSLIFLVDASRAMFESQGEDELTPFDMSIQCIQSVYTSKIISSDRDLLAVVFYGTEKDKNSVNFKNIYVLQDLDNPGAKRVLELDQFKGQQGKKHFRDTVGHGSDYSLSEVLWVCANLFSDVQLKMSHKRIMLFTNEDDPHGRDSAKASRARTKASDLRDTGIFLDLMHLKKPGGFDVSVFYRDIITTAEDEDLGVHFEESSKLEDLLRKVRAKETKKRVLSRLKFKLGEDVVLMVGIYNLVQKANKPFPVRLYRETNEPVKTKTRTFNVNTGSLLLPSDTKRSLTYGTRQIVLEKEETEELKRFDEPGLILMGFKPTVMLKKQHYLRPSLFVYPEESLVSGSSTLFSALLTKCVEKKVIAVCRYTPRKNVSPYFVALVPQEEELDDQNIQVTPGGFQLVFLPYADDKRKVPFTEKVTANQEQIDKMKAIVQKLRFTYRSDSFENPVLQQHFRNLEALALDMMESEQVVDLTLPKVEAIKKRLGSLADEFKELVYPPGYNPEGKVAKRKQDDEGSTSKKPKVELSEEELKAHFRKGTLGKLTVPTLKDICKAHGLKSGPKKQELLDALIRHLEKN",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P23475"},
		"label":"xrcc6_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-822783"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P27641"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"1873324",
				"name":"xrcc6 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["375-503"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P23475"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"10903205",
				"name":"xrcc5 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["377-481"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MTHEEHHAAKTLGIGKAIAVLTSGGDAQGMNAAVRAVVRVGIFTGARVFFVHEGYQGLVDGGEHIREATWESVSMMLQLGGTVIGSARCKDFREREGRLRAAHNLVKRGITNLCVIGGDGSLTGADTFRSEWSDLLNDLQKDGKITAEEATKSSYLNIVGLVGSIDNDFCGTDMTIGTDSALHRIVEIVDAITTTAQSHQRTFVLEVMGRHCGYLALVTSLSCGADWVFIPECPPDDDWEEHLCRRLSETRTRGSRLNIIIVAEGAIDKNGKPITSEDIKNLVVKRLGYDTRVTVLGHVQRGGTPSAFDRILGSRMGVEAVMALLEGTPDTPACVVSLSGNQAVRLPLMECVQVTKDVTKAMDEKRFDEAIKLRGRSFMNNWEVYKLLAHVRPPVSKGGLHTVAVMNVGAPAAGMNAAVRSTVRIGLIQGNRVLVVHDGFEGLAKGQIEEAGWSYVGGWTGQGGSKLGTKRTLPKKNLEQISANITKFNIQGLVIIGGFEAYTGGLELMEGRKQFDELCIPFVVIPATVSNNVPGSDFSIGADTALNTICTTCDRIKQSAAGTKRRVFIIETMGGYCGYLATMAGLAAGADAAYIFEEPFTIRDLQVNVEHLVQKMKTTVKRGLVLRNEKCNENYTTDFIFNLYSEEGKGIFDSRKNVLGHMQQGGSPTPFDRNFATKMGAKAMNWMSGKIKESYRNGRIFANTPDSGCVLGMRKRALVFQPVTELKDQTDFEHRIPKEQWWLKLRPILKILAKYEIDLDTSDHAHLEHISRKRSGEAAV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P47857"},
		"label":"k6pf_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"2.7.1.11"},{"db":"intact","id":"EBI-822876"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P47857"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P47857"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MATVDLEKLRMSGAGKAIGVLTSGGDAQGMNAAVRAVTRMGIYVGAKVFLIYEGYEGLVEGGENIKPANWLSVSNIIQLGGTIIGSARCKAFTTREGRLAAAYNLLQHGITNLCVIGGDGSLTGANIFRNEWGSLLEELVKEGKISESTAQNYAHLTIAGLVGSIDNDFCGTDMTIGTDSALHRIMEVIDAITTTAQSHQRTFVLEVMGRHCGYLALVSALASGADWLFIPEAPPEDGWENFMCERLGETRSRGSRLNIIIIAEGAIDRHGKPISSSYVKDLVVQRLGFDTRVTVLGHVQRGGTPSAFDRILSSKMGMEAVMALLEATPDTPACVVSLSGNQSVRLPLMECVQVTKDVQKAMDEERFDEAIQLRGRSFENNWKIYKLLAHQKVSKEKSNFSLAILNVGAPAAGMNAAVRSAVRTGISEGHTVYIVHDGFEGLAKGQVQEVGWHDVAGWLGRGGSMLGTKRTLPKPHLEAIVENLRTYNIHALLVIGGFEAYEGVLQLVEARGRYEELCIVMCVIPATISNNVPGTDFSLGSDTAVNAAMESCDRIKQSASGTKRRVFIVETMGGYCGYLATVTGIAVGADAAYVFEDPFNIHDLKANVEHMTEKMKTDIQRGLVLRNEKCHEHYTTEFLYNLYSSEGRGVFDCRTNVLGHLQQGGAPTPFDRNYGTKLGVKAMLWVSEKLRDVYRKGRVFANAPDSACVIGLRKKVVAFSPVTELKKETDFEHRMPREQWWLNLRLMLKMLAHYRISMADYVSGELEHVTRRTLSIDKGF",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P12382"},
		"label":"k6pl_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.7.1.11"},{"db":"intact","id":"EBI-822927"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P12382"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P12382"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSDLDSSSSSAYPKYLEHLSGDGKAIGVLTSGGDAQGMNAAVRAVVRMGIYTGAKVYFIYEGYQGLVDGGSNIVEAKWDCVSSILQVGGTIIGSARCKAFRSREGRLKAACNLARLGITNLCVIGGDGSLTGANLFRKEWSGLLEELARNGDIDNDTVQKYSYLNVVGMVGSIDNDFCGTDMTIGTDSALHRIIEVVDAIMTTAQSHQRTFVLEVMGRHCGYLALVSALTCGADWVFLPESPPEEDWEENMCLKLSENRARKKRLNIIIVSEGAIDMQNKPITSEKIKELVVKNLGFDTRVTILGHVQRGGTPSAFDRILASRMGVEAVIALLEATPETPACVVSLRGNQAVRLPLMECVQMTQDVQKAMDERRFKEAVKLRGRRFEGNLNTYKRLAIKLPDEKIVKSNCNVAVINVGAPAAGMNAAVRSAVRVGIADGHKMFAIYDGFEGFANGQIKEIGWADVGGWTGQGGSILGTKRTLPGKYLEKIAEQMHSHSINALLIIGGFEAYLGLLELAAAREKHEAFCVPMVMVPATVSNNVPGSDFSIGADTALNTITDTCDRIKQSASGTKRRVFIIETMGGYCGYLANMGALAAGADAAYIFEEPFDIGDLQSNVVHLTEKMKTSIQRGLVLRNESCSVNYTTDFIYQLYSEEGKGVFDCRKNVLGHMQQGGAPSPFDRNFGTKISAKAMEWISAKLKGSQGTGKKFVSDDSICVLGICKRDLLFQPVAELKKVTDFEHRIPKEQWWLKLRPIMKILAKYEASYDMSDSGKLESLQHHEEL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9WUA3"},
		"label":"k6pp_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.7.1.11"},{"db":"intact","id":"EBI-822994"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9WUA3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9WUA3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.7.1.11"},{"db":"intact","id":"EBI-846879"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P12382"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"9426761",
				"name":"pfkm binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["25105556"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P47857"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"25105556",
				"name":"pfkl binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["9426761"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.7.1.11"},{"db":"intact","id":"EBI-846891"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P12382"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"2107730",
				"name":"pfkm binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["24696568"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P47857"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"24696568",
				"name":"pfkl binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["2107730"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.7.1.11"},{"db":"intact","id":"EBI-846903"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P12382"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"6898668",
				"name":"pfkm binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["15357660"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P47857"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"15357660",
				"name":"pfkl binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["6898668"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MHRQSSKSGVALPPVGQGPDACQMLSRAQLGQDPPQRTVLGVLTENEQYRRTCGQEITAIRCFSGSENVFPAAGKKVLSDHGVNEPAKRGFDIYMDDPEQGDRDTCSGKEGIIFEDVYEVDTSMLKSDLHFLLDFNTVSPMLVDPTTHAQSEEATDFGSDVINVTEYAEEIHRYLREAEVRHRPKAHYMRKQPDITEGMRAILVDWLVEVGEEYKLRTETLYLAVNFLDRFLSCMSVLRGKLQLVGTAAILLASKYEEIYPPDVDEFVYITDDTYTKRQLLRMEHLLLKVLAFDLTVPTTNQFLLQYLRRQGVCIRTENLAKYVAELSLLEADPFLKYLPSLVAAAAYCLANYIVNRHFWPETLAAFTGYSLNEIVPCLSELHKACLSIPHRPQQAIREKYKASKYLHVSLMEPPVVLPLQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q61456"},
		"label":"ccna1_mouse"
	},
	{
		"object":"interactor",
		"sequence":"MEDYIKIEKIGEGTYGVVYKGRHRVTGQIVAMKKIRLESEEEGVPSTAIREISLLKELRHPNIVSLQDVLMQDSRLYLIFEFLSMDLKKYLDSIPPGQFMDSSLVKSYLHQILQGIVFCHSRRVLHRDLKPQNLLIDDKGTIKLADFGLARAFGIPIRVYTHEVVTLWYRSPEVLLGSARYSTPVDIWSIGTIFAELATKKPLFHGDSEIDQLFRIFRALGTPNNEVWPEVESLQDYKNTFPKWKPGSLASHVKNLDENGLDLLSKMLVYDPAKRISGKMALKHPYFDDLDNQIKKM",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P11440"},
		"label":"cdk1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"2.7.11.22"},{"db":"intact","id":"EBI-846972"},{"db":"intenz","id":"2.7.11.23"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q61456"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"15508149",
				"name":"cdk1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["28191222"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P11440"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"28191222",
				"name":"ccna1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["15508149"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MPGTSRHSGRDAGSALLSLHQEDQENVNPEKLAPAQQPRAQAVLKAGNVRGPAPQQKLKTRRVAPLKDLPINDEHVTAGPSWKAVSKQPAFTIHVDEAEETQKRPAELKETECEDALAFNAAVSLPGARKPLTPLDYPMDGSFESPHAMDMSIVLEDKPVNVNEVPDYQEDIHTYLREMEVKCKPKVGYMKRQPDITNSMRAILVDWLVEVGEEYKLQNETLHLAVNYIDRFLSSMSVLRGKLQLVGTAAMLLASKFEEIYPPEVAEFVYITDDTYSKKQVLRMEHLVLKVLAFDLAAPTVNQFLTQYFLHLQPANCKVESLAMFLGELSLIDADPYLKYLPSLIAGAAFHLALYTVTGQSWPESLAQQTGYTLESLKPCLVDLHQTYLKAPQHAQQSIREKYKHSKYHSVSLLNPPETLSV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P51943"},
		"label":"ccna2_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"2.7.11.23"},{"db":"intenz","id":"2.7.11.22"},{"db":"intact","id":"EBI-846993"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P51943"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"21290372",
				"name":"cdk1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["2834491"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P11440"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"2834491",
				"name":"ccna2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21290372"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MENFQKVEKIGEGTYGVVYKAKNKLTGEVVALKKIRLDTETEGVPSTAIREISLLKELNHPNIVKLLDVIHTENKLYLVFEFLHQDLKKFMDASALTGIPLPLIKSYLFQLLQGLAFCHSHRVLHRDLKPQNLLINAEGSIKLADFGLARAFGVPVRTYTHEVVTLWYRAPEILLGCKYYSTAVDIWSLGCIFAEMHLVCTQHHAKCCGEHRRNGRHSLCPLCSYLEVAASQGGGMTAVSAPHPVTRRALFPGDSEIDQLFRIFRTLGTPDEVVWPGVTSMPDYKPSFPKWARQDFSKVVPPLDEDGRSLLSQMLHYDPNKRISAKAALAHPFFQDVTKPVPHLRL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P97377"},
		"label":"cdk2_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EBI-767663"},{"db":"intact","id":"EBI-847073"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P97377"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"25557291",
				"name":"ccna1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["11109156"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q61456"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11109156",
				"name":"cdk2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["25557291"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"2.7.11.22"},{"db":"intact","id":"EBI-847082"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P97377"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"14730845",
				"name":"ccna2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["16725076"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P51943"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"16725076",
				"name":"cdk2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["14730845"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MALRVTRNTKINAENKAKVSMAGAKRVPVTVTAASKPGLRPRTALGDIGNKVSEELQARVPLKREAKTLGTGKGTVKALPKPVEKVPVCEPEVELAEPEPEPELEHVREEKLSPEPILVDNPSPSPMETSGCAPAEEYLCQAFSDVILAVSDVDADDGADPNLCSEYVKDIYAYLRQLEEEQSVRPKYLQGREVTGNMRAILIDWLIQVQMKFRLLQETMYMTVSIIDRFMQNSCVPKKMLQLVGVTAMFIASKYEEMYPPEIGDFAFVTNNTYTKHQIRQMEMKILRVLNFSLGRPLPLHFLRRASKVGEVDVEQHTLAKYLMELSMLDYDMVHFAPSQIAAGAFCLALKILDNGEWTPTLQHYLSYSEDSLLPVMQHLAKNVVMVNCGLTKHMTVKNKYAASKHAKISTLAQLNCTLVQNLSKAVTKA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P24860"},
		"label":"ccnb1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"2.7.11.22"},{"db":"intenz","id":"2.7.11.23"},{"db":"intact","id":"EBI-847142"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P24860"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"12891092",
				"name":"cdk1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["33184533"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P11440"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"33184533",
				"name":"ccnb1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["12891092"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MALLRRPTVSSDLKNIDTEVIPKAKSHVTIRRAVLEEIGNKVRNRTTQVAKKPQNTKVPALPTKVTNVNKQPKPTASVKPVQMEALAPKDRPPAPEDVSMKEESLCQAFSDALLCKIEDIDNEDRENPQLCSDYVKDIYQYLRQLEVLQSINPHFLDGRDINGRMRAILVDWLVQVHSKFRLLQETLYMCIAIMDRFLQAQLVCRKKLQLVGITALLLASKYEEMFSPNIEDFVYITDNAYTSSQIREMETLILKELKFELGRPLPLHFLRRASKAGEVDVEQHTLAKYLMELTLVDYDMVHYHPSQVAAAASCLSQKVLGQGKWNLKQQYYTGYMESEVLEVMQHMAKNVVKVNDNRTKFIAVKNKYASSRLLKISTIPQLNSKIIKDLASPLLGSP",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P30276"},
		"label":"ccnb2_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 2.7.11.22"},{"db":"intact","id":"EBI-847160"},{"db":"intenz","id":"EC 2.7.11.23"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P30276"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"24245249",
				"name":"cdk1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["4880813"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P11440"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"4880813",
				"name":"ccnb2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["24245249"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MPPPLLPKRSKLETEKAQSNKITPREEQQSEKIGKSNHAASSSSSSTQGAVKRRSVFEDVTNASHSQCVQSKEDNIELKSHVSKRTKKGVGEVTQKKIKSSKMGHVTSLSNMEKEFILDIPNKPKTLTTEEPSVFQKTLVLNEEPATKETCLMRKTLKSCAFHQETLLMEKPLTLLVETEDYNEFDTELMTSKKKDKPEDPTIIEEMTDLKKSVIRKVTLTSSPLWLKNKHVVQEEKPVIQEKSSFKRISLVSNVVTTKEKPPVKKPHFRKKKPTTEMKSLLQEPSLEEKYNTQEDASILKKPQVLQENTNNKDATLTEPVTFKGKHSANEATHTKKPSSSKNNPDPQGKGTNLRPLRVHPVTYENEPMSSKKSTTKKKDSHFHGPSVLPDKHSPQMEVSTVKKSLALPNPTTEEKMLHFPVATVLEKQHNMGEAPCLKKPSPLRKQQQLPKRRRFFSNSAVQETVIRKPLFFKMSTTEKDPPSQWPSALPKKHISPGELSKQKKQHVSPKHNMEEDSQCWLDSAFKKQLSREEPASTHTPLKLEMQQAITKETGFHLRNPLVLPTVTSEAKSLTKEPPSFREQNTSLLKRKSTTHTITLQQAQSEWQEMTDEDRNLFSIKPGSHRKEPIPEFLQNPLPPNENCLISQKLSHSMPFASQKTTSQERAHRKESVASNDDKNFFSQDLFSPFSSADEDTLKFHKSLDFQEQVDRKNDSHKKMFDSQDSVSEEESFLRKLFCKDRCSSTEELSQERTVALEQEFLLIKILNENTSSDVDEPLSHQSPHIQNHSDTTKEALEASEALEAPEALETLEALVASEDLEEPLNILEELSTENMVALMKMLVTEDESTKDSFSGNYTAAREAHAEKSLSLEETSINEAATLKESLSSQEKHRAELVTVLKELLVLMKNPSLKRVALAFQENPSNNVETLLREVLALVENSTADESTLQEKPSTKTDVTPKELLALEENSSNKKANPMDSLSFDHKPDTEMGEIARMVLTDEEYNIDTLYERVLALSQGLIAADQLSFTDLQNFEETKIVDEEEFFKSFLVFENKNSPNMSSNAFESRTDNSSAIMPSSKAFNPVENSNPYVSSSKSFKSTLGAKETEITIQDDSDSLERIEKEGQDPLLNTIYAKDVFNYLKEREEKFLVQKYMDGQMELTSDMRAILVDWLVEIQGSFQMTHETLYLAVKIMDLYLMKAQCKKNHLQLLGSTTYMIAAKFEESYPPSLSEFLFICEDMYEKSDMVSLESSILQTLNFDINIPTAYNFLRRYASCIHASMKTLTLSRFICEMTLQEYEYIEERPSKLAAASFILALYMRNLSNCVPTLEYFTGYKMAELHILVRKLNHLLNFRSHSILKNVFEKYSEETYFEVAKIPPLSKQDLENLLNCALFH",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q810T2"},
		"label":"ccnb3_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-847189"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P97377"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"24799936",
				"name":"ccnb3 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["32939117"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q810T2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32939117",
				"name":"cdk2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["24799936"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAATRYEPVAEIGVGAYGTVYKARDPHSGHFVALKSVRVPNGGAAGGGLPVSTVREVALLRRLEAFEHPNVVRLMDVCATSRTDRDIKVTLVFEHIDQDLRTYLDKAPPPGLPVETIKDLMRQFLSGLDFLHANCIVHRDLKPENILVTSNGTVKLADFGLARIYSYQMALTPVVVTLWYRAPEVLLQSTYATPVDMWSVGCIFAEMFRRKPLFCGNSEADQLGKIFDLIGLPPEDDWPREVSLPRGAFAPRGPRPVQSVVPEMEESGAQLLLEMLTFNPHKRISAFRALQHSYLHKEESDAE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P30285"},
		"label":"cdk4_mouse"
	},
	{
		"object":"interactor",
		"sequence":"MEHQLLCCEVETIRRAYPDTNLLNDRVLRAMLKTEETCAPSVSYFKCVQKEIVPSMRKIVATWMLEVCEEQKCEEEVFPLAMNYLDRFLSLEPLKKSRLQLLGATCMFVASKMKETIPLTAEKLCIYTDNSIRPEELLQMELLLVNKLKWNLAAMTPHDFIEHFLSKMPEADENKQTIRKHAQTFVALCATDVKFISNPPSMVAAGSVVAAMQGLNLGSPNNFLSCYRTTHFLSRVIKCDPDCLRACQEQIEALLESSLRQAQQNVDPKATEEEGEVEEEAGLACTPTDVRDVDI",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P25322"},
		"label":"ccnd1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"2.7.11.22"},{"db":"intact","id":"EBI-847260"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P30285"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26730519",
				"name":"ccnd1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["33113182"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P25322"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"33113182",
				"name":"cdk4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["26730519"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MELLCCEVDPVRRAVPDRNLLEDRVLQNLLTIEERYLPQCSYFKCVQKDIQPYMRRMVATWMLEVCEEQKCEEEVFPLAMNYLDRFLAGVPTPKTHLQLLGAVCMFLASKLKETIPLTAEKLCIYTDNSVKPQELLEWELVVLGKLKWNLAAVTPHDFIEHILRKLPQQKEKLSLIRKHAQTFIALCATDFKFAMYPPSMIATGSVGAAICGLQQDDEVNTLTCDALTELLAKITHTDVDCLKACQEQIEALLLNSLQQFRQEQHNAGSKSVEDPDQATTPTDVRDVDL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P30280"},
		"label":"ccnd2_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"2.7.11.22"},{"db":"intact","id":"EBI-847282"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P30285"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"33008018",
				"name":"ccnd2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["10341093"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P30280"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"10341093",
				"name":"cdk4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["33008018"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MELLCCEGTRHAPRAGPDPRLLGDQRVLQSLLRLEERYVPRASYFQCVQKEIKPHMRKMLAYWMLEVCEEQRCEEDVFPLAMNYLDRYLSCVPTRKAQLQLLGTVCLLLASKLRETTPLTIEKLCIYTDQAVAPWQLREWEVLVLGKLKWDLAAVIAHDFLALILHRLSLPSDRQALVKKHAQTFLALCATDYTFAMYPPSMIATGSIGAAVLGLGACSMSADELTELLAGITGTEVDCLRACQEQIEAALRESLREAAQTAPSPVPKAPRGSSSQGPSQTSTPTDVTAIHL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P30282"},
		"label":"ccnd3_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"2.7.11.22"},{"db":"intact","id":"EBI-847353"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P30285"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"24356257",
				"name":"ccnd2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["25110065"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P30282"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"25110065",
				"name":"cdk4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["24356257"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MEKDSLSRADQQYECVAEIGEGAYGKVFKARDLKNGGRFVALKRVRVQTSEEGMPLSTIREVAVLRHLETFEHPNVVRLFDVCTVSRTDRETKLTLVFEHVDQDLTTYLDKVPEPGVPTETIKDMMFQLLRGLDFLHSHRVVHRDLKPQNILVTSSGQIKLADFGLARIYSFQMALTSVVVTLWYRAPEVLLQSSYATPVDLWSVGCIFAEMFRRKPLFRGSSDVDQLGKILDIIGLPGEEDWPRDVALPRQAFHSKSAQPIEKFVTDIDELGKDLLLKCLTFNPAKRISAYGALNHPYFQDLERYKDNLNSHLPSNQSTSELNTA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q64261"},
		"label":"cdk6_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-847392"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q64261"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P30282"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-847402"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P25322"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q64261"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MPRERDSTDHSNMKEEGGSDLSVRSRKRKANVAVFLQDPDEEIAKIDKTVKSEDSSQPWDDNSACVDPCSFIPTPNKEEDNELEYPRTAFQPRKIRPPRASPLPVLNWGNREEVWRIMLNKEKTYLRDEHFLQRHPLLQARMRAVLLDWLMEVCEVYKLHRETFYLAQDFFDRYMASQHNIIKTLLQLIGISALFIASKLEEIYPPKLHQFAYVTDGACSGDEILTMELMMMKALKWRLSPLTIVSWLNVYVQVAYVNDTGEVLMPQYPQQVFVQIAELLDLCVLDVGCLEFPYGVLAASALYHFSSLELMQKVSGYQWCDIEKCVKWMVPFAMVIREMGSSKLKHFRGVPMEDSHNIQTHTNSLDLLDKAQAKKAILSEQNRISPPPSVVLTPPPSSKKQSSEQETE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q61457"},
		"label":"ccne1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"2.7.11.22"},{"db":"intact","id":"EBI-847412"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P97377"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"10773488",
				"name":"ccne1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["10304393"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q61457"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"10304393",
				"name":"cdk2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["10773488"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSRRSSRLQAKQHAQPNQPDSPQETQIIQAKKRKTAQDVKKRKEEITKKHQYEIRNCWPPVLSGGISPCIIIETPHKEIGTSDFSRFTNYRFKNLFINPSPLPDLSWACSQEVWQNMLQKENRYVHDKHFQVLHSDLEPQMRSILLDWLLEVCEVYTLHRETFYLAQDFFDRFMLTQKDVNKNMLQLIGITSLFIASKLEEIYAPKLQEFAYVTDGACSEVDILKMELNILKALKWELCPVTVISWLNLFLQVDAVKDVPKVLLPQYSQETFIQIAQLLDLCILAIDSLEFQYRILAAAALCHFTSIEVVKKASGLEWDDISECVDWMVPFVSVVKSVSPVKLKTFKKIPMEDRHNIQTHTNYLALLNEVNYVNIYRKGGQLSPVCNGGIMTPPKSTEKPPGKH",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9Z238"},
		"label":"ccne2_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"2.7.11.22"},{"db":"intact","id":"EBI-847432"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Z238"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11518870",
				"name":"cdk2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["22146253"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P97377"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22146253",
				"name":"ccne2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["11518870"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSVGFIGAGQLAFALAKGFTAAGVLAAHKIMASSPDMDQATVSALRKIGVNLTPHNKETVRHSDVLFLAVKPHIIPFILDEIGANIEDRHIVVSCAAGVTINSIEKKLTAFQPAPKVIRCMTNTPVVVREGVTVYATGTHAQVEDGRLVEQLMGSVGFCTEVEEDLIDAVTGLSGSGPAYAFTALDALADGGVKMGLPRRLAVRLGAQALLGAAKMLLDSEQHPSQLKDNVCSPGGATIHALHVLESGGFRSLLINAVEASCIRTRELQTMADQETISPAAIKKTVLDKVKLDSSAGASLSSDHVKPLP",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q922W5"},
		"label":"p5cr1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"1.5.1.2"},{"db":"intact","id":"EBI-848703"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q922W5"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q922W5"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MEPFDPAELPELLKLYYRRLFPYAQYYRWLNYGGVTKNYFQHREFSFTLKDDIYIRYQSFNNQSELEKEMQKMNPYKIDIGAVYSHRPNQHNTVKLGAFQAQEKELVFDIDMTDYDDVRRCCSSADICSKCWTLMTMAMRIIDRALKEDFGFKHRLWVYSGRRGVHCWVCDESVRKLSSAVRSGIVEYLSLVKGGQDVKKKVHLNEKVHPFVRKSINIIKKYFEEYALVGQDILENKENWDKILALVPETIHDELQRGFQKFHSSPQRWEHLRKVANSSQNMKNDKCGPWLEWEVMLQYCFPRLDVNVSKGVNHLLKSPFSVHPKTGRISVPIDFHKVDQFDPFTVPTISAICRELDMVSTHEKEKEENEADSKHRVRGYKKTSLAPYVKVFEQFLENLDKSRKGELLKKSDLQKDF",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P20664"},
		"label":"pri1_mouse"
	},
	{
		"object":"interactor",
		"sequence":"MAVSTQQLAEELQIFGLDYEDSLLEKLAELCVLYRQTEDGMVSELIAFCTSAGKTCLTVDILNSFEYEVLNKKLSKAWHSASKDSGHAGTRDIVSIQELIEAEEEEETLLSSYTTPSKGPLKRVSSTPETPLTKRSVAARSPRQLLSPSSFSPSATPSQKYTSRTNRGEVVTTFGSAQGLSWSGRGGSGSVSLKVVGDPEPLTGSYKAMFQQLMGVREVLTSKIEELGSELKEHHKIEAFTPLLVPAQEPVILLGQIGCDSNGKLNSKSVILEGDQEHSYGAQIPVDLSELKEYSLFPGQVVIMEGFNTTGRRLTATKLYEGVPLPFYQPTEEEGASEQTMVVVACGPYTTSDSITYDPLLDLIAIINRDQPDVCILFGPFLDAKHEQVENCKLTSPFEDVFKQCLRTVIEGTRSSGSHLVFVPSLRDVHHEPVYPQPPFTFSELSREDKKRVQFVSEPCSLSINGVMFGLTSTDLLFHIGAEEIFSSSGTSDRFSRVLKHILTQRSYYPLYPPHEDMAIDYENFYTYAQLPVTPDVFIVPSELRYFVKDIFGCVCVNPGRLTKGQVGGTFGRLYLRRQPKAMDGGGRQGLSVAAQVVRI",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P33611"},
		"label":"dpoa2_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.7.7.7"},{"db":"intact","id":"EBI-850519"}],
		"expansion":{"id":"0","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P20664"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26330094",
				"name":"prim2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-417"],
				"linkedFeatures":["14045312"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P33611"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"4136864",
				"name":"pola1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-600"],
				"linkedFeatures":["3496479"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MQFSGRIRKKLRLAGDQRNASYPHSLQFYLQPPTENISLTEFENLAFDRVKLLKAIENLGVSYVKGTEQYQSKLEAEIRKLKFSYRENLEDEYEPRRRDHISHFILRLAYCQSEDLRRWFIQQEMDLLRFRFSILPKDKVQSFLKDSHLHFEAISDEEKTLREQDIMASSPSLSGIKLESESVYKVPFADALDLFRGRKVYLEDGFAYVPLKDIVAIILNEFRATLSKALALTARSLPAVQSDERLQPLLNHLSHSYTGQDYSTQKNTGKISLDQIDSLSTKSFPPCMRQLHKALRENHHLRHGGRMQYGLFLKGIGLTLEQALQFWKQEFIRGKMDPDKFDKGYSYNIRHSFGKEGKRTDYTPFSCMKIILTNPPGQGDYHGCPFRHSDAELLKQKMQSYKIPASGISQILDLVKGNHYQVACQKYFEMTHNVDDCGFSLNHPNQFFFESQRILTGGKDIKKEISQPETPQHKPSTQKTRDAASALASLDSSLEMDLEGLEEYF",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P33610"},
		"label":"pri2_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.7.7.7"},{"db":"intact","id":"EBI-850519"}],
		"expansion":{"id":"0","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P20664"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26330094",
				"name":"prim2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-417"],
				"linkedFeatures":["14045312"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P33610"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"14045312",
				"name":"prim1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-505"],
				"linkedFeatures":["26330094"]
				},
				{
				"id":"11512148",
				"name":"pola1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-505"],
				"linkedFeatures":["9822654"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAPMHEEDCKLEASAVSDSGSFAASRARREKKSKKGRQEALERLKKAKAGEKYKYEVEDLTSVYEEVDEEQYSKLVQARQDDDWIVDDDGIGYVEDGREIFDDDLEDDALDTCGKGSDGKAHRKDRKDVKKPSVTKPNNIKAMFIASAGKKTTDKAVDLSKDDLLGDILQDLNTETAQITPPPVLIPKKKRSTGALLNPFSVHTPKAIPSGKPASPVLRNEPLLTPIPLKRAELAGELAQPECPEDEQELGVMEFEDGDFDESMDTEKVDEKPVTAKTWDQETEPVERVEHEADPERGTTSYLENFLPDVSCWDIDQDDESIPQEVQVDSSNLPLVKGADDEQVFQFYWLDAYEDPYNQPGVVFLFGKVWIESVKTHVSCCVMVKNIERTLYFLPREMKFDLNTGKETAIPVTMKDVYEEFDSKISAKYKIMKFKSKIVEKNYAFEIPDVPEKSEYLEVRYSAEVPQLPQNLKGETFSHVFGTNTSSLELFLMNRKIKGPCWLEVKNPQLLNQPISWCKFEVMALKPDLVNVIKDVSPPPLVVMSFSMKTMQNVQNHQHEIIAMAALVHHSFALDKAPPEPPFQTHFCVVSKPKDCIFPCDFKEVISKKNMKVEIAATERTLIGFFLAKVHKIDPDILVGHNICSFELEVLLQRINECKVPYWSKIGRLRRSNMPKLGSRSGFGERNATCGRMICDVEISAKELIHCKSYHLSELVQQILKTERIVIPTENIRNMYSESSYLLYLLEHIWKDARFILQIMCELNVLPLALQITNIAGNIMSRTLMGGRSERNEFLLLHAFYENNYIVPDKQIFRKPQQKLGDEDEEIDGDTNKYKKGRKKATYAGGLVLDPKVGFYDKFILLLDFNSLYPSIIQEFNICFTTVQRVTSEVQKATEDEEQEQIPELPDPNLEMGILPREIRKLVERRKQVKQLMKQQDLNPDLVLQYDIRQKALKLTANSMYGCLGFSYSRFYAKPLAALVTYKGREILMHTKDMVQKMNLEVIYGDTDSIMINTNSTNLEEVFKLGNKVKSEVNKLYKLLEIDIDAVFKSLLLLKKKKYAALVVEPTSDGNYITKQELKGLDIVRRDWCDLAKDTGNFVIGQILSDQSRDTIVENIQKRLIEIGENVLNGSVPVSQFEINKALTKDPQDYPDRKSLPHVHVALWINSQGGRKVKAGDTVSYVICQDGSNLTATQRAYAPEQLQKLDNLAIDTQYYLAQQIHPVVARICEPIDGIDAVLIALWLGLDSTQFRVHQYHKDEENDALLGGPAQLTDEEKYKDCEKFKCLCPSCGTENIYDNVFEGSGLDMEPSLYRCSNVDCKVSPLTFMVQLSNKLIMDIRRCIKKYYDGWLICEEPTCCSRLRRLPLHFSRNGPLCPVCMKAVLRPEYSDKSLYTQLCFYRYIFDADCALEKLTEHEKDKLKKQFFPLRVLQDYRKVKNIAEQFLSWSGYSEVNLSKLFANYAGKS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P33609"},
		"label":"dpola_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.7.7.7"},{"db":"intact","id":"EBI-850519"}],
		"expansion":{"id":"0","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P20664"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26330094",
				"name":"prim2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-417"],
				"linkedFeatures":["14045312"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P33609"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"3496479",
				"name":"pola2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1275-1465"],
				"linkedFeatures":["4136864"]
				},
				{
				"id":"9822654",
				"name":"prim2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1279-1465"],
				"linkedFeatures":["11512148"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSRLLWKKVAGAKVASGPVPATARWVASSVLDPVPSDGRPPSQMPSSENGQLRLNPLLIQMLSRGLHEQIFGCGGEMPDEAAVQRSVEHLQKHGLWGQPATPLPDVELRLPRLFGGNLDQHFRLLAQKQSLPYLEAAASLLEAQLPPEPKSWAWAEGWTRYGPEGEAEPVAIPEERALVFDVEVCLAEGTCPTLAVAISPSAWYSWCSRRLVEERYSWTSQLSPADLIPLGGSTSASSSTKQDGQEQLVVGHNVSFDRAHIREQYLIQDSRMRFLDTMSMHMAISGLSSFQRSLWMGAKQGKHKNPAAHKARAEVPEESQWSSESSSWDWMDISSANNLADVHNLYVGGPPLEKEPRELFVKGSMRDIRENFQDLMQYCARDVWATFEVFQQQLPLFLERCPHPVTLAGMLEMGVSYLPVNQNWERYLTEAQNTYEELQREMKKSLMDLANDACQLLSGERYKEDPWLWDLEWDLQEFKQKKAKKVKKPASASKLPIEGAGPFGDPMDQEDPGPPSEEEELQRSVTAHNRLQQLRSTTDLLPKRPQHLPGHPGWYRQLCPRLDDPAWAPGPSLLSLQMRVTPKLMALTWDGFPLHYSDSHGWGYLVPGRRDNLTEPPVSPTVESAAVTCPYRAIESLYRKHCLEQGKQQLEPQEVDLAEEFLLTDNSAMWQTVEELGCLDVEAEAKMENSGLSQPLVLPAACAPKSSQPTYHHGNGPYNDVNIPGCWFFKLPHKDGNNYNVGSPFAKDFLPKMEDGTLQAGPGGASGPRALEINKMISFWRNAHKRISSQMVVWLPRSALPRVVTRHPAFDEEGHYGAILPQVVTAGTITRRAVEPTWLTASNARPDRVGSELKAMVQAPPGYVLVGADVDSQELWIAAVLGDAHFAGMHGCTAFGWMTLQGRKSRGTDLHSKTAATVGISREHAKIFNYGRIYGAGQSFAERLLMQFNHRLTRQEAAEKAQQMYAVTKGLRRYRLSADGEWLVKQLNLPVDRTEDGWVSLQDLRMIRREASRKSRWKKWEVAAERAWTGGTESEMFNKLESIAMSDTPRTPVLGCCISRALEPSVVQGEFITSRVNWVVQSSAVDYLHLMLVAMKWLFEEFAIDGRFCISIHDEVRYLVREEDRYRAALALQITNLLTRCMFAYKLGLNDLPQSVAFFSAVDIDQCLRKEVTMDCKTPSNPTGMERRYGIPQGEALDIYQIIELTKGSLEKRKPAWTLALSGGSVFAPVELHWSGAGS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P54099"},
		"label":"dpog1_mouse"
	},
	{
		"object":"interactor",
		"sequence":"MRCGGGARACRRACRCWLSGYAGPADGTQQPDAPEHAVAREALVDLCRRRHFFSGTPQQLSTAALLSGCHARFGPLGVELRKNLASQWWSSMVVFREQVFAVDSLHQEPGSSQPRDSAFRLVSPESIREILQDREPSKEQLVAFLENLLKTSGKLRATLLHGALEHYVNCLDLVNRKLPFGLAQIGVCFHPVSNSNQTPSSVTRVGEKTEASLVWFTPTRTSSQWLDFWLRHRLLWWRKFAMSPSNFSSADCQDELGRKGSKLYYSFPWGKEPIETLWNLGDQELLHTYPGNVSTIQGRDGRKNVVPCVLSVSGDVDLGTLAYLYDSFQLAENSFARKKSLQRKVLKLHPCLAPIKVALDVGKGPTVELRQVCQGLLNELLENGISVWPGYSETVHSSLEQLHSKYDEMSVLFSVLVTETTLENGLIQLRSRDTTMKEMMHISKLRDFLVKYLASASNV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9QZM2"},
		"label":"dpog2_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.7.7.7"},{"db":"intact","id":"EBI-863650"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P54099"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9QZM2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MFSEQAAQRAHTLLAPPSASNATFARVPVATYTNSSQPFRLGERSFNRQYAHIYATRLIQMRPFLVSRAQQHWGSRVEVKKLCELQPGEQCCVVGTLFKAMSLQPSILREISEEHNLVPQPPRSKYIHPDDELVLEDELQRIKLKGTIDVSKLVTGTVLAVLGSAKDDGRFQVEDHCFADLAPQKPVPPLDTDRFVLLVSGLGLGGGGGESLLGTQLLVDVVTGQLGDEGEQCSAAHVSRVILAGNLLSHNTQSRDSINKAKYLTKKTQAASVEAVKMLDEILLQLSASVPVDVMPGEFDPTNYTLPQQPLHPCMFPLATAYSTLQLVTNPYQATIDGVRFLGTSGQNVSDIFRYSSMEDHLEILEWTLRVRHISPTAPDTLGCYPFYKTDPFIFPECPHVYFCGNTPSFGSKIIRGPEDQVVLLVAVPDFSSTQTACLVNLRSLACQPISFAGFGAEQEDLEGLGLGP",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"O35654"},
		"label":"dpod2_mouse"
	},
	{
		"object":"interactor",
		"sequence":"MGRKRFITDSYPVVKKREGPPGHSKGELAPELGEDTQSLSQEETELELLRQFDLAWQYGPCTGITRLQRWSRAEQMGLKPPLEVYQVLKAHPEDPHFQCSLWHLYPL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9CWP8"},
		"label":"dpod4_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.7.7.7"},{"db":"intact","id":"EBI-866799"}],
		"expansion":{"id":"1","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O35654"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9CWP8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDCKRRQGPGPGVPPKRARGHLWDEDEPSPSQFEANLALLEEIEAENRLQEAEEELQLPPEGTVGGQFSTADIDPRWRRPTLRALDPSTEPLIFQQLEIDHYVGSAPPLPEGPLPSRNSVPILRAFGVTDEGFSVCCHIQGFAPYFYTPAPPGFGAEHLSELQQELNAAISRDQRGGKELSGPAVLAIELCSRESMFGYHGHGPSPFLRITLALPRLMAPARRLLEQGVRVPGLGTPSFAPYEANVDFEIRFMVDADIVGCNWLELPAGKYVRRAEKKATLCQLEVDVLWSDVISHPPEGQWQRIAPLRVLSFDIECAGRKGIFPEPERDPVIQICSLGLRWGEPEPFLRLALTLRPCAPILGAKVQSYEREEDLLQAWADFILAMDPDVITGYNIQNFDLPYLISRAQALKVDRFPFLGRVTGLRSNIRDSSFQSRQVGRRDSKVISMVGRVQMDMLQVLLREHKLRSYTLNAVSFHFLGEQKEDVQHSIITDLQNGNEQTRRRLAVYCLKDAFLPLRLLERLMVLVNNVEMARVTGVPLGYLLTRGQQVKVVSQLLRQAMRQGLLMPVVKTEGSEDYTGATVIEPLKGYYDVPIATLDFSSLYPSIMMAHNLCYTTLLRPGAAQKLGLKPDEFIKTPTGDEFVKSSVRKGLLPQILENLLSARKRAKAELAQETDPLRRQVLDGRQLALKVSANSVYGFTGAQVGKLPCLEISQSVTGFGRQMIEKTKQLVESKYTVENGYDANAKVVYGDTDSVMCRFGVSSVAEAMSLGREAANWVSSHFPSPIRLEFEKVYFPYLLISKKRYAGLLFSSRSDAHDKMDCKGLEAVRRDNCPLVANLVTSSLRRILVDRDPDGAVAHAKDVISDLLCNRIDISQLVITKELTRAAADYAGKQAHVELAERMRKRDPGSAPSLGDRVPYVIIGAAKGVAAYMKSEDPLFVLEHSLPIDTQYYLEQQLAKPLLRIFEPILGEGRAESVLLRGDHTRCKTVLTSKVGGLLAFTKRRNCCIGCRSVIDHQGAVCKFCQPRESELYQKEVSHLNALEERFSRLWTQCQRCQGSLHEDVICTSRDCPIFYMRKKVRKDLEDQERLLQRFGPPGPEAW",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P52431"},
		"label":"dpod1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.7.7.7"},{"db":"intact","id":"EBI-866799"}],
		"expansion":{"id":"1","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O35654"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P52431"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAEQLYLENIDEFVTDQNKIVTYKWLSYTLGVHVNQAKQMLYEYVERKRKENSGAQLHVTYLVSGSLIQNGHSCHKVAVVREDKLEAVKSKLAVTASIHVYSIQKAMLKDSGPLFNTDYDILKSNLQNCSKFSAIQCAAAVPRAPAESPSSRKYEQSNLQAASEAQASELTTNGHGPPASKQASQQPKGIMGMLISKAATKTQDTNKETKPEAREVTSASSAGGKAPGKGSVMSNFFGKAAMNKLKVNLDSEQAVKEEKTVEQPPVSVTEPKLAAPPAQKKSSRKSEPGKVQQKEKSSRGKRVDLSDEEAKETEHLKKKRRRIKLPQSDSSEDEVFEDSPEMYEADSPSPPPVSPPPDPMPKTEPPPVKRSSGETKRRRKRVLKSKTFVDEEGCIVTEKVYESESCTDSEEELKMKPASAHKPPAAAVKREPREERKGPKKGAAALGKANRQVSITGFFQKK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9EQ28"},
		"label":"dpod3_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.7.7.7"},{"db":"intact","id":"EBI-866799"}],
		"expansion":{"id":"1","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O35654"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9EQ28"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MVLRNSGRRHPEPGADGEGSRDDGPSSSVSALKRLERSQWTDKMDLRFGFERLKEPGERTGWLINMHPTEILDEDKRLVSAVDYYFIQDDGSRFKVALPYMPYFYIAARKGCDREVSSFLSKKFQGKIAKLENVPKEDLDLPNHLVGLKRSYIKLSFHTVEDLVKVRKEISPAVKKNREQDHASDEYTTMLSSILQGGSVITDEDETSKKIADQLDNIVDMREYDVPYHIRLSIDLRIHVAHWYNVRFRGNAFPVEITRRDDLVERPDPVVLAFDIETTKLPLKFPDAETDQIMMISYMIDGQGYLITNREIVSEDIEDFEFTPKPEYEGPFCVFNEPDEVHLIQRWFEHIQETKPTIMVTYNGDFFDWPFVEARAAIHGLSMYQEIGFQKDSQGEYKAPQCIHMDCLRWVKRDSYLPVGSHNLKAAAKAKLGYDPVELDPEDMCRMATEQPQTLATYSVSDAVATYYLYMKYVHPFIFALCTIIPMEPDEVLRKGSGTLCEALLMVQAFHANIIFPNKQEQEFNKLTDDGHMLDAETYVGGHVEALESGVFRSDIPCRFRMNPAAFDFLLQRVEKTMRHAIEEEEKVPVEQATNFQEVCEQIKTKLTSLKDVPNRIECPLIYHLDVGAMYPNIILTNRLQPSAIVDEATCAACDFNKPGASCQRKMAWQWRGEFMPASRSEYHRIQHQLESEKFPPLFPEGPARAFHELSREEQAKYEKRRLADYCRKAYKKIHVTKVEERLTTICQRENSFYVDTVRAFRDRRYEFKGLHKVWKKKLSAAVEVGDASEVKRCKNMEILYDSLQLAHKCILNSFYGYVMRKGARWYSMEMAGIVCFTGANIITQARELIEQIGRPLELDTDGIWCVLPNSFPENFVIKTTNAKKPKLTISYPGAMLNIMVKEGFTNHQYQELTEPSSLTYVTHSENSIFFEVDGPYLAMILPASKEEGKKLKKRYAVFNEDGSLAELKGFEVKRRGELQLIKIFQSSVFEAFLKGSTLEEVYGSVAKVADYWLDVLYSKAANMPDSELFELISENRSMSRKLEDYGEQKSTSISTAKRLAEFLGDQMVKDAGLSCRYIISRKPEGSPVTERAIPLAIFQAEPTVRKHFLRKWLKSSSLQDFDIRTILDWDYYIERLGSAIQKIITIPAALQQVKNPVPRVKHPDWLHKKLLEKNDIYKQKKISELFVLEGKRQIVMAQASENSLSLCTPDMEDIGLTKPHHSTVPVATKRKRVWETQKESQDIALTVPWQEVLGQPPSLGTTQEEWLVWLQFHKKKWQLQAQQRLALRKKQRLESAEDMPRLGPIREGPSTGLGSFLRRTARSIMDLPWQIIQISETRQAGLFRLWAIIGNDLHCIKLSIPRVFYVNQRVAKAEDGPAYRKVNRALPRSNIVYNLYEYSVPEDMYQEHINEINTELSVPDIEGVYETQVPLLFRALVQLGCVCVVNKQLTRHLSGWEAETFALEHLEMRSLAQFSYLEPGSIRHIYLYHHTQGHKALFGVFIPSQRRASVFVLDTVRSNQMPGLSALYSSEHSLLLDKVDPKLLPPPKHTFEVRAETNLKTICRAIQRFLLAYKEERRGPTLIAVQSSWELCRLTSEIPVLEEFPLVPIRVADKISYAVLDWQRHGARRMIRHYLNLDLCLSQAFEMSRYFHIPVGNLPEDISTFGSDLFFARHLQHHNHLLWLSPTSRPDLGGKEADDNRLVMEFDDRATVEINSSGCYSTVCVELDIQNLAVNTILQSHHVNDMEGAGSMGISFDVIQQASLEDMVTGNQAASALANYDETALCSSTFRILKSMVVGWVKEITQYHNIYADNQVMHFYRWLQSPCSLLHDPALHRTLHNMMKKLFLQLIAEFKRLGSSVVYANFNRIILCTKKRRIEDALAYVEYITNSIHSKEIFHSLTISFSRCWEFLLWMDPSNYGGIKGKVPSSIHCGQVKEQDSQAREETDEEEEDKEKDEEEEGMGESEVEDLLENNWNILQFLPQAASCQSYFLMIVSAYIVAVYQSMKEELRHSAPGSTPVKRKGASQFSQESEGATGSLPGMITFSQDYVANELTQSFFTITQKIQKKVTGSRNTTEPSEMFPVLPGSHLLLNNPALEFIKYVCKVLSLDTNITNQVNKLNRDLLRLVDVGEFSEEAQFRDPCHSYVLPEVICHSCNFCRDLDLCKDSSFSQDGAILPQWLCSNCQAPYDSSAIESALVEALQRKLMAFTLQDLVCLKCRGMKETHMPVYCSCAGDFTLTIRTEVFMEQIRIFQNIAKYYSMSYLQETIEWLLQTSPVSNC",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9WVF7"},
		"label":"dpoe1_mouse"
	},
	{
		"object":"interactor",
		"sequence":"MAERPEDLNLPNAVITRIIKEALPDGVNISKEARSAISRAASVFVLYATSCANNFAMKGKRKTLNASDVLSAMEEMEFQRFITPLKEALEAYRRDEKGKKEASEQKKKDKDKKDSEEQDKSREVEEEDEERLDEDDQNEEEEIDN",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9JKP7"},
		"label":"dpoe3_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.7.7.7"},{"db":"intact","id":"EBI-876734"}],
		"expansion":{"id":"2","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9WVF7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9JKP7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAAAAAAGSGTPREEEAPGGEAAASQAQAPTSAPGGVRLSRLPLARVKALVKADPDVTLAGQEAIFILARAAELFVETIAKDAYCCAQQGKRKTLQRRDLDNAIEAVDEFAFLEGTLD",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9CQ36"},
		"label":"dpoe4_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.7.7.7"},{"db":"intact","id":"EBI-876734"}],
		"expansion":{"id":"2","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9WVF7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9CQ36"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAPERLRSRTVSAFKLRGLLLRSEATKYLTEALQSVTELELEENLGKIIDAVEKQPLSSNMIERSVVEAAVQECSQSMDETIEHVFNIIGAFDIPRFIYNSERKKFLPLSMTNHAAPTLFGTARDKAELYLERYTILHQRTHRHELFTPPVIGSHLEESGSKFQLKTIETLLGSTSKVGDVIVLGMITQLKEGKFFLEDPTGTVQLDLSKAQFHSGLYTEACFVLAEGWFEDQVFHANAFGFPPTEPSSTTRAYYGNINFFGGPSNASVKTYTKLRQLEDENKDAMFVIVSDVWLDQVQVLEKFHVMFSGYSPAPPTCFILCGNFSSAPYGKNQVQALKDSLKSLADIICEYPSIHQSSRFVFVPGPEDPGFGSILPRPPLAESITQEFRQRVPFSVFTTNPCRIQYCTQEIIIFREDLVNKMCRNCVRFPSSSLDIPTHFVKTILSQGHLAPLPLYVCPVHWAYDYTLRVYPVPDLLVIADKYDPFTVTNTDCLCINPGSFPRSGFAFKVFYPSSKTVEDSKLQGF",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"O54956"},
		"label":"dpoe2_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.7.7.7"},{"db":"intact","id":"EBI-876734"}],
		"expansion":{"id":"2","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9WVF7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O54956"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAESSESLSASSPARQRRRISDPLTSSPGRSSRRADALTSSPGRDLPPFEDESEGLLGTEGPMEEEEDGEELIGDGMERDYRPIPELDVYEAEGLALDDEDVEELTASQREAAERTMRQRDREAGRGLGRMRRGLLYDSSEEDEERPARKRRHVERATEDGEEDEEMIESIENLEDLKGHSVREWVSMAGPRLEIHHRFKNFLRTHVDSHGHNVFKERISDMCKENRESLVVNYEDLAAREHVLAYFLPEAPAELLQIFDEAALEVVLAMYPKYDRITNHIHVRISHLPLVEELRSLRQLHLNQLIRTSGVVTSCTGVLPQLSMVKYNCSKCNFVLGPFCQSQNQEVKPGSCPECQSAGPFEINMEETIYQNYQRIRIQESPGKVAAGRLPRSKDAILLADLVDSCKPGDEIELTGIYHNNYDGSLNTANGFPVFATIILANHVAKKDNKVAVGELTDEDVKMITGLSKDQQIGEKIFASIAPSIYGHEDIKRGLALALFGGEPKNPGGKHKVRGDINVLLCGDPGTAKSQFLKYIEKVSSRAIFTTGQGASAVGLTAYVQRHPVSREWTLEAGALVLADRGVCLIDEFDKMNDQDRTSIHEAMEQQSISISKAGIVTSLQARCTVIAAANPIGGRYDPSLTFSENVDLTEPIISRFDVLCVVRDTVDPVQDEMLARFVVGSHVRHHPSNKKDEGLTNGGTLEPAMPNTYGVEPLPQEVLKKYIIYAKERVRPKLNQMDQDKVARMYSDLRKESMATGSIPITVRHIESMIRMAEAHARMHLRDYVMEDDVNMAIRVMMESFIDTQKFSVMRSMRKTFARYLSFRRDNNDLLLFILKQLVAEQVTYQRNRFGAQQDTIEIPEKDLMDKARQINIHNLSAFYDSDLFKFNKFSRDLKRKLILQQF",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P97310"},
		"label":"mcm2_mouse"
	},
	{
		"object":"interactor",
		"sequence":"MAGTVVLDDVELREAQRDYLDFLDDEEDQGIYQNKVRELISDNQYRLIVSVNDLRRKNEKRANRLLNNAFEELVAFQRALKDFVASIDATYAKQYEEFYIGLEGSFGSKHVSPRTLTSCFLSCVVCVEGIVTKCSLVRPKVVRSVHYCPATKKTIERRYSDLTTLVAFPSSSVYPTKDEENNPLETEYGLSVYKDHQTITIQEMPEKAPAGQLPRSVDVILDDDLVDKVKPGDRIQVVGTYRCLPGKKGCYTSGTFRTVLIACNVKQMSKDIQPAFSADDIAKIKKFSKTRSKDVFEQLARSLAPSIHGHDYVKKAILCLLLGGVERELENGSHIRGDINILLIGDPSVAKSQLLRYVLCTAPRAIPTTGRGSSGVGLTAAVTTDQETGERRLEAGAMVLADRGVVCIDEFDKMSDMDRTAIHEVMEQGRVTIAKAGIHARLNARCSVLAAANPVYGRYDQYKTPMENIGLQDSLLSRFDLLFIMLDQMDPEQDREISDHVLRMHQYRAPGEQDGDALPLGSSVDILATDDPDFTQDDQQDTRIYEKHDSLLHGTKKKKEKMVSAAFMKKYIHVAKIIKPTLTQESAAYIAEEYSRLRSQDSMSSDTARTSPVTARTLETLIRLATAHAKARMSKTVDLQDAEEAVELVQYAYFKKVLEKEKKRKKASEDESDLEDEEEKSQEDTEQKRKRRKTHAKDGESYDPYDFSEAETQMPQVHTPKTDDSQEKTDDSQETQDSQKVELSEPRLKAFKAALLEVFQEAHEQSVGMLHLTESINRNREEPFSSEEIQACLSRMQDDNQVMVSEGIVFLI",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P25206"},
		"label":"mcm3_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-913651"}],
		"expansion":{"id":"3","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P97310"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P25206"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MALKDYAIEKEKVKKFLQEFYYENELGKKQFKYGTQLVHLAHREQVALYVDLDDIAEDDPELVDSICENAKRYSRLFGDVVQELLPEYKEKEVVNKDVLDVYIEHRLMMEQRSRDPGAVRNPQNQYPSELMRRFELYFRGPSSSKPRVIREVRADSVGKLLTVRGIVTRVSEVKPRMVVATYTCDQCGAETYQPIQSPTFMPLIMCPSQECQTNRSGGRLYLQTRGSKFVKFQEMKIQEHSDQVPVGNIPRSITVVLEGENTRIAQPGDHVSVTGIFLPVLRTGFQQMAQGLLSETYLEAHWIVKMTKSDDDVSGAGELSSEELKQIAEEDFYEKLAASIAPEIYGHEDVKKALLLLLVGGVDQSPQGMKIRGNIHICLMGDPGVAKSQLLSYIDRLAPRSQYTTGRGSSGVGLTAAVLRDSVSGELTLEGGALVLADQGVCCIDEFDKMAEADRTAIHEVMEQQTISIAKAGILTTLNARCSILAAANPAYGRYNPRRSLEQNVQLPAALLSRFDLLWLIQDRPDRDNDLRLAQHITYVHQHSRQPPAQFEPLDMKLMRRYIAMCHERQPTVPESLADYITAAYVEMRREARASKDATYTSARTLLAILRLSTALARLRMVDIVEKEDVNEAIRLMEMSKDSLLGEKGQTARTQRPADVIFATIRELVSRGRSVHFSEAEQRCISRGFTPAQFQAALDEYEELNVWQVNTSRTRITFV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q61881"},
		"label":"mcm7_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-913651"}],
		"expansion":{"id":"3","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P97310"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q61881"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSSPASTPSRRSSRRGRVTPTQSLRSEESRSSPNRRRRGEDSSTGELLPMPTSPGADLQSPPAQNALFSSPPQMHSLAIPLDFDVSSPLTYGTPSSRVEGTPRSGVRGTPVRQRPDLGSARKGLQVDLQSDGAAAEDIVPSEQSLGQKLVIWGTDVNVATCKENFQRFLQCFTDPLAKEEENVGIDITQPLYMQQLGEINITGEPFLNVNCEHIKSFSKNLYRQLISYPQEVIPTFDMAVNEIFFDRYPDSILEHQIQVRPFNALKTKSMRNLNPEDIDQLITISGMVIRTSQLIPEMQEAFFQCQVCAHTTRVEIDRGRIAEPCSCVHCHTTHSMALIHNRSFFSDKQMIKLQESPEDMPAGQTPHTIVLFAHNDLVDKVQPGDRVNVTGIYRAVPIRVNPRVSNVKSVYKTHIDVIHYRKTDAKRLHGLDEEAEQKLFSEKRVKLLKELSRKPDIYERLASALAPSIYEHEDIKKGILLQLFGGTRKDFSHTGRGKFRAEINILLCGDPGTSKSQLLQYVYNLVPRGQYTSGKGSSAVGLTAYVMKDPETRQLVLQTGALVLSDNGICCIDEFDKMNESTRSVLHEVMEQQTLSIAKAGIICQLNARTSVLAAANPIESQWNPKKTTIENIQLPHTLLSRFDLIFLMLDPQDEAYDRRLAHHLVSLYYQSEEQVEEEFLDMAVLKDYIAYAHSTIMPRLSEEASQALIEAYVNMRKIGSSRGMVSAYPRQLESLIRLAEAHAKVRFSNKVEAIDVEEAKRLHREALKQSATDPRTGIVDISILTTGMSATSRKRKEELAEALRKLILSKGKTPALKYQQLFEDIRGQSDTAITKDMFEEALRALADDDFLTVTGKTVRLL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P49717"},
		"label":"mcm4_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-913651"}],
		"expansion":{"id":"3","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P97310"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P49717"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDLAAAAEPGAGSQHPEVRDEVAEKCQKLFLDFLEEFQGSDGEIKYLQFAEELIRPERNTLVVSFADLEQFNQQLSTTIQEEFYRVYPYLCRALKTFVKDRKEIPFAKDFYVAFQDLPTRHKIRELTSSRIGLLTRISGQVVRTHPVHPELVSGTFLCLDCQTVIKDVEQQFKYTQPNICRNPVCANRKRFLLDTNKSRFVDFQKVRIQETQAELPRGSIPRSLEVILRAEAVESAQAGDRCDFTGALIVVPDVSKLSTPGARAETNSRVSGADGYETEGIRGLRALGVRDLSYRLVFLACHVAPTNPRFGGKELRDEEQTAESIKNQMTVKEWEKVFEMSQDKNLYHNLCTSLFPTIHGNDEVKRGVLLMLFGGVPKTTGEGTSLRGDINVCIVGDPSTAKSQFLKHVDEFSPRAVYTSGKASSAAGLTAAVVRDEESHEFVIEAGALMLADNGVCCIDEFDKMDMRDQVAIHEAMEQQTISITKAGVKATLNARTSILAAANPVSGHYDRSKSLKQNINLSAPIMSRFDLFFILVDECNEVTDYAIARRIVDLHSRIEESIDRVYSLDDIRRYLLFARQFKPKISKESEDFIVEQYKRLRQRDGSGVTKSSWRITVRQLESMIRLSESMARMHCCDEVQPKHVKEAFRLLNKSIIRVETPDVNLDQEEEIQMETDEGQGGVNGHADSPAPVNRFNGSSEDASQETVSKPSLRLGFAEYCRISNLIVLHLRKMEEEEDESALKRSELVNWYLKEIESEIDSEEELINKKTIIEKVVHRLTHYDHVLIELTQAGLKGSSEGSESYEEDPYLVVNPNYLLED",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P97311"},
		"label":"mcm6_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-913651"}],
		"expansion":{"id":"3","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P97310"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P97311"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSGFDDPGIFYSDSFGGDPGAEEGQARKSQLQRRFKEFLRQYRVGTDRTGFTFKYRDELKRHYNLGEYWIEVEMEDLASFDEELADHLHKQPAEHLQLLEEAAKEVADEVTRPRPAGDELLQDIQVMLKSDASPSSIRILKSDMMSHLVKIPGIIISASAVRAKATRISIQCRSCHNTLTNIAMPRPRGLCLPRKCNMDQAGRPKCPLDPYFIMPDKCKCVDFQTLKLQELPDAVPHGEMPRHMQLYCDRYLCDKVVPGNRVTIMGIYSIKKFGLNPSKGRDRVGVGIRSSYIRVLGIQVDTDGSGRSFAGSVSPQEEEEFRRLAALPNIYELISKSISPSIFGGMDMKKAIACLLFGGSRKRLPDGLTRRGDINLLMLGDPGTAKSQLLKFVEKCSPIGVYTSGKGSSAAGLTASVIRDPSSRNFIMEGGAMVLADGGVVCIDEFDKMREDDRVAIHEAMEQQTISIAKAGITTTLNSRCSVLAAANSVFGRWDETKGEDNIDFMPTILSRFDMIFIVKDEHNEERDMMLAKHVMTLHVSALTQTQAVEGEIDLAKMKKFIAYCRARCGPRLSAEAAEKLKNRYIIMRSGARQHERDSDRRSSIPITVRQLEAIVRIAEALSKMKLQPFATEADVEEALRLFQVSTLDAALSGNLSGVEGFTTQEDQEMLSRIEKQLKRRFAIGSQVSEHSIVQDFTKQKYPEHAIRKVLQLMLRRGEIQHRMQRKVLYRLK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P49718"},
		"label":"mcm5_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-913651"}],
		"expansion":{"id":"3","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P97310"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P49718"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDPSSKKVTGRLMLAVGGAVLGSLQFGYNTGVINAPQKVIEEFYNQTWNHRYGEPIPSTTLTTLWSLSVAIFSVGGMIGSFSVGLFVNRFGRRNSMLMMNLLAFVAAVLMGFSKLGKSFEMLILGRFIIGVYCGLTTGFVPMYVGEVSPTALRGALGTLHQLGIVVGILIAQVFGLDSIMGNADLWPLLLSVIFIPALLQCILLPFCPESPRFLLINRNEENRAKSVLKKLRGTADVTRDLQEMKEEGRQMMREKKVTILELFRSPAYRQPILIAVVLQLSQQLSGINAVFYYSTSIFEKAGVQQPVYATIGSGIVNTAFTVVSLFVVERAGRRTLHLIGLAGMAGCAVLMTIALALLERLPWMSYLSIVAIFGFVAFFEVGPGPIPWFIVAELFSQGPRPAAIAVAGFSNWTSNFIVGMCFQYVEQLCGPYVFIIFTVLLVLFFIFTYFKVPETKGRTFDEIASGFRQGGASQSDKTPEELFHPLGADSQV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P17809"},
		"label":"gtr1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-960644"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P17809"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P17809"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MNGPVDGLCDHSLSEEGAFMFTSESVGEGHPDKICDQISDAVLDAHLKQDPNAKVACETVCKTGMVLLCGEITSVAMVDYQRVVRDTIKHIGYDDSAKGFDFKTCNVLVALEQQSPDIAQCVHLDRNEEDVGAGDQGLMFGYATDETEECMPLTIVLAHKLNTRIADLRRSGVLPWLRPDSKTQVTVQYMQDNGAVIPVRIHTIVISVQHNEDITLEAMQEALKEQVIKAVVPAKYLDEDTVYHLQPSGRFVIGGPQGDAGVTGRKIIVDTYGGWGAHGGGAFSGKDYTKVDRSAAYAARWVAKSLVKAGLCRRVLVQVSYAIGVAEPLSISIFTYGTSNKTERELLEVVNKNFDLRPGVIVRDLDLKKPIYQKTACYGHFGRSEFPWEVPKKLVF",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q91X83"},
		"label":"metk1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"2.5.1.6"},{"db":"intact","id":"EBI-968137"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q91X83"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q91X83"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"2.5.1.6"},{"db":"intact","id":"EBI-968150"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q91X83"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q91X83"},
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
		"sequence":"MRKMLAAVSRVLAGSAQKPASRVLVASRNFANDATFEIKKCDLHRLEEGPPVTTVLTREDGLKYYRMMQTVRRMELKADQLYKQKIIRGFCHLCDGQEACCVGLEAGINPTDHLITAYRAHGFTFTRGLPVRAILAELTGRRGGCAKGKGGSMHMYAKNFYGGNGIVGAQVPLGAGIALACKYNGKDEVCLTLYGDGAANQGQIFEAYNMAALWKLPCIFICENNRYGMGTSVERAAASTDYYKRGDFIPGLRVDGMDILCVREATKFAAAYCRSGKGPILMELQTYRYHGHSMSDPGVSYRTREEIQEVRSKSDPIMLLKDRMVNSNLASVEELKEIDVEVRKEIEDAAQFATADPEPPLEELGYHIYSSDPPFEVRGANQWIKFKSVS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P35486"},
		"label":"odpa_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"1.2.4.1"},{"db":"intact","id":"EBI-1163757"}],
		"expansion":{"id":"4","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:18420"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P35486"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAVVAGLVRGPLRQASGLLKRRFHRSAPAAVQLTVREAINQGMDEELERDEKVFLLGEEVAQYDGAYKVSRGLWKKYGDKRIIDTPISEMGFAGIAVGAAMAGLRPICEFMTFNFSMQAIDQVINSAAKTYYMSAGLQPVPIVFRGPNGASAGVAAQHSQCFAAWYGHCPGLKVVSPWNSEDAKGLIKSAIRDNNPVVMLENELMYGVAFELPAEAQSKDFLIPIGKAKIERQGTHITVVAHSRPVGHCLEAAAVLSKEGIECEVINLRTIRPMDIEAIEASVMKTNHLVTVEGGWPQFGVGAEICARIMEGPAFNFLDAPAVRVTGADVPMPYAKVLEDNSVPQVKDIIFAVKKTLNI",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9D051"},
		"label":"odpb_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"1.2.4.1"},{"db":"intact","id":"EBI-1163757"}],
		"expansion":{"id":"4","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:18420"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9D051"},
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
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"1.2.4.1"},{"db":"intact","id":"EBI-1163757"}],
		"expansion":{"id":"4","name":"spoke expansion"},
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
		"sequence":"MDIRKFFGVISSGKKPVNETVKNEKTKASEGTVKGKKGVKEAKVNNSGKEDASKPKQHSKKKRIIYDSDSESEETVQVKNAKKKSEKLSLSYKPGKVSQKDPVTYVSETDEDDDFVCKKAASKSKENGVSTNSYLGTSNVKKNEENVKTKNKPLSPIKLTPTSVLDYFGTESVQRSGKKMVTSKRKESSQNTEDSRLNDEAIAKQLQLDEDAELERQLHEDEEFARTLALLDEEPKIKKARKDSEEGEESFSSVQDDLSKAEKQKSPNKAELFSTARKTYSPAKHGKGRASEDAKQPCKSAHRKEACSSPKASAKLALMKAKEESSYNETELLAARRKESATEPKGEKTTPKKTKVSPTKRESVSPEDSEKKRTNYQAYRSYLNREGPKALGSKEIPKGAENCLEGLTFVITGVLESIERDEAKSLIERYGGKVTGNVSKKTNYLVMGRDSGQSKSDKAAALGTKILDEDGLLDLIRTMPGKRSKYEMAAEAEMKKEKSKLERTPQKNDQGKRKISPAKKESESKKCKLTLLKNSPMKAVKKEASTCPRGLDVKETHGNRSSNKEECLLWVDKYKPASLKNIIGQQGDQSCANKLLRWLRNWHKSSPEEKKHAAKFGKLASKDDGSSFKAALLSGPPGVGKTTTASLVCQELGYSYVELNASDTRSKNSLKAVVAESLNNTSIKGFYTSGAAPSVSARHALIMDEVDGMAGNEDRGGIQELIGLIKHTKIPIICMCNDRNHPKIRSLVHYCFDLRFQRPRVEQIKSAMLSIAFKEGLKIPPPAMNEIILGANQDVRQVLHNLSMWCAQSKALTYDQAKADSQRAKKDIRLGPFDVTRKVFAAGEETAHMSLMDKSDLFFHDYSIAPLFVQENYLHVKPVAAGGDMKKHLMLLSRAADSICDGDLVDNQIRSKQNWSLLPTQAIYASVLPGELMRGYMTQFPSFPSWLGKHSSTGKHDRIVQDLSLHMSLRTYSSKRTVNMDYLSHIRDALVRPLTSQGVEGAQHVIKLMDTYYLMKEDFENIMEVSSWGGKPSAFSKLDPKVKAAFTRAYNKEAHLTPYSLQVVKTSRLSTGPALDSEYSEEFQEDDTQSEKEQDAVETDAMIKKKTRSSKPSKSEREKESKKGKGKNWKK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P35601"},
		"label":"rfc1_mouse"
	},
	{
		"object":"interactor",
		"sequence":"MEVQESGCDPSESGAQEPSPVPSKTAGHYELPWVEKYRPLKLNEIVGNEDTVSRLEVFAREGNVPNIIIAGPPGTGKTTSILCLARALLGPALKDAVLELNASNDRGIDVVRNKIKMFAQQKVTLPKGRHKIIILDEADSMTDGAQQALRRTMEIYSKTTRFALACNASDKIIEPIQSRCAVLRYTKLTDAQVLTRLMNVIEKEKVPYTDDGLEAIIFTAQGDMRQALNNLQSTFSGFGYINSENVFKVCDEPHPLLVKEMIQHCVDANIDEAYKILAHLWHLGYSPEDVIGNIFRVCKTFPMAEYLKLEFIKEIGYTHMKVAEGVNSLLQMAGLLARLCQKTMAPVAS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9WUK4"},
		"label":"rfc2_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1180247"}],
		"expansion":{"id":"5","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P35601"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9WUK4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MQAFLKGTSVSAKAQLTKDRGTPATAGSSGETKKVKPVPWVEKYRPKCVDEVAFQDEVVAVLRKSLEGADLPNLLFYGPPGTGKTSTILAAARELFGPELFRLRVLELNASDERGIQVVREKVKNFAQLTVSGSRSDGKPCPPFKIVILDEADSMTSAAQAALRRTMEKESKTTRFCLICNYVSRIIEPLTSRCSKFRFKPLSDKIQQERLLDIAEKENVKIGNEEIAYLVKISEGDLRKAITFLQSATRLTGGKEVSEDVITDIAGVIPAATIDGIFTACHSGSFDKLEAVVKNLIDEGHAATQLVNQLHDAIIENENLSDKHKSIITEKLAEVDKCLADGADEHLQLMSLCATVMQQLTQNC",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q99J62"},
		"label":"rfc4_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1180247"}],
		"expansion":{"id":"5","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P35601"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q99J62"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MTAAAPSQQRPAAARARNLPWVEKYRPQTLADLISHQDILSTIQKFISEDRLPHLLLYGPPGTGKTSTILACAKQLYKDKEFGSMVLELNASDDRGIDIVRGPILSFASTRTIFKKGFKLVILDEADAMTQDAQNALRRVIEKFTENTRFCLICNYLSKIIPALQSRCTRFRFGPLTPELMVPRLEHVVQEENVDISEDGMKALVTLSSGDMRRALNILQSTNMAFGKVTEETVYTCTGHPLKTDIANILDWMLNQDFTTAYKNIMELKTLKGLALHDILTEVHLFVHRVDFPSSVRIHLLTKMADIEYRLSVGTSEKIQLSSLIAAFQVTRDLIVAEA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9D0F6"},
		"label":"rfc5_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1180247"}],
		"expansion":{"id":"5","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P35601"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9D0F6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSLWVDKYRPSSLARLDYHKEQAAQLRNLVQCGDFPHLLVYGPSGAGKKTRIMCILRELYGIGVEKLRIEHQTITTPSKKKIEISTIASNYHLEVNPSDAGNSDRVVIQEMLKTVAQSQQLETSSQRDFKVVLLTEVDKLTKDAQHALRRTMEKYMSTCRLILCCNSTSKVIPPIRSRCLAVRVPAPSIEDICSVLSTVCRKEGLALPSTLARRLAEKSCRNLRKALLMCEACRVQQYPFTEDQEIPETDWEVYLRETANAIVSQQTPQRLLEVRGRLYELLTHCIPPEIIMKGLLSELLHNCDGQLKGEVAQMAAYYEHRLQLGSKAIYHLEAFVAKFMALYKKFMEDGLEGMMF",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q8R323"},
		"label":"rfc3_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1180247"}],
		"expansion":{"id":"5","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P35601"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q8R323"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MFEARLIQGSILKKVLEALKDLINEACWDVSSGGVNLQSMDSSHVSLVQLTLRSEGFDTYRCDRNLAMGVNLTSMSKILKCAGNEDIITLRAEDNADTLALVFEAPNQEKVSDYEMKLMDLDVEQLGIPEQEYSCVIKMPSGEFARICRDLSHIGDAVVISCAKNGVKFSASGELGNGNIKLSQTSNVDKEEEAVTIEMNEPVHLTFALRYLNFFTKATPLSPTVTLSMSADVPLVVEYKIADMGHLKYYLAPKIEDEEAS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P17918"},
		"label":"pcna_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-1208675"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P17918"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P17918"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKRSSVSTCGAGRLSMQELRTLDLNKPGLYTPQTKERSTFGKLSTHKPTSERKVSIFGKRTSGHGSRNSQLGIFSSSEKIKDPRPLNDKAFIQQCIRQLYEFLTENGYVYSVSMKSLQAPSTKEFLKIFAFLYGFLCPSYELPGTKCEEEVPRIFKALGYPFTLSKSSMYTVGAPHTWPHIVAALVWLIDCIKIDTAMKESSPLFDDGQLWGEETEDGIKHNKLFLEYTKKCYEKFMTGADSFEEEDAELQAKLKDLYKVDASKLESLEAENKALNEQIARLEEEREREPNRLMSLKKLKASLQADVQNYKAYMSNLESHLAVLKQKSNSLDEEIGRVEQECETVKQENTRLQSIVDNQKYSVADIERINHEKNELQQTINKLTKDLEAEQQQMWNEELKYARGKEAIEAQLAEYHKLARKLKLIPKGAENSKGYDFEIKFNPEAGANCLVKYRTQVYAPLKELLNESEEEINKALNKKRHLEDTLEQLNTMKTESKNTVRMLKEEIQKLDDLHQQAVKEAEEKDKKSASELESLEKHKHLLESGVNDGLSEAMDELDAVQREYQLTVKTTTEERRKVENNLQRLLEMVATHVGSLEKHLEEENAKADREYEEFMSEDLLENIREMAEKYKRNAAQLKAPDK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9D0F1"},
		"label":"ndc80_mouse"
	},
	{
		"object":"interactor",
		"sequence":"METLSFPRYNVAELVVHIRNKLLTGADGKNLSKSDFLPNPKSDVLYMIYMKALQLVYGVRLEHFYMMPMNIEVTYPHLMEGFLPVRSLFFYMDSFMPICRVNDFEIVDILNPRTNRTSRFLSGIINFIHFRETCLEKCEEFLLQNKSSMVRMQQLSNVHQEALMKLEKLNTVPAEEREEFKQFMDDIQELQHLLNEEFRQKTTLLQEEYAKMKSDISEKTKHLNEQKLSLVSLKEVEDNLKSKIVDSPEKLKNYKDKMKGTVQKLRSAREKVMEQYDIYRDSVDCLPSCQLEVQLYQKKSQDLADNREKLSSLLKESLNLEDQIESDSSELKKLKTEENSLIRMTTVKKEKLATARFKINKKQEDVKHYKQAMIEDCNKVQEKRDAVCEQVTTVNQEIHKIKSAIQQLRDTKKREILKSQEIFVNLKSALEKYHEGIEKVAEERSAKLEEKTAELKKRMVRMV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q99P69"},
		"label":"nuf2_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1209357"}],
		"expansion":{"id":"6","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9D0F1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q99P69"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAAFRDMVEVSNWLLSLLGANRAEAQQRRLLGSYEQMMERLLEMQDGAYRQLRETLAVEEEVAQSLLELKECTRQGDTELQQLEVELQRTSKEDTCVQARLRQLITELQELREMEEELQRQERDVDEDNTVTIPSAVYVAHLYHQISKIQWDYECEPGMIKGIHHGPTVAQPIHLDSAQLSPKFISDYLWSLVDTTWEPEP",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9D083"},
		"label":"spc24_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1209357"}],
		"expansion":{"id":"6","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9D0F1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9D083"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGEDELALLNQSINEFGDKFRNRLDDNHSQVLGLRDAFKDSMKAFSEKMSLKLKEEERMTEMILEYKNQLCKQNKLIQEKKENVLKMIAEVKGKEQESEELTAKIQELKEEYARKRETISTANKANEERLKGLQKSADLYRDYLGLEIRKIHGNKLQFIFTSIDPKNPESPYMFSMSINEAKEYEVYDSSPHLECLAEFQEKVRKTNNFSAFLANIRKAFIAKVHN",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q3UA16"},
		"label":"spc25_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1209357"}],
		"expansion":{"id":"6","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9D0F1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q3UA16"},
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
		"sequence":"MAALSNVRWLTRAVLAARNSGAWRGLGTSTAHAASQSQAQDVRVEGAFPVTMLPGDGVGPELMHAVKEVFKAAAVPVEFKEHHLSEVQNMASEEKLEQVLSSMKENKVAIIGKIYTPMEYKGELASYDMQLRRKLDLFANVVHVKSLPGYKTRHNNLDLVIIREQTEGEYSSLEHESAKGVIECLKIVTRTKSQRIAKFAFDYATKKGRSKVTAVHKANIMKLGDGLFLQCCEEVAELYPKIKFETMIIDNCCMQLVQNPYQFDVLVMPNLYGNIIDNLAAGLVGGAGVVPGESYSAEYAVFETGARHPFAQAVGRNIANPTAMLLSATNMLRHLNLEYHSSMIADAVKKVIKAGKVRTRDMGGYSTTTDFIKSVIGHLHPHGG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q91VA7"},
		"label":"q91va7_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"1.1.1.41"},{"db":"intact","id":"EBI-1216894"}],
		"expansion":{"id":"7","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:60240"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q91VA7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAGSAWVSKVSRLLGAFHNTKQVTRGFAGGVQTVTLIPGDGIGPEISASVMKIFDAAKAPIQWEERNVTAIQGPGGKWMIPPEAKESMDKNKMGLKGPLKTPIAAGHPSMNLLLRKTFDLYANVRPCVSIEGYKTPYTDVNIVTIRENTEGEYSGIEHVIVDGVVQSIKLITEEASKRIAEFAFEYARNNHRSNVTAVHKANIMRMSDGLFLQKCREVAENCKDIKFNEMYLDTVCLNMVQDPSQFDVLVMPNLYGDILSDLCAGLIGGLGVTPSGNIGANGVAIFESVHGTAPDIAGKDMANPTALLLSAVMMLRHMGLFDHAAKIEAACFATIKDGKSLTKDLGGNAKCSDFTEEICRRVKDLD",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9D6R2"},
		"label":"idh3a_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"1.1.1.41"},{"db":"intact","id":"EBI-1216894"}],
		"expansion":{"id":"7","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:60240"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9D6R2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MALKVAIAAGGAAKAMLKPTLLCRPWEVLAAHVAPRRSISSQQTIPPSAKYGGRHTVTMIPGDGIGPELMLHVKSVFRHACVPVDFEEVHVSSNADEEDIRNAIMAIRRNRVALKGNIETNHNLPPSHKSRNNILRTSLDLYANVIHCKSLPGVVTRHKDIDILIVRENTEGEYSSLEHESVAGVVESLKIITKAKSLRIAEYAFKLAQESGRKKVTAVHKANIMKLGDGLFLQCCREVAAHYPQITFDSMIVDNTTMQLVSRPQQFDVMVMPNLYGNIVNNVCAGLVGGPGLVAGANYGHVYAVFETATRNTGKSIANKNIANPTATLLASCMMLDHLKLHSYATSIRKAVLASMDNENMHTPDIGGQGTTSQAIQDIIRHIRIINGRAVEA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P70404"},
		"label":"idhg1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"1.1.1.41"},{"db":"intact","id":"EBI-1216894"}],
		"expansion":{"id":"7","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:60240"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P70404"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAAFLLRHVSRHCLRAHLNAQLCIRNAAPLGTTAKEEMERFWKKNTSSNRPLSPHLTIYKWSLPMALSVCHRGSGIALSGGVSLFGLSALLLPGNFESYLMFVKSLCLGPTLIYSAKFVLVFPLMYHSLNGIRHLLWDLGKGLAIPQVWLSGVAVVVLAVLSSGGLAAL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9CZB0"},
		"label":"c560_mouse"
	},
	{
		"object":"interactor",
		"sequence":"MAVLLKLGVLCSGQGARALLLRSRVVRPAYVSAFLQDQPTQGRCGTQHIHLSPSHHSGSKAASLHWTSERVVSVLLLGLIPAGYLNPCSVVDYSLAAALTLHSHWGLGQVVTDYVHGDTLPKAARAGLLALSALTFAGLCYFNYHDVGICRAVAMLWKL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9CXV1"},
		"label":"dhsd_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"1.3.5.1"},{"db":"intact","id":"EBI-1224947"}],
		"expansion":{"id":"8","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9CZB0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9CXV1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAATVGVSLKRGFPAAVLGRVGLQFQACRGAQTAAAAAPRIKKFAIYRWDPDKTGDKPRMQTYEVDLNKCGPMVLDALIKIKNEVDSTLTFRRSCREGICGSCAMNINGGNTLACTRRIDTDLSKVSKIYPLPHMYVIKDLVPDLSNFYAQYKSIEPYLKKKDESQEGKQQYLQSIEDREKLDGLYECILCACCSTSCPSYWWNGDKYLGPAVLMQAYRWMIDSRDDFTEERLAKLQDPFSVYRCHTIMNCTQTCPKGLNPGKAIAEIKKMMATYKEKRALA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9CQA3"},
		"label":"sdhb_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"1.3.5.1"},{"db":"intact","id":"EBI-1224947"}],
		"expansion":{"id":"8","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9CZB0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9CQA3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAGVGAVSRLLRGRRLALTGAWPGTLQKQTCGFHFSVGENKKASAKVSDAISTQYPVVDHEFDAVVVGAGGAGLRAAFGLSEAGFNTACLTKLFPTRSHTVAAQGGINAALGNMEEDNWRWHFYDTVKGSDWLGDQDAIHYMTEQAPASVVELENYGMPFSRTEDGKIYQRAFGGQSLKFGKGGQAHRCCCVADRTGHSLLHTLYGRSLRYDTSYFVEYFALDLLMENGECRGVIALCIEDGSIHRIRAKNTVIATGGYGRTYFSCTSAHTSTGDGTAMVTRAGLPCQDLEFVQFHPTGIYGAGCLITEGCRGEGGILINSQGERFMERYAPVAKDLASRDVVSRSMTLEIREGRGCGPEKDHVYLQLHHLPPEQLATRLPGISETAMIFAGVDVTKEPIPVLPTVHYNMGGIPTNYKGQVLKHVNGQDQIVPGLYACGEAACASVHGANRLGANSLLDLVVFGRACALSIAESCRPGDKVPSIKANAGEESVMNLDKLRFADGSIRTSELRLNMQKSMQNHAAVFRVGSVLQEGCEKISQLYGDLKHLKTFDRGMVWNTDLVETLELQNLMLCALQTIYGAEARKESRGAHAREDYKVRVDEYDYSKPIQGQQKKPFGEHWRKHTLSYVDIKTGKVTLEYRPVIDKTLNEADCATVPPAIRSY",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q8K2B3"},
		"label":"sdha_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"1.3.5.1"},{"db":"intact","id":"EBI-1224947"}],
		"expansion":{"id":"8","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9CZB0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q8K2B3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
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
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"1.3.5.1"},{"db":"intact","id":"EBI-1224947"}],
		"expansion":{"id":"8","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9CZB0"},
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
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"1.3.5.1"},{"db":"intact","id":"EBI-1224947"}],
		"expansion":{"id":"8","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9CZB0"},
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
		"sequence":"MAAAAASLRRTVLGPRGVGLPGASAPGLLGGARSRQLPLRTPQAVSLSSKSGPSRGRKVMLSALGMLAAGGAGLAVALHSAVSASDLELHPPSYPWSHRGLLSSLDHTSIRRGFQVYKQVCSSCHSMDYVAYRHLVGVCYTEEEAKALAEEVEVQDGPNDDGEMFMRPGKLSDYFPKPYPNPEAARAANNGALPPDLSYIVRARHGGEDYVFSLLTGYCEPPTGVSLREGLYFNPYFPGQAIGMAPPIYTEVLEYDDGTPATMSQVAKDVATFLRWASEPEHDHRKRMGLKMLLMMGLLLPLTYAMKRHKWSVLKSRKLAYRPPK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9D0M3"},
		"label":"cy1_mouse"
	},
	{
		"object":"interactor",
		"sequence":"MLSRFLGPRYRELARNWIPTAGMWGTVGAVGLVWATDWRLILDWVPYINGKFKKDD",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9CPX8"},
		"label":"qcr10_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"1.10.2.2"},{"db":"intact","id":"EBI-1225003"}],
		"expansion":{"id":"9","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9D0M3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9CPX8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGLEDERKMLTGSGDPKEEEEEELVDPLTTVREHCEQLEKCVKARERLELCDNRVSSRSQTEEDCTEELFDFLHARDHCVAHKLFKNLK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P99028"},
		"label":"qcr6_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"1.10.2.2"},{"db":"intact","id":"EBI-1225003"}],
		"expansion":{"id":"9","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9D0M3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P99028"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGREFGNLARIRHVISYSLSPFEQRAFPSYFSKGIPNVLRRTRERILRVAPPFVVVYLIYTWGNQEFEQSKRKNPAMYENDK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9CQ69"},
		"label":"qcr8_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"1.10.2.2"},{"db":"intact","id":"EBI-1225003"}],
		"expansion":{"id":"9","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9D0M3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9CQ69"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSSPTIPSRLYSLLFRRTSTFALTIAVGALFFERAFDQGADAIYEHINEGKLWKHIKHKYENKE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q8R1I1"},
		"label":"qcr9_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"1.10.2.2"},{"db":"intact","id":"EBI-1225003"}],
		"expansion":{"id":"9","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9D0M3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q8R1I1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAASAVCRAACSGTQVLLRTRRSPALLRLPALRGTATFAQALQSVPETQVSILDNGLRVASEQSSHATCTVGVWIDAGSRYETEKNNGAGYFLEHLAFKGTKNRPGNALEKEVESIGAHLNAYSTREHTAYLIKALSKDLPKVVELLADIVQNSSLEDSQIEKERDVILREMQENDASMQNVVFDYLHATAFQGTPLAQAVEGPSENVRRLSRTDLTDYLNRHYKAPRMVLAAAGGVEHQQLLDLAQKHLSSVSRVYEEDAVPGLTPCRFTGSEIRHRDDALPLAHVAIAVEGPGWANPDNVTLQVANAIIGHYDCTYGGGVHLSSPLASVAVANKLCQSFQTFNISYSDTGLLGAHFVCDAMSIDDMVFFLQGQWMRLCTSATESEVTRGKNILRNALVSHLDGTTPVCEDIGRSLLTYGRRIPLAEWESRIQEVDAQMLRDICSKYFYDQCPAVAGYGPIEQLPDYNRIRSGMFWLRF",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9CZ13"},
		"label":"qcr1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"1.10.2.2"},{"db":"intact","id":"EBI-1225003"}],
		"expansion":{"id":"9","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9D0M3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9CZ13"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MTNMRKTHPLFKIINHSFIDLPAPSNISSWWNFGSLLGVCLMVQIITGLFLAMHYTSDTMTAFSSVTHICRDVNYGWLIRYMHANGASMFFICLFLHVGRGLYYGSYTFMETWNIGVLLLFAVMATAFMGYVLPWGQMSFWGATVITNLLSAIPYIGTTLVEWIWGGFSVDKATLTRFFAFHFILPFIIAALAIVHLLFLHETGSNNPTGLNSDADKIPFHPYYTIKDILGILIMFLILMTLVLFFPDMLGDPDNYMPANPLNTPPHIKPEWYFLFAYAILRSIPNKLGGVLALILSILILALMPFLHTSKQRSLMFRPITQILYWILVANLLILTWIGGQPVEHPFIIIGQLASISYFSIILILMPISGIIEDKMLKLYP",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P00158"},
		"label":"cyb_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"1.10.2.2"},{"db":"intact","id":"EBI-1225003"}],
		"expansion":{"id":"9","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9D0M3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P00158"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKLLSRAGSFSRFYSLKVAPKVKTSAAPGGVPLQPQDLEFTKLPNGLVIASLENYAPLSRIGLFVKAGSRYEDSNNLGTSHLLRLASSLTTKGASSFKITRGIEAVGGKLSVTATRENMAYTVEGIRSDIEILMEFLLNVTTAPEFRRWEVAALRSQLKIDKAVAFQNSQTRIIENLHDVAYKNALANPLYCPDYRMGKITSEELHYFVQNHFTSARMALVGLGVSHSVLKQVAEQFLNMRGGLGLAGAKAKYRGGEIREQNGDNLVHAAIVAESAAIGNAEANAFSVLQHLLGAGPHIKRGNNTTSLLSQSVAKGSHQPFDVSAFNASYSDSGLFGIYTISQAAAAGEVINAAYNQVKAVAQGNLSSADVQAAKNKLKAGYLMSVETSEGFLSEIGSQALAAGSYMPPSTVLQQIDSVADADVVKAAKKFVSGKKSMAASGNLGHTPFLDEL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9DB77"},
		"label":"qcr2_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"1.10.2.2"},{"db":"intact","id":"EBI-1225003"}],
		"expansion":{"id":"9","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9D0M3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9DB77"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLSVAARSGPFAPVLSATSRGVAGALRPLLQGAVPAASEPPVLDVKRPFLCRESLSGQAAARPLVATVGLNVPASVRFSHTDVKVPDFSDYRRAEVLDSTKSSKESSEARKGFSYLVTATTTVGVAYAAKNVVSQFVSSMSASADVLAMSKIEIKLSDIPEGKNMAFKWRGKPLFVRHRTKKEIDQEAAVEVSQLRDPQHDLDRVKKPEWVILIGVCTHLGCVPIANAGDFGGYYCPCHGSHYDASGRIRKGPAPLNLEVPAYEFTSDDVVVVG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9CR68"},
		"label":"ucri_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"1.10.2.2"},{"db":"intact","id":"EBI-1225003"}],
		"expansion":{"id":"9","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9D0M3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9CR68"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAGRSAVSASSKWLDGFRKWYYNAAGFNKLGLMRDDTLHETEDVKEAIRRLPEDLYNDRMLRIKRALDLTMRHQILPKDQWTKYEEDKFYLEPYLKEVIRERKEREEWAKK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9D855"},
		"label":"qcr7_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"1.10.2.2"},{"db":"intact","id":"EBI-1225003"}],
		"expansion":{"id":"9","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9D0M3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9D855"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLEEPEAATRTAAAVDCKDRPGFPVKRLIQARLPFKRLNLVPKEKVEEDTSPKAAVESKVPDLQLSLGTFESQCHTGSHVGLSTKLVGGQGPIDSFLRATIKPVPSVVIIDLTENCSDIPDSPEGHSELSPDTAGVVTTVEGAAKQQEHSAAELCLLETPSDITCHMEEEPGSPGDPKRTGDCQAGSLQSCPELTPGSRTCPTKELSSWSKAGDLLFIEKVPVVVLEDILATKPSIASLPMMSLDRSVTSESEILESCPEDDSILSHSSTNSSSPTSSPEGPSTPPEHRGGRSSPSTPACRVAKNFVKGSTEKGRSKLHRDREQQREEKEKLREEIRRAKEEARKKKEEEKELKEKERREKREKDEKEKAEKQRLKEEKRKERQEALEAKLEEKRKKEEEKRLREEEKRLREEEKRIKAEKAEITRFFQKPKTPQAPKTLAGSCGKFAPFEIKEHMVLAPRCRAALDQDLCDQLDQLLQQQSVASTFLSDLKSRLPLRSGPTRVCGHDTDIMNRDVVIVESSKVDGVSERKKFGRMKLLQFSENHRPAYWGTWNKKTAIIRPRNPWAQDKDLLDYEVDSDDEWEEEEPGESLSHSEGDEDDDVGEDEDEDDGFFVPHGYLSEDEGVTEECADPENHKVHQKLKAKEWDELLAKGKRFRVLQPVHVGCVWASEAANCTSSDLKLLQQFTACLLDVASPDEPEPGASRREKRDQHILAQLLPLLHGNVNGSKVIIHEFQEQCRRGLLTLPSPTPHLQMPNLEDAVAVPSKARLKRLISENSAYEKRPNFRMCWYVHPEVLKSFGQECLPVPCQWTYITTMPSAPREDSGSASTEGPGQSTPMLLKRKPAATMCITQFMKKRRYDGQVGSGDMDGFQADTEEDEEDDTDCMIIDVPDVGSDVSEAPIPAPTLCK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9QWF0"},
		"label":"caf1a_mouse"
	},
	{
		"object":"interactor",
		"sequence":"MKVITCEIAWHNKEPVYSLDFQHGATWKIHRLASAGVDTAVRIWKLERGPDGKAIVEFLSNLARHTKAVNVVRFSPTGEILASGGDDAVILLWKMNDSKEPEQIAFQDEEEAQLNKENWTVVKTLRGHLEDVYDICWATDGNLMTSASVDNTVIIWDVSKGQKISIFNEHKSYVQGVTWDPLGQYIATLSCDRVLRIYNTQKKRVAFNISKMLSGQGPEGEARSFRMFHDDSMKSFFRRLSFTPDGSLLLTPAGCMESGENVTNTTYVFSRKHLKRPIAHLPCPGKATLAVRCCPVYFELRPVAETEKASEEPSPELVNLPYRMVFAVASEDSVLLYDTQQSFPFGYVSNIHYHTLSDISWSSDGAFLAISSTDGYCTFVTFEKGELGIPLKEKPVLSIRTPDTAKKAKNQTHQGSSPGSRSVEGTPSNRTQDPSSPCTTPSPTTQSPAPSAIKDSPSAIPAGKSPLPQPSEEKTLQPAGQNMKAPQPRRVTLNTLQTWGKTAPRRINLTPLKTDTVPNPQPNSGTAPSTEEVQPEAPGEPPEEPPELKRPRLEEREGDAQNLAPDDSSKTV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9D0N7"},
		"label":"caf1b_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1236724"}],
		"expansion":{"id":"10","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9QWF0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"1542253",
				"name":"rbbp4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["16627042"]
				},
				{
				"id":"9394519",
				"name":"caf1b binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["20085962"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9D0N7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"20085962",
				"name":"caf1a binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["9394519"]
				},
				{
				"id":"27180722",
				"name":"rbbp4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["16366022"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MADKEAAFDDAVEERVINEEYKIWKKNTPFLYDLVMTHALEWPSLTAQWLPDVTRPEGKDFSIHRLVLGTHTSDEQNHLVIASVQLPNDDAQFDASHYDSEKGEFGGFGSVSGKIEIEIKINHEGEVNRARYMPQNPCIIATKTPSSDVLVFDYTKHPSKPDPSGECNPDLRLRGHQKEGYGLSWNPNLSGHLLSASDDHTICLWDISAVPKEGKVVDAKTIFTGHTAVVEDVSWHLLHESLFGSVADDQKLMIWDTRSNNTSKPSHSVDAHTAEVNCLSFNPYSEFILATGSADKTVALWDLRNLKLKLHSFESHKDEIFQVQWSPHNETILASSGTDRRLNVWDLSKIGEEQSPEDAEDGPPELLFIHGGHTAKISDFSWNPNEPWVICSVSEDNIMQVWQMAENIYNDEDPEGSVDPEGQGS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q60972"},
		"label":"rbbp4_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1236724"}],
		"expansion":{"id":"10","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9QWF0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"1542253",
				"name":"rbbp4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["16627042"]
				},
				{
				"id":"9394519",
				"name":"caf1b binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["20085962"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q60972"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"16627042",
				"name":"caf1a binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1542253"]
				},
				{
				"id":"16366022",
				"name":"caf1b binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["27180722"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLSFVDTRTLLLLAVTSCLATCQYLQSGSVRKGPTGDRGPRGQRGPAGPRGRDGVDGPMGPPGPPGSPGPPGSPAPPGLTGNFAAQYSDKGVSSGPGPMGLMGPRGPPGAVGAPGPQGFQGPAGEPGEPGQTGPAGPRGPAGSPGKAGEDGHPGKPGRPGERGVVGPQGARGFPGTPGLPGFKGVKGHSGMDGLKGQPGAQGVKGEPGAPGENGTPGQAGARGLPGERGRVGAPGPAGARGSDGSVGPVGPAGPIGSAGPPGFPGAPGPKGELGPVGNPGPAGPAGPRGEVGLPGLSGPVGPPGNPGTNGLTGAKGATGLPGVAGAPGLPGPRGIPGPAGAAGATGARGLVGEPGPAGSKGESGNKGEPGSVGAQGPPGPSGEEGKRGSPGEAGSAGPAGPPGLRGSPGSRGLPGADGRAGVMGPPGNRGSTGPAGIRGPNGDAGRPGEPGLMGPRGLPGSPGNVGPSGKEGPVGLPGIDGRPGPIGPAGPRGEAGNIGFPGPKGPSGDPGKPGERGHPGLAGARGAPGPDGNNGAQGPPGPQGVQGGKGEQGPAGPPGFQGLPGPSGTTGEVGKPGERGLPGEFGLPGPAGPRGERGTPGESGAAGPSGPIGSRGPSGAPGPDGNKGEAGAVGAPGSAGASGPGGLPGERGAAGIPGGKGEKGETGLRGDTGNTGRDGARGIPGAVGAPGPAGASGDRGEAGAAGPSGPAGPRGSPGERGEVGPAGPNGFAGPAGAAGQPGAKGEKGTKGPKGENGIVGPTGSVGAAGPSGPNGPPGPVGSRGDGGPPGMTGFPGAAGRTGPPGPSGIAGPPGPPGAAGKEGIRGPRGDQGPVGRTGETGASGPPGFVGEKGPSGEPGTAGAPGTAGPQGLLGAPGILGLPGSRGERGLPGIAGALGEPGPLGISGPPGARGPPGAVGSPGVNGAPGEAGRDGNPGSDGPPGRDGQPGHKGERGYPGSIGPTGAAGAPGPHGSVGPAGKHGNRGEPGPAGSVGPVGAVGPRGPSGPQGIRGDKGEPGDKGHRGLPGLKGYSGLQGLPGLAGLHGDQGAPGPVGPAGPRGPAGPSGPVGKDGRSGQPGPVGPAGVRGSQGSQGPAGPPGPPGPPGPPGVSGGGYDFGFEGDFYRADQPRSQPSLRPKDYEVDATLKSLNNQIETLLTPEGSRKNPARTCRDLRLSHPEWNSDYYWIDPNQGCTMDAIKVYCDFSTGETCIQAQPVNTPAKNSYSRAQANKHVWLGETINGGSQFEYNVEGVSSKEMATQLAFMRLLANRASQNITYHCKNSIAYLDEETGSLNKAVLLQGSNDVELVAEGNSRFTYSVLVDGCSKKTNEWGKTIIEYKTNKPSRLPFLDIAPLDIGGADQEFRVEVGPVCFK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q01149"},
		"label":"co1a2_mouse"
	},
	{
		"object":"interactor",
		"sequence":"MFSFVDLRLLLLLGATALLTHGQEDIPEVSCIHNGLRVPNGETWKPEVCLICICHNGTAVCDDVQCNEELDCPNPQRREGECCAFCPEEYVSPNSEDVGVEGPKGDPGPQGPRGPVGPPGRDGIPGQPGLPGPPGPPGPPGPPGLGGNFASQMSYGYDEKSAGVSVPGPMGPSGPRGLPGPPGAPGPQGFQGPPGEPGEPGGSGPMGPRGPPGPPGKNGDDGEAGKPGRPGERGPPGPQGARGLPGTAGLPGMKGHRGFSGLDGAKGDAGPAGPKGEPGSPGENGAPGQMGPRGLPGERGRPGPPGTAGARGNDGAVGAAGPPGPTGPTGPPGFPGAVGAKGEAGPQGARGSEGPQGVRGEPGPPGPAGAAGPAGNPGADGQPGAKGANGAPGIAGAPGFPGARGPSGPQGPSGPPGPKGNSGEPGAPGNKGDTGAKGEPGATGVQGPPGPAGEEGKRGARGEPGPSGLPGPPGERGGPGSRGFPGADGVAGPKGPSGERGAPGPAGPKGSPGEAGRPGEAGLPGAKGLTGSPGSPGPDGKTGPPGPAGQDGRPGPAGPPGARGQAGVMGFPGPKGTAGEPGKAGERGLPGPPGAVGPAGKDGEAGAQGAPGPAGPAGERGEQGPAGSPGFQGLPGPAGPPGEAGKPGEQGVPGDLGAPGPSGARGERGFPGERGVQGPPGPAGPRGNNGAPGNDGAKGDTGAPGAPGSQGAPGLQGMPGERGAAGLPGPKGDRGDAGPKGADGSPGKDGARGLTGPIGPPGPAGAPGDKGEAGPSGPPGPTGARGAPGDRGEAGPPGPAGFAGPPGADGQPGAKGEPGDTGVKGDAGPPGPAGPAGPPGPIGNVGAPGPKGPRGAAGPPGATGFPGAAGRVGPPGPSGNAGPPGPPGPVGKEGGKGPRGETGPAGRPGEVGPPGPPGPAGEKGSPGADGPAGSPGTPGPQGIAGQRGVVGLPGQRGERGFPGLPGPSGEPGKQGPSGSSGERGPPGPMGPPGLAGPPGESGREGSPGAEGSPGRDGAPGAKGDRGETGPAGPPGAPGAPGAPGPVGPAGKNGDRGETGPAGPAGPIGPAGARGPAGPQGPRGDKGETGEQGDRGIKGHRGFSGLQGPPGSPGSPGEQGPSGASGPAGPRGPPGSAGSPGKDGLNGLPGPIGPPGPRGRTGDSGPAGPPGPPGPPGPPGPPSGGYDFSFLPQPPQEKSQDGGRYYRADDANVVRDRDLEVDTTLKSLSQQIENIRSPEGSRKNPARTCRDLKMCHSDWKSGEYWIDPNQGCNLDAIKVYCNMETGQTCVFPTQPSVPQKNWYISPNPKEKKHVWFGESMTDGFPFEYGSEGSDPADVAIQLTFLRLMSTEASQNITYHCKNSVAYMDQQTGNLKKALLLQGSNEIELRGEGNSRFTYSTLVDGCTSHTGTWGKTVIEYKTTKTSRLPIIDVAPLDIGAPDQEFGLDIGPACFV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P11087"},
		"label":"co1a1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9212967"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q01149"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P11087"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MIRLGAPQSLVLLTLLIAAVLRCQGQDAQEAGSCLQNGQRYKDKDVWKPSSCRICVCDTGNVLCDDIICEDPDCLNPEIPFGECCPICPADLATASGKLGPKGQKGEPGDIRDIIGPRGPPGPQGPAGEQGPRGDRGDKGEKGAPGPRGRDGEPGTPGNPGPAGPPGPPGPPGLSAGNFAAQMAGGYDEKAGGAQMGVMQGPMGPMGPRGPPGPAGAPGPQGFQGNPGEPGEPGVSGPMGPRGPPGPAGKPGDDGEAGKPGKSGERGLPGPQGARGFPGTPGLPGVKGHRGYPGLDGAKGEAGAPGVKGESGSPGENGSPGPMGPRGLPGERGRTGPAGAAGARGNDGQPGPAGPPGPVGPAGGPGFPGAPGAKGEAGPTGARGPEGAQGSRGEPGNPGSPGPAGASGNPGTDGIPGAKGSAGAPGIAGAPGFPGPRGPPGPQGATGPLGPKGQAGEPGIAGFKGDQGPKGETGPAGPQGAPGPAGEEGKRGARGEPGGAGPIGPPGERGAPGNRGFPGQDGLAGPKGAPGERGPSGLTGPKGANGDPGRPGEPGLPGARGLTGRPGDAGPQGKVGPSGAPGEDGRPGPPGPQGARGQPGVMGFPGPKGANGEPGKAGEKGLAGAPGLRGLPGKDGETGAAGPPGPSGPAGERGEQGAPGPSGFQGLPGPPGPPGEGGKQGDQGIPGEAGAPGLVGPRGERGFPGERGSPGAQGLQGPRGLPGTPGTDGPKGAAGPDGPPGAQGPPGLQGMPGERGAAGIAGPKGDRGDVGEKGPEGAPGKDGGRGLTGPIGPPGPAGANGEKGEVGPPGPSGSTGARGAPGERGETGPPGPAGFAGPPGADGQPGAKGDQGEAGQKGDAGAPGPQGPSGAPGPQGPTGVTGPKGARGAQGPPGATGFPGAAGRVGPPGANGNPGPAGPPGPAGKDGPKGVRGDSGPPGRAGDPGLQGPAGAPGEKGEPGDDGPSGLDGPPGPQGLAGQRGIVGLPGQRGERGFPGLPGPSGEPGKQGAPGASGDRGPPGPVGPPGLTGPAGEPGREGSPGADGPPGRDGAAGVKGDRGETGALGAPGAPGPPGSPGPAGPTGKQGDRGEAGAQGPMGPSGPAGARGIAGPQGPRGDKGESGEQGERGLKGHRGFTGLQGLPGPPGPSGDQGASGPAGPSGPRGPPGPVGPSGKDGSNGIPGPIGPPGPRGRSGETGPVGPPGSPGPPGPPGPPGPGIDMSAFAGLGQREKGPDPMQYMRADEADSTLRQHDVEVDATLKSLNNQIESIRSPDGSRKNPARTCQDLKLCHPEWKSGDYWIDPNQGCTLDAMKVFCNMETGETCVYPNPATVPRKNWWSSKSKEKKHIWFGETMNGGFHFSYGDGNLAPNTANVQMTFLRLLSTEGSQNITYHCKNSIAYLDEAAGNLKKALLIQGSNDVEMRAEGNSRFTYTALKDGCTKHTGKWGKTVIEYRSQKTSRLPIIDIAPMDIGGAEQEFGVDIGPVCFL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P28481"},
		"label":"co2a1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9212986"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P28481"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P28481"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MMSFVQSGTWFLLTLLHPTLILAQQSNVDELGCSHLGQSYESRDVWKPEPCQICVCDSGSVLCDDIICDEEPLDCPNPEIPFGECCAICPQPSTPAPVLPDGHGPQGPKGDPGPPGIPGRNGDPGLPGQPGLPGPPGSPGICESCPTGGQNYSPQFDSYDVKSGVGGMGGYPGPAGPPGPPGPPGSSGHPGSPGSPGYQGPPGEPGQAGPAGPPGPPGALGPAGPAGKDGESGRPGRPGERGLPGPPGIKGPAGMPGFPGMKGHRGFDGRNGEKGETGAPGLKGENGLPGDNGAPGPMGPRGAPGERGRPGLPGAAGARGNDGARGSDGQPGPPGPPGTAGFPGSPGAKGEVGPAGSPGSNGSPGQRGEPGPQGHAGAQGPPGPPGNNGSPGGKGEMGPAGIPGAPGLIGARGPPGPAGTNGIPGTRGPSGEPGKNGAKGEPGARGERGEAGSPGIPGPKGEDGKDGSPGEPGANGLPGAAGERGPSGFRGPAGPNGIPGEKGPPGERGGPGPAGPRGVAGEPGRDGTPGGPGIRGMPGSPGGPGNDGKPGPPGSQGESGRPGPPGPSGPRGQPGVMGFPGPKGNDGAPGKNGERGGPGGPGLPGPAGKNGETGPQGPPGPTGPAGDKGDSGPPGPQGLQGIPGTGGPPGENGKPGEPGPKGEVGAPGAPGGKGDSGAPGERGPPGTAGIPGARGGAGPPGPEGGKGPAGPPGPPGASGSPGLQGMPGERGGPGSPGPKGEKGEPGGAGADGVPGKDGPRGPAGPIGPPGPAGQPGDKGEGGSPGLPGIAGPRGGPGERGEHGPPGPAGFPGAPGQNGEPGAKGERGAPGEKGEGGPPGPAGPTGSSGPAGPPGPQGVKGERGSPGGPGTAGFPGGRGLPGPPGNNGNPGPPGPSGAPGKDGPPGPAGNSGSPGNPGIAGPKGDAGQPGEKGPPGAQGPPGSPGPLGIAGLTGARGLAGPPGMPGPRGSPGPQGIKGESGKPGASGHNGERGPPGPQGLPGQPGTAGEPGRDGNPGSDGQPGRDGSPGGKGDRGENGSPGAPGAPGHPGPPGPVGPSGKSGDRGETGPAGPSGAPGPAGARGAPGPQGPRGDKGETGERGSNGIKGHRGFPGNPGPPGSPGAAGHQGAIGSPGPAGPRGPVGPHGPPGKDGTSGHPGPIGPPGPRGNRGERGSEGSPGHPGQPGPPGPPGAPGPCCGGGAAAIAGVGGEKSGGFSPYYGDDPMDFKINTEEIMSSLKSVNGQIESLISPDGSRKNPARNCRDLKFCHPELKSGEYWVDPNQGCKMDAIKVFCNMETGETCINASPMTVPRKHWWTDSGAEKKHVWFGESMNGGFQFSYGPPDLPEDVVDVQLAFLRLLSSRASQNITYHCKNSIAYMDQASGNVKKSLKLMGSNEGEFKAEGNSKFTYTVLEDGCTKHTGEWSKTVFEYQTRKAMRLPIIDIAPYDIGGPDQEFGVDIGPVCFL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P08121"},
		"label":"co3a1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9213005"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P08121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P08121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGPRLSVWLLLLFAALLLHEERSRAAAKGDCGGSGCGKCDCHGVKGQKGERGLPGLQGVIGFPGMQGPEGPHGPPGQKGDAGEPGLPGTKGTRGPPGAAGYPGNPGLPGIPGQDGPPGPPGIPGCNGTKGERGPLGPPGLPGFSGNPGPPGLPGMKGDPGEILGHVPGTLLKGERGFPGIPGMPGSPGLPGLQGPVGPPGFTGPPGPPGPPGPPGEKGQMGSSFQGPKGDKGEQGVSGPPGVPGQAQVKEKGDFAPTGEKGQKGEPGFPGVPGYGEKGEPGKQGPRGKPGKDGEKGERGSPGIPGDSGYPGLPGRQGPQGEKGEAGLPGPPGTVIGTMPLGEKGDRGYPGAPGLRGEPGPKGFPGTPGQPGPPGFPTPGQAGAPGFPGERGEKGDQGFPGVSLPGPSGRDGAPGPPGPPGPPGQPGHTNGIVECQPGPPGDQGPPGTPGQPGLTGEVGQKGQKGESCLACDTEGLRGPPGPQGPPGEIGFPGQPGAKGDRGLPGRDGLEGLPGPQGSPGLIGQPGAKGEPGEIFFDMRLKGDKGDPGFPGQPGMPGRAGTPGRDGHPGLPGPKGSPGSIGLKGERGPPGGVGFPGSRGDIGPPGPPGVGPIGPVGEKGQAGFPGGPGSPGLPGPKGEAGKVVPLPGPPGAAGLPGSPGFPGPQGDRGFPGTPGRPGIPGEKGAVGQPGIGFPGLPGPKGVDGLPGEIGRPGSPGRPGFNGLPGNPGPQGQKGEPGIGLPGLKGQPGLPGIPGTPGEKGSIGGPGVPGEQGLTGPPGLQGIRGDPGPPGVQGPAGPPGVPGIGPPGAMGPPGGQGPPGSSGPPGIKGEKGFPGFPGLDMPGPKGDKGSQGLPGLTGQSGLPGLPGQQGTPGVPGFPGSKGEMGVMGTPGQPGSPGPAGTPGLPGEKGDHGLPGSSGPRGDPGFKGDKGDVGLPGMPGSMEHVDMGSMKGQKGDQGEKGQIGPTGDKGSRGDPGTPGVPGKDGQAGHPGQPGPKGDPGLSGTPGSPGLPGPKGSVGGMGLPGSPGEKGVPGIPGSQGVPGSPGEKGAKGEKGQSGLPGIGIPGRPGDKGDQGLAGFPGSPGEKGEKGSAGTPGMPGSPGPRGSPGNIGHPGSPGLPGEKGDKGLPGLDGVPGVKGEAGLPGTPGPTGPAGQKGEPGSDGIPGSAGEKGEQGVPGRGFPGFPGSKGDKGSKGEVGFPGLAGSPGIPGVKGEQGFMGPPGPQGQPGLPGTPGHPVEGPKGDRGPQGQPGLPGHPGPMGPPGFPGINGPKGDKGNQGWPGAPGVPGPKGDPGFQGMPGIGGSPGITGSKGDMGLPGVPGFQGQKGLPGLQGVKGDQGDQGVPGPKGLQGPPGPPGPYDVIKGEPGLPGPEGPPGLKGLQGPPGPKGQQGVTGSVGLPGPPGVPGFDGAPGQKGETGPFGPPGPRGFPGPPGPDGLPGSMGPPGTPSVDHGFLVTRHSQTTDDPLCPPGTKILYHGYSLLYVQGNERAHGQDLGTAGSCLRKFSTMPFLFCNINNVCNFASRNDYSYWLSTPEPMPMSMAPISGDNIRPFISRCAVCEAPAMVMAVHSQTIQIPQCPNGWSSLWIGYSFVMHTSAGAEGSGQALASPGSCLEEFRSAPFIECHGRGTCNYYANAYSFWLATIERSEMFKKPTPSTLKAGELRTHVSRCQVCMRRT",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P02463"},
		"label":"co4a1_mouse"
	},
	{
		"object":"interactor",
		"sequence":"MDRVRFKASGPPLRGWLLLATVTVGLLAQSVLGGVKKLDVPCGGRDCSGGCQCYPEKGARGQPGAVGPQGYNGPPGLQGFPGLQGRKGDKGERGVPGPTGPKGDVGARGVSGFPGADGIPGHPGQGGPRGRPGYDGCNGTRGDAGPQGPSGSGGFPGLPGPQGPKGQKGEPYALSKEDRDKYRGEPGEPGLVGYQGPPGRPGPIGQMGPMGAPGRPGPPGPPGPKGQPGNRGLGFYGQKGEKGDIGQPGPNGIPSDITLVGPTTSTIHPDLYKGEKGDEGEQGIPGVISKGEEGIMGFPGIRGFPGLDGEKGVVGQKGSRGLDGFQGPSGPRGPKGERGEQGPPGPSVYSPHPSLAKGARGDPGFQGAHGEPGSRGEPGEPGTAGPPGPSVGDEDSMRGLPGEMGPKGFSGEPGSPARYLGPPGADGRPGPQGVPGPAGPPGPDGFLFGLKGSEGRVGYPGPSGFPGTRGQKGWKGEAGDCQCGQVIGGLPGLPGPKGFPGVNGELGKKGDQGDPGLHGIPGFPGFKGAPGVAGAPGPKGIKGDSRTITTKGERGQPGIPGVHGMKGDDGVPGRDGLDGFPGLPGPPGDGIKGPPGDAGLPGVPGTKGFPGDIGPPGQGLPGPKGERGFPGDAGLPGPPGFPGPPGPPGTPGQRDCDTGVKRPIGGGQQVVVQPGCIEGPTGSPGQPGPPGPTGAKGVRGMPGFPGASGEQGLKGFPGDPGREGFPGPPGFMGPRGSKGTTGLPGPDGPPGPIGLPGPAGPPGDRGIPGEVLGAQPGTRGDAGLPGQPGLKGLPGETGAPGFRGSQGMPGMPGLKGQPGFPGPSGQPGQSGPPGQHGFPGTPGREGPLGQPGSPGLGGLPGDRGEPGDPGVPGPVGMKGLSGDRGDAGMSGERGHPGSPGFKGMAGMPGIPGQKGDRGSPGMDGFQGMLGLKGRQGFPGTKGEAGFFGVPGLKGLPGEPGVKGNRGDRGPPGPPPLILPGMKDIKGEKGDEGPMGLKGYLGLKGIQGMPGVPGVSGFPGLPGRPGFIKGVKGDIGVPGTPGLPGFPGVSGPPGITGFPGFTGSRGEKGTPGVAGVFGETGPTGDFGDIGDTVDLPGSPGLKGERGITGIPGLKGFFGEKGAAGDIGFPGITGMAGAQGSPGLKGQTGFPGLTGLQGPQGEPGRIGIPGDKGDFGWPGVPGLPGFPGIRGISGLHGLPGTKGFPGSPGVDAHGDPGFPGPTGDRGDRGEANTLPGPVGVPGQKGERGTPGERGPAGSPGLQGFPGISPPSNISGSPGDVGAPGIFGLQGYQGPPGPPGPNALPGIKGDEGSSGAAGFPGQKGWVGDPGPQGQPGVLGLPGEKGPKGEQGFMGNTGPSGAVGDRGPKGPKGDQGFPGAPGSMGSPGIPGIPQKIAVQPGTLGPQGRRGLPGALGEIGPQGPPGDPGFRGAPGKAGPQGRGGVSAVPGFRGDQGPMGHQGPVGQEGEPGRPGSPGLPGMPGRSVSIGYLLVKHSQTDQEPMCPVGMNKLWSGYSLLYFEGQEKAHNQDLGLAGSCLARFSTMPFLYCNPGDVCYYASRNDKSYWLSTTAPLPMMPVAEEEIKPYISRCSVCEAPAVAIAVHSQDTSIPHCPAGWRSLWIGYSFLMHTAAGDEGGGQSLVSPGSCLEDFRATPFIECNGGRGTCHYFANKYSFWLTTIPEQNFQSTPSADTLKAGLIRTHISRCQVCMKNL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P08122"},
		"label":"co4a2_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"reactome","id":"REACT_13960.1"},{"db":"intact","id":"EBI-9213024"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P02463"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"18056454",
				"name":"col4a2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["8549753"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P08122"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"8549753",
				"name":"col4a1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["18056454"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MHPGLWLFLVSLCLTKELAESGQKMSYGKPCGSRDCHGVCTCFPEKGARGHPGPIGTQGPAGPEGFTGPTGLSGLKGERGSPGPLGPYGSKGDKGPIGVPGFVGISGIPGHPGQPGPRGPPGPDGCNGTQGAVGFPGPDGYPGILGPPGLPGHKGAKGEPVPFQGSITGIRGDPGLPGLDGIPGPSGSSGSPGDAGPIGPPGLQGPPGLPGLPGPEGNMGLGFQGEKGVKGDVGLPGPAGPPPSTGELEFMGFPKGKKGSKGEPGPPGFPGMSGPPGVPEFGSTGEKGEKGILGLPGPRGPMGSEGIQGHPGRQGKKGTSGFPGINGFPGIKGEKGDIGVRGPDSFTDADGAVISGYPGDPGVLGLPGLRGDEGVQGQRGPSGTPGLPSLTGLPGALGPQGFPGLKGDQGNSGRTTFGEAGLPGRVGLPGLPGLPGPSGPPGRTFETGHLSNIEPGFPGLQGEQGPKGHQGLKGVKGDSGFCACEGGAPNIGPHGEPGLPGIQGPIGLQGFKGTKGDPGSRGASGPAGTPGLFGPRGQTGLKGKKGEPTVSRGSKMSGDKGDPGPQGTPGLAGTPGKDGRPGLPGLPGIQGDGGSGFPGERGLPGLPGEKGHDGPIGPPGIGLPGPPGPRGLPGDKGVDGLPGQQGLRGAQGVTLPCIIPGSYGPSGFPGAPGFPGSKGARGLPGIPGKPGTHGSKGGPGSPGLMHLPGLPGFPGVRGEKGLPGFPGLPGKDGYPGKAGSPGLPGFKGAAGDIFGAENGASGEQGLQGLPGDKGFPGDSGLPGPKGLNGKPGMLGPKGERGNPGTSGPPGQPGPSGSTDPFGIKGTSGFPGAPGLPGISGHPGKKGQRGDIGQPGSTGKRGLPGIKGLPGPQGSPGFLGSPGLSGVTGLPGIEGQKGEKGSSGPVGFPGLPGLPGLPGADGLKGFSGSFGKVGQPGQTGTSGEKGDRGDPGPVGISSPRPPMLNLWFKGEKGSRGSAGSDGFPGPRGDKGEPGIPGLPGPPGATGQTNTIKGLNGRPGSPGSMGRRGLPGLKGSLGIAGFPGMPGKSGSQGLTGTSGLLGATGIPGLKGDQGQTLGISGSPGPKGQPGELGFKGVKGKDGLVGDRGYPGNKGDGGKVGITGDPGFPGSPGLQGISGMNGDPGLPGSSGHLGSIGRPGPSGLIGPKGFPGAPGLHGLNGLPGTKGTHGTPGASITGVPGPAGLPGPKGERGVPGIVIGDPGKQGSKGQKGDQGSPGLQGPAGTPGAPGISLPSVIAGQPGDPGRPGLDGERGRPGPPGPPGPPGPSSDQGDPGDSGFPGIPGLQGFKGNQGLPGFSGLSGELGLKGMRGEPGLMGTPGKIGQPGDPGFPGMKGKAGPRGFSGPQGAPGHTPIAEAMQVPPGPLGLPGIDGIPGLIGDPGSQGSVGLQGSKGLPGIPGKDGPSGLPGPSGILGDPGLPGLQGPPGFEGAPGNQGPIGQPGMPGHGVRVGYTLVKHSQSEQVPLCPTGMSRLWVGYSLLFVEGQEKAHNQDLGFAGSCLPRFSTMPFIYCNINEVCHYARRNDKSYWLSTTAPIPMMPVGQTQIPQYISRCSVCEAPSQAIAVHSQDIIVPQCPLGWHSLWIGYSFLMHTAAGAEGGGQSLVSPGSCLEDFRATPFIECSGARGTCHYFANKYSFWLTTVEERGQFREEPVSETLKTGQLHTRVSRCQVCMKTP",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"B1AVK5"},
		"label":"b1avk5_mouse"
	},
	{
		"object":"interactor",
		"sequence":"MQVRGVCLAAGWFLLALCLWGQPAEAAACHGCSSGSKCDCSGIKGEKGERGFPGLEGHPGLPGFPGPEGPPGPRGQKGDDGIPGPPGPKGIRGPPGLPGFPGTPGLPGMPGHDGAPGPQGIPGCNGTKGERGFPGSPGFPGLQGPPGPPGIPGMKGEPGSIIMSPLPGPKGNQGYPGPPGIQGPPGPKGISGPSGPPGPPGLMGPPGPPGPPGPKGNMGLNFQGPKGEKGEQGLQGPPGPPGQISEQKRPIDIEFQKGDQGVPGDRGPPGPPGIPGPPGPPGGVKGEKGEPGEAGKRGKPGKDGETGQPGIPGLPGDPGYPGEPGRDGEKGQKGDIGPPGPPGLVIPAPGTGVTMGEKGNIGLPGLPGEKGERGFPGIQGPPGFPGPPGTAVVGPPGPPGYPGERGQKGDEGPPGICIPGSPGLDGQPGAPGLPGPPGPPGPQLPSRDEICKAGPPGPPGPPGDKGLQGERGVKGDKGDTCFNCIGTGISGPPGQPGLPGLPGPPGSLGIPGEKGDKGQAGITGPKGLPGIPGPPGAPGFPGSKGDPGDVLTLPGMKGDKGELGFPGAPGLPGLPGSPGKDGLPGLPGPKGEPGGITFKGERGPPGSPGLPGLPGNMGPTGPVGFGPPGPIGEKGIQGVAGNPGQPGLPGPKGDPGQTITQPGKPGLPGSPGRDGEVGLPGDPGLPGQPGLPGIPGSKGEPGIPGIGPPGPPGPKGFPGIPGPPGAPGAPGRMGPDGPPGPPGFPGPKGEPGFGLPGPPGPPGFPGFKGTPGPKGDRGFPGPSGPPGRTGLDGLPGPKGDVGPNGQPGPVGPPGLPGIGLQGPPGPPGTPGPIGQPGLHGIPGEKGDPGPPGFDVPGLPGERGSPGLPGAPGLIGPPGSPGVPGKAGVPGFPGVKGEMGMMGPPGPPGPLGIPGRSGAPGLKGDDGMQGQPGLPGPAGEKGGKGEPGLPGPPGPMHPDFLGSKGEKGEPGLPGIPGLSGPKGYQGLPGDPGQPGLSGQPGSPGLPGPKGNPGLPGPPGLTGPPGPKGNIGDMGFPGPQGVDGPPGPPGFPGQPGSPGLPGQKGSKGEPGVSGIGLPGLPGPKGEPGLPGYPGNPGIKGSVGETGLPGLPGNPGAKGQPGLPGFPGTPGLPGPKGMNGPPGNPGFPGEPGPVGAGGRPGPPGPPGEKGKPGQDGIPGPAGQKGEPGQPGFGIPGPPGLPGLSGQKGDGGSPGLPGNPGLPGSKGEPGFQGFPGMPGPPGPPGSPGQALEGPKGNPGPQGPPGRPGPPGFQGPPGTEGPRGPPGNGGIKGERGNPGPPGQPGLPGLKGDQGPPGLPGNPGRPGLNGMKGDPGLPGVPGFPGMKGPIGVPGSTGPDGEPGLTGPPGPPGLPGPSGQSIVIKGDPGPPGIPGQPGLKGLPGLPGPQGLPGPIGPPGDPGRNGLPGFDGAGGRKGDPGLPGQPGARGLDGPPGPDGLQGPPGPPGTTSVAHGFLITRHSQTTEAPQCPRGTVHIYEGFSLLYVQGNKRAHGQDLGTAGSCLRRFSTMPFMFCNINNVCNFASRNDYSYWLSTPEPMPMNMEPLKGQSIQPFISRCAVCEAPAVVIAVHSQTIQIPHCPQGWDSLWIGYSFMMHTSAGAEGSGQALASPGSCLEEFRSAPFIECHGRGTCNYYANSYSFWLATVDMSDMFNKPQSETLKAGDLRTRISRCQVCMKRT",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q63ZW6"},
		"label":"q63zw6_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9213073"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"B1AVK5"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"15622226",
				"name":"col4a5 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["32892555"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q63ZW6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32892555",
				"name":"col4a6 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["15622226"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MHSKTAPRFLVFLLLTLLLLLAASPVASKGCVCKGKGQCLCAGTKGEKGEKGVPGSPGFPGQKGFPGPEGLPGPQGPKGSPGLPGLTGPKGIRGITGLPGFAGPPGLPGLPGHPGPRGLAGLPGCNGSKGEQGFPGFPGTPGYAGLPGPDGLKGQKGEPAQGEDRGFNGKGDPGPPGVPGFQGFPGLPGFPGPAGPPGPPGFFGLPGAMGPRGPKGHMGDSVIGQKGERGMKGLTGPPGPPGTVIFTLTQPYNKSDFKGEKGDEGERGEPGPPGPSGPPGDSYGSEKGAPGEPGPRGKPGKDGAPGFPGTEGAKGNRGFPGLRGEAGIKGRKGDIGPPGFPGPTEYYDAYLEKGERGMPGLPGPKGARGPQGPSGPPGVPGSPGLSRPGLRGPIGWPGLKGSKGERGPPGKDTVGPPGPLGCPGSPGPPGPPGPPGCPGDIVFKCSPGEHGMPGDTGPPGVPGLDGPKGEPGSPCTECHCFPGPPGVPGFPGLDGIKGIPGGRGVPGLKGNPGSPGSAGLPGFAGFPGDQGHPGLKGDKGDTPLPWGQVGNPGDPGLRGLPGRKGFDGTPGGPGAKGPPGPQGEPALSGRKGDQGPPGPPGFPGPPGPAGPAGPPGYGPQGEPGPKGAQGVPGVLGPPGEAGLKGEPSTSTPDLGPPGPPGPPGQAGPRGLPGLPGPVGKCDPGLPGPDGEPGIPEAGCPGPPGPKGNQGFPGTKGSPGCPGEMGKPGRPGEPGIPGAKGEPSVGRPGKPGKPGFPGERGNAGENGDIGLPGLPGLPGTPGRGGLDGPPGDPGQPGSPGAKGSPGRCIPGPRGTQGLPGLNGLKGQPGRRGDTGPKGDPGIPGMDRSGVPGDPGPPGTPGCPGEMGPPGQKGYPGAPGFPGPPGEKGEVGMMGYPGTTGPPGLPGKPGSQGQRGSLGIPGMKGEKGRPGAKGERGEKGKPGPSQTTLLKGDKGEPGLKGFVGNPGEKGNRGNPGLPGPKGLEGLPGLPGPPGPRGDTGSRGNPGRPGPHGMPGSMGIMGVPGPKGRKGTSGLPGLAGRPGLTGIHGPQGDKGEPGYSEGARPGPPGPKGDPGLPGDKGKKGERGVPGPPGQSGPAGPDGAPGSPGSPGHPGKPGPAGDLGLKGQKGFPGPPGSTGPPGPPGLPGLPGPMGMRGDQGRDGIPGPPGEKGETGLLGAYPGPKGSPGVPGAKGDRGVPGLSGLPGRKGVMGDVGPQGPPGTAGLPGPPGLPGAIIPGPKGDRGLPGLRGNPGEPGPPGPPGPIGKGIKGDKGFMGPPGPKGLPGTVGDMGPPGFPGAPGTPGLPGVRGDPGFPGFPGIKGEKGNPGFLGPIGHPGPVGPKGPPGPRGKPGTLKVISLPGSPGPPGVPGQPGMKGDPGPLGLPGIPGPCGPRGKPGKDGKPGTPGPAGTKGNKGLKGQQGPPGLDGLPGLKGNPGDRGTPATGTRMRGFIFTRHSQTTAIPSCPEGTQPLYSGFSLLFVQGNKRAHGQDLGTLGSCLQRFTTMPFLFCNINNVCNFASRNDYSYWLSTPALMPMDMAPISGRALEPYISRCTVCEGPAMAIAVHSQTTAIPPCPQDWVSLWKGFSFIMFTSAGSEGAGQALASPGSCLEEFRASPFIECHGRGTCNYYSNSYSFWLASLNPERMFRKPIPSTVKAGDLEKIISRCQVCMKKRH",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9QZS0"},
		"label":"co4a3_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"reactome","id":"REACT_14476.1"},{"db":"intact","id":"EBI-9213122"}],
		"expansion":{"id":"11","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9QZS0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q63ZW6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MRCFFRWTKSFVTAPWSLIFILFTIQYEYGSGKKYGGPCGGRNCSVCQCFPEKGSRGHPGPLGPQGPIGPLGPLGPIGIPGEKGERGDSGSPGPPGEKGDKGPTGVPGFPGVDGVPGHPGPPGPRGKPGVDGYNGSRGDPGYPGERGAPGPGGPPGQPGENGEKGRSVYITGGVKGIQGDRGDPGPPGLPGSRGAQGSPGPMGHAGAPGLAGPIGHPGSPGLKGNPATGLKGQRGEPGEVGQRGPPGPTLLVQPPDLSIYKGEKGVKGMPGMIGPPGPPGRKGAPGVGIKGEKGIPGFPGPRGEPGSHGPPGFPGFKGIQGAAGEPGLFGFLGPKGDLGDRGYPGPPGILLTPAPPLKGVPGDPGPPGYYGEIGDVGLPGPPGPPGRPGETCPGMMGPPGPPGVPGPPGFPGEAGVPGRLDCAPGKPGKPGLPGLPGAPGPEGPPGSDVIYCRPGCPGPMGEKGKVGPPGRRGAKGAKGNKGLCTCPPGPMGPPGPPGPPGRQGSKGDLGLPGWHGEKGDPGQPGAEGPPGPPGRPGAMGPPGHKGEKGDMVISRVKGQKGERGLDGPPGFPGPHGQDGGDGRPGERGDPGPRGDHKDAAPGERGLPGLPGPPGRTGPEGPPGLGFPGPPGQRGLPGEPGRPGTRGFDGTKGQKGDSILCNVSYPGKPGLPGLDGPPGLKGFPGPPGAPGMRCPDGQKGQRGKPGMSGIPGPPGFRGDMGDPGIKGEKGTSPIGPPGPPGSPGKDGQKGIPGDPAFGDPGPPGERGLPGAPGMKGQKGHPGCPGAGGPPGIPGSPGLKGPKGREGSRGFPGIPGSPGHSCERGAPGIPGQPGLPGTPGDPGAPGWKGQPGDMGPSGPAGMKGLPGLPGLPGADGLRGPPGIPGPNGEDGLPGLPGLKGLPGLPGFPGFPGERGKPGPDGEPGRKGEVGEKGWPGLKGDLGERGAKGDRGLPGDAGEAVTSRKGEPGDAGPPGDGGFSGERGDKGSSGMRGGRGDPGRDGLPGLHRGQPGIDGPPGPPGPPGPPGSPGLRGVIGFPGFPGDQGDPGSPGPPGFPGDDGARGPKGYKGDPASQCGPPGPKGEPGSPGYQGRTGVPGEKGFPGDEGPRGPPGRPGQPGSFGPPGCPGDPGMPGLKGHPGEVGDPGPRGDAGDFGRPGPAGVKGPLGSPGLNGLHGLKGEKGTKGASGLLEMGPPGPMGMPGQKGEKGDPGSPGISPPGLPGEKGFPGPPGRPGPPGPAGAPGRAAKGDIPDPGPPGDRGPPGPDGPRGVPGPPGSPGNVDLLKGDPGDCGLPGPPGSRGPPGPPGCQGPPGCDGKDGQKGPMGLPGLPGPPGLPGAPGEKGLPGPPGRKGPVGPPGCRGEPGPPADVDSCPRIPGLPGVPGPRGPEGAMGEPGRRGLPGPGCKGEPGPDGRRGQDGIPGSPGPPGRKGDTGEAGCPGAPGPPGPTGDPGPKGFGPGSLSGFLLVLHSQTDQEPACPVGMPRLWTGYSLLYMEGQEKAHNQDLGLAGSCLPVFSTLPFAYCNIHQVCHYAQRNDRSYWLSSAAPLPMMPLSEEEIRSYISRCAVCEAPAQAVAVHSQDQSIPPCPRTWRSLWIGYSFLMHTGAGDQGGGQALMSPGSCLEDFRAAPFVECQGRQGTCHFFANEYSFWLTTVNPDLQFASGPSPDTLKEVQAQRRKISRCQVCMKHS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9QZR9"},
		"label":"co4a4_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"reactome","id":"REACT_14476.1"},{"db":"intact","id":"EBI-9213122"}],
		"expansion":{"id":"11","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9QZS0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9QZR9"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDVHTRWKAARPGALLLSSPLLLFLLLLWAPPSSRAAQPADLLEMLDFHNLPSGVTKTTGFCATRRSSSEPDVAYRVSKDAQLSMPTKQLYPESGFPEDFSILTTVKAKKGSQAFLVSIYNEQGIQQLGLELGRSPVFLYEDHTGKPGPEEYPLFPGINLSDGKWHRIALSVYKKNVTLILDCKKKITKFLSRSDHPIIDTNGIVMFGSRILDDEIFEGDIQQLLFVSDNRAAYDYCEHYSPDCDTAVPDTPQSQDPNPDEYYPEGEGETYYYEYPYYEDPEDPGKEPAPTQKPVEAARETTEVPEEQTQPLPEAPTVPETSDTADKEDSLGIGDYDYVPPDDYYTPPPYEDFGYGEGVENPDQPTNPDSGAEVPTSTTVTSNTSNPAPGEGKDDLGGEFTEETIKNLEENYYDPYFDPDSDSSVSPSEIGPGMPANQDTIFEGIGGPRGEKGQKGEPAIIEPGMLIEGPPGPEGPAGLPGPPGTTGPTGQMGDPGERGPPGRPGLPGADGLPGPPGTMLMLPFRFGGGGDAGSKGPMVSAQESQAQAILQQARLALRGPAGPMGLTGRPGPMGPPGSGGLKGEPGDMGPQGPRGVQGPPGPTGKPGRRGRAGSDGARGMPGQTGPKGDRGFDGLAGLPGEKGHRGDPGPSGPPGIPGDDGERGDDGEVGPRGLPGEPGPRGLLGPKGPPGPPGPPGVTGMDGQPGPKGNVGPQGEPGPPGQQGNPGAQGLPGPQGAIGPPGEKGPLGKPGLPGMPGADGPPGHPGKEGPPGEKGGQGPPGPQGPIGYPGPRGVKGADGIRGLKGTKGEKGEDGFPGFKGDMGIKGDRGEIGPPGPRGEDGPEGPKGRGGPNGDPGPLGPTGEKGKLGVPGLPGYPGRQGPKGSIGFPGFPGANGEKGGRGTPGKPGPRGQRGPTGPRGERGPRGITGKPGPKGNSGGDGPAGPPGERGPNGPQGPTGFPGPKGPPGPPGKDGLPGHPGQRGETGFQGKTGPPGPPGVVGPQGPTGETGPMGERGHPGPPGPPGEQGLPGAAGKEGTKGDPGPAGLPGKDGPPGLRGFPGDRGLPGPVGALGLKGSEGPPGPPGPAGSPGERGPAGAAGPIGIPGRPGPQGPPGPAGEKGLPGEKGPQGPAGRDGLQGPVGLPGPAGPVGPPGEDGDKGEIGEPGQKGSKGDKGEQGPPGPTGPQGPIGQPGPSGADGEPGPRGQQGLFGQKGDEGSRGFPGPPGPVGLQGLPGPPGEKGETGDVGQMGPPGPPGPRGPSGAPGADGPQGPPGGIGNPGAVGEKGEPGEAGDPGLPGEGGPLGPKGERGEKGEAGPSGAAGPPGPKGPPGDDGPKGSPGPVGFPGDPGPPGEPGPAGQDGPPGDKGDDGEPGQTGSPGPTGEPGPSGPPGKRGPPGPAGPEGRQGEKGAKGEAGLEGPPGKTGPIGPQGAPGKPGPDGLRGIPGPVGEQGLPGSPGPDGPPGPMGPPGLPGLKGDSGPKGEKGHPGLIGLIGPPGEQGEKGDRGLPGPQGSSGPKGDQGITGPSGPLGPPGPPGLPGPPGPKGAKGSSGPTGPKGEAGHPGLPGPPGPPGEVIQPLPIQASRTRRNIDASQLLDDGAGESYVDYADGMEEIFGSLNSLKLEIEQMKRPLGTQQNPARTCKDLQLCHPDFPDGEYWVDPNQGCSRDSFKVYCNFTAGGSTCVFPDKKSEGARITSWPKENPGSWFSEFKRGKLLSYVDAEGNPVGVVQMTFLRLLSASAHQNVTYNCYQSVAWQDAATGSYDKAIRFLGSNDEEMSYDNNPYIRALVDGCATKKGYQKTVLEIDTPKVEQVPIVDIMFNDFGEASQKFGFEVGPACFLG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"O88207"},
		"label":"co5a1_mouse"
	},
	{
		"object":"interactor",
		"sequence":"MMANWVGARPLLILSVLLGYCVSIKAQEQENDEYDEEIACTQHGQMYLNRDIWKPSPCQICVCDNGAILCDKIECPEVLNCANPITPTGECCPVCPQTGGGDTSFGRGRKGQKGEPGLVPVVTGIRGRPGPAGPPGSQGPRGDRGPKGRPGPRGPQGIDGEPGVPGQPGAPGPPGHPSHPGPDGMSRPFSAQMAGLDEKSGLGSQVGLMPGSVGPVGPRGPQGLQGQQGGVGPAGPPGEPGEPGPMGPIGSRGPEGPPGKPGEDGEPGRNGNTGEVGFSGSPGARGFPGAPGLPGLKGHRGHKGLEGPKGEIGAPGAKGEAGPTGPMGAMGPLGPRGMPGERGRLGPQGAPGKRGAHGMPGKPGPMGPLGIPGSSGFPGNPGMKGEAGPTGARGPEGPQGQRGETGPPGPAGSQGLPGAVGTDGTPGAKGPTGSAGTSGPPGLAGPPGSPGPQGSTGPQGIRGQSGDPGVPGFKGEAGPKGEPGPHGIQGPIGPPGEEGKRGPRGDPGTVGPPGPMGERGAPGNRGFPGSDGLPGPKGAQGERGPVGSSGPKGGQGDPGRPGEPGLPGARGLTGNPGVQGPEGKLGPLGAPGEDGRPGPPGSIGIRGQPGSMGLPGPKGSSGDLGKPGEAGNAGVPGQRGAPGKDGEVGPSGPVGPPGLAGERGEQGPPGPTGFQGLPGPPGPPGEGGKAGDQGVPGEPGAVGPLGPRGERGNPGERGEPGITGLPGEKGMAGGHGPDGPKGNPGPTGTIGDTGPPGLQGMPGERGIAGTPGPKGDRGGIGEKGAEGTAGNDGARGLPGPLGPPGPAGPTGEKGEPGPRGLVGPPGSRGNPGSRGENGPTGAVGFAGPQGPDGQPGVKGEPGEPGQKGDAGSPGPQGLAGSPGPHGPHGVPGLKGGRGTQGPPGATGFPGSAGRVGPPGPAGAPGPAGPAGEPGKEGPPGLRGDPGSHGRVGDRGPAGPPGSPGDKGDPGEDGQPGPDGPPGPAGTTGQRGIVGMPGQRGERGMPGLPGPAGTPGKVGPTGATGDKGPPGPVGPPGSNGPVGEPGPEGPAGNDGTPGRDGAVGERGDRGDPGPAGLPGSQGAPGTPGPVGAPGDAGQRGEPGSRGPVGPPGRAGKRGLPGPQGPRGDKGDNGDRGDRGQKGHRGFTGLQGLPGPPGPNGEQGSAGIPGPFGPRGPPGPVGPSGKEGNPGPLGPIGPPGVRGSVGEAGPEGPPGEPGPPGPPGPPGHLTAALGDIMGHYDENMPDPLPEFTEDQAAPDDTNKTDPGIHVTLKSLSSQIETMRSPDGSKKHPARTCDDLKLCHPTKQSGEYWIDPNQGSAEDAIKVYCNMETGETCISANPASVPRKTWWASKSPDNKPVWYGLDMNRGSQFTYGDYQSPNTAITQMTFLRLLSKEASQNLTYICRNTVGYMDDQAKNLKKAVVLKGSNDLEIKGEGNIRFRYTVLQDTCSKRNGNVGKTIFEYRTQNVARLPIIDVGPVDIGNADQEFGLDIGPVCFM",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q3U962"},
		"label":"co5a2_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"reactome","id":"REACT_17987.1"},{"db":"intact","id":"EBI-9213211"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"O88207"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q3U962"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MRSCRRLDQLQAGLCLLLASLQLVSWTLAAEPVDVLEAWGVHRDQAGVAEGPGFCPLRIPQGDRAFRVGKSSLLSVPTWQLFPDGHFPENFSVLLTLRAQPANQSVLLSIYDEKGVRQLGLALGPALGLLGDSFRPLPKQVNIMDGRWHRVAVSISGNKVTLVVDCEPQPPTFGQGPRFISTAGLTVMGTQDTREESFEGDIQELLLIPDPQAAFQACESYLPGCETLDSTTTGAPKDDEPETPAPRRRKGKGKKKGRGRKGKGRKKNKETSELSPTPGAPENQTSLHIPETEKTVPHLPLTPTPLAITTTVTIGQNATVSQGLDSGTETEQTTPEVDSTEEGEGGGPTMGPKFRAAEQSLQTEFQIFPGAGEKGAKGEPATVEQGQQFEGPAGAPGPRGISGPSGPPGPPGFPGDRGLPGPAGLPGIPGIDGARGLPGTVIMMPFHFASSSMKGPPVSFQQAQAQAVLQQAQLSMKGPPGPVGLTGRPGPVGLPGYPGLKGELGEVGPQGPRGLQGPPGPPGREGKTGRAGADGARGLPGDTGPKGDRGFDGLPGLPGEKGQRGDFGRVGQPGPPGEDGVKGLQGPPGPTGQAGEPGPRGLIGPRGLPGPLGRPGVTGSDGAPGAKGNVGPPGEPGPPGQQGNHGSQGIPGPQGPIGTPGEKGPPGNPGIPGVPGSEGPPGHPGHEGPTGEKGAQGPPGSAGPRGYPGLRGVKGTSGNRGLQGEKGERGEDGFPGFKGDEGPKGDRGNPGPPGPRGEDGPEGQKGPGGLPGDEGPPGAAGEKGKLGVPGLPGYPGRPGPKGSIGFPGPLGPLGEKGKRGKAGQPGEEGERGTPGTRGDRGQPGATGQPGPKGDVGQNGSPGPPGEKGLPGLQGPPGFPGPKGPPGPQGKDGISGHPGQRGELGFQGLTGPPGPAGVLGPQGKVGDVGPLGERGPPGPPGPPGEQGLPGIEGREGAKGELGPLGSVGKEGPPGPRGFPGPQGAPGDPGPIGLKGDKGPPGPVGANGSPGERGPVGPSGGIGLPGQSGGQGPIGPAGEKGSPGERGTPGPTGKDGIPGPPGLQGPSGAAGPSGEEGDKGEVGMPGHKGSKGDKGDAGPPGPTGIRGPAGHSGLPGADGAQGRRGPPGLFGQKGDDGVRGFVGVIGPPGLQGLPGPPGEKGEVGDVGSMGPHGAPGPRGPPGPSGSEGPPGLPGGVGQPGAVGEKGEPGDAGDAGPPGIPGIPGPKGEIGEKGDSGPSGAAGPPGKKGPPGEDGSKGNMGPTGLPGDLGPPGDPGVPGIDGIPGEKGNAGDIGGPGPPGASGEPGARGLPGKRGSPGRMGPEGREGEKGAKGDAGPDGPPGRTGPIGARGPPGRIGPDGLPGIPGPVGEPGLLGPPGLIGPPGPLGPPGLPGLKGDAGPKGEKGHIGLIGLIGPPGEAGEKGDQGLPGVQGPPGLQGDPGLPGPVGSLGHPGPPGVVGPLGQKGSKGSPGSLGPRGDPGPAGPPGPPGSPAEVHGLRRRRSVTDTLEGGLEEVMASLNSLSLELQQLQRPLGTAESPGLMCRELHRDHPHLPDGEYWIDPNQGCARDAFKVFCNFTAGGETCLYPDKKFETVKLASWSREKPGGWYSTFRRGKKFSYVDADGSPVNVVQLTFLKLLSAAAHQRFTYICQNSVAWLDEAAGDHRHSIRFQGTNWEELSFNQTTAATIKVSHDGCRVRKGQAKTLFEFSSSVGFLPLWDVAASDFGQTNQKFGFELGSICFSS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9JLI2"},
		"label":"q9jli2_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9213230"}],
		"expansion":{"id":"12","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O88207"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9JLI2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9213230"}],
		"expansion":{"id":"12","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O88207"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q3U962"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9213251"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"O88207"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O88207"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MRLAHALLPLLLQACWVATQDIQGSKAIAFQDCPVDLFFVLDTSESVALRLKPYGALVDKVKSFTKRFIDNLRDRYYRCDRNLVWNAGALHYSDEVEIIRGLTRMPSGRDELKASVDAVKYFGKGTYTDCAIKKGLEELLIGGSHLKENKYLIVVTDGHPLEGYKEPCGGLEDAVNEAKHLGIKVFSVAITPDHLEPRLSIIATDHTYRRNFTAADWGHSRDAEEVISQTIDTIVDMIKNNVEQVCCSFECQAARGPPGPRGDPGYEGERGKPGLPGEKGEAGDPGRPGDLGPVGYQGMKGEKGSRGEKGSRGPKGYKGEKGKRGIDGVDGMKGETGYPGLPGCKGSPGFDGIQGPPGPKGDAGAFGMKGEKGEAGADGEAGRPGNSGSPGDEGDPGEPGPPGEKGEAGDEGNAGPDGAPGERGGPGERGPRGTPGVRGPRGDPGEAGPQGDQGREGPVGIPGDSGEAGPIGPKGYRGDEGPPGPEGLRGAPGPVGPPGDPGLMGERGEDGPPGNGTEGFPGFPGYPGNRGPPGLNGTKGYPGLKGDEGEVGDPGEDNNDISPRGVKGAKGYRGPEGPQGPPGHVGPPGPDECEILDIIMKMCSCCECTCGPIDILFVLDSSESIGLQNFEIAKDFIIKVIDRLSKDELVKFEPGQSHAGVVQYSHNQMQEHVDMRSPNVRNAQDFKEAVKKLQWMAGGTFTGEALQYTRDRLLPPTQNNRIALVITDGRSDTQRDTTPLSVLCGADIQVVSVGIKDVFGFVAGSDQLNVISCQGLSQGRPGISLVKENYAELLDDGFLKNITAQICIDKKCPDYTCPITFSSPADITILLDSSASVGSHNFETTKVFAKRLAERFLSAGRADPSQDVRVAVVQYSGQGQQQPGRAALQFLQNYTVLASSVDSMDFINDATDVNDALSYVTRFYREASSGATKKRVLLFSDGNSQGATAEAIEKAVQEAQRAGIEIFVVVVGPQVNEPHIRVLVTGKTAEYDVAFGERHLFRVPNYQALLRGVLYQTVSRKVALG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q04857"},
		"label":"co6a1_mouse"
	},
	{
		"object":"interactor",
		"sequence":"MTTIKMLQGPLSVLLIGGLLGVLHAQQQEAISPQEQEAVSPDISTTERNNNCPEKADCPVNVYFVLDTSESVAMQSPTDSLLYHMQQFVPQFISQLQNEFYLDQVALSWRYGGLHFSDQVEVFSPPGSDRASFTKSLQGIRSFRRGTFTDCALANMTQQIRQHVGKGVVNFAVVITDGHVTGSPCGGIKMQAERAREEGIRLFAVAPNRNLNEQGLRDIANSPHELYRNNYATMRPDSTEIDQDTINRIIKVMKHEAYGECYKVSCLEIPGPHGPKGYRGQKGAKGNMGEPGEPGQKGRQGDPGIEGPIGFPGPKGVPGFKGEKGEFGSDGRKGAPGLAGKNGTDGQKGKLGRIGPPGCKGDPGSRGPDGYPGEAGSPGERGDQGAKGDSGRPGRRGPPGDPGDKGSKGYQGNNGAPGSPGVKGGKGGPGPRGPKGEPGRRGDPGTKGGPGSDGPKGEKGDPGPEGPRGLAGEVGSKGAKGDRGLPGPRGPQGALGEPGKQGSRGDPGDAGPRGDSGQPGPKGDPGRPGFSYPGPRGTPGEKGEPGPPGPEGGRGDFGLKGTPGRKGDKGEPADPGPPGEPGPRGPRGIPGPEGEPGPPGDPGLTECDVMTYVRETCGCCDCEKRCGALDVVFVIDSSESIGYTNFTLEKNFVINVVNRLGAIAKDPKSETGTRVGVVQYSHEGTFEAIRLDDERVNSLSSFKEAVKNLEWIAGGTWTPSALKFAYNQLIKESRRQKTRVFAVVITDGRHDPRDDDLNLRALCDRDVTVTAIGIGDMFHETHESENLYSIACDKPQQVRNMTLFSDLVAEKFIDDMEDVLCPDPQIVCPELPCQTELYVAQCTQRPVDIVFLLDGSERLGEQNFHKVRRFVEDVSRRLTLARRDDDPLNARMALLQYGSQNQQQVAFPLTYNVTTIHEALERATYLNSFSHVGTGIVHAINNVVRGARGGARRHAELSFVFLTDGVTGNDSLEESVHSMRKQNVVPTVVAVGGDVDMDVLTKISLGDRAAIFREKDFDSLAQPSFFDRFIRWIC",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q02788"},
		"label":"co6a2_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9213269"}],
		"expansion":{"id":"13","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q04857"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q02788"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MRKHRHLPLVAVFSLLLSGIATTHAQQHGDVKNGAAADIVFLVDSSWSAGKDRFLLVQEFLSDVVESLAVGDNDFHFALVRLNGNPHTEFLLNTYHSKQEVLSHIVNMSYIGGSNQTGKGLEYVIHSHLTEASGSRAADGVPQVIIVLTDGQSEDGFALPSAELKSADVNVFAVGVEGADERALGEVASEPLSMHVFNLENVTSLHGLVGNLVSCIHSSVNPERAGDKESLKDITAQDSADIIFLIDGSQNTGNANFDVIRDFLVNVLERLSVGNQQVQVGVVQYSEEPITMFSLNSYPSKAAVLDAVKGLSLVGGESANIGQALDFVVENHFTRAGGSRVEEGVPQVLVLISAGPSSDEIRDSVVALKQASVFSFGLGAQAASRAELQHIATDDSLVFTVPEFRSFGDLQEQILPYLVGVAQRHIVLQPPAIVTQVMEVNKRDIVFLVDGSSSLGPSNFNAIRDFVTRVIQRLEIGQDLVQVSVAQYADTVKPEFYLNSYTNKRDAITAVRKMRALNGSALYTGSSLDFVRNNLFTSSAGHRAAEGVPKLLVLITGGKSLDEVSQPAQELKRGSIMALAVGSKAADEDELKEIAFDSSLVFIPAEFRPAPLQNMLPSLMAPLRTLTGTTEVHVNKRDIIFLLDGSDNVGKNNFPYVRDFVTNLVNSLDVGSDNIRVGLVQFSDTPVTEFSLDTYQTKSELLAHLRRLQLKGGSGLNAGSALSYIHANHFTEAGGSRTREHVPQLLLLLMAGPSEDAYLQAANALVRSGVLTFCVGTNRADKAELEHIAFNPSLVYLMDDFRSLPSLPQQLIQPLTTYVSGGVQEVPLSQPESKRDILFLFDGSVNVLGQFPAVRDFLYRIIEELDVKPDGTRVAIAQFSDDVRLESRFSEHQTKAEILNLVKKMKLKTGKALNLGYALDYALRNIFVRSAGSRIEDNVQQFLVLLVAGRSSDAVAGPASSLKQRGVVPFIFQAKNANPSELEQIVLSPAFILAAESLPKIGDLQSQIVSLLKAEQGSGPVSGEKDVVFLIDGSEGVRSGFPLLKDFVQRVVESLDVGPDRVRVALVQYSDRTRPEFYLNSHMDQQGVISAIRRLTLLGGPTPNTGAALEFVLRNILTSSTGSRIAEGVPQLLIVLTAEPSGDDVRGPSVVLKQGGAVPIGIGIGNADISEMQTISFIPDFAVAIPTFRELGTIQQVISERVIQLNREELSSLKPILTPSTGAGVGSKKDVVFLIDGSRNAGPEFQYIRTLIERIVEYLDIGFDTTRVAVIQFSEDSKMEFPLNAHFSKDEVQNAVRRLRPKGGSQVYIGNALEYVLKNIFQRPLGSRIEEGVPQFLVLISSGKSDDEVDDSAVELKQFGVAPLTIARHTDQEELVKISLSPEYVYSVSTFRELPRLEQKLLTPITTLTSQQIHQILASTRYPPSVVESDAADIVFLIDSSDAVKPDGIAHIRDFVSRIVRRLNIGPSKVRIGVVQFSNDVFPEFYLKTHKSQSSVLEAIRRLRFKGGSPLNTGRALEFVARNLFVKSAGSRIEDGVPQHLVLFLGGKSQDDVARHAQVISSSGIVSLGIGDRNIDRTDLQTITNDPRLVFTVREFRELPNIEERVMLSFGPSGATPQPPGVDLPSPSRPEKKKADIVFLLDGSINFRRDSFQEVLRFASEIVDTVYEDGDSIRVGLVQYNSDPTDEFFLRDFSTKRQIIDAINKVVYKGGRHANTRVGIEHLLRNHFVPEAGSRLDERVPQIAFVITGGKSVEDAQDVSLALTQKGVKVFAVGVRNIDSEEVGKIASNSATAFRVGSVQELSELSETVLETLHDAMHETLCPGVTDVSKACNLEVILGFDGSRDQNVFVSQKGLESKVDIILNRISQIQRISCSGNQLPTVRVSVMANTPSGPVEAFDFAEYQPELFEKFRNMRSQRPYVLTADTLKLYQNKFRQSSPDTVKVVIHFTDGADGDMADLYRASEELRQAGAQALILVGLERVANLERLMHLEFGRGFMYDRPLRLNLLDLDYELAEQLDNIAEKACCGVPCKCSGERGDRGPIGSIGPKGISGEDGYRGYPGDEGGPGERGPPGVNGTQGFQGCPGQRGVKGSRGFPGEKGELGEIGLDGLDGEEGDKGLPGSSGEKGSPGRRGDKGPKGDKGERGDVGIRGDPGDSGRDSQQRGPKGETGDIGPMGLPGRDGIPGSPGDPGKDGGSGRRGPAGAKGNRGGPGQPGFEGEQGTRGSQGPPGPIGPPGLIGEQGIPGPRGGGGTAGAPGERGRTGPLGRKGEPGEPGPKGSIGNRGPRGETGDDGRDGVGSEGRRGKKGERGFPGYPGPKGTPGEPGADGPPGPKGIRGRRGNSGPPGATGQKGDPGYPGPSGHKGNRGDSVDQCALIQSIRDKCPCCYGPLECPVFPTELAFALDTSEGVTQDTFSRMREVLLGIVGDLTIAESNCPRGARVAVVTYNNEVTTEIRFADSKKKSALLDSIQNLQVALTSKQQSLETAMSFVARNTFKRVRSGFLMRKVAVFFSNKPTRASPQLREAVLKLSDAGITPLFLTSQEDRQLINALQINNTAVGHALVLPARRDLTDFLKNVLTCHVCLDICNIDPSCGFGSWRPSFRDRRAAGSDVDIDLAFILDSSEATTLFQFNEMKKYIGYVIRQLDLSPDPKASQHFARVAVVQQSTYESVDNASVPPVKVEFSLTDYGAKEKLLDFLSRRMTQLQGTMGLGNAIEYTIENIFESAPNPRDLKIMVLMLTGDMQRQQLEEAQRAILQAKCKGYFFVVLGIGRKVNIKEVYSFASEPNDVFFKFVDKSTELNEEPLMRFGRLLPSFVSSENAFYLPPDLRKQCDWFQGDQPVKNGVKFGHKQINPPHTANSSLTSKVVTTMKPVTTTKPTAIVNLPPAKPAPARPAPAQPVLAKPDPAKPAQARPAPAKPASAKLVPPQPVHVQPAPAQTASVRPAPAKPAPPQPAAAKPVPAKPAVPAQPAPPQPAAAKPVPAKPAVPAQPAPPQPAAAKPVPAKPAVPAQPAAAQPMPAQPVLTKSAAVKPASANKPVAAKPVATNTATATARPALAAKPAAAKPAATRPLAAAIRPVATKPEAPRQQAKPAATKPATTKPLARVSREVQVSEVTENSARLHWERPEPSSSFFYDLTVTSAHDQSLVLRQNLTVTDRVIGGLLAGQLYHVVVVSYLQSQVRAIYQGSFNTKKTQPPPLQAAHRASSSTINLMVNTEPLFLTKTDICKLSRDAGTCVDFKLLWHYDLESKSCKRFWYGGCGGNENRFHSQEECEKMCSPDLLV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"E9PWQ3"},
		"label":"e9pwq3_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9213269"}],
		"expansion":{"id":"13","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q04857"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"E9PWQ3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MRLRLLVAALCAAEILMGAPEVWAQPRDRVTCTRLYAADIVFLLDGSSSIGRSNFREVRGFLEGLVLPFSGAASAQGVRFATVQYSDDPQTEFGLDTLGSGSDTIRAIRELSYKGGNTRTGAALHHVSDRVFLPRLTRPGVPKVCILITDGKSQDLVDTAAQKLKGQGVKLFAVGIKNADPEELKRVASQPTSDFFFFVNDFSILRTLLPLISRRVCTTAGGVPVTLPSDDTPSGPRDLVLSEPSSQSLRVQWTAASGPVTGYKVQYTPLTGLGQPLPSERQEVNIPAGETSTRLQGLRPLTDYQVTVVALYANSIGEAVSGTARTTAKEGLELSLQNITSHSLLVAWRRVPGANGYRVTWRDLSGGPTQQQDLSPGQGSVFLDHLEPGTDYEVTVSALFGHSVGPAASLTARTASSVEQTLHPIILSPTSILLSWNLVPEARGYRLEWRRESGLETPQKVELPPDVTRHQLDGLQPGTEYRLTLYTLLEGREVATPATVVPTGLEQLVSPVMNLQAIELPGQRVRVSWNPVPGATEYRFTVRTTQGVERTLLLPGSQTTFDLDDVRAGLSYTVRVSARVGAQEGDASILTIHRDPEAPLVVPGLRVVASDATRIRVAWGLVPGASGFRISWRTGSGPESSRTLTPDSTVTDILGLQPSTSYQVAVSALRGREEGPPVVIVARTDPLGPVRRVHLTQAGSSSVSITWTGVPGATGYRVSWHSGHGPEKSLLVSGDATVAEIDGLEPDTEYIVRVRTHVAGVDGAPASVVVRTAPEPVGSVSKLQILNASSDVLRVTWVGVPGATSYKLAWGRSEGGPMKHRILPGNKESAEIRDLEGGVSYSVRVTALVGDREGAPVSIVITTPPATPALLETLQVVQSGEHSLRLRWEPVPGAPGFRLHWQPEGGQEQSLTLGPESNSYNLVGLEPATKYQVWLTVLGQTGEGPPRKVTAYTEPSHIPSTELRVVDTSIDSVTLTWTPVSGASSYILSWRPLRGTGQEVPRAPQTLPGTSSSHRVTGLEPGISYVFSLTPIQSGVRGSEISVTQTPACSHGPVDVVFLLHATRDNAHNAEAVRRVLERLVSALGPLGPQAAQVGLLTYSHRPSPLFPLNSSHDLGIILRKIRDIPYVDPSGNNLGTAVTTAHRYLLASNAPGRRQQVPGVMVLLVDEPLRGDILSPIREAQTSGLKVMALSLVGADPEQLRRLAPGTDPIQNFFAVDNGPGLDRAVSDLAVALCQAAVTIEPQTGPCAVHCPKGQKGEPGVTGLQGQAGPPGPPGLPGRTGAPGPQGPPGSTQAKGERGFPGPEGPPGSPGLPGVPGSPGIKGSTGRPGPRGEQGERGPQGPKGEPGEPGQITGGGGPGFPGKKGDPGPSGPPGSRGPVGDPGPRGPPGLPGISVKGDKGDRGERGPPGPGIGASEQGDPGLPGLPGSPGPQGPAGRPGEKGEKGDCEDGGPGLPGQPGPPGEPGLRGAPGMTGPKGDRGLTGTPGEPGVKGERGHPGPVGPQGLPGAAGHPGVEGPEGPPGPTGRRGEKGEPGRPGDPAVGPGGAGAKGEKGEAGLPGPRGASGSKGEQGAPGLALPGDPGPKGDPGDRGPIGLTGRAGPTGDSGPPGEKGEPGRPGSPGPVGPRGRDGEAGEKGDEGIPGEPGLPGKAGERGLRGAPGPRGPVGEKGDQGDPGEDGRNGSPGSSGPKGDRGEPGPPGPPGRLVDAGIESRDKGEPGQEGPRGPKGDPGPPGVSGERGIDGLRGPPGPQGDPGVRGPAGDKGDRGPPGLDGRSGLDGKPGAPGPPGLHGASGKAGDPGRDGLPGLRGEHGPPGPPGPPGVPGKAGDDGKPGLNGKNGDPGDPGEDGRKGEKGDSGAPGREGPDGPKGERGAPGNPGLQGPPGLPGQVGPPGQGFPGVPGITGPKGDRGETGSKGEQGLPGERGLRGEPGSLPNAERLLETAGIKVSALREIVDTWDESSGSFLPVPERRPGPKGDPGDRGPPGKEGLIGFPGERGLKGERGDPGPQGPPGLALGERGPPGPPGLAGEPGKPGIPGLPGRAGGSGEAGRPGERGERGEKGERGDQGRDGLPGLPGPPGPPGPKVAIEEPGPGLAREQGPPGLKGAKGEPGSDGDPGPKGDRGVPGIKGDVGEPGKRGHDGNPGLPGERGVAGPEGKPGLQGPRGTPGPVGSHGDPGPPGAPGLAGPAGPQGPSGLKGEPGETGPPGRGLPGPVGAVGLPGPPGPSGLVGPQGSPGLPGQVGETGKPGPPGRDGSSGKDGDRGSPGVPGSPGLPGPVGPKGEPGPVGAPGQVVVGPPGAKGEKGAPGDLAGALLGEPGAKGDRGLPGPRGEKGEAGRAGGPGDPGEDGQKGAPGLKGLKGEPGIGVQGPPGPSGPPGMKGDLGPPGAPGAPGVVGFPGQTGPRGETGQPGPVGERGLAGPPGREGAPGPLGPPGPPGSAGAPGASGLKGDKGDPGAGLPGPRGERGEPGVRGEDGHPGQEGPRGLVGPPGSRGEQGEKGAAGAAGLKGDKGDSAVIEGPPGPRGAKGDMGERGPRGIDGDKGPRGESGNPGDKGSKGEPGDKGSAGSIGVRGLTGPKGEPGAAGIPGEPGAPGKDGIPGFRGDKGDIGFMGPRGLKGEKGIKGTCGRDGERGDKGEAGFPGRPGLAGKKGDMGEPGLPGQSGAPGKEGLIGPKGDRGFDGQSGPKGDQGEKGERGPPGVGGFPGPRGNDGSSGPPGPPGGVGPKGPEGLQGQKGERGPPGESVVGAPGAPGTPGERGEQGRPGPAGPRGEKGEAALTEDDIRDFVRQEMSQHCACQGQFIASGSRPLPGYAADTAGSQLHHVPVLRVSHVEEEGQVPPEDDDDFSEYSVYSVEDYQEPEVPWDGEAEIKGWDQRGSDLCSLPLDEGSCTAYTLRWYHRAVPGGTACHPFVYGGCGGNANRFGTREACERRCPPQGVHSQKTGAA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q63870"},
		"label":"co7a1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9213308"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q63870"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q63870"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAVPPRPLQLLGILFIISLNSVRLIQAGAYYGIKPLPPQIPPQIPPQIPQYQPLGQQVPHMPLGKDGLSMGKEMPHMQYGKEYPHLPQYMKEIPPVPRMGKEVVPKKGKGEVPLASLRGEQGPRGEPGPRGPPGPPGLPGHGMPGIKGKPGPQGYPGIGKPGMPGMPGKPGAMGMPGAKGEIGPKGEIGPMGIPGPQGPPGPHGLPGIGKPGGPGLPGQPGAKGERGPKGPPGPPGLQGPKGEKGFGMPGLPGLKGPPGMHGPPGPVGLPGVGKPGVTGFPGPQGPLGKPGPPGEPGPQGLIGVPGVQGPPGMPGVGKPGQDGIPGQPGFPGGKGEQGLPGLPGPPGLPGVGKPGFPGPKGDRGIGGVPGVLGPRGEKGPIGAPGMGGPPGEPGLPGIPGPMGPPGAIGFPGPKGEGGVVGPQGPPGPKGEPGLQGFPGKPGFLGEVGPPGMRGLPGPIGPKGEGGHKGLPGLPGVPGLLGPKGEPGIPGDQGLQGPPGIPGIVGPSGPIGPPGIPGPKGEPGLPGPPGFPGVGKPGVAGLHGPPGKPGALGPQGQPGLPGPPGPPGPPGPPAVMPTPSPQGEYLPDMGLGIDGVKPPHAYAGKKGKHGGPAYEMPAFTAELTVPFPPVGAPVKFDKLLYNGRQNYNPQTGIFTCEVPGVYYFAYHVHCKGGNVWVALFKNNEPMMYTYDEYKKGFLDQASGSAVLLLRPGDQVFLQMPSEQAAGLYAGQYVHSSFSGYLLYPM",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q00780"},
		"label":"co8a1_mouse"
	},
	{
		"object":"interactor",
		"sequence":"MQGALMPLPSLLLLLLGCGPRVSSGGGAGGAAGYAPVKYVQPMQKGPVGPPFREGKGQYLEMPLPMLPMDLKGEPGPPGKPGPRGPPGPPGFPGKPGTGKPGVHGQPGPAGPPGFSRMGKAGPPGLPGKVGPPGQPGLRGEPGIRGDQGLRGPPGPPGLPGPSGITVPGKPGAQGAPGPPGFRGEPGPQGEPGPRGDRGLKGDNGVGQPGLPGAPGQAGAPGPPGLPGPAGLGKPGLDGIPGAPGDKGDSGPPGVPGSRGEPGAVGPKGPPGVDGVGIPGAAGVPGPQGPVGAKGEPGLRGPPGLIGPVGYGMPGKPGPKGDRGPVGAPGLLGDRGEPGEDGKPGEQGPQGLGGPPGLPGSAGLPGRRGPPGSKGEVGPGGPPGVPGIRGDQGPNGLAGKPGLPGERGLPGAHGPPGPTGPKGEPGFTGRPGGPGVAGALGQKGDLGLPGQPGLRGPSGIPGLQGPAGPIGPQGLPGLKGEPGLPGPPGEGKVGEPGSAGPTGPPGVPGSPGLTGPPGPPGPPGPPGAPGALDETGIAGLHLPNGGVEGAVLGKGGKPQFGLGELSAHATPAFTAVLTSPFPASGMPVRFDRTLYNGHSGYNPATGIFTCPVGGVYYFAYHVHVKGTNVWVALYKNNVPATYTYDEYKKGYLDQASGGAVLQLRPNDQVWVQMPSDQANGLYSTEYIHSSFSGFLLCPT",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P25318"},
		"label":"co8a2_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9213326"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q00780"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"28927088",
				"name":"col8a2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["7409559"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P25318"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"7409559",
				"name":"col8a1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["28927088"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9213387"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q00780"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q00780"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9213403"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P25318"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P25318"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MTGAPALALLLLGQLLTATSAQKVGPRGPPGPQGPPGKPGKDGIDGEAGPPGLPGLPGPKGTSGKPGKPGEAGLPGLPGVDGLTGRDGPAGPKGAPGERGSLGPPGPPGLGGKGLPGPPGEAGVSGLPGGIGLRGPPGPSGLPGLPGLPGPPGPPGNPGVLPEGATDLQCPAICPPGPPGPPGMPGFKGPTGYKGEQGEVGKDGEKGSPGPPGPPGIPGTVGLQGPRGLRGLPGPLGPPGDRGPIGFRGPPGTPGAPGKVGDRGERGPEGFRGPKGDLGRPGPKGIPGMAGPGGEPGMPGKDGKDGVPGLDGEKGEAGRNGGQGEKGPNGLPGLPGRAGSKGEKGEPGRTGELGEAGPSGEPGIPGDVGVPGERGEAGHRGSVGALGPQGPPGAPGIRGFQGQKGSTGDPGLPGPQGLRGDVGDRGPGGATGPKGDQGIAGSDGLPGDKGELGPNGPVGQKGESGSRGELGPKGIQGPNGTSGVQGVPGPPGPLGLQGVQGVPGITGKPGVPGKEASEQRIRELCGGMISEQIAQLAAHLRKPLAPGSIGRPGPAGPPGPPGPPGSIGHPGARGPPGYRGPTGELGDPGPRGSQGDRGDKGATGAGLDGPAGDQGYQGPQGVPGISKDGRDGAHGEPGLPGDPGLPGAAGAQGTPGICDTSACQGAVLGGGGEKSGPRSS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"A2ACT7"},
		"label":"a2act7_mouse"
	},
	{
		"object":"interactor",
		"sequence":"MTAVPAPRSLFVLLQVLWLALAQIRGPPGEPGPPGPPGPPGVPGSDGIDGDKGPPGKVGPPGSKGEPGKPGPDGPDGKPGIDGLMGAKGEPGPVGTPGVKGQPGLPGPPGLPGPGFAGPPGPPGPVGLPGEIGTPGPKGDPGPEGPSGPPGPPGKPGRPGTIQGLEGSADFLCPTNCPAGVKGPQGLQGVKGHPGKRGILGDPGRQGKPGPKGDVGASGEQGIPGPPGPQGIRGYPGMAGPKGEMGPRGYKGMVGSIGAAGPPGEEGPRGPPGEAGEKGDVGSQGARGPQGITGPKGITGPPGIDGKDGTPGIPGMKGSAGQVGRPGSPGHQGLAGVPGQPGTKGGPGDKGEPGQQGLPGVSGPPGKEGEPGPRGEIGPQGIMGQKGDQGERGPVGQPGPQGRQGPKGEQGPPGIPGPQGLPGIKGDKGSPGKTGPRGGVGDPGVAGLPGEKGEKGQSGEPGLKGQQGVRGETGYPGPSGDIGAPGVQGYPGLPGPRGLVGDRGVPGQPGRQGVVGRAASDQHIVDVVLKMIQEQLAEVAVSAKREALGAAGMVGLPGPPGPPGYPGKQGPNGHPGPRGIPGIVGAVGQIGNTGPKGKRGEKGDRGEMGHGHPGMPGPPGIPGLPGRPGQAINGKDGDRGSPGAPGEAGRPGRPGPVGLPGFCEPAACLGASAYTSARLTEPGSIKGP",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q07643"},
		"label":"co9a2_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9213420"}],
		"expansion":{"id":"14","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"A2ACT7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q07643"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKNFWKISVFFCVCSCLGPWVSATLKRRARFPANSISNGGSELCPKIRIGQDDLPGFDLISQFQIEKAASRRTIQRVVGSTALQVAYKLGSNVDFRIPTRHLYPSGLPEEYSFLTTFRMTGSTLEKHWNIWQIQDSAGREQVGVKINGQTKSVAFSYKGLDGSLQTAAFLNLPSLFDSRWHKLMIGVERTSATLFIDCIRIESLPIKPRGQIDADGFAVLGKLVDNPQVSVPFELQWMLIHCDPLRPRRETCHELPIRITTSQTTDERGPPGEQGPPGPPGPPGVPGIDGIDGDRGPKGPPGPPGPPGDPGKPGAPGKPGTPGADGLTGPDGSPGSVGPRGQKGEPGVPGSRGFPGRGIPGPPGPPGTTGLPGELGRVGPIGDPGKRGPPGPPGPPGPSGTIGFHDGDPLCPNSCPPGRSGYPGLPGMRGHKGAKGEIGEPGRQGHKGEEGDQGELGEVGAQGPPGPQGLRGITGIVGDKGEKGARGFDGEPGPQGIPGAAGDQGQRGPPGETGPKGDRGIQGSRGIPGSPGPKGDTGLPGVDGRDGIPGMPGTKGEAGKPGPPGDVGLQGLPGVPGIPGAKGVAGEKGNTGAPGKPGQLGSSGKPGQQGPPGEVGPRGPRGLPGSRGPVGPEGSPGIPGKLGSVGSPGLPGLPGPPGLPGMKGDRGVFGEPGPKGEQGASGEEGEAGARGDLGDMGQPGPKGSVGNPGEPGLRGPEGIRGLPGVEGPRGPPGPRGMQGEQGATGLPGIQGPPGRAPTDQHIKQVCMRVVQEHFVEMAASLKRPDTGASGLPGRPGPPGPPGPPGENGFPGQMGIRGLPGIKGPPGALGLRGPKGDLGEKGERGPPGRGPKGLPGAIGLPGDPGPASYGKNGRDGEQGPPGVAGIPGVPGPPGPPGPPGFCEPASCTLQSGQRAFSKGPDK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q05722"},
		"label":"co9a1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9213420"}],
		"expansion":{"id":"14","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"A2ACT7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q05722"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLPQIPFLLLMFLTLVHGMFYAERYQTPTGIKGPLASPKTQYFIPYAIKSKGIPVRGEQGIPGPPGPTGPRGHPGPSGPPGKPGYGSPGLQGEPGLPGPPGISATGKPGLPGPPGKPGERGPYGHKGDIGPAGLPGPRGPPGPPGIPGPAGISVPGKPGQQGLTGAPGPRGFPGEKGAQGAPGVNGRKGETGYGSPGRPGERGLPGPQGPIGPPGPSGVGRRGENGFPGQPGIKGDRGFPGEMGPSGPPGPQGPPGKQGREGIGKPGAIGSPGQPGIPGEKGHPGAPGIAGPPGAPGFGKQGLPGLRGQRGPAGLPGAPGAKGERGPAGHPGEPGLPGSPGNMGPQGPKGIPGNHGIPGAKGEIGLVGPAGPPGARGARGPPGLDGKTGYPGEPGLNGPKGNPGLPGQKGDPGVGGTPGLRGPVGPVGAKGVPGHNGEAGPRGEPGIPGTRGPTGPPGVPGFPGSKGDPGNPGAPGPAGIATKGLNGPTGPPGPPGPRGHSGEPGLPGPPGPPGPPGQAVMPDGFIKAGQRPRLSGMPLVSANHGVTGMPVSAFTVILSKAYPAVGAPIPFDEILYNRQQHYDPRSGIFTCKIPGIYYFSYHVHVKGTHVWVGLYKNGTPTMYTYDEYSKGYLDQASGSAIMELTENDQVWLQLPNAESNGLYSSEYVHSSFSGFLVAPM",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q05306"},
		"label":"coaa1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9213474"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q05306"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q05306"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MEPWSRWKTKRWIWDLTISTLALTFLFQAREVRGAAPVDILKALDFHNSPVGISKTTGFCTNRKNSKDPDVAYRVTEEAQISAPTKQLFPGGIFPQDFSILFTIKPKKGTQAFLLSLYNEHGIQQLGVEVGRSPVFLFEDHTGKPTPENYPLFSTVNIADGKWHRVAISVEKKTVTMIVDCKKKITKPLDRSERSIVDTNGIMVFGTRILETDVFQGDIQQFLITGDPKAAYDYCDHYSPDCDLTSKAAQAQEPHIDEYAPEDIIEYDYEYGETDYKEAESVTEMPTFTEETVAQTEANIVDDFQDYNYGTMEPYQTETPRRVSGSNEPNPVEEGFTEEYLTGEDYDVQRNTSEDILYGNKGVDGRDSDLLVDGDLGEYDFYEYKEYEERTTTSPNEEFGPGVPAETDFTETSINGHGAYGEKGQKGEPAVVEPGMLVEGPPGPAGPAGLMGPPGLQGPSGLPGDPGDRGPPGRPGLPGADGLPGPPGTMLMLPFRYGGDGSKGPTISAQEAQAQAILQQARIALRGPPGPMGLTGRPGPVGGPGSAGAKGESGDPGPQGPRGVQGPPGPTGKPGKRGRPGADGGRGMPGESGSKGDRGFDGLPGLPGDKGHRGERGPQGPPGLPGDDGMRGEDGEIGPRGLPGEAGPRGLLGPRGTPGPPGQPGIGGIDGPQGPKGNMGPQGEPGPPGQQGNPGPQGLPGPQGPIGPPGEKGPQGKPGLAGLPGADGPPGHPGKEGQSGEKGALGPPGPQGPIGYPGPRGVKGADGVRGLKGSKGEKGEDGFPGFKGDMGLKGDRGEVGQVGPRGEDGPEGPKGRAGPTGDPGPSGQAGEKGKLGVPGLPGYPGRQGPKGSTGFPGFPGANGEKGARGIAGKPGPRGQRGPTGPRGSRGARGPTGKPGPKGTSGGDGPPGPPGERGPQGPQGPVGFPGPKGPPGPAGKDGLPGHPGQRGETGFQGKTGPPGPGGVVGPQGPTGETGPIGERGHPGPPGPPGEQGLPGAAGKEGAKGDPGPQGISGKDGPAGIRGFPGERGLPGAQGAPGLKGGEGPQGPQGPVGSPGERGSAGTAGPIGLPGRPGPQGPPGPAGEKGAPGEKGPQGPAGRDGVQGPVGLPGPAGPAGSPGEDGDKGEIGEPGQKGSKGDKGENGPPGPPGLQGPVGAPGIAGGDGEPGPRGQQGMFGQKGDEGARGFPGLPGPIGLQGLPGPPGEKGENGDVGPMGPPGPPGPRGPQGPNGADGPQGPPGSIGSVGVVGDKGEPGEAGNPGPPGEAGSGGLKGERGEKGEAGPPGAAGPAGIKGPPGDDGPKGNPGPVGFPGDPGPPGEPGPAGQDGVGGDKGEDGDPGQPGPPGPSGEAGPPGPPGKRGPPGASGSEGRQGEKGAKGEAGAEGPPGKTGPVGPQGPSGKPGPEGLRGIPGPVGEQGLPGAAGQDGPPGPLGPPGLPGLKGDPGSKGEKGHPGLIGLIGPPGEQGEKGDRGLPGTQGSPGAKGDGGIPGPAGPIGPPGPPGLPGPAGPKGNKGSSGPTGQKGDSGMPGPPGPPGPPGEVIQPLPILSPKKTRRHTESIQGDAGDNILDYSDGMEEIFGSLNSLKQDIEHMKFPMGTQTNPARTCKDLQLSHPDFPDGEYWIDPNQGCSGDSFKVYCNFTAGGETCIYPDKKSEGVRISSWPKEKPGSWYSEFKRGKLLSYLDVEGNSINMVQMTFLKLLTASARQNFTYNCHQSAAWYDVLSGSYDKALRFLGSNDEEMSYENNPHIKALYDGCASRKGYEKTVIEINTPKIDQVPIIDVMINDFGDQNQKFGFEVGPACFLG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q61245"},
		"label":"coba1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9214957"}],
		"expansion":{"id":"15","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P28481"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q61245"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MERCSRCHRLLLFLPLVLGLSAAPGWAGAPSVDVLRALRFPSLPDGVRRSKGVCPGDVAYRVARPAQLSAPTRQLFPGGFPKDFSLLTVVRTRPGLQAPLLTLYSAQGVQQLGLELGRPVRFLYEDQRGRPQASAQPIFRGLSLADGKWHHVAVAVKGQSVTLIVDCKKRVTRPLPRSVHPVLDTHGVVIFGAHILDDEVFEGDVQELLVVPGVQAAYQSCGQKDLECEREQRDGPQTQKPHRAQRSPKKEPARLHKPQSQEPQKQPTESLYYDYEPPYYDVMTTGTAPDYQYPTPGEEEGVLESSPLPFLEEEQTDLQVSPTADSFQAEEYGEGGTDSPAGFYDYTYGYGDDYREETELGPALSAETAHSGAVAHGPRGLKGEKGEPAVLEPGMFVEGPPGPEGPAGLAGPPGIQGNPGPVGDPGERGPPGRAGLPGSDGPPGPPGTSLMLPFRFGSSGGDKGPVVAAQEAQAQAILQQARLALRGPPGPMGYTGRPGPLGQPGSPGLKGESGDLGPQGPRGPQGLTGPPGKAGRRGRAGADGARGMPGEPGMKGDRGFDGLPGLPGEKGQRGDTGAQGLPGPPGEDGERGDDGEIGPRGLPGESGPRGLLGPKGPPGIPGPPGVRGMDGPHGPKGSLGPQGEPGPPGQQGTPGAQGLPGPQGAIGPHGEKGARGKPGLPGMPGSDGLPGHPGKEGPPGTKGNQGPSGPQGPLGYPGPRGVKGVDGIRGLKGHKGEKGEDGFPGFKGDIGVKGDRGEVGVPGSRGEDGPEGPKGRTGPTGDPGPTGLMGEKGKLGVPGLPGYPGRQGPKGSLGFPGFPGASGEKGARGLSGKSGPRGERGPTGPRGQRGPRGATGKSGAKGTSGGDGPHGPPGERGLPGPQGPNGFPGPKGPPGPAGKDGLPGHPGQRGEVGFQGKTGPPGPPGVVGPQGTAGESGPMGERGHSGPPGPPGEQGLPGTSGKEGTKGDPGPPGAPGKDGPAGLRGFPGERGLPGTAGGPGLKGNEGPAGPPGPAGSPGERGAAGSGGPIGPPGRPGPQGPPGAAGEKGVPGEKGPIGPTGRDGVQGPVGLPGPAGPPGVAGEDGDKGEVGDPGQKGTKGNKGEHGPPGPPGPIGPVGQPGAAGADGEPGARGPQGHFGAKGDEGTRGFNGPPGPIGLQGLPGPSGEKGETGDGGPMGPPGPPGPRGPAGPNGADGPQGSPGGVGNLGPPGEKGEPGESGSPGVQGEPGVKGPRGERGEKGESGQAGEAGPPGPKGPTGDNGPKGNPGPVGFPGDPGPPGEAGPRGQDGAKGDRGEDGEPGQPGSPGPTGENGPPGPLGKRGPAGTPGPEGRQGEKGAKGDPGAVGAPGKTGPVGPAGLAGKPGPDGLRGLPGSVGQQGRPGATGQAGPPGPVGPPGLPGLRGDAGAKGEKGHPGLIGLIGPTGEQGEKGDRGLPGPQGSPGQKGETGIPGASGPIGPGGPPGLPGPSGPKGAKGATGPAGPKGEKGVQGPPGHPGPPGEVIQPLPIQMPKKTRRSVDGSKLIQDEEAVPTGGAPGSPAGLEEIFGSLDSLREEIEQMRRPAGTQDSPARTCQDLKLCHPELPDGEYWVDPNQGCARDAFRVFCNFTAGGETCVTPRDDVTQFSYVDSEGSPVGVVQLTFLRLLSVSAHQDVSYPCSGVSQDGPLKLRGANEDELSPETSPYVKEFRDGCQTQQGRTVLEVRTPVLEQLPVLDASFADLGAPTRRGGVLLGPVCFMG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q64739"},
		"label":"coba2_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9214957"}],
		"expansion":{"id":"15","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P28481"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q64739"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9215032"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q61245"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11971523",
				"name":"col5a2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["13018922"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q3U962"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"13018922",
				"name":"col11a1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["11971523"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9215053"}],
		"expansion":{"id":"16","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O88207"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q3U962"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9215053"}],
		"expansion":{"id":"16","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O88207"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q61245"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MQTRLPRALAALGVALLLSSIEAEVDPPSDLNFKIIDENTVHMSWERPVDPIVGYRITVDPTTDGPTKEFTLAASTTETLLSDLIPETQYVVTITSYNEVEESVPVIGQLTIQTGGPTKPGEKKPGKTEIQKCSVSAWTDLVFLVDGSWSVGRNNFKYILDFIVALVSAFDIGEEKTRVGVVQYSSDTRTEFNLNQYYRREDLLAAVKKIPYKGGNTMTGDAIDYLVKNTFTESAGSRAGFPKVAIIITDGKSQDEVEIPARELRNIGVEVFSLGIKAADAKELKQIASTPSLNHVFNVANFDAIVDIQNEIISQVCSGVDEQLGELVSGEEVIEPPSNLVVTELSSKYIRLSWDPSPSAVTGYKILLTPMAAGSRHHALSVGPQTTTLNVRDLTADTEYQISVFAMKGLTSSEPTSVMEKTQPMKVQVECSRGVDIKADIVFLVDGSYSIGIANFVKVRAFLEVLAKSFEISPNRVQISLVQYSRDPHTEFTLKEFNRVEDIIKAINTFPYRGGSTNTGKAMTYVREKIFVPNKGSRSNVPKVMILITDGKSSDAFRDPAIKLRNSDVEIFAVGVKDAVRSELEAIASPPAETHVFTVEDFDAFQRISFELTQSICLRIEQELAAIKKKAYVPPKDLRFTQVTANSFKAEWSPPGDNVFSYHVTYKDANGDDEVTVVEPASSTSVVLNNLRPETLYLVNVTAEYEDGFSVPITGEETTAEVKGVPRNLKVTDETTDSFKLTWSQAPGRVLRYRIRYRPVSGGESKEVSTPANQRRKTLENLTPDTKYEISVIAEYSSGPGSPLTGNAATEEVRGNPRDLRVSDATTSTLKLSWSRAPGKVKQYLVTYTPAAGGETQEVTVRGDTTTTMLRKLKEGTQYDLSVTALYASGAGEALSGKGSTLEERGSPQNLVTKDITDTSIGAYWTSAPGMVRGYRVSWKSLYDDIEAGETTLPGDAIHTMIENLQPETKYKISVFATYSSGEGEPVTGDATTELSQDSKILRVDEETEHTMRVTWKAAPGKVVNYRVVYRPQGGGRQMVAKVPPTVTSTVLKRLQPQTTYDITVLPMYKTGEGKLRQGSGTTASRFKSPRNLKTSDPTMSSFRVTWEPAPGEVKGYKVTFHPTGDDRRLGELVLGPYDNTVVLEELRAGTTYRVNVFGMFDGGESLPLVGQEMTTLSDTTVTPFLSSGMDCLTRAEADIVLLVDGSWSIGRANFRTVRSFISRIVEVFEIGPKRVQIALAQYSGDPRTEWQLNAHRDKKSLLQAVANLPYKGGNTLTGMALNFIRQQSFKTQAGMRPRARKIGVLITDGKSQDDVEAPSKKLKDEGVELFAIGIKNADEVELKMIATDPDDTHAYNVADFESLSKIVDDLTINLCNSVKGPGDLEAPTNLVISERTHRSFRVSWTPPSDSVDRYKVEYYPVSGGKRQEFYVSRLDTSTVLKDLKPETDYVVNVYSVVEDEYSEPLKGTEKTLPVPVVSLNIYDVGPTTMHVQWQPVGGATGYTVSYQPTRSPEGTKPKEMRVGPTVNDVQLTGLLPNTEYEVTVQAVLYDLTSEPAKAREVTLPLPRPQDVKLRDVTHSTMNVVWEPVLGKVRKYIVRYKTPDEEFKEVEVDRSRASTILKDLSSQTQYTVSVSAVYDEGTSPPATAYDTTRRVPAPTNLQFTEVTPESFRGTWDHGASDVSLYRITWAPVGNPDKMETILNGDENTLVFENLNPNTPYEVSITAIYPDESESEDLSGTERTLRLIPLTTQAPKSGPRNLQVYNATSNSLTVKWDPASGRVQKYRITYQPSTGEGNEQTITVGGRQNSVLLQKLKPDTPYTITVYSQYPDGEGGRMTGRGKTKPLNTVRNLRVYDPSTSSLSVRWDHAEGNPRQYKLFYAPTSGGPEELVPIPGNTNYAILRNLQPDTPYTITVVPVYTEGDGGRTSDTGRTLVRGLARNIQVYNPTPNSLDVRWDPAPGPVQQYRIVYSPVAGTRPSESIVVPGNTRTVHLERLIPDTPYSVNIVALYSDGEGNPSPSQGRTLPRSGPRNIRVFGETTNSLSVAWDHADGPVQQYRIIYSPTVGDPIDEYTTVPGRRNNVILQPLQPDTPYKITVIAIYEDGDGGHLTGNGRTVGLLPPQNIHIFDEWYTRFRVSWDPSPSPVLGYKIVYKPVGSNEPMEAFVGEVTSYTLHNLNPSTTYDVSVYAQYDSGLSVPLTDQGTTLYLNVTDLKTYQVGWDTFCVKWSPHRAATSYRLKLSPADGTRGQEITVRGSETSHCFTGLSPEAEYGVTVFVQTPNLEGPGVPIKEQTTVKPTEAPTEPPTPSPPPTIPPARDVCKGAKADIVFLTDASWSIGDDNFNKVVKFIFNTVGAFDEVNPAGIQVSFVQYSDEVKSEFKLNTYNDKALALGALQNIRYRGGNTRTGKALTFIKEKVLTWESGMRKNVPKVLVVVTDGRSQDEVKKAAFVIQQSGFSVFVVGVADVDYNELANIASKPSERHVFIVDDFESFEKIEDNLITFVCETATSSCPLIYLDGYTSPGFKMLEAYNLTEKNFASVQGVSLESGSFPSYSAYRLQKNAFINQPTAELHPNGLPPSYTIILLFRLLPETPSDPFAIWQITDRDYRPQVGVIADPSSKTLSFFNKDTRGEVQTVTFDTDEVKTLFYGSFHKVHIVVTSKSVKIYIDCYEIIEKDIKEAGNITTDGYEILGKLLKGERKSATFQIQSFDIVCSPVWTSRDRCCDIPSRRDEAKCPALPNACTCTQDSVGPPGPPGPAGGPGAKGPRGERGINGAVGPPGPRGDTGPPGPQGPPGPQGPNGLSIPGEQGRQGMKGDAGEPGLPGRTGTPGLPGPPGPMGPPGDRGFTGKDGAMGPRGPPGPPGSPGSPGVTGPSGKPGKPGDHGRPGQSGLKGEKGDRGDIASQNMMRAVARQVCEQLISGQMSRFNQMLNQIPNDYHSSRNQPGPPGPPGPPGSAGARGEPGPGGRPGFPGTPGMQGPPGERGLPGEKGERGTGSQGPRGPPGPPGPQGESRTGPPGSTGSRGPPGPPGRPGNSGIRGPPGPPGYCDSSQCASIPYNGQGYPEPYVPEGGAYLPEREPFIVPVEPERTAEYEDDYGADEPDQQHPDHMRWRRALRPGPAE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q60847"},
		"label":"coca1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9215080"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q60847"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q60847"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MVAERTRKAAASGSRGPGELGAPGPGTVALAEQCARLPSPGCCGLLALALCSLALSLLAHFRTAELQARVLRLEAERGEQQMEKAILGRVNQLLDEKWKFYSRRRREAPKMSPGCNCPPGPPGPTGRPGLPGDKGAIGMPGRVGIKGQPGEKGAPGDAGMSIVGPRGPPGQPGTRGFPGFPGPIGLDGRPGHPGPKGEMGLVGPRGQPGPQGQKGEKGQCGEYPHREYPGGMLAALRSNPIMSLKLLPLLNSVRLAPPPVIKRRTFQGEQSQTGIQGPPGPPGPPGPSGPLGHPGLPGPIGPPGLPGPPGPKGDPGIQGYHGRKGERGMPGMPGKHGAKGVPGIAVAGMKGEPGTPGTKGEKGAAGSPGLLGQKGEKGDAGNAIGGGRGEPGPPGLPGPPGPKGEAGVDGQAGPPGQQGDKGQPGAAGEQGPSGPKGAKGEPGKGEMVDYNGSINEALQEIRTLALMGPPGLPGQTGPPGPPGTPGQRGEIGLPGPPGHDGDKGPRGKPGDMGPAGPQGPPGKDGPPGMKGEVGPPGSPGEKGETGQAGPQGLDGPTGEKGEPGDEGRPGATGLPGPIGLPGFTGEKGEAGEKGDPGAEVPGPPGPEGPPGPPGLQGFPGPKGEAGLEGSKGEKGSQGEKGDRGPLGLPGASGLDGRPGPPGTPGPIGVPGPAGPKGERGSKGDPGMTGPTGAAGLPGLHGPPGDKGNRGERGKKGSRGPKGDKGDQGAPGLDAPCPLGEDGLPVQGCWNK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9R1N9"},
		"label":"coda1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9215129"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9R1N9"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9R1N9"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MMIWQCKMRDWLILAFLAAACFCTIVRGQVAPPTRLRYNVISHDSIQISWKAPRGKFGGYKLLVAPASGGKTNQMNLQNTATKAIIQGLLPEQNYTVQLIAYYKDKESKPAQGQFRIKDLEKRKDPTKPKVKVVDKGNGSKPTSPEEVKFFCETPAIADIVILVDGSWSIGRFNFRLVRNFLENLVTAFNVGSEKTRIGLAQYSGDPRIEWHLNAFNTKDEVIDAVRSLPYKGGNTLTGLALNFIFENSFKPEAGSRSGVSKIGILITDGKSQDDIIPPSRNLRESGVELFAIGVKNADLSELQEIASEPDSTHVYNVAEFDLMHTVVESLTRTVCSRVEEQDKEIKASALATIGPPTELITSEVTARSFMVNWTQSPGKVEKYRVVYYPTRGGKPEEVVVDGSVSSTVLKNLMSSTEYQIAVFAVSAHTASEGLRGAETTLALPMASDLELYDVTENSMRVRWDAVPGATGYLILYAPLTEGLAGDEKEMKIGETHTDIELSGLFPNTEYTVTVYAMFGEEASDPATGQETTLPLTPPRNLRISNVGSNSARLTWDPASGKISGYRIVYTSADGTEINEVEVDPITTFPLKGLTPLTEYSIAIFSIYEEGQSLPLVGEFTTEEVPAQQYLEIDEVKTDSFRVTWHPLSAEEGQHKLMWIPVYGGKTQEVDLKEEQDSYVIEGLDPGTEYEVSLLAVLDDGSESEVVTAVGTTLDDFWTEAPTAIEPTSPVTSVLQTGIRNLVVDDETATSLRVSWDISDSNVEQFRVTYLKAQGDPMEEVVGTVMVPGVQNSLLLKALLPDTEYKVTVTPVYTVGEGVSVSAPGKTLPSSGPQNLRVSEEWYNRVRITWDPPSGPVKGYRIVYKPVSVPGQTLETFVGADINTIVMTNLLSGMDYNVKIFASQASGFSDALTGLVQTLFLGVTDLQANQVEMTSLCARWQIHRHATAYRIVLESLQDTQAQESTVGGGVNRHCFYGLQPDSEYKISVYTKLQELEGPSVSIMQKTQSLPTEPPTFPPTIPPAKEVCKAAKADLVFMVDGSWSIGDDNFNKIINFLYSTVGALDKIGADGTQVAMVQFTDDPRTEFKLDSYKTKETLLDAIRHISYKGGNTKTGKAIKHVRDTLFTSDSGTRRGIPKVIVVITDGRSQDDVNKISREMQADGFNIFAIGVADADYSELVQIGSKPSSRHVFFVDDFDAFKKIEDELITFVCETASATCPMVHKDGVDLAGFKMMEMFGLVEKDFSAVEGVSMEPGTFNLFPCYQIHKDALVSQPTKYLHPEGLPSDYTMSFLFRILPDTPQEPFALWEILNKNSEPLVGIILDNGGKTLTYFNYDYTGDFQTVTFEGPDIRKMFYGSFHKLHVVVSKTLAKVVVDCKEVGQKAINASANITSDGVEVLGRMVRSRGPNGNSAPFQLQMFDIVCSTSWASKDRCCELPGLRDEESCPDLPRSCSCSETNEVALGPAGPPGGPGLRGPKGQQGEQGPKGPEGPRGETGPAGPQGPPGPQGPSGLSIQGMPGMPGDKGDKGDAGLPGPQGVPGGVGSPGRDGSPGQRGFPGKDGSSGPPGPPGPIGIPGAPGVPGITGSMGPQGALGPPGVPGAKGERGERGDLQSQAMVRAVARQVCEQLIQSHMARYTAILNQIPSQSSSIRTIQGPPGEPGRPGSPGTPGEQGPPGTPGFPGNAGVPGTPGERGLTGVKGEKGNPGIGTQGPRGPPGPAGPSGESRPGSPGPPGSPGPRGPPGHLGVPGPQGPSGQPGYCDPSSCSAYGVGVSHPDQPEFTPVQDEQEAMDLWSAGI",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q80X19"},
		"label":"coea1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9246683"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q80X19"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q80X19"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MTHRRTAQGRRPRWLLSIISALLSAVLQTRAATGSASQVHLDLTVLIGVPLPSSVSFTTGYGGFPAYSFGPGANVGRPARTLIPPTFFRDFAIGVAVKPNSAQGGVLFAITDAFQKVIYLGLRLSSVEDGRQRVILYYTEPGSHVSREAAVFSVPVMTNRWNRFAVTVQGEEVALFMDCEEQSQVRFQRSSWPLTFEPSAGIFVGNAGAMGLERFTGSIQQLTIYSDPRTPEELCEAQESSASGEASGFQEMDEVAEIMEAVTYTQAPPKESHVDPISVPPTSSSPAEDSELSGEPVPEGTPETNLSIIGHSSPEQGSGEILNDTLEVHAMDGDPGTDDGSGDGALLNVTDGQGLSATATGEASVPVTTVLEAENGSMPTGSPTLAMFTQSIREVDTPDPENLTTTASGDGEVPTSTDGDTEADSSPTGGPTLKPREEATLGSHGEEWLTPAVSKMPLKAFEEEEASGTAIDSLDVIFTPTVVLEQVSRRPTDIQATFTPTVVLEETSGAPTDTQDALTPTVAPEQMFTAEPTDGGDLVASTEEAEEEGSGSMPPSGPPLPTPTVTPKRQVTLVGVEAEGSGPVGGLDEGSGSGDIVGNEDLLRGPPGPPGPPGSPGIPGKPGTDVFMGPPGSPGEDGAPGEPGPQGPEGQPGLDGASGQQGMKGEKGARGPNGSAGEKGDPGNRGLPGPPGKNGEVGTPGVMGPPGPPGPPGPPGPGCTTELGFEIEGSGDVRLLSKPTISGPTSPSGPKGEKGEQGAKGERGADGTSTMGPPGPRGPPGHVEVLSSSLINITNGSMNFSDIPELMGPPGPDGVPGLPGFPGPRGPKGDTGVPGFPGLKGEQGEKGEPGAILTGDVPLEMMKGRKGEPGIHGAPGPMGPKGPPGHKGEFGLPGRPGRPGLNGLKGAKGDRGVTLPGPPGLPGPPGPPGPPGAVVNIKGAVFPIPARPHCKTPVGTAHPGDPELVTFHGVKGEKGSWGLPGSKGEKGDQGAQGPPGPPVDPAYLRHFLNSLKGENEDASFRGESSNNLFVSGPPGLPGYPGLVGQKGEAVVGPQGPPGIPGLPGPPGFGRPGVPGPPGPPGPPGPPAILGAAVALPGPPGPPGQPGLPGSRNLVTALSDMGDMLQKAHLVIEGTFIYLRDSGEFFIRVRDGWKKLQLGELIPIPADSPPPPALSSNPYQPQPPLNPILSANYERPVLHLVALNTPVAGDIRADFQCFQQARAAGLLSTFRAFLSSHLQDLSTVVRKAERFGLPIVNLKGQVLFNNWDSIFSGDGGQFNTHIPIYSFDGRDVMTDPSWPQKVVWHGSNPHGVRLVDKYCEAWRTTDMAVTGFASPLSTGKILDQKAYSCANRLIVLCIENSFMTDTRK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"O35206"},
		"label":"cofa1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9246699"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"O35206"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O35206"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLTSWAPGLWVLGLWATFSHGTNIGERCPTSQQEGLKLEHSSDPSTNVTGFNLIRRLNLMKTSAIKKIRNPKGPLILRLGAAPVTQPTRRVFPRGLPEEFALVLTVLLKKHTFRNTWYLFQVTDANGYPQISLEVNSQERSLELRAQGQDGDFVSCIFPVPQLFDLRWHKLMLSVAGRVASVHVDCVSASSQPLGPRQSIRPGGHVFLGLDAEQGKPVSFDLQQAHIYCDPELVLEEGCCEILPGGCPPETSKSRRDTQSNELIEINPQTEGKVYTRCFCLEEPQNSKVDAQLMGRNIQKAERGTKVHQGTGVNECPPCAHSARESNVTLGPSGLKGGKGERGLTGPSGPKGEKGARGNDCVRVSPDAPLQCVEGPKGEKGESGDLGPPGLPGPTGQKGQKGEKGDGGLKGLPGKPGRDGRPGEICVIGPKGQKGDPGFVGPEGLAGEPGPPGLPGPPGIGLPGTPGDPGGPPGPKGEKGSSGIPGKEGPGGKPGKPGVPGTKGEKGDPCEVCPTLPEGSQNFVGLPGKPGPKGEPGDPAPAWEGLGTVGLKGDRGDPGIQGMKGEKGEPCSSCSSGVGAQHLGPSPGHGLPGLPGTSGIPGPRGLKGEKGSFGDTGPAGVPGSPGPVGPAGIKGAKGEPCEPCTALSELQDGDMRVVHLPGPAGEKGEPGSPGFGLPGKQGKAGERGLKGQKGDAGNPGDPGTPGITGQPGISGEPGIRGPAGPKGEKGDGCTACPSLQGALTDVSGLPGKPGPKGEPGPEGVGHPGKPGQPGLPGVQGPPGPKGTQGEPGPPGTGAEGPQGEPGTQGLPGTQGLPGPRGPPGSAGEKGAQGSPGPKGAIGPMGPPGAGVSGPPGQKGSRGEKGEPGECSCPSRGEPIFSGMPGAPGLWMGSSSQPGPQGPPGVPGPPGPPGMPGLQGVPGHNGLPGQPGLTAELGSLPIEKHLLKSICGDCAQGQTAHPAFLLEKGEKGDQGIPGVPGFDNCARCFIERERPRAEEARGDNSEGEPGCSGSPGLPGPPGMPGQRGEEGPPGMRGSPGPPGPIGLQGERGLTGLTGDKGEPGPPGQPGYPGAMGPPGLPGIKGERGYTGPSGEKGESGPPGSEGLPGPQGPAGPRGERGPQGSSGEKGDQGFQGQPGFPGPPGPPGFPGKAGAPGPPGPQAEKGSEGIRGPSGLPGSPGPPGPPGIQGPAGLDGLDGKDGKPGLRGDPGPAGPPGLMGPPGFKGKTGHPGLPGPKGDCGKPGPPGSSGRPGAEGEPGAMGPQGRPGPPGHLGPPGQPGPPGLSTVGLKGDRGVPGERGLAGLPGQPGTPGHPGPPGEPGSDGAAGKEGPPGKQGLYGPPGPKGDPGPAGQKGQAGEKGRSGMPGGPGKSGSMGPIGPPGPAGERGHPGSPGPAGNPGLPGLPGSMGDMVNYDDIKRFIRQEIIKLFDERMAYYTSRMQFPMEVAAAPGRPGPPGKDGAPGRPGAPGSPGLPGQIGREGRQGLPGMRGLPGTKGEKGDIGVGIAGENGLPGPPGPQGPPGYGKMGATGPMGQQGIPGIPGPPGPMGQPGKAGHCNPSDCFGAMPMEQQYPPMKSMKGPFG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q8BLX7"},
		"label":"coga1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9246714"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q8BLX7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q8BLX7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDVTKKSKRDGTEVTERIVTETVTTRLTSLPPKGSTSNGYAKTGSLGGGSRLEKQSLTHGSSGYINSSGSIRGNASTSSYRRTHSPASTLPNSPGSTFERKAHMTRHGTYEGSSSGNSSPEYPRKELASSSTRGRSQTRESEIRVRLQSASPSTRWTELDEVKRLLKGSRSASASPTRNTSNTLPIPKKGTVETKTVTASSHSVSGTYDSAILDTNFPPHMWSSTLPAGSSLGTYQNNITAQSTSLLNTNAYSTGSVFGVPNNMASCSPTLHPGLSSCSSVFGMQNNLAPSSSVLSHGTTTASTAYGAKKNVPQPPTVTSTGVSTSATCTTSVQSDDLLHKDCKFLILEKDNTPAKKEMELLIMTKDSGKVFTASPATISSTSFSEDTLKKEKQAAYAADTCLKADVNGDLNTVSTKSKMTSAENHGYDRGGGGGRGKGGGAGGGGGGGGASGGGGAWGAAPAWCPCGSCCSWWKWLLGLLLTWLLLLGLLFGLIALAEEVRKLKARVEELEKTKVLYHDVQMDKSNRDRLQAEAPSLGPGLGKAELDGYSQEAIWLFVRNKLMTEQENGNLRGSPGPKGDMGSQGPKGDRGLPGTPGIPGPLGHPGPEGPKGQKGSIGDPGMEGPIGQRGLAGPMGPRGEPGPPGSGEKGDRGIAGEQGPQGLPGVPGPPGLRGHSGSPGPQGPPGAVGPQGLRGDVGLPGVKGDKGLMGPPGPKGDQGEKGPRGLTGEPGIRGLPGAVGEPGAKGAMGPAGADGQQGSRGEQGLTGMPGTRGPPGPAGDPGKPGLTGPQGPQGLPGSPGRPGTKGEPGAPGRVMTSEGSSTITVPGPPGPPGAMGPPGPPGTPGPAGPAGLPGQQGPRGEPGLAGDSFLSSGSSISEVLSAQGVDLRGPPGPPGPRGPPGPSIPGPPGPRGPPGEGVPGPPGPPGSFLTDSETFFTGPPGPPGPPGPKGDQGDPGVPGTPGISGGLSHGASSSTLYMQGPPGPPGPPGPPGSLSSSGQDIQHYIAEYMQSDNIRTYLSGVQGPPGPPGPPGPVITITGETFDYSQLASQVVSYLRSSGYGAGLSSASSSEDILAMLRRNDVWQYLRQNLVGPPGPPGPPGVSGDGSLLSLDYGELSRHILNYMSSSGISFGHPGPPGPPGLPGTSYEELLTMLRGSDYRNIIGPPGPPGPPGMPGNAWSSISVEDLSSYLHTAGLSSIPGPPGPPGPPGPRGPPGVSAALSTYAAENSDNFRSELISYLTSPDVRSFIVGPPGPPGPQGPPGDGHLRENYNWSSNSSARRGTSYSSSTGTGGTNGGSLGEGGAYGAGDGGPYGTDIGPGGGYGAAAGGGIYGTNGDSFRDGFTGDLDYNKLAVRVSESMQRQGLLQGMAYTVQGPPGPQGPPGISRVFSAYSNVTQDLMDFFQTYGTIPGPPGQKGDVGTPGPKGDRGPAGPRGPPGPPGPRGNKGEKGDKGDQVYTGRRKRSIAIKP",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q07563"},
		"label":"coha1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9246747"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q07563"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q07563"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAPDPSRRLCLLLLLLLSCRLVPASADGNSLSPLNPLVWLWPPKTSDSLEGPVSKPQNSSPVQSTENPTTHVVPQDGLTEQQTTPASSELPPEEEEEEDQKAGQGGSPATPAVPIPLVAPAASPDMKEENVAGVGAKILNVAQGIRSFVQLWDEDSTIGHSAGTEVPDSSIPTVLPSPAELSSAPQGSKTTLWLSSAIPSSPDAQTTEAGTLAVPTQLPPFQSNLQAPLGRPSAPPDFPGRAFLSSSTDQGSSWGNQEPPRQPQHLEGKGFLPMTARSSQQHRHSDVHSDIHGHVPLLPLVTGPLVTASLSVHGLLSVPSSDPSGQLSQVAALPGFPGTWVSHVAPSSGTGLSNDSALAGNGSLTSTSRCLPLPPTLTLCSRLGIGHFWLPNHLHHTDSVEVEATVQAWGRFLHTNCHPFLAWFFCLLLAPSCGPGPPPPLPPCRQFCEALEDECWNYLAGDRLPVVCASLPSQEDGYCVFIGPAAENVAEEVGLLQLLGDPLPEKISQIDDPHVGPAYIFGPDSNSGQVAQYHFPKLFFRDFSLLFHVRPATEAAGVLFAITDAAQVVVSLGVKLSEVRDGQQNISLLYTEPGASQTQTGASFRLPAFVGQWTHFALSVDGGSVALYVDCEEFQRVPFARASQGLELERGAGLFVGQAGTADPDKFQGMISELKVRKTPRVSPVHCLDEEDDDEDRASGDFGSGFEESSKSHKEDTSLLPGLPQPPPVTSPPLAGGSTTEDPRTEETEEDAAVDSIGAETLPGTGSSGAWDEAIQNPGRGLIKGGMKGQKGEPGAQGPPGPAGPQGPAGPVVQSPNSQPVPGAQGPPGPQGPPGKDGTPGRDGEPGDPGEDGRPGDTGPQGFPGTPGDVGPKGEKGDPGIGPRGPPGPPGPPGPSFRQDKLTFIDMEGSGFSGDIESLRGPRGFPGPPGPPGVPGLPGEPGRFGINGSYAPGPAGLPGVPGKEGPPGFPGPPGPPGPPGKEGPPGVAGQKGSVGDVGIPGPKGSKGDLGPIGMPGKSGLAGSPGPVGPPGPPGPPGPPGPGFAAGFDDMEGSGIPLWTTARSSDGLQGPPGSPGLKGDPGVAGLPGAKGEVGADGAQGIPGPPGREGAAGSPGPKGEKGMPGEKGNPGKDGVGRPGLPGPPGPPGPVIYVSSEDKAIVSTPGPEGKPGYAGFPGPAGPKGDLGSKGEQGLPGPKGEKGEPGTIFSPDGRALGHPQKGAKGEPGFRGPPGPYGRPGHKGEIGFPGRPGRPGTNGLKGEKGEPGDASLGFSMRGLPGPPGPPGPPGPPGMPIYDSNAFVESGRPGLPGQQGVQGPSGPKGDKGEVGPPGPPGQFPIDLFHLEAEMKGDKGDRGDAGQKGERGEPGAPGGGFFSSSVPGPPGPPGYPGIPGPKGESIRGPPGPPGPQGPPGIGYEGRQGPPGPPGPPGPPSFPGPHRQTVSVPGPPGPPGPPGPPGAMGASAGQVRIWATYQTMLDKIREVPEGWLIFVAEREELYVRVRNGFRKVLLEARTALPRGTGNEVAALQPPLVQLHEGSPYTRREYSYSTARPWRADDILANPPRLPDRQPYPGVPHHHSSYVHLPPARPTLSLAHTHQDFQPVLHLVALNTPLSGGMRGIRGADFQCFQQARAVGLSGTFRAFLSSRLQDLYSIVRRADRGSVPIVNLKDEVLSPSWDSLFSGSQGQLQPGARIFSFDGRDVLRHPAWPQKSVWHGSDPSGRRLMESYCETWRTETTGATGQASSLLSGRLLEQKAASCHNSYIVLCIENSFMTSFSK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P39061"},
		"label":"coia1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9246765"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P39061"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P39061"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MRHTGSWKLWTWVTTFLLPACTCLTVRDKPETTCPTLRTERYQDDRNKSELSGFDLGESFALRHAFCEGDKTCFKLGSVLLIRDTVKIFPKGLPEEYAIAVMFRVRRSTKKERWFLWKILNQQNMAQISVVIDGTKKVVEFMFRGAEGDLLNYVFKNRELRPLFDRQWHKLGIGVQSRVLSLYMDCNLIASRHTEEKNSVDFQGRTIIAARASDGKPVDIELHQLRIYCNANFLAEESCCNLSPTKCPEQDDFGSTTSSWGTSNTGKMSSYLPGKQELKDTCQCIPNKEEAGLPGTLRSIGHKGDKGEPGEHGLDGTPGLPGQKGEQGLEGIKGEIGEKGEPGAKGDSGLDGLNGQDGLKGDSGPQGPPGPKGDKGDMGPPGPPALTGSIGIQGPQGPPGKEGQRGRRGKTGPPGNPGPPGPPGPPGLQGLQQPFGGYFNKGTGEHGASGPKGEKGDTGLPGFPGSVGPKGHKGEPGEPLTKGEKGDRGEPGLLGPQGIKGEPGDPGPPGLLGSPGLKGQQGPAGSMGPRGPPGDVGLPGEHGIPGKQGVKGEKGDPGGRLGPPGLPGLKGDAGPPGISLPGKPGLDGNPGSPGPRGPKGERGLPGLHGSPGDTGPPGVGIPGRTGSQGPAGEPGIQGPRGLPGLPGTPGMPGNDGAPGKDGKPGLPGPPGDPIALPLLGDIGALLKNFCGNCQANVPGLKSIKGDDGSTGEPGKYDPAARKGDVGPRGPPGFPGREGPKGSKGERGYPGIHGEKGDEGLQGIPGLSGAPGPTGPPGLTGRTGHPGPTGAKGDKGSEGPPGKPGPPGPPGVPLNEGNGMSSLYKIQGGVNVPGYPGPPGPPGPKGDPGPVGEPGAMGLPGLEGFPGVKGDRGPAGPPGIAGISGKPGAPGPPGVPGEQGERGPIGDTGFPGPEGPSGKPGINGKDGLPGAQGIMGKPGDRGPKGERGDQGIPGDRGPQGERGKPGLTGMKGAIGPVGPAGSKGSTGPPGHQGPPGNPGIPGTPADAVSFEEIKHYINQEVLRIFEERMAVFLSQLKLPAAMLSAQAHGRPGPPGKDGLPGPPGDPGPQGYRGQKGERGEPGIGLPGSPGLPGSSAVGLPGSPGAPGPQGPPGPSGRCNPEDCLYPAPPPHQQAGGK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q0VF58"},
		"label":"coja1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9248490"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q0VF58"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q0VF58"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSLQGSYQHFCLWMFLGTTLALGQGQVSSRLRLAVLPEDQLQMKWREAEGSGLGFLVQVTPMAGDLEQELILTTKTPKATVGGLNPSKSYTLQIFELTDSGPILLARREFVIEDLKSQSLGRGSRRLAGATLEPTSLPLRGPDSEKTSEPSIAFTLSRDLPILDHPQFQCTPPTPADIIFLVDGSWSIGHNHFQQVKDFLASIITQFAIGPDKVQVGLTQYSGDPQTEWDLNSFQTKEQVLAAVHHLRYKGGNTFTGLALTHVLEQNLKPAAGVRPEAAKVLILVTDGKSQDDVRTAARILKDQDIDVFVVGVKNVDEAELKLLASQPLDITVHNVLDFPQLDTLAPLLSRLICQKIQGRGPVKPAAGTRVLDPLPTPTRLILTHATSSSIHLSWTPALYPPLKYLIVWQPSRGGAPKEVVVEGPVSSMELGNLTSSTEYLVSVLPVYESGVGKSLQGRATTAPLPPPGPLTLAAVTPRTLHVTWPPSAGVTQYLVQYLLATSTGEEQKREVHVGQPEVLLDGLEPGQDYDVSVQSLRGPEASEVQSIRARTSALGPPRHLTFSDVRYNSTCVSWEAQRPVRLVKVSYISSDGSHSGQTQVPGNLTSATLGPLSSSTMYTVRVTCFYLGGGSSVLTGHVTTQKAPSPGQLSVMELPGDAVKLSWLATALSGVLVYQIKWMPLGEGKAREISVPGTLGTATLPGLMKHVEYEITILAYYRDGTRSDPVSLRYTPSAASRSPPSSLALSSETPNSLQVNWTPPSGHVLHYRLNYTLASGSGPEKSISVPGTRSHAVLRDLMSATKYRVLVSAVYRAGESMAVSATYRTAACPALHPDSSLSGFDLMVAFGLVAKEYASIRGVAMEPSALGVVPTFTLFKDAQLMRRVSDIYPATLPPEHTIVFLVRLLPETPREAFALWQMMAEDFQPILGVLLDAGRKSLTYFNHDSRAALQEVTFDLQDAKKIFFGSFHKVHIAVGHSKVRLYVDCRKVAERPIGDAGSPPTGGFITLGRLAKARGPRSSSATFQLQMLQIVCSDTWADKDRCCEIPALRDGETCPAFPSACAYSSETPGPPGPQGPPGLPGRNGPPGQQGHPGPKGEPGPPGQTGPEGPGGQQGSPGTQGRAVQGPMGPPGAKGEKGDQGLSGLQGLSGQQGIPGKTGLQGPKGMRGLEGPAGLPGPPGPRGFQGLAGARGTNGERGAPGAVGPTGLPGSKGERGEKGEPQSLATIFQLVSQACESAIRTHVLKLNSFLHENARPPMPFMAETAKLGRPRSIDPGLHNEALLPGDWGHILRPEDQGEPVTISHTSNPRLQEVQTPESLE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q923P0"},
		"label":"coka1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9248805"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q923P0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q923P0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MPVFTSRRAMAVPRGNPLACLLWILLLWGGDGGCQAQRAGCKSVQYDLVFLLDTSSSVGKEDFEKVRQWVANLVDTFEVGPGHTRVGVVRYSDRPTTAFELGHFNSREEVKAAARRITYHGGNTNTGDALRYITSRSFSAQAGGRPGNRAFKQVAILLTDGRSQDLVLDAAAAAHAAGIRIFAVGVGAALKEELDEIASEPKSAHVFHVSDFNAIDKIRGKLRRRLCENVLCPSVRVEGDRFKHTNGGTKEITGFDLMDLFSVKEILGKRENGAQSSYVRMGSFPVVQRTEDVFPQGLPDEYAFVTTFRFRKTSRKEDWYIWQVIDQYGIPQVSIRLDGENKAVEYNAVGAMKDAVRVVFRGPRVDDLFDRDWHKMALSIQAQNVSLYIDCLLVQTLPIEERENIDIQGKTVIGKRLYDSVPIDFDLQRIVIYCDSRHAELETCCDIPLGPCQVTVVTEPPPAPPQLPTPGSEQIGFLKTINCSCPPGEKGERGFAGPLGLPGQKGDAGPIGLMGAPGPKGEKGDSGRGPFIHGEKGEKGSLGPPGPPGRDGSKGMRGEPGELGEPGLPGEVGMRGPQGPPGLPGPAGPVGAPGLRGERGERGPPGEKGERGLDGFPGKPGETGEQGRPGPPGVAGLQGEKGDVGPAGPPGVPGSVVQREGLKGEQGAPGPRGHQGLPGPPGAPGLIGPEGRDGPPGPPGLRGKKGEMGPPGTPGALGPQGPPGPPGVPGPPGPGGPPGLPGELGFPGKPGPAGHAGTPGKDGLNGPPGLPGSKGEPGDSGESGVPGMPGPRGEVGERGLAGHPGEKGEVGLPGAPGFPGVHGEKGDQGEKGELGLPGLKGARGEKGEVGPAGPPGLPGSPSVFTPHPRMPGEQGPKGEKGDPGEPGALGPQGHPGELGPRGPIGPPGAKGHDGAQGPPGAAGNPGAPGPAGPPGLSGPPGSLGSPGVRGAPGKDGERGEKGTAGEEGSPGPAGPRGDPGAPGLPGPPGKGKDGEPGLRGPPGLPGPLGIKGDRGTPGIPGSPGSRGDPGIGVAGPPGPSGRPGDKGPPGSRGLPGFPGPQGPAGQDGAPGNPGERGPPGKPGPSSLLSPEDINLLVKDVCNDCPPGPPGLPGLPGFKGDKGLPGKQGREGTEGKKGDTGPPGPPGPPGVAGPQGSQGERGAEGEVGQKGEQGHPGVPGFMGPPGNPGPPGADGNAGVAGPPGPQGPQGKEGPPGPQGPSGIPGVPGEEGKQGRDGKPGPPGEPGKTGEPGLSGAEGARGPPGFKGHTGDPGPPGLRGEPGIAGPSGRDGSPGKDGDTGPAGPQGPRGTRGPPGSSGSPGSPGDPGRPGALGQKGNKGESGSPGLPGFQGPRGPPGEAGEVGAPGKEGAPGKPGEPGSKGERGDPGIKGDKGPPGGKGQPGDPGTPGHKGHTGLMGPQGQPGESGPPGPPGPPGQPGFPGLRGESPSMDTLRRLIQEELGKQLEAKLAYLLAQMPPAHMKSSQGRPGPPGPPGKDGLPGRTGPMGEPGRPGQGGLEGPSGPMGPKGERGAKGDPGTPGVGLRGEMGPPGIPGQPGEPGYAKDGLPGSPGPQGETGLAGHPGPPGPPGPPGLCDPSQCAYFASLAARPSNVKGP",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"E9Q7P1"},
		"label":"e9q7p1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9248909"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"E9Q7P1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"E9Q7P1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGAGERAAGGGGAQDPGAGCGSRALSALCLLLSVGSAAACLLLGAQAAALHGRVAALEQERELLRHAGPSGALAAWAETHLERLLREKLDGVAKLRTVREAPSECICPPGPPGRRGKPGRRGDPGPPGQSGRDGYPGPLGLDGKPGLPGPKGEKGTPGDFGPRGAQGQDGVAGPPGPPGPPGARGPPGDTGKDGPRGAQGPAGPRGEPGQDGEMGPKGPPGPKGEPGIPGKKGDDGMANQPGLPGPPGPKGEPGDVGPRGENGVDGIPGLKGEPGHPGVDGATGPRGAPGLKGEQGDTVVIDYDGRILDALKGPPGPQGAPGPPGIPGAKGELGLPGAPGIDGEKGPKGPKGDPGEPGPAGPKGETGEMGLSGLPGADGPKGEKGESASDHLQESLAQIIVEPGPPGPPGPPGPMGLQGIQGPKGLDGAKGEKGTSGERGPHGLPGPVGPPGLIGLPGTKGEKGRPGEPGLDGFPGPRGEKGDRSERGEKGERGVPGRKGVKGQKGEPGPPGLDQPCPVGPDGLPVPGCWHK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q8K4G2"},
		"label":"cona1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9248941"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q8K4G2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q8K4G2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MHLGAYRTRHGKVSPTTETKLFLRFIVLCVVWISVHAQGQGIDILQQLGLGGRDVRYTSSVTAVPSSSWSTPLPQGVHLTDFGVILTDNAYIESPLVNILPISLRQPLTVLIGLQSFKVNNAFLFSIRNNNRLQFGVQLLPKKLIVHVGGKQTVTFNYSAHDERWHSFAITVDHHVISMFVECGKRHFSGETTSDVQTFDPHSVFTLGSINNSSAHFEGTVCQLEIMPSTAASAEYCRHLKQQCLRADASQAQRNLPHTAGMPTRHPAHTPLPRGFPGTDSPQKRFTEQDSLPKGFDGTELPRETFADGKSIPNNRSNGSATVHESQEHQTPRAQLTSFHSGNISAVTLPNYRIQAKEITTKEETNLTLSVAHHLPSEARMNEEGRINPLFAGFDNITQHEEAAGLPLPKKASSGFAHTNQDTMKNLEKALTANLYTNELIEMERILNSTLYRVMYGPSVDNHLELRKEGEFYPDATNPIEGSYEPQAYDYYSYEDYNAVLDMEYLRGPKGDPGPPGPPGPMGIPGPSGKRGPRGIPGPHGNPGLPGLPGPKGPKGDPGLSPGQAASGEKGDPGLLGLVGPPGLQGAKGLKGHPGLPGLRGEHGLPGLAGNIGSPGYPGRQGLAGPEGNPGSKGVRGFIGSPGEVGQLGPEGERGTPGVRGKKGPKGRQGFPGDFGDRGPAGLDGSPGLVGGTGPPGFPGVTGSVGPAGPTGPPGAPGPMGLSGSRGPSGIKGDKGEQGVAGEPGEPGYPGDKGNIGSPGPPGIRGKSGPSGQPGDPGPQGPSGPPGPEGFPGDIGIPGQNGPEGPKGHLGNRGPPGPPGLKGTQGEEGPIGPFGELGSRGKPGRKGYMGEPGPEGLKGEVGDQGDIGKTGETGPVGLPGEVGITGSIGEKGERGSPGPLGPQGEKGVMGYPGPPGAPGPMGPLGLPGLVGARGAPGSPGPKGQRGPRGPDGLAGDQGGHGAKGEKGNQGKRGLPGLPGKAGSPGERGVQGKPGFQGLPGSSGDVGPAGEPGPRGLPGIAGLPGEMGVEGPPGTEGDSGLQGEPGAKGDGGPAGSAGATGEPGPRGEPGAPGEEGLQGKDGLKGAPGGSGLPGEDGDKGEMGLPGTAGPVGRPGQMGLPGPEGIVGTPGQRGRLGKKGDKGQVGPTGEAGSRGPPGSVGENGPKGARGTRGAVGPLGLMGPEGEPGIPGYRGHQGQPGPSGLPGPKGEKGYPGEDSTVLGPPGPPGEPGPMGEQGETGEHGEEGYKGHMGVPGLRGATGQQGPPGEPGDQGGQGPKGERGSEGPQGKRGVPGPSGKPGIPGVPGFPGPKGLQGYPGVDGMSGYPGKPGLPGKQGLLGVPGSPGRTGVAGSPGPQGGKGASGPPGSPGAPGPKGEQGLPGQPGVPGQRGHRGTPGDQGLRGAPGLKGQPGEHGDQGLAGFQGFPGPRGPEGDAGIVGIVGPKGPIGQRGNTGPLGREGIIGPTGGTGPRGEKGFRGETGPQGPRGQPGPPGPPGAPGPRRQMDINAAIRALIESNSAQQMESYQNTEGTLISHSSDIFKTLTYLSSLLSSIKNPLGTRENPARICKDLLSCQYKVSDGKYWIDPNLGCSSDAFEVFCNFSAGGQTCLSPVSVTKLEFGVSKVQMNFLHLLSSEATHTITIHCLNTPRWSSTWADGPELPISFKGWNGQIFEENTLLEPQVLSDDCKIQDGSWHKAKFLFHTQNPNQLPVTEVQNLPHLGTEQKRYIESNSVCFL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q30D77"},
		"label":"cooa1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9248426"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q30D77"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q30D77"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLVKKLAGKGGGRESGSEDPRPLGQRCAGTMPSCTALATLLSVVAVAFCFYLGVKTNDLQARIAALESAKGTPSFHPLSDTVDELKAMVQEKVERLLAQKSYEHMAKIRTAREAPLECNCPAGPPGKRGKRGRRGESGPPGQPGPQGPPGPKGDKGEQGDQGPRMVFPKINHGFLSADQQLIKRRLIKGDQGQAGPPGPPGPPGPRGPPGDTGKDGPRGMPGVPGEPGKPGEQGLMGPLGPPGQKGSIGAPGTPGMDGQKGEPGSPGAAGQSGLPGPKGEPGKEGEKGDAGENGPKGDTGEKGDPGSSAAGIKGEPGESGRPGQKGEPGLPGLPGLPGIKGEPGFIGPQGEPGLPGLPGTKGDRGEAGPPGRGERGDPGAPGPKGKQGESGARGPKGSKGDRGDKGDSGALGPRGPPGQKGDPGATEIIDYNGNLHEALQRITTLTVTGPPGPPGPQGLQGPKGEQGSPGIPGVDGEQGLKGSKGDMGDPGVPGEKGGLGLPGLPGANGVKGEKGDTGLPGPQGPSIIGPPGPPGPHGPPGPMGPHGLPGPKGADGPIGPHGPAGPKGERGEKGAMGEPGPRGPYGLPGFPGPRGEKGDLGEKGEKGFRGVKGEKGEPGQPGLDGLDAPCQLGPDGLPMPGCWQK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"B2RQR7"},
		"label":"b2rqr7_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9248982"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"B2RQR7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"B2RQR7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKLVLLLPWACCCLCGSALATGFLYPFPAAALQQHGYPEQGAGSPGNGYSSRRHWCHHTVTRTVSCQVQNGSETVVQRVYQSCRWPGPCANLVSYRTLIRPTYRVSYRTVTALEWRCCPGFTGSNCEEECMNCTRLSDMSERLTTLEAKVLLLEAAEQPSGPDNDLPPPQSTPPTWNEDFLPDAIPIAHPGPRRRRPTGPAGPPGQMGPPGPAGPPGSKGEQGQTGEKGPVGPPGLLGPPGPRGLPGEMGRPGPPGPPGPAGSPGLLPNTPQGVLYSLQTPTDKENGDSQLNPAVVDTVLTGIPGPRGPPGPPGPPGPHGPPGPPGAPGSQGLVDERVVARPSGEPSVKEEEDKASAAEGEGVQQLREALKILAERVLILEHMIGVHDPLASPEGGSGQDAALRANLKMKRGGPRPDGILAALLGPDPAQKSADQAGDRK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q91VF6"},
		"label":"coqa1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"eco","id":"ECO:0000306"},{"db":"intact","id":"EBI-9249020"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q91VF6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q91VF6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGTGFARGARGTAASGPGGGFLFAWILVSFTCHLASTQGAPEDVDVLQRLGLSWTKAGGGRSPTPPGVIPFPSGFIFTQRAKLQAPTANVLPTTLGRELALVLSLCSHRVNHAFLFAIRSRKHKLQLGLQFLPGRTIIHLGPRQSVAFDLDVHDGRWHHLALELRGRTVTMVTACGQHRVPVPLPSRRDSMLDPQGSFLLGKVNPRAVQFEGALCQFSIHPVAQVAHNYCAHLRERCRQVDTYSPQVGTLFPWDSGPAFALHPEPALLGLGNLTRTPATLGARPVSRALAVTLAPAMPTKPLRTVHPDVSEHSSSQTPLSPAKQSARKTPSPSSSASLANSTRVYRPAAAQPRQITTTSPTKRSPTKPSVSPLSVTPMKSPHATQKTGVPSFTKPVPPTQKPAPFTSYLAPSKASSPTVRPVQKTFMTPRPPVPSPQPLRPTTGLSKKFTNPTVAKSKSKTTSWASKPVLARSSVPKTLQQTVLSQSPVSYLGSQTLAPALPPLGVGNPRTMPPTRDSALTPAGSKKFTGRETSKKTRQKSSPRKPEPLSPGKSARDASPRDLTTKPSRPSTPALVLAPAYLLSSSPQPTSSSFPFFHLLGPTPFPMLMGPPGSKGDCGLPGPPGLPGLPGSPGARGPRGPPGPYGNPGPPGPPGAKGQKGDPGLSPGQAHDGAKGNMGLPGLSGNPGPLGRKGHKGHPGAAGHPGEQGQPGPEGSPGAKGYPGRQGFPGPVGDPGPKGSRGYIGLPGLFGLPGSDGERGLPGVPGKRGEMGRPGFPGDFGERGPPGLDGNPGEIGLPGPPGVLGLIGDTGALGPVGYPGPKGMKGLMGGVGEPGLKGDKGEQGVPGVSGDPGFQGDKGSHGLPGLPGGRGKPGPLGKAGDKGSLGFPGPPGPEGFPGDIGPPGDNGPEGMKGKPGARGLPGPPGQLGPEGDEGPMGPPGVPGLEGQPGRKGFPGRPGLDGSKGEPGDPGRPGPVGEQGLMGFIGLVGEPGIVGEKGDRGVMGPPGAPGPKGSMGHPGTPGGIGNPGEPGPWGPPGSRGLPGMRGAKGHRGPRGPDGPAGEQGSKGLKGRVGPRGRPGQPGQQGAAGERGHSGAKGFLGIPGPSGPPGAKGLPGEPGSQGPQGPVGPPGEMGPKGPPGAVGEPGLPGDSGMKGDLGPLGPPGEQGLIGQRGEPGLEGDHGPVGPDGLKGDRGDPGPDGEHGEKGQEGLKGEDGSPGPPGITGVPGREGKPGKQGEKGQRGAKGAKGHQGYLGEMGIPGEPGPPGTPGPKGSRGTLGPTGAPGRMGAQGEPGLAGYNGHKGITGPLGPPGPKGEKGDQGEDGKTEGPPGPPGDRGPVGDRGDRGEPGDPGYPGQEGVQGLRGEPGQQGQPGHPGPRGRPGPKGSKGEEGPKGKPGKAGPSGRRGTQGLQGLPGPRGVVGRQGPEGTAGSDGIPGRDGRPGYQGDQGNDGDPGPVGPAGRRGNPGVAGLPGAQGPPGFKGESGLPGQLGPPGKRGTEGGTGLPGNQGEPGSKGQPGDSGEMGFPGVAGLFGPKGPPGDIGFKGIQGPRGPPGLMGKEGIIGPPGMLGPSGLPGPKGDRGSRGDLGLQGPRGPPGPRGRPGPPGPPWHPIQFQQDDLGAAFQTWMDAQGAVRSEGYSYPDQLALDQGGEIFKTLHYLSNLIQSIKTPLGTKENPARVCRDLMDCEQRMADGTYWVDPNLGCSSDTIEVSCNFTQGGQTCLKPITASKAEFAVSRVQMNFLHLLSSEGTQHITIHCLNMTVWQEGPGRSSARQAVRFRAWNGQVFEAGGQFRPEVSMDGCKVHDGRWHQTLFTFRTQDPQQLPIVSVDNLPPVSSGKQYRLEVGPACFL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q5QNQ9"},
		"label":"cora1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9259635"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q5QNQ9"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q5QNQ9"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MRRRDVAFCLLLLPAFMTQAVYGQRKKGPKPNTLARKNDFQDAICFIDVVFILDSSESSKIVLFDNQKDFVDSLSEKIFQLTPGRSLKYDIKLAALQFSSSVQIDPPLSSWKDLRTFKQRVKSLNLIGQGTFSYYAISNATRLLKREGRKDGVKVALLMTDGIDHPKSPDVQSISEDARILGISFITVGLSTVVNEAKLRLISGDPSNEPVLLLSDPTLVDRIQERLGVLFERKCEHKICECEKGEPGDPGPPGTHGNPGIKGERGPKGNPGDAQKGETGERGPVGIPGYKGDKGERGECGKPGMKGDKGPEGPYGPKGPRGIQGIGGPPGDPGPKGFQGNKGEPGPPGPYGPPGAPGIGQQGVKGERGQEGRMGAPGPIGIGEPGQPGPRGPEGAPGERGLPGEGFPGPKGEKGSEGPIGPQGLQGLSIKGDKGDLGPVGPQGPAGIPGIGSQGEQGIQGPSGPPGPQGPPGQGSPGPKGEVGQMGPTGPRGPMGIGVQGPKGEPGTVGLPGQPGVPGEDGASGKKGEAGLPGTRGPEGMPGKGQPGPKGDEGKKGSKGNQGQRGFPGPEGPKGEPGVMGPFGMPGASIPGPSGPKGDRGGPGMPGLKGEPGLPVRGPKGAQGPRGPVGAPGLKGDGYPGVAGPRGLPGPPGPMGLRGVGDTGAKGEPGVRGPPGPSGPRGIGTQGPKGDTGQKGLPGPPGPPGYGSQGIKGEQGPQGFPGSKGTVGLGLPGQKGEHGDRGDVGRKGEKGETGEPGSPGKQGLQGPKGDLGLTKEEIIKLIIEICGCGPKCKETPLELVFVIDSSESVGPENFQIIQSFVKTLADRVALDLGTARIGIINYSHKVEKVASLKQFSSKDDFKLVVDNMQYLGEGTYTATALQAANDMFKEARPGVKKVALVITDGQTDSRDKKKLADVVKDANDSNVEIFVIGVVKKDDPNFEIFHKEMNLIATDAEHVYQFDDFFTLQDTLKQKLSKKICEDFDSYLIQVFGSPSFQPEFGVSEREVSVSTPKPAKEMSKSFNVSRGQNEETESYVLTEAGILAIPTPPEATNTLEPLLSSREGVETRTPNPNLLQSEKSLYKDPRCEEALKPGECGDYVVRWYYDKQVNSCARFWFSGCNGSGNRFHSEKECRETCIKQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q2UY11"},
		"label":"cosa1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9259610"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q2UY11"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q2UY11"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MRGSGTGAALLVLLASVLWVTVRSQQRGLFPAILNLATNAHISANATCGEKGPEMFCKLVEHVPGRPVRHAQCRVCDGNSTNPRERHPISHAIDGTNNWWQSPSIQNGREYHWVTVTLDLRQVFQVAYIIIKAANAPRPGNWILERSVDGVKFKPWQYYAVSDTECLTRYKITPRRGPPTYRADNEVICTSYYSKLVPLEHGEIHTSLINGRPSADDPSPQLLEFTSARYIRLRLQRIRTLNADLMTLSHRDLRDLDPIVTRRYYYSIKDISVGGMCICYGHASSCPWDEEAKQLQCQCEHNTCGESCDRCCPGYHQQPWRPGTISSGNECEECNCHNKAKDCYYDSSVAKERRSLNTAGQYSGGGVCVNCSQNTTGINCETCIDQYYRPHKVSPYDDHPCRPCNCDPVGSLSSVCIKDDRHADLANGKWPGQCPCRKGYAGDKCDRCQFGYRGFPNCIPCDCRTVGSLNEDPCIEPCLCKKNVEGKNCDRCKPGFYNLKERNPEGCSECFCFGVSGVCDSLTWSISQVTNMSGWLVTDLMSTNKIRSQQDVLGGHRQISINNTAVMQRLTSTYYWAAPEAYLGNKLTAFGGFLKYTVSYDIPVETVDSDLMSHADIIIKGNGLTISTRAEGLSLQPYEEYFNVVRLVPENFRDFNTRREIDRDQLMTVLANVTHLLIRANYNSAKMALYRLDSVSLDIASPNAIDLAVAADVEHCECPQGYTGTSCEACLPGYYRVDGILFGGICQPCECHGHASECDIHGICSVCTHNTTGDHCEQCLPGFYGTPSRGTPGDCQPCACPLSIDSNNFSPTCHLTDGEEVVCDQCAPGYSGSWCERCADGYYGNPTVPGGTCVPCNCSGNVDPLEAGHCDSVTGECLKCLWNTDGAHCERCADGFYGDAVTAKNCRACDCHENGSLSGVCHLETGLCDCKPHVTGQQCDQCLSGYYGLDTGLGCVPCNCSVEGSVSDNCTEEGQCHCGPGVSGKQCDRCSHGFYAFQDGGCTPCDCAHTQNNCDPASGECLCPPHTQGLKCEECEEAYWGLDPEQGCQACNCSAVGSTSAQCDVLSGHCPCKKGFGGQSCHQCSLGYRSFPDCVPCGCDLRGTLPDTCDLEQGLCSCSEDSGTCSCKENVVGPQCSKCQAGTFALRGDNPQGCSPCFCFGLSQLCSELEGYVRTLITLASDQPLLHVVSQSNLKGTIEGVHFQPPDTLLDAEAVRQHIYAEPFYWRLPKQFQGDQLLAYGGKLQYSVAFYSTLGTGTSNYEPQVLIKGGRARKHVIYMDAPAPENGVRQDYEVQMKEEFWKYFNSVSEKHVTHSDFMSVLSNIDYILIKASYGQGLQQSRIANISMEVGRKAVELPAEGEAALLLELCVCPPGTAGHSCQDCAPGYYREKLPESGGRGPRPLLAPCVPCNCNNHSDVCDPETGKCLSCRDHTSGDHCELCASGYYGKVTGLPGDCTPCTCPHHPPFSFSPTCVVEGDSDFRCNACLPGYEGQYCERCSAGYHGNPRAAGGSCQTCDCNPQGSVHSDCDRASGQCVCKPGATGLHCEKCLPRHILMESDCVSCDDDCVGPLLNDLDSVGDAVLSLNLTGVSPAPYGILENLENTTKYFQRYLIKENAKKIRAEIQLEGIAEQTENLQKELTRVLARHQKVNAEMERTSNGTQALATFIEQLHANIKEITEKVATLNQTARKDFQPPVSALQSMHQNISSLLGLIKERNFTEMQQNATLELKAAKDLLSRIQKRFQKPQEKLKALKEANSLLSNHSEKLQAAEELLKEAGSKTQESNLLLLLVKANLKEEFQEKKLRVQEEQNVTSELIAKGREWVDAAGTHTAAAQDTLTQLEHHRDELLLWARKIRSHVDDLVMQMSKRRARDLVHRAEQHASELQSRAGALDRDLENVRNVSLNATSAAHVHSNIQTLTEEAEMLAADAHKTANKTDLISESLASRGKAVLQRSSRFLKESVGTRRKQQGITMKLDELKNLTSQFQESVDNITKQANDSLAMLRESPGGMREKGRKARELAAAANESAVKTLEDVLALSLRVFNTSEDLSRVNATVQETNDLLHNSTMTTLLAGRKMKDMEMQANLLLDRLKPLKTLEENLSRNLSEIKLLISRARKQAASIKVAVSADRDCIRAYQPQTSSTNYNTLILNVKTQEPDNLLFYLGSSSSSDFLAVEMRRGKVAFLWDLGSGSTRLEFPEVSINNNRWHSIYITRFGNMGSLSVKEASAAENPPVRTSKSPGPSKVLDINNSTLMFVGGLGGQIKKSPAVKVTHFKGCMGEAFLNGKSIGLWNYIEREGKCNGCFGSSQNEDSSFHFDGSGYAMVEKTLRPTVTQIVILFSTFSPNGLLFYLASNGTKDFLSIELVRGRVKVMVDLGSGPLTLMTDRRYNNGTWYKIAFQRNRKQGLLAVFDAYDTSDKETKQGETPGAASDLNRLEKDLIYVGGLPHSKAVRKGVSSRSYVGCIKNLEISRSTFDLLRNSYGVRKGCALEPIQSVSFLRGGYVEMPPKSLSPESSLLATFATKNSSGILLVALGKDAEEAGGAQAHVPFFSIMLLEGRIEVHVNSGDGTSLRKALLHAPTGSYSDGQEHSISLVRNRRVITIQVDENSPVEMKLGPLTEGKTIDISNLYIGGLPEDKATPMLKMRTSFHGCIKNVVLDAQLLDFTHATGSEQVELDTCLLAEEPMQSLHREHGELPPEPPTLPQPELCAVDTAPGYVAGAHQFGLSQNSHLVLPLNQSDVRKRLQVQLSIRTFASSGLIYYVAHQNQMDYATLQLQEGRLHFMFDLGKGRTKVSHPALLSDGKWHTVKTEYIKRKAFMTVDGQESPSVTVVGNATTLDVERKLYLGGLPSHYRARNIGTITHSIPACIGEIMVNGQQLDKDRPLSASAVDRCYVVAQEGTFFEGSGYAALVKEGYKVRLDLNITLEFRTTSKNGVLLGISSAKVDAIGLEIVDGKVLFHVNNGAGRITATYQPRAARALCDGKWHTLQAHKSKHRIVLTVDGNSVRAESPHTHSTSADTNDPIYVGGYPAHIKQNCLSSRASFRGCVRNLRLSRGSQVQSLDLSRAFDLQGVFPHSCPGPEP",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P19137"},
		"label":"lama1_mouse"
	},
	{
		"object":"interactor",
		"sequence":"MTGGGRAALALQPRGRLWPLLAVLAAVAGCVRAAMDECADEGGRPQRCMPEFVNAAFNVTVVATNTCGTPPEEYCVQTGVTGVTKSCHLCDAGQQHLQHGAAFLTDYNNQADTTWWQSQTMLAGVQYPNSINLTLHLGKAFDITYVRLKFHTSRPESFAIYKRTREDGPWIPYQYYSGSCENTYSKANRGFIRTGGDEQQALCTDEFSDISPLTGGNVAFSTLEGRPSAYNFDNSPVLQEWVTATDIRVTLNRLNTFGDEVFNEPKVLKSYYYAISDFAVGGRCKCNGHASECVKNEFDKLMCNCKHNTYGVDCEKCLPFFNDRPWRRATAESASESLPCDCNGRSQECYFDPELYRSTGHGGHCTNCRDNTDGAKCERCRENFFRLGNTEACSPCHCSPVGSLSTQCDSYGRCSCKPGVMGDKCDRCQPGFHSLTEAGCRPCSCDLRGSTDECNVETGRCVCKDNVEGFNCERCKPGFFNLESSNPKGCTPCFCFGHSSVCTNAVGYSVYDISSTFQIDEDGWRVEQRDGSEASLEWSSDRQDIAVISDSYFPRYFIAPVKFLGNQVLSYGQNLSFSFRVDRRDTRLSAEDLVLEGAGLRVSVPLIAQGNSYPSETTVKYIFRLHEATDYPWRPALSPFEFQKLLNNLTSIKIRGTYSERTAGYLDDVTLQSARPGPGVPATWVESCTCPVGYGGQFCETCLPGYRRETPSLGPYSPCVLCTCNGHSETCDPETGVCDCRDNTAGPHCEKCSDGYYGDSTLGTSSDCQPCPCPGGSSCAIVPKTKEVVCTHCPTGTAGKRCELCDDGYFGDPLGSNGPVRLCRPCQCNDNIDPNAVGNCNRLTGECLKCIYNTAGFYCDRCKEGFFGNPLAPNPADKCKACACNPYGTVQQQSSCNPVTGQCQCLPHVSGRDCGTCDPGYYNLQSGQGCERCDCHALGSTNGQCDIRTGQCECQPGITGQHCERCETNHFGFGPEGCKPCDCHHEGSLSLQCKDDGRCECREGFVGNRCDQCEENYFYNRSWPGCQECPACYRLVKDKAAEHRVKLQELESLIANLGTGDDMVTDQAFEDRLKEAEREVTDLLREAQEVKDVDQNLMDRLQRVNSSLHSQISRLQNIRNTIEETGILAERARSRVESTEQLIEIASRELEKAKMAAANVSITQPESTGEPNNMTLLAEEARRLAERHKQEADDIVRVAKTANETSAEAYNLLLRTLAGENQTALEIEELNRKYEQAKNISQDLEKQAARVHEEAKRAGDKAVEIYASVAQLTPVDSEALENEANKIKKEAADLDRLIDQKLKDYEDLREDMRGKEHEVKNLLEKGKAEQQTADQLLARADAAKALAEEAAKKGRSTLQEANDILNNLKDFDRRVNDNKTAAEEALRRIPAINRTIAEANEKTREAQLALGNAAADATEAKNKAHEAERIASAVQKNATSTKADAERTFGEVTDLDNEVNGMLRQLEEAENELKRKQDDADQDMMMAGMASQAAQEAELNARKAKNSVSSLLSQLNNLLDQLGQLDTVDLNKLNEIEGSLNKAKDEMKASDLDRKVSDLESEARKQEAAIMDYNRDIAEIIKDIHNLEDIKKTLPTGCFNTPSIEKP",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P02468"},
		"label":"lamc1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9249158"}],
		"expansion":{"id":"17","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P19137"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P02468"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGLLQVFAFGVLALWGTRVCAQEPEFSYGCAEGSCYPATGDLLIGRAQKLSVTSTCGLHKPEPYCIVSHLQEDKKCFICDSRDPYHETLNPDSHLIENVVTTFAPNRLKIWWQSENGVENVTIQLDLEAEFHFTHLIMTFKTFRPAAMLIERSSDFGKAWGVYRYFAYDCESSFPGISTGPMKKVDDIICDSRYSDIEPSTEGEVIFRALDPAFKIEDPYSPRIQNLLKITNLRIKFVKLHTLGDNLLDSRMEIREKYYYAVYDMVVRGNCFCYGHASECAPVDGVNEEVEGMVHGHCMCRHNTKGLNCELCMDFYHDLPWRPAEGRNSNACKKCNCNEHSSSCHFDMAVFLATGNVSGGVCDNCQHNTMGRNCEQCKPFYFQHPERDIRDPNLCEPCTCDPAGSENGGICDGYTDFSVGLIAGQCRCKLHVEGERCDVCKEGFYDLSAEDPYGCKSCACNPLGTIPGGNPCDSETGYCYCKRLVTGQRCDQCLPQHWGLSNDLDGCRPCDCDLGGALNNSCSEDSGQCSCLPHMIGRQCNEVESGYYFTTLDHYIYEAEEANLGPGVIVVERQYIQDRIPSWTGPGFVRVPEGAYLEFFIDNIPYSMEYEILIRYEPQLPDHWEKAVITVQRPGKIPASSRCGNTVPDDDNQVVSLSPGSRYVVLPRPVCFEKGMNYTVRLELPQYTASGSDVESPYTFIDSLVLMPYCKSLDIFTVGGSGDGEVTNSAWETFQRYRCLENSRSVVKTPMTDVCRNIIFSISALIHQTGLACECDPQGSLSSVCDPNGGQCQCRPNVVGRTCNRCAPGTFGFGPNGCKPCDCHLQGSASAFCDAITGQCHCFQGIYARQCDRCLPGYWGFPSCQPCQCNGHALDCDTVTGECLSCQDYTTGHNCERCLAGYYGDPIIGSGDHCRPCPCPDGPDSGRQFARSCYQDPVTLQLACVCDPGYIGSRCDDCASGFFGNPSDFGGSCQPCQCHHNIDTTDPEACDKETGRCLKCLYHTEGDHCQLCQYGYYGDALRQDCRKCVCNYLGTVKEHCNGSDCHCDKATGQCSCLPNVIGQNCDRCAPNTWQLASGTGCGPCNCNAAHSFGPSCNEFTGQCQCMPGFGGRTCSECQELFWGDPDVECRACDCDPRGIETPQCDQSTGQCVCVEGVEGPRCDKCTRGYSGVFPDCTPCHQCFALWDAIIGELTNRTHKFLEKAKALKISGVIGPYRETVDSVEKKVNEIKDILAQSPAAEPLKNIGILFEEAEKLTKDVTEKMAQVEVKLTDTASQSNSTAGELGALQAEAESLDKTVKELAEQLEFIKNSDIQGALDSITKYFQMSLEAEKRVNASTTDPNSTVEQSALTRDRVEDLMLERESPFKEQQEEQARLLDELAGKLQSLDLSAVAQMTCGTPPGADCSESECGGPNCRTDEGEKKCGGPGCGGLVTVAHSAWQKAMDFDRDVLSALAEVEQLSKMVSEAKVRADEAKQNAQDVLLKTNATKEKVDKSNEDLRNLIKQIRNFLTEDSADLDSIEAVANEVLKMEMPSTPQQLQNLTEDIRERVETLSQVEVILQQSAADIARAELLLEEAKRASKSATDVKVTADMVKEALEEAEKAQVAAEKAIKQADEDIQGTQNLLTSIESETAASEETLTNASQRISKLERNVEELKRKAAQNSGEAEYIEKVVYSVKQNADDVKKTLDGELDEKYKKVESLIAQKTEESADARRKAELLQNEAKTLLAQANSKLQLLEDLERKYEDNQKYLEDKAQELVRLEGEVRSLLKDISEKVAVYSTCL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P02469"},
		"label":"lamb1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9249158"}],
		"expansion":{"id":"17","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P19137"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P02469"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MPAATAGILLLLLLGTLEGSQTQRRQSQAHQQRGLFPAVLNLASNALITTNATCGEKGPEMYCKLVEHVPGQPVRNPQCRICNQNSSNPYQRHPITNAIDGKNTWWQSPSIKNGVEYHYVTITLDLQQVFQIAYVIVKAANSPRPGNWILERSLDDVEYKPWQYHAVTDTECLTLYNIYPRTGPPSYAKDDEVICTSFYSKIHPLENGEIHISLINGRPSADDPSPELLEFTSARYIRLRFQRIRTLNADLMMFAHKDPREIDPIVTRRYYYSVKDISVGGMCICYGHARACPLDPATNKSRCECEHNTCGESCDRCCPGFHQKPWRAGTFLTKSECEACNCHGKAEECYYDETVASRNLSLNIHGKYIGGGVCINCTHNTAGINCETCVDGFFRPKGVSPNYPRPCQPCHCDPTGSLSEVCVKDEKYAQRGLKPGSCHCKTGFGGVNCDRCVRGYHGYPDCQPCNCSGLGSTNEDPCVGPCSCKENVEGEDCSRCKSGFFNLQEDNQKGCEECFCSGVSNRCQSSYWTYGNIQDMRGWYLTDLSGRIRMAPQLDNPDSPQQISISNSEARKSLLDGYYWSAPPPYLGNRLPAVGGQLSFTISYDLEEEEDDTEKILQLMIIFEGNDLRISTAYKEVYLEPSEEHIEEVSLKEEAFTIHGTNLPVTRKDFMIVLTNLERVLMQITYNLGMDAIFRLSSVNLESAVPYPTDRRIATDVEVCQCPPGYSGSSCETCWPRHRRVNGTIFGGICEPCQCFAHAEACDDITGECLNCKDHTGGPYCNECLPGFYGDPTRGSPEDCQPCACPLNIPSNNFSPTCHLDRSLGLICDECPIGYTGPRCERCAEGYFGQPSIPGGSCQPCQCNDNLDYSIPGSCDSLSGSCLICKPGTTGRYCELCADGYFGDAVNAKNCQPCRCNINGSFSEICHTRTGQCECRPNVQGRHCDECKPETFGLQLGRGCLPCNCNSFGSKSFDCEASGQCWCQPGVAGKKCDRCAHGYFNFQEGGCIACDCSHLGNNCDPKTGQCICPPNTTGEKCSECLPNTWGHSIVTGCKVCNCSTVGSLASQCNVNTGQCSCHPKFSGMKCSECSRGHWNYPLCTLCDCFLPGTDATTCDLETRKCSCSDQTGQCSCKVNVEGVHCDRCRPGKFGLDAKNPLGCSSCYCFGVTSQCSEAKGLIRTWVTLSDEQTILPLVDEALQHTTTKGIAFQKPEIVAKMDEVRQELHLEPFYWKLPQQFEGKKLMAYGGKLKYAIYFEARDETGFATYKPQVIIRGGTPTHARIITRHMAAPLIGQLTRHEIEMTEKEWKYYGDDPRISRTVTREDFLDILYDIHYILIKATYGNVVRQSRISEISMEVAEPGHVLAGSPPAHLIERCDCPPGYSGLSCETCAPGFYRLRSEPGGRTPGPTLGTCVPCQCNGHSSQCDPETSVCQNCQHHTAGDFCERCALGYYGIVRGLPNDCQPCACPLISPSNNFSPSCVLEGLEDYRCTACPRGYEGQYCERCAPGYTGSPSSPGGSCQECECDPYGSLPVPCDRVTGLCTCRPGATGRKCDGCEHWHAREGAECVFCGDECTGLLLGDLARLEQMTMNINLTGPLPAPYKILYGLENTTQELKHLLSPQRAPERLIQLAEGNVNTLVMETNELLTRATKVTADGEQTGQDAERTNSRAESLEEFIKGLVQDAEAINEKAVQLNETLGNQDKTAERNLEELQKEIDRMLKELRSKDLQTQKEVAEDELVAAEGLLKRVNKLFGEPRAQNEDMEKDLQQKLAEYKNKLDDAWDLLREATDKTRDANRLSAANQKNMTILETKKEAIEGSKRQIENTLKEGNDILDEANRLLGEINSVIDYVDDIKTKLPPMSEELSDKIDDLAQEIKDRRLAEKVFQAESHAAQLNDSSAVLDGILDEAKNISFNATAAFRAYSNIKDYIDEAEKVAREAKELAQGATKLATSPQGLLKEDAKGSLQKSFRILNEAKKLANDVKGNHNDLNDLKTRLETADLRNSGLLGALNDTMDKLSAITNDTAAKLQAVKEKAREANDTAKAVLAQVKDLHQNLDGLKQNYNKLADSVAKTNAVVKDPSKNKIIADAGTSVRNLEQEADRLIDKLKPIKELEDNLKKNISEIKELINQARKQANSIKVSVSSGGDCVRTYRPEIKKGSYNNIVVHVKTAVADNLLFYLGSAKFIDFLAIEMRKGKVSFLWDVGSGVGRVEYPDLTIDDSYWYRIEASRTGRNGSISVRALDGPKASMVPSTYHSVSPPGYTILDVDANAMLFVGGLTGKIKKADAVRVITFTGCMGETYFDNKPIGLWNFREKEGDCKGCTVSPQVEDSEGTIQFDGEGYALVSRPIRWYPNISTVMFKFRTFSSSALLMYLATRDLKDFMSVELSDGHVKVSYDLGSGMTSVVSNQNHNDGKWKAFTLSRIQKQANISIVDIDSNQEENVATSSSGNNFGLDLKADDKIYFGGLPTLRNLSMKARPEVNVKKYSGCLKDIEISRTPYNILSSPDYVGVTKGCSLENVYTVSFPKPGFVELAAVSIDVGTEINLSFSTRNESGIILLGSGGTLTPPRRKRRQTTQAYYAIFLNKGRLEVHLSSGTRTMRKIVIKPEPNLFHDGREHSVHVERTRGIFTVQIDEDRRHMQNLTEEQPIEVKKLFVGGAPPEFQPSPLRNIPAFQGCVWNLVINSIPMDFAQPIAFKNADIGRCTYQKPREDESEAVPAEVIVQPQPVPTPAFPFPAPTMVHGPCVAESEPALLTGSKQFGLSRNSHIAIAFDDTKVKNRLTIELEVRTEAESGLLFYMARINHADFATVQLRNGFPYFSYDLGSGDTSTMIPTKINDGQWHKIKIVRVKQEGILYVDDASSQTISPKKADILDVVGILYVGGLPINYTTRRIGPVTYSLDGCVRNLHMEQAPVDLDQPTSSFHVGTCFANAESGTYFDGTGFAKAVGGFKVGLDLLVEFEFRTTRPTGVLLGVSSQKMDGMGIEMIDEKLMFHVDNGAGRFTAIYDAGIPGHMCNGQWHKVTAKKIKNRLELVVDGNQVDAQSPNSASTSADTNDPVFVGGFPGGLNQFGLTTNIRFRGCIRSLKLTKGTGKPLEVNFAKALELRGVQPVSCPTT",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q60675"},
		"label":"lama2_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9249180"}],
		"expansion":{"id":"18","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q60675"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P02468"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9249180"}],
		"expansion":{"id":"18","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q60675"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P02469"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9249250"}],
		"expansion":{"id":"19","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P19137"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P02468"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MEWASGEPGRGRQGQPLPWELRLGLLLSVLAATLAQAPSLDVPGCSRGSCYPATGDLLVGRADRLTASSTCGLHSPQPYCIVSHLQDEKKCFLCDSRRPFSARDNPNSHRIQNVVTSFAPQRRTAWWQSENGVPMVTIQLDLEAEFHFTHLIMTFKTFRPAAMLVERSADFGRTWHVYRYFSYDCGADFPGIPLAPPRRWDDVVCESRYSEIEPSTEGEVIYRVLDPAIPIPDPYSSRIQNLLKITNLRVNLTRLHTLGDNLLDPRREIREKYYYALYELVIRGNCFCYGHASQCAPAPGAPAHAEGMVHGACICKHNTRGLNCEQCQDFYQDLPWHPAEDGHTHACRKCECNGHTHSCHFDMAVYLASGNVSGGVCDGCQHNTAGRHCEFCRPFFYRDPTKDMRDPAVCRPCDCDPMGSQDGGRCDSHDDPVLGLVSGQCRCKEHVVGTRCQQCRDGFFGLSASDPRGCQRCQCNSRGTVPGSSPCDSSSGTCFCKRLVTGHGCDRCLPGHWGLSHDLLGCRPCDCDVGGALDPQCDEATGQCRCRQHMIGRRCEQVQPGYFRPFLDHLTWEAEAAQGQGLEVVERLVTNRETPSWTGPGFVRLREGQEVEFLVTSLPRAMDYDLLLRWEPQVPEQWAELELMVQRPGPVSAHSPCGHVLPKDDRIQGMLHPNTRFLVFPRPVCLEPGISYKLKLKLIGTGGRAQPETSYSGLLIDSLVLQPHVLVLEMFSGGDAAALERRTTFERYRCHEEGLMPSKAPLSETCAPLLISVSALIYNGALPCQCDPQGSLSSECSPHGGQCRCKPGVVGRRCDVCATGYYGFGPAGCQACQCSPDGALSALCEGTSGQCPCRPGAFGLRCDHCQRGQWGFPNCRPCVCNGRADECDTHTGACLGCRDYTGGEHCERCIAGFHGDPRLPYGGQCRPCPCPEGPGSQRHFATSCHRDGYSQQIVCQCREGYTGLRCEACAPGHFGDPSKPGGRCQLCECSGNIDPMDPDACDPHTGQCLRCLHNTEGPHCGYCKPGFHGQAARQSCHRCTCNLLGTDPRRCPSTDLCHCDPSTGQCPCLPHVQGLNCDHCAPNFWNFTSGRGCQPCACHPSRARGPTCNEFTGQCHCHAGFGGRTCSECQELYWGDPGLQCRACDCDPRGIDKPQCHRSTGHCSCRPGVSGVRCDQCARGFSGVFPACHPCHACFGDWDRVVQDLAARTRRLEQWAQELQQTGVLGAFESSFLNMQGKLGMVQAIMSARNASAASTAKLVEATEGLRHEIGKTTERLTQLEAELTAVQDENFNANHALSGLERDGLALNLTLRQLDQHLEILKHSNFLGAYDSIRHAHSQSTEAERRANASTFAVPSPVSNSADTRRRTEVLMGAQKENFNRQHLANQQALGRLSAHAHTLSLTGINELVCGAPGDAPCATSPCGGAGCRDEDGQPRCGGLGCSGAAATADLALGRARHTQAELQRALVEGGGILSRVSETRRQAEEAQQRAQAALDKANASRGQVEQANQELRELIQNVKDFLSQEGADPDSIEMVATRVLDISIPASPEQIQRLASEIAERVRSLADVDTILAHTMGDVRRAEQLLQDAHRARSRAEGERQKAETVQAALEEAQRAQGAAQGAIWGAVVDTQNTEQTLQRVQERMAGAEKSLNSAGERARQLDALLEALKLKRAGNSLAASTAEETAGSAQSRAREAEKQLREQVGDQYQTVRALAERKAEGVLAAQARAEQLRDEARDLLQAAQDKLQRLQELEGTYEENERALEGKAAQLDGLEARMRSVLQAINLQVQIYNTCQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q61292"},
		"label":"lamb2_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9249250"}],
		"expansion":{"id":"19","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P19137"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q61292"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9249280"}],
		"expansion":{"id":"20","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q60675"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P02468"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9249280"}],
		"expansion":{"id":"20","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q60675"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q61292"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAVALGRAPRSLPLLLTLLLLLLLRMSPSWSVVGQDHPMSSRSLHPPYFNLAQAARIWATATCGERDPEVSRPRPELFCKLVGGPAAQGSGHTIQGQFCDYCNSEDSRKAHPASHAIDGSERWWQSPPLSSGTQYNQVNLTLDLGQLFHVAYILIKFANSPRPDLWILERSVDFGSTYSPWQYFAHSRRDCVEQFGQEANMAITQDDQMLCVTEYSRIVPLENGEIVVSLINGRPGAKKFAFSDTLREFTKATNIRLRFLRTNTLLGHLISKAERDPTVTRRYYYSIKDISVGGRCVCNGHAEACSADNPEKQFRCECQHHTCGDTCNRCCAGYNQRRWQPAGQEQHNECEACNCHGHAVDCYYDPDVEHQQASLNSKGVYAGGGVCINCQHNTAGVNCEKCAKGYFRPHGVPVDALHGCIPCSCDPERADDCDQGSGHCHCKPNFSGDYCETCADGYYNFPFCLRIPVFPNYTPSPEDPVAGNIKGCDCNLEGVLPEICDDRGRCLCRPGVEGPQCDSCRSGSYSFPICQACQCSTIGSYPVPCDPGNGQCDCLPGITGRQCDRCLSGAYDFPYCQGSGSVCHPAGTLDSSLGYCQCKQHVASPTCSVCKPLYWNLAKENPRGCSECQCHEAGTLSGIGECGQEDGDCSCKAHVTGDACDTCEDGFFSLEKSNYFGCQGCQCDIGGALTTMCSGPSGVCQCREHVEGKQCQRPENNYYFPDLHHMKYEVEDGTGPNGRNLRFGFDPLVFPEFSWRGYAPMTSVQNEVRVRLSVRQSSLSLFRIVLRYISPGTEAISGRITLYSSQGDSDALQSRKITFPPSKEPAFVTVPGNGFAGPFSITPGTWIACIQVEGVLLDYLVLLPRDYYEAFTLQVPVTEPCAHTGSPQDNCLLYQHLPLTAFSCTLACEARHFLLDGELRPLAMRQPTPTHPAMVDLSGREVELQLRLRVPQVGHYVVLLEYATEVEQLFVVDVNLKSSGSALAGQVNIYSCKYSIPCRSVVIDSLSRTAVHELLADADIQLKAHMAHFLLYHICIIPAEEFSTEYLRPQVHCIASYRQHANPSASCVSLAHETPPTASILDATSRGLFSALPHEPSSPADGVTLKAPQSQVTLKGLIPHLGRHVFVIHFYQAEHPGFPTEVIVNGGRQWSGSFLASFCPHLLGCRDQVISDGQVEFDISEAEVAVTVKIPDGKSLTLVRVLVVPAENYDYQILHKTTVDKSSEFISSCGGDSFYIDPQAASGFCKNSARSLVAFYHNGAIPCECDPAGTAGHHCSPEGGQCPCRPNVIGRQCSRCATGYYGFPYCKPCNCGRRLCEEVTGKCLCPPHTVRPQCEVCEMNSFNFHPVAGCDVCNCSRKGTIEAAVSECDRDSGQCRCKPRVTGQQCDKCAPGFYQFPECVPCSCNRDGTEPSVCDPETGACMCKENVEGPQCQLCREGSFYLDPTNPKGCTKCFCFGVNTDCQSSHKQRAKFVDMMGWRLETADGVDVPVSFNPGSNSMVADLQELPPSVHSASWVAPPSYLGDKVSSYGGYLTYHAKSFGLPGDMVLLGKQPDVQLTGQHMSLIHKEPSDPRPDRLHHGRVQVIEGNFRHEGSSAPVSREELMTVLSRLERLHIRGLHFTETQRLTLGEVGLEEASDTGSGPRAHLVEMCACPPDYTGDSCQGCRPGYYWDNKSLPVGRCVPCNCNGHSNRCQDGSGICINCQHNTAGEHCERCQAGHYGNAIHGSCRVCPCPHTNSFATGCAVDGGAVRCACKPGYTGTQCERCAPGYFGNPQKFGGSCQPCNCNSNGQLGPCDPLTGDCVNQEPKDGSPAEECDDCDSCVMTLLNDLASMGEELRLVKSKLQGLSVSTGALEQIRHMETQAKDLRNQLLGFRSATSSHGSKMDDLEKELSHLNREFETLQEKAQVNSRKAQTLYNNIDQTIQSAKELDMKIKNIVQNVHILLKQMARPGGEGTDLPVGDWSRELAEAQRMMRDLRSRDFKKHLQEAEAEKMEAQLLLHRIRTWLESHQVENNGLLKNIRDSLNDYEDKLQDLRSILQEAAAQAKQATGINHENEGVLGAIQRQMKEMDSLKNDFTKYLATADSSLLQTNNLLQQMDKSQKEYESLAAALNGARQELSDRVRELSRSGGKAPLVVEAEKHAQSLQELAKQLEEIKRNTSGDELVRCAVDAATAYENILNAIRAAEDAASKATSASKSAFQTVIKEDLPKRAKTLSSDSEELLNEAKMTQKRLQQVSPALNSLQQTLKTVSVQKDLLDANLTVARDDLHGIQRGDIDSVVIGAKSMVREANGITSEVLDGLNPIQTDLGRIKDSYESARREDFSKALVDANNSVKKLTRKLPDLFIKIESINQQLLPLGNISDNVDRIRELIQQARDAANKVAIPMRFNGKSGVEVRLPNDLEDLKGYTSLSLFLQRPDLRENGGTEDMFVMYLGNKDASKDYIGMAVVDGQLTCVYNLGDREAEVQIDQVLTESESQEAVMDRVKFQRIYQFAKLNYTKEATSTKPKAPGVYDMESASSNTLLNLDPENAVFYVGGYPPGFELPRRLRFPPYKGCIELDDLNENVLSLYNFKTTFNLNTTEVEPCRRRKEESDKNYFEGTGYARIPTQPNAPFPNFMQTIQTTVDRGLLFFAENQDNFISLNIEDGNLMVKYKLNSEPPKEKGIRDTINNGRDHMILISIGKSQKRMLINMNKHSIIIEGEIFDFSTYYLGGIPIAIRERFNISTPAFQGCMKNLKKTSGVVRLNDTVGVTKKCSEDWKLVRTASFSRGGQMSFTNLDVPSLDRFQLSFGFQTFQPSGTLLNHQTRTSSLLVTLEDGHIALSTRDSSSPIFKSPGTYMDGLLHHVSVISDTSGLRLLIDDQVLRRNQRLASFSNAQQSLSMGGGYFEGCISNVFVQRMSQSPEVLDMASKSTKRDAFLGGCSLNKPPFLMLFKSPKGFNKARSFNVNQLLQDAPQAARSIEAWQDGKSCLPPLNTKATHRALQFGDSPTSHLLFKLPQELLKPRLQFSLDIQTTSSRGLVFHTGTRDSFVALYLSEGHVIFALGAGGKKLRLRSKERYHDGKWHSVVFGLSGRKVHLVVDGLRAQEGSLPGNSTISPREQVYLGLSPSRKSKSLPQHSFVGCLRNFQLDSKPLDSPSARSGVSPCLGGSLEKGIYFSQGGGHVVLANSVSLEPALTLTLSIRPRSLTGVLIHIASQSGEHLSVYMEAGKVTTSMNSEAGGTVTSITPKRSLCDGQWHSVTVSIKQHTLHLELDTDNSYTAGQLSFPPNSTRGSLHIGGVPDKLKMLTLPVWNSFFGCLKNIQVNHIPVPITEATDVQGSVSLNGCPDH",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q61789"},
		"label":"lama3_mouse"
	},
	{
		"object":"interactor",
		"sequence":"MTAFFLLWLALPGFLCAQQACSRGACYPPVGDLLIGRTQLLRASSTCGLTKPETYCTQYGQWQMKCCKCDSRLPRNYNSHRVENVASSSGPMRWWQSQNDVSPVSLQLDLDKRMQLQDIMMDFKGLTPAGMLIERSSDFGKTWRVYQYLATDCASTFPQVHQGQPKNWQDVRCRPLSQRPNGHLTGGKVQLNLMDLASAIPASQSKKIQELGDITNLRVNFTKLAPVPQRGSYPPSAYFAVSQLRLQGSCFCHGHADRCAPNPGGSTTAVQVNNVCVCQHNTAGPNCDRCAPFYNNRPWRPAEGQDTHECQRCDCNGHSETCHFDPAVFAASQGTNGGVCDNCRDHTEGKNCERCQLHYFRNRRPSAPIHETCIPCECDPDGAVQGAPCDRLTGQCVCKEYVQGERCDLCKPGFTGLTFANPKGCHACDCSILGARKDMPCEEETGRCLCLPNVVGPKCDQCAPSHWKLASGLGCEPCACDPRNSLSSQCNQFTGQCPCREGFGGLTCSSAAIRQCPDQTYGHVATGCRACDCDFRGTEGPGCDKASGRCLCRPGFTGPRCDQCQRGHCDRYPVCVACHSCFQAYDTDLQEQARRLHSLRNATEGLWTGTGLEDHGLASRLLDAKSKIEQIRQILEGTSVTEQDVAQVANGILSIRRTLQGLPLDLPLEEEMESFSGDLGNLDRSFSRLLLMYRSKKEQFEKLSSEDPSGAFRMLTMAYEQSSRAAQQVSDSSSLLSQLRDSRREAEGLERQAGGGGTGGAQLMALRLEMASLPDLTPTINKLCGRSRQTACTPGDCPGELCPQDNGTACGSHCRGALPRAKGAFHMAGRVAEQLRNFNTQLQQTRQMIRAAEEAASRVQADAQRLETQVSTSRLLMEEDVQRTRLLIQQVRGFLTDPDTDAATIQQVSEAVLALWLPTDSATVLRKMKEIQAIAARLPNVDSVLSQTKQDIARARRLQAEAEQARSRAHAVEGQVDDVVGNLRQGTVALQEAQDTMQGTGRSLRLIQERVGEVQQVLVPAERLVKGMKEQMSGFWARMKELRRQAQEEQAQAMQARQLAEGASQQAMNAQEGFKRLKQKYTELKDRLGQSPVLGEQGNRILSIKMEAEELFGETMEMMDKMKDMESELLRGSQAIMLRSADLSGLEKRVEQIRSYINGRVLYYATCK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q61087"},
		"label":"lamb3_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9249391"}],
		"expansion":{"id":"21","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q61789"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q61087"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MPALWLSCCLGVALLLPAAQATSRREVCDCNGKSRQCVFDQELHRQTGSGFRCLNCNDNTAGVHCERCREGFYRHRDRDRCLPCNCHSKGSLSAGCDNSGQCRCKPGVTGQRCDRCQPGFHMLTDAGCTRDQGQLDSKCDCDPAGISGPCDSGRCVCKPAVTGERCDRCRPGYYHLDRANPEGCTQCFCYGHSASCHASADFSVHKITSTFSQDVDGWKAVQRNGAPAKLHWSQRHRDVFSSARRSDPVYFVAPAKFLGNQQVSYGQSLSFDYRVDRGGRQPSAYDVILEGAGLQIRAPLMAPGKTLPCGITKTYTFRLNEHPSSHWSPQLSYFEYRRLLRNLTALLIRATYGEYSTGYIDNVTLVSARPVSGAPAPWVERCVCPAGYKGQFCQECASGYKRDSARLGPFGACVPCNCQGGGACDPDTGDCYSGDENPDIECADCPIGFYNDPHDPRSCKPCPCHNGFSCSVMPETEEVVCNNCPPGVTGARCELCADGFFGDPFGERGPVRPCQRCQCNNNVDPNASGNCDQLTGRCLKCIYNTAGVYCDQCKAGYFGDPLAPNPADKCRACNCSPMGSEPGECRGDGSCVCKPGFGGLNCDHAALTSCPACYNQVKIQMDQFTQQLQSLEALVSKAQGGGGGGTVPVQLEGRIEQAEQALQDILGEAQISEGAMRAVAVRLAKARSQENDYKTRLDDLKMTAERIRALGSQHQNRVQDTSRLISQMRLSLAGSEALLENTNIHSSEHYVGPNDFKSLAQEATRKADSHAESANAMKQLARETEDYSKQALSLARKLLSGGGGSGSWDSSVVQGLMGKLEKTKSLSQQLSLEGTQADIEADRSYQHSLRLLDSASQLQGVSDLSFQVEAKRIRQKADSLSNLVTRQTDAFTRVRNNLGNWEKETRQLLQTGKDRRQTSDQLLSRANLAKNRAQEALSMGNATFYEVENILKNLREFDLQVEDRKAEAEEAMKRLSSISQKVADASDKTQQAETALGSATADTQRAKNAAREALEISSEIELEIGSLNLEANVTADGALAMEKGTATLKSEMREMIELARKELEFDTDKDTVQLVITEAQQADARATSAGVTIQDTLNTLDGILHLIDQPGSVDEEGMMLLEQGLFQAKTQINSRLRPLMSDLEERVRRQRNHLHLLETSIDGILADVKNLENIRDNLPPGCYNTQALEQQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q61092"},
		"label":"lamc2_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9249391"}],
		"expansion":{"id":"21","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q61789"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q61092"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9249619"}],
		"expansion":{"id":"22","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q61789"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P02468"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9249619"}],
		"expansion":{"id":"22","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q61789"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P02469"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9249647"}],
		"expansion":{"id":"23","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q61789"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q61292"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9249647"}],
		"expansion":{"id":"23","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q61789"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P02468"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGWSTAWCSVLALWLLWCAVCSNAASGDGNAFPFDIEGSAVVGRQDPSETSDSGVTLGRLPPAAERCDAGFFRTLSGECAPCDCNGNSHECLDGSGFCLHCQRNTTGEHCEKCLDGYIGDSIRGTPRFCQPCPCPLPHLANFAESCYRKNGAVRCICKENYVGPNCERCAPGYYGNPLLIGSTCKKCDCSGNSDPNLIFEDCDEITGQCRNCLRNTTGFKCERCAPGYYGDARTAKNCAVCNCGGGPCDSVTGECLEEGFEVPTGCDKCVWDLTDDLRLAALSIEESKSGLLSVSSGAAAHRHVTDMNSTIHLLRTRLSERENQYTLRKIQINNSENTLRSLLPDVEGLHEKGSQASRKGMLVEKESMDTIDQATHLVEQAHNMRDKIQEINSKMLYYGENQELGPEEIAEKLVLAQKMLEEIRSRQPFLTHRELVDEEADEAQELLSQAENWQRLHNDTRSLFPVVLEQLDDYNAKLSDLQESINQALDHVRDAEDMNRAITFKQRDHEKQHERVKEQMEVVGASLSMSADSLTIPQLTLEELDEIIKNASGIYAEIDGAKNELQGKLSNLSNLSHDLVQEATDHAYNLQQEADELSRNLHSSDMNGLVQKALDASNVYENIANYVSEANETAELALNITDRIYDAVSGIDTQIIYHKDESDNLLNQARELQAKADSSNDEAVADTSRRVGGALWRKGALRDRLNDAVKQLQAAERGDAHQRLGQSKLFIEEANKTTAAVQQVTTPMANNLSNWSQNLQTFDSSAYNTAVDSARDAVRNLTEVVPQLLDQLRTVEQKRPASNISASIQRIRELIAQTRSVASKIQVSMMFDGQSAVEVHPKVSVDDLKAFTSISLYMKPPPKPAEPTGAWVADQFVLYLGSKNAKKEYMGLAIKNDNLVYVYNLGMKDVEILLDSKPVSSWPAYFSIVKIERVGKHGKVFLTVPSLSSTAEEKFIKKGEFAGDDSLLDLTPEDTVFYVGGVPANFKLPASLNLPSYSGCLELATLNNDVISLYNFKHIYNMDPSKSVPCARDKLAFTQSRAASYFFDGSSYAVVRDITRRGKFGQVTRFDIEIRTPADNGLVLLMVNGSMFFSLEMRNGYLHVFYDFGFSNGPVHLEDTLKKAQINDAKYHEISIIYHNDKKMILVVDRRHVKSTDNEKKKIPFTDIYIGGAPQEVLQSRTLRAHLPLDINFRGCMKGFQFQKKDFNLLEQTETLGVGYGCPEDSLISRRAYFNGQSFIASIQKISFFDGFEGGFNFRTLQPNGLLFYYTSGSDVFSISLDNGTVVMDVKGIKVMSTDKQYHDGLPHFVVTSISDTRYELVVDKSRLRGKNPTKGKAEQTQTTEKKFYFGGSPISPQYANFTGCISNAYFTRLDRDVEVEDFQRYSEKVHTSLYECPIESSPLFLLHKKGKNSSKPKTNKQGEKSKDAPSWDPIGLKFLEQKAPRDSHCHLSSSPRAIEHAYQYGGTANSRQEFEHEQGDFGEKSQFAIRLKTRSSHGMIFYVSDQEENDFMTLFLAHGRLVFMFNVGHKKLKIRSQEKYNDGLWHDVIFIREKSSGRLVIDGLRVLEERLPPSGAAWKIKGPIYLGGVAPGRAVKNVQITSVYSFSGCLGNLQLNGASITSASQTFSVTPCFEGPMETGTYFSTEGGYVVLDESFNIGLKFEIAFEVRPRSSSGTLVHGHSVNGEYLNVHMRNGQVIVKVNNGVRDFSTSVTPKQNLCDGRWHRITVIRDSNVVQLDVDSEVNHVVGPLNPKPVDHREPVFVGGVPESLLTPRLAPSKPFTGCIRHFVIDSRPVSFSKAALVSGAVSINSCPTA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P97927"},
		"label":"lama4_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9259948"}],
		"expansion":{"id":"24","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P97927"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q61292"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9259948"}],
		"expansion":{"id":"24","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P97927"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P02468"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9249668"}],
		"expansion":{"id":"25","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P97927"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P02468"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9249668"}],
		"expansion":{"id":"25","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P97927"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P02469"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAKRGGQLCAGSAPGALGPRSPAPRPLLLLLAGLALVGEARTPGGDGFSLHPPYFNLAEGARITASATCGEEAPTRSVSRPTEDLYCKLVGGPVAGGDPNQTIQGQYCDICTAANSNKAHPVSNAIDGTERWWQSPPLSRGLEYNEVNVTLDLGQVFHVAYVLIKFANSPRPDLWVLERSTDFGHTYQPWQFFASSKRDCLERFGPRTLERITQDDDVICTTEYSRIVPLENGEIVVSLVNGRPGALNFSYSPLLRDFTKATNIRLRFLRTNTLLGHLMGKALRDPTVTRRYYYSIKDISIGGRCVCHGHADVCDAKDPLDPFRLQCACQHNTCGGSCDRCCPGFNQQPWKPATTDSANECQSCNCHGHAYDCYYDPEVDRRNASQNQDNVYQGGGVCLDCQHHTTGINCERCLPGFFRAPDQPLDSPHVCRPCDCESDFTDGTCEDLTGRCYCRPNFTGELCAACAEGYTDFPHCYPLPSFPHNDTREQVLPAGQIVNCDCNAAGTQGNACRKDPRLGRCVCKPNFRGAHCELCAPGFHGPSCHPCQCSSPGVANSLCDPESGQCMCRTGFEGDRCDHCALGYFHFPLCQLCGCSPAGTLPEGCDEAGRCQCRPGFDGPHCDRCLPGYHGYPDCHACACDPRGALDQQCGVGGLCHCRPGYTGATCQECSPGFYGFPSCIPCHCSADGSLHTTCDPTTGQCRCRPRVTGLHCDMCVPGAYNFPYCEAGSCHPAGLAPANPALPETQAPCMCRAHVEGPSCDRCKPGYWGLSASNPEGCTRCSCDPRGTLGGVTECQGNGQCFCKAHVCGKTCAACKDGFFGLDYADYFGCRSCRCDVGGALGQGCEPKTGACRCRPNTQGPTCSEPAKDHYLPDLHHMRLELEEAATPEGHAVRFGFNPLEFENFSWRGYAHMMAIQPRIVARLNVTSPDLFRLVFRYVNRGSTSVNGQISVREEGKLSSCTNCTEQSQPVAFPPSTEPAFVTVPQRGFGEPFVLNPGIWALLVEAEGVLLDYVVLLPSTYYEAALLQHRVTEACTYRPSALHSTENCLVYAHLPLDGFPSAAGTEALCRHDNSLPRPCPTEQLSPSHPPLATCFGSDVDIQLEMAVPQPGQYVLVVEYVGEDSHQEMGVAVHTPQRAPQQGVLNLHPCPYSSLCRSPARDTQHHLAIFYLDSEASIRLTAEQAHFFLHSVTLVPVEEFSTEFVEPRVFCVSSHGTFNPSSAACLASRFPKPPQPIILKDCQVLPLPPDLPLTQSQELSPGAPPEGPQPRPPTAVDPNAEPTLLRHPQGTVVFTTQVPTLGRYAFLLHGYQPVHPSFPVEVLINGGRIWQGHANASFCPHGYGCRTLVLCEGQTMLDVTDNELTVTVRVPEGRWLWLDYVLIVPEDAYSSSYLQEEPLDKSYDFISHCATQGYHISPSSSSPFCRNAATSLSLFYNNGALPCGCHEVGAVSPTCEPFGGQCPCRGHVIGRDCSRCATGYWGFPNCRPCDCGARLCDELTGQCICPPRTVPPDCLVCQPQSFGCHPLVGCEECNCSGPGVQELTDPTCDMDSGQCRCRPNVAGRRCDTCAPGFYGYPSCRPCDCHEAGTMASVCDPLTGQCHCKENVQGSRCDQCRVGTFSLDAANPKGCTRCFCFGATERCGNSNLARHEFVDMEGWVLLSSDRQVVPHEHRPEIELLHADLRSVADTFSELYWQAPPSYLGDRVSSYGGTLHYELHSETQRGDIFIPYESRPDVVLQGNQMSIAFLELAYPPPGQVHRGQLQLVEGNFRHLETHNPVSREELMMVLAGLEQLQIRALFSQTSSSVSLRRVVLEVASEAGRGPPASNVELCMCPANYRGDSCQECAPGYYRDTKGLFLGRCVPCQCHGHSDRCLPGSGICVGCQHNTEGDQCERCRPGFVSSDPSNPASPCVSCPCPLAVPSNNFADGCVLRNGRTQCLCRPGYAGASCERCAPGFFGNPLVLGSSCQPCDCSGNGDPNMIFSDCDPLTGACRGCLRHTTGPHCERCAPGFYGNALLPGNCTRCDCSPCGTETCDPQSGRCLCKAGVTGQRCDRCLEGYFGFEQCQGCRPCACGPAAKGSECHPQSGQCHCQPGTTGPQCLECAPGYWGLPEKGCRRCQCPRGHCDPHTGHCTCPPGLSGERCDTCSQQHQVPVPGKPGGHGIHCEVCDHCVVLLLDDLERAGALLPAIREQLQGINASSAAWARLHRLNASIADLQSKLRSPPGPRYQAAQQLQTLEQQSISLQQDTERLGSQATGVQGQAGQLLDTTESTLGRAQKLLESVRAVGRALNELASRMGQGSPGDALVPSGEQLRWALAEVERLLWDMRTRDLGAQGAVAEAELAEAQRLMARVQEQLTSFWEENQSLATHIRDQLAQYESGLMDLREALNQAVNTTREAEELNSRNQERLKEALQWKQELSQDNATLKATLQAASLILGHVSELLQGIDQAKEDLEHLAASLDGAWTPLLKRMQAFSPASSKVDLVEAAEAHAQKLNQLAINLSGIILGINQDRFIQRAVEASNAYSSILQAVQAAEDAAGQALRQASRTWEMVVQRGLAAGARQLLANSSALEETILGHQGRLGLAQGRLQAAGIQLHNVWARKNQLAAQIQEAQAMLAMDTSETSEKIAHAKAVAAEALSTATHVQSQLQGMQKNVERWQSQLGGLQGQDLSQVERDASSSVSTLEKTLPQLLAKLSRLENRGVHNASLALSANIGRVRKLIAQARSAASKVKVSMKFNGRSGVRLRTPRDLADLAAYTALKFHIQSPVPAPEPGKNTGDHFVLYMGSRQATGDYMGVSLRNQKVHWVYRLGKAGPTTLSIDENIGEQFAAVSIDRTLQFGHMSVTVEKQMVHEIKGDTVAPGSEGLLNLHPDDFVFYVGGYPSNFTPPEPLRFPGYLGCIEMETLNEEVVSLYNFEQTFMLDTAVDKPCARSKATGDPWLTDGSYLDGSGFARISFEKQFSNTKRFDQELRLVSYNGIIFFLKQESQFLCLAVQEGTLVLFYDFGSGLKKADPLQPPQALTAASKAIQVFLLAGNRKRVLVRVERATVFSVDQDNMLEMADAYYLGGVPPEQLPLSLRQLFPSGGSVRGCIKGIKALGKYVDLKRLNTTGISFGCTADLLVGRTMTFHGHGFLPLALPDVAPITEVVYSGFGFRGTQDNNLLYYRTSPDGPYQVSLREGHVTLRFMNQEVETQRVFADGAPHYVAFYSNVTGVWLYVDDQLQLVKSHERTTPMLQLQPEEPSRLLLGGLPVSGTFHNFSGCISNVFVQRLRGPQRVFDLHQNMGSVNVSVGCTPAQLIETSRATAQKVSRRSRQPSQDLACTTPWLPGTIQDAYQFGGPLPSYLQFVGISPSHRNRLHLSMLVRPHAASQGLLLSTAPMSGRSPSLVLFLNHGHFVAQTEGPGPRLQVQSRQHSRAGQWHRVSVRWGMQQIQLVVDGSQTWSQKALHHRVPRAERPQPYTLSVGGLPASSYSSKLPVSVGFSGCLKKLQLDKRPLRTPTQMVGVTPCVSGPLEDGLFFPGSEGVVTLELPKAKMPYVSLELEMRPLAAAGLIFHLGQALATPYMQLKVLTEQVLLQANDGAGEFSTWVTYPKLCDGRWHRVAVIMGRDTLRLEVDTQSNHTTGRLPESLAGSPALLHLGSLPKSSTARPELPAYRGCLRKLLINGAPVNVTASVQIQGAVGMRGCPSGTLALSKQGKALTQRQAKPSVSPLLWH",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q61001"},
		"label":"lama5_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9259906"}],
		"expansion":{"id":"26","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q61001"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P02468"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9259906"}],
		"expansion":{"id":"26","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q61001"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P02469"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9249688"}],
		"expansion":{"id":"27","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q61001"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P02468"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"582901",
				"name":"lamb1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["32482651"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9249688"}],
		"expansion":{"id":"27","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q61001"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P02469"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32482651",
				"name":"lamc1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["582901"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9249728"}],
		"expansion":{"id":"28","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q61001"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P02468"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9249728"}],
		"expansion":{"id":"28","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q61001"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q61292"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAVSRVLSLLATVASMALVIQETHFAAGADMGSCYDGVGRAQRCLPEFENAAFGRRAEASHTCGRPPEDFCPHVGAPGAGLQCQRCDDADPGRRHDASYLTDFHSPDDSTWWQSPSMAFGVQYPTSVNLTLSLGKAYEITYVRLKFHTSRPESFAIYKRTYASGPWEPYQYYSASCQKTYGRPEGHYLRPGEDERVAFCTSEFSDISPLNGGNVAFSTLEGRPSAYNFEESPVLQEWVTSTDILISLDRLNTFGDDIFKDPRVLQSYYYAVSDFSVGGRCKCNGHASECEPNAAGQLACRCQHNTTGVDCERCLPFFQDRPWARGTAEDANECLPCNCSGHSEECTFDRELYRSTGHGGHCQRCRDHTTGPHCERCEKNYYRWSPKTPCQPCDCHPAGSLSLQCDNSGVCPCKPTVTGWKCDRCLPGFHSLSEGGCRPCACNVAGSLGTCDPRSGNCPCKENVEGSLCDRCRPGTFNLQPHNPVGCSSCFCYGHSKVCSPAAGFQEHHIRSDFRHGAGGWQIRSMGVSKRPLQWSQSGLLLGLRGGEELSAPKKFLGDQRLSYGQPVILTLQVPPGGSPPPIQLRLEGAGLALSLRPSSLPSPQDTRQPRRVQLQFLLQETSEEAESPLPTFHFQRLLSNLTALSIWTSGQGPGHSGQVLLCEVQLTSAWPQRELAPPASWVETCLCPQGYTGQFCEFCALGYKREIPHGGPYANCIPCTCNQHGTCDPNTGICLCGHHTEGPSCERCMPGFYGNAFSGRADDCQPCPCPGQSACATIPESGDVVCTHCPPGQRGRRCESCEDGFFGDPLGLSGAPQPCRRCQCSGNVDLNAVGNCDPHSGHCLRCLYNTTGAHCEHCREGFYGSAVATRPVDKCAPCSCDLRGSVSEKTCNPVTGQCVCLPYVSGRDCSRCSPGFYDLQSGRGCQSCKCHPLGSLENKCHPKTGQCPCRPGVTGQACDRCQLGFFGFSIKGCRDCRCSPLGAASSQCHENSTCVCRPGFVGYKCDRCQDNFFLADGDTGCQECPTCYALVKEEAAKLKARLMLMEGWLQRSDCGSPWGPLDILQGEAPLGDVYQGHHLLQETRGTFLQQMVGLEDSVKATWEQLQVLRGHVHCAQAGAQKTCIQLAELEETLQSSEEEVLRAASALSFLASLQKGSSTPTNWSHLASEAQILARSHRDTATKIEATSERALLASNASYELLKLMEGRVASEAQQELEDRYQEVQAAQTALGIAVAEALPKAEKALATVKQVIGDAAPHLGLLVTPEAMNFQARGLSWKVKALEQKLEQKEPEVGQSVGALQVEAGRALEKMEPFMQLRNKTTAAFTRASSAVQAAKVTVIGAETLLADLEGMKLRSPLPKEQAALKKKAGSIRTRLLEDTKRKTKQAERMLGNAASLSSSTKKKSKEAELMSKDNAKLSRALLREGKQGYRHASRLASQTQATLRRASRLLLTSEAHKQELEEAKQVTSGLSTVERQIRESRISLEKDTKVLSELLVKLGSLGVHQAPAQTLNETQRALESLRLQLDSHGALHHKLRQLEEESARQELQIQSFEDDLAEIRADKHNLETILSSLPENCAS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9R0B6"},
		"label":"lamc3_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9249751"}],
		"expansion":{"id":"29","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q60675"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9R0B6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9249751"}],
		"expansion":{"id":"29","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q60675"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P02469"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9249794"}],
		"expansion":{"id":"30","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P97927"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q61292"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9249794"}],
		"expansion":{"id":"30","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P97927"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9R0B6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9249813"}],
		"expansion":{"id":"31","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q61001"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q61292"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9249813"}],
		"expansion":{"id":"31","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q61001"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q61092"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9249832"}],
		"expansion":{"id":"32","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q61001"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q61292"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9249832"}],
		"expansion":{"id":"32","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q61001"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9R0B6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MELLRGLGVLFLLHMCGSNRIPESGGDNGVFDIFELIGGARRGPGRRLVKGQDLSSPAFRIENANLIPAVPDDKFQDLLDAVWADKGFIFLASLRQMKKTRGTLLAVERKDNTGQIFSVVSNGKAGTLDLSLSLPGKQQVVSVEEALLATGQWKSITLFVQEDRAQLYIDCDKMESAELDVPIQSIFTRDLASVARLRVAKGDVNDNFQGVLQNVRFVFGTTPEDILRNKGCSSSTNVLLTLDNNVVNGSSPAIRTNYIGHKTKDLQAICGLSCDELSSMVLELKGLRTIVTTLQDSIRKVTEENRELVSELKRPPLCFHNGVQYKNNEEWTVDSCTECHCQNSVTICKKVSCPIMPCSNATVPDGECCPRCWPSDSADDGWSPWSEWTSCSATCGNGIQQRGRSCDSLNNRCEGSSVQTRTCHIQECDKRFKQDGGWSHWSPWSSCSVTCGDGVITRIRLCNSPSPQMNGKPCEGEARETKACKKDACPINGGWGPWSPWDICSVTCGGGVQRRSRLCNNPTPQFGGKDCVGDVTENQVCNKQDCPIDGCLSNPCFAGAKCTSYPDGSWKCGACPPGYSGNGIQCKDVDECKEVPDACFNHNGEHRCKNTDPGYNCLPCPPRFTGSQPFGRGVEHAMANKQVCKPRNPCTDGTHDCNKNAKCNYLGHYSDPMYRCECKPGYAGNGIICGEDTDLDGWPNENLVCVANATYHCKKDNCPNLPNSGQEDYDKDGIGDACDDDDDNDKIPDDRDNCPFHYNPAQYDYDRDDVGDRCDNCPYNHNPDQADTDKNGEGDACAVDIDGDGILNERDNCQYVYNVDQRDTDMDGVGDQCDNCPLEHNPDQLDSDSDLIGDTCDNNQDIDEDGHQNNLDNCPYVPNANQADHDKDGKGDACDHDDDNDGIPDDRDNCRLVPNPDQKDSDGDGRGDACKDDFDHDNVPDIDDICPENFDISETDFRRFQMIPLDPKGTSQNDPNWVVRHQGKELVQTVNCDPGLAVGYDEFNAVDFSGTFFINTERDDDYAGFVFGYQSSSRFYVVMWKQVTQSYWDTNPTRAQGYSGLSVKVVNSTTGPGEHLRNALWHTGNTPGQVRTLWHDPRHIGWKDFTAYRWRLSHRPKTGYIRVVMYEGKKIMADSGPIYDKTYAGGRLGLFVFSQEMVFFSDMKYECRDS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P35441"},
		"label":"tsp1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"reactome","id":"REACT_13859.1"},{"db":"intact","id":"EBI-9251379"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P35441"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P35441"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLWALALLALGIGPRASAGDHVKDTSFDLFSISNINRKTIGAKQFRGPDPGVPAYRFVRFDYIPPVNTDDLNRIVKLARRKEGFFLTAQLKQDRKSRGTLLVLEGPGTSQRQFEIVSNGPGDTLDLNYWVEGNQHTNFLEDVGLADSQWKNVTVQVASDTYSLYVGCDLIDSVTLEEPFYEQLEVDRSRMYVAKGASRESHFRGLLQNVHLVFADSVEDILSKKGCQHSQGAEVNTISEHTETLHLSPHITTDLVVQGVEKAQEVCTHSCEELSNMMNELSGLHVMVNQLSKNLERVSSDNQFLLELIGGPLKTRNMSACVQEGRIFAENETWVVDSCTTCTCKKFKTVCHQITCSPATCANPSFVEGECCPSCSHSADSDEGWSPWAEWTECSVTCGSGTQQRGRSCDVTSNTCLGPSIQTRTCSLGKCDTRIRQNGGWSHWSPWSSCSVTCGVGNVTRIRLCNSPVPQMGGKNCKGSGRETKPCQRDPCPIDGRWSPWSPWSACTVTCAGGIRERSRVCNSPEPQYGGKDCVGDVTEHQMCNKRSCPIDGCLSNPCFPGAKCNSFPDGSWSCGSCPVGFLGNGTHCEDLDECAVVTDICFSTNKAPRCVNTNPGFHCLPCPPRYKGNQPFGVGLEDARTEKQVCEPENPCKDKTHSCHKNAECIYLGHFSDPMYKCECQIGYAGDGLICGEDSDLDGWPNNNLVCATNATYHCIKDNCPKLPNSGQEDFDKDGIGDACDEDDDNDGVSDEKDNCQLLFNPRQLDYDKDEVGDRCDNCPYVHNPAQIDTDNNGEGDACSVDIDGDDVFNERDNCPYVYNTDQRDTDGDGVGDHCDNCPLMHNPDQIDQDNDLVGDQCDNNEDIDDDGHQNNQDNCPYISNSNQADHDNDGKGDACDSDDDNDGVPDDRDNCRLVFNPDQEDSDGDGRGDICKDDFDNDNVPDIDDVCPENNAITETDFRNFQMVPLDPKGTTQIDPNWVIRHQGKELVQTANSDPGIAVGFDEFGSVDFSGTFYVNTDRDDDYAGFVFGYQSSSRFYVVMWKQVTQTYWEDKPSRAYGYSGVSLKVVNSTTGTGEHLRNALWHTGNTEGQVRTLWHDPKNIGWKDYTAYRWHLIHRPKTGYMRVLVHEGKQVMADSGPIYDQTYAGGRLGLFVFSQEMVYFSDLKYECRDA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q03350"},
		"label":"tsp2_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9251408"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q03350"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q03350"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MEKPELWGVLALLLLCSYTCGSQDLQVIDLLTVGESRQMVAVAEKIRTALLTAGDIYLLSTFRLPPKQGGVLFGLYSRQDNTRWLEASVVGKINKVLVRYQREDGKVHAVNLQQAGLADGRTHTALLRLRGPSRPSPGLQLYVDCKLGDQHAGLPALAPIPPAEVSGLEIRTGQKAYLRMQGFVESMKIILGGSMARVGALSECPFQGDDSIHNAVTSALQSILGEQTKALVTQLTLFNQILVELRDDIRDQVKEMSLIRNTIMECQVCGFHEQRSHCSPSPCFRGVDCMEVYEYPGYRCGPCPPGLQGNGTHCDDINECAHADPCFPGSSCINTMPGFHCEACPPGYKGTRVSGVGIDYARASKQVCNDIDECNDGNNGGCDPNSICTNTVGSFKCGPCRLGFLGNQSQGCVPARTCHSPAHSPCHIHAHCLFERNGAVSCQCNVGWAGNGNVCGPDTDIDGYPDQALPCMDNNKHCKQDNCLLTPNSGQEDADNDGVGDQCDDDADGDGIKNVEDNCRLFPNKDQQNSDTDSFGDACDNCPNVPNNDQKDTDGNGEGDACDNDVDGDGIPNGLDNCPKVPNPLQTDRDEDGVGDACDSCPEMSNPTQTDADSDLVGDVCDTNEDSDGDGHQDTKDNCPQLPNSSQLDSDNDGLGDECDGDDDNDGVPDYIPPGPDNCRLVPNPNQKDSDGNGVGDVCEDDFDNDAVVDPLDVCPESAEVTLTDFRAYQTVILDPEGDAQIDPNWVVLNQGMEIVQTMNSDPGLAVGYTAFNGVDFEGTFHVNTVTDDDYAGFLFSYQDSGRFYVVMWKQTEQTYWQATPFRAVAQPGLQLKAVTSISGPGEHLRNALWHTGHTPDQVRLLWTDPRNVGWRDKTSYRWRLLHRPQVGYIRVKLYEGPQLVADSGVIIDTSMRGGRLGVFCFSQENIIWSNLQYRCNDTVPEDFEPFRRQLLQGRV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q05895"},
		"label":"tsp3_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9251455"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q05895"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q05895"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MPAPRAAAAAFLLLHLVLQPWQRTSAQATPQVFDLLPSSSQRLNPSALQPVLTDPTLHEVYLISTFKLQSKSSATIFGLYSSSDNSKYFEFTVMGRLNKAILRYLKNDGKIHLVVFNNLQLADGRRHRVLLRLSNLQRGDGSVELYLDCAQADSVRNLPRAFSGLTQNPESIELRTFQRKPQDFLEELKLVVRGSLFQVASLQDCFLQQSEPLAATSTGDFNRQFLGQMTQLNQLLGEVKDLLRQQVKETSFLRNTIAECQACGPLSFQSPTPNTLVPIAPPAPPTRPTRHCDSSPCFRGVRCTDTRDGFQCGPCPDGYTGNGITCSDVDECKYHPCYPGVRCVNLAPGFRCDACPVGFTGPMVQGVGINFAKTNKQVCTDVDECQNGACVLNSICINTLGSYRCGPCKPGYTGDQTRGCKTERSCRNPEQNPCSVHAQCIEERQGDVTCVCGVGWAGDGYVCGKDVDIDSYPDEELPCSARNCKKDNCKYVPNSGQEDADRDGIGDACDEDADGDGILNEQDNCVLTHNIDQRNSDKDIFGDACDNCRMVLNNDQKDTDGDGRGDACDDDMDGDGIKNILDNCPRVPNRDQQDRDGDDVGDACDSCPDVSNPNQSDVDNDLVGDSCDTNQDSDGDGHQDSTDNCPTVINSSQLDTDKDGIGDECDDDDDNDGIPDLVPPGPDNCRLVPNPAQEDSNNDGVGDICEADFDQDQVIDHIDVCPENAEITLTDFRAYQTVVLDPEGDAQIDPNWVVLNQGMEIVQTMNSDPGLAVGYTAFNGVDFEGTFHVNTQTDDDYAGFIFGYQDSSSFYVVMWKQTEQTYWQATPFRAVAEPGIQLKAVKSKTGPGEHLRNSLWHTGDTSDQVRLLWKDSRNVGWKDKVSYRWFLQHRPQVGYIRVRFYEGSELVADSGVTIDTTMRGGRLGVFCFSQENIIWSNLKYRCNDTIPEDFQEFQTQSFDRLDN",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9Z1T2"},
		"label":"tsp4_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9251502"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Z1T2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9Z1T2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGPTACVLVLALAILRATGQGQIPLGGDLAPQMLRELQETNAALQDVRELLRQQVKEITFLKNTVMECDACGMQPARTPGLSVRPVPLCAPGSCFPGVVCSETATGARCGPCPPGYTGNGSHCTDVNECNAHPCFPRVRCINTSPGFHCEACPPGFSGPTHEGVGLTFAKSNKQVCTDINECETGQHNCVPNSVCVNTRGSFQCGPCQPGFVGDQTSGCQRRGQHFCPDGSPSPCHEKANCVLERDGSRSCVCAVGWAGNGLLCGRDTDLDGFPDEKLRCSERQCRKDNCVTVPNSGQEDVDRDGIGDACDPDADGDGVPNEQDNCPLVRNPDQRNSDSDKWGDACDNCRSKKNDDQKDTDLDGRGDACDDDIDGDRIRNVADNCPRVPNFDQSDSDGDGVGDACDNCPQKDNPDQRDVDHDFVGDACDSDQDQDGDGHQDSRDNCPTVPNSAQQDSDHDGKGDACDDDDDNDGVPDSRDNCRLVPNPGQEDNDRDGVGDACQGDFDADKVIDKIDVCPENAEVTLTDFRAFQTVVLDPEGDAQIDPNWVVLNQGMEIVQTMNSDPGLAVGYTAFNGVDFEGTFHVNTATDDDYAGFIFGYQDSSSFYVVMWKQMEQTYWQANPFRAVAEPGIQLKAVKSSTGPGEQLRNALWHTGDTASQVRLLWKDPRNVGWKDKTSYRWFLQHRPQVGYIRVRFYEGPELVADSNVVLDTAMRGGRLGVFCFSQENIIWANLRYRCNDTIPEDYESHRLQRV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9R0G6"},
		"label":"comp_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9251524"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9R0G6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9R0G6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGSWTPRSPRSPLHAVLLRWGPRRLPPLLPLLLLLWPPPLQVGGFNLDAEAPAVLSGPPGSLFGFSVEFYRPGRDGVSVLVGAPKANTSQPGVLQGGAVYVCPWGTSPIQCTTIQFDSKGSRILESSLYSAKGEEPVEYKSLQWFGATVRAHGSSILACAPLYSWRTEKDPQNDPVGTCYLSTENFTRILEYAPCRSDFGSAAGQGYCQGGFSAEFTKTGRVVLGGPGSYFWQGQILSATQEQISESYYPEYLINPVQGQLQTRQASSVYDDSYLGYSVAVGEFSGDDTEDFVAGVPKGNLTYGYVTVLNGSDIHSLYNVSGEQMASYFGYAVAATDTNGDGLDDLLVGAPLLMERTADGRPQEVGRVYIYLQRPAGIDPTPTLTLTGQDEFSRFGSSLTPLGDLDQDGYNDVAIGAPFGGEAQQGVVFIFPGGPGGLSTKPSQVLQPLWAAGRTPDFFGSALRGGRDLDGNGYPDLIVGSFGVDKALVYRGRPIISASASLTIFPSMFNPEERSCSLEGNPVSCINLSFCLNASGKHVPNSIGFEVELQLDWQKQKGGVRRALFLTSKQATLTQTLLIQNGAREDCREMKIYLRNESEFRDKLSPIHIALNFSLDPKAPMDSHGLRPVLHYQSKSRIEDKAQILLDCGEDNICVPDLQLDVYGEKKHVYLGDKNALNLTFHAQNLGEGGAYEAELRVTAPLEAEYSGLVRHPGNFSSLSCDYFAVNQSRQLVCDLGNPMKAGTSLWGGLRFTVPHLQDTKKTIQFDFQILSKNLNNSQSNVVSFPLSVEAQAQVSLNGVSKPEAVIFPVSDWNPQDQPQKEEDLGPAVHHVYELINQGPSSISQGVLELSCPQALEGQQLLYVTKVTGLSNCTSNYTPNSQGLELDPETSPHHLQKREAPGRSSTASGTQVLKCPEAKCFRLRCEFGPLHRQESRSLQLHFRVWAKTFLQREYQPFSLQCEAVYEALKMPYQILPRQLPQKKLQVATAVQWTKAEGSNGVPLWIIILAILFGLLLLGLLIYVLYKLGFFKRSLPYGTAMEKAQLKPPATSDA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P11688"},
		"label":"ita5_mouse"
	},
	{
		"object":"interactor",
		"sequence":"MNLQLVSWIGLISLICSVFGQTDKNRCLKANAKSCGECIQAGPNCGWCTNTTFLQEGMPTSARCDDLEALKKKGCQPSDIENPRGSQTIKKNKNVTNRSKGMAEKLRPEDITQIQPQQLLLKLRSGEPQKFTLKFKRAEDYPIDLYYLMDLSYSMKDDLENVKSLGTDLMNEMRRITSDFRIGFGSFVEKTVMPYISTTPAKLRNPCTSEQNCTSPFSYKNVLSLTDRGEFFNELVGQQRISGNLDSPEGGFDAIMQVAVCGSLIGWRNVTRLLVFSTDAGFHFAGDGKLGGIVLPNDGQCHLENNVYTMSHYYDYPSIAHLVQKLSENNIQTIFAVTEEFQPVYKELKNLIPKSAVGTLSGNSSNVIQLIIDAYNSLSSEVILENSKLPDGVTINYKSYCKNGVNGTGENGRKCSNISIGDEVQFEISITANKCPNKESETIKIKPLGFTEEVEVVLQFICKCNCQSHGIPASPKCHEGNGTFECGACRCNEGRVGRHCECSTDEVNSEDMDAYCRKENSSEICSNNGECVCGQCVCRKRDNTNEIYSGKFCECDNFNCDRSNGLICGGNGVCRCRVCECYPNYTGSACDCSLDTGPCLASNGQICNGRGICECGACKCTDPKFQGPTCETCQTCLGVCAEHKECVQCRAFNKGEKKDTCAQECSHFNLTKVESREKLPQPVQVDPVTHCKEKDIDDCWFYFTYSVNGNNEAIVHVVETPDCPTGPDIIPIVAGVVAGIVLIGLALLLIWKLLMIIHDRREFAKFEKEKMNAKWDTGENPIYKSAVTTVVNPKYEGK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P09055"},
		"label":"itb1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9254626"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P11688"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"5319313",
				"name":"itga5 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["12701228"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P09055"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"12701228",
				"name":"itgb1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["5319313"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MRAQWPGQLWAALLALGALAGVVVGESNICTTRGVNSCQQCLAVSPVCAWCSDETLSQGSPRCNLKENLLKDNCAPESIEFPVSEAQILEARPLSSKGSGSSAQITQVSPQRIALRLRPDDSKIFSLQVRQVEDYPVDIYYLMDLSFSMKDDLSSIQTLGTKLASQMRKLTSNLRIGFGAFVDKPVSPYMYISPPQAIKNPCYNMKNACLPMFGYKHVLTLTDQVSRFNEEVKKQSVSRNRDAPEGGFDAIMQATVCDEKIGWRNDASHLLVFTTDAKTHIALDGRLAGIVLPNDGHCHIGTDNHYSASTTMDYPSLGLMTEKLSQKNINLIFAVTENVVSLYQNYSELIPGTTVGVLSDDSSNVLQLIVDAYGKIRSKVELEVRDLPEELSLSFNATCLNNEVIPGLKSCVGLKIGDTVSFSIEAKVRGCPQEKEQSFTIKPVGFKDSLTVQVTFDCDCACQAFAQPSSPRCNNGNGTFECGVCRCDQGWLGSMCECSEEDYRPSQQEECSPKEGQPICSQRGECLCGQCVCHSSDFGKITGKYCECDDFSCVRYKGEMCSGHGQCNCGDCVCDSDWTGYYCNCTTRTDTCMSTNGLLCSGRGNCECGSCVCVQPGSYGDTCEKCPTCPDACSFKKECVECKKFNRGTLHEENTCSRYCRDDIEQVKELTDTGKNAVNCTYKNEDDCVVRFQYYEDTSGRAVLYVVEEPECPKGPDILVVLLSVMGAILLIGLATLLIWKLLITIHDRKEFAKFEEERARAKWDTANNPLYKEATSTFTNITYRGT",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"O54890"},
		"label":"itb3_mouse"
	},
	{
		"object":"interactor",
		"sequence":"MAAPGRLLLRPRPGGLLLLLPGLLLPLADAFNLDVESPAEYAGPEGSYFGFAVDFFEPSTSSRMFLLVGAPKANTTQPGIVEGGQVLKCECSSSRRCQPIEFDSTGNRDYAKDDPLEFKSHQWFGASVRSKQDKILACAPLYHWRTEMKQEREPVGTCFLQDGTKTVEYAPCRSKNIDADGQGFCQGGFSIDFTKADRVLLGGPGSFYWQGQLISDQVAEIISKYDPNVYSIKYNNQLATRTAQAIFDDSYLGYSVAVGDFNGDGIEDFVSGVPRAARTLGMVYIYDGKNMSSLHNFTGEQMAAYFGFSVAATDINGDDYADVFIGAPLFMDRGSDGKLQEVGQVSVSLQRAVGDFQTTKLNGFEVFARFGSAIAPLGDLDQDGFNDIAIAAPYGGEDKKGLVYIFNGRSTGLNSVPSQILEGQWAAQSMPPSFGYSMKGATDVDRNGYPDLVVGAFGVDRAVLYRARPVVTVNAGLEVYPSILNQDNKICPLPGTALKVSCFNVRFCLKADGKGTLPRKLHFQVELLLDKLKQKGAIRRALFLHNRSPVHSKTMTVFRGGQMQCEELVAYLRDESEFRDKLTPITIFMEYRLDQRTAADATGLQPILNQFTPANVSRQAHILLDCGEDNVCKPKLEVSVNSDQKKIYIGDDNPLTLTVKAQNQGEGAYEAELIVSIPPQADFIGVVRNNEALARLSCAFKTENQTRQVVCDLGNPMKAGTQLLAGLRFSVHQQSEMDTSVKFDLKIQSSNSFDNVSPVVSYKVDLAVLAAVEIRGVSSPDHIFLPIPNWEYKENPETEEDVGPIVQHIYELRNNGPSSFSKAILNLQWPYKYNNNTLLYILHYDIDGPMNCTADTEINPLRIKTPEKNDTAAAGQGERNHLITKRDLTLREGDVHTLGCGIAKCLQITCQVGRLDRGKSAILYVKSLLWTETFMNKENQNHSYSLKSSASFNIIEFPYKNLPIEDLFNSTLVTTNITWGIQPAPMPVPVWVIILAVLAGLLLLAVLVFVMYRMGFFKRVRPPQEEQEREQLQPHENGEGNSET",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P43406"},
		"label":"itav_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9301998"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"O54890"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"29799506",
				"name":"itgav binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["6860249"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P43406"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"6860249",
				"name":"itbg3 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["29799506"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MRTWACLLLLGCGYLAHALAEEAEIPRELIERLARSQIHSIRDLQRLLEIDSVGAEDALETSLRAHGSHAINHVPEKRPVPIRRKRSIEEAVPAVCKTRTVIYEIPRSQVDPTSANFLIWPPCVEVKRCTGCCNTSSVKCQPSRVHHRSVKVAKVEYVRKKPKLKEVQVRLEEHLECACATSNLNPDHREEETGRRRESGKNRKRKRLKPT",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P20033"},
		"label":"pdgfa_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9097382"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P20033"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"7182422",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["83-184"],
				"InterPro":"IPR000072"
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P20033"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19676281",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["83-184"],
				"InterPro":"IPR000072"
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGTSHQVFLVLSCLLTGPGLISCQLLLPSILPNENEKIVQLNSSFSLRCVGESEVSWQHPMSEEDDPNVEIRSEENNSGLFVTVLEVVNASAAHTGWYTCYYNHTQTDESEIEGRHIYIYVPDPDMAFVPLGMTDSLVIVEEDDSAIIPCRTTDPETQVTLHNNGRLVPASYDSRQGFNGTFSVGPYICEATVKGRTFKTSEFNVYALKATSELNLEMDARQTVYKAGETIVVTCAVFNNEVVDLQWTYPGEVRNKGITMLEEIKLPSIKLVYTLTVPKATVKDSGEYECAARQATKEVKEMKRVTISVHEKGFVEIEPTFGQLEAVNLHEVREFVVEVQAYPTPRISWLKDNLTLIENLTEITTDVQKSQETRYQSKLKLIRAKEEDSGHYTIIVQNEDDVKSYTFELSTLVPASILDLVDDHHGSGGGQTVRCTAEGTPLPEIDWMICKHIKKCNNDTSWTVLASNVSNIITELPRRGRSTVEGRVSFAKVEETIAVRCLAKNNLSVVARELKLVAPTLRSELTVAAAVLVLLVIVIVSLIVLVVIWKQKPRYEIRWRVIESISPDGHEYIYVDPMQLPYDSRWEFPRDGLVLGRILGSGAFGKVVEGTAYGLSRSQPVMKVAVKMLKPTARSSEKQALMSELKIMTHLGPHLNIVNLLGACTKSGPIYIITEYCFYGDLVNYLHKNRDSFMSQHPEKPKKDLDIFGLNPADESTRSYVILSFENNGDYMDMKQADTTQYVPMLERKEVSKYSDIQRSLYDRPASYKKKSMLDSEVKNLLSDDDSEGLTLLDLLSFTYQVARGMEFLASKNCVHRDLAARNVLLAQGKIVKICDFGLARDIMHDSNYVSKGSTFLPVKWMAPESIFDNLYTTLSDVWSYGILLWEIFSLGGTPYPGMMVDSTFYNKIKSGYRMAKPDHATSEVYEIMVQCWNSEPEKRPSFYHLSEIVENLLPGQYKKSYEKIHLDFLKSDHPAVARMRVDSDNAYIGVTYKNEEDKLKDWEGGLDEQRLSADSGYIIPLPDIDPVPEEEDLGKRNRHSSQTSEESAIETGSSSSTFIKREDETIEDIDMMDDIGIDSSDLVEDSFL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P26618"},
		"label":"pgfra_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"2.7.10.1"},{"db":"intact","id":"EBI-9101372"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P26618"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"20342004",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				},
				{
				"id":"1962142",
				"name":"pdgfa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["27280202"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P20033"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27280202",
				"name":"pdgf receptor alpha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1962142"]
				},
				{
				"id":"10609247",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["83-184"],
				"InterPro":"IPR000072"
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MNRCWALFLPLCCYLRLVSAEGDPIPEELYEMLSDHSIRSFDDLQRLLHRDSVDEDGAELDLNMTRAHSGVELESSSRGRRSLGSLAAAEPAVIAECKTRTEVFQISRNLIDRTNANFLVWPPCVEVQRCSGCCNNRNVQCRASQVQMRPVQVRKIEIVRKKPIFKKATVTLEDHLACKCETIVTPRPVTRSPGTSREQRAKTPQARVTIRTVRIRRPPKGKHRKFKHTHDKAALKETLGA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P31240"},
		"label":"pdgfb_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9101483"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P20033"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"1368804",
				"name":"pdgfb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["20703706"],
				"InterPro":"IPR000072"
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P31240"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"20703706",
				"name":"pdgfa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1368804"],
				"InterPro":"IPR000072"
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"chembl","id":"CHEMBL2096980"},{"db":"intenz","id":"2.7.10.1"},{"db":"intact","id":"EBI-9101638"}],
		"expansion":{"id":"33","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P26618"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"7735992",
				"name":"pdgf receptor beta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["28960641"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P31240"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"916052",
				"name":"pdgfa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["28158216"],
				"InterPro":"IPR000072"
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"chembl","id":"CHEMBL2096980"},{"db":"intenz","id":"2.7.10.1"},{"db":"intact","id":"EBI-9101638"}],
		"expansion":{"id":"33","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P26618"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"7735992",
				"name":"pdgf receptor beta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["28960641"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P20033"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"28158216",
				"name":"pdgfb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["916052"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGLPGVIPALVLRGQLLLSVLWLLGPQTSRGLVITPPGPEFVLNISSTFVLTCSGSAPVMWEQMSQVPWQEAAMNQDGTFSSVLTLTNVTGGDTGEYFCVYNNSLGPELSERKRIYIFVPDPTMGFLPMDSEDLFIFVTDVTETTIPCRVTDPQLEVTLHEKKVDIPLHVPYDHQRGFTGTFEDKTYICKTTIGDREVDSDTYYVYSLQVSSINVSVNAVQTVVRQGESITIRCIVMGNDVVNFQWTYPRMKSGRLVEPVTDYLFGVPSRIGSILHIPTAELSDSGTYTCNVSVSVNDHGDEKAINISVIENGYVRLLETLGDVEIAELHRSRTLRVVFEAYPMPSVLWLKDNRTLGDSGAGELVLSTRNMSETRYVSELILVRVKVSEAGYYTMRAFHEDDEVQLSFKLQVNVPVRVLELSESHPANGEQTIRCRGRGMPQPNVTWSTCRDLKRCPRKLSPTPLGNSSKEESQLETNVTFWEEDQEYEVVSTLRLRHVDQPLSVRCMLQNSMGGDSQEVTVVPHSLPFKVVVISAILALVVLTVISLIILIMLWQKKPRYEIRWKVIESVSSDGHEYIYVDPVQLPYDSTWELPRDQLVLGRTLGSGAFGQVVEATAHGLSHSQATMKVAVKMLKSTARSSEKQALMSELKIMSHLGPHLNVVNLLGACTKGGPIYIITEYCRYGDLVDYLHRNKHTFLQRHSNKHCPPSAELYSNALPVGFSLPSHLNLTGESDGGYMDMSKDESIDYVPMLDMKGDIKYADIESPSYMAPYDNYVPSAPERTYRATLINDSPVLSYTDLVGFSYQVANGMDFLASKNCVHRDLAARNVLICEGKLVKICDFGLARDIMRDSNYISKGSTYLPLKWMAPESIFNSLYTTLSDVWSFGILLWEIFTLGGTPYPELPMNDQFYNAIKRGYRMAQPAHASDEIYEIMQKCWEEKFETRPPFSQLVLLLERLLGEGYKKKYQQVDEEFLRSDHPAILRSQARFPGIHSLRSPLDTSSVLYTAVQPNESDNDYIIPLPDPKPDVADEGLPEGSPSLASSTLNEVNTSSTISCDSPLELQEEPQQAEPEAQLEQPQDSGCPGPLAEAEDSFL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P05622"},
		"label":"pgfrb_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"chembl","id":"CHEMBL2096980"},{"db":"intenz","id":"2.7.10.1"},{"db":"intact","id":"EBI-9101638"}],
		"expansion":{"id":"33","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P26618"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"7735992",
				"name":"pdgf receptor beta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["28960641"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P05622"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"28960641",
				"name":"pdgf receptor alpha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["7735992"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLLLGLLLLTSALAGQRTGTRAESNLSSKLQLSSDKEQNGVQDPRHERVVTISGNGSIHSPKFPHTYPRNMVLVWRLVAVDENVRIQLTFDERFGLEDPEDDICKYDFVEVEEPSDGSVLGRWCGSGTVPGKQTSKGNHIRIRFVSDEYFPSEPGFCIHYSIIMPQVTETTSPSVLPPSSLSLDLLNNAVTAFSTLEELIRYLEPDRWQVDLDSLYKPTWQLLGKAFLYGKKSKVVNLNLLKEEVKLYSCTPRNFSVSIREELKRTDTIFWPGCLLVKRCGGNCACCLHNCNECQCVPRKVTKKYHEVLQLRPKTGVKGLHKSLTDVALEHHEECDCVCRGNAGG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q8CI19"},
		"label":"pdgfc_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"chembl","id":"CHEMBL2096980"},{"db":"intenz","id":"2.7.10.1"},{"db":"intact","id":"EBI-9102348"}],
		"expansion":{"id":"34","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P26618"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"3428129",
				"name":"pdgf receptor beta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["3614364"]
				},
				{
				"id":"13110400",
				"name":"pdgfc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["28103682"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q8CI19"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26412155",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["249-342"],
				"InterPro":"IPR000072"
				},
				{
				"id":"28103682",
				"name":"pdgf receptor alpha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["249-342"],
				"linkedFeatures":["13110400"],
				"InterPro":"IPR000072"
				},
				{
				"id":"17508626",
				"name":"pdgf receptor beta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["249-342"],
				"linkedFeatures":["28668363"],
				"InterPro":"IPR000072"
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"chembl","id":"CHEMBL2096980"},{"db":"intenz","id":"2.7.10.1"},{"db":"intact","id":"EBI-9102348"}],
		"expansion":{"id":"34","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P26618"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"3428129",
				"name":"pdgf receptor beta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["3614364"]
				},
				{
				"id":"13110400",
				"name":"pdgfc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["28103682"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P05622"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"28668363",
				"name":"pdgfc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["17508626"]
				},
				{
				"id":"3614364",
				"name":"pdgf receptor alpha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["3428129"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MQRLVLVSILLCANFSCYPDTFATPQRASIKALRNANLRRDESNHLTDLYQREENIQVTSNGHVQSPRFPNSYPRNLLLTWWLRSQEKTRIQLSFDHQFGLEEAENDICRYDFVEVEEVSESSTVVRGRWCGHKEIPPRITSRTNQIKITFKSDDYFVAKPGFKIYYSFVEDFQPEAASETNWESVTSSFSGVSYHSPSITDPTLTADALDKTVAEFDTVEDLLKHFNPVSWQDDLENLYLDTPHYRGRSYHDRKSKVDLDRLNDDVKRYSCTPRNHSVNLREELKLTNAVFFPRCLLVQRCGGNCGCGTVNWKSCTCSSGKTVKKYHEVLKFEPGHFKRRGKAKNMALVDIQLDHHERCDCICSSRPPR",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q925I7"},
		"label":"pdgfd_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9102520"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q925I7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"21091491",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q925I7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"15674481",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9101752"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P31240"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"5157182",
				"name":"dimerisation domain",
				"type":{"id":"MI:1125","name":"direct binding region"},
				"sequenceData":["83-182"],
				"InterPro":"IPR000072"
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P31240"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"5675027",
				"name":"dimerisation domain",
				"type":{"id":"MI:1125","name":"direct binding region"},
				"sequenceData":["83-182"],
				"InterPro":"IPR000072"
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"2.7.10.1"},{"db":"intact","id":"EBI-9101780"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P26618"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"18484665",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				},
				{
				"id":"24834394",
				"name":"pdgfb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["8082080"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P31240"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"8082080",
				"name":"pdgf receptor alpha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["24834394"]
				},
				{
				"id":"7178149",
				"name":"dimerisation domain",
				"type":{"id":"MI:1125","name":"direct binding region"},
				"sequenceData":["84-185"],
				"InterPro":"IPR000072"
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9102013"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q8CI19"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"14981702",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["249-342"],
				"InterPro":"IPR000072"
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q8CI19"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"5019458",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["249-342"],
				"InterPro":"IPR000072"
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"chembl","id":"CHEMBL2096980"},{"db":"intact","id":"EBI-9102562"},{"db":"intenz","id":"2.7.10.1"}],
		"expansion":{"id":"35","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P26618"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"6189647",
				"name":"pdgf receptor beta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["10670057"]
				},
				{
				"id":"16771352",
				"name":"pdgfd binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["18897525"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P05622"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"10670057",
				"name":"pdgf receptor alpha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["6189647"]
				},
				{
				"id":"18016022",
				"name":"pdgfd binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["103020"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"chembl","id":"CHEMBL2096980"},{"db":"intact","id":"EBI-9102562"},{"db":"intenz","id":"2.7.10.1"}],
		"expansion":{"id":"35","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P26618"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"6189647",
				"name":"pdgf receptor beta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["10670057"]
				},
				{
				"id":"16771352",
				"name":"pdgfd binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["18897525"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q925I7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"20197127",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				},
				{
				"id":"103020",
				"name":"pdgf receptor beta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["18016022"]
				},
				{
				"id":"18897525",
				"name":"pdgf receptor alpha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["16771352"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MRLPGAMPALALKGELLLLSLLLLLEPQISQGLVVTPPGPELVLNVSSTFVLTCSGSAPVVWERMSQEPPQEMAKAQDGTFSSVLTLTNLTGLDTGEYFCTHNDSRGLETDERKRLYIFVPDPTVGFLPNDAEELFIFLTEITEITIPCRVTDPQLVVTLHEKKGDVALPVPYDHQRGFSGIFEDRSYICKTTIGDREVDSDAYYVYRLQVSSINVSVNAVQTVVRQGENITLMCIVIGNEVVNFEWTYPRKESGRLVEPVTDFLLDMPYHIRSILHIPSAELEDSGTYTCNVTESVNDHQDEKAINITVVESGYVRLLGEVGTLQFAELHRSRTLQVVFEAYPPPTVLWFKDNRTLGDSSAGEIALSTRNVSETRYVSELTLVRVKVAEAGHYTMRAFHEDAEVQLSFQLQINVPVRVLELSESHPDSGEQTVRCRGRGMPQPNIIWSACRDLKRCPRELPPTLLGNSSEEESQLETNVTYWEEEQEFEVVSTLRLQHVDRPLSVRCTLRNAVGQDTQEVIVVPHSLPFKVVVISAILALVVLTIISLIILIMLWQKKPRYEIRWKVIESVSSDGHEYIYVDPMQLPYDSTWELPRDQLVLGRTLGSGAFGQVVEATAHGLSHSQATMKVAVKMLKSTARSSEKQALMSELKIMSHLGPHLNVVNLLGACTKGGPIYIITEYCRYGDLVDYLHRNKHTFLQHHSDKRRPPSAELYSNALPVGLPLPSHVSLTGESDGGYMDMSKDESVDYVPMLDMKGDVKYADIESSNYMAPYDNYVPSAPERTCRATLINESPVLSYMDLVGFSYQVANGMEFLASKNCVHRDLAARNVLICEGKLVKICDFGLARDIMRDSNYISKGSTFLPLKWMAPESIFNSLYTTLSDVWSFGILLWEIFTLGGTPYPELPMNEQFYNAIKRGYRMAQPAHASDEIYEIMQKCWEEKFEIRPPFSQLVLLLERLLGEGYKKKYQQVDEEFLRSDHPAILRSQARLPGFHGLRSPLDTSSVLYTAVQPNEGDNDYIIPLPDPKPEVADEGPLEGSPSLASSTLNEVNTSSTISCDSPLEPQDEPEPEPQLELQVEPEPELEQLPDSGCPAPRAEAEDSFL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P09619"},
		"label":"pgfrb_human"
	},
	{
		"object":"interactor",
		"sequence":"MNRCWALFLSLCCYLRLVSAEGDPIPEELYEMLSDHSIRSFDDLQRLLHGDPGEEDGAELDLNMTRSHSGGELESLARGRRSLGSLTIAEPAMIAECKTRTEVFEISRRLIDRTNANFLVWPPCVEVQRCSGCCNNRNVQCRPTQVQLRPVQVRKIEIVRKKPIFKKATVTLEDHLACKCETVAAARPVTRSPGGSQEQRAKTPQTRVTIRTVRVRRPPKGKHRKFKHTHDKTALKETLGA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P01127"},
		"label":"pdgfb_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.7.10.1"},{"db":"intact","id":"EBI-9101697"}],
		"expansion":{"id":"36","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P09619"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"16495816",
				"name":"pdgfa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-529"],
				"linkedFeatures":["18476638"]
				},
				{
				"id":"24141282",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				},
				{
				"id":"2344998",
				"name":"pdgfb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-529"],
				"linkedFeatures":["19479812"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P01127"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19479812",
				"name":"pdgf receptor beta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["2344998"]
				},
				{
				"id":"6607412",
				"name":"pdgfa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["19165663"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MRTLACLLLLGCGYLAHVLAEEAEIPREVIERLARSQIHSIRDLQRLLEIDSVGSEDSLDTSLRAHGVHATKHVPEKRPLPIRRKRSIEEAVPAVCKTRTVIYEIPRSQVDPTSANFLIWPPCVEVKRCTGCCNTSSVKCQPSRVHHRSVKVAKVEYVRKKPKLKEVQVRLEEHLECACATTSLNPDYREEDTGRPRESGKKRKRKRLKPT",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P04085"},
		"label":"pdgfa_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.7.10.1"},{"db":"intact","id":"EBI-9101697"}],
		"expansion":{"id":"36","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P09619"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"16495816",
				"name":"pdgfa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-529"],
				"linkedFeatures":["18476638"]
				},
				{
				"id":"24141282",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				},
				{
				"id":"2344998",
				"name":"pdgfb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-529"],
				"linkedFeatures":["19479812"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P04085"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19165663",
				"name":"pdgfb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["6607412"]
				},
				{
				"id":"18476638",
				"name":"pdgf receptor beta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["16495816"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"omim","id":"607685"},{"db":"omim","id":"607907"},{"db":"omim","id":"607174"},{"db":"intact","id":"EBI-9101587"},{"db":"intenz","id":"2.7.10.1"},{"db":"omim","id":"606764"},{"db":"reactome","id":"REACT_17393.1"},{"db":"omim","id":"615483"},{"db":"reactome","id":"REACT_17261.1"}],
		"expansion":{"id":"37","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P26618"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"28311725",
				"name":"pdgfb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["33326778"]
				},
				{
				"id":"32584677",
				"name":"pdgfa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["8792163"]
				},
				{
				"id":"29732644",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P20033"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"23951061",
				"name":"pdgfb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["26516930"]
				},
				{
				"id":"8792163",
				"name":"pdgf receptor alpha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["32584677"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"omim","id":"607685"},{"db":"omim","id":"607907"},{"db":"omim","id":"607174"},{"db":"intact","id":"EBI-9101587"},{"db":"intenz","id":"2.7.10.1"},{"db":"omim","id":"606764"},{"db":"reactome","id":"REACT_17393.1"},{"db":"omim","id":"615483"},{"db":"reactome","id":"REACT_17261.1"}],
		"expansion":{"id":"37","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P26618"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"28311725",
				"name":"pdgfb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["33326778"]
				},
				{
				"id":"32584677",
				"name":"pdgfa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["8792163"]
				},
				{
				"id":"29732644",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P31240"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26516930",
				"name":"pdgfa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["23951061"]
				},
				{
				"id":"33326778",
				"name":"pdgf receptor alpha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["28311725"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"2.7.10.1"},{"db":"intact","id":"EBI-9102604"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q925I7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"81357",
				"name":"pdgf receptor beta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["25204788"]
				},
				{
				"id":"25728585",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P05622"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"25204788",
				"name":"pdgfd binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["81357"]
				},
				{
				"id":"4367576",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"2.7.10.1"},{"db":"intact","id":"EBI-9102398"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P05622"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22319162",
				"name":"pdgfc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["13163994"]
				},
				{
				"id":"22887064",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q8CI19"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"13163994",
				"name":"pdgf receptor beta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["249-342"],
				"linkedFeatures":["22319162"],
				"InterPro":"IPR000072"
				},
				{
				"id":"28433699",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["249-342"],
				"InterPro":"IPR000072"
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"2.7.10.1"},{"db":"intact","id":"EBI-9102313"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P26618"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"2972427",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				},
				{
				"id":"28589472",
				"name":"pdgfc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["3803018"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q8CI19"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"3803018",
				"name":"pdgf receptor alpha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["249-342"],
				"linkedFeatures":["28589472"],
				"InterPro":"IPR000072"
				},
				{
				"id":"29688704",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["249-342"],
				"InterPro":"IPR000072"
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"2.7.10.1"},{"db":"intact","id":"EBI-9101926"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P31240"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"23649247",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["84-185"],
				"InterPro":"IPR000072"
				},
				{
				"id":"20652726",
				"name":"pdgf receptor beta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["23325899"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P05622"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"23325899",
				"name":"pdgfb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["20652726"]
				},
				{
				"id":"21972163",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"chembl","id":"CHEMBL2096980"},{"db":"intact","id":"EBI-9101838"},{"db":"intenz","id":"2.7.10.1"}],
		"expansion":{"id":"38","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P26618"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19635309",
				"name":"pdgfb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["2808462"]
				},
				{
				"id":"24302594",
				"name":"pdgf receptor beta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["29158597"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P31240"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"6064848",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["84-185"],
				"InterPro":"IPR000072"
				},
				{
				"id":"2808462",
				"name":"pdgf receptor alpha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["19635309"]
				},
				{
				"id":"27106418",
				"name":"pdgf receptor beta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["9054778"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"chembl","id":"CHEMBL2096980"},{"db":"intact","id":"EBI-9101838"},{"db":"intenz","id":"2.7.10.1"}],
		"expansion":{"id":"38","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P26618"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19635309",
				"name":"pdgfb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["2808462"]
				},
				{
				"id":"24302594",
				"name":"pdgf receptor beta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["29158597"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P05622"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"9054778",
				"name":"pdgfb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["27106418"]
				},
				{
				"id":"29158597",
				"name":"pdgf receptor alpha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["24302594"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MPSYLTRQKTRQTFSWVGRPLPNRKQFQQMYREICMKINDGSEIHIKVGQFVLIQGEDNKKPYVAKLIELFQNGAEVPPKKCARVQWFVRFLEIPVSKRHLLGRSPPAQEIFWYDCSDWDNKINVETIIGPVQVVALAPEEVIPVDQKSEETLFVKLSWNKKDFAPLPPEVLAALREQEDSPEWQKPLKAKIKNVKSPARNTTEQEVKGIKSNHSTSKFHQTPANIVIPNAKKSLELDGLGFTRKPNTRWSKKSSCDSLDYQKTSKRRAAFSETTSPPKKPNKPREIKPSSALETRVKNGQTQPFCAKSSVVLRARNPAMTTTKLGVDNTLSPIRNGLRSSVVPSGGLTPVYIRRKAKEQETHKEPIRTSRVHRKSSLLTLKRIRQQLCLLDGDDRDQEEEESVDSESEEEDEFISSLPTRNSLGQSRTRQTPSKSPQKNPKPRTPHRATPQIRDRNLAVQEPASALEEARLRLHVSAVPDSLPCREQEFQDIYSFVESKLLDGTGGCMYISGVPGTGKTATVHEVIRCLQQAAETDDVPPFQYVEVNGMKLTEPHQVYVQILKKLTGQKATANHAAELLAKQFCGQGSQKETTVLLVDELDLLWTHKQDVMYNLFDWPTHKGAHLIVLTIANTMDLPERIMMNRVSSRLGLTRMSFQPYSHSQLKQILVSRLRNLRAFEDDAIQLVARKVAALSGDARRCLDICRRATEICELSHLRGDSLSLVTVAHLMEAIDEMFSSSYITAIKNSSVVEQSFLRAIIAEFRRSGLEEATFQQIYSQHVALCRMEGLPYPTMSETMAVCSRLGSCRLLLVEPSRNDLLLRVRLNVSQNDVLFALKEE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9Z1N2"},
		"label":"orc1_mouse"
	},
	{
		"object":"interactor",
		"sequence":"MSHLESMVLCREAQVSTLQSLFGERHHFSFPSIFIYGHTASGKTYVTQTLLKTLELPHAFVNCVECFTSRLLLEQILNKLSHLNSSDAGCSTEMTCETFNDFVQLFKQVTSAEHLKDQTVYIVLDKAEYLRDMEANLLPGLLRLQELTDRNVTVIFLSEIIWEKFRPNTGCFEPFVLYFPDYSIGNLQKILSHDHPPEYSADFYAAYINILLGVFYTVCRDLKELRHLAVLNFPKYCEPVVKGEAGERDTRKLWRNIEPHLKKAMQTVYLREISSSQWEKLQKDNTDPGQLKGLSAYTHMELPYYSKFILIAAYLASYNPARTDKRFFLKHHGKIKKTNFLKKHEKTSNHLLGPKPFPLDRLLAILYSIVDSRVAPTANIFSQITSLVTLQLLTIVGHEDQLNGPKYKCTVSLDFIRAIARMVNFDIIKYLYDFL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9WUV0"},
		"label":"orc5_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6171350"}],
		"expansion":{"id":"39","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Z1N2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9WUV0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MHTGPRTMATSSVSKGCFVFKPDFKKRKVFVPIEDYFNNEELDSEDSKLRFETYSLLWQRMKSETEQLQEELNENLFDNLVDFLQKSHPEFQKNSRDWGSQMKFREIPTAALILGVNVTDHDVILRSLTETLQNNVTPYVVSLQAKDCPDVKHFLQKFTSQLMDCCVDRHSKEVTSGKALKKTNYSMDSLCSWYSAVTQKADHKVTIKKRTASGHWRSPPVVLILKSMESFTSKVLQDFITISSQHLHEFPLILIFGIATSPVIIHRLLPHSVSSLLCVELFQSLSCEQHLTVVLDKLLLTPQFPFKLSKKALQVLTNIFLYHDFSIQSFIKGIKLSLLEHFYSQPLSVLCCDLSEAKKRVNVFSVSQCENIRRLPSFRRYVENQPLGKQVALLTNETFLKEKTQSLLEDLHVYHINYFLVLRCLHNFTSSLPKYPLGRQIRELYCTCLEKKIWDSEEYKSALQLLRMLAKDELVSILQRCIEVLDSSTEKQLGNTTQKIKDFLTQFQNLDADSKEEEDACGSQPKGLQKTDLYHLQKSLLEMKELRRTKKPTKFEMLRENVMNFIDNLVRDYLLPPESQPLHEVVYFSAANTLREHLNAAPRIALHTALNNPYYYLKNEELEGCIPNTAPDICIAYKLHLECSLLINLVDWAEAFATVVTAAEKMDANSTVSEEMSEVIHARFIRAVSELELLGFIKPTKQKTDHVARLTWGGC",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9JK30"},
		"label":"orc3_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6171350"}],
		"expansion":{"id":"39","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Z1N2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9JK30"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSTLQLKETKVPSVQFVGDDDVLSHILDREGGTKLKKEKAQLLVNPQKVIKKADCELEKSDLEVLEDQNYVKVLGRNIQESLGNGSAKDGRNKVYSFQQRKHPEEMTKLALELAKTSGKKDPLDSNDPEITKNIAQKSKGHSTSEKAPLVNNNKTEFLSTQPHNLRKRIIASRSHYDSESEYSASSSEDDEEATKDEEEDTNVARLSQKSQGQNRLLPAPVSKETLPKKKKRDKASDLVEEYFEAHSSSKVLTSDRTLQRLRRARVDQKTLHNLLRKFVPSFSAEIERLNQQHEKLFHKWMLQLHLGFNIVLYGLGSKRDLLEKFRTTMLQDSIHVVINGYFPGVSVKSILNSITEDVLSHVGTFQSVLDQRDWIINRFKEDSSLELFLLIHNLDSQMLRGDNSQQILGQLSSLHNVYLIASIDHLNAPLMWDHAKQSLYNWLWYETTTYSPYTEETSYENSLLVKQSGSLPLSSLIHVLRSLTPNARGIFRLLMKFQLDNQDSPSYIGLSFQDFYQQCREAFLVNSDLTLRAQLTEFRDHKLIRTKKGTDGVEYLLIPVDSGILADFLEKEEEEA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q60862"},
		"label":"orc2_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6171350"}],
		"expansion":{"id":"39","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Z1N2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q60862"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSSRKTKSNAHAECLSQVQRILRERFCHHSPHSNLFGVQVQYKHLIELLKRTAIYGESNSVLIVGPRGSGKTTLLNHALKELMEIEVSENVIQVHLNGLLQTNEKIALKEITRQLNLDNVVEDKVFGSFAENLSFLLEALQKGDRTSSCPVIFILDEFDIFAHQKNQTLLYNLFDISQSAQTPVAVIGLTCRLDILELLEKRVKSRFSHRQIHLMNSFDFPQYLKIFKEQLSLPAEFPDKAFAERWNENVHCLSEDSTVLEVLQKHFSVNKNLQSLHMLLMLALNRVTVSHPFMTSADLMEAQHMCSLDSKANIVHGLSVLEICLIIAMKHLNDIYEEEPFNFQMVYNEFQKFIQRKAHSVYNFEKPVVMKAFEHLQQLELIKPVERTSVNSQREYQLVKLLLDNTQIMNALQKYSNCPTDVRQWATSSLSWL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"O88708"},
		"label":"orc4_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6171350"}],
		"expansion":{"id":"39","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Z1N2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O88708"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MESELVRRLAPRLGLAEPSVLRKAEEFLRLSKVKCVSLSARSSETSNAVICLDLAASCRKCPLDRAYLIRLSGLNKMMYQSCLKSFECLLGLNSNVGIRDLAVQFSCTEAVNLAAEILQSYKSGLPETQRADLDLSRPLFTTAALLSACKILKIKVDKTKMITTSGVKKAILDRLCKQLEKIGQQINRDSADLARPALKRKKPEFSPTLKKKEPGLEPPAKEIEVIETLHKLPKDEDLTQDYEEWKRKILENAAKAQTATAE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9WUJ8"},
		"label":"orc6_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6171350"}],
		"expansion":{"id":"39","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Z1N2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9WUJ8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLLPVFTLKLRHKISPRMVAIGRYDGTHPCLAAATQAGKVFIHNPHTRSQHFSASRVFQSPLESDVSLLNINQTVSCLGSGVLNPELGYDTLLVGTQTSLLAYDIYNNSDLFYREVSDGANAIVLGTLGDIAPPLAIIGGNCALQGFDHEGNDLFWTVTGDNVHSLALCDFDGDGKTELLVGSEDFDIRVFKEDEIVAEMTETEIVTSLCPMYGSRFGYALSNGTVGVYDKTARYWRIKSKNHAMSIHAFDINSDGVCELITGWSNGKVDARSDRTGEVIFKDNFSSAVAGVVEGDYRMDGHVQLICCSVDGEIRGYLPGTAEMKGNLLDTSVEQDLIRELSQKKQNLLLELRNYEESTKAELSSPLNEADGQKGIIPANTRLHTALSVNMGNDLQDAHAELGISTSNDTIIRAVLIFAEGIFVGESHVVHPSIHNLSSSLRVPITPPKDVPVDLHLKTFVGYRSSTQFHVFELTRQLPRFTMYALTSPDAASEPVSYVNFSVAERTQRMVTWLNQNFLLPEDSNVQNSPFHVCFTSLRNGGQLYIKMKQSGEITVNTDDIDLAGDIIQSIASFFAIEDLQVEADFPVYFEELRKVLVKVDEYHSVHQKLSADMADNSNLIRSLLVRAEDARLMRDMKTMKSRYMELYDLNKDLLNGYKIRCNNHTELLGNLKAVNQAIQRAGRLRVGKPKNQVISACRDAIRSNNINTLFRIMRVGTAPS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9CWF6"},
		"label":"bbs2_mouse"
	},
	{
		"object":"interactor",
		"sequence":"MGSEMEPLLRAWSYFRRRKFQLCADLCTQMLEKSPYDQEPAPDLPVSQAAWILKARALTEMVYIDEIDVDQEGIAEMILDENAIAQVPRPGTSLKLPGTNQTGGPTQAVRPITQAGRPITGFLRPSTQSGRPGTMEQAIRTPRTAYTARPITSSSGRFVRLGTASMLTSPDGPFINLSRLNLTKYSQKPKLAKALFEYILHHENDVKMALDLASLSTEYSQYKDWWWKVQIGKCYYRLGMYREAEKQFKSALKQQEMVDTFLYLAKVYIILDQPVTALNLFKQGLDKFPGEVTLLCGIARIYEEMNNSSSAAEYYKEVLKQDNTHVEAIACIGSNHFYSDQPEVALRFYRRLLQMGVYNCQLFNNLGLCCFYAQQYDMTLTSFERALSLAENEEEAADVWYNLGHIAVGIGDTNLAHQCFRLALVHNNHHAEAYNNLAVLEMRKGHVEQARALLQTASSLAPHMYEPHFNFATVSDKIGDLQRSYVAAQKSEVAFPEHVDTQHLIKQLKQHFAML",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q8VD72"},
		"label":"ttc8_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6140449"}],
		"expansion":{"id":"40","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9CWF6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q8VD72"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSLFKARDWWSTVLGEKEEFDQGCLCLADVDNSGNGHDKIIVGSFMGYLRIFSPHSVKAGGGPQAEDLLLEVHLRDPVLQVEVGKFVSGTEMLHLAVLHSRKLCVYSVSGTLGNVEHGNQYQIKLMYEHHLQRTACNMTYGPFGGVKGRDLICIQSLDGMLMVFEQESYAFGRFLPGFLLPGPLAYSPRTDSFITVSSCRQVESYKYQVLAFATDADKKQEMEQQKLGSGKRLVVDWTLNIGEQALDICIFPLNQSASSVFVLGERNFFCLKDNGQIRFMKKLGYNPSCFLPYCSVSEGTINTLIGNHNHMLHIYQDVTLKWATQLPHVPVAVRVGCFHDLKGVIVTLSDDGHLQCSYLGTDPSLFQAPKVESRELNYDELDVELKELQKIIKDVKLQGVWPLTEQEDDLKVSASVSSTLDSVSQATNVEPGADSVPSITVKITLQNRVVLQKVKLSIYVQPPLQLTCDQFTFDFTVPDMTSSVAFSVYLKRNYTPSELEGNAVVSYSRPTDRNPDGIPRVVQCKFRLPLKLICLPGQPSKTASHKLTIDTNKSPVSLLGLFPDFANPSDDDQVNVMGFRLLGGARVTLLASRTSQRYRIQSEQFEDLWLITNELILRLQEHFEKQGTKDFSCSFSGCVPLQEYFELIDHHFELRINGKKLEELLSERAVQFRAIQRRLLTRFRDKTPAPLQHLDTLLDGTYKQVIALADAIEENQDRLLQSFSGLKSATHLLILLIRLWQRLSADQTAILEAAFLPLQEDTQELGWEETVDAAIAYLLKTCLSKSSKEQALNLSSQLNIPKDTSRLKKHITLLCDRLAKGGRLCVSTDAAAPQAMVVPGGCTPIPESDLEERSLDDSTELFTNHKHLMTEPPMPEVSARQGVLE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q811G0"},
		"label":"pthb1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6140449"}],
		"expansion":{"id":"40","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9CWF6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q811G0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDLTLSRADYLQVGVTSQKTMKLLPTSRQRATQKVVVGDQDGVVICFGVKKGEAVPVFKTLPGQKISRLELGGAVNTPQEKIFIAAGSEIRGFTKRGKQFLSFETNLTESIKAMYISGSDLFLSASYIYNHYCDCKDQNYYLSGDKINDVICLPVEKLSRVTPVLACQDRVLRVLQGSDVMYEIEVPGPPTVLALHNGDGGDSGEGLLFGTSDGRLGLIQITTSKPIHKWEIRNDKKRGGILCVDSFDIMGDGVKDLLVGRDDGMVEVYSFENANEPVLRFDQMLSESVTSIQGGCVGKDGYDEIVLATYSGWVTGLTTEPTHKESGPGEELKLNQEMQNKISSLRSEIEHLQFKVLQERENYQQSSQSSQAKSTVPSFSINDKFTLNKEDASYSLVLEVRTAIDNVLIQSDVPIDLLDVDKNSAVVSFSSCDTESNDNFLLATYRCQANTTRLELKIRSIEGQYGTLQAYVTPRIQPKTCQVRQYHIKPLSLHQRTHFIDHDRPMNTLTLTGQFSFAEVHSWVVFCLPEVPEKPPAGECATFYFQNTFLDTQLECVYRKGEGVFKSDNISTISILKDVLSKEATKRKINLNISYEINEVSVKHTLKLIHPKLEYQLLLAKKVQLIDALKELQVHEGNTDFLTPEYRCILEEADHLQEEYKKQPAHLERLYGMITDLFIDKFKFKGTNVKTKVPMLLEILDSYDQNTLISFFDAA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q8K2G4"},
		"label":"bbs7_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6140449"}],
		"expansion":{"id":"40","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9CWF6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q8K2G4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAEVKLGMKTQVPASVESQKPRSKKAPDFPIVEKQNWLIHLHYIRKDYEACKAVIKEQLQETQGLCEYAIYVQALIFRLEGNIQESLELFQTCAVLSPQCADNLKQVARSLFLLGKHKAATEVYNEAAKLNQKDWEICHNLGVCYTYLKQFNKAQDQLHSALQLNKHDLTYIMLGKIHLLQGDLDKAIEIYKKAVEFSPENTELLTTLGLLYLQLGVYQKAFEHLGNALTYDPANYKAILAAGSMMQTHGDFDVALTKYRVVACAIPESPPLWNNIGMCFFGKKKYVAAISCLKRANYLAPFDWKILYNLGLVHLTMQQYASAFHFLSAAINFQPKMGELYMLLAVALTNLEDIENARRAYVEAVRLDKCNPLVNLNYAVLLYNQGEKKSALAQYQEMEKKVNFLKDNSPLEFDSEMVEMAQKLGAALQVGEALVWTKPVKDPKTKHRTNSGSKSATLQQPLGSIQALGQAMSSAAAYRKILSGAVGAQLPKPPSLPLEPEPEPTVEASPTEASEQKKEK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q8C1Z7"},
		"label":"bbs4_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6140449"}],
		"expansion":{"id":"40","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9CWF6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q8C1Z7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSVLDVLWEDRDVRFDVSSQQMKTRPGEVLIDCLDSIEDTKGNNGDRGRLLVTNLRIIWHSLALPRVNLSIGYNCILNITTRTANSKLRGQTEALYILTKCNTTRFEFIFTNLVPGSPRLFTSVIAVHRAYETSKMYRDFKLRSAVIQNKQLRLLPQEHVYDKINGVWNLSSDQGNLGTFFITNVRIVWHANMNDSFNVSIPYLQIRSIKIRDSKFGLALVIESSQQSGGYVLGFKIDPVEKLQESVKEINSLHKVYSASPIFGVNYEMEEKPQPLEALTVEQIQDDVEIDSDDHTDAFVAYFADGNKQQDREPVFSEELGLAIEKLKDGFTLQGLWEVMS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9CZQ9"},
		"label":"bbs5_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6140449"}],
		"expansion":{"id":"40","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9CWF6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9CZQ9"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAAASSSDSDSGRAESNEANSKWLDAHYDPMANIHTFSSCLSLADLHGDGEYKLVVGDLGPGGQQPRLKVLKGPTVLTESPLPALPASAATFLMDQHEPRTPALALASGPCVYVYKNLRPYFKFSLPQLPPNPLEQDVWNQAKEDQIDPLTLKEMLEDIREKADVPLSVQSLRFLQLELSEMEAFVNQHKSKVIKRQTVITTMTTLKKNLADEDAASCLVLGTESKELLVLDPEAFTILAKMSLPSVPVFLEVSGQFDVEFRLTAACRNGSIYILRRDSKHPKYCIELSAQPVGLVRVHKVLVVGSTQESLHGFTHKGKKLWTVQMPAAILTMNLLEQRSRGLQAVMAALANGEVRIYRDKALLNVIHAPDAVTSLCFGRYGREDNTLIMTTRGGGLIIKILKRTAVFVEGTGEVGPPLAQTTKLSVPRKTRLYVDQTLREREAGTAMHRTFQTDLYLLRLRAARAYVQALESSLSPMSTTAREPLKLHAVVQGLGPTFKLTLHLQNTSTARPVLGLHVCFLYNKALYALPQAFFKVPLLVPGLSYPLETFVESLSSKGISDMIKVLVLREGQSAPLLSAHINMPVSEGLAAA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q3V3N7"},
		"label":"q3v3n7_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6140449"}],
		"expansion":{"id":"40","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9CWF6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q3V3N7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDFQSCLYAIAEELGSEDLAALKFLCLDYIPHKKQETIEDAQKLFLRLREKGMLEEGNLSFLKELLFHISRWDLLVNFLDCNREEMVRELRDPDNAQISPYRVMLFKLSEEVSELELRSFKFLLNNEIPKCKLEDDLSLLEIFVEMEKRTMLAENNLETLKSICDQVNKSLLGKIEDYERSSTERRMSLEGREELPPSVLDEMSLKMAELCDSPREQDSESRTSDKVYQMKNKPRGYCLIINNHDFSKAREDITQLRKMKDRKGTDCDKEALSKTFKELHFEIVSYDDCTANEIHEILEGYQSADHKNKDCFICCILSHGDKGVVYGTDGKEASIYDLTSYFTGSKCPSLSGKPKIFFIQACQGSNFQKGVPDEAGFEQQNHTLEVDSSSHKNYIPDEADFLLGMATVKNCVSYRDPVNGTWYIQSLCQSLRERCPQGDDILSILTGVNYDVSNKDDRRNKGKQMPQPTFTLRKKLFFPP",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"O89110"},
		"label":"casp8_mouse"
	},
	{
		"object":"interactor",
		"sequence":"MDPFLVLLHSLSGSLSGNDLMELKFLCRERVSKRKLERVQSGLDLFTVLLEQNDLERGHTGLLRELLASLRRHDLLQRLDDFEAGTATAAPPGEADLQVAFDIVCDNVGRDWKRLARELKVSEAKMDGIEEKYPRSLSERVRESLKVWKNAEKKNASVAGLVKALRTCRLNLVADLVEEAQESVSKSENMSPVLRDSTVSSSETP",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q61160"},
		"label":"fadd_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6171157"}],
		"expansion":{"id":"41","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O89110"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q61160"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MQPDMSLDNIKMASSDLLEKTDLDSGGFGKVSLCYHRSHGFVILKKVYTGPNRAEYNEVLLEEGKMMHRLRHSRVVKLLGIIIEEGNYSLVMEYMEKGNLMHVLKTQIDVPLSLKGRIIVEAIEGMCYLHDKGVIHKDLKPENILVDRDFHIKIADLGVASFKTWSKLTKEKDNKQKEVSSTTKKNNGGTLYYMAPEHLNDINAKPTEKSDVYSFGIVLWAIFAKKEPYENVICTEQFVICIKSGNRPNVEEILEYCPREIISLMERCWQAIPEDRPTFLGIEEEFRPFYLSHFEEYVEEDVASLKKEYPDQSPVLQRMFSLQHDCVPLPPSRSNSEQPGSLHSSQGLQMGPVEESWFSSSPEYPQDENDRSVQAKLQEEASYHAFGIFAEKQTKPQPRQNEAYNREEERKRRVSHDPFAQQRARENIKSAGARGHSDPSTTSRGIAVQQLSWPATQTVWNNGLYNQHGFGTTGTGVWYPPNLSQMYSTYKTPVPETNIPGSTPTMPYFSGPVADDLIKYTIFNSSGIQIGNHNYMDVGLNSQPPNNTCKEESTSRHQAIFDNTTSLTDEHLNPIRENLGRQWKNCARKLGFTESQIDEIDHDYERDGLKEKVYQMLQKWLMREGTKGATVGKLAQALHQCCRIDLLNHLIRASQS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q60855"},
		"label":"ripk1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6171157"}],
		"expansion":{"id":"41","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O89110"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q60855"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLSRLLKEHQAKQNERKELQEKRRREAIAAATCLTEALVDHLNVGVAQAYMNQRKLDHEVKTLQVQAAQFAKQTGQWIGMVENFNQALKEIGDVENWARSIELDMRTIATALEYVYKGQLQSAPS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"O55102"},
		"label":"bl1s1_mouse"
	},
	{
		"object":"interactor",
		"sequence":"MEEGPAVGTLSREVSTEEAEPLGAAWSGDSGHVSQSHSSASGPWDDDGPEDAPGRDLPLLRRAASGYASSLLPSAGPRPEVEALDASLEELLAKVDEFVGMLDMIRGDSSHVVGEGVPRIHAKAAEMRRIYGRIDKLEAFVRMIGSSVARMEEQVAKAEAELGTFPRAFRRLLHTISVPALFRSAPSGPQRAAYEPPVLFRTEDHFPGCGDRPQL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q8VED2"},
		"label":"bl1s4_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6170215"}],
		"expansion":{"id":"42","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O55102"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q8VED2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLETLRERLLSVQQDFTSGLKTLSDKSREAKVKGKPRTAPRLPKYSAGLELLSRYEDAWAALHRRAKECADAGELVDSEVVMLSAHWEKKRTSLNELQGQLQQLPALLQDLESLMASLAHLETSFEEVENHLLHLEDLCGQCELERHKQAQAQHLESYKKSKRKELEAFKAELDTEHTQKALEMEHTQQLKLKERQKFFEEAFQQDMEQYLSTGYLQIAERREPMGSMSSMEVNVDVLEQMDLMDISDQEALDVFLNSGGEDNIVMSPGVEMESNPNQNEMSLQIPSPSESASQPPASPSACTDLDTADAPLIQSDEEEVQVDTALVTLHTDRKSTPGVSDDSDQCDSTQDI",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q91WZ8"},
		"label":"dtbp1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6170215"}],
		"expansion":{"id":"42","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O55102"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q91WZ8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAAAGSAAVSGAGTPVAGPTGRDLFAEGLLEFLRPAVQQLDSHVHAVRESQVELREQIDNLATELCRINEDQKVALDLDPYVKKLLNARRRVVLVNNILQNAQERLRRLNHSVAKETARRRAMLDSGVYPPGSPSK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9Z266"},
		"label":"snapn_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6170215"}],
		"expansion":{"id":"42","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O55102"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9Z266"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSVPEPPPPDGVLTGPSDSLEAGEPTPGLSDTSPDEGLIEDFPVDDRAVEHLVGGLLSHYLPDLQRSKRALQELTQNQVVLLDTLEQEISKFKECHSMLDINALFTEAKHYHAKLVTIRKEMLLLHEKTSKLKKRALKLQQKRQREELEREQQREKEFEREKQLTAKPAKRT",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9R0C0"},
		"label":"bl1s6_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6170215"}],
		"expansion":{"id":"42","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O55102"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9R0C0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MESSQGRRRRPGTVVPGEAAETDSELSASSSEEELYLGPSGPTRGRPTGLRVAGEAAETDSEPEPEPTVVPVDLPPLVVQRDPAETWGTEETPAMAPARSLLQLRLAESQTRLDHDVAAAVSGVYRRAGRDVAALAGRLAAAQATGLAAAHSVRLARGDLCALAERLDIVAGCRLLPDIRGVPGMEPEQDPGPRA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q5U5M8"},
		"label":"bl1s3_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6170215"}],
		"expansion":{"id":"42","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O55102"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q5U5M8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAAAAEGVPATRREEQPPRDDAAVETAEEAKEPAEADINELCRDMFSKMATYLTGELTATSEDYKLLENMNKLTSLKYLEMKDIAINISRNLKDLNQKYAELQPYLDQINMIEEQVAALEQAAYKLDAYSKKLEAKYKKLEKR",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9CWG9"},
		"label":"bl1s2_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6170215"}],
		"expansion":{"id":"42","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O55102"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9CWG9"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSGGGTETPVACDAAQGGKKRDSLGTPGAAHLIIKDLGEIHSRLLDHRPVTQGEIRYFVKEFEEKRGLRELRVLKNLENTIQETNECLLPKCRETMECGLGETLQRLQAANDSICRLQQREQERKKVINDYLTASEKRRLVQWEEFVSGQPQRRAEVDEEHRRAVERLREQYAAMEKDLAKFSTF",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q8R015"},
		"label":"bl1s5_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6170215"}],
		"expansion":{"id":"42","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O55102"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q8R015"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLSLRVTCLILSVASTVWTTDTEDKGEFLSEGGGVRGPRVVERHQSQCKDSDWPFCSDDDWNHKCPSGCRMKGLIDEANQDFTNRINKLKNSLFDFQRNNKDSNSLTRNIMEYLRGDFANANNFDNTYGQVSEDLRRRIEILRRKVIEKAQQIQALQSNVRAQLIDMKRLEVDIDIKIRSCKGSCSRAVNREINLQDYEGHQKQLQQVIAKELLPTKDRQYLPALKMSPVPDLVPGSFKSQLQEAPPEWKALTEMRQMRMELERPGKDGGSRGDSPGDSRGDSRGDFATRGPGSKAENPTNPGPGGSGYWRPGNSGSGSDGNRNPGTTGSDGTGDWGTGSPRPGSDSGNFRPANPNWGVFSEFGDSSSPATRKEYHTGKAVTSKGDKELLIGKEKVTSSGTSTTHRSCSKTITKTVTGPDGRREVVKEVITSDDGSDCGDATELDISHSFSGSLDELSERHPDLSGFFDNHFGLISPNFKEFGSKTHSDSDILTNIEDPSSHVPEFSSSSKTSTVKKQVTKTYKMADEAGSEAHREGETRNTKRGRARARPTRDCDDVLQTQTSGAQNGIFSIKPPGSSKVFSVYCDQETSLGGWLLIQQRMDGSLNFNRTWQDYKRGFGSLNDKGEGEFWLGNDYLHLLTLRGSVLRVELEDWAGKEAYAEYHFRVGSEAEGYALQVSSYRGTAGDALVQGSVEEGTEYTSHSNMQFSTFDRDADQWEENCAEVYGGGWWYNSCQAANLNGIYYPGGTYDPRNNSPYEIENGVVWVPFRGADYSLRAVRMKIRPLVGQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"E9PV24"},
		"label":"e9pv24_mouse"
	},
	{
		"object":"interactor",
		"sequence":"MSWSLQPPSFLLCCLLLLFSPTGLAYVATRDNCCILDERFGSFCPTTCGIADFLSSYQTDVDNDLRTLEDILFRAENRTTEAKELIKAIQVYYNPDQPPKPGMIDSATQKSKKMVEEIVKYEALLLTHETSIRYLQEIYNSNNQKITNLKQKVAQLEAQCQEPCKDSVQIHDTTGKDCQEIANKGAKESGLYFIRPLKAKQQFLVYCEIDGSGNGWTVLQKRIDGSLDFKKNWIQYKEGFGHLSPTGTTEFWLGNEKIHLISMQSTIPYALRIQLKDWNGRTSTADYAMFRVGPESDKYRLTYAYFIGGDAGDAFDGYDFGDDPSDKFFTSHNGMQFSTWDNDNDKFEGNCAEQDGSGWWMNKCHAGHLNGVYHQGGTYSKSSTTNGFDDGIIWATWKSRWYSMKETTMKIIPFNRLSIGEGQQHHMGGSKQAGDV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q8VCM7"},
		"label":"fibg_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6252644"}],
		"expansion":{"id":"43","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"E9PV24"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q8VCM7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MRHLWLLLLLCVFSVQTQAADDDYDEPTDSLDARGHRPVDRRKEEPPSLRPAPPPISGGGYRARPAKATANQKKVERRPPDAGGCLHADTDMGVLCPTGCTLQQTLLNQERPIKSSIAELNNNIQSVSDTSSVTFQYLTLLKDMWKKKQAQVKENENVINEYSSILEDQRLYIDETVNDNIPLNLRVLRSILEDLRSKIQKLESDISAQMEYCRTPCTVSCNIPVVSGKECEEIIRKGGETSEMYLIQPDTSIKPYRVYCDMKTENGGWTVIQNRQDGSVDFGRKWDPYKKGFGNIATNEDAKKYCGLPGEYWLGNDKISQLTRMGPTELLIEMEDWKGDKVKAHYGGFTVQNEASKYQVSVNKYKGTAGNALMDGASQLVGENRTMTIHNGMFFSTYDRDNDGWVTTDPRKQCSKEDGGGWWYNRCHAANPNGRYYWGGLYSWDMSKHGTDDGVVWMNWKGSWYSMRRMSMKIRPFFPQQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q8K0E8"},
		"label":"fibb_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6252644"}],
		"expansion":{"id":"43","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"E9PV24"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q8K0E8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSGIALSRLAQERKAWRKDHPFGFVAVPTKNPDGTMNLMNWECAIPGKKGTPWEGGLFKLRMLFKDDYPSSPPKCKFEPPLFHPNVYPSGTVCLSILEEDKDWRPAITIKQILLGIQELLNEPNIQDPAQAEAYTIYCQNRVEYEKRVRAQAKKFAPS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P63280"},
		"label":"ubc9_mouse"
	},
	{
		"object":"interactor",
		"sequence":"MSEEKPKEGVKTENDHINLKVAGQDGSVVQFKIKRHTPLSKLMKAYCERQGLSMRQIRFRFDGQPINETDTPAQLEMEDEDTIDVFQQQTGG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9Z172-PRO_0000035959"},
		"label":"q9z172-pro_0000035959"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 6.3.2.-"},{"db":"intact","id":"EBI-9350443"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P63280"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"14313462",
				"name":"sumo3 binding site (lys14\/cys93)",
				"type":{"id":"MI:1125","name":"direct binding region"},
				"sequenceData":["14-14","93-93"],
				"linkedFeatures":["14649219"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9Z172-PRO_0000035959"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"14649219",
				"name":"ube2i binding site (gly92)",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["92-92"],
				"linkedFeatures":["14313462"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"SDQEAKPSTEDLGDKKEGEYIKLKVIGQDSSEIHFKVKMTTHLKKLKESYCQRQGVPMNSLRFLFEGQRIADNHTPKELGMEEEDVIEVYQEQTGG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P63166-PRO_0000035941"},
		"label":"p63166-pro_0000035941"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 6.3.2.-"},{"db":"intact","id":"EBI-9350316"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P63166-PRO_0000035941"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"20569656",
				"name":"ube2i binding site (gly97)",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["96-96"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P63280"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"2907737",
				"name":"sumo1 binding site (lys14\/cys93)",
				"type":{"id":"MI:1125","name":"direct binding region"},
				"sequenceData":["14-14","93-93"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MADEKPKEGVKTENNDHINLKVAGQDGSVVQFKIKRHTPLSKLMKAYCERQGLSMRQIRFRFDGQPINETDTPAQLEMEDEDTIDVFQQQTGG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P61957-PRO_0000035951"},
		"label":"p61957-pro_0000035951"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 6.3.2.-"},{"db":"intact","id":"EBI-9350401"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P61957-PRO_0000035951"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"15083052",
				"name":"ube2i binding site (gly93)",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["93-93"],
				"linkedFeatures":["30681794"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P63280"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"30681794",
				"name":"sumo2 binding site (lys14\/cys93)",
				"type":{"id":"MI:1125","name":"direct binding region"},
				"sequenceData":["14-14","93-93"],
				"linkedFeatures":["15083052"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAACRAQPPTSEQAWLEAAQTFIQETLCPAGKEVDKELTRSVIACVKETWLSQGENQDLTLPFSYSFVSVQSLKTHQRLPCCSHLSWSQSAYQAWTRGGRPGDGVLPREQLILLGTLVDLLGDSEQECRSGSLYVRDNTGTLDCELIDLDLSWLGHLFLFPSWSYLPSAKRNSLGEGHLELWGTPVPVFPLTVSPGPLIPIPVLYPEKASHLLRYRKKSSIKEINLAGKLVHLSALIITQNKRYFIMTLGELAQAGSQVSIIVQIPAQMVWHRVLRPGRAYVLTKLQVTKTRIHLSCIWTTIPSSTLKPLRPGYVQELELDLEFSKADLKPPPQPTSSKDSRGQEGLVRASKVLHYLGTVTAVLHESAGLYILDGQLILCLAYQKIHGLRRVIRPGVCLELRDVHLLQAVGGATTKPVLALCLHGTVRLQGFSCLKPLTLPSSKVYGASLYEQLVWKCQLGLPLYLWAAKTLEDLIYKLCPHVLRCHQFLKQPSPGKPSLGLQLLAPSWDVLIPPGSPMRHAYSEILEEPHNCPLQKYTPLQTPYSFPTMLALAEEGQHRAWATFDPKAMLPLPEASHLTSCQLNRHLAWSWVCLPSCVFQPAQVLLGVLVASSRKGCLELRDLRGSLPCIPLTESSQPLIDPNLVGCLVRVEKFQLVVEREVRSSFPSWEEMGMARFIQKKQARVYVQFYLADALILPVPRPTFGSEPSQTASSCPEGPHLGQSRLFLLSHKEALMKRNFCLLPGDSSQPAKPTLSFHVSGTWLCGTQRKEGSGWSPPESLAVESKDQKVFLIFLGSSVRWFPFLYPNQVYRLVASGPSQTPVFETEGSAGTSRRPLELADCGSCLTVQEEWTLELGSSQDIPNVLEVPRTLPESSLAQLLGDNSPDSLVSFSAEILSRILCEPPLALRRMKPGNAGAIKTGVKLTVALEMDDCEYPPHLDIYIEDPQLPPQIGLLPGARVHFSQLEKRISRSNIVYCCFRSSTSVQVLSFPPETKASAPLPHIYLAELLQGDRPPFQATTSCHIVYVLSLQILWVCAHCTSICPQGKCSRRDPSCPSQRAVSQANIRLLVEDGTAEATVICRNHLVARALGLSPSEWSSILEHARGPGRVALQFTGLGGQTESASKTHEPLTLLLRTLCTSPFVLRPVKLSFALERRPTDISPREPSRLQQFQCGELPLLTRVNPRLRLVCLSLQEPELPNPPQASAASS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q5SUQ9"},
		"label":"ctc1_mouse"
	},
	{
		"object":"interactor",
		"sequence":"MPQPCLLMECESSPREEEIPPLFWGLDPVFLAFAKLYIKDILEMKESQQVPGTYFYNGHPIRRVDIMGAVISVKERETFYSYGVDDATGVINCVCWKKLSNAESSSDPAILSTARELSMTSQLKKLQETIEQKTRIGIGDIIRVRGSVRMFREEREICANIYYKVDDPVWNMQIARMLELPKLYQKVYDQPFRNPALQEEEALNNKDNLDLAGLTSLLSEKIKEFLQEKKMQSFYQQELETVESLQSLASRPVTHSTGSDQVELKDSGTSGVAQRVFKNALQLLQEKGLVFQRDSGSDKLYYVTTKDKDLQQKIYHIIKEDCQKPNHMEKGCHLLHILNCVHLNLRWDLSKAVLQRVLELLEDQSDIVSTADHYYAAF",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q8K2X3"},
		"label":"stn1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-8801947"}],
		"expansion":{"id":"44","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q5SUQ9"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"4401809",
				"name":"obfc1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["27251788"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q8K2X3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"2814571",
				"name":"ten1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["26300918"]
				},
				{
				"id":"27251788",
				"name":"ctc1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["4401809"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLPKPGVYYFPWEVSDGHVPEGSTLRTFGRLYLYDMARSLMTLAAPQKPDQCQLLVCTNLVEPFEAHVNFLYMVLGDLERMEGGAFVVRARLLTCVEGMDLSLLEKAILEQRRHLQKRQQPIGDASTLQTPTPAPQSIPSDSLSLEPENRGQQVPLPQTLD",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9D7K2"},
		"label":"ten1l_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-8801947"}],
		"expansion":{"id":"44","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q5SUQ9"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"4401809",
				"name":"obfc1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["27251788"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9D7K2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26300918",
				"name":"obfc1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["2814571"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MPYSNLHPAIPRPRGHRSKYVALIFLVASLMILWVAKDPPNHTLKYLALHLASHELGLLLKNLCCLAEELCHVQSRYQGSYWKAVRACLGCPIHCMAMILLSSYFYFLQNTADIYLSWMFGLLVLYKSLSMLLGLQSLTPAEVSAVCEEKKLNVAHGLAWSYYIGYLRLILPGLQARIRMFNQLHNNMLSGAGSRRLYILFPLDCGVPDNLSVVDPNIRFRDMLPQQNIDRAGIKNRVYSNSVYEILENGQPAGVCILEYATPLQTLFAMSQDAKAGFSREDRLEQAKLFCRTLEEILEDVPESRNNCRLIVYQEPTDGNSFSLSQEVLRHIRQEEKEEVTMNAPMTSVAPPPSVLSQEPRLLISGMDQPLPLRTDLI",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q3TBT3"},
		"label":"sting_mouse"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"organism":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
		"identifier":{"db":"chebi","id":"CHEBI:75947"},
		"label":"cg(2'5')_pa(3'5')p"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"4LOk"},{"db":"intact","id":"EBI-8801409"},{"db":"wwpdb","id":"4loj"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q3TBT3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27010476",
				"name":"dimerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["154-340"]
				},
				{
				"id":"7172158",
				"name":"co-factor binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["154-340"],
				"linkedFeatures":["14940343"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:75947"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"14940343",
				"name":"sting binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["7172158"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MATTEDDRLAGSGEGERLDFLRDRHVRFFQRCLQVLPERYSSLETSRLTIAFFALSGLDMLDSLDVVNKDDIIEWIYSLQVLPTEDRSNLSRCGFRGSSYLGIPFNPSKNPGAAHPYDSGHIAMTYTGLSCLIILGDDLGRVDKEACLAGLRALQLEDGSFCAVPEGSENDMRFVYCASCICYMLNNWSGMDMKKAISYIRRSMSYDNGLAQGAGLESHGGSTFCGIASLCLMGKLEEVFSEKELNRIKRWCIMRQQNGYHGRPNKPVDTCYSFWVGATLKLLKIFQYTNFEKNRNYILSTQDRLVGGFAKWPDSHPDALHAYFGICGLSLMEESGICKVHPALNVSTRTSERLRDLHQSWKTKDSKQCSDNVHIAT",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q8BUY9"},
		"label":"pgtb1_mouse"
	},
	{
		"object":"interactor",
		"sequence":"MAATEGVGESAAGGEPGQPEQPPPPPPPPPAQQPQEEEMAAEAGEAAASPMDDGFLSLDSPTYVLYRDRAEWADIDPVPQNDGPNPVVQIIYSEKFRDVYDYFRAVLQRDERSERAFKLTRDAIELNAANYTVWHFRRVLLRSLQKDLQEEMNYITAIIEEQPKNYQVWHHRRVLVEWLKDPSQELEFIADILSQDAKNYHAWQHRQWVIQEFRLWDNELQYVDQLLKEDVRNNSVWNQRHFVISNTTGYSDRAVLEREVQYTLEMIKLVPHNESAWNYLKGILQDRGLSRYPNLLNQLLDLQPSHSSPYLIAFLVDVYEDMLENQCDNKEDILNKALELCEILAKEKDTIRKEYWRYIGRSLQSKHCRESDIPASV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q61239"},
		"label":"fnta_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 2.5.1.59"},{"db":"intact","id":"EBI-9207304"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q8BUY9"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"14536039",
				"name":"fnta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["30948141"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q61239"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"30948141",
				"name":"pggt1b binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["14536039"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MVLSGEDKSNIKAAWGKIGGHGAEYGAEALERMFASFPTTKTYFPHFDVSHGSAQVKGHGKKVADALASAAGHLDDLPGALSALSDLHAHKLRVDPVNFKLLSHCLLVTLASHHPADFTPAVHASLDKFLASVSTVLTSKYR",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P01942"},
		"label":"hba_mouse"
	},
	{
		"object":"interactor",
		"sequence":"MVHLTDAEKSAVSCLWAKVNPDEVGGEALGRLLVVYPWTQRYFDSFGDLSSASAIMGNPKVKAHGKKVITAFNEGLKNLDNLKGTFASLSELHCDKLHVDPENFRLLGNAIVIVLGHHLGKDFTPAAQAAFQKVVAGVATALAHKYH",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P02089"},
		"label":"hbb2_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9105377"}],
		"expansion":{"id":"45","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P01942"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"18164788",
				"name":"hbb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["17378650"]
				},
				{
				"id":"25209264",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["289482"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P02089"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"33488656",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1815305"]
				},
				{
				"id":"17378650",
				"name":"hba binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["18164788"]
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
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9105377"}],
		"expansion":{"id":"45","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P01942"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"18164788",
				"name":"hbb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["17378650"]
				},
				{
				"id":"25209264",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["289482"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:30413"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"1815305",
				"name":"hbb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["33488656"]
				},
				{
				"id":"289482",
				"name":"hba binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["25209264"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MVHLTDAEKAAVSCLWGKVNSDEVGGEALGRLLVVYPWTQRYFDSFGDLSSASAIMGNAKVKAHGKKVITAFNDGLNHLDSLKGTFASLSELHCDKLHVDPENFRLLGNMIVIVLGHHLGKDFTPAAQAAFQKVVAGVATALAHKYH",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P02088"},
		"label":"hbb1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"3hrw"},{"db":"intact","id":"EBI-9105241"}],
		"expansion":{"id":"46","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P01942"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"8856925",
				"name":"hbb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["10887646"]
				},
				{
				"id":"16352912",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["32610051"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P02088"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"10887646",
				"name":"hba binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["8856925"]
				},
				{
				"id":"32591919",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["29846474"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"3hrw"},{"db":"intact","id":"EBI-9105241"}],
		"expansion":{"id":"46","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P01942"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"8856925",
				"name":"hbb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["10887646"]
				},
				{
				"id":"16352912",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["32610051"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:30413"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32610051",
				"name":"hba binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["16352912"]
				},
				{
				"id":"29846474",
				"name":"hbb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["32591919"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKKSRGLSDYLWAWTLILSTLSGRSYGQPSQDELKDNTTVFTRILDRLLDGYDNRLRPGLGERVTEVKTDIFVTSFGPVSDHDMEYTIDVFFRQSWKDERLKFKGPMTVLRLNNLMASKIWTPDTFFHNGKKSVAHNMTMPNKLLRITEDGTLLYTMRLTVRAECPMHLEDFPMDAHACPLKFGSYAYTRAEVVYEWTREPARSVVVAEDGSRLNQYDLLGQTVDSGIVQSSTGEYVVMTTHFHLKRKIGYFVIQTYLPCIMTVILSQVSFWLNRESVPARTVFGVTTVLTMTTLSISARNSLPKVAYATAMDWFIAVCYAFVFSALIEFATVNYFTKRGYAWDGKSVVPEKPKKVKDPLIKKNNTYAPTATSYTPNLARGDPGLATIAKSATIEPKEVKPETKPPEPKKTFNSVSKIDRLSRIAFPLLFGIFNLVYWATYLNREPQLKAPTPHQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P62812"},
		"label":"gbra1_mouse"
	},
	{
		"object":"interactor",
		"sequence":"MWRVRKRGYFGIWSFPLIIAAVCAQSVNDPSNMSLVKETVDRLLKGYDIRLRPDFGGPPVAVGMNIDIASIDMVSEVNMDYTLTMYFQQAWRDKRLSYNVIPLNLTLDNRVADQLWVPDTYFLNDKKSFVHGVTVKNRMIRLHPDGTVLYGLRITTTAACMMDLRRYPLDEQNCTLEIESYGYTTDDIEFYWRGDDNAVTGVTKIELPQFSIVDYKLITKKVVFSTGSYPRLSLSFKLKRNIGYFILQTYMPSILITILSWVSFWINYDASAARVALGITTVLTMTTINTHLRETLPKIPYVKAIDMYLMGCFVFVFMALLEYALVNYIFFGRGPQRQKKAAEKAANANNEKMRLDVNKMFYKDIKQNGTQYRSLWDPTGDLSPTRRTTNYDFSLYTMDPHENILLSTLEIKNEMATSEAVMGLGDPRSTMLAYDASSIQYRKAGLPRHSFGRNALERHVAQKKSRLRRRASQLKITIPDLTDVNAIDRWSRIFFPVVFSFFNIVYWLYYVN",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P63137"},
		"label":"gbrb2_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9215095"}],
		"expansion":{"id":"47","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P62812"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P63137"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSSPNTWSIGSSVYSPVFSQKMTLWILLLLSLYPGFTSQKSDDDYEDYASNKTWVLTPKVPEGDVTVILNNLLEGYDNKLRPDIGVKPTLIHTDMYVNSIGPVNAINMEYTIDIFFAQTWYDRRLKFNSTIKVLRLNSNMVGKIWIPDTFFRNSKKADAHWITTPNRMLRIWNDGRVLYTLRLTIDAECQLQLHNFPMDEHSCPLEFSSYGYPREEIVYQWKRSSVEVGDTRSWRLYQFSFVGLRNTTEVVKTTSGDYVVMSVYFDLSRRMGYFTIQTYIPCTLIVVLSWVSFWINKDAVPARTSLGITTVLTMTTLSTIARKSLPKVSYVTAMDLFVSVCFIFVFSALVEYGTLHYFVSNRKPSKDKDKKKKNPLLRMFSFKAPTIDIRPRSATIQMNNATHLQERDEEYGYECLDGKDCASFFCCFEDCRTGAWRHGRIHIRIAKMDSYARIFFPTAFCLFNLVYWVSYLYL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P22723"},
		"label":"gbrg2_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9215095"}],
		"expansion":{"id":"47","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P62812"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P22723"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MVEKEEAGGGGGGGISEEEAAQYDRQIRLWGLEAQKRLRASRVLIVGMKGLGAEIAKNLILAGVKGLTMLDHEQVSPEDPGAQFLIQTGSVGRNRAEASLERAQNLNPMVDVKVDTEDVEKKPESFFTKFDAVCLTCCSRDVIIKVDQICHRNSIKFFTGDVFGYHGYTFANLGEHEFVEEKTKVAKVSQGVEDGPEAKRAKLDSSETTMVKKKVLFCPVKEALEVDWSGEKAKAALKRTAPDYFLLQVLLKFRTDKGRDPTSESYKEDAELLLQIRNDVFDSLGISPDLLPDDFVRYCFSEMAPVCAVVGGILAQEIVKALSQRDPPHNNFFFFDGMKGSGIVECLGPQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9R1T2"},
		"label":"sae1_mouse"
	},
	{
		"object":"interactor",
		"sequence":"MALSRGLPRELAEAVSGGRVLVVGAGGIGCELLKNLVLTGFSHIDLIDLDTIDVSNLNRQFLFQKKHVGRSKAQVAKESVLQFHPQANIEAHHDSIMNPDYNVEFFRQFILVMNALDNRAARNHVNRMCLAADVPLIESGTAGYLGQVTTIKKGVTECYECHPKPTQRTFPGCTIRNTPSEPIHCIVWAKYLFNQLFGEEDADQEVSPDRADPEAAWEPTEAEARARASNEDGDIKRISTKEWAKSTGYDPVKLFTKLFKDDIRYLLTMDKLWRKRKPPVPLDWAEVQSQGEANADQQNEPQLGLKDQQVLDVKSYASLFSKSIETLRVHLAEKGDGAELIWDKDDPPAMDFVTSAANLRMHIFSMNMKSRFDIKSMAGNIIPAIATTNAVIAGLIVLEGLKILSGKIDQCRTIFLNKQPNPRKKLLVPCALDPPNTNCYVCASKPEVTVRLNVHKVTVLTLQDKIVKEKFAMVAPDVQIEDGKGTILISSEEGETEANNPKKLSDFGIRNGSRLQADDFLQDYTLLINILHSEDLGKDVEFEVVGDSPEKVGPKQAEDAAKSIANGSDDGAQPSTSTAQEQDDVLIVDSDEEGPSNSTDCSGDDKARKRKLEENEAASTKKCRLEQMEDPDDVIALD",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9Z1F9"},
		"label":"sae2_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 6.3.2.-"},{"db":"intact","id":"EBI-9345843"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9R1T2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"24499489",
				"name":"uba2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["16488560"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9Z1F9"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"16488560",
				"name":"sae1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["24499489"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 6.3.2.-"},{"db":"intact","id":"EBI-9349877"}],
		"expansion":{"id":"48","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Z1F9"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"30731219",
				"name":"sae1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["29782730"]
				},
				{
				"id":"26887501",
				"name":"sumo2 binding region (cys173)",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["173-173"],
				"linkedFeatures":["20705590"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9R1T2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"29782730",
				"name":"uba2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["30731219"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 6.3.2.-"},{"db":"intact","id":"EBI-9349877"}],
		"expansion":{"id":"48","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Z1F9"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"30731219",
				"name":"sae1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["29782730"]
				},
				{
				"id":"26887501",
				"name":"sumo2 binding region (cys173)",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["173-173"],
				"linkedFeatures":["20705590"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P61957-PRO_0000035951"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"20705590",
				"name":"uba2 binding region (gly92)",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["92-92"],
				"linkedFeatures":["26887501"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 6.3.2.-"},{"db":"intact","id":"EBI-9349763"}],
		"expansion":{"id":"49","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Z1F9"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"5851200",
				"name":"sumo1 binding region (cys173)",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["173-173"],
				"linkedFeatures":["26648704"]
				},
				{
				"id":"226019",
				"name":"sae1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["7062861"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9R1T2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"7062861",
				"name":"uba2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["226019"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 6.3.2.-"},{"db":"intact","id":"EBI-9349763"}],
		"expansion":{"id":"49","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Z1F9"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"5851200",
				"name":"sumo1 binding region (cys173)",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["173-173"],
				"linkedFeatures":["26648704"]
				},
				{
				"id":"226019",
				"name":"sae1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["7062861"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P63166-PRO_0000035941"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26648704",
				"name":"uba2 binding region (gly93)",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["93-93"],
				"linkedFeatures":["5851200"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 6.3.2.-"},{"db":"intact","id":"EBI-9349962"}],
		"expansion":{"id":"50","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Z1F9"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"23485726",
				"name":"sae1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["23815288"]
				},
				{
				"id":"26281756",
				"name":"sumo3 binding region (cys173)",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["173-173"],
				"linkedFeatures":["6944105"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9R1T2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"23815288",
				"name":"uba2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["23485726"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 6.3.2.-"},{"db":"intact","id":"EBI-9349962"}],
		"expansion":{"id":"50","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Z1F9"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"23485726",
				"name":"sae1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["23815288"]
				},
				{
				"id":"26281756",
				"name":"sumo3 binding region (cys173)",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["173-173"],
				"linkedFeatures":["6944105"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9Z172-PRO_0000035959"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"6944105",
				"name":"uba2 binding region (gly92)",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["92-92"],
				"linkedFeatures":["26281756"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGKEKYELYSVELGSGPGGDMTAKMSKKKAGGGGGKKKEKLENMKKEMEINDHQLSVSELEQKYQTSATKGLKASLAAELLLRDGPNALRPPRGTPEYVKFARQLAGGLQCLMWVAAAICLIAFAIQASEGDLTTDDNLYLAVALIAVVVVTGCFGYYQEFKSTNIIASFKNLVPQQATVIRDGDKFQINADQLVVGDLVEMKGGDRVPADIRILSAQGCKVDNSSLTGESEPQTRSPECTHESPLETRNIAFFSTMCLEGTAQGLVVSTGDRTIIGRIASLASGVENEKTPIAIEIEHFVDIIAGLAILFGATFFVVAMCIGYTFLRAMVFFMAIVVAYVPEGLLATVTVCLSLTAKRLASKNCVVKNLEAVETLGSTSVICSDKTGTLTQNRMTVSHLWFDNHIHTADTTEDQSGQTFDQSSETWRALCRVLTLCNRAAFKSGQDAVPVPKRIVIGDASETALLKFSELTLGNAMGYRDRFPKVCEIPFNSTNKFQLSIHTLEDPRDSRHLLVMKGAPERVLERCSSILIKGQELPLDEQWREAFQTAYLSLGGLGERVLGFCQLYLNEKDYPPGYAFDVEAMNFPSSGLCFAGLVSMIDPPRATVPDAVLKCRTAGIRVIMVTGDHPITAKAIAASVGIISEGSETVEDIAARLRMPVDQVNRKDARACVINGMQLKDMDPSELVEALRTHPEMVFARTSPQQKLVIVESCQRLGAIVAVTGDGVNDSPALKKADIGVAMGIAGSDAAKNAADMILLDDNFASIVTGVEQGRLIFDNLKKSIAYTLTKNIPELTPYLIYITVSVPLPLGCITILFIELCTDIFPSVSLAYEKAESDIMHLRPRNPKRDRLVNEPLAAYSYFQIGAIQSFAGFADYFTAMAQEGWFPLLCVGLRPQWEDHHLQDLQDSYGQEWTFGQRLYQQYTCYTVFFISIEMCQIADVLIRKTRRLSVFQQGFFRNKILVIAIVFQVCIGCFLCYCPGMPNIFNFMPIRFQWWLVPMPFGLLIFVYDEIRKLGVRCCPGSWWDQDFYY",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q64436"},
		"label":"atp4a_mouse"
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
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"chembl","id":"CHEMBL2095173"},{"db":"intact","id":"EBI-9514428"},{"db":"intenz","id":"EC 3.6.3.10"}],
		"expansion":{"id":"51","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q64436"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"7264595",
				"name":"atp4b binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["25040887"]
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
		"sequence":"MAALQEKKSCSQRMAEFRHYCWNPDTGQMLGRTPARWVWISLYYAGFYVVMTGLFALCIYVLMQTIDPYTPDYQDQLKSPGVTLRPDVYGERGLKISYNVSENSSWAGLTHTLHSFLAGYTPASQQDSINCTSEKYFFQESFAAPNHTKFSCKFTADMLQNCSGLADPSFGFEEGKPCFIIKMNRIVKFLPSNNTAPRVDCTFQDDPQKPRKDTEPLQVEYYPPNGTFSLHYFPYYGKKAQPHYSNPLVAAKLLNVPKNMQVSIVCKILADHVTFNNPHDPYEGKVEFKLTIQK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P50992"},
		"label":"atp4b_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"chembl","id":"CHEMBL2095173"},{"db":"intact","id":"EBI-9514428"},{"db":"intenz","id":"EC 3.6.3.10"}],
		"expansion":{"id":"51","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q64436"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"7264595",
				"name":"atp4b binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["25040887"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P50992"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"25040887",
				"name":"atp4a binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["7264595"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MFSTKSAWLRNGGADQGPRGIALREAVMLLLYFGVPTGPSYNLDPENALLYQGPSGTLFGYSVVLHSHGSKRWLIVGAPTASWLSNASVVNPGAIYRCGIRKNPNQTCEQLQSGSPSGEPCGKTCLEERDNQWLGVTLSRQPGENGSIVTCGHRWKNIFYMKSDNKLPTGICYVMPSDLRTELSKRMAPCYKDYTRKFGENFASCQAGISSFYTQDLIVMGAPGSSYWTGTVFVYNITTNQYKAFVDRQNQVKFGSYLGYSVGAGHFRSPHTTEVVGGAPQHEQIGKAYIFSIDENELNIVYEMKGKKLGSYFGASVCAVDLNADGFSDLLVGAPMQSTIREEGRVFVYINSGMGAVMVEMERVLVGSDKYAARFGESIANLGDIDNDGFEDIAIGAPQEDDLRGAVYIYNGRVDGISSTYSQRIEGQQISKSLRMFGQSISGQIDADNNGYVDVAVGAFQSDSAVLLRTRPVVIVEASLSHPESVNRTKFDCTENGLPSVCMHLTLCFSYKGKEVPGYIVLFYNVSLDVHRKAESPSRFYFFSNGTSDVITGSIRVSSSGEKCRTHQAFMRKDVRDILTPIHVEATYHLGHHVITKRNTEEFPPLQPILQQKKEKDVIRKMINFARFCAYENCSADLQVSAKVGFLKPYENKTYLAVGSMKTIMLNVSLFNAGDDAYETTLNVQLPTGLYFIKILDLEEKQINCEVTESSGIVKLACSLGYIYVDRLSRIDISFLLDVSSLSRAHEDLSISVHASCENEGELDQVRDNRVTLTIPLRYEVMLTVHGLVNPTSFVYGSSEENEPETCMAEKLNLTFHVINTGISMAPNVSVKIMVPNSFLPQDDKLFNVLDVQTTTGQCHFKHYGRECTFAQQKGIAGTLTDIVKFLSKTDKRLLYCMKADQHCLDFLCNFGKMESGKEASVHIQLEGRPSILEMDETSSLKFEIKATAFPEPHPKVIELNKDENVAHVFLEGLHHQRPKRHFTIIIITISLLLGLIVLLLISCVMWKAGFFKRQYKSILQEENRRDSWSYVNSKSNDD",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q00651"},
		"label":"ita4_mouse"
	},
	{
		"object":"interactor",
		"sequence":"MVDSSTVLIFLLVLGGGQSELDTKITSSGEAAEWEDPDLSLQGSCQPVPSCQKCILSHPSCAWCKQLNFTASGEAEARRCARREELLARGCPAQELEEPRGRQEVLQDKPLSQGDRGEGATQLAPQRIRVTLRPGEPQKFRVRFLRAAGYPVDLYYLMDLSYSMKDDLERVRQLGHALLVRLQEVTHSVRIGFGSFVDKTVLPFVSTVPSKLHHPCPSRLERCQPPFSFHHVLSLTGDAQAFEREVGRQNVSGNLDSPEGGFDAILQAALCQEQIGWRNVSRLLVFTSDDTFHTAGDGKLGGIFMPSDGRCHLDSNGVYTNSAEFDYPSVGQVAQALTAANIQPIFAVTGATLPVYQELRQLIPKSAVGELSEDSSNVVQLIMDAYDSLSSTVTLEHSPLPPGVSISFESHCKGPEKTEGEAGDRGQCNDVRVNQTVDFWVTLQATHCLPEAHVLRLWALGFSEELTVELHTVCDCNCGDAQPHAPYCSDGQGDLQCGICSCAPGRLGQLCECSEADLSSPDLESGCRAPNGTGPLCSGKGRCQCGRCSCSGQSSGRLCECDDASCERHEGILCGGFGHCQCGVCHCHANHTGRACECSKSVDSCVSPEGGLCSGHGYCKCNRCQCLDGYYGALCDQCLGCKSPCEQYRDCAECGAFGTGPLAANCSVVCADVNVTLTLAPNLDDGWCKERTIDNQLFFFLVEHAASGIVLRVRPQEKGVDHTRAIILGCTGGIVAVGLGLVLAYRLSVEIYDRREYRRFEKEQQQLNWKQDNNPLYKSAITTTVNPRFQGTNGRSPSLSLTREAD",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P26011"},
		"label":"itb7_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9516940"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q00651"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22512365",
				"name":"itbg7 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P26011"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"5549276",
				"name":"itga4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MVLLLPWLFIILWLENAQAQLEDEGNFYSENVSRILDNLLEGYDNRLRPGFGGAVTEVKTDIYVTSFGPVSDVEMEYTMDVFFRQTWTDERLKFKGPAEILSLNNLMVSKIWTPDTFFRNGKKSIAHNMTTPNKLFRLMQNGTILYTMRLTINADCPMRLVNFPMDGHACPLKFGSYAYPKTEIIYTWKKGPLYSVEVPEESSSLLQYDLIGQTVSSETIKSNTGEYVIMTVYFHLQRKMGYFMIQIYTPCIMTVILSQVSFWINKESVPARTVFGITTVLTMTTLSISARHSLPKVSYATAMDWFIAVCFAFVFSALIEFAAVNYFTNLQSQKAERQAQTAATPPVAKSKASESLQAEIVVHSDSKYHLKKRISSLTLPIVPSSEASKALSRTPILKSTPVSPPLLLPATGGTSKIDQYSRILFPVAFAGFNLVYWIVYLSKDTMEVSSTVE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P16305"},
		"label":"gbra6_mouse"
	},
	{
		"object":"interactor",
		"sequence":"MWGFAGGRLFGIFSAPVLVAVVCCAQSVNDPGNMSFVKETVDKLLKGYDIRLRPDFGGPPVCVGMNIDIASIDMVSEVNMDYTLTMYFQQYWRDKRLAYSGIPLNLTLDNRVADQLWVPDTYFLNDKKSFVHGVTVKNRMIRLHPDGTVLYGLRITTTAACMMDLRRYPLDEQNCTLEIESYGYTTDDIEFYWRGGDKAVTGVERIELPQFSIVEHRLVSRNVVFATGAYPRLSLSFRLKRNIGYFILQTYMPSILITILSWVSFWINYDASAARVALGITTVLTMTTINTHLRETLPKIPYVKAIDMYLMGCFVFVFLALLEYAFVNYIFFGRGPQRQKKLAEKTAKAKNDRSKSEINRVDAHGNILLAPMDVHNEMNEVAGSVGDTRNSAISFDNSGIQYRKQSMPKEGHGRYMGDRSIPHKKTHLRRRSSQLKIKIPDLTDVNAIDRWSRIVFPFTFSLFNLVYWLYYVN",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P63080"},
		"label":"gbrb3_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9215236"}],
		"expansion":{"id":"52","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P16305"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P63080"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9215236"}],
		"expansion":{"id":"52","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P16305"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P22723"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDVLGWLLLPLLLLCTQPHHGARAMNDIGDYVGSNLEISWLPNLDGLMEGYARNFRPGIGGAPVNVALALEVASIDHISEANMEYTMTVFLHQSWRDSRLSYNHTNETLGLDSRFVDKLWLPDTFIVNAKSAWFHDVTVENKLIRLQPDGVILYSIRITSTVACDMDLAKYPLDEQECMLDLESYGYSSEDIVYYWSENQEQIHGLDRLQLAQFTITSYRFTTELMNFKSAGQFPRLSLHFQLRRNRGVYIIQSYMPSVLLVAMSWVSFWISQAAVPARVSLGITTVLTMTTLMVSARSSLPRASAIKALDVYFWICYVFVFAALVEYAFAHFNADYRKKRKAKVKVTKPRAEMDVRNAIVLFSLSAAGVSQELAISRRQGRVPGNLMGSYRSVEVEAKKEGGSRPGGPGGIRSRLKPIDADTIDIYARAVFPAAFAAVNIIYWAAYTM",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P22933"},
		"label":"gbrd_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9215865"}],
		"expansion":{"id":"53","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P16305"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P22933"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9215865"}],
		"expansion":{"id":"53","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P16305"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P63080"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9215953"}],
		"expansion":{"id":"54","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P16305"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P22933"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9215953"}],
		"expansion":{"id":"54","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P16305"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P63137"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MVSVQKVPAIALCSGVSLALLHFLCLAACLNESPGQNSKDEKLCPENFTRILDSLLDGYDNRLRPGFGGPVTEVKTDIYVTSFGPVSDVEMEYTMDVFFRQTWIDKRLKYDGPIEILRLNNMMVTKVWTPDTFFRNGKKSVSHNMTAPNKLFRIMRNGTILYTMRLTISAECPMRLVDFPMDGHACPLKFGSYAYPKSEMIYTWTKGPEKSVEVPKESSSLVQYDLIGQTVSSETIKSITGEYIVMTVYFHLRRKMGYFMIQTYIPCIMTVILSQVSFWINKESVPARTVFGITTVLTMTTLSISARHSLPKVSYATAMDWFIAVCFAFVFSALIEFAAVNYFTNIQMQKAKKKISKPPPEVPAAPVLKEKHTETSLQNTHANLNMRKRTNALVHSESDVKSRTEVGNHSSKTSAVQESSEATPKAHLASSPNPFSRANAAETMSAAARGLSSAASPSPHGTLRPASLGSASTRPAFGSRLGRIKTTVNTTGAAGNVSATPPPPAPPPSGSGTSKIDKYARILFPVTFGAFNMVYWVVYLSKDTMEKSESLM",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9D6F4"},
		"label":"gbra4_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9216051"}],
		"expansion":{"id":"55","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9D6F4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P22933"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9216051"}],
		"expansion":{"id":"55","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9D6F4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P63137"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9216101"}],
		"expansion":{"id":"56","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9D6F4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P22933"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9216101"}],
		"expansion":{"id":"56","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9D6F4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P63080"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9215413"}],
		"expansion":{"id":"57","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P62812"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P63080"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9215413"}],
		"expansion":{"id":"57","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P62812"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P22723"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDNGMLSRFIMTQTLLVFCISMTLSSHFGFSQMPTSSVQDETNDNITIFTRILDGLLDGYDNRLRPGLGERITQVRTDIYVTSFGPVSDTEMEYTIDVFFRQSWKDERLRFKGPMQRLPLNNLLASKIWTPDTFFHNGKKSIAHNMTTPNKLLRLEDDGTLLYTMRLTISAECPMQLEDFPMDAHACPLKFGSYAYPNSEVVYVWTNGSTKSVVVAEDGSRLNQYHLMGQTVGTENISTSTGEYTIMTAHFHLKRKIGYFVIQTYLPCIMTVILSQVSFWLNRESVPARTVFGVTTVLTMTTLSISARNSLPKVAYATAMDWFIAVCYAFVFSALIEFATVNYFTKRGWAWDGKKALEAAKIKKKERELILNKSTNAFTTGKLTHPPNIPKEQPPAGTANAPTVSIKASEEKTAESKKTYNSISKIDKMSRIVFPILFGTFNLVYWATYLNREPVIKGATSPK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q8BHJ7"},
		"label":"gbra5_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9215447"}],
		"expansion":{"id":"58","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q8BHJ7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P22723"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9215447"}],
		"expansion":{"id":"58","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q8BHJ7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P63080"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9276728"}],
		"expansion":{"id":"59","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q8BHJ7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P22723"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9276728"}],
		"expansion":{"id":"59","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q8BHJ7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P63080"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MIITQMWHFYVTRVVLLLLISILPGTTSQGESRRQEPGDFVKQDIGGLSPKHAPDIPDDSTDNITIFTRILDRLLDGYDNRLRPGLGDAVTEVKTDIYVTSFGPVSDTDMEYTIDVFFRQTWHDERLKFDGPMKILPLNNLLASKIWTPDTFFHNGKKSVAHNMTTPNKLLRLVDNGTLLYTMRLTIHAECPMHLEDFPMDVHACPLKFGSYAYTKAEVIYSWTLGKNKSVEVAQDGSRLNQYDLLGHVVGTEIIRSSTGEYVVMTTHFHLKRKIGYFVIQTYLPCIMTVILSQVSFWLNRESVPARTVFGVTTVLTMTTLSISARNSLPKVAYATAMDWFIAVCYAFVFSALIEFATVNYFTKRSWAWEGKKVPEALEMKKKTPAAPTKKNTTFNIVGTTYPINLAKDTEFSTISKSAAAPSASSTPTAIASPKATYVQDSPAETKTYNSVSKVDKISRIIFPVLFAIFNLVYWATYVNRESAIKGMIRKQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P26049"},
		"label":"gbra3_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9215343"}],
		"expansion":{"id":"60","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P26049"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P22723"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9215343"}],
		"expansion":{"id":"60","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P26049"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P63080"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKTKLSTCNVWSLLLVLLVWDPVRLVLANIQEDEAKNNITIFTRILDRLLDGYDNRLRPGLGDSITEVFTNIYVTSFGPVSDTDMEYTIDVFFRQKWKDERLKFKGPMNILRLNNLMASKIWTPDTFFHNGKKSVAHNMTMPNKLLRIQDDGTLLYTMRLTVQAECPMHLEDFPMDAHSCPLKFGSYAYTTSEVTYIWTYNASDSVQVAPDGSRLNQYDLLGQSIGKETIKSSTGEYTVMTAHFHLKRKIGYFVIQTYLPCIMTVILSQVSFWLNRESVPARTVFGVTTVLTMTTLSISARNSLPKVAYATAMDWFIAVCYAFVFSALIEFATVNYFTKRGWAWDGKSVVNDKKKEKGSVMIQNNAYAVAVANYAPNLSKDPVLSTISKSATTPEPNKKPENKPAEAKKTFNSVSKIDRMSRIVFPVLFGTFNLVYWATYLNREPVLGVSP",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P26048"},
		"label":"gbra2_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9215532"}],
		"expansion":{"id":"61","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P26048"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P22723"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9215532"}],
		"expansion":{"id":"61","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P26048"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P63080"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MASPPSSGQPRPPPPPPPPARLLLPLLLSLLLSLAPGAWGWARGAPRPPPSSPPLSIMGLMPLTKEVAKGSIGRGVLPAVELAIEQIRNESLLRPYFLDLRLYDTECDNAKGLKAFYDAIKYGPNHLMVFGGVCPSVTSIIAESLQGWNLVQLSFAATTPVLADKKKYPYFFRTVPSDNAVNPAILKLLKHFRWRRVGTLTQDVQRFSEVRNDLTGVLYGEDIEISDTESFSNDPCTSVKKLKGNDVRIILGQFDQNMAAKVFCCAFEESMFGSKYQWIIPGWYEPAWWEQVHVEANSSRCLRRSLLAAMEGYIGVDFEPLSSKQIKTISGKTPQQYEREYNSKRSGVGPSKFHGYAYDGIWVIAKTLQRAMETLHASSRHQRIQDFNYTDHTLGRIILNAMNETNFFGVTGQVVFRNGERMGTIKFTQFQDSREVKVGEYNAVADTLEIINDTIRFQGSEPPKDKTIILEQLRKISLPLYSILSALTILGMIMASAFLFFNIKNRNQKLIKMSSPYMNNLIILGGMLSYASIFLFGLDGSFVSEKTFETLCTVRTWILTVGYTTAFGAMFAKTWRVHAIFKNVKMKKKIIKDQKLLVIVGGMLLIDLCILICWQAVDPLRRTVERYSMEPDPAGRDISIRPLLEHCENTHMTIWLGIVYAYKGLLMLFGCFLAWETRNVSIPALNDSKYIGMSVYNVGIMCIIGAAVSFLTRDQPNVQFCIVALVIIFCSTITLCLVFVPKLITLRTNPDAATQNRRFQFTQNQKKEDSKTSTSVTSVNQASTSRLEGLQSENHRLRMKITELDKDLEEVTMQLQDTPEKTTYIKQNHYQELNDILSLGNFTESTDGGKAILKNHLDQNPQLQWNTTEPSRTCKDPIEDINSPEHIQRRLSLQLPILHHAYLPSIGGVDASCVSPCVSPTASPRHRHVPPSFRVMVSGL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q80T41"},
		"label":"gabr2_mouse"
	},
	{
		"object":"interactor",
		"sequence":"MLLLLLVPLFLRPLGAGGAQTPNVTSEGCQIIHPPWEGGIRYRGLTRDQVKAINFLPVDYEIEYVCRGEREVVGPKVRKCLANGSWTDMDTPSRCVRICSKSYLTLENGKVFLTGGDLPALDGARVDFRCDPDFHLVGSSRSICSQGQWSTPKPHCQVNRTPHSERRAVYIGALFPMSGGWPGGQACQPAVEMALEDVNSRRDILPDYELKLIHHDSKCDPGQATKYLYELLYNDPIKIILMPGCSSVSTLVAEAARMWNLIVLSYGSSSPALSNRQRFPTFFRTHPSATLHNPTRVKLFEKWGWKKIATIQQTTEVFTSTLDDLEERVKEAGIEITFRQSFFSDPAVPVKNLKRQDARIIVGLFYETEARKVFCEVYKERLFGKKYVWFLIGWYADNWFKTYDPSINCTVEEMTEAVEGHITTEIVMLNPANTRSISNMTSQEFVEKLTKRLKRHPEETGGFQEAPLAYDAIWALALALNKTSGGGGRSGVRLEDFNYNNQTITDQIYRAMNSSSFEGVSGHVVFDASGSRMAWTLIEQLQGGSYKKIGYYDSTKDDLSWSKTDKWIGGSPPADQTLVIKTFRFLSQKLFISVSVLSSLGIVLAVVCLSFNIYNSHVRYIQNSQPNLNNLTAVGCSLALAAVFPLGLDGYHIGRSQFPFVCQARLWLLGLGFSLGYGSMFTKIWWVHTVFTKKEEKKEWRKTLEPWKLYATVGLLVGMDILTLAIWQIVDPLHRTIETFAKEEPKEDIDVSILPQLEHCSSKKMNTWLGIFYGYKGLLLLLGIFLAYETKSVSTEKINDHRAVGMAIYNVAVLCLITAPVTMILSSQQDAAFAFASLAIVFSSYITLVVLFVPKMRRLITRGEWQSEAQDTMKTGSSTNNNEEEKSRLLEKENRELEKIIAEKEERVSELRHQLQSRQQIRSRRHPPTPPDPSGGLPRGPSEPPDRLSCDGSRVHLLYK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9WV18"},
		"label":"gabr1_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9216160"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q80T41"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"18925226",
				"name":"gabr1 binding region",
				"type":{"id":"MI:1125","name":"direct binding region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9WV18"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"13822318",
				"name":"gabr2 binding region",
				"type":{"id":"MI:1125","name":"direct binding region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MASSSSFTYYCPPSSSPVWSEPLYSLRPEHVRERLQDDSVETVTSIEQAKVEEKIQEVFSSYKFNHLVPRLILQREKHFHYLKRGLRQLTDAYECLDASRPWLCYWILHSLELLDEPIPQIVATDVCQFLELCQSPDGGFGGGPGQYPHLAPTYAAVNALCIIGTEEAYNVINREKLLQYLYSLKQPDGSFLMHVGGEVDVRSAYCAASVASLTNIITPDLFEGTAEWIARCQNWEGGIGGVPGMEAHGGYTFCGLAALVILKKERSLNLKSLLQWVTSRQMRFEGGFQGRCNKLVDGCYSFWQAGLLPLLHRALHAQGDPALSMSHWMFHQQALQEYILMCCQCPAGGLLDKPGKSRDFYHTCYCLSGLSIAQHFGSGAMLHDMVMGVPENVLQPTHPVYNIGPEKVIQATTHFLQKPVPGFEECEDEVTSDPATD",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q8K2I1"},
		"label":"fntb_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"chembl","id":"CHEMBL2096912"},{"db":"intenz","id":"2.5.1.58"},{"db":"intact","id":"EBI-9008930"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q61239"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"14377027",
				"name":"fntb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["9240937"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q8K2I1"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"9240937",
				"name":"fnta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["14377027"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGSLLFSWKGTQQKDVTIKSDAPDTLLLEKHADYIASYGSKKDDYEYCMSEYLRMSGVYWGLTVMDLMGQLHRMNREEILVFIKSCQHECGGISASIGHDPHLLYTLSAVQILTLYDSVHVINVDKVVAYVQSLQKEDGSFAGDIWGEIDTRFSFCAVATLALLGKLDAINVEKAIEFVLSCMNFDGGFGCRPGSESHAGQIYCCTGFLAITSQLHQVNSDLLGWWLCERQLPSGGLNGRPEKLPDVCYSWWVLASLKIIGRLHWIDREKLRSFILACQDEETGGFADRPGDMVDPFHTLFGIAGLSLLGEEQIKPVSPVFCMPEEVLQRVNVQPELVS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P53612"},
		"label":"pgtb2_mouse"
	},
	{
		"object":"interactor",
		"sequence":"MHGRLKVKTSEEQAEAKRLEREQKLKLYQSATQAVFQKREAGELDESVLELTSQILGANPDFATLWNCRREVLQQLETQKSPEELAALVKAELGFLESCLRVNPKSYGTWHHRCWLLSRLPEPNWARELELCARFLEADERNFHCWDYRRFVAAQAAVAPAEELAFTDSLITRNFSNYSSWHYRSCLLPQLHPQPDSGPQGRLPENVLLRELELVQNAFFTDPNDQSAWFYHRWLLGRAEPHDVLCCLHVSREEACLSVCFSRPLIVGSKMGTLLLTVDEAPLSVEWRTPDGRNRPSHVWLCDLPAASLNDHLPQHTFRVIWTGSDTQKECVLLKGHQECWCRDSATDEQLFRCELSVEKSTVLQSELESCKELQELEPENKWCLLTIILLMRALDPLLYEKETLEYFSTLKAVDPMRAAYLDDLRSKFLVENSVLKMEYADVRVLHLAHKDLTVLCHLEQLLLVTHLDLSHNRLRALPPALAALRCLEVLQASDNVLENLDGVANLPRLRELLLCNNRLQQSAALQTLASCPRLVFLNLQGNSLCQEEGIRERLAEMLPSVSSILT",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q9JHK4"},
		"label":"pgta_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"2.5.1.60"},{"db":"intact","id":"EBI-9104264"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P53612"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22523237",
				"name":"rabggta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["20512799"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9JHK4"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"20512799",
				"name":"rabggtb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["22523237"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSLMKNERAIIMSMWEKMAAQAEPIGTETLERLFCSYPQTKTYFPHFDLHHGSQQLRAHGFKIMTAVGDAVKSIDNLSSALTKLSELHAYILRVDPVNFKLLSHCLLVTMAARFPADFTPEVHEAWDKFMSILSSILTEKYR",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P06467"},
		"label":"hbaz_mouse"
	},
	{
		"object":"interactor",
		"sequence":"MVHFTAEEKAAITSIWDKVDLEKVGGETLGRLLIVYPWTQRFFDKFGNLSSALAIMGNPRIRAHGKKVLTSLGLGVKNMDNLKETFAHLSELHCDKLHVDPENFKLLGNMLVIVLSTHFAKEFTPEVQAAWQKLVIGVANALSHKYH",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P04444"},
		"label":"hbbz_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9120421"}],
		"expansion":{"id":"62","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P06467"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"20392503",
				"name":"hbb-bh1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["11843550"]
				},
				{
				"id":"9669287",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["7599599"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P04444"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"18294361",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["14070831"]
				},
				{
				"id":"11843550",
				"name":"hbz binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["20392503"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9120421"}],
		"expansion":{"id":"62","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P06467"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"20392503",
				"name":"hbb-bh1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["11843550"]
				},
				{
				"id":"9669287",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["7599599"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:30413"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"7599599",
				"name":"hbz binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["9669287"]
				},
				{
				"id":"14070831",
				"name":"hbb-bh1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["18294361"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9123533"}],
		"expansion":{"id":"63","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P06467"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"30384139",
				"name":"hbe binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				},
				{
				"id":"1334832",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:30413"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"20167423",
				"name":"hbe binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				},
				{
				"id":"20572179",
				"name":"hbz binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MVNFTAEEKTLINGLWSKVNVEEVGGEALGRLLVVYPWTQRFFDSFGNLSSASAIMGNPRVKAHGKKVLTAFGESIKNLDNLKSALAKLSELHCDKLHVDPENFKLLGNVLVIVLASHFGNEFTAEMQAAWQKLVAGVATALSHKYH",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P02104"},
		"label":"hbe_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9123533"}],
		"expansion":{"id":"63","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P06467"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"30384139",
				"name":"hbe binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				},
				{
				"id":"1334832",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P02104"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11745811",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				},
				{
				"id":"11125789",
				"name":"hbz binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:29036"},
		"label":"copper(2+)"
	},
	{
		"object":"interactor",
		"sequence":"MAMKAVCVLKGDGPVQGTIHFEQKASGEPVVLSGQITGLTEGQHGFHVHQYGDNTQGCTSAGPHFNPHSKKHGGPADEERHVGDLGNVTAGKDGVANVSIEDRVISLSGEHSIIGRTMVVHEKQDDLGKGGNEESTKTGNAGSRLACGVIGIAQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P08228"},
		"label":"sodc_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"3gtt"},{"db":"intact","id":"EBI-9098433"},{"db":"intact","id":"EBI-9209490"},{"db":"intenz","id":"1.15.1.1"}],
		"expansion":{"id":"64","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:29036"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"25848321",
				"name":"sod1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["3512487"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P08228"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"12138905",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["147-147"],
				"linkedFeatures":["7630657"]
				},
				{
				"id":"3427073",
				"name":"zinc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["19410888"]
				},
				{
				"id":"3512487",
				"name":"copper binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["25848321"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:29105"},
		"label":"zinc(2+)"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"3gtt"},{"db":"intact","id":"EBI-9098433"},{"db":"intact","id":"EBI-9209490"},{"db":"intenz","id":"1.15.1.1"}],
		"expansion":{"id":"64","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:29036"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"25848321",
				"name":"sod1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["3512487"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:29105"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19410888",
				"name":"sod1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["3427073"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"3gtt"},{"db":"intact","id":"EBI-9098433"},{"db":"intact","id":"EBI-9209490"},{"db":"intenz","id":"1.15.1.1"}],
		"expansion":{"id":"64","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:29036"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"25848321",
				"name":"sod1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["3512487"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:29105"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22613954",
				"name":"sod1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1679831"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"3gtt"},{"db":"intact","id":"EBI-9098433"},{"db":"intact","id":"EBI-9209490"},{"db":"intenz","id":"1.15.1.1"}],
		"expansion":{"id":"64","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:29036"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"25848321",
				"name":"sod1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["3512487"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P08228"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"1679831",
				"name":"zinc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["22613954"]
				},
				{
				"id":"13642318",
				"name":"copper binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["9007240"]
				},
				{
				"id":"7630657",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["58-58"],
				"linkedFeatures":["12138905"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"3gtt"},{"db":"intact","id":"EBI-9098433"},{"db":"intact","id":"EBI-9209490"},{"db":"intenz","id":"1.15.1.1"}],
		"expansion":{"id":"64","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:29036"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"25848321",
				"name":"sod1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["3512487"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:29036"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"9007240",
				"name":"sod1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["13642318"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MASSTPSPATSSNAGADPNTTNLRPTTYDTWCGVAHGCTRKLGLKICGFLQRTNSLEEKSRLVSAFRERQSSKNLLSCENSDQGARFRRTETDFSNLFAQDLLPAKNGEEQTAQFLLEVVDILLNYVRKTFDRSTKVLDFHHPHQLLEGMEGFNLELSDHPESLEQILVDCRDTLKYGVRTGHPRFFNQLSTGLDIIGLAGEWLTSTANTNMFTYEIAPVFVLMEQITLKKMREIVGWSNKDGDGIFSPGGAISNMYSIMAARYKYFPEVKTKGMAAVPKLVLFTSEHSHYSIKKAGAALGFGTDNVILIKCNERGKIIPADLEAKILDAKQKGYVPLYVNATAGTTVYGAFDPIQEIADICEKYNLWLHVDAAWGGGLLMSRKHRHKLSGIERANSVTWNPHKMMGVLLQCSAILVKEKGILQGCNQMCAGYLFQPDKQYDVSYDTGDKAIQCGRHVDIFKFWLMWKAKGTVGFENQINKCLELADYLYAKIKNREEFEMVFDGEPEHTNVCFWYIPQSLRGVPDSPERREKLHRVAPKIKALMMESGTTMVGYQPQGDKANFFRMVISNPAATQSDIDFLIEEIERLGQDL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P48318"},
		"label":"dce1_mouse"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:18405"},
		"label":"pyridoxal 5'-phosphate"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 4.1.1.15"},{"db":"intact","id":"EBI-9396405"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P48318"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"20644200",
				"name":"plp binding site",
				"type":{"id":"MI:1125","name":"direct binding region"},
				"sequenceData":["404-404"],
				"linkedFeatures":["14246620"]
				},
				{
				"id":"32081948",
				"name":"dimerisation domain",
				"type":{"id":"MI:1125","name":"direct binding region"},
				"sequenceData":["89-593"],
				"InterPro":"IPR015424"
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:18405"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"14246620",
				"name":"gad1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["20644200"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MASPGSGFWSFGSEDGSADPENPGTARAWCQVAQKFTGGIGNKLCALLYGDSGKPAEGGGSVTSRAATGKVACTCDQKPCNCPKGDVNYAFLHATDLLPACDGERPTLAFLQDVMNILLQYVVKSFDRSTKVIDFHYPNELLQEYNWELADQPQNLEEILTHCQTTLKYAIKTGHPRYFNQLSTGLDMVGLAADWLTSTANTNMFTYEIAPVFVLLEYVTLKKMREIIGWPGGSGDGIFSPGGAISNMYAMLIARYKMFPEVKEKGMAAVPRLIAFTSEHSHFSLKKGAAALGIGTDSVILIKCDERGKMIPSDLERRILEVKQKGFVPFLVSATAGTTVYGAFDPLLAVADICKKYKIWMHVDAAWGGGLLMSRKHKWKLSGVERANSVTWNPHKMMGVPLQCSALLVREEGLMQSCNQMHASYLFQQDKHYDLSYDTGDKALQCGRHVDVFKLWLMWRAKGTTGFEAHIDKCLELAEYLYTIIKNREGYEMVFDGKPQHTNVCFWFVPPSLRTLEDNEERMSRLSKVAPVIKARMMEYGTTMVSYQPLGDKVNFFRMVISNPAATHQDIDFLIEEIERLGQDL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P48320"},
		"label":"dce2_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 4.1.1.15"},{"db":"intact","id":"EBI-9396442"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P48320"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"15147710",
				"name":"plp binding site",
				"type":{"id":"MI:1125","name":"direct binding region"},
				"sequenceData":["396-396"],
				"linkedFeatures":["10093595"]
				},
				{
				"id":"25397483",
				"name":"dimerisation domain",
				"type":{"id":"MI:1125","name":"direct binding region"},
				"sequenceData":["84-585"],
				"InterPro":"IPR015424"
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:18405"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"10093595",
				"name":"gad2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["15147710"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MPKPHSEAGTAFIQTQQLHAAMADTFLEHMCRLDIDSAPITARNTGIICTIGPASRSVEMLKEMIKSGMNVARLNFSHGTHEYHAETIKNVREATESFASDPILYRPVAVALDTKGPEIRTGLIKGSGTAEVELKKGATLKITLDNAYMEKCDENILWLDYKNICKVVEVGSKIYVDDGLISLQVKEKGADFLVTEVENGGSLGSKKGVNLPGAAVDLPAVSEKDIQDLKFGVEQDVDMVFASFIRKAADVHEVRKVLGEKGKNIKIISKIENHEGVRRFDEILEASDGIMVARGDLGIEIPAEKVFLAQKMMIGRCNRAGKPVICATQMLESMIKKPRPTRAEGSDVANAVLDGADCIMLSGETAKGDYPLEAVRMQHLIAREAEAAIYHLQLFEELRRLAPITSDPTEAAAVGAVEASFKCCSGAIIVLTKSGRSAHQVARYRPRAPIIAVTRNPQTARQAHLYRGIFPVLCKDAVLNAWAEDVDLRVNLAMDVGKARGFFKKGDVVIVLTGWRPGSGFTNTMRVVPVP",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P52480-1"},
		"label":"p52480-1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 2.7.11.-"},{"db":"intact","id":"EBI-9396309"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P52480-1"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"9584052",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P52480-1"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17891065",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:28013"},
		"label":"beta-d-fructofuranose 1,6-bisphosphate"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 2.7.1.40"},{"db":"intact","id":"EBI-9396261"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P52480-1"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"13866018",
				"name":"fructofuranose binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["10645686"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:28013"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"10645686",
				"name":"pkm2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["13866018"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 4.1.1.15"},{"db":"intact","id":"EBI-9491023"}],
		"expansion":{"id":"65","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P48320"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"9825341",
				"name":"gad1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["102-585"],
				"linkedFeatures":["13152169"]
				},
				{
				"id":"25465891",
				"name":"plp binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["396-396"],
				"linkedFeatures":["18458479"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:18405"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"20946250",
				"name":"gad1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["24086730"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 4.1.1.15"},{"db":"intact","id":"EBI-9491023"}],
		"expansion":{"id":"65","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P48320"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"9825341",
				"name":"gad1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["102-585"],
				"linkedFeatures":["13152169"]
				},
				{
				"id":"25465891",
				"name":"plp binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["396-396"],
				"linkedFeatures":["18458479"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:18405"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"18458479",
				"name":"gad2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["25465891"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 4.1.1.15"},{"db":"intact","id":"EBI-9491023"}],
		"expansion":{"id":"65","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P48320"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"9825341",
				"name":"gad1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["102-585"],
				"linkedFeatures":["13152169"]
				},
				{
				"id":"25465891",
				"name":"plp binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["396-396"],
				"linkedFeatures":["18458479"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P48318"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"13152169",
				"name":"gad2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["9825341"]
				},
				{
				"id":"24086730",
				"name":"plp binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["404-404"],
				"linkedFeatures":["20946250"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGSVRTNRYSIVSSEEDGMKLATMAVANGFGNGKSKVHTRQQCRSRFVKKDGHCNVQFINVGEKGQRYLADIFTTCVDIRWRWMLVIFCLAFVLSWLFFGCVFWLIALLHGDLDTSKVSKACVSEVNSFTAAFLFSIETQTTIGYGFRCVTDECPIAVFMVVFQSIVGCIIDAFIIGAVMAKMAKPKKRNETLVFSHNAVIAMRDGKLCLMWRVGNLRKSHLVEAHVRAQLLKSRITSEGEYIPLDQIDINVGFDSGIDRIFLVSPITIVHEIDEDSPLYDLSKQDIDNADFEIVVILEGMVEATAMTTQCRSSYLANEILWGHRYEPVLFEEKHYYKVDYSRFHKTYEVPNTPLCSARDLAEKKYILSNANSFCYENEVALTSKEEEEDSENGVPESTSTDSPPGIDLHNQASVPLEPRPLRRESEI",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"P35561"},
		"label":"kcnj2_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"2gix"},{"db":"intact","id":"EBI-9510554"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P35561"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"25014417",
				"name":"tetramerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["44-64","189-371"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P35561"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"13836327",
				"name":"tetramerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["44-64","189-371"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKGQQKTAETEEGTVQIQEGAVATGEDPTSVAIASIQSAATFPDPNVKYVFRTENGGQVMYRVIQVSEGQLDGQTEGSGAISGYPATQSMTQAVIQGAFTSDDAVDTEGAAAETHYTYFPSTAVGDGSGGTTSGSTTAVVTTQGSEALLGQATPPSTGQFFVMMSPQEVLQGGSQRSIAPRTHPYSPKSEAPRTTRDEKRRAQHNEVERRRRDKINNWIVQLSKIIPDCSMESTKSGQSKGGILSKACDYIQELRQSNHRLSEELQGLDQLQLDNDVLRQQVEDLKNKNLLLRAQLRHHGLEVVIKNDSN",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q61069"},
		"label":"usf1_mouse"
	},
	{
		"object":"interactor",
		"sequence":"MDMLDPGLDPASSATAAAAASHDKGPEAEEGVELQEGGDGPGAEEQTAVAIASVQQAAFGDHNIQYQFRTESNGGQVTYRVVQVTDGQLDGQGDAAGAVSVVSTAAFAGGQQAVTQVGVDGAAQRPGPAAASVPTGPAAPFPLAVIQNPFSNGGSPAAEAVSGEARFAYFPASSVGDTTAVSVQTTDQSLQAGGQFYVMMTPQDVLQTGTQRTIAPRTHPYSPKIDGTRTPRDERRRAQHNEVERRRRDKINNWIVQLSKIIPDCHADNSKTGASKGGILSKACDYIRELRQTNQRMQETFKEAERLQMDNELLRQQIEELKNENALLRAQLQQHNLEMVGESTRQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
		"identifier":{"db":"uniprotkb","id":"Q64705"},
		"label":"usf2_mouse"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9519694"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q61069"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0815","name":"confirmation by molecular weight"}],
			"bindingSites":[
				{
				"id":"14945266",
				"name":"usf2 binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["192-285"],
				"linkedFeatures":["30176965"],
				"InterPro":"IPR011598"
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q64705"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0815","name":"confirmation by molecular weight"}],
			"bindingSites":[
				{
				"id":"30176965",
				"name":"usf1 binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["227-321"],
				"linkedFeatures":["14945266"],
				"InterPro":"IPR011598"
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9519603"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q61069"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0815","name":"confirmation by molecular weight"}],
			"bindingSites":[
				{
				"id":"9012624",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["192-285"],
				"InterPro":"IPR011598"
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q61069"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0815","name":"confirmation by molecular weight"}],
			"bindingSites":[
				{
				"id":"10469267",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["192-285"],
				"InterPro":"IPR011598"
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"10090","common":"mouse","scientific":"Mus musculus"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9519488"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q64705"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0815","name":"confirmation by molecular weight"}],
			"bindingSites":[
				{
				"id":"31084625",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["227-321"],
				"InterPro":"IPR011598"
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q64705"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0815","name":"confirmation by molecular weight"}],
			"bindingSites":[
				{
				"id":"30346850",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["227-321"],
				"InterPro":"IPR011598"
				}]
		}
	}
	]
};
