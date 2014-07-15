var miJson = {
"data":[
	{
		"object":"interactor",
		"sequence":"MAHAGRTGYDNREIVMKYIHYKLSQRGYEWDAGDVGAAPPGAAPAPGIFSSQPGHTPHPAASRDPVARTSPLQTPAAPGAAAGPALSPVPPVVHLTLRQAGDDFSRRYRRDFAEMSSQLHLTPFTARGRFATVVEELFRDGVNWGRIVAFFEFGGVMCVESVNREMSPLVDNIALWMTEYLNRHLHTWIQDNGGWDAFVELYGPSMRPLFDFSWLSLKTLLSLALVGACITLGAYLGHK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P10415"},
		"label":"bcl2_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-706546"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P10415"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"25177291",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P10415"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"33343564",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MFQIPEFEPSEQEDSSSAERGLGPSPAGDGPSGSGKHHRQAPGLLWDASHQQEQPTSSSHHGGAGAVEIRSRHSSYPAGTEDDEGMGEEPSPFRGRSRSAPPNLWAAQRYGRELRRMSDEFVDSFKKGLPRPKSAGTATQMRQSSSWTRVFQSWWDRNLGRGSSAPSQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q92934"},
		"label":"bad_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"reactome","id":"REACT_3232.1"},{"db":"intact","id":"EBI-706583"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P10415"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"12719455",
				"name":"bad binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["597951"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q92934"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"597951",
				"name":"bcl2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["12719455"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSQSNRELVVDFLSYKLSQKGYSWSQFSDVEENRTEAPEGTESEMETPSAINGNPSWHLADSPAVNGATGHSSSLDAREVIPMAAVKQALREAGDEFELRYRRAFSDLTSQLHITPGTAYQSFEQVVNELFRDGVNWGRIVAFFSFGGALCVESVDKEMQVLVSRIAAWMATYLNDHLEPWIQENGGWDTFVELYGNNAAAESRKGQERFNRWFLTGMTVAGVVLLGSLFSRK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q07817-1"},
		"label":"q07817-1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"reactome","id":"REACT_3304.1"},{"db":"intact","id":"EBI-706830"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q07817-1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"16998848",
				"name":"bad binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["17212561"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q92934"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17212561",
				"name":"bcl2l1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["16998848"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDCEVNNGSSLRDECITNLLVFGFLQSCSDNSFRRELDALGHELPVLAPQWEGYDELQTDGNRSSHSRLGRIEADSESQEDIIRNIARHLAQVGDSMDRSIPPGLVNGLALQLRNTSRSEEDRNRDLATALEQLLQAYPRDMEKEKTMLVLALLLAKKVASHTPSLLRDVFHTTVNFINQNLRTYVRSLARNGMD",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P55957"},
		"label":"bid_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"reactome","id":"REACT_5048.1"},{"db":"intact","id":"EBI-706842"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P55957"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"18770083",
				"name":"bcl2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["23580925"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P10415"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"23580925",
				"name":"bid binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["18770083"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAKQPSDVSSECDREGRQLQPAERPPQLRPGAPTSLQTEPQGNPEGNHGGEGDSCPHGSPQGPLAPPASPGPFATRSPLFIFMRRSSLLSRSSSGYFSFDTDRSPAPMSCDKSTQTPSPPCQAFNHYLSAMASMRQAEPADMRPEIWIAQELRRIGDEFNAYYARRVFLNNYQAAEDHPRMVILRLLRYIVRLVWRMH",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O43521"},
		"label":"b2l11_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"reactome","id":"REACT_4393.1"},{"db":"intact","id":"EBI-706896"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"O43521"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"13218448",
				"name":"bcl2l1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["32123152"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q07817-1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32123152",
				"name":"bcl2l11 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["13218448"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MARARQEGSSPEPVEGLARDGPRPFPLGRLVPSAVSCGLCEPGLAAAPAAPTLLPAAYLCAPTAPPAVTAALGGSRWPGGPRSRPRGPRPDGPQPSLSLAEQHLESPVPSAPGALAGGPTQAAPGVRGEEEQWAREIGAQLRRMADDLNAQYERRRQEEQQRHRPSPWRVLYNLIMGLLPLPRGHRAPEMEPN",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9BXH1"},
		"label":"bbc3_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"reactome","id":"REACT_3460.1"},{"db":"intact","id":"EBI-707206"},{"db":"reactome","id":"REACT_4085.1"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P10415"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"3013438",
				"name":"bbc3 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["13229832"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9BXH1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"13229832",
				"name":"bcl2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["3013438"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"reactome","id":"REACT_5023.1"},{"db":"intact","id":"EBI-707223"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9BXH1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22135589",
				"name":"bcl2l1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["14865053"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q07817-1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"14865053",
				"name":"bbc3 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["22135589"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDGSGEQPRGGGPTSSEQIMKTGALLLQGFIQDRAGRMGGEAPELALDPVPQDASTKKLSECLKRIGDELDSNMELQRMIAAVDTDSPREVFFRVAADMFSDGNFNWGRVVALFYFASKLVLKALCTKVPELIRTIMGWTLDFLRERLLGWIQDQGGWDGLLSYFGTPTWQTVTIFVAGVLTASLTIWKKMG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q07812"},
		"label":"bax_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"reactome","id":"REACT_2560.3"},{"db":"intact","id":"EBI-709481"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q07812"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q07812"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MASGQGPGPPRQECGEPALPSASEEQVAQDTEEVFRSYVFYRHQQEQEAEGVAAPADPEMVTLPLQPSSTMGQVGRQLAIIGDDINRRYDSEFQTMLQHLQPTAENAYEYFTKIATSLFESGINWGRVVALLGFGYRLALHVYQHGLTGFLGQVTRFVVDFMLHHCIARWIAQRGGWVAALNLGNGPILNVLVVLGVVLLGQFVVRRFFKS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q16611"},
		"label":"bak_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"reactome","id":"REACT_4956.2"},{"db":"intact","id":"EBI-709523"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q16611"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q16611"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"reactome","id":"REACT_4085.1"},{"db":"intact","id":"EBI-709556"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"O43521"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"24201748",
				"name":"bcl2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["11957535"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P10415"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11957535",
				"name":"bcl2l11 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["24201748"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"reactome","id":"REACT_4294.1"},{"db":"intact","id":"EBI-709568"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q07817-1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"12803105",
				"name":"bid binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["30774153"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P55957"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"30774153",
				"name":"bcl2l11 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["12803105"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSPEMGELTQTRLQKIWIPHSSGSSRLQRRRGSSIPQFTNSPTMVIMVGLPARGKTYISTKLTRYLNWIGTPTKVFNLGQYRREAVSYKNYEFFLPDNMEALQIRKQCALAALKDVHNYLSHEEGHVAVFDATNTTRERRSLILQFAKEHGYKVFFIESICNDPGIIAENIRQVKLGSPDYIDCDREKVLEDFLKRIECYEVNYQPLDEELDSHLSYIKIFDVGTRYMVNRVQDHIQSRTVYYLMNIHVTPRSIYLCRHGESELNIRGRIGGDSGLSVRGKQYAYALANFIQSQGISSLKVWTSHMKRTIQTAEALGVPYEQWKALNEIDAGVCEEMTYEEIQEHYPEEFALRDQDKYRYRYPKGESYEDLVQRLEPVIMELERQENVLVICHQAVMRCLLAYFLDKSSDELPYLKCPLHTVLKLTPVAYGCKVESIYLNVEAVNTHREKPENVDITREPEEALDTVPAHY",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P16118"},
		"label":"f261_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"reactome","id":"REACT_2587.1"},{"db":"intenz","id":"3.1.3.46"},{"db":"intenz","id":"2.7.1.105"},{"db":"intact","id":"EBI-709843"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P16118"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"13188519",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P16118"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32424504",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MVRSGNKAAVVLCMDVGFTMSNSIPGIESPFEQAKKVITMFVQRQVFAENKDEIALVLFGTDGTDNPLSGGDQYQNITVHRHLMLPDFDLLEDIESKIQPGSQQADFLDALIVSMDVIQHETIGKKFEKRHIEIFTDLSSRFSKSQLDIIIHSLKKCDISLQFFLPFSLGKEDGSGDRGDGPFRLGGHGPSFPLKGITEQQKEGLEIVKMVMISLEGEDGLDEIYSFSESLRKLCVFKKIERHSIHWPCRLTIGSNLSIRIAAYKSILQERVKKTWTVVDAKTLKKEDIQKETVYCLNDDDETEVLKEDIIQGFRYGSDIVPFSKVDEEQMKYKSEGKCFSVLGFCKSSQVQRRFFMGNQVLKVFAARDDEAAAVALSSLIHALDDLDMVAIVRYAYDKRANPQVGVAFPHIKHNYECLVYVQLPFMEDLRQYMFSSLKNSKKYAPTEAQLNAVDALIDSMSLAKKDEKTDTLEDLFPTTKIPNPRFQRLFQCLLHRALHPREPLPPIQQHIWNMLNPPAEVTTKSQIPLSKIKTLFPLIEAKKKDQVTAQEIFQDNHEDGPTAKKLKTEQGGAHFSVSSLAEGSVTSVGSVNPAENFRVLVKQKKASFEEASNQLINHIEQFLDTNETPYFMKSIDCIRAFREEAIKFSEEQRFNNFLKALQEKVEIKQLNHFWEIVVQDGITLITKEEASGSSVTAEEAKKFLAPKDKPSGDTAAVFEEGGDVDDLLDMI",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P13010"},
		"label":"xrcc5_human"
	},
	{
		"object":"interactor",
		"sequence":"MSGWESYYKTEGDEEAEEEQEENLEASGDYKYSGRDSLIFLVDASKAMFESQSEDELTPFDMSIQCIQSVYISKIISSDRDLLAVVFYGTEKDKNSVNFKNIYVLQELDNPGAKRILELDQFKGQQGQKRFQDMMGHGSDYSLSEVLWVCANLFSDVQFKMSHKRIMLFTNEDNPHGNDSAKASRARTKAGDLRDTGIFLDLMHLKKPGGFDISLFYRDIISIAEDEDLRVHFEESSKLEDLLRKVRAKETRKRALSRLKLKLNKDIVISVGIYNLVQKALKPPPIKLYRETNEPVKTKTRTFNTSTGGLLLPSDTKRSQIYGSRQIILEKEETEELKRFDDPGLMLMGFKPLVLLKKHHYLRPSLFVYPEESLVIGSSTLFSALLIKCLEKEVAALCRYTPRRNIPPYFVALVPQEEELDDQKIQVTPPGFQLVFLPFADDKRKMPFTEKIMATPEQVGKMKAIVEKLRFTYRSDSFENPVLQQHFRNLEALALDLMEPEQAVDLTLPKVEAMNKRLGSLVDEFKELVYPPDYNPEGKVTKRKHDNEGSGSKRPKVEYSEEELKTHISKGTLGKFTVPMLKEACRAYGLKSGLKKQELLEALTKHFQD",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P12956"},
		"label":"xrcc6_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1jey"},{"db":"wwpdb","id":"1jeq"},{"db":"reactome","id":"REACT_3482.1"},{"db":"intact","id":"EBI-761759"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P13010"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"1124363",
				"name":"xrcc6 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["375-503"],
				"linkedFeatures":["6035813"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P12956"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"6035813",
				"name":"xrcc5 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["379-483"],
				"linkedFeatures":["1124363"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSGASSSEQNNNSYETKTPNLRMSEKKCSWASYMTNSPTLIVMIGLPARGKTYVSKKLTRYLNWIGVPTKVFNLGVYRREAVKSYKSYDFFRHDNEEAMKIRKQCALVALEDVKAYLTEENGQIAVFDATNTTRERRDMILNFAEQNSFKVFFVESVCDDPDVIAANILEVKVSSPDYPERNRENVMEDFLKRIECYKVTYRPLDPDNYDKDLSFIKVINVGQRFLVNRVQDYIQSKIVYYLMNIHVQPRTIYLCRHGESEFNLLGKIGGDSGLSVRGKQFAQALRKFLEEQEITDLKVWTSQLKRTIQTAESLGVPYEQWKILNEIDAGVCEEMTYAEIEKRYPEEFALRDQEKYLYRYPGGESYQDLVQRLEPVIMELERQGNVLVISHQAVMRCLLAYFLDKGADELPYLRCPLHTIFKLTPVAYGCKVETIKLNVEAVNTHRDKPTNNFPKNQTPVRMRRNSFTPLSSSNTIRRPRNYSVGSRPLKPLSPLRAQDMQEGAD",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O60825"},
		"label":"f262_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"3.1.3.46"},{"db":"reactome","id":"REACT_2573.1"},{"db":"intact","id":"EBI-764446"},{"db":"intenz","id":"2.7.1.105"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"O60825"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"8875120",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O60825"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"14700598",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MPLELTQSRVQKIWVPVDHRPSLPRSCGPKLTNSPTVIVMVGLPARGKTYISKKLTRYLNWIGVPTKVFNVGEYRREAVKQYSSYNFFRPDNEEAMKVRKQCALAALRDVKSYLAKEGGQIAVFDATNTTRERRHMILHFAKENDFKAFFIESVCDDPTVVASNIMEVKISSPDYKDCNSAEAMDDFMKRISCYEASYQPLDPDKCDRDLSLIKVIDVGRRFLVNRVQDHIQSRIVYYLMNIHVQPRTIYLCRHGENEHNLQGRIGGDSGLSSRGKKFASALSKFVEEQNLKDLRVWTSQLKSTIQTAEALRLPYEQWKALNEIDAGVCEELTYEEIRDTYPEEYALREQDKYYYRYPTGESYQDLVQRLEPVIMELERQENVLVICHQAVLRCLLAYFLDKSAEEMPYLKCPLHTVLKLTPVAYGCRVESIYLNVESVCTHRERSEDAKKGPNPLMRRNSVTPLASPEPTKKPRINSFEEHVASTSAALPSCLPPEVPTQLPGQNMKGSRSSADSSRKH",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q16875"},
		"label":"f263_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"3.1.3.46"},{"db":"intact","id":"EBI-764519"},{"db":"reactome","id":"REACT_2880.1"},{"db":"intenz","id":"2.7.1.105"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q16875"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11670773",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q16875"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"25039467",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MASPRELTQNPLKKIWMPYSNGRPALHACQRGVCMTNCPTLIVMVGLPARGKTYISKKLTRYLNWIGVPTREFNVGQYRRDVVKTYKSFEFFLPDNEEGLKIRKQCALAALRDVRRFLSEEGGHVAVFDATNTTRERRATIFNFGEQNGYKTFFVESICVDPEVIAANIVQVKLGSPDYVNRDSDEATEDFMRRIECYENSYESLDEDLDRDLSYIKIMDVGQSYVVNRVADHIQSRIVYYLMNIHVTPRSIYLCRHGESELNLKGRIGGDPGLSPRGREFAKSLAQFISDQNIKDLKVWTSQMKRTIQTAEALGVPYEQWKVLNEIDAGVCEEMTYEEIQDNYPLEFALRDQDKYRYRYPKGESYEDLVQRLEPVIMELERQENVLVICHQAVMRCLLAYFLDKAAEQLPYLKCPLHTVLKLTPVAYGCKVESIFLNVAAVNTHRDRPQNVDISRPPEEALVTVPAHQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q16877"},
		"label":"f264_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"3.1.3.46"},{"db":"intact","id":"EBI-764545"},{"db":"reactome","id":"REACT_3550.1"},{"db":"intenz","id":"2.7.1.105"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q16877"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32200069",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q16877"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"20689042",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MTHEEHHAAKTLGIGKAIAVLTSGGDAQGMNAAVRAVVRVGIFTGARVFFVHEGYQGLVDGGDHIKEATWESVSMMLQLGGTVIGSARCKDFREREGRLRAAYNLVKRGITNLCVIGGDGSLTGADTFRSEWSDLLSDLQKAGKITDEEATKSSYLNIVGLVGSIDNDFCGTDMTIGTDSALHRIMEIVDAITTTAQSHQRTFVLEVMGRHCGYLALVTSLSCGADWVFIPECPPDDDWEEHLCRRLSETRTRGSRLNIIIVAEGAIDKNGKPITSEDIKNLVVKRLGYDTRVTVLGHVQRGGTPSAFDRILGSRMGVEAVMALLEGTPDTPACVVSLSGNQAVRLPLMECVQVTKDVTKAMDEKKFDEALKLRGRSFMNNWEVYKLLAHVRPPVSKSGSHTVAVMNVGAPAAGMNAAVRSTVRIGLIQGNRVLVVHDGFEGLAKGQIEEAGWSYVGGWTGQGGSKLGTKRTLPKKSFEQISANITKFNIQGLVIIGGFEAYTGGLELMEGRKQFDELCIPFVVIPATVSNNVPGSDFSVGADTALNTICTTCDRIKQSAAGTKRRVFIIETMGGYCGYLATMAGLAAGADAAYIFEEPFTIRDLQANVEHLVQKMKTTVKRGLVLRNEKCNENYTTDFIFNLYSEEGKGIFDSRKNVLGHMQQGGSPTPFDRNFATKMGAKAMNWMSGKIKESYRNGRIFANTPDSGCVLGMRKRALVFQPVAELKDQTDFEHRIPKEQWWLKLRPILKILAKYEIDLDTSDHAHLEHITRKRSGEAAV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P08237"},
		"label":"k6pf_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_5899.1"},{"db":"intact","id":"EBI-764595"},{"db":"omim","id":"232800"},{"db":"intenz","id":"2.7.1.11"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P08237"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P08237"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAAVDLEKLRASGAGKAIGVLTSGGDAQGMNAAVRAVTRMGIYVGAKVFLIYEGYEGLVEGGENIKQANWLSVSNIIQLGGTIIGSARCKAFTTREGRRAAAYNLVQHGITNLCVIGGDGSLTGANIFRSEWGSLLEELVAEGKISETTARTYSHLNIAGLVGSIDNDFCGTDMTIGTDSALHRIMEVIDAITTTAQSHQRTFVLEVMGRHCGYLALVSALASGADWLFIPEAPPEDGWENFMCERLGETRSRGSRLNIIIIAEGAIDRNGKPISSSYVKDLVVQRLGFDTRVTVLGHVQRGGTPSAFDRILSSKMGMEAVMALLEATPDTPACVVTLSGNQSVRLPLMECVQMTKEVQKAMDDKRFDEATQLRGGSFENNWNIYKLLAHQKPPKEKSNFSLAILNVGAPAAGMNAAVRSAVRTGISHGHTVYVVHDGFEGLAKGQVQEVGWHDVAGWLGRGGSMLGTKRTLPKGQLESIVENIRIYGIHALLVVGGFEAYEGVLQLVEARGRYEELCIVMCVIPATISNNVPGTDFSLGSDTAVNAAMESCDRIKQSASGTKRRVFIVETMGGYCGYLATVTGIAVGADAAYVFEDPFNIHDLKVNVEHMTEKMKTDIQRGLVLRNEKCHDYYTTEFLYNLYSSEGKGVFDCRTNVLGHLQQGGAPTPFDRNYGTKLGVKAMLWLSEKLREVYRKGRVFANAPDSACVIGLKKKAVAFSPVTELKKDTDFEHRMPREQWWLSLRLMLKMLAQYRISMAAYVSGELEHVTRRTLSMDKGF",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P17858"},
		"label":"k6pl_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_2915.1"},{"db":"intact","id":"EBI-764772"},{"db":"intenz","id":"2.7.1.11"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P17858"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P17858"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDADDSRAPKGSLRKFLEHLSGAGKAIGVLTSGGDAQGMNAAVRAVVRMGIYVGAKVYFIYEGYQGMVDGGSNIAEADWESVSSILQVGGTIIGSARCQAFRTREGRLKAACNLLQRGITNLCVIGGDGSLTGANLFRKEWSGLLEELARNGQIDKEAVQKYAYLNVVGMVGSIDNDFCGTDMTIGTDSALHRIIEVVDAIMTTAQSHQRTFVLEVMGRHCGYLALVSALACGADWVFLPESPPEEGWEEQMCVKLSENRARKKRLNIIIVAEGAIDTQNKPITSEKIKELVVTQLGYDTRVTILGHVQRGGTPSAFDRILASRMGVEAVIALLEATPDTPACVVSLNGNHAVRLPLMECVQMTQDVQKAMDERRFQDAVRLRGRSFAGNLNTYKRLAIKLPDDQIPKTNCNVAVINVGAPAAGMNAAVRSAVRVGIADGHRMLAIYDGFDGFAKGQIKEIGWTDVGGWTGQGGSILGTKRVLPGKYLEEIATQMRTHSINALLIIGGFEAYLGLLELSAAREKHEEFCVPMVMVPATVSNNVPGSDFSIGADTALNTITDTCDRIKQSASGTKRRVFIIETMGGYCGYLANMGGLAAGADAAYIFEEPFDIRDLQSNVEHLTEKMKTTIQRGLVLRNESCSENYTTDFIYQLYSEEGKGVFDCRKNVLGHMQQGGAPSPFDRNFGTKISARAMEWITAKLKEARGRGKKFTTDDSICVLGISKRNVIFQPVAELKKQTDFEHRIPKEQWWLKLRPLMKILAKYKASYDVSDSGQLEHVQPWSV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q01813"},
		"label":"k6pp_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_4228.2"},{"db":"intact","id":"EBI-764798"},{"db":"intenz","id":"2.7.1.11"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q01813"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q01813"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_5684.1"},{"db":"intact","id":"EBI-764890"},{"db":"intenz","id":"2.7.1.11"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P08237"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"29713075",
				"name":"pfkl binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["30601561"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P17858"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"30601561",
				"name":"pfkm binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["29713075"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.7.1.11"},{"db":"intact","id":"EBI-764901"},{"db":"reactome","id":"REACT_5456.1"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P08237"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"31663005",
				"name":"pfkl binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["20390033"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P17858"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"20390033",
				"name":"pfkm binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["31663005"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_5445.1"},{"db":"intact","id":"EBI-764934"},{"db":"intenz","id":"2.7.1.11"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P08237"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"3871825",
				"name":"pfkl binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["11719419"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P17858"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11719419",
				"name":"pfkm binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["3871825"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"METGFPAIMYPGSFIGGWGEEYLSWEGPGLPDFVFQQQPVESEAMHCSNPKSGVVLATVARGPDACQILTRAPLGQDPPQRTVLGLLTANGQYRRTCGQGITRIRCYSGSENAFPPAGKKALPDCGVQEPPKQGFDIYMDELEQGDRDSCSVREGMAFEDVYEVDTGTLKSDLHFLLDFNTVSPMLVDSSLLSQSEDISSLGTDVINVTEYAEEIYQYLREAEIRHRPKAHYMKKQPDITEGMRTILVDWLVEVGEEYKLRAETLYLAVNFLDRFLSCMSVLRGKLQLVGTAAMLLASKYEEIYPPEVDEFVYITDDTYTKRQLLKMEHLLLKVLAFDLTVPTTNQFLLQYLRRQGVCVRTENLAKYVAELSLLEADPFLKYLPSLIAAAAFCLANYTVNKHFWPETLAAFTGYSLSEIVPCLSELHKAYLDIPHRPQQAIREKYKASKYLCVSLMEPPAVLLLQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P78396"},
		"label":"ccna1_human"
	},
	{
		"object":"interactor",
		"sequence":"MEDYTKIEKIGEGTYGVVYKGRHKTTGQVVAMKKIRLESEEEGVPSTAIREISLLKELRHPNIVSLQDVLMQDSRLYLIFEFLSMDLKKYLDSIPPGQYMDSSLVKSYLYQILQGIVFCHSRRVLHRDLKPQNLLIDDKGTIKLADFGLARAFGIPIRVYTHEVVTLWYRSPEVLLGSARYSTPVDIWSIGTIFAELATKKPLFHGDSEIDQLFRIFRALGTPNNEVWPEVESLQDYKNTFPKWKPGSLASHVKNLDENGLDLLSKMLIYDPAKRISGKMALNHPYFNDLDNQIKKM",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P06493"},
		"label":"cdk1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"2.7.11.22"},{"db":"intenz","id":"2.7.11.23"},{"db":"intact","id":"EBI-766719"},{"db":"reactome","id":"REACT_4408.1"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P78396"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"3774616",
				"name":"cdk1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["22095711"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P06493"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22095711",
				"name":"ccna1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["3774616"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLGNSAPGPATREAGSALLALQQTALQEDQENINPEKAAPVQQPRTRAALAVLKSGNPRGLAQQQRPKTRRVAPLKDLPVNDEHVTVPPWKANSKQPAFTIHVDEAEKEAQKKPAESQKIEREDALAFNSAISLPGPRKPLVPLDYPMDGSFESPHTMDMSIILEDEKPVSVNEVPDYHEDIHTYLREMEVKCKPKVGYMKKQPDITNSMRAILVDWLVEVGEEYKLQNETLHLAVNYIDRFLSSMSVLRGKLQLVGTAAMLLASKFEEIYPPEVAEFVYITDDTYTKKQVLRMEHLVLKVLTFDLAAPTVNQFLTQYFLHQQPANCKVESLAMFLGELSLIDADPYLKYLPSVIAGAAFHLALYTVTGQSWPESLIRKTGYTLESLKPCLMDLHQTYLKAPQHAQQSIREKYKNSKYHGVSLLNPPETLNL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P20248"},
		"label":"ccna2_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"2.7.11.23"},{"db":"intact","id":"EBI-766779"},{"db":"intenz","id":"2.7.11.22"},{"db":"reactome","id":"REACT_4651.1"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P20248"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"15732287",
				"name":"cdk1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["3635389"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P06493"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"3635389",
				"name":"ccna2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["15732287"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MENFQKVEKIGEGTYGVVYKARNKLTGEVVALKKIRLDTETEGVPSTAIREISLLKELNHPNIVKLLDVIHTENKLYLVFEFLHQDLKKFMDASALTGIPLPLIKSYLFQLLQGLAFCHSHRVLHRDLKPQNLLINTEGAIKLADFGLARAFGVPVRTYTHEVVTLWYRAPEILLGCKYYSTAVDIWSLGCIFAEMVTRRALFPGDSEIDQLFRIFRTLGTPDEVVWPGVTSMPDYKPSFPKWARQDFSKVVPPLDEDGRSLLSQMLHYDPNKRISAKAALAHPFFQDVTKPVPHLRL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P24941"},
		"label":"cdk2_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"chembl","id":"CHEMBL2094128"},{"db":"intact","id":"EBI-767663"},{"db":"intenz","id":"2.7.11.22"},{"db":"reactome","id":"REACT_4408.1"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P78396"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"30925902",
				"name":"cdk2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["13496343"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P24941"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"13496343",
				"name":"ccna1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["30925902"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1VYW"},{"db":"intact","id":"EBI-767671"},{"db":"intenz","id":"2.7.11.22"},{"db":"chembl","id":"CHEMBL2094128"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P20248"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"5091555",
				"name":"cdk2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["9969364"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P24941"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"9969364",
				"name":"ccna2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["5091555"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MALRVTRNSKINAENKAKINMAGAKRVPTAPAATSKPGLRPRTALGDIGNKVSEQLQAKMPMKKEAKPSATGKVIDKKLPKPLEKVPMLVPVPVSEPVPEPEPEPEPEPVKEEKLSPEPILVDTASPSPMETSGCAPAEEDLCQAFSDVILAVNDVDAEDGADPNLCSEYVKDIYAYLRQLEEEQAVRPKYLLGREVTGNMRAILIDWLVQVQMKFRLLQETMYMTVSIIDRFMQNNCVPKKMLQLVGVTAMFIASKYEEMYPPEIGDFAFVTDNTYTKHQIRQMEMKILRALNFGLGRPLPLHFLRRASKIGEVDVEQHTLAKYLMELTMLDYDMVHFPPSQIAAGAFCLALKILDNGEWTPTLQHYLSYTEESLLPVMQHLAKNVVMVNQGLTKHMTVKNKYATSKHAKISTLPQLNSALVQDLAKAVAKV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P14635"},
		"label":"ccnb1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"chembl","id":"CHEMBL2094127"},{"db":"reactome","id":"REACT_6578.1"},{"db":"reactome","id":"REACT_6474.1"},{"db":"reactome","id":"REACT_3166.2"},{"db":"reactome","id":"REACT_6540.1"},{"db":"reactome","id":"REACT_6406.1"},{"db":"reactome","id":"REACT_6704.1"},{"db":"reactome","id":"REACT_6390.1"},{"db":"intact","id":"EBI-767678"},{"db":"intenz","id":"2.7.11.23"},{"db":"intenz","id":"2.7.11.22"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P14635"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17836293",
				"name":"cdk1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["32844463"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P06493"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32844463",
				"name":"ccnb1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["17836293"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MALLRRPTVSSDLENIDTGVNSKVKSHVTIRRTVLEEIGNRVTTRAAQVAKKAQNTKVPVQPTKTTNVNKQLKPTASVKPVQMEKLAPKGPSPTPEDVSMKEENLCQAFSDALLCKIEDIDNEDWENPQLCSDYVKDIYQYLRQLEVLQSINPHFLDGRDINGRMRAILVDWLVQVHSKFRLLQETLYMCVGIMDRFLQVQPVSRKKLQLVGITALLLASKYEEMFSPNIEDFVYITDNAYTSSQIREMETLILKELKFELGRPLPLHFLRRASKAGEVDVEQHTLAKYLMELTLIDYDMVHYHPSKVAAAASCLSQKVLGQGKWNLKQQYYTGYTENEVLEVMQHMAKNVVKVNENLTKFIAIKNKYASSKLLKISMIPQLNSKAVKDLASPLIGRS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O95067"},
		"label":"ccnb2_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"chembl","id":"CHEMBL2094127"},{"db":"reactome","id":"REACT_4066.2"},{"db":"reactome","id":"REACT_6445.1"},{"db":"intenz","id":"2.7.11.23"},{"db":"intenz","id":"2.7.11.22"},{"db":"intact","id":"EBI-767743"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P06493"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"12934055",
				"name":"ccnb2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["17062494"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O95067"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17062494",
				"name":"cdk1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["12934055"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLLPLPPQSSKPVPKKSQSSKIVPSHHDPSEKTGENCQTKISPSSLQESPSSLQGALKKRSAFEDLTNASQCQPVQPKKEANKEFVKVVSKKINRNTHALGLAKKNKRNLKWHKLEVTPVVASTTVVPNIMEKPLILDISTTSKTPNTEEASLFRKPLVLKEEPTIEDETLINKSLSLKKCSNHEEVSLLEKLQPLQEESDSDDAFVIEPMTFKKTHKTEEAAITKKTLSLKKKMCASQRKQSCQEESLAVQDVNMEEDSFFMESMSFKKKPKTEESIPTHKLSSLKKKCTIYGKICHFRKPPVLQTTICGAMSSIKKPTTEKETLFQELSVLQEKHTTEHEMSILKKSLALQKTNFKEDSLVKESLAFKKKPSTEEAIMMPVILKEQCMTEGKRSRLKPLVLQEITSGEKSLIMKPLSIKEKPSTEKESFSQEPSALQKKHTTQEEVSILKEPSSLLKSPTEESPFDEALAFTKKCTIEEAPPTKKPLILKRKHATQGTMSHLKKPLILQTTSGEKSLIKEPLPFKEEKVSLKKKCTTQEMMSICPELLDFQDMIGEDKNSFFMEPMSFRKNPTTEETVLTKTSLSLQEKKITQGKMSHLKKPLVLQKITSEEESFYKKLLPFKMKSTTEEKFLSQEPSALKEKHTTLQEVSLSKESLAIQEKATTEEEFSQELFSLHVKHTNKSGSLFQEALVLQEKTDAEEDSLKNLLALQEKSTMEEESLINKLLALKEELSAEAATNIQTQLSLKKKSTSHGKVFFLKKQLALNETINEEEFLNKQPLALEGYPSIAEGETLFKKLLAMQEEPSIEKEAVLKEPTIDTEAHFKEPLALQEEPSTEKEAVLKEPSVDTEAHFKETLALQEKPSIEQEALFKRHSALWEKPSTEKETIFKESLDLQEKPSIKKETLLKKPLALKMSTINEAVLFEDMIALNEKPTTGKELSFKEPLALQESPTYKEDTFLKTLLVPQVGTSPNVSSTAPESITSKSSIATMTSVGKSGTINEAFLFEDMITLNEKPTTGKELSFKEPLALQESPTCKEDTFLETFLIPQIGTSPYVFSTTPESITEKSSIATMTSVGKSRTTTESSACESASDKPVSPQAKGTPKEITPREDIDEDSSDPSFNPMYAKEIFSYMKEREEQFILTDYMNRQIEITSDMRAILVDWLVEVQVSFEMTHETLYLAVKLVDLYLMKAVCKKDKLQLLGATAFMIAAKFEEHNSPRVDDFVYICDDNYQRSEVLSMEINILNVLKCDINIPIAYHFLRRYARCIHTNMKTLTLSRYICEMTLQEYHYVQEKASKLAAASLLLALYMKKLGYWVPFLEHYSGYSISELHPLVRQLNKLLTFSSYDSLKAVYYKYSHPVFFEVAKIPALDMLKLEEILNCDCEAQGLVL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q8WWL7"},
		"label":"ccnb3_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"2.7.11.22"},{"db":"intact","id":"EBI-767837"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q8WWL7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"13170898",
				"name":"cdk2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["4706439"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P24941"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"4706439",
				"name":"ccnb3 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["13170898"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MEHQLLCCEVETIRRAYPDANLLNDRVLRAMLKAEETCAPSVSYFKCVQKEVLPSMRKIVATWMLEVCEEQKCEEEVFPLAMNYLDRFLSLEPVKKSRLQLLGATCMFVASKMKETIPLTAEKLCIYTDNSIRPEELLQMELLLVNKLKWNLAAMTPHDFIEHFLSKMPEAEENKQIIRKHAQTFVALCATDVKFISNPPSMVAAGSVVAAVQGLNLRSPNNFLSYYRLTRFLSRVIKCDPDCLRACQEQIEALLESSLRQAQQNMDPKAAEEEEEEEEEVDLACTPTDVRDVDI",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P24385"},
		"label":"ccnd1_human"
	},
	{
		"object":"interactor",
		"sequence":"MATSRYEPVAEIGVGAYGTVYKARDPHSGHFVALKSVRVPNGGGGGGGLPISTVREVALLRRLEAFEHPNVVRLMDVCATSRTDREIKVTLVFEHVDQDLRTYLDKAPPPGLPAETIKDLMRQFLRGLDFLHANCIVHRDLKPENILVTSGGTVKLADFGLARIYSYQMALTPVVVTLWYRAPEVLLQSTYATPVDMWSVGCIFAEMFRRKPLFCGNSEADQLGKIFDLIGLPPEDDWPRDVSLPRGAFPPRGPRPVQSVVPEMEESGAQLLLEMLTFNPHKRISAFRALQHSYLHKDEGNPE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P11802"},
		"label":"cdk4_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"2w9z"},{"db":"intact","id":"EBI-767849"},{"db":"reactome","id":"REACT_5446.1"},{"db":"wwpdb","id":"2w99"},{"db":"wwpdb","id":"2w96"},{"db":"reactome","id":"REACT_4903.1"},{"db":"intenz","id":"2.7.11.22"},{"db":"wwpdb","id":"2w9f"},{"db":"chembl","id":"CHEMBL2095942"},{"db":"reactome","id":"REACT_2478.1"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P24385"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"13339054",
				"name":"cdk4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["12329944"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P11802"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"12329944",
				"name":"ccnd1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["13339054"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MELLCHEVDPVRRAVRDRNLLRDDRVLQNLLTIEERYLPQCSYFKCVQKDIQPYMRRMVATWMLEVCEEQKCEEEVFPLAMNYLDRFLAGVPTPKSHLQLLGAVCMFLASKLKETSPLTAEKLCIYTDNSIKPQELLEWELVVLGKLKWNLAAVTPHDFIEHILRKLPQQREKLSLIRKHAQTFIALCATDFKFAMYPPSMIATGSVGAAICGLQQDEEVSSLTCDALTELLAKITNTDVDCLKACQEQIEAVLLNSLQQYRQDQRDGSKSEDELDQASTPTDVRDIDL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P30279"},
		"label":"ccnd2_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"2.7.11.22"},{"db":"intact","id":"EBI-767885"},{"db":"chembl","id":"CHEMBL2095942"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P11802"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"30756819",
				"name":"ccnd2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["23836940"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P30279"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"23836940",
				"name":"cdk4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["30756819"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MELLCCEGTRHAPRAGPDPRLLGDQRVLQSLLRLEERYVPRASYFQCVQREIKPHMRKMLAYWMLEVCEEQRCEEEVFPLAMNYLDRYLSCVPTRKAQLQLLGAVCMLLASKLRETTPLTIEKLCIYTDHAVSPRQLRDWEVLVLGKLKWDLAAVIAHDFLAFILHRLSLPRDRQALVKKHAQTFLALCATDYTFAMYPPSMIATGSIGAAVQGLGACSMSGDELTELLAGITGTEVDCLRACQEQIEAALRESLREASQTSSSPAPKAPRGSSSQGPSQTSTPTDVTAIHL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P30281"},
		"label":"ccnd3_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"3g33"},{"db":"intenz","id":"2.7.11.22"},{"db":"intact","id":"EBI-767922"},{"db":"chembl","id":"CHEMBL2095942"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P30281"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"21098410",
				"name":"cdk4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["31306696"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P11802"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"31306696",
				"name":"ccnd2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21098410"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MEKDGLCRADQQYECVAEIGEGAYGKVFKARDLKNGGRFVALKRVRVQTGEEGMPLSTIREVAVLRHLETFEHPNVVRLFDVCTVSRTDRETKLTLVFEHVDQDLTTYLDKVPEPGVPTETIKDMMFQLLRGLDFLHSHRVVHRDLKPQNILVTSSGQIKLADFGLARIYSFQMALTSVVVTLWYRAPEVLLQSSYATPVDLWSVGCIFAEMFRRKPLFRGSSDVDQLGKILDVIGLPGEEDWPRDVALPRQAFHSKSAQPIEKFVTDIDELGKDLLLKCLTFNPAKRISAYSALSHPYFQDLERCKENLDSHLPPSQNTSELNTA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q00534"},
		"label":"cdk6_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"2.7.11.22"},{"db":"intact","id":"EBI-768433"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P30281"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q00534"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"2.7.11.22"},{"db":"intact","id":"EBI-768466"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P24385"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q00534"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MPRERRERDAKERDTMKEDGGAEFSARSRKRKANVTVFLQDPDEEMAKIDRTARDQCGSQPWDNNAVCADPCSLIPTPDKEDDDRVYPNSTCKPRIIAPSRGSPLPVLSWANREEVWKIMLNKEKTYLRDQHFLEQHPLLQPKMRAILLDWLMEVCEVYKLHRETFYLAQDFFDRYMATQENVVKTLLQLIGISSLFIAAKLEEIYPPKLHQFAYVTDGACSGDEILTMELMIMKALKWRLSPLTIVSWLNVYMQVAYLNDLHEVLLPQYPQQIFIQIAELLDLCVLDVDCLEFPYGILAASALYHFSSSELMQKVSGYQWCDIENCVKWMVPFAMVIRETGSSKLKHFRGVADEDAHNIQTHRDSLDLLDKARAKKAMLSEQNRASPLPSGLLTPPQSGKKQSSGPEMA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P24864"},
		"label":"ccne1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"reactome","id":"REACT_2714.1"},{"db":"reactome","id":"REACT_4601.1"},{"db":"reactome","id":"REACT_4199.1"},{"db":"intact","id":"EBI-768477"},{"db":"wwpdb","id":"1w98"},{"db":"intenz","id":"2.7.11.22"},{"db":"chembl","id":"CHEMBL2094126"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P24864"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"4597765",
				"name":"cdk2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["32334452"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P24941"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32334452",
				"name":"ccne1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["4597765"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSRRSSRLQAKQQPQPSQTESPQEAQIIQAKKRKTTQDVKKRREEVTKKHQYEIRNCWPPVLSGGISPCIIIETPHKEIGTSDFSRFTNYRFKNLFINPSPLPDLSWGCSKEVWLNMLKKESRYVHDKHFEVLHSDLEPQMRSILLDWLLEVCEVYTLHRETFYLAQDFFDRFMLTQKDINKNMLQLIGITSLFIASKLEEIYAPKLQEFAYVTDGACSEEDILRMELIILKALKWELCPVTIISWLNLFLQVDALKDAPKVLLPQYSQETFIQIAQLLDLCILAIDSLEFQYRILTAAALCHFTSIEVVKKASGLEWDSISECVDWMVPFVNVVKSTSPVKLKTFKKIPMEDRHNIQTHTNYLAMLEEVNYINTFRKGGQLSPVCNGGIMTPPKSTEKPPGKH",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O96020"},
		"label":"ccne2_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"reactome","id":"REACT_4967.1"},{"db":"reactome","id":"REACT_5296.1"},{"db":"intact","id":"EBI-768489"},{"db":"intenz","id":"2.7.11.22"},{"db":"reactome","id":"REACT_3967.1"},{"db":"chembl","id":"CHEMBL2094126"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"O96020"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"31111928",
				"name":"cdk2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["19466323"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P24941"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19466323",
				"name":"ccne2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["31111928"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSVGFIGAGQLAFALAKGFTAAGVLAAHKIMASSPDMDLATVSALRKMGVKLTPHNKETVQHSDVLFLAVKPHIIPFILDEIGADIEDRHIVVSCAAGVTISSIEKKLSAFRPAPRVIRCMTNTPVVVREGATVYATGTHAQVEDGRLMEQLLSSVGFCTEVEEDLIDAVTGLSGSGPAYAFTALDALADGGVKMGLPRRLAVRLGAQALLGAAKMLLHSEQHPGQLKDNVSSPGGATIHALHVLESGGFRSLLINAVEASCIRTRELQSMADQEQVSPAAIKKTILDKVKLDSPAGTALSPSGHTKLLPRSLAPAGKD",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P32322"},
		"label":"p5cr1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"1.5.1.2"},{"db":"intact","id":"EBI-848646"},{"db":"reactome","id":"REACT_2465.1"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32322"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P32322"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"METFDPTELPELLKLYYRRLFPYSQYYRWLNYGGVIKNYFQHREFSFTLKDDIYIRYQSFNNQSDLEKEMQKMNPYKIDIGAVYSHRPNQHNTVKLGAFQAQEKELVFDIDMTDYDDVRRCCSSADICPKCWTLMTMAIRIIDRALKEDFGFKHRLWVYSGRRGVHCWVCDESVRKLSSAVRSGIVEYLSLVKGGQDVKKKVHLSEKIHPFIRKSINIIKKYFEEYALVNQDILENKESWDKILALVPETIHDELQQSFQKSHNSLQRWEHLKKVASRYQNNIKNDKYGPWLEWEIMLQYCFPRLDINVSKGINHLLKSPFSVHPKTGRISVPIDLQKVDQFDPFTVPTISFICRELDAISTNEEEKEENEAESDVKHRTRDYKKTSLAPYVKVFEHFLENLDKSRKGELLKKSDLQKDF",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P49642"},
		"label":"pri1_human"
	},
	{
		"object":"interactor",
		"sequence":"MAPVHGDDSLSDSGSFVSSRARREKKSKKGRQEALERLKKAKAGEKYKYEVEDFTGVYEEVDEEQYSKLVQARQDDDWIVDDDGIGYVEDGREIFDDDLEDDALDADEKGKDGKARNKDKRNVKKLAVTKPNNIKSMFIACAGKKTADKAVDLSKDGLLGDILQDLNTETPQITPPPVMILKKKRSIGASPNPFSVHTATAVPSGKIASPVSRKEPPLTPVPLKRAEFAGDDVQVESTEEEQESGAMEFEDGDFDEPMEVEEVDLEPMAAKAWDKESEPAEEVKQEADSGKGTVSYLGSFLPDVSCWDIDQEGDSSFSVQEVQVDSSHLPLVKGADEEQVFHFYWLDAYEDQYNQPGVVFLFGKVWIESAETHVSCCVMVKNIERTLYFLPREMKIDLNTGKETGTPISMKDVYEEFDEKIATKYKIMKFKSKPVEKNYAFEIPDVPEKSEYLEVKYSAEMPQLPQDLKGETFSHVFGTNTSSLELFLMNRKIKGPCWLEVKSPQLLNQPVSWCKVEAMALKPDLVNVIKDVSPPPLVVMAFSMKTMQNAKNHQNEIIAMAALVHHSFALDKAAPKPPFQSHFCVVSKPKDCIFPYAFKEVIEKKNVKVEVAATERTLLGFFLAKVHKIDPDIIVGHNIYGFELEVLLQRINVCKAPHWSKIGRLKRSNMPKLGGRSGFGERNATCGRMICDVEISAKELIRCKSYHLSELVQQILKTERVVIPMENIQNMYSESSQLLYLLEHTWKDAKFILQIMCELNVLPLALQITNIAGNIMSRTLMGGRSERNEFLLLHAFYENNYIVPDKQIFRKPQQKLGDEDEEIDGDTNKYKKGRKKAAYAGGLVLDPKVGFYDKFILLLDFNSLYPSIIQEFNICFTTVQRVASEAQKVTEDGEQEQIPELPDPSLEMGILPREIRKLVERRKQVKQLMKQQDLNPDLILQYDIRQKALKLTANSMYGCLGFSYSRFYAKPLAALVTYKGREILMHTKEMVQKMNLEVIYGDTDSIMINTNSTNLEEVFKLGNKVKSEVNKLYKLLEIDIDGVFKSLLLLKKKKYAALVVEPTSDGNYVTKQELKGLDIVRRDWCDLAKDTGNFVIGQILSDQSRDTIVENIQKRLIEIGENVLNGSVPVSQFEINKALTKDPQDYPDKKSLPHVHVALWINSQGGRKVKAGDTVSYVICQDGSNLTASQRAYAPEQLQKQDNLTIDTQYYLAQQIHPVVARICEPIDGIDAVLIATWLGLDPTQFRVHHYHKDEENDALLGGPAQLTDEEKYRDCERFKCPCPTCGTENIYDNVFDGSGTDMEPSLYRCSNIDCKASPLTFTVQLSNKLIMDIRRFIKKYYDGWLICEEPTCRNRTRHLPLQFSRTGPLCPACMKATLQPEYSDKSLYTQLCFYRYIFDAECALEKLTTDHEKDKLKKQFFTPKVLQDYRKLKNTAEQFLSRSGYSEVNLSKLFAGCAVKS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P09884"},
		"label":"dpola_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_3725.2"},{"db":"intact","id":"EBI-850302"},{"db":"intenz","id":"2.7.7.7"}],
		"expansion":{"id":"0","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49642"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"14787216",
				"name":"prim2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-420"],
				"linkedFeatures":["24630216"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P09884"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32577857",
				"name":"pola2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1275-1462"],
				"linkedFeatures":["28378010"]
				},
				{
				"id":"6531762",
				"name":"prim2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1279-1462"],
				"linkedFeatures":["22783478"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSASAQQLAEELQIFGLDCEEALIEKLVELCVQYGQNEEGMVGELIAFCTSTHKVGLTSEILNSFEHEFLSKRLSKARHSTCKDSGHAGARDIVSIQELIEVEEEEEILLNSYTTPSKGSQKRAISTPETPLTKRSVSTRSPHQLLSPSSFSPSATPSQKYNSRSNRGEVVTSFGLAQGVSWSGRGGAGNISLKVLGCPEALTGSYKSMFQKLPDIREVLTCKIEELGSELKEHYKIEAFTPLLAPAQEPVTLLGQIGCDSNGKLNNKSVILEGDREHSSGAQIPVDLSELKEYSLFPGQVVIMEGINTTGRKLVATKLYEGVPLPFYQPTEEDADFEQSMVLVACGPYTTSDSITYDPLLDLIAVINHDRPDVCILFGPFLDAKHEQVENCLLTSPFEDIFKQCLRTIIEGTRSSGSHLVFVPSLRDVHHEPVYPQPPFSYSDLSREDKKQVQFVSEPCSLSINGVIFGLTSTDLLFHLGAEEISSSSGTSDRFSRILKHILTQRSYYPLYPPQEDMAIDYESFYVYAQLPVTPDVLIIPSELRYFVKDVLGCVCVNPGRLTKGQVGGTFARLYLRRPAADGAERQSPCIAVQVVRI",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q14181"},
		"label":"dpoa2_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_3725.2"},{"db":"intact","id":"EBI-850302"},{"db":"intenz","id":"2.7.7.7"}],
		"expansion":{"id":"0","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49642"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"14787216",
				"name":"prim2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-420"],
				"linkedFeatures":["24630216"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q14181"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"28378010",
				"name":"pola1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-598"],
				"linkedFeatures":["32577857"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MEFSGRKWRKLRLAGDQRNASYPHCLQFYLQPPSENISLIEFENLAIDRVKLLKSVENLGVSYVKGTEQYQSKLESELRKLKFSYRENLEDEYEPRRRDHISHFILRLAYCQSEELRRWFIQQEMDLLRFRFSILPKDKIQDFLKDSQLQFEAISDEEKTLREQEIVASSPSLSGLKLGFESIYKIPFADALDLFRGRKVYLEDGFAYVPLKDIVAIILNEFRAKLSKALALTARSLPAVQSDERLQPLLNHLSHSYTGQDYSTQGNVGKISLDQIDLLSTKSFPPCMRQLHKALRENHHLRHGGRMQYGLFLKGIGLTLEQALQFWKQEFIKGKMDPDKFDKGYSYNIRHSFGKEGKRTDYTPFSCLKIILSNPPSQGDYHGCPFRHSDPELLKQKLQSYKISPGGISQILDLVKGTHYQVACQKYFEMIHNVDDCGFSLNHPNQFFCESQRILNGGKDIKKEPIQPETPQPKPSVQKTKDASSALASLNSSLEMDMEGLEDYFSEDS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P49643"},
		"label":"pri2_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_3725.2"},{"db":"intact","id":"EBI-850302"},{"db":"intenz","id":"2.7.7.7"}],
		"expansion":{"id":"0","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49642"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"14787216",
				"name":"prim2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-420"],
				"linkedFeatures":["24630216"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P49643"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22783478",
				"name":"pola1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-509"],
				"linkedFeatures":["6531762"]
				},
				{
				"id":"24630216",
				"name":"prim1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-509"],
				"linkedFeatures":["14787216"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MRSRVAVRACHKVCRCLLSGFGGRVDAGQPELLTERSSPKGGHVKSHAELEGNGEHPEAPGSGEGSEALLEICQRRHFLSGSKQQLSRDSLLSGCHPGFGPLGVELRKNLAAEWWTSVVVFREQVFPVDALHHKPGPLLPGDSAFRLVSAETLREILQDKELSKEQLVAFLENVLKTSGKLRENLLHGALEHYVNCLDLVNKRLPYGLAQIGVCFHPVFDTKQIRNGVKSIGEKTEASLVWFTPPRTSNQWLDFWLRHRLQWWRKFAMSPSNFSSSDCQDEEGRKGNKLYYNFPWGKELIETLWNLGDHELLHMYPGNVSKLHGRDGRKNVVPCVLSVNGDLDRGMLAYLYDSFQLTENSFTRKKNLHRKVLKLHPCLAPIKVALDVGRGPTLELRQVCQGLFNELLENGISVWPGYLETMQSSLEQLYSKYDEMSILFTVLVTETTLENGLIHLRSRDTTMKEMMHISKLKDFLIKYISSAKNV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9UHN1"},
		"label":"dpog2_human"
	},
	{
		"object":"interactor",
		"sequence":"MSRLLWRKVAGATVGPGPVPAPGRWVSSSVPASDPSDGQRRRQQQQQQQQQQQQQPQQPQVLSSEGGQLRHNPLDIQMLSRGLHEQIFGQGGEMPGEAAVRRSVEHLQKHGLWGQPAVPLPDVELRLPPLYGDNLDQHFRLLAQKQSLPYLEAANLLLQAQLPPKPPAWAWAEGWTRYGPEGEAVPVAIPEERALVFDVEVCLAEGTCPTLAVAISPSAWYSWCSQRLVEERYSWTSQLSPADLIPLEVPTGASSPTQRDWQEQLVVGHNVSFDRAHIREQYLIQGSRMRFLDTMSMHMAISGLSSFQRSLWIAAKQGKHKVQPPTKQGQKSQRKARRGPAISSWDWLDISSVNSLAEVHRLYVGGPPLEKEPRELFVKGTMKDIRENFQDLMQYCAQDVWATHEVFQQQLPLFLERCPHPVTLAGMLEMGVSYLPVNQNWERYLAEAQGTYEELQREMKKSLMDLANDACQLLSGERYKEDPWLWDLEWDLQEFKQKKAKKVKKEPATASKLPIEGAGAPGDPMDQEDLGPCSEEEEFQQDVMARACLQKLKGTTELLPKRPQHLPGHPGWYRKLCPRLDDPAWTPGPSLLSLQMRVTPKLMALTWDGFPLHYSERHGWGYLVPGRRDNLAKLPTGTTLESAGVVCPYRAIESLYRKHCLEQGKQQLMPQEAGLAEEFLLTDNSAIWQTVEELDYLEVEAEAKMENLRAAVPGQPLALTARGGPKDTQPSYHHGNGPYNDVDIPGCWFFKLPHKDGNSCNVGSPFAKDFLPKMEDGTLQAGPGGASGPRALEINKMISFWRNAHKRISSQMVVWLPRSALPRAVIRHPDYDEEGLYGAILPQVVTAGTITRRAVEPTWLTASNARPDRVGSELKAMVQAPPGYTLVGADVDSQELWIAAVLGDAHFAGMHGCTAFGWMTLQGRKSRGTDLHSKTATTVGISREHAKIFNYGRIYGAGQPFAERLLMQFNHRLTQQEAAEKAQQMYAATKGLRWYRLSDEGEWLVRELNLPVDRTEGGWISLQDLRKVQRETARKSQWKKWEVVAERAWKGGTESEMFNKLESIATSDIPRTPVLGCCISRALEPSAVQEEFMTSRVNWVVQSSAVDYLHLMLVAMKWLFEEFAIDGRFCISIHDEVRYLVREEDRYRAALALQITNLLTRCMFAYKLGLNDLPQSVAFFSAVDIDRCLRKEVTMDCKTPSNPTGMERRYGIPQGEALDIYQIIELTKGSLEKRSQPGP",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P54098"},
		"label":"dpog1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"omim","id":"603041"},{"db":"omim","id":"203700"},{"db":"intenz","id":"2.7.7.7"},{"db":"intact","id":"EBI-863465"},{"db":"wwpdb","id":"3ikm"},{"db":"omim","id":"157640"},{"db":"omim","id":"258450"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9UHN1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P54098"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MFSEQAAQRAHTLLSPPSANNATFARVPVATYTNSSQPFRLGERSFSRQYAHIYATRLIQMRPFLENRAQQHWGSGVGVKKLCELQPEEKCCVVGTLFKAMPLQPSILREVSEEHNLLPQPPRSKYIHPDDELVLEDELQRIKLKGTIDVSKLVTGTVLAVFGSVRDDGKFLVEDYCFADLAPQKPAPPLDTDRFVLLVSGLGLGGGGGESLLGTQLLVDVVTGQLGDEGEQCSAAHVSRVILAGNLLSHSTQSRDSINKAKYLTKKTQAASVEAVKMLDEILLQLSASVPVDVMPGEFDPTNYTLPQQPLHPCMFPLATAYSTLQLVTNPYQATIDGVRFLGTSGQNVSDIFRYSSMEDHLEILEWTLRVRHISPTAPDTLGCYPFYKTDPFIFPECPHVYFCGNTPSFGSKIIRGPEDQTVLLVTVPDFSATQTACLVNLRSLACQPISFSGFGAEDDDLGGLGLGP",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P49005"},
		"label":"dpod2_human"
	},
	{
		"object":"interactor",
		"sequence":"MADQLYLENIDEFVTDQNKIVTYKWLSYTLGVHVNQAKQMLYDYVERKRKENSGAQLHVTYLVSGSLIQNGHSCHKVAVVREDKLEAVKSKLAVTASIHVYSIQKAMLKDSGPLFNTDYDILKSNLQNCSKFSAIQCAAAVPRAPAESSSSSKKFEQSHLHMSSETQANNELTTNGHGPPASKQVSQQPKGIMGMFASKAAAKTQETNKETKTEAKEVTNASAAGNKAPGKGNMMSNFFGKAAMNKFKVNLDSEQAVKEEKIVEQPTVSVTEPKLATPAGLKKSSKKAEPVKVLQKEKKRGKRVALSDDETKETENMRKKRRRIKLPESDSSEDEVFPDSPGAYEAESPSPPPPPSPPLEPVPKTEPEPPSVKSSSGENKRKRKRVLKSKTYLDGEGCIVTEKVYESESCTDSEEELNMKTSSVHRPPAMTVKKEPREERKGPKKGTAALGKANRQVSITGFFQRK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q15054"},
		"label":"dpod3_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_5801.1"},{"db":"intact","id":"EBI-866690"},{"db":"intenz","id":"2.7.7.7"}],
		"expansion":{"id":"1","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49005"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q15054"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDGKRRPGPGPGVPPKRARGGLWDDDDAPRPSQFEEDLALMEEMEAEHRLQEQEEEELQSVLEGVADGQVPPSAIDPRWLRPTPPALDPQTEPLIFQQLEIDHYVGPAQPVPGGPPPSRGSVPVLRAFGVTDEGFSVCCHIHGFAPYFYTPAPPGFGPEHMGDLQRELNLAISRDSRGGRELTGPAVLAVELCSRESMFGYHGHGPSPFLRITVALPRLVAPARRLLEQGIRVAGLGTPSFAPYEANVDFEIRFMVDTDIVGCNWLELPAGKYALRLKEKATQCQLEADVLWSDVVSHPPEGPWQRIAPLRVLSFDIECAGRKGIFPEPERDPVIQICSLGLRWGEPEPFLRLALTLRPCAPILGAKVQSYEKEEDLLQAWSTFIRIMDPDVITGYNIQNFDLPYLISRAQTLKVQTFPFLGRVAGLCSNIRDSSFQSKQTGRRDTKVVSMVGRVQMDMLQVLLREYKLRSYTLNAVSFHFLGEQKEDVQHSIITDLQNGNDQTRRRLAVYCLKDAYLPLRLLERLMVLVNAVEMARVTGVPLSYLLSRGQQVKVVSQLLRQAMHEGLLMPVVKSEGGEDYTGATVIEPLKGYYDVPIATLDFSSLYPSIMMAHNLCYTTLLRPGTAQKLGLTEDQFIRTPTGDEFVKTSVRKGLLPQILENLLSARKRAKAELAKETDPLRRQVLDGRQLALKVSANSVYGFTGAQVGKLPCLEISQSVTGFGRQMIEKTKQLVESKYTVENGYSTSAKVVYGDTDSVMCRFGVSSVAEAMALGREAADWVSGHFPSPIRLEFEKVYFPYLLISKKRYAGLLFSSRPDAHDRMDCKGLEAVRRDNCPLVANLVTASLRRLLIDRDPEGAVAHAQDVISDLLCNRIDISQLVITKELTRAASDYAGKQAHVELAERMRKRDPGSAPSLGDRVPYVIISAAKGVAAYMKSEDPLFVLEHSLPIDTQYYLEQQLAKPLLRIFEPILGEGRAEAVLLRGDHTRCKTVLTGKVGGLLAFAKRRNCCIGCRTVLSHQGAVCEFCQPRESELYQKEVSHLNALEERFSRLWTQCQRCQGSLHEDVICTSRDCPIFYMRKKVRKDLEDQEQLLRRFGPPGPEAW",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P28340"},
		"label":"dpod1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_5801.1"},{"db":"intact","id":"EBI-866690"},{"db":"intenz","id":"2.7.7.7"}],
		"expansion":{"id":"1","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49005"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P28340"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGRKRLITDSYPVVKRREGPAGHSKGELAPELGEEPQPRDEEEAELELLRQFDLAWQYGPCTGITRLQRWCRAKQMGLEPPPEVWQVLKTHPGDPRFQCSLWHLYPL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9HCU8"},
		"label":"dpod4_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_5801.1"},{"db":"intact","id":"EBI-866690"},{"db":"intenz","id":"2.7.7.7"}],
		"expansion":{"id":"1","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49005"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9HCU8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAPERLRSRALSAFKLRGLLLRGEAIKYLTEALQSISELELEDKLEKIINAVEKQPLSSNMIERSVVEAAVQECSQSVDETIEHVFNIIGAFDIPRFVYNSERKKFLPLLMTNHPAPNLFGTPRDKAEMFRERYTILHQRTHRHELFTPPVIGSHPDESGSKFQLKTIETLLGSTTKIGDAIVLGMITQLKEGKFFLEDPTGTVQLDLSKAQFHSGLYTEACFVLAEGWFEDQVFHVNAFGFPPTEPSSTTRAYYGNINFFGGPSNTSVKTSAKLKQLEEENKDAMFVFLSDVWLDQVEVLEKLRIMFAGYSPAPPTCFILCGNFSSAPYGKNQVQALKDSLKTLADIICEYPDIHQSSRFVFVPGPEDPGFGSILPRPPLAESITNEFRQRVPFSVFTTNPCRIQYCTQEITVFREDLVNKMCRNCVRFPSSNLAIPNHFVKTILSQGHLTPLPLYVCPVYWAYDYALRVYPVPDLLVIADKYDPFTTTNTECLCINPGSFPRSGFSFKVFYPSNKTVEDSKLQGF",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P56282"},
		"label":"dpoe2_human"
	},
	{
		"object":"interactor",
		"sequence":"MSLRSGGRRRADPGADGEASRDDGATSSVSALKRLERSQWTDKMDLRFGFERLKEPGEKTGWLINMHPTEILDEDKRLGSAVDYYFIQDDGSRFKVALPYKPYFYIATRKGCEREVSSFLSKKFQGKIAKVETVPKEDLDLPNHLVGLKRNYIRLSFHTVEDLVKVRKEISPAVKKNREQDHASDAYTALLSSVLQRGGVITDEEETSKKIADQLDNIVDMREYDVPYHIRLSIDLKIHVAHWYNVRYRGNAFPVEITRRDDLVERPDPVVLAFDIETTKLPLKFPDAETDQIMMISYMIDGQGYLITNREIVSEDIEDFEFTPKPEYEGPFCVFNEPDEAHLIQRWFEHVQETKPTIMVTYNGDFFDWPFVEARAAVHGLSMQQEIGFQKDSQGEYKAPQCIHMDCLRWVKRDSYLPVGSHNLKAAAKAKLGYDPVELDPEDMCRMATEQPQTLATYSVSDAVATYYLYMKYVHPFIFALCTIIPMEPDEVLRKGSGTLCEALLMVQAFHANIIFPNKQEQEFNKLTDDGHVLDSETYVGGHVEALESGVFRSDIPCRFRMNPAAFDFLLQRVEKTLRHALEEEEKVPVEQVTNFEEVCDEIKSKLASLKDVPSRIECPLIYHLDVGAMYPNIILTNRLQPSAMVDEATCAACDFNKPGANCQRKMAWQWRGEFMPASRSEYHRIQHQLESEKFPPLFPEGPARAFHELSREEQAKYEKRRLADYCRKAYKKIHITKVEERLTTICQRENSFYVDTVRAFRDRRYEFKGLHKVWKKKLSAAVEVGDAAEVKRCKNMEVLYDSLQLAHKCILNSFYGYVMRKGARWYSMEMAGIVCFTGANIITQARELIEQIGRPLELDTDGIWCVLPNSFPENFVFKTTNVKKPKVTISYPGAMLNIMVKEGFTNDQYQELAEPSSLTYVTRSENSIFFEVDGPYLAMILPASKEEGKKLKKRYAVFNEDGSLAELKGFEVKRRGELQLIKIFQSSVFEAFLKGSTLEEVYGSVAKVADYWLDVLYSKAANMPDSELFELISENRSMSRKLEDYGEQKSTSISTAKRLAEFLGDQMVKDAGLSCRYIISRKPEGSPVTERAIPLAIFQAEPTVRKHFLRKWLKSSSLQDFDIRAILDWDYYIERLGSAIQKIITIPAALQQVKNPVPRVKHPDWLHKKLLEKNDVYKQKKISELFTLEGRRQVTMAEASEDSPRPSAPDMEDFGLVKLPHPAAPVTVKRKRVLWESQEESQDLTPTVPWQEILGQPPALGTSQEEWLVWLRFHKKKWQLQARQRLARRKRQRLESAEGVLRPGAIRDGPATGLGSFLRRTARSILDLPWQIVQISETSQAGLFRLWALVGSDLHCIRLSIPRVFYVNQRVAKAEEGASYRKVNRVLPRSNMVYNLYEYSVPEDMYQEHINEINAELSAPDIEGVYETQVPLLFRALVHLGCVCVVNKQLVRHLSGWEAETFALEHLEMRSLAQFSYLEPGSIRHIYLYHHAQAHKALFGIFIPSQRRASVFVLDTVRSNQMPSLGALYSAEHGLLLEKVGPELLPPPKHTFEVRAETDLKTICRAIQRFLLAYKEERRGPTLIAVQSSWELKRLASEIPVLEEFPLVPICVADKINYGVLDWQRHGARRMIRHYLNLDTCLSQAFEMSRYFHIPIGNLPEDISTFGSDLFFARHLQRHNHLLWLSPTARPDLGGKEADDNCLVMEFDDQATVEINSSGCYSTVCVELDLQNLAVNTILQSHHVNDMEGADSMGISFDVIQQASLEDMITGGQAASAPASYDETALCSNTFRILKSMVVGWVKEITQYHNIYADNQVMHFYRWLRSPSSLLHDPALHRTLHNMMKKLFLQLIAEFKRLGSSVIYANFNRIILCTKKRRVEDAIAYVEYITSSIHSKETFHSLTISFSRCWEFLLWMDPSNYGGIKGKVSSRIHCGLQDSQKAGGAEDEQENEDDEEERDGEEEEEAEESNVEDLLENNWNILQFLPQAASCQNYFLMIVSAYIVAVYHCMKDGLRRSAPGSTPVRRRGASQLSQEAEGAVGALPGMITFSQDYVANELTQSFFTITQKIQKKVTGSRNSTELSEMFPVLPGSHLLLNNPALEFIKYVCKVLSLDTNITNQVNKLNRDLLRLVDVGEFSEEAQFRDPCRSYVLPEVICRSCNFCRDLDLCKDSSFSEDGAVLPQWLCSNCQAPYDSSAIEMTLVEVLQKKLMAFTLQDLVCLKCRGVKETSMPVYCSCAGDFALTIHTQVFMEQIGIFRNIAQHYGMSYLLETLEWLLQKNPQLGH",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q07864"},
		"label":"dpoe1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_4621.1"},{"db":"intact","id":"EBI-876717"},{"db":"intenz","id":"2.7.7.7"}],
		"expansion":{"id":"2","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P56282"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q07864"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAAAAAAGSGTPREEEGPAGEAAASQPQAPTSVPGARLSRLPLARVKALVKADPDVTLAGQEAIFILARAAELFVETIAKDAYCCAQQGKRKTLQRRDLDNAIEAVDEFAFLEGTLD",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9NR33"},
		"label":"dpoe4_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_4621.1"},{"db":"intact","id":"EBI-876717"},{"db":"intenz","id":"2.7.7.7"}],
		"expansion":{"id":"2","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P56282"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9NR33"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAERPEDLNLPNAVITRIIKEALPDGVNISKEARSAISRAASVFVLYATSCANNFAMKGKRKTLNASDVLSAMEEMEFQRFVTPLKEALEAYRREQKGKKEASEQKKKDKDKKTDSEEQDKSRDEDNDEDEERLEEEEQNEEEEVDN",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9NRF9"},
		"label":"dpoe3_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_4621.1"},{"db":"intact","id":"EBI-876717"},{"db":"intenz","id":"2.7.7.7"}],
		"expansion":{"id":"2","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P56282"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9NRF9"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAESSESFTMASSPAQRRRGNDPLTSSPGRSSRRTDALTSSPGRDLPPFEDESEGLLGTEGPLEEEEDGEELIGDGMERDYRAIPELDAYEAEGLALDDEDVEELTASQREAAERAMRQRDREAGRGLGRMRRGLLYDSDEEDEERPARKRRQVERATEDGEEDEEMIESIENLEDLKGHSVREWVSMAGPRLEIHHRFKNFLRTHVDSHGHNVFKERISDMCKENRESLVVNYEDLAAREHVLAYFLPEAPAELLQIFDEAALEVVLAMYPKYDRITNHIHVRISHLPLVEELRSLRQLHLNQLIRTSGVVTSCTGVLPQLSMVKYNCNKCNFVLGPFCQSQNQEVKPGSCPECQSAGPFEVNMEETIYQNYQRIRIQESPGKVAAGRLPRSKDAILLADLVDSCKPGDEIELTGIYHNNYDGSLNTANGFPVFATVILANHVAKKDNKVAVGELTDEDVKMITSLSKDQQIGEKIFASIAPSIYGHEDIKRGLALALFGGEPKNPGGKHKVRGDINVLLCGDPGTAKSQFLKYIEKVSSRAIFTTGQGASAVGLTAYVQRHPVSREWTLEAGALVLADRGVCLIDEFDKMNDQDRTSIHEAMEQQSISISKAGIVTSLQARCTVIAAANPIGGRYDPSLTFSENVDLTEPIISRFDILCVVRDTVDPVQDEMLARFVVGSHVRHHPSNKEEEGLANGSAAEPAMPNTYGVEPLPQEVLKKYIIYAKERVHPKLNQMDQDKVAKMYSDLRKESMATGSIPITVRHIESMIRMAEAHARIHLRDYVIEDDVNMAIRVMLESFIDTQKFSVMRSMRKTFARYLSFRRDNNELLLFILKQLVAEQVTYQRNRFGAQQDTIEVPEKDLVDKARQINIHNLSAFYDSELFRMNKFSHDLKRKMILQQF",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P49736"},
		"label":"mcm2_human"
	},
	{
		"object":"interactor",
		"sequence":"MSSPASTPSRRGSRRGRATPAQTPRSEDARSSPSQRRRGEDSTSTGELQPMPTSPGVDLQSPAAQDVLFSSPPQMHSSAIPLDFDVSSPLTYGTPSSRVEGTPRSGVRGTPVRQRPDLGSAQKGLQVDLQSDGAAAEDIVASEQSLGQKLVIWGTDVNVAACKENFQRFLQRFIDPLAKEEENVGIDITEPLYMQRLGEINVIGEPFLNVNCEHIKSFDKNLYRQLISYPQEVIPTFDMAVNEIFFDRYPDSILEHQIQVRPFNALKTKNMRNLNPEDIDQLITISGMVIRTSQLIPEMQEAFFQCQVCAHTTRVEMDRGRIAEPSVCGRCHTTHSMALIHNRSLFSDKQMIKLQESPEDMPAGQTPHTVILFAHNDLVDKVQPGDRVNVTGIYRAVPIRVNPRVSNVKSVYKTHIDVIHYRKTDAKRLHGLDEEAEQKLFSEKRVELLKELSRKPDIYERLASALAPSIYEHEDIKKGILLQLFGGTRKDFSHTGRGKFRAEINILLCGDPGTSKSQLLQYVYNLVPRGQYTSGKGSSAVGLTAYVMKDPETRQLVLQTGALVLSDNGICCIDEFDKMNESTRSVLHEVMEQQTLSIAKAGIICQLNARTSVLAAANPIESQWNPKKTTIENIQLPHTLLSRFDLIFLLLDPQDEAYDRRLAHHLVALYYQSEEQAEEELLDMAVLKDYIAYAHSTIMPRLSEEASQALIEAYVDMRKIGSSRGMVSAYPRQLESLIRLAEAHAKVRLSNKVEAIDVEEAKRLHREALKQSATDPRTGIVDISILTTGMSATSRKRKEELAEALKKLILSKGKTPALKYQQLFEDIRGQSDIAITKDMFEEALRALADDDFLTVTGKTVRLL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P33991"},
		"label":"mcm4_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_4763.1"},{"db":"intact","id":"EBI-913604"},{"db":"reactome","id":"REACT_4259.1"}],
		"expansion":{"id":"3","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49736"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P33991"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MALKDYALEKEKVKKFLQEFYQDDELGKKQFKYGNQLVRLAHREQVALYVDLDDVAEDDPELVDSICENARRYAKLFADAVQELLPQYKEREVVNKDVLDVYIEHRLMMEQRSRDPGMVRSPQNQYPAELMRRFELYFQGPSSNKPRVIREVRADSVGKLVTVRGIVTRVSEVKPKMVVATYTCDQCGAETYQPIQSPTFMPLIMCPSQECQTNRSGGRLYLQTRGSRFIKFQEMKMQEHSDQVPVGNIPRSITVLVEGENTRIAQPGDHVSVTGIFLPILRTGFRQVVQGLLSETYLEAHRIVKMNKSEDDESGAGELTREELRQIAEEDFYEKLAASIAPEIYGHEDVKKALLLLLVGGVDQSPRGMKIRGNINICLMGDPGVAKSQLLSYIDRLAPRSQYTTGRGSSGVGLTAAVLRDSVSGELTLEGGALVLADQGVCCIDEFDKMAEADRTAIHEVMEQQTISIAKAGILTTLNARCSILAAANPAYGRYNPRRSLEQNIQLPAALLSRFDLLWLIQDRPDRDNDLRLAQHITYVHQHSRQPPSQFEPLDMKLMRRYIAMCREKQPMVPESLADYITAAYVEMRREAWASKDATYTSARTLLAILRLSTALARLRMVDVVEKEDVNEAIRLMEMSKDSLLGDKGQTARTQRPADVIFATVRELVSGGRSVRFSEAEQRCVSRGFTPAQFQAALDEYEELNVWQVNASRTRITFV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P33993"},
		"label":"mcm7_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_4763.1"},{"db":"intact","id":"EBI-913604"},{"db":"reactome","id":"REACT_4259.1"}],
		"expansion":{"id":"3","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49736"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P33993"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSGFDDPGIFYSDSFGGDAQADEGQARKSQLQRRFKEFLRQYRVGTDRTGFTFKYRDELKRHYNLGEYWIEVEMEDLASFDEDLADYLYKQPAEHLQLLEEAAKEVADEVTRPRPSGEEVLQDIQVMLKSDASPSSIRSLKSDMMSHLVKIPGIIIAASAVRAKATRISIQCRSCRNTLTNIAMRPGLEGYALPRKCNTDQAGRPKCPLDPYFIMPDKCKCVDFQTLKLQELPDAVPHGEMPRHMQLYCDRYLCDKVVPGNRVTIMGIYSIKKFGLTTSRGRDRVGVGIRSSYIRVLGIQVDTDGSGRSFAGAVSPQEEEEFRRLAALPNVYEVISKSIAPSIFGGTDMKKAIACLLFGGSRKRLPDGLTRRGDINLLMLGDPGTAKSQLLKFVEKCSPIGVYTSGKGSSAAGLTASVMRDPSSRNFIMEGGAMVLADGGVVCIDEFDKMREDDRVAIHEAMEQQTISIAKAGITTTLNSRCSVLAAANSVFGRWDETKGEDNIDFMPTILSRFDMIFIVKDEHNEERDVMLAKHVITLHVSALTQTQAVEGEIDLAKLKKFIAYCRVKCGPRLSAEAAEKLKNRYIIMRSGARQHERDSDRRSSIPITVRQLEAIVRIAEALSKMKLQPFATEADVEEALRLFQVSTLDAALSGTLSGVEGFTSQEDQEMLSRIEKQLKRRFAIGSQVSEHSIIKDFTKQKYPEHAIHKVLQLMLRRGEIQHRMQRKVLYRLK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P33992"},
		"label":"mcm5_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_4763.1"},{"db":"intact","id":"EBI-913604"},{"db":"reactome","id":"REACT_4259.1"}],
		"expansion":{"id":"3","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49736"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P33992"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAGTVVLDDVELREAQRDYLDFLDDEEDQGIYQSKVRELISDNQYRLIVNVNDLRRKNEKRANRLLNNAFEELVAFQRALKDFVASIDATYAKQYEEFYVGLEGSFGSKHVSPRTLTSCFLSCVVCVEGIVTKCSLVRPKVVRSVHYCPATKKTIERRYSDLTTLVAFPSSSVYPTKDEENNPLETEYGLSVYKDHQTITIQEMPEKAPAGQLPRSVDVILDDDLVDKAKPGDRVQVVGTYRCLPGKKGGYTSGTFRTVLIACNVKQMSKDAQPSFSAEDIAKIKKFSKTRSKDIFDQLAKSLAPSIHGHDYVKKAILCLLLGGVERDLENGSHIRGDINILLIGDPSVAKSQLLRYVLCTAPRAIPTTGRGSSGVGLTAAVTTDQETGERRLEAGAMVLADRGVVCIDEFDKMSDMDRTAIHEVMEQGRVTIAKAGIHARLNARCSVLAAANPVYGRYDQYKTPMENIGLQDSLLSRFDLLFIMLDQMDPEQDREISDHVLRMHRYRAPGEQDGDAMPLGSAVDILATDDPNFSQEDQQDTQIYEKHDNLLHGTKKKKEKMVSAAFMKKYIHVAKIIKPVLTQESATYIAEEYSRLRSQDSMSSDTARTSPVTARTLETLIRLATAHAKARMSKTVDLQDAEEAVELVQYAYFKKVLEKEKKRKKRSEDESETEDEEEKSQEDQEQKRKRRKTRQPDAKDGDSYDPYDFSDTEEEMPQVHTPKTADSQETKESQKVELSESRLKAFKVALLDVFREAHAQSIGMNRLTESINRDSEEPFSSVEIQAALSKMQDDNQVMVSEGIIFLI",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P25205"},
		"label":"mcm3_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_4763.1"},{"db":"intact","id":"EBI-913604"},{"db":"reactome","id":"REACT_4259.1"}],
		"expansion":{"id":"3","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49736"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P25205"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDLAAAAEPGAGSQHLEVRDEVAEKCQKLFLDFLEEFQSSDGEIKYLQLAEELIRPERNTLVVSFVDLEQFNQQLSTTIQEEFYRVYPYLCRALKTFVKDRKEIPLAKDFYVAFQDLPTRHKIRELTSSRIGLLTRISGQVVRTHPVHPELVSGTFLCLDCQTVIRDVEQQFKYTQPNICRNPVCANRRRFLLDTNKSRFVDFQKVRIQETQAELPRGSIPRSLEVILRAEAVESAQAGDKCDFTGTLIVVPDVSKLSTPGARAETNSRVSGVDGYETEGIRGLRALGVRDLSYRLVFLACCVAPTNPRFGGKELRDEEQTAESIKNQMTVKEWEKVFEMSQDKNLYHNLCTSLFPTIHGNDEVKRGVLLMLFGGVPKTTGEGTSLRGDINVCIVGDPSTAKSQFLKHVEEFSPRAVYTSGKASSAAGLTAAVVRDEESHEFVIEAGALMLADNGVCCIDEFDKMDVRDQVAIHEAMEQQTISITKAGVKATLNARTSILAAANPISGHYDRSKSLKQNINLSAPIMSRFDLFFILVDECNEVTDYAIARRIVDLHSRIEESIDRVYSLDDIRRYLLFARQFKPKISKESEDFIVEQYKHLRQRDGSGVTKSSWRITVRQLESMIRLSEAMARMHCCDEVQPKHVKEAFRLLNKSIIRVETPDVNLDQEEEIQMEVDEGAGGINGHADSPAPVNGINGYNEDINQESAPKASLRLGFSEYCRISNLIVLHLRKVEEEEDESALKRSELVNWYLKEIESEIDSEEELINKKRIIEKVIHRLTHYDHVLIELTQAGLKGSTEGSESYEEDPYLVVNPNYLLED",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q14566"},
		"label":"mcm6_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_4763.1"},{"db":"intact","id":"EBI-913604"},{"db":"reactome","id":"REACT_4259.1"}],
		"expansion":{"id":"3","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49736"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q14566"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MEPSSKKLTGRLMLAVGGAVLGSLQFGYNTGVINAPQKVIEEFYNQTWVHRYGESILPTTLTTLWSLSVAIFSVGGMIGSFSVGLFVNRFGRRNSMLMMNLLAFVSAVLMGFSKLGKSFEMLILGRFIIGVYCGLTTGFVPMYVGEVSPTALRGALGTLHQLGIVVGILIAQVFGLDSIMGNKDLWPLLLSIIFIPALLQCIVLPFCPESPRFLLINRNEENRAKSVLKKLRGTADVTHDLQEMKEESRQMMREKKVTILELFRSPAYRQPILIAVVLQLSQQLSGINAVFYYSTSIFEKAGVQQPVYATIGSGIVNTAFTVVSLFVVERAGRRTLHLIGLAGMAGCAILMTIALALLEQLPWMSYLSIVAIFGFVAFFEVGPGPIPWFIVAELFSQGPRPAAIAVAGFSNWTSNFIVGMCFQYVEQLCGPYVFIIFTVLLVLFFIFTYFKVPETKGRTFDEIASGFRQGGASQSDKTPEELFHPLGADSQV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P11166"},
		"label":"gtr1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"omim","id":"601042"},{"db":"omim","id":"614847"},{"db":"reactome","id":"REACT_2722.1"},{"db":"omim","id":"612126"},{"db":"intact","id":"EBI-959455"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P11166"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P11166"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MNGPVDGLCDHSLSEGVFMFTSESVGEGHPDKICDQISDAVLDAHLKQDPNAKVACETVCKTGMVLLCGEITSMAMVDYQRVVRDTIKHIGYDDSAKGFDFKTCNVLVALEQQSPDIAQCVHLDRNEEDVGAGDQGLMFGYATDETEECMPLTIILAHKLNARMADLRRSGLLPWLRPDSKTQVTVQYMQDNGAVIPVRIHTIVISVQHNEDITLEEMRRALKEQVIRAVVPAKYLDEDTVYHLQPSGRFVIGGPQGDAGVTGRKIIVDTYGGWGAHGGGAFSGKDYTKVDRSAAYAARWVAKSLVKAGLCRRVLVQVSYAIGVAEPLSISIFTYGTSQKTERELLDVVHKNFDLRPGVIVRDLDLKKPIYQKTACYGHFGRSEFPWEVPRKLVF",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q00266"},
		"label":"metk1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"omim","id":"250850"},{"db":"intact","id":"EBI-967247"},{"db":"intenz","id":"2.5.1.6"},{"db":"reactome","id":"REACT_7431.1"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q00266"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q00266"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"omim","id":"250850"},{"db":"intact","id":"EBI-967325"},{"db":"reactome","id":"REACT_7093.2"},{"db":"intenz","id":"2.5.1.6"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q00266"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q00266"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAAVSGLVRRPLREVSGLLKRRFHWTAPAALQVTVRDAINQGMDEELERDEKVFLLGEEVAQYDGAYKVSRGLWKKYGDKRIIDTPISEMGFAGIAVGAAMAGLRPICEFMTFNFSMQAIDQVINSAAKTYYMSGGLQPVPIVFRGPNGASAGVAAQHSQCFAAWYGHCPGLKVVSPWNSEDAKGLIKSAIRDNNPVVVLENELMYGVPFEFPPEAQSKDFLIPIGKAKIERQGTHITVVSHSRPVGHCLEAAAVLSKEGVECEVINMRTIRPMDMETIEASVMKTNHLVTVEGGWPQFGVGAEICARIMEGPAFNFLDAPAVRVTGADVPMPYAKILEDNSIPQVKDIIFAIKKTLNI",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P11177"},
		"label":"odpb_human"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:18420"},
		"label":"magnesium(2+)"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"1.2.4.1"},{"db":"reactome","id":"REACT_5341.1"},{"db":"wwpdb","id":"1NI4"},{"db":"intact","id":"EBI-1163476"}],
		"expansion":{"id":"4","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P11177"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32297149",
				"name":"pdha1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["8148849"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:18420"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
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
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"1.2.4.1"},{"db":"reactome","id":"REACT_5341.1"},{"db":"wwpdb","id":"1NI4"},{"db":"intact","id":"EBI-1163476"}],
		"expansion":{"id":"4","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P11177"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32297149",
				"name":"pdha1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["8148849"]
				}]
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
		"sequence":"MRKMLAAVSRVLSGASQKPASRVLVASRNFANDATFEIKKCDLHRLEEGPPVTTVLTREDGLKYYRMMQTVRRMELKADQLYKQKIIRGFCHLCDGQEACCVGLEAGINPTDHLITAYRAHGFTFTRGLSVREILAELTGRKGGCAKGKGGSMHMYAKNFYGGNGIVGAQVPLGAGIALACKYNGKDEVCLTLYGDGAANQGQIFEAYNMAALWKLPCIFICENNRYGMGTSVERAAASTDYYKRGDFIPGLRVDGMDILCVREATRFAAAYCRSGKGPILMELQTYRYHGHSMSDPGVSYRTREEIQEVRSKSDPIMLLKDRMVNSNLASVEELKEIDVEVRKEIEDAAQFATADPEPPLEELGYHIYSSDPPFEVRGANQWIKFKSVS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P08559"},
		"label":"odpa_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"1.2.4.1"},{"db":"reactome","id":"REACT_5341.1"},{"db":"wwpdb","id":"1NI4"},{"db":"intact","id":"EBI-1163476"}],
		"expansion":{"id":"4","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P11177"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32297149",
				"name":"pdha1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["8148849"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P08559"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"8148849",
				"name":"pdhb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["32297149"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDIRKFFGVIPSGKKLVSETVKKNEKTKSDEETLKAKKGIKEIKVNSSRKEDDFKQKQPSKKKRIIYDSDSESEETLQVKNAKKPPEKLPVSSKPGKISRQDPVTYISETDEEDDFMCKKAASKSKENGRSTNSHLGTSNMKKNEENTKTKNKPLSPIKLTPTSVLDYFGTGSVQRSNKKMVASKRKELSQNTDESGLNDEAIAKQLQLDEDAELERQLHEDEEFARTLAMLDEEPKTKKARKDTEAGETFSSVQANLSKAEKHKYPHKVKTAQVSDERKSYSPRKQSKYESSKESQQHSKSSADKIGEVSSPKASSKLAIMKRKEESSYKEIEPVASKRKENAIKLKGETKTPKKTKSSPAKKESVSPEDSEKKRTNYQAYRSYLNREGPKALGSKEIPKGAENCLEGLIFVITGVLESIERDEAKSLIERYGGKVTGNVSKKTNYLVMGRDSGQSKSDKAAALGTKIIDEDGLLNLIRTMPGKKSKYEIAVETEMKKESKLERTPQKNVQGKRKISPSKKESESKKSRPTSKRDSLAKTIKKETDVFWKSLDFKEQVAEETSGDSKARNLADDSSENKVENLLWVDKYKPTSLKTIIGQQGDQSCANKLLRWLRNWQKSSSEDKKHAAKFGKFSGKDDGSSFKAALLSGPPGVGKTTTASLVCQELGYSYVELNASDTRSKSSLKAIVAESLNNTSIKGFYSNGAASSVSTKHALIMDEVDGMAGNEDRGGIQELIGLIKHTKIPIICMCNDRNHPKIRSLVHYCFDLRFQRPRVEQIKGAMMSIAFKEGLKIPPPAMNEIILGANQDIRQVLHNLSMWCARSKALTYDQAKADSHRAKKDIKMGPFDVARKVFAAGEETAHMSLVDKSDLFFHDYSIAPLFVQENYIHVKPVAAGGDMKKHLMLLSRAADSICDGDLVDSQIRSKQNWSLLPAQAIYASVLPGELMRGYMTQFPTFPSWLGKHSSTGKHDRIVQDLALHMSLRTYSSKRTVNMDYLSLLRDALVQPLTSQGVDGVQDVVALMDTYYLMKEDFENIMEISSWGGKPSPFSKLDPKVKAAFTRAYNKEAHLTPYSLQAIKASRHSTSPSLDSEYNEELNEDDSQSDEKDQDAIETDAMIKKKTKSSKPSKPEKDKEPRKGKGKSSKK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P35251"},
		"label":"rfc1_human"
	},
	{
		"object":"interactor",
		"sequence":"MEVEAVCGGAGEVEAQDSDPAPAFSKAPGSAGHYELPWVEKYRPVKLNEIVGNEDTVSRLEVFAREGNVPNIIIAGPPGTGKTTSILCLARALLGPALKDAMLELNASNDRGIDVVRNKIKMFAQQKVTLPKGRHKIIILDEADSMTDGAQQALRRTMEIYSKTTRFALACNASDKIIEPIQSRCAVLRYTKLTDAQILTRLMNVIEKERVPYTDDGLEAIIFTAQGDMRQALNNLQSTFSGFGFINSENVFKVCDEPHPLLVKEMIQHCVNANIDEAYKILAHLWHLGYSPEDIIGNIFRVCKTFQMAEYLKLEFIKEIGYTHMKIAEGVNSLLQMAGLLARLCQKTMAPVAS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P35250"},
		"label":"rfc2_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_4881.1"},{"db":"intact","id":"EBI-1170110"}],
		"expansion":{"id":"5","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P35251"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P35250"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MQAFLKGTSISTKPPLTKDRGVAASAGSSGENKKAKPVPWVEKYRPKCVDEVAFQEEVVAVLKKSLEGADLPNLLFYGPPGTGKTSTILAAARELFGPELFRLRVLELNASDERGIQVVREKVKNFAQLTVSGSRSDGKPCPPFKIVILDEADSMTSAAQAALRRTMEKESKTTRFCLICNYVSRIIEPLTSRCSKFRFKPLSDKIQQQRLLDIAKKENVKISDEGIAYLVKVSEGDLRKAITFLQSATRLTGGKEITEKVITDIAGVIPAEKIDGVFAACQSGSFDKLEAVVKDLIDEGHAATQLVNQLHDVVVENNLSDKQKSIITEKLAEVDKCLADGADEHLQLISLCATVMQQLSQNC",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P35249"},
		"label":"rfc4_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_4881.1"},{"db":"intact","id":"EBI-1170110"}],
		"expansion":{"id":"5","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P35251"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P35249"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSLWVDKYRPCSLGRLDYHKEQAAQLRNLVQCGDFPHLLVYGPSGAGKKTRIMCILRELYGVGVEKLRIEHQTITTPSKKKIEISTIASNYHLEVNPSDAGNSDRVVIQEMLKTVAQSQQLETNSQRDFKVVLLTEVDKLTKDAQHALRRTMEKYMSTCRLILCCNSTSKVIPPIRSRCLAVRVPAPSIEDICHVLSTVCKKEGLNLPSQLAHRLAEKSCRNLRKALLMCEACRVQQYPFTADQEIPETDWEVYLRETANAIVSQQTPQRLLEVRGRLYELLTHCIPPEIIMKGLLSELLHNCDGQLKGEVAQMAAYYEHRLQLGSKAIYHLEAFVAKFMALYKKFMEDGLEGMMF",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P40938"},
		"label":"rfc3_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_4881.1"},{"db":"intact","id":"EBI-1170110"}],
		"expansion":{"id":"5","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P35251"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P40938"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"METSALKQQEQPAATKIRNLPWVEKYRPQTLNDLISHQDILSTIQKFINEDRLPHLLLYGPPGTGKTSTILACAKQLYKDKEFGSMVLELNASDDRGIDIIRGPILSFASTRTIFKKGFKLVILDEADAMTQDAQNALRRVIEKFTENTRFCLICNYLSKIIPALQSRCTRFRFGPLTPELMVPRLEHVVEEEKVDISEDGMKALVTLSSGDMRRALNILQSTNMAFGKVTEETVYTCTGHPLKSDIANILDWMLNQDFTTAYRNITELKTLKGLALHDILTEIHLFVHRVDFPSSVRIHLLTKMADIEYRLSVGTNEKIQLSSLIAAFQVTRDLIVAEA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P40937"},
		"label":"rfc5_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_4881.1"},{"db":"intact","id":"EBI-1170110"}],
		"expansion":{"id":"5","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P35251"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P40937"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MFEARLVQGSILKKVLEALKDLINEACWDISSSGVNLQSMDSSHVSLVQLTLRSEGFDTYRCDRNLAMGVNLTSMSKILKCAGNEDIITLRAEDNADTLALVFEAPNQEKVSDYEMKLMDLDVEQLGIPEQEYSCVVKMPSGEFARICRDLSHIGDAVVISCAKDGVKFSASGELGNGNIKLSQTSNVDKEEEAVTIEMNEPVQLTFALRYLNFFTKATPLSSTVTLSMSADVPLVVEYKIADMGHLKYYLAPKIEDEEGS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P12004"},
		"label":"pcna_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"reactome","id":"REACT_2542.1"},{"db":"intact","id":"EBI-1202920"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P12004"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P12004"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKRSSVSSGGAGRLSMQELRSQDVNKQGLYTPQTKEKPTFGKLSINKPTSERKVSLFGKRTSGHGSRNSQLGIFSSSEKIKDPRPLNDKAFIQQCIRQLCEFLTENGYAHNVSMKSLQAPSVKDFLKIFTFLYGFLCPSYELPDTKFEEEVPRIFKDLGYPFALSKSSMYTVGAPHTWPHIVAALVWLIDCIKIHTAMKESSPLFDDGQPWGEETEDGIMHNKLFLDYTIKCYESFMSGADSFDEMNAELQSKLKDLFNVDAFKLESLEAKNRALNEQIARLEQEREKEPNRLESLRKLKASLQGDVQKYQAYMSNLESHSAILDQKLNGLNEEIARVELECETIKQENTRLQNIIDNQKYSVADIERINHERNELQQTINKLTKDLEAEQQKLWNEELKYARGKEAIETQLAEYHKLARKLKLIPKGAENSKGYDFEIKFNPEAGANCLVKYRAQVYVPLKELLNETEEEINKALNKKMGLEDTLEQLNAMITESKRSVRTLKEEVQKLDDLYQQKIKEAEEEDEKCASELESLEKHKHLLESTVNQGLSEAMNELDAVQREYQLVVQTTTEERRKVGNNLQRLLEMVATHVGSVEKHLEEQIAKVDREYEECMSEDLSENIKEIRDKYEKKATLIKSSEE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O14777"},
		"label":"ndc80_human"
	},
	{
		"object":"interactor",
		"sequence":"MAAFRDIEEVSQGLLSLLGANRAEAQQRRLLGRHEQVVERLLETQDGAEKQLREILTMEKEVAQSLLNAKEQVHQGGVELQQLEAGLQEAGEEDTRLKASLLYLTRELEELKEIEADLERQEKEVDEDTTVTIPSAVYVAQLYHQVSKIEWDYECEPGMVKGIHHGPSVAQPIHLDSTQLSRKFISDYLWSLVDTEW",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q8NBT2"},
		"label":"spc24_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_15005.1"},{"db":"intact","id":"EBI-1209326"}],
		"expansion":{"id":"6","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O14777"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22071366",
				"name":"ndc80",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-642"],
				"linkedFeatures":["9204087"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q8NBT2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"7171891",
				"name":"spc24",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["10460752"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MVEDELALFDKSINEFWNKFKSTDTSCQMAGLRDTYKDSIKAFAEKLSVKLKEEERMVEMFLEYQNQISRQNKLIQEKKDNLLKLIAEVKGKKQELEVLTANIQDLKEEYSRKKETISTANKANAERLKRLQKSADLYKDRLGLEIRKIYGEKLQFIFTNIDPKNPESPFMFSLHLNEARDYEVSDSAPHLEGLAEFQENVRKTNNFSAFLANVRKAFTATVYN",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9HBM1"},
		"label":"spc25_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_15005.1"},{"db":"intact","id":"EBI-1209326"}],
		"expansion":{"id":"6","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O14777"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22071366",
				"name":"ndc80",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-642"],
				"linkedFeatures":["9204087"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9HBM1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"10460752",
				"name":"spc25",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-224"],
				"linkedFeatures":["7171891"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"METLSFPRYNVAEIVIHIRNKILTGADGKNLTKNDLYPNPKPEVLHMIYMRALQIVYGIRLEHFYMMPVNSEVMYPHLMEGFLPFSNLVTHLDSFLPICRVNDFETADILCPKAKRTSRFLSGIINFIHFREACRETYMEFLWQYKSSADKMQQLNAAHQEALMKLERLDSVPVEEQEEFKQLSDGIQELQQSLNQDFHQKTIVLQEGNSQKKSNISEKTKRLNELKLSVVSLKEIQESLKTKIVDSPEKLKNYKEKMKDTVQKLKNARQEVVEKYEIYGDSVDCLPSCQLEVQLYQKKIQDLSDNREKLASILKESLNLEDQIESDESELKKLKTEENSFKRLMIVKKEKLATAQFKINKKHEDVKQYKRTVIEDCNKVQEKRGAVYERVTTINQEIQKIKLGIQQLKDAAEREKLKSQEIFLNLKTALEKYHDGIEKAAEDSYAKIDEKTAELKRKMFKMST",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9BZD4"},
		"label":"nuf2_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_15005.1"},{"db":"intact","id":"EBI-1209326"}],
		"expansion":{"id":"6","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O14777"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22071366",
				"name":"ndc80",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-642"],
				"linkedFeatures":["9204087"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9BZD4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"9204087",
				"name":"nuf2",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-462"],
				"linkedFeatures":["22071366"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAALSGVRWLTRALVSAGNPGAWRGLSTSAAAHAASRSQAEDVRVEGSFPVTMLPGDGVGPELMHAVKEVFKAAAVPVEFQEHHLSEVQNMASEEKLEQVLSSMKENKVAIIGKIHTPMEYKGELASYDMRLRRKLDLFANVVHVKSLPGYMTRHNNLDLVIIREQTEGEYSSLEHESARGVIECLKIVTRAKSQRIAKFAFDYATKKGRGKVTAVHKANIMKLGDGLFLQCCEEVAELYPKIKFETMIIDNCCMQLVQNPYQFDVLVMPNLYGNIIDNLAAGLVGGAGVVPGESYSAEYAVFETGARHPFAQAVGRNIANPTAMLLSASNMLRHLNLEYHSSMIADAVKKVIKVGKVRTRDMGGYSTTTDFIKSVIGHLQTKGS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O43837"},
		"label":"idh3b_human"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:60240"},
		"label":"divalent metal cation"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"1.1.1.41"},{"db":"intact","id":"EBI-1210989"},{"db":"reactome","id":"REACT_3944.1"}],
		"expansion":{"id":"7","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O43837"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:60240"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MALKVATVAGSAAKAVLGPALLCRPWEVLGAHEVPSRNIFSEQTIPPSAKYGGRHTVTMIPGDGIGPELMLHVKSVFRHACVPVDFEEVHVSSNADEEDIRNAIMAIRRNRVALKGNIETNHNLPPSHKSRNNILRTSLDLYANVIHCKSLPGVVTRHKDIDILIVRENTEGEYSSLEHESVAGVVESLKIITKAKSLRIAEYAFKLAQESGRKKVTAVHKANIMKLGDGLFLQCCREVAARYPQITFENMIVDNTTMQLVSRPQQFDVMVMPNLYGNIVNNVCAGLVGGPGLVAGANYGHVYAVFETATRNTGKSIANKNIANPTATLLASCMMLDHLKLHSYATSIRKAVLASMDNENMHTPDIGGQGTTSEAIQDVIRHIRVINGRAVEA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P51553"},
		"label":"idh3g_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"1.1.1.41"},{"db":"intact","id":"EBI-1210989"},{"db":"reactome","id":"REACT_3944.1"}],
		"expansion":{"id":"7","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O43837"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P51553"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAGPAWISKVSRLLGAFHNPKQVTRGFTGGVQTVTLIPGDGIGPEISAAVMKIFDAAKAPIQWEERNVTAIQGPGGKWMIPSEAKESMDKNKMGLKGPLKTPIAAGHPSMNLLLRKTFDLYANVRPCVSIEGYKTPYTDVNIVTIRENTEGEYSGIEHVIVDGVVQSIKLITEGASKRIAEFAFEYARNNHRSNVTAVHKANIMRMSDGLFLQKCREVAESCKDIKFNEMYLDTVCLNMVQDPSQFDVLVMPNLYGDILSDLCAGLIGGLGVTPSGNIGANGVAIFESVHGTAPDIAGKDMANPTALLLSAVMMLRHMGLFDHAARIEAACFATIKDGKSLTKDLGGNAKCSDFTEEICRRVKDLD",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P50213"},
		"label":"idh3a_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"1.1.1.41"},{"db":"intact","id":"EBI-1210989"},{"db":"reactome","id":"REACT_3944.1"}],
		"expansion":{"id":"7","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O43837"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P50213"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"SHTDIKVPDFSEYRRLEVLDSTKSSRESSEARKGFSYLVTGVTTVGVAYAAKNAVTQFVSSMSASADVLALAKIEIKLSDIPEGKNMAFKWRGKPLFVRHRTQKEIEQEAAVELSQLRDPQHDLDRVKKPEWVILIGVCTHLGCVPIANAGDFGGYYCPCHGSHYDASGRIRLGPAPLNLEVPTYEFTSDDMVIVG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P47985-PRO_0000030664"},
		"label":"p47985-pro_0000030664"
	},
	{
		"object":"interactor",
		"sequence":"MLSVASRSGPFAPVLSATSRGVAGALRPLVQATVPATPEQPVLDLKRPFLSRESLSGQAVRRPLVASVGLNVPASVCY",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P47985-PRO_0000307241"},
		"label":"p47985-pro_0000307241"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_6527.1"},{"db":"intenz","id":"1.10.2.2"},{"db":"intact","id":"EBI-1224506"}],
		"expansion":{"id":"8","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P47985-PRO_0000030664"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P47985-PRO_0000307241"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"organism":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
		"identifier":{"db":"chebi","id":"CHEBI:30408"},
		"label":"fe-s cluster"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_6527.1"},{"db":"intenz","id":"1.10.2.2"},{"db":"intact","id":"EBI-1224506"}],
		"expansion":{"id":"8","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P47985-PRO_0000030664"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:30408"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKLLTRAGSFSRFYSLKVAPKVKATAAPAGAPPQPQDLEFTKLPNGLVIASLENYSPVSRIGLFIKAGSRYEDFSNLGTTHLLRLTSSLTTKGASSFKITRGIEAVGGKLSVTATRENMAYTVECLRGDVDILMEFLLNVTTAPEFRRWEVADLQPQLKIDKAVAFQNPQTHVIENLHAAAYRNALANPLYCPDYRIGKVTSEELHYFVQNHFTSARMALIGLGVSHPVLKQVAEQFLNMRGGLGLSGAKANYRGGEIREQNGDSLVHAAFVAESAVAGSAEANAFSVLQHVLGAGPHVKRGSNTTSHLHQAVAKATQQPFDVSAFNASYSDSGLFGIYTISQATAAGDVIKAAYNQVKTIAQGNLSNTDVQAAKNKLKAGYLMSVESSECFLEEVGSQALVAGSYMPPSTVLQQIDSVANADIINAAKKFVSGQKSMAASGNLGHTPFVDEL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P22695"},
		"label":"qcr2_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_6527.1"},{"db":"intenz","id":"1.10.2.2"},{"db":"intact","id":"EBI-1224506"}],
		"expansion":{"id":"8","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P47985-PRO_0000030664"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P22695"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAAAAASLRGVVLGPRGAGLPGARARGLLCSARPGQLPLRTPQAVALSSKSGLSRGRKVMLSALGMLAAGGAGLAMALHSAVSASDLELHPPSYPWSHRGLLSSLDHTSIRRGFQVYKQVCASCHSMDFVAYRHLVGVCYTEDEAKELAAEVEVQDGPNEDGEMFMRPGKLFDYFPKPYPNSEAARAANNGALPPDLSYIVRARHGGEDYVFSLLTGYCEPPTGVSLREGLYFNPYFPGQAIAMAPPIYTDVLEFDDGTPATMSQIAKDVCTFLRWASEPEHDHRKRMGLKMLMMMALLVPLVYTIKRHKWSVLKSRKLAYRPPK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P08574"},
		"label":"cy1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_6527.1"},{"db":"intenz","id":"1.10.2.2"},{"db":"intact","id":"EBI-1224506"}],
		"expansion":{"id":"8","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P47985-PRO_0000030664"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P08574"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MTPMRKTNPLMKLINHSFIDLPTPSNISAWWNFGSLLGACLILQITTGLFLAMHYSPDASTAFSSIAHITRDVNYGWIIRYLHANGASMFFICLFLHIGRGLYYGSFLYSETWNIGIILLLATMATAFMGYVLPWGQMSFWGATVITNLLSAIPYIGTDLVQWIWGGYSVDSPTLTRFFTFHFILPFIIAALATLHLLFLHETGSNNPLGITSHSDKITFHPYYTIKDALGLLLFLLSLMTLTLFSPDLLGDPDNYTLANPLNTPPHIKPEWYFLFAYTILRSVPNKLGGVLALLLSILILAMIPILHMSKQQSMMFRPLSQSLYWLLAADLLILTWIGGQPVSYPFTIIGQVASVLYFTTILILMPTISLIENKMLKWA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P00156"},
		"label":"cyb_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_6527.1"},{"db":"intenz","id":"1.10.2.2"},{"db":"intact","id":"EBI-1224506"}],
		"expansion":{"id":"8","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P47985-PRO_0000030664"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P00156"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAGKQAVSASGKWLDGIRKWYYNAAGFNKLGLMRDDTIYEDEDVKEAIRRLPENLYNDRMFRIKRALDLNLKHQILPKEQWTKYEEENFYLEPYLKEVIRERKEREEWAKK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P14927"},
		"label":"qcr7_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_6527.1"},{"db":"intenz","id":"1.10.2.2"},{"db":"intact","id":"EBI-1224506"}],
		"expansion":{"id":"8","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P47985-PRO_0000030664"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P14927"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGLEDEQKMLTESGDPEEEEEEEEELVDPLTTVREQCEQLEKCVKARERLELCDERVSSRSHTEEDCTEELFDFLHARDHCVAHKLFNNLK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P07919"},
		"label":"qcr6_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_6527.1"},{"db":"intenz","id":"1.10.2.2"},{"db":"intact","id":"EBI-1224506"}],
		"expansion":{"id":"8","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P47985-PRO_0000030664"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P07919"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MVTRFLGPRYRELVKNWVPTAYTWGAVGAVGLVWATDWRLILDWVPYINGKFKKDN",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O14957"},
		"label":"qcr10_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_6527.1"},{"db":"intenz","id":"1.10.2.2"},{"db":"intact","id":"EBI-1224506"}],
		"expansion":{"id":"8","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P47985-PRO_0000030664"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O14957"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGREFGNLTRMRHVISYSLSPFEQRAYPHVFTKGIPNVLRRIRESFFRVVPQFVVFYLIYTWGTEEFERSKRKNPAAYENDK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O14949"},
		"label":"qcr8_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_6527.1"},{"db":"intenz","id":"1.10.2.2"},{"db":"intact","id":"EBI-1224506"}],
		"expansion":{"id":"8","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P47985-PRO_0000030664"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O14949"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAASVVCRAATAGAQVLLRARRSPALLRTPALRSTATFAQALQFVPETQVSLLDNGLRVASEQSSQPTCTVGVWIDVGSRFETEKNNGAGYFLEHLAFKGTKNRPGSALEKEVESMGAHLNAYSTREHTAYYIKALSKDLPKAVELLGDIVQNCSLEDSQIEKERDVILREMQENDASMRDVVFNYLHATAFQGTPLAQAVEGPSENVRKLSRADLTEYLSTHYKAPRMVLAAAGGVEHQQLLDLAQKHLGGIPWTYAEDAVPTLTPCRFTGSEIRHRDDALPFAHVAIAVEGPGWASPDNVALQVANAIIGHYDCTYGGGVHLSSPLASGAVANKLCQSFQTFSICYAETGLLGAHFVCDRMKIDDMMFVLQGQWMRLCTSATESEVARGKNILRNALVSHLDGTTPVCEDIGRSLLTYGRRIPLAEWESRIAEVDASVVREICSKYIYDQCPAVAGYGPIEQLPDYNRIRSGMFWLRF",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P31930"},
		"label":"qcr1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_6527.1"},{"db":"intenz","id":"1.10.2.2"},{"db":"intact","id":"EBI-1224506"}],
		"expansion":{"id":"8","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P47985-PRO_0000030664"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P31930"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAAATLTSKLYSLLFRRTSTFALTIIVGVMFFERAFDQGADAIYDHINEGKLWKHIKHKYENK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9UDW1"},
		"label":"qcr9_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_6527.1"},{"db":"intenz","id":"1.10.2.2"},{"db":"intact","id":"EBI-1224506"}],
		"expansion":{"id":"8","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P47985-PRO_0000030664"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9UDW1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSGVRGLSRLLSARRLALAKAWPTVLQTGTRGFHFTVDGNKRASAKVSDSISAQYPVVDHEFDAVVVGAGGAGLRAAFGLSEAGFNTACVTKLFPTRSHTVAAQGGINAALGNMEEDNWRWHFYDTVKGSDWLGDQDAIHYMTEQAPAAVVELENYGMPFSRTEDGKIYQRAFGGQSLKFGKGGQAHRCCCVADRTGHSLLHTLYGRSLRYDTSYFVEYFALDLLMENGECRGVIALCIEDGSIHRIRAKNTVVATGGYGRTYFSCTSAHTSTGDGTAMITRAGLPCQDLEFVQFHPTGIYGAGCLITEGCRGEGGILINSQGERFMERYAPVAKDLASRDVVSRSMTLEIREGRGCGPEKDHVYLQLHHLPPEQLATRLPGISETAMIFAGVDVTKEPIPVLPTVHYNMGGIPTNYKGQVLRHVNGQDQIVPGLYACGEAACASVHGANRLGANSLLDLVVFGRACALSIEESCRPGDKVPPIKPNAGEESVMNLDKLRFADGSIRTSELRLSMQKSMQNHAAVFRVGSVLQEGCGKISKLYGDLKHLKTFDRGMVWNTDLVETLELQNLMLCALQTIYGAEARKESRGAHAREDYKVRIDEYDYSKPIQGQQKKPFEEHWRKHTLSYVDVGTGKVTLEYRPVIDKTLNEADCATVPPAIRSY",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P31040"},
		"label":"sdha_human"
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
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_6402.1"},{"db":"intact","id":"EBI-1224566"},{"db":"reactome","id":"REACT_3127.1"},{"db":"intenz","id":"1.3.5.1"}],
		"expansion":{"id":"9","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P31040"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
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
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_6402.1"},{"db":"intact","id":"EBI-1224566"},{"db":"reactome","id":"REACT_3127.1"},{"db":"intenz","id":"1.3.5.1"}],
		"expansion":{"id":"9","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P31040"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
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
		"sequence":"MAALLLRHVGRHCLRAHFSPQLCIRNAVPLGTTAKEEMERFWNKNIGSNRPLSPHITIYSWSLPMAMSICHRGTGIALSAGVSLFGMSALLLPGNFESYLELVKSLCLGPALIHTAKFALVFPLMYHTWNGIRHLMWDLGKGLKIPQLYQSGVVVLVLTVLSSMGLAAM",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q99643"},
		"label":"c560_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_6402.1"},{"db":"intact","id":"EBI-1224566"},{"db":"reactome","id":"REACT_3127.1"},{"db":"intenz","id":"1.3.5.1"}],
		"expansion":{"id":"9","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P31040"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q99643"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAVLWRLSAVCGALGGRALLLRTPVVRPAHISAFLQDRPIPEWCGVQHIHLSPSHHSGSKAASLHWTSERVVSVLLLGLLPAAYLNPCSAMDYSLAAALTLHGHWGLGQVVTDYVHGDALQKAAKAGLLALSALTFAGLCYFNYHDVGICKAVAMLWKL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O14521"},
		"label":"dhsd_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_6402.1"},{"db":"intact","id":"EBI-1224566"},{"db":"reactome","id":"REACT_3127.1"},{"db":"intenz","id":"1.3.5.1"}],
		"expansion":{"id":"9","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P31040"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O14521"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAAVVALSLRRRLPATTLGGACLQASRGAQTAAATAPRIKKFAIYRWDPDKAGDKPHMQTYEVDLNKCGPMVLDALIKIKNEVDSTLTFRRSCREGICGSCAMNINGGNTLACTRRIDTNLNKVSKIYPLPHMYVIKDLVPDLSNFYAQYKSIEPYLKKKDESQEGKQQYLQSIEEREKLDGLYECILCACCSTSCPSYWWNGDKYLGPAVLMQAYRWMIDSRDDFTEERLAKLQDPFSLYRCHTIMNCTRTCPKGLNPGKAIAEIKKMMATYKEKKASV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P21912"},
		"label":"sdhb_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_6402.1"},{"db":"intact","id":"EBI-1224566"},{"db":"reactome","id":"REACT_3127.1"},{"db":"intenz","id":"1.3.5.1"}],
		"expansion":{"id":"9","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P31040"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P21912"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLEELECGAPGARGAATAMDCKDRPAFPVKKLIQARLPFKRLNLVPKGKADDMSDDQGTSVQSKSPDLEASLDTLENNCHVGSDIDFRPKLVNGKGPLDNFLRNRIETSIGQSTVIIDLTEDSNEQPDSLVDHNKLNSEASPSREAINGQREDTGDQQGLLKAIQNDKLAFPGETLSDIPCKTEEEGVGCGGAGRRGDSQECSPRSCPELTSGPRMCPRKEQDSWSEAGGILFKGKVPMVVLQDILAVRPPQIKSLPATPQGKNMTPESEVLESFPEEDSVLSHSSLSSPSSTSSPEGPPAPPKQHSSTSPFPTSTPLRRITKKFVKGSTEKNKLRLQRDQERLGKQLKLRAEREEKEKLKEEAKRAKEEAKKKKEEEKELKEKERREKREKDEKEKAEKQRLKEERRKERQEALEAKLEEKRKKEEEKRLREEEKRIKAEKAEITRFFQKPKTPQAPKTLAGSCGKFAPFEIKEHMVLAPRRRTAFHPDLCSQLDQLLQQQSGEFSFLKDLKGRQPLRSGPTHVSTRNADIFNSDVVIVERGKGDGVPERRKFGRMKLLQFCENHRPAYWGTWNKKTALIRARDPWAQDTKLLDYEVDSDEEWEEEEPGESLSHSEGDDDDDMGEDEDEDDGFFVPHGYLSEDEGVTEECADPENHKVRQKLKAKEWDEFLAKGKRFRVLQPVKIGCVWAADRDCAGDDLKVLQQFAACFLETLPAQEEQTPKASKRERRDEQILAQLLPLLHGNVNGSKVIIREFQEHCRRGLLSNHTGSPRSPSTTYLHTPTPSEDAAIPSKSRLKRLISENSVYEKRPDFRMCWYVHPQVLQSFQQEHLPVPCQWSYVTSVPSAPKEDSGSVPSTGPSQGTPISLKRKSAGSMCITQFMKKRRHDGQIGAEDMDGFQADTEEEEEEEGDCMIVDVPDAAEVQAPCGAASGAGGGVGVDTGKATLTSSPLGAS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q13111"},
		"label":"caf1a_human"
	},
	{
		"object":"interactor",
		"sequence":"MADKEAAFDDAVEERVINEEYKIWKKNTPFLYDLVMTHALEWPSLTAQWLPDVTRPEGKDFSIHRLVLGTHTSDEQNHLVIASVQLPNDDAQFDASHYDSEKGEFGGFGSVSGKIEIEIKINHEGEVNRARYMPQNPCIIATKTPSSDVLVFDYTKHPSKPDPSGECNPDLRLRGHQKEGYGLSWNPNLSGHLLSASDDHTICLWDISAVPKEGKVVDAKTIFTGHTAVVEDVSWHLLHESLFGSVADDQKLMIWDTRSNNTSKPSHSVDAHTAEVNCLSFNPYSEFILATGSADKTVALWDLRNLKLKLHSFESHKDEIFQVQWSPHNETILASSGTDRRLNVWDLSKIGEEQSPEDAEDGPPELLFIHGGHTAKISDFSWNPNEPWVICSVSEDNIMQVWQMAENIYNDEDPEGSVDPEGQGS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q09028"},
		"label":"rbbp4_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1236585"}],
		"expansion":{"id":"10","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q13111"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22200202",
				"name":"rbbp4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["27069718"]
				},
				{
				"id":"29776287",
				"name":"caf1b binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["19273275"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q09028"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"25014635",
				"name":"caf1b binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["17500778"]
				},
				{
				"id":"27069718",
				"name":"caf1a binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["22200202"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKVITCEIAWHNKEPVYSLDFQHGTAGRIHRLASAGVDTNVRIWKVEKGPDGKAIVEFLSNLARHTKAVNVVRFSPTGEILASGGDDAVILLWKVNDNKEPEQIAFQDEDEAQLNKENWTVVKTLRGHLEDVYDICWATDGNLMASASVDNTAIIWDVSKGQKISIFNEHKSYVQGVTWDPLGQYVATLSCDRVLRVYSIQKKRVAFNVSKMLSGIGAEGEARSYRMFHDDSMKSFFRRLSFTPDGSLLLTPAGCVESGENVMNTTYVFSRKNLKRPIAHLPCPGKATLAVRCCPVYFELRPVVETGVELMSLPYRLVFAVASEDSVLLYDTQQSFPFGYVSNIHYHTLSDISWSSDGAFLAISSTDGYCSFVTFEKDELGIPLKEKPVLNMRTPDTAKKTKSQTHRGSSPGPRPVEGTPASRTQDPSSPGTTPPQARQAPAPTVIRDPPSITPAVKSPLPGPSEEKTLQPSSQNTKAHPSRRVTLNTLQAWSKTTPRRINLTPLKTDTPPSSVPTSVISTPSTEEIQSETPGDAQGSPPELKRPRLDENKGGTESLDP",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q13112"},
		"label":"caf1b_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1236585"}],
		"expansion":{"id":"10","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q13111"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22200202",
				"name":"rbbp4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["27069718"]
				},
				{
				"id":"29776287",
				"name":"caf1b binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["19273275"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q13112"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19273275",
				"name":"caf1a binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["29776287"]
				},
				{
				"id":"17500778",
				"name":"rbbp4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["25014635"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MFSFVDLRLLLLLAATALLTHGQEEGQVEGQDEDIPPITCVQNGLRYHDRDVWKPEPCRICVCDNGKVLCDDVICDETKNCPGAEVPEGECCPVCPDGSESPTDQETTGVEGPKGDTGPRGPRGPAGPPGRDGIPGQPGLPGPPGPPGPPGPPGLGGNFAPQLSYGYDEKSTGGISVPGPMGPSGPRGLPGPPGAPGPQGFQGPPGEPGEPGASGPMGPRGPPGPPGKNGDDGEAGKPGRPGERGPPGPQGARGLPGTAGLPGMKGHRGFSGLDGAKGDAGPAGPKGEPGSPGENGAPGQMGPRGLPGERGRPGAPGPAGARGNDGATGAAGPPGPTGPAGPPGFPGAVGAKGEAGPQGPRGSEGPQGVRGEPGPPGPAGAAGPAGNPGADGQPGAKGANGAPGIAGAPGFPGARGPSGPQGPGGPPGPKGNSGEPGAPGSKGDTGAKGEPGPVGVQGPPGPAGEEGKRGARGEPGPTGLPGPPGERGGPGSRGFPGADGVAGPKGPAGERGSPGPAGPKGSPGEAGRPGEAGLPGAKGLTGSPGSPGPDGKTGPPGPAGQDGRPGPPGPPGARGQAGVMGFPGPKGAAGEPGKAGERGVPGPPGAVGPAGKDGEAGAQGPPGPAGPAGERGEQGPAGSPGFQGLPGPAGPPGEAGKPGEQGVPGDLGAPGPSGARGERGFPGERGVQGPPGPAGPRGANGAPGNDGAKGDAGAPGAPGSQGAPGLQGMPGERGAAGLPGPKGDRGDAGPKGADGSPGKDGVRGLTGPIGPPGPAGAPGDKGESGPSGPAGPTGARGAPGDRGEPGPPGPAGFAGPPGADGQPGAKGEPGDAGAKGDAGPPGPAGPAGPPGPIGNVGAPGAKGARGSAGPPGATGFPGAAGRVGPPGPSGNAGPPGPPGPAGKEGGKGPRGETGPAGRPGEVGPPGPPGPAGEKGSPGADGPAGAPGTPGPQGIAGQRGVVGLPGQRGERGFPGLPGPSGEPGKQGPSGASGERGPPGPMGPPGLAGPPGESGREGAPGAEGSPGRDGSPGAKGDRGETGPAGPPGAPGAPGAPGPVGPAGKSGDRGETGPAGPTGPVGPVGARGPAGPQGPRGDKGETGEQGDRGIKGHRGFSGLQGPPGPPGSPGEQGPSGASGPAGPRGPPGSAGAPGKDGLNGLPGPIGPPGPRGRTGDAGPVGPPGPPGPPGPPGPPSAGFDFSFLPQPPQEKAHDGGRYYRADDANVVRDRDLEVDTTLKSLSQQIENIRSPEGSRKNPARTCRDLKMCHSDWKSGEYWIDPNQGCNLDAIKVFCNMETGETCVYPTQPSVAQKNWYISKNPKDKRHVWFGESMTDGFQFEYGGQGSDPADVAIQLTFLRLMSTEASQNITYHCKNSVAYMDQQTGNLKKALLLQGSNEIEIRAEGNSRFTYSVTVDGCTSHTGAWGKTVIEYKTTKTSRLPIIDVAPLDVGAPDQEFGFDVGPVCFL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P02452"},
		"label":"co1a1_human"
	},
	{
		"object":"interactor",
		"sequence":"MLSFVDTRTLLLLAVTLCLATCQSLQEETVRKGPAGDRGPRGERGPPGPPGRDGEDGPTGPPGPPGPPGPPGLGGNFAAQYDGKGVGLGPGPMGLMGPRGPPGAAGAPGPQGFQGPAGEPGEPGQTGPAGARGPAGPPGKAGEDGHPGKPGRPGERGVVGPQGARGFPGTPGLPGFKGIRGHNGLDGLKGQPGAPGVKGEPGAPGENGTPGQTGARGLPGERGRVGAPGPAGARGSDGSVGPVGPAGPIGSAGPPGFPGAPGPKGEIGAVGNAGPAGPAGPRGEVGLPGLSGPVGPPGNPGANGLTGAKGAAGLPGVAGAPGLPGPRGIPGPVGAAGATGARGLVGEPGPAGSKGESGNKGEPGSAGPQGPPGPSGEEGKRGPNGEAGSAGPPGPPGLRGSPGSRGLPGADGRAGVMGPPGSRGASGPAGVRGPNGDAGRPGEPGLMGPRGLPGSPGNIGPAGKEGPVGLPGIDGRPGPIGPAGARGEPGNIGFPGPKGPTGDPGKNGDKGHAGLAGARGAPGPDGNNGAQGPPGPQGVQGGKGEQGPPGPPGFQGLPGPSGPAGEVGKPGERGLHGEFGLPGPAGPRGERGPPGESGAAGPTGPIGSRGPSGPPGPDGNKGEPGVVGAVGTAGPSGPSGLPGERGAAGIPGGKGEKGEPGLRGEIGNPGRDGARGAPGAVGAPGPAGATGDRGEAGAAGPAGPAGPRGSPGERGEVGPAGPNGFAGPAGAAGQPGAKGERGAKGPKGENGVVGPTGPVGAAGPAGPNGPPGPAGSRGDGGPPGMTGFPGAAGRTGPPGPSGISGPPGPPGPAGKEGLRGPRGDQGPVGRTGEVGAVGPPGFAGEKGPSGEAGTAGPPGTPGPQGLLGAPGILGLPGSRGERGLPGVAGAVGEPGPLGIAGPPGARGPPGAVGSPGVNGAPGEAGRDGNPGNDGPPGRDGQPGHKGERGYPGNIGPVGAAGAPGPHGPVGPAGKHGNRGETGPSGPVGPAGAVGPRGPSGPQGIRGDKGEPGEKGPRGLPGLKGHNGLQGLPGIAGHHGDQGAPGSVGPAGPRGPAGPSGPAGKDGRTGHPGTVGPAGIRGPQGHQGPAGPPGPPGPPGPPGVSGGGYDFGYDGDFYRADQPRSAPSLRPKDYEVDATLKSLNNQIETLLTPEGSRKNPARTCRDLRLSHPEWSSGYYWIDPNQGCTMDAIKVYCDFSTGETCIRAQPENIPAKNWYRSSKDKKHVWLGETINAGSQFEYNVEGVTSKEMATQLAFMRLLANYASQNITYHCKNSIAYMDEETGNLKKAVILQGSNDVELVAEGNSRFTYTVLVDGCSKKTNEWGKTIIEYKTNKPSRLPFLDIAPLDIGGADQEFFVDIGPVCFK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P08123"},
		"label":"co1a2_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_3"},{"db":"intact","id":"EBI-2325312"},{"db":"reactome","id":"REACT_3585.1"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P02452"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P08123"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MIRLGAPQTLVLLTLLVAAVLRCQGQDVQEAGSCVQDGQRYNDKDVWKPEPCRICVCDTGTVLCDDIICEDVKDCLSPEIPFGECCPICPTDLATASGQPGPKGQKGEPGDIKDIVGPKGPPGPQGPAGEQGPRGDRGDKGEKGAPGPRGRDGEPGTPGNPGPPGPPGPPGPPGLGGNFAAQMAGGFDEKAGGAQLGVMQGPMGPMGPRGPPGPAGAPGPQGFQGNPGEPGEPGVSGPMGPRGPPGPPGKPGDDGEAGKPGKAGERGPPGPQGARGFPGTPGLPGVKGHRGYPGLDGAKGEAGAPGVKGESGSPGENGSPGPMGPRGLPGERGRTGPAGAAGARGNDGQPGPAGPPGPVGPAGGPGFPGAPGAKGEAGPTGARGPEGAQGPRGEPGTPGSPGPAGASGNPGTDGIPGAKGSAGAPGIAGAPGFPGPRGPPGPQGATGPLGPKGQTGEPGIAGFKGEQGPKGEPGPAGPQGAPGPAGEEGKRGARGEPGGVGPIGPPGERGAPGNRGFPGQDGLAGPKGAPGERGPSGLAGPKGANGDPGRPGEPGLPGARGLTGRPGDAGPQGKVGPSGAPGEDGRPGPPGPQGARGQPGVMGFPGPKGANGEPGKAGEKGLPGAPGLRGLPGKDGETGAAGPPGPAGPAGERGEQGAPGPSGFQGLPGPPGPPGEGGKPGDQGVPGEAGAPGLVGPRGERGFPGERGSPGAQGLQGPRGLPGTPGTDGPKGASGPAGPPGAQGPPGLQGMPGERGAAGIAGPKGDRGDVGEKGPEGAPGKDGGRGLTGPIGPPGPAGANGEKGEVGPPGPAGSAGARGAPGERGETGPPGPAGFAGPPGADGQPGAKGEQGEAGQKGDAGAPGPQGPSGAPGPQGPTGVTGPKGARGAQGPPGATGFPGAAGRVGPPGSNGNPGPPGPPGPSGKDGPKGARGDSGPPGRAGEPGLQGPAGPPGEKGEPGDDGPSGAEGPPGPQGLAGQRGIVGLPGQRGERGFPGLPGPSGEPGKQGAPGASGDRGPPGPVGPPGLTGPAGEPGREGSPGADGPPGRDGAAGVKGDRGETGAVGAPGAPGPPGSPGPAGPTGKQGDRGEAGAQGPMGPSGPAGARGIQGPQGPRGDKGEAGEPGERGLKGHRGFTGLQGLPGPPGPSGDQGASGPAGPSGPRGPPGPVGPSGKDGANGIPGPIGPPGPRGRSGETGPAGPPGNPGPPGPPGPPGPGIDMSAFAGLGPREKGPDPLQYMRADQAAGGLRQHDAEVDATLKSLNNQIESIRSPEGSRKNPARTCRDLKLCHPEWKSGDYWIDPNQGCTLDAMKVFCNMETGETCVYPNPANVPKKNWWSSKSKEKKHIWFGETINGGFHFSYGDDNLAPNTANVQMTFLRLLSTEGSQNITYHCKNSIAYLDEAAGNLKKALLIQGSNDVEIRAEGNSRFTYTALKDGCTKHTGKWGKTVIEYRSQKTSRLPIIDIAPMDIGGPEQEFGVDIGPVCFL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P02458"},
		"label":"co2a1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"reactome","id":"REACT_14196.1"},{"db":"intact","id":"EBI-2431477"},{"db":"matrixdb","id":"MULT_9"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P02458"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P02458"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MMSFVQKGSWLLLALLHPTIILAQQEAVEGGCSHLGQSYADRDVWKPEPCQICVCDSGSVLCDDIICDDQELDCPNPEIPFGECCAVCPQPPTAPTRPPNGQGPQGPKGDPGPPGIPGRNGDPGIPGQPGSPGSPGPPGICESCPTGPQNYSPQYDSYDVKSGVAVGGLAGYPGPAGPPGPPGPPGTSGHPGSPGSPGYQGPPGEPGQAGPSGPPGPPGAIGPSGPAGKDGESGRPGRPGERGLPGPPGIKGPAGIPGFPGMKGHRGFDGRNGEKGETGAPGLKGENGLPGENGAPGPMGPRGAPGERGRPGLPGAAGARGNDGARGSDGQPGPPGPPGTAGFPGSPGAKGEVGPAGSPGSNGAPGQRGEPGPQGHAGAQGPPGPPGINGSPGGKGEMGPAGIPGAPGLMGARGPPGPAGANGAPGLRGGAGEPGKNGAKGEPGPRGERGEAGIPGVPGAKGEDGKDGSPGEPGANGLPGAAGERGAPGFRGPAGPNGIPGEKGPAGERGAPGPAGPRGAAGEPGRDGVPGGPGMRGMPGSPGGPGSDGKPGPPGSQGESGRPGPPGPSGPRGQPGVMGFPGPKGNDGAPGKNGERGGPGGPGPQGPPGKNGETGPQGPPGPTGPGGDKGDTGPPGPQGLQGLPGTGGPPGENGKPGEPGPKGDAGAPGAPGGKGDAGAPGERGPPGLAGAPGLRGGAGPPGPEGGKGAAGPPGPPGAAGTPGLQGMPGERGGLGSPGPKGDKGEPGGPGADGVPGKDGPRGPTGPIGPPGPAGQPGDKGEGGAPGLPGIAGPRGSPGERGETGPPGPAGFPGAPGQNGEPGGKGERGAPGEKGEGGPPGVAGPPGGSGPAGPPGPQGVKGERGSPGGPGAAGFPGARGLPGPPGSNGNPGPPGPSGSPGKDGPPGPAGNTGAPGSPGVSGPKGDAGQPGEKGSPGAQGPPGAPGPLGIAGITGARGLAGPPGMPGPRGSPGPQGVKGESGKPGANGLSGERGPPGPQGLPGLAGTAGEPGRDGNPGSDGLPGRDGSPGGKGDRGENGSPGAPGAPGHPGPPGPVGPAGKSGDRGESGPAGPAGAPGPAGSRGAPGPQGPRGDKGETGERGAAGIKGHRGFPGNPGAPGSPGPAGQQGAIGSPGPAGPRGPVGPSGPPGKDGTSGHPGPIGPPGPRGNRGERGSEGSPGHPGQPGPPGPPGAPGPCCGGVGAAAIAGIGGEKAGGFAPYYGDEPMDFKINTDEIMTSLKSVNGQIESLISPDGSRKNPARNCRDLKFCHPELKSGEYWVDPNQGCKLDAIKVFCNMETGETCISANPLNVPRKHWWTDSSAEKKHVWFGESMDGGFQFSYGNPELPEDVLDVHLAFLRLLSSRASQNITYHCKNSIAYMDQASGNVKKALKLMGSNEGEFKAEGNSKFTYTVLEDGCTKHTGEWSKTVFEYRTRKAVRLPIVDIAPYDIGGPDQEFGVDVGPVCFL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P02461"},
		"label":"co3a1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"3dmw"},{"db":"reactome","id":"REACT_17422.1"},{"db":"intact","id":"EBI-2431547"},{"db":"matrixdb","id":"MULT_10"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P02461"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P02461"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGPRLSVWLLLLPAALLLHEEHSRAAAKGGCAGSGCGKCDCHGVKGQKGERGLPGLQGVIGFPGMQGPEGPQGPPGQKGDTGEPGLPGTKGTRGPPGASGYPGNPGLPGIPGQDGPPGPPGIPGCNGTKGERGPLGPPGLPGFAGNPGPPGLPGMKGDPGEILGHVPGMLLKGERGFPGIPGTPGPPGLPGLQGPVGPPGFTGPPGPPGPPGPPGEKGQMGLSFQGPKGDKGDQGVSGPPGVPGQAQVQEKGDFATKGEKGQKGEPGFQGMPGVGEKGEPGKPGPRGKPGKDGDKGEKGSPGFPGEPGYPGLIGRQGPQGEKGEAGPPGPPGIVIGTGPLGEKGERGYPGTPGPRGEPGPKGFPGLPGQPGPPGLPVPGQAGAPGFPGERGEKGDRGFPGTSLPGPSGRDGLPGPPGSPGPPGQPGYTNGIVECQPGPPGDQGPPGIPGQPGFIGEIGEKGQKGESCLICDIDGYRGPPGPQGPPGEIGFPGQPGAKGDRGLPGRDGVAGVPGPQGTPGLIGQPGAKGEPGEFYFDLRLKGDKGDPGFPGQPGMTGRAGSPGRDGHPGLPGPKGSPGSVGLKGERGPPGGVGFPGSRGDTGPPGPPGYGPAGPIGDKGQAGFPGGPGSPGLPGPKGEPGKIVPLPGPPGAEGLPGSPGFPGPQGDRGFPGTPGRPGLPGEKGAVGQPGIGFPGPPGPKGVDGLPGDMGPPGTPGRPGFNGLPGNPGVQGQKGEPGVGLPGLKGLPGLPGIPGTPGEKGSIGVPGVPGEHGAIGPPGLQGIRGEPGPPGLPGSVGSPGVPGIGPPGARGPPGGQGPPGLSGPPGIKGEKGFPGFPGLDMPGPKGDKGAQGLPGITGQSGLPGLPGQQGAPGIPGFPGSKGEMGVMGTPGQPGSPGPVGAPGLPGEKGDHGFPGSSGPRGDPGLKGDKGDVGLPGKPGSMDKVDMGSMKGQKGDQGEKGQIGPIGEKGSRGDPGTPGVPGKDGQAGQPGQPGPKGDPGISGTPGAPGLPGPKGSVGGMGLPGTPGEKGVPGIPGPQGSPGLPGDKGAKGEKGQAGPPGIGIPGLRGEKGDQGIAGFPGSPGEKGEKGSIGIPGMPGSPGLKGSPGSVGYPGSPGLPGEKGDKGLPGLDGIPGVKGEAGLPGTPGPTGPAGQKGEPGSDGIPGSAGEKGEPGLPGRGFPGFPGAKGDKGSKGEVGFPGLAGSPGIPGSKGEQGFMGPPGPQGQPGLPGSPGHATEGPKGDRGPQGQPGLPGLPGPMGPPGLPGIDGVKGDKGNPGWPGAPGVPGPKGDPGFQGMPGIGGSPGITGSKGDMGPPGVPGFQGPKGLPGLQGIKGDQGDQGVPGAKGLPGPPGPPGPYDIIKGEPGLPGPEGPPGLKGLQGLPGPKGQQGVTGLVGIPGPPGIPGFDGAPGQKGEMGPAGPTGPRGFPGPPGPDGLPGSMGPPGTPSVDHGFLVTRHSQTIDDPQCPSGTKILYHGYSLLYVQGNERAHGQDLGTAGSCLRKFSTMPFLFCNINNVCNFASRNDYSYWLSTPEPMPMSMAPITGENIRPFISRCAVCEAPAMVMAVHSQTIQIPPCPSGWSSLWIGYSFVMHTSAGAEGSGQALASPGSCLEEFRSAPFIECHGRGTCNYYANAYSFWLATIERSEMFKKPTPSTLKAGELRTHVSRCQVCMRRT",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P02462"},
		"label":"co4a1_human"
	},
	{
		"object":"interactor",
		"sequence":"MGRDQRAVAGPALRRWLLLGTVTVGFLAQSVLAGVKKFDVPCGGRDCSGGCQCYPEKGGRGQPGPVGPQGYNGPPGLQGFPGLQGRKGDKGERGAPGVTGPKGDVGARGVSGFPGADGIPGHPGQGGPRGRPGYDGCNGTQGDSGPQGPPGSEGFTGPPGPQGPKGQKGEPYALPKEERDRYRGEPGEPGLVGFQGPPGRPGHVGQMGPVGAPGRPGPPGPPGPKGQQGNRGLGFYGVKGEKGDVGQPGPNGIPSDTLHPIIAPTGVTFHPDQYKGEKGSEGEPGIRGISLKGEEGIMGFPGLRGYPGLSGEKGSPGQKGSRGLDGYQGPDGPRGPKGEAGDPGPPGLPAYSPHPSLAKGARGDPGFPGAQGEPGSQGEPGDPGLPGPPGLSIGDGDQRRGLPGEMGPKGFIGDPGIPALYGGPPGPDGKRGPPGPPGLPGPPGPDGFLFGLKGAKGRAGFPGLPGSPGARGPKGWKGDAGECRCTEGDEAIKGLPGLPGPKGFAGINGEPGRKGDRGDPGQHGLPGFPGLKGVPGNIGAPGPKGAKGDSRTITTKGERGQPGVPGVPGMKGDDGSPGRDGLDGFPGLPGPPGDGIKGPPGDPGYPGIPGTKGTPGEMGPPGLGLPGLKGQRGFPGDAGLPGPPGFLGPPGPAGTPGQIDCDTDVKRAVGGDRQEAIQPGCIGGPKGLPGLPGPPGPTGAKGLRGIPGFAGADGGPGPRGLPGDAGREGFPGPPGFIGPRGSKGAVGLPGPDGSPGPIGLPGPDGPPGERGLPGEVLGAQPGPRGDAGVPGQPGLKGLPGDRGPPGFRGSQGMPGMPGLKGQPGLPGPSGQPGLYGPPGLHGFPGAPGQEGPLGLPGIPGREGLPGDRGDPGDTGAPGPVGMKGLSGDRGDAGFTGEQGHPGSPGFKGIDGMPGTPGLKGDRGSPGMDGFQGMPGLKGRPGFPGSKGEAGFFGIPGLKGLAGEPGFKGSRGDPGPPGPPPVILPGMKDIKGEKGDEGPMGLKGYLGAKGIQGMPGIPGLSGIPGLPGRPGHIKGVKGDIGVPGIPGLPGFPGVAGPPGITGFPGFIGSRGDKGAPGRAGLYGEIGATGDFGDIGDTINLPGRPGLKGERGTTGIPGLKGFFGEKGTEGDIGFPGITGVTGVQGPPGLKGQTGFPGLTGPPGSQGELGRIGLPGGKGDDGWPGAPGLPGFPGLRGIRGLHGLPGTKGFPGSPGSDIHGDPGFPGPPGERGDPGEANTLPGPVGVPGQKGDQGAPGERGPPGSPGLQGFPGITPPSNISGAPGDKGAPGIFGLKGYRGPPGPPGSAALPGSKGDTGNPGAPGTPGTKGWAGDSGPQGRPGVFGLPGEKGPRGEQGFMGNTGPTGAVGDRGPKGPKGDPGFPGAPGTVGAPGIAGIPQKIAVQPGTVGPQGRRGPPGAPGEMGPQGPPGEPGFRGAPGKAGPQGRGGVSAVPGFRGDEGPIGHQGPIGQEGAPGRPGSPGLPGMPGRSVSIGYLLVKHSQTDQEPMCPVGMNKLWSGYSLLYFEGQEKAHNQDLGLAGSCLARFSTMPFLYCNPGDVCYYASRNDKSYWLSTTAPLPMMPVAEDEIKPYISRCSVCEAPAIAIAVHSQDVSIPHCPAGWRSLWIGYSFLMHTAAGDEGGGQSLVSPGSCLEDFRATPFIECNGGRGTCHYYANKYSFWLTTIPEQSFQGSPSADTLKAGLIRTHISRCQVCMKNL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P08572"},
		"label":"co4a2_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_4_VAR1_human"},{"db":"reactome","id":"REACT_13960.1"},{"db":"intact","id":"EBI-2461395"},{"db":"wwpdb","id":"1li1"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P02462"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"30994209",
				"name":"col4a2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["20669850"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P08572"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"20669850",
				"name":"col4a1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["30994209"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKLRGVSLAAGLFLLALSLWGQPAEAAACYGCSPGSKCDCSGIKGEKGERGFPGLEGHPGLPGFPGPEGPPGPRGQKGDDGIPGPPGPKGIRGPPGLPGFPGTPGLPGMPGHDGAPGPQGIPGCNGTKGERGFPGSPGFPGLQGPPGPPGIPGMKGEPGSIIMSSLPGPKGNPGYPGPPGIQGLPGPTGIPGPIGPPGPPGLMGPPGPPGLPGPKGNMGLNFQGPKGEKGEQGLQGPPGPPGQISEQKRPIDVEFQKGDQGLPGDRGPPGPPGIRGPPGPPGGEKGEKGEQGEPGKRGKPGKDGENGQPGIPGLPGDPGYPGEPGRDGEKGQKGDTGPPGPPGLVIPRPGTGITIGEKGNIGLPGLPGEKGERGFPGIQGPPGLPGPPGAAVMGPPGPPGFPGERGQKGDEGPPGISIPGPPGLDGQPGAPGLPGPPGPAGPHIPPSDEICEPGPPGPPGSPGDKGLQGEQGVKGDKGDTCFNCIGTGISGPPGQPGLPGLPGPPGSLGFPGQKGEKGQAGATGPKGLPGIPGAPGAPGFPGSKGEPGDILTFPGMKGDKGELGSPGAPGLPGLPGTPGQDGLPGLPGPKGEPGGITFKGERGPPGNPGLPGLPGNIGPMGPPGFGPPGPVGEKGIQGVAGNPGQPGIPGPKGDPGQTITQPGKPGLPGNPGRDGDVGLPGDPGLPGQPGLPGIPGSKGEPGIPGIGLPGPPGPKGFPGIPGPPGAPGTPGRIGLEGPPGPPGFPGPKGEPGFALPGPPGPPGLPGFKGALGPKGDRGFPGPPGPPGRTGLDGLPGPKGDVGPNGQPGPMGPPGLPGIGVQGPPGPPGIPGPIGQPGLHGIPGEKGDPGPPGLDVPGPPGERGSPGIPGAPGPIGPPGSPGLPGKAGASGFPGTKGEMGMMGPPGPPGPLGIPGRSGVPGLKGDDGLQGQPGLPGPTGEKGSKGEPGLPGPPGPMDPNLLGSKGEKGEPGLPGIPGVSGPKGYQGLPGDPGQPGLSGQPGLPGPPGPKGNPGLPGQPGLIGPPGLKGTIGDMGFPGPQGVEGPPGPSGVPGQPGSPGLPGQKGDKGDPGISSIGLPGLPGPKGEPGLPGYPGNPGIKGSVGDPGLPGLPGTPGAKGQPGLPGFPGTPGPPGPKGISGPPGNPGLPGEPGPVGGGGHPGQPGPPGEKGKPGQDGIPGPAGQKGEPGQPGFGNPGPPGLPGLSGQKGDGGLPGIPGNPGLPGPKGEPGFHGFPGVQGPPGPPGSPGPALEGPKGNPGPQGPPGRPGLPGPEGPPGLPGNGGIKGEKGNPGQPGLPGLPGLKGDQGPPGLQGNPGRPGLNGMKGDPGLPGVPGFPGMKGPSGVPGSAGPEGEPGLIGPPGPPGLPGPSGQSIIIKGDAGPPGIPGQPGLKGLPGPQGPQGLPGPTGPPGDPGRNGLPGFDGAGGRKGDPGLPGQPGTRGLDGPPGPDGLQGPPGPPGTSSVAHGFLITRHSQTTDAPQCPQGTLQVYEGFSLLYVQGNKRAHGQDLGTAGSCLRRFSTMPFMFCNINNVCNFASRNDYSYWLSTPEPMPMSMQPLKGQSIQPFISRCAVCEAPAVVIAVHSQTIQIPHCPQGWDSLWIGYSFMMHTSAGAEGSGQALASPGSCLEEFRSAPFIECHGRGTCNYYANSYSFWLATVDVSDMFSKPQSETLKAGDLRTRISRCQVCMKRT",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P29400"},
		"label":"co4a5_human"
	},
	{
		"object":"interactor",
		"sequence":"MLINKLWLLLVTLCLTEELAAAGEKSYGKPCGGQDCSGSCQCFPEKGARGRPGPIGIQGPTGPQGFTGSTGLSGLKGERGFPGLLGPYGPKGDKGPMGVPGFLGINGIPGHPGQPGPRGPPGLDGCNGTQGAVGFPGPDGYPGLLGPPGLPGQKGSKGDPVLAPGSFKGMKGDPGLPGLDGITGPQGAPGFPGAVGPAGPPGLQGPPGPPGPLGPDGNMGLGFQGEKGVKGDVGLPGPAGPPPSTGELEFMGFPKGKKGSKGEPGPKGFPGISGPPGFPGLGTTGEKGEKGEKGIPGLPGPRGPMGSEGVQGPPGQQGKKGTLGFPGLNGFQGIEGQKGDIGLPGPDVFIDIDGAVISGNPGDPGVPGLPGLKGDEGIQGLRGPSGVPGLPALSGVPGALGPQGFPGLKGDQGNPGRTTIGAAGLPGRDGLPGPPGPPGPPSPEFETETLHNKESGFPGLRGEQGPKGNLGLKGIKGDSGFCACDGGVPNTGPPGEPGPPGPWGLIGLPGLKGARGDRGSGGAQGPAGAPGLVGPLGPSGPKGKKGEPILSTIQGMPGDRGDSGSQGFRGVIGEPGKDGVPGLPGLPGLPGDGGQGFPGEKGLPGLPGEKGHPGPPGLPGNGLPGLPGPRGLPGDKGKDGLPGQQGLPGSKGITLPCIIPGSYGPSGFPGTPGFPGPKGSRGLPGTPGQPGSSGSKGEPGSPGLVHLPELPGFPGPRGEKGLPGFPGLPGKDGLPGMIGSPGLPGSKGATGDIFGAENGAPGEQGLQGLTGHKGFLGDSGLPGLKGVHGKPGLLGPKGERGSPGTPGQVGQPGTPGSSGPYGIKGKSGLPGAPGFPGISGHPGKKGTRGKKGPPGSIVKKGLPGLKGLPGNPGLVGLKGSPGSPGVAGLPALSGPKGEKGSVGFVGFPGIPGLPGIPGTRGLKGIPGSTGKMGPSGRAGTPGEKGDRGNPGPVGIPSPRRPMSNLWLKGDKGSQGSAGSNGFPGPRGDKGEAGRPGPPGLPGAPGLPGIIKGVSGKPGPPGFMGIRGLPGLKGSSGITGFPGMPGESGSQGIRGSPGLPGASGLPGLKGDNGQTVEISGSPGPKGQPGESGFKGTKGRDGLIGNIGFPGNKGEDGKVGVSGDVGLPGAPGFPGVAGMRGEPGLPGSSGHQGAIGPLGSPGLIGPKGFPGFPGLHGLNGLPGTKGTHGTPGPSITGVPGPAGLPGPKGEKGYPGIGIGAPGKPGLRGQKGDRGFPGLQGPAGLPGAPGISLPSLIAGQPGDPGRPGLDGERGRPGPAGPPGPPGPSSNQGDTGDPGFPGIPGPKGPKGDQGIPGFSGLPGELGLKGMRGEPGFMGTPGKVGPPGDPGFPGMKGKAGPRGSSGLQGDPGQTPTAEAVQVPPGPLGLPGIDGIPGLTGDPGAQGPVGLQGSKGLPGIPGKDGPSGLPGPPGALGDPGLPGLQGPPGFEGAPGQQGPFGMPGMPGQSMRVGYTLVKHSQSEQVPPCPIGMSQLWVGYSLLFVEGQEKAHNQDLGFAGSCLPRFSTMPFIYCNINEVCHYARRNDKSYWLSTTAPIPMMPVSQTQIPQYISRCSVCEAPSQAIAVHSQDITIPQCPLGWRSLWIGYSFLMHTAAGAEGGGQSLVSPGSCLEDFRATPFIECSGARGTCHYFANKYSFWLTTVEERQQFGELPVSETLKAGQLHTRVSRCQVCMKSL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q14031"},
		"label":"co4a6_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_4_VAR2_human"},{"db":"intact","id":"EBI-2461418"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P29400"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"9144857",
				"name":"col4a6 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["18322039"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q14031"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"18322039",
				"name":"col4a5 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["9144857"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSARTAPRPQVLLLPLLLVLLAAAPAASKGCVCKDKGQCFCDGAKGEKGEKGFPGPPGSPGQKGFTGPEGLPGPQGPKGFPGLPGLTGSKGVRGISGLPGFSGSPGLPGTPGNTGPYGLVGVPGCSGSKGEQGFPGLPGTLGYPGIPGAAGLKGQKGAPAKEEDIELDAKGDPGLPGAPGPQGLPGPPGFPGPVGPPGPPGFFGFPGAMGPRGPKGHMGERVIGHKGERGVKGLTGPPGPPGTVIVTLTGPDNRTDLKGEKGDKGAMGEPGPPGPSGLPGESYGSEKGAPGDPGLQGKPGKDGVPGFPGSEGVKGNRGFPGLMGEDGIKGQKGDIGPPGFRGPTEYYDTYQEKGDEGTPGPPGPRGARGPQGPSGPPGVPGSPGSSRPGLRGAPGWPGLKGSKGERGRPGKDAMGTPGSPGCAGSPGLPGSPGPPGPPGDIVFRKGPPGDHGLPGYLGSPGIPGVDGPKGEPGLLCTQCPYIPGPPGLPGLPGLHGVKGIPGRQGAAGLKGSPGSPGNTGLPGFPGFPGAQGDPGLKGEKGETLQPEGQVGVPGDPGLRGQPGRKGLDGIPGTPGVKGLPGPKGELALSGEKGDQGPPGDPGSPGSPGPAGPAGPPGYGPQGEPGLQGTQGVPGAPGPPGEAGPRGELSVSTPVPGPPGPPGPPGHPGPQGPPGIPGSLGKCGDPGLPGPDGEPGIPGIGFPGPPGPKGDQGFPGTKGSLGCPGKMGEPGLPGKPGLPGAKGEPAVAMPGGPGTPGFPGERGNSGEHGEIGLPGLPGLPGTPGNEGLDGPRGDPGQPGPPGEQGPPGRCIEGPRGAQGLPGLNGLKGQQGRRGKTGPKGDPGIPGLDRSGFPGETGSPGIPGHQGEMGPLGQRGYPGNPGILGPPGEDGVIGMMGFPGAIGPPGPPGNPGTPGQRGSPGIPGVKGQRGTPGAKGEQGDKGNPGPSEISHVIGDKGEPGLKGFAGNPGEKGNRGVPGMPGLKGLKGLPGPAGPPGPRGDLGSTGNPGEPGLRGIPGSMGNMGMPGSKGKRGTLGFPGRAGRPGLPGIHGLQGDKGEPGYSEGTRPGPPGPTGDPGLPGDMGKKGEMGQPGPPGHLGPAGPEGAPGSPGSPGLPGKPGPHGDLGFKGIKGLLGPPGIRGPPGLPGFPGSPGPMGIRGDQGRDGIPGPAGEKGETGLLRAPPGPRGNPGAQGAKGDRGAPGFPGLPGRKGAMGDAGPRGPTGIEGFPGPPGLPGAIIPGQTGNRGPPGSRGSPGAPGPPGPPGSHVIGIKGDKGSMGHPGPKGPPGTAGDMGPPGRLGAPGTPGLPGPRGDPGFQGFPGVKGEKGNPGFLGSIGPPGPIGPKGPPGVRGDPGTLKIISLPGSPGPPGTPGEPGMQGEPGPPGPPGNLGPCGPRGKPGKDGKPGTPGPAGEKGNKGSKGEPGPAGSDGLPGLKGKRGDSGSPATWTTRGFVFTRHSQTTAIPSCPEGTVPLYSGFSFLFVQGNQRAHGQDLGTLGSCLQRFTTMPFLFCNVNDVCNFASRNDYSYWLSTPALMPMNMAPITGRALEPYISRCTVCEGPAIAIAVHSQTTDIPPCPHGWISLWKGFSFIMFTSAGSEGTGQALASPGSCLEEFRASPFLECHGRGTCNYYSNSYSFWLASLNPERMFRKPIPSTVKAGELEKIISRCQVCMKKRH",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q01955"},
		"label":"co4a3_human"
	},
	{
		"object":"interactor",
		"sequence":"MWSLHIVLMRCSFRLTKSLATGPWSLILILFSVQYVYGSGKKYIGPCGGRDCSVCHCVPEKGSRGPPGPPGPQGPIGPLGAPGPIGLSGEKGMRGDRGPPGAAGDKGDKGPTGVPGFPGLDGIPGHPGPPGPRGKPGMSGHNGSRGDPGFPGGRGALGPGGPLGHPGEKGEKGNSVFILGAVKGIQGDRGDPGLPGLPGSWGAGGPAGPTGYPGEPGLVGPPGQPGRPGLKGNPGVGVKGQMGDPGEVGQQGSPGPTLLVEPPDFCLYKGEKGIKGIPGMVGLPGPPGRKGESGIGAKGEKGIPGFPGPRGDPGSYGSPGFPGLKGELGLVGDPGLFGLIGPKGDPGNRGHPGPPGVLVTPPLPLKGPPGDPGFPGRYGETGDVGPPGPPGLLGRPGEACAGMIGPPGPQGFPGLPGLPGEAGIPGRPDSAPGKPGKPGSPGLPGAPGLQGLPGSSVIYCSVGNPGPQGIKGKVGPPGGRGPKGEKGNEGLCACEPGPMGPPGPPGLPGRQGSKGDLGLPGWLGTKGDPGPPGAEGPPGLPGKHGASGPPGNKGAKGDMVVSRVKGHKGERGPDGPPGFPGQPGSHGRDGHAGEKGDPGPPGDHEDATPGGKGFPGPLGPPGKAGPVGPPGLGFPGPPGERGHPGVPGHPGVRGPDGLKGQKGDTISCNVTYPGRHGPPGFDGPPGPKGFPGPQGAPGLSGSDGHKGRPGTPGTAEIPGPPGFRGDMGDPGFGGEKGSSPVGPPGPPGSPGVNGQKGIPGDPAFGHLGPPGKRGLSGVPGIKGPRGDPGCPGAEGPAGIPGFLGLKGPKGREGHAGFPGVPGPPGHSCERGAPGIPGQPGLPGYPGSPGAPGGKGQPGDVGPPGPAGMKGLPGLPGRPGAHGPPGLPGIPGPFGDDGLPGPPGPKGPRGLPGFPGFPGERGKPGAEGCPGAKGEPGEKGMSGLPGDRGLRGAKGAIGPPGDEGEMAIISQKGTPGEPGPPGDDGFPGERGDKGTPGMQGRRGEPGRYGPPGFHRGEPGEKGQPGPPGPPGPPGSTGLRGFIGFPGLPGDQGEPGSPGPPGFSGIDGARGPKGNKGDPASHFGPPGPKGEPGSPGCPGHFGASGEQGLPGIQGPRGSPGRPGPPGSSGPPGCPGDHGMPGLRGQPGEMGDPGPRGLQGDPGIPGPPGIKGPSGSPGLNGLHGLKGQKGTKGASGLHDVGPPGPVGIPGLKGERGDPGSPGISPPGPRGKKGPPGPPGSSGPPGPAGATGRAPKDIPDPGPPGDQGPPGPDGPRGAPGPPGLPGSVDLLRGEPGDCGLPGPPGPPGPPGPPGYKGFPGCDGKDGQKGPVGFPGPQGPHGFPGPPGEKGLPGPPGRKGPTGLPGPRGEPGPPADVDDCPRIPGLPGAPGMRGPEGAMGLPGMRGPSGPGCKGEPGLDGRRGVDGVPGSPGPPGRKGDTGEDGYPGGPGPPGPIGDPGPKGFGPGYLGGFLLVLHSQTDQEPTCPLGMPRLWTGYSLLYLEGQEKAHNQDLGLAGSCLPVFSTLPFAYCNIHQVCHYAQRNDRSYWLASAAPLPMMPLSEEAIRPYVSRCAVCEAPAQAVAVHSQDQSIPPCPQTWRSLWIGYSFLMHTGAGDQGGGQALMSPGSCLEDFRAAPFLECQGRQGTCHFFANKYSFWLTTVKADLQFSSAPAPDTLKESQAQRQKISRCQVCVKYS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P53420"},
		"label":"co4a4_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"reactome","id":"REACT_14476.1"},{"db":"intact","id":"EBI-2461456"},{"db":"matrixdb","id":"MULT_4_VAR3_human"}],
		"expansion":{"id":"11","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q01955"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P53420"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"reactome","id":"REACT_14476.1"},{"db":"intact","id":"EBI-2461456"},{"db":"matrixdb","id":"MULT_4_VAR3_human"}],
		"expansion":{"id":"11","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q01955"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P29400"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MMANWAEARPLLILIVLLGQFVSIKAQEEDEDEGYGEEIACTQNGQMYLNRDIWKPAPCQICVCDNGAILCDKIECQDVLDCADPVTPPGECCPVCSQTPGGGNTNFGRGRKGQKGEPGLVPVVTGIRGRPGPAGPPGSQGPRGERGPKGRPGPRGPQGIDGEPGVPGQPGAPGPPGHPSHPGPDGLSRPFSAQMAGLDEKSGLGSQVGLMPGSVGPVGPRGPQGLQGQQGGAGPTGPPGEPGDPGPMGPIGSRGPEGPPGKPGEDGEPGRNGNPGEVGFAGSPGARGFPGAPGLPGLKGHRGHKGLEGPKGEVGAPGSKGEAGPTGPMGAMGPLGPRGMPGERGRLGPQGAPGQRGAHGMPGKPGPMGPLGIPGSSGFPGNPGMKGEAGPTGARGPEGPQGQRGETGPPGPVGSPGLPGAIGTDGTPGAKGPTGSPGTSGPPGSAGPPGSPGPQGSTGPQGIRGQPGDPGVPGFKGEAGPKGEPGPHGIQGPIGPPGEEGKRGPRGDPGTVGPPGPVGERGAPGNRGFPGSDGLPGPKGAQGERGPVGSSGPKGSQGDPGRPGEPGLPGARGLTGNPGVQGPEGKLGPLGAPGEDGRPGPPGSIGIRGQPGSMGLPGPKGSSGDPGKPGEAGNAGVPGQRGAPGKDGEVGPSGPVGPPGLAGERGEQGPPGPTGFQGLPGPPGPPGEGGKPGDQGVPGDPGAVGPLGPRGERGNPGERGEPGITGLPGEKGMAGGHGPDGPKGSPGPSGTPGDTGPPGLQGMPGERGIAGTPGPKGDRGGIGEKGAEGTAGNDGARGLPGPLGPPGPAGPTGEKGEPGPRGLVGPPGSRGNPGSRGENGPTGAVGFAGPQGPDGQPGVKGEPGEPGQKGDAGSPGPQGLAGSPGPHGPNGVPGLKGGRGTQGPPGATGFPGSAGRVGPPGPAGAPGPAGPLGEPGKEGPPGLRGDPGSHGRVGDRGPAGPPGGPGDKGDPGEDGQPGPDGPPGPAGTTGQRGIVGMPGQRGERGMPGLPGPAGTPGKVGPTGATGDKGPPGPVGPPGSNGPVGEPGPEGPAGNDGTPGRDGAVGERGDRGDPGPAGLPGSQGAPGTPGPVGAPGDAGQRGDPGSRGPIGPPGRAGKRGLPGPQGPRGDKGDHGDRGDRGQKGHRGFTGLQGLPGPPGPNGEQGSAGIPGPFGPRGPPGPVGPSGKEGNPGPLGPIGPPGVRGSVGEAGPEGPPGEPGPPGPPGPPGHLTAALGDIMGHYDESMPDPLPEFTEDQAAPDDKNKTDPGVHATLKSLSSQIETMRSPDGSKKHPARTCDDLKLCHSAKQSGEYWIDPNQGSVEDAIKVYCNMETGETCISANPSSVPRKTWWASKSPDNKPVWYGLDMNRGSQFAYGDHQSPNTAITQMTFLRLLSKEASQNITYICKNSVGYMDDQAKNLKKAVVLKGANDLDIKAEGNIRFRYIVLQDTCSKRNGNVGKTVFEYRTQNVARLPIIDLAPVDVGGTDQEFGVEIGPVCFV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P05997"},
		"label":"co5a2_human"
	},
	{
		"object":"interactor",
		"sequence":"MDVHTRWKARSALRPGAPLLPPLLLLLLWAPPPSRAAQPADLLKVLDFHNLPDGITKTTGFCATRRSSKGPDVAYRVTKDAQLSAPTKQLYPASAFPEDFSILTTVKAKKGSQAFLVSIYNEQGIQQIGLELGRSPVFLYEDHTGKPGPEDYPLFRGINLSDGKWHRIALSVHKKNVTLILDCKKKTTKFLDRSDHPMIDINGIIVFGTRILDEEVFEGDIQQLLFVSDHRAAYDYCEHYSPDCDTAVPDTPQSQDPNPDEYYTEGDGEGETYYYEYPYYEDPEDLGKEPTPSKKPVEAAKETTEVPEELTPTPTEAAPMPETSEGAGKEEDVGIGDYDYVPSEDYYTPSPYDDLTYGEGEENPDQPTDPGAGAEIPTSTADTSNSSNPAPPPGEGADDLEGEFTEETIRNLDENYYDPYYDPTSSPSEIGPGMPANQDTIYEGIGGPRGEKGQKGEPAIIEPGMLIEGPPGPEGPAGLPGPPGTMGPTGQVGDPGERGPPGRPGLPGADGLPGPPGTMLMLPFRFGGGGDAGSKGPMVSAQESQAQAILQQARLALRGPAGPMGLTGRPGPVGPPGSGGLKGEPGDVGPQGPRGVQGPPGPAGKPGRRGRAGSDGARGMPGQTGPKGDRGFDGLAGLPGEKGHRGDPGPSGPPGPPGDDGERGDDGEVGPRGLPGEPGPRGLLGPKGPPGPPGPPGVTGMDGQPGPKGNVGPQGEPGPPGQQGNPGAQGLPGPQGAIGPPGEKGPLGKPGLPGMPGADGPPGHPGKEGPPGEKGGQGPPGPQGPIGYPGPRGVKGADGIRGLKGTKGEKGEDGFPGFKGDMGIKGDRGEIGPPGPRGEDGPEGPKGRGGPNGDPGPLGPPGEKGKLGVPGLPGYPGRQGPKGSIGFPGFPGANGEKGGRGTPGKPGPRGQRGPTGPRGERGPRGITGKPGPKGNSGGDGPAGPPGERGPNGPQGPTGFPGPKGPPGPPGKDGLPGHPGQRGETGFQGKTGPPGPPGVVGPQGPTGETGPMGERGHPGPPGPPGEQGLPGLAGKEGTKGDPGPAGLPGKDGPPGLRGFPGDRGLPGPVGALGLKGNEGPPGPPGPAGSPGERGPAGAAGPIGIPGRPGPQGPPGPAGEKGAPGEKGPQGPAGRDGLQGPVGLPGPAGPVGPPGEDGDKGEIGEPGQKGSKGDKGEQGPPGPTGPQGPIGQPGPSGADGEPGPRGQQGLFGQKGDEGPRGFPGPPGPVGLQGLPGPPGEKGETGDVGQMGPPGPPGPRGPSGAPGADGPQGPPGGIGNPGAVGEKGEPGEAGEPGLPGEGGPPGPKGERGEKGESGPSGAAGPPGPKGPPGDDGPKGSPGPVGFPGDPGPPGEPGPAGQDGPPGDKGDDGEPGQTGSPGPTGEPGPSGPPGKRGPPGPAGPEGRQGEKGAKGEAGLEGPPGKTGPIGPQGAPGKPGPDGLRGIPGPVGEQGLPGSPGPDGPPGPMGPPGLPGLKGDSGPKGEKGHPGLIGLIGPPGEQGEKGDRGLPGPQGSSGPKGEQGITGPSGPIGPPGPPGLPGPPGPKGAKGSSGPTGPKGEAGHPGPPGPPGPPGEVIQPLPIQASRTRRNIDASQLLDDGNGENYVDYADGMEEIFGSLNSLKLEIEQMKRPLGTQQNPARTCKDLQLCHPDFPDGEYWVDPNQGCSRDSFKVYCNFTAGGSTCVFPDKKSEGARITSWPKENPGSWFSEFKRGKLLSYVDAEGNPVGVVQMTFLRLLSASAHQNVTYHCYQSVAWQDAATGSYDKALRFLGSNDEEMSYDNNPYIRALVDGCATKKGYQKTVLEIDTPKVEQVPIVDIMFNDFGEASQKFGFEVGPACFMG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P20908"},
		"label":"co5a1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_5_VAR1_human"},{"db":"intact","id":"EBI-2464572"},{"db":"wwpdb","id":"1a9a"},{"db":"reactome","id":"REACT_17987.1"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P05997"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P20908"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGNRRDLGQPRAGLCLLLAALQLLPGTQADPVDVLKALGVQGGQAGVPEGPGFCPQRTPEGDRAFRIGQASTLGIPTWELFPEGHFPENFSLLITLRGQPANQSVLLSIYDERGARQLGLALGPALGLLGDPFRPLPQQVNLTDGRWHRVAVSIDGEMVTLVADCEAQPPVLGHGPRFISIAGLTVLGTQDLGEKTFEGDIQELLISPDPQAAFQACERYLPDCDNLAPAATVAPQGEPETPRPRRKGKGKGRKKGRGRKGKGRKKNKEIWTSSPPPDSAENQTSTDIPKTETPAPNLPPTPTPLVVTSTVTTGLNATILERSLDPDSGTELGTLETKAAREDEEGDDSTMGPDFRAAEYPSRTQFQIFPGAGEKGAKGEPAVIEKGQQFEGPPGAPGPQGVVGPSGPPGPPGFPGDPGPPGPAGLPGIPGIDGIRGPPGTVIMMPFQFAGGSFKGPPVSFQQAQAQAVLQQTQLSMKGPPGPVGLTGRPGPVGLPGHPGLKGEEGAEGPQGPRGLQGPHGPPGRVGKMGRPGADGARGLPGDTGPKGDRGFDGLPGLPGEKGQRGDFGHVGQPGPPGEDGERGAEGPPGPTGQAGEPGPRGLLGPRGSPGPTGRPGVTGIDGAPGAKGNVGPPGEPGPPGQQGNHGSQGLPGPQGLIGTPGEKGPPGNPGIPGLPGSDGPLGHPGHEGPTGEKGAQGPPGSAGPPGYPGPRGVKGTSGNRGLQGEKGEKGEDGFPGFKGDVGLKGDQGKPGAPGPRGEDGPEGPKGQAGQAGEEGPPGSAGEKGKLGVPGLPGYPGRPGPKGSIGFPGPLGPIGEKGKSGKTGQPGLEGERGPPGSRGERGQPGATGQPGPKGDVGQDGAPGIPGEKGLPGLQGPPGFPGPKGPPGHQGKDGRPGHPGQRGELGFQGQTGPPGPAGVLGPQGKTGEVGPLGERGPPGPPGPPGEQGLPGLEGREGAKGELGPPGPLGKEGPAGLRGFPGPKGGPGDPGPTGLKGDKGPPGPVGANGSPGERGPLGPAGGIGLPGQSGSEGPVGPAGKKGSRGERGPPGPTGKDGIPGPLGPLGPPGAAGPSGEEGDKGDVGAPGHKGSKGDKGDAGPPGQPGIRGPAGHPGPPGADGAQGRRGPPGLFGQKGDDGVRGFVGVIGPPGLQGLPGPPGEKGEVGDVGSMGPHGAPGPRGPQGPTGSEGTPGLPGGVGQPGAVGEKGERGDAGDPGPPGAPGIPGPKGDIGEKGDSGPSGAAGPPGKKGPPGEDGAKGSVGPTGLPGDLGPPGDPGVSGIDGSPGEKGDPGDVGGPGPPGASGEPGAPGPPGKRGPSGHMGREGREGEKGAKGEPGPDGPPGRTGPMGARGPPGRVGPEGLRGIPGPVGEPGLLGAPGQMGPPGPLGPSGLPGLKGDTGPKGEKGHIGLIGLIGPPGEAGEKGDQGLPGVQGPPGPKGDPGPPGPIGSLGHPGPPGVAGPLGQKGSKGSPGSMGPRGDTGPAGPPGPPGAPAELHGLRRRRRFVPVPLPVVEGGLEEVLASLTSLSLELEQLRRPPGTAERPGLVCHELHRNHPHLPDGEYWIDPNQGCARDSFRVFCNFTAGGETCLYPDKKFEIVKLASWSKEKPGGWYSTFRRGKKFSYVDADGSPVNVVQLNFLKLLSATARQNFTYSCQNAAAWLDEATGDYSHSARFLGTNGEELSFNQTTAATVSVPQDGCRLRKGQTKTLFEFSSSRAGFLPLWDVAATDFGQTNQKFGFELGPVCFSS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P25940"},
		"label":"co5a3_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_5_VAR2_human"},{"db":"intact","id":"EBI-2464603"}],
		"expansion":{"id":"12","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P20908"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P25940"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_5_VAR2_human"},{"db":"intact","id":"EBI-2464603"}],
		"expansion":{"id":"12","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P20908"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P05997"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_5_VAR3_human"},{"db":"intact","id":"EBI-2464615"},{"db":"wwpdb","id":"1a89"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P20908"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P20908"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MRAARALLPLLLQACWTAAQDEPETPRAVAFQDCPVDLFFVLDTSESVALRLKPYGALVDKVKSFTKRFIDNLRDRYYRCDRNLVWNAGALHYSDEVEIIQGLTRMPGGRDALKSSVDAVKYFGKGTYTDCAIKKGLEQLLVGGSHLKENKYLIVVTDGHPLEGYKEPCGGLEDAVNEAKHLGVKVFSVAITPDHLEPRLSIIATDHTYRRNFTAADWGQSRDAEEAISQTIDTIVDMIKNNVEQVCCSFECQPARGPPGLRGDPGFEGERGKPGLPGEKGEAGDPGRPGDLGPVGYQGMKGEKGSRGEKGSRGPKGYKGEKGKRGIDGVDGVKGEMGYPGLPGCKGSPGFDGIQGPPGPKGDPGAFGLKGEKGEPGADGEAGRPGSSGPSGDEGQPGEPGPPGEKGEAGDEGNPGPDGAPGERGGPGERGPRGTPGTRGPRGDPGEAGPQGDQGREGPVGVPGDPGEAGPIGPKGYRGDEGPPGSEGARGAPGPAGPPGDPGLMGERGEDGPAGNGTEGFPGFPGYPGNRGAPGINGTKGYPGLKGDEGEAGDPGDDNNDIAPRGVKGAKGYRGPEGPQGPPGHQGPPGPDECEILDIIMKMCSCCECKCGPIDLLFVLDSSESIGLQNFEIAKDFVVKVIDRLSRDELVKFEPGQSYAGVVQYSHSQMQEHVSLRSPSIRNVQELKEAIKSLQWMAGGTFTGEALQYTRDQLLPPSPNNRIALVITDGRSDTQRDTTPLNVLCSPGIQVVSVGIKDVFDFIPGSDQLNVISCQGLAPSQGRPGLSLVKENYAELLEDAFLKNVTAQICIDKKCPDYTCPITFSSPADITILLDGSASVGSHNFDTTKRFAKRLAERFLTAGRTDPAHDVRVAVVQYSGTGQQRPERASLQFLQNYTALASAVDAMDFINDATDVNDALGYVTRFYREASSGAAKKRLLLFSDGNSQGATPAAIEKAVQEAQRAGIEIFVVVVGRQVNEPHIRVLVTGKTAEYDVAYGESHLFRVPSYQALLRGVFHQTVSRKVALG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P12109"},
		"label":"co6a1_human"
	},
	{
		"object":"interactor",
		"sequence":"MRKHRHLPLVAVFCLFLSGFPTTHAQQQQADVKNGAAADIIFLVDSSWTIGEEHFQLVREFLYDVVKSLAVGENDFHFALVQFNGNPHTEFLLNTYRTKQEVLSHISNMSYIGGTNQTGKGLEYIMQSHLTKAAGSRAGDGVPQVIVVLTDGHSKDGLALPSAELKSADVNVFAIGVEDADEGALKEIASEPLNMHMFNLENFTSLHDIVGNLVSCVHSSVSPERAGDTETLKDITAQDSADIIFLIDGSNNTGSVNFAVILDFLVNLLEKLPIGTQQIRVGVVQFSDEPRTMFSLDTYSTKAQVLGAVKALGFAGGELANIGLALDFVVENHFTRAGGSRVEEGVPQVLVLISAGPSSDEIRYGVVALKQASVFSFGLGAQAASRAELQHIATDDNLVFTVPEFRSFGDLQEKLLPYIVGVAQRHIVLKPPTIVTQVIEVNKRDIVFLVDGSSALGLANFNAIRDFIAKVIQRLEIGQDLIQVAVAQYADTVRPEFYFNTHPTKREVITAVRKMKPLDGSALYTGSALDFVRNNLFTSSAGYRAAEGIPKLLVLITGGKSLDEISQPAQELKRSSIMAFAIGNKGADQAELEEIAFDSSLVFIPAEFRAAPLQGMLPGLLAPLRTLSGTPEVHSNKRDIIFLLDGSANVGKTNFPYVRDFVMNLVNSLDIGNDNIRVGLVQFSDTPVTEFSLNTYQTKSDILGHLRQLQLQGGSGLNTGSALSYVYANHFTEAGGSRIREHVPQLLLLLTAGQSEDSYLQAANALTRAGILTFCVGASQANKAELEQIAFNPSLVYLMDDFSSLPALPQQLIQPLTTYVSGGVEEVPLAQPESKRDILFLFDGSANLVGQFPVVRDFLYKIIDELNVKPEGTRIAVAQYSDDVKVESRFDEHQSKPEILNLVKRMKIKTGKALNLGYALDYAQRYIFVKSAGSRIEDGVLQFLVLLVAGRSSDRVDGPASNLKQSGVVPFIFQAKNADPAELEQIVLSPAFILAAESLPKIGDLHPQIVNLLKSVHNGAPAPVSGEKDVVFLLDGSEGVRSGFPLLKEFVQRVVESLDVGQDRVRVAVVQYSDRTRPEFYLNSYMNKQDVVNAVRQLTLLGGPTPNTGAALEFVLRNILVSSAGSRITEGVPQLLIVLTADRSGDDVRNPSVVVKRGGAVPIGIGIGNADITEMQTISFIPDFAVAIPTFRQLGTVQQVISERVTQLTREELSRLQPVLQPLPSPGVGGKRDVVFLIDGSQSAGPEFQYVRTLIERLVDYLDVGFDTTRVAVIQFSDDPKVEFLLNAHSSKDEVQNAVQRLRPKGGRQINVGNALEYVSRNIFKRPLGSRIEEGVPQFLVLISSGKSDDEVDDPAVELKQFGVAPFTIARNADQEELVKISLSPEYVFSVSTFRELPSLEQKLLTPITTLTSEQIQKLLASTRYPPPAVESDAADIVFLIDSSEGVRPDGFAHIRDFVSRIVRRLNIGPSKVRVGVVQFSNDVFPEFYLKTYRSQAPVLDAIRRLRLRGGSPLNTGKALEFVARNLFVKSAGSRIEDGVPQHLVLVLGGKSQDDVSRFAQVIRSSGIVSLGVGDRNIDRTELQTITNDPRLVFTVREFRELPNIEERIMNSFGPSAATPAPPGVDTPPPSRPEKKKADIVFLLDGSINFRRDSFQEVLRFVSEIVDTVYEDGDSIQVGLVQYNSDPTDEFFLKDFSTKRQIIDAINKVVYKGGRHANTKVGLEHLRVNHFVPEAGSRLDQRVPQIAFVITGGKSVEDAQDVSLALTQRGVKVFAVGVRNIDSEEVGKIASNSATAFRVGNVQELSELSEQVLETLHDAMHETLCPGVTDAAKACNLDVILGFDGSRDQNVFVAQKGFESKVDAILNRISQMHRVSCSGGRSPTVRVSVVANTPSGPVEAFDFDEYQPEMLEKFRNMRSQHPYVLTEDTLKVYLNKFRQSSPDSVKVVIHFTDGADGDLADLHRASENLRQEGVRALILVGLERVVNLERLMHLEFGRGFMYDRPLRLNLLDLDYELAEQLDNIAEKACCGVPCKCSGQRGDRGPIGSIGPKGIPGEDGYRGYPGDEGGPGERGPPGVNGTQGFQGCPGQRGVKGSRGFPGEKGEVGEIGLDGLDGEDGDKGLPGSSGEKGNPGRRGDKGPRGEKGERGDVGIRGDPGNPGQDSQERGPKGETGDLGPMGVPGRDGVPGGPGETGKNGGFGRRGPPGAKGNKGGPGQPGFEGEQGTRGAQGPAGPAGPPGLIGEQGISGPRGSGGAAGAPGERGRTGPLGRKGEPGEPGPKGGIGNRGPRGETGDDGRDGVGSEGRRGKKGERGFPGYPGPKGNPGEPGLNGTTGPKGIRGRRGNSGPPGIVGQKGDPGYPGPAGPKGNRGDSIDQCALIQSIKDKCPCCYGPLECPVFPTELAFALDTSEGVNQDTFGRMRDVVLSIVNDLTIAESNCPRGARVAVVTYNNEVTTEIRFADSKRKSVLLDKIKNLQVALTSKQQSLETAMSFVARNTFKRVRNGFLMRKVAVFFSNTPTRASPQLREAVLKLSDAGITPLFLTRQEDRQLINALQINNTAVGHALVLPAGRDLTDFLENVLTCHVCLDICNIDPSCGFGSWRPSFRDRRAAGSDVDIDMAFILDSAETTTLFQFNEMKKYIAYLVRQLDMSPDPKASQHFARVAVVQHAPSESVDNASMPPVKVEFSLTDYGSKEKLVDFLSRGMTQLQGTRALGSAIEYTIENVFESAPNPRDLKIVVLMLTGEVPEQQLEEAQRVILQAKCKGYFFVVLGIGRKVNIKEVYTFASEPNDVFFKLVDKSTELNEEPLMRFGRLLPSFVSSENAFYLSPDIRKQCDWFQGDQPTKNLVKFGHKQVNVPNNVTSSPTSNPVTTTKPVTTTKPVTTTTKPVTTTTKPVTIINQPSVKPAAAKPAPAKPVAAKPVATKMATVRPPVAVKPATAAKPVAAKPAAVRPPAAAAAKPVATKPEVPRPQAAKPAATKPATTKPMVKMSREVQVFEITENSAKLHWERAEPPGPYFYDLTVTSAHDQSLVLKQNLTVTDRVIGGLLAGQTYHVAVVCYLRSQVRATYHGSFSTKKSQPPPPQPARSASSSTINLMVSTEPLALTETDICKLPKDEGTCRDFILKWYYDPNTKSCARFWYGGCGGNENKFGSQKECEKVCAPVLAKPGVISVMGT",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P12111"},
		"label":"co6a3_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_18009.1"},{"db":"intact","id":"EBI-2465980"},{"db":"matrixdb","id":"MULT_8_human"}],
		"expansion":{"id":"13","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P12109"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P12111"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLQGTCSVLLLWGILGAIQAQQQEVISPDTTERNNNCPEKTDCPIHVYFVLDTSESVTMQSPTDILLFHMKQFVPQFISQLQNEFYLDQVALSWRYGGLHFSDQVEVFSPPGSDRASFIKNLQGISSFRRGTFTDCALANMTEQIRQDRSKGTVHFAVVITDGHVTGSPCGGIKLQAERAREEGIRLFAVAPNQNLKEQGLRDIASTPHELYRNDYATMLPDSTEIDQDTINRIIKVMKHEAYGECYKVSCLEIPGPSGPKGYRGQKGAKGNMGEPGEPGQKGRQGDPGIEGPIGFPGPKGVPGFKGEKGEFGADGRKGAPGLAGKNGTDGQKGKLGRIGPPGCKGDPGNRGPDGYPGEAGSPGERGDQGGKGDPGRPGRRGPPGEIGAKGSKGYQGNSGAPGSPGVKGAKGGPGPRGPKGEPGRRGDPGTKGSPGSDGPKGEKGDPGPEGPRGLAGEVGNKGAKGDRGLPGPRGPQGALGEPGKQGSRGDPGDAGPRGDSGQPGPKGDPGRPGFSYPGPRGAPGEKGEPGPRGPEGGRGDFGLKGEPGRKGEKGEPADPGPPGEPGPRGPRGVPGPEGEPGPPGDPGLTECDVMTYVRETCGCCDCEKRCGALDVVFVIDSSESIGYTNFTLEKNFVINVVNRLGAIAKDPKSETGTRVGVVQYSHEGTFEAIQLDDERIDSLSSFKEAVKNLEWIAGGTWTPSALKFAYDRLIKESRRQKTRVFAVVITDGRHDPRDDDLNLRALCDRDVTVTAIGIGDMFHEKHESENLYSIACDKPQQVRNMTLFSDLVAEKFIDDMEDVLCPDPQIVCPDLPCQTELSVAQCTQRPVDIVFLLDGSERLGEQNFHKARRFVEQVARRLTLARRDDDPLNARVALLQFGGPGEQQVAFPLSHNLTAIHEALETTQYLNSFSHVGAGVVHAINAIVRSPRGGARRHAELSFVFLTDGVTGNDSLHESAHSMRKQNVVPTVLALGSDVDMDVLTTLSLGDRAAVFHEKDYDSLAQPGFFDRFIRWIC",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P12110"},
		"label":"co6a2_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_18009.1"},{"db":"intact","id":"EBI-2465980"},{"db":"matrixdb","id":"MULT_8_human"}],
		"expansion":{"id":"13","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P12109"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P12110"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MTLRLLVAALCAGILAEAPRVRAQHRERVTCTRLYAADIVFLLDGSSSIGRSNFREVRSFLEGLVLPFSGAASAQGVRFATVQYSDDPRTEFGLDALGSGGDVIRAIRELSYKGGNTRTGAAILHVADHVFLPQLARPGVPKVCILITDGKSQDLVDTAAQRLKGQGVKLFAVGIKNADPEELKRVASQPTSDFFFFVNDFSILRTLLPLVSRRVCTTAGGVPVTRPPDDSTSAPRDLVLSEPSSQSLRVQWTAASGPVTGYKVQYTPLTGLGQPLPSERQEVNVPAGETSVRLRGLRPLTEYQVTVIALYANSIGEAVSGTARTTALEGPELTIQNTTAHSLLVAWRSVPGATGYRVTWRVLSGGPTQQQELGPGQGSVLLRDLEPGTDYEVTVSTLFGRSVGPATSLMARTDASVEQTLRPVILGPTSILLSWNLVPEARGYRLEWRRETGLEPPQKVVLPSDVTRYQLDGLQPGTEYRLTLYTLLEGHEVATPATVVPTGPELPVSPVTDLQATELPGQRVRVSWSPVPGATQYRIIVRSTQGVERTLVLPGSQTAFDLDDVQAGLSYTVRVSARVGPREGSASVLTVRREPETPLAVPGLRVVVSDATRVRVAWGPVPGASGFRISWSTGSGPESSQTLPPDSTATDITGLQPGTTYQVAVSVLRGREEGPAAVIVARTDPLGPVRTVHVTQASSSSVTITWTRVPGATGYRVSWHSAHGPEKSQLVSGEATVAELDGLEPDTEYTVHVRAHVAGVDGPPASVVVRTAPEPVGRVSRLQILNASSDVLRITWVGVTGATAYRLAWGRSEGGPMRHQILPGNTDSAEIRGLEGGVSYSVRVTALVGDREGTPVSIVVTTPPEAPPALGTLHVVQRGEHSLRLRWEPVPRAQGFLLHWQPEGGQEQSRVLGPELSSYHLDGLEPATQYRVRLSVLGPAGEGPSAEVTARTESPRVPSIELRVVDTSIDSVTLAWTPVSRASSYILSWRPLRGPGQEVPGSPQTLPGISSSQRVTGLEPGVSYIFSLTPVLDGVRGPEASVTQTPVCPRGLADVVFLPHATQDNAHRAEATRRVLERLVLALGPLGPQAVQVGLLSYSHRPSPLFPLNGSHDLGIILQRIRDMPYMDPSGNNLGTAVVTAHRYMLAPDAPGRRQHVPGVMVLLVDEPLRGDIFSPIREAQASGLNVVMLGMAGADPEQLRRLAPGMDSVQTFFAVDDGPSLDQAVSGLATALCQASFTTQPRPEPCPVYCPKGQKGEPGEMGLRGQVGPPGDPGLPGRTGAPGPQGPPGSATAKGERGFPGADGRPGSPGRAGNPGTPGAPGLKGSPGLPGPRGDPGERGPRGPKGEPGAPGQVIGGEGPGLPGRKGDPGPSGPPGPRGPLGDPGPRGPPGLPGTAMKGDKGDRGERGPPGPGEGGIAPGEPGLPGLPGSPGPQGPVGPPGKKGEKGDSEDGAPGLPGQPGSPGEQGPRGPPGAIGPKGDRGFPGPLGEAGEKGERGPPGPAGSRGLPGVAGRPGAKGPEGPPGPTGRQGEKGEPGRPGDPAVVGPAVAGPKGEKGDVGPAGPRGATGVQGERGPPGLVLPGDPGPKGDPGDRGPIGLTGRAGPPGDSGPPGEKGDPGRPGPPGPVGPRGRDGEVGEKGDEGPPGDPGLPGKAGERGLRGAPGVRGPVGEKGDQGDPGEDGRNGSPGSSGPKGDRGEPGPPGPPGRLVDTGPGAREKGEPGDRGQEGPRGPKGDPGLPGAPGERGIEGFRGPPGPQGDPGVRGPAGEKGDRGPPGLDGRSGLDGKPGAAGPSGPNGAAGKAGDPGRDGLPGLRGEQGLPGPSGPPGLPGKPGEDGKPGLNGKNGEPGDPGEDGRKGEKGDSGASGREGRDGPKGERGAPGILGPQGPPGLPGPVGPPGQGFPGVPGGTGPKGDRGETGSKGEQGLPGERGLRGEPGSVPNVDRLLETAGIKASALREIVETWDESSGSFLPVPERRRGPKGDSGEQGPPGKEGPIGFPGERGLKGDRGDPGPQGPPGLALGERGPPGPSGLAGEPGKPGIPGLPGRAGGVGEAGRPGERGERGEKGERGEQGRDGPPGLPGTPGPPGPPGPKVSVDEPGPGLSGEQGPPGLKGAKGEPGSNGDQGPKGDRGVPGIKGDRGEPGPRGQDGNPGLPGERGMAGPEGKPGLQGPRGPPGPVGGHGDPGPPGAPGLAGPAGPQGPSGLKGEPGETGPPGRGLTGPTGAVGLPGPPGPSGLVGPQGSPGLPGQVGETGKPGAPGRDGASGKDGDRGSPGVPGSPGLPGPVGPKGEPGPTGAPGQAVVGLPGAKGEKGAPGGLAGDLVGEPGAKGDRGLPGPRGEKGEAGRAGEPGDPGEDGQKGAPGPKGFKGDPGVGVPGSPGPPGPPGVKGDLGLPGLPGAPGVVGFPGQTGPRGEMGQPGPSGERGLAGPPGREGIPGPLGPPGPPGSVGPPGASGLKGDKGDPGVGLPGPRGERGEPGIRGEDGRPGQEGPRGLTGPPGSRGERGEKGDVGSAGLKGDKGDSAVILGPPGPRGAKGDMGERGPRGLDGDKGPRGDNGDPGDKGSKGEPGDKGSAGLPGLRGLLGPQGQPGAAGIPGDPGSPGKDGVPGIRGEKGDVGFMGPRGLKGERGVKGACGLDGEKGDKGEAGPPGRPGLAGHKGEMGEPGVPGQSGAPGKEGLIGPKGDRGFDGQPGPKGDQGEKGERGTPGIGGFPGPSGNDGSAGPPGPPGSVGPRGPEGLQGQKGERGPPGERVVGAPGVPGAPGERGEQGRPGPAGPRGEKGEAALTEDDIRGFVRQEMSQHCACQGQFIASGSRPLPSYAADTAGSQLHAVPVLRVSHAEEEERVPPEDDEYSEYSEYSVEEYQDPEAPWDSDDPCSLPLDEGSCTAYTLRWYHRAVTGSTEACHPFVYGGCGGNANRFGTREACERRCPPRVVQSQGTGTAQD",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q02388"},
		"label":"co7a1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_41_human"},{"db":"intact","id":"EBI-2466039"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q02388"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q02388"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAVLPGPLQLLGVLLTISLSSIRLIQAGAYYGIKPLPPQIPPQMPPQIPQYQPLGQQVPHMPLAKDGLAMGKEMPHLQYGKEYPHLPQYMKEIQPAPRMGKEAVPKKGKEIPLASLRGEQGPRGEPGPRGPPGPPGLPGHGIPGIKGKPGPQGYPGVGKPGMPGMPGKPGAMGMPGAKGEIGQKGEIGPMGIPGPQGPPGPHGLPGIGKPGGPGLPGQPGPKGDRGPKGLPGPQGLRGPKGDKGFGMPGAPGVKGPPGMHGPPGPVGLPGVGKPGVTGFPGPQGPLGKPGAPGEPGPQGPIGVPGVQGPPGIPGIGKPGQDGIPGQPGFPGGKGEQGLPGLPGPPGLPGIGKPGFPGPKGDRGMGGVPGALGPRGEKGPIGAPGIGGPPGEPGLPGIPGPMGPPGAIGFPGPKGEGGIVGPQGPPGPKGEPGLQGFPGKPGFLGEVGPPGMRGLPGPIGPKGEAGQKGVPGLPGVPGLLGPKGEPGIPGDQGLQGPPGIPGIGGPSGPIGPPGIPGPKGEPGLPGPPGFPGIGKPGVAGLHGPPGKPGALGPQGQPGLPGPPGPPGPPGPPAVMPPTPPPQGEYLPDMGLGIDGVKPPHAYGAKKGKNGGPAYEMPAFTAELTAPFPPVGAPVKFNKLLYNGRQNYNPQTGIFTCEVPGVYYFAYHVHCKGGNVWVALFKNNEPVMYTYDEYKKGFLDQASGSAVLLLRPGDRVFLQMPSEQAAGLYAGQYVHSSFSGYLLYPM",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P27658"},
		"label":"co8a1_human"
	},
	{
		"object":"interactor",
		"sequence":"MLGTLTPLSSLLLLLLVLVLGCGPRASSGGGAGGAAGYAPVKYIQPMQKGPVGPPFREGKGQYLEMPLPLLPMDLKGEPGPPGKPGPRGPPGPPGFPGKPGMGKPGLHGQPGPAGPPGFSRMGKAGPPGLPGKVGPPGQPGLRGEPGIRGDQGLRGPPGPPGLPGPSGITIPGKPGAQGVPGPPGFQGEPGPQGEPGPPGDRGLKGDNGVGQPGLPGAPGQGGAPGPPGLPGPAGLGKPGLDGLPGAPGDKGESGPPGVPGPRGEPGAVGPKGPPGVDGVGVPGAAGLPGPQGPSGAKGEPGTRGPPGLIGPTGYGMPGLPGPKGDRGPAGVPGLLGDRGEPGEDGEPGEQGPQGLGGPPGLPGSAGLPGRRGPPGPKGEAGPGGPPGVPGIRGDQGPSGLAGKPGVPGERGLPGAHGPPGPTGPKGEPGFTGRPGGPGVAGALGQKGDLGLPGQPGLRGPSGIPGLQGPAGPIGPQGLPGLKGEPGLPGPPGEGRAGEPGTAGPTGPPGVPGSPGITGPPGPPGPPGPPGAPGAFDETGIAGLHLPNGGVEGAVLGKGGKPQFGLGELSAHATPAFTAVLTSPFPASGMPVKFDRTLYNGHSGYNPATGIFTCPVGGVYYFAYHVHVKGTNVWVALYKNNVPATYTYDEYKKGYLDQASGGAVLQLRPNDQVWVQMPSDQANGLYSTEYIHSSFSGFLLCPT",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P25067"},
		"label":"co8a2_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_42_VAR1_human"},{"db":"intact","id":"EBI-2528208"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P27658"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"9491879",
				"name":"col8a2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["12246739"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P25067"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"12246739",
				"name":"col8a1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["9491879"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_42_VAR2_human"},{"db":"intact","id":"EBI-2528219"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P27658"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P27658"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_42_VAR3_human"},{"db":"intact","id":"EBI-2528228"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P25067"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P25067"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKTCWKIPVFFFVCSFLEPWASAAVKRRPRFPVNSNSNGGNELCPKIRIGQDDLPGFDLISQFQVDKAASRRAIQRVVGSATLQVAYKLGNNVDFRIPTRNLYPSGLPEEYSFLTTFRMTGSTLKKNWNIWQIQDSSGKEQVGIKINGQTQSVVFSYKGLDGSLQTAAFSNLSSLFDSQWHKIMIGVERSSATLFVDCNRIESLPIKPRGPIDIDGFAVLGKLADNPQVSVPFELQWMLIHCDPLRPRRETCHELPARITPSQTTDERGPPGEQGPPGPPGPPGVPGIDGIDGDRGPKGPPGPPGPAGEPGKPGAPGKPGTPGADGLTGPDGSPGSIGSKGQKGEPGVPGSRGFPGRGIPGPPGPPGTAGLPGELGRVGPVGDPGRRGPPGPPGPPGPRGTIGFHDGDPLCPNACPPGRSGYPGLPGMRGHKGAKGEIGEPGRQGHKGEEGDQGELGEVGAQGPPGAQGLRGITGIVGDKGEKGARGLDGEPGPQGLPGAPGDQGQRGPPGEAGPKGDRGAEGARGIPGLPGPKGDTGLPGVDGRDGIPGMPGTKGEPGKPGPPGDAGLQGLPGVPGIPGAKGVAGEKGSTGAPGKPGQMGNSGKPGQQGPPGEVGPRGPQGLPGSRGELGPVGSPGLPGKLGSLGSPGLPGLPGPPGLPGMKGDRGVVGEPGPKGEQGASGEEGEAGERGELGDIGLPGPKGSAGNPGEPGLRGPEGSRGLPGVEGPRGPPGPRGVQGEQGATGLPGVQGPPGRAPTDQHIKQVCMRVIQEHFAEMAASLKRPDSGATGLPGRPGPPGPPGPPGENGFPGQMGIRGLPGIKGPPGALGLRGPKGDLGEKGERGPPGRGPNGLPGAIGLPGDPGPASYGRNGRDGERGPPGVAGIPGVPGPPGPPGLPGFCEPASCTMQAGQRAFNKGPDP",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P20849"},
		"label":"co9a1_human"
	},
	{
		"object":"interactor",
		"sequence":"MAGPRACAPLLLLLLLGELLAAAGAQRVGLPGPPGPPGPPGKPGQDGIDGEAGPPGLPGPPGPKGAPGKPGKPGEAGLPGLPGVDGLTGRDGPPGPKGAPGERGSLGPPGPPGLGGKGLPGPPGEAGVSGPPGGIGLRGPPGPSGLPGLPGPPGPPGPPGHPGVLPEGATDLQCPSICPPGPPGPPGMPGFKGPTGYKGEQGEVGKDGEKGDPGPPGPAGLPGSVGLQGPRGLRGLPGPLGPPGDRGPIGFRGPPGIPGAPGKAGDRGERGPEGFRGPKGDLGRPGPKGTPGVAGPSGEPGMPGKDGQNGVPGLDGQKGEAGRNGAPGEKGPNGLPGLPGRAGSKGEKGERGRAGELGEAGPSGEPGVPGDAGMPGERGEAGHRGSAGALGPQGPPGAPGVRGFQGQKGSMGDPGLPGPQGLRGDVGDRGPGGAAGPKGDQGIAGSDGLPGDKGELGPSGLVGPKGESGSRGELGPKGTQGPNGTSGVQGVPGPPGPLGLQGVPGVPGITGKPGVPGKEASEQRIRELCGGMISEQIAQLAAHLRKPLAPGSIGRPGPAGPPGPPGPPGSIGHPGARGPPGYRGPTGELGDPGPRGNQGDRGDKGAAGAGLDGPEGDQGPQGPQGVPGTSKDGQDGAPGEPGPPGDPGLPGAIGAQGTPGICDTSACQGAVLGGVGEKSGSRSS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q14050"},
		"label":"co9a3_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_6_human"},{"db":"intact","id":"EBI-2528296"}],
		"expansion":{"id":"14","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P20849"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q14050"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAAATASPRSLLVLLQVVVLALAQIRGPPGERGPPGPPGPPGVPGSDGIDGDNGPPGKAGPPGPKGEPGKAGPDGPDGKPGIDGLTGAKGEPGPMGIPGVKGQPGLPGPPGLPGPGFAGPPGPPGPVGLPGEIGIRGPKGDPGPDGPSGPPGPPGKPGRPGTIQGLEGSADFLCPTNCPPGMKGPPGLQGVKGHAGKRGILGDPGHQGKPGPKGDVGASGEQGIPGPPGPQGIRGYPGMAGPKGETGPHGYKGMVGAIGATGPPGEEGPRGPPGRAGEKGDEGSPGIRGPQGITGPKGATGPPGINGKDGTPGTPGMKGSAGQAGQPGSPGHQGLAGVPGQPGTKGGPGDQGEPGPQGLPGFSGPPGKEGEPGPRGEIGPQGIMGQKGDQGERGPVGQPGPQGRQGPKGEQGPPGIPGPQGLPGVKGDKGSPGKTGPRGKVGDPGVAGLPGEKGEKGESGEPGPKGQQGVRGEPGYPGPSGDAGAPGVQGYPGPPGPRGLAGNRGVPGQPGRQGVEGRDATDQHIVDVALKMLQEQLAEVAVSAKREALGAVGMMGPPGPPGPPGYPGKQGPHGHPGPRGVPGIVGAVGQIGNTGPKGKRGEKGDPGEVGRGHPGMPGPPGIPGLPGRPGQAINGKDGDRGSPGAPGEAGRPGLPGPVGLPGFCEPAACLGASAYASARLTEPGSIKGP",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q14055"},
		"label":"co9a2_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_6_human"},{"db":"intact","id":"EBI-2528296"}],
		"expansion":{"id":"14","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P20849"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q14055"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLPQIPFLLLVSLNLVHGVFYAERYQMPTGIKGPLPNTKTQFFIPYTIKSKGIAVRGEQGTPGPPGPAGPRGHPGPSGPPGKPGYGSPGLQGEPGLPGPPGPSAVGKPGVPGLPGKPGERGPYGPKGDVGPAGLPGPRGPPGPPGIPGPAGISVPGKPGQQGPTGAPGPRGFPGEKGAPGVPGMNGQKGEMGYGAPGRPGERGLPGPQGPTGPSGPPGVGKRGENGVPGQPGIKGDRGFPGEMGPIGPPGPQGPPGERGPEGIGKPGAAGAPGQPGIPGTKGLPGAPGIAGPPGPPGFGKPGLPGLKGERGPAGLPGGPGAKGEQGPAGLPGKPGLTGPPGNMGPQGPKGIPGSHGLPGPKGETGPAGPAGYPGAKGERGSPGSDGKPGYPGKPGLDGPKGNPGLPGPKGDPGVGGPPGLPGPVGPAGAKGMPGHNGEAGPRGAPGIPGTRGPIGPPGIPGFPGSKGDPGSPGPPGPAGIATKGLNGPTGPPGPPGPRGHSGEPGLPGPPGPPGPPGQAVMPEGFIKAGQRPSLSGTPLVSANQGVTGMPVSAFTVILSKAYPAIGTPIPFDKILYNRQQHYDPRTGIFTCQIPGIYYFSYHVHVKGTHVWVGLYKNGTPVMYTYDEYTKGYLDQASGSAIIDLTENDQVWLQLPNAESNGLYSSEYVHSSFSGFLVAPM",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q03692"},
		"label":"coaa1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_22_human"},{"db":"wwpdb","id":"1GR3"},{"db":"intact","id":"EBI-2528323"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q03692"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q03692"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MEPWSSRWKTKRWLWDFTVTTLALTFLFQAREVRGAAPVDVLKALDFHNSPEGISKTTGFCTNRKNSKGSDTAYRVSKQAQLSAPTKQLFPGGTFPEDFSILFTVKPKKGIQSFLLSIYNEHGIQQIGVEVGRSPVFLFEDHTGKPAPEDYPLFRTVNIADGKWHRVAISVEKKTVTMIVDCKKKTTKPLDRSERAIVDTNGITVFGTRILDEEVFEGDIQQFLITGDPKAAYDYCEHYSPDCDSSAPKAAQAQEPQIDEYAPEDIIEYDYEYGEAEYKEAESVTEGPTVTEETIAQTEANIVDDFQEYNYGTMESYQTEAPRHVSGTNEPNPVEEIFTEEYLTGEDYDSQRKNSEDTLYENKEIDGRDSDLLVDGDLGEYDFYEYKEYEDKPTSPPNEEFGPGVPAETDITETSINGHGAYGEKGQKGEPAVVEPGMLVEGPPGPAGPAGIMGPPGLQGPTGPPGDPGDRGPPGRPGLPGADGLPGPPGTMLMLPFRYGGDGSKGPTISAQEAQAQAILQQARIALRGPPGPMGLTGRPGPVGGPGSSGAKGESGDPGPQGPRGVQGPPGPTGKPGKRGRPGADGGRGMPGEPGAKGDRGFDGLPGLPGDKGHRGERGPQGPPGPPGDDGMRGEDGEIGPRGLPGEAGPRGLLGPRGTPGAPGQPGMAGVDGPPGPKGNMGPQGEPGPPGQQGNPGPQGLPGPQGPIGPPGEKGPQGKPGLAGLPGADGPPGHPGKEGQSGEKGALGPPGPQGPIGYPGPRGVKGADGVRGLKGSKGEKGEDGFPGFKGDMGLKGDRGEVGQIGPRGEDGPEGPKGRAGPTGDPGPSGQAGEKGKLGVPGLPGYPGRQGPKGSTGFPGFPGANGEKGARGVAGKPGPRGQRGPTGPRGSRGARGPTGKPGPKGTSGGDGPPGPPGERGPQGPQGPVGFPGPKGPPGPPGKDGLPGHPGQRGETGFQGKTGPPGPGGVVGPQGPTGETGPIGERGHPGPPGPPGEQGLPGAAGKEGAKGDPGPQGISGKDGPAGLRGFPGERGLPGAQGAPGLKGGEGPQGPPGPVGSPGERGSAGTAGPIGLPGRPGPQGPPGPAGEKGAPGEKGPQGPAGRDGVQGPVGLPGPAGPAGSPGEDGDKGEIGEPGQKGSKGDKGENGPPGPPGLQGPVGAPGIAGGDGEPGPRGQQGMFGQKGDEGARGFPGPPGPIGLQGLPGPPGEKGENGDVGPMGPPGPPGPRGPQGPNGADGPQGPPGSVGSVGGVGEKGEPGEAGNPGPPGEAGVGGPKGERGEKGEAGPPGAAGPPGAKGPPGDDGPKGNPGPVGFPGDPGPPGEPGPAGQDGVGGDKGEDGDPGQPGPPGPSGEAGPPGPPGKRGPPGAAGAEGRQGEKGAKGEAGAEGPPGKTGPVGPQGPAGKPGPEGLRGIPGPVGEQGLPGAAGQDGPPGPMGPPGLPGLKGDPGSKGEKGHPGLIGLIGPPGEQGEKGDRGLPGTQGSPGAKGDGGIPGPAGPLGPPGPPGLPGPQGPKGNKGSTGPAGQKGDSGLPGPPGSPGPPGEVIQPLPILSSKKTRRHTEGMQADADDNILDYSDGMEEIFGSLNSLKQDIEHMKFPMGTQTNPARTCKDLQLSHPDFPDGEYWIDPNQGCSGDSFKVYCNFTSGGETCIYPDKKSEGVRISSWPKEKPGSWFSEFKRGKLLSYLDVEGNSINMVQMTFLKLLTASARQNFTYHCHQSAAWYDVSSGSYDKALRFLGSNDEEMSYDNNPFIKTLYDGCASRKGYEKTVIEINTPKIDQVPIVDVMINDFGDQNQKFGFEVGPVCFLG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P12107"},
		"label":"coba1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"matrixdb","id":"MULT_7_VAR1_human"},{"db":"intact","id":"EBI-2528381"}],
		"expansion":{"id":"15","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P02458"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P12107"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MERCSRCHRLLLLLPLVLGLSAAPGWAGAPPVDVLRALRFPSLPDGVRRAKGICPADVAYRVARPAQLSAPTRQLFPGGFPKDFSLLTVVRTRPGLQAPLLTLYSAQGVRQLGLELGRPVRFLYEDQTGRPQPPSQPVFRGLSLADGKWHRVAVAVKGQSVTLIVDCKKRVTRPLPRSARPVLDTHGVIIFGARILDEEVFEGDVQELAIVPGVQAAYESCEQKELECEGGQRERPQNQQPHRAQRSPQQQPSRLHRPQNQEPQSQPTESLYYDYEPPYYDVMTTGTTPDYQDPTPGEEEEILESSLLPPLEEEQTDLQVPPTADRFQAEEYGEGGTDPPEGPYDYTYGYGDDYREETELGPALSAETAHSGAAAHGPRGLKGEKGEPAVLEPGMLVEGPPGPEGPAGLIGPPGIQGNPGPVGDPGERGPPGRAGLPGSDGAPGPPGTSLMLPFRFGSGGGDKGPVVAAQEAQAQAILQQARLALRGPPGPMGYTGRPGPLGQPGSPGLKGESGDLGPQGPRGPQGLTGPPGKAGRRGRAGADGARGMPGDPGVKGDRGFDGLPGLPGEKGHRGDTGAQGLPGPPGEDGERGDDGEIGPRGLPGESGPRGLLGPKGPPGIPGPPGVRGMDGPQGPKGSLGPQGEPGPPGQQGTPGTQGLPGPQGAIGPHGEKGPQGKPGLPGMPGSDGPPGHPGKEGPPGTKGNQGPSGPQGPLGYPGPRGVKGVDGIRGLKGHKGEKGEDGFPGFKGDIGVKGDRGEVGVPGSRGEDGPEGPKGRTGPTGDPGPPGLMGEKGKLGVPGLPGYPGRQGPKGSLGFPGFPGASGEKGARGLSGKSGPRGERGPTGPRGQRGPRGATGKSGAKGTSGGDGPHGPPGERGLPGPQGPNGFPGPKGPLGPPGKDGLPGHPGQRGEVGFQGKTGPPGPPGVVGPQGAAGETGPMGERGHPGPPGPPGEQGLPGTAGKEGTKGDPGPPGAPGKDGPAGLRGFPGERGLPGTAGGPGLKGNEGPSGPPGPAGSPGERGAAGSGGPIGPPGRPGPQGPPGAAGEKGVPGEKGPIGPTGRDGVQGPVGLPGPAGPPGVAGEDGDKGEVGDPGQKGTKGNKGEHGPPGPPGPIGPVGQPGAAGADGEPGARGPQGHFGAKGDEGTRGFNGPPGPIGLQGLPGPSGEKGETGDVGPMGPPGPPGPRGPAGPNGADGPQGPPGGVGNLGPPGEKGEPGESGSPGIQGEPGVKGPRGERGEKGESGQPGEPGPPGPKGPTGDDGPKGNPGPVGFPGDPGPPGEGGPRGQDGAKGDRGEDGEPGQPGSPGPTGENGPPGPLGKRGPAGSPGSEGRQGGKGAKGDPGAIGAPGKTGPVGPAGPAGKPGPDGLRGLPGSVGQQGRPGATGQAGPPGPVGPPGLPGLRGDAGAKGEKGHPGLIGLIGPPGEQGEKGDRGLPGPQGSPGQKGEMGIPGASGPIGPGGPPGLPGPAGPKGAKGATGPGGPKGEKGVQGPPGHPGPPGEVIQPLPIQMPKKTRRSVDGSRLMQEDEAIPTGGAPGSPGGLEEIFGSLDSLREEIEQMRRPTGTQDSPARTCQDLKLCHPELPDGEYWVDPNQGCARDAFRVFCNFTAGGETCVTPRDDVTQFSYVDSEGSPVGVVQLTFLRLLSVSAHQDVSYPCSGAARDGPLRLRGANEDELSPETSPYVKEFRDGCQTQQGRTVLEVRTPVLEQLPVLDASFSDLGAPPRRGGVLLGPVCFMG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P13942"},
		"label":"coba2_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"matrixdb","id":"MULT_7_VAR1_human"},{"db":"intact","id":"EBI-2528381"}],
		"expansion":{"id":"15","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P02458"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P13942"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_7_VAR2_human"},{"db":"intact","id":"EBI-2528394"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P12107"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"8061570",
				"name":"col5a2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["31572159"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P05997"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"31572159",
				"name":"col11a1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["8061570"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"matrixdb","id":"MULT_7_VAR3_human"},{"db":"intact","id":"EBI-2528403"}],
		"expansion":{"id":"16","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P20908"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P05997"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"matrixdb","id":"MULT_7_VAR3_human"},{"db":"intact","id":"EBI-2528403"}],
		"expansion":{"id":"16","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P20908"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P12107"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MRSRLPPALAALGAALLLSSIEAEVDPPSDLNFKIIDENTVHMSWAKPVDPIVGYRITVDPTTDGPTKEFTLSASTTETLLSELVPETEYVVTITSYDEVEESVPVIGQLTIQTGSSTKPVEKKPGKTEIQKCSVSAWTDLVFLVDGSWSVGRNNFKYILDFIAALVSAFDIGEEKTRVGVVQYSSDTRTEFNLNQYYQRDELLAAIKKIPYKGGNTMTGDAIDYLVKNTFTESAGARVGFPKVAIIITDGKSQDEVEIPARELRNVGVEVFSLGIKAADAKELKQIASTPSLNHVFNVANFDAIVDIQNEIISQVCSGVDEQLGELVSGEEVVEPPSNLIAMEVSSKYVKLNWNPSPSPVTGYKVILTPMTAGSRQHALSVGPQTTTLSVRDLSADTEYQISVSAMKGMTSSEPISIMEKTQPMKVQVECSRGVDIKADIVFLVDGSYSIGIANFVKVRAFLEVLVKSFEISPNRVQISLVQYSRDPHTEFTLKKFTKVEDIIEAINTFPYRGGSTNTGKAMTYVREKIFVPSKGSRSNVPKVMILITDGKSSDAFRDPAIKLRNSDVEIFAVGVKDAVRSELEAIASPPAETHVFTVEDFDAFQRISFELTQSICLRIEQELAAIKKKAYVPPKDLSFSEVTSYGFKTNWSPAGENVFSYHITYKEAAGDDEVTVVEPASSTSVVLSSLKPETLYLVNVTAEYEDGFSIPLAGEETTEEVKGAPRNLKVTDETTDSFKITWTQAPGRVLRYRIIYRPVAGGESREVTTPPNQRRRTLENLIPDTKYEVSVIPEYFSGPGTPLTGNAATEEVRGNPRDLRVSDPTTSTMKLSWSGAPGKVKQYLVTYTPVAGGETQEVTVRGDTTNTVLQGLKEGTQYALSVTALYASGAGDALFGEGTTLEERGSPQDLVTKDITDTSIGAYWTSAPGMVRGYRVSWKSLYDDVDTGEKNLPEDAIHTMIENLQPETKYRISVFATYSSGEGEPLTGDATTELSQDSKTLKVDEETENTMRVTWKPAPGKVVNYRVVYRPHGRGKQMVAKVPPTVTSTVLKRLQPQTTYDITVLPIYKMGEGKLRQGSGTTASRFKSPRNLKTSDPTMSSFRVTWEPAPGEVKGYKVTFHPTGDDRRLGELVVGPYDNTVVLEELRAGTTYKVNVFGMFDGGESSPLVGQEMTTLSDTTVMPILSSGMECLTRAEADIVLLVDGSWSIGRANFRTVRSFISRIVEVFDIGPKRVQIALAQYSGDPRTEWQLNAHRDKKSLLQAVANLPYKGGNTLTGMALNFIRQQNFRTQAGMRPRARKIGVLITDGKSQDDVEAPSKKLKDEGVELFAIGIKNADEVELKMIATDPDDTHAYNVADFESLSRIVDDLTINLCNSVKGPGDLEAPSNLVISERTHRSFRVSWTPPSDSVDRYKVEYYPVSGGKRQEFYVSRMETSTVLKDLKPETEYVVNVYSVVEDEYSEPLKGTEKTLPVPVVSLNIYDVGPTTMHVQWQPVGGATGYILSYKPVKDTEPTRPKEVRLGPTVNDMQLTDLVPNTEYAVTVQAVLHDLTSEPVTVREVTLPLPRPQDLKLRDVTHSTMNVFWEPVPGKVRKYIVRYKTPEEDVKEVEVDRSETSTSLKDLFSQTLYTVSVSAVHDEGESPPVTAQETTRPVPAPTNLKITEVTSEGFRGTWDHGASDVSLYRITWAPFGSSDKMETILNGDENTLVFENLNPNTIYEVSITAIYPDESESDDLIGSERTLPILTTQAPKSGPRNLQVYNATSNSLTVKWDPASGRVQKYRITYQPSTGEGNEQTTTIGGRQNSVVLQKLKPDTPYTITVSSLYPDGEGGRMTGRGKTKPLNTVRNLRVYDPSTSTLNVRWDHAEGNPRQYKLFYAPAAGGPEELVPIPGNTNYAILRNLQPDTSYTVTVVPVYTEGDGGRTSDTGRTLMRGLARNVQVYNPTPNSLDVRWDPAPGPVLQYRVVYSPVDGTRPSESIVVPGNTRMVHLERLIPDTLYSVNLVALYSDGEGNPSPAQGRTLPRSGPRNLRVFGETTNSLSVAWDHADGPVQQYRIIYSPTVGDPIDEYTTVPGRRNNVILQPLQPDTPYKITVIAVYEDGDGGHLTGNGRTVGLLPPQNIHISDEWYTRFRVSWDPSPSPVLGYKIVYKPVGSNEPMEAFVGEMTSYTLHNLNPSTTYDVNVYAQYDSGLSVPLTDQGTTLYLNVTDLKTYQIGWDTFCVKWSPHRAATSYRLKLSPADGTRGQEITVRGSETSHCFTGLSPDTDYGVTVFVQTPNLEGPGVSVKEHTTVKPTEAPTEPPTPPPPPTIPPARDVCKGAKADIVFLTDASWSIGDDNFNKVVKFIFNTVGGFDEISPAGIQVSFVQYSDEVKSEFKLNTYNDKALALGALQNIRYRGGNTRTGKALTFIKEKVLTWESGMRKNVPKVLVVVTDGRSQDEVKKAALVIQQSGFSVFVVGVADVDYNELANIASKPSERHVFIVDDFESFEKIEDNLITFVCETATSSCPLIYLDGYTSPGFKMLEAYNLTEKNFASVQGVSLESGSFPSYSAYRIQKNAFVNQPTADLHPNGLPPSYTIILLFRLLPETPSDPFAIWQITDRDYKPQVGVIADPSSKTLSFFNKDTRGEVQTVTFDTEEVKTLFYGSFHKVHIVVTSKSVKIYIDCYEIIEKDIKEAGNITTDGYEILGKLLKGERKSAAFQIQSFDIVCSPVWTSRDRCCDIPSRRDEGKCPAFPNSCTCTQDSVGPPGPPGPAGGPGAKGPRGERGISGAIGPPGPRGDIGPPGPQGPPGPQGPNGLSIPGEQGRQGMKGDAGEPGLPGRTGTPGLPGPPGPMGPPGDRGFTGKDGAMGPRGPPGPPGSPGSPGVTGPSGKPGKPGDHGRPGPSGLKGEKGDRGDIASQNMMRAVARQVCEQLISGQMNRFNQMLNQIPNDYQSSRNQPGPPGPPGPPGSAGARGEPGPGGRPGFPGTPGMQGPPGERGLPGEKGERGTGSSGPRGLPGPPGPQGESRTGPPGSTGSRGPPGPPGRPGNSGIRGPPGPPGYCDSSQCASIPYNGQGYPGSG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q99715"},
		"label":"coca1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_11_human"},{"db":"intact","id":"EBI-2528413"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q99715"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q99715"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MVAERTHKAAATGARGPGELGAPGTVALVAARAERGARLPSPGSCGLLTLALCSLALSLLAHFRTAELQARVLRLEAERGEQQMETAILGRVNQLLDEKWKLHSRRRREAPKTSPGCNCPPGPPGPTGRPGLPGDKGAIGMPGRVGSPGDAGLSIIGPRGPPGQPGTRGFPGFPGPIGLDGKPGHPGPKGDMGLTGPPGQPGPQGQKGEKGQCGEYPHRECLSSMPAALRSSQIIALKLLPLLNSVRLAPPPVIKRRTFQGEQSQASIQGPPGPPGPPGPSGPLGHPGLPGPMGPPGLPGPPGPKGDPGIQGYHGRKGERGMPGMPGKHGAKGAPGIAVAGMKGEPGIPGTKGEKGAEGSPGLPGLLGQKGEKGDAGNSIGGGRGEPGPPGLPGPPGPKGEAGVDGQVGPPGQPGDKGERGAAGEQGPDGPKGSKGEPGKGEMVDYNGNINEALQEIRTLALMGPPGLPGQIGPPGAPGIPGQKGEIGLPGPPGHDGEKGPRGKPGDMGPPGPQGPPGKDGPPGVKGENGHPGSPGEKGEKGETGQAGSPGEKGEAGEKGNPGAEVPGLPGPEGPPGPPGLQGVPGPKGEAGLDGAKGEKGFQGEKGDRGPLGLPGASGLDGRPGPPGTPGPIGVPGPAGPKGERGSKGDPGMTGPTGAAGLPGLHGPPGDKGNRGERGKKGSRGPKGDKGDQGAPGLDAPCPLGEDGLPVQGCWNK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q5TAT6"},
		"label":"coda1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_12_human"},{"db":"intact","id":"EBI-2528478"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q5TAT6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q5TAT6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKIFQRKMRYWLLPPFLAIVYFCTIVQGQVAPPTRLRYNVISHDSIQISWKAPRGKFGGYKLLVTPTSGGKTNQLNLQNTATKAIIQGLMPDQNYTVQIIAYNKDKESKPAQGQFRIKDLEKRKDPKPRVKVVDRGNGSRPSSPEEVKFVCQTPAIADIVILVDGSWSIGRFNFRLVRHFLENLVTAFDVGSEKTRIGLAQYSGDPRIEWHLNAFSTKDEVIEAVRNLPYKGGNTLTGLALNYIFENSFKPEAGSRTGVSKIGILITDGKSQDDIIPPSRNLRESGVELFAIGVKNADVNELQEIASEPDSTHVYNVAEFDLMHTVVESLTRTLCSRVEEQDREIKASAHAITGPPTELITSEVTARSFMVNWTHAPGNVEKYRVVYYPTRGGKPDEVVVDGTVSSTVLKNLMSLTEYQIAVFAIYAHTASEGLRGTETTLALPMASDLLLYDVTENSMRVKWDAVPGASGYLILYAPLTEGLAGDEKEMKIGETHTDIELSGLLPNTEYTVTVYAMFGEEASDPVTGQETTLALSPPRNLRISNVGSNSARLTWDPTSRQINGYRIVYNNADGTEINEVEVDPITTFPLKGLTPLTEYTIAIFSIYDEGQSEPLTGVFTTEEVPAQQYLEIDEVTTDSFRVTWHPLSADEGLHKLMWIPVYGGKTEEVVLKEEQDSHVIEGLEPGTEYEVSLLAVLDDGSESEVVTAVGTTLDSFWTEPATTIVPTTSVTSVFQTGIRNLVVGDETTSSLRVKWDISDSDVQQFRVTYMTAQGDPEEEVIGTVMVPGSQNNLLLKPLLPDTEYKVTVTPIYTDGEGVSVSAPGKTLPSSGPQNLRVSEEWYNRLRITWDPPSSPVKGYRIVYKPVSVPGPTLETFVGADINTILITNLLSGMDYNVKIFASQASGFSDALTGMVKTLFLGVTNLQAKHVEMTSLCAHWQVHRHATAYRVVIESLQDRQKQESTVGGGTTRHCFYGLQPDSEYKISVYTKLQEIEGPSVSIMEKTQSLPTRPPTFPPTIPPAKEVCKAAKADLVFMVDGSWSIGDENFNKIISFLYSTVGALNKIGTDGTQVAMVQFTDDPRTEFKLNAYKTKETLLDAIKHISYKGGNTKTGKAIKYVRDTLFTAESGTRRGIPKVIVVITDGRSQDDVNKISREMQLDGYSIFAIGVADADYSELVSIGSKPSARHVFFVDDFDAFKKIEDELITFVCETASATCPVVHKDGIDLAGFKMMEMFGLVEKDFSSVEGVSMEPGTFNVFPCYQLHKDALVSQPTRYLHPEGLPSDYTISFLFRILPDTPQEPFALWEILNKNSDPLVGVILDNGGKTLTYFNYDQSGDFQTVTFEGPEIRKIFYGSFHKLHIVVSETLVKVVIDCKQVGEKAMNASANITSDGVEVLGKMVRSRGPGGNSAPFQLQMFDIVCSTSWANTDKCCELPGLRDDESCPDLPHSCSCSETNEVALGPAGPPGGPGLRGPKGQQGEPGPKGPDGPRGEIGLPGPQGPPGPQGPSGLSIQGMPGMPGEKGEKGDTGLPGPQGIPGGVGSPGRDGSPGQRGLPGKDGSSGPPGPPGPIGIPGTPGVPGITGSMGPQGALGPPGVPGAKGERGERGDLQSQAMVRSVARQVCEQLIQSHMARYTAILNQIPSHSSSIRTVQGPPGEPGRPGSPGAPGEQGPPGTPGFPGNAGVPGTPGERGLTGIKGEKGNPGVGTQGPRGPPGPAGPSGESRPGSPGPPGSPGPRGPPGHLGVPGPQGPSGQPGYCDPSSCSAYGVRAPHPDQPEFTPVQDELEAMELWGPGV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q05707"},
		"label":"coea1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_13_human"},{"db":"intact","id":"EBI-2528588"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q05707"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q05707"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAPRRNNGQCWCLLMLLSVSTPLPAVTQTRGATETASQGHLDLTQLIGVPLPSSVSFVTGYGGFPAYSFGPGANVGRPARTLIPSTFFRDFAISVVVKPSSTRGGVLFAITDAFQKVIYLGLRLSGVEDGHQRIILYYTEPGSHVSQEAAAFSVPVMTHRWNRFAMIVQGEEVTLLVNCEEHSRIPFQRSSQALAFESSAGIFMGNAGATGLERFTGSLQQLTVHPDPRTPEELCDPEESSASGETSGLQEADGVAEILEAVTYTQASPKEAKVEPINTPPTPSSPFEDMELSGEPVPEGTLETTNMSIIQHSSPKQGSGEILNDTLEGVHSVDGDPITDSGSGAGAFLDIAEEKNLAATAAGLAEVPISTAGEAEASSVPTGGPTLSMSTENPEEGVTPGPDNEERLAATAAGEAEALASMPGEVEASGVAPGELDLSMSAQSLGEEATVGPSSEDSLTTAAAATEVSLSTFEDEEASGVPTDGLAPLTATMAPERAVTSGPGDEEDLAAATTEEPLITAGGEESGSPPPDGPPLPLPTVAPERWITPAQREHVGMKGQAGPKGEKGDAGEELPGPPEPSGPVGPTAGAEAEGSGLGWGSDVGSGSGDLVGSEQLLRGPPGPPGPPGLPGIPGKPGTDVFMGPPGSPGEDGPAGEPGPPGPEGQPGVDGATGLPGMKGEKGARGPNGSVGEKGDPGNRGLPGPPGKKGQAGPPGVMGPPGPPGPPGPPGPGCTMGLGFEDTEGSGSTQLLNEPKLSRPTAAIGLKGEKGDRGPKGERGMDGASIVGPPGPRGPPGHIKVLSNSLINITHGFMNFSDIPELVGPPGPDGLPGLPGFPGPRGPKGDTGLPGFPGLKGEQGEKGEPGAILTEDIPLERLMGKKGEPGMHGAPGPMGPKGPPGHKGEFGLPGRPGRPGLNGLKGTKGDPGVIMQGPPGLPGPPGPPGPPGAVINIKGAIFPIPVRPHCKMPVDTAHPGSPELITFHGVKGEKGSWGLPGSKGEKGDQGAQGPPGPPLDLAYLRHFLNNLKGENGDKGFKGEKGEKGDINGSFLMSGPPGLPGNPGPAGQKGETVVGPQGPPGAPGLPGPPGFGRPGDPGPPGPPGPPGPPAILGAAVALPGPPGPPGQPGLPGSRNLVTAFSNMDDMLQKAHLVIEGTFIYLRDSTEFFIRVRDGWKKLQLGELIPIPADSPPPPALSSNPHQLLPPPNPISSANYEKPALHLAALNMPFSGDIRADFQCFKQARAAGLLSTYRAFLSSHLQDLSTIVRKAERYSLPIVNLKGQVLFNNWDSIFSGHGGQFNMHIPIYSFDGRDIMTDPSWPQKVIWHGSSPHGVRLVDNYCEAWRTADTAVTGLASPLSTGKILDQKAYSCANRLIVLCIENSFMTDARK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P39059"},
		"label":"cofa1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_43_human"},{"db":"intact","id":"EBI-2528649"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P39059"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P39059"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MWVSWAPGLWLLGLWATFGHGANTGAQCPPSQQEGLKLEHSSSLPANVTGFNLIHRLSLMKTSAIKKIRNPKGPLILRLGAAPVTQPTRRVFPRGLPEEFALVLTLLLKKHTHQKTWYLFQVTDANGYPQISLEVNSQERSLELRAQGQDGDFVSCIFPVPQLFDLRWHKLMLSVAGRVASVHVDCSSASSQPLGPRRPMRPVGHVFLGLDAEQGKPVSFDLQQVHIYCDPELVLEEGCCEILPAGCPPETSKARRDTQSNELIEINPQSEGKVYTRCFCLEEPQNSEVDAQLTGRISQKAERGAKVHQETAADECPPCVHGARDSNVTLAPSGPKGGKGERGLPGPPGSKGEKGARGNDCVRISPDAPLQCAEGPKGEKGESGALGPSGLPGSTGEKGQKGEKGDGGIKGVPGKPGRDGRPGEICVIGPKGQKGDPGFVGPEGLAGEPGPPGLPGPPGIGLPGTPGDPGGPPGPKGDKGSSGIPGKEGPGGKPGKPGVKGEKGDPCEVCPTLPEGFQNFVGLPGKPGPKGEPGDPVPARGDPGIQGIKGEKGEPCLSCSSVVGAQHLVSSTGASGDVGSPGFGLPGLPGRAGVPGLKGEKGNFGEAGPAGSPGPPGPVGPAGIKGAKGEPCEPCPALSNLQDGDVRVVALPGPSGEKGEPGPPGFGLPGKQGKAGERGLKGQKGDAGNPGDPGTPGTTGRPGLSGEPGVQGPAGPKGEKGDGCTACPSLQGTVTDMAGRPGQPGPKGEQGPEGVGRPGKPGQPGLPGVQGPPGLKGVQGEPGPPGRGVQGPQGEPGAPGLPGIQGLPGPRGPPGPTGEKGAQGSPGVKGATGPVGPPGASVSGPPGRDGQQGQTGLRGTPGEKGPRGEKGEPGECSCPSQGDLIFSGMPGAPGLWMGSSWQPGPQGPPGIPGPPGPPGVPGLQGVPGNNGLPGQPGLTAELGSLPIEQHLLKSICGDCVQGQRAHPGYLVEKGEKGDQGIPGVPGLDNCAQCFLSLERPRAEEARGDNSEGDPGCVGSPGLPGPPGLPGQRGEEGPPGMRGSPGPPGPIGPPGFPGAVGSPGLPGLQGERGLTGLTGDKGEPGPPGQPGYPGATGPPGLPGIKGERGYTGSAGEKGEPGPPGSEGLPGPPGPAGPRGERGPQGNSGEKGDQGFQGQPGFPGPPGPPGFPGKVGSPGPPGPQAEKGSEGIRGPSGLPGSPGPPGPPGIQGPAGLDGLDGKDGKPGLRGDPGPAGPPGLMGPPGFKGKTGHPGLPGPKGDCGKPGPPGSTGRPGAEGEPGAMGPQGRPGPPGHVGPPGPPGQPGPAGISAVGLKGDRGATGERGLAGLPGQPGPPGHPGPPGEPGTDGAAGKEGPPGKQGFYGPPGPKGDPGAAGQKGQAGEKGRAGMPGGPGKSGSMGPVGPPGPAGERGHPGAPGPSGSPGLPGVPGSMGDMVNYDEIKRFIRQEIIKMFDERMAYYTSRMQFPMEMAAAPGRPGPPGKDGAPGRPGAPGSPGLPGQIGREGRQGLPGVRGLPGTKGEKGDIGIGIAGENGLPGPPGPQGPPGYGKMGATGPMGQQGIPGIPGPPGPMGQPGKAGHCNPSDCFGAMPMEQQYPPMKTMKGPFG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q07092"},
		"label":"coga1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_44_human"},{"db":"intact","id":"EBI-2528687"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q07092"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q07092"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDVTKKNKRDGTEVTERIVTETVTTRLTSLPPKGGTSNGYAKTASLGGGSRLEKQSLTHGSSGYINSTGSTRGHASTSSYRRAHSPASTLPNSPGSTFERKTHVTRHAYEGSSSGNSSPEYPRKEFASSSTRGRSQTRESEIRVRLQSASPSTRWTELDDVKRLLKGSRSASVSPTRNSSNTLPIPKKGTVETKIVTASSQSVSGTYDATILDANLPSHVWSSTLPAGSSMGTYHNNMTTQSSSLLNTNAYSAGSVFGVPNNMASCSPTLHPGLSTSSSVFGMQNNLAPSLTTLSHGTTTTSTAYGVKKNMPQSPAAVNTGVSTSAACTTSVQSDDLLHKDCKFLILEKDNTPAKKEMELLIMTKDSGKVFTASPASIAATSFSEDTLKKEKQAAYNADSGLKAEANGDLKTVSTKGKTTTADIHSYGSSGGGGSGGGGGVGGAGGGPWGPAPAWCPCGSCCSWWKWLLGLLLTWLLLLGLLFGLIALAEEVRKLKARVDELERIRRSILPYGDSMDRIEKDRLQGMAPAAGADLDKIGLHSDSQEELWMFVRKKLMMEQENGNLRGSPGPKGDMGSPGPKGDRGFPGTPGIPGPLGHPGPQGPKGQKGSVGDPGMEGPMGQRGREGPMGPRGEAGPPGSGEKGERGAAGEPGPHGPPGVPGSVGPKGSSGSPGPQGPPGPVGLQGLRGEVGLPGVKGDKGPMGPPGPKGDQGEKGPRGLTGEPGMRGLPGAVGEPGAKGAMGPAGPDGHQGPRGEQGLTGMPGIRGPPGPSGDPGKPGLTGPQGPQGLPGTPGRPGIKGEPGAPGKIVTSEGSSMLTVPGPPGPPGAMGPPGPPGAPGPAGPAGLPGHQEVLNLQGPPGPPGPRGPPGPSIPGPPGPRGPPGEGLPGPPGPPGSFLSNSETFLSGPPGPPGPPGPKGDQGPPGPRGHQGEQGLPGFSTSGSSSFGLNLQGPPGPPGPQGPKGDKGDPGVPGALGIPSGPSEGGSSSTMYVSGPPGPPGPPGPPGSISSSGQEIQQYISEYMQSDSIRSYLSGVQGPPGPPGPPGPVTTITGETFDYSELASHVVSYLRTSGYGVSLFSSSISSEDILAVLQRDDVRQYLRQYLMGPRGPPGPPGASGDGSLLSLDYAELSSRILSYMSSSGISIGLPGPPGPPGLPGTSYEELLSLLRGSEFRGIVGPPGPPGPPGIPGNVWSSISVEDLSSYLHTAGLSFIPGPPGPPGPPGPRGPPGVSGALATYAAENSDSFRSELISYLTSPDVRSFIVGPPGPPGPQGPPGDSRLLSTDASHSRGSSSSSHSSSVRRGSSYSSSMSTGGGGAGSLGAGGAFGEAAGDRGPYGTDIGPGGGYGAAAEGGMYAGNGGLLGADFAGDLDYNELAVRVSESMQRQGLLQGMAYTVQGPPGQPGPQGPPGISKVFSAYSNVTADLMDFFQTYGAIQGPPGQKGEMGTPGPKGDRGPAGPPGHPGPPGPRGHKGEKGDKGDQVYAGRRRRRSIAVKP",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9UMD9"},
		"label":"coha1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_45_human"},{"db":"intact","id":"EBI-2528731"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9UMD9"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9UMD9"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAPYPCGCHILLLLFCCLAAARANLLNLNWLWFNNEDTSHAATTIPEPQGPLPVQPTADTTTHVTPRNGSTEPATAPGSPEPPSELLEDGQDTPTSAESPDAPEENIAGVGAEILNVAKGIRSFVQLWNDTVPTESLARAETLVLETPVGPLALAGPSSTPQENGTTLWPSRGIPSSPGAHTTEAGTLPAPTPSPPSLGRPWAPLTGPSVPPPSSGRASLSSLLGGAPPWGSLQDPDSQGLSPAAAAPSQQLQRPDVRLRTPLLHPLVMGSLGKHAAPSAFSSGLPGALSQVAVTTLTRDSGAWVSHVANSVGPGLANNSALLGADPEAPAGRCLPLPPSLPVCGHLGISRFWLPNHLHHESGEQVRAGARAWGGLLQTHCHPFLAWFFCLLLVPPCGSVPPPAPPPCCQFCEALQDACWSRLGGGRLPVACASLPTQEDGYCVLIGPAAERISEEVGLLQLLGDPPPQQVTQTDDPDVGLAYVFGPDANSGQVARYHFPSLFFRDFSLLFHIRPATEGPGVLFAITDSAQAMVLLGVKLSGVQDGHQDISLLYTEPGAGQTHTAASFRLPAFVGQWTHLALSVAGGFVALYVDCEEFQRMPLARSSRGLELEPGAGLFVAQAGGADPDKFQGVIAELKVRRDPQVSPMHCLDEEGDDSDGASGDSGSGLGDARELLREETGAALKPRLPAPPPVTTPPLAGGSSTEDSRSEEVEEQTTVASLGAQTLPGSDSVSTWDGSVRTPGGRVKEGGLKGQKGEPGVPGPPGRAGPPGSPCLPGPPGLPCPVSPLGPAGPALQTVPGPQGPPGPPGRDGTPGRDGEPGDPGEDGKPGDTGPQGFPGTPGDVGPKGDKGDPGVGERGPPGPQGPPGPPGPSFRHDKLTFIDMEGSGFGGDLEALRGPRGFPGPPGPPGVPGLPGEPGRFGVNSSDVPGPAGLPGVPGREGPPGFPGLPGPPGPPGREGPPGRTGQKGSLGEAGAPGHKGSKGAPGPAGARGESGLAGAPGPAGPPGPPGPPGPPGPGLPAGFDDMEGSGGPFWSTARSADGPQGPPGLPGLKGDPGVPGLPGAKGEVGADGVPGFPGLPGREGIAGPQGPKGDRGSRGEKGDPGKDGVGQPGLPGPPGPPGPVVYVSEQDGSVLSVPGPEGRPGFAGFPGPAGPKGNLGSKGERGSPGPKGEKGEPGSIFSPDGGALGPAQKGAKGEPGFRGPPGPYGRPGYKGEIGFPGRPGRPGMNGLKGEKGEPGDASLGFGMRGMPGPPGPPGPPGPPGTPVYDSNVFAESSRPGPPGLPGNQGPPGPKGAKGEVGPPGPPGQFPFDFLQLEAEMKGEKGDRGDAGQKGERGEPGGGGFFGSSLPGPPGPPGPPGPRGYPGIPGPKGESIRGQPGPPGPQGPPGIGYEGRQGPPGPPGPPGPPSFPGPHRQTISVPGPPGPPGPPGPPGTMGASSGVRLWATRQAMLGQVHEVPEGWLIFVAEQEELYVRVQNGFRKVQLEARTPLPRGTDNEVAALQPPVVQLHDSNPYPRREHPHPTARPWRADDILASPPRLPEPQPYPGAPHHSSYVHLRPARPTSPPAHSHRDFQPVLHLVALNSPLSGGMRGIRGADFQCFQQARAVGLAGTFRAFLSSRLQDLYSIVRRADRAAVPIVNLKDELLFPSWEALFSGSEGPLKPGARIFSFDGKDVLRHPTWPQKSVWHGSDPNGRRLTESYCETWRTEAPSATGQASSLLGGRLLGQSAASCHHAYIVLCIENSFMTASK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P39060"},
		"label":"coia1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1BNL"},{"db":"intact","id":"EBI-2528782"},{"db":"matrixdb","id":"MULT_46_human"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P39060"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P39060"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MRLTGPWKLWLWMSIFLLPASTSVTVRDKTEESCPILRIEGHQLTYDNINKLEVSGFDLGDSFSLRRAFCESDKTCFKLGSALLIRDTIKIFPKGLPEEYSVAAMFRVRRNAKKERWFLWQVLNQQNIPQISIVVDGGKKVVEFMFQATEGDVLNYIFRNRELRPLFDRQWHKLGISIQSQVISLYMDCNLIARRQTDEKDTVDFHGRTVIATRASDGKPVDIELHQLKIYCSANLIAQETCCEISDTKCPEQDGFGNIASSWVTAHASKMSSYLPAKQELKDQCQCIPNKGEAGLPGAPGSPGQKGHKGEPGENGLHGAPGFPGQKGEQGFEGSKGETGEKGEQGEKGDPALAGLNGENGLKGDLGPHGPPGPKGEKGDTGPPGPPALPGSLGIQGPQGPPGKEGQRGRRGKTGPPGKPGPPGPPGPPGIQGIHQTLGGYYNKDNKGNDEHEAGGLKGDKGETGLPGFPGSVGPKGQKGEPGEPFTKGEKGDRGEPGVIGSQGVKGEPGDPGPPGLIGSPGLKGQQGSAGSMGPRGPPGDVGLPGEHGIPGKQGIKGEKGDPGGIIGPPGLPGPKGEAGPPGKSLPGEPGLDGNPGAPGPRGPKGERGLPGVHGSPGDIGPQGIGIPGRTGAQGPAGEPGIQGPRGLPGLPGTPGTPGNDGVPGRDGKPGLPGPPGDPIALPLLGDIGALLKNFCGNCQASVPGLKSNKGEEGGAGEPGKYDSMARKGDIGPRGPPGIPGREGPKGSKGERGYPGIPGEKGDEGLQGIPGIPGAPGPTGPPGLMGRTGHPGPTGAKGEKGSDGPPGKPGPPGPPGIPFNERNGMSSLYKIKGGVNVPSYPGPPGPPGPKGDPGPVGEPGAMGLPGLEGFPGVKGDRGPAGPPGIAGMSGKPGAPGPPGVPGEPGERGPVGDIGFPGPEGPSGKPGINGKDGIPGAQGIMGKPGDRGPKGERGDQGIPGDRGSQGERGKPGLTGMKGAIGPMGPPGNKGSMGSPGHQGPPGSPGIPGIPADAVSFEEIKKYINQEVLRIFEERMAVFLSQLKLPAAMLAAQAYGRPGPPGKDGLPGPPGDPGPQGYRGQKGERGEPGIGLPGSPGLPGTSALGLPGSPGAPGPQGPPGPSGRCNPEDCLYPVSHAHQRTGGN",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q14993"},
		"label":"coja1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_47_human"},{"db":"intact","id":"EBI-2529092"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q14993"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q14993"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSSGDPAHLGLCLWLWLGATLGREQVQASGLLRLAVLPEDRLQMKWRESEGSGLGYLVQVKPMAGDSEQEVILTTKTPKATVGGLSPSKGYTLQIFELTGSGRFLLARREFVIEDLKSSSLDRSSQRPLGSGAPEPTPSHTGSPDPEQASEPQVAFTPSQDPRTPAGPQFRCLPPVPADMVFLVDGSWSIGHSHFQQVKDFLASVIAPFEIGPDKVQVGLTQYSGDAQTEWDLNSLSTKEQVLAAVRRLRYKGGNTFTGLALTHVLGQNLQPAAGLRPEAAKVVILVTDGKSQDDVHTAARVLKDLGVNVFAVGVKNADEAELRLLASPPRDITVHSVLDFLQLGALAGLLSRLICQRLQGGSPRQGPAAAPALDTLPAPTSLVLSQVTSSSIRLSWTPAPRHPLKYLIVWRASRGGTPREVVVEGPAASTELHNLASRTEYLVSVFPIYEGGVGEGLRGLVTTAPLPPPRALTLAAVTPRTVHLTWQPSAGATHYLVRCSPASPKGEEEEREVQVGRPEVLLDGLEPGRDYEVSVQSLRGPEGSEARGIRARTPTLAPPRHLGFSDVSHDAARVFWEGAPRPVRLVRVTYVSSEGGHSGQTEAPGNATSATLGPLSSSTTYTVRVTCLYPGGGSSTLTGRVTTKKAPSPSQLSMTELPGDAVQLAWVAAAPSGVLVYQITWTPLGEGKAHEISVPGNLGTAVLPGLGRHTEYDVTILAYYRDGARSDPVSLRYTPSTVSRSPPSNLALASETPDSLQVSWTPPLGRVLHYWLTYAPASGLGPEKSVSVPGARSHVTLPDLQAATKYRVLVSAIYAAGRSEAVSATGQTACPALRPDGSLPGFDLMVAFSLVEKAYASIRGVAMEPSAFGGTPTFTLFKDAQLTRRVSDVYPAPLPPEHTIVFLVRLLPETPREAFALWQMTAEDFQPLLGVLLDAGKKSLTYFHRDPRAALQEATFDPQEVRKIFFGSFHKVHVAVGRSKVRLYVDCRKVAERPLGEMGSPPAAGFVTLGRLAKARGPRSSSAAFQLQMLQIVCSDTWADEDRCCELPASRDGETCPAFVSACSCSSETPGPPGPQGPPGLPGRNGTPGEQGFPGPRGPPGVKGEKGDHGLPGLQGHPGHQGIPGRVGLQGPKGMRGLEGTAGLPGPPGPRGFQGMAGARGTSGERGPPGTVGPTGLPGPKGERGEKGEPQSLATLYQLVSQASHVSKFDSFHENTRPPMPILEQKLEPGTEPLGSPGTRSKALVPGEWGRGGRHLEGRGEPGAVGQMGSPGQQGASTQGLWE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9P218"},
		"label":"coka1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_48_human"},{"db":"intact","id":"EBI-2529132"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9P218"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9P218"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAHYITFLCMVLVLLLQNSVLAEDGEVRSSCRTAPTDLVFILDGSYSVGPENFEIVKKWLVNITKNFDIGPKFIQVGVVQYSDYPVLEIPLGSYDSGEHLTAAVESILYLGGNTKTGKAIQFALDYLFAKSSRFLTKIAVVLTDGKSQDDVKDAAQAARDSKITLFAIGVGSETEDAELRAIANKPSSTYVFYVEDYIAISKIREVMKQKLCEESVCPTRIPVAARDERGFDILLGLDVNKKVKKRIQLSPKKIKGYEVTSKVDLSELTSNVFPEGLPPSYVFVSTQRFKVKKIWDLWRILTIDGRPQIAVTLNGVDKILLFTTTSVINGSQVVTFANPQVKTLFDEGWHQIRLLVTEQDVTLYIDDQQIENKPLHPVLGILINGQTQIGKYSGKEETVQFDVQKLRIYCDPEQNNRETACEIPGFNGECLNGPSDVGSTPAPCICPPGKPGLQGPKGDPGLPGNPGYPGQPGQDGKPGYQGIAGTPGVPGSPGIQGARGLPGYKGEPGRDGDKGDRGLPGFPGLHGMPGSKGEMGAKGDKGSPGFYGKKGAKGEKGNAGFPGLPGPAGEPGRHGKDGLMGSPGFKGEAGSPGAPGQDGTRGEPGIPGFPGNRGLMGQKGEIGPPGQQGKKGAPGMPGLMGSNGSPGQPGTPGSKGSKGEPGIQGMPGASGLKGEPGATGSPGEPGYMGLPGIQGKKGDKGNQGEKGIQGQKGENGRQGIPGQQGIQGHHGAKGERGEKGEPGVRGAIGSKGESGVDGLMGPAGPKGQPGDPGPQGPPGLDGKPGREFSEQFIRQVCTDVIRAQLPVLLQSGRIRNCDHCLSQHGSPGIPGPPGPIGPEGPRGLPGLPGRDGVPGLVGVPGRPGVRGLKGLPGRNGEKGSQGFGYPGEQGPPGPPGPEGPPGISKEGPPGDPGLPGKDGDHGKPGIQGQPGPPGICDPSLCFSVIARRDPFRKGPNY",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q96P44"},
		"label":"cola1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_49_human"},{"db":"intact","id":"EBI-2529143"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q96P44"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q96P44"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAGLRGNAVAGLLWMLLLWSGGGGCQAQRAGCKSVHYDLVFLLDTSSSVGKEDFEKVRQWVANLVDTFEVGPDRTRVGVVRYSDRPTTAFELGLFGSQEEVKAAARRLAYHGGNTNTGDALRYITARSFSPHAGGRPRDRAYKQVAILLTDGRSQDLVLDAAAAAHRAGIRIFAVGVGEALKEELEEIASEPKSAHVFHVSDFNAIDKIRGKLRRRLCENVLCPSVRVEGDRFKHTNGGTKEITGFDLMDLFSVKEILGKRENGAQSSYVRMGSFPVVQSTEDVFPQGLPDEYAFVTTFRFRKTSRKEDWYIWQVIDQYSIPQVSIRLDGENKAVEYNAVGAMKDAVRVVFRGSRVNDLFDRDWHKMALSIQAQNVSLHIDCALVQTLPIEERENIDIQGKTVIGKRLYDSVPIDFDLQRIVIYCDSRHAELETCCDIPSGPCQVTVVTEPPPPPPPQRPPTPGSEQIGFLKTINCSCPAGEKGEMGVAGPMGLPGPKGDIGAIGPVGAPGPKGEKGDVGIGPFGQGEKGEKGSLGLPGPPGRDGSKGMRGEPGELGEPGLPGEVGMRGPQGPPGLPGPPGRVGAPGLQGERGEKGTRGEKGERGLDGFPGKPGDTGQQGRPGPSGVAGPQGEKGDVGPAGPPGVPGSVVQQEGLKGEQGAPGPRGHQGAPGPPGARGPIGPEGRDGPPGLQGLRGKKGDMGPPGIPGLLGLQGPPGPPGVPGPPGPGGSPGLPGEIGFPGKPGPPGPTGPPGKDGPNGPPGPPGTKGEPGERGEDGLPGKPGLRGEIGEQGLAGRPGEKGEAGLPGAPGFPGVRGEKGDQGEKGELGLPGLKGDRGEKGEAGPAGPPGLPGTTSLFTPHPRMPGEQGPKGEKGDPGLPGEPGLQGRPGELGPQGPTGPPGAKGQEGAHGAPGAAGNPGAPGHVGAPGPSGPPGSVGAPGLRGTPGKDGERGEKGAAGEEGSPGPVGPRGDPGAPGLPGPPGKGKDGEPGLRGSPGLPGPLGTKAACGKVRGSENCALGGQCVKGDRGAPGIPGSPGSRGDPGIGVAGPPGPSGPPGDKGSPGSRGLPGFPGPQGPAGRDGAPGNPGERGPPGKPGLSSLLSPGDINLLAKDVCNDCPPGPPGLPGLPGFKGDKGVPGKPGREGTEGKKGEAGPPGLPGPPGIAGPQGSQGERGADGEVGQKGDQGHPGVPGFMGPPGNPGPPGADGIAGAAGPPGIQGSPGKEGPPGPQGPSGLPGIPGEEGKEGRDGKPGPPGEPGKAGEPGLPGPEGARGPPGFKGHTGDSGAPGPRGESGAMGLPGQEGLPGKDGDTGPTGPQGPQGPRGPPGKNGSPGSPGEPGPSGTPGQKGSKGENGSPGLPGFLGPRGPPGEPGEKGVPGKEGVPGKPGEPGFKGERGDPGIKGDKGPPGGKGQPGDPGIPGHKGHTGLMGPQGLPGENGPVGPPGPPGQPGFPGLRGESPSMETLRRLIQEELGKQLETRLAYLLAQMPPAYMKSSQGRPGPPGPPGKDGLPGRAGPMGEPGRPGQGGLEGPSGPIGPKGERGAKGDPGAPGVGLRGEMGPPGIPGQPGEPGYAKDGLPGIPGPQGETGPAGHPGLPGPPGPPGQCDPSQCAYFASLAARPGNVKGP",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q8NFW1"},
		"label":"coma1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_50_human"},{"db":"intact","id":"EBI-2529189"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q8NFW1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q8NFW1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGPGERAGGGGDAGKGNAAGGGGGGRSATTAGSRAVSALCLLLSVGSAAACLLLGVQAAALQGRVAALEEERELLRRAGPPGALDAWAEPHLERLLREKLDGLAKIRTAREAPSECVCPPGPPGRRGKPGRRGDPGPPGQSGRDGYPGPLGLDGKPGLPGPKGEKGAPGDFGPRGDQGQDGAAGPPGPPGPPGARGPPGDTGKDGPRGAQGPAGPKGEPGQDGEMGPKGPPGPKGEPGVPGKKGDDGTPSQPGPPGPKGEPGSMGPRGENGVDGAPGPKGEPGHRGTDGAAGPRGAPGLKGEQGDTVVIDYDGRILDALKGPPGPQGPPGPPGIPGAKGELGLPGAPGIDGEKGPKGQKGDPGEPGPAGLKGEAGEMGLSGLPGADGLKGEKGESASDSLQESLAQLIVEPGPPGPPGPPGPMGLQGIQGPKGLDGAKGEKGASGERGPSGLPGPVGPPGLIGLPGTKGEKGRPGEPGLDGFPGPRGEKGDRSERGEKGERGVPGRKGVKGQKGEPGPPGLDQPCPVGPDGLPVPGCWHK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q86Y22"},
		"label":"cona1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_51_human"},{"db":"intact","id":"EBI-2529234"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q86Y22"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q86Y22"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MHLRAHRTRRGKVSPTAKTKSLLHFIVLCVAGVVVHAQEQGIDILHQLGLGGKDVRHSSPATAVPSASTPLPQGVHLTESGVIFKNDAYIETPFVKILPVNLGQPFTILTGLQSHRVNNAFLFSIRNKNRLQLGVQLLPKKLVVHIRGKQPAVFNYSVHDEQWHSFAITIRNQSVSMFVECGKKYFSTETIPEVQTFDSNSVFTLGSMNNNSIHFEGIVCQLDIIPSAEASADYCRYVKQQCRQADKYQPETSIPCTTLIPTKIPEHSPPPKLFAEKVLSEDTFTEGKSIPNIIKNDSETVYKRQEHQISRSQLSSLQSGNVSAVDLTNHGIQAKEMITEEDTQTNFSLSVTTHRISEAKMNTKEKFSSLLNMSDNITQHDDRVTGLSLFKKMPSILPQIKQDTITNLKKAITANLHTNELMEMQPILNTSLHRVTNEPSVDNHLDLRKEGEFYPDATYPIENSYETELYDYYYYEDLNTMLEMEYLRGPKGDTGPPGPPGPAGIPGPSGKRGPRGIPGPHGNPGLPGLPGPKGPKGDPGFSPGQPVPGEKGDQGLSGLMGPPGMQGDKGLKGHPGLPGLPGEQGIPGFAGNIGSPGYPGRQGLAGPEGNPGPKGAQGFIGSPGEAGQLGPEGERGIPGIRGKKGFKGRQGFPGDFGDRGPAGLDGSPGLVGGTGPPGFPGLRGSVGPVGPIGPAGIPGPMGLSGNKGLPGIKGDKGEQGTAGELGEPGYPGDKGAVGLPGPPGMRGKSGPSGQTGDPGLQGPSGPPGPEGFPGDIGIPGQNGPEGPKGLLGNRGPPGPPGLKGTQGEEGPIGAFGELGPRGKPGQKGYAGEPGPEGLKGEVGDQGNIGKIGETGPVGLPGEVGMTGSIGEKGERGSPGPLGPQGEKGVMGYPGPPGVPGPIGPLGLPGHVGARGPPGSQGPKGQRGSRGPDGLLGEQGIQGAKGEKGDQGKRGPHGLIGKTGNPGERGFQGKPGLQGLPGSTGDRGLPGEPGLRGLQGDVGPPGEMGMEGPPGTEGESGLQGEPGAKGDVGTAGSVGGTGEPGLRGEPGAPGEEGLQGKDGLKGVPGGRGLPGEDGEKGEMGLPGIIGPLGRSGQTGLPGPEGIVGIPGQRGRPGKKGDKGQIGPTGEVGSRGPPGKIGKSGPKGARGTRGAVGHLGLMGPDGEPGIPGYRGHQGQPGPSGLPGPKGEKGYPGEDSTVLGPPGPRGEPGPVGDQGERGEPGAEGYKGHVGVPGLRGATGQQGPPGEPGDQGEQGLKGERGSEGNKGKKGAPGPSGKPGIPGLQGLLGPKGIQGYHGADGISGNPGKIGPPGKQGLPGIRGGPGRTGLAGAPGPPGVKGSSGLPGSPGIQGPKGEQGLPGQPGIQGKRGHRGAQGDQGPCGDPGLKGQPGEYGVQGLTGFQGFPGPKGPEGDAGIVGISGPKGPIGHRGNTGPLGREGIIGPTGRTGPRGEKGFRGETGPQGPRGQPGPPGPPGAPGPRKQMDINAAIQALIESNTALQMESYQNTEVTLIDHSEEIFKTLNYLSNLLHSIKNPLGTRDNPARICKDLLNCEQKVSDGKYWIDPNLGCPSDAIEVFCNFSAGGQTCLPPVSVTKLEFGVGKVQMNFLHLLSSEATHIITIHCLNTPRWTSTQTSGPGLPIGFKGWNGQIFKVNTLLEPKVLSDDCKIQDGSWHKATFLFHTQEPNQLPVIEVQKLPHLKTERKYYIDSSSVCFL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q17RW2"},
		"label":"cooa1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_52_human"},{"db":"intact","id":"EBI-2529258"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q17RW2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q17RW2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLLKKHAGKGGGREPRSEDPTPAEQHCARTMPPCAVLAALLSVVAVVSCLYLGVKTNDLQARIAALESAKGAPSIHLLPDTLDHLKTMVQEKVERLLAQKSYEHMAKIRIAREAPSECNCPAGPPGKRGKRGRRGESGPPGQPGPQGPPGPKGDKGEQGDQGPRMVFPKINHGFLSADQQLIKRRLIKGDQGQAGPPGPPGPPGPRGPPGDTGKDGPRGMPGVPGEPGKPGEQGLMGPLGPPGQKGSIGAPGIPGMNGQKGEPGLPGAVGQNGIPGPKGEPGEQGEKGDAGENGPKGDTGEKGDPGSSAAGIKGEPGESGRPGQKGEPGLPGLPGLPGIKGEPGFIGPQGEPGLPGLPGTKGERGEAGPPGRGERGEPGAPGPKGKQGESGTRGPKGSKGDRGEKGDSGAQGPRGPPGQKGDQGATEIIDYNGNLHEALQRITTLTVTGPPGPPGPQGLQGPKGEQGSPGIPGMDGEQGLKGSKGDMGDPGMTGEKGGIGLPGLPGANGMKGEKGDSGMPGPQGPSIIGPPGPPGPHGPPGPMGPHGLPGPKGTDGPMGPHGPAGPKGERGEKGAMGEPGPRGPYGLPGKDGEPGLDGFPGPRGEKGDLGEKGEKGFRGVKGEKGEPGQPGLDGLDAPCQLGPDGLPMPGCWQK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9BXS0"},
		"label":"copa1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_51_human"},{"db":"intact","id":"EBI-2529312"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9BXS0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9BXS0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKLALLLPWACCCLCGSALATGFLYPFSAAALQQHGYPEPGAGSPGSGYASRRHWCHHTVTRTVSCQVQNGSETVVQRVYQSCRWPGPCANLVSYRTLIRPTYRVSYRTVTVLEWRCCPGFTGSNCDEECMNCTRLSDMSERLTTLEAKVLLLEAAERPSSPDNDLPAPESTPPTWNEDFLPDAIPLAHPVPRQRRPTGPAGPPGQTGPPGPAGPPGSKGDRGQTGEKGPAGPPGLLGPPGPRGLPGEMGRPGPPGPPGPAGNPGPSPNSPQGALYSLQPPTDKDNGDSRLASAIVDTVLAGVPGPRGPPGPPGPPGPRGPPGPPGTPGSQGLAGERGTVGPSGEPGVKGEEGEKAATAEGEGVQQLREALKILAERVLILEHMIGIHDPLASPEGGSGQDAALRANLKMKRGGAQPDGVLAALLGPDPGQKSVDQASSRK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q96A83"},
		"label":"coqa1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_54_human"},{"db":"eco","id":"ECO:0000306"},{"db":"intact","id":"EBI-2529362"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q96A83"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q96A83"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGAGSARGARGTAAAAAARGGGFLFSWILVSFACHLASTQGAPEDVDILQRLGLSWTKAGSPAPPGVIPFQSGFIFTQRARLQAPTGTVIPAALGTELALVLSLCSHRVNHAFLFAVRSQKRKLQLGLQFLPGKTVVHLGSRRSVAFDLDMHDGRWHHLALELRGRTVTLVTACGQRRVPVLLPFHRDPALDPGGSFLFGKMNPHAVQFEGALCQFSIYPVTQVAHNYCTHLRKQCGQADTYQSPLGPLFSQDSGRPFTFQSDLALLGLENLTTATPALGSLPAGRGPRGTVAPATPTKPQRTSPTNPHQHMAVGGPAQTPLLPAKLSASNALDPMLPASVGGSTRTPRPAAAQPSQKITATKIPKSLPTKPSAPSTSIVPIKSPHPTQKTAPSSFTKSALPTQKQVPPTSRPVPARVSRPAEKPIQRNPGMPRPPPPSTRPLPPTTSSSKKPIPTLARTEAKITSHASKPASARTSTHKPPPFTALSSSPAPTPGSTRSTRPPATMVPPTSGTSTPRTAPAVPTPGSAPTGSKKPIGSEASKKAGPKSSPRKPVPLRPGKAARDVPLSDLTTRPSPRQPQPSQQTTPALVLAPAQFLSSSPRPTSSGYSIFHLAGSTPFPLLMGPPGPKGDCGLPGPPGLPGLPGIPGARGPRGPPGPYGNPGLPGPPGAKGQKGDPGLSPGKAHDGAKGDMGLPGLSGNPGPPGRKGHKGYPGPAGHPGEQGQPGPEGSPGAKGYPGRQGLPGPVGDPGPKGSRGYIGLPGLFGLPGSDGERGLPGVPGKRGKMGMPGFPGVFGERGPPGLDGNPGELGLPGPPGVPGLIGDLGVLGPIGYPGPKGMKGLMGSVGEPGLKGDKGEQGVPGVSGDPGFQGDKGSQGLPGFPGARGKPGPLGKVGDKGSIGFPGPPGPEGFPGDIGPPGDNGPEGMKGKPGARGLPGPRGQLGPEGDEGPMGPPGAPGLEGQPGRKGFPGRPGLDGVKGEPGDPGRPGPVGEQGFMGFIGLVGEPGIVGEKGDRGMMGPPGVPGPKGSMGHPGMPGGMGTPGEPGPQGPPGSRGPPGMRGAKGRRGPRGPDGPAGEQGSRGLKGPPGPQGRPGRPGQQGVAGERGHLGSRGFPGIPGPSGPPGTKGLPGEPGPQGPQGPIGPPGEMGPKGPPGAVGEPGLPGEAGMKGDLGPLGTPGEQGLIGQRGEPGLEGDSGPMGPDGLKGDRGDPGPDGEHGEKGQEGLMGEDGPPGPPGVTGVRGPEGKSGKQGEKGRTGAKGAKGYQGQLGEMGVPGDPGPPGTPGPKGSRGSLGPTGAPGRMGAQGEPGLAGYDGHKGIVGPLGPPGPKGEKGEQGEDGKAEGPPGPPGDRGPVGDRGDRGEPGDPGYPGQEGVQGLRGKPGQQGQPGHPGPRGWPGPKGSKGAEGPKGKQGKAGAPGRRGVQGLQGLPGPRGVVGRQGLEGIAGPDGLPGRDGQAGQQGEQGDDGDPGPMGPAGKRGNPGVAGLPGAQGPPGFKGESGLPGQLGPPGKRGTEGRTGLPGNQGEPGSKGQPGDSGEMGFPGMAGLFGPKGPPGDIGFKGIQGPRGPPGLMGKEGIVGPLGILGPSGLPGPKGDKGSRGDWGLQGPRGPPGPRGRPGPPGPPGGPIQLQQDDLGAAFQTWMDTSGALRPESYSYPDRLVLDQGGEIFKTLHYLSNLIQSIKTPLGTKENPARVCRDLMDCEQKMVDGTYWVDPNLGCSSDTIEVSCNFTHGGQTCLKPITASKVEFAISRVQMNFLHLLSSEVTQHITIHCLNMTVWQEGTGQTPAKQAVRFRAWNGQIFEAGGQFRPEVSMDGCKVQDGRWHQTLFTFRTQDPQQLPIISVDNLPPASSGKQYRLEVGPACFL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q8IZC6"},
		"label":"cora1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_55_human"},{"db":"intact","id":"EBI-2529377"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q8IZC6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q8IZC6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MWNRYFVFYLLLLSAFTSQTVSGQRKKGPKSNLLARKSDVQGSICFIDIVFIVDSSESSKIALFDKQKDFVDSLSDKIFQLTPGRSLEYDIKLAALQFSSSVQIDPPFSSWKDLQTFKQKVKSMNLIGQGTFSYYAISNATRLLKREGRKDGVKVVLLMTDGIDHPKNPDVQSISEDARISGISFITIALSTVVNEAKLRLISGDSSSEPTLLLSDPTLVDKIQDRLDILFEKKCERKICECEKGDPGDPGPPGTHGNPGIKGERGPKGNPGNAQKGEAGERGPGGIPGYKGDKGERGECGKPGIKGDKGSPGPYGPKGPRGIQGITGPPGDPGPKGFQGNKGEPGPPGPYGSPGAPGIGQQGIKGERGQEGRPGAPGPIGVGEPGQPGPRGPEGVPGERGLPGEGFPGPKGEKGSEGPTGPQGLQGLSIKGEKGDIGPVGPQGPMGIPGIGSQGEQGIQGPIGPPGPQGPAGQGLPGSKGEVGQMGPTGPRGPVGIGVQGPKGEPGSIGLPGQPGVPGEDGAAGKKGEAGLPGARGPEGPPGKGQPGPKGDEGKKGSKGNQGQRGLPGPEGPKGEPGIMGPFGMPGTSIPGPPGPKGDRGGPGIPGFKGEPGLSIRGPKGVQGPRGPVGAPGLKGDGYPGVPGPRGLPGPPGPMGLRGVGDTGAKGEPGVRGPPGPSGPRGVGTQGPKGDTGQKGLPGPPGPPGYGSQGIKGEQGPQGFPGPKGTMGHGLPGQKGEHGERGDVGKKGDKGEIGEPGSPGKQGLQGPKGDLGLTKEEIIKLITEICGCGPKCKETPLELVFVIDSSESVGPENFQIIKNFVKTMADRVALDLATARIGIINYSHKVEKVANLKQFSSKDDFKLAVDNMQYLGEGTYTATALQAANDMFEDARPGVKKVALVITDGQTDSRDKEKLTEVVKNASDTNVEIFVIGVVKKNDPNFEIFHKEMNLIATDPEHVYQFDDFFTLQDTLKQKLFQKICEDFDSYLVQIFGSSSPQPGFGMSGEELSESTPEPQKEISESLSVTRDQDEDDKAPEPTWADDLPATTSSEATTTPRPLLSTPVDGAEDPRCLEALKPGNCGEYVVRWYYDKQVNSCARFWFSGCNGSGNRFNSEKECQETCIQG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q2UY09"},
		"label":"cosa1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_56_human"},{"db":"intact","id":"EBI-2529426"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q2UY09"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q2UY09"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MRGGVLLVLLLCVAAQCRQRGLFPAILNLASNAHISTNATCGEKGPEMFCKLVEHVPGRPVRNPQCRICDGNSANPRERHPISHAIDGTNNWWQSPSIQNGREYHWVTITLDLRQVFQVAYVIIKAANAPRPGNWILERSLDGTTFSPWQYYAVSDSECLSRYNITPRRGPPTYRADDEVICTSYYSRLVPLEHGEIHTSLINGRPSADDLSPKLLEFTSARYIRLRLQRIRTLNADLMTLSHREPKELDPIVTRRYYYSIKDISVGGMCICYGHASSCPWDETTKKLQCQCEHNTCGESCNRCCPGYHQQPWRPGTVSSGNTCEACNCHNKAKDCYYDESVAKQKKSLNTAGQFRGGGVCINCLQNTMGINCETCIDGYYRPHKVSPYEDEPCRPCNCDPVGSLSSVCIKDDLHSDLHNGKQPGQCPCKEGYTGEKCDRCQLGYKDYPTCVSCGCNPVGSASDEPCTGPCVCKENVEGKACDRCKPGFYNLKEKNPRGCSECFCFGVSDVCSSLSWPVGQVNSMSGWLVTDLISPRKIPSQQDALGGRHQVSINNTAVMQRLAPKYYWAAPEAYLGNKLTAFGGFLKYTVSYDIPVETVDSNLMSHADVIIKGNGLTLSTQAEGLSLQPYEEYLNVVRLVPENFQDFHSKRQIDRDQLMTVLANVTHLLIRANYNSAKMALYRLESVSLDIASSNAIDLVVAADVEHCECPQGYTGTSCESCLSGYYRVDGILFGGICQPCECHGHAAECNVHGVCIACAHNTTGVHCEQCLPGFYGEPSRGTPGDCQPCACPLTIASNNFSPTCHLNDGDEVVCDWCAPGYSGAWCERCADGYYGNPTVPGESCVPCDCSGNVDPSEAGHCDSVTGECLKCLGNTDGAHCERCADGFYGDAVTAKNCRACECHVKGSHSAVCHLETGLCDCKPNVTGQQCDQCLHGYYGLDSGHGCRPCNCSVAGSVSDGCTDEGQCHCVPGVAGKRCDRCAHGFYAYQDGSCTPCDCPHTQNTCDPETGECVCPPHTQGVKCEECEDGHWGYDAEVGCQACNCSLVGSTHHRCDVVTGHCQCKSKFGGRACDQCSLGYRDFPDCVPCDCDLRGTSGDACNLEQGLCGCVEETGACPCKENVFGPQCNECREGTFALRADNPLGCSPCFCSGLSHLCSELEDYVRTPVTLGSDQPLLRVVSQSNLRGTTEGVYYQAPDFLLDAATVRQHIRAEPFYWRLPQQFQGDQLMAYGGKLKYSVAFYSLDGVGTSNFEPQVLIKGGRIRKQVIYMDAPAPENGVRQEQEVAMRENFWKYFNSVSEKPVTREDFMSVLSDIEYILIKASYGQGLQQSRISDISMEVGRKAEKLHPEEEVASLLENCVCPPGTVGFSCQDCAPGYHRGKLPAGSDRGPRPLVAPCVPCSCNNHSDTCDPNTGKCLNCGDNTAGDHCDVCTSGYYGKVTGSASDCALCACPHSPPASFSPTCVLEGDHDFRCDACLLGYEGKHCERCSSSYYGNPQTPGGSCQKCDCNPHGSVHGDCDRTSGQCVCRLGASGLRCDECEPRHILMETDCVSCDDECVGVLLNDLDEIGDAVLSLNLTGIIPVPYGILSNLENTTKYLQESLLKENMQKDLGKIKLEGVAEETDNLQKKLTRMLASTQKVNRATERIFKESQDLAIAIERLQMSITEIMEKTTLNQTLDEDFLLPNSTLQNMQQNGTSLLEIMQIRDFTQLHQNATLELKAAEDLLSQIQENYQKPLEELEVLKEAASHVLSKHNNELKAAEALVREAEAKMQESNHLLLMVNANLREFSDKKLHVQEEQNLTSELIVQGRGLIDAAAAQTDAVQDALEHLEDHQDKLLLWSAKIRHHIDDLVMHMSQRNAVDLVYRAEDHAAEFQRLADVLYSGLENIRNVSLNATSAAYVHYNIQSLIEESEELARDAHRTVTETSLLSESLVSNGKAAVQRSSRFLKEGNNLSRKLPGIALELSELRNKTNRFQENAVEITRQTNESLLILRAIPKGIRDKGAKTKELATSASQSAVSTLRDVAGLSQELLNTSASLSRVNTTLRETHQLLQDSTMATLLAGRKVKDVEIQANLLFDRLKPLKMLEENLSRNLSEIKLLISQARKQAASIKVAVSADRDCIRAYQPQISSTNYNTLTLNVKTQEPDNLLFYLGSSTASDFLAVEMRRGRVAFLWDLGSGSTRLEFPDFPIDDNRWHSIHVARFGNIGSLSVKEMSSNQKSPTKTSKSPGTANVLDVNNSTLMFVGGLGGQIKKSPAVKVTHFKGCLGEAFLNGKSIGLWNYIEREGKCRGCFGSSQNEDPSFHFDGSGYSVVEKSLPATVTQIIMLFNTFSPNGLLLYLGSYGTKDFLSIELFRGRVKVMTDLGSGPITLLTDRRYNNGTWYKIAFQRNRKQGVLAVIDAYNTSNKETKQGETPGASSDLNRLDKDPIYVGGLPRSRVVRRGVTTKSFVGCIKNLEISRSTFDLLRNSYGVRKGCLLEPIRSVSFLKGGYIELPPKSLSPESEWLVTFATTNSSGIILAALGGDVEKRGDREEAHVPFFSVMLIGGNIEVHVNPGDGTGLRKALLHAPTGTCSDGQAHSISLVRNRRIITVQLDENNPVEMKLGTLVESRTINVSNLYVGGIPEGEGTSLLTMRRSFHGCIKNLIFNLELLDFNSAVGHEQVDLDTCWLSERPKLAPDAEDSKLLPEPRAFPEQCVVDAALEYVPGAHQFGLTQNSHFILPFNQSAVRKKLSVELSIRTFASSGLIYYMAHQNQADYAVLQLHGGRLHFMFDLGKGRTKVSHPALLSDGKWHTVKTDYVKRKGFITVDGRESPMVTVVGDGTMLDVEGLFYLGGLPSQYQARKIGNITHSIPACIGDVTVNSKQLDKDSPVSAFTVNRCYAVAQEGTYFDGSGYAALVKEGYKVQSDVNITLEFRTSSQNGVLLGISTAKVDAIGLELVDGKVLFHVNNGAGRITAAYEPKTATVLCDGKWHTLQANKSKHRITLIVDGNAVGAESPHTQSTSVDTNNPIYVGGYPAGVKQKCLRSQTSFRGCLRKLALIKSPQVQSFDFSRAFELHGVFLHSCPGTES",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P25391"},
		"label":"lama1_human"
	},
	{
		"object":"interactor",
		"sequence":"MRGSHRAAPALRPRGRLWPVLAVLAAAAAAGCAQAAMDECTDEGGRPQRCMPEFVNAAFNVTVVATNTCGTPPEEYCVQTGVTGVTKSCHLCDAGQPHLQHGAAFLTDYNNQADTTWWQSQTMLAGVQYPSSINLTLHLGKAFDITYVRLKFHTSRPESFAIYKRTREDGPWIPYQYYSGSCENTYSKANRGFIRTGGDEQQALCTDEFSDISPLTGGNVAFSTLEGRPSAYNFDNSPVLQEWVTATDIRVTLNRLNTFGDEVFNDPKVLKSYYYAISDFAVGGRCKCNGHASECMKNEFDKLVCNCKHNTYGVDCEKCLPFFNDRPWRRATAESASECLPCDCNGRSQECYFDPELYRSTGHGGHCTNCQDNTDGAHCERCRENFFRLGNNEACSSCHCSPVGSLSTQCDSYGRCSCKPGVMGDKCDRCQPGFHSLTEAGCRPCSCDPSGSIDECNIETGRCVCKDNVEGFNCERCKPGFFNLESSNPRGCTPCFCFGHSSVCTNAVGYSVYSISSTFQIDEDGWRAEQRDGSEASLEWSSERQDIAVISDSYFPRYFIAPAKFLGKQVLSYGQNLSFSFRVDRRDTRLSAEDLVLEGAGLRVSVPLIAQGNSYPSETTVKYVFRLHEATDYPWRPALTPFEFQKLLNNLTSIKIRGTYSERSAGYLDDVTLASARPGPGVPATWVESCTCPVGYGGQFCEMCLSGYRRETPNLGPYSPCVLCACNGHSETCDPETGVCNCRDNTAGPHCEKCSDGYYGDSTAGTSSDCQPCPCPGGSSCAVVPKTKEVVCTNCPTGTTGKRCELCDDGYFGDPLGRNGPVRLCRLCQCSDNIDPNAVGNCNRLTGECLKCIYNTAGFYCDRCKDGFFGNPLAPNPADKCKACNCNLYGTMKQQSSCNPVTGQCECLPHVTGQDCGACDPGFYNLQSGQGCERCDCHALGSTNGQCDIRTGQCECQPGITGQHCERCEVNHFGFGPEGCKPCDCHPEGSLSLQCKDDGRCECREGFVGNRCDQCEENYFYNRSWPGCQECPACYRLVKDKVADHRVKLQELESLIANLGTGDEMVTDQAFEDRLKEAEREVMDLLREAQDVKDVDQNLMDRLQRVNNTLSSQISRLQNIRNTIEETGNLAEQARAHVENTERLIEIASRELEKAKVAAANVSVTQPESTGDPNNMTLLAEEARKLAERHKQEADDIVRVAKTANDTSTEAYNLLLRTLAGENQTAFEIEELNRKYEQAKNISQDLEKQAARVHEEAKRAGDKAVEIYASVAQLSPLDSETLENEANNIKMEAENLEQLIDQKLKDYEDLREDMRGKELEVKNLLEKGKTEQQTADQLLARADAAKALAEEAAKKGRDTLQEANDILNNLKDFDRRVNDNKTAAEEALRKIPAINQTITEANEKTREAQQALGSAAADATEAKNKAHEAERIASAVQKNATSTKAEAERTFAEVTDLDNEVNNMLKQLQEAEKELKRKQDDADQDMMMAGMASQAAQEAEINARKAKNSVTSLLSIINDLLEQLGQLDTVDLNKLNEIEGTLNKAKDEMKVSDLDRKVSDLENEAKKQEAAIMDYNRDIEEIMKDIRNLEDIRKTLPSGCFNTPSIEKP",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P11047"},
		"label":"lamc1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"matrixdb","id":"MULT_1_human"},{"db":"intact","id":"EBI-2529702"},{"db":"reactome","id":"REACT_14571.1"}],
		"expansion":{"id":"17","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P25391"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P11047"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGLLQLLAFSFLALCRARVRAQEPEFSYGCAEGSCYPATGDLLIGRAQKLSVTSTCGLHKPEPYCIVSHLQEDKKCFICNSQDPYHETLNPDSHLIENVVTTFAPNRLKIWWQSENGVENVTIQLDLEAEFHFTHLIMTFKTFRPAAMLIERSSDFGKTWGVYRYFAYDCEASFPGISTGPMKKVDDIICDSRYSDIEPSTEGEVIFRALDPAFKIEDPYSPRIQNLLKITNLRIKFVKLHTLGDNLLDSRMEIREKYYYAVYDMVVRGNCFCYGHASECAPVDGFNEEVEGMVHGHCMCRHNTKGLNCELCMDFYHDLPWRPAEGRNSNACKKCNCNEHSISCHFDMAVYLATGNVSGGVCDDCQHNTMGRNCEQCKPFYYQHPERDIRDPNFCERCTCDPAGSQNEGICDSYTDFSTGLIAGQCRCKLNVEGEHCDVCKEGFYDLSSEDPFGCKSCACNPLGTIPGGNPCDSETGHCYCKRLVTGQHCDQCLPEHWGLSNDLDGCRPCDCDLGGALNNSCFAESGQCSCRPHMIGRQCNEVEPGYYFATLDHYLYEAEEANLGPGVSIVERQYIQDRIPSWTGAGFVRVPEGAYLEFFIDNIPYSMEYDILIRYEPQLPDHWEKAVITVQRPGRIPTSSRCGNTIPDDDNQVVSLSPGSRYVVLPRPVCFEKGTNYTVRLELPQYTSSDSDVESPYTLIDSLVLMPYCKSLDIFTVGGSGDGVVTNSAWETFQRYRCLENSRSVVKTPMTDVCRNIIFSISALLHQTGLACECDPQGSLSSVCDPNGGQCQCRPNVVGRTCNRCAPGTFGFGPSGCKPCECHLQGSVNAFCNPVTGQCHCFQGVYARQCDRCLPGHWGFPSCQPCQCNGHADDCDPVTGECLNCQDYTMGHNCERCLAGYYGDPIIGSGDHCRPCPCPDGPDSGRQFARSCYQDPVTLQLACVCDPGYIGSRCDDCASGYFGNPSEVGGSCQPCQCHNNIDTTDPEACDKETGRCLKCLYHTEGEHCQFCRFGYYGDALQQDCRKCVCNYLGTVQEHCNGSDCQCDKATGQCLCLPNVIGQNCDRCAPNTWQLASGTGCDPCNCNAAHSFGPSCNEFTGQCQCMPGFGGRTCSECQELFWGDPDVECRACDCDPRGIETPQCDQSTGQCVCVEGVEGPRCDKCTRGYSGVFPDCTPCHQCFALWDVIIAELTNRTHRFLEKAKALKISGVIGPYRETVDSVERKVSEIKDILAQSPAAEPLKNIGNLFEEAEKLIKDVTEMMAQVEVKLSDTTSQSNSTAKELDSLQTEAESLDNTVKELAEQLEFIKNSDIRGALDSITKYFQMSLEAEERVNASTTEPNSTVEQSALMRDRVEDVMMERESQFKEKQEEQARLLDELAGKLQSLDLSAAAEMTCGTPPGASCSETECGGPNCRTDEGERKCGGPGCGGLVTVAHNAWQKAMDLDQDVLSALAEVEQLSKMVSEAKLRADEAKQSAEDILLKTNATKEKMDKSNEELRNLIKQIRNFLTQDSADLDSIEAVANEVLKMEMPSTPQQLQNLTEDIRERVESLSQVEVILQHSAADIARAEMLLEEAKRASKSATDVKVTADMVKEALEEAEKAQVAAEKAIKQADEDIQGTQNLLTSIESETAASEETLFNASQRISELERNVEELKRKAAQNSGEAEYIEKVVYTVKQSAEDVKKTLDGELDEKYKKVENLIAKKTEESADARRKAEMLQNEAKTLLAQANSKLQLLKDLERKYEDNQRYLEDKAQELARLEGEVRSLLKDISQKVAVYSTCL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P07942"},
		"label":"lamb1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"matrixdb","id":"MULT_1_human"},{"db":"intact","id":"EBI-2529702"},{"db":"reactome","id":"REACT_14571.1"}],
		"expansion":{"id":"17","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P25391"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P07942"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MPGAAGVLLLLLLSGGLGGVQAQRPQQQRQSQAHQQRGLFPAVLNLASNALITTNATCGEKGPEMYCKLVEHVPGQPVRNPQCRICNQNSSNPNQRHPITNAIDGKNTWWQSPSIKNGIEYHYVTITLDLQQVFQIAYVIVKAANSPRPGNWILERSLDDVEYKPWQYHAVTDTECLTLYNIYPRTGPPSYAKDDEVICTSFYSKIHPLENGEIHISLINGRPSADDPSPELLEFTSARYIRLRFQRIRTLNADLMMFAHKDPREIDPIVTRRYYYSVKDISVGGMCICYGHARACPLDPATNKSRCECEHNTCGDSCDQCCPGFHQKPWRAGTFLTKTECEACNCHGKAEECYYDENVARRNLSLNIRGKYIGGGVCINCTQNTAGINCETCTDGFFRPKGVSPNYPRPCQPCHCDPIGSLNEVCVKDEKHARRGLAPGSCHCKTGFGGVSCDRCARGYTGYPDCKACNCSGLGSKNEDPCFGPCICKENVEGGDCSRCKSGFFNLQEDNWKGCDECFCSGVSNRCQSSYWTYGKIQDMSGWYLTDLPGRIRVAPQQDDLDSPQQISISNAEARQALPHSYYWSAPAPYLGNKLPAVGGQLTFTISYDLEEEEEDTERVLQLMIILEGNDLSISTAQDEVYLHPSEEHTNVLLLKEESFTIHGTHFPVRRKEFMTVLANLKRVLLQITYSFGMDAIFRLSSVNLESAVSYPTDGSIAAAVEVCQCPPGYTGSSCESCWPRHRRVNGTIFGGICEPCQCFGHAESCDDVTGECLNCKDHTGGPYCDKCLPGFYGEPTKGTSEDCQPCACPLNIPSNNFSPTCHLDRSLGLICDGCPVGYTGPRCERCAEGYFGQPSVPGGSCQPCQCNDNLDFSIPGSCDSLSGSCLICKPGTTGRYCELCADGYFGDAVDAKNCQPCRCNAGGSFSEVCHSQTGQCECRANVQGQRCDKCKAGTFGLQSARGCVPCNCNSFGSKSFDCEESGQCWCQPGVTGKKCDRCAHGYFNFQEGGCTACECSHLGNNCDPKTGRCICPPNTIGEKCSKCAPNTWGHSITTGCKACNCSTVGSLDFQCNVNTGQCNCHPKFSGAKCTECSRGHWNYPRCNLCDCFLPGTDATTCDSETKKCSCSDQTGQCTCKVNVEGIHCDRCRPGKFGLDAKNPLGCSSCYCFGTTTQCSEAKGLIRTWVTLKAEQTILPLVDEALQHTTTKGIVFQHPEIVAHMDLMREDLHLEPFYWKLPEQFEGKKLMAYGGKLKYAIYFEAREETGFSTYNPQVIIRGGTPTHARIIVRHMAAPLIGQLTRHEIEMTEKEWKYYGDDPRVHRTVTREDFLDILYDIHYILIKATYGNFMRQSRISEISMEVAEQGRGTTMTPPADLIEKCDCPLGYSGLSCEACLPGFYRLRSQPGGRTPGPTLGTCVPCQCNGHSSLCDPETSICQNCQHHTAGDFCERCALGYYGIVKGLPNDCQQCACPLISSSNNFSPSCVAEGLDDYRCTACPRGYEGQYCERCAPGYTGSPGNPGGSCQECECDPYGSLPVPCDPVTGFCTCRPGATGRKCDGCKHWHAREGWECVFCGDECTGLLLGDLARLEQMVMSINLTGPLPAPYKMLYGLENMTQELKHLLSPQRAPERLIQLAEGNLNTLVTEMNELLTRATKVTADGEQTGQDAERTNTRAKSLGEFIKELARDAEAVNEKAIKLNETLGTRDEAFERNLEGLQKEIDQMIKELRRKNLETQKEIAEDELVAAEALLKKVKKLFGESRGENEEMEKDLREKLADYKNKVDDAWDLLREATDKIREANRLFAVNQKNMTALEKKKEAVESGKRQIENTLKEGNDILDEANRLADEINSIIDYVEDIQTKLPPMSEELNDKIDDLSQEIKDRKLAEKVSQAESHAAQLNDSSAVLDGILDEAKNISFNATAAFKAYSNIKDYIDEAEKVAKEAKDLAHEATKLATGPRGLLKEDAKGCLQKSFRILNEAKKLANDVKENEDHLNGLKTRIENADARNGDLLRTLNDTLGKLSAIPNDTAAKLQAVKDKARQANDTAKDVLAQITELHQNLDGLKKNYNKLADSVAKTNAVVKDPSKNKIIADADATVKNLEQEADRLIDKLKPIKELEDNLKKNISEIKELINQARKQANSIKVSVSSGGDCIRTYKPEIKKGSYNNIVVNVKTAVADNLLFYLGSAKFIDFLAIEMRKGKVSFLWDVGSGVGRVEYPDLTIDDSYWYRIVASRTGRNGTISVRALDGPKASIVPSTHHSTSPPGYTILDVDANAMLFVGGLTGKLKKADAVRVITFTGCMGETYFDNKPIGLWNFREKEGDCKGCTVSPQVEDSEGTIQFDGEGYALVSRPIRWYPNISTVMFKFRTFSSSALLMYLATRDLRDFMSVELTDGHIKVSYDLGSGMASVVSNQNHNDGKWKSFTLSRIQKQANISIVDIDTNQEENIATSSSGNNFGLDLKADDKIYFGGLPTLRNLSMKARPEVNLKKYSGCLKDIEISRTPYNILSSPDYVGVTKGCSLENVYTVSFPKPGFVELSPVPIDVGTEINLSFSTKNESGIILLGSGGTPAPPRRKRRQTGQAYYAILLNRGRLEVHLSTGARTMRKIVIRPEPNLFHDGREHSVHVERTRGIFTVQVDENRRYMQNLTVEQPIEVKKLFVGGAPPEFQPSPLRNIPPFEGCIWNLVINSVPMDFARPVSFKNADIGRCAHQKLREDEDGAAPAEIVIQPEPVPTPAFPTPTPVLTHGPCAAESEPALLIGSKQFGLSRNSHIAIAFDDTKVKNRLTIELEVRTEAESGLLFYMARINHADFATVQLRNGLPYFSYDLGSGDTHTMIPTKINDGQWHKIKIMRSKQEGILYVDGASNRTISPKKADILDVVGMLYVGGLPINYTTRRIGPVTYSIDGCVRNLHMAEAPADLEQPTSSFHVGTCFANAQRGTYFDGTGFAKAVGGFKVGLDLLVEFEFRTTTTTGVLLGISSQKMDGMGIEMIDEKLMFHVDNGAGRFTAVYDAGVPGHLCDGQWHKVTANKIKHRIELTVDGNQVEAQSPNPASTSADTNDPVFVGGFPDDLKQFGLTTSIPFRGCIRSLKLTKGTGKPLEVNFAKALELRGVQPVSCPAN",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P24043"},
		"label":"lama2_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"matrixdb","id":"MULT_27_human"},{"db":"intact","id":"EBI-2529716"},{"db":"reactome","id":"REACT_13824.1"}],
		"expansion":{"id":"18","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P24043"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P11047"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"matrixdb","id":"MULT_27_human"},{"db":"intact","id":"EBI-2529716"},{"db":"reactome","id":"REACT_13824.1"}],
		"expansion":{"id":"18","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P24043"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P07942"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"matrixdb","id":"MULT_28_human"},{"db":"intact","id":"EBI-2529791"}],
		"expansion":{"id":"19","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P25391"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P11047"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MELTSRERGRGQPLPWELRLGLLLSVLAATLAQAPAPDVPGCSRGSCYPATGDLLVGRADRLTASSTCGLNGPQPYCIVSHLQDEKKCFLCDSRRPFSARDNPHSHRIQNVVTSFAPQRRAAWWQSENGIPAVTIQLDLEAEFHFTHLIMTFKTFRPAAMLVERSADFGRTWHVYRYFSYDCGADFPGVPLAPPRHWDDVVCESRYSEIEPSTEGEVIYRVLDPAIPIPDPYSSRIQNLLKITNLRVNLTRLHTLGDNLLDPRREIREKYYYALYELVVRGNCFCYGHASECAPAPGAPAHAEGMVHGACICKHNTRGLNCEQCQDFYRDLPWRPAEDGHSHACRKCECHGHTHSCHFDMAVYLASGNVSGGVCDGCQHNTAGRHCELCRPFFYRDPTKDLRDPAVCRSCDCDPMGSQDGGRCDSHDDPALGLVSGQCRCKEHVVGTRCQQCRDGFFGLSISDRLGCRRCQCNARGTVPGSTPCDPNSGSCYCKRLVTGRGCDRCLPGHWGLSHDLLGCRPCDCDVGGALDPQCDEGTGQCHCRQHMVGRRCEQVQPGYFRPFLDHLIWEAEDTRGQVLDVVERLVTPGETPSWTGSGFVRLQEGQTLEFLVASVPKAMDYDLLLRLEPQVPEQWAELELIVQRPGPVPAHSLCGHLVPKDDRIQGTLQPHARYLIFPNPVCLEPGISYKLHLKLVRTGGSAQPETPYSGPGLLIDSLVLLPRVLVLEMFSGGDAAALERQATFERYQCHEEGLVPSKTSPSEACAPLLISLSTLIYNGALPCQCNPQGSLSSECNPHGGQCLCKPGVVGRRCDLCAPGYYGFGPTGCQACQCSHEGALSSLCEKTSGQCLCRTGAFGLRCDRCQRGQWGFPSCRPCVCNGHADECNTHTGACLGCRDHTGGEHCERCIAGFHGDPRLPYGGQCRPCPCPEGPGSQRHFATSCHQDEYSQQIVCHCRAGYTGLRCEACAPGHFGDPSRPGGRCQLCECSGNIDPMDPDACDPHTGQCLRCLHHTEGPHCAHCKPGFHGQAARQSCHRCTCNLLGTNPQQCPSPDQCHCDPSSGQCPCLPNVQGPSCDRCAPNFWNLTSGHGCQPCACHPSRARGPTCNEFTGQCHCRAGFGGRTCSECQELHWGDPGLQCHACDCDSRGIDTPQCHRFTGHCSCRPGVSGVRCDQCARGFSGIFPACHPCHACFGDWDRVVQDLAARTQRLEQRAQELQQTGVLGAFESSFWHMQEKLGIVQGIVGARNTSAASTAQLVEATEELRREIGEATEHLTQLEADLTDVQDENFNANHALSGLERDRLALNLTLRQLDQHLDLLKHSNFLGAYDSIRHAHSQSAEAERRANTSALAVPSPVSNSASARHRTEALMDAQKEDFNSKHMANQRALGKLSAHTHTLSLTDINELVCGAPGDAPCATSPCGGAGCRDEDGQPRCGGLSCNGAAATADLALGRARHTQAELQRALAEGGSILSRVAETRRQASEAQQRAQAALDKANASRGQVEQANQELQELIQSVKDFLNQEGADPDSIEMVATRVLELSIPASAEQIQHLAGAIAERVRSLADVDAILARTVGDVRRAEQLLQDARRARSWAEDEKQKAETVQAALEEAQRAQGIAQGAIRGAVADTRDTEQTLYQVQERMAGAERALSSAGERARQLDALLEALKLKRAGNSLAASTAEETAGSAQGRAQEAEQLLRGPLGDQYQTVKALAERKAQGVLAAQARAEQLRDEARDLLQAAQDKLQRLQELEGTYEENERALESKAAQLDGLEARMRSVLQAINLQVQIYNTCQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P55268"},
		"label":"lamb2_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"matrixdb","id":"MULT_28_human"},{"db":"intact","id":"EBI-2529791"}],
		"expansion":{"id":"19","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P25391"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P55268"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"matrixdb","id":"MULT_29_human"},{"db":"intact","id":"EBI-2529805"}],
		"expansion":{"id":"20","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P24043"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P55268"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"matrixdb","id":"MULT_29_human"},{"db":"intact","id":"EBI-2529805"}],
		"expansion":{"id":"20","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P24043"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P11047"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAAAARPRGRALGPVLPPTPLLLLVLRVLPACGATARDPGAAAGLSLHPTYFNLAEAARIWATATCGERGPGEGRPQPELYCKLVGGPTAPGSGHTIQGQFCDYCNSEDPRKAHPVTNAIDGSERWWQSPPLSSGTQYNRVNLTLDLGQLFHVAYILIKFANSPRPDLWVLERSVDFGSTYSPWQYFAHSKVDCLKEFGREANMAVTRDDDVLCVTEYSRIVPLENGEVVVSLINGRPGAKNFTFSHTLREFTKATNIRLRFLRTNTLLGHLISKAQRDPTVTRRYYYSIKDISIGGQCVCNGHAEVCNINNPEKLFRCECQHHTCGETCDRCCTGYNQRRWRPAAWEQSHECEACNCHGHASNCYYDPDVERQQASLNTQGIYAGGGVCINCQHNTAGVNCEQCAKGYYRPYGVPVDAPDGCIPCSCDPEHADGCEQGSGRCHCKPNFHGDNCEKCAIGYYNFPFCLRIPIFPVSTPSSEDPVAGDIKGCDCNLEGVLPEICDAHGRCLCRPGVEGPRCDTCRSGFYSFPICQACWCSALGSYQMPCSSVTGQCECRPGVTGQRCDRCLSGAYDFPHCQGSSSACDPAGTINSNLGYCQCKLHVEGPTCSRCKLLYWNLDKENPSGCSECKCHKAGTVSGTGECRQGDGDCHCKSHVGGDSCDTCEDGYFALEKSNYFGCQGCQCDIGGALSSMCSGPSGVCQCREHVVGKVCQRPENNYYFPDLHHMKYEIEDGSTPNGRDLRFGFDPLAFPEFSWRGYAQMTSVQNDVRITLNVGKSSGSLFRVILRYVNPGTEAVSGHITIYPSWGAAQSKEIIFLPSKEPAFVTVPGNGFADPFSITPGIWVACIKAEGVLLDYLVLLPRDYYEASVLQLPVTEPCAYAGPPQENCLLYQHLPVTRFPCTLACEARHFLLDGEPRPVAVRQPTPAHPVMVDLSGREVELHLRLRIPQVGHYVVVVEYSTEAAQLFVVDVNVKSSGSVLAGQVNIYSCNYSVLCRSAVIDHMSRIAMYELLADADIQLKGHMARFLLHQVCIIPIEEFSAEYVRPQVHCIASYGRFVNQSATCVSLAHETPPTALILDVLSGRPFPHLPQQSSPSVDVLPGVTLKAPQNQVTLRGRVPHLGRYVFVIHFYQAAHPTFPAQVSVDGGWPRAGSFHASFCPHVLGCRDQVIAEGQIEFDISEPEVAATVKVPEGKSLVLVRVLVVPAENYDYQILHKKSMDKSLEFITNCGKNSFYLDPQTASRFCKNSARSLVAFYHKGALPCECHPTGATGPHCSPEGGQCPCQPNVIGRQCTRCATGHYGFPRCKPCSCGRRLCEEMTGQCRCPPRTVRPQCEVCETHSFSFHPMAGCEGCNCSRRGTIEAAMPECDRDSGQCRCKPRITGRQCDRCASGFYRFPECVPCNCNRDGTEPGVCDPGTGACLCKENVEGTECNVCREGSFHLDPANLKGCTSCFCFGVNNQCHSSHKRRTKFVDMLGWHLETADRVDIPVSFNPGSNSMVADLQELPATIHSASWVAPTSYLGDKVSSYGGYLTYQAKSFGLPGDMVLLEKKPDVQLTGQHMSIIYEETNTPRPDRLHHGRVHVVEGNFRHASSRAPVSREELMTVLSRLADVRIQGLYFTETQRLTLSEVGLEEASDTGSGRIALAVEICACPPAYAGDSCQGCSPGYYRDHKGLYTGRCVPCNCNGHSNQCQDGSGICVNCQHNTAGEHCERCQEGYYGNAVHGSCRACPCPHTNSFATGCVVNGGDVRCSCKAGYTGTQCERCAPGYFGNPQKFGGSCQPCSCNSNGQLGSCHPLTGDCINQEPKDSSPAEECDDCDSCVMTLLNDLATMGEQLRLVKSQLQGLSASAGLLEQMRHMETQAKDLRNQLLNYRSAISNHGSKIEGLERELTDLNQEFETLQEKAQVNSRKAQTLNNNVNRATQSAKELDVKIKNVIRNVHILLKQISGTDGEGNNVPSGDFSREWAEAQRMMRELRNRNFGKHLREAEADKRESQLLLNRIRTWQKTHQGENNGLANSIRDSLNEYEAKLSDLRARLQEAAAQAKQANGLNQENERALGAIQRQVKEINSLQSDFTKYLTTADSSLLQTNIALQLMEKSQKEYEKLAASLNEARQELSDKVRELSRSAGKTSLVEEAEKHARSLQELAKQLEEIKRNASGDELVRCAVDAATAYENILNAIKAAEDAANRAASASESALQTVIKEDLPRKAKTLSSNSDKLLNEAKMTQKKLKQEVSPALNNLQQTLNIVTVQKEVIDTNLTTLRDGLHGIQRGDIDAMISSAKSMVRKANDITDEVLDGLNPIQTDVERIKDTYGRTQNEDFKKALTDADNSVNKLTNKLPDLWRKIESINQQLLPLGNISDNMDRIRELIQQARDAASKVAVPMRFNGKSGVEVRLPNDLEDLKGYTSLSLFLQRPNSRENGGTENMFVMYLGNKDASRDYIGMAVVDGQLTCVYNLGDREAELQVDQILTKSETKEAVMDRVKFQRIYQFARLNYTKGATSSKPETPGVYDMDGRNSNTLLNLDPENVVFYVGGYPPDFKLPSRLSFPPYKGCIELDDLNENVLSLYNFKKTFNLNTTEVEPCRRRKEESDKNYFEGTGYARVPTQPHAPIPTFGQTIQTTVDRGLLFFAENGDRFISLNIEDGKLMVRYKLNSELPKERGVGDAINNGRDHSIQIKIGKLQKRMWINVDVQNTIIDGEVFDFSTYYLGGIPIAIRERFNISTPAFRGCMKNLKKTSGVVRLNDTVGVTKKCSEDWKLVRSASFSRGGQLSFTDLGLPPTDHLQASFGFQTFQPSGILLDHQTWTRNLQVTLEDGYIELSTSDSGSPIFKSPQTYMDGLLHYVSVISDNSGLRLLIDDQLLRNSKRLKHISSSRQSLRLGGSNFEGCISNVFVQRLSLSPEVLDLTSNSLKRDVSLGGCSLNKPPFLMLLKGSTRFNKTKTFRINQLLQDTPVASPRSVKVWQDACSPLPKTQANHGALQFGDIPTSHLLFKLPQELLKPRSQFAVDMQTTSSRGLVFHTGTKNSFMALYLSKGRLVFALGTDGKKLRIKSKEKCNDGKWHTVVFGHDGEKGRLVVDGLRAREGSLPGNSTISIRAPVYLGSPPSGKPKSLPTNSFVGCLKNFQLDSKPLYTPSSSFGVSSCLGGPLEKGIYFSEEGGHVVLAHSVLLGPEFKLVFSIRPRSLTGILIHIGSQPGKHLCVYLEAGKVTASMDSGAGGTSTSVTPKQSLCDGQWHSVAVTIKQHILHLELDTDSSYTAGQIPFPPASTQEPLHLGGAPANLTTLRIPVWKSFFGCLRNIHVNHIPVPVTEALEVQGPVSLNGCPDQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q16787"},
		"label":"lama3_human"
	},
	{
		"object":"interactor",
		"sequence":"MPALWLGCCLCFSLLLPAARATSRREVCDCNGKSRQCIFDRELHRQTGNGFRCLNCNDNTDGIHCEKCKNGFYRHRERDRCLPCNCNSKGSLSARCDNSGRCSCKPGVTGARCDRCLPGFHMLTDAGCTQDQRLLDSKCDCDPAGIAGPCDAGRCVCKPAVTGERCDRCRSGYYNLDGGNPEGCTQCFCYGHSASCRSSAEYSVHKITSTFHQDVDGWKAVQRNGSPAKLQWSQRHQDVFSSAQRLDPVYFVAPAKFLGNQQVSYGQSLSFDYRVDRGGRHPSAHDVILEGAGLRITAPLMPLGKTLPCGLTKTYTFRLNEHPSNNWSPQLSYFEYRRLLRNLTALRIRATYGEYSTGYIDNVTLISARPVSGAPAPWVEQCICPVGYKGQFCQDCASGYKRDSARLGPFGTCIPCNCQGGGACDPDTGDCYSGDENPDIECADCPIGFYNDPHDPRSCKPCPCHNGFSCSVMPETEEVVCNNCPPGVTGARCELCADGYFGDPFGEHGPVRPCQPCQCNNNVDPSASGNCDRLTGRCLKCIHNTAGIYCDQCKAGYFGDPLAPNPADKCRACNCNPMGSEPVGCRSDGTCVCKPGFGGPNCEHGAFSCPACYNQVKIQMDQFMQQLQRMEALISKAQGGDGVVPDTELEGRMQQAEQALQDILRDAQISEGASRSLGLQLAKVRSQENSYQSRLDDLKMTVERVRALGSQYQNRVRDTHRLITQMQLSLAESEASLGNTNIPASDHYVGPNGFKSLAQEATRLAESHVESASNMEQLTRETEDYSKQALSLVRKALHEGVGSGSGSPDGAVVQGLVEKLEKTKSLAQQLTREATQAEIEADRSYQHSLRLLDSVSRLQGVSDQSFQVEEAKRIKQKADSLSSLVTRHMDEFKRTQKNLGNWKEEAQQLLQNGKSGREKSDQLLSRANLAKSRAQEALSMGNATFYEVESILKNLREFDLQVDNRKAEAEEAMKRLSYISQKVSDASDKTQQAERALGSAAADAQRAKNGAGEALEISSEIEQEIGSLNLEANVTADGALAMEKGLASLKSEMREVEGELERKELEFDTNMDAVQMVITEAQKVDTRAKNAGVTIQDTLNTLDGLLHLMDQPLSVDEEGLVLLEQKLSRAKTQINSQLRPMMSELEERARQQRGHLHLLETSIDGILADVKNLENIRDNLPPGCYNTQALEQQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q13753"},
		"label":"lamc2_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_20843.1"},{"db":"intact","id":"EBI-2529819"},{"db":"matrixdb","id":"MULT_30_human"}],
		"expansion":{"id":"21","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q16787"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q13753"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MRPFFLLCFALPGLLHAQQACSRGACYPPVGDLLVGRTRFLRASSTCGLTKPETYCTQYGEWQMKCCKCDSRQPHNYYSHRVENVASSSGPMRWWQSQNDVNPVSLQLDLDRRFQLQEVMMEFQGPMPAGMLIERSSDFGKTWRVYQYLAADCTSTFPRVRQGRPQSWQDVRCQSLPQRPNARLNGGKVQLNLMDLVSGIPATQSQKIQEVGEITNLRVNFTRLAPVPQRGYHPPSAYYAVSQLRLQGSCFCHGHADRCAPKPGASAGPSTAVQVHDVCVCQHNTAGPNCERCAPFYNNRPWRPAEGQDAHECQRCDCNGHSETCHFDPAVFAASQGAYGGVCDNCRDHTEGKNCERCQLHYFRNRRPGASIQETCISCECDPDGAVPGAPCDPVTGQCVCKEHVQGERCDLCKPGFTGLTYANPQGCHRCDCNILGSRRDMPCDEESGRCLCLPNVVGPKCDQCAPYHWKLASGQGCEPCACDPHNSLSPQCNQFTGQCPCREGFGGLMCSAAAIRQCPDRTYGDVATGCRACDCDFRGTEGPGCDKASGRCLCRPGLTGPRCDQCQRGYCNRYPVCVACHPCFQTYDADLREQALRFGRLRNATASLWSGPGLEDRGLASRILDAKSKIEQIRAVLSSPAVTEQEVAQVASAILSLRRTLQGLQLDLPLEEETLSLPRDLESLDRSFNGLLTMYQRKREQFEKISSADPSGAFRMLSTAYEQSAQAAQQVSDSSRLLDQLRDSRREAERLVRQAGGGGGTGSPKLVALRLEMSSLPDLTPTFNKLCGNSRQMACTPISCPGELCPQDNGTACGSRCRGVLPRAGGAFLMAGQVAEQLRGFNAQLQRTRQMIRAAEESASQIQSSAQRLETQVSASRSQMEEDVRRTRLLIQQVRDFLTDPDTDAATIQEVSEAVLALWLPTDSATVLQKMNEIQAIAARLPNVDLVLSQTKQDIARARRLQAEAEEARSRAHAVEGQVEDVVGNLRQGTVALQEAQDTMQGTSRSLRLIQDRVAEVQQVLRPAEKLVTSMTKQLGDFWTRMEELRHQARQQGAEAVQAQQLAEGASEQALSAQEGFERIKQKYAELKDRLGQSSMLGEQGARIQSVKTEAEELFGETMEMMDRMKDMELELLRGSQAIMLRSADLTGLEKRVEQIRDHINGRVLYYATCK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q13751"},
		"label":"lamb3_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_20843.1"},{"db":"intact","id":"EBI-2529819"},{"db":"matrixdb","id":"MULT_30_human"}],
		"expansion":{"id":"21","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q16787"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q13751"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"matrixdb","id":"MULT_31_human"},{"db":"intact","id":"EBI-2529903"}],
		"expansion":{"id":"22","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q16787"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P07942"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"matrixdb","id":"MULT_31_human"},{"db":"intact","id":"EBI-2529903"}],
		"expansion":{"id":"22","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q16787"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P11047"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"matrixdb","id":"MULT_32_human"},{"db":"intact","id":"EBI-2529917"}],
		"expansion":{"id":"23","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q16787"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P11047"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"matrixdb","id":"MULT_32_human"},{"db":"intact","id":"EBI-2529917"}],
		"expansion":{"id":"23","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q16787"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P55268"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MALSSAWRSVLPLWLLWSAACSRAASGDDNAFPFDIEGSSAVGRQDPPETSEPRVALGRLPPAAEKCNAGFFHTLSGECVPCDCNGNSNECLDGSGYCVHCQRNTTGEHCEKCLDGYIGDSIRGAPQFCQPCPCPLPHLANFAESCYRKNGAVRCICNENYAGPNCERCAPGYYGNPLLIGSTCKKCDCSGNSDPNLIFEDCDEVTGQCRNCLRNTTGFKCERCAPGYYGDARIAKNCAVCNCGGGPCDSVTGECLEEGFEPPTGMDCPTISCDKCVWDLTDALRLAALSIEEGKSGVLSVSSGAAAHRHVNEINATIYLLKTKLSERENQYALRKIQINNAENTMKSLLSDVEELVEKENQASRKGQLVQKESMDTINHASQLVEQAHDMRDKIQEINNKMLYYGEEHELSPKEISEKLVLAQKMLEEIRSRQPFFTQRELVDEEADEAYELLSQAESWQRLHNETRTLFPVVLEQLDDYNAKLSDLQEALDQALNYVRDAEDMNRATAARQRDHEKQQERVREQMEVVNMSLSTSADSLTTPRLTLSELDDIIKNASGIYAEIDGAKSELQVKLSNLSNLSHDLVQEAIDHAQDLQQEANELSRKLHSSDMNGLVQKALDASNVYENIVNYVSEANETAEFALNTTDRIYDAVSGIDTQIIYHKDESENLLNQARELQAKAESSSDEAVADTSRRVGGALARKSALKTRLSDAVKQLQAAERGDAQQRLGQSRLITEEANRTTMEVQQATAPMANNLTNWSQNLQHFDSSAYNTAVNSARDAVRNLTEVVPQLLDQLRTVEQKRPASNVSASIQRIRELIAQTRSVASKIQVSMMFDGQSAVEVHSRTSMDDLKAFTSLSLYMKPPVKRPELTETADQFILYLGSKNAKKEYMGLAIKNDNLVYVYNLGTKDVEIPLDSKPVSSWPAYFSIVKIERVGKHGKVFLTVPSLSSTAEEKFIKKGEFSGDDSLLDLDPEDTVFYVGGVPSNFKLPTSLNLPGFVGCLELATLNNDVISLYNFKHIYNMDPSTSVPCARDKLAFTQSRAASYFFDGSGYAVVRDITRRGKFGQVTRFDIEVRTPADNGLILLMVNGSMFFRLEMRNGYLHVFYDFGFSGGPVHLEDTLKKAQINDAKYHEISIIYHNDKKMILVVDRRHVKSMDNEKMKIPFTDIYIGGAPPEILQSRALRAHLPLDINFRGCMKGFQFQKKDFNLLEQTETLGVGYGCPEDSLISRRAYFNGQSFIASIQKISFFDGFEGGFNFRTLQPNGLLFYYASGSDVFSISLDNGTVIMDVKGIKVQSVDKQYNDGLSHFVISSVSPTRYELIVDKSRVGSKNPTKGKIEQTQASEKKFYFGGSPISAQYANFTGCISNAYFTRVDRDVEVEDFQRYTEKVHTSLYECPIESSPLFLLHKKGKNLSKPKASQNKKGGKSKDAPSWDPVALKLPERNTPRNSHCHLSNSPRAIEHAYQYGGTANSRQEFEHLKGDFGAKSQFSIRLRTRSSHGMIFYVSDQEENDFMTLFLAHGRLVYMFNVGHKKLKIRSQEKYNDGLWHDVIFIRERSSGRLVIDGLRVLEESLPPTEATWKIKGPIYLGGVAPGKAVKNVQINSIYSFSGCLSNLQLNGASITSASQTFSVTPCFEGPMETGTYFSTEGGYVVLDESFNIGLKFEIAFEVRPRSSSGTLVHGHSVNGEYLNVHMKNGQVIVKVNNGIRDFSTSVTPKQSLCDGRWHRITVIRDSNVVQLDVDSEVNHVVGPLNPKPIDHREPVFVGGVPESLLTPRLAPSKPFTGCIRHFVIDGHPVSFSKAALVSGAVSINSCPAA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q16363"},
		"label":"lama4_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"matrixdb","id":"MULT_33_human"},{"db":"intact","id":"EBI-2529931"}],
		"expansion":{"id":"24","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q16363"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P11047"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"matrixdb","id":"MULT_33_human"},{"db":"intact","id":"EBI-2529931"}],
		"expansion":{"id":"24","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q16363"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P07942"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"matrixdb","id":"MULT_34_human"},{"db":"intact","id":"EBI-2529945"}],
		"expansion":{"id":"25","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q16363"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P55268"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"matrixdb","id":"MULT_34_human"},{"db":"intact","id":"EBI-2529945"}],
		"expansion":{"id":"25","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q16363"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P11047"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAKRLCAGSALCVRGPRGPAPLLLVGLALLGAARAREEAGGGFSLHPPYFNLAEGARIAASATCGEEAPARGSPRPTEDLYCKLVGGPVAGGDPNQTIRGQYCDICTAANSNKAHPASNAIDGTERWWQSPPLSRGLEYNEVNVTLDLGQVFHVAYVLIKFANSPRPDLWVLERSMDFGRTYQPWQFFASSKRDCLERFGPQTLERITRDDAAICTTEYSRIVPLENGEIVVSLVNGRPGAMNFSYSPLLREFTKATNVRLRFLRTNTLLGHLMGKALRDPTVTRRYYYSIKDISIGGRCVCHGHADACDAKDPTDPFRLQCTCQHNTCGGTCDRCCPGFNQQPWKPATANSANECQSCNCYGHATDCYYDPEVDRRRASQSLDGTYQGGGVCIDCQHHTTGVNCERCLPGFYRSPNHPLDSPHVCRRCNCESDFTDGTCEDLTGRCYCRPNFSGERCDVCAEGFTGFPSCYPTPSSSNDTREQVLPAGQIVNCDCSAAGTQGNACRKDPRVGRCLCKPNFQGTHCELCAPGFYGPGCQPCQCSSPGVADDRCDPDTGQCRCRVGFEGATCDRCAPGYFHFPLCQLCGCSPAGTLPEGCDEAGRCLCQPEFAGPHCDRCRPGYHGFPNCQACTCDPRGALDQLCGAGGLCRCRPGYTGTACQECSPGFHGFPSCVPCHCSAEGSLHAACDPRSGQCSCRPRVTGLRCDTCVPGAYNFPYCEAGSCHPAGLAPVDPALPEAQVPCMCRAHVEGPSCDRCKPGFWGLSPSNPEGCTRCSCDLRGTLGGVAECQPGTGQCFCKPHVCGQACASCKDGFFGLDQADYFGCRSCRCDIGGALGQSCEPRTGVCRCRPNTQGPTCSEPARDHYLPDLHHLRLELEEAATPEGHAVRFGFNPLEFENFSWRGYAQMAPVQPRIVARLNLTSPDLFWLVFRYVNRGAMSVSGRVSVREEGRSATCANCTAQSQPVAFPPSTEPAFITVPQRGFGEPFVLNPGTWALRVEAEGVLLDYVVLLPSAYYEAALLQLRVTEACTYRPSAQQSGDNCLLYTHLPLDGFPSAAGLEALCRQDNSLPRPCPTEQLSPSHPPLITCTGSDVDVQLQVAVPQPGRYALVVEYANEDARQEVGVAVHTPQRAPQQGLLSLHPCLYSTLCRGTARDTQDHLAVFHLDSEASVRLTAEQARFFLHGVTLVPIEEFSPEFVEPRVSCISSHGAFGPNSAACLPSRFPKPPQPIILRDCQVIPLPPGLPLTHAQDLTPAMSPAGPRPRPPTAVDPDAEPTLLREPQATVVFTTHVPTLGRYAFLLHGYQPAHPTFPVEVLINAGRVWQGHANASFCPHGYGCRTLVVCEGQALLDVTHSELTVTVRVPKGRWLWLDYVLVVPENVYSFGYLREEPLDKSYDFISHCAAQGYHISPSSSSLFCRNAAASLSLFYNNGARPCGCHEVGATGPTCEPFGGQCPCHAHVIGRDCSRCATGYWGFPNCRPCDCGARLCDELTGQCICPPRTIPPDCLLCQPQTFGCHPLVGCEECNCSGPGIQELTDPTCDTDSGQCKCRPNVTGRRCDTCSPGFHGYPRCRPCDCHEAGTAPGVCDPLTGQCYCKENVQGPKCDQCSLGTFSLDAANPKGCTRCFCFGATERCRSSSYTRQEFVDMEGWVLLSTDRQVVPHERQPGTEMLRADLRHVPEAVPEAFPELYWQAPPSYLGDRVSSYGGTLRYELHSETQRGDVFVPMESRPDVVLQGNQMSITFLEPAYPTPGHVHRGQLQLVEGNFRHTETRNTVSREELMMVLASLEQLQIRALFSQISSAVFLRRVALEVASPAGQGALASNVELCLCPASYRGDSCQECAPGFYRDVKGLFLGRCVPCQCHGHSDRCLPGSGVCVDCQHNTEGAHCERCQAGFVSSRDDPSAPCVSCPCPLSVPSNNFAEGCVLRGGRTQCLCKPGYAGASCERCAPGFFGNPLVLGSSCQPCDCSGNGDPNLLFSDCDPLTGACRGCLRHTTGPRCEICAPGFYGNALLPGNCTRCDCTPCGTEACDPHSGHCLCKAGVTGRRCDRCQEGHFGFDGCGGCRPCACGPAAEGSECHPQSGQCHCRPGTMGPQCRECAPGYWGLPEQGCRRCQCPGGRCDPHTGRCNCPPGLSGERCDTCSQQHQVPVPGGPVGHSIHCEVCDHCVVLLLDDLERAGALLPAIHEQLRGINASSMAWARLHRLNASIADLQSQLRSPLGPRHETAQQLEVLEQQSTSLGQDARRLGGQAVGTRDQASQLLAGTEATLGHAKTLLAAIRAVDRTLSELMSQTGHLGLANASAPSGEQLLRTLAEVERLLWEMRARDLGAPQAAAEAELAAAQRLLARVQEQLSSLWEENQALATQTRDRLAQHEAGLMDLREALNRAVDATREAQELNSRNQERLEEALQRKQELSRDNATLQATLHAARDTLASVFRLLHSLDQAKEELERLAASLDGARTPLLQRMQTFSPAGSKLRLVEAAEAHAQQLGQLALNLSSIILDVNQDRLTQRAIEASNAYSRILQAVQAAEDAAGQALQQADHTWATVVRQGLVDRAQQLLANSTALEEAMLQEQQRLGLVWAALQGARTQLRDVRAKKDQLEAHIQAAQAMLAMDTDETSKKIAHAKAVAAEAQDTATRVQSQLQAMQENVERWQGQYEGLRGQDLGQAVLDAGHSVSTLEKTLPQLLAKLSILENRGVHNASLALSASIGRVRELIAQARGAASKVKVPMKFNGRSGVQLRTPRDLADLAAYTALKFYLQGPEPEPGQGTEDRFVMYMGSRQATGDYMGVSLRDKKVHWVYQLGEAGPAVLSIDEDIGEQFAAVSLDRTLQFGHMSVTVERQMIQETKGDTVAPGAEGLLNLRPDDFVFYVGGYPSTFTPPPLLRFPGYRGCIEMDTLNEEVVSLYNFERTFQLDTAVDRPCARSKSTGDPWLTDGSYLDGTGFARISFDSQISTTKRFEQELRLVSYSGVLFFLKQQSQFLCLAVQEGSLVLLYDFGAGLKKAVPLQPPPPLTSASKAIQVFLLGGSRKRVLVRVERATVYSVEQDNDLELADAYYLGGVPPDQLPPSLRRLFPTGGSVRGCVKGIKALGKYVDLKRLNTTGVSAGCTADLLVGRAMTFHGHGFLRLALSNVAPLTGNVYSGFGFHSAQDSALLYYRASPDGLCQVSLQQGRVSLQLLRTEVKTQAGFADGAPHYVAFYSNATGVWLYVDDQLQQMKPHRGPPPELQPQPEGPPRLLLGGLPESGTIYNFSGCISNVFVQRLLGPQRVFDLQQNLGSVNVSTGCAPALQAQTPGLGPRGLQATARKASRRSRQPARHPACMLPPHLRTTRDSYQFGGSLSSHLEFVGILARHRNWPSLSMHVLPRSSRGLLLFTARLRPGSPSLALFLSNGHFVAQMEGLGTRLRAQSRQRSRPGRWHKVSVRWEKNRILLVTDGARAWSQEGPHRQHQGAEHPQPHTLFVGGLPASSHSSKLPVTVGFSGCVKRLRLHGRPLGAPTRMAGVTPCILGPLEAGLFFPGSGGVITLDLPGATLPDVGLELEVRPLAVTGLIFHLGQARTPPYLQLQVTEKQVLLRADDGAGEFSTSVTRPSVLCDGQWHRLAVMKSGNVLRLEVDAQSNHTVGPLLAAAAGAPAPLYLGGLPEPMAVQPWPPAYCGCMRRLAVNRSPVAMTRSVEVHGAVGASGCPAA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O15230"},
		"label":"lama5_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"matrixdb","id":"MULT_35_human"},{"db":"intact","id":"EBI-2529959"}],
		"expansion":{"id":"26","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O15230"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P11047"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"3497840",
				"name":"lamb1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["845699"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"matrixdb","id":"MULT_35_human"},{"db":"intact","id":"EBI-2529959"}],
		"expansion":{"id":"26","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O15230"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P07942"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"845699",
				"name":"lamc1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["3497840"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"matrixdb","id":"MULT_36_human"},{"db":"intact","id":"EBI-2529973"}],
		"expansion":{"id":"27","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O15230"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P11047"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"matrixdb","id":"MULT_36_human"},{"db":"intact","id":"EBI-2529973"}],
		"expansion":{"id":"27","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O15230"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P55268"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAAAALLLGLALLAPRAAGAGMGACYDGAGRPQRCLPVFENAAFGRLAQASHTCGSPPEDFCPHVGAAGAGAHCQRCDAADPQRHHNASYLTDFHSQDESTWWQSPSMAFGVQYPTSVNITLRLGKAYEITYVRLKFHTSRPESFAIYKRSRADGPWEPYQFYSASCQKTYGRPEGQYLRPGEDERVAFCTSEFSDISPLSGGNVAFSTLEGRPSAYNFEESPGLQEWVTSTELLISLDRLNTFGDDIFKDPKVLQSYYYAVSDFSVGGRCKCNGHASECGPDVAGQLACRCQHNTTGTDCERCLPFFQDRPWARGTAEAAHECLPCNCSGRSEECTFDRELFRSTGHGGRCHHCRDHTAGPHCERCQENFYHWDPRMPCQPCDCQSAGSLHLQCDDTGTCACKPTVTGWKCDRCLPGFHSLSEGGCRPCTCNPAGSLDTCDPRSGRCPCKENVEGNLCDRCRPGTFNLQPHNPAGCSSCFCYGHSKVCASTAQFQVHHILSDFHQGAEGWWARSVGGSEHPPQWSPNGVLLSPEDEEELTAPEKFLGDQRFSYGQPLILTFRVPPGDSPLPVQLRLEGTGLALSLRHSSLSGPQDAGHPREVELRFHLQETSEDVAPPLPPFHFQRLLANLTSLRLRVSPGPSPAGPVFLTEVRLTSARPGLSPPASWVEICSCPTGYTGQFCESCAPGYKREMPQGGPYASCVPCTCNQHGTCDPNTGICVCSHHTEGPSCERCLPGFYGNPFAGQADDCQPCPCPGQSACTTIPESREVVCTHCPPGQRGRRCEVCDDGFFGDPLGLFGHPQPCHQCQCSGNVDPNAVGNCDPLSGHCLRCLHNTTGDHCEHCQEGFYGSALAPRPADKCMPCSCHPQGSVSEQMPCDPVTGQCSCLPHVTARDCSRCYPGFFDLQPGRGCRSCKCHPLGSQEDQCHPKTGQCTCRPGVTGQACDRCQLGFFGFSIKGCRACRCSPLGAASAQCHENGTCVCRPGFEGYKCDRCHDNFFLTADGTHCQQCPSCYALVKEEAAKLKARLTLTEGWLQGSDCGSPWGPLDILLGEAPRGDVYQGHHLLPGAREAFLEQMMSLEGAVKAAREQLQRLNKGARCAQAGSQKTCTQLADLEAVLESSEEEILHAAAILASLEIPQEGPSQPTKWSHLATEARALARSHRDTATKIAATAWRALLASNTSYALLWNLLEGRVALETQRDLEDRYQEVQAAQKALRTAVAEVLPEAESVLATVQQVGADTAPYLALLASPGALPQKSRAEDLGLKAKALEKTVASWQHMATEAARTLQTAAQATLRQTEPLTKLHQEARAALTQASSSVQAATVTVMGARTLLADLEGMKLQFPRPKDQAALQRKADSVSDRLLADTRKKTKQAERMLGNAAPLSSSAKKKGREAEVLAKDSAKLAKALLRERKQAHRRASRLTSQTQATLQQASQQVLASEARRQELEEAERVGAGLSEMEQQIRESRISLEKDIETLSELLARLGSLDTHQAPAQALNETQWALERLRLQLGSPGSLQRKLSLLEQESQQQELQIQGFESDLAEIRADKQNLEAILHSLPENCASWQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9Y6N6"},
		"label":"lamc3_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"matrixdb","id":"MULT_37_human"},{"db":"intact","id":"EBI-2530006"}],
		"expansion":{"id":"28","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P24043"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9Y6N6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"matrixdb","id":"MULT_37_human"},{"db":"intact","id":"EBI-2530006"}],
		"expansion":{"id":"28","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P24043"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P07942"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"matrixdb","id":"MULT_35_human"},{"db":"intact","id":"EBI-2530020"}],
		"expansion":{"id":"29","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q16363"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P55268"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"matrixdb","id":"MULT_35_human"},{"db":"intact","id":"EBI-2530020"}],
		"expansion":{"id":"29","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q16363"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9Y6N6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"matrixdb","id":"MULT_39_human"},{"db":"intact","id":"EBI-2530034"}],
		"expansion":{"id":"30","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O15230"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q13753"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"matrixdb","id":"MULT_39_human"},{"db":"intact","id":"EBI-2530034"}],
		"expansion":{"id":"30","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O15230"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P55268"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"matrixdb","id":"MULT_40_human"},{"db":"reactome","id":"REACT_14602.1"},{"db":"intact","id":"EBI-2530049"}],
		"expansion":{"id":"31","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O15230"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P55268"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"matrixdb","id":"MULT_40_human"},{"db":"reactome","id":"REACT_14602.1"},{"db":"intact","id":"EBI-2530049"}],
		"expansion":{"id":"31","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O15230"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9Y6N6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGLAWGLGVLFLMHVCGTNRIPESGGDNSVFDIFELTGAARKGSGRRLVKGPDPSSPAFRIEDANLIPPVPDDKFQDLVDAVRAEKGFLLLASLRQMKKTRGTLLALERKDHSGQVFSVVSNGKAGTLDLSLTVQGKQHVVSVEEALLATGQWKSITLFVQEDRAQLYIDCEKMENAELDVPIQSVFTRDLASIARLRIAKGGVNDNFQGVLQNVRFVFGTTPEDILRNKGCSSSTSVLLTLDNNVVNGSSPAIRTNYIGHKTKDLQAICGISCDELSSMVLELRGLRTIVTTLQDSIRKVTEENKELANELRRPPLCYHNGVQYRNNEEWTVDSCTECHCQNSVTICKKVSCPIMPCSNATVPDGECCPRCWPSDSADDGWSPWSEWTSCSTSCGNGIQQRGRSCDSLNNRCEGSSVQTRTCHIQECDKRFKQDGGWSHWSPWSSCSVTCGDGVITRIRLCNSPSPQMNGKPCEGEARETKACKKDACPINGGWGPWSPWDICSVTCGGGVQKRSRLCNNPTPQFGGKDCVGDVTENQICNKQDCPIDGCLSNPCFAGVKCTSYPDGSWKCGACPPGYSGNGIQCTDVDECKEVPDACFNHNGEHRCENTDPGYNCLPCPPRFTGSQPFGQGVEHATANKQVCKPRNPCTDGTHDCNKNAKCNYLGHYSDPMYRCECKPGYAGNGIICGEDTDLDGWPNENLVCVANATYHCKKDNCPNLPNSGQEDYDKDGIGDACDDDDDNDKIPDDRDNCPFHYNPAQYDYDRDDVGDRCDNCPYNHNPDQADTDNNGEGDACAADIDGDGILNERDNCQYVYNVDQRDTDMDGVGDQCDNCPLEHNPDQLDSDSDRIGDTCDNNQDIDEDGHQNNLDNCPYVPNANQADHDKDGKGDACDHDDDNDGIPDDKDNCRLVPNPDQKDSDGDGRGDACKDDFDHDSVPDIDDICPENVDISETDFRRFQMIPLDPKGTSQNDPNWVVRHQGKELVQTVNCDPGLAVGYDEFNAVDFSGTFFINTERDDDYAGFVFGYQSSSRFYVVMWKQVTQSYWDTNPTRAQGYSGLSVKVVNSTTGPGEHLRNALWHTGNTPGQVRTLWHDPRHIGWKDFTAYRWRLSHRPKTGFIRVVMYEGKKIMADSGPIYDKTYAGGRLGLFVFSQEMVFFSDLKYECRDP",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P07996"},
		"label":"tsp1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_57_human"},{"db":"intact","id":"EBI-2530370"},{"db":"reactome","id":"REACT_13859.1"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P07996"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P07996"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MVWRLVLLALWVWPSTQAGHQDKDTTFDLFSISNINRKTIGAKQFRGPDPGVPAYRFVRFDYIPPVNADDLSKITKIMRQKEGFFLTAQLKQDGKSRGTLLALEGPGLSQRQFEIVSNGPADTLDLTYWIDGTRHVVSLEDVGLADSQWKNVTVQVAGETYSLHVGCDLIDSFALDEPFYEHLQAEKSRMYVAKGSARESHFRGLLQNVHLVFENSVEDILSKKGCQQGQGAEINAISENTETLRLGPHVTTEYVGPSSERRPEVCERSCEELGNMVQELSGLHVLVNQLSENLKRVSNDNQFLWELIGGPPKTRNMSACWQDGRFFAENETWVVDSCTTCTCKKFKTICHQITCPPATCASPSFVEGECCPSCLHSVDGEEGWSPWAEWTQCSVTCGSGTQQRGRSCDVTSNTCLGPSIQTRACSLSKCDTRIRQDGGWSHWSPWSSCSVTCGVGNITRIRLCNSPVPQMGGKNCKGSGRETKACQGAPCPIDGRWSPWSPWSACTVTCAGGIRERTRVCNSPEPQYGGKACVGDVQERQMCNKRSCPVDGCLSNPCFPGAQCSSFPDGSWSCGSCPVGFLGNGTHCEDLDECALVPDICFSTSKVPRCVNTQPGFHCLPCPPRYRGNQPVGVGLEAAKTEKQVCEPENPCKDKTHNCHKHAECIYLGHFSDPMYKCECQTGYAGDGLICGEDSDLDGWPNLNLVCATNATYHCIKDNCPHLPNSGQEDFDKDGIGDACDDDDDNDGVTDEKDNCQLLFNPRQADYDKDEVGDRCDNCPYVHNPAQIDTDNNGEGDACSVDIDGDDVFNERDNCPYVYNTDQRDTDGDGVGDHCDNCPLVHNPDQTDVDNDLVGDQCDNNEDIDDDGHQNNQDNCPYISNANQADHDRDGQGDACDPDDDNDGVPDDRDNCRLVFNPDQEDLDGDGRGDICKDDFDNDNIPDIDDVCPENNAISETDFRNFQMVPLDPKGTTQIDPNWVIRHQGKELVQTANSDPGIAVGFDEFGSVDFSGTFYVNTDRDDDYAGFVFGYQSSSRFYVVMWKQVTQTYWEDQPTRAYGYSGVSLKVVNSTTGTGEHLRNALWHTGNTPGQVRTLWHDPRNIGWKDYTAYRWHLTHRPKTGYIRVLVHEGKQVMADSGPIYDQTYAGGRLGLFVFSQEMVYFSDLKYECRDI",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P35442"},
		"label":"tsp2_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_58_human"},{"db":"intact","id":"EBI-2530917"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P35442"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P35442"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"METQELRGALALLLLCFFTSASQDLQVIDLLTVGESRQMVAVAEKIRTALLTAGDIYLLSTFRLPPKQGGVLFGLYSRQDNTRWLEASVVGKINKVLVRYQREDGKVHAVNLQQAGLADGRTHTVLLRLRGPSRPSPALHLYVDCKLGDQHAGLPALAPIPPAEVDGLEIRTGQKAYLRMQGFVESMKIILGGSMARVGALSECPFQGDESIHSAVTNALHSILGEQTKALVTQLTLFNQILVELRDDIRDQVKEMSLIRNTIMECQVCGFHEQRSHCSPNPCFRGVDCMEVYEYPGYRCGPCPPGLQGNGTHCSDINECAHADPCFPGSSCINTMPGFHCEACPRGYKGTQVSGVGIDYARASKQVCNDIDECNDGNNGGCDPNSICTNTVGSFKCGPCRLGFLGNQSQGCLPARTCHSPAHSPCHIHAHCLFERNGAVSCQCNVGWAGNGNVCGTDTDIDGYPDQALPCMDNNKHCKQDNCLLTPNSGQEDADNDGVGDQCDDDADGDGIKNVEDNCRLFPNKDQQNSDTDSFGDACDNCPNVPNNDQKDTDGNGEGDACDNDVDGDGIPNGLDNCPKVPNPLQTDRDEDGVGDACDSCPEMSNPTQTDADSDLVGDVCDTNEDSDGDGHQDTKDNCPQLPNSSQLDSDNDGLGDECDGDDDNDGIPDYVPPGPDNCRLVPNPNQKDSDGNGVGDVCEDDFDNDAVVDPLDVCPESAEVTLTDFRAYQTVVLDPEGDAQIDPNWVVLNQGMEIVQTMNSDPGLAVGYTAFNGVDFEGTFHVNTVTDDDYAGFLFSYQDSGRFYVVMWKQTEQTYWQATPFRAVAQPGLQLKAVTSVSGPGEHLRNALWHTGHTPDQVRLLWTDPRNVGWRDKTSYRWQLLHRPQVGYIRVKLYEGPQLVADSGVIIDTSMRGGRLGVFCFSQENIIWSNLQYRCNDTVPEDFEPFRRQLLQGRV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P49746"},
		"label":"tsp3_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_59_human"},{"db":"intact","id":"EBI-2530961"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49746"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P49746"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLAPRGAAVLLLHLVLQRWLAAGAQATPQVFDLLPSSSQRLNPGALLPVLTDPALNDLYVISTFKLQTKSSATIFGLYSSTDNSKYFEFTVMGRLNKAILRYLKNDGKVHLVVFNNLQLADGRRHRILLRLSNLQRGAGSLELYLDCIQVDSVHNLPRAFAGPSQKPETIELRTFQRKPQDFLEELKLVVRGSLFQVASLQDCFLQQSEPLAATGTGDFNRQFLGQMTQLNQLLGEVKDLLRQQVKETSFLRNTIAECQACGPLKFQSPTPSTVVPPAPPAPPTRPPRRCDSNPCFRGVQCTDSRDGFQCGPCPEGYTGNGITCIDVDECKYHPCYPGVHCINLSPGFRCDACPVGFTGPMVQGVGISFAKSNKQVCTDIDECRNGACVPNSICVNTLGSYRCGPCKPGYTGDQIRGCKAERNCRNPELNPCSVNAQCIEERQGDVTCVCGVGWAGDGYICGKDVDIDSYPDEELPCSARNCKKDNCKYVPNSGQEDADRDGIGDACDEDADGDGILNEQDNCVLIHNVDQRNSDKDIFGDACDNCLSVLNNDQKDTDGDGRGDACDDDMDGDGIKNILDNCPKFPNRDQRDKDGDGVGDACDSCPDVSNPNQSDVDNDLVGDSCDTNQDSDGDGHQDSTDNCPTVINSAQLDTDKDGIGDECDDDDDNDGIPDLVPPGPDNCRLVPNPAQEDSNSDGVGDICESDFDQDQVIDRIDVCPENAEVTLTDFRAYQTVVLDPEGDAQIDPNWVVLNQGMEIVQTMNSDPGLAVGYTAFNGVDFEGTFHVNTQTDDDYAGFIFGYQDSSSFYVVMWKQTEQTYWQATPFRAVAEPGIQLKAVKSKTGPGEHLRNSLWHTGDTSDQVRLLWKDSRNVGWKDKVSYRWFLQHRPQVGYIRVRFYEGSELVADSGVTIDTTMRGGRLGVFCFSQENIIWSNLKYRCNDTIPEDFQEFQTQNFDRFDN",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P35443"},
		"label":"tsp4_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_60_human"},{"db":"intact","id":"EBI-2530975"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P35443"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P35443"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MVPDTACVLLLTLAALGASGQGQSPLGSDLGPQMLRELQETNAALQDVRELLRQQVREITFLKNTVMECDACGMQQSVRTGLPSVRPLLHCAPGFCFPGVACIQTESGARCGPCPAGFTGNGSHCTDVNECNAHPCFPRVRCINTSPGFRCEACPPGYSGPTHQGVGLAFAKANKQVCTDINECETGQHNCVPNSVCINTRGSFQCGPCQPGFVGDQASGCQRRAQRFCPDGSPSECHEHADCVLERDGSRSCVCAVGWAGNGILCGRDTDLDGFPDEKLRCPERQCRKDNCVTVPNSGQEDVDRDGIGDACDPDADGDGVPNEKDNCPLVRNPDQRNTDEDKWGDACDNCRSQKNDDQKDTDQDGRGDACDDDIDGDRIRNQADNCPRVPNSDQKDSDGDGIGDACDNCPQKSNPDQADVDHDFVGDACDSDQDQDGDGHQDSRDNCPTVPNSAQEDSDHDGQGDACDDDDDNDGVPDSRDNCRLVPNPGQEDADRDGVGDVCQDDFDADKVVDKIDVCPENAEVTLTDFRAFQTVVLDPEGDAQIDPNWVVLNQGREIVQTMNSDPGLAVGYTAFNGVDFEGTFHVNTVTDDDYAGFIFGYQDSSSFYVVMWKQMEQTYWQANPFRAVAEPGIQLKAVKSSTGPGEQLRNALWHTGDTESQVRLLWKDPRNVGWKDKKSYRWFLQHRPQVGYIRVRFYEGPELVADSNVVLDTTMRGGRLGVFCFSQENIIWANLRYRCNDTIPEDYETHQLRQA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P49747"},
		"label":"comp_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_61_human"},{"db":"intact","id":"EBI-2531058"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49747"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P49747"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MNLQPIFWIGLISSVCCVFAQTDENRCLKANAKSCGECIQAGPNCGWCTNSTFLQEGMPTSARCDDLEALKKKGCPPDDIENPRGSKDIKKNKNVTNRSKGTAEKLKPEDITQIQPQQLVLRLRSGEPQTFTLKFKRAEDYPIDLYYLMDLSYSMKDDLENVKSLGTDLMNEMRRITSDFRIGFGSFVEKTVMPYISTTPAKLRNPCTSEQNCTSPFSYKNVLSLTNKGEVFNELVGKQRISGNLDSPEGGFDAIMQVAVCGSLIGWRNVTRLLVFSTDAGFHFAGDGKLGGIVLPNDGQCHLENNMYTMSHYYDYPSIAHLVQKLSENNIQTIFAVTEEFQPVYKELKNLIPKSAVGTLSANSSNVIQLIIDAYNSLSSEVILENGKLSEGVTISYKSYCKNGVNGTGENGRKCSNISIGDEVQFEISITSNKCPKKDSDSFKIRPLGFTEEVEVILQYICECECQSEGIPESPKCHEGNGTFECGACRCNEGRVGRHCECSTDEVNSEDMDAYCRKENSSEICSNNGECVCGQCVCRKRDNTNEIYSGKFCECDNFNCDRSNGLICGGNGVCKCRVCECNPNYTGSACDCSLDTSTCEASNGQICNGRGICECGVCKCTDPKFQGQTCEMCQTCLGVCAEHKECVQCRAFNKGEKKDTCTQECSYFNITKVESRDKLPQPVQPDPVSHCKEKDVDDCWFYFTYSVNGNNEVMVHVVENPECPTGPDIIPIVAGVVAGIVLIGLALLLIWKLLMIIHDRREFAKFEKEKMNAKWDTGENPIYKSAVTTVVNPKYEGK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P05556"},
		"label":"itb1_human"
	},
	{
		"object":"interactor",
		"sequence":"MGSRTPESPLHAVQLRWGPRRRPPLLPLLLLLLPPPPRVGGFNLDAEAPAVLSGPPGSFFGFSVEFYRPGTDGVSVLVGAPKANTSQPGVLQGGAVYLCPWGASPTQCTPIEFDSKGSRLLESSLSSSEGEEPVEYKSLQWFGATVRAHGSSILACAPLYSWRTEKEPLSDPVGTCYLSTDNFTRILEYAPCRSDFSWAAGQGYCQGGFSAEFTKTGRVVLGGPGSYFWQGQILSATQEQIAESYYPEYLINLVQGQLQTRQASSIYDDSYLGYSVAVGEFSGDDTEDFVAGVPKGNLTYGYVTILNGSDIRSLYNFSGEQMASYFGYAVAATDVNGDGLDDLLVGAPLLMDRTPDGRPQEVGRVYVYLQHPAGIEPTPTLTLTGHDEFGRFGSSLTPLGDLDQDGYNDVAIGAPFGGETQQGVVFVFPGGPGGLGSKPSQVLQPLWAASHTPDFFGSALRGGRDLDGNGYPDLIVGSFGVDKAVVYRGRPIVSASASLTIFPAMFNPEERSCSLEGNPVACINLSFCLNASGKHVADSIGFTVELQLDWQKQKGGVRRALFLASRQATLTQTLLIQNGAREDCREMKIYLRNESEFRDKLSPIHIALNFSLDPQAPVDSHGLRPALHYQSKSRIEDKAQILLDCGEDNICVPDLQLEVFGEQNHVYLGDKNALNLTFHAQNVGEGGAYEAELRVTAPPEAEYSGLVRHPGNFSSLSCDYFAVNQSRLLVCDLGNPMKAGASLWGGLRFTVPHLRDTKKTIQFDFQILSKNLNNSQSDVVSFRLSVEAQAQVTLNGVSKPEAVLFPVSDWHPRDQPQKEEDLGPAVHHVYELINQGPSSISQGVLELSCPQALEGQQLLYVTRVTGLNCTTNHPINPKGLELDPEGSLHHQQKREAPSRSSASSGPQILKCPEAECFRLRCELGPLHQQESQSLQLHFRVWAKTFLQREHQPFSLQCEAVYKALKMPYRILPRQLPQKERQVATAVQWTKAEGSYGVPLWIIILAILFGLLLLGLLIYILYKLGFFKRSLPYGTAMEKAQLKPPATSDA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P08648"},
		"label":"ita5_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_15_human"},{"db":"intact","id":"EBI-2550721"},{"db":"chembl","id":"CHEMBL2095226"},{"db":"reactome","id":"REACT_12335.2"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P05556"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P08648"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MRARPRPRPLWATVLALGALAGVGVGGPNICTTRGVSSCQQCLAVSPMCAWCSDEALPLGSPRCDLKENLLKDNCAPESIEFPVSEARVLEDRPLSDKGSGDSSQVTQVSPQRIALRLRPDDSKNFSIQVRQVEDYPVDIYYLMDLSYSMKDDLWSIQNLGTKLATQMRKLTSNLRIGFGAFVDKPVSPYMYISPPEALENPCYDMKTTCLPMFGYKHVLTLTDQVTRFNEEVKKQSVSRNRDAPEGGFDAIMQATVCDEKIGWRNDASHLLVFTTDAKTHIALDGRLAGIVQPNDGQCHVGSDNHYSASTTMDYPSLGLMTEKLSQKNINLIFAVTENVVNLYQNYSELIPGTTVGVLSMDSSNVLQLIVDAYGKIRSKVELEVRDLPEELSLSFNATCLNNEVIPGLKSCMGLKIGDTVSFSIEAKVRGCPQEKEKSFTIKPVGFKDSLIVQVTFDCDCACQAQAEPNSHRCNNGNGTFECGVCRCGPGWLGSQCECSEEDYRPSQQDECSPREGQPVCSQRGECLCGQCVCHSSDFGKITGKYCECDDFSCVRYKGEMCSGHGQCSCGDCLCDSDWTGYYCNCTTRTDTCMSSNGLLCSGRGKCECGSCVCIQPGSYGDTCEKCPTCPDACTFKKECVECKKFDRGALHDENTCNRYCRDEIESVKELKDTGKDAVNCTYKNEDDCVVRFQYYEDSSGKSILYVVEEPECPKGPDILVVLLSVMGAILLIGLAALLIWKLLITIHDRKEFAKFEEERARAKWDTANNPLYKEATSTFTNITYRGT",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P05106"},
		"label":"itb3_human"
	},
	{
		"object":"interactor",
		"sequence":"MAFPPRRRLRLGPRGLPLLLSGLLLPLCRAFNLDVDSPAEYSGPEGSYFGFAVDFFVPSASSRMFLLVGAPKANTTQPGIVEGGQVLKCDWSSTRRCQPIEFDATGNRDYAKDDPLEFKSHQWFGASVRSKQDKILACAPLYHWRTEMKQEREPVGTCFLQDGTKTVEYAPCRSQDIDADGQGFCQGGFSIDFTKADRVLLGGPGSFYWQGQLISDQVAEIVSKYDPNVYSIKYNNQLATRTAQAIFDDSYLGYSVAVGDFNGDGIDDFVSGVPRAARTLGMVYIYDGKNMSSLYNFTGEQMAAYFGFSVAATDINGDDYADVFIGAPLFMDRGSDGKLQEVGQVSVSLQRASGDFQTTKLNGFEVFARFGSAIAPLGDLDQDGFNDIAIAAPYGGEDKKGIVYIFNGRSTGLNAVPSQILEGQWAARSMPPSFGYSMKGATDIDKNGYPDLIVGAFGVDRAILYRARPVITVNAGLEVYPSILNQDNKTCSLPGTALKVSCFNVRFCLKADGKGVLPRKLNFQVELLLDKLKQKGAIRRALFLYSRSPSHSKNMTISRGGLMQCEELIAYLRDESEFRDKLTPITIFMEYRLDYRTAADTTGLQPILNQFTPANISRQAHILLDCGEDNVCKPKLEVSVDSDQKKIYIGDDNPLTLIVKAQNQGEGAYEAELIVSIPLQADFIGVVRNNEALARLSCAFKTENQTRQVVCDLGNPMKAGTQLLAGLRFSVHQQSEMDTSVKFDLQIQSSNLFDKVSPVVSHKVDLAVLAAVEIRGVSSPDHVFLPIPNWEHKENPETEEDVGPVVQHIYELRNNGPSSFSKAMLHLQWPYKYNNNTLLYILHYDIDGPMNCTSDMEINPLRIKISSLQTTEKNDTVAGQGERDHLITKRDLALSEGDIHTLGCGVAQCLKIVCQVGRLDRGKSAILYVKSLLWTETFMNKENQNHSYSLKSSASFNVIEFPYKNLPIEDITNSTLVTTNVTWGIQPAPMPVPVWVIILAVLAGLLLLAVLVFVMYRMGFFKRVRPPQEEQEREQLQPHENGEGNSET",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P06756"},
		"label":"itav_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"chembl","id":"CHEMBL1907598"},{"db":"matrixdb","id":"MULT_16_human"},{"db":"intact","id":"EBI-2550735"},{"db":"reactome","id":"REACT_13287.2"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P05106"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P06756"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MPRAPAPLYACLLGLCALLPRLAGLNICTSGSATSCEECLLIHPKCAWCSKEDFGSPRSITSRCDLRANLVKNGCGGEIESPASSFHVLRSLPLSSKGSGSAGWDVIQMTPQEIAVNLRPGDKTTFQLQVRQVEDYPVDLYYLMDLSLSMKDDLDNIRSLGTKLAEEMRKLTSNFRLGFGSFVDKDISPFSYTAPRYQTNPCIGYKLFPNCVPSFGFRHLLPLTDRVDSFNEEVRKQRVSRNRDAPEGGFDAVLQAAVCKEKIGWRKDALHLLVFTTDDVPHIALDGKLGGLVQPHDGQCHLNEANEYTASNQMDYPSLALLGEKLAENNINLIFAVTKNHYMLYKNFTALIPGTTVEILDGDSKNIIQLIINAYNSIRSKVELSVWDQPEDLNLFFTATCQDGVSYPGQRKCEGLKIGDTASFEVSLEARSCPSRHTEHVFALRPVGFRDSLEVGVTYNCTCGCSVGLEPNSARCNGSGTYVCGLCECSPGYLGTRCECQDGENQSVYQNLCREAEGKPLCSGRGDCSCNQCSCFESEFGKIYGPFCECDNFSCARNKGVLCSGHGECHCGECKCHAGYIGDNCNCSTDISTCRGRDGQICSERGHCLCGQCQCTEPGAFGEMCEKCPTCPDACSTKRDCVECLLLHSGKPDNQTCHSLCRDEVITWVDTIVKDDQEAVLCFYKTAKDCVMMFTYVELPSGKSNLTVLREPECGNTPNAMTILLAVVGSILLVGLALLAIWKLLVTIHDRREFAKFQSERSRARYEMASNPLYRKPISTHTVDFTFNKFNKSYNGTVD",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P18084"},
		"label":"itb5_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_17_human"},{"db":"intact","id":"EBI-2550754"},{"db":"reactome","id":"REACT_13993.1"},{"db":"chembl","id":"CHEMBL2096675"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P18084"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P06756"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGPGPSRAPRAPRLMLCALALMVAAGGCVVSAFNLDTRFLVVKEAGNPGSLFGYSVALHRQTERQQRYLLLAGAPRELAVPDGYTNRTGAVYLCPLTAHKDDCERMNITVKNDPGHHIIEDMWLGVTVASQGPAGRVLVCAHRYTQVLWSGSEDQRRMVGKCYVRGNDLELDSSDDWQTYHNEMCNSNTDYLETGMCQLGTSGGFTQNTVYFGAPGAYNWKGNSYMIQRKEWDLSEYSYKDPEDQGNLYIGYTMQVGSFILHPKNITIVTGAPRHRHMGAVFLLSQEAGGDLRRRQVLEGSQVGAYFGSAIALADLNNDGWQDLLVGAPYYFERKEEVGGAIYVFMNQAGTSFPAHPSLLLHGPSGSAFGLSVASIGDINQDGFQDIAVGAPFEGLGKVYIYHSSSKGLLRQPQQVIHGEKLGLPGLATFGYSLSGQMDVDENFYPDLLVGSLSDHIVLLRARPVINIVHKTLVPRPAVLDPALCTATSCVQVELCFAYNQSAGNPNYRRNITLAYTLEADRDRRPPRLRFAGSESAVFHGFFSMPEMRCQKLELLLMDNLRDKLRPIIISMNYSLPLRMPDRPRLGLRSLDAYPILNQAQALENHTEVQFQKECGPDNKCESNLQMRAAFVSEQQQKLSRLQYSRDVRKLLLSINVTNTRTSERSGEDAHEALLTLVVPPALLLSSVRPPGACQANETIFCELGNPFKRNQRMELLIAFEVIGVTLHTRDLQVQLQLSTSSHQDNLWPMILTLLVDYTLQTSLSMVNHRLQSFFGGTVMGESGMKTVEDVGSPLKYEFQVGPMGEGLVGLGTLVLGLEWPYEVSNGKWLLYPTEITVHGNGSWPCRPPGDLINPLNLTLSDPGDRPSSPQRRRRQLDPGGGQGPPPVTLAAAKKAKSETVLTCATGRAHCVWLECPIPDAPVVTNVTVKARVWNSTFIEDYRDFDRVRVNGWATLFLRTSIPTINMENKTTWFSVDIDSELVEELPAEIELWLVLVAVGAGLLLLGLIILLLWKCGFFKRARTRALYEAKRQKAEMKSQPSETERLTDDY",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P26006"},
		"label":"ita3_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_18_human"},{"db":"intact","id":"EBI-2550808"},{"db":"reactome","id":"REACT_14560.1"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P05556"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P26006"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAPRPRARPGVAVACCWLLTVVLRCCVSFNVDVKNSMTFSGPVEDMFGYTVQQYENEEGKWVLIGSPLVGQPKNRTGDVYKCPVGRGESLPCVKLDLPVNTSIPNVTEVKENMTFGSTLVTNPNGGFLACGPLYAYRCGHLHYTTGICSDVSPTFQVVNSIAPVQECSTQLDIVIVLDGSNSIYPWDSVTAFLNDLLERMDIGPKQTQVGIVQYGENVTHEFNLNKYSSTEEVLVAAKKIVQRGGRQTMTALGIDTARKEAFTEARGARRGVKKVMVIVTDGESHDNHRLKKVIQDCEDENIQRFSIAILGSYNRGNLSTEKFVEEIKSIASEPTEKHFFNVSDELALVTIVKTLGERIFALEATADQSAASFEMEMSQTGFSAHYSQDWVMLGAVGAYDWNGTVVMQKASQIIIPRNTTFNVESTKKNEPLASYLGYTVNSATASSGDVLYIAGQPRYNHTGQVIIYRMEDGNIKILQTLSGEQIGSYFGSILTTTDIDKDSNTDILLVGAPMYMGTEKEEQGKVYVYALNQTRFEYQMSLEPIKQTCCSSRQHNSCTTENKNEPCGARFGTAIAAVKDLNLDGFNDIVIGAPLEDDHGGAVYIYHGSGKTIRKEYAQRIPSGGDGKTLKFFGQSIHGEMDLNGDGLTDVTIGGLGGAALFWSRDVAVVKVTMNFEPNKVNIQKKNCHMEGKETVCINATVCFDVKLKSKEDTIYEADLQYRVTLDSLRQISRSFFSGTQERKVQRNITVRKSECTKHSFYMLDKHDFQDSVRITLDFNLTDPENGPVLDDSLPNSVHEYIPFAKDCGNKEKCISDLSLHVATTEKDLLIVRSQNDKFNVSLTVKNTKDSAYNTRTIVHYSPNLVFSGIEAIQKDSCESNHNITCKVGYPFLRRGEMVTFKILFQFNTSYLMENVTIYLSATSDSEEPPETLSDNVVNISIPVKYEVGLQFYSSASEYHISIAANETVPEVINSTEDIGNEINIFYLIRKSGSFPMPELKLSISFPNMTSNGYPVLYPTGLSSSENANCRPHIFEDPFSINSGKKMTTSTDHLKRGTILDCNTCKFATITCNLTSSDISQVNVSLILWKPTFIKSYFSSLNLTIRGELRSENASLVLSSSNQKRELAIQISKDGLPGRVPLWVILLSAFAGLLLLMLLILALWKIGFFKRPLKKKMEK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P56199"},
		"label":"ita1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_19_human"},{"db":"reactome","id":"REACT_14015.1"},{"db":"intact","id":"EBI-2554495"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P56199"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P05556"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MARALCPLQALWLLEWVLLLLGPCAAPPAWALNLDPVQLTFYAGPNGSQFGFSLDFHKDSHGRVAIVVGAPRTLGPSQEETGGVFLCPWRAEGGQCPSLLFDLRDETRNVGSQTLQTFKARQGLGASVVSWSDVIVACAPWQHWNVLEKTEEAEKTPVGSCFLAQPESGRRAEYSPCRGNTLSRIYVENDFSWDKRYCEAGFSSVVTQAGELVLGAPGGYYFLGLLAQAPVADIFSSYRPGILLWHVSSQSLSFDSSNPEYFDGYWGYSVAVGEFDGDLNTTEYVVGAPTWSWTLGAVEILDSYYQRLHRLRGEQMASYFGHSVAVTDVNGDGRHDLLVGAPLYMESRADRKLAEVGRVYLFLQPRGPHALGAPSLLLTGTQLYGRFGSAIAPLGDLDRDGYNDIAVAAPYGGPSGRGQVLVFLGQSEGLRSRPSQVLDSPFPTGSAFGFSLRGAVDIDDNGYPDLIVGAYGANQVAVYRAQPVVKASVQLLVQDSLNPAVKSCVLPQTKTPVSCFNIQMCVGATGHNIPQKLSLNAELQLDRQKPRQGRRVLLLGSQQAGTTLNLDLGGKHSPICHTTMAFLRDEADFRDKLSPIVLSLNVSLPPTEAGMAPAVVLHGDTHVQEQTRIVLDCGEDDVCVPQLQLTASVTGSPLLVGADNVLELQMDAANEGEGAYEAELAVHLPQGAHYMRALSNVEGFERLICNQKKENETRVVLCELGNPMKKNAQIGIAMLVSVGNLEEAGESVSFQLQIRSKNSQNPNSKIVLLDVPVRAEAQVELRGNSFPASLVVAAEEGEREQNSLDSWGPKVEHTYELHNNGPGTVNGLHLSIHLPGQSQPSDLLYILDIQPQGGLQCFPQPPVNPLKVDWGLPIPSPSPIHPAHHKRDRRQIFLPEPEQPSRLQDPVLVSCDSAPCTVVQCDLQEMARGQRAMVTVLAFLWLPSLYQRPLDQFVLQSHAWFNVSSLPYAVPPLSLPRGEAQVWTQLLRALEERAIPIWWVLVGVLGGLLLLTILVLAMWKVGFFKRNRPPLEEDDEEGE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P08514"},
		"label":"ita2b_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"3nig"},{"db":"wwpdb","id":"2vc2"},{"db":"wwpdb","id":"1TYE"},{"db":"wwpdb","id":"3nid"},{"db":"matrixdb","id":"MULT_24_human"},{"db":"wwpdb","id":"2vdn"},{"db":"wwpdb","id":"3nif"},{"db":"chembl","id":"CHEMBL2093869"},{"db":"wwpdb","id":"2vdm"},{"db":"wwpdb","id":"3fcu"},{"db":"wwpdb","id":"3fcs"},{"db":"wwpdb","id":"2vdl"},{"db":"wwpdb","id":"2vdk"},{"db":"intact","id":"EBI-2554508"},{"db":"reactome","id":"REACT_4958.1"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P05106"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"20139414",
				"name":"ita2b binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["19576459"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P08514"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19576459",
				"name":"itb3 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["20139414"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGPERTGAAPLPLLLVLALSQGILNCCLAYNVGLPEAKIFSGPSSEQFGYAVQQFINPKGNWLLVGSPWSGFPENRMGDVYKCPVDLSTATCEKLNLQTSTSIPNVTEMKTNMSLGLILTRNMGTGGFLTCGPLWAQQCGNQYYTTGVCSDISPDFQLSASFSPATQPCPSLIDVVVVCDESNSIYPWDAVKNFLEKFVQGLDIGPTKTQVGLIQYANNPRVVFNLNTYKTKEEMIVATSQTSQYGGDLTNTFGAIQYARKYAYSAASGGRRSATKVMVVVTDGESHDGSMLKAVIDQCNHDNILRFGIAVLGYLNRNALDTKNLIKEIKAIASIPTERYFFNVSDEAALLEKAGTLGEQIFSIEGTVQGGDNFQMEMSQVGFSADYSSQNDILMLGAVGAFGWSGTIVQKTSHGHLIFPKQAFDQILQDRNHSSYLGYSVAAISTGESTHFVAGAPRANYTGQIVLYSVNENGNITVIQAHRGDQIGSYFGSVLCSVDVDKDTITDVLLVGAPMYMSDLKKEEGRVYLFTIKKGILGQHQFLEGPEGIENTRFGSAIAALSDINMDGFNDVIVGSPLENQNSGAVYIYNGHQGTIRTKYSQKILGSDGAFRSHLQYFGRSLDGYGDLNGDSITDVSIGAFGQVVQLWSQSIADVAIEASFTPEKITLVNKNAQIILKLCFSAKFRPTKQNNQVAIVYNITLDADGFSSRVTSRGLFKENNERCLQKNMVVNQAQSCPEHIIYIQEPSDVVNSLDLRVDISLENPGTSPALEAYSETAKVFSIPFHKDCGEDGLCISDLVLDVRQIPAAQEQPFIVSNQNKRLTFSVTLKNKRESAYNTGIVVDFSENLFFASFSLPVDGTEVTCQVAASQKSVACDVGYPALKREQQVTFTINFDFNLQNLQNQASLSFQALSESQEENKADNLVNLKIPLLYDAEIHLTRSTNINFYEISSDGNVPSIVHSFEDVGPKFIFSLKVTTGSVPVSMATVIIHIPQYTKEKNPLMYLTGVQTDKAGDISCNADINPLKIGQTSSSVSFKSENFRHTKELNCRTASCSNVTCWLKDVHMKGEYFVNVTTRIWNGTFASSTFQTVQLTAAAEINTYNPEIYVIEDNTVTIPLMIMKPDEKAEVPTGVIIGSIIAGILLLLALVAILWKLGFFKRKYEKMTKNPDEIDETTELSS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P17301"},
		"label":"ita2_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_25_human"},{"db":"intact","id":"EBI-2565102"},{"db":"reactome","id":"REACT_2290.1"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P05556"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P17301"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAWEARREPGPRRAAVRETVMLLLCLGVPTGRPYNVDTESALLYQGPHNTLFGYSVVLHSHGANRWLLVGAPTANWLANASVINPGAIYRCRIGKNPGQTCEQLQLGSPNGEPCGKTCLEERDNQWLGVTLSRQPGENGSIVTCGHRWKNIFYIKNENKLPTGGCYGVPPDLRTELSKRIAPCYQDYVKKFGENFASCQAGISSFYTKDLIVMGAPGSSYWTGSLFVYNITTNKYKAFLDKQNQVKFGSYLGYSVGAGHFRSQHTTEVVGGAPQHEQIGKAYIFSIDEKELNILHEMKGKKLGSYFGASVCAVDLNADGFSDLLVGAPMQSTIREEGRVFVYINSGSGAVMNAMETNLVGSDKYAARFGESIVNLGDIDNDGFEDVAIGAPQEDDLQGAIYIYNGRADGISSTFSQRIEGLQISKSLSMFGQSISGQIDADNNGYVDVAVGAFRSDSAVLLRTRPVVIVDASLSHPESVNRTKFDCVENGWPSVCIDLTLCFSYKGKEVPGYIVLFYNMSLDVNRKAESPPRFYFSSNGTSDVITGSIQVSSREANCRTHQAFMRKDVRDILTPIQIEAAYHLGPHVISKRSTEEFPPLQPILQQKKEKDIMKKTINFARFCAHENCSADLQVSAKIGFLKPHENKTYLAVGSMKTLMLNVSLFNAGDDAYETTLHVKLPVGLYFIKILELEEKQINCEVTDNSGVVQLDCSIGYIYVDHLSRIDISFLLDVSSLSRAEEDLSITVHATCENEEEMDNLKHSRVTVAIPLKYEVKLTVHGFVNPTSFVYGSNDENEPETCMVEKMNLTFHVINTGNSMAPNVSVEIMVPNSFSPQTDKLFNILDVQTTTGECHFENYQRVCALEQQKSAMQTLKGIVRFLSKTDKRLLYCIKADPHCLNFLCNFGKMESGKEASVHIQLEGRPSILEMDETSALKFEIRATGFPEPNPRVIELNKDENVAHVLLEGLHHQRPKRYFTIVIISSSLLLGLIVLLLISYVMWKAGFFKRQYKSILQEENRRDSWSYINSKSNDD",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P13612"},
		"label":"ita4_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"chembl","id":"CHEMBL1907599"},{"db":"reactome","id":"REACT_11974.1"},{"db":"matrixdb","id":"MULT_26_human"},{"db":"intact","id":"EBI-2565117"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P13612"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P05556"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAAAGQLCLLYLSAGLLSRLGAAFNLDTREDNVIRKYGDPGSLFGFSLAMHWQLQPEDKRLLLVGAPRAEALPLQRANRTGGLYSCDITARGPCTRIEFDNDADPTSESKEDQWMGVTVQSQGPGGKVVTCAHRYEKRQHVNTKQESRDIFGRCYVLSQNLRIEDDMDGGDWSFCDGRLRGHEKFGSCQQGVAATFTKDFHYIVFGAPGTYNWKGIVRVEQKNNTFFDMNIFEDGPYEVGGETEHDESLVPVPANSYLGLLFLTSVSYTDPDQFVYKTRPPREQPDTFPDVMMNSYLGFSLDSGKGIVSKDEITFVSGAPRANHSGAVVLLKRDMKSAHLLPEHIFDGEGLASSFGYDVAVVDLNKDGWQDIVIGAPQYFDRDGEVGGAVYVYMNQQGRWNNVKPIRLNGTKDSMFGIAVKNIGDINQDGYPDIAVGAPYDDLGKVFIYHGSANGINTKPTQVLKGISPYFGYSIAGNMDLDRNSYPDVAVGSLSDSVTIFRSRPVINIQKTITVTPNRIDLRQKTACGAPSGICLQVKSCFEYTANPAGYNPSISIVGTLEAEKERRKSGLSSRVQFRNQGSEPKYTQELTLKRQKQKVCMEETLWLQDNIRDKLRPIPITASVEIQEPSSRRRVNSLPEVLPILNSDEPKTAHIDVHFLKEGCGDDNVCNSNLKLEYKFCTREGNQDKFSYLPIQKGVPELVLKDQKDIALEITVTNSPSNPRNPTKDGDDAHEAKLIATFPDTLTYSAYRELRAFPEKQLSCVANQNGSQADCELGNPFKRNSNVTFYLVLSTTEVTFDTPDLDINLKLETTSNQDNLAPITAKAKVVIELLLSVSGVAKPSQVYFGGTVVGEQAMKSEDEVGSLIEYEFRVINLGKPLTNLGTATLNIQWPKEISNGKWLLYLVKVESKGLEKVTCEPQKEINSLNLTESHNSRKKREITEKQIDDNRKFSLFAERKYQTLNCSVNVNCVNIRCPLRGLDSKASLILRSRLWNSTFLEEYSKLNYLDILMRAFIDVTAAAENIRLPNAGTQVRVTVFPSKTVAQYSGVPWWIILVAILAGILMLALLVFILWKCGFFKRSRYDDSVPRYHAVRIRKEEREIKDEKYIDNLEKKQWITKWNENESYS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P23229"},
		"label":"ita6_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"reactome","id":"REACT_14516.1"},{"db":"intact","id":"EBI-2565268"},{"db":"matrixdb","id":"MULT_62_human"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P23229"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P05556"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAGARSRDPWGASGICYLFGSLLVELLFSRAVAFNLDVMGALRKEGEPGSLFGFSVALHRQLQPRPQSWLLVGAPQALALPGQQANRTGGLFACPLSLEETDCYRVDIDQGADMQKESKENQWLGVSVRSQGPGGKIVTCAHRYEARQRVDQILETRDMIGRCFVLSQDLAIRDELDGGEWKFCEGRPQGHEQFGFCQQGTAAAFSPDSHYLLFGAPGTYNWKGTARVELCAQGSADLAHLDDGPYEAGGEKEQDPRLIPVPANSYFGLLFVTNIDSSDPDQLVYKTLDPADRLPGPAGDLALNSYLGFSIDSGKGLVRAEELSFVAGAPRANHKGAVVILRKDSASRLVPEVMLSGERLTSGFGYSLAVADLNSDGWPDLIVGAPYFFERQEELGGAVYVYLNQGGHWAGISPLRLCGSPDSMFGISLAVLGDLNQDGFPDIAVGAPFDGDGKVFIYHGSSLGVVAKPSQVLEGEAVGIKSFGYSLSGSLDMDGNQYPDLLVGSLADTAVLFRARPILHVSHEVSIAPRSIDLEQPNCAGGHSVCVDLRVCFSYIAVPSSYSPTVALDYVLDADTDRRLRGQVPRVTFLSRNLEEPKHQASGTVWLKHQHDRVCGDAMFQLQENVKDKLRAIVVTLSYSLQTPRLRRQAPGQGLPPVAPILNAHQPSTQRAEIHFLKQGCGEDKICQSNLQLVRARFCTRVSDTEFQPLPMDVDGTTALFALSGQPVIGLELMVTNLPSDPAQPQADGDDAHEAQLLVMLPDSLHYSGVRALDPAEKPLCLSNENASHVECELGNPMKRGAQVTFYLILSTSGISIETTELEVELLLATISEQELHPVSARARVFIELPLSIAGMAIPQQLFFSGVVRGERAMQSERDVGSKVKYEVTVSNQGQSLRTLGSAFLNIMWPHEIANGKWLLYPMQVELEGGQGPGQKGLCSPRPNILHLDVDSRDRRRRELEPPEQQEPGERQEPSMSWWPVSSAEKKKNITLDCARGTANCVVFSCPLYSFDRAAVLHVWGRLWNSTFLEEYSAVKSLEVIVRANITVKSSIKNLMLRDASTVIPVMVYLDPMAVVAEGVPWWVILLAVLAGLLVLALLVLLLWKMGFFKRAKHPEATVPQYHAVKIPREDRQQFKEEKTGTILRNNWGSPRREGPDAHPILAADGHPELGPDGHPGPGTA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q13683"},
		"label":"ita7_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_63_human"},{"db":"reactome","id":"REACT_14603.1"},{"db":"intact","id":"EBI-2565379"},{"db":"go","id":"ECO:0000306"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q13683"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P05556"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSPGASRGPRGSQAPLIAPLCCAAAALGMLLWSPACQAFNLDVEKLTVYSGPKGSYFGYAVDFHIPDARTASVLVGAPKANTSQPDIVEGGAVYYCPWPAEGSAQCRQIPFDTTNNRKIRVNGTKEPIEFKSNQWFGATVKAHKGKVVACAPLYHWRTLKPTPEKDPVGTCYVAIQNFSAYAEFSPCRNSNADPEGQGYCQAGFSLDFYKNGDLIVGGPGSFYWQGQVITASVADIIANYSFKDILRKLAGEKQTEVAPASYDDSYLGYSVAAGEFTGDSQQELVAGIPRGAQNFGYVSIINSTDMTFIQNFTGEQMASYFGYTVVVSDVNSDGLDDVLVGAPLFMEREFESNPREVGQIYLYLQVSSLLFRDPQILTGTETFGRFGSAMAHLGDLNQDGYNDIAIGVPFAGKDQRGKVLIYNGNKDGLNTKPSQVLQGVWASHAVPSGFGFTLRGDSDIDKNDYPDLIVGAFGTGKVAVYRARPVVTVDAQLLLHPMIINLENKTCQVPDSMTSAACFSLRVCASVTGQSIANTIVLMAEVQLDSLKQKGAIKRTLFLDNHQAHRVFPLVIKRQKSHQCQDFIVYLRDETEFRDKLSPINISLNYSLDESTFKEGLEVKPILNYYRENIVSEQAHILVDCGEDNLCVPDLKLSARPDKHQVIIGDENHLMLIINARNEGEGAYEAELFVMIPEEADYVGIERNNKGFRPLSCEYKMENVTRMVVCDLGNPMVSGTNYSLGLRFAVPRLEKTNMSINFDLQIRSSNKDNPDSNFVSLQINITAVAQVEIRGVSHPPQIVLPIHNWEPEEEPHKEEEVGPLVEHIYELHNIGPSTISDTILEVGWPFSARDEFLLYIFHIQTLGPLQCQPNPNINPQDIKPAASPEDTPELSAFLRNSTIPHLVRKRDVHVVEFHRQSPAKILNCTNIECLQISCAVGRLEGGESAVLKVRSRLWAHTFLQRKNDPYALASLVSFEVKKMPYTDQPAKLPEGSIVIKTSVIWATPNVSFSIPLWVIILAILLGLLVLAILTLALWKCGFFDRARPPQEDMTDREQLTNDKTPEA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P53708"},
		"label":"ita8_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_64_human"},{"db":"reactome","id":"REACT_14603.1"},{"db":"intact","id":"EBI-2567920"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P05556"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P53708"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGGPAAPRGAGRLRALLLALVVAGIPAGAYNLDPQRPVHFQGPADSFFGYAVLEHFHDNTRWVLVGAPKADSKYSPSVKSPGAVFKCRVHTNPDRRCTELDMARGKNRGTSCGKTCREDRDDEWMGVSLARQPKADGRVLACAHRWKNIYYEADHILPHGFCYIIPSNLQAKGRTLIPCYEEYKKKYGEEHGSCQAGIAGFFTEELVVMGAPGSFYWAGTIKVLNLTDNTYLKLNDEVIMNRRYTYLGYAVTAGHFSHPSTIDVVGGAPQDKGIGKVYIFRADRRSGTLIKIFQASGKKMGSYFGSSLCAVDLNGDGLSDLLVGAPMFSEIRDEGQVTVYINRGNGALEEQLALTGDGAYNAHFGESIASLDDLDNDGFPDVAIGAPKEDDFAGAVYIYHGDAGGIVPQYSMKLSGQKINPVLRMFGQSISGGIDMDGNGYPDVTVGAFMSDSVVLLRARPVITVDVSIFLPGSINITAPQCHDGQQPVNCLNVTTCFSFHGKHVPGEIGLNYVLMADVAKKEKGQMPRVYFVLLGETMGQVTEKLQLTYMEETCRHYVAHVKRRVQDVISPIVFEAAYSLSEHVTGEEERELPPLTPVLRWKKGQKIAQKNQTVFERNCRSEDCAADLQLQGKLLLSSMDEKTLYLALGAVKNISLNISISNLGDDAYDANVSFNVSRELFFINMWQKEEMGISCELLESDFLKCSVGFPFMRSKSKYEFSVIFDTSHLSGEEEVLSFIVTAQSGNTERSESLHDNTLVLMVPLMHEVDTSITGIMSPTSFVYGESVDAANFIQLDDLECHFQPINITLQVYNTGPSTLPGSSVSISFPNRLSSGGAEMFHVQEMVVGQEKGNCSFQKNPTPCIIPQEQENIFHTIFAFFTKSGRKVLDCEKPGISCLTAHCNFSALAKEESRTIDIYMLLNTEILKKDSSSVIQFMSRAKVKVDPALRVVEIAHGNPEEVTVVFEALHNLEPRGYVVGWIIAISLLVGILIFLLLAVLLWKMGFFRRRYKEIIEAEKNRKENEDSWDWVQKNQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q13797"},
		"label":"ita9_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"reactome","id":"REACT_14004.1"},{"db":"intact","id":"EBI-2567957"},{"db":"matrixdb","id":"MULT_65_human"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P05556"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q13797"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MELPFVTHLFLPLVFLTGLCSPFNLDEHHPRLFPGPPEAEFGYSVLQHVGGGQRWMLVGAPWDGPSGDRRGDVYRCPVGGAHNAPCAKGHLGDYQLGNSSHPAVNMHLGMSLLETDGDGGFMACAPLWSRACGSSVFSSGICARVDASFQPQGSLAPTAQRCPTYMDVVIVLDGSNSIYPWSEVQTFLRRLVGKLFIDPEQIQVGLVQYGESPVHEWSLGDFRTKEEVVRAAKNLSRREGRETKTAQAIMVACTEGFSQSHGGRPEAARLLVVVTDGESHDGEELPAALKACEAGRVTRYGIAVLGHYLRRQRDPSSFLREIRTIASDPDERFFFNVTDEAALTDIVDALGDRIFGLEGSHAENESSFGLEMSQIGFSTHRLKDGILFGMVGAYDWGGSVLWLEGGHRLFPPRMALEDEFPPALQNHAAYLGYSVSSMLLRGGRRLFLSGAPRFRHRGKVIAFQLKKDGAVRVAQSLQGEQIGSYFGSELCPLDTDRDGTTDVLLVAAPMFLGPQNKETGRVYVYLVGQQSLLTLQGTLQPEPPQDARFGFAMGALPDLNQDGFADVAVGAPLEDGHQGALYLYHGTQSGVRPHPAQRIAAASMPHALSYFGRSVDGRLDLDGDDLVDVAVGAQGAAILLSSRPIVHLTPSLEVTPQAISVVQRDCRRRGQEAVCLTAALCFQVTSRTPGRWDHQFYMRFTASLDEWTAGARAAFDGSGQRLSPRRLRLSVGNVTCEQLHFHVLDTSDYLRPVALTVTFALDNTTKPGPVLNEGSPTSIQKLVPFSKDCGPDNECVTDLVLQVNMDIRGSRKAPFVVRGGRRKVLVSTTLENRKENAYNTSLSLIFSRNLHLASLTPQRESPIKVECAAPSAHARLCSVGHPVFQTGAKVTFLLEFEFSCSSLLSQVFVKLTASSDSLERNGTLQDNTAQTSAYIQYEPHLLFSSESTLHRYEVHPYGTLPVGPGPEFKTTLRVQNLGCYVVSGLIISALLPAVAHGGNYFLSLSQVITNNASCIVQNLTEPPGPPVHPEELQHTNRLNGSNTQCQVVRCHLGQLAKGTEVSVGLLRLVHNEFFRRAKFKSLTVVSTFELGTEEGSVLQLTEASRWSESLLEVVQTRPILISLWILIGSVLGGLLLLALLVFCLWKLGFFAHKKIPEEEKREEKLEQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O75578"},
		"label":"ita10_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"reactome","id":"REACT_13998.1"},{"db":"intact","id":"EBI-2568006"},{"db":"matrixdb","id":"MULT_66_human"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"O75578"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P05556"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDLPRGLVVAWALSLWPGFTDTFNMDTRKPRVIPGSRTAFFGYTVQQHDISGNKWLVVGAPLETNGYQKTGDVYKCPVIHGNCTKLNLGRVTLSNVSERKDNMRLGLSLATNPKDNSFLACSPLWSHECGSSYYTTGMCSRVNSNFRFSKTVAPALQRCQTYMDIVIVLDGSNSIYPWVEVQHFLINILKKFYIGPGQIQVGVVQYGEDVVHEFHLNDYRSVKDVVEAASHIEQRGGTETRTAFGIEFARSEAFQKGGRKGAKKVMIVITDGESHDSPDLEKVIQQSERDNVTRYAVAVLGYYNRRGINPETFLNEIKYIASDPDDKHFFNVTDEAALKDIVDALGDRIFSLEGTNKNETSFGLEMSQTGFSSHVVEDGVLLGAVGAYDWNGAVLKETSAGKVIPLRESYLKEFPEELKNHGAYLGYTVTSVVSSRQGRVYVAGAPRFNHTGKVILFTMHNNRSLTIHQAMRGQQIGSYFGSEITSVDIDGDGVTDVLLVGAPMYFNEGRERGKVYVYELRQNLFVYNGTLKDSHSYQNARFGSSIASVRDLNQDSYNDVVVGAPLEDNHAGAIYIFHGFRGSILKTPKQRITASELATGLQYFGCSIHGQLDLNEDGLIDLAVGALGNAVILWSRPVVQINASLHFEPSKINIFHRDCKRSGRDATCLAAFLCFTPIFLAPHFQTTTVGIRYNATMDERRYTPRAHLDEGGDRFTNRAVLLSSGQELCERINFHVLDTADYVKPVTFSVEYSLEDPDHGPMLDDGWPTTLRVSVPFWNGCNEDEHCVPDLVLDARSDLPTAMEYCQRVLRKPAQDCSAYTLSFDTTVFIIESTRQRVAVEATLENRGENAYSTVLNISQSANLQFASLIQKEDSDGSIECVNEERRLQKQVCNVSYPFFRAKAKVAFRLDFEFSKSIFLHHLEIELAAGSDSNERDSTKEDNVAPLRFHLKYEADVLFTRSSSLSHYEVKPNSSLERYDGIGPPFSCIFRIQNLGLFPIHGMMMKITIPIATRSGNRLLKLRDFLTDEANTSCNIWGNSTEYRPTPVEEDLRRAPQLNHSNSDVVSINCNIRLVPNQEINFHLLGNLWLRSLKALKYKSMKIMVNAALQRQFHSPFIFREEDPSRQIVFEISKQEDWQVPIWIIVGSTLGGLLLLALLVLALWKLGFFRSARRRREPGLDPTPKVLE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9UKX5"},
		"label":"ita11_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_67_human"},{"db":"intact","id":"EBI-2568044"},{"db":"reactome","id":"REACT_14514.1"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P05556"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9UKX5"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_68_human"},{"db":"reactome","id":"REACT_13937.1"},{"db":"intact","id":"EBI-2568057"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P05556"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P06756"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGIELLCLFFLFLGRNDHVQGGCALGGAETCEDCLLIGPQCAWCAQENFTHPSGVGERCDTPANLLAKGCQLNFIENPVSQVEILKNKPLSVGRQKNSSDIVQIAPQSLILKLRPGGAQTLQVHVRQTEDYPVDLYYLMDLSASMDDDLNTIKELGSRLSKEMSKLTSNFRLGFGSFVEKPVSPFVKTTPEEIANPCSSIPYFCLPTFGFKHILPLTNDAERFNEIVKNQKISANIDTPEGGFDAIMQAAVCKEKIGWRNDSLHLLVFVSDADSHFGMDSKLAGIVIPNDGLCHLDSKNEYSMSTVLEYPTIGQLIDKLVQNNVLLIFAVTQEQVHLYENYAKLIPGATVGLLQKDSGNILQLIISAYEELRSEVELEVLGDTEGLNLSFTAICNNGTLFQHQKKCSHMKVGDTASFSVTVNIPHCERRSRHIIIKPVGLGDALELLVSPECNCDCQKEVEVNSSKCHHGNGSFQCGVCACHPGHMGPRCECGEDMLSTDSCKEAPDHPSCSGRGDCYCGQCICHLSPYGNIYGPYCQCDNFSCVRHKGLLCGGNGDCDCGECVCRSGWTGEYCNCTTSTDSCVSEDGVLCSGRGDCVCGKCVCTNPGASGPTCERCPTCGDPCNSKRSCIECHLSAAGQAREECVDKCKLAGATISEEEDFSKDGSVSCSLQGENECLITFLITTDNEGKTIIHSINEKDCPKPPNIPMIMLGVSLAILLIGVVLLCIWKLLVSFHDRKEVAKFEAERSKAKWQTGTNPLYRGSTSTFKNVTYKHREKQKVDLSTDC",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P18564"},
		"label":"itb6_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"reactome","id":"REACT_14276.1"},{"db":"intact","id":"EBI-2568099"},{"db":"matrixdb","id":"MULT_69_human"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P06756"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P18564"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MCGSALAFFTAAFVCLQNDRRGPASFLWAAWVFSLVLGLGQGEDNRCASSNAASCARCLALGPECGWCVQEDFISGGSRSERCDIVSNLISKGCSVDSIEYPSVHVIIPTENEINTQVTPGEVSIQLRPGAEANFMLKVHPLKKYPVDLYYLVDVSASMHNNIEKLNSVGNDLSRKMAFFSRDFRLGFGSYVDKTVSPYISIHPERIHNQCSDYNLDCMPPHGYIHVLSLTENITEFEKAVHRQKISGNIDTPEGGFDAMLQAAVCESHIGWRKEAKRLLLVMTDQTSHLALDSKLAGIVVPNDGNCHLKNNVYVKSTTMEHPSLGQLSEKLIDNNINVIFAVQGKQFHWYKDLLPLLPGTIAGEIESKAANLNNLVVEAYQKLISEVKVQVENQVQGIYFNITAICPDGSRKPGMEGCRNVTSNDEVLFNVTVTMKKCDVTGGKNYAIIKPIGFNETAKIHIHRNCSCQCEDNRGPKGKCVDETFLDSKCFQCDENKCHFDEDQFSSESCKSHKDQPVCSGRGVCVCGKCSCHKIKLGKVYGKYCEKDDFSCPYHHGNLCAGHGECEAGRCQCFSGWEGDRCQCPSAAAQHCVNSKGQVCSGRGTCVCGRCECTDPRSIGRFCEHCPTCYTACKENWNCMQCLHPHNLSQAILDQCKTSCALMEQQHYVDQTSECFSSPSYLRIFFIIFIVTFLIGLLKVLIIRQVILQWNSNKIKSSSDYRVSASKKDKLILQSVCTRAVTYRREKPEEIKMDISKLNAHETFRCNF",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P26012"},
		"label":"itb8_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_70_human"},{"db":"reactome","id":"REACT_14042.1"},{"db":"intact","id":"EBI-2568170"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P26012"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P06756"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAGPRPSPWARLLLAALISVSLSGTLANRCKKAPVKSCTECVRVDKDCAYCTDEMFRDRRCNTQAELLAAGCQRESIVVMESSFQITEETQIDTTLRRSQMSPQGLRVRLRPGEERHFELEVFEPLESPVDLYILMDFSNSMSDDLDNLKKMGQNLARVLSQLTSDYTIGFGKFVDKVSVPQTDMRPEKLKEPWPNSDPPFSFKNVISLTEDVDEFRNKLQGERISGNLDAPEGGFDAILQTAVCTRDIGWRPDSTHLLVFSTESAFHYEADGANVLAGIMSRNDERCHLDTTGTYTQYRTQDYPSVPTLVRLLAKHNIIPIFAVTNYSYSYYEKLHTYFPVSSLGVLQEDSSNIVELLEEAFNRIRSNLDIRALDSPRGLRTEVTSKMFQKTRTGSFHIRRGEVGIYQVQLRALEHVDGTHVCQLPEDQKGNIHLKPSFSDGLKMDAGIICDVCTCELQKEVRSARCSFNGDFVCGQCVCSEGWSGQTCNCSTGSLSDIQPCLREGEDKPCSGRGECQCGHCVCYGEGRYEGQFCEYDNFQCPRTSGFLCNDRGRCSMGQCVCEPGWTGPSCDCPLSNATCIDSNGGICNGRGHCECGRCHCHQQSLYTDTICEINYSAIHPGLCEDLRSCVQCQAWGTGEKKGRTCEECNFKVKMVDELKRAEEVVVRCSFRDEDDDCTYSYTMEGDGAPGPNSTVLVHKKKDCPPGSFWWLIPLLLLLLPLLALLLLLCWKYCACCKACLALLPCCNRGHMVGFKEDHYMLRENLMASDHLDTPMLRSGNLKGRDVVRWKVTNNMQRPGFATHAASINPTELVPYGLSLRLARLCTENLLKPDTRECAQLRQEVEENLNEVYRQISGVHKLQQTKFRQQPNAGKKQDHTIVDTVLMAPRSAKPALLKLTEKQVEQRAFHDLKVAPGYYTLTADQDARGMVEFQEGVELVDVRVPLFIRPEDDDEKQLLVEAIDVPAGTATLGRRLVNITIIKEQARDVVSFEQPEFSVSRGDQVARIPVIRRVLDGGKSQVSYRTQDGTAQGNRDYIPVEGELLFQPGEAWKELQVKLLELQEVDSLLRGRQVRRFHVQLSNPKFGAHLGQPHSTTIIIRDPDELDRSFTSQMLSSQPPPHGDLGAPQNPNAKAAGSRKIHFNWLPPSGKPMGYRVKYWIQGDSESEAHLLDSKVPSVELTNLYPYCDYEMKVCAYGAQGEGPYSSLVSCRTHQEVPSEPGRLAFNVVSSTVTQLSWAEPAETNGEITAYEVCYGLVNDDNRPIGPMKKVLVDNPKNRMLLIENLRESQPYRYTVKARNGAGWGPEREAIINLATQPKRPMSIPIIPDIPIVDAQSGEDYDSFLMYSDDVLRSPSGSQRPSVSDDTGCGWKFEPLLGEELDLRRVTWRLPPELIPRLSASSGRSSDAEAPHGPPDDGGAGGKGGSLPRSATPGPPGEHLVNGRMDFAFPGSTNSLHRMTTTSAAAYGTHLSPHVPHRVLSTSSTLTRDYNSLTRSEHSHSTTLPRDYSTLTSVSSHDSRLTAGVPDTPTRLVFSALGPTSLRVSWQEPRCERPLQGYSVEYQLLNGGELHRLNIPNPAQTSVVVEDLLPNHSYVFRVRAQSQEGWGREREGVITIESQVHPQSPLCPLPGSAFTLSTPSAPGPLVFTALSPDSLQLSWERPRRPNGDIVGYLVTCEMAQGGGPATAFRVDGDSPESRLTVPGLSENVPYKFKVQARTTEGFGPEREGIITIESQDGGPFPQLGSRAGLFQHPLQSEYSSITTTHTSATEPFLVDGLTLGAQHLEAGGSLTRHVTQEFVSRTLTTSGTLSTHMDQQFFQT",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P16144"},
		"label":"itb4_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_71_human"},{"db":"intact","id":"EBI-2568184"},{"db":"reactome","id":"REACT_14337.2"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P16144"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P23229"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MVALPMVLVLLLVLSRGESELDAKIPSTGDATEWRNPHLSMLGSCQPAPSCQKCILSHPSCAWCKQLNFTASGEAEARRCARREELLARGCPLEELEEPRGQQEVLQDQPLSQGARGEGATQLAPQRVRVTLRPGEPQQLQVRFLRAEGYPVDLYYLMDLSYSMKDDLERVRQLGHALLVRLQEVTHSVRIGFGSFVDKTVLPFVSTVPSKLRHPCPTRLERCQSPFSFHHVLSLTGDAQAFEREVGRQSVSGNLDSPEGGFDAILQAALCQEQIGWRNVSRLLVFTSDDTFHTAGDGKLGGIFMPSDGHCHLDSNGLYSRSTEFDYPSVGQVAQALSAANIQPIFAVTSAALPVYQELSKLIPKSAVGELSEDSSNVVQLIMDAYNSLSSTVTLEHSSLPPGVHISYESQCEGPEKREGKAEDRGQCNHVRINQTVTFWVSLQATHCLPEPHLLRLRALGFSEELIVELHTLCDCNCSDTQPQAPHCSDGQGHLQCGVCSCAPGRLGRLCECSVAELSSPDLESGCRAPNGTGPLCSGKGHCQCGRCSCSGQSSGHLCECDDASCERHEGILCGGFGRCQCGVCHCHANRTGRACECSGDMDSCISPEGGLCSGHGRCKCNRCQCLDGYYGALCDQCPGCKTPCERHRDCAECGAFRTGPLATNCSTACAHTNVTLALAPILDDGWCKERTLDNQLFFFLVEDDARGTVVLRVRPQEKGADHTQAIVLGCVGGIVAVGLGLVLAYRLSVEIYDRREYSRFEKEQQQLNWKQDSNPLYKSAITTTINPRFQEADSPTL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P26010"},
		"label":"itb7_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_72_human"},{"db":"reactome","id":"REACT_11974.1"},{"db":"intact","id":"EBI-2568198"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P23229"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P26010"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MWLFHTLLCIASLALLAAFNVDVARPWLTPKGGAPFVLSSLLHQDPSTNQTWLLVTSPRTKRTPGPLHRCSLVQDEILCHPVEHVPIPKGRHRGVTVVRSHHGVLICIQVLVRRPHSLSSELTGTCSLLGPDLRPQAQANFFDLENLLDPDARVDTGDCYSNKEGGGEDDVNTARQRRALEKEEEEDKEEEEDEEEEEAGTEIAIILDGSGSIDPPDFQRAKDFISNMMRNFYEKCFECNFALVQYGGVIQTEFDLRDSQDVMASLARVQNITQVGSVTKTASAMQHVLDSIFTSSHGSRRKASKVMVVLTDGGIFEDPLNLTTVINSPKMQGVERFAIGVGEEFKSARTARELNLIASDPDETHAFKVTNYMALDGLLSKLRYNIISMEGTVGDALHYQLAQIGFSAQILDERQVLLGAVGAFDWSGGALLYDTRSRRGRFLNQTAAAAADAEAAQYSYLGYAVAVLHKTCSLSYIAGAPRYKHHGAVFELQKEGREASFLPVLEGEQMGSYFGSELCPVDIDMDGSTDFLLVAAPFYHVHGEEGRVYVYRLSEQDGSFSLARILSGHPGFTNARFGFAMAAMGDLSQDKLTDVAIGAPLEGFGADDGASFGSVYIYNGHWDGLSASPSQRIRASTVAPGLQYFGMSMAGGFDISGDGLADITVGTLGQAVVFRSRPVVRLKVSMAFTPSALPIGFNGVVNVRLCFEISSVTTASESGLREALLNFTLDVDVGKQRRRLQCSDVRSCLGCLREWSSGSQLCEDLLLMPTEGELCEEDCFSNASVKVSYQLQTPEGQTDHPQPILDRYTEPFAIFQLPYEKACKNKLFCVAELQLATTVSQQELVVGLTKELTLNINLTNSGEDSYMTSMALNYPRNLQLKRMQKPPSPNIQCDDPQPVASVLIMNCRIGHPVLKRSSAHVSVVWQLEENAFPNRTADITVTVTNSNERRSLANETHTLQFRHGFVAVLSKPSIMYVNTGQGLSHHKEFLFHVHGENLFGAEYQLQICVPTKLRGLQVVAVKKLTRTQASTVCTWSQERACAYSSVQHVEEWHSVSCVIASDKENVTVAAEISWDHSEELLKDVTELQILGEISFNKSLYEGLNAENHRTKITVVFLKDEKYHSLPIIIKGSVGGLLVLIVILVILFKCGFFKRKYQQLNLESIRKAQLKSENLLEEEN",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P38570"},
		"label":"itae_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"reactome","id":"REACT_13938.1"},{"db":"matrixdb","id":"MULT_73_human"},{"db":"intact","id":"EBI-2568216"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P38570"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P26010"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKDSCITVMAMALLSGFFFFAPASSYNLDVRGARSFSPPRAGRHFGYRVLQVGNGVIVGAPGEGNSTGSLYQCQSGTGHCLPVTLRGSNYTSKYLGMTLATDPTDGSILACDPGLSRTCDQNTYLSGLCYLFRQNLQGPMLQGRPGFQECIKGNVDLVFLFDGSMSLQPDEFQKILDFMKDVMKKLSNTSYQFAAVQFSTSYKTEFDFSDYVKRKDPDALLKHVKHMLLLTNTFGAINYVATEVFREELGARPDATKVLIIITDGEATDSGNIDAAKDIIRYIIGIGKHFQTKESQETLHKFASKPASEFVKILDTFEKLKDLFTELQKKIYVIEGTSKQDLTSFNMELSSSGISADLSRGHAVVGAVGAKDWAGGFLDLKADLQDDTFIGNEPLTPEVRAGYLGYTVTWLPSRQKTSLLASGAPRYQHMGRVLLFQEPQGGGHWSQVQTIHGTQIGSYFGGELCGVDVDQDGETELLLIGAPLFYGEQRGGRVFIYQRRQLGFEEVSELQGDPGYPLGRFGEAITALTDINGDGLVDVAVGAPLEEQGAVYIFNGRHGGLSPQPSQRIEGTQVLSGIQWFGRSIHGVKDLEGDGLADVAVGAESQMIVLSSRPVVDMVTLMSFSPAEIPVHEVECSYSTSNKMKEGVNITICFQIKSLIPQFQGRLVANLTYTLQLDGHRTRRRGLFPGGRHELRRNIAVTTSMSCTDFSFHFPVCVQDLISPINVSLNFSLWEEEGTPRDQRAQGKDIPPILRPSLHSETWEIPFEKNCGEDKKCEANLRVSFSPARSRALRLTAFASLSVELSLSNLEEDAYWVQLDLHFPPGLSFRKVEMLKPHSQIPVSCEELPEESRLLSRALSCNVSSPIFKAGHSVALQMMFNTLVNSSWGDSVELHANVTCNNEDSDLLEDNSATTIIPILYPINILIQDQEDSTLYVSFTPKGPKIHQVKHMYQVRIQPSIHDHNIPTLEAVVGVPQPPSEGPITHQWSVQMEPPVPCHYEDLERLPDAAEPCLPGALFRCPVVFRQEILVQVIGTLELVGEIEASSMFSLCSSLSISFNSSKHFHLYGSNASLAQVVMKVDVVYEKQMLYLYVLSGIGGLLLLLLIFIVLYKVGFFKRNLKEKMEAGRGVPNGIPAEDSEQLASGQEAGDPGCLKPLHEKDSESGGGKD",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P20701"},
		"label":"ital_human"
	},
	{
		"object":"interactor",
		"sequence":"MLGLRPPLLALVGLLSLGCVLSQECTKFKVSSCRECIESGPGCTWCQKLNFTGPGDPDSIRCDTRPQLLMRGCAADDIMDPTSLAETQEDHNGGQKQLSPQKVTLYLRPGQAAAFNVTFRRAKGYPIDLYYLMDLSYSMLDDLRNVKKLGGDLLRALNEITESGRIGFGSFVDKTVLPFVNTHPDKLRNPCPNKEKECQPPFAFRHVLKLTNNSNQFQTEVGKQLISGNLDAPEGGLDAMMQVAACPEEIGWRNVTRLLVFATDDGFHFAGDGKLGAILTPNDGRCHLEDNLYKRSNEFDYPSVGQLAHKLAENNIQPIFAVTSRMVKTYEKLTEIIPKSAVGELSEDSSNVVQLIKNAYNKLSSRVFLDHNALPDTLKVTYDSFCSNGVTHRNQPRGDCDGVQINVPITFQVKVTATECIQEQSFVIRALGFTDIVTVQVLPQCECRCRDQSRDRSLCHGKGFLECGICRCDTGYIGKNCECQTQGRSSQELEGSCRKDNNSIICSGLGDCVCGQCLCHTSDVPGKLIYGQYCECDTINCERYNGQVCGGPGRGLCFCGKCRCHPGFEGSACQCERTTEGCLNPRRVECSGRGRCRCNVCECHSGYQLPLCQECPGCPSPCGKYISCAECLKFEKGPFGKNCSAACPGLQLSNNPVKGRTCKERDSEGCWVAYTLEQQDGMDRYLIYVDESRECVAGPNIAAIVGGTVAGIVLIGILLLVIWKALIHLSDLREYRRFEKEKLKSQWNNDNPLFKSATTTVMNPKFAES",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P05107"},
		"label":"itb2_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_74_human"},{"db":"intact","id":"EBI-2568233"},{"db":"reactome","id":"REACT_11837.1"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P20701"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P05107"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MALRVLLLTALTLCHGFNLDTENAMTFQENARGFGQSVVQLQGSRVVVGAPQEIVAANQRGSLYQCDYSTGSCEPIRLQVPVEAVNMSLGLSLAATTSPPQLLACGPTVHQTCSENTYVKGLCFLFGSNLRQQPQKFPEALRGCPQEDSDIAFLIDGSGSIIPHDFRRMKEFVSTVMEQLKKSKTLFSLMQYSEEFRIHFTFKEFQNNPNPRSLVKPITQLLGRTHTATGIRKVVRELFNITNGARKNAFKILVVITDGEKFGDPLGYEDVIPEADREGVIRYVIGVGDAFRSEKSRQELNTIASKPPRDHVFQVNNFEALKTIQNQLREKIFAIEGTQTGSSSSFEHEMSQEGFSAAITSNGPLLSTVGSYDWAGGVFLYTSKEKSTFINMTRVDSDMNDAYLGYAAAIILRNRVQSLVLGAPRYQHIGLVAMFRQNTGMWESNANVKGTQIGAYFGASLCSVDVDSNGSTDLVLIGAPHYYEQTRGGQVSVCPLPRGRARWQCDAVLYGEQGQPWGRFGAALTVLGDVNGDKLTDVAIGAPGEEDNRGAVYLFHGTSGSGISPSHSQRIAGSKLSPRLQYFGQSLSGGQDLTMDGLVDLTVGAQGHVLLLRSQPVLRVKAIMEFNPREVARNVFECNDQVVKGKEAGEVRVCLHVQKSTRDRLREGQIQSVVTYDLALDSGRPHSRAVFNETKNSTRRQTQVLGLTQTCETLKLQLPNCIEDPVSPIVLRLNFSLVGTPLSAFGNLRPVLAEDAQRLFTALFPFEKNCGNDNICQDDLSITFSFMSLDCLVVGGPREFNVTVTVRNDGEDSYRTQVTFFFPLDLSYRKVSTLQNQRSQRSWRLACESASSTEVSGALKSTSCSINHPIFPENSEVTFNITFDVDSKASLGNKLLLKANVTSENNMPRTNKTEFQLELPVKYAVYMVVTSHGVSTKYLNFTASENTSRVMQHQYQVSNLGQRSLPISLVFLVPVRLNQTVIWDRPQVTFSENLSSTCHTKERLPSHSDFLAELRKAPVVNCSIAVCQRIQCDIPFFGIQEEFNATLKGNLSFDWYIKTSHNHLLIVSTAEILFNDSVFTLLPGQGAFVRSQTETKVEPFEVPNPLPLIVGSSVGGLLLLALITAALYKLGFFKRQYKDMMSEGGPPGAEPQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P11215"},
		"label":"itam_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"reactome","id":"REACT_12291.1"},{"db":"matrixdb","id":"MULT_75_human"},{"db":"intact","id":"EBI-2568294"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P05107"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P11215"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MTRTRAALLLFTALATSLGFNLDTEELTAFRVDSAGFGDSVVQYANSWVVVGAPQKITAANQTGGLYQCGYSTGACEPIGLQVPPEAVNMSLGLSLASTTSPSQLLACGPTVHHECGRNMYLTGLCFLLGPTQLTQRLPVSRQECPRQEQDIVFLIDGSGSISSRNFATMMNFVRAVISQFQRPSTQFSLMQFSNKFQTHFTFEEFRRSSNPLSLLASVHQLQGFTYTATAIQNVVHRLFHASYGARRDAAKILIVITDGKKEGDSLDYKDVIPMADAAGIIRYAIGVGLAFQNRNSWKELNDIASKPSQEHIFKVEDFDALKDIQNQLKEKIFAIEGTETTSSSSFELEMAQEGFSAVFTPDGPVLGAVGSFTWSGGAFLYPPNMSPTFINMSQENVDMRDSYLGYSTELALWKGVQSLVLGAPRYQHTGKAVIFTQVSRQWRMKAEVTGTQIGSYFGASLCSVDVDSDGSTDLVLIGAPHYYEQTRGGQVSVCPLPRGWRRWWCDAVLYGEQGHPWGRFGAALTVLGDVNGDKLTDVVIGAPGEEENRGAVYLFHGVLGPSISPSHSQRIAGSQLSSRLQYFGQALSGGQDLTQDGLVDLAVGARGQVLLLRTRPVLWVGVSMQFIPAEIPRSAFECREQVVSEQTLVQSNICLYIDKRSKNLLGSRDLQSSVTLDLALDPGRLSPRATFQETKNRSLSRVRVLGLKAHCENFNLLLPSCVEDSVTPITLRLNFTLVGKPLLAFRNLRPMLAADAQRYFTASLPFEKNCGADHICQDNLGISFSFPGLKSLLVGSNLELNAEVMVWNDGEDSYGTTITFSHPAGLSYRYVAEGQKQGQLRSLHLTCDSAPVGSQGTWSTSCRINHLIFRGGAQITFLATFDVSPKAVLGDRLLLTANVSSENNTPRTSKTTFQLELPVKYAVYTVVSSHEQFTKYLNFSESEEKESHVAMHRYQVNNLGQRDLPVSINFWVPVELNQEAVWMDVEVSHPQNPSLRCSSEKIAPPASDFLAHIQKNPVLDCSIAGCLRFRCDVPSFSVQEELDFTLKGNLSFGWVRQILQKKVSVVSVAEITFDTSVYSQLPGQEAFMRAQTTTVLEKYKVHNPTPLIVGSSIGGLLLLALITAVLYKVGFFKRQYKEMMEEANGQIAPENGTQTPSPPSEK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P20702"},
		"label":"itax_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"matrixdb","id":"MULT_76_human"},{"db":"wwpdb","id":"3k6s"},{"db":"intact","id":"EBI-2568341"},{"db":"wwpdb","id":"3k72"},{"db":"wwpdb","id":"3k71"},{"db":"reactome","id":"REACT_12091.1"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P05107"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P20702"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MTFGTVLLLSVLASYHGFNLDVEEPTIFQEDAGGFGQSVVQFGGSRLVVGAPLEVVAANQTGRLYDCAAATGMCQPIPLHIRPEAVNMSLGLTLAASTNGSRLLACGPTLHRVCGENSYSKGSCLLLGSRWEIIQTVPDATPECPHQEMDIVFLIDGSGSIDQNDFNQMKGFVQAVMGQFEGTDTLFALMQYSNLLKIHFTFTQFRTSPSQQSLVDPIVQLKGLTFTATGILTVVTQLFHHKNGARKSAKKILIVITDGQKYKDPLEYSDVIPQAEKAGIIRYAIGVGHAFQGPTARQELNTISSAPPQDHVFKVDNFAALGSIQKQLQEKIYAVEGTQSRASSSFQHEMSQEGFSTALTMDGLFLGAVGSFSWSGGAFLYPPNMSPTFINMSQENVDMRDSYLGYSTELALWKGVQNLVLGAPRYQHTGKAVIFTQVSRQWRKKAEVTGTQIGSYFGASLCSVDVDSDGSTDLILIGAPHYYEQTRGGQVSVCPLPRGRVQWQCDAVLRGEQGHPWGRFGAALTVLGDVNEDKLIDVAIGAPGEQENRGAVYLFHGASESGISPSHSQRIASSQLSPRLQYFGQALSGGQDLTQDGLMDLAVGARGQVLLLRSLPVLKVGVAMRFSPVEVAKAVYRCWEEKPSALEAGDATVCLTIQKSSLDQLGDIQSSVRFDLALDPGRLTSRAIFNETKNPTLTRRKTLGLGIHCETLKLLLPDCVEDVVSPIILHLNFSLVREPIPSPQNLRPVLAVGSQDLFTASLPFEKNCGQDGLCEGDLGVTLSFSGLQTLTVGSSLELNVIVTVWNAGEDSYGTVVSLYYPAGLSHRRVSGAQKQPHQSALRLACETVPTEDEGLRSSRCSVNHPIFHEGSNGTFIVTFDVSYKATLGDRMLMRASASSENNKASSSKATFQLELPVKYAVYTMISRQEESTKYFNFATSDEKKMKEAEHRYRVNNLSQRDLAISINFWVPVLLNGVAVWDVVMEAPSQSLPCVSERKPPQHSDFLTQISRSPMLDCSIADCLQFRCDVPSFSVQEELDFTLKGNLSFGWVRETLQKKVLVVSVAEITFDTSVYSQLPGQEAFMRAQMEMVLEEDEVYNAIPIIMGSSVGALLLLALITATLYKLGFFKRHYKEMLEDKPEDTATFSGDDFSCVAPNVPLS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q13349"},
		"label":"itad_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"reactome","id":"REACT_14521.1"},{"db":"intact","id":"EBI-2568401"},{"db":"matrixdb","id":"MULT_77_human"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q13349"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P05107"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKFRAKIVDGACLNHFTRISNMIAKLAKTCTLRISPDKLNFILCDKLANGGVSMWCELEQENFFNEFQMEGVSAENNEIYLELTSENLSRALKTAQNARALKIKLTNKHFPCLTVSVELLSMSSSSRIVTHDIPIKVIPRKLWKDLQEPVVPDPDVSIYLPVLKTMKSVVEKMKNISNHLVIEANLDGELNLKIETELVCVTTHFKDLGNPPLASESTHEDRNVEHMAEVHIDIRKLLQFLAGQQVNPTKALCNIVNNKMVHFDLLHEDVSLQYFIPALS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O60921"},
		"label":"hus1_human"
	},
	{
		"object":"interactor",
		"sequence":"MKCLVTGGNVKVLGKAVHSLSRIGDELYLEPLEDGLSLRTVNSSRSAYACFLFAPLFFQQYQAATPGQDLLRCKILMKSFLSVFRSLAMLEKTVEKCCISLNGRSSRLVVQLHCKFGVRKTHNLSFQDCESLQAVFDPASCPHMLRAPARVLGEAVLPFSPALAEVTLGIGRGRRVILRSYHEEEADSTAKAMVTEMCLGEEDFQQLQAQEGVAITFCLKEFRGLLSFAESANLNLSIHFDAPGRPAIFTIKDSLLDGHFVLATLSDTDSHSQDLGSPERHQPVPQLQAHSTPHPDDFANDDIDSYMIAMETTIGNEGSRVLPSISLSPGPQPPKSPGPHSEEEDEAEPSTVPGTPPPKKFRSLFFGSILAPVRSPQGPSPVLAEDSEGEG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q99638"},
		"label":"rad9a_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"3A1J"},{"db":"wwpdb","id":"3G65"},{"db":"intact","id":"EBI-2606881"},{"db":"intenz","id":"3.1.11.2"},{"db":"wwpdb","id":"3GGR"},{"db":"reactome","id":"REACT_7593.1"}],
		"expansion":{"id":"32","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O60921"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q99638"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MPLLTQQIQDEDDQYSLVASLDNVRNLSTILKAIHFREHATCFATKNGIKVTVENAKCVQANAFIQAGIFQEFKVQEESVTFRINLTVLLDCLSIFGSSPMPGTLTALRMCYQGYGYPLMLFLEEGGVVTVCKINTQEPEETLDFDFCSTNVINKIILQSEGLREAFSELDMTSEVLQITMSPDKPYFRLSTFGNAGSSHLDYPKDSDLMEAFHCNQTQVNRYKISLLKPSTKALVLSCKVSIRTDNRGFLSLQYMIRNEDGQICFVEYYCCPDEEVPESES",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O60671"},
		"label":"rad1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"3A1J"},{"db":"wwpdb","id":"3G65"},{"db":"intact","id":"EBI-2606881"},{"db":"intenz","id":"3.1.11.2"},{"db":"wwpdb","id":"3GGR"},{"db":"reactome","id":"REACT_7593.1"}],
		"expansion":{"id":"32","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"O60921"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O60671"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAEISDLDRQIEQLRRCELIKESEVKALCAKAREILVEESNVQRVDSPVTVCGDIHGQFYDLKELFRVGGDVPETNYLFMGDFVDRGFYSVETFLLLLALKVRYPDRITLIRGNHESRQITQVYGFYDECLRKYGSVTVWRYCTEIFDYLSLSAIIDGKIFCVHGGLSPSIQTLDQIRTIDRKQEVPHDGPMCDLLWSDPEDTTGWGVSPRGAGYLFGSDVVAQFNAANDIDMICRAHQLVMEGYKWHFNETVLTVWSAPNYCYRCGNVAAILELDEHLQKDFIIFEAAPQETRGIPSKKPVADYFL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P60510"},
		"label":"pp4c_human"
	},
	{
		"object":"interactor",
		"sequence":"MADLSLLQEDLQEDADGFGVDDYSSESDVIIIPSALDFVSQDEMLTPLGRLDKYAASENIFNRQMVARSLLDTLREVCDDERDCIAVLERISRLADDSEPTVRAELMEQVPHIALFCQENRPSIPYAFSKFLLPIVVRYLADQNNQVRKTSQAALLALLEQELIERFDVETKVCPVLIELTAPDSNDDVKTEAVAIMCKMAPMVGKDITERLILPRFCEMCCDCRMFHVRKVCAANFGDICSVVGQQATEEMLLPRFFQLCSDNVWGVRKACAECFMAVSCATCQEIRRTKLSALFINLISDPSRWVRQAAFQSLGPFISTFANPSSSGQYFKEESKSSEEMSVENKNRTRDQEAPEDVQVRPEDTPSDLSVSNSSVILENTMEDHAAEASGKPLGEISVPLDSSLLCTLSSESHQEAASNENDKKPGNYKSMLRPEVGTTSQDSALLDQELYNSFHFWRTPLPEIDLDIELEQNSGGKPSPEGPEEESEGPVPSSPNITMATRKELEEMIENLEPHIDDPDVKAQVEVLSAALRASSLDAHEETISIEKRSDLQDELDINELPNCKINQEDSVPLISDAVENMDSTLHYIHSDSDLSNNSSFSPDEERRTKVQDVVPQALLDQYLSMTDPSRAQTVDTEIAKHCAYSLPGVALTLGRQNWHCLRETYETLASDMQWKVRRTLAFSIHELAVILGDQLTAADLVPIFNGFLKDLDEVRIGVLKHLHDFLKLLHIDKRREYLYQLQEFLVTDNSRNWRFRAELAEQLILLLELYSPRDVYDYLRPIALNLCADKVSSVRWISYKLVSEMVKKLHAATPPTFGVDLINELVENFGRCPKWSGRQAFVFVCQTVIEDDCLPMDQFAVHLMPHLLTLANDRVPNVRVLLAKTLRQTLLEKDYFLASASCHQEAVEQTIMALQMDRDSDVKYFASIHPASTKISEDAMSTASSTY",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q8TF05"},
		"label":"pp4r1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"3.1.3.16"},{"db":"intact","id":"EBI-2638619"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P60510"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q8TF05"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDVERLQEALKDFEKRGKKEVCPVLDQFLCHVAKTGETMIQWSQFKGYFIFKLEKVMDDFRTSAPEPRGPPNPNVEYIPFDEMKERILKIVTGFNGIPFTIQRLCELLTDPRRNYTGTDKFLRGVEKNVMVVSCVYPSSEKNNSNSLNRMNGVMFPGNSPSYTERSNINGPGTPRPLNRPKVSLSAPMTTNGLPESTDSKEANLQQNEEKNHSDSSTSESEVSSVSPLKNKHPDEDAVEAEGHEVKRLRFDKEGEVRETASQTTSSEISSVMVGETEASSSSQDKDKDSRCTRQHCTEEDEEEDEEEEEESFMTSREMIPERKNQEKESDDALTVNEETSEENNQMEESDVSQAEKDLLHSEGSENEGPVSSSSSDCRETEELVGSNSSKTGEILSESSMENDDEATEVTDEPMEQD",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9NY27"},
		"label":"pp4r2_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"3.1.3.16"},{"db":"intact","id":"EBI-2638963"}],
		"expansion":{"id":"33","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P60510"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9NY27"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MTDTRRRVKVYTLNEDRQWDDRGTGHVSSGYVERLKGMSLLVRAESDGSLLLESKINPNTAYQKQQDTLIVWSEAENYDLALSFQEKAGCDEIWEKICQVQGKDPSVDITQDLVDESEEERFDDMSSPGLELPSCELSRLEEIAELVASSLPSPLRREKLALALENEGYIKKLLELFHVCEDLENIEGLHHLYEIIKGIFLLNRTALFEVMFSEECIMDVIGCLEYDPALSQPRKHREFLTKTAKFKEVIPISDPELKQKIHQTYRVQYIQDMVLPTPSVFEENMLSTLHSFIFFNKVEIVGMLQEDEKFLTDLFAQLTDEATDEEKRQELVNFLKEFCAFSQTLQPQNRDAFFKTLSNMGILPALEVILGMDDTQVRSAATDIFSYLVEYNPSMVREFVMQEAQQNDDVSKKLTEQKITSKDILLINLIIEHMICDTDPELGGAVQLMGLLRTLVDPENMLATANKTEKTEFLGFFYKHCMHVLTAPLLANTTEDKPSKDDFQTAQLLALVLELLTFCVEHHTYHIKNYIINKDILRRVLVLMASKHAFLALCALRFKRKIIGLKDEFYNRYIMKSFLFEPVVKAFLNNGSRYNLMNSAIIEMFEFIRVEDIKSLTAHVIENYWKALEDVDYVQTFKGLKLRFEQQRERQDNPKLDSMRSILRNHRYRRDARTLEDEEEMWFNTDEDDMEDGEAVVSPSDKTKNDDDIMDPISKFMERKKLKESEEKEVLLKTNLSGRQSPSFKLSLSSGTKTNLTSQSSTTNLPGSPGSPGSPGSPGSPGSVPKNTSQTAAITTKGGLVGLVDYPDDDEDDDEDEDKEDTLPLSKKAKFDS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q6IN85"},
		"label":"p4r3a_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"3.1.3.16"},{"db":"intact","id":"EBI-2638963"}],
		"expansion":{"id":"33","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P60510"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q6IN85"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"3.1.3.16"},{"db":"intact","id":"EBI-2638974"}],
		"expansion":{"id":"34","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P60510"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9NY27"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSDTRRRVKVYTLNEDRQWDDRGTGHVSSTYVEELKGMSLLVRAESDGSLLLESKINPNTAYQKQQDTLIVWSEAENYDLALSFQEKAGCDEIWEKICQVQGKDPSVEVTQDLIDESEEERFEEMPETSHLIDLPTCELNKLEEIADLVTSVLSSPIRREKLALALENEGYIKKLLQLFQACENLENTEGLHHLYEIIRGILFLNKATLFEVMFSDECIMDVVGCLEYDPALAQPKRHREFLTKTAKFKEVIPITDSELRQKIHQTYRVQYIQDIILPTPSVFEENFLSTLTSFIFFNKVEIVSMLQEDEKFLSEVFAQLTDEATDDDKRRELVNFFKEFCAFSQTLQPQNRDAFFKTLAKLGILPALEIVMGMDDLQVRSAATDIFSYLVEFSPSMVREFVMQEAQQSDDDILLINVVIEQMICDTDPELGGAVQLMGLLRTLIDPENMLATTNKTEKSEFLNFFYNHCMHVLTAPLLTNTSEDKCEKDFFLKHYRYSWSFICTPSHSHSHSTPSSSISQDNIVGSNKNNTICPDNYQTAQLLALILELLTFCVEHHTYHIKNYIMNKDLLRRVLVLMNSKHTFLALCALRFMRRIIGLKDEFYNRYITKGNLFEPVINALLDNGTRYNLLNSAVIELFEFIRVEDIKSLTAHIVENFYKALESIEYVQTFKGLKTKYEQEKDRQNQKLNSVPSILRSNRFRRDAKALEEDEEMWFNEDEEEEGKAVVAPVEKPKPEDDFPDNYEKFMETKKAKESEDKENLPKRTSPGGFKFTFSHSASAANGTNSKSVVAQIPPATSNGSSSKTTNLPTSVTATKGSLVGLVDYPDDEEEDEEEESSPRKRPRLGS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q5MIZ7"},
		"label":"p4r3b_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"3.1.3.16"},{"db":"intact","id":"EBI-2638974"}],
		"expansion":{"id":"34","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P60510"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q5MIZ7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MHPPPPAAAMDFSQNSLFGYMEDLQELTIIERPVRRSLKTPEEIERLTVDEDLSDIERAVYLLSAGQDVQGTSVIANLPFLMRQNPTETLRRVLPKVREALHVAGVEMQLTAAMSFLTILQDESVSIHAYTHSFLQVILLHLEHRDTGVSNAWLETLLSVIEVLPKETLRHEILNPLVSKAQLSQTVQSRLVSCKILGKLTNKFDAHTIKREILPLVKSLCQDVEYEVRSCMCRQLENIAQGIGTELTKSVVLPELIELSRDEGSSVRLAAFETLVNLLDIFDTDDRSQTILPLVKSFCEKSFKADESILISLSFHLGKLCHGLYGIFTPDQHLRFLEFYKKLCTLGLQQENGHNENQIPPQILEQEKKYISVRKNCAYNFPAMIVFVDPKNFHMELYSTFFCLCHDPEVPVRYTIAICFYEVSKLLNSGVYLIHKELITLLQDESLEVLDALIDHLPEILELMSTGGESSVQENKLSSLPDLIPALTAAEQRAAASLKWRTHEKLLQKYACLPHVISSDQIYYRFLQRMFTIMMTNNVLPVQKAASRTLCIFLRYNRKQEQRHEVIQKLIEQLGQGKSYWNRLRFLDTCEFIIEIFSKSFFCKYFFLPAIELTHDPVANVRMKLCYLLPKVKSTLKIPADKHLLQQLEMCVRKLLCQEKDKDVLAIVKRTVLELDRMEMSMDAFQKKFYEKDLLDQEKEREELLLLEMEQLEKEKQQNDGRPMSDKMFEKKRRDTKTPTQSLPKNIPISVPGPSSVTPSTSKEIKKSKLIRSQSFNNQAFHAKYGNLEKCASKSSTTGYTTSVSGLGKTSVLSLADDSFRTRNASSVPSSFSPNTPLPSTSRGTGNSVDPKSSGSKDTQPRKATLKSRKSNP",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q6NUP7"},
		"label":"pp4r4_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"3.1.3.16"},{"db":"intact","id":"EBI-2638985"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P60510"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q6NUP7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MEPQEERETQVAAWLKKIFGDHPIPQYEVNPRTTEILHHLSERNRVRDRDVYLVIEDLKQKASEYESEAKYLQDLLMESVNFSPANLSSTGSRYLNALVDSAVALETKDTSLASFIPAVNDLTSDLFRTKSKSEEIKIELEKLEKNLTATLVLEKCLQEDVKKAELHLSTERAKVDNRRQNMDFLKAKSEEFRFGIKAAEEQLSARGMDASLSHQSLVALSEKLARLKQQTIPLKKKLESYLDLMPNPSLAQVKIEEAKRELDSIEAELTRRVDMMEL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q96CS2"},
		"label":"haus1_human"
	},
	{
		"object":"interactor",
		"sequence":"MELAQEARELGCWAVEEMGVPVAARAPESTLRRLCLGQGADIWAYILQHVHSQRTVKKIRGNLLWYGHQDSPQVRRKLELEAAVTRLRAEIQELDQSLELMERDTEAQDTAMEQARQHTQDTQRRALLLRAQAGAMRRQQHTLRDPMQRLQNQLRRLQDMERKAKVDVTFGSLTSAALGLEPVVLRDVRTACTLRAQFLQNLLLPQAKRGSLPTPHDDHFGTSYQQWLSSVETLLTNHPPGHVLAALEHLAAEREAEIRSLCSGDGLGDTEISRPQAPDQSDSSQTLPSMVHLIQEGWRTVGVLVSQRSTLLKERQVLTQRLQGLVEEVERRVLGSSERQVLILGLRRCCLWTELKALHDQSQELQDAAGHRQLLLRELQAKQQRILHWRQLVEETQEQVRLLIKGNSASKTRLCRSPGEVLALVQRKVVPTFEAVAPQSRELLRCLEEEVRHLPHILLGTLLRHRPGELKPLPTVLPSIHQLHPASPRGSSFIALSHKLGLPPGKASELLLPAAASLRQDLLLLQDQRSLWCWDLLHMKTSLPPGLPTQELLQIQASQEKQQKENLGQALKRLEKLLKQALERIPELQGIVGDWWEQPGQAALSEELCQGLSLPQWRLRWVQAQGALQKLCS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O94927"},
		"label":"haus5_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-2639327"}],
		"expansion":{"id":"35","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q96CS2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O94927"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGGARLGARNMAGQDAGCGRGGDDYSEDEGDSSVSRAAVEVFGKLKDLNCPFLEGLYITEPKTIQELLCSPSEYRLEILEWMCTRVWPSLQDRFSSLKGVPTEVKIQEMTKLGHELMLCAPDDQELLKGCACAQKQLHFMDQLLDTIRSLTIGCSSCSSLMEHFEDTREKNEALLGELFSSPHLQMLLNPECDPWPLDMQPLLNKQSDDWQWASASAKSEEEEKLAELARQLQESAAKLHALRTEYFAQHEQGAAAGAADISTLDQKLRLVTSDFHQLILAFLQVYDDELGECCQRPGPDLHPCGPIIQATHQNLTSYSQLLQVVMAVADTSAKAVETVKKQQGEQICWGGSSSVMSLATKMNELMEK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q99871"},
		"label":"haus7_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-2639327"}],
		"expansion":{"id":"35","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q96CS2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q99871"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSSASVTAFEKEHLWMYLQALGFEPGPATIACGKIVSHTHLGVNMFDKLNRDAFHIISYFLFQVLDQSLTKEVFKFCWPPFDQKSDTEFRKHCCEWIKRISGECGSSFPQVVGSLFLSPGGPKFIHLMYHFARFVAMKYIKSNSKNSSHHFVETFNIKPQDLHKCIARCHFARSRFLQILQRQDCVTQKYQENAQLSVKQVRNLRSECIGLENQIKKMEPYDDHSNMEEKIQKVRSLWASVNETLMFLEKEREVVSSVLSLVNQYALDGTNVAINIPRLLLDKIEKQMFQLHIGNVYEAGKLNLLTVIQLLNEVLKVMKYERCQADQARLTVDLHYLEKETKFQKERLSDLKHMRYRIKDDLTTIRHSVVEKQGEWHKKWKEFLGLSPFSLIKGWTPSVDLLPPMSPLSFDPASEEVYAKSILCQYPASLPDAHKQHNQENGCRGDSDTLGALHDLANSPASFLSQSVSSSDRNSVTVLEKDTKMGTPKEKNEAISKKIPEFEVENSPLSDVAKNTESSAFGGSLPAKKSDPFQKEQDHLVEEVARAVLSDSPQLSEGKEIKLEELIDSLGSNPFLTRNQIPRTPENLITEIRSSWRKAIEMEENRTKEPIQMDAEHREVLPESLPVLHNQREFSMADFLLETTVSDFGQSHLTEEKVISDCECVPQKHVLTSHIDEPPTQNQSDLLNKKVICKQDLECLAFTKLSETSRMETFSPAVGNRIDVMGGSEEEFMKILDHLEVSCNKPSTNKTMLWNSFQISSGISSKSFKDNDFGILHETLPEEVGHLSFNSSSSSEANFKLEPNSPMHGGTLLEDVVGGRQTTPESDFNLQALRSRYEALKKSLSKKREESYLSNSQTPERHKPELSPTPQNVQTDDTLNFLDTCDLHTEHIKPSLRTSIGERKRSLSPLIKFSPVEQRLRTTIACSLGELPNLKEEDILNKSLDAKEPPSDLTR",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q7Z4H7"},
		"label":"haus6_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-2639327"}],
		"expansion":{"id":"35","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q96CS2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q7Z4H7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MADSSGRGAGKPATGPTNSSSAKKKDKRVQGGRVIESRYLQYEKKTTQKAPAGDGSQTRGKMSEGGRKSSLLQKSKADSSGVGKGDLQSTLLEGHGTAPPDLDLSAINDKSIVKKTPQLAKTISKKPESTSFSAPRKKSPDLSEAMEMMESQTLLLTLLSVKMENNLAEFERRAEKNLLIMCKEKEKLQKKAHELKRRLLLSQRKRELADVLDAQIEMLSPFEAVATRFKEQYRTFATALDTTRHELPVRSIHLEGDGQQLLDALQHELVTTQRLLGELDVGDSEENVQVLDLLSELKDVTAKKDLELRRSFAQVLELSAEASKEAALANQEVWEETQGMAPPSRWYFNQDSACRESGGAPKNTPLSEDDNPGASSAPAQATFISPSEDFSSSSQAEVPPSLSRSGRDLS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9BT25"},
		"label":"haus8_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-2639327"}],
		"expansion":{"id":"35","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q96CS2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9BT25"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSCGNEFVETLKKIGYPKADNLNGEDFDWLFEGVEDESFLKWFCGNVNEQNVLSERELEAFSILQKSGKPILEGAALDEALKTCKTSDLKTPRLDDKELEKLEDEVQTLLKLKNLKIQRRNKCQLMASVTSHKSLRLNAKEEEATKKLKQSQGILNAMITKISNELQALTDEVTQLMMFFRHSNLGQGTNPLVFLSQFSLEKYLSQEEQSTAALTLYTKKQFFQGIHEVVESSNEDNFQLLDIQTPSICDNQEILEERRLEMARLQLAYICAQHQLIHLKASNSSMKSSIKWAEESLHSLTSKAVDKENLDAKISSLTSEIMKLEKEVTQIKDRSLPAVVRENAQLLNMPVVKGDFDLQIAKQDYYTARQELVLNQLIKQKASFELLQLSYEIELRKHRDIYRQLENLVQELSQSNMMLYKQLEMLTDPSVSQQINPRNTIDTKDYSTHRLYQVLEGENKKKELFLTHGNLEEVAEKLKQNISLVQDQLAVSAQEHSFFLSKRNKDVDMLCDTLYQGGNQLLLSDQELTEQFHKVESQLNKLNHLLTDILADVKTKRKTLANNKLHQMEREFYVYFLKDEDYLKDIVENLETQSKIKAVSLED",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q68CZ6"},
		"label":"haus3_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-2639327"}],
		"expansion":{"id":"35","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q96CS2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q68CZ6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAAANPWDPASAPNGAGLVLGHFIASGMVNQEMLNMSKKTVSCFVNFTRLQQITNIQAEIYQKNLEIELLKLEKDTADVVHPFFLAQKCHTLQSMNNHLEAVLKEKRSLRQRLLKPMCQENLPIEAVYHRYMVHLLELAVTFIERLETHLETIRNIPHLAANLKKMNQALAKMDILVTETEELAENILKWRKQQNEVSSCIPKILAEESYLYKHDIIMPPLPFTSKVHVQTINAK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9NVX0"},
		"label":"haus2_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-2639327"}],
		"expansion":{"id":"35","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q96CS2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9NVX0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MASGDFCSPGEGMEILQQVCSKQLPPCNLSKEDLLQNPYFSKLLLNLSQHVDESGLSLTLAKEQAQAWKEVRLHKTTWLRSEILHRVIQELLVDYYVKIQDTNVTSEDKKFHETLEQRLLVTELMRLLGPSQEREIPPLLGLEKADLLELMPLSEDFVWMRARLQQEVEEQLKKKCFTLLCYYDPNSDADSETVKAAKVWKLAEVLVGEQQQCQDAKSQQKEQMLLLEKKSAAYSQVLLRCLTLLQRLLQEHRLKTQSELDRINAQYLEVKCGAMILKLRMEELKILSDTYTVEKVEVHRLIRDRLEGAIHLQEQDMENSRQVLNSYEVLGEEFDRLVKEYTVLKQATENKRWALQEFSKVYR",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9H6D7"},
		"label":"haus4_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-2639327"}],
		"expansion":{"id":"35","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q96CS2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9H6D7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MPLPVQVFNLQGAVEPMQIDVDPQEDPQNAPDVNYVVENPSLDLEQYAASYSGLMRIERLQFIADHCPTLRVEALKMALSFVQRTFNVDMYEEIHRKLSEATRSSLRELQNAPDAIPESGVEPPALDTAWVEATRKKALLKLEKLDTDLKNYKGNSIKESIRRGHDDLGDHYLDCGDLSNALKCYSRARDYCTSAKHVINMCLNVIKVSVYLQNWSHVLSYVSKAESTPEIAEQRGERDSQTQAILTKLKCAAGLAELAARKYKQAAKCLLLASFDHCDFPELLSPSNVAIYGGLCALATFDRQELQRNVISSSSFKLFLELEPQVRDIIFKFYESKYASCLKMLDEMKDNLLLDMYLAPHVRTLYTQIRNRALIQYFSPYVSADMHRMAAAFNTTVAALEDELTQLILEGLISARVDSHSKILYARDVDQRSTTFEKSLLMGKEFQRRAKAMMLRAAVLRNQIHVKSPPREGSQGELTPANSQSRMSTNM",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q13098"},
		"label":"csn1_human"
	},
	{
		"object":"interactor",
		"sequence":"MAAAAAAAAATNGTGGSSGMEVDAAVVPSVMACGVTGSVSVALHPLVILNISDHWIRMRSQEGRPVQVIGALIGKQEGRNIEVMNSFELLSHTVEEKIIIDKEYYYTKEEQFKQVFKELEFLGWYTTGGPPDPSDIHVHKQVCEIIESPLFLKLNPMTKHTDLPVSVFESVIDIINGEATMLFAELTYTLATEEAERIGVDHVARMTATGSGENSTVAEHLIAQHSAIKMLHSRVKLILEYVKASEAGEVPFNHEILREAYALCHCLPVLSTDKFKTDFYDQCNDVGLMAYLGTITKTCNTMNQFVNKFNVLYDRQGIGRRMRGLFF",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q7L5N1"},
		"label":"csn6_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-2660609"}],
		"expansion":{"id":"36","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q13098"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q7L5N1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MASALEQFVNSVRQLSAQGQMTQLCELINKSGELLAKNLSHLDTVLGALDVQEHSLGVLAVLFVKFSMPSVPDFETLFSQVQLFISTCNGEHIRYATDTFAGLCHQLTNALVERKQPLRGIGILKQAIDKMQMNTNQLTSIHADLCQLCLLAKCFKPALPYLDVDMMDICKENGAYDAKHFLCYYYYGGMIYTGLKNFERALYFYEQAITTPAMAVSHIMLESYKKYILVSLILLGKVQQLPKYTSQIVGRFIKPLSNAYHELAQVYSTNNPSELRNLVNKHSETFTRDNNMGLVKQCLSSLYKKNIQRLTKTFLTLSLQDMASRVQLSGPQEAEKYVLHMIEDGEIFASINQKDGMVSFHDNPEKYNNPAMLHNIDQEMLKCIELDERLKAMDQEITVNPQFVQKSMGSQEDDSGNKPSSYS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9UNS2"},
		"label":"csn3_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-2660609"}],
		"expansion":{"id":"36","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q13098"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9UNS2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MPVAVMAESAFSFKKLLDQCENQELEAPGGIATPPVYGQLLALYLLHNDMNNARYLWKRIPPAIKSANSELGGIWSVGQRIWQRDFPGIYTTINAHQWSETVQPIMEALRDATRRRAFALVSQAYTSIIADDFAAFVGLPVEEAVKGILEQGWQADSTTRMVLPRKPVAGALDVSFNKFIPLSEPAPVPPIPNEQQLARLTDYVAFLEN",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q99627"},
		"label":"csn8_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-2660609"}],
		"expansion":{"id":"36","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q13098"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q99627"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSAEVKVTGQNQEQFLLLAKSAKGAALATLIHQVLEAPGVYVFGELLDMPNVRELAESDFASTFRLLTVFAYGTYADYLAEARNLPPLTEAQKNKLRHLSVVTLAAKVKCIPYAVLLEALALRNVRQLEDLVIEAVYADVLRGSLDQRNQRLEVDYSIGRDIQRQDLSAIARTLQEWCVGCEVVLSGIEEQVSRANQHKEQQLGLKQQIESEVANLKKTIKVTTAAAAAATSQDPEQHLTELREPAPGTNQRQPSKKASKGKGLRGSAKIWSKSN",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9UBW8"},
		"label":"csn7a_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-2660609"}],
		"expansion":{"id":"36","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q13098"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9UBW8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSDMEDDFMCDDEEDYDLEYSEDSNSEPNVDLENQYYNSKALKEDDPKAALSSFQKVLELEGEKGEWGFKALKQMIKINFKLTNFPEMMNRYKQLLTYIRSAVTRNYSEKSINSILDYISTSKQMDLLQEFYETTLEALKDAKNDRLWFKTNTKLGKLYLEREEYGKLQKILRQLHQSCQTDDGEDDLKKGTQLLEIYALEIQMYTAQKNNKKLKALYEQSLHIKSAIPHPLIMGVIRECGGKMHLREGEFEKAHTDFFEAFKNYDESGSPRRTTCLKYLVLANMLMKSGINPFDSQEAKPYKNDPEILAMTNLVSAYQNNDITEFEKILKTNHSNIMDDPFIREHIEELLRNIRTQVLIKLIKPYTRIHIPFISKELNIDVADVESLLVQCILDNTIHGRIDQVNQLLELDHQKRGGARYTALDKWTNQLNSLNQAVVSKLA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P61201"},
		"label":"csn2_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-2660609"}],
		"expansion":{"id":"36","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q13098"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P61201"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAAAVRQDLAQLMNSSGSHKDLAGKYRQILEKAIQLSGAEQLEALKAFVEAMVNENVSLVISRQLLTDFCTHLPNLPDSTAKEIYHFTLEKIQPRVISFEEQVASIRQHLASIYEKEEDWRNAAQVLVGIPLETGQKQYNVDYKLETYLKIARLYLEDDDPVQAEAYINRASLLQNESTNEQLQIHYKVCYARVLDYRRKFIEAAQRYNELSYKTIVHESERLEALKHALHCTILASAGQQRSRMLATLFKDERCQQLAAYGILEKMYLDRIIRGNQLQEFAAMLMPHQKATTADGSSILDRAVIEHNLLSASKLYNNITFEELGALLEIPAAKAEKIASQMITEGRMNGFIDQIDGIVHFETREALPTWDKQIQSLCFQVNNLLEKISQTAPEWTAQAMEAQMAQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9BT78"},
		"label":"csn4_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-2660609"}],
		"expansion":{"id":"36","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q13098"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9BT78"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAASGSGMAQKTWELANNMQEAQSIDEIYKYDKKQQQEILAAKPWTKDHHYFKYCKISALALLKMVMHARSGGNLEVMGLMLGKVDGETMIIMDSFALPVEGTETRVNAQAAAYEYMAAYIENAKQVGRLENAIGWYHSHPGYGCWLSGIDVSTQMLNQQFQEPFVAVVIDPTRTISAGKVNLGAFRTYPKGYKPPDEGPSEYQTIPLNKIEDFGVHCKQYYALEVSYFKSSLDRKLLELLWNKYWVNTLSSSSLLTNADYTTGQVFDLSEKLEQSEAQLGRGSFMLGLETHDRKSEDKLAKATRDSCKTTIEAIHGLMSQVIKDKLFNQINIS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q92905"},
		"label":"csn5_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-2660609"}],
		"expansion":{"id":"36","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q13098"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q92905"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAGEQKPSSNLLEQFILLAKGTSGSALTALISQVLEAPGVYVFGELLELANVQELAEGANAAYLQLLNLFAYGTYPDYIANKESLPELSTAQQNKLKHLTIVSLASRMKCIPYSVLLKDLEMRNLRELEDLIIEAVYTDIIQGKLDQRNQLLEVDFCIGRDIRKKDINNIVKTLHEWCDGCEAVLLGIEQQVLRANQYKENHNRTQQQVEAEVTNIKKTLKATASSSAQEMEQQLAERECPPHAEQRQPTKKMSKVKGLVSSRH",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9H9Q2"},
		"label":"csn7b_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-2676954"}],
		"expansion":{"id":"37","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q13098"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9H9Q2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-2676954"}],
		"expansion":{"id":"37","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q13098"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q92905"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-2676954"}],
		"expansion":{"id":"37","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q13098"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9BT78"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-2676954"}],
		"expansion":{"id":"37","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q13098"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q99627"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-2676954"}],
		"expansion":{"id":"37","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q13098"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9UNS2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-2676954"}],
		"expansion":{"id":"37","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q13098"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P61201"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-2676954"}],
		"expansion":{"id":"37","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q13098"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q7L5N1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGTSHPAFLVLGCLLTGLSLILCQLSLPSILPNENEKVVQLNSSFSLRCFGESEVSWQYPMSEEESSDVEIRNEENNSGLFVTVLEVSSASAAHTGLYTCYYNHTQTEENELEGRHIYIYVPDPDVAFVPLGMTDYLVIVEDDDSAIIPCRTTDPETPVTLHNSEGVVPASYDSRQGFNGTFTVGPYICEATVKGKKFQTIPFNVYALKATSELDLEMEALKTVYKSGETIVVTCAVFNNEVVDLQWTYPGEVKGKGITMLEEIKVPSIKLVYTLTVPEATVKDSGDYECAARQATREVKEMKKVTISVHEKGFIEIKPTFSQLEAVNLHEVKHFVVEVRAYPPPRISWLKNNLTLIENLTEITTDVEKIQEIRYRSKLKLIRAKEEDSGHYTIVAQNEDAVKSYTFELLTQVPSSILDLVDDHHGSTGGQTVRCTAEGTPLPDIEWMICKDIKKCNNETSWTILANNVSNIITEIHSRDRSTVEGRVTFAKVEETIAVRCLAKNLLGAENRELKLVAPTLRSELTVAAAVLVLLVIVIISLIVLVVIWKQKPRYEIRWRVIESISPDGHEYIYVDPMQLPYDSRWEFPRDGLVLGRVLGSGAFGKVVEGTAYGLSRSQPVMKVAVKMLKPTARSSEKQALMSELKIMTHLGPHLNIVNLLGACTKSGPIYIITEYCFYGDLVNYLHKNRDSFLSHHPEKPKKELDIFGLNPADESTRSYVILSFENNGDYMDMKQADTTQYVPMLERKEVSKYSDIQRSLYDRPASYKKKSMLDSEVKNLLSDDNSEGLTLLDLLSFTYQVARGMEFLASKNCVHRDLAARNVLLAQGKIVKICDFGLARDIMHDSNYVSKGSTFLPVKWMAPESIFDNLYTTLSDVWSYGILLWEIFSLGGTPYPGMMVDSTFYNKIKSGYRMAKPDHATSEVYEIMVKCWNSEPEKRPSFYHLSEIVENLLPGQYKKSYEKIHLDFLKSDHPAVARMRVDSDNAYIGVTYKNEEDKLKDWEGGLDEQRLSADSGYIIPLPDIDPVPEEEDLGKRNRHSSQTSEESAIETGSSSSTFIKREDETIEDIDMMDDIGIDSSDLVEDSFL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P16234"},
		"label":"pgfra_human"
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
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"omim","id":"607685"},{"db":"wwpdb","id":"3mjk"},{"db":"intenz","id":"2.7.10.1"},{"db":"reactome","id":"REACT_17393.1"},{"db":"omim","id":"606764"},{"db":"reactome","id":"REACT_17261.1"},{"db":"intact","id":"EBI-9080360"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P16234"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"3995122",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				},
				{
				"id":"3602568",
				"name":"pdgfa binding region",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["1-524"],
				"linkedFeatures":["16166126"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P04085"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"13854408",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["89-189"],
				"InterPro":"IPR000072"
				},
				{
				"id":"16166126",
				"name":"pdgf receptor alpha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["3602568"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"reactome","id":"REACT_17845.1"},{"db":"intact","id":"EBI-2881436"},{"db":"wwpdb","id":"3mjk"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P04085"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"16846685",
				"name":"dimerisation domain",
				"type":{"id":"MI:1125","name":"direct binding region"},
				"sequenceData":["89-181"],
				"InterPro":"IPR000072"
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P04085"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"9940336",
				"name":"dimerisation domain",
				"type":{"id":"MI:1125","name":"direct binding region"},
				"sequenceData":["89-181"],
				"InterPro":"IPR000072"
				}]
		}
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
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"omim","id":"607907"},{"db":"omim","id":"607174"},{"db":"omim","id":"615483"},{"db":"reactome","id":"REACT_17845.1"},{"db":"intact","id":"EBI-2881443"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P04085"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"33280490",
				"name":"pdgfb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["89-181"],
				"linkedFeatures":["26374459"],
				"InterPro":"IPR000072"
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P01127"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26374459",
				"name":"pdgfa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["83-182"],
				"linkedFeatures":["33280490"],
				"InterPro":"IPR000072"
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"omim","id":"607685"},{"db":"chembl","id":"CHEMBL2095189"},{"db":"omim","id":"607907"},{"db":"omim","id":"228550"},{"db":"omim","id":"607174"},{"db":"intact","id":"EBI-9094732"},{"db":"omim","id":"131440"},{"db":"intenz","id":"2.7.10.1"},{"db":"omim","id":"606764"},{"db":"reactome","id":"REACT_17875.1"},{"db":"omim","id":"615483"},{"db":"reactome","id":"REACT_17544.1"}],
		"expansion":{"id":"38","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P16234"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"21500342",
				"name":"pdgf receptor beta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["8585448"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P01127"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11570679",
				"name":"pdgfa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["20480683"],
				"InterPro":"IPR000072"
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
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"omim","id":"607685"},{"db":"chembl","id":"CHEMBL2095189"},{"db":"omim","id":"607907"},{"db":"omim","id":"228550"},{"db":"omim","id":"607174"},{"db":"intact","id":"EBI-9094732"},{"db":"omim","id":"131440"},{"db":"intenz","id":"2.7.10.1"},{"db":"omim","id":"606764"},{"db":"reactome","id":"REACT_17875.1"},{"db":"omim","id":"615483"},{"db":"reactome","id":"REACT_17544.1"}],
		"expansion":{"id":"38","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P16234"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"21500342",
				"name":"pdgf receptor beta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["8585448"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P09619"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"8585448",
				"name":"pdgf receptor alpha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21500342"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"omim","id":"607685"},{"db":"chembl","id":"CHEMBL2095189"},{"db":"omim","id":"607907"},{"db":"omim","id":"228550"},{"db":"omim","id":"607174"},{"db":"intact","id":"EBI-9094732"},{"db":"omim","id":"131440"},{"db":"intenz","id":"2.7.10.1"},{"db":"omim","id":"606764"},{"db":"reactome","id":"REACT_17875.1"},{"db":"omim","id":"615483"},{"db":"reactome","id":"REACT_17544.1"}],
		"expansion":{"id":"38","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P16234"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"21500342",
				"name":"pdgf receptor beta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["8585448"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P04085"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"20480683",
				"name":"pdgfb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["11570679"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"omim","id":"607685"},{"db":"chembl","id":"CHEMBL2095189"},{"db":"omim","id":"228550"},{"db":"intact","id":"EBI-9084565"},{"db":"omim","id":"615007"},{"db":"omim","id":"131440"},{"db":"reactome","id":"REACT_17802.1"},{"db":"intenz","id":"2.7.10.1"},{"db":"omim","id":"606764"}],
		"expansion":{"id":"39","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P16234"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17485601",
				"name":"pdgf receptor beta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["10794606"]
				},
				{
				"id":"29686097",
				"name":"pdgfc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-524"],
				"linkedFeatures":["13399122"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P09619"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"10794606",
				"name":"pdgf receptor alpha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["17485601"]
				},
				{
				"id":"15258810",
				"name":"pdgfc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-529"],
				"linkedFeatures":["31856485"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSLFGLLLLTSALAGQRQGTQAESNLSSKFQFSSNKEQNGVQDPQHERIITVSTNGSIHSPRFPHTYPRNTVLVWRLVAVEENVWIQLTFDERFGLEDPEDDICKYDFVEVEEPSDGTILGRWCGSGTVPGKQISKGNQIRIRFVSDEYFPSEPGFCIHYNIVMPQFTEAVSPSVLPPSALPLDLLNNAITAFSTLEDLIRYLEPERWQLDLEDLYRPTWQLLGKAFVFGRKSRVVDLNLLTEEVRLYSCTPRNFSVSIREELKRTDTIFWPGCLLVKRCGGNCACCLHNCNECQCVPSKVTKKYHEVLQLRPKTGVRGLHKSLTDVALEHHEECDCVCRGSTGG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9NRA1"},
		"label":"pdgfc_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"omim","id":"607685"},{"db":"chembl","id":"CHEMBL2095189"},{"db":"omim","id":"228550"},{"db":"intact","id":"EBI-9084565"},{"db":"omim","id":"615007"},{"db":"omim","id":"131440"},{"db":"reactome","id":"REACT_17802.1"},{"db":"intenz","id":"2.7.10.1"},{"db":"omim","id":"606764"}],
		"expansion":{"id":"39","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P16234"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17485601",
				"name":"pdgf receptor beta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["10794606"]
				},
				{
				"id":"29686097",
				"name":"pdgfc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-524"],
				"linkedFeatures":["13399122"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9NRA1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"31856485",
				"name":"pdgf receptor beta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["235-345"],
				"linkedFeatures":["15258810"],
				"InterPro":"IPR000072"
				},
				{
				"id":"13399122",
				"name":"pdgf receptor alpha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["235-345"],
				"linkedFeatures":["29686097"],
				"InterPro":"IPR000072"
				},
				{
				"id":"17433742",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["235-345"],
				"InterPro":"IPR000072"
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"omim","id":"607907"},{"db":"omim","id":"228550"},{"db":"omim","id":"607174"},{"db":"reactome","id":"REACT_18025.1"},{"db":"omim","id":"615007"},{"db":"omim","id":"131440"},{"db":"intenz","id":"2.7.10.1"},{"db":"omim","id":"615483"},{"db":"intact","id":"EBI-9083810"}],
		"expansion":{"id":"40","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P09619"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11614574",
				"name":"pdgfb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-529"],
				"linkedFeatures":["20019354"]
				},
				{
				"id":"15001048",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				},
				{
				"id":"28182256",
				"name":"pdgfa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-529"],
				"linkedFeatures":["4824154"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P04085"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"12057007",
				"name":"pdgfb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["6906097"]
				},
				{
				"id":"4824154",
				"name":"pdgf receptor beta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["28182256"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"omim","id":"607907"},{"db":"omim","id":"228550"},{"db":"omim","id":"607174"},{"db":"reactome","id":"REACT_18025.1"},{"db":"omim","id":"615007"},{"db":"omim","id":"131440"},{"db":"intenz","id":"2.7.10.1"},{"db":"omim","id":"615483"},{"db":"intact","id":"EBI-9083810"}],
		"expansion":{"id":"40","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P09619"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11614574",
				"name":"pdgfb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-529"],
				"linkedFeatures":["20019354"]
				},
				{
				"id":"15001048",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				},
				{
				"id":"28182256",
				"name":"pdgfa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-529"],
				"linkedFeatures":["4824154"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P01127"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"6906097",
				"name":"pdgfa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["12057007"]
				},
				{
				"id":"20019354",
				"name":"pdgf receptor beta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["11614574"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"omim","id":"228550"},{"db":"omim","id":"615007"},{"db":"reactome","id":"REACT_17802.1"},{"db":"omim","id":"131440"},{"db":"intenz","id":"2.7.10.1"},{"db":"intact","id":"EBI-9094683"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P09619"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"5993883",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				},
				{
				"id":"8792016",
				"name":"pdgfc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-529"],
				"linkedFeatures":["27250460"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9NRA1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27250460",
				"name":"pdgf receptor beta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["235-345"],
				"linkedFeatures":["8792016"],
				"InterPro":"IPR000072"
				},
				{
				"id":"14046680",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["235-345"],
				"InterPro":"IPR000072"
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"omim","id":"607685"},{"db":"omim","id":"607907"},{"db":"intact","id":"EBI-9083770"},{"db":"omim","id":"607174"},{"db":"intenz","id":"2.7.10.1"},{"db":"omim","id":"606764"},{"db":"reactome","id":"REACT_17393.1"},{"db":"omim","id":"615483"},{"db":"reactome","id":"REACT_17261.1"}],
		"expansion":{"id":"41","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P16234"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27137506",
				"name":"pdgfa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-524"],
				"linkedFeatures":["28231951"]
				},
				{
				"id":"1182230",
				"name":"pdgfb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-524"],
				"linkedFeatures":["5521127"]
				},
				{
				"id":"15584405",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P04085"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"1203229",
				"name":"pdgfb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["22907263"]
				},
				{
				"id":"28231951",
				"name":"pdgf receptor alpha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["27137506"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"omim","id":"607685"},{"db":"omim","id":"607907"},{"db":"intact","id":"EBI-9083770"},{"db":"omim","id":"607174"},{"db":"intenz","id":"2.7.10.1"},{"db":"omim","id":"606764"},{"db":"reactome","id":"REACT_17393.1"},{"db":"omim","id":"615483"},{"db":"reactome","id":"REACT_17261.1"}],
		"expansion":{"id":"41","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P16234"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27137506",
				"name":"pdgfa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-524"],
				"linkedFeatures":["28231951"]
				},
				{
				"id":"1182230",
				"name":"pdgfb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-524"],
				"linkedFeatures":["5521127"]
				},
				{
				"id":"15584405",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P01127"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22907263",
				"name":"pdgfa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1203229"]
				},
				{
				"id":"5521127",
				"name":"pdgf receptor alpha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1182230"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MHRLIFVYTLICANFCSCRDTSATPQSASIKALRNANLRRDESNHLTDLYRRDETIQVKGNGYVQSPRFPNSYPRNLLLTWRLHSQENTRIQLVFDNQFGLEEAENDICRYDFVEVEDISETSTIIRGRWCGHKEVPPRIKSRTNQIKITFKSDDYFVAKPGFKIYYSLLEDFQPAAASETNWESVTSSISGVSYNSPSVTDPTLIADALDKKIAEFDTVEDLLKYFNPESWQEDLENMYLDTPRYRGRSYHDRKSKVDLDRLNDDAKRYSCTPRNYSVNIREELKLANVVFFPRCLLVQRCGGNCGCGTVNWRSCTCNSGKTVKKYHEVLQFEPGHIKRRGRAKTMALVDIQLDHHERCDCICSSRPPR",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9GZP0"},
		"label":"pdgfd_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"reactome","id":"REACT_17802.1"},{"db":"intact","id":"EBI-9079493"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9GZP0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32374498",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9GZP0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"33076410",
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
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1pdg"},{"db":"omim","id":"607907"},{"db":"omim","id":"607174"},{"db":"reactome","id":"REACT_17845.1"},{"db":"omim","id":"615483"},{"db":"intact","id":"EBI-2881451"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P01127"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"18959477",
				"name":"dimerisation domain",
				"type":{"id":"MI:1125","name":"direct binding region"},
				"sequenceData":["83-182"],
				"InterPro":"IPR000072"
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P01127"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19044865",
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
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"reactome","id":"REACT_17802.1"},{"db":"intact","id":"EBI-9079474"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9NRA1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11333011",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["230-345"],
				"InterPro":"IPR000072"
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9NRA1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"18972276",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["230-345"],
				"InterPro":"IPR000072"
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"omim","id":"607685"},{"db":"reactome","id":"REACT_17802.1"},{"db":"intenz","id":"2.7.10.1"},{"db":"intact","id":"EBI-9084521"},{"db":"omim","id":"606764"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9NRA1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32835531",
				"name":"pdgf receptor alpha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["235-345"],
				"linkedFeatures":["30585566"],
				"InterPro":"IPR000072"
				},
				{
				"id":"31269708",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["235-345"],
				"InterPro":"IPR000072"
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P16234"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"20471242",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				},
				{
				"id":"30585566",
				"name":"pdgfc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-524"],
				"linkedFeatures":["32835531"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1pdg"},{"db":"intact","id":"EBI-9083388"},{"db":"omim","id":"607907"},{"db":"omim","id":"228550"},{"db":"omim","id":"607174"},{"db":"omim","id":"615007"},{"db":"omim","id":"131440"},{"db":"intenz","id":"2.7.10.1"},{"db":"reactome","id":"REACT_17393.1"},{"db":"omim","id":"615483"},{"db":"reactome","id":"REACT_17261.1"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P16234"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26586813",
				"name":"pdgfb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-524"],
				"linkedFeatures":["210323"]
				},
				{
				"id":"11696958",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P01127"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"210323",
				"name":"pdgf receptor alpha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["26586813"]
				},
				{
				"id":"28916056",
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
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"reactome","id":"REACT_17403.1"},{"db":"omim","id":"607907"},{"db":"omim","id":"228550"},{"db":"omim","id":"607174"},{"db":"omim","id":"615007"},{"db":"omim","id":"131440"},{"db":"wwpdb","id":"3mjg"},{"db":"intenz","id":"2.7.10.1"},{"db":"omim","id":"615483"},{"db":"intact","id":"EBI-9080507"},{"db":"reactome","id":"REACT_17457.1"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P01127"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"23320277",
				"name":"dimerisation domain",
				"type":{"id":"MI:1125","name":"direct binding region"},
				"sequenceData":["83-182"],
				"InterPro":"IPR000072"
				},
				{
				"id":"28131537",
				"name":"pdgf receptor beta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["24798325"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P09619"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"5852798",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				},
				{
				"id":"24798325",
				"name":"pdgfb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-529"],
				"linkedFeatures":["28131537"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1pdg"},{"db":"chembl","id":"CHEMBL2095189"},{"db":"omim","id":"607907"},{"db":"omim","id":"228550"},{"db":"omim","id":"607174"},{"db":"omim","id":"131440"},{"db":"intenz","id":"2.7.10.1"},{"db":"reactome","id":"REACT_17875.1"},{"db":"omim","id":"615483"},{"db":"intact","id":"EBI-9082861"},{"db":"reactome","id":"REACT_17544.1"}],
		"expansion":{"id":"42","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P16234"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19949758",
				"name":"pdgfb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-524"],
				"linkedFeatures":["19699893"]
				},
				{
				"id":"14534391",
				"name":"pdgf receptor beta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["3255457"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P09619"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"3255457",
				"name":"pdgf receptor alpha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["14534391"]
				},
				{
				"id":"20754007",
				"name":"pdgfb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-529"],
				"linkedFeatures":["14277009"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1pdg"},{"db":"chembl","id":"CHEMBL2095189"},{"db":"omim","id":"607907"},{"db":"omim","id":"228550"},{"db":"omim","id":"607174"},{"db":"omim","id":"131440"},{"db":"intenz","id":"2.7.10.1"},{"db":"reactome","id":"REACT_17875.1"},{"db":"omim","id":"615483"},{"db":"intact","id":"EBI-9082861"},{"db":"reactome","id":"REACT_17544.1"}],
		"expansion":{"id":"42","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P16234"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19949758",
				"name":"pdgfb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-524"],
				"linkedFeatures":["19699893"]
				},
				{
				"id":"14534391",
				"name":"pdgf receptor beta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["3255457"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P01127"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19699893",
				"name":"pdgf receptor alpha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["19949758"]
				},
				{
				"id":"5958697",
				"name":"dimerisation domain",
				"type":{"id":"MI:1125","name":"direct binding region"},
				"sequenceData":["83-182"],
				"InterPro":"IPR000072"
				},
				{
				"id":"14277009",
				"name":"pdgf receptor beta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["20754007"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"omim","id":"228550"},{"db":"omim","id":"615007"},{"db":"intact","id":"EBI-9085280"},{"db":"reactome","id":"REACT_17802.1"},{"db":"omim","id":"131440"},{"db":"intenz","id":"2.7.10.1"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9GZP0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"21404628",
				"name":"pdgf receptor beta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-247"],
				"linkedFeatures":["10533510"]
				},
				{
				"id":"3530975",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-247"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P09619"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"20865278",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				},
				{
				"id":"10533510",
				"name":"pdgfd binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-529"],
				"linkedFeatures":["21404628"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"chembl","id":"CHEMBL2095189"},{"db":"omim","id":"228550"},{"db":"omim","id":"615007"},{"db":"omim","id":"131440"},{"db":"reactome","id":"REACT_17802.1"},{"db":"intenz","id":"2.7.10.1"},{"db":"intact","id":"EBI-9085544"}],
		"expansion":{"id":"43","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P09619"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"5364979",
				"name":"pdgf receptor alpha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["8458804"]
				},
				{
				"id":"30560698",
				"name":"pdgfd binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-529"],
				"linkedFeatures":["15973506"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9GZP0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"31266557",
				"name":"pdgf receptor alpha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-247"],
				"linkedFeatures":["1071807"]
				},
				{
				"id":"28691008",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-247"]
				},
				{
				"id":"15973506",
				"name":"pdgf receptor beta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-247"],
				"linkedFeatures":["30560698"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"chembl","id":"CHEMBL2095189"},{"db":"omim","id":"228550"},{"db":"omim","id":"615007"},{"db":"omim","id":"131440"},{"db":"reactome","id":"REACT_17802.1"},{"db":"intenz","id":"2.7.10.1"},{"db":"intact","id":"EBI-9085544"}],
		"expansion":{"id":"43","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P09619"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"5364979",
				"name":"pdgf receptor alpha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["8458804"]
				},
				{
				"id":"30560698",
				"name":"pdgfd binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-529"],
				"linkedFeatures":["15973506"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P16234"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"8458804",
				"name":"pdgf receptor beta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["5364979"]
				},
				{
				"id":"1071807",
				"name":"pdgfd binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-524"],
				"linkedFeatures":["31266557"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAHYPTRLKTRKTYSWVGRPLLDRKLHYQTYREMCVKTEGCSTEIHIQIGQFVLIEGDDDENPYVAKLLELFEDDSDPPPKKRARVQWFVRFCEVPACKRHLLGRKPGAQEIFWYDYPACDSNINAETIIGLVRVIPLAPKDVVPTNLKNEKTLFVKLSWNEKKFRPLSSELFAELNKPQESAAKCQKPVRAKSKSAESPSWTPAEHVAKRIESRHSASKSRQTPTHPLTPRARKRLELGNLGNPQMSQQTSCASLDSPGRIKRKVAFSEITSPSKRSQPDKLQTLSPALKAPEKTRETGLSYTEDDKKASPEHRIILRTRIAASKTIDIREERTLTPISGGQRSSVVPSVILKPENIKKRDAKEAKAQNEATSTPHRIRRKSSVLTMNRIRQQLRFLGNSKSDQEEKEILPAAEISDSSSDEEEASTPPLPRRAPRTVSRNLRSSLKSSLHTLTKVPKKSLKPRTPRCAAPQIRSRSLAAQEPASVLEEARLRLHVSAVPESLPCREQEFQDIYNFVESKLLDHTGGCMYISGVPGTGKTATVHEVIRCLQQAAQANDVPPFQYIEVNGMKLTEPHQVYVQILQKLTGQKATANHAAELLAKQFCTRGSPQETTVLLVDELDLLWTHKQDIMYNLFDWPTHKEARLVVLAIANTMDLPERIMMNRVSSRLGLTRMCFQPYTYSQLQQILRSRLKHLKAFEDDAIQLVARKVAALSGDARRCLDICRRATEICEFSQQKPDSPGLVTIAHSMEAVDEMFSSSYITAIKNSSVLEQSFLRAILAEFRRSGLEEATFQQIYSQHVALCRMEGLPYPTMSETMAVCSHLGSCRLLLVEPSRNDLLLRVRLNVSQDDVLYALKDE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q13415"},
		"label":"orc1_human"
	},
	{
		"object":"interactor",
		"sequence":"MGSELIGRLAPRLGLAEPDMLRKAEEYLRLSRVKCVGLSARTTETSSAVMCLDLAASWMKCPLDRAYLIKLSGLNKETYQSCLKSFECLLGLNSNIGIRDLAVQFSCIEAVNMASKILKSYESSLPQTQQVDLDLSRPLFTSAALLSACKILKLKVDKNKMVATSGVKKAIFDRLCKQLEKIGQQVDREPGDVATPPRKRKKIVVEAPAKEMEKVEEMPHKPQKDEDLTQDYEEWKRKILENAASAQKATAE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9Y5N6"},
		"label":"orc6_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-2889551"}],
		"expansion":{"id":"44","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q13415"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9Y5N6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MPHLENVVLCRESQVSILQSLFGERHHFSFPSIFIYGHTASGKTYVTQTLLKTLELPHVFVNCVECFTLRLLLEQILNKLNHLSSSEDGCSTEITCETFNDFVRLFKQVTTAENLKDQTVYIVLDKAEYLRDMEANLLPGFLRLQELADRNVTVLFLSEIVWEKFRPNTGCFEPFVLYFPDYSIGNLQKILSHDHPPEYSADFYAAYINILLGVFYTVCRDLKELRHLAVLNFPKYCEPVVKGEASERDTRKLWRNIEPHLKKAMQTVYLREISSSQWEKLQKDDTDPGQLKGLSAHTHVELPYYSKFILIAAYLASYNPARTDKRFFLKHHGKIKKTNFLKKHEKTSNHLLGPKPFPLDRLLAILYSIVDSRVAPTANIFSQITSLVTLQLLTLVGHDDQLDGPKYKCTVSLDFIRAIARTVNFDIIKYLYDFL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O43913"},
		"label":"orc5_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-2889551"}],
		"expansion":{"id":"44","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q13415"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O43913"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MATSSMSKGCFVFKPNSKKRKISLPIEDYFNKGKNEPEDSKLRFETYQLIWQQMKSENERLQEELNKNLFDNLIEFLQKSHSGFQKNSRDLGGQIKLREIPTAALVLGVNVTDHDLTFGSLTEALQNNVTPYVVSLQAKDCPDMKHFLQKLISQLMDCCVDIKSKEEESVHVTQRKTHYSMDSLSSWYMTVTQKTDPKMLSKKRTTSSQWQSPPVVVILKDMESFATKVLQDFIIISSQHLHEFPLILIFGIATSPIIIHRLLPHAVSSLLCIELFQSLSCKEHLTTVLDKLLLTTQFPFKINEKVLQVLTNIFLYHDFSVQNFIKGLQLSLLEHFYSQPLSVLCCNLPEAKRRINFLSNNQCENIRRLPSFRRYVEKQASEKQVALLTNERYLKEETQLLLENLHVYHMNYFLVLRCLHKFTSSLPKYPLGRQIRELYCTCLEKNIWDSEEYASVLQLLRMLAKDELMTILEKCFKVFKSYCENHLGSTAKRIEEFLAQFQSLDETKEEEDASGSQPKGLQKTDLYHLQKSLLEMKELRRSKKQTKFEVLRENVVNFIDCLVREYLLPPETQPLHEVVYFSAAHALREHLNAAPRIALHTALNNPYYYLKNEALKSEEGCIPNIAPDICIAYKLHLECSRLINLVDWSEAFATVVTAAEKMDANSATSEEMNEIIHARFIRAVSELELLGFIKPTKQKTDHVARLTWGGC",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9UBD5"},
		"label":"orc3_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-2889551"}],
		"expansion":{"id":"44","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q13415"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9UBD5"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSKPELKEDKMLEVHFVGDDDVLNHILDREGGAKLKKERAQLLVNPKKIIKKPEYDLEEDDQEVLKDQNYVEIMGRDVQESLKNGSATGGGNKVYSFQNRKHSEKMAKLASELAKTPQKSVSFSLKNDPEITINVPQSSKGHSASDKVQPKNNDKSEFLSTAPRSLRKRLIVPRSHSDSESEYSASNSEDDEGVAQEHEEDTNAVIFSQKIQAQNRVVSAPVGKETPSKRMKRDKTSDLVEEYFEAHSSSKVLTSDRTLQKLKRAKLDQQTLRNLLSKVSPSFSAELKQLNQQYEKLFHKWMLQLHLGFNIVLYGLGSKRDLLERFRTTMLQDSIHVVINGFFPGISVKSVLNSITEEVLDHMGTFRSILDQLDWIVNKFKEDSSLELFLLIHNLDSQMLRGEKSQQIIGQLSSLHNIYLIASIDHLNAPLMWDHAKQSLFNWLWYETTTYSPYTEETSYENSLLVKQSGSLPLSSLTHVLRSLTPNARGIFRLLIKYQLDNQDNPSYIGLSFQDFYQQCREAFLVNSDLTLRAQLTEFRDHKLIRTKKGTDGVEYLLIPVDNGTLTDFLEKEEEEA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q13416"},
		"label":"orc2_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-2889551"}],
		"expansion":{"id":"44","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q13415"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q13416"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSSRKSKSNSLIHTECLSQVQRILRERFCRQSPHSNLFGVQVQYKHLSELLKRTALHGESNSVLIIGPRGSGKTMLINHALKELMEIEEVSENVLQVHLNGLLQINDKIALKEITRQLNLENVVGDKVFGSFAENLSFLLEALKKGDRTSSCPVIFILDEFDLFAHHKNQTLLYNLFDISQSAQTPIAVIGLTCRLDILELLEKRVKSRFSHRQIHLMNSFGFPQYVKIFKEQLSLPAEFPDKVFAEKWNENVQYLSEDRSVQEVLQKHFNISKNLRSLHMLLMLALNRVTASHPFMTAVDLMEASQLCSMDSKANIVHGLSVLEICLIIAMKHLNDIYEEEPFNFQMVYNEFQKFVQRKAHSVYNFEKPVVMKAFEHLQQLELIKPMERTSGNSQREYQLMKLLLDNTQIMNALQKYPNCPTDVRQWATSSLSWL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O43929"},
		"label":"orc4_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-2889551"}],
		"expansion":{"id":"44","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q13415"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O43929"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLKAAAKRPELSGKNTISNNSDMAEVKSMFREVLPKQGPLFVEDIMTMVLCKPKLLPLKSLTLEKLEKMHQAAQNTIRQQEMAEKDQRQITH",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"A8MTZ0"},
		"label":"bbip1_human"
	},
	{
		"object":"interactor",
		"sequence":"MSSEMEPLLLAWSYFRRRKFQLCADLCTQMLEKSPYDQEPDPELPVHQAAWILKARALTEMVYIDEIDVDQEGIAEMMLDENAIAQVPRPGTSLKLPGTNQTGGPSQAVRPITQAGRPITGFLRPSTQSGRPGTMEQAIRTPRTAYTARPITSSSGRFVRLGTASMLTSPDGPFINLSRLNLTKYSQKPKLAKALFEYIFHHENDVKTIHLEDVVLHLGIYPFLLRNKNHIEKNALDLAALSTEHSQYKDWWWKVQIGKCYYRLGMYREAEKQFKSALKQQEMVDTFLYLAKVYVSLDQPVTALNLFKQGLDKFPGEVTLLCGIARIYEEMNNMSSAAEYYKEVLKQDNTHVEAIACIGSNHFYSDQPEIALRFYRRLLQMGIYNGQLFNNLGLCCFYAQQYDMTLTSFERALSLAENEEEAADVWYNLGHVAVGIGDTNLAHQCFRLALVNNNNHAEAYNNLAVLEMRKGHVEQARALLQTASSLAPHMYEPHFNFATISDKIGDLQRSYVAAQKSEAAFPDHVDTQHLIKQLRQHFAML",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q8TAM2"},
		"label":"ttc8_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"omim","id":"209900"},{"db":"intact","id":"EBI-6140398"}],
		"expansion":{"id":"45","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"A8MTZ0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q8TAM2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSLFKARDWWSTILGDKEEFDQGCLCLANVDNSGNGQDKIIVGSFMGYLRIFSPHPAKTGDGAQAEDLLLEVDLRDPVLQVEVGKFVSGTEMLHLAVLHSRKLCVYSVSGTLGNVEHGNQCQMKLMYEHNLQRTACNMTYGSFGGVKGRDLICIQSMDGMLMVFEQESYAFGRFLPGFLLPGPLAYSSRTDSFLTVSSCQQVESYKYQVLAFATDADKRQETEQQKLGSGKRLVVDWTLNIGEQALDICIVSFNQSASSVFVLGERNFFCLKDNGQIRFMKKLDWSPSCFLPYCSVSEGTINTLIGNHNNMLHIYQDVTLKWATQLPHIPVAVRVGCLHDLKGVIVTLSDDGHLQCSYLGTDPSLFQAPNVQSRELNYDELDVEMKELQKIIKDVNKSQGVWPMTEREDDLNVSVVVSPNFDSVSQATDVEVGTDLVPSVTVKVTLQNRVILQKAKLSVYVQPPLELTCDQFTFEFMTPDLTRTVSFSVYLKRSYTPSELEGNAVVSYSRPTDRNPDGIPRVIQCKFRLPLKLICLPGQPSKTASHKITIDTNKSPVSLLSLFPGFASQSDDDQVNVMGFHFLGGARITVLASKTSQRYRIQSEQFEDLWLITNELILRLQEYFEKQGVKDFACSFSGSIPLQEYFELIDHHFELRINGEKLEELLSERAVQFRAIQRRLLARFKDKTPAPLQHLDTLLDGTYKQVIALADAVEENQGNLFQSFTRLKSATHLVILLIALWQKLSADQVAILEAAFLPLQEDTQELGWEETVDAAISHLLKTCLSKSSKEQALNLNSQLNIPKDTSQLKKHITLLCDRLSKGGRLCLSTDAAAPQTMVMPGGCTTIPESDLEERSVEQDSTELFTNHRHLTAETPRPEVSPLQGVSE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q3SYG4"},
		"label":"pthb1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"omim","id":"209900"},{"db":"intact","id":"EBI-6140398"}],
		"expansion":{"id":"45","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"A8MTZ0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q3SYG4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDLILNRMDYLQVGVTSQKTMKLIPASRHRATQKVVIGDHDGVVMCFGMKKGEAAAVFKTLPGPKIARLELGGVINTPQEKIFIAAASEIRGFTKRGKQFLSFETNLTESIKAMHISGSDLFLSASYIYNHYCDCKDQHYYLSGDKINDVICLPVERLSRITPVLACQDRVLRVLQGSDVMYAVEVPGPPTVLALHNGNGGDSGEDLLFGTSDGKLALIQITTSKPVRKWEIQNEKKRGGILCIDSFDIVGDGVKDLLVGRDDGMVEVYSFDNANEPVLRFDQMLSESVTSIQGGCVGKDSYDEIVVSTYSGWVTGLTTEPIHKESGPGEELKINQEMQNKISSLRNELEHLQYKVLQERENYQQSSQSSKAKSAVPSFGINDKFTLNKDDASYSLILEVQTAIDNVLIQSDVPIDLLDVDKNSAVVSFSSCDSESNDNFLLATYRCQADTTRLELKIRSIEGQYGTLQAYVTPRIQPKTCQVRQYHIKPLSLHQRTHFIDHDRPMNTLTLTGQFSFAEVHSWVVFCLPEVPEKPPAGECVTFYFQNTFLDTQLESTYRKGEGVFKSDNISTISILKDVLSKEATKRKINLNISYEINEVSVKHTLKLIHPKLEYQLLLAKKVQLIDALKELQIHEGNTNFLIPEYHCILEEADHLQEEYKKQPAHLERLYGMITDLFIDKFKFKGTNVKTKVPLLLEILDSYDQNALISFFDAA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q8IWZ6"},
		"label":"bbs7_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"omim","id":"209900"},{"db":"intact","id":"EBI-6140398"}],
		"expansion":{"id":"45","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"A8MTZ0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q8IWZ6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLLPVFTLKLRHKISPRMVAIGRYDGTHPCLAAATQTGKVFIHNPHTRNQHVSASRVFQSPLESDVSLLNINQAVSCLTAGVLNPELGYDALLVGTQTNLLAYDVYNNSDLFYREVADGANAIVLGTLGDISSPLAIIGGNCALQGFNHEGSDLFWTVTGDNVNSLALCDFDGDGKKELLVGSEDFDIRVFKEDEIVAEMTETEIVTSLCPMYGSRFGYALSNGTVGVYDKTSRYWRIKSKNHAMSIHAFDLNSDGVNELITGWSNGKVDARSDRTGEVIFKDNFSSAIAGVVEGDYRMDGHIQLICCSVDGEIRGYLPGTAEMRGNLMDTSAEQDLIRELSQKKQNLLLELRNYEENAKAELASPLNEADGHRGIIPANTRLHTTLSVSLGNETQTAHTELRISTSNDTIIRAVLIFAEGIFTGESHVVHPSIHNLSSSICIPIVPPKDVPVDLHLKAFVGYRSSTQFHVFESTRQLPRFSMYALTSLDPASEPISYVNFTIAERAQRVVVWLGQNFLLPEDTHIQNAPFQVCFTSLRNGGHLHIKIKLSGEITINTDDIDLAGDIIQSMASFFAIEDLQVEADFPVYFEELRKVLVKVDEYHSVHQKLSADMADHSNLIRSLLVGAEDARLMRDMKTMKSRYMELYDLNRDLLNGYKIRCNNHTELLGNLKAVNQAIQRAGRLRVGKPKNQVITACRDAIRSNNINTLFKIMRVGTASS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9BXC9"},
		"label":"bbs2_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"omim","id":"209900"},{"db":"intact","id":"EBI-6140398"}],
		"expansion":{"id":"45","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"A8MTZ0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9BXC9"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAAASSSDSDACGAESNEANSKWLDAHYDPMANIHTFSACLALADLHGDGEYKLVVGDLGPGGQQPRLKVLKGPLVMTESPLPALPAAAATFLMEQHEPRTPALALASGPCVYVYKNLRPYFKFSLPQLPPNPLEQDLWNQAKEDRIDPLTLKEMLESIRETAEEPLSIQSLRFLQLELSEMEAFVNQHKSNSIKRQTVITTMTTLKKNLADEDAVSCLVLGTENKELLVLDPEAFTILAKMSLPSVPVFLEVSGQFDVEFRLAAACRNGNIYILRRDSKHPKYCIELSAQPVGLIRVHKVLVVGSTQDSLHGFTHKGKKLWTVQMPAAILTMNLLEQHSRGLQAVMAGLANGEVRIYRDKALLNVIHTPDAVTSLCFGRYGREDNTLIMTTRGGGLIIKILKRTAVFVEGGSEVGPPPAQAMKLNVPRKTRLYVDQTLREREAGTAMHRAFQTDLYLLRLRAARAYLQALESSLSPLSTTAREPLKLHAVVQGLGPTFKLTLHLQNTSTTRPVLGLLVCFLYNEALYSLPRAFFKVPLLVPGLNYPLETFVESLSNKGISDIIKVLVLREGQSAPLLSAHVNMPGSEGLAAA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q8NFJ9"},
		"label":"bbs1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"omim","id":"209900"},{"db":"intact","id":"EBI-6140398"}],
		"expansion":{"id":"45","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"A8MTZ0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q8NFJ9"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSVLDALWEDRDVRFDLSAQQMKTRPGEVLIDCLDSIEDTKGNNGDRGRLLVTNLRILWHSLALSRVNVSVGYNCILNITTRTANSKLRGQTEALYILTKCNSTRFEFIFTNLVPGSPRLFTSVMAVHRAYETSKMYRDFKLRSALIQNKQLRLLPQEHVYDKINGVWNLSSDQGNLGTFFITNVRIVWHANMNDSFNVSIPYLQIRSIKIRDSKFGLALVIESSQQSGGYVLGFKIDPVEKLQESVKEINSLHKVYSASPIFGVDYEMEEKPQPLEALTVEQIQDDVEIDSDGHTDAFVAYFADGNKQQDREPVFSEELGLAIEKLKDGFTLQGLWEVMS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q8N3I7"},
		"label":"bbs5_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"omim","id":"209900"},{"db":"intact","id":"EBI-6140398"}],
		"expansion":{"id":"45","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"A8MTZ0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q8N3I7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAEERVATRTQFPVSTESQKPRQKKAPEFPILEKQNWLIHLHYIRKDYEACKAVIKEQLQETQGLCEYAIYVQALIFRLEGNIQESLELFQTCAVLSPQSADNLKQVARSLFLLGKHKAAIEVYNEAAKLNQKDWEISHNLGVCYIYLKQFNKAQDQLHNALNLNRHDLTYIMLGKIHLLEGDLDKAIEVYKKAVEFSPENTELLTTLGLLYLQLGIYQKAFEHLGNALTYDPTNYKAILAAGSMMQTHGDFDVALTKYRVVACAVPESPPLWNNIGMCFFGKKKYVAAISCLKRANYLAPFDWKILYNLGLVHLTMQQYASAFHFLSAAINFQPKMGELYMLLAVALTNLEDIENAKRAYAEAVHLDKCNPLVNLNYAVLLYNQGEKKNALAQYQEMEKKVSLLKDNSSLEFDSEMVEMAQKLGAALQVGEALVWTKPVKDPKSKHQTTSTSKPASFQQPLGSNQALGQAMSSAAAYRTLPSGAGGTSQFTKPPSLPLEPEPAVESSPTETSEQIREK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q96RK4"},
		"label":"bbs4_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"omim","id":"209900"},{"db":"intact","id":"EBI-6140398"}],
		"expansion":{"id":"45","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"A8MTZ0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q96RK4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDFSRNLYDIGEQLDSEDLASLKFLSLDYIPQRKQEPIKDALMLFQRLQEKRMLEESNLSFLKELLFRINRLDLLITYLNTRKEEMERELQTPGRAQISAYRVMLYQISEEVSRSELRSFKFLLQEEISKCKLDDDMNLLDIFIEMEKRVILGEGKLDILKRVCAQINKSLLKIINDYEEFSKERSSSLEGSPDEFSNGEELCGVMTISDSPREQDSESQTLDKVYQMKSKPRGYCLIINNHNFAKAREKVPKLHSIRDRNGTHLDAGALTTTFEELHFEIKPHDDCTVEQIYEILKIYQLMDHSNMDCFICCILSHGDKGIIYGTDGQEAPIYELTSQFTGLKCPSLAGKPKVFFIQACQGDNYQKGIPVETDSEEQPYLEMDLSSPQTRYIPDEADFLLGMATVNNCVSYRNPAEGTWYIQSLCQSLRERCPRGDDILTILTEVNYEVSNKDDKKNMGKQMPQPTFTLRKKLVFPSD",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q14790"},
		"label":"casp8_human"
	},
	{
		"object":"interactor",
		"sequence":"MQPDMSLNVIKMKSSDFLESAELDSGGFGKVSLCFHRTQGLMIMKTVYKGPNCIEHNEALLEEAKMMNRLRHSRVVKLLGVIIEEGKYSLVMEYMEKGNLMHVLKAEMSTPLSVKGRIILEIIEGMCYLHGKGVIHKDLKPENILVDNDFHIKIADLGLASFKMWSKLNNEEHNELREVDGTAKKNGGTLYYMAPEHLNDVNAKPTEKSDVYSFAVVLWAIFANKEPYENAICEQQLIMCIKSGNRPDVDDITEYCPREIISLMKLCWEANPEARPTFPGIEEKFRPFYLSQLEESVEEDVKSLKKEYSNENAVVKRMQSLQLDCVAVPSSRSNSATEQPGSLHSSQGLGMGPVEESWFAPSLEHPQEENEPSLQSKLQDEANYHLYGSRMDRQTKQQPRQNVAYNREEERRRRVSHDPFAQQRPYENFQNTEGKGTAYSSAASHGNAVHQPSGLTSQPQVLYQNNGLYSSHGFGTRPLDPGTAGPRVWYRPIPSHMPSLHNIPVPETNYLGNTPTMPFSSLPPTDESIKYTIYNSTGIQIGAYNYMEIGGTSSSLLDSTNTNFKEEPAAKYQAIFDNTTSLTDKHLDPIRENLGKHWKNCARKLGFTQSQIDEIDHDYERDGLKEKVYQMLQKWVMREGIKGATVGKLAQALHQCSRIDLLSSLIYVSQN",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q13546"},
		"label":"ripk1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6137287"}],
		"expansion":{"id":"46","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q14790"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q13546"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDPFLVLLHSVSSSLSSSELTELKFLCLGRVGKRKLERVQSGLDLFSMLLEQNDLEPGHTELLRELLASLRRHDLLRRVDDFEAGAAAGAAPGEEDLCAAFNVICDNVGKDWRRLARQLKVSDTKIDSIEDRYPRNLTERVRESLRIWKNTEKENATVAHLVGALRSCQMNLVADLVQEVQQARDLQNRSGAMSPMSWNSDASTSEAS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q13158"},
		"label":"fadd_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6137287"}],
		"expansion":{"id":"46","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q14790"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q13158"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAPGSRGERSSFRSRRGPGVPSPQPDVTMLSRLLKEHQAKQNERKELQEKRRREAITAATCLTEALVDHLNVGVAQAYMNQRKLDHEVKTLQVQAAQFAKQTGQWIGMVENFNQALKEIGDVENWARSIELDMRTIATALEYVYKGQLQSAPS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P78537"},
		"label":"bl1s1_human"
	},
	{
		"object":"interactor",
		"sequence":"MSVPGPSSPDGALTRPPYCLEAGEPTPGLSDTSPDEGLIEDLTIEDKAVEQLAEGLLSHYLPDLQRSKQALQELTQNQVVLLDTLEQEISKFKECHSMLDINALFAEAKHYHAKLVNIRKEMLMLHEKTSKLKKRALKLQQKRQKEELEREQQREKEFEREKQLTARPAKRM",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9UL45"},
		"label":"bl1s6_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6170189"}],
		"expansion":{"id":"47","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P78537"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9UL45"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MEGSFSDGGALPEGLAEEAEPQGAAWSGDSGTVSQSHSSASGPWEDEGAEDGAPGRDLPLLRRAAAGYAACLLPGAGARPEVEALDASLEDLLTRVDEFVGMLDMLRGDSSHVVSEGVPRIHAKAAEMRRIYSRIDRLEAFVRMVGGRVARMEEQVTKAEAELGTFPRAFKKLLHTMNVPSLFSKSAPSRPQQAGYEAPVLFRTEDYFPCCSERPQL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9NUP1"},
		"label":"bl1s4_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6170189"}],
		"expansion":{"id":"47","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P78537"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9NUP1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAAAAEGVLATRSDEPARDDAAVETAEEAKEPAEADITELCRDMFSKMATYLTGELTATSEDYKLLENMNKLTSLKYLEMKDIAINISRNLKDLNQKYAGLQPYLDQINVIEEQVAALEQAAYKLDAYSKKLEAKYKKLEKR",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q6QNY1"},
		"label":"bl1s2_human"
	},
	{
		"object":"interactor",
		"sequence":"MAGAGSAAVSGAGTPVAGPTGRDLFAEGLLEFLRPAVQQLDSHVHAVRESQVELREQIDNLATELCRINEDQKVALDLDPYVKKLLNARRRVVLVNNILQNAQERLRRLNHSVAKETARRRAMLDSGIYPPGSPGK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O95295"},
		"label":"snapn_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6170201"}],
		"expansion":{"id":"48","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q6QNY1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O95295"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLETLRERLLSVQQDFTSGLKTLSDKSREAKVKSKPRTVPFLPKYSAGLELLSRYEDTWAALHRRAKDCASAGELVDSEVVMLSAHWEKKKTSLVELQEQLQQLPALIADLESMTANLTHLEASFEEVENNLLHLEDLCGQCELERCKHMQSQQLENYKKNKRKELETFKAELDAEHAQKVLEMEHTQQMKLKERQKFFEEAFQQDMEQYLSTGYLQIAERREPIGSMSSMEVNVDMLEQMDLMDISDQEALDVFLNSGGEENTVLSPALGPESSTCQNEITLQVPNPSELRAKPPSSSSTCTDSATRDISEGGESPVVQSDEEEVQVDTALATSHTDREATPDGGEDSDS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q96EV8"},
		"label":"dtbp1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6170201"}],
		"expansion":{"id":"48","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q6QNY1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q96EV8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_19646.1"},{"db":"intact","id":"EBI-6162293"}],
		"expansion":{"id":"49","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P78537"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9UL45"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_19646.1"},{"db":"intact","id":"EBI-6162293"}],
		"expansion":{"id":"49","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P78537"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9NUP1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_19646.1"},{"db":"intact","id":"EBI-6162293"}],
		"expansion":{"id":"49","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P78537"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q96EV8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MASQGRRRRPLRRPETVVPGEATETDSERSASSSEEEELYLGPSGPTRGRPTGLRVAGEAAETDSEPEPEPEPTAAPRDLPPLVVQRESAEEAWGTEEAPAPAPARSLLQLRLAESQARLDHDVAAAVSGVYRRAGRDVAALASRLAAAQAAGLAAAHSVRLARGDLCALAERLDIVAGCRLLPDIRGVPGTEPEKDPGPRA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q6QNY0"},
		"label":"bl1s3_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_19646.1"},{"db":"intact","id":"EBI-6162293"}],
		"expansion":{"id":"49","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P78537"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q6QNY0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_19646.1"},{"db":"intact","id":"EBI-6162293"}],
		"expansion":{"id":"49","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P78537"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O95295"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_19646.1"},{"db":"intact","id":"EBI-6162293"}],
		"expansion":{"id":"49","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P78537"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q6QNY1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSGGGTETPVGCEAAPGGGSKKRDSLGTAGSAHLIIKDLGEIHSRLLDHRPVIQGETRYFVKEFEEKRGLREMRVLENLKNMIHETNEHTLPKCRDTMRDSLSQVLQRLQAANDSVCRLQQREQERKKIHSDHLVASEKQHMLQWDNFMKEQPNKRAEVDEEHRKAMERLKEQYAEMEKDLAKFSTF",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q8TDH9"},
		"label":"bl1s5_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_19646.1"},{"db":"intact","id":"EBI-6162293"}],
		"expansion":{"id":"49","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P78537"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q8TDH9"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MPPRPSSGELWGIHLMPPRILVECLLPNGMIVTLECLREATLITIKHELFKEARKYPLHQLLQDESSYIFVSVTQEAEREEFFDETRRLCDLRLFQPFLKVIEPVGNREEKILNREIGFAIGMPVCEFDMVKDPEVQDFRRNILNVCKEAVDLRDLNSPHSRAMYVYPPNVESSPELPKHIYNKLDKGQIIVVIWVIVSPNNDKQKYTLKINHDCVPEQVIAEAIRKKTRSMLLSSEQLKLCVLEYQGKYILKVCGCDEYFLEKYPLSQYKYIRSCIMLGRMPNLMLMAKESLYSQLPMDCFTMPSYSRRISTATPYMNGETSTKSLWVINSALRIKILCATYVNVNIRDIDKIYVRTGIYHGGEPLCDNVNTQRVPCSNPRWNEWLNYDIYIPDLPRAARLCLSICSVKGRKGAKEEHCPLAWGNINLFDYTDTLVSGKMALNLWPVPHGLEDLLNPIGVTGSNPNKETPCLELEFDWFSSVVKFPDMSVIEEHANWSVSREAGFSYSHAGLSNRLARDNELRENDKEQLKAISTRDPLSEITEQEKDFLWSHRHYCVTIPEILPKLLLSVKWNSRDEVAQMYCLVKDWPPIKPEQAMELLDCNYPDPMVRGFAVRCLEKYLTDDKLSQYLIQLVQVLKYEQYLDNLLVRFLLKKALTNQRIGHFFFWHLKSEMHNKTVSQRFGLLLESYCRACGMYLKHLNRQVEAMEKLINLTDILKQEKKDETQKVQMKFLVEQMRRPDFMDALQGFLSPLNPAHQLGNLRLEECRIMSSAKRPLWLNWENPDIMSELLFQNNEIIFKNGDDLRQDMLTLQIIRIMENIWQNQGLDLRMLPYGCLSIGDCVGLIEVVRNSHTIMQIQCKGGLKGALQFNSHTLHQWLKDKNKGEIYDAAIDLFTRSCAGYCVATFILGIGDRHNSNIMVKDDGQLFHIDFGHFLDHKKKKFGYKRERVPFVLTQDFLIVISKGAQECTKTREFERFQEMCYKAYLAIRQHANLFINLFSMMLGSGMPELQSFDDIAYIRKTLALDKTEQEALEYFMKQMNDAHHGGWTTKMDWIFHTIKQHALN",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P42336"},
		"label":"pk3ca_human"
	},
	{
		"object":"interactor",
		"sequence":"MAGPEGFQYRALYPFRRERPEDLELLPGDVLVVSRAALQALGVAEGGERCPQSVGWMPGLNERTRQRGDFPGTYVEFLGPVALARPGPRPRGPRPLPARPRDGAPEPGLTLPDLPEQFSPPDVAPPLLVKLVEAIERTGLDSESHYRPELPAPRTDWSLSDVDQWDTAALADGIKSFLLALPAPLVTPEASAEARRALREAAGPVGPALEPPTLPLHRALTLRFLLQHLGRVASRAPALGPAVRALGATFGPLLLRAPPPPSSPPPGGAPDGSEPSPDFPALLVEKLLQEHLEEQEVAPPALPPKPPKAKPASTVLANGGSPPSLQDAEWYWGDISREEVNEKLRDTPDGTFLVRDASSKIQGEYTLTLRKGGNNKLIKVFHRDGHYGFSEPLTFCSVVDLINHYRHESLAQYNAKLDTRLLYPVSKYQQDQIVKEDSVEAVGAQLKVYHQQYQDKSREYDQLYEEYTRTSQELQMKRTAIEAFNETIKIFEEQGQTQEKCSKEYLERFRREGNEKEMQRILLNSERLKSRIAEIHESRTKLEQQLRAQASDNREIDKRMNSLKPDLMQLRKIRDQYLVWLTQKGARQKKINEWLGIKNETEDQYALMEDEDDLPHHEERTWYVGKINRTQAEEMLSGKRDGTFLIRESSQRGCYACSVVVDGDTKHCVIYRTATGFGFAEPYNLYGSLKELVLHYQHASLVQHNDALTVTLAHPVRAPGPGPPPAAR",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O00459"},
		"label":"p85b_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6257187"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P42336"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O00459"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MYNTVWSMDRDDADWREVMMPYSTELIFYIEMDPPALPPKPPKPMTSAVPNGMKDSSVSLQDAEWYWGDISREEVNDKLRDMPDGTFLVRDASTKMQGDYTLTLRKGGNNKLIKIYHRDGKYGFSDPLTFNSVVELINHYHHESLAQYNPKLDVKLMYPVSRYQQDQLVKEDNIDAVGKKLQEYHSQYQEKSKEYDRLYEEYTRTSQEIQMKRTAIEAFNETIKIFEEQCHTQEQHSKEYIERFRREGNEKEIERIMMNYDKLKSRLGEIHDSKMRLEQDLKNQALDNREIDKKMNSIKPDLIQLRKIRDQHLVWLNHKGVRQKRLNVWLGIKNEDADENYFINEEDENLPHYDEKTWFVEDINRVQAEDLLYGKPDGAFLIRESSKKGCYACSVVADGEVKHCVIYSTARGYGFAEPYNLYSSLKELVLHYQQTSLVQHNDSLNVRLAYPVHAQMPSLCR",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q92569"},
		"label":"p55g_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6257258"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q92569"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P42336"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MEGPRGWLVLCVLAISLASMVTEDLCRAPDGKKGEAGRPGRRGRPGLKGEQGEPGAPGIRTGIQGLKGDQGEPGPSGNPGKVGYPGPSGPLGARGIPGIKGTKGSPGNIKDQPRPAFSAIRRNPPMGGNVVIFDTVITNQEEPYQNHSGRFVCTVPGYYYFTFQVLSQWEICLSIVSSSRGQVRRSLGFCDTTNKGLFQVVSGGMVLQLQQGDQVWVEKDPKKGHIYQGSEADSVFSGFLIFPSA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P02745"},
		"label":"c1qa_human"
	},
	{
		"object":"interactor",
		"sequence":"MDVGPSSLPHLGLKLLLLLLLLPLRGQANTGCYGIPGMPGLPGAPGKDGYDGLPGPKGEPGIPAIPGIRGPKGQKGEPGLPGHPGKNGPMGPPGMPGVPGPMGIPGEPGEEGRYKQKFQSVFTVTRQTHQPPAPNSLIRFNAVLTNPQGDYDTSTGKFTCKVPGLYYFVYHASHTANLCVLLYRSGVKVVTFCGHTSKTNQVNSGGVLLRLQVGEEVWLAVNDYYDMVGIQGSDSVFSGFLLFPD",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P02747"},
		"label":"c1qc_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_8220.1"},{"db":"wwpdb","id":"2wnv"},{"db":"intact","id":"EBI-6264901"},{"db":"wwpdb","id":"1PK6"},{"db":"wwpdb","id":"2jg8"},{"db":"wwpdb","id":"2jg9"},{"db":"wwpdb","id":"2wnu"}],
		"expansion":{"id":"50","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P02745"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32583840",
				"name":"cys-26",
				"type":{"id":"MI:1125","name":"direct binding region"},
				"sequenceData":["26-26"],
				"linkedFeatures":["28277823"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P02747"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MMMKIPWGSIPVLMLLLLLGLIDISQAQLSCTGPPAIPGIPGIPGTPGPDGQPGTPGIKGEKGLPGLAGDHGEFGEKGDPGIPGNPGKVGPKGPMGPKGGPGAPGAPGPKGESGDYKATQKIAFSATRTINVPLRRDQTIRFDHVITNMNNNYEPRSGKFTCKVPGLYYFTYHASSRGNLCVNLMRGRERAQKVVTFCDYAYNTFQVTTGGMVLKLEQGENVFLQATDKNSLLGMEGANSIFSGFLLFPDMEA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P02746"},
		"label":"c1qb_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_8220.1"},{"db":"wwpdb","id":"2wnv"},{"db":"intact","id":"EBI-6264901"},{"db":"wwpdb","id":"1PK6"},{"db":"wwpdb","id":"2jg8"},{"db":"wwpdb","id":"2jg9"},{"db":"wwpdb","id":"2wnu"}],
		"expansion":{"id":"50","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P02745"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32583840",
				"name":"cys-26",
				"type":{"id":"MI:1125","name":"direct binding region"},
				"sequenceData":["26-26"],
				"linkedFeatures":["28277823"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P02746"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"28277823",
				"name":"cys-31",
				"type":{"id":"MI:1125","name":"direct binding region"},
				"sequenceData":["31-31"],
				"linkedFeatures":["32583840"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MFSMRIVCLVLSVVGTAWTADSGEGDFLAEGGGVRGPRVVERHQSACKDSDWPFCSDEDWNYKCPSGCRMKGLIDEVNQDFTNRINKLKNSLFEYQKNNKDSHSLTTNIMEILRGDFSSANNRDNTYNRVSEDLRSRIEVLKRKVIEKVQHIQLLQKNVRAQLVDMKRLEVDIDIKIRSCRGSCSRALAREVDLKDYEDQQKQLEQVIAKDLLPSRDRQHLPLIKMKPVPDLVPGNFKSQLQKVPPEWKALTDMPQMRMELERPGGNEITRGGSTSYGTGSETESPRNPSSAGSWNSGSSGPGSTGNRNPGSSGTGGTATWKPGSSGPGSTGSWNSGSSGTGSTGNQNPGSPRPGSTGTWNPGSSERGSAGHWTSESSVSGSTGQWHSESGSFRPDSPGSGNARPNNPDWGTFEEVSGNVSPGTRREYHTEKLVTSKGDKELRTGKEKVTSGSTTTTRRSCSKTVTKTVIGPDGHKEVTKEVVTSEDGSDCPEAMDLGTLSGIGTLDGFRHRHPDEAAFFDTASTGKTFPGFFSPMLGEFVSETESRGSESGIFTNTKESSSHHPGIAEFPSRGKSSSYSKQFTSSTSYNRGDSTFESKSYKMADEAGSEADHEGTHSTKRGHAKSRPVRDCDDVLQTHPSGTQSGIFNIKLPGSSKIFSVYCDQETSLGGWLLIQQRMDGSLNFNRTWQDYKRGFGSLNDEGEGEFWLGNDYLHLLTQRGSVLRVELEDWAGNEAYAEYHFRVGSEAEGYALQVSSYEGTAGDALIEGSVEEGAEYTSHNNMQFSTFDRDADQWEENCAEVYGGGWWYNNCQAANLNGIYYPGGSYDPRNNSPYEIENGVVWVSFRGADYSLRAVRMKIRPLVTQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P02671"},
		"label":"fiba_human"
	},
	{
		"object":"interactor",
		"sequence":"MKRMVSWSFHKLKTMKHLLLLLLCVFLVKSQGVNDNEEGFFSARGHRPLDKKREEAPSLRPAPPPISGGGYRARPAKAAATQKKVERKAPDAGGCLHADPDLGVLCPTGCQLQEALLQQERPIRNSVDELNNNVEAVSQTSSSSFQYMYLLKDLWQKRQKQVKDNENVVNEYSSELEKHQLYIDETVNSNIPTNLRVLRSILENLRSKIQKLESDVSAQMEYCRTPCTVSCNIPVVSGKECEEIIRKGGETSEMYLIQPDSSVKPYRVYCDMNTENGGWTVIQNRQDGSVDFGRKWDPYKQGFGNVATNTDGKNYCGLPGEYWLGNDKISQLTRMGPTELLIEMEDWKGDKVKAHYGGFTVQNEANKYQISVNKYRGTAGNALMDGASQLMGENRTMTIHNGMFFSTYDRDNDGWLTSDPRKQCSKEDGGGWWYNRCHAANPNGRYYWGGQYTWDMAKHGTDDGVVWMNWKGSWYSMRKMSMKIRPFFPQQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P02675"},
		"label":"fibb_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_4095.2"},{"db":"reactome","id":"REACT_4520.1"},{"db":"intact","id":"EBI-6397384"}],
		"expansion":{"id":"51","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P02671"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P02675"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSWSLHPRNLILYFYALLFLSSTCVAYVATRDNCCILDERFGSYCPTTCGIADFLSTYQTKVDKDLQSLEDILHQVENKTSEVKQLIKAIQLTYNPDESSKPNMIDAATLKSRKMLEEIMKYEASILTHDSSIRYLQEIYNSNNQKIVNLKEKVAQLEAQCQEPCKDTVQIHDITGKDCQDIANKGAKQSGLYFIKPLKANQQFLVYCEIDGSGNGWTVFQKRLDGSVDFKKNWIQYKEGFGHLSPTGTTEFWLGNEKIHLISTQSAIPYALRVELEDWNGRTSTADYAMFKVGPEADKYRLTYAYFAGGDAGDAFDGFDFGDDPSDKFFTSHNGMQFSTWDNDNDKFEGNCAEQDGSGWWMNKCHAGHLNGVYYQGGTYSKASTPNGYDNGIIWATWKTRWYSMKKTTMKIIPFNRLTIGEGQQHHLGGAKQVRPEHPAETEYDSLYPEDDL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P02679"},
		"label":"fibg_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_4095.2"},{"db":"reactome","id":"REACT_4520.1"},{"db":"intact","id":"EBI-6397384"}],
		"expansion":{"id":"51","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P02671"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P02679"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MRQKRKGDLSPAELMMLTIGDVIKQLIEAHEQGKDIDLNKVKTKTAAKYGLSAQPRLVDIIAAVPPQYRKVLMPKLKAKPIRTASGIAVVAVMCKPHRCPHISFTGNICVYCPGGPDSDFEYSTQSYTGYEPTSMRAIRARYDPFLQTRHRIEQLKQLGHSVDKVEFIVMGGTFMALPEEYRDYFIRNLHDALSGHTSNNIYEAVKYSERSLTKCIGITIETRPDYCMKRHLSDMLTYGCTRLEIGVQSVYEDVARDTNRGHTVKAVCESFHLAKDSGFKVVAHMMPDLPNVGLERDIEQFTEFFENPAFRPDGLKLYPTLVIRGTGLYELWKSGRYKSYSPSDLVELVARILALVPPWTRVYRVQRDIPMPLVSSGVEHGNLRELALARMKDLGIQCRDVRTREVGIQEIHHKVRPYQVELVRRDYVANGGWETFLSYEDPDQDILIGLLRLRKCSEETFRFELGGGVSIVRELHVYGSVVPVSSRDPTKFQHQGFGMLLMEEAERIAREEHGSGKIAVISGVGTRNYYRKIGYRLQGPYMVKMLK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9H9T3"},
		"label":"elp3_human"
	},
	{
		"object":"interactor",
		"sequence":"MAAVATCGSVAASTGSAVATASKSNVTSFQRRGPRASVTNDSGPRLVSIAGTRPSVRNGQLLVSTGLPALDQLLGGGLAVGTVLLIEEDKYNIYSPLLFKYFLAEGIVNGHTLLVASAKEDPANILQELPAPLLDDKCKKEFDEDVYNHKTPESNIKMKIAWRYQLLPKMEIGPVSSSRFGHYYDASKRMPQELIEASNWHGFFLPEKISSTLKVEPCSLTPGYTKLLQFIQNIIYEEGFDGSNPQKKQRNILRIGIQNLGSPLWGDDICCAENGGNSHSLTKFLYVLRGLLRTSLSACIITMPTHLIQNKAIIARVTTLSDVVVGLESFIGSERETNPLYKDYHGLIHIRQIPRLNNLICDESDVKDLAFKLKRKLFTIERLHLPPDLSDTVSRSSKMDLAESAKRLGPGCGMMAGGKKHLDF",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q96EB1"},
		"label":"elp4_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.3.1.48"},{"db":"intact","id":"EBI-6558811"}],
		"expansion":{"id":"52","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9H9T3"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q96EB1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MFVELNNLLNTTPDRAEQGKLTLLCDAKTDGSFLVHHFLSFYLKANCKVCFVALIQSFSHYSIVGQKLGVSLTMARERGQLVFLEGLKSAVDVVFQAQKEPHPLQFLREANAGNLKPLFEFVREALKPVDSGEARWTYPVLLVDDLSVLLSLGMGAVAVLDFIHYCRATVCWELKGNMVVLVHDSGDAEDEENDILLNGLSHQSHLILRAEGLATGFCRDVHGQLRILWRRPSQPAVHRDQSFTYQYKIQDKSVSFFAKGMSPAVL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q0PNE2"},
		"label":"elp6_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.3.1.48"},{"db":"intact","id":"EBI-6558811"}],
		"expansion":{"id":"52","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9H9T3"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q0PNE2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MTPSEGARAGTGRELEMLDSLLALGGLVLLRDSVEWEGRSLLKALVKKSALCGEQVHILGCEVSEEEFREGFDSDINNRLVYHDFFRDPLNWSKTEEAFPGGPLGALRAMCKRTDPVPVTIALDSLSWLLLRLPCTTLCQVLHAVSHQDSCPGDSSSVGKVSVLGLLHEELHGPGPVGALSSLAQTEVTLGGTMGQASAHILCRRPRQRPTDQTQWFSILPDFSLDLQEGPSVESQPYSDPHIPPVDPTTHLTFNLHLSKKEREARDSLILPFQFSSEKQQALLRPRPGQATSHIFYEPDAYDDLDQEDPDDDLDI",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q8TE02"},
		"label":"elp5_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.3.1.48"},{"db":"intact","id":"EBI-6558811"}],
		"expansion":{"id":"52","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9H9T3"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q8TE02"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MVAPVLETSHVFCCPNRVRGVLNWSSGPRGLLAFGTSCSVVLYDPLKRVVVTNLNGHTARVNCIQWICKQDGSPSTELVSGGSDNQVIHWEIEDNQLLKAVHLQGHEGPVYAVHAVYQRRTSDPALCTLIVSAAADSAVRLWSKKGPEVMCLQTLNFGNGFALALCLSFLPNTDVPILACGNDDCRIHIFAQQNDQFQKVLSLCGHEDWIRGVEWAAFGRDLFLASCSQDCLIRIWKLYIKSTSLETQDDDNIRLKENTFTIENESVKIAFAVTLETVLAGHENWVNAVHWQPVFYKDGVLQQPVRLLSASMDKTMILWAPDEESGVWLEQVRVGEVGGNTLGFYDCQFNEDGSMIIAHAFHGALHLWKQNTVNPREWTPEIVISGHFDGVQDLVWDPEGEFIITVGTDQTTRLFAPWKRKDQSQVTWHEIARPQIHGYDLKCLAMINRFQFVSGADEKVLRVFSAPRNFVENFCAITGQSLNHVLCNQDSDLPEGATVPALGLSNKAVFQGDIASQPSDEEELLTSTGFEYQQVAFQPSILTEPPTEDHLLQNTLWPEVQKLYGHGYEIFCVTCNSSKTLLASACKAAKKEHAAIILWNTTSWKQVQNLVFHSLTVTQMAFSPNEKFLLAVSRDRTWSLWKKQDTISPEFEPVFSLFAFTNKITSVHSRIIWSCDWSPDSKYFFTGSRDKKVVVWGECDSTDDCIEHNIGPCSSVLDVGGAVTAVSVCPVLHPSQRYVVAVGLECGKICLYTWKKTDQVPEINDWTHCVETSQSQSHTLAIRKLCWKNCSGKTEQKEAEGAEWLHFASCGEDHTVKIHRVNKCAL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q6IA86"},
		"label":"elp2_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.3.1.48"},{"db":"intact","id":"EBI-6558811"}],
		"expansion":{"id":"52","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9H9T3"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q6IA86"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MRNLKLFRTLEFRDIQGPGNPQCFSLRTEQGTVLIGSEHGLIEVDPVSREVKNEVSLVAEGFLPEDGSGRIVGVQDLLDQESVCVATASGDVILCSLSTQQLECVGSVASGISVMSWSPDQELVLLATGQQTLIMMTKDFEPILEQQIHQDDFGESKFITVGWGRKETQFHGSEGRQAAFQMQMHESALPWDDHRPQVTWRGDGQFFAVSVVCPETGARKVRVWNREFALQSTSEPVAGLGPALAWKPSGSLIASTQDKPNQQDIVFFEKNGLLHGHFTLPFLKDEVKVNDLLWNADSSVLAVWLEDLQREESSIPKTCVQLWTVGNYHWYLKQSLSFSTCGKSKIVSLMWDPVTPYRLHVLCQGWHYLAYDWHWTTDRSVGDNSSDLSNVAVIDGNRVLVTVFRQTVVPPPMCTYQLLFPHPVNQVTFLAHPQKSNDLAVLDASNQISVYKCGDCPSADPTVKLGAVGGSGFKVCLRTPHLEKRYKIQFENNEDQDVNPLKLGLLTWIEEDVFLAVSHSEFSPRSVIHHLTAASSEMDEEHGQLNVSSSAAVDGVIISLCCNSKTKSVVLQLADGQIFKYLWESPSLAIKPWKNSGGFPVRFPYPCTQTELAMIGEEECVLGLTDRCRFFINDIEVASNITSFAVYDEFLLLTTHSHTCQCFCLRDASFKTLQAGLSSNHVSHGEVLRKVERGSRIVTVVPQDTKLVLQMPRGNLEVVHHRALVLAQIRKWLDKLMFKEAFECMRKLRINLNLIYDHNPKVFLGNVETFIKQIDSVNHINLFFTELKEEDVTKTMYPAPVTSSVYLSRDPDGNKIDLVCDAMRAVMESINPHKYCLSILTSHVKKTTPELEIVLQKVHELQGNAPSDPDAVSAEEALKYLLHLVDVNELYDHSLGTYDFDLVLMVAEKSQKDPKEYLPFLNTLKKMETNYQRFTIDKYLKRYEKAIGHLSKCGPEYFPECLNLIKDKNLYNEALKLYSPSSQQYQDISIAYGEHLMQEHMYEPAGLMFARCGAHEKALSAFLTCGNWKQALCVAAQLNFTKDQLVGLGRTLAGKLVEQRKHIDAAMVLEECAQDYEEAVLLLLEGAAWEEALRLVYKYNRLDIIETNVKPSILEAQKNYMAFLDSQTATFSRHKKRLLVVRELKEQAQQAGLDDEVPHGQESDLFSETSSVVSGSEMSGKYSHSNSRISARSSKNRRKAERKKHSLKEGSPLEDLALLEALSEVVQNTENLKDEVYHILKVLFLFEFDEQGRELQKAFEDTLQLMERSLPEIWTLTYQQNSATPVLGPNSTANSIMASYQQQKTSVPVLDAELFIPPKINRRTQWKLSLLD",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O95163"},
		"label":"elp1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.3.1.48"},{"db":"intact","id":"EBI-6558811"}],
		"expansion":{"id":"52","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9H9T3"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O95163"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MEQYTANSNSSTEQIVVQAGQIQQQQQGGVTAVQLQTEAQVASASGQQVQTLQVVQGQPLMVQVSGGQLITSTGQPIMVQAVPGGQGQTIMQVPVSGTQGLQQIQLVPPGQIQIQGGQAVQVQGQQGQTQQIIIQQPQTAVTAGQTQTQQQIAVQGQQVAQTAEGQTIVYQPVNADGTILQQVTVPVSGMITIPAASLAGAQIVQTGANTNTTSSGQGTVTVTLPVAGNVVNSGGMVMMVPGAGSVPAIQRIPLPGAEMLEEEPLYVNAKQYHRILKRRQARAKLEAEGKIPKERRKYLHESRHRHAMARKRGEGGRFFSPKEKDSPHMQDPNQADEEAMTQIIRVS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P23511"},
		"label":"nfya_human"
	},
	{
		"object":"interactor",
		"sequence":"MSTEGGFGGTSSSDAQQSLQSFWPRVMEEIRNLTVKDFRVQELPLARIKKIMKLDEDVKMISAEAPVLFAKAAQIFITELTLRAWIHTEDNKRRTLQRNDIAMAITKFDQFDFLIDIVPRDELKPPKRQEEVRQSVTPAEPVQYYFTLAQQPTAVQVQGQQQGQQTTSSTTTIQPGQIIIAQPQQGQTTPVTMQVGEGQQVQIVQAQPQGQAQQAQSGTGQTMQVMQQIITNTGEIQQIPVQLNAGQLQYIRLAQPVSGTQVVQGQIQTLATNAQQGQRNASQGKPRRCLKETLQITQTEVQQGQQQFSQFTDGQRNSVQQARVSELTGEAEPREVKATGNSTPCTSSLPTTHPPSHRAGASCVCCSQPQQSSTSPPPSDALQWVVVEVSGTPNQLETHRELHAPLPGMTSLSPLHPSQQLYQIQQVTMPAGQDLAQPMFIQSANQPSDGQAPQVTGD",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q13952"},
		"label":"nfyc_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_26721.1"},{"db":"wwpdb","id":"4awl"},{"db":"intact","id":"EBI-6672597"}],
		"expansion":{"id":"53","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P23511"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"408614",
				"name":"nfyc binding region",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["22477150"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q13952"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17674749",
				"name":"nfyb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["27-120"],
				"linkedFeatures":["2121135"]
				},
				{
				"id":"22477150",
				"name":"nyfa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["408614"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MTMDGDSSTTDASQLGISADYIGGSHYVIQPHDDTEDSMNDHEDTNGSKESFREQDIYLPIANVARIMKNAIPQTGKIAKDAKECVQECVSEFISFITSEASERCHQEKRKTINGEDILFAMSTLGFDSYVEPLKLYLQKFREAMKGEKGIGGAVTATDGLSEELTEEAFTNQLPAGLITTDGQQQNVMVYTTSYQQISGVQQIQFS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P25208"},
		"label":"nfyb_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_26721.1"},{"db":"wwpdb","id":"4awl"},{"db":"intact","id":"EBI-6672597"}],
		"expansion":{"id":"53","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P23511"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"408614",
				"name":"nfyc binding region",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["22477150"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P25208"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"2121135",
				"name":"nfyc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["51-143"],
				"linkedFeatures":["17674749"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAGNFWQSSHYLQWILDKQDLLKERQKDLKFLSEEEYWKLQIFFTNVIQALGEHLKLRQQVIATATVYFKRFYARYSLKSIDPVLMAPTCVFLASKVEEFGVVSNTRLIAAATSVLKTRFSYAFPKEFPYRMNHILECEFYLLELMDCCLIVYHPYRPLLQYVQDMGQEDMLLPLAWRIVNDTYRTDLCLLYPPFMIALACLHVACVVQQKDARQWFAELSVDMEKILEIIRVILKLYEQWKNFDERKEMATILSKMPKPKPPPNSEGEQGPNGSQNSSYSQS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P24863"},
		"label":"ccnc_human"
	},
	{
		"object":"interactor",
		"sequence":"MDYDFKVKLSSERERVEDLFEYEGCKVGRGTYGHVYKAKRKDGKDDKDYALKQIEGTGISMSACREIALLRELKHPNVISLQKVFLSHADRKVWLLFDYAEHDLWHIIKFHRASKANKKPVQLPRGMVKSLLYQILDGIHYLHANWVLHRDLKPANILVMGEGPERGRVKIADMGFARLFNSPLKPLADLDPVVVTFWYRAPELLLGARHYTKAIDIWAIGCIFAELLTSEPIFHCRQEDIKTSNPYHHDQLDRIFNVMGFPADKDWEDIKKMPEHSTLMKDFRRNTYTNCSLIKYMEKHKVKPDSKAFHLLQKLLTMDPIKRITSEQAMQDPYFLEDPLPTSDVFAGCQIPYPKREFLTEEEPDDKGDKKNQQQQQGNNHTNGTGHPGNQDSSHTQGPPLKKVRVVPPTTTSGGLIMTSDYQRSNPHAAYPNPGPSTSQPQSSMGYSATSQQPPQYSHQTHRY",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P49336"},
		"label":"cdk8_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"2.7.11.22"},{"db":"intact","id":"EBI-6868768"},{"db":"reactome","id":"REACT_118957.1"},{"db":"intenz","id":"2.7.11.23"},{"db":"wwpdb","id":"3RGF"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P24863"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P49336"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MNFLLSWVHWSLALLLYLHHAKWSQAAPMAEGGGQNHHEVVKFMDVYQRSYCHPIETLVDIFQEYPDEIEYIFKPSCVPLMRCGGCCNDEGLECVPTEESNITMQIMRIKPHQGQHIGEMSFLQHNKCECRPKKDRARQEKKSVRGKGKGQKRKRKKSRYKSWSVYVGARCCLMPWSLPGPHPCGPCSERRKHLFVQDPQTCKCSCKNTDSRCKARQLELNERTCRCDKPRR",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P15692"},
		"label":"vegfa_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1mjv"},{"db":"omim","id":"603933"},{"db":"intact","id":"EBI-6910621"},{"db":"reactome","id":"REACT_121365.3"},{"db":"reactome","id":"REACT_21351.1"},{"db":"reactome","id":"REACT_12529.1"}],
		"parameters":[{"type":"melting point","value":"381.85","unit":"kelvin"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P15692"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"15122045",
				"name":"dimerisation domain",
				"type":{"id":"MI:1125","name":"direct binding region"},
				"sequenceData":["40-134"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P15692"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"14950081",
				"name":"dimerisation domain",
				"type":{"id":"MI:1125","name":"direct binding region"},
				"sequenceData":["40-134"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"SDQEAKPSTEDLGDKKEGEYIKLKVIGQDSSEIHFKVKMTTHLKKLKESYCQRQGVPMNSLRFLFEGQRIADNHTPKELGMEEEDVIEVYQEQTGG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P63165-PRO_0000035939"},
		"label":"p63165-pro_0000035939"
	},
	{
		"object":"interactor",
		"sequence":"MSGIALSRLAQERKAWRKDHPFGFVAVPTKNPDGTMNLMNWECAIPGKKGTPWEGGLFKLRMLFKDDYPSSPPKCKFEPPLFHPNVYPSGTVCLSILEEDKDWRPAITIKQILLGIQELLNEPNIQDPAQAEAYTIYCQNRVEYEKRVRAQAKKFAPS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P63279"},
		"label":"ubc9_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 6.3.2.-"},{"db":"intact","id":"EBI-9347978"},{"db":"wwpdb","id":"2vrr"},{"db":"wwpdb","id":"2pe6"},{"db":"reactome","id":"REACT_165180.2"},{"db":"wwpdb","id":"2uyz"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P63165-PRO_0000035939"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"10424930",
				"name":"ube2i binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["96-96"],
				"linkedFeatures":["24119361"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P63279"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"24119361",
				"name":"sumo1 binding site (lys14\/cys93)",
				"type":{"id":"MI:1125","name":"direct binding region"},
				"sequenceData":["14-14","93-93"],
				"linkedFeatures":["10424930"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MANEKPTEEVKTENNNHINLKVAGQDGSVVQFKIKRQTPLSKLMKAYCEPRGLSMKQIRFRFGGQPISGTDKPAQLEMEDEDTIDVFQQPTGG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q6EEV6-PRO_0000042710"},
		"label":"q6eev6-pro_0000042710"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 6.3.2.-"},{"db":"reactome","id":"REACT_164613.2"},{"db":"intact","id":"EBI-9350294"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P63279"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"3013301",
				"name":"sumo4 binding site (lys14\/cys93)",
				"type":{"id":"MI:1125","name":"direct binding region"},
				"sequenceData":["14-14","93-93"],
				"linkedFeatures":["10914931"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q6EEV6-PRO_0000042710"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"10914931",
				"name":"ube2i binding site (gly93)",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["93-93"],
				"linkedFeatures":["3013301"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSEEKPKEGVKTENDHINLKVAGQDGSVVQFKIKRHTPLSKLMKAYCERQGLSMRQIRFRFDGQPINETDTPAQLEMEDEDTIDVFQQQTGG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P55854-PRO_0000035957"},
		"label":"p55854-pro_0000035957"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 6.3.2.-"},{"db":"intact","id":"EBI-9350214"},{"db":"reactome","id":"REACT_164613.2"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P63279"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"5170385",
				"name":"sumo3 binding site (lys14\/cys93)",
				"type":{"id":"MI:1125","name":"direct binding region"},
				"sequenceData":["14-14","93-93"],
				"linkedFeatures":["26242852"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P55854-PRO_0000035957"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26242852",
				"name":"ube2i binding site (gly92)",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["92-92"],
				"linkedFeatures":["5170385"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MADEKPKEGVKTENNDHINLKVAGQDGSVVQFKIKRHTPLSKLMKAYCERQGLSMRQIRFRFDGQPINETDTPAQLEMEDEDTIDVFQQQTGG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P61956-PRO_0000035949"},
		"label":"p61956-pro_0000035949"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 6.3.2.-"},{"db":"intact","id":"EBI-9350155"},{"db":"reactome","id":"REACT_164508.2"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P61956-PRO_0000035949"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"24171116",
				"name":"ube2i binding site (gly93)",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["93-93"],
				"linkedFeatures":["441728"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P63279"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"441728",
				"name":"sumo2 binding site (lys14\/cys93)",
				"type":{"id":"MI:1125","name":"direct binding region"},
				"sequenceData":["14-14","93-93"],
				"linkedFeatures":["24171116"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAAGRAQVPSSEQAWLEDAQVFIQKTLCPAVKEPNVQLTPLVIDCVKTVWLSQGRNQGSTLPLSYSFVSVQDLKTHQRLPCCSHLSWSSSAYQAWAQEAGPNGNPLPREQLLLLGTLTDLSADLEQECRNGSLYVRDNTGVLSCELIDLDLSWLGHLFLFPRWSYLPPARWNSSGEGHLELWDAPVPVFPLTISPGPVTPIPVLYPESASCLLRLRNKLRGVQRNLAGSLVRLSALVKSKQKAYFILSLGRSHPAVTHVSIIVQVPAQLVWHRALRPGTAYVLTELRVSKIRGQRQHVWMTSQSSRLLLLKPECVQELELELEGPLLEADPKPLPMPSNSEDKKDPESLVRYSRLLSYSGAVTGVLNEPAGLYELDGQLGLCLAYQQFRGLRRVMRPGVCLQLQDVHLLQSVGGGTRRPVLAPCLRGAVLLQSFSRQKPGAHSSRQAYGASLYEQLVWERQLGLPLYLWATKALEELACKLCPHVLRHHQFLQHSSPGSPSLGLQLLAPTLDLLAPPGSPVRNAHNEILEEPHHCPLQKYTRLQTPSSFPTLATLKEEGQRKAWASFDPKALLPLPEASYLPSCQLNRRLAWSWLCLLPSAFCPAQVLLGVLVASSHKGCLQLRDQSGSLPCLLLAKHSQPLSDPRLIGCLVRAERFQLIVERDVRSSFPSWKELSMPGFIQKQQARVYVQFFLADALILPVPRPCLHSATPSTPQTDPTGPEGPHLGQSRLFLLCHKEALMKRNFCVPPGASPEVPKPALSFYVLGSWLGGTQRKEGTGWGLPEPQGNDDNDQKVHLIFFGSSVRWFEFLHPGQVYRLIAPGPATPMLFEKDGSSCISRRPLELAGCASCLTVQDNWTLELESSQDIQDVLDANKSLPESSLTDLLSDNFTDSLVSFSAEILSRTLCEPLVASLWMKLGNTGAMRRCVKLTVALETAECEFPPHLDVYIEDPHLPPSLGLLPGARVHFSQLEKRVSRSHNVYCCFRSSTYVQVLSFPPETTISIPLPHIYLAELLQGGQSPFQATASCHIVSVFSLQLFWVCAYCTSICRQGKCTRLGSTCPTQTAISQAIIRLLVEDGTAEAVVTCRNHHVAAALGLCPREWASLLDFVQVPGRVVLQFAGPGAQLESSARVDEPMTMFLWTLCTSPSVLRPIVLSFELERKPSKIVPLEPPRLQRFQCGELPFLTHVNPRLRLSCLSIRESEYSSSLGILASSC",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q2NKJ3"},
		"label":"ctc1_human"
	},
	{
		"object":"interactor",
		"sequence":"MQPGSSRCEEETPSLLWGLDPVFLAFAKLYIRDILDMKESRQVPGVFLYNGHPIKQVDVLGTVIGVRERDAFYSYGVDDSTGVINCICWKKLNTESVSAAPSAARELSLTSQLKKLQETIEQKTKIEIGDTIRVRGSIRTYREEREIHATTYYKVDDPVWNIQIARMLELPTIYRKVYDQPFHSSALEKEEALSNPGALDLPSLTSLLSEKAKEFLMENRVQSFYQQELEMVESLLSLANQPVIHSASSDQVNFKKDTTSKAIHSIFKNAIQLLQEKGLVFQKDDGFDNLYYVTREDKDLHRKIHRIIQQDCQKPNHMEKGCHFLHILACARLSIRPGLSEAVLQQVLELLEDQSDIVSTMEHYYTAF",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9H668"},
		"label":"stn1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-8801830"}],
		"expansion":{"id":"54","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q2NKJ3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"8601168",
				"name":"obfc1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["700-1217"],
				"linkedFeatures":["7343364"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9H668"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"7343364",
				"name":"ctc1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["8601168"]
				},
				{
				"id":"6729989",
				"name":"ten1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["32497739"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MMLPKPGTYYLPWEVSAGQVPDGSTLRTFGRLCLYDMIQSRVTLMAQHGSDQHQVLVCTKLVEPFHAQVGSLYIVLGELQHQQDRGSVVKARVLTCVEGMNLPLLEQAIREQRLYKQERGGSQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q86WV5"},
		"label":"ten1l_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-8801830"}],
		"expansion":{"id":"54","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q2NKJ3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"8601168",
				"name":"obfc1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["700-1217"],
				"linkedFeatures":["7343364"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q86WV5"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32497739",
				"name":"obfc1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["6729989"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MPHSSLHPSIPCPRGHGAQKAALVLLSACLVTLWGLGEPPEHTLRYLVLHLASLQLGLLLNGVCSLAEELRHIHSRYRGSYWRTVRACLGCPLRRGALLLLSIYFYYSLPNAVGPPFTWMLALLGLSQALNILLGLKGLAPAEISAVCEKGNFNVAHGLAWSYYIGYLRLILPELQARIRTYNQHYNNLLRGAVSQRLYILLPLDCGVPDNLSMADPNIRFLDKLPQQTGDHAGIKDRVYSNSIYELLENGQRAGTCVLEYATPLQTLFAMSQYSQAGFSREDRLEQAKLFCRTLEDILADAPESQNNCRLIAYQEPADDSSFSLSQEVLRHLRQEEKEEVTVGSLKTSAVPSTSTMSQEPELLISGMEKPLPLRTDFS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q86WV6"},
		"label":"sting_human"
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
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"4LOI"},{"db":"reactome","id":"REACT_160695.2"},{"db":"wwpdb","id":"4loh"},{"db":"intact","id":"EBI-8801280"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q86WV6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"24012589",
				"name":"co-factor binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["155-341"],
				"linkedFeatures":["20436937"]
				},
				{
				"id":"20440669",
				"name":"dimerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["155-341"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:75947"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"20436937",
				"name":"sting binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["24012589"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAVTAQAARRKERVLCLFDVDGTLTPARQKIDPEVAAFLQKLRSRVQIGVVGGSDYCKIAEQLGDGDEVIEKFDYVFAENGTVQYKHGRLLSKQTIQNHLGEELLQDLINFCLSYMALLRLPKKRGTFIEFRNGMLNISPIGRSCTLEERIEFSELDKKEKIREKFVEALKTEFAGKGLRFSRGGMISFDVFPEGWDKRYCLDSLDQDSFDTIHFFGNETSPGGNDFEIFADPRTVGHSVVSPQDTVQRCREIFFPETAHEA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q92871"},
		"label":"pmm1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"pdbe","id":"2FUC"},{"db":"intact","id":"EBI-8842444"},{"db":"intenz","id":"5.4.2.8"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:18420"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"16058680",
				"name":"pmm1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["19953541"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q92871"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"16170597",
				"name":"dimerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				},
				{
				"id":"19953541",
				"name":"mg2+ binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["16058680"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:16474"},
		"label":"nadph"
	},
	{
		"object":"interactor",
		"sequence":"MPHIDNDVKLDFKDVLLRPKRSTLKSRSEVDLTRSFSFRNSKQTYSGVPIIAANMDTVGTFEMAKVLCKFSLFTAVHKHYSLVQWQEFAGQNPDCLEHLAASSGTGSSDFEQLEQILEAIPQVKYICLDVANGYSEHFVEFVKDVRKRFPQHTIMAGNVVTGEMVEELILSGADIIKVGIGPGSVCTTRKKTGVGYPQLSAVMECADAAHGLKGHIISDGGCSCPGDVAKAFGAGADFVMLGGMLAGHSESGGELIERDGKKYKLFYGMSSEMAMKKYAGGVAEYRASEGKTVEVPFKGDVEHTIRDILGGIRSTCTYVGAAKLKELSRRTTFIRVTQQVNPIFSEAC",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9P2T1"},
		"label":"gmpr2_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"2A7R"},{"db":"intact","id":"EBI-9007334"},{"db":"wwpdb","id":"2BZN"},{"db":"intenz","id":"1.7.1.7"},{"db":"wwpdb","id":"2C6Q"},{"db":"reactome","id":"REACT_22008.1"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:16474"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"21892005",
				"name":"gmpr2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["14588154"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9P2T1"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"872656",
				"name":"tetramerization region",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["10-341"]
				},
				{
				"id":"14588154",
				"name":"nadph binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21892005"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAATEDERLAGSGEGERLDFLRDRHVRFFQRCLQVLPERYSSLETSRLTIAFFALSGLDMLDSLDVVNKDDIIEWIYSLQVLPTEDRSNLNRCGFRGSSYLGIPFNPSKAPGTAHPYDSGHIAMTYTGLSCLVILGDDLSRVNKEACLAGLRALQLEDGSFCAVPEGSENDMRFVYCASCICYMLNNWSGMDMKKAITYIRRSMSYDNGLAQGAGLESHGGSTFCGIASLCLMGKLEEVFSEKELNRIKRWCIMRQQNGYHGRPNKPVDTCYSFWVGATLKLLKIFQYTNFEKNRNYILSTQDRLVGGFAKWPDSHPDALHAYFGICGLSLMEESGICKVHPALNVSTRTSERLLDLHQSWKTKDSKQCSENVHIST",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P53609"},
		"label":"pgtb1_human"
	},
	{
		"object":"interactor",
		"sequence":"MAATEGVGEAAQGGEPGQPAQPPPQPHPPPPQQQHKEEMAAEAGEAVASPMDDGFVSLDSPSYVLYRDRAEWADIDPVPQNDGPNPVVQIIYSDKFRDVYDYFRAVLQRDERSERAFKLTRDAIELNAANYTVWHFRRVLLKSLQKDLHEEMNYITAIIEEQPKNYQVWHHRRVLVEWLRDPSQELEFIADILNQDAKNYHAWQHRQWVIQEFKLWDNELQYVDQLLKEDVRNNSVWNQRYFVISNTTGYNDRAVLEREVQYTLEMIKLVPHNESAWNYLKGILQDRGLSKYPNLLNQLLDLQPSHSSPYLIAFLVDIYEDMLENQCDNKEDILNKALELCEILAKEKDTIRKEYWRYIGRSLQSKHSTENDSPTNVQQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P49354"},
		"label":"fnta_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 2.5.1.59"},{"db":"chembl","id":"CHEMBL2095164"},{"db":"intact","id":"EBI-9008402"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P53609"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"3457320",
				"name":"fnta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["24471494"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P49354"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"24471494",
				"name":"pggt1b binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["3457320"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MVLSPADKTNVKAAWGKVGAHAGEYGAEALERMFLSFPTTKTYFPHFDLSHGSAQVKGHGKKVADALTNAVAHVDDMPNALSALSDLHAHKLRVDPVNFKLLSHCLLVTLAAHLPAEFTPAVHASLDKFLASVSTVLTSKYR",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P69905"},
		"label":"hba_human"
	},
	{
		"object":"interactor",
		"sequence":"MVHLTPEEKSAVTALWGKVNVDEVGGEALGRLLVVYPWTQRFFESFGDLSTPDAVMGNPKVKAHGKKVLGAFSDGLAHLDNLKGTFATLSELHCDKLHVDPENFRLLGNVLVCVLAHHFGKEFTPPVQAAYQKVVAGVANALAHKYH",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P68871"},
		"label":"hbb_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"chembl","id":"CHEMBL2095168"},{"db":"omim","id":"613978"},{"db":"omim","id":"603903"},{"db":"omim","id":"611162"},{"db":"reactome","id":"REACT_125222.1"},{"db":"reactome","id":"REACT_160621.1"},{"db":"wwpdb","id":"2dn1"},{"db":"wwpdb","id":"2dn2"},{"db":"reactome","id":"REACT_125469.1"},{"db":"reactome","id":"REACT_161051.1"},{"db":"reactome","id":"REACT_123853.1"},{"db":"wwpdb","id":"2dn3"},{"db":"omim","id":"140700"},{"db":"omim","id":"603902"},{"db":"omim","id":"604131"},{"db":"omim","id":"613985"},{"db":"intact","id":"EBI-9008420"},{"db":"omim","id":"141749"}],
		"expansion":{"id":"55","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P69905"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"15730502",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["7178296"]
				},
				{
				"id":"17453644",
				"name":"hbb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["10562643"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P68871"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"23399642",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["19853630"]
				},
				{
				"id":"10562643",
				"name":"hba binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["17453644"]
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
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"chembl","id":"CHEMBL2095168"},{"db":"omim","id":"613978"},{"db":"omim","id":"603903"},{"db":"omim","id":"611162"},{"db":"reactome","id":"REACT_125222.1"},{"db":"reactome","id":"REACT_160621.1"},{"db":"wwpdb","id":"2dn1"},{"db":"wwpdb","id":"2dn2"},{"db":"reactome","id":"REACT_125469.1"},{"db":"reactome","id":"REACT_161051.1"},{"db":"reactome","id":"REACT_123853.1"},{"db":"wwpdb","id":"2dn3"},{"db":"omim","id":"140700"},{"db":"omim","id":"603902"},{"db":"omim","id":"604131"},{"db":"omim","id":"613985"},{"db":"intact","id":"EBI-9008420"},{"db":"omim","id":"141749"}],
		"expansion":{"id":"55","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P69905"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"15730502",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["7178296"]
				},
				{
				"id":"17453644",
				"name":"hbb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["10562643"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:30413"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"7178296",
				"name":"hba binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["15730502"]
				},
				{
				"id":"19853630",
				"name":"hbb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["23399642"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"omim","id":"613985"},{"db":"omim","id":"140700"},{"db":"intact","id":"EBI-9116675"},{"db":"omim","id":"603902"},{"db":"omim","id":"603903"},{"db":"omim","id":"611162"},{"db":"wwpdb","id":"1cbl"},{"db":"wwpdb","id":"1cbm"},{"db":"wwpdb","id":"1ch4"},{"db":"omim","id":"141749"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:30413"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"14691171",
				"name":"hbb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21005445"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P68871"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"12344398",
				"name":"tetramerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				},
				{
				"id":"21005445",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["14691171"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MRKSPGLSDCLWAWILLLSTLTGRSYGQPSLQDELKDNTTVFTRILDRLLDGYDNRLRPGLGERVTEVKTDIFVTSFGPVSDHDMEYTIDVFFRQSWKDERLKFKGPMTVLRLNNLMASKIWTPDTFFHNGKKSVAHNMTMPNKLLRITEDGTLLYTMRLTVRAECPMHLEDFPMDAHACPLKFGSYAYTRAEVVYEWTREPARSVVVAEDGSRLNQYDLLGQTVDSGIVQSSTGEYVVMTTHFHLKRKIGYFVIQTYLPCIMTVILSQVSFWLNRESVPARTVFGVTTVLTMTTLSISARNSLPKVAYATAMDWFIAVCYAFVFSALIEFATVNYFTKRGYAWDGKSVVPEKPKKVKDPLIKKNNTYAPTATSYTPNLARGDPGLATIAKSATIEPKEVKPETKPPEPKKTFNSVSKIDRLSRIAFPLLFGIFNLVYWATYLNREPQLKAPTPHQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P14867"},
		"label":"gbra1_human"
	},
	{
		"object":"interactor",
		"sequence":"MWRVRKRGYFGIWSFPLIIAAVCAQSVNDPSNMSLVKETVDRLLKGYDIRLRPDFGGPPVAVGMNIDIASIDMVSEVNMDYTLTMYFQQAWRDKRLSYNVIPLNLTLDNRVADQLWVPDTYFLNDKKSFVHGVTVKNRMIRLHPDGTVLYGLRITTTAACMMDLRRYPLDEQNCTLEIESYGYTTDDIEFYWRGDDNAVTGVTKIELPQFSIVDYKLITKKVVFSTGSYPRLSLSFKLKRNIGYFILQTYMPSILITILSWVSFWINYDASAARVALGITTVLTMTTINTHLRETLPKIPYVKAIDMYLMGCFVFVFMALLEYALVNYIFFGRGPQRQKKAAEKAASANNEKMRLDVNKIFYKDIKQNGTQYRSLWDPTGNLSPTRRTTNYDFSLYTMDPHENILLSTLEIKNEMATSEAVMGLGDPRSTMLAYDASSIQYRKAGLPRHSFGRNALERHVAQKKSRLRRRASQLKITIPDLTDVNAIDRWSRIFFPVVFSFFNIVYWLYYVN",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P47870"},
		"label":"gbrb2_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_26202.2"},{"db":"chembl","id":"CHEMBL2095172"},{"db":"omim","id":"611277"},{"db":"intact","id":"EBI-9008426"},{"db":"omim","id":"611136"},{"db":"omim","id":"607681"}],
		"expansion":{"id":"56","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P14867"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P47870"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSSPNIWSTGSSVYSTPVFSQKMTVWILLLLSLYPGFTSQKSDDDYEDYASNKTWVLTPKVPEGDVTVILNNLLEGYDNKLRPDIGVKPTLIHTDMYVNSIGPVNAINMEYTIDIFFAQTWYDRRLKFNSTIKVLRLNSNMVGKIWIPDTFFRNSKKADAHWITTPNRMLRIWNDGRVLYTLRLTIDAECQLQLHNFPMDEHSCPLEFSSYGYPREEIVYQWKRSSVEVGDTRSWRLYQFSFVGLRNTTEVVKTTSGDYVVMSVYFDLSRRMGYFTIQTYIPCTLIVVLSWVSFWINKDAVPARTSLGITTVLTMTTLSTIARKSLPKVSYVTAMDLFVSVCFIFVFSALVEYGTLHYFVSNRKPSKDKDKKKKNPAPTIDIRPRSATIQMNNATHLQERDEEYGYECLDGKDCASFFCCFEDCRTGAWRHGRIHIRIAKMDSYARIFFPTAFCLFNLVYWVSYLYL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P18507"},
		"label":"gbrg2_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"reactome","id":"REACT_26202.2"},{"db":"chembl","id":"CHEMBL2095172"},{"db":"omim","id":"611277"},{"db":"intact","id":"EBI-9008426"},{"db":"omim","id":"611136"},{"db":"omim","id":"607681"}],
		"expansion":{"id":"56","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P14867"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P18507"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MALSRGLPRELAEAVAGGRVLVVGAGGIGCELLKNLVLTGFSHIDLIDLDTIDVSNLNRQFLFQKKHVGRSKAQVAKESVLQFYPKANIVAYHDSIMNPDYNVEFFRQFILVMNALDNRAARNHVNRMCLAADVPLIESGTAGYLGQVTTIKKGVTECYECHPKPTQRTFPGCTIRNTPSEPIHCIVWAKYLFNQLFGEEDADQEVSPDRADPEAAWEPTEAEARARASNEDGDIKRISTKEWAKSTGYDPVKLFTKLFKDDIRYLLTMDKLWRKRKPPVPLDWAEVQSQGEETNASDQQNEPQLGLKDQQVLDVKSYARLFSKSIETLRVHLAEKGDGAELIWDKDDPSAMDFVTSAANLRMHIFSMNMKSRFDIKSMAGNIIPAIATTNAVIAGLIVLEGLKILSGKIDQCRTIFLNKQPNPRKKLLVPCALDPPNPNCYVCASKPEVTVRLNVHKVTVLTLQDKIVKEKFAMVAPDVQIEDGKGTILISSEEGETEANNHKKLSEFGIRNGSRLQADDFLQDYTLLINILHSEDLGKDVEFEVVGDAPEKVGPKQAEDAAKSITNGSDDGAQPSTSTAQEQDDVLIVDSDEEDSSNNADVSEEERSRKRKLDEKENLSAKRSRIEQKEELDDVIALD",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9UBT2"},
		"label":"sae2_human"
	},
	{
		"object":"interactor",
		"sequence":"MVEKEEAGGGISEEEAAQYDRQIRLWGLEAQKRLRASRVLLVGLKGLGAEIAKNLILAGVKGLTMLDHEQVTPEDPGAQFLIRTGSVGRNRAEASLERAQNLNPMVDVKVDTEDIEKKPESFFTQFDAVCLTCCSRDVIVKVDQICHKNSIKFFTGDVFGYHGYTFANLGEHEFVEEKTKVAKVSQGVEDGPDTKRAKLDSSETTMVKKKVVFCPVKEALEVDWSSEKAKAALKRTTSDYFLLQVLLKFRTDKGRDPSSDTYEEDSELLLQIRNDVLDSLGISPDLLPEDFVRYCFSEMAPVCAVVGGILAQEIVKALSQRDPPHNNFFFFDGMKGNGIVECLGPK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9UBE0"},
		"label":"sae1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 6.3.2.-"},{"db":"intact","id":"EBI-9516716"},{"db":"reactome","id":"REACT_164060.2"},{"db":"wwpdb","id":"1Y8R"}],
		"expansion":{"id":"57","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9UBT2"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"5256306",
				"name":"sumo1 binding region (cys173)",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["173-173"]
				},
				{
				"id":"27480726",
				"name":"sae1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9UBE0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"25361887",
				"name":"uba2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 6.3.2.-"},{"db":"intact","id":"EBI-9516716"},{"db":"reactome","id":"REACT_164060.2"},{"db":"wwpdb","id":"1Y8R"}],
		"expansion":{"id":"57","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9UBT2"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"5256306",
				"name":"sumo1 binding region (cys173)",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["173-173"]
				},
				{
				"id":"27480726",
				"name":"sae1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P63165-PRO_0000035939"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"15290826",
				"name":"uba2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["96-96"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 6.3.2.-"},{"db":"intact","id":"EBI-9349667"},{"db":"reactome","id":"REACT_165336.2"}],
		"expansion":{"id":"58","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9UBT2"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"33077172",
				"name":"sumo3 binding region (cys173)",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["173-173"],
				"linkedFeatures":["31765623"]
				},
				{
				"id":"262396",
				"name":"sae1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["14471587"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P55854-PRO_0000035957"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"31765623",
				"name":"uba2 binding region (gly92)",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["92-92"],
				"linkedFeatures":["33077172"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 6.3.2.-"},{"db":"intact","id":"EBI-9349667"},{"db":"reactome","id":"REACT_165336.2"}],
		"expansion":{"id":"58","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9UBT2"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"33077172",
				"name":"sumo3 binding region (cys173)",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["173-173"],
				"linkedFeatures":["31765623"]
				},
				{
				"id":"262396",
				"name":"sae1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["14471587"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9UBE0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"14471587",
				"name":"uba2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["262396"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 6.3.2.-"},{"db":"intact","id":"EBI-9345927"},{"db":"reactome","id":"REACT_164060.2"},{"db":"wwpdb","id":"1Y8R"}],
		"expansion":{"id":"59","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9UBT2"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"21444675",
				"name":"sumo1 binding region (cys173)",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["173-173"],
				"linkedFeatures":["12512699"]
				},
				{
				"id":"15308947",
				"name":"sae1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["2101165"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P63165-PRO_0000035939"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"12512699",
				"name":"uba2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["96-96"],
				"linkedFeatures":["21444675"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 6.3.2.-"},{"db":"intact","id":"EBI-9345927"},{"db":"reactome","id":"REACT_164060.2"},{"db":"wwpdb","id":"1Y8R"}],
		"expansion":{"id":"59","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9UBT2"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"21444675",
				"name":"sumo1 binding region (cys173)",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["173-173"],
				"linkedFeatures":["12512699"]
				},
				{
				"id":"15308947",
				"name":"sae1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["2101165"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9UBE0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"2101165",
				"name":"uba2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["15308947"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 6.3.2.-"},{"db":"intact","id":"EBI-9349603"},{"db":"reactome","id":"REACT_164814.2"}],
		"expansion":{"id":"60","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9UBT2"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"15032676",
				"name":"sumo2 binding region (cys173)",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["173-173"],
				"linkedFeatures":["22870010"]
				},
				{
				"id":"10245466",
				"name":"sae1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["27763115"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P61956-PRO_0000035949"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22870010",
				"name":"uba2 binding region (gly92)",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["92-92"],
				"linkedFeatures":["15032676"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 6.3.2.-"},{"db":"intact","id":"EBI-9349603"},{"db":"reactome","id":"REACT_164814.2"}],
		"expansion":{"id":"60","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9UBT2"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"15032676",
				"name":"sumo2 binding region (cys173)",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["173-173"],
				"linkedFeatures":["22870010"]
				},
				{
				"id":"10245466",
				"name":"sae1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["27763115"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9UBE0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27763115",
				"name":"uba2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["10245466"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 6.3.2.-"},{"db":"intact","id":"EBI-9516745"}],
		"expansion":{"id":"61","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9UBT2"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"6749458",
				"name":"sumo4 binding region (cys173)",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["173-173"]
				},
				{
				"id":"24162599",
				"name":"sae1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q6EEV6-PRO_0000042710"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"25077072",
				"name":"uba2 binding region (gly93)",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["93-93"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 6.3.2.-"},{"db":"intact","id":"EBI-9516745"}],
		"expansion":{"id":"61","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9UBT2"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"6749458",
				"name":"sumo4 binding region (cys173)",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["173-173"]
				},
				{
				"id":"24162599",
				"name":"sae1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9UBE0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26698611",
				"name":"uba2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 6.3.2.-"},{"db":"intact","id":"EBI-9008448"},{"db":"chembl","id":"CHEMBL2095174"},{"db":"reactome","id":"REACT_165291.1"},{"db":"wwpdb","id":"1y8q"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9UBT2"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"146129",
				"name":"sae1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["6518406"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9UBE0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"6518406",
				"name":"uba2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["146129"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGKAENYELYSVELGPGPGGDMAAKMSKKKKAGGGGGKRKEKLENMKKEMEINDHQLSVAELEQKYQTSATKGLSASLAAELLLRDGPNALRPPRGTPEYVKFARQLAGGLQCLMWVAAAICLIAFAIQASEGDLTTDDNLYLAIALIAVVVVTGCFGYYQEFKSTNIIASFKNLVPQQATVIRDGDKFQINADQLVVGDLVEMKGGDRVPADIRILAAQGCKVDNSSLTGESEPQTRSPECTHESPLETRNIAFFSTMCLEGTVQGLVVNTGDRTIIGRIASLASGVENEKTPIAIEIEHFVDIIAGLAILFGATFFIVAMCIGYTFLRAMVFFMAIVVAYVPEGLLATVTVCLSLTAKRLASKNCVVKNLEAVETLGSTSVICSDKTGTLTQNRMTVSHLWFDNHIHTADTTEDQSGQTFDQSSETWRALCRVLTLCNRAAFKSGQDAVPVPKRIVIGDASETALLKFSELTLGNAMGYRDRFPKVCEIPFNSTNKFQLSIHTLEDPRDPRHLLVMKGAPERVLERCSSILIKGQELPLDEQWREAFQTAYLSLGGLGERVLGFCQLYLNEKDYPPGYAFDVEAMNFPSSGLCFAGLVSMIDPPRATVPDAVLKCRTAGIRVIMVTGDHPITAKAIAASVGIISEGSETVEDIAARLRVPVDQVNRKDARACVINGMQLKDMDPSELVEALRTHPEMVFARTSPQQKLVIVESCQRLGAIVAVTGDGVNDSPALKKADIGVAMGIAGSDAAKNAADMILLDDNFASIVTGVEQGRLIFDNLKKSIAYTLTKNIPELTPYLIYITVSVPLPLGCITILFIELCTDIFPSVSLAYEKAESDIMHLRPRNPKRDRLVNEPLAAYSYFQIGAIQSFAGFTDYFTAMAQEGWFPLLCVGLRAQWEDHHLQDLQDSYGQEWTFGQRLYQQYTCYTVFFISIEVCQIADVLIRKTRRLSAFQQGFFRNKILVIAIVFQVCIGCFLCYCPGMPNIFNFMPIRFQWWLVPLPYGILIFVYDEIRKLGVRCCPGSWWDQELYY",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P20648"},
		"label":"atp4a_human"
	},
	{
		"object":"interactor",
		"sequence":"MAALQEKKTCGQRMEEFQRYCWNPDTGQMLGRTLSRWVWISLYYVAFYVVMTGLFALCLYVLMQTVDPYTPDYQDQLRSPGVTLRPDVYGEKGLEIVYNVSDNRTWADLTQTLHAFLAGYSPAAQEDSINCTSEQYFFQESFRAPNHTKFSCKFTADMLQNCSGLADPNFGFEEGKPCFIIKMNRIVKFLPSNGSAPRVDCAFLDQPRELGQPLQVKYYPPNGTFSLHYFPYYGKKAQPHYSNPLVAAKLLNIPRNAEVAIVCKVMAEHVTFNNPHDPYEGKVEFKLKIEK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P51164"},
		"label":"atp4b_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"chembl","id":"CHEMBL2095173"},{"db":"intact","id":"EBI-9008442"},{"db":"intenz","id":"EC 3.6.3.10"}],
		"expansion":{"id":"62","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P20648"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"33190472",
				"name":"atp4b binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["23399776"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P51164"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"23399776",
				"name":"atp4a binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["33190472"]
				}]
		}
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
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"chembl","id":"CHEMBL2095173"},{"db":"intact","id":"EBI-9008442"},{"db":"intenz","id":"EC 3.6.3.10"}],
		"expansion":{"id":"62","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P20648"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"33190472",
				"name":"atp4b binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["23399776"]
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
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"3v4p"},{"db":"intact","id":"EBI-9008495"},{"db":"wwpdb","id":"3v4v"},{"db":"chembl","id":"CHEMBL2095184"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P26010"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22103404",
				"name":"itga4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["10806609"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P13612"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"10806609",
				"name":"itbg7 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["22103404"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MASSLPWLCIILWLENALGKLEVEGNFYSENVSRILDNLLEGYDNRLRPGFGGAVTEVKTDIYVTSFGPVSDVEMEYTMDVFFRQTWTDERLKFGGPTEILSLNNLMVSKIWTPDTFFRNGKKSIAHNMTTPNKLFRIMQNGTILYTMRLTINADCPMRLVNFPMDGHACPLKFGSYAYPKSEIIYTWKKGPLYSVEVPEESSSLLQYDLIGQTVSSETIKSNTGEYVIMTVYFHLQRKMGYFMIQIYTPCIMTVILSQVSFWINKESVPARTVFGITTVLTMTTLSISARHSLPKVSYATAMDWFIAVCFAFVFSALIEFAAVNYFTNLQTQKAKRKAQFAAPPTVTISKATEPLEAEIVLHPDSKYHLKKRITSLSLPIVSSSEANKVLTRAPILQSTPVTPPPLSPAFGGTSKIDQYSRILFPVAFAGFNLVYWVVYLSKDTMEVSSSVE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q16445"},
		"label":"gbra6_human"
	},
	{
		"object":"interactor",
		"sequence":"MWGLAGGRLFGIFSAPVLVAVVCCAQSVNDPGNMSFVKETVDKLLKGYDIRLRPDFGGPPVCVGMNIDIASIDMVSEVNMDYTLTMYFQQYWRDKRLAYSGIPLNLTLDNRVADQLWVPDTYFLNDKKSFVHGVTVKNRMIRLHPDGTVLYGLRITTTAACMMDLRRYPLDEQNCTLEIESYGYTTDDIEFYWRGGDKAVTGVERIELPQFSIVEHRLVSRNVVFATGAYPRLSLSFRLKRNIGYFILQTYMPSILITILSWVSFWINYDASAARVALGITTVLTMTTINTHLRETLPKIPYVKAIDMYLMGCFVFVFLALLEYAFVNYIFFGRGPQRQKKLAEKTAKAKNDRSKSESNRVDAHGNILLTSLEVHNEMNEVSGGIGDTRNSAISFDNSGIQYRKQSMPREGHGRFLGDRSLPHKKTHLRRRSSQLKIKIPDLTDVNAIDRWSRIVFPFTFSLFNLVYWLYYVN",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P28472"},
		"label":"gbrb3_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"omim","id":"612269"},{"db":"reactome","id":"REACT_26202.2"},{"db":"intact","id":"EBI-9008513"},{"db":"omim","id":"611277"},{"db":"chembl","id":"CHEMBL2095190"},{"db":"omim","id":"607681"}],
		"expansion":{"id":"63","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q16445"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P28472"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"omim","id":"612269"},{"db":"reactome","id":"REACT_26202.2"},{"db":"intact","id":"EBI-9008513"},{"db":"omim","id":"611277"},{"db":"chembl","id":"CHEMBL2095190"},{"db":"omim","id":"607681"}],
		"expansion":{"id":"63","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q16445"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P18507"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MVSAKKVPAIALSAGVSFALLRFLCLAVCLNESPGQNQKEEKLCTENFTRILDSLLDGYDNRLRPGFGGPVTEVKTDIYVTSFGPVSDVEMEYTMDVFFRQTWIDKRLKYDGPIEILRLNNMMVTKVWTPDTFFRNGKKSVSHNMTAPNKLFRIMRNGTILYTMRLTISAECPMRLVDFPMDGHACPLKFGSYAYPKSEMIYTWTKGPEKSVEVPKESSSLVQYDLIGQTVSSETIKSITGEYIVMTVYFHLRRKMGYFMIQTYIPCIMTVILSQVSFWINKESVPARTVFGITTVLTMTTLSISARHSLPKVSYATAMDWFIAVCFAFVFSALIEFAAVNYFTNIQMEKAKRKTSKPPQEVPAAPVQREKHPEAPLQNTNANLNMRKRTNALVHSESDVGNRTEVGNHSSKSSTVVQESSKGTPRSYLASSPNPFSRANAAETISAARALPSASPTSIRTGYMPRKASVGSASTRHVFGSRLQRIKTTVNTIGATGKLSATPPPSAPPPSGSGTSKIDKYARILFPVTFGAFNMVYWVVYLSKDTMEKSESLM",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P48169"},
		"label":"gbra4_human"
	},
	{
		"object":"interactor",
		"sequence":"MDAPARLLAPLLLLCAQQLRGTRAMNDIGDYVGSNLEISWLPNLDGLIAGYARNFRPGIGGPPVNVALALEVASIDHISEANMEYTMTVFLHQSWRDSRLSYNHTNETLGLDSRFVDKLWLPDTFIVNAKSAWFHDVTVENKLIRLQPDGVILYSIRITSTVACDMDLAKYPMDEQECMLDLESYGYSSEDIVYYWSESQEHIHGLDKLQLAQFTITSYRFTTELMNFKSAGQFPRLSLHFHLRRNRGVYIIQSYMPSVLLVAMSWVSFWISQAAVPARVSLGITTVLTMTTLMVSARSSLPRASAIKALDVYFWICYVFVFAALVEYAFAHFNADYRKKQKAKVKVSRPRAEMDVRNAIVLFSLSAAGVTQELAISRRQRRVPGNLMGSYRSVGVETGETKKEGAARSGGQGGIRARLRPIDADTIDIYARAVFPAAFAAVNVIYWAAYAM",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O14764"},
		"label":"gbrd_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"omim","id":"612269"},{"db":"omim","id":"613060"},{"db":"intact","id":"EBI-9212829"}],
		"expansion":{"id":"64","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P48169"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O14764"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"omim","id":"612269"},{"db":"omim","id":"613060"},{"db":"intact","id":"EBI-9212829"}],
		"expansion":{"id":"64","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P48169"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P28472"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"omim","id":"613060"},{"db":"intact","id":"EBI-9212721"}],
		"expansion":{"id":"65","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q16445"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P47870"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"omim","id":"613060"},{"db":"intact","id":"EBI-9212721"}],
		"expansion":{"id":"65","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q16445"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O14764"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"omim","id":"613060"},{"db":"intact","id":"EBI-9212750"}],
		"expansion":{"id":"66","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P48169"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P47870"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"omim","id":"613060"},{"db":"intact","id":"EBI-9212750"}],
		"expansion":{"id":"66","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P48169"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O14764"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"omim","id":"612269"},{"db":"omim","id":"613060"},{"db":"intact","id":"EBI-9212649"}],
		"expansion":{"id":"67","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q16445"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P28472"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"omim","id":"612269"},{"db":"omim","id":"613060"},{"db":"intact","id":"EBI-9212649"}],
		"expansion":{"id":"67","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q16445"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O14764"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MASPSSFTYYCPPSSSPVWSEPLYSLRPEHARERLQDDSVETVTSIEQAKVEEKIQEVFSSYKFNHLVPRLVLQREKHFHYLKRGLRQLTDAYECLDASRPWLCYWILHSLELLDEPIPQIVATDVCQFLELCQSPEGGFGGGPGQYPHLAPTYAAVNALCIIGTEEAYDIINREKLLQYLYSLKQPDGSFLMHVGGEVDVRSAYCAASVASLTNIITPDLFEGTAEWIARCQNWEGGIGGVPGMEAHGGYTFCGLAALVILKRERSLNLKSLLQWVTSRQMRFEGGFQGRCNKLVDGCYSFWQAGLLPLLHRALHAQGDPALSMSHWMFHQQALQEYILMCCQCPAGGLLDKPGKSRDFYHTCYCLSGLSIAQHFGSGAMLHDVVLGVPENALQPTHPVYNIGPDKVIQATTYFLQKPVPGFEELKDETSAEPATD",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P49356"},
		"label":"fntb_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1s63"},{"db":"chembl","id":"CHEMBL2094108"},{"db":"intenz","id":"EC 2.5.1.58"},{"db":"wwpdb","id":"2f0y"},{"db":"wwpdb","id":"1jcq"},{"db":"wwpdb","id":"1ld8"},{"db":"wwpdb","id":"1ld7"},{"db":"intact","id":"EBI-9008529"},{"db":"wwpdb","id":"1mzc"},{"db":"wwpdb","id":"1sa4"},{"db":"wwpdb","id":"2h6i"},{"db":"wwpdb","id":"2h6f"},{"db":"reactome","id":"REACT_164027.1"},{"db":"wwpdb","id":"2h6g"},{"db":"wwpdb","id":"2iej"},{"db":"wwpdb","id":"1tn6"},{"db":"wwpdb","id":"2h6h"},{"db":"wwpdb","id":"3e37"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49354"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"30091826",
				"name":"fntb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["20923602"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P49356"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"20923602",
				"name":"fnta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["30091826"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDNGMFSGFIMIKNLLLFCISMNLSSHFGFSQMPTSSVKDETNDNITIFTRILDGLLDGYDNRLRPGLGERITQVRTDIYVTSFGPVSDTEMEYTIDVFFRQSWKDERLRFKGPMQRLPLNNLLASKIWTPDTFFHNGKKSIAHNMTTPNKLLRLEDDGTLLYTMRLTISAECPMQLEDFPMDAHACPLKFGSYAYPNSEVVYVWTNGSTKSVVVAEDGSRLNQYHLMGQTVGTENISTSTGEYTIMTAHFHLKRKIGYFVIQTYLPCIMTVILSQVSFWLNRESVPARTVFGVTTVLTMTTLSISARNSLPKVAYATAMDWFIAVCYAFVFSALIEFATVNYFTKRGWAWDGKKALEAAKIKKKREVILNKSTNAFTTGKMSHPPNIPKEQTPAGTSNTTSVSVKPSEEKTSESKKTYNSISKIDKMSRIVFPVLFGTFNLVYWATYLNREPVIKGAASPK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P31644"},
		"label":"gbra5_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"omim","id":"612269"},{"db":"reactome","id":"REACT_26202.2"},{"db":"omim","id":"611277"},{"db":"chembl","id":"CHEMBL2094122"},{"db":"intact","id":"EBI-9008576"},{"db":"omim","id":"607681"}],
		"expansion":{"id":"68","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P31644"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P28472"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"omim","id":"612269"},{"db":"reactome","id":"REACT_26202.2"},{"db":"omim","id":"611277"},{"db":"chembl","id":"CHEMBL2094122"},{"db":"intact","id":"EBI-9008576"},{"db":"omim","id":"607681"}],
		"expansion":{"id":"68","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P31644"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P18507"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"omim","id":"612269"},{"db":"reactome","id":"REACT_26202.2"},{"db":"omim","id":"611277"},{"db":"intact","id":"EBI-9008559"},{"db":"omim","id":"611136"},{"db":"chembl","id":"CHEMBL2094121"},{"db":"omim","id":"607681"}],
		"expansion":{"id":"69","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P14867"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P28472"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"omim","id":"612269"},{"db":"reactome","id":"REACT_26202.2"},{"db":"omim","id":"611277"},{"db":"intact","id":"EBI-9008559"},{"db":"omim","id":"611136"},{"db":"chembl","id":"CHEMBL2094121"},{"db":"omim","id":"607681"}],
		"expansion":{"id":"69","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P14867"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P18507"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MIITQTSHCYMTSLGILFLINILPGTTGQGESRRQEPGDFVKQDIGGLSPKHAPDIPDDSTDNITIFTRILDRLLDGYDNRLRPGLGDAVTEVKTDIYVTSFGPVSDTDMEYTIDVFFRQTWHDERLKFDGPMKILPLNNLLASKIWTPDTFFHNGKKSVAHNMTTPNKLLRLVDNGTLLYTMRLTIHAECPMHLEDFPMDVHACPLKFGSYAYTTAEVVYSWTLGKNKSVEVAQDGSRLNQYDLLGHVVGTEIIRSSTGEYVVMTTHFHLKRKIGYFVIQTYLPCIMTVILSQVSFWLNRESVPARTVFGVTTVLTMTTLSISARNSLPKVAYATAMDWFIAVCYAFVFSALIEFATVNYFTKRSWAWEGKKVPEALEMKKKTPAAPAKKTSTTFNIVGTTYPINLAKDTEFSTISKGAAPSASSTPTIIASPKATYVQDSPTETKTYNSVSKVDKISRIIFPVLFAIFNLVYWATYVNRESAIKGMIRKQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P34903"},
		"label":"gbra3_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"omim","id":"612269"},{"db":"reactome","id":"REACT_26202.2"},{"db":"intact","id":"EBI-9008551"},{"db":"omim","id":"611277"},{"db":"chembl","id":"CHEMBL2094120"},{"db":"omim","id":"607681"}],
		"expansion":{"id":"70","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P34903"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P28472"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"omim","id":"612269"},{"db":"reactome","id":"REACT_26202.2"},{"db":"intact","id":"EBI-9008551"},{"db":"omim","id":"611277"},{"db":"chembl","id":"CHEMBL2094120"},{"db":"omim","id":"607681"}],
		"expansion":{"id":"70","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P34903"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P18507"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLLLLLLAPLFLRPPGAGGAQTPNATSEGCQIIHPPWEGGIRYRGLTRDQVKAINFLPVDYEIEYVCRGEREVVGPKVRKCLANGSWTDMDTPSRCVRICSKSYLTLENGKVFLTGGDLPALDGARVDFRCDPDFHLVGSSRSICSQGQWSTPKPHCQVNRTPHSERRAVYIGALFPMSGGWPGGQACQPAVEMALEDVNSRRDILPDYELKLIHHDSKCDPGQATKYLYELLYNDPIKIILMPGCSSVSTLVAEAARMWNLIVLSYGSSSPALSNRQRFPTFFRTHPSATLHNPTRVKLFEKWGWKKIATIQQTTEVFTSTLDDLEERVKEAGIEITFRQSFFSDPAVPVKNLKRQDARIIVGLFYETEARKVFCEVYKERLFGKKYVWFLIGWYADNWFKIYDPSINCTVDEMTEAVEGHITTEIVMLNPANTRSISNMTSQEFVEKLTKRLKRHPEETGGFQEAPLAYDAIWALALALNKTSGGGGRSGVRLEDFNYNNQTITDQIYRAMNSSSFEGVSGHVVFDASGSRMAWTLIEQLQGGSYKKIGYYDSTKDDLSWSKTDKWIGGSPPADQTLVIKTFRFLSQKLFISVSVLSSLGIVLAVVCLSFNIYNSHVRYIQNSQPNLNNLTAVGCSLALAAVFPLGLDGYHIGRNQFPFVCQARLWLLGLGFSLGYGSMFTKIWWVHTVFTKKEEKKEWRKTLEPWKLYATVGLLVGMDVLTLAIWQIVDPLHRTIETFAKEEPKEDIDVSILPQLEHCSSRKMNTWLGIFYGYKGLLLLLGIFLAYETKSVSTEKINDHRAVGMAIYNVAVLCLITAPVTMILSSQQDAAFAFASLAIVFSSYITLVVLFVPKMRRLITRGEWQSEAQDTMKTGSSTNNNEEEKSRLLEKENRELEKIIAEKEERVSELRHQLQSRQQLRSRRHPPTPPEPSGGLPRGPPEPPDRLSCDGSRVHLLYK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9UBS5"},
		"label":"gabr1_human"
	},
	{
		"object":"interactor",
		"sequence":"MASPRSSGQPGPPPPPPPPPARLLLLLLLPLLLPLAPGAWGWARGAPRPPPSSPPLSIMGLMPLTKEVAKGSIGRGVLPAVELAIEQIRNESLLRPYFLDLRLYDTECDNAKGLKAFYDAIKYGPNHLMVFGGVCPSVTSIIAESLQGWNLVQLSFAATTPVLADKKKYPYFFRTVPSDNAVNPAILKLLKHYQWKRVGTLTQDVQRFSEVRNDLTGVLYGEDIEISDTESFSNDPCTSVKKLKGNDVRIILGQFDQNMAAKVFCCAYEENMYGSKYQWIIPGWYEPSWWEQVHTEANSSRCLRKNLLAAMEGYIGVDFEPLSSKQIKTISGKTPQQYEREYNNKRSGVGPSKFHGYAYDGIWVIAKTLQRAMETLHASSRHQRIQDFNYTDHTLGRIILNAMNETNFFGVTGQVVFRNGERMGTIKFTQFQDSREVKVGEYNAVADTLEIINDTIRFQGSEPPKDKTIILEQLRKISLPLYSILSALTILGMIMASAFLFFNIKNRNQKLIKMSSPYMNNLIILGGMLSYASIFLFGLDGSFVSEKTFETLCTVRTWILTVGYTTAFGAMFAKTWRVHAIFKNVKMKKKIIKDQKLLVIVGGMLLIDLCILICWQAVDPLRRTVEKYSMEPDPAGRDISIRPLLEHCENTHMTIWLGIVYAYKGLLMLFGCFLAWETRNVSIPALNDSKYIGMSVYNVGIMCIIGAAVSFLTRDQPNVQFCIVALVIIFCSTITLCLVFVPKLITLRTNPDAATQNRRFQFTQNQKKEDSKTSTSVTSVNQASTSRLEGLQSENHRLRMKITELDKDLEEVTMQLQDTPEKTTYIKQNHYQELNDILNLGNFTESTDGGKAILKNHLDQNPQLQWNTTEPSRTCKDPIEDINSPEHIQRRLSLQLPILHHAYLPSIGGVDASCVSPCVSPTASPRHRHVPPSFRVMVSGL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O75899"},
		"label":"gabr2_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"reactome","id":"REACT_18843.2"},{"db":"intact","id":"EBI-9212872"},{"db":"omim","id":"188890"},{"db":"wwpdb","id":"4mqe"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9UBS5"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"12535031",
				"name":"gabr2 binding region",
				"type":{"id":"MI:1125","name":"direct binding region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21553311"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O75899"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"21553311",
				"name":"gabr1 binding region",
				"type":{"id":"MI:1125","name":"direct binding region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["12535031"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKTKLNIYNMQFLLFVFLVWDPARLVLANIQEDEAKNNITIFTRILDRLLDGYDNRLRPGLGDSITEVFTNIYVTSFGPVSDTDMEYTIDVFFRQKWKDERLKFKGPMNILRLNNLMASKIWTPDTFFHNGKKSVAHNMTMPNKLLRIQDDGTLLYTMRLTVQAECPMHLEDFPMDAHSCPLKFGSYAYTTSEVTYIWTYNASDSVQVAPDGSRLNQYDLLGQSIGKETIKSSTGEYTVMTAHFHLKRKIGYFVIQTYLPCIMTVILSQVSFWLNRESVPARTVFGVTTVLTMTTLSISARNSLPKVAYATAMDWFIAVCYAFVFSALIEFATVNYFTKRGWAWDGKSVVNDKKKEKASVMIQNNAYAVAVANYAPNLSKDPVLSTISKSATTPEPNKKPENKPAEAKKTFNSVSKIDRMSRIVFPVLFGTFNLVYWATYLNREPVLGVSP",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P47869"},
		"label":"gbra2_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"omim","id":"612269"},{"db":"reactome","id":"REACT_26202.2"},{"db":"intact","id":"EBI-9008705"},{"db":"omim","id":"103780"},{"db":"omim","id":"611277"},{"db":"chembl","id":"CHEMBL2094130"},{"db":"omim","id":"607681"}],
		"expansion":{"id":"71","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P47869"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P28472"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"omim","id":"612269"},{"db":"reactome","id":"REACT_26202.2"},{"db":"intact","id":"EBI-9008705"},{"db":"omim","id":"103780"},{"db":"omim","id":"611277"},{"db":"chembl","id":"CHEMBL2094130"},{"db":"omim","id":"607681"}],
		"expansion":{"id":"71","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P47869"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P18507"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGTPQKDVIIKSDAPDTLLLEKHADYIASYGSKKDDYEYCMSEYLRMSGIYWGLTVMDLMGQLHRMNREEILAFIKSCQHECGGISASIGHDPHLLYTLSAVQILTLYDSINVIDVNKVVEYVKGLQKEDGSFAGDIWGEIDTRFSFCAVATLALLGKLDAINVEKAIEFVLSCMNFDGGFGCRPGSESHAGQIYCCTGFLAITSQLHQVNSDLLGWWLCERQLPSGGLNGRPEKLPDVCYSWWVLASLKIIGRLHWIDREKLRNFILACQDEETGGFADRPGDMVDPFHTLFGIAGLSLLGEEQIKPVNPVFCMPEEVLQRVNVQPELVS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P53611"},
		"label":"pgtb2_human"
	},
	{
		"object":"interactor",
		"sequence":"MHGRLKVKTSEEQAEAKRLEREQKLKLYQSATQAVFQKRQAGELDESVLELTSQILGANPDFATLWNCRREVLQQLETQKSPEELAALVKAELGFLESCLRVNPKSYGTWHHRCWLLGRLPEPNWTRELELCARFLEVDERNFHCWDYRRFVATQAAVPPAEELAFTDSLITRNFSNYSSWHYRSCLLPQLHPQPDSGPQGRLPEDVLLKELELVQNAFFTDPNDQSAWFYHRWLLGRADPQDALRCLHVSRDEACLTVSFSRPLLVGSRMEILLLMVDDSPLIVEWRTPDGRNRPSHVWLCDLPAASLNDQLPQHTFRVIWTAGDVQKECVLLKGRQEGWCRDSTTDEQLFRCELSVEKSTVLQSELESCKELQELEPENKWCLLTIILLMRALDPLLYEKETLQYFQTLKAVDPMRATYLDDLRSKFLLENSVLKMEYAEVRVLHLAHKDLTVLCHLEQLLLVTHLDLSHNRLRTLPPALAALRCLEVLQASDNAIESLDGVTNLPRLQELLLCNNRLQQPAVLQPLASCPRLVLLNLQGNPLCQAVGILEQLAELLPSVSSVLT",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q92696"},
		"label":"pgta_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"2.5.1.60"},{"db":"intact","id":"EBI-9104147"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P53611"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26409695",
				"name":"rabggta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["9721777"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q92696"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"9721777",
				"name":"rabggtb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["26409695"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"omim","id":"604131"},{"db":"omim","id":"613978"},{"db":"omim","id":"140700"},{"db":"intact","id":"EBI-9106687"},{"db":"wwpdb","id":"1a9w"}],
		"expansion":{"id":"72","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P69905"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17384060",
				"name":"hbe binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["15459495"]
				},
				{
				"id":"15774538",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["9104874"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:30413"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"9104874",
				"name":"hba binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["15774538"]
				},
				{
				"id":"17422175",
				"name":"hbe binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["18528031"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MVHFTAEEKAAVTSLWSKMNVEEAGGEALGRLLVVYPWTQRFFDSFGNLSSPSAILGNPKVKAHGKKVLTSFGDAIKNMDNLKPAFAKLSELHCDKLHVDPENFKLLGNVMVIILATHFGKEFTPEVQAAWQKLVSAVAIALAHKYH",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P02100"},
		"label":"hbe_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"omim","id":"604131"},{"db":"omim","id":"613978"},{"db":"omim","id":"140700"},{"db":"intact","id":"EBI-9106687"},{"db":"wwpdb","id":"1a9w"}],
		"expansion":{"id":"72","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P69905"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17384060",
				"name":"hbe binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["15459495"]
				},
				{
				"id":"15774538",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["9104874"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P02100"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"15459495",
				"name":"hba binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["17384060"]
				},
				{
				"id":"18528031",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["17422175"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSLTKTERTIIVSMWAKISTQADTIGTETLERLFLSHPQTKTYFPHFDLHPGSAQLRAHGSKVVAAVGDAVKSIDDIGGALSKLSELHAYILRVDPVNFKLLSHCLLVTLAARFPADFTAEAHAAWDKFLSVVSSVLTEKYR",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P02008"},
		"label":"hbaz_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"3w4u"},{"db":"intact","id":"EBI-9107700"},{"db":"omim","id":"140700"},{"db":"omim","id":"603902"},{"db":"omim","id":"603903"},{"db":"omim","id":"611162"},{"db":"omim","id":"613985"},{"db":"omim","id":"141749"}],
		"expansion":{"id":"73","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P02008"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"15504483",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["140120"]
				},
				{
				"id":"6200256",
				"name":"hbb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21204410"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P68871"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"913308",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["15597916"]
				},
				{
				"id":"21204410",
				"name":"hbz binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["6200256"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"3w4u"},{"db":"intact","id":"EBI-9107700"},{"db":"omim","id":"140700"},{"db":"omim","id":"603902"},{"db":"omim","id":"603903"},{"db":"omim","id":"611162"},{"db":"omim","id":"613985"},{"db":"omim","id":"141749"}],
		"expansion":{"id":"73","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P02008"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"15504483",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["140120"]
				},
				{
				"id":"6200256",
				"name":"hbb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21204410"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:30413"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"140120",
				"name":"hbz binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["15504483"]
				},
				{
				"id":"15597916",
				"name":"hbb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["913308"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MVHLTPEEKTAVNALWGKVNVDAVGGEALGRLLVVYPWTQRFFESFGDLSSPDAVMGNPKVKAHGKKVLGAFSDGLAHLDNLKGTFSQLSELHCDKLHVDPENFRLLGNVLVCVLARNFGKEFTPQMQAAYQKVVAGVANALAHKYH",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P02042"},
		"label":"hbd_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"omim","id":"604131"},{"db":"omim","id":"613978"},{"db":"omim","id":"140700"},{"db":"pdbe","id":"1si4"},{"db":"pdbe","id":"1shr"},{"db":"intact","id":"EBI-9016042"}],
		"expansion":{"id":"74","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P69905"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26960741",
				"name":"hbd binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["10131035"]
				},
				{
				"id":"17121295",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["28357889"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P02042"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"10131035",
				"name":"hba binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["26960741"]
				},
				{
				"id":"3895870",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["13190288"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"omim","id":"604131"},{"db":"omim","id":"613978"},{"db":"omim","id":"140700"},{"db":"pdbe","id":"1si4"},{"db":"pdbe","id":"1shr"},{"db":"intact","id":"EBI-9016042"}],
		"expansion":{"id":"74","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P69905"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26960741",
				"name":"hbd binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["10131035"]
				},
				{
				"id":"17121295",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["28357889"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:30413"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"28357889",
				"name":"hba binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["17121295"]
				},
				{
				"id":"13190288",
				"name":"hbd binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["3895870"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"omim","id":"613977"},{"db":"intact","id":"EBI-9107795"},{"db":"omim","id":"141749"}],
		"expansion":{"id":"75","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P02008"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"28600868",
				"name":"hbg2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["27552138"]
				},
				{
				"id":"17623557",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["14156099"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:30413"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"20648092",
				"name":"hbg2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["12555327"]
				},
				{
				"id":"14156099",
				"name":"hbz binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["17623557"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGHFTEEDKATITSLWGKVNVEDAGGETLGRLLVVYPWTQRFFDSFGNLSSASAIMGNPKVKAHGKKVLTSLGDAIKHLDDLKGTFAQLSELHCDKLHVDPENFKLLGNVLVTVLAIHFGKEFTPEVQASWQKMVTGVASALSSRYH",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P69892"},
		"label":"hbg2_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"omim","id":"613977"},{"db":"intact","id":"EBI-9107795"},{"db":"omim","id":"141749"}],
		"expansion":{"id":"75","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P02008"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"28600868",
				"name":"hbg2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["27552138"]
				},
				{
				"id":"17623557",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["14156099"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P69892"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27552138",
				"name":"hbz binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["28600868"]
				},
				{
				"id":"12555327",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["20648092"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"omim","id":"141749"},{"db":"intact","id":"EBI-9107742"}],
		"expansion":{"id":"76","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P02008"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27124388",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["9087468"]
				},
				{
				"id":"26862856",
				"name":"hbg1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["9138442"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:30413"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11163440",
				"name":"hbg1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21117884"]
				},
				{
				"id":"9087468",
				"name":"hbz binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["27124388"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGHFTEEDKATITSLWGKVNVEDAGGETLGRLLVVYPWTQRFFDSFGNLSSASAIMGNPKVKAHGKKVLTSLGDAIKHLDDLKGTFAQLSELHCDKLHVDPENFKLLGNVLVTVLAIHFGKEFTPEVQASWQKMVTAVASALSSRYH",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P69891"},
		"label":"hbg1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"omim","id":"141749"},{"db":"intact","id":"EBI-9107742"}],
		"expansion":{"id":"76","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P02008"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27124388",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["9087468"]
				},
				{
				"id":"26862856",
				"name":"hbg1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["9138442"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P69891"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"21117884",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["11163440"]
				},
				{
				"id":"9138442",
				"name":"hbz binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["26862856"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1fdh"},{"db":"omim","id":"613978"},{"db":"omim","id":"140700"},{"db":"omim","id":"604131"},{"db":"intact","id":"EBI-9108045"},{"db":"omim","id":"141749"}],
		"expansion":{"id":"77","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P69905"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"23065308",
				"name":"hbg1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["4286193"]
				},
				{
				"id":"30244429",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["2029384"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P69891"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"4286193",
				"name":"hba binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["23065308"]
				},
				{
				"id":"16566597",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["121273"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1fdh"},{"db":"omim","id":"613978"},{"db":"omim","id":"140700"},{"db":"omim","id":"604131"},{"db":"intact","id":"EBI-9108045"},{"db":"omim","id":"141749"}],
		"expansion":{"id":"77","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P69905"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"23065308",
				"name":"hbg1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["4286193"]
				},
				{
				"id":"30244429",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["2029384"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:30413"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"121273",
				"name":"hbg1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["16566597"]
				},
				{
				"id":"2029384",
				"name":"hba binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["30244429"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9107281"}],
		"expansion":{"id":"78","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P02008"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"24978320",
				"name":"hbe binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["11136713"]
				},
				{
				"id":"8115095",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["25193494"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P02100"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"3683537",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1289852"]
				},
				{
				"id":"11136713",
				"name":"hbz binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["24978320"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9107281"}],
		"expansion":{"id":"78","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P02008"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"24978320",
				"name":"hbe binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["11136713"]
				},
				{
				"id":"8115095",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["25193494"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:30413"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"1289852",
				"name":"hbe binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["3683537"]
				},
				{
				"id":"25193494",
				"name":"hbz binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["8115095"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1i3d"},{"db":"intact","id":"EBI-9108670"},{"db":"wwpdb","id":"1i3e"},{"db":"omim","id":"141749"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P69891"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P69891"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1fdh"},{"db":"omim","id":"140700"},{"db":"omim","id":"613978"},{"db":"intact","id":"EBI-9108218"},{"db":"omim","id":"613977"},{"db":"omim","id":"604131"},{"db":"wwpdb","id":"4mqj"},{"db":"omim","id":"141749"}],
		"expansion":{"id":"79","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P69905"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"2382916",
				"name":"hbg2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["19232117"]
				},
				{
				"id":"4351315",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["17448375"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P69892"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19232117",
				"name":"hba binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["2382916"]
				},
				{
				"id":"22664341",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["9673865"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1fdh"},{"db":"omim","id":"140700"},{"db":"omim","id":"613978"},{"db":"intact","id":"EBI-9108218"},{"db":"omim","id":"613977"},{"db":"omim","id":"604131"},{"db":"wwpdb","id":"4mqj"},{"db":"omim","id":"141749"}],
		"expansion":{"id":"79","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P69905"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"2382916",
				"name":"hbg2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["19232117"]
				},
				{
				"id":"4351315",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["17448375"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:30413"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17448375",
				"name":"hba binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["4351315"]
				},
				{
				"id":"9673865",
				"name":"hbg2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["22664341"]
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
		"sequence":"MATKAVCVLKGDGPVQGIINFEQKESNGPVKVWGSIKGLTEGLHGFHVHEFGDNTAGCTSAGPHFNPLSRKHGGPKDEERHVGDLGNVTADKDGVADVSIEDSVISLSGDHCIIGRTLVVHEKADDLGKGGNEESTKTGNAGSRLACGVIGIAQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P00441"},
		"label":"sodc_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1azv"},{"db":"wwpdb","id":"1l3n"},{"db":"intact","id":"EBI-9098413"},{"db":"omim","id":"105400"},{"db":"intenz","id":"1.15.1.1"}],
		"expansion":{"id":"80","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:29036"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17436332",
				"name":"sod1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21585282"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P00441"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"21585282",
				"name":"copper binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["17436332"]
				},
				{
				"id":"26882733",
				"name":"zinc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["7676315"]
				},
				{
				"id":"32595171",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["147-147"],
				"linkedFeatures":["17396863"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1azv"},{"db":"wwpdb","id":"1l3n"},{"db":"intact","id":"EBI-9098413"},{"db":"omim","id":"105400"},{"db":"intenz","id":"1.15.1.1"}],
		"expansion":{"id":"80","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:29036"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17436332",
				"name":"sod1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21585282"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P00441"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"29320802",
				"name":"zinc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["14346322"]
				},
				{
				"id":"17396863",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["57-57"],
				"linkedFeatures":["32595171"]
				},
				{
				"id":"30053701",
				"name":"copper binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["17704065"]
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
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1azv"},{"db":"wwpdb","id":"1l3n"},{"db":"intact","id":"EBI-9098413"},{"db":"omim","id":"105400"},{"db":"intenz","id":"1.15.1.1"}],
		"expansion":{"id":"80","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:29036"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17436332",
				"name":"sod1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21585282"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:29105"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"7676315",
				"name":"sod1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["26882733"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1azv"},{"db":"wwpdb","id":"1l3n"},{"db":"intact","id":"EBI-9098413"},{"db":"omim","id":"105400"},{"db":"intenz","id":"1.15.1.1"}],
		"expansion":{"id":"80","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:29036"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17436332",
				"name":"sod1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21585282"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:29036"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17704065",
				"name":"sod1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["30053701"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1azv"},{"db":"wwpdb","id":"1l3n"},{"db":"intact","id":"EBI-9098413"},{"db":"omim","id":"105400"},{"db":"intenz","id":"1.15.1.1"}],
		"expansion":{"id":"80","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:29036"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17436332",
				"name":"sod1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21585282"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:29105"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"14346322",
				"name":"sod1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["29320802"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MASSTPSSSATSSNAGADPNTTNLRPTTYDTWCGVAHGCTRKLGLKICGFLQRTNSLEEKSRLVSAFKERQSSKNLLSCENSDRDARFRRTETDFSNLFARDLLPAKNGEEQTVQFLLEVVDILLNYVRKTFDRSTKVLDFHHPHQLLEGMEGFNLELSDHPESLEQILVDCRDTLKYGVRTGHPRFFNQLSTGLDIIGLAGEWLTSTANTNMFTYEIAPVFVLMEQITLKKMREIVGWSSKDGDGIFSPGGAISNMYSIMAARYKYFPEVKTKGMAAVPKLVLFTSEQSHYSIKKAGAALGFGTDNVILIKCNERGKIIPADFEAKILEAKQKGYVPFYVNATAGTTVYGAFDPIQEIADICEKYNLWLHVDAAWGGGLLMSRKHRHKLNGIERANSVTWNPHKMMGVLLQCSAILVKEKGILQGCNQMCAGYLFQPDKQYDVSYDTGDKAIQCGRHVDIFKFWLMWKAKGTVGFENQINKCLELAEYLYAKIKNREEFEMVFNGEPEHTNVCFWYIPQSLRGVPDSPQRREKLHKVAPKIKALMMESGTTMVGYQPQGDKANFFRMVISNPAATQSDIDFLIEEIERLGQDL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q99259"},
		"label":"dce1_human"
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
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"reactome","id":"REACT_24495.1"},{"db":"omim","id":"603513"},{"db":"reactome","id":"REACT_24565.1"},{"db":"intenz","id":"EC 4.1.1.15"},{"db":"omim","id":"184850"},{"db":"wwpdb","id":"2okj"},{"db":"intact","id":"EBI-9293677"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q99259"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"25078352",
				"name":"plp binding site",
				"type":{"id":"MI:1125","name":"direct binding region"},
				"sequenceData":["405-405"],
				"linkedFeatures":["14644796"]
				},
				{
				"id":"13344048",
				"name":"dimerisation domain",
				"type":{"id":"MI:1125","name":"direct binding region"},
				"sequenceData":["90-594"],
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
				"id":"14644796",
				"name":"gad1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["25078352"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MASPGSGFWSFGSEDGSGDSENPGTARAWCQVAQKFTGGIGNKLCALLYGDAEKPAESGGSQPPRAAARKAACACDQKPCSCSKVDVNYAFLHATDLLPACDGERPTLAFLQDVMNILLQYVVKSFDRSTKVIDFHYPNELLQEYNWELADQPQNLEEILMHCQTTLKYAIKTGHPRYFNQLSTGLDMVGLAADWLTSTANTNMFTYEIAPVFVLLEYVTLKKMREIIGWPGGSGDGIFSPGGAISNMYAMMIARFKMFPEVKEKGMAALPRLIAFTSEHSHFSLKKGAAALGIGTDSVILIKCDERGKMIPSDLERRILEAKQKGFVPFLVSATAGTTVYGAFDPLLAVADICKKYKIWMHVDAAWGGGLLMSRKHKWKLSGVERANSVTWNPHKMMGVPLQCSALLVREEGLMQNCNQMHASYLFQQDKHYDLSYDTGDKALQCGRHVDVFKLWLMWRAKGTTGFEAHVDKCLELAEYLYNIIKNREGYEMVFDGKPQHTNVCFWYIPPSLRTLEDNEERMSRLSKVAPVIKARMMEYGTTMVSYQPLGDKVNFFRMVISNPAATHQDIDFLIEEIERLGQDL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q05329"},
		"label":"dce2_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"omim","id":"184850"},{"db":"intact","id":"EBI-9293944"},{"db":"reactome","id":"REACT_24821.1"},{"db":"intenz","id":"EC 4.1.1.15"},{"db":"reactome","id":"REACT_24233.1"},{"db":"wwpdb","id":"2okk"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:18405"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"29152349",
				"name":"gad2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1724836"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q05329"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"1724836",
				"name":"plp binding site",
				"type":{"id":"MI:1125","name":"direct binding region"},
				"sequenceData":["396-396"],
				"linkedFeatures":["29152349"]
				},
				{
				"id":"31856454",
				"name":"dimerisation domain",
				"type":{"id":"MI:1125","name":"direct binding region"},
				"sequenceData":["84-585"],
				"InterPro":"IPR015424"
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSKPHSEAGTAFIQTQQLHAAMADTFLEHMCRLDIDSPPITARNTGIICTIGPASRSVETLKEMIKSGMNVARLNFSHGTHEYHAETIKNVRTATESFASDPILYRPVAVALDTKGPEIRTGLIKGSGTAEVELKKGATLKITLDNAYMEKCDENILWLDYKNICKVVEVGSKIYVDDGLISLQVKQKGADFLVTEVENGGSLGSKKGVNLPGAAVDLPAVSEKDIQDLKFGVEQDVDMVFASFIRKASDVHEVRKVLGEKGKNIKIISKIENHEGVRRFDEILEASDGIMVARGDLGIEIPAEKVFLAQKMMIGRCNRAGKPVICATQMLESMIKKPRPTRAEGSDVANAVLDGADCIMLSGETAKGDYPLEAVRMQHLIAREAEAAMFHRKLFEELVRASSHSTDLMEAMAMGSVEASYKCLAAALIVLTESGRSAHQVARYRPRAPIIAVTRNPQTARQAHLYRGIFPVLCKDPVQEAWAEDVDLRVNFAMNVGKARGFFKKGDVVIVLTGWRPGSGFTNTMRVVPVP",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P14618-2"},
		"label":"p14618-2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"2.7.1.40"},{"db":"wwpdb","id":"3srf"},{"db":"intact","id":"EBI-9545427"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P14618-2"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"16917977",
				"name":"tetramerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P14618-2"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"198822",
				"name":"tetramerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSKPHSEAGTAFIQTQQLHAAMADTFLEHMCRLDIDSPPITARNTGIICTIGPASRSVETLKEMIKSGMNVARLNFSHGTHEYHAETIKNVRTATESFASDPILYRPVAVALDTKGPEIRTGLIKGSGTAEVELKKGATLKITLDNAYMEKCDENILWLDYKNICKVVEVGSKIYVDDGLISLQVKQKGADFLVTEVENGGSLGSKKGVNLPGAAVDLPAVSEKDIQDLKFGVEQDVDMVFASFIRKASDVHEVRKVLGEKGKNIKIISKIENHEGVRRFDEILEASDGIMVARGDLGIEIPAEKVFLAQKMMIGRCNRAGKPVICATQMLESMIKKPRPTRAEGSDVANAVLDGADCIMLSGETAKGDYPLEAVRMQHLIAREAEAAIYHLQLFEELRRLAPITSDPTEATAVGAVEASFKCCSGAIIVLTKSGRSAHQVARYRPRAPIIAVTRNPQTARQAHLYRGIFPVLCKDPVQEAWAEDVDLRVNFAMNVGKARGFFKKGDVVIVLTGWRPGSGFTNTMRVVPVP",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P14618-1"},
		"label":"p14618-1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 2.7.11.-"},{"db":"intact","id":"EBI-9392810"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P14618-1"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19722304",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P14618-1"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22085762",
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
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1t5a"},{"db":"wwpdb","id":"3me3"},{"db":"wwpdb","id":"3srd"},{"db":"wwpdb","id":"4jpg"},{"db":"wwpdb","id":"4b2d"},{"db":"intenz","id":"EC 2.7.1.40"},{"db":"wwpdb","id":"3u2z"},{"db":"wwpdb","id":"4fxf"},{"db":"wwpdb","id":"3srh"},{"db":"wwpdb","id":"3h6o"},{"db":"wwpdb","id":"3bjf"},{"db":"intact","id":"EBI-9395916"},{"db":"wwpdb","id":"3gr4"},{"db":"wwpdb","id":"3gqy"},{"db":"wwpdb","id":"3bjt"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P14618-1"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"16275322",
				"name":"fructofuranose binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["3621498"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:28013"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"3621498",
				"name":"pkm2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["16275322"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"omim","id":"184850"},{"db":"omim","id":"603513"},{"db":"reactome","id":"REACT_24821.1"},{"db":"intenz","id":"EC 4.1.1.15"},{"db":"reactome","id":"REACT_24233.1"},{"db":"intact","id":"EBI-9491125"}],
		"expansion":{"id":"81","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q05329"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32336425",
				"name":"gad1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["102-585"],
				"linkedFeatures":["30719545"]
				},
				{
				"id":"1358638",
				"name":"plp binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["396-396"],
				"linkedFeatures":["17621944"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:18405"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17621944",
				"name":"gad2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1358638"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"omim","id":"184850"},{"db":"omim","id":"603513"},{"db":"reactome","id":"REACT_24821.1"},{"db":"intenz","id":"EC 4.1.1.15"},{"db":"reactome","id":"REACT_24233.1"},{"db":"intact","id":"EBI-9491125"}],
		"expansion":{"id":"81","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q05329"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32336425",
				"name":"gad1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["102-585"],
				"linkedFeatures":["30719545"]
				},
				{
				"id":"1358638",
				"name":"plp binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["396-396"],
				"linkedFeatures":["17621944"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:18405"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"20603992",
				"name":"gad1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["9558616"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"omim","id":"184850"},{"db":"omim","id":"603513"},{"db":"reactome","id":"REACT_24821.1"},{"db":"intenz","id":"EC 4.1.1.15"},{"db":"reactome","id":"REACT_24233.1"},{"db":"intact","id":"EBI-9491125"}],
		"expansion":{"id":"81","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q05329"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32336425",
				"name":"gad1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["102-585"],
				"linkedFeatures":["30719545"]
				},
				{
				"id":"1358638",
				"name":"plp binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["396-396"],
				"linkedFeatures":["17621944"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q99259"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"30719545",
				"name":"gad2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["32336425"]
				},
				{
				"id":"9558616",
				"name":"plp binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["405-405"],
				"linkedFeatures":["20603992"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSTLSNFTQTLEDVFRRIFITYMDNWRQNTTAEQEALQAKVDAENFYYVILYLMVMIGMFSFIIVAILVSTVKSKRREHSNDPYHQYIVEDWQEKYKSQILNLEESKATIHENIGAAGFKMSP",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9Y6J6"},
		"label":"kcne2_human"
	},
	{
		"object":"interactor",
		"sequence":"MPVRRGHVAPQNTFLDTIIRKFEGQSRKFIIANARVENCAVIYCNDGFCELCGYSRAEVMQRPCTCDFLHGPRTQRRAAAQIAQALLGAEERKVEIAFYRKDGSCFLCLVDVVPVKNEDGAVIMFILNFEVVMEKDMVGSPAHDTNHRGPPTSWLAPGRAKTFRLKLPALLALTARESSVRSGGAGGAGAPGAVVVDVDLTPAAPSSESLALDEVTAMDNHVAGLGPAEERRALVGPGSPPRSAPGQLPSPRAHSLNPDASGSSCSLARTRSRESCASVRRASSADDIEAMRAGVLPPPPRHASTGAMHPLRSGLLNSTSDSDLVRYRTISKIPQITLNFVDLKGDPFLASPTSDREIIAPKIKERTHNVTEKVTQVLSLGADVLPEYKLQAPRIHRWTILHYSPFKAVWDWLILLLVIYTAVFTPYSAAFLLKETEEGPPATECGYACQPLAVVDLIVDIMFIVDILINFRTTYVNANEEVVSHPGRIAVHYFKGWFLIDMVAAIPFDLLIFGSGSEELIGLLKTARLLRLVRVARKLDRYSEYGAAVLFLLMCTFALIAHWLACIWYAIGNMEQPHMDSRIGWLHNLGDQIGKPYNSSGLGGPSIKDKYVTALYFTFSSLTSVGFGNVSPNTNSEKIFSICVMLIGSLMYASIFGNVSAIIQRLYSGTARYHTQMLRVREFIRFHQIPNPLRQRLEEYFQHAWSYTNGIDMNAVLKGFPECLQADICLHLNRSLLQHCKPFRGATKGCLRALAMKFKTTHAPPGDTLVHAGDLLTALYFISRGSIEILRGDVVVAILGKNDIFGEPLNLYARPGKSNGDVRALTYCDLHKIHRDDLLEVLDMYPEFSDHFWSSLEITFNLRDTNMIPGSPGSTELEGGFSRQRKRKLSFRRRTDKDTEQPGEVSALGPGRAGAGPSSRGRPGGPWGESPSSGPSSPESSEDEGPGRSSSPLRLVPFSSPRPPGEPPGGEPLMEDCEKSSDTCNPLSGAFSGVSNIFSFWGDSRGRQYQELPRCPAPTPSLLNIPLSSPGRRPRGDVESRLDALQRQLNRLETRLSADMATVLQLLQRQMTLVPPAYSAVTTPGPGPTSTSPLLPVSPLPTLTLDSLSQVSQFMACEELPPGAPELPQEGPTRRLSLPGQLGALTSQPLHRHGSDPGS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q12809"},
		"label":"kcnh2_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"omim","id":"152427"},{"db":"omim","id":"609620"},{"db":"reactome","id":"REACT_76615.1"},{"db":"intact","id":"EBI-9511245"},{"db":"omim","id":"613688"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9Y6J6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26602656",
				"name":"kcnh2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["31599974"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q12809"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"31599974",
				"name":"kcne2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["26602656"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MILSNTTAVTPFLTKLWQETVQQGGNMSGLARRSPRSSDGKLEALYVLMVLGFFGFFTLGIMLSYIRSKKLEHSNDPFNVYIESDAWQEKDKAYVQARVLESYRSCYVVENHLAIEQPNTHLPETKPSP",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P15382"},
		"label":"kcne1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"omim","id":"152427"},{"db":"omim","id":"609620"},{"db":"reactome","id":"REACT_76615.1"},{"db":"intact","id":"EBI-9511172"},{"db":"omim","id":"613688"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P15382"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"1227487",
				"name":"kcnh2 bindingregion",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["27963012"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q12809"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27963012",
				"name":"kcne1 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1227487"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGSVRTNRYSIVSSEEDGMKLATMAVANGFGNGKSKVHTRQQCRSRFVKKDGHCNVQFINVGEKGQRYLADIFTTCVDIRWRWMLVIFCLAFVLSWLFFGCVFWLIALLHGDLDASKEGKACVSEVNSFTAAFLFSIETQTTIGYGFRCVTDECPIAVFMVVFQSIVGCIIDAFIIGAVMAKMAKPKKRNETLVFSHNAVIAMRDGKLCLMWRVGNLRKSHLVEAHVRAQLLKSRITSEGEYIPLDQIDINVGFDSGIDRIFLVSPITIVHEIDEDSPLYDLSKQDIDNADFEIVVILEGMVEATAMTTQCRSSYLANEILWGHRYEPVLFEEKHYYKVDYSRFHKTYEVPNTPLCSARDLAEKKYILSNANSFCYENEVALTSKEEDDSENGVPESTSTDTPPDIDLHNQASVPLEPRPLRRESEI",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P63252"},
		"label":"kcnj2_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"omim","id":"613980"},{"db":"reactome","id":"REACT_76901.1"},{"db":"omim","id":"170390"},{"db":"intact","id":"EBI-9511072"},{"db":"omim","id":"609622"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P63252"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"10974350",
				"name":"tetramerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["44-64","189-371"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P63252"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"30756707",
				"name":"tetramerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["44-64","189-371"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKGQQKTAETEEGTVQIQEGAVATGEDPTSVAIASIQSAATFPDPNVKYVFRTENGGQVMYRVIQVSEGQLDGQTEGTGAISGYPATQSMTQAVIQGAFTSDDAVDTEGTAAETHYTYFPSTAVGDGAGGTTSGSTAAVVTTQGSEALLGQATPPGTGQFFVMMSPQEVLQGGSQRSIAPRTHPYSPKSEAPRTTRDEKRRAQHNEVERRRRDKINNWIVQLSKIIPDCSMESTKSGQSKGGILSKACDYIQELRQSNHRLSEELQGLDQLQLDNDVLRQQVEDLKNKNLLLRAQLRHHGLEVVIKNDSN",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P22415"},
		"label":"usf1_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"omim","id":"602491"},{"db":"intact","id":"EBI-9519429"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P22415"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0815","name":"confirmation by molecular weight"}],
			"bindingSites":[
				{
				"id":"21956394",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["192-285"],
				"InterPro":"IPR011598"
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P22415"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0815","name":"confirmation by molecular weight"}],
			"bindingSites":[
				{
				"id":"23041182",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["192-285"],
				"InterPro":"IPR011598"
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDMLDPGLDPAASATAAAAASHDKGPEAEEGVELQEGGDGPGAEEQTAVAITSVQQAAFGDHNIQYQFRTETNGGQVTYRVVQVTDGQLDGQGDTAGAVSVVSTAAFAGGQQAVTQVGVDGAAQRPGPAAASVPPGPAAPFPLAVIQNPFSNGGSPAAEAVSGEARFAYFPASSVGDTTAVSVQTTDQSLQAGGQFYVMMTPQDVLQTGTQRTIAPRTHPYSPKIDGTRTPRDERRRAQHNEVERRRRDKINNWIVQLSKIIPDCNADNSKTGASKGGILSKACDYIRELRQTNQRMQETFKEAERLQMDNELLRQQIEELKNENALLRAQLQQHNLEMVGEGTRQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q15853"},
		"label":"usf2_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"omim","id":"602491"},{"db":"intact","id":"EBI-9518693"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q15853"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0815","name":"confirmation by molecular weight"}],
			"bindingSites":[
				{
				"id":"1452907",
				"name":"usf1 binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["227-321"],
				"linkedFeatures":["24945350"],
				"InterPro":"IPR011598"
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P22415"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0815","name":"confirmation by molecular weight"}],
			"bindingSites":[
				{
				"id":"24945350",
				"name":"usf2 binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["192-285"],
				"linkedFeatures":["1452907"],
				"InterPro":"IPR011598"
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9519452"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q15853"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0815","name":"confirmation by molecular weight"}],
			"bindingSites":[
				{
				"id":"27429226",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["227-321"],
				"InterPro":"IPR011598"
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q15853"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0815","name":"confirmation by molecular weight"}],
			"bindingSites":[
				{
				"id":"32228173",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["227-321"],
				"InterPro":"IPR011598"
				}]
		}
	}
	]
};
