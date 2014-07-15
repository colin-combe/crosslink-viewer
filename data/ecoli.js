var miJson = {
"data":[
	{
		"object":"interactor",
		"sequence":"MAETKIVVGPQPFSVGEEYPWLAERDEDGAVVTFTGKVRNHNLGDSVNALTLEHYPGMTEKALAEIVDEARNRWPLGRVTVIHRIGELWPGDEIVFVGVTSAHRSSAFEAGQFIMDYLKTRAPFWKREATPEGDRWVEARESDQQAAKRW",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P30749"},
		"label":"moae_ecoli"
	},
	{
		"object":"interactor",
		"sequence":"MIKVLFFAQVRELVGTDATEVAADFPTVEALRQHMAAQSDRWALALEDGKLLAAVNQTLVSFDHPLTDGDEVAFFPPVTGG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P30748"},
		"label":"moad_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1fm0"},{"db":"wwpdb","id":"1nvi"},{"db":"wwpdb","id":"3bii"},{"db":"intenz","id":"EC 2.8.1.12"},{"db":"wwpdb","id":"1fma"},{"db":"intact","id":"EBI-6876660"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P30749"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19842387",
				"name":"moad binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-150"],
				"linkedFeatures":["27055611"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P30748"},
			"bioRole":{"id":"MI:0918","name":"donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27055611",
				"name":"moae binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-81"],
				"linkedFeatures":["19842387"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAELSDQEMLRYNRQIILRGFDFDGQEALKDSRVLIVGLGGLGCAASQYLASAGVGNLTLLDFDTVSLSNLQRQTLHSDATVGQPKVESARDALTRINPHIAITPVNALLDDAELAALIAEHDLVLDCTDNVAVRNQLNAGCFAAKVPLVSGAAIRMEGQITVFTYQDGEPCYRCLSRLFGENALTCVEAGVMAPLIGVIGSLQAMEAIKMLAGYGKPASGKIVMYDAMTCQFREMKLMRNPGCEVCGQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P12282"},
		"label":"moeb_ecoli"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:15422"},
		"label":"atp"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1jwb"},{"db":"wwpdb","id":"1JWA"},{"db":"intenz","id":"2.7.7.80"},{"db":"wwpdb","id":"1jw9"},{"db":"intact","id":"EBI-6868559"}],
		"expansion":{"id":"0","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P12282"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27559124",
				"name":"moab binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"],
				"linkedFeatures":["827934"]
				},
				{
				"id":"23566077",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"],
				"linkedFeatures":["32101730"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0918","name":"donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32101730",
				"name":"moeb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["23566077"]
				},
				{
				"id":"12065021",
				"name":"moed binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["7376515"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1jwb"},{"db":"wwpdb","id":"1JWA"},{"db":"intenz","id":"2.7.7.80"},{"db":"wwpdb","id":"1jw9"},{"db":"intact","id":"EBI-6868559"}],
		"expansion":{"id":"0","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P12282"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27559124",
				"name":"moab binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"],
				"linkedFeatures":["827934"]
				},
				{
				"id":"23566077",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"],
				"linkedFeatures":["32101730"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P30748"},
			"bioRole":{"id":"MI:0919","name":"acceptor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"7376515",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-81"],
				"linkedFeatures":["12065021"]
				},
				{
				"id":"827934",
				"name":"moeb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-81"],
				"linkedFeatures":["27559124"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKIRSQVGMVLNLDKCIGCHTCSVTCKNVWTSREGVEYAWFNNVETKPGQGFPTDWENQEKYKGGWIRKINGKLQPRMGNRAMLLGKIFANPHLPGIDDYYEPFDFDYQNLHTAPEGSKSQPIARPRSLITGERMAKIEKGPNWEDDLGGEFDKLAKDKNFDNIQKAMYSQFENTFMMYLPRLCEHCLNPACVATCPSGAIYKREEDGIVLIDQDKCRGWRMCITGCPYKKIYFNWKSGKSEKCIFCYPRIEAGQPTVCSETCVGRIRYLGVLLYDADAIERAASTENEKDLYQRQLDVFLDPNDPKVIEQAIKDGIPLSVIEAAQQSPVYKMAMEWKLALPLHPEYRTLPMVWYVPPLSPIQSAADAGELGSNGILPDVESLRIPVQYLANLLTAGDTKPVLRALKRMLAMRHYKRAETVDGKVDTRALEEVGLTEAQAQEMYRYLAIANYEDRFVVPSSHRELAREAFPEKNGCGFTFGDGCHGSDTKFNLFNSRRIDAIDVTSKTEPHP",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P11349"},
		"label":"narh_ecoli"
	},
	{
		"object":"interactor",
		"sequence":"MQFLNMFFFDIYPYIAGAVFLIGSWLRYDYGQYTWRAASSQMLDRKGMNLASNLFHIGILGIFVGHFFGMLTPHWMYEAWLPIEVKQKMAMFAGGASGVLCLIGGVLLLKRRLFSPRVRATTTGADILILSLLVIQCALGLLTIPFSAQHMDGSEMMKLVGWAQSVVTFHGGASQHLDGVAFIFRLHLVLGMTLFLLFPFSRLIHIWSVPVEYLTRKYQLVRARH",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P11350"},
		"label":"nari_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1y4z"},{"db":"wwpdb","id":"1Q16"},{"db":"wwpdb","id":"1siw"},{"db":"wwpdb","id":"1y5n"},{"db":"wwpdb","id":"3ir7"},{"db":"wwpdb","id":"1y5l"},{"db":"wwpdb","id":"1y5i"},{"db":"intenz","id":"EC 1.7.99.4"},{"db":"wwpdb","id":"3ir6"},{"db":"intenz","id":"EC 1.9.6.1"},{"db":"wwpdb","id":"3egw"},{"db":"wwpdb","id":"3ir5"},{"db":"intact","id":"EBI-6880351"}],
		"expansion":{"id":"1","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P11349"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27030298",
				"name":"4fe-4s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["4767788"]
				},
				{
				"id":"4240892",
				"name":"nari binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["7060410"]
				},
				{
				"id":"15840423",
				"name":"narg binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["9137551"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P11350"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"29752026",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-225"],
				"linkedFeatures":["14171832"]
				},
				{
				"id":"7060410",
				"name":"narh binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-225"],
				"linkedFeatures":["4240892"]
				},
				{
				"id":"16632703",
				"name":"hydroquinone binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-225"],
				"linkedFeatures":["3871186"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSKFLDRFRYFKQKGETFADGHGQLLNTNRDWEDGYRQRWQHDKIVRSTHGVNCTGSCSWKIYVKNGLVTWETQQTDYPRTRPDLPNHEPRGCPRGASYSWYLYSANRLKYPMMRKRLMKMWREAKALHSDPVEAWASIIEDADKAKSFKQARGRGGFVRSSWQEVNELIAASNVYTIKNYGPDRVAGFSPIPAMSMVSYASGARYLSLIGGTCLSFYDWYCDLPPASPQTWGEQTDVPESADWYNSSYIIAWGSNVPQTRTPDAHFFTEVRYKGTKTVAVTPDYAEIAKLCDLWLAPKQGTDAAMALAMGHVMLREFHLDNPSQYFTDYVRRYTDMPMLVMLEERDGYYAAGRMLRAADLVDALGQENNPEWKTVAFNTNGEMVAPNGSIGFRWGEKGKWNLEQRDGKTGEETELQLSLLGSQDEIAEVGFPYFGGDGTEHFNKVELENVLLHKLPVKRLQLADGSTALVTTVYDLTLANYGLERGLNDVNCATSYDDVKAYTPAWAEQITGVSRSQIIRIAREFADNADKTHGRSMIIVGAGLNHWYHLDMNYRGLINMLIFCGCVGQSGGGWAHYVGQEKLRPQTGWQPLAFALDWQRPARHMNSTSYFYNHSSQWRYETVTAEELLSPMADKSRYTGHLIDFNVRAERMGWLPSAPQLGTNPLTIAGEAEKAGMNPVDYTVKSLKEGSIRFAAEQPENGKNHPRNLFIWRSNLLGSSGKGHEFMLKYLLGTEHGIQGKDLGQQGGVKPEEVDWQDNGLEGKLDLVVTLDFRLSSTCLYSDIILPTATWYEKDDMNTSDMHPFIHPLSAAVDPAWEAKSDWEIYKAIAKKFSEVCVGHLGKETDIVTLPIQHDSAAELAQPLDVKDWKKGECDLIPGKTAPHIMVVERDYPATYERFTSIGPLMEKIGNGGKGIAWNTQSEMDLLRKLNYTKAEGPAKGQPMLNTAIDAAEMILTLAPETNGQVAVKAWAALSEFTGRDHTHLALNKEDEKIRFRDIQAQPRKIISSPTWSGLEDEHVSYNAGYTNVHELIPWRTLSGRQQLYQDHQWMRDFGESLLVYRPPIDTRSVKEVIGQKSNGNQEKALNFLTPHQKWGIHSTYSDNLLMLTLGRGGPVVWLSEADAKDLGIADNDWIEVFNSNGALTARAVVSQRVPAGMTMMYHAQERIVNLPGSEITQQRGGIHNSVTRITPKPTHMIGGYAHLAYGFNYYGTVGSNRDEFVVVRKMKNIDWLDGEGNDQVQESVK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P09152"},
		"label":"narg_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1y4z"},{"db":"wwpdb","id":"1Q16"},{"db":"wwpdb","id":"1siw"},{"db":"wwpdb","id":"1y5n"},{"db":"wwpdb","id":"3ir7"},{"db":"wwpdb","id":"1y5l"},{"db":"wwpdb","id":"1y5i"},{"db":"intenz","id":"EC 1.7.99.4"},{"db":"wwpdb","id":"3ir6"},{"db":"intenz","id":"EC 1.9.6.1"},{"db":"wwpdb","id":"3egw"},{"db":"wwpdb","id":"3ir5"},{"db":"intact","id":"EBI-6880351"}],
		"expansion":{"id":"1","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P11349"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27030298",
				"name":"4fe-4s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["4767788"]
				},
				{
				"id":"4240892",
				"name":"nari binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["7060410"]
				},
				{
				"id":"15840423",
				"name":"narg binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["9137551"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P09152"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"981847",
				"name":"3fe-4s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1247"],
				"linkedFeatures":["26689555"]
				},
				{
				"id":"15706481",
				"name":"mo-bismgd binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1247"],
				"linkedFeatures":["6115785"]
				},
				{
				"id":"10789083",
				"name":"4fe-4s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1247"],
				"linkedFeatures":["3974627"]
				},
				{
				"id":"9137551",
				"name":"narh binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1247"],
				"linkedFeatures":["15840423"]
				},
				{
				"id":"28251308",
				"name":"nitrate binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1247"],
				"linkedFeatures":["24534895"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:17594"},
		"label":"hydroquinone"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1y4z"},{"db":"wwpdb","id":"1Q16"},{"db":"wwpdb","id":"1siw"},{"db":"wwpdb","id":"1y5n"},{"db":"wwpdb","id":"3ir7"},{"db":"wwpdb","id":"1y5l"},{"db":"wwpdb","id":"1y5i"},{"db":"intenz","id":"EC 1.7.99.4"},{"db":"wwpdb","id":"3ir6"},{"db":"intenz","id":"EC 1.9.6.1"},{"db":"wwpdb","id":"3egw"},{"db":"wwpdb","id":"3ir5"},{"db":"intact","id":"EBI-6880351"}],
		"expansion":{"id":"1","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P11349"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27030298",
				"name":"4fe-4s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["4767788"]
				},
				{
				"id":"4240892",
				"name":"nari binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["7060410"]
				},
				{
				"id":"15840423",
				"name":"narg binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["9137551"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:17594"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"3871186",
				"name":"nari binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["16632703"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:17632"},
		"label":"nitrate"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1y4z"},{"db":"wwpdb","id":"1Q16"},{"db":"wwpdb","id":"1siw"},{"db":"wwpdb","id":"1y5n"},{"db":"wwpdb","id":"3ir7"},{"db":"wwpdb","id":"1y5l"},{"db":"wwpdb","id":"1y5i"},{"db":"intenz","id":"EC 1.7.99.4"},{"db":"wwpdb","id":"3ir6"},{"db":"intenz","id":"EC 1.9.6.1"},{"db":"wwpdb","id":"3egw"},{"db":"wwpdb","id":"3ir5"},{"db":"intact","id":"EBI-6880351"}],
		"expansion":{"id":"1","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P11349"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27030298",
				"name":"4fe-4s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["4767788"]
				},
				{
				"id":"4240892",
				"name":"nari binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["7060410"]
				},
				{
				"id":"15840423",
				"name":"narg binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["9137551"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:17632"},
			"bioRole":{"id":"MI:0580","name":"electron acceptor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"24534895",
				"name":"narg binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["28251308"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"organism":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
		"identifier":{"db":"chebi","id":"CHEBI:47402"},
		"label":"fe3-s4"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1y4z"},{"db":"wwpdb","id":"1Q16"},{"db":"wwpdb","id":"1siw"},{"db":"wwpdb","id":"1y5n"},{"db":"wwpdb","id":"3ir7"},{"db":"wwpdb","id":"1y5l"},{"db":"wwpdb","id":"1y5i"},{"db":"intenz","id":"EC 1.7.99.4"},{"db":"wwpdb","id":"3ir6"},{"db":"intenz","id":"EC 1.9.6.1"},{"db":"wwpdb","id":"3egw"},{"db":"wwpdb","id":"3ir5"},{"db":"intact","id":"EBI-6880351"}],
		"expansion":{"id":"1","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P11349"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27030298",
				"name":"4fe-4s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["4767788"]
				},
				{
				"id":"4240892",
				"name":"nari binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["7060410"]
				},
				{
				"id":"15840423",
				"name":"narg binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["9137551"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:47402"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26689555",
				"name":"narg binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["981847"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"organism":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
		"identifier":{"db":"chebi","id":"CHEBI:33725"},
		"label":"fe4-s4"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1y4z"},{"db":"wwpdb","id":"1Q16"},{"db":"wwpdb","id":"1siw"},{"db":"wwpdb","id":"1y5n"},{"db":"wwpdb","id":"3ir7"},{"db":"wwpdb","id":"1y5l"},{"db":"wwpdb","id":"1y5i"},{"db":"intenz","id":"EC 1.7.99.4"},{"db":"wwpdb","id":"3ir6"},{"db":"intenz","id":"EC 1.9.6.1"},{"db":"wwpdb","id":"3egw"},{"db":"wwpdb","id":"3ir5"},{"db":"intact","id":"EBI-6880351"}],
		"expansion":{"id":"1","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P11349"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27030298",
				"name":"4fe-4s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["4767788"]
				},
				{
				"id":"4240892",
				"name":"nari binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["7060410"]
				},
				{
				"id":"15840423",
				"name":"narg binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["9137551"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:33725"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"3974627",
				"name":"narg binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["10789083"]
				},
				{
				"id":"4767788",
				"name":"narh binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["27030298"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"organism":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
		"identifier":{"db":"chebi","id":"CHEBI:61145"},
		"label":"mo-bismgd cofactor"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1y4z"},{"db":"wwpdb","id":"1Q16"},{"db":"wwpdb","id":"1siw"},{"db":"wwpdb","id":"1y5n"},{"db":"wwpdb","id":"3ir7"},{"db":"wwpdb","id":"1y5l"},{"db":"wwpdb","id":"1y5i"},{"db":"intenz","id":"EC 1.7.99.4"},{"db":"wwpdb","id":"3ir6"},{"db":"intenz","id":"EC 1.9.6.1"},{"db":"wwpdb","id":"3egw"},{"db":"wwpdb","id":"3ir5"},{"db":"intact","id":"EBI-6880351"}],
		"expansion":{"id":"1","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P11349"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27030298",
				"name":"4fe-4s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["4767788"]
				},
				{
				"id":"4240892",
				"name":"nari binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["7060410"]
				},
				{
				"id":"15840423",
				"name":"narg binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["9137551"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:61145"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"6115785",
				"name":"narg binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["15706481"]
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
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1y4z"},{"db":"wwpdb","id":"1Q16"},{"db":"wwpdb","id":"1siw"},{"db":"wwpdb","id":"1y5n"},{"db":"wwpdb","id":"3ir7"},{"db":"wwpdb","id":"1y5l"},{"db":"wwpdb","id":"1y5i"},{"db":"intenz","id":"EC 1.7.99.4"},{"db":"wwpdb","id":"3ir6"},{"db":"intenz","id":"EC 1.9.6.1"},{"db":"wwpdb","id":"3egw"},{"db":"wwpdb","id":"3ir5"},{"db":"intact","id":"EBI-6880351"}],
		"expansion":{"id":"1","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P11349"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27030298",
				"name":"4fe-4s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["4767788"]
				},
				{
				"id":"4240892",
				"name":"nari binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["7060410"]
				},
				{
				"id":"15840423",
				"name":"narg binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["9137551"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:30413"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"14171832",
				"name":"nari binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["29752026"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSKTHLTEQKFSDFALHPKVVEALEKKGFHNCTPIQALALPLTLAGRDVAGQAQTGTGKTMAFLTSTFHYLLSHPAIADRKVNQPRALIMAPTRELAVQIHADAEPLAEATGLKLGLAYGGDGYDKQLKVLESGVDILIGTTGRLIDYAKQNHINLGAIQVVVLDEADRMYDLGFIKDIRWLFRRMPPANQRLNMLFSATLSYRVRELAFEQMNNAEYIEVEPEQKTGHRIKEELFYPSNEEKMRLLQTLIEEEWPDRAIIFANTKHRCEEIWGHLAADGHRVGLLTGDVAQKKRLRILDEFTRGDLDILVATDVAARGLHIPAVTHVFNYDLPDDCEDYVHRIGRTGRAGASGHSISLACEEYALNLPAIETYIGHSIPVSKYNPDALMTDLPKPLRLTRPRTGNGPRRTGAPRNRRRSG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A8J8"},
		"label":"rhlb_ecoli"
	},
	{
		"object":"interactor",
		"sequence":"MKRMLINATQQEELRVALVDGQRLYDLDIESPGHEQKKANIYKGKITRIEPSLEAAFVDYGAERHGFLPLKEIAREYFPANYSAHGRPNIKDVLREGQEVIVQIDKEERGNKGAALTTFISLAGSYLVLMPNNPRAGGISRRIEGDDRTELKEALASLELPEGMGLIVRTAGVGKSAEALQWDLSFRLKHWEAIKKAAESRPAPFLIHQESNVIVRAFRDYLRQDIGEILIDNPKVLELARQHIAALGRPDFSSKIKLYTGEIPLFSHYQIESQIESAFQREVRLPSGGSIVIDSTEALTAIDINSARATRGGDIEETAFNTNLEAADEIARQLRLRDLGGLIVIDFIDMTPVRHQRAVENRLREAVRQDRARIQISHISRFGLLEMSRQRLSPSLGESSHHVCPRCSGTGTVRDNESLSLSILRLIEEEALKENTQEVHAIVPVPIASYLLNEKRSAVNAIETRQDGVRCVIVPNDQMETPHYHVLRVRKGEETPTLSYMLPKLHEEAMALPSEEEFAERKRPEQPALATFAMPDVPPAPTPAEPAAPVVAPAPKAAPATPAAPAQPGLLSRFFGALKALFSGGEETKPTEQPAPKAEAKPERQQDRRKPRQNNRRDRNERRDTRSERTEGSDNREENRRNRRQAQQQTAETRESRQQAEVTEKARTADEQQAPRRERSRRRNDDKRQAQQEAKALNVEEQSVQETEQEERVRPVQPRRKQRQLNQKVRYEQSVAEEAVVAPVVEETVAAEPIVQEAPAPRTELVKVPLPVVAQTAPEQQEENNADNRDNGGMPRRSRRSPRHLRVSGQRRRRYRDERYPTQSPMPLTVACASPELASGKVWIRYPIVRPQDVQVEEQREQEEVHVQPMVTEVPVAAAIEPVVSAPVVEEVAGVVEAPVQVAEPQPEVVETTHPEVIAAAVTEQPQVITESDVAVAQEVAEQAEPVVEPQEETADIEEVVETAEVVVAEPEVVAQPAAPVVAEVAAEVETVAAVEPEVTVEHNHATAPMTRAPAPEYVPEAPRHSDWQRPTFAFEGKGAAGGHTATHHASAAPARPQPVE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P21513"},
		"label":"rne_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1169250"}],
		"expansion":{"id":"2","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A8J8"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"13625119",
				"name":"region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["2-421"],
				"linkedFeatures":["21931434"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P21513"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"21931434",
				"name":"rhlb binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["628-843"],
				"linkedFeatures":["13625119"]
				},
				{
				"id":"6179828",
				"name":"pnp binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1021-1061"],
				"linkedFeatures":["13415334"]
				},
				{
				"id":"19303953",
				"name":"enolase binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["839-850"],
				"linkedFeatures":["3739941"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSKIVKIIGREIIDSRGNPTVEAEVHLEGGFVGMAAAPSGASTGSREALELRDGDKSRFLGKGVTKAVAAVNGPIAQALIGKDAKDQAGIDKIMIDLDGTENKSKFGANAILAVSLANAKAAAAAKGMPLYEHIAELNGTPGKYSMPVPMMNIINGGEHADNNVDIQEFMIQPVGAKTVKEAIRMGSEVFHHLAKVLKAKGMNTAVGDEGGYAPNLGSNAEALAVIAEAVKAAGYELGKDITLAMDCAASEFYKDGKYVLAGEGNKAFTSEEFTHFLEELTKQYPIVSIEDGLDESDWDGFAYQTKVLGDKIQLVGDDLFVTNTKILKEGIEKGIANSILIKFNQIGSLTETLAAIKMAKDAGYTAVISHRSGETEDATIADLAVGTAAGQIKTGSMSRSDRVAKYNQLIRIEEALGEKAPYNGRKEIKGQA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A6P9"},
		"label":"eno_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1169250"}],
		"expansion":{"id":"2","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A8J8"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"13625119",
				"name":"region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["2-421"],
				"linkedFeatures":["21931434"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0A6P9"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"3739941",
				"name":"region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["2-432"],
				"linkedFeatures":["19303953"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLNPIVRKFQYGQHTVTLETGMMARQATAAVMVSMDDTAVFVTVVGQKKAKPGQDFFPLTVNYQERTYAAGRIPGSFFRREGRPSEGETLIARLIDRPIRPLFPEGFVNEVQVIATVVSVNPQVNPDIVAMIGASAALSLSGIPFNGPIGAARVGYINDQYVLNPTQDELKESKLDLVVAGTEAAVLMVESEAQLLSEDQMLGAVVFGHEQQQVVIQNINELVKEAGKPRWDWQPEPVNEALNARVAALAEARLSDAYRITDKQERYAQVDVIKSETIATLLAEDETLDENELGEILHAIEKNVVRSRVLAGEPRIDGREKDMIRGLDVRTGVLPRTHGSALFTRGETQALVTATLGTARDAQVLDELMGERTDTFLFHYNFPPYSVGETGMVGSPKRREIGHGRLAKRGVLAVMPDMDKFPYTVRVVSEITESNGSSSMASVCGASLALMDAGVPIKAAVAGIAMGLVKEGDNYVVLSDILGDEDHLGDMDFKVAGSRDGISALQMDIKIEGITKEIMQVALNQAKGARLHILGVMEQAINAPRGDISEFAPRIHTIKINPDKIKDVIGKGGSVIRALTEETGTTIEIEDDGTVKIAATDGEKAKHAIRRIEEITAEIEVGRVYTGKVTRIVDFGAFVAIGGGKEGLVHISQIADKRVEKVTDYLQMGQEVPVKVLEVDRQGRIRLSIKEATEQSQPAAAPEAPAAEQGE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P05055"},
		"label":"pnp_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1169250"}],
		"expansion":{"id":"2","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A8J8"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"13625119",
				"name":"region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["2-421"],
				"linkedFeatures":["21931434"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P05055"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"13415334",
				"name":"region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-711"],
				"linkedFeatures":["6179828"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MTPLLELKDIRRSYPAGDEQVEVLKGISLDIYAGEMVAIVGASGSGKSTLMNILGCLDKATSGTYRVAGQDVATLDADALAQLRREHFGFIFQRYHLLSHLTAEQNVEVPAVYAGLERKQRLLRAQELLQRLGLEDRTEYYPAQLSGGQQQRVSIARALMNGGQVILADEPTGALDSHSGEEVMAILHQLRDRGHTVIIVTHDPQVAAQAERVIEIRDGEIVRNPPAIEKVNVTGGTEPVVNTVSGWRQFVSGFNEALTMAWRALAANKMRTLLTMLGIIIGIASVVSIVVVGDAAKQMVLADIRSIGTNTIDVYPGKDFGDDDPQYQQALKYDDLIAIQKQPWVASATPAVSQNLRLRYNNVDVAASANGVSGDYFNVYGMTFSEGNTFNQEQLNGRAQVVVLDSNTRRQLFPHKADVVGEVILVGNMPARVIGVAEEKQSMFGSSKVLRVWLPYSTMSGRVMGQSWLNSITVRVKEGFDSAEAEQQLTRLLSLRHGKKDFFTWNMDGVLKTVEKTTRTLQLFLTLVAVISLVVGGIGVMNIMLVSVTERTREIGIRMAVGARASDVLQQFLIEAVLVCLVGGALGITLSLLIAFTLQLFLPGWEIGFSPLALLLAFLCSTVTGILFGWLPARNAARLDPVDALARE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P75831"},
		"label":"macb_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"3fpp"},{"db":"wwpdb","id":"1ek9"},{"db":"intact","id":"EBI-8761276"},{"db":"intenz","id":"EC 3.6.3.44"}],
		"expansion":{"id":"3","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P75831"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"28110642",
				"name":"maca binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-648"],
				"linkedFeatures":["9161167"]
				},
				{
				"id":"24015318",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-648"],
				"linkedFeatures":["32752484"]
				},
				{
				"id":"10557378",
				"name":"dimerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-648"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32752484",
				"name":"macb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["24015318"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKKRKTVKKRYVIALVIVIAGLITLWRILNAPVPTYQTLIVRPGDLQQSVLATGKLDALRKVDVGAQVSGQLKTLSVAIGDKVKKDQLLGVIDPEQAENQIKEVEATLMELRAQRQQAEAELKLARVTYSRQQRLAQTKAVSQQDLDTAATEMAVKQAQIGTIDAQIKRNQASLDTAKTNLDYTRIVAPMAGEVTQITTLQGQTVIAAQQAPNILTLADMSAMLVKAQVSEADVIHLKPGQKAWFTVLGDPLTRYEGQIKDVLPTPEKVNDAIFYYARFEVPNPNGLLRLDMTAQVHIQLTDVKNVLTIPLSALGDPVGDNRYKVKLLRNGETREREVTIGARNDTDVEIVKGLEAGDEVVIGEAKPGAAQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P75830"},
		"label":"maca_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"3fpp"},{"db":"wwpdb","id":"1ek9"},{"db":"intact","id":"EBI-8761276"},{"db":"intenz","id":"EC 3.6.3.44"}],
		"expansion":{"id":"3","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P75831"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"28110642",
				"name":"maca binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-648"],
				"linkedFeatures":["9161167"]
				},
				{
				"id":"24015318",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-648"],
				"linkedFeatures":["32752484"]
				},
				{
				"id":"10557378",
				"name":"dimerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-648"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P75830"},
			"bioRole":{"id":"MI:0684","name":"ancillary"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"9161167",
				"name":"macb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["21-371"],
				"linkedFeatures":["28110642"]
				},
				{
				"id":"2020439",
				"name":"hexamerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["42-301"]
				},
				{
				"id":"443083",
				"name":"tolc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["21-371"],
				"linkedFeatures":["31382794"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKKLLPILIGLSLSGFSSLSQAENLMQVYQQARLSNPELRKSAADRDAAFEKINEARSPLLPQLGLGADYTYSNGYRDANGINSNATSASLQLTQSIFDMSKWRALTLQEKAAGIQDVTYQTDQQTLILNTATAYFNVLNAIDVLSYTQAQKEAIYRQLDQTTQRFNVGLVAITDVQNARAQYDTVLANEVTARNNLDNAVEQLRQITGNYYPELAALNVENFKTDKPQPVNALLKEAEKRNLSLLQARLSQDLAREQIRQAQDGHLPTLDLTASTGISDTSYSGSKTRGAAGTQYDDSNMGQNKVGLSFSLPIYQGGMVNSQVKQAQYNFVGASEQLESAHRSVVQTVRSSFNNINASISSINAYKQAVVSAQSSLDAMEAGYSVGTRTIVDVLDATTTLYNAKQELANARYNYLINQLNIKSALGTLNEQDLLALNNALSKPVSTNPENVAPQTPEQNAIADGYAPDSPAPVVQQTSARTTTSNGHNPFRN",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P02930"},
		"label":"tolc_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"3fpp"},{"db":"wwpdb","id":"1ek9"},{"db":"intact","id":"EBI-8761276"},{"db":"intenz","id":"EC 3.6.3.44"}],
		"expansion":{"id":"3","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P75831"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"28110642",
				"name":"maca binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-648"],
				"linkedFeatures":["9161167"]
				},
				{
				"id":"24015318",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-648"],
				"linkedFeatures":["32752484"]
				},
				{
				"id":"10557378",
				"name":"dimerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-648"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P02930"},
			"bioRole":{"id":"MI:0684","name":"ancillary"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"8506334",
				"name":"trimerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["23-450"]
				},
				{
				"id":"31382794",
				"name":"maca binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-493"],
				"linkedFeatures":["443083"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAMKKLLIASLLFSSATVYGAEGFVVKDIHFEGLQRVAVGAALLSMPVRTGDTVNDEDISNTIRALFATGNFEDVRVLRDGDTLLVQVKERPTIASITFSGNKSVKDDMLKQNLEASGVRVGESLDRTTIADIEKGLEDFYYSVGKYSASVKAVVTPLPRNRVDLKLVFQEGVSAEIQQINIVGNHAFTTDELISHFQLRDEVPWWNVVGDRKYQKQKLAGDLETLRSYYLDRGYARFNIDSTQVSLTPDKKGIYVTVNITEGDQYKLSGVEVSGNLAGHSAEIEQLTKIEPGELYNGTKVTKMEDDIKKLLGRYGYAYPRVQSMPEINDADKTVKLRVNVDAGNRFYVRKIRFEGNDTSKDAVLRREMRQMEGAWLGSDLVDQGKERLNRLGFFETVDTDTQRVPGSPDQVDVVYKVKERNTGSFNFGIGYGTESGVSFQAGVQQDNWLGTGYAVGINGTKNDYQTYAELSVTNPYFTVDGVSLGGRLFYNDFQADDADLSDYTNKSYGTDVTLGFPINEYNSLRAGLGYVHNSLSNMQPQVAMWRYLYSMGEHPSTSDQDNSFKTDDFTFNYGWTYNKLDRGYFPTDGSRVNLTGKVTIPGSDNEYYKVTLDTATYVPIDDDHKWVVLGRTRWGYGDGLGGKEMPFYENFYAGGSSTVRGFQSNTIGPKAVYFPHQASNYDPDYDYECATQDGAKDLCKSDDAVGGNAMAVASLEFITPTPFISDKYANSVRTSFFWDMGTVWDTNWDSSQYSGYPDYSDPSNIRMSAGIALQWMSPLGPLVFSYAQPFKKYDGDKAEQFQFNIGKTW",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A940"},
		"label":"bama_ecoli"
	},
	{
		"object":"interactor",
		"sequence":"MAYSVQKSRLAKVAGVSLVLLLAACSSDSRYKRQVSGDEAYLEAAPLAELHAPAGMILPVTSGDYAIPVTNGSGAVGKALDIRPPAQPLALVSGARTQFTGDTASLLVENGRGNTLWPQVVSVLQAKNYTITQRDDAGQTLTTDWVQWNRLDEDEQYRGRYQISVKPQGYQQAVTVKLLNLEQAGKPVADAASMQRYSTEMMNVISAGLDKSATDAANAAQNRASTTMDVQSAADDTGLPMLVVRGPFNVVWQRLPAALEKVGMKVTDSTRSQGNMAVTYKPLSDSDWQELGASDPGLASGDYKLQVGDLDNRSSLQFIDPKGHTLTQSQNDALVAVFQAAFSK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A903"},
		"label":"bamc_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6397527"}],
		"expansion":{"id":"4","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A940"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"24087889",
				"name":"bamd binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-810"],
				"linkedFeatures":["10942187"]
				},
				{
				"id":"27053048",
				"name":"bamb binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-810"],
				"linkedFeatures":["18033539"]
				},
				{
				"id":"26061077",
				"name":"bamc binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-810"],
				"linkedFeatures":["22536466"]
				},
				{
				"id":"7957923",
				"name":"bame binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-810"],
				"linkedFeatures":["850173"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0A903"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22536466",
				"name":"bama binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-344"],
				"linkedFeatures":["26061077"]
				},
				{
				"id":"28224542",
				"name":"bamd binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-344"],
				"linkedFeatures":["10886874"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MTRMKYLVAAATLSLFLAGCSGSKEEVPDNPPNEIYATAQQKLQDGNWRQAITQLEALDNRYPFGPYSQQVQLDLIYAYYKNADLPLAQAAIDRFIRLNPTHPNIDYVMYMRGLTNMALDDSALQGFFGVDRSDRDPQHARAAFSDFSKLVRGYPNSQYTTDATKRLVFLKDRLAKYEYSVAEYYTERGAWVAVVNRVEGMLRDYPDTQATRDALPLMENAYRQMQMNAQAEKVAKIIAANSSNT",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0AC02"},
		"label":"bamd_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6397527"}],
		"expansion":{"id":"4","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A940"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"24087889",
				"name":"bamd binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-810"],
				"linkedFeatures":["10942187"]
				},
				{
				"id":"27053048",
				"name":"bamb binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-810"],
				"linkedFeatures":["18033539"]
				},
				{
				"id":"26061077",
				"name":"bamc binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-810"],
				"linkedFeatures":["22536466"]
				},
				{
				"id":"7957923",
				"name":"bame binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-810"],
				"linkedFeatures":["850173"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AC02"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"10942187",
				"name":"bama binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-245"],
				"linkedFeatures":["24087889"]
				},
				{
				"id":"10886874",
				"name":"bamc binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-245"],
				"linkedFeatures":["28224542"]
				},
				{
				"id":"3380535",
				"name":"bame binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-245"],
				"linkedFeatures":["8999183"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MRCKTLTAAAAVLLMLTAGCSTLERVVYRPDINQGNYLTANDVSKIRVGMTQQQVAYALGTPLMSDPFGTNTWFYVFRQQPGHEGVTQQTLTLTFNSSGVLTNIDNKPALSGN",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A937"},
		"label":"bame_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6397527"}],
		"expansion":{"id":"4","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A940"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"24087889",
				"name":"bamd binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-810"],
				"linkedFeatures":["10942187"]
				},
				{
				"id":"27053048",
				"name":"bamb binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-810"],
				"linkedFeatures":["18033539"]
				},
				{
				"id":"26061077",
				"name":"bamc binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-810"],
				"linkedFeatures":["22536466"]
				},
				{
				"id":"7957923",
				"name":"bame binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-810"],
				"linkedFeatures":["850173"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0A937"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"850173",
				"name":"bama binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-113"],
				"linkedFeatures":["7957923"]
				},
				{
				"id":"8999183",
				"name":"bamd binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-113"],
				"linkedFeatures":["3380535"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MQLRKLLLPGLLSVTLLSGCSLFNSEEDVVKMSPLPTVENQFTPTTAWSTSVGSGIGNFYSNLHPALADNVVYAADRAGLVKALNADDGKEIWSVSLAEKDGWFSKEPALLSGGVTVSGGHVYIGSEKAQVYALNTSDGTVAWQTKVAGEALSRPVVSDGLVLIHTSNGQLQALNEADGAVKWTVNLDMPSLSLRGESAPTTAFGAAVVGGDNGRVSAVLMEQGQMIWQQRISQATGSTEIDRLSDVDTTPVVVNGVVFALAYNGNLTALDLRSGQIMWKRELGSVNDFIVDGNRIYLVDQNDRVMALTIDGGVTLWTQSDLLHRLLTSPVLYNGNLVVGDSEGYLHWINVEDGRFVAQQKVDSSGFQTEPVAADGKLLIQAKDGTVYSITR",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P77774"},
		"label":"bamb_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6397527"}],
		"expansion":{"id":"4","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A940"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"24087889",
				"name":"bamd binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-810"],
				"linkedFeatures":["10942187"]
				},
				{
				"id":"27053048",
				"name":"bamb binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-810"],
				"linkedFeatures":["18033539"]
				},
				{
				"id":"26061077",
				"name":"bamc binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-810"],
				"linkedFeatures":["22536466"]
				},
				{
				"id":"7957923",
				"name":"bame binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-810"],
				"linkedFeatures":["850173"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P77774"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"18033539",
				"name":"bama binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-392"],
				"linkedFeatures":["27053048"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MQVLPPSSTGGPSRLFIMRPVATTLLMVAILLAGIIGYRALPVSALPEVDYPTIQVVTLYPGASPDVMTSAVTAPLERQFGQMSGLKQMSSQSSGGASVITLQFQLTLPLDVAEQEVQAAINAATNLLPSDLPNPPVYSKVNPADPPIMTLAVTSTAMPMTQVEDMVETRVAQKISQISGVGLVTLSGGQRPAVRVKLNAQAIAALGLTSETVRTAITGANVNSAKGSLDGPSRAVTLSANDQMQSAEEYRQLIIAYQNGAPIRLGDVATVEQGAENSWLGAWANKEQAIVMNVQRQPGANIISTADSIRQMLPQLTESLPKSVKVTVLSDRTTNIRASVDDTQFELMMAIALVVMIIYLFLRNIPATIIPGVAVPLSLIGTFAVMVFLDFSINNLTLMALTIATGFVVDDAIVVIENISRYIEKGEKPLAAALKGAGEIGFTIISLTFSLIAVLIPLLFMGDIVGRLFREFAITLAVAILISAVVSLTLTPMMCARMLSQESLRKQNRFSRASEKMFDRIIAAYGRGLAKVLNHPWLTLSVALSTLLLSVLLWVFIPKGFFPVQDNGIIQGTLQAPQSSSFANMAQRQRQVADVILQDPAVQSLTSFVGVDGTNPSLNSARLQINLKPLDERDDRVQKVIARLQTAVDKVPGVDLFLQPTQDLTIDTQVSRTQYQFTLQATSLDALSTWVPQLMEKLQQLPQLSDVSSDWQDKGLVAYVNVDRDSASRLGISMADVDNALYNAFGQRLISTIYTQANQYRVVLEHNTENTPGLAALDTIRLTSSDGGVVPLSSIAKIEQRFAPLSINHLDQFPVTTISFNVPDNYSLGDAVQAIMDTEKTLNLPVDITTQFQGSTLAFQSALGSTVWLIVAAVVAMYIVLGILYESFIHPITILSTLPTAGVGALLALLIAGSELDVIAIIGIILLIGIVKKNAIMMIDFALAAEREQGMSPREAIYQACLLRFRPILMTTLAALLGALPLMLSTGVGAELRRPLGIGMVGGLIVSQVLTLFTTPVIYLLFDRLALWTKSRFARHEEEA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P76398"},
		"label":"mdtb_ecoli"
	},
	{
		"object":"interactor",
		"sequence":"MKFFALFIYRPVATILLSVAITLCGILGFRMLPVAPLPQVDFPVIIVSASLPGASPETMASSVATPLERSLGRIAGVSEMTSSSSLGSTRIILQFDFDRDINGAARDVQAAINAAQSLLPSGMPSRPTYRKANPSDAPIMILTLTSDTYSQGELYDFASTQLAPTISQIDGVGDVDVGGSSLPAVRVGLNPQALFNQGVSLDDVRTAVSNANVRKPQGALEDGTHRWQIQTNDELKTAAEYQPLIIHYNNGGAVRLGDVATVTDSVQDVRNAGMTNAKPAILLMIRKLPEANIIQTVDSIRAKLPELQETIPAAIDLQIAQDRSPTIRASLEEVEQTLIISVALVILVVFLFLRSGRATIIPAVSVPVSLIGTFAAMYLCGFSLNNLSLMALTIATGFVVDDAIVVLENIARHLEAGMKPLQAALQGTREVGFTVLSMSLSLVAVFLPLLLMGGLPGRLLREFAVTLSVAIGISLLVSLTLTPMMCGWMLKASKPREQKRLRGFGRMLVALQQGYGKSLKWVLNHTRLVGVVLLGTIALNIWLYISIPKTFFPEQDTGVLMGGIQADQSISFQAMRGKLQDFMKIIRDDPAVDNVTGFTGGSRVNSGMMFITLKPRDERSETAQQIIDRLRVKLAKEPGANLFLMAVQDIRVGGRQSNASYQYTLLSDDLAALREWEPKIRKKLATLPELADVNSDQQDNGAEMNLVYDRDTMARLGIDVQAANSLLNNAFGQRQISTIYQPMNQYKVVMEVDPRYTQDISALEKMFVINNEGKAIPLSYFAKWQPANAPLSVNHQGLSAASTISFNLPTGKSLSDASAAIDRAMTQLGVPSTVRGSFAGTAQVFQETMNSQVILIIAAIATVYIVLGILYESYVHPLTILSTLPSAGVGALLALELFNAPFSLIALIGIMLLIGIVKKNAIMMVDFALEAQRHGNLTPQEAIFQACLLRFRPIMMTTLAALFGALPLVLSGGDGSELRQPLGITIVGGLVMSQLLTLYTTPVVYLFFDRLRLRFSRKPKQTVTE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P76399"},
		"label":"mdtc_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-8787893"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P76398"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"29938386",
				"name":"mdtc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1040"],
				"linkedFeatures":["25746158"]
				},
				{
				"id":"31292298",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1040"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P76399"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"25746158",
				"name":"mdtb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1025"],
				"linkedFeatures":["29938386"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MRWYPWLRPDFEKLVASYQAGRGHHALLIQALPGMGDDALIYALSRYLLCQQPQGHKSCGHCRGCQLMQAGTHPDYYTLAPEKGKNTLGVDAVREVTEKLNEHARLGGAKVVWVTDAALLTDAAANALLKTLEEPPAETWFFLATREPERLLATLRSRCRLHYLAPPPEQYAVTWLSREVTMSQDALLAALRLSAGSPGAALALFQGDNWQARETLCQALAYSVPSGDWYSLLAALNHEQAPARLHWLATLLMDALKRHHGAAQVTNVDVPGLVAELANHLSPSRLQAILGDVCHIREQLMSVTGINRELLITDLLLRIEHYLQPGVVLPVPHL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P28631"},
		"label":"holb_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"3glh"},{"db":"wwpdb","id":"3gli"},{"db":"wwpdb","id":"3glf"},{"db":"intact","id":"EBI-6467993"},{"db":"wwpdb","id":"1em8"},{"db":"wwpdb","id":"1jqj"},{"db":"wwpdb","id":"1jql"},{"db":"wwpdb","id":"1jre"},{"db":"intenz","id":"EC 2.7.7.7"}],
		"expansion":{"id":"5","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P28631"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"31053913",
				"name":"gamma binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["207-334"],
				"linkedFeatures":["17483857"]
				},
				{
				"id":"15029489",
				"name":"tau binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["207-334"],
				"linkedFeatures":["2861583"]
				},
				{
				"id":"11137315",
				"name":"delta binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["207-334"],
				"linkedFeatures":["18235797"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKNATFYLLDNDTTVDGLSAVEQLVCEIAAERWRSGKRVLIACEDEKQAYRLDEALWARPAESFVPHNLAGEGPRGGAPVEIAWPQKRSSSRRDILISLRTSFADFATAFTEVVDFVPYEDSLKQLARERYKAYRVAGFNLNTATWK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P28905"},
		"label":"holc_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"3glh"},{"db":"wwpdb","id":"3gli"},{"db":"wwpdb","id":"3glf"},{"db":"intact","id":"EBI-6467993"},{"db":"wwpdb","id":"1em8"},{"db":"wwpdb","id":"1jqj"},{"db":"wwpdb","id":"1jql"},{"db":"wwpdb","id":"1jre"},{"db":"intenz","id":"EC 2.7.7.7"}],
		"expansion":{"id":"5","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P28905"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"2873665",
				"name":"ssb binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-147"]
				},
				{
				"id":"12861079",
				"name":"psi binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-79"],
				"linkedFeatures":["32073835"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSYQVLARKWRPQTFADVVGQEHVLTALANGLSLGRIHHAYLFSGTRGVGKTSIARLLAKGLNCETGITATPCGVCDNCREIEQGRFVDLIEIDAASRTKVEDTRDLLDNVQYAPARGRFKVYLIDEVHMLSRHSFNALLKTLEEPPEHVKFLLATTDPQKLPVTILSRCLQFHLKALDVEQIRHQLEHILNEEHIAHEPRALQLLARAAEGSLRDALSLTDQAIASGDGQVSTQAVSAMLGTLDDDQALSLVEAMVEANGERVMALINEAAARGIEWELLVEMLGLLHRIAMVQLSPAALGNDMAAIELRMRELARTIPPTDIQLYYQTLLIGRKELPYAPDRRMGVEMTLLRALAFHPRMPLPEPEVPRQSFAPVAPTAVMTPTQVPPQPQSAPQQAPTVPLPETTSQVLAARQQQRVQGATKAKKE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"intact","id":"EBI-2604194"},
		"label":"p06710-2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"3glh"},{"db":"wwpdb","id":"3gli"},{"db":"wwpdb","id":"3glf"},{"db":"intact","id":"EBI-6467993"},{"db":"wwpdb","id":"1em8"},{"db":"wwpdb","id":"1jqj"},{"db":"wwpdb","id":"1jql"},{"db":"wwpdb","id":"1jre"},{"db":"intenz","id":"EC 2.7.7.7"}],
		"expansion":{"id":"5","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-2604194"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"17483857",
				"name":"delta' binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["221-382"],
				"linkedFeatures":["31053913"]
				},
				{
				"id":"13004995",
				"name":"tau binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["221-382"],
				"linkedFeatures":["1383907"]
				},
				{
				"id":"6111724",
				"name":"delta binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["221-382"],
				"linkedFeatures":["9641043"]
				},
				{
				"id":"2672091",
				"name":"psi binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["221-382"],
				"linkedFeatures":["14019723"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MTSRRDWQLQQLGITQWSLRRPGALQGEIAIAIPAHVRLVMVANDLPALTDPLVSDVLRALTVSPDQVLQLTPEKIAMLPQGSHCNSWRLGTDEPLSLEGAQVASPALTDLRANPTARAALWQQICTYEHDFFPRND",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P28632"},
		"label":"hold_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"3glh"},{"db":"wwpdb","id":"3gli"},{"db":"wwpdb","id":"3glf"},{"db":"intact","id":"EBI-6467993"},{"db":"wwpdb","id":"1em8"},{"db":"wwpdb","id":"1jqj"},{"db":"wwpdb","id":"1jql"},{"db":"wwpdb","id":"1jre"},{"db":"intenz","id":"EC 2.7.7.7"}],
		"expansion":{"id":"5","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P28632"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"32073835",
				"name":"chi binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["57-57","121-125"],
				"linkedFeatures":["12861079"]
				},
				{
				"id":"14019723",
				"name":"gamma\/tau binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["2-28"],
				"linkedFeatures":["2672091"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MIRLYPEQLRAQLNEGLRAAYLLLGNDPLLLQESQDAVRQVAAAQGFEEHHTFSIDPNTDWNAIFSLCQAMSLFASRQTLLLLLPENGPNAAINEQLLTLTGLLHDDLLLIVRGNKLSKAQENAAWFTALANRSVQVTCQTPEQAQLPRWVAARAKQLNLELDDAANQVLCYCYEGNLLALAQALERLSLLWPDGKLTLPRVEQAVNDAAHFTPFHWVDALLMGKSKRALHILQQLRLEGSEPVILLRTLQRELLLLVNLKRQSAHTPLRALFDKHRVWQNRRGMMGEALNRLSQTQLRQAVQLLTRTELTLKQDYGQSVWAELEGLSLLLCHKPLADVFIDG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P28630"},
		"label":"hola_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"3glh"},{"db":"wwpdb","id":"3gli"},{"db":"wwpdb","id":"3glf"},{"db":"intact","id":"EBI-6467993"},{"db":"wwpdb","id":"1em8"},{"db":"wwpdb","id":"1jqj"},{"db":"wwpdb","id":"1jql"},{"db":"wwpdb","id":"1jre"},{"db":"intenz","id":"EC 2.7.7.7"}],
		"expansion":{"id":"5","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P28630"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"9641043",
				"name":"gamma binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["207-343"],
				"linkedFeatures":["6111724"]
				},
				{
				"id":"10274621",
				"name":"tau binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["207-343"],
				"linkedFeatures":["14457084"]
				},
				{
				"id":"12570890",
				"name":"beta binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["60-74"]
				},
				{
				"id":"18235797",
				"name":"delta' binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["207-343"],
				"linkedFeatures":["11137315"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSYQVLARKWRPQTFADVVGQEHVLTALANGLSLGRIHHAYLFSGTRGVGKTSIARLLAKGLNCETGITATPCGVCDNCREIEQGRFVDLIEIDAASRTKVEDTRDLLDNVQYAPARGRFKVYLIDEVHMLSRHSFNALLKTLEEPPEHVKFLLATTDPQKLPVTILSRCLQFHLKALDVEQIRHQLEHILNEEHIAHEPRALQLLARAAEGSLRDALSLTDQAIASGDGQVSTQAVSAMLGTLDDDQALSLVEAMVEANGERVMALINEAAARGIEWEALLVEMLGLLHRIAMVQLSPAALGNDMAAIELRMRELARTIPPTDIQLYYQTLLIGRKELPYAPDRRMGVEMTLLRALAFHPRMPLPEPEVPRQSFAPVAPTAVMTPTQVPPQPQSAPQQAPTVPLPETTSQVLAARQQLQRVQGATKAKKSEPAAATRARPVNNAALERLASVTDRVQARPVPSALEKAPAKKEAYRWKATTPVMQQKEVVATPKALKKALEHEKTPELAAKLAAEAIERDPWAAQVSQLSLPKLVEQVALNAWKEESDNAVCLHLRSSQRHLNNRGAQQKLAEALSMLKGSTVELTIVEDDNPAVRTPLEWRQAIYEEKLAQARESIIADNNIQTLRRFFDAELDEESIRPI",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P06710-1"},
		"label":"p06710-1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"3glh"},{"db":"wwpdb","id":"3gli"},{"db":"wwpdb","id":"3glf"},{"db":"intact","id":"EBI-6467993"},{"db":"wwpdb","id":"1em8"},{"db":"wwpdb","id":"1jqj"},{"db":"wwpdb","id":"1jql"},{"db":"wwpdb","id":"1jre"},{"db":"intenz","id":"EC 2.7.7.7"}],
		"expansion":{"id":"5","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P06710-1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"2861583",
				"name":"delta' binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["222-382"],
				"linkedFeatures":["15029489"]
				},
				{
				"id":"1383907",
				"name":"gamma binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["222-382"],
				"linkedFeatures":["13004995"]
				},
				{
				"id":"20244718",
				"name":"tau (self-)binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["222-382"]
				},
				{
				"id":"11051648",
				"name":"alpha binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["497-643"]
				},
				{
				"id":"21280820",
				"name":"dnab binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["430-496"]
				},
				{
				"id":"14457084",
				"name":"delta binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["222-382"],
				"linkedFeatures":["10274621"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1em8"},{"db":"intact","id":"EBI-6858099"},{"db":"wwpdb","id":"3sxu"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P28905"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"10064349",
				"name":"ssb binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-147"]
				},
				{
				"id":"3622272",
				"name":"psi binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-79"],
				"linkedFeatures":["11792186"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P28632"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"11792186",
				"name":"chi binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["121-125","57-57"],
				"linkedFeatures":["3622272"]
				},
				{
				"id":"18811084",
				"name":"gamma\/tau binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["2-28"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSTAITRQIVLDTETTGMNQIGAHYEGHKIIEIGAVEVVNRRLTGNNFHVYLKPDRLVDPEAFGVHGIADEFLLDKPTFAEVADEFMDYIRGAELVIHNAAFDIGFMDYEFSLLKRDIPKTNTFCKVTDSLAVARKMFPGKRNSLDALCARYEIDNSKRTLHGALLDAQILAEVYLAMTGGQTSMAFAMEGETQQQQGEATIQRIVRQASKLRVVFATDEEIAAHEARLDLVQKKGGSCLWRA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P03007"},
		"label":"dpo3e_ecoli"
	},
	{
		"object":"interactor",
		"sequence":"MSEPRFVHLRVHSDYSMIDGLAKTAPLVKKAAALGMPALAITDFTNLCGLVKFYGAGHGAGIKPIVGADFNVQCDLLGDELTHLTVLAANNTGYQNLTLLISKAYQRGYGAAGPIIDRDWLIELNEGLILLSGGRMGDVGRSLLRGNSALVDECVAFYEEHFPDRYFLELIRTGRPDEESYLHAAVELAEARGLPVVATNDVRFIDSSDFDAHEIRVAIHDGFTLDDPKRPRNYSPQQYMRSEEEMCELFADIPEALANTVEIAKRCNVTVRLGEYFLPQFPTGDMSTEDYLVKRAKEGLEERLAFLFPDEEERLKRRPEYDERLETELQVINQMGFPGYFLIVMEFIQWSKDNGVPVGPGRGSGAGSLVAYALKITDLDPLEFDLLFERFLNPERVSMPDFDVDFCMEKRDQVIEHVADMYGRDAVSQIITFGTMAAKAVIRDVGRVLGHPYGFVDRISKLIPPDPGMTLAKAFEAEPQLPEIYEADEEVKALIDMARKLEGVTRNAGKHAGGVVIAPTKITDFAPLYCDEEGKHPVTQFDKSDVEYAGLVKFDFLGLRTLTIINWALEMINKRRAKNGEPPLDIAAIPLDDKKSFDMLQRSETTAVFQLESRGMKDLIKRLQPDCFEDMIALVALFRPGPLQSGMVDNFIDRKHGREEISYPDVQWQHESLKPVLEPTYGIILYQEQVMQIAQVLSGYTLGGADMLRRAMGKKKPEEMAKQRSVFAEGAEKNGINAELAMKIFDLVEKFAGYGFNKSHSAAYALVSYQTLWLKAHYPAEFMAAVMTADMDNTEKVVGLVDECWRMGLKILPPDINSGLYHFHVNDDGEIVYGIGAIKGVGEGPIEAIIEARNKGGYFRELFDLCARTDTKKLNRRVLEKLIMSGAFDRLGPHRAALMNSLGDALKAADQHAKAEAIGQADMFGVLAEEPEQIEQSYASCQPWPEQVVLDGERETLGLYLTGHPINQYLKEIERYVGGVRLKDMHPTERGKVITAAGLVVAARVMVTKRGNRIGICTLDDRSGRLEVMLFTDALDKYQQLLEKDRILIVSGQVSFDDFSGGLKMTAREVMDIDEAREKYARGLAISLTDRQIDDQLLNRLRQSLEPHRSGTIPVHLYYQRADARARLRFGATWRVSPSDRLLNDLRGLIGSEQVELEFD",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P10443"},
		"label":"dpo3a_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.7.7.7"},{"db":"intact","id":"EBI-6467979"}],
		"expansion":{"id":"6","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03007"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"8031681",
				"name":"theta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-186"],
				"linkedFeatures":["32548155"]
				},
				{
				"id":"32498228",
				"name":"alpha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-243"],
				"linkedFeatures":["32241716"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P10443"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"16012089",
				"name":"beta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1160"]
				},
				{
				"id":"32241716",
				"name":"epsilon binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1160"],
				"linkedFeatures":["32498228"]
				},
				{
				"id":"8642136",
				"name":"tau binding region",
				"type":{"id":"MI:0429","name":"necessary binding region"},
				"sequenceData":["1112-1160"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLKNLAKLDQTEMDKVNVDLAAAGVAFKERYNMPVIAEAVEREQPEHLRSWFRERLIAHRLASVNLSRLPYEPKLK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0ABS8"},
		"label":"hole_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.7.7.7"},{"db":"intact","id":"EBI-6467979"}],
		"expansion":{"id":"6","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03007"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"8031681",
				"name":"theta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-186"],
				"linkedFeatures":["32548155"]
				},
				{
				"id":"32498228",
				"name":"alpha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-243"],
				"linkedFeatures":["32241716"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0ABS8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32548155",
				"name":"epsilon binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-76"],
				"linkedFeatures":["8031681"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKFTVEREHLLKPLQQVSGPLGGRPTLPILGNLLLQVADGTLSLTGTDLEMEMVARVALVQPHEPGATTVPARKFFDICRGLPEGAEIAVQLEGERMLVRSGRSRFSLSTLPAADFPNLDDWQSEVEFTLPQATMKRLIEATQFSMAHQDVRYYLNGMLFETEGEELRTVATDGHRLAVCSMPIGQSLPSHSVIVPRKGVIELMRMLDGGDNPLRVQIGSNNIRAHVGDFIFTSKLVDGRFPDYRRVLPKNPDKHLEAGCDLLKQAFARAAILSNEKFRGVRLYVSENQLKITANNPEQEEAEEILDVTYSGAEMEIGFNVSYVLDVLNALKCENVRMMLTDSVSSVQIEDAASQSAAYVVMPMRL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A988"},
		"label":"dpo3b_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1jql"},{"db":"wwpdb","id":"1jqj"},{"db":"intenz","id":"EC 2.7.7.7"},{"db":"wwpdb","id":"2pol"},{"db":"intact","id":"EBI-6468862"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A988"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"24800749",
				"name":"alpha binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-366"]
				},
				{
				"id":"13046413",
				"name":"beta dimerisation",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-125","272-273"]
				},
				{
				"id":"26406805",
				"name":"delta binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["242-242","36-36","362-362","274-278","177-177"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0A988"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"28270491",
				"name":"alpha binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-366"]
				},
				{
				"id":"11392691",
				"name":"beta dimerisation",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-125","272-273"]
				},
				{
				"id":"15373986",
				"name":"delta binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["242-242","36-36","362-362","274-278","177-177"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAGNKPFNKQQAEPRERDPQVAGLKVPPHSIEAEQSVLGGLMLDNERWDDVAERVVADDFYTRPHRHIFTEMARLQESGSPIDLITLAESLERQGQLDSVGGFAYLAELSKNTPSAANISAYADIVRERAVVREMISVANEIAEAGFDPQGRTSEDLLDLAESRVFKIAESRANKDEGPKNIADVLDATVARIEQLFQQPHDGVTGVNTGYDDLNKKTAGLQPSDLIIVAARPSMGKTTFAMNLVENAAMLQDKPVLIFSLEMPSEQIMMRSLASLSRVDQTKIRTGQLDDEDWARISGTMGILLEKRNIYIDDSSGLTPTEVRSRARRIAREHGGIGLIMIDYLQLMRVPALSDNRTLEIAEISRSLKALAKELNVPVVALSQLNRSLEQRADKRPVNSDLRESGSIEQDADLIMFIYRDEVYHENSDLKGIAEIIIGKQRNGPIGTVRLTFNGQWSRFDNYAGPQYDDE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0ACB0"},
		"label":"dnab_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"emdb","id":"EMD-2322"},{"db":"intact","id":"EBI-6554207"},{"db":"intenz","id":"EC 3.6.4.12"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
			"bindingSites":[
				{
				"id":"21462199",
				"name":"dnab binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["5046841"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0ACB0"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"5046841",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-471"],
				"linkedFeatures":["21462199"]
				},
				{
				"id":"30207062",
				"name":"dnag hdb binding region",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["1-152"]
				},
				{
				"id":"11543251",
				"name":"hexamerisation",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-471"]
				},
				{
				"id":"29253244",
				"name":"dna binding site",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["186-454"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MASRGVNKVILVGNLGQDPEVRYMPNGGAVANITLATSESWRDKATGEMKEQTEWHRVVLFGKLAEVASEYLRKGSQVYIEGQLRTRKWTDQSGQDRYTTEVVVNVGGTMQMLGGRQGGGAPAGGNIGGGQPQGGWGQPQQPQGGNQFSGGAQSRPQQSAPAAPSNEPPMDFDDDIPF",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0AGE0"},
		"label":"ssb_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1eyg"},{"db":"intact","id":"EBI-6469511"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0AGE0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"19749704",
				"name":"primase binding region",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["c-c"]
				},
				{
				"id":"12838665",
				"name":"chi binding region",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["114-178"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AGE0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"24453924",
				"name":"primase binding region",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["c-c"]
				},
				{
				"id":"22420874",
				"name":"chi binding region",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["114-178"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MTLETAFMLPVQDAQHSFRRLLKAMSEPGVIVALHQLKRGWQPLNIATTSVLLTLADNDTPVWLSTPLNNDIVNQSLRFHTNAPLVSQPEQATFAVTDEAISSEQLNALSTGTAVAPEAGATLILQVASLSGGRMLRLTGAGIAEERMIAPQLPECILHELTERPHPFPLGIDLILTCGERLLAIPRTTHVEVC",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P16686"},
		"label":"phnh_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"2fsu"},{"db":"intact","id":"EBI-6471348"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P16686"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11369688",
				"name":"n-terminal alpha helix",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["n-n"],
				"linkedFeatures":["31415223"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P16686"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"31415223",
				"name":"n-terminal alpha helix",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["n-n"],
				"linkedFeatures":["11369688"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"organism":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
		"identifier":{"db":"chebi","id":"CHEBI:18009"},
		"label":"nadp+"
	},
	{
		"object":"interactor",
		"sequence":"MKQLTILGSTGSIGCSTLDVVRHNPEHFRVVALVAGKNVTRMVEQCLEFSPRYAVMDDEASAKLLKTMLQQQGSRTEVLSGQQAACDMAALEDVDQVMAAIVGAAGLLPTLAAIRAGKTILLANKESLVTCGRLFMDAVKQSKAQLLPVDSEHNAIFQSLPQPIQHNLGYADLEQNGVVSILLTGSGGPFRETPLRDLATMTPDQACRHPNWSMGRKISVDSATMMNKGLEYIEARWLFNASASQMEVLIHPQSVIHSMVRYQDGSVLAQLGEPDMRTPIAHTMAWPNRVNSGVKPLDFCKLSALTFAAPDYDRYPCLKLAMEAFEQGQAATTALNAANEITVAAFLAQQIRFTDIAALNLSVLEKMDMREPQCVDDVLSVDANAREVARKEVMRLAS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P45568"},
		"label":"dxr_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1k5h"},{"db":"wwpdb","id":"1t1s"},{"db":"intact","id":"EBI-6475852"},{"db":"intenz","id":"1.1.1.267"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:18009"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P45568"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"16681443",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["150-312"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:51381"},
		"label":"succinate salt"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"organism":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
		"identifier":{"db":"chebi","id":"CHEBI:36141"},
		"label":"quinone"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"2wu2"},{"db":"wwpdb","id":"2wp9"},{"db":"wwpdb","id":"2ws3"},{"db":"wwpdb","id":"2acz"},{"db":"wwpdb","id":"2wdr"},{"db":"wwpdb","id":"2wdq"},{"db":"wwpdb","id":"1nek"},{"db":"intact","id":"EBI-6476056"},{"db":"intenz","id":"1.3.5.1"},{"db":"wwpdb","id":"2wu5"},{"db":"wwpdb","id":"2wdv"}],
		"expansion":{"id":"7","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:51381"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17740362",
				"name":"fad binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["31135952"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:36141"},
			"bioRole":{"id":"MI:0580","name":"electron acceptor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"20592385",
				"name":"dhsb binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["15819489"]
				},
				{
				"id":"26402767",
				"name":"dhsd binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["27502447"]
				},
				{
				"id":"21336911",
				"name":"dhsc binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["13252236"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"2wu2"},{"db":"wwpdb","id":"2wp9"},{"db":"wwpdb","id":"2ws3"},{"db":"wwpdb","id":"2acz"},{"db":"wwpdb","id":"2wdr"},{"db":"wwpdb","id":"2wdq"},{"db":"wwpdb","id":"1nek"},{"db":"intact","id":"EBI-6476056"},{"db":"intenz","id":"1.3.5.1"},{"db":"wwpdb","id":"2wu5"},{"db":"wwpdb","id":"2wdv"}],
		"expansion":{"id":"7","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:51381"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17740362",
				"name":"fad binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["31135952"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:47402"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"29574037",
				"name":"dhsb binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["9052530"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"2wu2"},{"db":"wwpdb","id":"2wp9"},{"db":"wwpdb","id":"2ws3"},{"db":"wwpdb","id":"2acz"},{"db":"wwpdb","id":"2wdr"},{"db":"wwpdb","id":"2wdq"},{"db":"wwpdb","id":"1nek"},{"db":"intact","id":"EBI-6476056"},{"db":"intenz","id":"1.3.5.1"},{"db":"wwpdb","id":"2wu5"},{"db":"wwpdb","id":"2wdv"}],
		"expansion":{"id":"7","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:51381"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17740362",
				"name":"fad binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["31135952"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:33725"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"10079456",
				"name":"dhsb binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["22649849"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"organism":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
		"identifier":{"db":"chebi","id":"CHEBI:33739"},
		"label":"fe2-s2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"2wu2"},{"db":"wwpdb","id":"2wp9"},{"db":"wwpdb","id":"2ws3"},{"db":"wwpdb","id":"2acz"},{"db":"wwpdb","id":"2wdr"},{"db":"wwpdb","id":"2wdq"},{"db":"wwpdb","id":"1nek"},{"db":"intact","id":"EBI-6476056"},{"db":"intenz","id":"1.3.5.1"},{"db":"wwpdb","id":"2wu5"},{"db":"wwpdb","id":"2wdv"}],
		"expansion":{"id":"7","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:51381"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17740362",
				"name":"fad binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["31135952"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:33739"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"992572",
				"name":"dhsb binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["5612786"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"2wu2"},{"db":"wwpdb","id":"2wp9"},{"db":"wwpdb","id":"2ws3"},{"db":"wwpdb","id":"2acz"},{"db":"wwpdb","id":"2wdr"},{"db":"wwpdb","id":"2wdq"},{"db":"wwpdb","id":"1nek"},{"db":"intact","id":"EBI-6476056"},{"db":"intenz","id":"1.3.5.1"},{"db":"wwpdb","id":"2wu5"},{"db":"wwpdb","id":"2wdv"}],
		"expansion":{"id":"7","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:51381"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17740362",
				"name":"fad binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["31135952"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:30413"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"12586781",
				"name":"dhsc binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["18901642"]
				},
				{
				"id":"20102103",
				"name":"dhsd binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["30026791"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKLPVREFDAVVIGAGGAGMRAALQISQSGQTCALLSKVFPTRSHTVSAQGGITVALGNTHEDNWEWHMYDTVKGSDYIGDQDAIEYMCKTGPEAILELEHMGLPFSRLDDGRIYQRPFGGQSKNFGGEQAARTAAAADRTGHALLHTLYQQNLKNHTTIFSEWYALDLVKNQDGAVVGCTALCIETGEVVYFKARATVLATGGAGRIYQSTTNAHINTGDGVGMAIRAGVPVQDMEMWQFHPTGIAGAGVLVTEGCRGEGGYLLNKHGERFMERYAPNAKDLAGRDVVARSIMIEIREGRGCDGPWGPHAKLKLDHLGKEVLESRLPGILELSRTFAHVDPVKEPIPVIPTCHYMMGGIPTKVTGQALTVNEKGEDVVVPGLFAVGEIACVSVHGANRLGGNSLLDLVVFGRAAGLHLQESIAEQGALRDASESDVEASLDRLNRWNNNRNGEDPVAIRKALQECMQHNFSVFREGDAMAKGLEQLKVIRERLKNARLDDTSSEFNTQRVECLELDNLMETAYATAVSANFRTESRGAHSRFDFPDRDDENWLCHSLYLPESESMTRRSVNMEPKLRPAFPPKIRTY",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0AC41"},
		"label":"sdha_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"2wu2"},{"db":"wwpdb","id":"2wp9"},{"db":"wwpdb","id":"2ws3"},{"db":"wwpdb","id":"2acz"},{"db":"wwpdb","id":"2wdr"},{"db":"wwpdb","id":"2wdq"},{"db":"wwpdb","id":"1nek"},{"db":"intact","id":"EBI-6476056"},{"db":"intenz","id":"1.3.5.1"},{"db":"wwpdb","id":"2wu5"},{"db":"wwpdb","id":"2wdv"}],
		"expansion":{"id":"7","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:51381"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17740362",
				"name":"fad binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["31135952"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AC41"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"1619554",
				"name":"dhsb binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-588"],
				"linkedFeatures":["7209980"]
				},
				{
				"id":"13087317",
				"name":"fad binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-588"],
				"linkedFeatures":["9243302"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MRLEFSIYRYNPDVDDAPRMQDYTLEADEGRDMMLLDALIQLKEKDPSLSFRRSCREGVCGSDGLNMNGKNGLACITPISALNQPGKKIVIRPLPGLPVIRDLVVDMGQFYAQYEKIKPYLLNNGQNPPAREHLQMPEQREKLDGLYECILCACCSTSCPSFWWNPDKFIGPAGLLAAYRFLIDSRDTETDSRLDGLSDAFSVFRCHSIMNCVSVCPKGLNPTRAIGHIKSMLLQRNA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P07014"},
		"label":"sdhb_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"2wu2"},{"db":"wwpdb","id":"2wp9"},{"db":"wwpdb","id":"2ws3"},{"db":"wwpdb","id":"2acz"},{"db":"wwpdb","id":"2wdr"},{"db":"wwpdb","id":"2wdq"},{"db":"wwpdb","id":"1nek"},{"db":"intact","id":"EBI-6476056"},{"db":"intenz","id":"1.3.5.1"},{"db":"wwpdb","id":"2wu5"},{"db":"wwpdb","id":"2wdv"}],
		"expansion":{"id":"7","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:51381"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17740362",
				"name":"fad binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["31135952"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P07014"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"28716310",
				"name":"dhsd binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-238"],
				"linkedFeatures":["21635604"]
				},
				{
				"id":"7209980",
				"name":"dhsa binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-238"],
				"linkedFeatures":["1619554"]
				},
				{
				"id":"231194",
				"name":"dhsc binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-238"],
				"linkedFeatures":["26921818"]
				},
				{
				"id":"5612786",
				"name":"fe2-s2 binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-238"],
				"linkedFeatures":["992572"]
				},
				{
				"id":"9052530",
				"name":"fe3-s4 binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-238"],
				"linkedFeatures":["29574037"]
				},
				{
				"id":"15819489",
				"name":"quinone binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-238"],
				"linkedFeatures":["20592385"]
				},
				{
				"id":"22649849",
				"name":"fe4-s4 binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-238"],
				"linkedFeatures":["10079456"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MVSNASALGRNGVHDFILVRATAIVLTLYIIYMVGFFATSGELTYEVWIGFFASAFTKVFTLLALFSILIHAWIGMWQVLTDYVKPLALRLMLQLVIVVALVVYVIYGFVVVWGV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0AC44"},
		"label":"dhsd_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"2wu2"},{"db":"wwpdb","id":"2wp9"},{"db":"wwpdb","id":"2ws3"},{"db":"wwpdb","id":"2acz"},{"db":"wwpdb","id":"2wdr"},{"db":"wwpdb","id":"2wdq"},{"db":"wwpdb","id":"1nek"},{"db":"intact","id":"EBI-6476056"},{"db":"intenz","id":"1.3.5.1"},{"db":"wwpdb","id":"2wu5"},{"db":"wwpdb","id":"2wdv"}],
		"expansion":{"id":"7","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:51381"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17740362",
				"name":"fad binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["31135952"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AC44"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"21635604",
				"name":"dhsb binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-115"],
				"linkedFeatures":["28716310"]
				},
				{
				"id":"27050005",
				"name":"dhsc binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-115"],
				"linkedFeatures":["439280"]
				},
				{
				"id":"30026791",
				"name":"heme binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-115"],
				"linkedFeatures":["20102103"]
				},
				{
				"id":"27502447",
				"name":"quinone binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-115"],
				"linkedFeatures":["26402767"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MIRNVKKQRPVNLDLQTIRFPITAIASILHRVSGVITFVAVGILLWLLGTSLSSPEGFEQASAIMGSFFVKFIMWGILTALAYHVVVGIRHMMMDFGYLEETFEAGKRSAKISFVITVVLSLLAGVLVW",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P69054"},
		"label":"dhsc_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"2wu2"},{"db":"wwpdb","id":"2wp9"},{"db":"wwpdb","id":"2ws3"},{"db":"wwpdb","id":"2acz"},{"db":"wwpdb","id":"2wdr"},{"db":"wwpdb","id":"2wdq"},{"db":"wwpdb","id":"1nek"},{"db":"intact","id":"EBI-6476056"},{"db":"intenz","id":"1.3.5.1"},{"db":"wwpdb","id":"2wu5"},{"db":"wwpdb","id":"2wdv"}],
		"expansion":{"id":"7","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:51381"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17740362",
				"name":"fad binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["31135952"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P69054"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"439280",
				"name":"dhsd binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-129"],
				"linkedFeatures":["27050005"]
				},
				{
				"id":"26921818",
				"name":"dhsb binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-129"],
				"linkedFeatures":["231194"]
				},
				{
				"id":"18901642",
				"name":"heme binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-129"],
				"linkedFeatures":["12586781"]
				},
				{
				"id":"13252236",
				"name":"quinone binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-129"],
				"linkedFeatures":["21336911"]
				}]
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
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"2wu2"},{"db":"wwpdb","id":"2wp9"},{"db":"wwpdb","id":"2ws3"},{"db":"wwpdb","id":"2acz"},{"db":"wwpdb","id":"2wdr"},{"db":"wwpdb","id":"2wdq"},{"db":"wwpdb","id":"1nek"},{"db":"intact","id":"EBI-6476056"},{"db":"intenz","id":"1.3.5.1"},{"db":"wwpdb","id":"2wu5"},{"db":"wwpdb","id":"2wdv"}],
		"expansion":{"id":"7","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:51381"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17740362",
				"name":"fad binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["31135952"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:16238"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"9243302",
				"name":"sdha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["13087317"]
				},
				{
				"id":"31135952",
				"name":"succinate binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["17740362"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MASVQLQNVTKAWGEVVVSKDINLDIHEGEFVVFVGPSGCGKSTLLRMIAGLETITSGDLFIGEKRMNDTPPAERGVGMVFQSYALYPHLSVAENMSFGLKLAGAKKEVINQRVNQVAEVLQLAHLLDRKPKALSGGQRQRVAIGRTLVAEPSVFLLDEPLSNLDAALRVQMRIEISRLHKRLGRTMIYVTHDQVEAMTLADKIVVLDAGRVAQVGKPLELYHYPADRFVAGFIGSPKMNFLPVKVTATAIDQVQVELPMPNRQQVWLPVESRDVQVGANMSLGIRPEHLLPSDIADVILEGEVQVVEQLGNETQIHIQIPSIRQNLVYRQNDVVLVEEGATFAIGLPPERCHLFREDGTACRRLHKEPGV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P68187"},
		"label":"malk_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"3.6.3.19"},{"db":"intact","id":"EBI-6477643"},{"db":"wwpdb","id":"3puy"}],
		"expansion":{"id":"8","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P68187"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"1011539",
				"name":"maltose binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["22395227"]
				},
				{
				"id":"16519508",
				"name":"malg binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["14016999"]
				},
				{
				"id":"31590713",
				"name":"malf binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["13338203"]
				},
				{
				"id":"31574003",
				"name":"dimerisation site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"]
				},
				{
				"id":"937355",
				"name":"atp binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["17098459"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17098459",
				"name":"malk binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["937355"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:17306"},
		"label":"maltose"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"3.6.3.19"},{"db":"intact","id":"EBI-6477643"},{"db":"wwpdb","id":"3puy"}],
		"expansion":{"id":"8","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P68187"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"1011539",
				"name":"maltose binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["22395227"]
				},
				{
				"id":"16519508",
				"name":"malg binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["14016999"]
				},
				{
				"id":"31590713",
				"name":"malf binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["13338203"]
				},
				{
				"id":"31574003",
				"name":"dimerisation site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"]
				},
				{
				"id":"937355",
				"name":"atp binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["17098459"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:17306"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"22395227",
				"name":"malk binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1011539"]
				},
				{
				"id":"13661443",
				"name":"malf binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["28452277"]
				},
				{
				"id":"13223247",
				"name":"malg binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["12125578"]
				},
				{
				"id":"18528469",
				"name":"male binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["22853869"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDVIKKKHWWQSDALKWSVLGLLGLLVGYLVVLMYAQGEYLFAITTLILSSAGLYIFANRKAYAWRYVYPGMAGMGLFVLFPLVCTIAIAFTNYSSTNQLTFERAQEVLLDRSWQAGKTYNFGLYPAGDEWQLALSDGETGKNYLSDAFKFGGEQKLQLKETTAQPEGERANLRVITQNRQALSDITAILPDGNKVMMSSLRQFSGTQPLYTLDGDGTLTNNQSGVKYRPNNQIGFYQSITADGNWGDEKLSPGYTVTTGWKNFTRVFTDEGIQKPFLAIFVWTVVFSLITVFLTVAVGMVLACLVQWEALRGKAVYRVLLILPYAVPSFISILIFKGLFNQSFGEINMMLSALFGVKPAWFSDPTTARTMLIIVNTWLGYPYMMILCMGLLKAIPDDLYEASAMDGAGPFQNFFKITLPLLIKPLTPLMIASFAFNFNNFVLIQLLTNGGPDRLGTTTPAGYTDLLVNYTYRIAFEGGGGQDFGLAAAIATLIFLLVGALAIVNLKATRMKFD",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P02916"},
		"label":"malf_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"3.6.3.19"},{"db":"intact","id":"EBI-6477643"},{"db":"wwpdb","id":"3puy"}],
		"expansion":{"id":"8","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P68187"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"1011539",
				"name":"maltose binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["22395227"]
				},
				{
				"id":"16519508",
				"name":"malg binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["14016999"]
				},
				{
				"id":"31590713",
				"name":"malf binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["13338203"]
				},
				{
				"id":"31574003",
				"name":"dimerisation site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"]
				},
				{
				"id":"937355",
				"name":"atp binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["17098459"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P02916"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"13338203",
				"name":"malk binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-514"],
				"linkedFeatures":["31590713"]
				},
				{
				"id":"7405963",
				"name":"male binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-514"],
				"linkedFeatures":["18633749"]
				},
				{
				"id":"13909409",
				"name":"malg binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-514"],
				"linkedFeatures":["1715467"]
				},
				{
				"id":"28452277",
				"name":"maltose binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-514"],
				"linkedFeatures":["13661443"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKIKTGARILALSALTTMMFSASALAKIEEGKLVIWINGDKGYNGLAEVGKKFEKDTGIKVTVEHPDKLEEKFPQVAATGDGPDIIFWAHDRFGGYAQSGLLAEITPDKAFQDKLYPFTWDAVRYNGKLIAYPIAVEALSLIYNKDLLPNPPKTWEEIPALDKELKAKGKSALMFNLQEPYFTWPLIAADGGYAFKYENGKYDIKDVGVDNAGAKAGLTFLVDLIKNKHMNADTDYSIAEAAFNKGETAMTINGPWAWSNIDTSKVNYGVTVLPTFKGQPSKPFVGVLSAGINAASPNKELAKEFLENYLLTDEGLEAVNKDKPLGAVALKSYEEELAKDPRIAATMENAQKGEIMPNIPQMSAFWYAVRTAVINAASGRQTVDEALKDAQTRITK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0AEX9"},
		"label":"male_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"3.6.3.19"},{"db":"intact","id":"EBI-6477643"},{"db":"wwpdb","id":"3puy"}],
		"expansion":{"id":"8","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P68187"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"1011539",
				"name":"maltose binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["22395227"]
				},
				{
				"id":"16519508",
				"name":"malg binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["14016999"]
				},
				{
				"id":"31590713",
				"name":"malf binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["13338203"]
				},
				{
				"id":"31574003",
				"name":"dimerisation site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"]
				},
				{
				"id":"937355",
				"name":"atp binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["17098459"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AEX9"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"22853869",
				"name":"maltose binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-396"],
				"linkedFeatures":["18528469"]
				},
				{
				"id":"8611500",
				"name":"malg binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-396"],
				"linkedFeatures":["13224542"]
				},
				{
				"id":"18633749",
				"name":"malf binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-396"],
				"linkedFeatures":["7405963"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAMVQPKSQKARLFITHLLLLLFIAAIMFPLLMVVAISLRQGNFATGSLIPEQISWDHWKLALGFSVEQADGRITPPPFPVLLWLWNSVKVAGISAIGIVALSTTCAYAFARMRFPGKATLLKGMLIFQMFPAVLSLVALYALFDRLGEYIPFIGLNTHGGVIFAYLGGIALHVWTIKGYFETIDSSLEEAAALDGATPWQAFRLVLLPLSVPILAVVFILSFIAAITEVPVASLLLRDVNSYTLAVGMQQYLNPQNYLWGDFAAAAVMSALPITIVFLLAQRWLVNGLTAGGVKG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P68183"},
		"label":"malg_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"3.6.3.19"},{"db":"intact","id":"EBI-6477643"},{"db":"wwpdb","id":"3puy"}],
		"expansion":{"id":"8","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P68187"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"1011539",
				"name":"maltose binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["22395227"]
				},
				{
				"id":"16519508",
				"name":"malg binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["14016999"]
				},
				{
				"id":"31590713",
				"name":"malf binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["13338203"]
				},
				{
				"id":"31574003",
				"name":"dimerisation site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"]
				},
				{
				"id":"937355",
				"name":"atp binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["17098459"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P68183"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"13224542",
				"name":"male binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-296"],
				"linkedFeatures":["8611500"]
				},
				{
				"id":"1715467",
				"name":"malf binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-296"],
				"linkedFeatures":["13909409"]
				},
				{
				"id":"12125578",
				"name":"maltose binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-296"],
				"linkedFeatures":["13223247"]
				},
				{
				"id":"14016999",
				"name":"malk binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-296"],
				"linkedFeatures":["16519508"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"3fh6"},{"db":"intact","id":"EBI-8705175"},{"db":"wwpdb","id":"2r6g"}],
		"expansion":{"id":"9","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P68187"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"332009",
				"name":"malf binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["10048482"]
				},
				{
				"id":"5386048",
				"name":"dimerisation site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"]
				},
				{
				"id":"27019592",
				"name":"malg binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["26162052"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P02916"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"10048482",
				"name":"malk binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-514"],
				"linkedFeatures":["332009"]
				},
				{
				"id":"8339906",
				"name":"malg binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-514"],
				"linkedFeatures":["11952186"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"3fh6"},{"db":"intact","id":"EBI-8705175"},{"db":"wwpdb","id":"2r6g"}],
		"expansion":{"id":"9","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P68187"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"332009",
				"name":"malf binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["10048482"]
				},
				{
				"id":"5386048",
				"name":"dimerisation site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"]
				},
				{
				"id":"27019592",
				"name":"malg binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["26162052"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P68183"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11952186",
				"name":"malf binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-296"],
				"linkedFeatures":["8339906"]
				},
				{
				"id":"26162052",
				"name":"malk binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-296"],
				"linkedFeatures":["27019592"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGLFDKLKSLVSDDKKDTGTIEIIAPLSGEIVNIEDVPDVVFAEKIVGDGIAIKPTGNKMVAPVDGTIGKIFETNHAFSIESDSGVELFVHFGIDTVELKGEGFKRIAEEGQRVKVGDTVIEFDLPLLEEKAKSTLTPVVISNMDEIKELIKLSGSVTVGETPVIRIKK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P69783"},
		"label":"ptga_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"4jbw"},{"db":"intact","id":"EBI-6913771"}],
		"expansion":{"id":"10","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P69783"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"23573374",
				"name":"malk binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-169"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P68187"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"20518378",
				"name":"dimerisation site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"]
				},
				{
				"id":"13489683",
				"name":"malg binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"]
				},
				{
				"id":"27367572",
				"name":"malf binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"]
				},
				{
				"id":"2643143",
				"name":"ptga binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"4jbw"},{"db":"intact","id":"EBI-6913771"}],
		"expansion":{"id":"10","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P69783"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"23573374",
				"name":"malk binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-169"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P02916"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"30792461",
				"name":"malg binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-514"]
				},
				{
				"id":"18893046",
				"name":"male binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-514"]
				},
				{
				"id":"9847384",
				"name":"malk binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-514"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"4jbw"},{"db":"intact","id":"EBI-6913771"}],
		"expansion":{"id":"10","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P69783"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"23573374",
				"name":"malk binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-169"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P68183"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"14529855",
				"name":"malk binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-296"]
				},
				{
				"id":"27685878",
				"name":"malf binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-296"]
				},
				{
				"id":"17246895",
				"name":"male binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-296"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSLSLWQQCLARLQDELPATEFSMWIRPLQAELSDNTLALYAPNRFVLDWVRDKYLNNINGLLTSFCGADAPQLRFEVGTKPVTQTPQAAVTSNVAAPAQVAQTQPQRAAPSTRSGWDNVPAPAEPTYRSNVNVKHTFDNFVEGKSNQLARAAARQVADNPGGAYNPLFLYGGTGLGKTHLLHAVGNGIMARKPNAKVVYMHSERFVQDMVKALQNNAIEEFKRYYRSVDALLIDDIQFFANKERSQEEFFHTFNALLEGNQQIILTSDRYPKEINGVEDRLKSRFGWGLTVAIEPPELETRVAILMKKADENDIRLPGEVAFFIAKRLRSNVRELEGALNRVIANANFTGRAITIDFVREALRDLLALQEKLVTIDNIQKTVAEYYKIKVADLLSKRRSRSVARPRQMAMALAKELTNHSLPEIGDAFGGRDHTTVLHACRKIEQLREESHDIKEDFSNLIRTLSS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P03004"},
		"label":"dnaa_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-6508476"}],
		"expansion":{"id":"11","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACB0"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"25384197",
				"name":"dnaa binding region",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["1-206"],
				"linkedFeatures":["21165698"]
				},
				{
				"id":"21359384",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21868225"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"17568777",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-467"],
				"linkedFeatures":["32989846"]
				},
				{
				"id":"21165698",
				"name":"dnab binding region",
				"type":{"id":"MI:0429","name":"necessary binding region"},
				"sequenceData":["135-148","24-56","21-21"],
				"linkedFeatures":["25384197"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0680","name":"single stranded deoxyribonucleic acid"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"chebi","id":"CHEBI:9160"},
		"label":"ssdna_generic_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-6508476"}],
		"expansion":{"id":"11","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACB0"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"25384197",
				"name":"dnaa binding region",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["1-206"],
				"linkedFeatures":["21165698"]
				},
				{
				"id":"21359384",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21868225"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:9160"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"}
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-6508476"}],
		"expansion":{"id":"11","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACB0"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"25384197",
				"name":"dnaa binding region",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["1-206"],
				"linkedFeatures":["21165698"]
				},
				{
				"id":"21359384",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21868225"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
			"bindingSites":[
				{
				"id":"32989846",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["17568777"]
				},
				{
				"id":"21868225",
				"name":"dnab binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21359384"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAGRIPRVFINDLLARTDIVDLIDARVKLKKQGKNFHACCPFHNEKTPSFTVNGEKQFYHCFGCGAHGNAIDFLMNYDKLEFVETVEELAAMHNLEVPFEAGSGPSQIERHQRQTLYQLMDGLNTFYQQSLQQPVATSARQYLEKRGLSHEVIARFAIGFAPPGWDNVLKRFGGNPENRQSLIDAGMLVTNDQGRSYDRFRERVMFPIRDKRGRVIGFGGRVLGNDTPKYLNSPETDIFHKGRQLYGLYEAQQDNAEPNRLLVVEGYMDVVALAQYGINYAVASLGTSTTADHIQLLFRATNNVICCYDGDRAGRDAAWRALETALPYMTDGRQLRFMFLPDGEDPDTLVRKEGKEAFEARMEQAMPLSAFLFNSLMPQVDLSTPDGRARLSTLALPLISQVPGETLRIYLRQELGNKLGILDDSQLERLMPKAAESGVSRPVPQLKRTTMRILIGLLVQNPELATLVPPLENLDENKLPGLGLFRELVNTCLSQPGLTTGQLLEHYRGTNNAATLEKLSMWDDIADKNIAEQTFTDSLNHMFDSLLELRQEELIARERTHGLSNEERLELWTLNQELAKK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0ABS5"},
		"label":"dnag_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"3.6.4.12"},{"db":"intact","id":"EBI-6502267"}],
		"expansion":{"id":"12","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ABS5"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"6920217",
				"name":"dnab binding region",
				"type":{"id":"MI:0429","name":"necessary binding region"},
				"sequenceData":["574-581"],
				"linkedFeatures":["8433214"]
				},
				{
				"id":"3110672",
				"name":"ssb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-581"]
				},
				{
				"id":"3268201",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-581"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
			"bindingSites":[
				{
				"id":"50099",
				"name":"dnab binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["3153356"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"3.6.4.12"},{"db":"intact","id":"EBI-6502267"}],
		"expansion":{"id":"12","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ABS5"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"6920217",
				"name":"dnab binding region",
				"type":{"id":"MI:0429","name":"necessary binding region"},
				"sequenceData":["574-581"],
				"linkedFeatures":["8433214"]
				},
				{
				"id":"3110672",
				"name":"ssb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-581"]
				},
				{
				"id":"3268201",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-581"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0ACB0"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"3153356",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-471"],
				"linkedFeatures":["50099"]
				},
				{
				"id":"16006188",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-471"]
				},
				{
				"id":"8433214",
				"name":"dnag binding region",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["n-n"],
				"linkedFeatures":["6920217"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"emdb","id":"EMD-2321"},{"db":"intact","id":"EBI-6508439"}],
		"expansion":{"id":"13","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACB0"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"10131789",
				"name":"dnac binding region",
				"type":{"id":"MI:0429","name":"necessary binding region"},
				"sequenceData":["c-c"],
				"linkedFeatures":["29797712"]
				},
				{
				"id":"10257671",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-471"],
				"linkedFeatures":["31561756"]
				},
				{
				"id":"29984888",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-471"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
			"bindingSites":[
				{
				"id":"31561756",
				"name":"dnab binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["10257671"]
				},
				{
				"id":"2002844",
				"name":"dnac binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["6710918"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKNVGDLMQRLQKMMPAHIKPAFKTGEELLAWQKEQGAIRSAALERENRAMKMQRTFNRSGIRPLHQNCSFENYRVECEGQMNALSKARQYVEEFDGNIASFIFSGKPGTGKNHLAAAICNELLLRGKSVLIITVADIMSAMKDTFRNSGTSEEQLLNDLSNVDLLVIDEIGVQTESKYEKVIINQIVDRRSSSKRPTGMLTNSNMEEMTKLLGERVMDRMRLGNSLWVIFNWDSYRSRVTGKEY",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0AEF0"},
		"label":"dnac_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"emdb","id":"EMD-2321"},{"db":"intact","id":"EBI-6508439"}],
		"expansion":{"id":"13","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACB0"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"10131789",
				"name":"dnac binding region",
				"type":{"id":"MI:0429","name":"necessary binding region"},
				"sequenceData":["c-c"],
				"linkedFeatures":["29797712"]
				},
				{
				"id":"10257671",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-471"],
				"linkedFeatures":["31561756"]
				},
				{
				"id":"29984888",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-471"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AEF0"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"29797712",
				"name":"dnab binding region",
				"type":{"id":"MI:0429","name":"necessary binding region"},
				"sequenceData":["n-n"],
				"linkedFeatures":["10131789"]
				},
				{
				"id":"6710918",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-245"],
				"linkedFeatures":["2002844"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MIKSALLVLEDGTQFHGRAIGATGSAVGEVVFNTSMTGYQEILTDPSYSRQIVTLTYPHIGNVGTNDADEESSQVHAQGLVIRDLPLIASNFRNTEDLSSYLKRHNIVAIADIDTRKLTRLLREKGAQNGCIIAGDNPDAALALEKARAFPGLNGMDLAKEVTTAEAYSWTQGSWTLTGGLPEAKKEDELPFHVVAYDFGAKRNILRMLVDRGCRLTIVPAQTSAEDVLKMNPDGIFLSNGPGDPAPCDYAITAIQKFLETDIPVFGICLGHQLLALASGAKTVKMKFGHHGGNHPVKDVEKNVVMITAQNHGFAVDEATLPANLRVTHKSLFDGTLQGIHRTDKPAFSFQGHPEASPGPHDAAPLFDHFIELIEQYRKTAK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A6F1"},
		"label":"cara_ecoli"
	},
	{
		"object":"interactor",
		"sequence":"MPKRTDIKSILILGAGPIVIGQACEFDYSGAQACKALREEGYRVILVNSNPATIMTDPEMADATYIEPIHWEVVRKIIEKERPDAVLPTMGGQTALNCALELERQGVLEEFGVTMIGATADAIDKAEDRRRFDVAMKKIGLETARSGIAHTMEEALAVAADVGFPCIIRPSFTMGGSGGGIAYNREEFEEICARGLDLSPTKELLIDESLIGWKEYEMEVVRDKNDNCIIVCSIENFDAMGIHTGDSITVAPAQTLTDKEYQIMRNASMAVLREIGVETGGSNVQFAVNPKNGRLIVIEMNPRVSRSSALASKATGFPIAKVAAKLAVGYTLDELMNDITGGRTPASFEPSIDYVVTKIPRFNFEKFAGANDRLTTQMKSVGEVMAIGRTQQESLQKALRGLEVGATGFDPKVSLDDPEALTKIRRELKDAGADRIWYIADAFRAGLSVDGVFNLTNIDRWFLVQIEELVRLEEKVAEVGITGLNADFLRQLKRKGFADARLAKLAGVREAEIRKLRDQYDLHPVYKRVDTCAAEFATDTAYMYSTYEEECEANPSTDREKIMVLGGGPNRIGQGIEFDYCCVHASLALREDGYETIMVNCNPETVSTDYDTSDRLYFEPVTLEDVLEIVRIEKPKGVIVQYGGQTPLKLARALEAAGVPVIGTSPDAIDRAEDRERFQHAVERLKLKQPANATVTAIEMAVEKAKEIGYPLVVRPSYVLGGRAMEIVYDEADLRRYFQTAVSVSNDAPVLLDHFLDDAVEVDVDAICDGEMVLIGGIMEHIEQAGVHSGDSACSLPAYTLSQEIQDVMRQQVQKLAFELQVRGLMNVQFAVKNNEVYLIEVNPRAARTVPFVSKATGVPLAKVAARVMAGKSLAEQGVTKEVIPPYYSVKEVVLPFNKFPGVDPLLGPEMRSTGEVMGVGRTFAEAFAKAQLGSNSTMKKHGRALLSVREGDKERVVDLAAKLLKQGFELDATHGTAIVLGEAGINPRLVNKVHEGRPHIQDRIKNGEYTYIINTTSGRRAIEDSRVIRRSALQYKVHYDTTLNGGFATAMALNADATEKVISVQEMHAQIK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P00968"},
		"label":"carb_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1CE8"},{"db":"intenz","id":"6.3.5.5"},{"db":"wwpdb","id":"1BXR"},{"db":"intact","id":"EBI-6516404"},{"db":"wwpdb","id":"1A9X"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A6F1"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P00968"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MQERIKACFTESIQTQIAAAEALPDAISRAAMTLVQSLLNGNKILCCGNGTSAANAQHFAASMINRFETERPSLPAIALNTDNVVLTAIANDRLHDEVYAKQVRALGHAGDVLLAISTRGNSRDIVKAVEAAVTRDMTIVALTGYDGGELAGLLGPQDVEIRIPSHRSARIQEMHMLTVNCLCDLIDNTLFPHQDD",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P66817"},
		"label":"diaa_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"2yva"},{"db":"intact","id":"EBI-6550318"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P66817"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"}
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P66817"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"}
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6552438"}],
		"expansion":{"id":"14","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"13955027",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-366","4-63"],
				"linkedFeatures":["30220215"]
				},
				{
				"id":"31278342",
				"name":"ssdna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-467"],
				"linkedFeatures":["31371980"]
				},
				{
				"id":"28090169",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-366"],
				"linkedFeatures":["621554"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:9160"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
			"bindingSites":[
				{
				"id":"31371980",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["31278342"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6552438"}],
		"expansion":{"id":"14","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"13955027",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-366","4-63"],
				"linkedFeatures":["30220215"]
				},
				{
				"id":"31278342",
				"name":"ssdna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-467"],
				"linkedFeatures":["31371980"]
				},
				{
				"id":"28090169",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-366"],
				"linkedFeatures":["621554"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
			"bindingSites":[
				{
				"id":"621554",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["28090169"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6552438"}],
		"expansion":{"id":"14","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"13955027",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-366","4-63"],
				"linkedFeatures":["30220215"]
				},
				{
				"id":"31278342",
				"name":"ssdna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-467"],
				"linkedFeatures":["31371980"]
				},
				{
				"id":"28090169",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-366"],
				"linkedFeatures":["621554"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
			"bindingSites":[
				{
				"id":"11032619",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["3445841"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6552438"}],
		"expansion":{"id":"14","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"13955027",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-366","4-63"],
				"linkedFeatures":["30220215"]
				},
				{
				"id":"31278342",
				"name":"ssdna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-467"],
				"linkedFeatures":["31371980"]
				},
				{
				"id":"28090169",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-366"],
				"linkedFeatures":["621554"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:9160"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
			"bindingSites":[
				{
				"id":"32859240",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["26420575"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6552438"}],
		"expansion":{"id":"14","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"13955027",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-366","4-63"],
				"linkedFeatures":["30220215"]
				},
				{
				"id":"31278342",
				"name":"ssdna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-467"],
				"linkedFeatures":["31371980"]
				},
				{
				"id":"28090169",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-366"],
				"linkedFeatures":["621554"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"30220215",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-366","4-63"],
				"linkedFeatures":["13955027"]
				},
				{
				"id":"3445841",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-366"],
				"linkedFeatures":["11032619"]
				},
				{
				"id":"26420575",
				"name":"ssdna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-467"],
				"linkedFeatures":["32859240"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAVVKCKPTSPGRRHVVKVVNPELHKGKPFAPLLEKNSKSGGRNNNGRITTRHIGGGHKQAYRIVDFKRNKDGIPAVVERLEYDPNRSANIALVLYKDGERRYILAPKGLKAGDQIQSGVDAAIKPGNTLPMRNIPVGSTVHNVEMKPGKGGQLARSAGTYVQIVARDGAYVTLRLRSGEMRKVEADCRATLGEVGNAEHMLRVLGKAGAARWRGVRPTVRGTAMNPVDHPHGGGEGRNFGKHPVTPWGVQTKGKKTRSNKRTDKFIVRRRSK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P60422"},
		"label":"rl2_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6553156"}],
		"expansion":{"id":"15","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"24807414",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-467"],
				"linkedFeatures":["24390217"]
				},
				{
				"id":"25442037",
				"name":"l2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-129"],
				"linkedFeatures":["20204050"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P60422"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"20204050",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["60-273"],
				"linkedFeatures":["25442037"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6553156"}],
		"expansion":{"id":"15","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"24807414",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-467"],
				"linkedFeatures":["24390217"]
				},
				{
				"id":"25442037",
				"name":"l2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-129"],
				"linkedFeatures":["20204050"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"24390217",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["24807414"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MNTPAQLSLPLYLPDDETFASFWPGDNSSLLAALQNVLRQEHSGYIYLWAREGAGRSHLLHAACAELSQRGDAVGYVPLDKRTWFVPEVLDGMEHLSLVCIDNIECIAGDELWEMAIFDLYNRILESGKTRLLITGDRPPRQLNLGLPDLASRLDWGQIYKLQPLSDEDKLQALQLRARLRGFELPEDVGRFLLKRLDREMRTLFMTLDQLDRASITAQRKLTIPFVKEILKL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P69931"},
		"label":"hda_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-6656972"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P69931"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32185281",
				"name":"dnan binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["4-13"],
				"linkedFeatures":["7020009"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0A988"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"7020009",
				"name":"hda binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-366"],
				"linkedFeatures":["32185281"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:16761"},
		"label":"adp"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6554171"}],
		"expansion":{"id":"16","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"7916809",
				"name":"hda binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-467"],
				"linkedFeatures":["14493398"]
				},
				{
				"id":"18918674",
				"name":"adp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-467"],
				"linkedFeatures":["4356959"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:16761"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
			"bindingSites":[
				{
				"id":"11644050",
				"name":"hda binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["12102067"]
				},
				{
				"id":"4356959",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["18918674"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6554171"}],
		"expansion":{"id":"16","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"7916809",
				"name":"hda binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-467"],
				"linkedFeatures":["14493398"]
				},
				{
				"id":"18918674",
				"name":"adp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-467"],
				"linkedFeatures":["4356959"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P69931"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"14493398",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-233"],
				"linkedFeatures":["7916809"]
				},
				{
				"id":"12102067",
				"name":"adp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-233"],
				"linkedFeatures":["11644050"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0681","name":"double stranded deoxyribonucleic acid"},
		"organism":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
		"identifier":{"db":"chebi","id":"chebi:4705"},
		"label":"dsdna_generic_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1dps"},{"db":"intact","id":"EBI-6558261"}],
		"expansion":{"id":"17","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26037265",
				"name":"1-129",
				"type":{"id":"MI:0429","name":"necessary binding region"},
				"sequenceData":["1-129"],
				"linkedFeatures":["24976113"]
				},
				{
				"id":"7599671",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-467"],
				"linkedFeatures":["19514444"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"chebi:4705"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"18250496",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["15027179"]
				},
				{
				"id":"19514444",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["7599671"]
				},
				{
				"id":"31148378",
				"name":"dps binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["28105899"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1dps"},{"db":"intact","id":"EBI-6558261"}],
		"expansion":{"id":"17","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26037265",
				"name":"1-129",
				"type":{"id":"MI:0429","name":"necessary binding region"},
				"sequenceData":["1-129"],
				"linkedFeatures":["24976113"]
				},
				{
				"id":"7599671",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-467"],
				"linkedFeatures":["19514444"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"30114377",
				"name":"1-129",
				"type":{"id":"MI:0429","name":"necessary binding region"},
				"sequenceData":["1-129"],
				"linkedFeatures":["30847910"]
				},
				{
				"id":"15027179",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-467"],
				"linkedFeatures":["18250496"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSTAKLVKSKATNLLYTRNDVSDSEKKATVELLNRQVIQFIDLSLITKQAHWNMRGANFIAVHEMLDGFRTALIDHLDTMAERAVQLGGVALGTTQVINSKTPLKSYPLDIHNVQDHLKELADRYAIVANDVRKAIGEAKDDDTADILTAASRDLDKFLWFIESNIE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0ABT2"},
		"label":"dps_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1dps"},{"db":"intact","id":"EBI-6558261"}],
		"expansion":{"id":"17","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26037265",
				"name":"1-129",
				"type":{"id":"MI:0429","name":"necessary binding region"},
				"sequenceData":["1-129"],
				"linkedFeatures":["24976113"]
				},
				{
				"id":"7599671",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-467"],
				"linkedFeatures":["19514444"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0ABT2"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"30847910",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-167"],
				"linkedFeatures":["30114377"]
				},
				{
				"id":"24976113",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-167"],
				"linkedFeatures":["26037265"]
				},
				{
				"id":"28105899",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-167"],
				"linkedFeatures":["31148378"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSSRVLTPDVVGIDALVHDHQTVLAKAEGGVVAVFANNAPAFYAVTPARLAELLALEEKLARPGSDVALDDQLYQEPQAAPVAVPMGKFAMYPDWQPDADFIRLAALWGVALREPVTTEELASFIAYWQAEGKVFHHVQWQQKLARSLQIGRASNGGLPKRDVNTVSEPDSQIPPGFRG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A8J2"},
		"label":"dnat_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 3.6.4.12"},{"db":"intact","id":"EBI-6655050"}],
		"expansion":{"id":"18","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACB0"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11309485",
				"name":"dnac binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-471"],
				"linkedFeatures":["26220826"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0A8J2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MPVAHVALPVPLPRTFDYLLPEGMTVKAGCRVRVPFGKQQERIGIVVSVSDASELPLNELKAVVEVLDSEPVFTHSVWRLLLWAADYYHHPIGDVLFHALPILLRQGRPAANAPMWYWFATEQGQAVDLNSLKRSPKQQQALAALRQGKIWRDQVATLEFNDAALQALRKKGLCDLASETPEFSDWRTNYAVSGERLRLNTEQATAVGAIHSAADTFSAWLLAGVTGSGKTEVYLSVLENVLAQGKQALVMVPEIGLTPQTIARFRERFNAPVEVLHSGLNDSERLSAWLKAKNGEAAIVIGTRSALFTPFKNLGVIVIDEEHDSSYKQQEGWRYHARDLAVYRAHSEQIPIILGSATPALETLCNVQQKKYRLLRLTRRAGNARPAIQHVLDLKGQKVQAGLAPALITRMRQHLQADNQVILFLNRRGFAPALLCHDCGWIAECPRCDHYYTLHQAQHHLRCHHCDSQRPVPRQCPSCGSTHLVPVGLGTEQLEQTLAPLFPGVPISRIDRDTTSRKGALEQQLAEVHRGGARILIGTQMLAKGHHFPDVTLVALLDVDGALFSADFRSAERFAQLYTQVAGRAGRAGKQGEVVLQTHHPEHPLLQTLLYKGYDAFAEQALAERRMMQLPPWTSHVIVRAEDHNNQHAPLFLQQLRNLILSSPLADEKLWVLGPVPALAPKRGGRWRWQILLQHPSRVRLQHIINGTLALINTIPDSRKVKWVLDVDPIEG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P17888"},
		"label":"pria_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 3.6.4.12"},{"db":"intact","id":"EBI-6655050"}],
		"expansion":{"id":"18","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACB0"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11309485",
				"name":"dnac binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-471"],
				"linkedFeatures":["26220826"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P17888"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 3.6.4.12"},{"db":"intact","id":"EBI-6655050"}],
		"expansion":{"id":"18","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACB0"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11309485",
				"name":"dnac binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-471"],
				"linkedFeatures":["26220826"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AEF0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26220826",
				"name":"dnab binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-245"],
				"linkedFeatures":["11309485"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKTALLLEKLEGQLATLRQRCAPVSQFATLSARFDRHLFQTRATTLQACLDEAGDNLAALRHAVEQQQLPQVAWLAEHLAAQLEAIAREASAWSLREWDSAPPKIARWQRKRIQHQDFERRLREMVAERRARLARVTDLVEQQTLHREVEAYEARLARCRHALEKIENRLARLTR",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P23862"},
		"label":"pric_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 3.6.4.12"},{"db":"intact","id":"EBI-6655050"}],
		"expansion":{"id":"18","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACB0"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11309485",
				"name":"dnac binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-471"],
				"linkedFeatures":["26220826"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P23862"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 3.6.4.12"},{"db":"intact","id":"EBI-6654974"}],
		"expansion":{"id":"19","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACB0"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"23081249",
				"name":"dnac binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-471"],
				"linkedFeatures":["3772175"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AEF0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"3772175",
				"name":"dnab binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-245"],
				"linkedFeatures":["23081249"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 3.6.4.12"},{"db":"intact","id":"EBI-6654974"}],
		"expansion":{"id":"19","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACB0"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"23081249",
				"name":"dnac binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-471"],
				"linkedFeatures":["3772175"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MRLNPGQQQAVEFVTGPCLVLAGAGSGKTRVITNKIAHLIRGCGYQARHIAAVTFTNKAAREMKERVGQTLGRKEARGLMISTFHTLGLDIIKREYAALGMKANFSLFDDTDQLALLKELTEGLIEDDKVLLQQLISTISNWKNDLKTPSQAAASAIGERDRIFAHCYGLYDAHLKACNVLDFDDLILLPTLLLQRNEEVRKRWQNKIRYLLVDEYQDTNTSQYELVKLLVGSRARFTVVGDDDQSIYSWRGARPQNLVLLSQDFPALKVIKLEQNYRSSGRILKAANILIANNPHVFEKRLFSELGYGAELKVLSANNEEHEAERVTGELIAHHFVNKTQYKDYAILYRGNHQSRVFEKFLMQNRIPYKISGGTSFFSRPEIKDLLAYLRVLTNPDDDSAFLRIVNTPKREIGPATLKKLGEWAMTRNKSMFTASFDMGLSQTLSGRGYEALTRFTHWLAEIQRLAEREPIAAVRDLIHGMDYESWLYETSPSPKAAEMRMKNVNQLFSWMTEMLEGSELDEPMTLTQVVTRFTLRDMMERGESEEELDQVQLMTLHASKGLEFPYVYMVGMEEGFLPHQSSIDEDNIDEERRLAYVGITRAQKELTFTLCKERRQYGELVRPEPSRFLLELPQDDLIWEQERKVVSAEERMQKGQSHLANLKAMMAAKRGK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P09980"},
		"label":"rep_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 3.6.4.12"},{"db":"intact","id":"EBI-6655066"}],
		"expansion":{"id":"20","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P09980"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0ACB0"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"14625570",
				"name":"dnac binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-471"],
				"linkedFeatures":["25740704"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 3.6.4.12"},{"db":"intact","id":"EBI-6655066"}],
		"expansion":{"id":"20","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P09980"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P23862"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 3.6.4.12"},{"db":"intact","id":"EBI-6655066"}],
		"expansion":{"id":"20","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P09980"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AEF0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"25740704",
				"name":"dnab binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-245"],
				"linkedFeatures":["14625570"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MTNRLVLSGTVCRAPLRKVSPSGIPHCQFVLEHRSVQEEAGFHRQAWCQMPVIVSGHENQAITHSITVGSRITVQGFISCHKAKNGLSKMVLHAEQIELIDSGD",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P07013"},
		"label":"prib_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 3.6.4.12"},{"db":"intact","id":"EBI-6655020"}],
		"expansion":{"id":"21","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P17888"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P07013"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 3.6.4.12"},{"db":"intact","id":"EBI-6655020"}],
		"expansion":{"id":"21","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P17888"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0A8J2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 3.6.4.12"},{"db":"intact","id":"EBI-6655020"}],
		"expansion":{"id":"21","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P17888"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0ACB0"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"6728169",
				"name":"dnac binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-471"],
				"linkedFeatures":["1902696"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 3.6.4.12"},{"db":"intact","id":"EBI-6655020"}],
		"expansion":{"id":"21","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P17888"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AEF0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"1902696",
				"name":"dnab binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-245"],
				"linkedFeatures":["6728169"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0681","name":"double stranded deoxyribonucleic acid"},
		"organism":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
		"identifier":{"db":"intact","id":"EBI-6672067"},
		"label":"hemimeth_dna_random"
	},
	{
		"object":"interactor",
		"sequence":"MKTIEVDDELYSYIASHTKHIGESASDILRRMLKFSAASQPAAPVTKEVRVASPAIVEAKPVKTIKDKVRAMRELLLSDEYAEQKRAVNRFMLLLSTLYSLDAQAFAEATESLHGRTRVYFAADEQTLLKNGNQTKPKHVPGTPYWVITNTNTGRKCSMIEHIMQSMQFPAELIEKVCGTI",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0AFY8"},
		"label":"seqa_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1xrx"},{"db":"intact","id":"EBI-6672189"},{"db":"wwpdb","id":"1lrr"}],
		"expansion":{"id":"22","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-6672067"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AFY8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1xrx"},{"db":"intact","id":"EBI-6672189"},{"db":"wwpdb","id":"1lrr"}],
		"expansion":{"id":"22","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-6672067"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AFY8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MTKSELIERLATQQSHIPAKTVEDAVKEMLEHMASTLAQGERIEIRGFGSFSLHYRAPRTGRNPKTGDKVELEGKYVPHFKPGKELRDRANIYG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A6Y1"},
		"label":"ihfb_ecoli"
	},
	{
		"object":"interactor",
		"sequence":"MALTKAEMSEYLFDKLGLSKRDAKELVELFFEEIRRALENGEQVKLSGFGNFDLRDKNQRPGRNPKTGEDIPITARRVVTFRPGQKLKSRVENASPKDE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A6X7"},
		"label":"ihfa_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"2ht0"},{"db":"wwpdb","id":"1ihf"},{"db":"intact","id":"EBI-6676075"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A6Y1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"1246919",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-94"]
				},
				{
				"id":"19012316",
				"name":"ihfa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-94"],
				"linkedFeatures":["1147890"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0A6X7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"1147890",
				"name":"ihfb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-99"],
				"linkedFeatures":["19012316"]
				},
				{
				"id":"32358502",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-99"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MNKTQLIDVIAEKAELSKTQAKAALESTLAAITESLKEGDAVQLVGFGTFKVNHRAERTGRNPQTGKEIKIAAANVPAFVSGKALKDAVK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0ACF0"},
		"label":"dbha_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6691541"}],
		"expansion":{"id":"23","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACF0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32669195",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-90"],
				"linkedFeatures":["19996895"]
				},
				{
				"id":"6625610",
				"name":"dbhb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-90"],
				"linkedFeatures":["23028248"]
				},
				{
				"id":"18953506",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-90"],
				"linkedFeatures":["19360917"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"chebi:4705"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"21618984",
				"name":"dbhb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["22888216"]
				},
				{
				"id":"14252749",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["866708"]
				},
				{
				"id":"19360917",
				"name":"dbha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["18953506"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6691541"}],
		"expansion":{"id":"23","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACF0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32669195",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-90"],
				"linkedFeatures":["19996895"]
				},
				{
				"id":"6625610",
				"name":"dbhb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-90"],
				"linkedFeatures":["23028248"]
				},
				{
				"id":"18953506",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-90"],
				"linkedFeatures":["19360917"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19996895",
				"name":"dbha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-129"],
				"linkedFeatures":["32669195"]
				},
				{
				"id":"866708",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-467"],
				"linkedFeatures":["14252749"]
				},
				{
				"id":"4142864",
				"name":"dbhb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-467"],
				"linkedFeatures":["3674920"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MNKSQLIDKIAAGADISKAAAGRALDAIIASVTESLKEGDDVALVGFGTFAVKERAARTGRNPQTGKEITIAAAKVPSFRAGKALKDAVN",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0ACF4"},
		"label":"dbhb_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6691541"}],
		"expansion":{"id":"23","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACF0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32669195",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-90"],
				"linkedFeatures":["19996895"]
				},
				{
				"id":"6625610",
				"name":"dbhb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-90"],
				"linkedFeatures":["23028248"]
				},
				{
				"id":"18953506",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-90"],
				"linkedFeatures":["19360917"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0ACF4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"23028248",
				"name":"dbha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-90"],
				"linkedFeatures":["6625610"]
				},
				{
				"id":"22888216",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-90"],
				"linkedFeatures":["21618984"]
				},
				{
				"id":"3674920",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-90"],
				"linkedFeatures":["4142864"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6691075"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACF4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0ACF4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6691570"}],
		"expansion":{"id":"24","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACF0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"24232941",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-90"],
				"linkedFeatures":["32912048"]
				},
				{
				"id":"7984988",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-90"],
				"linkedFeatures":["19526113"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19526113",
				"name":"dbha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-129"],
				"linkedFeatures":["7984988"]
				},
				{
				"id":"13038222",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-467"],
				"linkedFeatures":["22957609"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6691570"}],
		"expansion":{"id":"24","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACF0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"24232941",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-90"],
				"linkedFeatures":["32912048"]
				},
				{
				"id":"7984988",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-90"],
				"linkedFeatures":["19526113"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"chebi:4705"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22957609",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["13038222"]
				},
				{
				"id":"32912048",
				"name":"dbha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["24232941"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6691045"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACF0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0ACF0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"2o97"},{"db":"intact","id":"EBI-6676762"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACF0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"6122387",
				"name":"dbhb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-90"],
				"linkedFeatures":["21081924"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0ACF4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"21081924",
				"name":"dbha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-90"],
				"linkedFeatures":["6122387"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6819726"}],
		"expansion":{"id":"25","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22665101",
				"name":"dsdna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-467"],
				"linkedFeatures":["22449811"]
				},
				{
				"id":"27952062",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-366"],
				"linkedFeatures":["28260091"]
				},
				{
				"id":"4364960",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["4-63","164-366"],
				"linkedFeatures":["11907532"]
				},
				{
				"id":"11268473",
				"name":"diaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-108"],
				"linkedFeatures":["8021045"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"28260091",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["27952062"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6819726"}],
		"expansion":{"id":"25","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22665101",
				"name":"dsdna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-467"],
				"linkedFeatures":["22449811"]
				},
				{
				"id":"27952062",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-366"],
				"linkedFeatures":["28260091"]
				},
				{
				"id":"4364960",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["4-63","164-366"],
				"linkedFeatures":["11907532"]
				},
				{
				"id":"11268473",
				"name":"diaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-108"],
				"linkedFeatures":["8021045"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"chebi:4705"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22449811",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["22665101"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6819726"}],
		"expansion":{"id":"25","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22665101",
				"name":"dsdna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-467"],
				"linkedFeatures":["22449811"]
				},
				{
				"id":"27952062",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-366"],
				"linkedFeatures":["28260091"]
				},
				{
				"id":"4364960",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["4-63","164-366"],
				"linkedFeatures":["11907532"]
				},
				{
				"id":"11268473",
				"name":"diaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-108"],
				"linkedFeatures":["8021045"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"21552134",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["6633633"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6819726"}],
		"expansion":{"id":"25","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22665101",
				"name":"dsdna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-467"],
				"linkedFeatures":["22449811"]
				},
				{
				"id":"27952062",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-366"],
				"linkedFeatures":["28260091"]
				},
				{
				"id":"4364960",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["4-63","164-366"],
				"linkedFeatures":["11907532"]
				},
				{
				"id":"11268473",
				"name":"diaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-108"],
				"linkedFeatures":["8021045"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P66817"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"8021045",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["c-c"],
				"linkedFeatures":["11268473"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6819726"}],
		"expansion":{"id":"25","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22665101",
				"name":"dsdna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-467"],
				"linkedFeatures":["22449811"]
				},
				{
				"id":"27952062",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-366"],
				"linkedFeatures":["28260091"]
				},
				{
				"id":"4364960",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["4-63","164-366"],
				"linkedFeatures":["11907532"]
				},
				{
				"id":"11268473",
				"name":"diaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-108"],
				"linkedFeatures":["8021045"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"6633633",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-366"],
				"linkedFeatures":["21552134"]
				},
				{
				"id":"23657808",
				"name":"dsdna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-467"],
				"linkedFeatures":["30322876"]
				},
				{
				"id":"11874720",
				"name":"diaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-108"],
				"linkedFeatures":["30217018"]
				},
				{
				"id":"11907532",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["4-63","164-366"],
				"linkedFeatures":["4364960"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6819726"}],
		"expansion":{"id":"25","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22665101",
				"name":"dsdna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-467"],
				"linkedFeatures":["22449811"]
				},
				{
				"id":"27952062",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-366"],
				"linkedFeatures":["28260091"]
				},
				{
				"id":"4364960",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["4-63","164-366"],
				"linkedFeatures":["11907532"]
				},
				{
				"id":"11268473",
				"name":"diaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-108"],
				"linkedFeatures":["8021045"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P66817"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"30217018",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["c-c"],
				"linkedFeatures":["11874720"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6819726"}],
		"expansion":{"id":"25","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22665101",
				"name":"dsdna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-467"],
				"linkedFeatures":["22449811"]
				},
				{
				"id":"27952062",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-366"],
				"linkedFeatures":["28260091"]
				},
				{
				"id":"4364960",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["4-63","164-366"],
				"linkedFeatures":["11907532"]
				},
				{
				"id":"11268473",
				"name":"diaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-108"],
				"linkedFeatures":["8021045"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"chebi:4705"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"30322876",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["23657808"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSEALKILNNIRTLRAQARECTLETLEEMLEKLEVVVNERREEESAAAAEVEERTRKLQQYREMLIADGIDPNELLNSLAAVKSGTKAKRAQRPAKYSYVDENGETKTWTGQGRTPAVIKKAMDEQGKSLDDFLIKQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0ACF8"},
		"label":"hns_ecoli"
	},
	{
		"object":"interactor",
		"sequence":"MSEKPLTKTDYLMRLRRCQTIDTLERVIEKNKYELSDNELAVFYSAADHRLAELTMNKLYDKIPSSVWKFIR",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0ACE3"},
		"label":"hha_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6923225"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACF8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11101845",
				"name":"hha binding site",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["1-47"],
				"linkedFeatures":["26083626"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0ACE3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26083626",
				"name":"hns binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-72"],
				"linkedFeatures":["11101845"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1ni8"},{"db":"intact","id":"EBI-6859852"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACF8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32407202",
				"name":"dimerisation domain",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["21-46"]
				},
				{
				"id":"12312184",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["2-46","80-96","110-117"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0ACF8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"703106",
				"name":"dimerisation domain",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["21-46"]
				},
				{
				"id":"5950361",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["2-46","80-96","110-117"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-6860189"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACF8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"15523144",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["2-46","80-96","110-117"]
				},
				{
				"id":"11773054",
				"name":"dimerisation domain",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["21-46"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0ACF8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32799415",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["2-46","80-96","110-117"]
				},
				{
				"id":"27568457",
				"name":"dimerisation domain",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["21-46"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MTVQDYLLKFRKISSLESLEKLYDHLNYTLTDDQELINMYRAADHRRAELVSGGRLFDLGQVPKSVWHYVQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P64467"},
		"label":"cnu_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6923348"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P64467"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"23460221",
				"name":"hns binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-71"],
				"linkedFeatures":["31364570"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0ACF8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"31364570",
				"name":"cnu binding site",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["1-47"],
				"linkedFeatures":["23460221"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1l0v"},{"db":"intact","id":"EBI-6867830"},{"db":"intenz","id":"EC 1.3.5.4"}],
		"expansion":{"id":"26","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:17594"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"4211757",
				"name":"frdd binding region 1",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["20706783"]
				},
				{
				"id":"25889346",
				"name":"frdd binding region 2",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21930498"]
				},
				{
				"id":"23999494",
				"name":"frdc binding region 1",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1682954"]
				},
				{
				"id":"32588489",
				"name":"frdc binding region 2",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["5754735"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:16238"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"15960266",
				"name":"frda binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["10076610"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1l0v"},{"db":"intact","id":"EBI-6867830"},{"db":"intenz","id":"EC 1.3.5.4"}],
		"expansion":{"id":"26","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:17594"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"4211757",
				"name":"frdd binding region 1",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["20706783"]
				},
				{
				"id":"25889346",
				"name":"frdd binding region 2",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21930498"]
				},
				{
				"id":"23999494",
				"name":"frdc binding region 1",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1682954"]
				},
				{
				"id":"32588489",
				"name":"frdc binding region 2",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["5754735"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:33725"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"8370246",
				"name":"frdb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["18555885"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1l0v"},{"db":"intact","id":"EBI-6867830"},{"db":"intenz","id":"EC 1.3.5.4"}],
		"expansion":{"id":"26","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:17594"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"4211757",
				"name":"frdd binding region 1",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["20706783"]
				},
				{
				"id":"25889346",
				"name":"frdd binding region 2",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21930498"]
				},
				{
				"id":"23999494",
				"name":"frdc binding region 1",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1682954"]
				},
				{
				"id":"32588489",
				"name":"frdc binding region 2",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["5754735"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:47402"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"13872796",
				"name":"frdb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["23898661"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1l0v"},{"db":"intact","id":"EBI-6867830"},{"db":"intenz","id":"EC 1.3.5.4"}],
		"expansion":{"id":"26","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:17594"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"4211757",
				"name":"frdd binding region 1",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["20706783"]
				},
				{
				"id":"25889346",
				"name":"frdd binding region 2",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21930498"]
				},
				{
				"id":"23999494",
				"name":"frdc binding region 1",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1682954"]
				},
				{
				"id":"32588489",
				"name":"frdc binding region 2",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["5754735"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:33739"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"18246412",
				"name":"frdb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["13497568"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MQTFQADLAIVGAGGAGLRAAIAAAQANPNAKIALISKVYPMRSHTVAAEGGSAAVAQDHDSFEYHFHDTVAGGDWLCEQDVVDYFVHHCPTEMTQLELWGCPWSRRPDGSVNVRRFGGMKIERTWFAADKTGFHMLHTLFQTSLQFPQIQRFDEHFVLDILVDDGHVRGLVAMNMMEGTLVQIRANAVVMATGGAGRVYRYNTNGGIVTGDGMGMALSHGVPLRDMEFVQYHPTGLPGSGILMTEGCRGEGGILVNKNGYRYLQDYGMGPETPLGEPKNKYMELGPRDKVSQAFWHEWRKGNTISTPRGDVVYLDLRHLGEKKLHERLPFICELAKAYVGVDPVKEPIPVRPTAHYTMGGIETDQNCETRIKGLFAVGECSSVGLHGANRLGSNSLAELVVFGRLAGEQATERAATAGNGNEAAIEAQAAGVEQRLKDLVNQDGGENWAKIRDEMGLAMEEGCGIYRTPELMQKTIDKLAELQERFKRVRITDTSSVFNTDLLYTIELGHGLNVAECMAHSAMARKESRGAHQRLDEGCTERDDVNFLKHTLAFRDADGTTRLEYSDVKITTLPPAKRVYGGEADAADKAEAANKKEKANG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P00363"},
		"label":"frda_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1l0v"},{"db":"intact","id":"EBI-6867830"},{"db":"intenz","id":"EC 1.3.5.4"}],
		"expansion":{"id":"26","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:17594"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"4211757",
				"name":"frdd binding region 1",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["20706783"]
				},
				{
				"id":"25889346",
				"name":"frdd binding region 2",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21930498"]
				},
				{
				"id":"23999494",
				"name":"frdc binding region 1",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1682954"]
				},
				{
				"id":"32588489",
				"name":"frdc binding region 2",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["5754735"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P00363"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"10076610",
				"name":"fad binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-602"],
				"linkedFeatures":["15960266"]
				},
				{
				"id":"25671464",
				"name":"frdb binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-602"],
				"linkedFeatures":["17413194"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAEMKNLKIEVVRYNPEVDTAPHSAFYEVPYDATTSLLDALGYIKDNLAPDLSYRWSCRMAICGSCGMMVNNVPKLACKTFLRDYTDGMKVEALANFPIERDLVVDMTHFIESLEAIKPYIIGNSRTADQGTNIQTPAQMAKYHQFSGCINCGLCYAACPQFGLNPEFIGPAAITLAHRYNEDSRDHGKKERMAQLNSQNGVWSCTFVGYCSEVCPKHVDPAAAIQQGKVESSKDFLIATLKPR",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0AC47"},
		"label":"frdb_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1l0v"},{"db":"intact","id":"EBI-6867830"},{"db":"intenz","id":"EC 1.3.5.4"}],
		"expansion":{"id":"26","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:17594"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"4211757",
				"name":"frdd binding region 1",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["20706783"]
				},
				{
				"id":"25889346",
				"name":"frdd binding region 2",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21930498"]
				},
				{
				"id":"23999494",
				"name":"frdc binding region 1",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1682954"]
				},
				{
				"id":"32588489",
				"name":"frdc binding region 2",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["5754735"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AC47"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17413194",
				"name":"frda binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-244"],
				"linkedFeatures":["25671464"]
				},
				{
				"id":"1806819",
				"name":"frdc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-244"],
				"linkedFeatures":["460693"]
				},
				{
				"id":"25352358",
				"name":"frdd binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-244"],
				"linkedFeatures":["22919587"]
				},
				{
				"id":"13497568",
				"name":"2fe-2s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-244"],
				"linkedFeatures":["18246412"]
				},
				{
				"id":"23898661",
				"name":"3fe-4s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-244"],
				"linkedFeatures":["13872796"]
				},
				{
				"id":"18555885",
				"name":"4fe-4s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-244"],
				"linkedFeatures":["8370246"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MINPNPKRSDEPVFWGLFGAGGMWSAIIAPVMILLVGILLPLGLFPGDALSYERVLAFAQSFIGRVFLFLMIVLPLWCGLHRMHHAMHDLKIHVPAGKWVFYGLAAILTVVTLIGVVTI",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A8Q3"},
		"label":"frdd_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1l0v"},{"db":"intact","id":"EBI-6867830"},{"db":"intenz","id":"EC 1.3.5.4"}],
		"expansion":{"id":"26","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:17594"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"4211757",
				"name":"frdd binding region 1",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["20706783"]
				},
				{
				"id":"25889346",
				"name":"frdd binding region 2",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21930498"]
				},
				{
				"id":"23999494",
				"name":"frdc binding region 1",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1682954"]
				},
				{
				"id":"32588489",
				"name":"frdc binding region 2",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["5754735"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0A8Q3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"4629244",
				"name":"frdc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-119"],
				"linkedFeatures":["24546062"]
				},
				{
				"id":"22919587",
				"name":"frdb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-119"],
				"linkedFeatures":["25352358"]
				},
				{
				"id":"20706783",
				"name":"quinol binding region 1",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-119"],
				"linkedFeatures":["4211757"]
				},
				{
				"id":"21930498",
				"name":"quinol binding region 2",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-119"],
				"linkedFeatures":["25889346"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MTTKRKPYVRPMTSTWWKKLPFYRFYMLREGTAVPAVWFSIELIFGLFALKNGPEAWAGFVDFLQNPVIVIINLITLAAALLHTKTWFELAPKAANIIVKDEKMGPEPIIKSLWAVTVVATIVILFVALYW",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A8Q0"},
		"label":"frdc_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1l0v"},{"db":"intact","id":"EBI-6867830"},{"db":"intenz","id":"EC 1.3.5.4"}],
		"expansion":{"id":"26","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:17594"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"4211757",
				"name":"frdd binding region 1",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["20706783"]
				},
				{
				"id":"25889346",
				"name":"frdd binding region 2",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21930498"]
				},
				{
				"id":"23999494",
				"name":"frdc binding region 1",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1682954"]
				},
				{
				"id":"32588489",
				"name":"frdc binding region 2",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["5754735"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0A8Q0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"460693",
				"name":"frdb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-131"],
				"linkedFeatures":["1806819"]
				},
				{
				"id":"1682954",
				"name":"quinol binding region 1",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-131"],
				"linkedFeatures":["23999494"]
				},
				{
				"id":"24546062",
				"name":"frdd binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-131"],
				"linkedFeatures":["4629244"]
				},
				{
				"id":"5754735",
				"name":"quinol binding region 2",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-131"],
				"linkedFeatures":["32588489"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDVSRRQFFKICAGGMAGTTVAALGFAPKQALAQARNYKLLRAKEIRNTCTYCSVGCGLLMYSLGDGAKNAREAIYHIEGDPDHPVSRGALCPKGAGLLDYVNSENRLRYPEYRAPGSDKWQRISWEEAFSRIAKLMKADRDANFIEKNEQGVTVNRWLSTGMLCASGASNETGMLTQKFARSLGMLAVDNQARVUHGPTVASLAPTFGRGAMTNHWVDIKNANVVMVMGGNAAEAHPVGFRWAMEAKNNNDATLIVVDPRFTRTASVADIYAPIRSGTDITFLSGVLRYLIENNKINAEYVKHYTNASLLVRDDFAFEDGLFSGYDAEKRQYDKSSWNYQLDENGYAKRDETLTHPRCVWNLLKEHVSRYTPDVVENICGTPKADFLKVCEVLASTSAPDRTTTFLYALGWTQHTVGAQNIRTMAMIQLLLGNMGMAGGGVNALRGHSNIQGLTDLGLLSTSLPGYLTLPSEKQVDLQSYLEANTPKATLADQVNYWSNYPKFFVSLMKSFYGDAAQKENNWGYDWLPKWDQTYDVIKYFNMMDEGKVTGYFCQGFNPVASFPDKNKVVSCLSKLKYMVVIDPLVTETSTFWQNHGESNDVDPASIQTEVFRLPSTCFAEEDGSIANSGRWLQWHWKGQDAPGEARNDGEILAGIYHHLRELYQSEGGKGVEPLMKMSWNYKQPHEPQSDEVAKENNGYALEDLYDANGVLIAKKGQLLSSFAHLRDDGTTASSCWIYTGSWTEQGNQMANRDNSDPSGLGNTLGWAWAWPLNRRVLYNRASADINGKPWDPKRMLIQWNGSKWTGNDIPDFGNAAPGTPTGPFIMQPEGMGRLFAINKMAEGPFPEHYEPIETPLGTNPLHPNVVSNPVVRLYEQDALRMGKKEQFPYVGTTYRLTEHFHTWTKHALLNAIAQPEQFVEISETLAAAKGINNGDRVTVSSKRGFIRAVAVVTRRLKPLNVNGQQVETVGIPIHWGFEGVARKGYIANTLTPNVGDANSQTPEYKAFLVNIEKA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P24183"},
		"label":"fdng_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1kqg"},{"db":"intact","id":"EBI-6894347"},{"db":"intenz","id":"EC 1.1.5.6"},{"db":"wwpdb","id":"1kqf"}],
		"expansion":{"id":"27","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P24183"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27480106",
				"name":"fdnh binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["14953102"]
				},
				{
				"id":"27646546",
				"name":"4fe-4s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["27287337"]
				},
				{
				"id":"29865472",
				"name":"mo-bismgd binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["8240900"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:33725"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27287337",
				"name":"fdng binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["27646546"]
				},
				{
				"id":"25668389",
				"name":"fdnh binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["32839483"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSKSKMIVRTKFIDRACHWTVVICFFLVALSGISFFFPTLQWLTQTFGTPQMGRILHPFFGIAIFVALMFMFVRFVHHNIPDKKDIPWLLNIVEVLKGNEHKVADVGKYNAGQKMMFWSIMSMIFVLLVTGVIIWRPYFAQYFPMQVVRYSLLIHAAAGIILIHAILIHMYMAFWVKGSIKGMIEGKVSRRWAKKHHPRWYREIEKAEAKKESEEGI",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0AEK7"},
		"label":"fdni_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1kqg"},{"db":"intact","id":"EBI-6894347"},{"db":"intenz","id":"EC 1.1.5.6"},{"db":"wwpdb","id":"1kqf"}],
		"expansion":{"id":"27","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P24183"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27480106",
				"name":"fdnh binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["14953102"]
				},
				{
				"id":"27646546",
				"name":"4fe-4s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["27287337"]
				},
				{
				"id":"29865472",
				"name":"mo-bismgd binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["8240900"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AEK7"},
			"bioRole":{"id":"MI:0684","name":"ancillary"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"29896653",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-217"],
				"linkedFeatures":["28987689"]
				},
				{
				"id":"19293667",
				"name":"fdnh binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-217"],
				"linkedFeatures":["32201023"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1kqg"},{"db":"intact","id":"EBI-6894347"},{"db":"intenz","id":"EC 1.1.5.6"},{"db":"wwpdb","id":"1kqf"}],
		"expansion":{"id":"27","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P24183"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27480106",
				"name":"fdnh binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["14953102"]
				},
				{
				"id":"27646546",
				"name":"4fe-4s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["27287337"]
				},
				{
				"id":"29865472",
				"name":"mo-bismgd binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["8240900"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:30413"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"28987689",
				"name":"fdni binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["29896653"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1kqg"},{"db":"intact","id":"EBI-6894347"},{"db":"intenz","id":"EC 1.1.5.6"},{"db":"wwpdb","id":"1kqf"}],
		"expansion":{"id":"27","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P24183"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27480106",
				"name":"fdnh binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["14953102"]
				},
				{
				"id":"27646546",
				"name":"4fe-4s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["27287337"]
				},
				{
				"id":"29865472",
				"name":"mo-bismgd binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["8240900"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:61145"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"8240900",
				"name":"fdng binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["29865472"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1kqg"},{"db":"intact","id":"EBI-6894347"},{"db":"intenz","id":"EC 1.1.5.6"},{"db":"wwpdb","id":"1kqf"}],
		"expansion":{"id":"27","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P24183"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27480106",
				"name":"fdnh binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["14953102"]
				},
				{
				"id":"27646546",
				"name":"4fe-4s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["27287337"]
				},
				{
				"id":"29865472",
				"name":"mo-bismgd binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["8240900"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:36141"},
			"bioRole":{"id":"MI:0580","name":"electron acceptor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"3162711",
				"name":"fdnh binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["5465352"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAMETQDIIKRSATNSITPPSQVRDYKAEVAKLIDVSTCIGCKACQVACSEWNDIRDEVGHCVGVYDNPADLSAKSWTVMRFSETEQNGKLEWLIRKDGCMHCEDPGCLKACPSAGAIIQYANGIVDFQSENCIGCGYCIAGCPFNIPRLNKEDNRVYKCTLCVDRVSVGQEPACVKTCPTGAIHFGTKKEMLELAEQRVAKLKARGYEHAGVYNPEGVGGTHVMYVLHHADQPELYHGLPKDPKIDTSVSLWKGALKPLAAAGFIATFAGLIFHYIGIGPNKEVDDDEEDHHE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0AAJ3"},
		"label":"fdnh_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1kqg"},{"db":"intact","id":"EBI-6894347"},{"db":"intenz","id":"EC 1.1.5.6"},{"db":"wwpdb","id":"1kqf"}],
		"expansion":{"id":"27","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P24183"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27480106",
				"name":"fdnh binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["14953102"]
				},
				{
				"id":"27646546",
				"name":"4fe-4s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["27287337"]
				},
				{
				"id":"29865472",
				"name":"mo-bismgd binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["8240900"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AAJ3"},
			"bioRole":{"id":"MI:0684","name":"ancillary"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"14953102",
				"name":"fdng binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-294"],
				"linkedFeatures":["27480106"]
				},
				{
				"id":"32201023",
				"name":"fdni binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-294"],
				"linkedFeatures":["19293667"]
				},
				{
				"id":"17690985",
				"name":"hydron binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-294"],
				"linkedFeatures":["6569384"]
				},
				{
				"id":"5465352",
				"name":"quinone binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-294"],
				"linkedFeatures":["3162711"]
				},
				{
				"id":"32839483",
				"name":"4fe-4s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-294"],
				"linkedFeatures":["25668389"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:15378"},
		"label":"hydron"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1kqg"},{"db":"intact","id":"EBI-6894347"},{"db":"intenz","id":"EC 1.1.5.6"},{"db":"wwpdb","id":"1kqf"}],
		"expansion":{"id":"27","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P24183"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27480106",
				"name":"fdnh binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["14953102"]
				},
				{
				"id":"27646546",
				"name":"4fe-4s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["27287337"]
				},
				{
				"id":"29865472",
				"name":"mo-bismgd binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["8240900"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15378"},
			"bioRole":{"id":"MI:0580","name":"electron acceptor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"6569384",
				"name":"fdnh binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["17690985"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDQTYSLESFLNHVQKRDPNQTEFAQAVREVMTTLWPFLEQNPKYRQMSLLERLVEPERVIQFRVVWVDDRNQIQVNRAWRVQFSSAIGPYKGGMRFHPSVNLSILKFLGFEQTFKNALTTLPMGGGKGGSDFDPKGKSEGEVMRFCQALMTELYRHLGADTDVPAGDIGVGGREVGFMAGMMKKLSNNTACVFTGKGLSFGGSLIRPEATGYGLVYFTEAMLKRHGMGFEGMRVSVSGSGNVAQYAIEKAMEFGARVITASDSSGTVVDESGFTKEKLARLIEIKASRDGRVADYAKEFGLVYLEGQQPWSLPVDIALPCATQNELDVDAAHQLIANGVKAVAEGANMPTTIEATELFQQAGVLFAPGKAANAGGVATSGLEMAQNAARLGWKAEKVDARLHHIMLDIHHACVEHGGEGEQTNYVQGANIAGFVKVADAMLAQGVI",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P00370"},
		"label":"dhe4_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 1.4.1.4"},{"db":"intact","id":"EBI-6902099"},{"db":"wwpdb","id":"4bht"}],
		"expansion":{"id":"28","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P00370"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17556972",
				"name":"nadp+ binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["2361149"]
				},
				{
				"id":"22493950",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["31595580"]
				},
				{
				"id":"28029270",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["17282866"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P00370"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"25975847",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["32900674"]
				},
				{
				"id":"17282866",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["28029270"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 1.4.1.4"},{"db":"intact","id":"EBI-6902099"},{"db":"wwpdb","id":"4bht"}],
		"expansion":{"id":"28","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P00370"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17556972",
				"name":"nadp+ binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["2361149"]
				},
				{
				"id":"22493950",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["31595580"]
				},
				{
				"id":"28029270",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["17282866"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P00370"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32900674",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["25975847"]
				},
				{
				"id":"18158216",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["7581090"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 1.4.1.4"},{"db":"intact","id":"EBI-6902099"},{"db":"wwpdb","id":"4bht"}],
		"expansion":{"id":"28","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P00370"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17556972",
				"name":"nadp+ binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["2361149"]
				},
				{
				"id":"22493950",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["31595580"]
				},
				{
				"id":"28029270",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["17282866"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P00370"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"9212152",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["8494740"]
				},
				{
				"id":"7581090",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["18158216"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 1.4.1.4"},{"db":"intact","id":"EBI-6902099"},{"db":"wwpdb","id":"4bht"}],
		"expansion":{"id":"28","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P00370"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17556972",
				"name":"nadp+ binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["2361149"]
				},
				{
				"id":"22493950",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["31595580"]
				},
				{
				"id":"28029270",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["17282866"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P00370"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"8494740",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["9212152"]
				},
				{
				"id":"30546245",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["7937707"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 1.4.1.4"},{"db":"intact","id":"EBI-6902099"},{"db":"wwpdb","id":"4bht"}],
		"expansion":{"id":"28","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P00370"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17556972",
				"name":"nadp+ binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["2361149"]
				},
				{
				"id":"22493950",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["31595580"]
				},
				{
				"id":"28029270",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["17282866"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P00370"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"31595580",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["22493950"]
				},
				{
				"id":"7937707",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["30546245"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 1.4.1.4"},{"db":"intact","id":"EBI-6902099"},{"db":"wwpdb","id":"4bht"}],
		"expansion":{"id":"28","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P00370"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17556972",
				"name":"nadp+ binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["2361149"]
				},
				{
				"id":"22493950",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["31595580"]
				},
				{
				"id":"28029270",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["17282866"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:18009"},
			"bioRole":{"id":"MI:0919","name":"acceptor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"2361149",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["17556972"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSIVMQLQDVAESTRLGPLSGEVRAGEILHLVGPNGAGKSTLLARMAGMTSGKGSIQFAGQPLEAWSATKLALHRAYLSQQQTPPFATPVWHYLTLHQHDKTRTELLNDVAGALALDDKLGRSTNQLSGGEWQRVRLAAVVLQITPQANPAGQLLLLDEPMNSLDVAQQSALDKILSALCQQGLAIVMSSHDLNHTLRHAHRAWLLKGGKMLASGRREEVLTPPNLAQAYGMNFRRLDIEGHRMLISTI",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P06611"},
		"label":"btud_ecoli"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:30411"},
		"label":"cobalamin"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"3.6.3.33"},{"db":"wwpdb","id":"4fi3"},{"db":"wwpdb","id":"2qi9"},{"db":"intact","id":"EBI-8758197"}],
		"expansion":{"id":"29","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P06611"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"30176511",
				"name":"btud dimerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"]
				},
				{
				"id":"1397477",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"],
				"linkedFeatures":["32857435"]
				},
				{
				"id":"29637321",
				"name":"cobalamin binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"],
				"linkedFeatures":["32476700"]
				},
				{
				"id":"5960738",
				"name":"btuc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"],
				"linkedFeatures":["22159061"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:30411"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"6703935",
				"name":"btuc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["30808161"]
				},
				{
				"id":"14326703",
				"name":"btuf binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["2294714"]
				},
				{
				"id":"32476700",
				"name":"btud binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["29637321"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"3.6.3.33"},{"db":"wwpdb","id":"4fi3"},{"db":"wwpdb","id":"2qi9"},{"db":"intact","id":"EBI-8758197"}],
		"expansion":{"id":"29","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P06611"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"30176511",
				"name":"btud dimerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"]
				},
				{
				"id":"1397477",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"],
				"linkedFeatures":["32857435"]
				},
				{
				"id":"29637321",
				"name":"cobalamin binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"],
				"linkedFeatures":["32476700"]
				},
				{
				"id":"5960738",
				"name":"btuc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"],
				"linkedFeatures":["22159061"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32857435",
				"name":"btud binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1397477"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLTLARQQQRQNIRWLLCLSVLMLLALLLSLCAGEQWISPGDWFTPRGELFVWQIRLPRTLAVLLVGAALAISGAVMQALFENPLAEPGLLGVSNGAGVGLIAAVLLGQGQLPNWALGLCAIAGALIITLILLRFARRHLSTSRLLLAGVALGIICSALMTWAIYFSTSVDLRQLMYWMMGGFGGVDWRQSWLMLALIPVLLWICCQSRPMNMLALGEISARQLGLPLWFWRNVLVAATGWMVGVSVALAGAIGFIGLVIPHILRLCGLTDHRVLLPGCALAGASALLLADIVARLALAAAELPIGVVTATLGAPVFIWLLLKAGR",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P06609"},
		"label":"btuc_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"3.6.3.33"},{"db":"wwpdb","id":"4fi3"},{"db":"wwpdb","id":"2qi9"},{"db":"intact","id":"EBI-8758197"}],
		"expansion":{"id":"29","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P06611"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"30176511",
				"name":"btud dimerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"]
				},
				{
				"id":"1397477",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"],
				"linkedFeatures":["32857435"]
				},
				{
				"id":"29637321",
				"name":"cobalamin binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"],
				"linkedFeatures":["32476700"]
				},
				{
				"id":"5960738",
				"name":"btuc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"],
				"linkedFeatures":["22159061"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P06609"},
			"bioRole":{"id":"MI:0684","name":"ancillary"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"30808161",
				"name":"cobalamin binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-326"],
				"linkedFeatures":["6703935"]
				},
				{
				"id":"13218736",
				"name":"btuc dimerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-326"]
				},
				{
				"id":"22159061",
				"name":"btud binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-326"],
				"linkedFeatures":["5960738"]
				},
				{
				"id":"3412813",
				"name":"btuf binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-326"],
				"linkedFeatures":["14624617"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAKSLFRALVALSFLAPLWLNAAPRVITLSPANTELAFAAGITPVGVSSYSDYPPQAQKIEQVSTWQGMNLERIVALKPDLVIAWRGGNAERQVDQLASLGIKVMWVDATSIEQIANALRQLAPWSPQPDKAEQAAQSLLDQYAQLKAQYADKPKKRVFLQFGINPPFTSGKESIQNQVLEVCGGENIFKDSRVPWPQVSREQVLARSPQAIVITGGPDQIPKIKQYWGEQLKIPVIPLTSDWFERASPRIILAAQQLCNALSQVD",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P37028"},
		"label":"btuf_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"3.6.3.33"},{"db":"wwpdb","id":"4fi3"},{"db":"wwpdb","id":"2qi9"},{"db":"intact","id":"EBI-8758197"}],
		"expansion":{"id":"29","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P06611"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"30176511",
				"name":"btud dimerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"]
				},
				{
				"id":"1397477",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"],
				"linkedFeatures":["32857435"]
				},
				{
				"id":"29637321",
				"name":"cobalamin binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"],
				"linkedFeatures":["32476700"]
				},
				{
				"id":"5960738",
				"name":"btuc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"],
				"linkedFeatures":["22159061"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P37028"},
			"bioRole":{"id":"MI:0684","name":"ancillary"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"14624617",
				"name":"btuc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-266"],
				"linkedFeatures":["3412813"]
				},
				{
				"id":"2294714",
				"name":"cobalamin binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-266"],
				"linkedFeatures":["14326703"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1l7v"},{"db":"intact","id":"EBI-8760580"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P06611"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"7336452",
				"name":"btud dimerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"]
				},
				{
				"id":"24770117",
				"name":"btuc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"],
				"linkedFeatures":["1531656"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P06609"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"1531656",
				"name":"btud binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-326"],
				"linkedFeatures":["24770117"]
				},
				{
				"id":"6305140",
				"name":"btuc dimerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-326"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKIKTILTPVTCALLISFSAHAANADNYKNVINRTGAPQYMKDYDYDDHQRFNPFFDLGAWHGHLLPDGPNTMGGFPGVALLTEEYINFMASNFDRLTVWQDGKKVDFTLEAYSIPGALVQKLTAKDVQVEMTLRFATPRTSLLETKITSNKPLDLVWDGELLEKLEAKEGKPLSDKTIAGEYPDYQRKISATRDGLKVTFGKVRATWDLLTSGESEYQVHKSLPVQTEINGNRFTSKAHINGSTTLYTTYSHLLTAQEVSKEQMQIRDILARPAFYLTASQQRWEEYLKKGLTNPDATPEQTRVAVKAIETLNGNWRSPGGAVKFNTVTPSVTGRWFSGNQTWPWDTWKQAFAMAHFNPDIAKENIRAVFSWQIQPGDSVRPQDVGFVPDLIAWNLSPERGGDGGNWNERNTKPSLAAWSVMEVYNVTQDKTWVAEMYPKLVAYHDWWLRNRDHNGNGVPEYGATRDKAHNTESGEMLFTVKKGDKEETQSGLNNYARVVEKGQYDSLEIPAQVAASWESGRDDAAVFGFIDKEQLDKYVANGGKRSDWTVKFAENRSQDGTLLGYSLLQESVDQASYMYSDNHYLAEMATILGKPEEAKRYRQLAQQLADYINTCMFDPTTQFYYDVRIEDKPLANGCAGKPIVERGKGPEGWSPLFNGAATQANADAVVKVMLDPKEFNTFVPLGTAALTNPAFGADIYWRGRVWVDQFWFGLKGMERYGYRDDALKLADTFFRHAKGLTADGPIQENYNPLTGAQQGAPNFSWSAAHLYMLYNDFFRKQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P42592"},
		"label":"ygjk_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 3.2.1.-"},{"db":"intact","id":"EBI-9206905"},{"db":"wwpdb","id":"3w7s"},{"db":"wwpdb","id":"3W7X"},{"db":"wwpdb","id":"3w7u"},{"db":"wwpdb","id":"3W7W"},{"db":"wwpdb","id":"3w7t"},{"db":"wwpdb","id":"3d3i"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P42592"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"5592035",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P42592"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32938707",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:25805"},
		"label":"oxygen atom"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:49637"},
		"label":"hydrogen atom"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 1.10.3.10"},{"db":"wwpdb","id":"1fft"},{"db":"intact","id":"EBI-8697969"}],
		"expansion":{"id":"30","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:25805"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19845164",
				"name":"heme o binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["6629765"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:49637"},
			"bioRole":{"name":"proton donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"25762186",
				"name":"heme o binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["32224995"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MFGKLSLDAVPFHEPIVMVTIAGIILGGLALVGLITYFGKWTYLWKEWLTSVDHKRLGIMYIIVAIVMLLRGFADAIMMRSQQALASAGEAGFLPPHHYDQIFTAHGVIMIFFVAMPFVIGLMNLVVPLQIGARDVAFPFLNNLSFWFTVVGVILVNVSLGVGEFAQTGWLAYPPLSGIEYSPGVGVDYWIWSLQLSGIGTTLTGINFFVTILKMRAPGMTMFKMPVFTWASLCANVLIIASFPILTVTVALLTLDRYLGTHFFTNDMGGNMMMYINLIWAWGHPEVYILILPVFGVFSEIAATFSRKRLFGYTSLVWATVCITVLSFIVWLHHFFTMGAGANVNAFFGITTMIIAIPTGVKIFNWLFTMYQGRIVFHSAMLWTIGFIVTFSVGGMTGVLLAVPGADFVLHNSLFLIAHFHNVIIGGVVFGCFAGMTYWWPKAFGFKLNETWGKRAFWFWIIGFFVAFMPLYALGFMGMTRRLSQQIDPQFHTMLMIAASGAVLIALGILCLVIQMYVSIRDRDQNRDLTGDPWGGRTLEWATSSPPPFYNFAVVPHVHERDAFWEMKEKGEAYKKPDHYEEIHMPKNSGAGIVIAAFSTIFGFAMIWHIWWLAIVGFAGMIITWIVKSFDEDVDYYVPVAEIEKLENQHFDEITKAGLKNGN",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0ABI8"},
		"label":"cyob_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 1.10.3.10"},{"db":"wwpdb","id":"1fft"},{"db":"intact","id":"EBI-8697969"}],
		"expansion":{"id":"30","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:25805"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19845164",
				"name":"heme o binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["6629765"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0ABI8"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"3411658",
				"name":"cyoa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-663"],
				"linkedFeatures":["28770641"]
				},
				{
				"id":"28799179",
				"name":"cyoc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-663"],
				"linkedFeatures":["5136622"]
				},
				{
				"id":"29220020",
				"name":"cyod binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-663"],
				"linkedFeatures":["31775078"]
				},
				{
				"id":"24955379",
				"name":"heme b binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-663"],
				"linkedFeatures":["28210005"]
				},
				{
				"id":"1438761",
				"name":"copper binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-663"],
				"linkedFeatures":["22080066"]
				},
				{
				"id":"21222491",
				"name":"heme o binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-663"],
				"linkedFeatures":["2797394"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSHSTDHSGASHGSVKTYMTGFILSIILTVIPFWMVMTGAASPAVILGTILAMAVVQVLVHLVCFLHMNTKSDEGWNMTAFVFTVLIIAILVVGSIWIMWNLNYNMMMH",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0ABJ6"},
		"label":"cyod_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 1.10.3.10"},{"db":"wwpdb","id":"1fft"},{"db":"intact","id":"EBI-8697969"}],
		"expansion":{"id":"30","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:25805"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19845164",
				"name":"heme o binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["6629765"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0ABJ6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"31775078",
				"name":"cyob binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-109"],
				"linkedFeatures":["29220020"]
				},
				{
				"id":"6048575",
				"name":"cyoc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-109"],
				"linkedFeatures":["22037886"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:17976"},
		"label":"ubiquinol"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 1.10.3.10"},{"db":"wwpdb","id":"1fft"},{"db":"intact","id":"EBI-8697969"}],
		"expansion":{"id":"30","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:25805"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19845164",
				"name":"heme o binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["6629765"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:17976"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MRLRKYNKSLGWLSLFAGTVLLSGCNSALLDPKGQIGLEQRSLILTAFGLMLIVVIPAILMAVGFAWKYRASNKDAKYSPNWSHSNKVEAVVWTVPILIIIFLAVLTWKTTHALEPSKPLAHDEKPITIEVVSMDWKWFFIYPEQGIATVNEIAFPANTPVYFKVTSNSVMNSFFIPRLGSQIYAMAGMQTRLHLIANEPGTYDGISASYSGPGFSGMKFKAIATPDRAAFDQWVAKAKQSPNTMSDMAAFEKLAAPSEYNQVEYFSNVKPDLFADVINKFMAHGKSMDMTQPEGEHSAHEGMEGMDMSHAESAH",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0ABJ1"},
		"label":"cyoa_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 1.10.3.10"},{"db":"wwpdb","id":"1fft"},{"db":"intact","id":"EBI-8697969"}],
		"expansion":{"id":"30","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:25805"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19845164",
				"name":"heme o binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["6629765"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0ABJ1"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"28770641",
				"name":"cyob binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-315"],
				"linkedFeatures":["3411658"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MATDTLTHATAHAHEHGHHDAGGTKIFGFWIYLMSDCILFSILFATYAVLVNGTAGGPTGKDIFELPFVLVETFLLLFSSITYGMAAIAMYKNNKSQVISWLALTWLFGAGFIGMEIYEFHHLIVNGMGPDRSGFLSAFFALVGTHGLHVTSGLIWMAVLMVQIARRGLTSTNRTRIMCLSLFWHFLDVVWICVFTVVYLMGAM",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0ABJ3"},
		"label":"cyoc_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 1.10.3.10"},{"db":"wwpdb","id":"1fft"},{"db":"intact","id":"EBI-8697969"}],
		"expansion":{"id":"30","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:25805"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19845164",
				"name":"heme o binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["6629765"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0ABJ3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"5136622",
				"name":"cyob binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-204"],
				"linkedFeatures":["28799179"]
				},
				{
				"id":"22037886",
				"name":"cyod binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-204"],
				"linkedFeatures":["6048575"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:24480"},
		"label":"heme o"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 1.10.3.10"},{"db":"wwpdb","id":"1fft"},{"db":"intact","id":"EBI-8697969"}],
		"expansion":{"id":"30","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:25805"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19845164",
				"name":"heme o binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["6629765"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:24480"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"2797394",
				"name":"cyob binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21222491"]
				},
				{
				"id":"32224995",
				"name":"hydrogen binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["25762186"]
				},
				{
				"id":"6629765",
				"name":"oxygen binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["19845164"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:28694"},
		"label":"copper atom"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 1.10.3.10"},{"db":"wwpdb","id":"1fft"},{"db":"intact","id":"EBI-8697969"}],
		"expansion":{"id":"30","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:25805"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19845164",
				"name":"heme o binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["6629765"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:28694"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22080066",
				"name":"cyob binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1438761"]
				}]
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
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 1.10.3.10"},{"db":"wwpdb","id":"1fft"},{"db":"intact","id":"EBI-8697969"}],
		"expansion":{"id":"30","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:25805"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19845164",
				"name":"heme o binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["6629765"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:26355"},
			"bioRole":{"name":"electron donor and electron acceptor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"28210005",
				"name":"cyob binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["24955379"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MTTIVSVRRNGHVVIAGDGQATLGNTVMKGNVKKVRRLYNDKVIAGFAGGTADAFTLFELFERKLEMHQGHLVKAAVELAKDWRTDRMLRKLEALLAVADETASLIITGNGDVVQPENDLIAIGSGGPYAQAAARALLENTELSAREIAEKALDIAGDICIYTNHFHTIEELSYKA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A7B8"},
		"label":"hslv_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1hqy"},{"db":"wwpdb","id":"1ht1"},{"db":"wwpdb","id":"1e94"},{"db":"wwpdb","id":"1g4b"},{"db":"intenz","id":"3.4.25.2"},{"db":"wwpdb","id":"1ht2"},{"db":"intact","id":"EBI-8755316"},{"db":"wwpdb","id":"1g3i"},{"db":"wwpdb","id":"1g4a"}],
		"expansion":{"id":"31","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A7B8"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"16946040",
				"name":"duodecamerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-176"]
				},
				{
				"id":"2079798",
				"name":"hslu binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-176"],
				"linkedFeatures":["25007592"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"33353108",
				"name":"hslu binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["5352778"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSEMTPREIVSELDKHIIGQDNAKRSVAIALRNRWRRMQLNEELRHEVTPKNILMIGPTGVGKTEIARRLAKLANAPFIKVEATKFTEVGYVGKEVDSIIRDLTDAAVKMVRVQAIEKNRYRAEELAEERILDVLIPPAKNNWGQTEQQQEPSAARQAFRKKLREGQLDDKEIEIDLAAAPMGVEIMAPPGMEEMTSQLQSMFQNLGGQKQKARKLKIKDAMKLLIEEEAAKLVNPEELKQDAIDAVEQHGIVFIDEIDKICKRGESSGPDVSREGVQRDLLPLVEGCTVSTKHGMVKTDHILFIASGAFQIAKPSDLIPELQGRLPIRVELQALTTSDFERILTEPNASITVQYKALMATEGVNIEFTDSGIKRIAEAAWQVNESTENIGARRLHTVLERLMEEISYDASDLSGQNITIDADYVSKHLDALVADEDLSRFIL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A6H5"},
		"label":"hslu_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1hqy"},{"db":"wwpdb","id":"1ht1"},{"db":"wwpdb","id":"1e94"},{"db":"wwpdb","id":"1g4b"},{"db":"intenz","id":"3.4.25.2"},{"db":"wwpdb","id":"1ht2"},{"db":"intact","id":"EBI-8755316"},{"db":"wwpdb","id":"1g3i"},{"db":"wwpdb","id":"1g4a"}],
		"expansion":{"id":"31","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A7B8"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"16946040",
				"name":"duodecamerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-176"]
				},
				{
				"id":"2079798",
				"name":"hslu binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-176"],
				"linkedFeatures":["25007592"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0A6H5"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"25007592",
				"name":"hslv binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["c-c"],
				"linkedFeatures":["2079798"]
				},
				{
				"id":"4709271",
				"name":"hslu hexamerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-443"]
				},
				{
				"id":"5352778",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-443"],
				"linkedFeatures":["33353108"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAAKDVKFGNDARVKMLRGVNVLADAVKVTLGPKGRNVVLDKSFGAPTITKDGVSVAREIELEDKFENMGAQMVKEVASKANDAAGDGTTTATVLAQAIITEGLKAVAAGMNPMDLKRGIDKAVTAAVEELKALSVPCSDSKAIAQVGTISANSDETVGKLIAEAMDKVGKEGVITVEDGTGLQDELDVVEGMQFDRGYLSPYFINKPETGAVELESPFILLADKKISNIREMLPVLEAVAKAGKPLLIIAEDVEGEALATLVVNTMRGIVKVAAVKAPGFGDRRKAMLQDIATLTGGTVISEEIGMELEKATLEDLGQAKRVVINKDTTTIIDGVGEEAAIQGRVAQIRQQIEEATSDYDREKLQERVAKLAGGVAVIKVGAATEVEMKEKKARVEDALHATRAAVEEGVVAGGGVALIRVASKLADLRGQNEDQNVGIKVALRAMEAPLRQIVLNCGEEPSVVANTVKGGDGNYGYNAATEEYGNMIDMGILDPTKVTRSALQYAASVAGLMITTECMVTDLPKNDAADLGAAGGMGGMGGMGGMM",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A6F5"},
		"label":"ch60_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"emdb","id":"2325"},{"db":"intact","id":"EBI-8769099"},{"db":"wwpdb","id":"1SVT"},{"db":"wwpdb","id":"1PCQ"}],
		"expansion":{"id":"32","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A6F5"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MNIRPLHDRVIVKRKEVETKSAGGIVLTGSAAAKSTRGEVLAVGNGRILENGEVKPLDVKVGDIVIFNDGYGVKSEKIDNEEVLIMSESDILAIVEA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A6F9"},
		"label":"ch10_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"emdb","id":"2325"},{"db":"intact","id":"EBI-8769099"},{"db":"wwpdb","id":"1SVT"},{"db":"wwpdb","id":"1PCQ"}],
		"expansion":{"id":"32","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A6F5"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0A6F9"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MIKLSNITKVFHQGTRTIQALNNVSLHVPAGQIYGVIGASGAGKSTLIRCVNLLERPTEGSVLVDGQELTTLSESELTKARRQIGMIFQHFNLLSSRTVFGNVALPLELDNTPKDEVKRRVTELLSLVGLGDKHDSYPSNLSGGQKQRVAIARALASNPKVLLCDEATSALDPATTRSILELLKDINRRLGLTILLITHEMDVVKRICDCVAVISNGELIEQDTVSEVFSHPKTPLAQKFIQSTLHLDIPEDYQERLQAEPFTDCVPMLRLEFTGQSVDAPLLSETARRFNVNNNIISAQMDYAGGVKFGIMLTEMHGTQQDTQAAIAWLQEHHVKVEVLGYV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P30750"},
		"label":"metn_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 3.6.3"},{"db":"intact","id":"EBI-8771827"},{"db":"wwpdb","id":"3tuj"},{"db":"wwpdb","id":"3tuz"},{"db":"wwpdb","id":"3tui"}],
		"expansion":{"id":"33","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P30750"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27376269",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-343"]
				},
				{
				"id":"14584601",
				"name":"meti binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-343"],
				"linkedFeatures":["8279380"]
				},
				{
				"id":"1315472",
				"name":"methionine binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-343"]
				},
				{
				"id":"30338202",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-343"],
				"linkedFeatures":["1023871"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"1023871",
				"name":"metn binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["30338202"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSEPMMWLLVRGVWETLAMTFVSGFFGFVIGLPVGVLLYVTRPGQIIANAKLYRTVSAIVNIFRSIPFIILLVWMIPFTRVIVGTSIGLQAAIVPLTVGAAPFIARMVENALLEIPTGLIEASRAMGATPMQIVRKVLLPEALPGLVNAATITLITLVGYSAMGGAVGAGGLGQIGYQYGYIGYNATVMNTVLVLLVILVYLIQFAGDRIVRAVTRK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P31547"},
		"label":"meti_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 3.6.3"},{"db":"intact","id":"EBI-8771827"},{"db":"wwpdb","id":"3tuj"},{"db":"wwpdb","id":"3tuz"},{"db":"wwpdb","id":"3tui"}],
		"expansion":{"id":"33","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P30750"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27376269",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-343"]
				},
				{
				"id":"14584601",
				"name":"meti binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-343"],
				"linkedFeatures":["8279380"]
				},
				{
				"id":"1315472",
				"name":"methionine binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-343"]
				},
				{
				"id":"30338202",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-343"],
				"linkedFeatures":["1023871"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P31547"},
			"bioRole":{"id":"MI:0684","name":"ancillary"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"28341487",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-217"]
				},
				{
				"id":"30226535",
				"name":"methionine binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-217"]
				},
				{
				"id":"8279380",
				"name":"metn binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-217"],
				"linkedFeatures":["14584601"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:36264"},
		"label":"molybdate"
	},
	{
		"object":"interactor",
		"sequence":"MQAEILLTLKLQQKLFADPRRISLLKHIALSGSISQGAKDAGISYKSAWDAINEMNQLSEHILVERATGGKGGGGAVLTRYGQRLIQLYDLLAQIQQKAFDVLSDDDALPLNSLLAAISRFSLQTSARNQWFGTITARDHDDVQQHVDVLLADGKTRLKVAITAQSGARLGLDEGKEVLILLKAPWVGITQDEAVAQNADNQLPGIISHIERGAEQCEVLMALPDGQTLCATVPVNEATSLQQGQNVTAYFNADSVIIATLC",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A9G8"},
		"label":"mode_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1b9m"},{"db":"wwpdb","id":"1h9r"},{"db":"intact","id":"EBI-8774452"},{"db":"wwpdb","id":"1o7l"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:36264"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0A9G8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MHNDKDLSTWQTFRRLWPTIAPFKAGLIVAGVALILNAASDTFMLSLLKPLLDDGFGKTDRSVLVWMPLVVIGLMILRGITSYVSSYCISWVSGKVVMTMRRRLFGHMMGMPVSFFDKQSTGTLLSRITYDSEQVASSSSGALITVVREGASIIGLFIMMFYYSWQLSIILIVLAPIVSIAIRVVSKRFRNISKNMQNTMGQVTTSAEQMLKGHKEVLIFGGQEVETKRFDKVSNRMRLQGMKMVSASSISDPIIQLIASLALAFVLYAASFPSVMDSLTAGTITVVFSSMIALMRPLKSLTNVNAQFQRGMAACQTLFTILDSEQEKDEGKRVIERATGDVEFRNVTFTYPGRDVPALRNINLKIPAGKTVALVGRSGSGKSTIASLITRFYDIDEGEILMDGHDLREYTLASLRNQVALVSQNVHLFNDTVANNIAYARTEQYSREQIEEAARMAYAMDFINKMDNGLDTVIGENGVLLSGGQRQRIAIARALLRDSPILILDEATSALDTESERAIQAALDELQKNRTSLVIAHRLSTIEKADEIVVVEDGVIVERGTHNDLLEHRGVYAQLHKMQFGQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P60752"},
		"label":"msba_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"3b5w"},{"db":"intact","id":"EBI-8784378"},{"db":"intenz","id":"EC 3.6.3"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P60752"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"3276652",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MRVITLAGSPRFPSRSSSLLEYAREKLNGLDVEVYHWNLQNFAPEDLLYARFDSPALKTFTEQLQQADGLIVATPVYKAAYSGALKTLLDLLPERALQGKVVLPLATGGTVAHLLAVDYALKPVLSALKAQEILHGVFADDSQVIDYHHRPQFTPNLQTRLDTALETFWQALHRRDVQVPDLLSLRGNAHA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P80644"},
		"label":"ssue_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 1.5.1.38"},{"db":"intact","id":"EBI-8786881"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P80644"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"7881983",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P80644"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"33158106",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSLNMFWFLPTHGDGHYLGTEEGSRPVDHGYLQQIAQAADRLGYTGVLIPTGRSCEDAWLVAASMIPVTQRLKFLVALRPSVTSPTVAARQAATLDRLSNGRALFNLVTGSDPQELAGDGVFLDHSERYEASAEFTQVWRRLLQRETVDFNGKHIHVRGAKLLFPAIQQPYPPLYFGGSSDVAQELAAEQVDLYLTWGEPPELVKEKIEQVRAKAAAHGRKIRFGIRLHVIVRETNDEAWQAAERLISHLDDETIAKAQAAFARTDSVGQQRMAALHNGKRDNLEISPNLWAGVGLVRGGAGTALVGDGPTVAARINEYAALGIDSFVLSGYPHLEEAYRVGELLFPLLDVAIPEIPQPQPLNPQGEAVANDFIPRKVAQS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P80645"},
		"label":"ssud_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1m41"},{"db":"intact","id":"EBI-8786862"},{"db":"intenz","id":"EC 1.14.14.5"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P80645"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"16290074",
				"name":"tetramerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P80645"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"16666834",
				"name":"tetramerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:29033"},
		"label":"iron2plus"
	},
	{
		"object":"interactor",
		"sequence":"MSERLSITPLGPYIGAQISGADLTRPLSDNQFEQLYHAVLRHQVVFLRDQAITPQQQRALAQRFGELHIHPVYPHAEGVDEIIVLDTHNDNPPDNDNWHTDVTFIETPPAGAILAAKELPSTGGDTLWTSGIAAYEALSVPFRQLLSGLRAEHDFRKSFPEYKYRKTEEEHQRWREAVAKNPPLLHPVVRTHPVSGKQALFVNEGFTTRIVDVSEKESEALLSFLFAHITKPEFQVRWRWQPNDIAIWDNRVTQHYANADYLPQRRIMHRATILGDKPFYRAG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P37610"},
		"label":"taud_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 1.14.11.17"},{"db":"wwpdb","id":"1os7"},{"db":"wwpdb","id":"1otj"},{"db":"intact","id":"EBI-8789156"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:29033"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
			"bindingSites":[
				{
				"id":"7081095",
				"name":"taud binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["27948636"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P37610"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"4235841",
				"name":"tetramerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-283"]
				},
				{
				"id":"27948636",
				"name":"fe2+ binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-283"],
				"linkedFeatures":["7081095"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MNPYIYLGGAILAEVIGTTLMKFSEGFTRLWPSVGTIICYCASFWLLAQTLAYIPTGIAYAIWSGVGIVLISLLSWGFFGQRLDLPAIIGMMLICAGVLIINLLSRSTPH",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P23895"},
		"label":"emre_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"3b5d"},{"db":"intact","id":"EBI-8789430"},{"db":"emdb","id":"EMD-1087"},{"db":"wwpdb","id":"3b62"},{"db":"wwpdb","id":"3b61"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P23895"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P23895"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:17877"},
		"label":"fadh2"
	},
	{
		"object":"interactor",
		"sequence":"MSRNTEATDDVKTWTGGPLNYKEGFFTQLATDELAKGINEEVVRAISAKRNEPEWMLEFRLNAYRAWLEMEEPHWLKAHYDKLNYQDYSYYSAPSCGNCDDTCASEPGAVQQTGANAFLSKEVEAAFEQLGVPVREGKEVAVDAIFDSVSVATTYREKLAEQGIIFCSFGEAIHDHPELVRKYLGTVVPGNDNFFAALNAAVASDGTFIYVPKGVRCPMELSTYFRINAEKTGQFERTILVADEDSYVSYIEGCSAPVRDSYQLHAAVVEVIIHKNAEVKYSTVQNWFPGDNNTGGILNFVTKRALCEGENSKMSWTQSETGSAITWKYPSCILRGDNSIGEFYSVALTSGHQQADTGTKMIHIGKNTKSTIISKGISAGHSQNSYRGLVKIMPTATNARNFTQCDSMLIGANCGAHTFPYVECRNNSAQLEHEATTSRIGEDQLFYCLQRGISEEDAISMIVNGFCKDVFSELPLEFAVEAQKLLAISLEHSVG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P77522"},
		"label":"sufb_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-8792805"}],
		"expansion":{"id":"34","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:17877"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"}
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P77522"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"22844154",
				"name":"sufc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["11889977"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLSIKDLHVSVEDKAILRGLSLDVHPGEVHAIMGPNGSGKSTLSATLAGREDYEVTGGTVEFKGKDLLALSPEDRAGEGIFMAFQYPVEIPGVSNQFFLQTALNAVRSYRGQETLDRFDFQDLMEEKIALLKMPEDLLTRSVNVGFSGGEKKRNDILQMAVLEPELCILDESDSGLDIDALKVVADGVNSLRDGKRSFIIVTHYQRILDYIKPDYVHVLYQGRIVKSGDFTLVKQLEEQGYGWLTEQQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P77499"},
		"label":"sufc_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-8792805"}],
		"expansion":{"id":"34","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:17877"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"}
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P77499"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"18203335",
				"name":"sufd binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["27703872"]
				},
				{
				"id":"11889977",
				"name":"sufb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["22844154"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAGLPNSSNALQQWHHLFEAEGTKRSPQAQQHLQQLLRTGLPTRKHENWKYTPLEGLINSQFVSIAGEISPQQRDALALTLDSVRLVFVDGRYVPALSDATEGSGYEVSINDDRQGLPDAIQAEVFLHLTESLAQSVTHIAVKRGQRPAKPLLLMHITQGVAGEEVNTAHYRHHLDLAEGAEATVIEHFVSLNDARHFTGARFTINVAANAHLQHIKLAFENPLSHHFAHNDLLLAEDATAFSHSFLLGGAVLRHNTSTQLNGENSTLRINSLAMPVKNEVCDTRTWLEHNKGFCNSRQLHKTIVSDKGRAVFNGLINVAQHAIKTDGQMTNNNLLMGKLAEVDTKPQLEIYADDVKCSHGATVGRIDDEQIFYLRSRGINQQDAQQMIIYAFAAELTEALRDEGLKQQVLARIGQRLPGGAR",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P77689"},
		"label":"sufd_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-8792805"}],
		"expansion":{"id":"34","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:17877"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"}
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P77689"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"27703872",
				"name":"sufc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["18203335"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MIFSVDKVRADFPVLSREVNGLPLAYLDSAASAQKPSQVIDAEAEFYRHGYAAVHRGIHTLSAQATEKMENVRKRASLFINARSAEELVFVRGTTEGINLVANSWGNSNVRAGDNIIISQMEHHANIVPWQMLCARVGAELRVIPLNPDGTLQLETLPTLFDEKTRLLAITHVSNVLGTENPLAEMITLAHQHGAKVLVDGAQAVMHHPVDVQALDCDFYVFSGHKLYGPTGIGILYVKEALLQEMPPWEGGGSMIATVSLSEGTTWTKAPWRFEAGTPNTGGIIGLGAALEYVSALGLNNIAEYEQNLMHYALSQLESVPDLTLYGPQNRLGVIAFNLGKHHAYDVGSFLDNYGIAVRTGHHCAMPLMAYYNVPAMCRASLAMYNTHEEVDRLVTGLQRIHRLLG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P77444"},
		"label":"sufs_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 4.4.1.16"},{"db":"intenz","id":"EC 2.8.1.7"},{"db":"intact","id":"EBI-8793636"},{"db":"wwpdb","id":"1jf9"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P77444"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17681377",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P77444"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"12862251",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MALLPDKEKLLRNFLRCANWEEKYLYIIELGQRLPELRDEDRSPQNSIQGCQSQVWIVMRQNAQGIIELQGDSDAAIVKGLIAVVFILYDQMTPQDIVNFDVRPWFEKMALTQHLTPSRSQGLEAMIRAIRAKAAALS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P76194"},
		"label":"sufe_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1mzg"},{"db":"intact","id":"EBI-8794010"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P76194"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"18209854",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P76194"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"3051239",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAIKLEIKNLYKIFGEHPQRAFKYIEQGLSKEQILEKTGLSLGVKDASLAIEEGEIFVIMGLSGSGKSTMVRLLNRLIEPTRGQVLIDGVDIAKISDAELREVRRKKIAMVFQSFALMPHMTVLDNTAFGMELAGINAEERREKALDALRQVGLENYAHSYPDELSGGMRQRVGLARALAINPDILLMDEAFSALDPLIRTEMQDELVKLQAKHQRTIVFISHDLDEAMRIGDRIAIMQNGEVVQVGTPDEILNNPANDYVRTFFRGVDISQVFSAKDIARRTPNGLIRKTPGFGPRSALKLLQDEDREYGYVIERGNKFVGAVSIDSLKTALTQQQGLDAALIDAPLAVDAQTPLSELLSHVGQAPCAVPVVDEDQQYVGIISKGMLLRALDREGVNNG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P14175"},
		"label":"prov_ecoli"
	},
	{
		"object":"interactor",
		"sequence":"MRHSVLFATAFATLISTQTFAADLPGKGITVNPVQSTITEETFQTLLVSRALEKLGYTVNKPSEVDYNVGYTSLASGDATFTAVNWTPLHDNMYEAAGGDKKFYREGVFVNGAAQGYLIDKKTADQYKITNIAQLKDPKIAKLFDTNGDGKADLTGCNPGWGCEGAINHQLAAYELTNTVTHNQGNYAAMMADTISRYKEGKPVFYYTWTPYWVSNELKPGKDVVWLQVPFSALPGDKNADTKLPNGANYGFPVSTMHIVANKAWAEKNPAAAKLFAIMQLPVADINAQNAIMHDGKASEGDIQGHVDGWIKAHQQQFDGWVNEALAAQK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0AFM2"},
		"label":"prox_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-8795483"}],
		"expansion":{"id":"35","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P14175"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AFM2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MADQNNPWDTTPAADSAAQSADAWGTPTTAPTDGGGADWLTSTPAPNVEHFNILDPFHKTLIPLDSWVTEGIDWVVTHFRPVFQGVRVPVDYILNGFQQLLLGMPAPVAIIVFALIAWQISGVGMGVATLVSLIAIGAIGAWSQAMVTLALVLTALLFCIVIGLPLGIWLARSPRAAKIIRPLLDAMQTTPAFVYLVPIVMLFGIGNVPGVVVTIIFALPPIIRLTILGINQVPADLIEASRSFGASPRQMLFKVQLPLAMPTIMAGVNQTLMLALSMVVIASMIAVGGLGQMVLRGIGRLDMGLATVGGVGIVILAIILDRLTQAVGRDSRSRGNRRWYTTGPVGLLTRPFIK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P14176"},
		"label":"prow_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-8795483"}],
		"expansion":{"id":"35","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P14175"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P14176"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDMHSGTFNPQDFAWQGLTLTPAAAIHIRELVAKQPGMVGVRLGVKQTGCAGFGYVLDSVSEPDKDDLLFEHDGAKLFVPLQAMPFIDGTEVDFVREGLNQIFKFHNPKAQNECGCGESFGV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P77667"},
		"label":"sufa_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"2d2a"},{"db":"intact","id":"EBI-8871521"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P77667"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"11015981",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P77667"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"25804539",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSITLSDSAAARVNTFLANRGKGFGLRLGVRTSGCSGMAYVLEFVDEPTPEDIVFEDKGVKVVVDGKSLQFLDGTQLDFVKEGLNEGFKFTNPNVKDECGCGESFHV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0AAC8"},
		"label":"isca_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1s98"},{"db":"intact","id":"EBI-8849999"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0AAC8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"5864867",
				"name":"tetramerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AAC8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"21455556",
				"name":"tetramerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MPSAHSVKLRPLEREDLRYVHQLDNNASVMRYWFEEPYEAFVELSDLYDKHIHDQSERRFVVECDGEKAGLVELVEINHVHRRAEFQIIISPEYQGKGLATRAAKLAMDYGFTVLNLYKLYLIVDKENEKAIHIYRKLGFSVEGELMHEFFINGQYRNAIRMCIFQHQYLAEHKTPGQTLLKPTAQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A951"},
		"label":"atda_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 2.3.1.57"},{"db":"intact","id":"EBI-8850049"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A951"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"27620132",
				"name":"tetramerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0A951"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"19551441",
				"name":"tetramerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MQILFNDQAMQCAAGQTVHELLEQLDQRQAGAALAINQQIVPREQWAQHIVQDGDQILLFQVIAGG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"O32583"},
		"label":"this_ecoli"
	},
	{
		"object":"interactor",
		"sequence":"MNDRDFMRYSRQILLDDIALDGQQKLLDSQVLIIGLGGLGTPAALYLAGAGVGTLVLADDDDVHLSNLQRQILFTTEDIDRPKSQVSQQRLTQLNPDIQLTALQQRLTGEALKDAVARADVVLDCTDNMATRQEINAACVALNTPLITASAVGFGGQLMVLTPPWEQGCYRCLWPDNQEPERNCRTAGVVGPVVGVMGTLQALEAIKLLSGIETPAGELRLFDGKSSQWRSLALRRASGCPVCGGSNADPV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P30138"},
		"label":"thif_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 2.7.7.73"},{"db":"intact","id":"EBI-8850353"},{"db":"wwpdb","id":"1zud"},{"db":"intenz","id":"EC 5.3.4.1"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"O32583"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"2528806",
				"name":"thif binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21742579"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P30138"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"19767245",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				},
				{
				"id":"21742579",
				"name":"this binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["2528806"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLRIADKTFDSHLFTGTGKFASSQLMVEAIRASGSQLVTLAMKRVDLRQHNDAILEPLIAAGVTLLPNTSGAKTAEEAIFAAHLAREALGTNWLKLEIHPDARWLLPDPIETLKAAETLVQQGFVVLPYCGADPVLCKRLEEVGCAAVMPLGAPIGSNQGLETRAMLEIIIQQATVPVVVDAGIGVPSHAAQALEMGADAVLVNTAIAVADDPVNMAKAFRLAVEAGLLARQSGPGSRSYFAHATSPLTGFLEASA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P30139"},
		"label":"thig_ecoli"
	},
	{
		"object":"interactor",
		"sequence":"MKTFSDRWRQLDWDDIRLRINGKTAADVERALNASQLTRDDMMALLSPAASGYLEQLAQRAQRLTRQRFGNTVSFYVPLYLSNLCANDCTYCGFSMSNRIKRKTLDEADIARESAAIREMGFEHLLLVTGEHQAKVGMDYFRRHLPALREQFSSLQMEVQPLAETEYAELKQLGLDGVMVYQETYHEATYARHHLKGKKQDFFWRLETPDRLGRAGIDKIGLGALIGLSDNWRVDSYMVAEHLLWLQQHYWQSRYSVSFPRLRPCTGGIEPASIMDERQLVQTICAFRLLAPEIELSLSTRESPWFRDRVIPLAINNVSAFSKTQPGGYADNHPELEQFSPHDDRRPEAVAAALTAQGLQPVWKDWDSYLGRASQRL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P30140"},
		"label":"thih_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 2.8.1.10"},{"db":"intact","id":"EBI-8851217"},{"db":"intenz","id":"EC 4.1.99.19"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P30139"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"5668768",
				"name":"thih binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["13954261"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P30140"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"13954261",
				"name":"thig binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["5668768"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKLPIYLDYSATTPVDPRVAEKMMQFMTMDGTFGNPASRSHRFGWQAEEAVDIARNQIADLVGADPREIVFTSGATESDNLAIKGAANFYQKKGKHIITSKTEHKAVLDTCRQLEREGFEVTYLAPQRNGIIDLKELEAAMRDDTILVSIMHVNNEIGVVQDIAAIGEMCRARGIIYHVDATQSVGKLPIDLSQLKVDLMSFSGHKIYGPKGIGALYVRRKPRVRIEAQMHGGGHERGMRSGTLPVHQIVGMGEAYRIAKEEMATEMERLRGLRNRLWNGIKDIEEVYLNGDLEHGAPNILNVSFNYVEGESLIMALKDLAVSSGSACTSASLEPSYVLRALGLNDELAHSSIRFSLGRFTTEEEIDYTIELVRKSIGRLRDLSPLWEMYKQGVDLNSIEWAHH",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A6B7"},
		"label":"iscs_ecoli"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:597326"},
		"label":"pyridoxal 5'-phosphate(2-)"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1p3w"},{"db":"intact","id":"EBI-8851928"},{"db":"intenz","id":"EC 2.8.1.7"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A6B7"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"17340538",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				},
				{
				"id":"22191148",
				"name":"pyridoxal-5-phosphate binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["9124484"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:597326"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"9124484",
				"name":"iscs binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["22191148"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MNVFNPAQFRAQFPALQDAGVYLDSAATALKPEAVVEATQQFYSLSAGNVHRSQFAEAQRLTARYEAAREKVAQLLNAPDDKTIVWTRGTTESINMVAQCYARPRLQPGDEIIVSVAEHHANLVPWLMVAQQTGAKVVKLPLNAQRLPDVDLLPELITPRSRILALGQMSNVTGGCPDLARAITFAHSAGMVVMVDGAQGAVHFPADVQQLDIDFYAFSGHKLYGPTGIGVLYGKSELLEAMSPWLGGGKMVHEVSFDGFTTQSAPWKLEAGTPNVAGVIGLSAALEWLADYDINQAESWSRSLATLAEDALAKRPGFRSFRCQDSSLLAFDFAGVHHSDMVTLLAEYGIALRAGQHCAQPLLAELGVTGTLRASFAPYNTKSDVDALVNAVDRALELLVD",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"Q46925"},
		"label":"csda_ecoli"
	},
	{
		"object":"interactor",
		"sequence":"MTNPQFAGHPFGTTVTAETLRNTFAPLTQWEDKYRQLIMLGKQLPALPDELKAQAKEIAGCENRVWLGYTVAENGKMHFFGDSEGRIVRGLLAVLLTAVEGKTAAELQAQSPLALFDELGLRAQLSASRSQGLNALSEAIIAATKQV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0AGF2"},
		"label":"csde_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"4lw4"},{"db":"intact","id":"EBI-8852646"},{"db":"intenz","id":"EC 2.8.1.7"}],
		"expansion":{"id":"36","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q46925"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11456560",
				"name":"csde binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["15078183"]
				},
				{
				"id":"15955274",
				"name":"plp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["26826494"]
				},
				{
				"id":"1987861",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AGF2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"15078183",
				"name":"csda binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["11456560"]
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
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"4lw4"},{"db":"intact","id":"EBI-8852646"},{"db":"intenz","id":"EC 2.8.1.7"}],
		"expansion":{"id":"36","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q46925"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11456560",
				"name":"csde binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["15078183"]
				},
				{
				"id":"15955274",
				"name":"plp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["26826494"]
				},
				{
				"id":"1987861",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:18405"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26826494",
				"name":"csda binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["15955274"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 4.4.1.16"},{"db":"intenz","id":"EC 2.8.1.7"},{"db":"wwpdb","id":"4lw2"},{"db":"intact","id":"EBI-8852607"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:18405"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"23326042",
				"name":"csda binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["24368474"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q46925"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"29108289",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				},
				{
				"id":"24368474",
				"name":"plp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["23326042"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MACGEFSLIARYFDRVRSSRLDVELGIGDDCALLNIPEKQTLAISTDTLVAGNHFLPDIDPADLAYKALAVNLSDLAAMGADPAWLTLALTLPDVDEAWLESFSDSLFDLLNYYDMQLIGGDTTRGPLSMTLGIHGFVPMGRALTRSGAKPGDWIYVTGTPGDSAAGLAILQNRLQVADAKDADYLIKRHLRPSPRILQGQALRDLANSAIDLSDGLISDLGHIVKASDCGARIDLALLPFSDALSRHVEPEQALRWALSGGEDYELCFTVPELNRGALDVALGHLGVPFTCIGQMTADIEGLCFIRDGEPVTLDWKGYDHFATP",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0AGG0"},
		"label":"thil_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 2.8.1.7"},{"db":"intenz","id":"EC 2.7.4.16"},{"db":"intact","id":"EBI-8870047"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0AGG0"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32959301",
				"name":"iscs binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["30424728"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0A6B7"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"30424728",
				"name":"thil binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["32959301"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAYSEKVIDHYENPRNVGSFDNNDENVGSGMVGAPACGDVMKLQIKVNDEGIIEDARFKTYGCGSAIASSSLVTEWVKGKSLDEAQAIKNTDIAEELELPPVKIHCSILAEDAIKAAIADYKSKREAK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0ACD4"},
		"label":"iscu_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 2.8.1.7"},{"db":"wwpdb","id":"3lvl"},{"db":"intact","id":"EBI-8870238"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACD4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"12416324",
				"name":"iscs binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["6151259"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0A6B7"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"6151259",
				"name":"iscu binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["12416324"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MTDLFSSPDHTLDALGLRCPEPVMMVRKTVRNMQPGETLLIIADDPATTRDIPGFCTFMEHELVAKETDGLPYRYLIRKGG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A890"},
		"label":"tusa_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 2.8.1.7"},{"db":"wwpdb","id":"3lvj"},{"db":"wwpdb","id":"3lvk"},{"db":"intact","id":"EBI-8869931"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A890"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"ptms":[
				{
				"id":"3018462",
				"name":"iscs binding region",
				"type":{"id":"MOD:00274","name":"L-cysteine persulfide"},
				"sequenceData":["19-19"],
				"linkedFeatures":["30547782"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0A6B7"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"ptms":[
				{
				"id":"30547782",
				"name":"tusa binding region",
				"type":{"id":"MOD:00274","name":"L-cysteine persulfide"},
				"sequenceData":["328-328"],
				"linkedFeatures":["3018462"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLHTLHRSPWLTDFAALLRLLSEGDELLLLQDGVTAAVDGNRYLESLRNAPIKVYALNEDLIARGLTGQISNDIILIDYTDFVRLTVKHPSQMAW",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P45530"},
		"label":"tusb_ecoli"
	},
	{
		"object":"interactor",
		"sequence":"MKRIAFVFSTAPHGTAAGREGLDALLATSALTDDLAVFFIADGVFQLLPGQKPDAVLARDYIATFKLLGLYDIEQCWVCAASLRERGLDPQTPFVVEATPLEADALRRELANYDVILRF",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P45531"},
		"label":"tusc_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"2d1p"},{"db":"intenz","id":"EC 2.8.1.7"},{"db":"intact","id":"EBI-8872193"}],
		"expansion":{"id":"37","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P45530"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P45531"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLIFEGKEIETDTEGYLKESSQWSEPLAVVIAENEGISLSPEHWEVVRFVRDFYLEFNTSPAIRMLVKAMANKFGEEKGNSRYLYRLFPKGPAKQATKIAGLPKPVKCI",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0AB18"},
		"label":"tuse_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"2d1p"},{"db":"intenz","id":"EC 2.8.1.7"},{"db":"intact","id":"EBI-8872193"}],
		"expansion":{"id":"37","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P45530"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AB18"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MRFAIVVTGPAYGTQQASSAFQFAQALIADGHELSSVFFYREGVYNANQLTSPASDEFDLVRAWQQLNAQHGVALNICVAAALRRGVVDETEAGRLGLASSNLQQGFTLSGLGALAEASLTCDRVVQF",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P45532"},
		"label":"tusd_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"2d1p"},{"db":"intenz","id":"EC 2.8.1.7"},{"db":"intact","id":"EBI-8872193"}],
		"expansion":{"id":"37","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P45530"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P45532"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSETAKKVIVGMSGGVDSSVSAWLLQQQGYQVEGLFMKNWEEDDGEEYCTAAADLADAQAVCDKLGIELHTVNFAAEYWDNVFELFLAEYKAGRTPNPDILCNKEIKFKAFLEFAAEDLGADYIATGHYVRRADVDGKSRLLRGLDSNKDQSYFLYTLSHEQIAQSLFPVGELEKPQVRKIAEDLGLVTAKKKDSTGICFIGERKFREFLGRYLPAQPGKIITVDGDEIGEHQGLMYHTLGQRKGLGIGGTKEGTEEPWYVVDKDVENNILVVAQGHEHPRLMSVGLIAQQLHWVDREPFTGTMRCTVKTRYRQTDIPCTVKALDDDRIEVIFDEPVAAVTPGQSAVFYNGEVCLGGGIIEQRLPLPV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P25745"},
		"label":"mnma_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 2.8.1.7"},{"db":"intact","id":"EBI-8872270"}],
		"expansion":{"id":"38","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0AB18"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"210644",
				"name":"mnma binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["17087803"]
				}],
			"ptms":[
				{
				"id":"2331383",
				"name":"persulfide binding site",
				"type":{"id":"MOD:00274","name":"L-cysteine persulfide"},
				"sequenceData":["108-108"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P25745"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17087803",
				"name":"tuse binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["210644"]
				},
				{
				"id":"25536682",
				"name":"trna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["278275"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0325","name":"transfer rna"},
		"organism":{"taxid":"559292","common":"yeast","scientific":"Saccharomyces cerevisiae (strain ATCC 204508 \/ S288c)"},
		"identifier":{"db":"chebi","id":"CHEBI:17843"},
		"label":"trna"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 2.8.1.7"},{"db":"intact","id":"EBI-8872270"}],
		"expansion":{"id":"38","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0AB18"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"210644",
				"name":"mnma binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["17087803"]
				}],
			"ptms":[
				{
				"id":"2331383",
				"name":"persulfide binding site",
				"type":{"id":"MOD:00274","name":"L-cysteine persulfide"},
				"sequenceData":["108-108"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:17843"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"278275",
				"name":"mnma binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["25536682"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGTTKHSKLLILGSGPAGYTAAVYAARANLQPVLITGMEKGGQLTTTTEVENWPGDPNDLTGPLLMERMHEHATKFETEIIFDHINKVDLQNRPFRLNGDNGEYTCDALIIATGASARYLGLPSEEAFKGRGVSACATCDGFFYRNQKVAVIGGGNTAVEEALYLSNIASEVHLIHRRDGFRAEKILIKRLMDKVENGNIILHTNRTLEEVTGDQMGVTGVRLRDTQNSDNIESLDVAGLFVAIGHSPNTAIFEGQLELENGYIKVQSGIHGNATQTSIPGVFAAGDVMDHIYRQAITSAGTGCMAALDAERYLDGLADAK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A9P4"},
		"label":"trxb_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1tdf"},{"db":"wwpdb","id":"1f6m"},{"db":"intact","id":"EBI-8874189"},{"db":"intenz","id":"EC 1.8.1.9"}],
		"expansion":{"id":"39","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A9P4"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"12915009",
				"name":"nadp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				},
				{
				"id":"32500955",
				"name":"fad binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:16238"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"10953199",
				"name":"trxb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:25523"},
		"label":"nadp"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1tdf"},{"db":"wwpdb","id":"1f6m"},{"db":"intact","id":"EBI-8874189"},{"db":"intenz","id":"EC 1.8.1.9"}],
		"expansion":{"id":"39","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A9P4"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"12915009",
				"name":"nadp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				},
				{
				"id":"32500955",
				"name":"fad binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:25523"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"10804878",
				"name":"trxb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAGLKLQAVTKSWDGKTQVIKPLTLDVADGEFIVMVGPSGCGKSTLLRMVAGLERVTEGDIWINDQRVTEMEPKDRGIAMVFQNYALYPHMSVEENMAWGLKIRGMGKQQIAERVKEAARILELDGLLKRRPRELSGGQRQRVAMGRAIVRDPAVFLFDEPLSNLDAKLRVQMRLELQQLHRRLKTTSLYVTHDQVEAMTLAQRVMVMNGGVAEQIGTPVEVYEKPASLFVASFIGSPAMNLLTGRVNNEGTHFELDGGIELPLNGGYRQYAGRKMTLGIRPEHIALSSQAEGGVPMVMDTLEILGADNLAHGRWGEQKLVVRLAHQERPTAGSTLWLHLAENQLHLFDGETGQRV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P10907"},
		"label":"ugpc_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC  3.6.3.20"},{"db":"intact","id":"EBI-8875874"}],
		"expansion":{"id":"40","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P10907"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"999171",
				"name":"ugpa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["15864135"]
				},
				{
				"id":"5005124",
				"name":"ugpe binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["160184"]
				},
				{
				"id":"7858717",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["11213641"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11213641",
				"name":"ugpc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["7858717"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKPLHYTASALALGLALMGNAQAVTTIPFWHSMEGELGKEVDSLAQRFNAENPDYKIVPTYKGNYEQNLSAGIAAFRTGNAPAILQVYEVGTATMMASKAIKPVYDVFKEAGIQFDESQFVPTVSGYYSDSKTGHLLSQPFNSSTPVLYYNKDAFKKAGLDPEQPPKTWQDLADYAAKLKASGMKCGYASGWQGWIQLENFSAWNGLPFASKNNGFDGTDAVLEFNKPEQVKHIAMLEEMNKKGDFSYVGRKDESTEKFYNGDCAMTTASSGSLANIREYAKFNYGVGMMPYDADAKDAPQNAIIGGASLWVMQGKDKETYTGVAKFLDFLAKPENAAEWHQKTGYLPITKAAYDLTREQGFYEKNPGADTATRQMLNKPPLPFTKGLRLGNMPQIRVIVDEELESVWTGKKTPQQALDTAVERGNQLLRRFEKSTKS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0AG80"},
		"label":"ugpb_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC  3.6.3.20"},{"db":"intact","id":"EBI-8875874"}],
		"expansion":{"id":"40","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P10907"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"999171",
				"name":"ugpa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["15864135"]
				},
				{
				"id":"5005124",
				"name":"ugpe binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["160184"]
				},
				{
				"id":"7858717",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["11213641"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AG80"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"25983454",
				"name":"ugpa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["26534846"]
				},
				{
				"id":"32762214",
				"name":"ugpe binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["6316803"]
				},
				{
				"id":"287585",
				"name":"g3p binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1618383"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MIENRPWLTIFSHTMLILGIAVILFPLYVAFVAATLDKQAVYAAPMTLIPGTHLLENIHNIWVNGVGTNSAPFWRMLLNSFVMAFSITLGKITVSMLSAFAIVWFRFPLRNLFFWMIFITLMLPVEVRIFPTVEVIANLQMLDSYAGLTLPLMASATATFLFRQFFMTLPDELVEAARIDGASPMRFFCDIVFPLSKTNLAALFVITFIYGWNQYLWPLLIITDVDLGTTVAGIKGMIATGEGTTEWNSVMVAMLLTLIPPVVIVLVMQRAFVRGLVDSEK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P10906"},
		"label":"ugpe_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC  3.6.3.20"},{"db":"intact","id":"EBI-8875874"}],
		"expansion":{"id":"40","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P10907"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"999171",
				"name":"ugpa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["15864135"]
				},
				{
				"id":"5005124",
				"name":"ugpe binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["160184"]
				},
				{
				"id":"7858717",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["11213641"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P10906"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"21076587",
				"name":"ugpa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["68966"]
				},
				{
				"id":"6316803",
				"name":"ugpb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["32762214"]
				},
				{
				"id":"18269278",
				"name":"g3p binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["28703214"]
				},
				{
				"id":"160184",
				"name":"ugpc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["5005124"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSSSRPVFRSRWLPYLLVAPQLIITVIFFIWPAGEALWYSLQSVDPFGFSSQFVGLDNFVTLFHDSYYLDSFWTTIKFSTFVTVSGLLVSLFFAALVEYIVRGSRFYQTLMLLPYAVAPAVAAVLWIFLFNPGRGLITHFLAEFGYDWNHAQNSGQAMFLVVFASVWKQISYNFLFFYAALQSIPRSLIEAAAIDGAGPIRRFFKIALPLIAPVSFFLLVVNLVYAFFDTFPVIDAATSGGPVQATTTLIYKIYREGFTGLDLASSAAQSVVLMFLVIVLTVVQFRYVESKVRYQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P10905"},
		"label":"ugpa_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC  3.6.3.20"},{"db":"intact","id":"EBI-8875874"}],
		"expansion":{"id":"40","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P10907"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"999171",
				"name":"ugpa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["15864135"]
				},
				{
				"id":"5005124",
				"name":"ugpe binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["160184"]
				},
				{
				"id":"7858717",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["11213641"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P10905"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"68966",
				"name":"ugpe binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21076587"]
				},
				{
				"id":"15864135",
				"name":"ugpc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["999171"]
				},
				{
				"id":"26534846",
				"name":"ugpb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["25983454"]
				},
				{
				"id":"2852209",
				"name":"g3p binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21363808"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:15978"},
		"label":"sn-glycerol 3-phosphate"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC  3.6.3.20"},{"db":"intact","id":"EBI-8875874"}],
		"expansion":{"id":"40","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P10907"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"999171",
				"name":"ugpa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["15864135"]
				},
				{
				"id":"5005124",
				"name":"ugpe binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["160184"]
				},
				{
				"id":"7858717",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["11213641"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15978"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"1618383",
				"name":"ugpb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["287585"]
				},
				{
				"id":"28703214",
				"name":"ugpe binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["18269278"]
				},
				{
				"id":"21363808",
				"name":"ugpa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["2852209"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSKPFKLNSAFKPSGDQPEAIRRLEEGLEDGLAHQTLLGVTGSGKTFTIANVIADLQRPTMVLAPNKTLAAQLYGEMKEFFPENAVEYFVSYYDYYQPEAYVPSSDTFIEKDASVNEHIEQMRLSATKAMLERRDVVVVASVSAIYGLGDPDLYLKMMLHLTVGMIIDQRAILRRLAELQYARNDQAFQRGTFRVRGEVIDIFPAESDDIALRVELFDEEVERLSLFDPLTGQIVSTIPRFTIYPKTHYVTPRERIVQAMEEIKEELAARRKVLLENNKLLEEQRLTQRTQFDLEMMNELGYCSGIENYSRFLSGRGPGEPPPTLFDYLPADGLLVVDESHVTIPQIGGMYRGDRARKETLVEYGFRLPSALDNRPLKFEEFEALAPQTIYVSATPGNYELEKSGGDVVDQVVRPTGLLDPIIEVRPVATQVDDLLSEIRQRAAINERVLVTTLTKRMAEDLTEYLEEHGERVRYLHSDIDTVERMEIIRDLRLGEFDVLVGINLLREGLDMPEVSLVAILDADKEGFLRSERSLIQTIGRAARNVNGKAILYGDKITPSMAKAIGETERRREKQQKYNEEHGITPQGLNKKVVDILALGQNIAKTKAKGRGKSRPIVEPDNVPMDMSPKALQQKIHELEGLMMQHAQNLEFEEAAQIRDQLHQLRELFIAAS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A8F8"},
		"label":"uvrb_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"3.6.1.3"},{"db":"intact","id":"EBI-9004110"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"29106964",
				"name":"uvrb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["10681360"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0A8F8"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"10681360",
				"name":"atp binding region",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["1-660"],
				"linkedFeatures":["29106964"]
				},
				{
				"id":"5420584",
				"name":"dimerisation domain",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["1-660"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSDQFDAKAFLKTVTSQPGVYRMYDAGGTVIYVGKAKDLKKRLSSYFRSNLASRKTEALVAQIQQIDVTVTHTETEALLLEHNYIKLYQPRYNVLLRDDKSYPFIFLSGDTHPRLAMHRGAKHAKGEYFGPFPNGYAVRETLALLQKIFPIRQCENSVYRNRSRPCLQYQIGRCLGPCVEGLVSEEEYAQQVEYVRLFLSGKDDQVLTQLISRMETASQNLEFEEAARIRDQIQAVRRVTEKQFVSNTGDDLDVIGVAFDAGMACVHVLFIRQGKVLGSRSYFPKVPGGTELSEVVETFVGQFYLQGSQMRTLPGEILLDFNLSDKTLLADSLSELAGRKINVQTKPRGDRARYLKLARTNAATALTSKLSQQSTVHQRLTALASVLKLPEVKRMECFDISHTMGEQTVASCVVFDANGPLRAEYRRYNITGITPGDDYAAMNQVLRRRYGKAIDDSKIPDVILIDGGKGQLAQAKNVFAELDVSWDKNHPLLLGVAKGADRKAGLETLFFEPEGEGFSLPPDSPALHVIQHIRDESHDHAIGGHRKKRAKVKNTSSLETIEGVGPKRRQMLLKYMGGLQGLRNASVEEIAKVPGISQGLAEKIFWSLKH",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A8G0"},
		"label":"uvrc_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"3.6.1.3"},{"db":"intact","id":"EBI-9004163"}],
		"expansion":{"id":"41","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A8G0"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26340554",
				"name":"uvrb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["22078836"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"547780",
				"name":"uvrb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["12629348"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"3.6.1.3"},{"db":"intact","id":"EBI-9004163"}],
		"expansion":{"id":"41","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A8G0"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26340554",
				"name":"uvrb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["22078836"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0A8F8"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"29677413",
				"name":"dimerisation domain",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["1-660"]
				},
				{
				"id":"22078836",
				"name":"uvrc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["26340554"]
				},
				{
				"id":"12629348",
				"name":"atp binding region",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["1-660"],
				"linkedFeatures":["547780"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"3.6.1.3"},{"db":"intact","id":"EBI-9003834"}],
		"expansion":{"id":"42","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A8F8"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"1650681",
				"name":"atp binding region",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["1-660"],
				"linkedFeatures":["27043676"]
				},
				{
				"id":"28291808",
				"name":"dimerisation domain",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["1-660"]
				},
				{
				"id":"561668",
				"name":"uvra binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["11159213"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27043676",
				"name":"uvrb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1650681"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDKIEVRGARTHNLKNINLVIPRDKLIVVTGLSGSGKSSLAFDTLYAEGQRRYVESLSAYARQFLSLMEKPDVDHIEGLSPAISIEQKSTSHNPRSTVGTITEIHDYLRLLFARVGEPRCPDHDVPLAAQTVSQMVDNVLSQPEGKRLMLLAPIIKERKGEHTKTLENLASQGYIRARIDGEVCDLSDPPKLELQKKHTIEVVVDRFKVRDDLTQRLAESFETALELSGGTAVVADMDDPKAEELLFSANFACPICGYSMRELEPRLFSFNNPAGACPTCDGLGVQQYFDPDRVIQNPELSLAGGAIRGWDRRNFYYFQMLKSLADHYKFDVEAPWGSLSANVHKVVLYGSGKENIEFKYMNDRGDTSIRRHPFEGVLHNMERRYKETESSAVREELAKFISNRPCASCEGTRLRREARHVYVENTPLPAISDMSIGHAMEFFNNLKLAGQRAKIAEKILKEIGDRLKFLVNVGLNYLTLSRSAETLSGGEAQRIRLASQIGAGLVGVMYVLDEPSIGLHQRDNERLLGTLIHLRDLGNTVIVVEHDEDAIRAADHVIDIGPGAGVHGGEVVAEGPLEAIMAVPESLTGQYMSGKRKIEVPKKRVPANPEKVLKLTGARGNNLKDVTLTLPVGLFTCITGVSGSGKSTLINDTLFPIAQRQLNGATIAEPAPYRDIQGLEHFDKVIDIDQSPIGRTPRSNPATYTGVFTPVRELFAGVPESRARGYTPGRFSFNVRGGRCEACQGDGVIKVEMHFLPDIYVPCDQCKGKRYNRETLEIKYKGKTIHEVLDMTIEEAREFFDAVPALARKLQTLMDVGLTYIRLGQSATTLSGGEAQRVKLARELSKRGTGQTLYILDEPTTGLHFADIQQLLDVLHKLRDQGNTIVVIEHNLDVIKTADWIVDLGPEGGSGGGEILVSGTPETVAECEASHTARFLKPML",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A698"},
		"label":"uvra_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"3.6.1.3"},{"db":"intact","id":"EBI-9003834"}],
		"expansion":{"id":"42","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A8F8"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"1650681",
				"name":"atp binding region",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["1-660"],
				"linkedFeatures":["27043676"]
				},
				{
				"id":"28291808",
				"name":"dimerisation domain",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["1-660"]
				},
				{
				"id":"561668",
				"name":"uvra binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["11159213"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0A698"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11159213",
				"name":"uvrb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["561668"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MPEQYRYTLPVKAGEQRLLGELTGAACATLVAEIAERHAGPVVLIAPDMQNALRLHDEISQFTDQMVMNLADWETLPYDSFSPHQDIISSRLSTLYQLPTMQRGVLIVPVNTLMQRVCPHSFLHGHALVMKKGQRLSRDALRTQLDSAGYRHVDQVMEHGEYATRGALLDLFPMGSELPYRLDFFDDEIDSLRVFDVDSQRTLEEVEAINLLPAHEFPTDKAAIELFRSQWRDTFEVKRDPEHIYQQVSKGTLPAGIEYWQPLFFSEPLPPLFSYFPANTLLVNTGDLETSAERFQADTLARFENRGVDPMRPLLPPQSLWLRVDELFSELKNWPRVQLKTEHLPTKAANANLGFQKLPDLAVQAQQKAPLDALRKFLETFDGPVVFSVESEGRREALGELLARIKIAPQRIMRLDEASDRGRYLMIGAAEHGFVDTVRNLALICESDLLGERVARRRQDSRRTINPDTLIRNLAELHIGQPVVHLEHGVGRYAGMTTLEAGGITGEYLMLTYANDAKLYVPVSSLHLISRYAGGAEENAPLHKLGGDAWSRARQKAAEKVRDVAAELLDIYAQRAAKEGFAFKHDREQYQLFCDSFPFETTPDQAQAINAVLSDMCQPLAMDRLVCGDVGFGKTEVAMRAAFLAVDNHKQVAVLVPTTLLAQQHYDNFRDRFANWPVRIEMISRFRSAKEQTQILAEVAEGKIDILIGTHKLLQSDVKFKDLGLLIVDEEHRFGVRHKERIKAMRANVDILTLTATPIPRTLNMAMSGMRDLSIIATPPARRLAVKTFVREYDSMVVREAILREILRGGQVYYLYNDVENIQKAAERLAELVPEARIAIGHGQMRERELERVMNDFHHQRFNVLVCTTIIETGIDIPTANTIIIERADHFGLAQLHQLRGRVGRSHHQAYAWLLTPHPKAMTTDAQKRLEAIASLEDLGAGFALATHDLEIRGAGELLGEEQSGSMETIGFSLYMELLENAVDALKAGREPSLEDLTSQQTEVELRMPSLLPDDFIPDVNTRLSFYKRIASAKTENELEEIKVELIDRFGLLPDPARTLLDIARLRQQAQKLGIRKLEGNEKGGVIEFAEKNHVNPAWLIGLLQKQPQHYRLDGPTRLKFIQDLSERKTRIEWVRQFMRELEENAIA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P30958"},
		"label":"mfd_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"4dfc"},{"db":"intact","id":"EBI-9007893"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A698"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"17182772",
				"name":"mfd binding site",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["131-250"],
				"linkedFeatures":["21408922"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P30958"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"21408922",
				"name":"uvra binding site",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["127-213"],
				"linkedFeatures":["17182772"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSDLAREITPVNIEEELKSSYLDYAMSVIVGRALPDVRDGLKPVHRRVLYAMNVLGNDWNKAYKKSARVVGDVIGKYHPHGDSAVYDTIVRMAQPFSLRYMLVDGQGNFGSIDGDSAAAMRYTEIRLAKIAHELMADLEKETVDFVDNYDGTEKIPDVMPTKIPNLLVNGSSGIAVGMATNIPPHNLTEVINGCLAYIDDEDISIEGLMEHIPGPDFPTAAIINGRRGIEEAYRTGRGKVYIRARAEVEVDAKTGRETIIVHEIPYQVNKARLIEKIAELVKEKRVEGISALRDESDKDGMRIVIEVKRDAVGEVVLNNLYSQTQLQVSFGINMVALHHGQPKIMNLKDIIAAFVRHRREVVTRRTIFELRKARDRAHILEALAVALANIDPIIELIRHAPTPAEAKTALVANPWQLGNVAAMLERAGDDAARPEWLEPEFGVRDGLYYLTEQQAQAILDLRLQKLTGLEHEKLLDEYKELLDQIAELLRILGSADRLMEVIREELELVREQFGDKRRTEITANSADINLEDLITQEDVVVTLSHQGYVKYQPLSEYEAQRRGGKGKSAARIKEEDFIDRLLVANTHDHILCFSSRGRVYSMKVYQLPEATRGARGRPIVNLLPLEQDERITAILPVTEFEEGVKVFMATANGTVKKTVLTEFNRLRTAGKVAIKLVDGDELIGVDLTSGEDEVMLFSAEGKVVRFKESSVRAMGCNTTGVRGIRLGEGDKVVSLIVPRGDGAILTATQNGYGKRTAVAEYPTKSRATKGVISIKVTERNGLVVGAVQVDDCDQIMMITDAGTLVRTRVSEISIVGRNTQGVILIRTAEDENVVGLQRVAEPVDEEDLDTIDGSAAEGDDEIAPEVDVDDEPEEE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0AES4"},
		"label":"gyra_ecoli"
	},
	{
		"object":"interactor",
		"sequence":"MSNSYDSSSIKVLKGLDAVRKRPGMYIGDTDDGTGLHHMVFEVVDNAIDEALAGHCKEIIVTIHADNSVSVQDDGRGIPTGIHPEEGVSAAEVIMTVLHAGGKFDDNSYKVSGGLHGVGVSVVNALSQKLELVIQREGKIHRQIYEHGVPQAPLAVTGETEKTGTMVRFWPSLETFTNVTEFEYEILAKRLRELSFLNSGVSIRLRDKRDGKEDHFHYEGGIKAFVEYLNKNKTPIHPNIFYFSTEKDGIGVEVALQWNDGFQENIYCFTNNIPQRDGGTHLAGFRAAMTRTLNAYMDKEGYSKKAKVSATGDDAREGLIAVVSVKVPDPKFSSQTKDKLVSSEVKSAVEQQMNELLAEYLLENPTDAKIVVGKIIDAARAREAARRAREMTRRKGALDLAGLPGKLADCQERDPALSELYLVEGDSAGGSAKQGRNRKNQAILPLKGKILNVEKARFDKMLSSQEVATLITALGCGIGRDEYNPDKLRYHSIIIMTDADVDGSHIRTLLLTFFYRQMPEIVERGHVYIAQPPLYKVKKGKQEQYIKDDEAMDQYQISIALDGATLHTNASAPALAGEALEKLVSEYNATQKMINRMERRYPKAMLKELIYQPTLTEADLSDEQTVTRWVNALVSELNDKEQHGSQWKFDVHTNAEQNLFEPIVRVRTHGVDTDYPLDHEFITGGEYRRICTLGEKLRGLLEEDAFIERGERRQPVASFEQALDWLVKESRRGLSIQRYKGLGEMNPEQLWETTMDPESRRMLRVTVKDAIAADQLFTTLMGDAVEPRRAFIEENALKAANIDI",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0AES6"},
		"label":"gyrb_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"chembl","id":"CHEMBL2094139"},{"db":"intact","id":"EBI-9008779"},{"db":"wwpdb","id":"3nuh"},{"db":"intenz","id":"5.99.1.3"}],
		"expansion":{"id":"43","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0AES4"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"15579986",
				"name":"gyrb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["27599018"]
				},
				{
				"id":"234076",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AES6"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27599018",
				"name":"gyra binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["15579986"]
				},
				{
				"id":"8257294",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["n-n"],
				"linkedFeatures":["32767416"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"chembl","id":"CHEMBL2094139"},{"db":"intact","id":"EBI-9008779"},{"db":"wwpdb","id":"3nuh"},{"db":"intenz","id":"5.99.1.3"}],
		"expansion":{"id":"43","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0AES4"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"15579986",
				"name":"gyrb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["27599018"]
				},
				{
				"id":"234076",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32767416",
				"name":"gyrb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["8257294"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLRVYHSNRLDVLEALMEFIVERERLDDPFEPEMILVQSTGMAQWLQMTLSQKFGIAANIDFPLPASFIWDMFVRVLPEIPKESAFNKQSMSWKLMTLLPQLLEREDFTLLRHYLTDDSDKRKLFQLSSKAADLFDQYLVYRPDWLAQWETGHLVEGLGEAQAWQAPLWKALVEYTHQLGQPRWHRANLYQRFIETLESATTCPPGLPSRVFICGISALPPVYLQALQALGKHIEIHLLFTNPCRYYWGDIKDPAYLAKLLTRQRRHSFEDRELPLFRDSENAGQLFNSDGEQDVGNPLLASWGKLGRDYIYLLSDLESSQELDAFVDVTPDNLLHNIQSDILELENRAVAGVNIEEFSRSDNKRPLDPLDSSITFHVCHSPQREVEVLHDRLLAMLEEDPTLTPRDIIVMVADIDSYSPFIQAVFGSAPADRYLPYAISDRRARQSHPVLEAFISLLSLPDSRFVSEDVLALLDVPVLAARFDITEEGLRYLRQWVNESGIRWGIDDDNVRELELPATGQHTWRFGLTRMLLGYAMESAQGEWQSVLPYDESSGLIAELVGHLASLLMQLNIWRRGLAQERPLEEWLPVCRDMLNAFFLPDAETEAAMTLIEQQWQAIIAEGLGAQYGDAVPLSLLRDELAQRLDQERISQRFLAGPVNICTLMPMRSIPFKVVCLLGMNDGVYPRQLAPLGFDLMSQKPKRGDRSRRDDDRYLFLEALISAQQKLYISYIGRSIQDNSERFPSVLVQELIDYIGQSHYLPGDEALNCDESEARVKAHLTCLHTRMPFDPQNYQPGERQSYAREWLPAASQAGKAHSEFVQPLPFTLPETVPLETLQRFWAHPVRAFFQMRLQVNFRTEDSEIPDTEPFILEGLSRYQINQQLLNALVEQDDAERLFRRFRAAGDLPYGAFGEIFWETQCQEMQQLADRVIACRQPGQSMEIDLACNGVQITGWLPQVQPDGLLRWRPSLLSVAQGMQLWLEHLVYCASGGNGESRLFLRKDGEWRFPPLAAEQALHYLSQLIEGYREGMSAPLLVLPESGGAWLKTCYDAQNDAMLDDDSTLQKARTKFLQAYEGNMMVRGEGDDIWYQRLWRQLTPETMEAIVEQSQRFLLPLFRFNQS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P07648"},
		"label":"recc_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"3.1.11.5"},{"db":"wwpdb","id":"1w36"},{"db":"intact","id":"EBI-9009144"},{"db":"chembl","id":"CHEMBL2095232"},{"db":"wwpdb","id":"3k70"}],
		"expansion":{"id":"44","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P07648"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26631913",
				"name":"recd binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["19996177"]
				},
				{
				"id":"28119181",
				"name":"recb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["18464978"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"29501931",
				"name":"recd binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["5113409"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSDVAETLDPLRLPLQGERLIEASAGTGKTFTIAALYLRLLLGLGGSAAFPRPLTVEELLVVTFTEAATAELRGRIRSNIHELRIACLRETTDNPLYERLLEEIDDKAQAAQWLLLAERQMDEAAVFTIHGFCQRMLNLNAFESGMLFEQQLIEDESLLRYQACADFWRRHCYPLPREIAQVVFETWKGPQALLRDINRYLQGEAPVIKAPPPDDETLASRHAQIVARIDTVKQQWRDAVGELDALIESSGIDRRKFNRSNQAKWIDKISAWAEEETNSYQLPESLEKFSQRFLEDRTKAGGETPRHPLFEAIDQLLAEPLSIRDLVITRALAEIRETVAREKRRRGELGFDDMLSRLDSALRSESGEVLAAAIRTRFPVAMIDEFQDTDPQQYRIFRRIWHHQPETALLLIGDPKQAIYAFRGADIFTYMKARSEVHAHYTLDTNWRSAPGMVNSVNKLFSQTDDAFMFREIPFIPVKSAGKNQALRFVFKGETQPAMKMWLMEGESCGVGDYQSTMAQVCAAQIRDWLQAGQRGEALLMNGDDARPVRASDISVLVRSRQEAAQVRDALTLLEIPSVYLSNRDSVFETLEAQEMLWLLQAVMTPERENTLRSALATSMMGLNALDIETLNNDEHAWDVVVEEFDGYRQIWRKRGVMPMLRALMSARNIAENLLATAGGERRLTDILHISELLQEAGTQLESEHALVRWLSQHILEPDSNASSQQMRLESDKHLVQIVTIHKSKGLEYPLVWLPFITNFRVQEQAFYHDRHSFEAVLDLNAAPESVDLAEAERLAEDLRLLYVALTRSVWHCSLGVAPLVRRRGDKKGDTDVHQSALGRLLQKGEPQDAAGLRTCIEALCDDDIAWQTAQTGDNQPWQVNDVSTAELNAKTLQRLPGDNWRVTSYSGLQQRGHGIAQDLMPRLDVDAAGVASVVEEPTLTPHQFPRGASPGTFLHSLFEDLDFTQPVDPNWVREKLELGGFESQWEPVLTEWITAVLQAPLNETGVSLSQLSARNKQVEMEFYLPISEPLIASQLDTLIRQFDPLSAGCPPLEFMQVRGMLKGFIDLVFRHEGRYYLLDYKSNWLGEDSSAYTQQAMAAAMQAHRYDLQYQLYTLALHRYLRHRIADYDYEHHFGGVIYLFLRGVDKEHPQQGIYTTRPNAGLIALMDEMFAGMTLEEA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P08394"},
		"label":"recb_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"3.1.11.5"},{"db":"wwpdb","id":"1w36"},{"db":"intact","id":"EBI-9009144"},{"db":"chembl","id":"CHEMBL2095232"},{"db":"wwpdb","id":"3k70"}],
		"expansion":{"id":"44","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P07648"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26631913",
				"name":"recd binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["19996177"]
				},
				{
				"id":"28119181",
				"name":"recb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["18464978"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P08394"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"18464978",
				"name":"recc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["28119181"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKLQKQLLEAVEHKQLRPLDVQFALTVAGDEHPAVTLAAALLSHDAGEGHVCLPLSRLENNEASHPLLATCVSEIGELQNWEECLLASQAVSRGDEPTPMILCGDRLYLNRMWCNERTVARFFNEVNHAIEVDEALLAQTLDKLFPVSDEINWQKVAAAVALTRRISVISGGPGTGKTTTVAKLLAALIQMADGERCRIRLAAPTGKAAARLTESLGKALRQLPLTDEQKKRIPEDASTLHRLLGAQPGSQRLRHHAGNPLHLDVLVVDEASMIDLPMMSRLIDALPDHARVIFLGDRDQLASVEAGAVLGDICAYANAGFTAERARQLSRLTGTHVPAGTGTEAASLRDSLCLLQKSYRFGSDSGIGQLAAAINRGDKTAVKTVFQQDFTDIEKRLLQSGEDYIAMLEEALAGYGRYLDLLQARAEPDLIIQAFNEYQLLCALREGPFGVAGLNERIEQFMQQKRKIHRHPHSRWYEGRPVMIARNDSALGLFNGDIGIALDRGQGTRVWFAMPDGNIKSVQPSRLPEHETTWAMTVHKSQGSEFDHAALILPSQRTPVVTRELVYTAVTRARRRLSLYADERILSAAIATRTERRSGLAALFSSRE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P04993"},
		"label":"recd_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"3.1.11.5"},{"db":"wwpdb","id":"1w36"},{"db":"intact","id":"EBI-9009144"},{"db":"chembl","id":"CHEMBL2095232"},{"db":"wwpdb","id":"3k70"}],
		"expansion":{"id":"44","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P07648"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26631913",
				"name":"recd binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["19996177"]
				},
				{
				"id":"28119181",
				"name":"recb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["18464978"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P04993"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19996177",
				"name":"recc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["26631913"]
				},
				{
				"id":"5113409",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["29501931"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDQKQIEEIVRSVMASMGQAAPAPSEAKCATTNCAAPVTSESCALDLGSAEAKAWIGVENPHRADVLTELRRSTVARVCTGRAGPRPRTQALLRFLADHSRSKDTVLKEVPEEWVKAQGLLEVRSEISDKNLYLTRPDMGRRLCAEAVEALKAQCVANPDVQVVISDGLSTDAITVNYEEILPPLMAGLKQAGLKVGTPFFVRYGRVKIEDQIGEILGAKVVILLVGERPGLGQSESLSCYAVYSPRMATTVEADRTCISNIHQGGTPPVEAAAVIVDLAKRMLEQKASGINMTR",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P19636"},
		"label":"eutc_ecoli"
	},
	{
		"object":"interactor",
		"sequence":"MKLKTTLFGNVYQFKDVKEVLAKANELRSGDVLAGVAAASSQERVAAKQVLSEMTVADIRNNPVIAYEDDCVTRLIQDDVNETAYNQIKNWSISELREYVLSDETSVDDIAFTRKGLTSEVVAAVAKICSNADLIYGAKKMPVIKKANTTIGIPGTFSARLQPNDTRDDVQSIAAQIYEGLSFGVGDAVIGVNPVTDDVENLSRVLDTIYGVIDKFNIPTQGCVLAHVTTQIEAIRRGAPGGLIFQSICGSEKGLKEFGVELAMLDEARAVGAEFNRIAGENCLYFETGQGSALSAGANFGADQVTMEARNYGLARHYDPFIVNTVVGFIGPEYLYNDRQIIRAGLEDHFMGKLSGISMGCDCCYTNHADADQNLNENLMILLATAGCNYIMGMPLGDDIMLNYQTTAFHDTATVRQLLNLRPSPEFERWLESMGIMANGRLTKRAGDPSLFF",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0AEJ6"},
		"label":"eutb_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"3abo"},{"db":"intact","id":"EBI-9012157"},{"db":"wwpdb","id":"3abs"},{"db":"wwpdb","id":"3abq"},{"db":"intenz","id":"4.3.1.7"},{"db":"wwpdb","id":"3abr"}],
		"expansion":{"id":"45","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P19636"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"8166589",
				"name":"eutb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["44-295"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AEJ6"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"18239233",
				"name":"eutc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"3abo"},{"db":"intact","id":"EBI-9012157"},{"db":"wwpdb","id":"3abs"},{"db":"wwpdb","id":"3abq"},{"db":"intenz","id":"4.3.1.7"},{"db":"wwpdb","id":"3abr"}],
		"expansion":{"id":"45","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P19636"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"8166589",
				"name":"eutb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["44-295"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:30411"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	}
	]
}{
"data":[
	{
		"object":"interactor",
		"sequence":"MAETKIVVGPQPFSVGEEYPWLAERDEDGAVVTFTGKVRNHNLGDSVNALTLEHYPGMTEKALAEIVDEARNRWPLGRVTVIHRIGELWPGDEIVFVGVTSAHRSSAFEAGQFIMDYLKTRAPFWKREATPEGDRWVEARESDQQAAKRW",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P30749"},
		"label":"moae_ecoli"
	},
	{
		"object":"interactor",
		"sequence":"MIKVLFFAQVRELVGTDATEVAADFPTVEALRQHMAAQSDRWALALEDGKLLAAVNQTLVSFDHPLTDGDEVAFFPPVTGG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P30748"},
		"label":"moad_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1fm0"},{"db":"wwpdb","id":"1nvi"},{"db":"wwpdb","id":"3bii"},{"db":"intenz","id":"EC 2.8.1.12"},{"db":"wwpdb","id":"1fma"},{"db":"intact","id":"EBI-6876660"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P30749"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19842387",
				"name":"moad binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-150"],
				"linkedFeatures":["27055611"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P30748"},
			"bioRole":{"id":"MI:0918","name":"donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27055611",
				"name":"moae binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-81"],
				"linkedFeatures":["19842387"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAELSDQEMLRYNRQIILRGFDFDGQEALKDSRVLIVGLGGLGCAASQYLASAGVGNLTLLDFDTVSLSNLQRQTLHSDATVGQPKVESARDALTRINPHIAITPVNALLDDAELAALIAEHDLVLDCTDNVAVRNQLNAGCFAAKVPLVSGAAIRMEGQITVFTYQDGEPCYRCLSRLFGENALTCVEAGVMAPLIGVIGSLQAMEAIKMLAGYGKPASGKIVMYDAMTCQFREMKLMRNPGCEVCGQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P12282"},
		"label":"moeb_ecoli"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:15422"},
		"label":"atp"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1jwb"},{"db":"wwpdb","id":"1JWA"},{"db":"intenz","id":"2.7.7.80"},{"db":"wwpdb","id":"1jw9"},{"db":"intact","id":"EBI-6868559"}],
		"expansion":{"id":"0","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P12282"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27559124",
				"name":"moab binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"],
				"linkedFeatures":["827934"]
				},
				{
				"id":"23566077",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"],
				"linkedFeatures":["32101730"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0918","name":"donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32101730",
				"name":"moeb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["23566077"]
				},
				{
				"id":"12065021",
				"name":"moed binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["7376515"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1jwb"},{"db":"wwpdb","id":"1JWA"},{"db":"intenz","id":"2.7.7.80"},{"db":"wwpdb","id":"1jw9"},{"db":"intact","id":"EBI-6868559"}],
		"expansion":{"id":"0","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P12282"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27559124",
				"name":"moab binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"],
				"linkedFeatures":["827934"]
				},
				{
				"id":"23566077",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"],
				"linkedFeatures":["32101730"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P30748"},
			"bioRole":{"id":"MI:0919","name":"acceptor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"7376515",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-81"],
				"linkedFeatures":["12065021"]
				},
				{
				"id":"827934",
				"name":"moeb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-81"],
				"linkedFeatures":["27559124"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKIRSQVGMVLNLDKCIGCHTCSVTCKNVWTSREGVEYAWFNNVETKPGQGFPTDWENQEKYKGGWIRKINGKLQPRMGNRAMLLGKIFANPHLPGIDDYYEPFDFDYQNLHTAPEGSKSQPIARPRSLITGERMAKIEKGPNWEDDLGGEFDKLAKDKNFDNIQKAMYSQFENTFMMYLPRLCEHCLNPACVATCPSGAIYKREEDGIVLIDQDKCRGWRMCITGCPYKKIYFNWKSGKSEKCIFCYPRIEAGQPTVCSETCVGRIRYLGVLLYDADAIERAASTENEKDLYQRQLDVFLDPNDPKVIEQAIKDGIPLSVIEAAQQSPVYKMAMEWKLALPLHPEYRTLPMVWYVPPLSPIQSAADAGELGSNGILPDVESLRIPVQYLANLLTAGDTKPVLRALKRMLAMRHYKRAETVDGKVDTRALEEVGLTEAQAQEMYRYLAIANYEDRFVVPSSHRELAREAFPEKNGCGFTFGDGCHGSDTKFNLFNSRRIDAIDVTSKTEPHP",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P11349"},
		"label":"narh_ecoli"
	},
	{
		"object":"interactor",
		"sequence":"MQFLNMFFFDIYPYIAGAVFLIGSWLRYDYGQYTWRAASSQMLDRKGMNLASNLFHIGILGIFVGHFFGMLTPHWMYEAWLPIEVKQKMAMFAGGASGVLCLIGGVLLLKRRLFSPRVRATTTGADILILSLLVIQCALGLLTIPFSAQHMDGSEMMKLVGWAQSVVTFHGGASQHLDGVAFIFRLHLVLGMTLFLLFPFSRLIHIWSVPVEYLTRKYQLVRARH",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P11350"},
		"label":"nari_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1y4z"},{"db":"wwpdb","id":"1Q16"},{"db":"wwpdb","id":"1siw"},{"db":"wwpdb","id":"1y5n"},{"db":"wwpdb","id":"3ir7"},{"db":"wwpdb","id":"1y5l"},{"db":"wwpdb","id":"1y5i"},{"db":"intenz","id":"EC 1.7.99.4"},{"db":"wwpdb","id":"3ir6"},{"db":"intenz","id":"EC 1.9.6.1"},{"db":"wwpdb","id":"3egw"},{"db":"wwpdb","id":"3ir5"},{"db":"intact","id":"EBI-6880351"}],
		"expansion":{"id":"1","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P11349"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27030298",
				"name":"4fe-4s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["4767788"]
				},
				{
				"id":"4240892",
				"name":"nari binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["7060410"]
				},
				{
				"id":"15840423",
				"name":"narg binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["9137551"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P11350"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"29752026",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-225"],
				"linkedFeatures":["14171832"]
				},
				{
				"id":"7060410",
				"name":"narh binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-225"],
				"linkedFeatures":["4240892"]
				},
				{
				"id":"16632703",
				"name":"hydroquinone binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-225"],
				"linkedFeatures":["3871186"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSKFLDRFRYFKQKGETFADGHGQLLNTNRDWEDGYRQRWQHDKIVRSTHGVNCTGSCSWKIYVKNGLVTWETQQTDYPRTRPDLPNHEPRGCPRGASYSWYLYSANRLKYPMMRKRLMKMWREAKALHSDPVEAWASIIEDADKAKSFKQARGRGGFVRSSWQEVNELIAASNVYTIKNYGPDRVAGFSPIPAMSMVSYASGARYLSLIGGTCLSFYDWYCDLPPASPQTWGEQTDVPESADWYNSSYIIAWGSNVPQTRTPDAHFFTEVRYKGTKTVAVTPDYAEIAKLCDLWLAPKQGTDAAMALAMGHVMLREFHLDNPSQYFTDYVRRYTDMPMLVMLEERDGYYAAGRMLRAADLVDALGQENNPEWKTVAFNTNGEMVAPNGSIGFRWGEKGKWNLEQRDGKTGEETELQLSLLGSQDEIAEVGFPYFGGDGTEHFNKVELENVLLHKLPVKRLQLADGSTALVTTVYDLTLANYGLERGLNDVNCATSYDDVKAYTPAWAEQITGVSRSQIIRIAREFADNADKTHGRSMIIVGAGLNHWYHLDMNYRGLINMLIFCGCVGQSGGGWAHYVGQEKLRPQTGWQPLAFALDWQRPARHMNSTSYFYNHSSQWRYETVTAEELLSPMADKSRYTGHLIDFNVRAERMGWLPSAPQLGTNPLTIAGEAEKAGMNPVDYTVKSLKEGSIRFAAEQPENGKNHPRNLFIWRSNLLGSSGKGHEFMLKYLLGTEHGIQGKDLGQQGGVKPEEVDWQDNGLEGKLDLVVTLDFRLSSTCLYSDIILPTATWYEKDDMNTSDMHPFIHPLSAAVDPAWEAKSDWEIYKAIAKKFSEVCVGHLGKETDIVTLPIQHDSAAELAQPLDVKDWKKGECDLIPGKTAPHIMVVERDYPATYERFTSIGPLMEKIGNGGKGIAWNTQSEMDLLRKLNYTKAEGPAKGQPMLNTAIDAAEMILTLAPETNGQVAVKAWAALSEFTGRDHTHLALNKEDEKIRFRDIQAQPRKIISSPTWSGLEDEHVSYNAGYTNVHELIPWRTLSGRQQLYQDHQWMRDFGESLLVYRPPIDTRSVKEVIGQKSNGNQEKALNFLTPHQKWGIHSTYSDNLLMLTLGRGGPVVWLSEADAKDLGIADNDWIEVFNSNGALTARAVVSQRVPAGMTMMYHAQERIVNLPGSEITQQRGGIHNSVTRITPKPTHMIGGYAHLAYGFNYYGTVGSNRDEFVVVRKMKNIDWLDGEGNDQVQESVK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P09152"},
		"label":"narg_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1y4z"},{"db":"wwpdb","id":"1Q16"},{"db":"wwpdb","id":"1siw"},{"db":"wwpdb","id":"1y5n"},{"db":"wwpdb","id":"3ir7"},{"db":"wwpdb","id":"1y5l"},{"db":"wwpdb","id":"1y5i"},{"db":"intenz","id":"EC 1.7.99.4"},{"db":"wwpdb","id":"3ir6"},{"db":"intenz","id":"EC 1.9.6.1"},{"db":"wwpdb","id":"3egw"},{"db":"wwpdb","id":"3ir5"},{"db":"intact","id":"EBI-6880351"}],
		"expansion":{"id":"1","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P11349"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27030298",
				"name":"4fe-4s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["4767788"]
				},
				{
				"id":"4240892",
				"name":"nari binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["7060410"]
				},
				{
				"id":"15840423",
				"name":"narg binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["9137551"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P09152"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"981847",
				"name":"3fe-4s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1247"],
				"linkedFeatures":["26689555"]
				},
				{
				"id":"15706481",
				"name":"mo-bismgd binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1247"],
				"linkedFeatures":["6115785"]
				},
				{
				"id":"10789083",
				"name":"4fe-4s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1247"],
				"linkedFeatures":["3974627"]
				},
				{
				"id":"9137551",
				"name":"narh binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1247"],
				"linkedFeatures":["15840423"]
				},
				{
				"id":"28251308",
				"name":"nitrate binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1247"],
				"linkedFeatures":["24534895"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:17594"},
		"label":"hydroquinone"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1y4z"},{"db":"wwpdb","id":"1Q16"},{"db":"wwpdb","id":"1siw"},{"db":"wwpdb","id":"1y5n"},{"db":"wwpdb","id":"3ir7"},{"db":"wwpdb","id":"1y5l"},{"db":"wwpdb","id":"1y5i"},{"db":"intenz","id":"EC 1.7.99.4"},{"db":"wwpdb","id":"3ir6"},{"db":"intenz","id":"EC 1.9.6.1"},{"db":"wwpdb","id":"3egw"},{"db":"wwpdb","id":"3ir5"},{"db":"intact","id":"EBI-6880351"}],
		"expansion":{"id":"1","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P11349"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27030298",
				"name":"4fe-4s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["4767788"]
				},
				{
				"id":"4240892",
				"name":"nari binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["7060410"]
				},
				{
				"id":"15840423",
				"name":"narg binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["9137551"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:17594"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"3871186",
				"name":"nari binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["16632703"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:17632"},
		"label":"nitrate"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1y4z"},{"db":"wwpdb","id":"1Q16"},{"db":"wwpdb","id":"1siw"},{"db":"wwpdb","id":"1y5n"},{"db":"wwpdb","id":"3ir7"},{"db":"wwpdb","id":"1y5l"},{"db":"wwpdb","id":"1y5i"},{"db":"intenz","id":"EC 1.7.99.4"},{"db":"wwpdb","id":"3ir6"},{"db":"intenz","id":"EC 1.9.6.1"},{"db":"wwpdb","id":"3egw"},{"db":"wwpdb","id":"3ir5"},{"db":"intact","id":"EBI-6880351"}],
		"expansion":{"id":"1","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P11349"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27030298",
				"name":"4fe-4s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["4767788"]
				},
				{
				"id":"4240892",
				"name":"nari binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["7060410"]
				},
				{
				"id":"15840423",
				"name":"narg binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["9137551"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:17632"},
			"bioRole":{"id":"MI:0580","name":"electron acceptor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"24534895",
				"name":"narg binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["28251308"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"organism":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
		"identifier":{"db":"chebi","id":"CHEBI:47402"},
		"label":"fe3-s4"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1y4z"},{"db":"wwpdb","id":"1Q16"},{"db":"wwpdb","id":"1siw"},{"db":"wwpdb","id":"1y5n"},{"db":"wwpdb","id":"3ir7"},{"db":"wwpdb","id":"1y5l"},{"db":"wwpdb","id":"1y5i"},{"db":"intenz","id":"EC 1.7.99.4"},{"db":"wwpdb","id":"3ir6"},{"db":"intenz","id":"EC 1.9.6.1"},{"db":"wwpdb","id":"3egw"},{"db":"wwpdb","id":"3ir5"},{"db":"intact","id":"EBI-6880351"}],
		"expansion":{"id":"1","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P11349"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27030298",
				"name":"4fe-4s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["4767788"]
				},
				{
				"id":"4240892",
				"name":"nari binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["7060410"]
				},
				{
				"id":"15840423",
				"name":"narg binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["9137551"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:47402"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26689555",
				"name":"narg binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["981847"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"organism":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
		"identifier":{"db":"chebi","id":"CHEBI:33725"},
		"label":"fe4-s4"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1y4z"},{"db":"wwpdb","id":"1Q16"},{"db":"wwpdb","id":"1siw"},{"db":"wwpdb","id":"1y5n"},{"db":"wwpdb","id":"3ir7"},{"db":"wwpdb","id":"1y5l"},{"db":"wwpdb","id":"1y5i"},{"db":"intenz","id":"EC 1.7.99.4"},{"db":"wwpdb","id":"3ir6"},{"db":"intenz","id":"EC 1.9.6.1"},{"db":"wwpdb","id":"3egw"},{"db":"wwpdb","id":"3ir5"},{"db":"intact","id":"EBI-6880351"}],
		"expansion":{"id":"1","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P11349"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27030298",
				"name":"4fe-4s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["4767788"]
				},
				{
				"id":"4240892",
				"name":"nari binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["7060410"]
				},
				{
				"id":"15840423",
				"name":"narg binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["9137551"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:33725"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"3974627",
				"name":"narg binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["10789083"]
				},
				{
				"id":"4767788",
				"name":"narh binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["27030298"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"organism":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
		"identifier":{"db":"chebi","id":"CHEBI:61145"},
		"label":"mo-bismgd cofactor"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1y4z"},{"db":"wwpdb","id":"1Q16"},{"db":"wwpdb","id":"1siw"},{"db":"wwpdb","id":"1y5n"},{"db":"wwpdb","id":"3ir7"},{"db":"wwpdb","id":"1y5l"},{"db":"wwpdb","id":"1y5i"},{"db":"intenz","id":"EC 1.7.99.4"},{"db":"wwpdb","id":"3ir6"},{"db":"intenz","id":"EC 1.9.6.1"},{"db":"wwpdb","id":"3egw"},{"db":"wwpdb","id":"3ir5"},{"db":"intact","id":"EBI-6880351"}],
		"expansion":{"id":"1","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P11349"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27030298",
				"name":"4fe-4s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["4767788"]
				},
				{
				"id":"4240892",
				"name":"nari binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["7060410"]
				},
				{
				"id":"15840423",
				"name":"narg binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["9137551"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:61145"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"6115785",
				"name":"narg binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["15706481"]
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
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1y4z"},{"db":"wwpdb","id":"1Q16"},{"db":"wwpdb","id":"1siw"},{"db":"wwpdb","id":"1y5n"},{"db":"wwpdb","id":"3ir7"},{"db":"wwpdb","id":"1y5l"},{"db":"wwpdb","id":"1y5i"},{"db":"intenz","id":"EC 1.7.99.4"},{"db":"wwpdb","id":"3ir6"},{"db":"intenz","id":"EC 1.9.6.1"},{"db":"wwpdb","id":"3egw"},{"db":"wwpdb","id":"3ir5"},{"db":"intact","id":"EBI-6880351"}],
		"expansion":{"id":"1","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P11349"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27030298",
				"name":"4fe-4s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["4767788"]
				},
				{
				"id":"4240892",
				"name":"nari binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["7060410"]
				},
				{
				"id":"15840423",
				"name":"narg binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-512"],
				"linkedFeatures":["9137551"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:30413"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"14171832",
				"name":"nari binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["29752026"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSKTHLTEQKFSDFALHPKVVEALEKKGFHNCTPIQALALPLTLAGRDVAGQAQTGTGKTMAFLTSTFHYLLSHPAIADRKVNQPRALIMAPTRELAVQIHADAEPLAEATGLKLGLAYGGDGYDKQLKVLESGVDILIGTTGRLIDYAKQNHINLGAIQVVVLDEADRMYDLGFIKDIRWLFRRMPPANQRLNMLFSATLSYRVRELAFEQMNNAEYIEVEPEQKTGHRIKEELFYPSNEEKMRLLQTLIEEEWPDRAIIFANTKHRCEEIWGHLAADGHRVGLLTGDVAQKKRLRILDEFTRGDLDILVATDVAARGLHIPAVTHVFNYDLPDDCEDYVHRIGRTGRAGASGHSISLACEEYALNLPAIETYIGHSIPVSKYNPDALMTDLPKPLRLTRPRTGNGPRRTGAPRNRRRSG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A8J8"},
		"label":"rhlb_ecoli"
	},
	{
		"object":"interactor",
		"sequence":"MKRMLINATQQEELRVALVDGQRLYDLDIESPGHEQKKANIYKGKITRIEPSLEAAFVDYGAERHGFLPLKEIAREYFPANYSAHGRPNIKDVLREGQEVIVQIDKEERGNKGAALTTFISLAGSYLVLMPNNPRAGGISRRIEGDDRTELKEALASLELPEGMGLIVRTAGVGKSAEALQWDLSFRLKHWEAIKKAAESRPAPFLIHQESNVIVRAFRDYLRQDIGEILIDNPKVLELARQHIAALGRPDFSSKIKLYTGEIPLFSHYQIESQIESAFQREVRLPSGGSIVIDSTEALTAIDINSARATRGGDIEETAFNTNLEAADEIARQLRLRDLGGLIVIDFIDMTPVRHQRAVENRLREAVRQDRARIQISHISRFGLLEMSRQRLSPSLGESSHHVCPRCSGTGTVRDNESLSLSILRLIEEEALKENTQEVHAIVPVPIASYLLNEKRSAVNAIETRQDGVRCVIVPNDQMETPHYHVLRVRKGEETPTLSYMLPKLHEEAMALPSEEEFAERKRPEQPALATFAMPDVPPAPTPAEPAAPVVAPAPKAAPATPAAPAQPGLLSRFFGALKALFSGGEETKPTEQPAPKAEAKPERQQDRRKPRQNNRRDRNERRDTRSERTEGSDNREENRRNRRQAQQQTAETRESRQQAEVTEKARTADEQQAPRRERSRRRNDDKRQAQQEAKALNVEEQSVQETEQEERVRPVQPRRKQRQLNQKVRYEQSVAEEAVVAPVVEETVAAEPIVQEAPAPRTELVKVPLPVVAQTAPEQQEENNADNRDNGGMPRRSRRSPRHLRVSGQRRRRYRDERYPTQSPMPLTVACASPELASGKVWIRYPIVRPQDVQVEEQREQEEVHVQPMVTEVPVAAAIEPVVSAPVVEEVAGVVEAPVQVAEPQPEVVETTHPEVIAAAVTEQPQVITESDVAVAQEVAEQAEPVVEPQEETADIEEVVETAEVVVAEPEVVAQPAAPVVAEVAAEVETVAAVEPEVTVEHNHATAPMTRAPAPEYVPEAPRHSDWQRPTFAFEGKGAAGGHTATHHASAAPARPQPVE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P21513"},
		"label":"rne_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1169250"}],
		"expansion":{"id":"2","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A8J8"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"13625119",
				"name":"region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["2-421"],
				"linkedFeatures":["21931434"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P21513"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"21931434",
				"name":"rhlb binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["628-843"],
				"linkedFeatures":["13625119"]
				},
				{
				"id":"6179828",
				"name":"pnp binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1021-1061"],
				"linkedFeatures":["13415334"]
				},
				{
				"id":"19303953",
				"name":"enolase binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["839-850"],
				"linkedFeatures":["3739941"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSKIVKIIGREIIDSRGNPTVEAEVHLEGGFVGMAAAPSGASTGSREALELRDGDKSRFLGKGVTKAVAAVNGPIAQALIGKDAKDQAGIDKIMIDLDGTENKSKFGANAILAVSLANAKAAAAAKGMPLYEHIAELNGTPGKYSMPVPMMNIINGGEHADNNVDIQEFMIQPVGAKTVKEAIRMGSEVFHHLAKVLKAKGMNTAVGDEGGYAPNLGSNAEALAVIAEAVKAAGYELGKDITLAMDCAASEFYKDGKYVLAGEGNKAFTSEEFTHFLEELTKQYPIVSIEDGLDESDWDGFAYQTKVLGDKIQLVGDDLFVTNTKILKEGIEKGIANSILIKFNQIGSLTETLAAIKMAKDAGYTAVISHRSGETEDATIADLAVGTAAGQIKTGSMSRSDRVAKYNQLIRIEEALGEKAPYNGRKEIKGQA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A6P9"},
		"label":"eno_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1169250"}],
		"expansion":{"id":"2","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A8J8"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"13625119",
				"name":"region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["2-421"],
				"linkedFeatures":["21931434"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0A6P9"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"3739941",
				"name":"region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["2-432"],
				"linkedFeatures":["19303953"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLNPIVRKFQYGQHTVTLETGMMARQATAAVMVSMDDTAVFVTVVGQKKAKPGQDFFPLTVNYQERTYAAGRIPGSFFRREGRPSEGETLIARLIDRPIRPLFPEGFVNEVQVIATVVSVNPQVNPDIVAMIGASAALSLSGIPFNGPIGAARVGYINDQYVLNPTQDELKESKLDLVVAGTEAAVLMVESEAQLLSEDQMLGAVVFGHEQQQVVIQNINELVKEAGKPRWDWQPEPVNEALNARVAALAEARLSDAYRITDKQERYAQVDVIKSETIATLLAEDETLDENELGEILHAIEKNVVRSRVLAGEPRIDGREKDMIRGLDVRTGVLPRTHGSALFTRGETQALVTATLGTARDAQVLDELMGERTDTFLFHYNFPPYSVGETGMVGSPKRREIGHGRLAKRGVLAVMPDMDKFPYTVRVVSEITESNGSSSMASVCGASLALMDAGVPIKAAVAGIAMGLVKEGDNYVVLSDILGDEDHLGDMDFKVAGSRDGISALQMDIKIEGITKEIMQVALNQAKGARLHILGVMEQAINAPRGDISEFAPRIHTIKINPDKIKDVIGKGGSVIRALTEETGTTIEIEDDGTVKIAATDGEKAKHAIRRIEEITAEIEVGRVYTGKVTRIVDFGAFVAIGGGKEGLVHISQIADKRVEKVTDYLQMGQEVPVKVLEVDRQGRIRLSIKEATEQSQPAAAPEAPAAEQGE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P05055"},
		"label":"pnp_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1169250"}],
		"expansion":{"id":"2","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A8J8"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"13625119",
				"name":"region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["2-421"],
				"linkedFeatures":["21931434"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P05055"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"13415334",
				"name":"region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-711"],
				"linkedFeatures":["6179828"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MTPLLELKDIRRSYPAGDEQVEVLKGISLDIYAGEMVAIVGASGSGKSTLMNILGCLDKATSGTYRVAGQDVATLDADALAQLRREHFGFIFQRYHLLSHLTAEQNVEVPAVYAGLERKQRLLRAQELLQRLGLEDRTEYYPAQLSGGQQQRVSIARALMNGGQVILADEPTGALDSHSGEEVMAILHQLRDRGHTVIIVTHDPQVAAQAERVIEIRDGEIVRNPPAIEKVNVTGGTEPVVNTVSGWRQFVSGFNEALTMAWRALAANKMRTLLTMLGIIIGIASVVSIVVVGDAAKQMVLADIRSIGTNTIDVYPGKDFGDDDPQYQQALKYDDLIAIQKQPWVASATPAVSQNLRLRYNNVDVAASANGVSGDYFNVYGMTFSEGNTFNQEQLNGRAQVVVLDSNTRRQLFPHKADVVGEVILVGNMPARVIGVAEEKQSMFGSSKVLRVWLPYSTMSGRVMGQSWLNSITVRVKEGFDSAEAEQQLTRLLSLRHGKKDFFTWNMDGVLKTVEKTTRTLQLFLTLVAVISLVVGGIGVMNIMLVSVTERTREIGIRMAVGARASDVLQQFLIEAVLVCLVGGALGITLSLLIAFTLQLFLPGWEIGFSPLALLLAFLCSTVTGILFGWLPARNAARLDPVDALARE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P75831"},
		"label":"macb_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"3fpp"},{"db":"wwpdb","id":"1ek9"},{"db":"intact","id":"EBI-8761276"},{"db":"intenz","id":"EC 3.6.3.44"}],
		"expansion":{"id":"3","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P75831"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"28110642",
				"name":"maca binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-648"],
				"linkedFeatures":["9161167"]
				},
				{
				"id":"24015318",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-648"],
				"linkedFeatures":["32752484"]
				},
				{
				"id":"10557378",
				"name":"dimerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-648"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32752484",
				"name":"macb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["24015318"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKKRKTVKKRYVIALVIVIAGLITLWRILNAPVPTYQTLIVRPGDLQQSVLATGKLDALRKVDVGAQVSGQLKTLSVAIGDKVKKDQLLGVIDPEQAENQIKEVEATLMELRAQRQQAEAELKLARVTYSRQQRLAQTKAVSQQDLDTAATEMAVKQAQIGTIDAQIKRNQASLDTAKTNLDYTRIVAPMAGEVTQITTLQGQTVIAAQQAPNILTLADMSAMLVKAQVSEADVIHLKPGQKAWFTVLGDPLTRYEGQIKDVLPTPEKVNDAIFYYARFEVPNPNGLLRLDMTAQVHIQLTDVKNVLTIPLSALGDPVGDNRYKVKLLRNGETREREVTIGARNDTDVEIVKGLEAGDEVVIGEAKPGAAQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P75830"},
		"label":"maca_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"3fpp"},{"db":"wwpdb","id":"1ek9"},{"db":"intact","id":"EBI-8761276"},{"db":"intenz","id":"EC 3.6.3.44"}],
		"expansion":{"id":"3","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P75831"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"28110642",
				"name":"maca binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-648"],
				"linkedFeatures":["9161167"]
				},
				{
				"id":"24015318",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-648"],
				"linkedFeatures":["32752484"]
				},
				{
				"id":"10557378",
				"name":"dimerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-648"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P75830"},
			"bioRole":{"id":"MI:0684","name":"ancillary"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"9161167",
				"name":"macb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["21-371"],
				"linkedFeatures":["28110642"]
				},
				{
				"id":"2020439",
				"name":"hexamerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["42-301"]
				},
				{
				"id":"443083",
				"name":"tolc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["21-371"],
				"linkedFeatures":["31382794"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKKLLPILIGLSLSGFSSLSQAENLMQVYQQARLSNPELRKSAADRDAAFEKINEARSPLLPQLGLGADYTYSNGYRDANGINSNATSASLQLTQSIFDMSKWRALTLQEKAAGIQDVTYQTDQQTLILNTATAYFNVLNAIDVLSYTQAQKEAIYRQLDQTTQRFNVGLVAITDVQNARAQYDTVLANEVTARNNLDNAVEQLRQITGNYYPELAALNVENFKTDKPQPVNALLKEAEKRNLSLLQARLSQDLAREQIRQAQDGHLPTLDLTASTGISDTSYSGSKTRGAAGTQYDDSNMGQNKVGLSFSLPIYQGGMVNSQVKQAQYNFVGASEQLESAHRSVVQTVRSSFNNINASISSINAYKQAVVSAQSSLDAMEAGYSVGTRTIVDVLDATTTLYNAKQELANARYNYLINQLNIKSALGTLNEQDLLALNNALSKPVSTNPENVAPQTPEQNAIADGYAPDSPAPVVQQTSARTTTSNGHNPFRN",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P02930"},
		"label":"tolc_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"3fpp"},{"db":"wwpdb","id":"1ek9"},{"db":"intact","id":"EBI-8761276"},{"db":"intenz","id":"EC 3.6.3.44"}],
		"expansion":{"id":"3","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P75831"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"28110642",
				"name":"maca binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-648"],
				"linkedFeatures":["9161167"]
				},
				{
				"id":"24015318",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-648"],
				"linkedFeatures":["32752484"]
				},
				{
				"id":"10557378",
				"name":"dimerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-648"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P02930"},
			"bioRole":{"id":"MI:0684","name":"ancillary"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"8506334",
				"name":"trimerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["23-450"]
				},
				{
				"id":"31382794",
				"name":"maca binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-493"],
				"linkedFeatures":["443083"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAMKKLLIASLLFSSATVYGAEGFVVKDIHFEGLQRVAVGAALLSMPVRTGDTVNDEDISNTIRALFATGNFEDVRVLRDGDTLLVQVKERPTIASITFSGNKSVKDDMLKQNLEASGVRVGESLDRTTIADIEKGLEDFYYSVGKYSASVKAVVTPLPRNRVDLKLVFQEGVSAEIQQINIVGNHAFTTDELISHFQLRDEVPWWNVVGDRKYQKQKLAGDLETLRSYYLDRGYARFNIDSTQVSLTPDKKGIYVTVNITEGDQYKLSGVEVSGNLAGHSAEIEQLTKIEPGELYNGTKVTKMEDDIKKLLGRYGYAYPRVQSMPEINDADKTVKLRVNVDAGNRFYVRKIRFEGNDTSKDAVLRREMRQMEGAWLGSDLVDQGKERLNRLGFFETVDTDTQRVPGSPDQVDVVYKVKERNTGSFNFGIGYGTESGVSFQAGVQQDNWLGTGYAVGINGTKNDYQTYAELSVTNPYFTVDGVSLGGRLFYNDFQADDADLSDYTNKSYGTDVTLGFPINEYNSLRAGLGYVHNSLSNMQPQVAMWRYLYSMGEHPSTSDQDNSFKTDDFTFNYGWTYNKLDRGYFPTDGSRVNLTGKVTIPGSDNEYYKVTLDTATYVPIDDDHKWVVLGRTRWGYGDGLGGKEMPFYENFYAGGSSTVRGFQSNTIGPKAVYFPHQASNYDPDYDYECATQDGAKDLCKSDDAVGGNAMAVASLEFITPTPFISDKYANSVRTSFFWDMGTVWDTNWDSSQYSGYPDYSDPSNIRMSAGIALQWMSPLGPLVFSYAQPFKKYDGDKAEQFQFNIGKTW",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A940"},
		"label":"bama_ecoli"
	},
	{
		"object":"interactor",
		"sequence":"MAYSVQKSRLAKVAGVSLVLLLAACSSDSRYKRQVSGDEAYLEAAPLAELHAPAGMILPVTSGDYAIPVTNGSGAVGKALDIRPPAQPLALVSGARTQFTGDTASLLVENGRGNTLWPQVVSVLQAKNYTITQRDDAGQTLTTDWVQWNRLDEDEQYRGRYQISVKPQGYQQAVTVKLLNLEQAGKPVADAASMQRYSTEMMNVISAGLDKSATDAANAAQNRASTTMDVQSAADDTGLPMLVVRGPFNVVWQRLPAALEKVGMKVTDSTRSQGNMAVTYKPLSDSDWQELGASDPGLASGDYKLQVGDLDNRSSLQFIDPKGHTLTQSQNDALVAVFQAAFSK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A903"},
		"label":"bamc_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6397527"}],
		"expansion":{"id":"4","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A940"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"24087889",
				"name":"bamd binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-810"],
				"linkedFeatures":["10942187"]
				},
				{
				"id":"27053048",
				"name":"bamb binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-810"],
				"linkedFeatures":["18033539"]
				},
				{
				"id":"26061077",
				"name":"bamc binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-810"],
				"linkedFeatures":["22536466"]
				},
				{
				"id":"7957923",
				"name":"bame binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-810"],
				"linkedFeatures":["850173"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0A903"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22536466",
				"name":"bama binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-344"],
				"linkedFeatures":["26061077"]
				},
				{
				"id":"28224542",
				"name":"bamd binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-344"],
				"linkedFeatures":["10886874"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MTRMKYLVAAATLSLFLAGCSGSKEEVPDNPPNEIYATAQQKLQDGNWRQAITQLEALDNRYPFGPYSQQVQLDLIYAYYKNADLPLAQAAIDRFIRLNPTHPNIDYVMYMRGLTNMALDDSALQGFFGVDRSDRDPQHARAAFSDFSKLVRGYPNSQYTTDATKRLVFLKDRLAKYEYSVAEYYTERGAWVAVVNRVEGMLRDYPDTQATRDALPLMENAYRQMQMNAQAEKVAKIIAANSSNT",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0AC02"},
		"label":"bamd_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6397527"}],
		"expansion":{"id":"4","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A940"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"24087889",
				"name":"bamd binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-810"],
				"linkedFeatures":["10942187"]
				},
				{
				"id":"27053048",
				"name":"bamb binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-810"],
				"linkedFeatures":["18033539"]
				},
				{
				"id":"26061077",
				"name":"bamc binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-810"],
				"linkedFeatures":["22536466"]
				},
				{
				"id":"7957923",
				"name":"bame binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-810"],
				"linkedFeatures":["850173"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AC02"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"10942187",
				"name":"bama binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-245"],
				"linkedFeatures":["24087889"]
				},
				{
				"id":"10886874",
				"name":"bamc binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-245"],
				"linkedFeatures":["28224542"]
				},
				{
				"id":"3380535",
				"name":"bame binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-245"],
				"linkedFeatures":["8999183"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MRCKTLTAAAAVLLMLTAGCSTLERVVYRPDINQGNYLTANDVSKIRVGMTQQQVAYALGTPLMSDPFGTNTWFYVFRQQPGHEGVTQQTLTLTFNSSGVLTNIDNKPALSGN",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A937"},
		"label":"bame_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6397527"}],
		"expansion":{"id":"4","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A940"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"24087889",
				"name":"bamd binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-810"],
				"linkedFeatures":["10942187"]
				},
				{
				"id":"27053048",
				"name":"bamb binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-810"],
				"linkedFeatures":["18033539"]
				},
				{
				"id":"26061077",
				"name":"bamc binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-810"],
				"linkedFeatures":["22536466"]
				},
				{
				"id":"7957923",
				"name":"bame binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-810"],
				"linkedFeatures":["850173"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0A937"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"850173",
				"name":"bama binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-113"],
				"linkedFeatures":["7957923"]
				},
				{
				"id":"8999183",
				"name":"bamd binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-113"],
				"linkedFeatures":["3380535"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MQLRKLLLPGLLSVTLLSGCSLFNSEEDVVKMSPLPTVENQFTPTTAWSTSVGSGIGNFYSNLHPALADNVVYAADRAGLVKALNADDGKEIWSVSLAEKDGWFSKEPALLSGGVTVSGGHVYIGSEKAQVYALNTSDGTVAWQTKVAGEALSRPVVSDGLVLIHTSNGQLQALNEADGAVKWTVNLDMPSLSLRGESAPTTAFGAAVVGGDNGRVSAVLMEQGQMIWQQRISQATGSTEIDRLSDVDTTPVVVNGVVFALAYNGNLTALDLRSGQIMWKRELGSVNDFIVDGNRIYLVDQNDRVMALTIDGGVTLWTQSDLLHRLLTSPVLYNGNLVVGDSEGYLHWINVEDGRFVAQQKVDSSGFQTEPVAADGKLLIQAKDGTVYSITR",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P77774"},
		"label":"bamb_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6397527"}],
		"expansion":{"id":"4","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A940"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"24087889",
				"name":"bamd binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-810"],
				"linkedFeatures":["10942187"]
				},
				{
				"id":"27053048",
				"name":"bamb binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-810"],
				"linkedFeatures":["18033539"]
				},
				{
				"id":"26061077",
				"name":"bamc binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-810"],
				"linkedFeatures":["22536466"]
				},
				{
				"id":"7957923",
				"name":"bame binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-810"],
				"linkedFeatures":["850173"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P77774"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"18033539",
				"name":"bama binding",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-392"],
				"linkedFeatures":["27053048"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MQVLPPSSTGGPSRLFIMRPVATTLLMVAILLAGIIGYRALPVSALPEVDYPTIQVVTLYPGASPDVMTSAVTAPLERQFGQMSGLKQMSSQSSGGASVITLQFQLTLPLDVAEQEVQAAINAATNLLPSDLPNPPVYSKVNPADPPIMTLAVTSTAMPMTQVEDMVETRVAQKISQISGVGLVTLSGGQRPAVRVKLNAQAIAALGLTSETVRTAITGANVNSAKGSLDGPSRAVTLSANDQMQSAEEYRQLIIAYQNGAPIRLGDVATVEQGAENSWLGAWANKEQAIVMNVQRQPGANIISTADSIRQMLPQLTESLPKSVKVTVLSDRTTNIRASVDDTQFELMMAIALVVMIIYLFLRNIPATIIPGVAVPLSLIGTFAVMVFLDFSINNLTLMALTIATGFVVDDAIVVIENISRYIEKGEKPLAAALKGAGEIGFTIISLTFSLIAVLIPLLFMGDIVGRLFREFAITLAVAILISAVVSLTLTPMMCARMLSQESLRKQNRFSRASEKMFDRIIAAYGRGLAKVLNHPWLTLSVALSTLLLSVLLWVFIPKGFFPVQDNGIIQGTLQAPQSSSFANMAQRQRQVADVILQDPAVQSLTSFVGVDGTNPSLNSARLQINLKPLDERDDRVQKVIARLQTAVDKVPGVDLFLQPTQDLTIDTQVSRTQYQFTLQATSLDALSTWVPQLMEKLQQLPQLSDVSSDWQDKGLVAYVNVDRDSASRLGISMADVDNALYNAFGQRLISTIYTQANQYRVVLEHNTENTPGLAALDTIRLTSSDGGVVPLSSIAKIEQRFAPLSINHLDQFPVTTISFNVPDNYSLGDAVQAIMDTEKTLNLPVDITTQFQGSTLAFQSALGSTVWLIVAAVVAMYIVLGILYESFIHPITILSTLPTAGVGALLALLIAGSELDVIAIIGIILLIGIVKKNAIMMIDFALAAEREQGMSPREAIYQACLLRFRPILMTTLAALLGALPLMLSTGVGAELRRPLGIGMVGGLIVSQVLTLFTTPVIYLLFDRLALWTKSRFARHEEEA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P76398"},
		"label":"mdtb_ecoli"
	},
	{
		"object":"interactor",
		"sequence":"MKFFALFIYRPVATILLSVAITLCGILGFRMLPVAPLPQVDFPVIIVSASLPGASPETMASSVATPLERSLGRIAGVSEMTSSSSLGSTRIILQFDFDRDINGAARDVQAAINAAQSLLPSGMPSRPTYRKANPSDAPIMILTLTSDTYSQGELYDFASTQLAPTISQIDGVGDVDVGGSSLPAVRVGLNPQALFNQGVSLDDVRTAVSNANVRKPQGALEDGTHRWQIQTNDELKTAAEYQPLIIHYNNGGAVRLGDVATVTDSVQDVRNAGMTNAKPAILLMIRKLPEANIIQTVDSIRAKLPELQETIPAAIDLQIAQDRSPTIRASLEEVEQTLIISVALVILVVFLFLRSGRATIIPAVSVPVSLIGTFAAMYLCGFSLNNLSLMALTIATGFVVDDAIVVLENIARHLEAGMKPLQAALQGTREVGFTVLSMSLSLVAVFLPLLLMGGLPGRLLREFAVTLSVAIGISLLVSLTLTPMMCGWMLKASKPREQKRLRGFGRMLVALQQGYGKSLKWVLNHTRLVGVVLLGTIALNIWLYISIPKTFFPEQDTGVLMGGIQADQSISFQAMRGKLQDFMKIIRDDPAVDNVTGFTGGSRVNSGMMFITLKPRDERSETAQQIIDRLRVKLAKEPGANLFLMAVQDIRVGGRQSNASYQYTLLSDDLAALREWEPKIRKKLATLPELADVNSDQQDNGAEMNLVYDRDTMARLGIDVQAANSLLNNAFGQRQISTIYQPMNQYKVVMEVDPRYTQDISALEKMFVINNEGKAIPLSYFAKWQPANAPLSVNHQGLSAASTISFNLPTGKSLSDASAAIDRAMTQLGVPSTVRGSFAGTAQVFQETMNSQVILIIAAIATVYIVLGILYESYVHPLTILSTLPSAGVGALLALELFNAPFSLIALIGIMLLIGIVKKNAIMMVDFALEAQRHGNLTPQEAIFQACLLRFRPIMMTTLAALFGALPLVLSGGDGSELRQPLGITIVGGLVMSQLLTLYTTPVVYLFFDRLRLRFSRKPKQTVTE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P76399"},
		"label":"mdtc_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-8787893"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P76398"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"29938386",
				"name":"mdtc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1040"],
				"linkedFeatures":["25746158"]
				},
				{
				"id":"31292298",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1040"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P76399"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"25746158",
				"name":"mdtb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1025"],
				"linkedFeatures":["29938386"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MRWYPWLRPDFEKLVASYQAGRGHHALLIQALPGMGDDALIYALSRYLLCQQPQGHKSCGHCRGCQLMQAGTHPDYYTLAPEKGKNTLGVDAVREVTEKLNEHARLGGAKVVWVTDAALLTDAAANALLKTLEEPPAETWFFLATREPERLLATLRSRCRLHYLAPPPEQYAVTWLSREVTMSQDALLAALRLSAGSPGAALALFQGDNWQARETLCQALAYSVPSGDWYSLLAALNHEQAPARLHWLATLLMDALKRHHGAAQVTNVDVPGLVAELANHLSPSRLQAILGDVCHIREQLMSVTGINRELLITDLLLRIEHYLQPGVVLPVPHL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P28631"},
		"label":"holb_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"3glh"},{"db":"wwpdb","id":"3gli"},{"db":"wwpdb","id":"3glf"},{"db":"intact","id":"EBI-6467993"},{"db":"wwpdb","id":"1em8"},{"db":"wwpdb","id":"1jqj"},{"db":"wwpdb","id":"1jql"},{"db":"wwpdb","id":"1jre"},{"db":"intenz","id":"EC 2.7.7.7"}],
		"expansion":{"id":"5","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P28631"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"31053913",
				"name":"gamma binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["207-334"],
				"linkedFeatures":["17483857"]
				},
				{
				"id":"15029489",
				"name":"tau binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["207-334"],
				"linkedFeatures":["2861583"]
				},
				{
				"id":"11137315",
				"name":"delta binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["207-334"],
				"linkedFeatures":["18235797"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKNATFYLLDNDTTVDGLSAVEQLVCEIAAERWRSGKRVLIACEDEKQAYRLDEALWARPAESFVPHNLAGEGPRGGAPVEIAWPQKRSSSRRDILISLRTSFADFATAFTEVVDFVPYEDSLKQLARERYKAYRVAGFNLNTATWK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P28905"},
		"label":"holc_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"3glh"},{"db":"wwpdb","id":"3gli"},{"db":"wwpdb","id":"3glf"},{"db":"intact","id":"EBI-6467993"},{"db":"wwpdb","id":"1em8"},{"db":"wwpdb","id":"1jqj"},{"db":"wwpdb","id":"1jql"},{"db":"wwpdb","id":"1jre"},{"db":"intenz","id":"EC 2.7.7.7"}],
		"expansion":{"id":"5","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P28905"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"2873665",
				"name":"ssb binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-147"]
				},
				{
				"id":"12861079",
				"name":"psi binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-79"],
				"linkedFeatures":["32073835"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSYQVLARKWRPQTFADVVGQEHVLTALANGLSLGRIHHAYLFSGTRGVGKTSIARLLAKGLNCETGITATPCGVCDNCREIEQGRFVDLIEIDAASRTKVEDTRDLLDNVQYAPARGRFKVYLIDEVHMLSRHSFNALLKTLEEPPEHVKFLLATTDPQKLPVTILSRCLQFHLKALDVEQIRHQLEHILNEEHIAHEPRALQLLARAAEGSLRDALSLTDQAIASGDGQVSTQAVSAMLGTLDDDQALSLVEAMVEANGERVMALINEAAARGIEWELLVEMLGLLHRIAMVQLSPAALGNDMAAIELRMRELARTIPPTDIQLYYQTLLIGRKELPYAPDRRMGVEMTLLRALAFHPRMPLPEPEVPRQSFAPVAPTAVMTPTQVPPQPQSAPQQAPTVPLPETTSQVLAARQQQRVQGATKAKKE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"intact","id":"EBI-2604194"},
		"label":"p06710-2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"3glh"},{"db":"wwpdb","id":"3gli"},{"db":"wwpdb","id":"3glf"},{"db":"intact","id":"EBI-6467993"},{"db":"wwpdb","id":"1em8"},{"db":"wwpdb","id":"1jqj"},{"db":"wwpdb","id":"1jql"},{"db":"wwpdb","id":"1jre"},{"db":"intenz","id":"EC 2.7.7.7"}],
		"expansion":{"id":"5","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-2604194"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"17483857",
				"name":"delta' binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["221-382"],
				"linkedFeatures":["31053913"]
				},
				{
				"id":"13004995",
				"name":"tau binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["221-382"],
				"linkedFeatures":["1383907"]
				},
				{
				"id":"6111724",
				"name":"delta binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["221-382"],
				"linkedFeatures":["9641043"]
				},
				{
				"id":"2672091",
				"name":"psi binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["221-382"],
				"linkedFeatures":["14019723"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MTSRRDWQLQQLGITQWSLRRPGALQGEIAIAIPAHVRLVMVANDLPALTDPLVSDVLRALTVSPDQVLQLTPEKIAMLPQGSHCNSWRLGTDEPLSLEGAQVASPALTDLRANPTARAALWQQICTYEHDFFPRND",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P28632"},
		"label":"hold_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"3glh"},{"db":"wwpdb","id":"3gli"},{"db":"wwpdb","id":"3glf"},{"db":"intact","id":"EBI-6467993"},{"db":"wwpdb","id":"1em8"},{"db":"wwpdb","id":"1jqj"},{"db":"wwpdb","id":"1jql"},{"db":"wwpdb","id":"1jre"},{"db":"intenz","id":"EC 2.7.7.7"}],
		"expansion":{"id":"5","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P28632"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"32073835",
				"name":"chi binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["57-57","121-125"],
				"linkedFeatures":["12861079"]
				},
				{
				"id":"14019723",
				"name":"gamma\/tau binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["2-28"],
				"linkedFeatures":["2672091"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MIRLYPEQLRAQLNEGLRAAYLLLGNDPLLLQESQDAVRQVAAAQGFEEHHTFSIDPNTDWNAIFSLCQAMSLFASRQTLLLLLPENGPNAAINEQLLTLTGLLHDDLLLIVRGNKLSKAQENAAWFTALANRSVQVTCQTPEQAQLPRWVAARAKQLNLELDDAANQVLCYCYEGNLLALAQALERLSLLWPDGKLTLPRVEQAVNDAAHFTPFHWVDALLMGKSKRALHILQQLRLEGSEPVILLRTLQRELLLLVNLKRQSAHTPLRALFDKHRVWQNRRGMMGEALNRLSQTQLRQAVQLLTRTELTLKQDYGQSVWAELEGLSLLLCHKPLADVFIDG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P28630"},
		"label":"hola_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"3glh"},{"db":"wwpdb","id":"3gli"},{"db":"wwpdb","id":"3glf"},{"db":"intact","id":"EBI-6467993"},{"db":"wwpdb","id":"1em8"},{"db":"wwpdb","id":"1jqj"},{"db":"wwpdb","id":"1jql"},{"db":"wwpdb","id":"1jre"},{"db":"intenz","id":"EC 2.7.7.7"}],
		"expansion":{"id":"5","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P28630"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"9641043",
				"name":"gamma binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["207-343"],
				"linkedFeatures":["6111724"]
				},
				{
				"id":"10274621",
				"name":"tau binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["207-343"],
				"linkedFeatures":["14457084"]
				},
				{
				"id":"12570890",
				"name":"beta binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["60-74"]
				},
				{
				"id":"18235797",
				"name":"delta' binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["207-343"],
				"linkedFeatures":["11137315"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSYQVLARKWRPQTFADVVGQEHVLTALANGLSLGRIHHAYLFSGTRGVGKTSIARLLAKGLNCETGITATPCGVCDNCREIEQGRFVDLIEIDAASRTKVEDTRDLLDNVQYAPARGRFKVYLIDEVHMLSRHSFNALLKTLEEPPEHVKFLLATTDPQKLPVTILSRCLQFHLKALDVEQIRHQLEHILNEEHIAHEPRALQLLARAAEGSLRDALSLTDQAIASGDGQVSTQAVSAMLGTLDDDQALSLVEAMVEANGERVMALINEAAARGIEWEALLVEMLGLLHRIAMVQLSPAALGNDMAAIELRMRELARTIPPTDIQLYYQTLLIGRKELPYAPDRRMGVEMTLLRALAFHPRMPLPEPEVPRQSFAPVAPTAVMTPTQVPPQPQSAPQQAPTVPLPETTSQVLAARQQLQRVQGATKAKKSEPAAATRARPVNNAALERLASVTDRVQARPVPSALEKAPAKKEAYRWKATTPVMQQKEVVATPKALKKALEHEKTPELAAKLAAEAIERDPWAAQVSQLSLPKLVEQVALNAWKEESDNAVCLHLRSSQRHLNNRGAQQKLAEALSMLKGSTVELTIVEDDNPAVRTPLEWRQAIYEEKLAQARESIIADNNIQTLRRFFDAELDEESIRPI",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P06710-1"},
		"label":"p06710-1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"3glh"},{"db":"wwpdb","id":"3gli"},{"db":"wwpdb","id":"3glf"},{"db":"intact","id":"EBI-6467993"},{"db":"wwpdb","id":"1em8"},{"db":"wwpdb","id":"1jqj"},{"db":"wwpdb","id":"1jql"},{"db":"wwpdb","id":"1jre"},{"db":"intenz","id":"EC 2.7.7.7"}],
		"expansion":{"id":"5","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P06710-1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"2861583",
				"name":"delta' binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["222-382"],
				"linkedFeatures":["15029489"]
				},
				{
				"id":"1383907",
				"name":"gamma binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["222-382"],
				"linkedFeatures":["13004995"]
				},
				{
				"id":"20244718",
				"name":"tau (self-)binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["222-382"]
				},
				{
				"id":"11051648",
				"name":"alpha binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["497-643"]
				},
				{
				"id":"21280820",
				"name":"dnab binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["430-496"]
				},
				{
				"id":"14457084",
				"name":"delta binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["222-382"],
				"linkedFeatures":["10274621"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1em8"},{"db":"intact","id":"EBI-6858099"},{"db":"wwpdb","id":"3sxu"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P28905"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"10064349",
				"name":"ssb binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-147"]
				},
				{
				"id":"3622272",
				"name":"psi binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-79"],
				"linkedFeatures":["11792186"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P28632"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"11792186",
				"name":"chi binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["121-125","57-57"],
				"linkedFeatures":["3622272"]
				},
				{
				"id":"18811084",
				"name":"gamma\/tau binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["2-28"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSTAITRQIVLDTETTGMNQIGAHYEGHKIIEIGAVEVVNRRLTGNNFHVYLKPDRLVDPEAFGVHGIADEFLLDKPTFAEVADEFMDYIRGAELVIHNAAFDIGFMDYEFSLLKRDIPKTNTFCKVTDSLAVARKMFPGKRNSLDALCARYEIDNSKRTLHGALLDAQILAEVYLAMTGGQTSMAFAMEGETQQQQGEATIQRIVRQASKLRVVFATDEEIAAHEARLDLVQKKGGSCLWRA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P03007"},
		"label":"dpo3e_ecoli"
	},
	{
		"object":"interactor",
		"sequence":"MSEPRFVHLRVHSDYSMIDGLAKTAPLVKKAAALGMPALAITDFTNLCGLVKFYGAGHGAGIKPIVGADFNVQCDLLGDELTHLTVLAANNTGYQNLTLLISKAYQRGYGAAGPIIDRDWLIELNEGLILLSGGRMGDVGRSLLRGNSALVDECVAFYEEHFPDRYFLELIRTGRPDEESYLHAAVELAEARGLPVVATNDVRFIDSSDFDAHEIRVAIHDGFTLDDPKRPRNYSPQQYMRSEEEMCELFADIPEALANTVEIAKRCNVTVRLGEYFLPQFPTGDMSTEDYLVKRAKEGLEERLAFLFPDEEERLKRRPEYDERLETELQVINQMGFPGYFLIVMEFIQWSKDNGVPVGPGRGSGAGSLVAYALKITDLDPLEFDLLFERFLNPERVSMPDFDVDFCMEKRDQVIEHVADMYGRDAVSQIITFGTMAAKAVIRDVGRVLGHPYGFVDRISKLIPPDPGMTLAKAFEAEPQLPEIYEADEEVKALIDMARKLEGVTRNAGKHAGGVVIAPTKITDFAPLYCDEEGKHPVTQFDKSDVEYAGLVKFDFLGLRTLTIINWALEMINKRRAKNGEPPLDIAAIPLDDKKSFDMLQRSETTAVFQLESRGMKDLIKRLQPDCFEDMIALVALFRPGPLQSGMVDNFIDRKHGREEISYPDVQWQHESLKPVLEPTYGIILYQEQVMQIAQVLSGYTLGGADMLRRAMGKKKPEEMAKQRSVFAEGAEKNGINAELAMKIFDLVEKFAGYGFNKSHSAAYALVSYQTLWLKAHYPAEFMAAVMTADMDNTEKVVGLVDECWRMGLKILPPDINSGLYHFHVNDDGEIVYGIGAIKGVGEGPIEAIIEARNKGGYFRELFDLCARTDTKKLNRRVLEKLIMSGAFDRLGPHRAALMNSLGDALKAADQHAKAEAIGQADMFGVLAEEPEQIEQSYASCQPWPEQVVLDGERETLGLYLTGHPINQYLKEIERYVGGVRLKDMHPTERGKVITAAGLVVAARVMVTKRGNRIGICTLDDRSGRLEVMLFTDALDKYQQLLEKDRILIVSGQVSFDDFSGGLKMTAREVMDIDEAREKYARGLAISLTDRQIDDQLLNRLRQSLEPHRSGTIPVHLYYQRADARARLRFGATWRVSPSDRLLNDLRGLIGSEQVELEFD",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P10443"},
		"label":"dpo3a_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.7.7.7"},{"db":"intact","id":"EBI-6467979"}],
		"expansion":{"id":"6","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03007"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"8031681",
				"name":"theta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-186"],
				"linkedFeatures":["32548155"]
				},
				{
				"id":"32498228",
				"name":"alpha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-243"],
				"linkedFeatures":["32241716"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P10443"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"16012089",
				"name":"beta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1160"]
				},
				{
				"id":"32241716",
				"name":"epsilon binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1160"],
				"linkedFeatures":["32498228"]
				},
				{
				"id":"8642136",
				"name":"tau binding region",
				"type":{"id":"MI:0429","name":"necessary binding region"},
				"sequenceData":["1112-1160"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLKNLAKLDQTEMDKVNVDLAAAGVAFKERYNMPVIAEAVEREQPEHLRSWFRERLIAHRLASVNLSRLPYEPKLK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0ABS8"},
		"label":"hole_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.7.7.7"},{"db":"intact","id":"EBI-6467979"}],
		"expansion":{"id":"6","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03007"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"8031681",
				"name":"theta binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-186"],
				"linkedFeatures":["32548155"]
				},
				{
				"id":"32498228",
				"name":"alpha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-243"],
				"linkedFeatures":["32241716"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0ABS8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32548155",
				"name":"epsilon binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-76"],
				"linkedFeatures":["8031681"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKFTVEREHLLKPLQQVSGPLGGRPTLPILGNLLLQVADGTLSLTGTDLEMEMVARVALVQPHEPGATTVPARKFFDICRGLPEGAEIAVQLEGERMLVRSGRSRFSLSTLPAADFPNLDDWQSEVEFTLPQATMKRLIEATQFSMAHQDVRYYLNGMLFETEGEELRTVATDGHRLAVCSMPIGQSLPSHSVIVPRKGVIELMRMLDGGDNPLRVQIGSNNIRAHVGDFIFTSKLVDGRFPDYRRVLPKNPDKHLEAGCDLLKQAFARAAILSNEKFRGVRLYVSENQLKITANNPEQEEAEEILDVTYSGAEMEIGFNVSYVLDVLNALKCENVRMMLTDSVSSVQIEDAASQSAAYVVMPMRL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A988"},
		"label":"dpo3b_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1jql"},{"db":"wwpdb","id":"1jqj"},{"db":"intenz","id":"EC 2.7.7.7"},{"db":"wwpdb","id":"2pol"},{"db":"intact","id":"EBI-6468862"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A988"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"24800749",
				"name":"alpha binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-366"]
				},
				{
				"id":"13046413",
				"name":"beta dimerisation",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-125","272-273"]
				},
				{
				"id":"26406805",
				"name":"delta binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["242-242","36-36","362-362","274-278","177-177"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0A988"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"28270491",
				"name":"alpha binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-366"]
				},
				{
				"id":"11392691",
				"name":"beta dimerisation",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-125","272-273"]
				},
				{
				"id":"15373986",
				"name":"delta binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["242-242","36-36","362-362","274-278","177-177"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAGNKPFNKQQAEPRERDPQVAGLKVPPHSIEAEQSVLGGLMLDNERWDDVAERVVADDFYTRPHRHIFTEMARLQESGSPIDLITLAESLERQGQLDSVGGFAYLAELSKNTPSAANISAYADIVRERAVVREMISVANEIAEAGFDPQGRTSEDLLDLAESRVFKIAESRANKDEGPKNIADVLDATVARIEQLFQQPHDGVTGVNTGYDDLNKKTAGLQPSDLIIVAARPSMGKTTFAMNLVENAAMLQDKPVLIFSLEMPSEQIMMRSLASLSRVDQTKIRTGQLDDEDWARISGTMGILLEKRNIYIDDSSGLTPTEVRSRARRIAREHGGIGLIMIDYLQLMRVPALSDNRTLEIAEISRSLKALAKELNVPVVALSQLNRSLEQRADKRPVNSDLRESGSIEQDADLIMFIYRDEVYHENSDLKGIAEIIIGKQRNGPIGTVRLTFNGQWSRFDNYAGPQYDDE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0ACB0"},
		"label":"dnab_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"emdb","id":"EMD-2322"},{"db":"intact","id":"EBI-6554207"},{"db":"intenz","id":"EC 3.6.4.12"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
			"bindingSites":[
				{
				"id":"21462199",
				"name":"dnab binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["5046841"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0ACB0"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"5046841",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-471"],
				"linkedFeatures":["21462199"]
				},
				{
				"id":"30207062",
				"name":"dnag hdb binding region",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["1-152"]
				},
				{
				"id":"11543251",
				"name":"hexamerisation",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-471"]
				},
				{
				"id":"29253244",
				"name":"dna binding site",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["186-454"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MASRGVNKVILVGNLGQDPEVRYMPNGGAVANITLATSESWRDKATGEMKEQTEWHRVVLFGKLAEVASEYLRKGSQVYIEGQLRTRKWTDQSGQDRYTTEVVVNVGGTMQMLGGRQGGGAPAGGNIGGGQPQGGWGQPQQPQGGNQFSGGAQSRPQQSAPAAPSNEPPMDFDDDIPF",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0AGE0"},
		"label":"ssb_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1eyg"},{"db":"intact","id":"EBI-6469511"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0AGE0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"19749704",
				"name":"primase binding region",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["c-c"]
				},
				{
				"id":"12838665",
				"name":"chi binding region",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["114-178"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AGE0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"24453924",
				"name":"primase binding region",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["c-c"]
				},
				{
				"id":"22420874",
				"name":"chi binding region",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["114-178"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MTLETAFMLPVQDAQHSFRRLLKAMSEPGVIVALHQLKRGWQPLNIATTSVLLTLADNDTPVWLSTPLNNDIVNQSLRFHTNAPLVSQPEQATFAVTDEAISSEQLNALSTGTAVAPEAGATLILQVASLSGGRMLRLTGAGIAEERMIAPQLPECILHELTERPHPFPLGIDLILTCGERLLAIPRTTHVEVC",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P16686"},
		"label":"phnh_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"2fsu"},{"db":"intact","id":"EBI-6471348"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P16686"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11369688",
				"name":"n-terminal alpha helix",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["n-n"],
				"linkedFeatures":["31415223"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P16686"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"31415223",
				"name":"n-terminal alpha helix",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["n-n"],
				"linkedFeatures":["11369688"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"organism":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
		"identifier":{"db":"chebi","id":"CHEBI:18009"},
		"label":"nadp+"
	},
	{
		"object":"interactor",
		"sequence":"MKQLTILGSTGSIGCSTLDVVRHNPEHFRVVALVAGKNVTRMVEQCLEFSPRYAVMDDEASAKLLKTMLQQQGSRTEVLSGQQAACDMAALEDVDQVMAAIVGAAGLLPTLAAIRAGKTILLANKESLVTCGRLFMDAVKQSKAQLLPVDSEHNAIFQSLPQPIQHNLGYADLEQNGVVSILLTGSGGPFRETPLRDLATMTPDQACRHPNWSMGRKISVDSATMMNKGLEYIEARWLFNASASQMEVLIHPQSVIHSMVRYQDGSVLAQLGEPDMRTPIAHTMAWPNRVNSGVKPLDFCKLSALTFAAPDYDRYPCLKLAMEAFEQGQAATTALNAANEITVAAFLAQQIRFTDIAALNLSVLEKMDMREPQCVDDVLSVDANAREVARKEVMRLAS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P45568"},
		"label":"dxr_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1k5h"},{"db":"wwpdb","id":"1t1s"},{"db":"intact","id":"EBI-6475852"},{"db":"intenz","id":"1.1.1.267"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:18009"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P45568"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"16681443",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["150-312"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:51381"},
		"label":"succinate salt"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"organism":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
		"identifier":{"db":"chebi","id":"CHEBI:36141"},
		"label":"quinone"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"2wu2"},{"db":"wwpdb","id":"2wp9"},{"db":"wwpdb","id":"2ws3"},{"db":"wwpdb","id":"2acz"},{"db":"wwpdb","id":"2wdr"},{"db":"wwpdb","id":"2wdq"},{"db":"wwpdb","id":"1nek"},{"db":"intact","id":"EBI-6476056"},{"db":"intenz","id":"1.3.5.1"},{"db":"wwpdb","id":"2wu5"},{"db":"wwpdb","id":"2wdv"}],
		"expansion":{"id":"7","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:51381"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17740362",
				"name":"fad binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["31135952"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:36141"},
			"bioRole":{"id":"MI:0580","name":"electron acceptor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"20592385",
				"name":"dhsb binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["15819489"]
				},
				{
				"id":"26402767",
				"name":"dhsd binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["27502447"]
				},
				{
				"id":"21336911",
				"name":"dhsc binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["13252236"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"2wu2"},{"db":"wwpdb","id":"2wp9"},{"db":"wwpdb","id":"2ws3"},{"db":"wwpdb","id":"2acz"},{"db":"wwpdb","id":"2wdr"},{"db":"wwpdb","id":"2wdq"},{"db":"wwpdb","id":"1nek"},{"db":"intact","id":"EBI-6476056"},{"db":"intenz","id":"1.3.5.1"},{"db":"wwpdb","id":"2wu5"},{"db":"wwpdb","id":"2wdv"}],
		"expansion":{"id":"7","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:51381"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17740362",
				"name":"fad binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["31135952"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:47402"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"29574037",
				"name":"dhsb binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["9052530"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"2wu2"},{"db":"wwpdb","id":"2wp9"},{"db":"wwpdb","id":"2ws3"},{"db":"wwpdb","id":"2acz"},{"db":"wwpdb","id":"2wdr"},{"db":"wwpdb","id":"2wdq"},{"db":"wwpdb","id":"1nek"},{"db":"intact","id":"EBI-6476056"},{"db":"intenz","id":"1.3.5.1"},{"db":"wwpdb","id":"2wu5"},{"db":"wwpdb","id":"2wdv"}],
		"expansion":{"id":"7","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:51381"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17740362",
				"name":"fad binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["31135952"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:33725"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"10079456",
				"name":"dhsb binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["22649849"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"organism":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
		"identifier":{"db":"chebi","id":"CHEBI:33739"},
		"label":"fe2-s2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"2wu2"},{"db":"wwpdb","id":"2wp9"},{"db":"wwpdb","id":"2ws3"},{"db":"wwpdb","id":"2acz"},{"db":"wwpdb","id":"2wdr"},{"db":"wwpdb","id":"2wdq"},{"db":"wwpdb","id":"1nek"},{"db":"intact","id":"EBI-6476056"},{"db":"intenz","id":"1.3.5.1"},{"db":"wwpdb","id":"2wu5"},{"db":"wwpdb","id":"2wdv"}],
		"expansion":{"id":"7","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:51381"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17740362",
				"name":"fad binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["31135952"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:33739"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"992572",
				"name":"dhsb binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["5612786"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"2wu2"},{"db":"wwpdb","id":"2wp9"},{"db":"wwpdb","id":"2ws3"},{"db":"wwpdb","id":"2acz"},{"db":"wwpdb","id":"2wdr"},{"db":"wwpdb","id":"2wdq"},{"db":"wwpdb","id":"1nek"},{"db":"intact","id":"EBI-6476056"},{"db":"intenz","id":"1.3.5.1"},{"db":"wwpdb","id":"2wu5"},{"db":"wwpdb","id":"2wdv"}],
		"expansion":{"id":"7","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:51381"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17740362",
				"name":"fad binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["31135952"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:30413"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"12586781",
				"name":"dhsc binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["18901642"]
				},
				{
				"id":"20102103",
				"name":"dhsd binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["30026791"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKLPVREFDAVVIGAGGAGMRAALQISQSGQTCALLSKVFPTRSHTVSAQGGITVALGNTHEDNWEWHMYDTVKGSDYIGDQDAIEYMCKTGPEAILELEHMGLPFSRLDDGRIYQRPFGGQSKNFGGEQAARTAAAADRTGHALLHTLYQQNLKNHTTIFSEWYALDLVKNQDGAVVGCTALCIETGEVVYFKARATVLATGGAGRIYQSTTNAHINTGDGVGMAIRAGVPVQDMEMWQFHPTGIAGAGVLVTEGCRGEGGYLLNKHGERFMERYAPNAKDLAGRDVVARSIMIEIREGRGCDGPWGPHAKLKLDHLGKEVLESRLPGILELSRTFAHVDPVKEPIPVIPTCHYMMGGIPTKVTGQALTVNEKGEDVVVPGLFAVGEIACVSVHGANRLGGNSLLDLVVFGRAAGLHLQESIAEQGALRDASESDVEASLDRLNRWNNNRNGEDPVAIRKALQECMQHNFSVFREGDAMAKGLEQLKVIRERLKNARLDDTSSEFNTQRVECLELDNLMETAYATAVSANFRTESRGAHSRFDFPDRDDENWLCHSLYLPESESMTRRSVNMEPKLRPAFPPKIRTY",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0AC41"},
		"label":"sdha_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"2wu2"},{"db":"wwpdb","id":"2wp9"},{"db":"wwpdb","id":"2ws3"},{"db":"wwpdb","id":"2acz"},{"db":"wwpdb","id":"2wdr"},{"db":"wwpdb","id":"2wdq"},{"db":"wwpdb","id":"1nek"},{"db":"intact","id":"EBI-6476056"},{"db":"intenz","id":"1.3.5.1"},{"db":"wwpdb","id":"2wu5"},{"db":"wwpdb","id":"2wdv"}],
		"expansion":{"id":"7","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:51381"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17740362",
				"name":"fad binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["31135952"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AC41"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"1619554",
				"name":"dhsb binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-588"],
				"linkedFeatures":["7209980"]
				},
				{
				"id":"13087317",
				"name":"fad binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-588"],
				"linkedFeatures":["9243302"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MRLEFSIYRYNPDVDDAPRMQDYTLEADEGRDMMLLDALIQLKEKDPSLSFRRSCREGVCGSDGLNMNGKNGLACITPISALNQPGKKIVIRPLPGLPVIRDLVVDMGQFYAQYEKIKPYLLNNGQNPPAREHLQMPEQREKLDGLYECILCACCSTSCPSFWWNPDKFIGPAGLLAAYRFLIDSRDTETDSRLDGLSDAFSVFRCHSIMNCVSVCPKGLNPTRAIGHIKSMLLQRNA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P07014"},
		"label":"sdhb_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"2wu2"},{"db":"wwpdb","id":"2wp9"},{"db":"wwpdb","id":"2ws3"},{"db":"wwpdb","id":"2acz"},{"db":"wwpdb","id":"2wdr"},{"db":"wwpdb","id":"2wdq"},{"db":"wwpdb","id":"1nek"},{"db":"intact","id":"EBI-6476056"},{"db":"intenz","id":"1.3.5.1"},{"db":"wwpdb","id":"2wu5"},{"db":"wwpdb","id":"2wdv"}],
		"expansion":{"id":"7","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:51381"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17740362",
				"name":"fad binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["31135952"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P07014"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"28716310",
				"name":"dhsd binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-238"],
				"linkedFeatures":["21635604"]
				},
				{
				"id":"7209980",
				"name":"dhsa binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-238"],
				"linkedFeatures":["1619554"]
				},
				{
				"id":"231194",
				"name":"dhsc binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-238"],
				"linkedFeatures":["26921818"]
				},
				{
				"id":"5612786",
				"name":"fe2-s2 binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-238"],
				"linkedFeatures":["992572"]
				},
				{
				"id":"9052530",
				"name":"fe3-s4 binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-238"],
				"linkedFeatures":["29574037"]
				},
				{
				"id":"15819489",
				"name":"quinone binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-238"],
				"linkedFeatures":["20592385"]
				},
				{
				"id":"22649849",
				"name":"fe4-s4 binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-238"],
				"linkedFeatures":["10079456"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MVSNASALGRNGVHDFILVRATAIVLTLYIIYMVGFFATSGELTYEVWIGFFASAFTKVFTLLALFSILIHAWIGMWQVLTDYVKPLALRLMLQLVIVVALVVYVIYGFVVVWGV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0AC44"},
		"label":"dhsd_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"2wu2"},{"db":"wwpdb","id":"2wp9"},{"db":"wwpdb","id":"2ws3"},{"db":"wwpdb","id":"2acz"},{"db":"wwpdb","id":"2wdr"},{"db":"wwpdb","id":"2wdq"},{"db":"wwpdb","id":"1nek"},{"db":"intact","id":"EBI-6476056"},{"db":"intenz","id":"1.3.5.1"},{"db":"wwpdb","id":"2wu5"},{"db":"wwpdb","id":"2wdv"}],
		"expansion":{"id":"7","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:51381"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17740362",
				"name":"fad binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["31135952"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AC44"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"21635604",
				"name":"dhsb binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-115"],
				"linkedFeatures":["28716310"]
				},
				{
				"id":"27050005",
				"name":"dhsc binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-115"],
				"linkedFeatures":["439280"]
				},
				{
				"id":"30026791",
				"name":"heme binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-115"],
				"linkedFeatures":["20102103"]
				},
				{
				"id":"27502447",
				"name":"quinone binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-115"],
				"linkedFeatures":["26402767"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MIRNVKKQRPVNLDLQTIRFPITAIASILHRVSGVITFVAVGILLWLLGTSLSSPEGFEQASAIMGSFFVKFIMWGILTALAYHVVVGIRHMMMDFGYLEETFEAGKRSAKISFVITVVLSLLAGVLVW",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P69054"},
		"label":"dhsc_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"2wu2"},{"db":"wwpdb","id":"2wp9"},{"db":"wwpdb","id":"2ws3"},{"db":"wwpdb","id":"2acz"},{"db":"wwpdb","id":"2wdr"},{"db":"wwpdb","id":"2wdq"},{"db":"wwpdb","id":"1nek"},{"db":"intact","id":"EBI-6476056"},{"db":"intenz","id":"1.3.5.1"},{"db":"wwpdb","id":"2wu5"},{"db":"wwpdb","id":"2wdv"}],
		"expansion":{"id":"7","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:51381"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17740362",
				"name":"fad binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["31135952"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P69054"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"439280",
				"name":"dhsd binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-129"],
				"linkedFeatures":["27050005"]
				},
				{
				"id":"26921818",
				"name":"dhsb binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-129"],
				"linkedFeatures":["231194"]
				},
				{
				"id":"18901642",
				"name":"heme binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-129"],
				"linkedFeatures":["12586781"]
				},
				{
				"id":"13252236",
				"name":"quinone binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-129"],
				"linkedFeatures":["21336911"]
				}]
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
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"2wu2"},{"db":"wwpdb","id":"2wp9"},{"db":"wwpdb","id":"2ws3"},{"db":"wwpdb","id":"2acz"},{"db":"wwpdb","id":"2wdr"},{"db":"wwpdb","id":"2wdq"},{"db":"wwpdb","id":"1nek"},{"db":"intact","id":"EBI-6476056"},{"db":"intenz","id":"1.3.5.1"},{"db":"wwpdb","id":"2wu5"},{"db":"wwpdb","id":"2wdv"}],
		"expansion":{"id":"7","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:51381"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17740362",
				"name":"fad binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["31135952"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:16238"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"9243302",
				"name":"sdha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["13087317"]
				},
				{
				"id":"31135952",
				"name":"succinate binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["17740362"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MASVQLQNVTKAWGEVVVSKDINLDIHEGEFVVFVGPSGCGKSTLLRMIAGLETITSGDLFIGEKRMNDTPPAERGVGMVFQSYALYPHLSVAENMSFGLKLAGAKKEVINQRVNQVAEVLQLAHLLDRKPKALSGGQRQRVAIGRTLVAEPSVFLLDEPLSNLDAALRVQMRIEISRLHKRLGRTMIYVTHDQVEAMTLADKIVVLDAGRVAQVGKPLELYHYPADRFVAGFIGSPKMNFLPVKVTATAIDQVQVELPMPNRQQVWLPVESRDVQVGANMSLGIRPEHLLPSDIADVILEGEVQVVEQLGNETQIHIQIPSIRQNLVYRQNDVVLVEEGATFAIGLPPERCHLFREDGTACRRLHKEPGV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P68187"},
		"label":"malk_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"3.6.3.19"},{"db":"intact","id":"EBI-6477643"},{"db":"wwpdb","id":"3puy"}],
		"expansion":{"id":"8","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P68187"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"1011539",
				"name":"maltose binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["22395227"]
				},
				{
				"id":"16519508",
				"name":"malg binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["14016999"]
				},
				{
				"id":"31590713",
				"name":"malf binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["13338203"]
				},
				{
				"id":"31574003",
				"name":"dimerisation site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"]
				},
				{
				"id":"937355",
				"name":"atp binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["17098459"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17098459",
				"name":"malk binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["937355"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:17306"},
		"label":"maltose"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"3.6.3.19"},{"db":"intact","id":"EBI-6477643"},{"db":"wwpdb","id":"3puy"}],
		"expansion":{"id":"8","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P68187"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"1011539",
				"name":"maltose binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["22395227"]
				},
				{
				"id":"16519508",
				"name":"malg binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["14016999"]
				},
				{
				"id":"31590713",
				"name":"malf binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["13338203"]
				},
				{
				"id":"31574003",
				"name":"dimerisation site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"]
				},
				{
				"id":"937355",
				"name":"atp binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["17098459"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:17306"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"22395227",
				"name":"malk binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1011539"]
				},
				{
				"id":"13661443",
				"name":"malf binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["28452277"]
				},
				{
				"id":"13223247",
				"name":"malg binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["12125578"]
				},
				{
				"id":"18528469",
				"name":"male binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["22853869"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDVIKKKHWWQSDALKWSVLGLLGLLVGYLVVLMYAQGEYLFAITTLILSSAGLYIFANRKAYAWRYVYPGMAGMGLFVLFPLVCTIAIAFTNYSSTNQLTFERAQEVLLDRSWQAGKTYNFGLYPAGDEWQLALSDGETGKNYLSDAFKFGGEQKLQLKETTAQPEGERANLRVITQNRQALSDITAILPDGNKVMMSSLRQFSGTQPLYTLDGDGTLTNNQSGVKYRPNNQIGFYQSITADGNWGDEKLSPGYTVTTGWKNFTRVFTDEGIQKPFLAIFVWTVVFSLITVFLTVAVGMVLACLVQWEALRGKAVYRVLLILPYAVPSFISILIFKGLFNQSFGEINMMLSALFGVKPAWFSDPTTARTMLIIVNTWLGYPYMMILCMGLLKAIPDDLYEASAMDGAGPFQNFFKITLPLLIKPLTPLMIASFAFNFNNFVLIQLLTNGGPDRLGTTTPAGYTDLLVNYTYRIAFEGGGGQDFGLAAAIATLIFLLVGALAIVNLKATRMKFD",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P02916"},
		"label":"malf_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"3.6.3.19"},{"db":"intact","id":"EBI-6477643"},{"db":"wwpdb","id":"3puy"}],
		"expansion":{"id":"8","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P68187"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"1011539",
				"name":"maltose binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["22395227"]
				},
				{
				"id":"16519508",
				"name":"malg binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["14016999"]
				},
				{
				"id":"31590713",
				"name":"malf binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["13338203"]
				},
				{
				"id":"31574003",
				"name":"dimerisation site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"]
				},
				{
				"id":"937355",
				"name":"atp binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["17098459"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P02916"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"13338203",
				"name":"malk binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-514"],
				"linkedFeatures":["31590713"]
				},
				{
				"id":"7405963",
				"name":"male binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-514"],
				"linkedFeatures":["18633749"]
				},
				{
				"id":"13909409",
				"name":"malg binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-514"],
				"linkedFeatures":["1715467"]
				},
				{
				"id":"28452277",
				"name":"maltose binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-514"],
				"linkedFeatures":["13661443"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKIKTGARILALSALTTMMFSASALAKIEEGKLVIWINGDKGYNGLAEVGKKFEKDTGIKVTVEHPDKLEEKFPQVAATGDGPDIIFWAHDRFGGYAQSGLLAEITPDKAFQDKLYPFTWDAVRYNGKLIAYPIAVEALSLIYNKDLLPNPPKTWEEIPALDKELKAKGKSALMFNLQEPYFTWPLIAADGGYAFKYENGKYDIKDVGVDNAGAKAGLTFLVDLIKNKHMNADTDYSIAEAAFNKGETAMTINGPWAWSNIDTSKVNYGVTVLPTFKGQPSKPFVGVLSAGINAASPNKELAKEFLENYLLTDEGLEAVNKDKPLGAVALKSYEEELAKDPRIAATMENAQKGEIMPNIPQMSAFWYAVRTAVINAASGRQTVDEALKDAQTRITK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0AEX9"},
		"label":"male_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"3.6.3.19"},{"db":"intact","id":"EBI-6477643"},{"db":"wwpdb","id":"3puy"}],
		"expansion":{"id":"8","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P68187"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"1011539",
				"name":"maltose binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["22395227"]
				},
				{
				"id":"16519508",
				"name":"malg binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["14016999"]
				},
				{
				"id":"31590713",
				"name":"malf binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["13338203"]
				},
				{
				"id":"31574003",
				"name":"dimerisation site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"]
				},
				{
				"id":"937355",
				"name":"atp binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["17098459"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AEX9"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"22853869",
				"name":"maltose binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-396"],
				"linkedFeatures":["18528469"]
				},
				{
				"id":"8611500",
				"name":"malg binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-396"],
				"linkedFeatures":["13224542"]
				},
				{
				"id":"18633749",
				"name":"malf binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-396"],
				"linkedFeatures":["7405963"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAMVQPKSQKARLFITHLLLLLFIAAIMFPLLMVVAISLRQGNFATGSLIPEQISWDHWKLALGFSVEQADGRITPPPFPVLLWLWNSVKVAGISAIGIVALSTTCAYAFARMRFPGKATLLKGMLIFQMFPAVLSLVALYALFDRLGEYIPFIGLNTHGGVIFAYLGGIALHVWTIKGYFETIDSSLEEAAALDGATPWQAFRLVLLPLSVPILAVVFILSFIAAITEVPVASLLLRDVNSYTLAVGMQQYLNPQNYLWGDFAAAAVMSALPITIVFLLAQRWLVNGLTAGGVKG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P68183"},
		"label":"malg_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"3.6.3.19"},{"db":"intact","id":"EBI-6477643"},{"db":"wwpdb","id":"3puy"}],
		"expansion":{"id":"8","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P68187"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"1011539",
				"name":"maltose binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["22395227"]
				},
				{
				"id":"16519508",
				"name":"malg binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["14016999"]
				},
				{
				"id":"31590713",
				"name":"malf binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["13338203"]
				},
				{
				"id":"31574003",
				"name":"dimerisation site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"]
				},
				{
				"id":"937355",
				"name":"atp binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["17098459"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P68183"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"13224542",
				"name":"male binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-296"],
				"linkedFeatures":["8611500"]
				},
				{
				"id":"1715467",
				"name":"malf binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-296"],
				"linkedFeatures":["13909409"]
				},
				{
				"id":"12125578",
				"name":"maltose binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-296"],
				"linkedFeatures":["13223247"]
				},
				{
				"id":"14016999",
				"name":"malk binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-296"],
				"linkedFeatures":["16519508"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"3fh6"},{"db":"intact","id":"EBI-8705175"},{"db":"wwpdb","id":"2r6g"}],
		"expansion":{"id":"9","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P68187"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"332009",
				"name":"malf binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["10048482"]
				},
				{
				"id":"5386048",
				"name":"dimerisation site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"]
				},
				{
				"id":"27019592",
				"name":"malg binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["26162052"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P02916"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"10048482",
				"name":"malk binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-514"],
				"linkedFeatures":["332009"]
				},
				{
				"id":"8339906",
				"name":"malg binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-514"],
				"linkedFeatures":["11952186"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"3fh6"},{"db":"intact","id":"EBI-8705175"},{"db":"wwpdb","id":"2r6g"}],
		"expansion":{"id":"9","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P68187"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"332009",
				"name":"malf binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["10048482"]
				},
				{
				"id":"5386048",
				"name":"dimerisation site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"]
				},
				{
				"id":"27019592",
				"name":"malg binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"],
				"linkedFeatures":["26162052"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P68183"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11952186",
				"name":"malf binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-296"],
				"linkedFeatures":["8339906"]
				},
				{
				"id":"26162052",
				"name":"malk binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-296"],
				"linkedFeatures":["27019592"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGLFDKLKSLVSDDKKDTGTIEIIAPLSGEIVNIEDVPDVVFAEKIVGDGIAIKPTGNKMVAPVDGTIGKIFETNHAFSIESDSGVELFVHFGIDTVELKGEGFKRIAEEGQRVKVGDTVIEFDLPLLEEKAKSTLTPVVISNMDEIKELIKLSGSVTVGETPVIRIKK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P69783"},
		"label":"ptga_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"4jbw"},{"db":"intact","id":"EBI-6913771"}],
		"expansion":{"id":"10","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P69783"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"23573374",
				"name":"malk binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-169"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P68187"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"20518378",
				"name":"dimerisation site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"]
				},
				{
				"id":"13489683",
				"name":"malg binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"]
				},
				{
				"id":"27367572",
				"name":"malf binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"]
				},
				{
				"id":"2643143",
				"name":"ptga binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-371"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"4jbw"},{"db":"intact","id":"EBI-6913771"}],
		"expansion":{"id":"10","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P69783"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"23573374",
				"name":"malk binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-169"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P02916"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"30792461",
				"name":"malg binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-514"]
				},
				{
				"id":"18893046",
				"name":"male binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-514"]
				},
				{
				"id":"9847384",
				"name":"malk binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-514"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"4jbw"},{"db":"intact","id":"EBI-6913771"}],
		"expansion":{"id":"10","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P69783"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"23573374",
				"name":"malk binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-169"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P68183"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"14529855",
				"name":"malk binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-296"]
				},
				{
				"id":"27685878",
				"name":"malf binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-296"]
				},
				{
				"id":"17246895",
				"name":"male binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-296"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSLSLWQQCLARLQDELPATEFSMWIRPLQAELSDNTLALYAPNRFVLDWVRDKYLNNINGLLTSFCGADAPQLRFEVGTKPVTQTPQAAVTSNVAAPAQVAQTQPQRAAPSTRSGWDNVPAPAEPTYRSNVNVKHTFDNFVEGKSNQLARAAARQVADNPGGAYNPLFLYGGTGLGKTHLLHAVGNGIMARKPNAKVVYMHSERFVQDMVKALQNNAIEEFKRYYRSVDALLIDDIQFFANKERSQEEFFHTFNALLEGNQQIILTSDRYPKEINGVEDRLKSRFGWGLTVAIEPPELETRVAILMKKADENDIRLPGEVAFFIAKRLRSNVRELEGALNRVIANANFTGRAITIDFVREALRDLLALQEKLVTIDNIQKTVAEYYKIKVADLLSKRRSRSVARPRQMAMALAKELTNHSLPEIGDAFGGRDHTTVLHACRKIEQLREESHDIKEDFSNLIRTLSS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P03004"},
		"label":"dnaa_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-6508476"}],
		"expansion":{"id":"11","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACB0"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"25384197",
				"name":"dnaa binding region",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["1-206"],
				"linkedFeatures":["21165698"]
				},
				{
				"id":"21359384",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21868225"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"17568777",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-467"],
				"linkedFeatures":["32989846"]
				},
				{
				"id":"21165698",
				"name":"dnab binding region",
				"type":{"id":"MI:0429","name":"necessary binding region"},
				"sequenceData":["135-148","24-56","21-21"],
				"linkedFeatures":["25384197"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0680","name":"single stranded deoxyribonucleic acid"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"chebi","id":"CHEBI:9160"},
		"label":"ssdna_generic_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-6508476"}],
		"expansion":{"id":"11","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACB0"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"25384197",
				"name":"dnaa binding region",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["1-206"],
				"linkedFeatures":["21165698"]
				},
				{
				"id":"21359384",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21868225"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:9160"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"}
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-6508476"}],
		"expansion":{"id":"11","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACB0"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"25384197",
				"name":"dnaa binding region",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["1-206"],
				"linkedFeatures":["21165698"]
				},
				{
				"id":"21359384",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21868225"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
			"bindingSites":[
				{
				"id":"32989846",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["17568777"]
				},
				{
				"id":"21868225",
				"name":"dnab binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21359384"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAGRIPRVFINDLLARTDIVDLIDARVKLKKQGKNFHACCPFHNEKTPSFTVNGEKQFYHCFGCGAHGNAIDFLMNYDKLEFVETVEELAAMHNLEVPFEAGSGPSQIERHQRQTLYQLMDGLNTFYQQSLQQPVATSARQYLEKRGLSHEVIARFAIGFAPPGWDNVLKRFGGNPENRQSLIDAGMLVTNDQGRSYDRFRERVMFPIRDKRGRVIGFGGRVLGNDTPKYLNSPETDIFHKGRQLYGLYEAQQDNAEPNRLLVVEGYMDVVALAQYGINYAVASLGTSTTADHIQLLFRATNNVICCYDGDRAGRDAAWRALETALPYMTDGRQLRFMFLPDGEDPDTLVRKEGKEAFEARMEQAMPLSAFLFNSLMPQVDLSTPDGRARLSTLALPLISQVPGETLRIYLRQELGNKLGILDDSQLERLMPKAAESGVSRPVPQLKRTTMRILIGLLVQNPELATLVPPLENLDENKLPGLGLFRELVNTCLSQPGLTTGQLLEHYRGTNNAATLEKLSMWDDIADKNIAEQTFTDSLNHMFDSLLELRQEELIARERTHGLSNEERLELWTLNQELAKK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0ABS5"},
		"label":"dnag_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"3.6.4.12"},{"db":"intact","id":"EBI-6502267"}],
		"expansion":{"id":"12","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ABS5"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"6920217",
				"name":"dnab binding region",
				"type":{"id":"MI:0429","name":"necessary binding region"},
				"sequenceData":["574-581"],
				"linkedFeatures":["8433214"]
				},
				{
				"id":"3110672",
				"name":"ssb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-581"]
				},
				{
				"id":"3268201",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-581"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
			"bindingSites":[
				{
				"id":"50099",
				"name":"dnab binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["3153356"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"3.6.4.12"},{"db":"intact","id":"EBI-6502267"}],
		"expansion":{"id":"12","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ABS5"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"6920217",
				"name":"dnab binding region",
				"type":{"id":"MI:0429","name":"necessary binding region"},
				"sequenceData":["574-581"],
				"linkedFeatures":["8433214"]
				},
				{
				"id":"3110672",
				"name":"ssb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-581"]
				},
				{
				"id":"3268201",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-581"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0ACB0"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"3153356",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-471"],
				"linkedFeatures":["50099"]
				},
				{
				"id":"16006188",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-471"]
				},
				{
				"id":"8433214",
				"name":"dnag binding region",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["n-n"],
				"linkedFeatures":["6920217"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"emdb","id":"EMD-2321"},{"db":"intact","id":"EBI-6508439"}],
		"expansion":{"id":"13","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACB0"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"10131789",
				"name":"dnac binding region",
				"type":{"id":"MI:0429","name":"necessary binding region"},
				"sequenceData":["c-c"],
				"linkedFeatures":["29797712"]
				},
				{
				"id":"10257671",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-471"],
				"linkedFeatures":["31561756"]
				},
				{
				"id":"29984888",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-471"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
			"bindingSites":[
				{
				"id":"31561756",
				"name":"dnab binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["10257671"]
				},
				{
				"id":"2002844",
				"name":"dnac binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["6710918"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKNVGDLMQRLQKMMPAHIKPAFKTGEELLAWQKEQGAIRSAALERENRAMKMQRTFNRSGIRPLHQNCSFENYRVECEGQMNALSKARQYVEEFDGNIASFIFSGKPGTGKNHLAAAICNELLLRGKSVLIITVADIMSAMKDTFRNSGTSEEQLLNDLSNVDLLVIDEIGVQTESKYEKVIINQIVDRRSSSKRPTGMLTNSNMEEMTKLLGERVMDRMRLGNSLWVIFNWDSYRSRVTGKEY",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0AEF0"},
		"label":"dnac_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"emdb","id":"EMD-2321"},{"db":"intact","id":"EBI-6508439"}],
		"expansion":{"id":"13","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACB0"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"10131789",
				"name":"dnac binding region",
				"type":{"id":"MI:0429","name":"necessary binding region"},
				"sequenceData":["c-c"],
				"linkedFeatures":["29797712"]
				},
				{
				"id":"10257671",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-471"],
				"linkedFeatures":["31561756"]
				},
				{
				"id":"29984888",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-471"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AEF0"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"29797712",
				"name":"dnab binding region",
				"type":{"id":"MI:0429","name":"necessary binding region"},
				"sequenceData":["n-n"],
				"linkedFeatures":["10131789"]
				},
				{
				"id":"6710918",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-245"],
				"linkedFeatures":["2002844"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MIKSALLVLEDGTQFHGRAIGATGSAVGEVVFNTSMTGYQEILTDPSYSRQIVTLTYPHIGNVGTNDADEESSQVHAQGLVIRDLPLIASNFRNTEDLSSYLKRHNIVAIADIDTRKLTRLLREKGAQNGCIIAGDNPDAALALEKARAFPGLNGMDLAKEVTTAEAYSWTQGSWTLTGGLPEAKKEDELPFHVVAYDFGAKRNILRMLVDRGCRLTIVPAQTSAEDVLKMNPDGIFLSNGPGDPAPCDYAITAIQKFLETDIPVFGICLGHQLLALASGAKTVKMKFGHHGGNHPVKDVEKNVVMITAQNHGFAVDEATLPANLRVTHKSLFDGTLQGIHRTDKPAFSFQGHPEASPGPHDAAPLFDHFIELIEQYRKTAK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A6F1"},
		"label":"cara_ecoli"
	},
	{
		"object":"interactor",
		"sequence":"MPKRTDIKSILILGAGPIVIGQACEFDYSGAQACKALREEGYRVILVNSNPATIMTDPEMADATYIEPIHWEVVRKIIEKERPDAVLPTMGGQTALNCALELERQGVLEEFGVTMIGATADAIDKAEDRRRFDVAMKKIGLETARSGIAHTMEEALAVAADVGFPCIIRPSFTMGGSGGGIAYNREEFEEICARGLDLSPTKELLIDESLIGWKEYEMEVVRDKNDNCIIVCSIENFDAMGIHTGDSITVAPAQTLTDKEYQIMRNASMAVLREIGVETGGSNVQFAVNPKNGRLIVIEMNPRVSRSSALASKATGFPIAKVAAKLAVGYTLDELMNDITGGRTPASFEPSIDYVVTKIPRFNFEKFAGANDRLTTQMKSVGEVMAIGRTQQESLQKALRGLEVGATGFDPKVSLDDPEALTKIRRELKDAGADRIWYIADAFRAGLSVDGVFNLTNIDRWFLVQIEELVRLEEKVAEVGITGLNADFLRQLKRKGFADARLAKLAGVREAEIRKLRDQYDLHPVYKRVDTCAAEFATDTAYMYSTYEEECEANPSTDREKIMVLGGGPNRIGQGIEFDYCCVHASLALREDGYETIMVNCNPETVSTDYDTSDRLYFEPVTLEDVLEIVRIEKPKGVIVQYGGQTPLKLARALEAAGVPVIGTSPDAIDRAEDRERFQHAVERLKLKQPANATVTAIEMAVEKAKEIGYPLVVRPSYVLGGRAMEIVYDEADLRRYFQTAVSVSNDAPVLLDHFLDDAVEVDVDAICDGEMVLIGGIMEHIEQAGVHSGDSACSLPAYTLSQEIQDVMRQQVQKLAFELQVRGLMNVQFAVKNNEVYLIEVNPRAARTVPFVSKATGVPLAKVAARVMAGKSLAEQGVTKEVIPPYYSVKEVVLPFNKFPGVDPLLGPEMRSTGEVMGVGRTFAEAFAKAQLGSNSTMKKHGRALLSVREGDKERVVDLAAKLLKQGFELDATHGTAIVLGEAGINPRLVNKVHEGRPHIQDRIKNGEYTYIINTTSGRRAIEDSRVIRRSALQYKVHYDTTLNGGFATAMALNADATEKVISVQEMHAQIK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P00968"},
		"label":"carb_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1CE8"},{"db":"intenz","id":"6.3.5.5"},{"db":"wwpdb","id":"1BXR"},{"db":"intact","id":"EBI-6516404"},{"db":"wwpdb","id":"1A9X"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A6F1"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P00968"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MQERIKACFTESIQTQIAAAEALPDAISRAAMTLVQSLLNGNKILCCGNGTSAANAQHFAASMINRFETERPSLPAIALNTDNVVLTAIANDRLHDEVYAKQVRALGHAGDVLLAISTRGNSRDIVKAVEAAVTRDMTIVALTGYDGGELAGLLGPQDVEIRIPSHRSARIQEMHMLTVNCLCDLIDNTLFPHQDD",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P66817"},
		"label":"diaa_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"2yva"},{"db":"intact","id":"EBI-6550318"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P66817"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"}
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P66817"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"}
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6552438"}],
		"expansion":{"id":"14","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"13955027",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-366","4-63"],
				"linkedFeatures":["30220215"]
				},
				{
				"id":"31278342",
				"name":"ssdna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-467"],
				"linkedFeatures":["31371980"]
				},
				{
				"id":"28090169",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-366"],
				"linkedFeatures":["621554"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:9160"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
			"bindingSites":[
				{
				"id":"31371980",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["31278342"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6552438"}],
		"expansion":{"id":"14","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"13955027",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-366","4-63"],
				"linkedFeatures":["30220215"]
				},
				{
				"id":"31278342",
				"name":"ssdna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-467"],
				"linkedFeatures":["31371980"]
				},
				{
				"id":"28090169",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-366"],
				"linkedFeatures":["621554"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
			"bindingSites":[
				{
				"id":"621554",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["28090169"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6552438"}],
		"expansion":{"id":"14","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"13955027",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-366","4-63"],
				"linkedFeatures":["30220215"]
				},
				{
				"id":"31278342",
				"name":"ssdna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-467"],
				"linkedFeatures":["31371980"]
				},
				{
				"id":"28090169",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-366"],
				"linkedFeatures":["621554"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
			"bindingSites":[
				{
				"id":"11032619",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["3445841"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6552438"}],
		"expansion":{"id":"14","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"13955027",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-366","4-63"],
				"linkedFeatures":["30220215"]
				},
				{
				"id":"31278342",
				"name":"ssdna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-467"],
				"linkedFeatures":["31371980"]
				},
				{
				"id":"28090169",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-366"],
				"linkedFeatures":["621554"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:9160"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
			"bindingSites":[
				{
				"id":"32859240",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["26420575"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6552438"}],
		"expansion":{"id":"14","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"13955027",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-366","4-63"],
				"linkedFeatures":["30220215"]
				},
				{
				"id":"31278342",
				"name":"ssdna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-467"],
				"linkedFeatures":["31371980"]
				},
				{
				"id":"28090169",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-366"],
				"linkedFeatures":["621554"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"30220215",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-366","4-63"],
				"linkedFeatures":["13955027"]
				},
				{
				"id":"3445841",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-366"],
				"linkedFeatures":["11032619"]
				},
				{
				"id":"26420575",
				"name":"ssdna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-467"],
				"linkedFeatures":["32859240"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAVVKCKPTSPGRRHVVKVVNPELHKGKPFAPLLEKNSKSGGRNNNGRITTRHIGGGHKQAYRIVDFKRNKDGIPAVVERLEYDPNRSANIALVLYKDGERRYILAPKGLKAGDQIQSGVDAAIKPGNTLPMRNIPVGSTVHNVEMKPGKGGQLARSAGTYVQIVARDGAYVTLRLRSGEMRKVEADCRATLGEVGNAEHMLRVLGKAGAARWRGVRPTVRGTAMNPVDHPHGGGEGRNFGKHPVTPWGVQTKGKKTRSNKRTDKFIVRRRSK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P60422"},
		"label":"rl2_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6553156"}],
		"expansion":{"id":"15","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"24807414",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-467"],
				"linkedFeatures":["24390217"]
				},
				{
				"id":"25442037",
				"name":"l2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-129"],
				"linkedFeatures":["20204050"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P60422"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"20204050",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["60-273"],
				"linkedFeatures":["25442037"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6553156"}],
		"expansion":{"id":"15","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"24807414",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-467"],
				"linkedFeatures":["24390217"]
				},
				{
				"id":"25442037",
				"name":"l2 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-129"],
				"linkedFeatures":["20204050"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"24390217",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["24807414"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MNTPAQLSLPLYLPDDETFASFWPGDNSSLLAALQNVLRQEHSGYIYLWAREGAGRSHLLHAACAELSQRGDAVGYVPLDKRTWFVPEVLDGMEHLSLVCIDNIECIAGDELWEMAIFDLYNRILESGKTRLLITGDRPPRQLNLGLPDLASRLDWGQIYKLQPLSDEDKLQALQLRARLRGFELPEDVGRFLLKRLDREMRTLFMTLDQLDRASITAQRKLTIPFVKEILKL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P69931"},
		"label":"hda_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-6656972"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P69931"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32185281",
				"name":"dnan binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["4-13"],
				"linkedFeatures":["7020009"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0A988"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"7020009",
				"name":"hda binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-366"],
				"linkedFeatures":["32185281"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:16761"},
		"label":"adp"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6554171"}],
		"expansion":{"id":"16","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"7916809",
				"name":"hda binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-467"],
				"linkedFeatures":["14493398"]
				},
				{
				"id":"18918674",
				"name":"adp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-467"],
				"linkedFeatures":["4356959"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:16761"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
			"bindingSites":[
				{
				"id":"11644050",
				"name":"hda binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["12102067"]
				},
				{
				"id":"4356959",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["18918674"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6554171"}],
		"expansion":{"id":"16","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"7916809",
				"name":"hda binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-467"],
				"linkedFeatures":["14493398"]
				},
				{
				"id":"18918674",
				"name":"adp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-467"],
				"linkedFeatures":["4356959"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P69931"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"14493398",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-233"],
				"linkedFeatures":["7916809"]
				},
				{
				"id":"12102067",
				"name":"adp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-233"],
				"linkedFeatures":["11644050"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0681","name":"double stranded deoxyribonucleic acid"},
		"organism":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
		"identifier":{"db":"chebi","id":"chebi:4705"},
		"label":"dsdna_generic_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1dps"},{"db":"intact","id":"EBI-6558261"}],
		"expansion":{"id":"17","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26037265",
				"name":"1-129",
				"type":{"id":"MI:0429","name":"necessary binding region"},
				"sequenceData":["1-129"],
				"linkedFeatures":["24976113"]
				},
				{
				"id":"7599671",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-467"],
				"linkedFeatures":["19514444"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"chebi:4705"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"18250496",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["15027179"]
				},
				{
				"id":"19514444",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["7599671"]
				},
				{
				"id":"31148378",
				"name":"dps binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["28105899"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1dps"},{"db":"intact","id":"EBI-6558261"}],
		"expansion":{"id":"17","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26037265",
				"name":"1-129",
				"type":{"id":"MI:0429","name":"necessary binding region"},
				"sequenceData":["1-129"],
				"linkedFeatures":["24976113"]
				},
				{
				"id":"7599671",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-467"],
				"linkedFeatures":["19514444"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"30114377",
				"name":"1-129",
				"type":{"id":"MI:0429","name":"necessary binding region"},
				"sequenceData":["1-129"],
				"linkedFeatures":["30847910"]
				},
				{
				"id":"15027179",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-467"],
				"linkedFeatures":["18250496"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSTAKLVKSKATNLLYTRNDVSDSEKKATVELLNRQVIQFIDLSLITKQAHWNMRGANFIAVHEMLDGFRTALIDHLDTMAERAVQLGGVALGTTQVINSKTPLKSYPLDIHNVQDHLKELADRYAIVANDVRKAIGEAKDDDTADILTAASRDLDKFLWFIESNIE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0ABT2"},
		"label":"dps_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1dps"},{"db":"intact","id":"EBI-6558261"}],
		"expansion":{"id":"17","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26037265",
				"name":"1-129",
				"type":{"id":"MI:0429","name":"necessary binding region"},
				"sequenceData":["1-129"],
				"linkedFeatures":["24976113"]
				},
				{
				"id":"7599671",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-467"],
				"linkedFeatures":["19514444"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0ABT2"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"30847910",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-167"],
				"linkedFeatures":["30114377"]
				},
				{
				"id":"24976113",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-167"],
				"linkedFeatures":["26037265"]
				},
				{
				"id":"28105899",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-167"],
				"linkedFeatures":["31148378"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSSRVLTPDVVGIDALVHDHQTVLAKAEGGVVAVFANNAPAFYAVTPARLAELLALEEKLARPGSDVALDDQLYQEPQAAPVAVPMGKFAMYPDWQPDADFIRLAALWGVALREPVTTEELASFIAYWQAEGKVFHHVQWQQKLARSLQIGRASNGGLPKRDVNTVSEPDSQIPPGFRG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A8J2"},
		"label":"dnat_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 3.6.4.12"},{"db":"intact","id":"EBI-6655050"}],
		"expansion":{"id":"18","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACB0"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11309485",
				"name":"dnac binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-471"],
				"linkedFeatures":["26220826"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0A8J2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MPVAHVALPVPLPRTFDYLLPEGMTVKAGCRVRVPFGKQQERIGIVVSVSDASELPLNELKAVVEVLDSEPVFTHSVWRLLLWAADYYHHPIGDVLFHALPILLRQGRPAANAPMWYWFATEQGQAVDLNSLKRSPKQQQALAALRQGKIWRDQVATLEFNDAALQALRKKGLCDLASETPEFSDWRTNYAVSGERLRLNTEQATAVGAIHSAADTFSAWLLAGVTGSGKTEVYLSVLENVLAQGKQALVMVPEIGLTPQTIARFRERFNAPVEVLHSGLNDSERLSAWLKAKNGEAAIVIGTRSALFTPFKNLGVIVIDEEHDSSYKQQEGWRYHARDLAVYRAHSEQIPIILGSATPALETLCNVQQKKYRLLRLTRRAGNARPAIQHVLDLKGQKVQAGLAPALITRMRQHLQADNQVILFLNRRGFAPALLCHDCGWIAECPRCDHYYTLHQAQHHLRCHHCDSQRPVPRQCPSCGSTHLVPVGLGTEQLEQTLAPLFPGVPISRIDRDTTSRKGALEQQLAEVHRGGARILIGTQMLAKGHHFPDVTLVALLDVDGALFSADFRSAERFAQLYTQVAGRAGRAGKQGEVVLQTHHPEHPLLQTLLYKGYDAFAEQALAERRMMQLPPWTSHVIVRAEDHNNQHAPLFLQQLRNLILSSPLADEKLWVLGPVPALAPKRGGRWRWQILLQHPSRVRLQHIINGTLALINTIPDSRKVKWVLDVDPIEG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P17888"},
		"label":"pria_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 3.6.4.12"},{"db":"intact","id":"EBI-6655050"}],
		"expansion":{"id":"18","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACB0"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11309485",
				"name":"dnac binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-471"],
				"linkedFeatures":["26220826"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P17888"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 3.6.4.12"},{"db":"intact","id":"EBI-6655050"}],
		"expansion":{"id":"18","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACB0"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11309485",
				"name":"dnac binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-471"],
				"linkedFeatures":["26220826"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AEF0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26220826",
				"name":"dnab binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-245"],
				"linkedFeatures":["11309485"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKTALLLEKLEGQLATLRQRCAPVSQFATLSARFDRHLFQTRATTLQACLDEAGDNLAALRHAVEQQQLPQVAWLAEHLAAQLEAIAREASAWSLREWDSAPPKIARWQRKRIQHQDFERRLREMVAERRARLARVTDLVEQQTLHREVEAYEARLARCRHALEKIENRLARLTR",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P23862"},
		"label":"pric_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 3.6.4.12"},{"db":"intact","id":"EBI-6655050"}],
		"expansion":{"id":"18","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACB0"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11309485",
				"name":"dnac binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-471"],
				"linkedFeatures":["26220826"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P23862"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 3.6.4.12"},{"db":"intact","id":"EBI-6654974"}],
		"expansion":{"id":"19","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACB0"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"23081249",
				"name":"dnac binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-471"],
				"linkedFeatures":["3772175"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AEF0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"3772175",
				"name":"dnab binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-245"],
				"linkedFeatures":["23081249"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 3.6.4.12"},{"db":"intact","id":"EBI-6654974"}],
		"expansion":{"id":"19","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACB0"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"23081249",
				"name":"dnac binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-471"],
				"linkedFeatures":["3772175"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MRLNPGQQQAVEFVTGPCLVLAGAGSGKTRVITNKIAHLIRGCGYQARHIAAVTFTNKAAREMKERVGQTLGRKEARGLMISTFHTLGLDIIKREYAALGMKANFSLFDDTDQLALLKELTEGLIEDDKVLLQQLISTISNWKNDLKTPSQAAASAIGERDRIFAHCYGLYDAHLKACNVLDFDDLILLPTLLLQRNEEVRKRWQNKIRYLLVDEYQDTNTSQYELVKLLVGSRARFTVVGDDDQSIYSWRGARPQNLVLLSQDFPALKVIKLEQNYRSSGRILKAANILIANNPHVFEKRLFSELGYGAELKVLSANNEEHEAERVTGELIAHHFVNKTQYKDYAILYRGNHQSRVFEKFLMQNRIPYKISGGTSFFSRPEIKDLLAYLRVLTNPDDDSAFLRIVNTPKREIGPATLKKLGEWAMTRNKSMFTASFDMGLSQTLSGRGYEALTRFTHWLAEIQRLAEREPIAAVRDLIHGMDYESWLYETSPSPKAAEMRMKNVNQLFSWMTEMLEGSELDEPMTLTQVVTRFTLRDMMERGESEEELDQVQLMTLHASKGLEFPYVYMVGMEEGFLPHQSSIDEDNIDEERRLAYVGITRAQKELTFTLCKERRQYGELVRPEPSRFLLELPQDDLIWEQERKVVSAEERMQKGQSHLANLKAMMAAKRGK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P09980"},
		"label":"rep_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 3.6.4.12"},{"db":"intact","id":"EBI-6655066"}],
		"expansion":{"id":"20","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P09980"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0ACB0"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"14625570",
				"name":"dnac binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-471"],
				"linkedFeatures":["25740704"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 3.6.4.12"},{"db":"intact","id":"EBI-6655066"}],
		"expansion":{"id":"20","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P09980"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P23862"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 3.6.4.12"},{"db":"intact","id":"EBI-6655066"}],
		"expansion":{"id":"20","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P09980"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AEF0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"25740704",
				"name":"dnab binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-245"],
				"linkedFeatures":["14625570"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MTNRLVLSGTVCRAPLRKVSPSGIPHCQFVLEHRSVQEEAGFHRQAWCQMPVIVSGHENQAITHSITVGSRITVQGFISCHKAKNGLSKMVLHAEQIELIDSGD",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P07013"},
		"label":"prib_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 3.6.4.12"},{"db":"intact","id":"EBI-6655020"}],
		"expansion":{"id":"21","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P17888"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P07013"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 3.6.4.12"},{"db":"intact","id":"EBI-6655020"}],
		"expansion":{"id":"21","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P17888"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0A8J2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 3.6.4.12"},{"db":"intact","id":"EBI-6655020"}],
		"expansion":{"id":"21","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P17888"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0ACB0"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"6728169",
				"name":"dnac binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-471"],
				"linkedFeatures":["1902696"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 3.6.4.12"},{"db":"intact","id":"EBI-6655020"}],
		"expansion":{"id":"21","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P17888"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AEF0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"1902696",
				"name":"dnab binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-245"],
				"linkedFeatures":["6728169"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0681","name":"double stranded deoxyribonucleic acid"},
		"organism":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
		"identifier":{"db":"intact","id":"EBI-6672067"},
		"label":"hemimeth_dna_random"
	},
	{
		"object":"interactor",
		"sequence":"MKTIEVDDELYSYIASHTKHIGESASDILRRMLKFSAASQPAAPVTKEVRVASPAIVEAKPVKTIKDKVRAMRELLLSDEYAEQKRAVNRFMLLLSTLYSLDAQAFAEATESLHGRTRVYFAADEQTLLKNGNQTKPKHVPGTPYWVITNTNTGRKCSMIEHIMQSMQFPAELIEKVCGTI",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0AFY8"},
		"label":"seqa_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1xrx"},{"db":"intact","id":"EBI-6672189"},{"db":"wwpdb","id":"1lrr"}],
		"expansion":{"id":"22","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-6672067"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AFY8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1xrx"},{"db":"intact","id":"EBI-6672189"},{"db":"wwpdb","id":"1lrr"}],
		"expansion":{"id":"22","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"intact","id":"EBI-6672067"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AFY8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MTKSELIERLATQQSHIPAKTVEDAVKEMLEHMASTLAQGERIEIRGFGSFSLHYRAPRTGRNPKTGDKVELEGKYVPHFKPGKELRDRANIYG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A6Y1"},
		"label":"ihfb_ecoli"
	},
	{
		"object":"interactor",
		"sequence":"MALTKAEMSEYLFDKLGLSKRDAKELVELFFEEIRRALENGEQVKLSGFGNFDLRDKNQRPGRNPKTGEDIPITARRVVTFRPGQKLKSRVENASPKDE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A6X7"},
		"label":"ihfa_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"2ht0"},{"db":"wwpdb","id":"1ihf"},{"db":"intact","id":"EBI-6676075"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A6Y1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"1246919",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-94"]
				},
				{
				"id":"19012316",
				"name":"ihfa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-94"],
				"linkedFeatures":["1147890"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0A6X7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"1147890",
				"name":"ihfb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-99"],
				"linkedFeatures":["19012316"]
				},
				{
				"id":"32358502",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-99"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MNKTQLIDVIAEKAELSKTQAKAALESTLAAITESLKEGDAVQLVGFGTFKVNHRAERTGRNPQTGKEIKIAAANVPAFVSGKALKDAVK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0ACF0"},
		"label":"dbha_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6691541"}],
		"expansion":{"id":"23","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACF0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32669195",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-90"],
				"linkedFeatures":["19996895"]
				},
				{
				"id":"6625610",
				"name":"dbhb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-90"],
				"linkedFeatures":["23028248"]
				},
				{
				"id":"18953506",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-90"],
				"linkedFeatures":["19360917"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"chebi:4705"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"21618984",
				"name":"dbhb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["22888216"]
				},
				{
				"id":"14252749",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["866708"]
				},
				{
				"id":"19360917",
				"name":"dbha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["18953506"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6691541"}],
		"expansion":{"id":"23","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACF0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32669195",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-90"],
				"linkedFeatures":["19996895"]
				},
				{
				"id":"6625610",
				"name":"dbhb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-90"],
				"linkedFeatures":["23028248"]
				},
				{
				"id":"18953506",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-90"],
				"linkedFeatures":["19360917"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19996895",
				"name":"dbha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-129"],
				"linkedFeatures":["32669195"]
				},
				{
				"id":"866708",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-467"],
				"linkedFeatures":["14252749"]
				},
				{
				"id":"4142864",
				"name":"dbhb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-467"],
				"linkedFeatures":["3674920"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MNKSQLIDKIAAGADISKAAAGRALDAIIASVTESLKEGDDVALVGFGTFAVKERAARTGRNPQTGKEITIAAAKVPSFRAGKALKDAVN",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0ACF4"},
		"label":"dbhb_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6691541"}],
		"expansion":{"id":"23","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACF0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32669195",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-90"],
				"linkedFeatures":["19996895"]
				},
				{
				"id":"6625610",
				"name":"dbhb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-90"],
				"linkedFeatures":["23028248"]
				},
				{
				"id":"18953506",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-90"],
				"linkedFeatures":["19360917"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0ACF4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"23028248",
				"name":"dbha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-90"],
				"linkedFeatures":["6625610"]
				},
				{
				"id":"22888216",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-90"],
				"linkedFeatures":["21618984"]
				},
				{
				"id":"3674920",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-90"],
				"linkedFeatures":["4142864"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6691075"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACF4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0ACF4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6691570"}],
		"expansion":{"id":"24","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACF0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"24232941",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-90"],
				"linkedFeatures":["32912048"]
				},
				{
				"id":"7984988",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-90"],
				"linkedFeatures":["19526113"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19526113",
				"name":"dbha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-129"],
				"linkedFeatures":["7984988"]
				},
				{
				"id":"13038222",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-467"],
				"linkedFeatures":["22957609"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6691570"}],
		"expansion":{"id":"24","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACF0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"24232941",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-90"],
				"linkedFeatures":["32912048"]
				},
				{
				"id":"7984988",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-90"],
				"linkedFeatures":["19526113"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"chebi:4705"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22957609",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["13038222"]
				},
				{
				"id":"32912048",
				"name":"dbha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["24232941"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6691045"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACF0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0ACF0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"2o97"},{"db":"intact","id":"EBI-6676762"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACF0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"6122387",
				"name":"dbhb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-90"],
				"linkedFeatures":["21081924"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0ACF4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"21081924",
				"name":"dbha binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-90"],
				"linkedFeatures":["6122387"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6819726"}],
		"expansion":{"id":"25","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22665101",
				"name":"dsdna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-467"],
				"linkedFeatures":["22449811"]
				},
				{
				"id":"27952062",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-366"],
				"linkedFeatures":["28260091"]
				},
				{
				"id":"4364960",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["4-63","164-366"],
				"linkedFeatures":["11907532"]
				},
				{
				"id":"11268473",
				"name":"diaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-108"],
				"linkedFeatures":["8021045"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"28260091",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["27952062"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6819726"}],
		"expansion":{"id":"25","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22665101",
				"name":"dsdna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-467"],
				"linkedFeatures":["22449811"]
				},
				{
				"id":"27952062",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-366"],
				"linkedFeatures":["28260091"]
				},
				{
				"id":"4364960",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["4-63","164-366"],
				"linkedFeatures":["11907532"]
				},
				{
				"id":"11268473",
				"name":"diaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-108"],
				"linkedFeatures":["8021045"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"chebi:4705"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22449811",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["22665101"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6819726"}],
		"expansion":{"id":"25","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22665101",
				"name":"dsdna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-467"],
				"linkedFeatures":["22449811"]
				},
				{
				"id":"27952062",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-366"],
				"linkedFeatures":["28260091"]
				},
				{
				"id":"4364960",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["4-63","164-366"],
				"linkedFeatures":["11907532"]
				},
				{
				"id":"11268473",
				"name":"diaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-108"],
				"linkedFeatures":["8021045"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"21552134",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["6633633"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6819726"}],
		"expansion":{"id":"25","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22665101",
				"name":"dsdna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-467"],
				"linkedFeatures":["22449811"]
				},
				{
				"id":"27952062",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-366"],
				"linkedFeatures":["28260091"]
				},
				{
				"id":"4364960",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["4-63","164-366"],
				"linkedFeatures":["11907532"]
				},
				{
				"id":"11268473",
				"name":"diaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-108"],
				"linkedFeatures":["8021045"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P66817"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"8021045",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["c-c"],
				"linkedFeatures":["11268473"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6819726"}],
		"expansion":{"id":"25","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22665101",
				"name":"dsdna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-467"],
				"linkedFeatures":["22449811"]
				},
				{
				"id":"27952062",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-366"],
				"linkedFeatures":["28260091"]
				},
				{
				"id":"4364960",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["4-63","164-366"],
				"linkedFeatures":["11907532"]
				},
				{
				"id":"11268473",
				"name":"diaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-108"],
				"linkedFeatures":["8021045"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"6633633",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-366"],
				"linkedFeatures":["21552134"]
				},
				{
				"id":"23657808",
				"name":"dsdna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-467"],
				"linkedFeatures":["30322876"]
				},
				{
				"id":"11874720",
				"name":"diaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-108"],
				"linkedFeatures":["30217018"]
				},
				{
				"id":"11907532",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["4-63","164-366"],
				"linkedFeatures":["4364960"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6819726"}],
		"expansion":{"id":"25","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22665101",
				"name":"dsdna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-467"],
				"linkedFeatures":["22449811"]
				},
				{
				"id":"27952062",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-366"],
				"linkedFeatures":["28260091"]
				},
				{
				"id":"4364960",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["4-63","164-366"],
				"linkedFeatures":["11907532"]
				},
				{
				"id":"11268473",
				"name":"diaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-108"],
				"linkedFeatures":["8021045"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P66817"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"30217018",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["c-c"],
				"linkedFeatures":["11874720"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6819726"}],
		"expansion":{"id":"25","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P03004"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22665101",
				"name":"dsdna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-467"],
				"linkedFeatures":["22449811"]
				},
				{
				"id":"27952062",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["164-366"],
				"linkedFeatures":["28260091"]
				},
				{
				"id":"4364960",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["4-63","164-366"],
				"linkedFeatures":["11907532"]
				},
				{
				"id":"11268473",
				"name":"diaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-108"],
				"linkedFeatures":["8021045"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"chebi:4705"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"30322876",
				"name":"dnaa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["23657808"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSEALKILNNIRTLRAQARECTLETLEEMLEKLEVVVNERREEESAAAAEVEERTRKLQQYREMLIADGIDPNELLNSLAAVKSGTKAKRAQRPAKYSYVDENGETKTWTGQGRTPAVIKKAMDEQGKSLDDFLIKQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0ACF8"},
		"label":"hns_ecoli"
	},
	{
		"object":"interactor",
		"sequence":"MSEKPLTKTDYLMRLRRCQTIDTLERVIEKNKYELSDNELAVFYSAADHRLAELTMNKLYDKIPSSVWKFIR",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0ACE3"},
		"label":"hha_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6923225"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACF8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11101845",
				"name":"hha binding site",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["1-47"],
				"linkedFeatures":["26083626"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0ACE3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26083626",
				"name":"hns binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-72"],
				"linkedFeatures":["11101845"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1ni8"},{"db":"intact","id":"EBI-6859852"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACF8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32407202",
				"name":"dimerisation domain",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["21-46"]
				},
				{
				"id":"12312184",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["2-46","80-96","110-117"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0ACF8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"703106",
				"name":"dimerisation domain",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["21-46"]
				},
				{
				"id":"5950361",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["2-46","80-96","110-117"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-6860189"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACF8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"15523144",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["2-46","80-96","110-117"]
				},
				{
				"id":"11773054",
				"name":"dimerisation domain",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["21-46"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0ACF8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32799415",
				"name":"dna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["2-46","80-96","110-117"]
				},
				{
				"id":"27568457",
				"name":"dimerisation domain",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["21-46"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MTVQDYLLKFRKISSLESLEKLYDHLNYTLTDDQELINMYRAADHRRAELVSGGRLFDLGQVPKSVWHYVQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P64467"},
		"label":"cnu_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-6923348"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P64467"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"23460221",
				"name":"hns binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-71"],
				"linkedFeatures":["31364570"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0ACF8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"31364570",
				"name":"cnu binding site",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["1-47"],
				"linkedFeatures":["23460221"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1l0v"},{"db":"intact","id":"EBI-6867830"},{"db":"intenz","id":"EC 1.3.5.4"}],
		"expansion":{"id":"26","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:17594"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"4211757",
				"name":"frdd binding region 1",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["20706783"]
				},
				{
				"id":"25889346",
				"name":"frdd binding region 2",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21930498"]
				},
				{
				"id":"23999494",
				"name":"frdc binding region 1",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1682954"]
				},
				{
				"id":"32588489",
				"name":"frdc binding region 2",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["5754735"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:16238"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"15960266",
				"name":"frda binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["10076610"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1l0v"},{"db":"intact","id":"EBI-6867830"},{"db":"intenz","id":"EC 1.3.5.4"}],
		"expansion":{"id":"26","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:17594"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"4211757",
				"name":"frdd binding region 1",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["20706783"]
				},
				{
				"id":"25889346",
				"name":"frdd binding region 2",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21930498"]
				},
				{
				"id":"23999494",
				"name":"frdc binding region 1",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1682954"]
				},
				{
				"id":"32588489",
				"name":"frdc binding region 2",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["5754735"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:33725"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"8370246",
				"name":"frdb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["18555885"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1l0v"},{"db":"intact","id":"EBI-6867830"},{"db":"intenz","id":"EC 1.3.5.4"}],
		"expansion":{"id":"26","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:17594"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"4211757",
				"name":"frdd binding region 1",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["20706783"]
				},
				{
				"id":"25889346",
				"name":"frdd binding region 2",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21930498"]
				},
				{
				"id":"23999494",
				"name":"frdc binding region 1",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1682954"]
				},
				{
				"id":"32588489",
				"name":"frdc binding region 2",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["5754735"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:47402"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"13872796",
				"name":"frdb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["23898661"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1l0v"},{"db":"intact","id":"EBI-6867830"},{"db":"intenz","id":"EC 1.3.5.4"}],
		"expansion":{"id":"26","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:17594"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"4211757",
				"name":"frdd binding region 1",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["20706783"]
				},
				{
				"id":"25889346",
				"name":"frdd binding region 2",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21930498"]
				},
				{
				"id":"23999494",
				"name":"frdc binding region 1",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1682954"]
				},
				{
				"id":"32588489",
				"name":"frdc binding region 2",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["5754735"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:33739"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"18246412",
				"name":"frdb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["13497568"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MQTFQADLAIVGAGGAGLRAAIAAAQANPNAKIALISKVYPMRSHTVAAEGGSAAVAQDHDSFEYHFHDTVAGGDWLCEQDVVDYFVHHCPTEMTQLELWGCPWSRRPDGSVNVRRFGGMKIERTWFAADKTGFHMLHTLFQTSLQFPQIQRFDEHFVLDILVDDGHVRGLVAMNMMEGTLVQIRANAVVMATGGAGRVYRYNTNGGIVTGDGMGMALSHGVPLRDMEFVQYHPTGLPGSGILMTEGCRGEGGILVNKNGYRYLQDYGMGPETPLGEPKNKYMELGPRDKVSQAFWHEWRKGNTISTPRGDVVYLDLRHLGEKKLHERLPFICELAKAYVGVDPVKEPIPVRPTAHYTMGGIETDQNCETRIKGLFAVGECSSVGLHGANRLGSNSLAELVVFGRLAGEQATERAATAGNGNEAAIEAQAAGVEQRLKDLVNQDGGENWAKIRDEMGLAMEEGCGIYRTPELMQKTIDKLAELQERFKRVRITDTSSVFNTDLLYTIELGHGLNVAECMAHSAMARKESRGAHQRLDEGCTERDDVNFLKHTLAFRDADGTTRLEYSDVKITTLPPAKRVYGGEADAADKAEAANKKEKANG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P00363"},
		"label":"frda_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1l0v"},{"db":"intact","id":"EBI-6867830"},{"db":"intenz","id":"EC 1.3.5.4"}],
		"expansion":{"id":"26","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:17594"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"4211757",
				"name":"frdd binding region 1",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["20706783"]
				},
				{
				"id":"25889346",
				"name":"frdd binding region 2",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21930498"]
				},
				{
				"id":"23999494",
				"name":"frdc binding region 1",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1682954"]
				},
				{
				"id":"32588489",
				"name":"frdc binding region 2",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["5754735"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P00363"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"10076610",
				"name":"fad binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-602"],
				"linkedFeatures":["15960266"]
				},
				{
				"id":"25671464",
				"name":"frdb binding site",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-602"],
				"linkedFeatures":["17413194"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAEMKNLKIEVVRYNPEVDTAPHSAFYEVPYDATTSLLDALGYIKDNLAPDLSYRWSCRMAICGSCGMMVNNVPKLACKTFLRDYTDGMKVEALANFPIERDLVVDMTHFIESLEAIKPYIIGNSRTADQGTNIQTPAQMAKYHQFSGCINCGLCYAACPQFGLNPEFIGPAAITLAHRYNEDSRDHGKKERMAQLNSQNGVWSCTFVGYCSEVCPKHVDPAAAIQQGKVESSKDFLIATLKPR",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0AC47"},
		"label":"frdb_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1l0v"},{"db":"intact","id":"EBI-6867830"},{"db":"intenz","id":"EC 1.3.5.4"}],
		"expansion":{"id":"26","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:17594"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"4211757",
				"name":"frdd binding region 1",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["20706783"]
				},
				{
				"id":"25889346",
				"name":"frdd binding region 2",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21930498"]
				},
				{
				"id":"23999494",
				"name":"frdc binding region 1",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1682954"]
				},
				{
				"id":"32588489",
				"name":"frdc binding region 2",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["5754735"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AC47"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17413194",
				"name":"frda binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-244"],
				"linkedFeatures":["25671464"]
				},
				{
				"id":"1806819",
				"name":"frdc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-244"],
				"linkedFeatures":["460693"]
				},
				{
				"id":"25352358",
				"name":"frdd binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-244"],
				"linkedFeatures":["22919587"]
				},
				{
				"id":"13497568",
				"name":"2fe-2s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-244"],
				"linkedFeatures":["18246412"]
				},
				{
				"id":"23898661",
				"name":"3fe-4s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-244"],
				"linkedFeatures":["13872796"]
				},
				{
				"id":"18555885",
				"name":"4fe-4s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-244"],
				"linkedFeatures":["8370246"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MINPNPKRSDEPVFWGLFGAGGMWSAIIAPVMILLVGILLPLGLFPGDALSYERVLAFAQSFIGRVFLFLMIVLPLWCGLHRMHHAMHDLKIHVPAGKWVFYGLAAILTVVTLIGVVTI",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A8Q3"},
		"label":"frdd_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1l0v"},{"db":"intact","id":"EBI-6867830"},{"db":"intenz","id":"EC 1.3.5.4"}],
		"expansion":{"id":"26","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:17594"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"4211757",
				"name":"frdd binding region 1",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["20706783"]
				},
				{
				"id":"25889346",
				"name":"frdd binding region 2",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21930498"]
				},
				{
				"id":"23999494",
				"name":"frdc binding region 1",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1682954"]
				},
				{
				"id":"32588489",
				"name":"frdc binding region 2",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["5754735"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0A8Q3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"4629244",
				"name":"frdc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-119"],
				"linkedFeatures":["24546062"]
				},
				{
				"id":"22919587",
				"name":"frdb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-119"],
				"linkedFeatures":["25352358"]
				},
				{
				"id":"20706783",
				"name":"quinol binding region 1",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-119"],
				"linkedFeatures":["4211757"]
				},
				{
				"id":"21930498",
				"name":"quinol binding region 2",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-119"],
				"linkedFeatures":["25889346"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MTTKRKPYVRPMTSTWWKKLPFYRFYMLREGTAVPAVWFSIELIFGLFALKNGPEAWAGFVDFLQNPVIVIINLITLAAALLHTKTWFELAPKAANIIVKDEKMGPEPIIKSLWAVTVVATIVILFVALYW",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A8Q0"},
		"label":"frdc_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1l0v"},{"db":"intact","id":"EBI-6867830"},{"db":"intenz","id":"EC 1.3.5.4"}],
		"expansion":{"id":"26","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:17594"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"4211757",
				"name":"frdd binding region 1",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["20706783"]
				},
				{
				"id":"25889346",
				"name":"frdd binding region 2",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21930498"]
				},
				{
				"id":"23999494",
				"name":"frdc binding region 1",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1682954"]
				},
				{
				"id":"32588489",
				"name":"frdc binding region 2",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["5754735"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0A8Q0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"460693",
				"name":"frdb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-131"],
				"linkedFeatures":["1806819"]
				},
				{
				"id":"1682954",
				"name":"quinol binding region 1",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-131"],
				"linkedFeatures":["23999494"]
				},
				{
				"id":"24546062",
				"name":"frdd binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-131"],
				"linkedFeatures":["4629244"]
				},
				{
				"id":"5754735",
				"name":"quinol binding region 2",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-131"],
				"linkedFeatures":["32588489"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDVSRRQFFKICAGGMAGTTVAALGFAPKQALAQARNYKLLRAKEIRNTCTYCSVGCGLLMYSLGDGAKNAREAIYHIEGDPDHPVSRGALCPKGAGLLDYVNSENRLRYPEYRAPGSDKWQRISWEEAFSRIAKLMKADRDANFIEKNEQGVTVNRWLSTGMLCASGASNETGMLTQKFARSLGMLAVDNQARVUHGPTVASLAPTFGRGAMTNHWVDIKNANVVMVMGGNAAEAHPVGFRWAMEAKNNNDATLIVVDPRFTRTASVADIYAPIRSGTDITFLSGVLRYLIENNKINAEYVKHYTNASLLVRDDFAFEDGLFSGYDAEKRQYDKSSWNYQLDENGYAKRDETLTHPRCVWNLLKEHVSRYTPDVVENICGTPKADFLKVCEVLASTSAPDRTTTFLYALGWTQHTVGAQNIRTMAMIQLLLGNMGMAGGGVNALRGHSNIQGLTDLGLLSTSLPGYLTLPSEKQVDLQSYLEANTPKATLADQVNYWSNYPKFFVSLMKSFYGDAAQKENNWGYDWLPKWDQTYDVIKYFNMMDEGKVTGYFCQGFNPVASFPDKNKVVSCLSKLKYMVVIDPLVTETSTFWQNHGESNDVDPASIQTEVFRLPSTCFAEEDGSIANSGRWLQWHWKGQDAPGEARNDGEILAGIYHHLRELYQSEGGKGVEPLMKMSWNYKQPHEPQSDEVAKENNGYALEDLYDANGVLIAKKGQLLSSFAHLRDDGTTASSCWIYTGSWTEQGNQMANRDNSDPSGLGNTLGWAWAWPLNRRVLYNRASADINGKPWDPKRMLIQWNGSKWTGNDIPDFGNAAPGTPTGPFIMQPEGMGRLFAINKMAEGPFPEHYEPIETPLGTNPLHPNVVSNPVVRLYEQDALRMGKKEQFPYVGTTYRLTEHFHTWTKHALLNAIAQPEQFVEISETLAAAKGINNGDRVTVSSKRGFIRAVAVVTRRLKPLNVNGQQVETVGIPIHWGFEGVARKGYIANTLTPNVGDANSQTPEYKAFLVNIEKA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P24183"},
		"label":"fdng_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1kqg"},{"db":"intact","id":"EBI-6894347"},{"db":"intenz","id":"EC 1.1.5.6"},{"db":"wwpdb","id":"1kqf"}],
		"expansion":{"id":"27","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P24183"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27480106",
				"name":"fdnh binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["14953102"]
				},
				{
				"id":"27646546",
				"name":"4fe-4s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["27287337"]
				},
				{
				"id":"29865472",
				"name":"mo-bismgd binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["8240900"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:33725"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27287337",
				"name":"fdng binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["27646546"]
				},
				{
				"id":"25668389",
				"name":"fdnh binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["32839483"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSKSKMIVRTKFIDRACHWTVVICFFLVALSGISFFFPTLQWLTQTFGTPQMGRILHPFFGIAIFVALMFMFVRFVHHNIPDKKDIPWLLNIVEVLKGNEHKVADVGKYNAGQKMMFWSIMSMIFVLLVTGVIIWRPYFAQYFPMQVVRYSLLIHAAAGIILIHAILIHMYMAFWVKGSIKGMIEGKVSRRWAKKHHPRWYREIEKAEAKKESEEGI",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0AEK7"},
		"label":"fdni_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1kqg"},{"db":"intact","id":"EBI-6894347"},{"db":"intenz","id":"EC 1.1.5.6"},{"db":"wwpdb","id":"1kqf"}],
		"expansion":{"id":"27","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P24183"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27480106",
				"name":"fdnh binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["14953102"]
				},
				{
				"id":"27646546",
				"name":"4fe-4s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["27287337"]
				},
				{
				"id":"29865472",
				"name":"mo-bismgd binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["8240900"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AEK7"},
			"bioRole":{"id":"MI:0684","name":"ancillary"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"29896653",
				"name":"heme binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-217"],
				"linkedFeatures":["28987689"]
				},
				{
				"id":"19293667",
				"name":"fdnh binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-217"],
				"linkedFeatures":["32201023"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1kqg"},{"db":"intact","id":"EBI-6894347"},{"db":"intenz","id":"EC 1.1.5.6"},{"db":"wwpdb","id":"1kqf"}],
		"expansion":{"id":"27","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P24183"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27480106",
				"name":"fdnh binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["14953102"]
				},
				{
				"id":"27646546",
				"name":"4fe-4s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["27287337"]
				},
				{
				"id":"29865472",
				"name":"mo-bismgd binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["8240900"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:30413"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"28987689",
				"name":"fdni binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["29896653"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1kqg"},{"db":"intact","id":"EBI-6894347"},{"db":"intenz","id":"EC 1.1.5.6"},{"db":"wwpdb","id":"1kqf"}],
		"expansion":{"id":"27","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P24183"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27480106",
				"name":"fdnh binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["14953102"]
				},
				{
				"id":"27646546",
				"name":"4fe-4s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["27287337"]
				},
				{
				"id":"29865472",
				"name":"mo-bismgd binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["8240900"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:61145"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"8240900",
				"name":"fdng binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["29865472"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1kqg"},{"db":"intact","id":"EBI-6894347"},{"db":"intenz","id":"EC 1.1.5.6"},{"db":"wwpdb","id":"1kqf"}],
		"expansion":{"id":"27","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P24183"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27480106",
				"name":"fdnh binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["14953102"]
				},
				{
				"id":"27646546",
				"name":"4fe-4s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["27287337"]
				},
				{
				"id":"29865472",
				"name":"mo-bismgd binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["8240900"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:36141"},
			"bioRole":{"id":"MI:0580","name":"electron acceptor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"3162711",
				"name":"fdnh binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["5465352"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAMETQDIIKRSATNSITPPSQVRDYKAEVAKLIDVSTCIGCKACQVACSEWNDIRDEVGHCVGVYDNPADLSAKSWTVMRFSETEQNGKLEWLIRKDGCMHCEDPGCLKACPSAGAIIQYANGIVDFQSENCIGCGYCIAGCPFNIPRLNKEDNRVYKCTLCVDRVSVGQEPACVKTCPTGAIHFGTKKEMLELAEQRVAKLKARGYEHAGVYNPEGVGGTHVMYVLHHADQPELYHGLPKDPKIDTSVSLWKGALKPLAAAGFIATFAGLIFHYIGIGPNKEVDDDEEDHHE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0AAJ3"},
		"label":"fdnh_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1kqg"},{"db":"intact","id":"EBI-6894347"},{"db":"intenz","id":"EC 1.1.5.6"},{"db":"wwpdb","id":"1kqf"}],
		"expansion":{"id":"27","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P24183"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27480106",
				"name":"fdnh binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["14953102"]
				},
				{
				"id":"27646546",
				"name":"4fe-4s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["27287337"]
				},
				{
				"id":"29865472",
				"name":"mo-bismgd binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["8240900"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AAJ3"},
			"bioRole":{"id":"MI:0684","name":"ancillary"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"14953102",
				"name":"fdng binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-294"],
				"linkedFeatures":["27480106"]
				},
				{
				"id":"32201023",
				"name":"fdni binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-294"],
				"linkedFeatures":["19293667"]
				},
				{
				"id":"17690985",
				"name":"hydron binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-294"],
				"linkedFeatures":["6569384"]
				},
				{
				"id":"5465352",
				"name":"quinone binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-294"],
				"linkedFeatures":["3162711"]
				},
				{
				"id":"32839483",
				"name":"4fe-4s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-294"],
				"linkedFeatures":["25668389"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:15378"},
		"label":"hydron"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1kqg"},{"db":"intact","id":"EBI-6894347"},{"db":"intenz","id":"EC 1.1.5.6"},{"db":"wwpdb","id":"1kqf"}],
		"expansion":{"id":"27","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P24183"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27480106",
				"name":"fdnh binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["14953102"]
				},
				{
				"id":"27646546",
				"name":"4fe-4s binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["27287337"]
				},
				{
				"id":"29865472",
				"name":"mo-bismgd binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1015"],
				"linkedFeatures":["8240900"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15378"},
			"bioRole":{"id":"MI:0580","name":"electron acceptor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"6569384",
				"name":"fdnh binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["17690985"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDQTYSLESFLNHVQKRDPNQTEFAQAVREVMTTLWPFLEQNPKYRQMSLLERLVEPERVIQFRVVWVDDRNQIQVNRAWRVQFSSAIGPYKGGMRFHPSVNLSILKFLGFEQTFKNALTTLPMGGGKGGSDFDPKGKSEGEVMRFCQALMTELYRHLGADTDVPAGDIGVGGREVGFMAGMMKKLSNNTACVFTGKGLSFGGSLIRPEATGYGLVYFTEAMLKRHGMGFEGMRVSVSGSGNVAQYAIEKAMEFGARVITASDSSGTVVDESGFTKEKLARLIEIKASRDGRVADYAKEFGLVYLEGQQPWSLPVDIALPCATQNELDVDAAHQLIANGVKAVAEGANMPTTIEATELFQQAGVLFAPGKAANAGGVATSGLEMAQNAARLGWKAEKVDARLHHIMLDIHHACVEHGGEGEQTNYVQGANIAGFVKVADAMLAQGVI",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P00370"},
		"label":"dhe4_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 1.4.1.4"},{"db":"intact","id":"EBI-6902099"},{"db":"wwpdb","id":"4bht"}],
		"expansion":{"id":"28","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P00370"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17556972",
				"name":"nadp+ binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["2361149"]
				},
				{
				"id":"22493950",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["31595580"]
				},
				{
				"id":"28029270",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["17282866"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P00370"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"25975847",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["32900674"]
				},
				{
				"id":"17282866",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["28029270"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 1.4.1.4"},{"db":"intact","id":"EBI-6902099"},{"db":"wwpdb","id":"4bht"}],
		"expansion":{"id":"28","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P00370"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17556972",
				"name":"nadp+ binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["2361149"]
				},
				{
				"id":"22493950",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["31595580"]
				},
				{
				"id":"28029270",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["17282866"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P00370"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32900674",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["25975847"]
				},
				{
				"id":"18158216",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["7581090"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 1.4.1.4"},{"db":"intact","id":"EBI-6902099"},{"db":"wwpdb","id":"4bht"}],
		"expansion":{"id":"28","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P00370"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17556972",
				"name":"nadp+ binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["2361149"]
				},
				{
				"id":"22493950",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["31595580"]
				},
				{
				"id":"28029270",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["17282866"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P00370"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"9212152",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["8494740"]
				},
				{
				"id":"7581090",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["18158216"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 1.4.1.4"},{"db":"intact","id":"EBI-6902099"},{"db":"wwpdb","id":"4bht"}],
		"expansion":{"id":"28","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P00370"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17556972",
				"name":"nadp+ binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["2361149"]
				},
				{
				"id":"22493950",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["31595580"]
				},
				{
				"id":"28029270",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["17282866"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P00370"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"8494740",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["9212152"]
				},
				{
				"id":"30546245",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["7937707"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 1.4.1.4"},{"db":"intact","id":"EBI-6902099"},{"db":"wwpdb","id":"4bht"}],
		"expansion":{"id":"28","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P00370"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17556972",
				"name":"nadp+ binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["2361149"]
				},
				{
				"id":"22493950",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["31595580"]
				},
				{
				"id":"28029270",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["17282866"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P00370"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"31595580",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["22493950"]
				},
				{
				"id":"7937707",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["30546245"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 1.4.1.4"},{"db":"intact","id":"EBI-6902099"},{"db":"wwpdb","id":"4bht"}],
		"expansion":{"id":"28","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P00370"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17556972",
				"name":"nadp+ binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["2361149"]
				},
				{
				"id":"22493950",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["31595580"]
				},
				{
				"id":"28029270",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-447"],
				"linkedFeatures":["17282866"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:18009"},
			"bioRole":{"id":"MI:0919","name":"acceptor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"2361149",
				"name":"dhe4 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["17556972"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSIVMQLQDVAESTRLGPLSGEVRAGEILHLVGPNGAGKSTLLARMAGMTSGKGSIQFAGQPLEAWSATKLALHRAYLSQQQTPPFATPVWHYLTLHQHDKTRTELLNDVAGALALDDKLGRSTNQLSGGEWQRVRLAAVVLQITPQANPAGQLLLLDEPMNSLDVAQQSALDKILSALCQQGLAIVMSSHDLNHTLRHAHRAWLLKGGKMLASGRREEVLTPPNLAQAYGMNFRRLDIEGHRMLISTI",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P06611"},
		"label":"btud_ecoli"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:30411"},
		"label":"cobalamin"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"3.6.3.33"},{"db":"wwpdb","id":"4fi3"},{"db":"wwpdb","id":"2qi9"},{"db":"intact","id":"EBI-8758197"}],
		"expansion":{"id":"29","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P06611"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"30176511",
				"name":"btud dimerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"]
				},
				{
				"id":"1397477",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"],
				"linkedFeatures":["32857435"]
				},
				{
				"id":"29637321",
				"name":"cobalamin binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"],
				"linkedFeatures":["32476700"]
				},
				{
				"id":"5960738",
				"name":"btuc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"],
				"linkedFeatures":["22159061"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:30411"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"6703935",
				"name":"btuc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["30808161"]
				},
				{
				"id":"14326703",
				"name":"btuf binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["2294714"]
				},
				{
				"id":"32476700",
				"name":"btud binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["29637321"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"3.6.3.33"},{"db":"wwpdb","id":"4fi3"},{"db":"wwpdb","id":"2qi9"},{"db":"intact","id":"EBI-8758197"}],
		"expansion":{"id":"29","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P06611"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"30176511",
				"name":"btud dimerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"]
				},
				{
				"id":"1397477",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"],
				"linkedFeatures":["32857435"]
				},
				{
				"id":"29637321",
				"name":"cobalamin binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"],
				"linkedFeatures":["32476700"]
				},
				{
				"id":"5960738",
				"name":"btuc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"],
				"linkedFeatures":["22159061"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32857435",
				"name":"btud binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1397477"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLTLARQQQRQNIRWLLCLSVLMLLALLLSLCAGEQWISPGDWFTPRGELFVWQIRLPRTLAVLLVGAALAISGAVMQALFENPLAEPGLLGVSNGAGVGLIAAVLLGQGQLPNWALGLCAIAGALIITLILLRFARRHLSTSRLLLAGVALGIICSALMTWAIYFSTSVDLRQLMYWMMGGFGGVDWRQSWLMLALIPVLLWICCQSRPMNMLALGEISARQLGLPLWFWRNVLVAATGWMVGVSVALAGAIGFIGLVIPHILRLCGLTDHRVLLPGCALAGASALLLADIVARLALAAAELPIGVVTATLGAPVFIWLLLKAGR",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P06609"},
		"label":"btuc_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"3.6.3.33"},{"db":"wwpdb","id":"4fi3"},{"db":"wwpdb","id":"2qi9"},{"db":"intact","id":"EBI-8758197"}],
		"expansion":{"id":"29","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P06611"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"30176511",
				"name":"btud dimerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"]
				},
				{
				"id":"1397477",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"],
				"linkedFeatures":["32857435"]
				},
				{
				"id":"29637321",
				"name":"cobalamin binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"],
				"linkedFeatures":["32476700"]
				},
				{
				"id":"5960738",
				"name":"btuc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"],
				"linkedFeatures":["22159061"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P06609"},
			"bioRole":{"id":"MI:0684","name":"ancillary"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"30808161",
				"name":"cobalamin binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-326"],
				"linkedFeatures":["6703935"]
				},
				{
				"id":"13218736",
				"name":"btuc dimerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-326"]
				},
				{
				"id":"22159061",
				"name":"btud binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-326"],
				"linkedFeatures":["5960738"]
				},
				{
				"id":"3412813",
				"name":"btuf binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-326"],
				"linkedFeatures":["14624617"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAKSLFRALVALSFLAPLWLNAAPRVITLSPANTELAFAAGITPVGVSSYSDYPPQAQKIEQVSTWQGMNLERIVALKPDLVIAWRGGNAERQVDQLASLGIKVMWVDATSIEQIANALRQLAPWSPQPDKAEQAAQSLLDQYAQLKAQYADKPKKRVFLQFGINPPFTSGKESIQNQVLEVCGGENIFKDSRVPWPQVSREQVLARSPQAIVITGGPDQIPKIKQYWGEQLKIPVIPLTSDWFERASPRIILAAQQLCNALSQVD",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P37028"},
		"label":"btuf_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"3.6.3.33"},{"db":"wwpdb","id":"4fi3"},{"db":"wwpdb","id":"2qi9"},{"db":"intact","id":"EBI-8758197"}],
		"expansion":{"id":"29","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P06611"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"30176511",
				"name":"btud dimerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"]
				},
				{
				"id":"1397477",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"],
				"linkedFeatures":["32857435"]
				},
				{
				"id":"29637321",
				"name":"cobalamin binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"],
				"linkedFeatures":["32476700"]
				},
				{
				"id":"5960738",
				"name":"btuc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"],
				"linkedFeatures":["22159061"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P37028"},
			"bioRole":{"id":"MI:0684","name":"ancillary"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"14624617",
				"name":"btuc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-266"],
				"linkedFeatures":["3412813"]
				},
				{
				"id":"2294714",
				"name":"cobalamin binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-266"],
				"linkedFeatures":["14326703"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1l7v"},{"db":"intact","id":"EBI-8760580"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P06611"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"7336452",
				"name":"btud dimerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"]
				},
				{
				"id":"24770117",
				"name":"btuc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-249"],
				"linkedFeatures":["1531656"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P06609"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"1531656",
				"name":"btud binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-326"],
				"linkedFeatures":["24770117"]
				},
				{
				"id":"6305140",
				"name":"btuc dimerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-326"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKIKTILTPVTCALLISFSAHAANADNYKNVINRTGAPQYMKDYDYDDHQRFNPFFDLGAWHGHLLPDGPNTMGGFPGVALLTEEYINFMASNFDRLTVWQDGKKVDFTLEAYSIPGALVQKLTAKDVQVEMTLRFATPRTSLLETKITSNKPLDLVWDGELLEKLEAKEGKPLSDKTIAGEYPDYQRKISATRDGLKVTFGKVRATWDLLTSGESEYQVHKSLPVQTEINGNRFTSKAHINGSTTLYTTYSHLLTAQEVSKEQMQIRDILARPAFYLTASQQRWEEYLKKGLTNPDATPEQTRVAVKAIETLNGNWRSPGGAVKFNTVTPSVTGRWFSGNQTWPWDTWKQAFAMAHFNPDIAKENIRAVFSWQIQPGDSVRPQDVGFVPDLIAWNLSPERGGDGGNWNERNTKPSLAAWSVMEVYNVTQDKTWVAEMYPKLVAYHDWWLRNRDHNGNGVPEYGATRDKAHNTESGEMLFTVKKGDKEETQSGLNNYARVVEKGQYDSLEIPAQVAASWESGRDDAAVFGFIDKEQLDKYVANGGKRSDWTVKFAENRSQDGTLLGYSLLQESVDQASYMYSDNHYLAEMATILGKPEEAKRYRQLAQQLADYINTCMFDPTTQFYYDVRIEDKPLANGCAGKPIVERGKGPEGWSPLFNGAATQANADAVVKVMLDPKEFNTFVPLGTAALTNPAFGADIYWRGRVWVDQFWFGLKGMERYGYRDDALKLADTFFRHAKGLTADGPIQENYNPLTGAQQGAPNFSWSAAHLYMLYNDFFRKQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P42592"},
		"label":"ygjk_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 3.2.1.-"},{"db":"intact","id":"EBI-9206905"},{"db":"wwpdb","id":"3w7s"},{"db":"wwpdb","id":"3W7X"},{"db":"wwpdb","id":"3w7u"},{"db":"wwpdb","id":"3W7W"},{"db":"wwpdb","id":"3w7t"},{"db":"wwpdb","id":"3d3i"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P42592"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"5592035",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P42592"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32938707",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:25805"},
		"label":"oxygen atom"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:49637"},
		"label":"hydrogen atom"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 1.10.3.10"},{"db":"wwpdb","id":"1fft"},{"db":"intact","id":"EBI-8697969"}],
		"expansion":{"id":"30","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:25805"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19845164",
				"name":"heme o binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["6629765"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:49637"},
			"bioRole":{"name":"proton donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"25762186",
				"name":"heme o binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["32224995"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MFGKLSLDAVPFHEPIVMVTIAGIILGGLALVGLITYFGKWTYLWKEWLTSVDHKRLGIMYIIVAIVMLLRGFADAIMMRSQQALASAGEAGFLPPHHYDQIFTAHGVIMIFFVAMPFVIGLMNLVVPLQIGARDVAFPFLNNLSFWFTVVGVILVNVSLGVGEFAQTGWLAYPPLSGIEYSPGVGVDYWIWSLQLSGIGTTLTGINFFVTILKMRAPGMTMFKMPVFTWASLCANVLIIASFPILTVTVALLTLDRYLGTHFFTNDMGGNMMMYINLIWAWGHPEVYILILPVFGVFSEIAATFSRKRLFGYTSLVWATVCITVLSFIVWLHHFFTMGAGANVNAFFGITTMIIAIPTGVKIFNWLFTMYQGRIVFHSAMLWTIGFIVTFSVGGMTGVLLAVPGADFVLHNSLFLIAHFHNVIIGGVVFGCFAGMTYWWPKAFGFKLNETWGKRAFWFWIIGFFVAFMPLYALGFMGMTRRLSQQIDPQFHTMLMIAASGAVLIALGILCLVIQMYVSIRDRDQNRDLTGDPWGGRTLEWATSSPPPFYNFAVVPHVHERDAFWEMKEKGEAYKKPDHYEEIHMPKNSGAGIVIAAFSTIFGFAMIWHIWWLAIVGFAGMIITWIVKSFDEDVDYYVPVAEIEKLENQHFDEITKAGLKNGN",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0ABI8"},
		"label":"cyob_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 1.10.3.10"},{"db":"wwpdb","id":"1fft"},{"db":"intact","id":"EBI-8697969"}],
		"expansion":{"id":"30","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:25805"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19845164",
				"name":"heme o binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["6629765"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0ABI8"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"3411658",
				"name":"cyoa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-663"],
				"linkedFeatures":["28770641"]
				},
				{
				"id":"28799179",
				"name":"cyoc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-663"],
				"linkedFeatures":["5136622"]
				},
				{
				"id":"29220020",
				"name":"cyod binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-663"],
				"linkedFeatures":["31775078"]
				},
				{
				"id":"24955379",
				"name":"heme b binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-663"],
				"linkedFeatures":["28210005"]
				},
				{
				"id":"1438761",
				"name":"copper binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-663"],
				"linkedFeatures":["22080066"]
				},
				{
				"id":"21222491",
				"name":"heme o binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-663"],
				"linkedFeatures":["2797394"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSHSTDHSGASHGSVKTYMTGFILSIILTVIPFWMVMTGAASPAVILGTILAMAVVQVLVHLVCFLHMNTKSDEGWNMTAFVFTVLIIAILVVGSIWIMWNLNYNMMMH",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0ABJ6"},
		"label":"cyod_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 1.10.3.10"},{"db":"wwpdb","id":"1fft"},{"db":"intact","id":"EBI-8697969"}],
		"expansion":{"id":"30","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:25805"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19845164",
				"name":"heme o binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["6629765"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0ABJ6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"31775078",
				"name":"cyob binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-109"],
				"linkedFeatures":["29220020"]
				},
				{
				"id":"6048575",
				"name":"cyoc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-109"],
				"linkedFeatures":["22037886"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:17976"},
		"label":"ubiquinol"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 1.10.3.10"},{"db":"wwpdb","id":"1fft"},{"db":"intact","id":"EBI-8697969"}],
		"expansion":{"id":"30","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:25805"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19845164",
				"name":"heme o binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["6629765"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:17976"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MRLRKYNKSLGWLSLFAGTVLLSGCNSALLDPKGQIGLEQRSLILTAFGLMLIVVIPAILMAVGFAWKYRASNKDAKYSPNWSHSNKVEAVVWTVPILIIIFLAVLTWKTTHALEPSKPLAHDEKPITIEVVSMDWKWFFIYPEQGIATVNEIAFPANTPVYFKVTSNSVMNSFFIPRLGSQIYAMAGMQTRLHLIANEPGTYDGISASYSGPGFSGMKFKAIATPDRAAFDQWVAKAKQSPNTMSDMAAFEKLAAPSEYNQVEYFSNVKPDLFADVINKFMAHGKSMDMTQPEGEHSAHEGMEGMDMSHAESAH",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0ABJ1"},
		"label":"cyoa_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 1.10.3.10"},{"db":"wwpdb","id":"1fft"},{"db":"intact","id":"EBI-8697969"}],
		"expansion":{"id":"30","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:25805"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19845164",
				"name":"heme o binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["6629765"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0ABJ1"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"28770641",
				"name":"cyob binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-315"],
				"linkedFeatures":["3411658"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MATDTLTHATAHAHEHGHHDAGGTKIFGFWIYLMSDCILFSILFATYAVLVNGTAGGPTGKDIFELPFVLVETFLLLFSSITYGMAAIAMYKNNKSQVISWLALTWLFGAGFIGMEIYEFHHLIVNGMGPDRSGFLSAFFALVGTHGLHVTSGLIWMAVLMVQIARRGLTSTNRTRIMCLSLFWHFLDVVWICVFTVVYLMGAM",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0ABJ3"},
		"label":"cyoc_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 1.10.3.10"},{"db":"wwpdb","id":"1fft"},{"db":"intact","id":"EBI-8697969"}],
		"expansion":{"id":"30","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:25805"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19845164",
				"name":"heme o binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["6629765"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0ABJ3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"5136622",
				"name":"cyob binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-204"],
				"linkedFeatures":["28799179"]
				},
				{
				"id":"22037886",
				"name":"cyod binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-204"],
				"linkedFeatures":["6048575"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:24480"},
		"label":"heme o"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 1.10.3.10"},{"db":"wwpdb","id":"1fft"},{"db":"intact","id":"EBI-8697969"}],
		"expansion":{"id":"30","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:25805"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19845164",
				"name":"heme o binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["6629765"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:24480"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"2797394",
				"name":"cyob binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21222491"]
				},
				{
				"id":"32224995",
				"name":"hydrogen binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["25762186"]
				},
				{
				"id":"6629765",
				"name":"oxygen binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["19845164"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:28694"},
		"label":"copper atom"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 1.10.3.10"},{"db":"wwpdb","id":"1fft"},{"db":"intact","id":"EBI-8697969"}],
		"expansion":{"id":"30","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:25805"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19845164",
				"name":"heme o binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["6629765"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:28694"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22080066",
				"name":"cyob binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1438761"]
				}]
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
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 1.10.3.10"},{"db":"wwpdb","id":"1fft"},{"db":"intact","id":"EBI-8697969"}],
		"expansion":{"id":"30","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:25805"},
			"bioRole":{"id":"MI:0579","name":"electron donor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19845164",
				"name":"heme o binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["6629765"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:26355"},
			"bioRole":{"name":"electron donor and electron acceptor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"28210005",
				"name":"cyob binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["24955379"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MTTIVSVRRNGHVVIAGDGQATLGNTVMKGNVKKVRRLYNDKVIAGFAGGTADAFTLFELFERKLEMHQGHLVKAAVELAKDWRTDRMLRKLEALLAVADETASLIITGNGDVVQPENDLIAIGSGGPYAQAAARALLENTELSAREIAEKALDIAGDICIYTNHFHTIEELSYKA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A7B8"},
		"label":"hslv_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1hqy"},{"db":"wwpdb","id":"1ht1"},{"db":"wwpdb","id":"1e94"},{"db":"wwpdb","id":"1g4b"},{"db":"intenz","id":"3.4.25.2"},{"db":"wwpdb","id":"1ht2"},{"db":"intact","id":"EBI-8755316"},{"db":"wwpdb","id":"1g3i"},{"db":"wwpdb","id":"1g4a"}],
		"expansion":{"id":"31","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A7B8"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"16946040",
				"name":"duodecamerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-176"]
				},
				{
				"id":"2079798",
				"name":"hslu binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-176"],
				"linkedFeatures":["25007592"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"33353108",
				"name":"hslu binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["5352778"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSEMTPREIVSELDKHIIGQDNAKRSVAIALRNRWRRMQLNEELRHEVTPKNILMIGPTGVGKTEIARRLAKLANAPFIKVEATKFTEVGYVGKEVDSIIRDLTDAAVKMVRVQAIEKNRYRAEELAEERILDVLIPPAKNNWGQTEQQQEPSAARQAFRKKLREGQLDDKEIEIDLAAAPMGVEIMAPPGMEEMTSQLQSMFQNLGGQKQKARKLKIKDAMKLLIEEEAAKLVNPEELKQDAIDAVEQHGIVFIDEIDKICKRGESSGPDVSREGVQRDLLPLVEGCTVSTKHGMVKTDHILFIASGAFQIAKPSDLIPELQGRLPIRVELQALTTSDFERILTEPNASITVQYKALMATEGVNIEFTDSGIKRIAEAAWQVNESTENIGARRLHTVLERLMEEISYDASDLSGQNITIDADYVSKHLDALVADEDLSRFIL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A6H5"},
		"label":"hslu_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1hqy"},{"db":"wwpdb","id":"1ht1"},{"db":"wwpdb","id":"1e94"},{"db":"wwpdb","id":"1g4b"},{"db":"intenz","id":"3.4.25.2"},{"db":"wwpdb","id":"1ht2"},{"db":"intact","id":"EBI-8755316"},{"db":"wwpdb","id":"1g3i"},{"db":"wwpdb","id":"1g4a"}],
		"expansion":{"id":"31","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A7B8"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"16946040",
				"name":"duodecamerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-176"]
				},
				{
				"id":"2079798",
				"name":"hslu binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-176"],
				"linkedFeatures":["25007592"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0A6H5"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"25007592",
				"name":"hslv binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["c-c"],
				"linkedFeatures":["2079798"]
				},
				{
				"id":"4709271",
				"name":"hslu hexamerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-443"]
				},
				{
				"id":"5352778",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-443"],
				"linkedFeatures":["33353108"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAAKDVKFGNDARVKMLRGVNVLADAVKVTLGPKGRNVVLDKSFGAPTITKDGVSVAREIELEDKFENMGAQMVKEVASKANDAAGDGTTTATVLAQAIITEGLKAVAAGMNPMDLKRGIDKAVTAAVEELKALSVPCSDSKAIAQVGTISANSDETVGKLIAEAMDKVGKEGVITVEDGTGLQDELDVVEGMQFDRGYLSPYFINKPETGAVELESPFILLADKKISNIREMLPVLEAVAKAGKPLLIIAEDVEGEALATLVVNTMRGIVKVAAVKAPGFGDRRKAMLQDIATLTGGTVISEEIGMELEKATLEDLGQAKRVVINKDTTTIIDGVGEEAAIQGRVAQIRQQIEEATSDYDREKLQERVAKLAGGVAVIKVGAATEVEMKEKKARVEDALHATRAAVEEGVVAGGGVALIRVASKLADLRGQNEDQNVGIKVALRAMEAPLRQIVLNCGEEPSVVANTVKGGDGNYGYNAATEEYGNMIDMGILDPTKVTRSALQYAASVAGLMITTECMVTDLPKNDAADLGAAGGMGGMGGMGGMM",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A6F5"},
		"label":"ch60_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"emdb","id":"2325"},{"db":"intact","id":"EBI-8769099"},{"db":"wwpdb","id":"1SVT"},{"db":"wwpdb","id":"1PCQ"}],
		"expansion":{"id":"32","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A6F5"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MNIRPLHDRVIVKRKEVETKSAGGIVLTGSAAAKSTRGEVLAVGNGRILENGEVKPLDVKVGDIVIFNDGYGVKSEKIDNEEVLIMSESDILAIVEA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A6F9"},
		"label":"ch10_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"emdb","id":"2325"},{"db":"intact","id":"EBI-8769099"},{"db":"wwpdb","id":"1SVT"},{"db":"wwpdb","id":"1PCQ"}],
		"expansion":{"id":"32","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A6F5"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0A6F9"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MIKLSNITKVFHQGTRTIQALNNVSLHVPAGQIYGVIGASGAGKSTLIRCVNLLERPTEGSVLVDGQELTTLSESELTKARRQIGMIFQHFNLLSSRTVFGNVALPLELDNTPKDEVKRRVTELLSLVGLGDKHDSYPSNLSGGQKQRVAIARALASNPKVLLCDEATSALDPATTRSILELLKDINRRLGLTILLITHEMDVVKRICDCVAVISNGELIEQDTVSEVFSHPKTPLAQKFIQSTLHLDIPEDYQERLQAEPFTDCVPMLRLEFTGQSVDAPLLSETARRFNVNNNIISAQMDYAGGVKFGIMLTEMHGTQQDTQAAIAWLQEHHVKVEVLGYV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P30750"},
		"label":"metn_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 3.6.3"},{"db":"intact","id":"EBI-8771827"},{"db":"wwpdb","id":"3tuj"},{"db":"wwpdb","id":"3tuz"},{"db":"wwpdb","id":"3tui"}],
		"expansion":{"id":"33","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P30750"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27376269",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-343"]
				},
				{
				"id":"14584601",
				"name":"meti binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-343"],
				"linkedFeatures":["8279380"]
				},
				{
				"id":"1315472",
				"name":"methionine binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-343"]
				},
				{
				"id":"30338202",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-343"],
				"linkedFeatures":["1023871"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"1023871",
				"name":"metn binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["30338202"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSEPMMWLLVRGVWETLAMTFVSGFFGFVIGLPVGVLLYVTRPGQIIANAKLYRTVSAIVNIFRSIPFIILLVWMIPFTRVIVGTSIGLQAAIVPLTVGAAPFIARMVENALLEIPTGLIEASRAMGATPMQIVRKVLLPEALPGLVNAATITLITLVGYSAMGGAVGAGGLGQIGYQYGYIGYNATVMNTVLVLLVILVYLIQFAGDRIVRAVTRK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P31547"},
		"label":"meti_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 3.6.3"},{"db":"intact","id":"EBI-8771827"},{"db":"wwpdb","id":"3tuj"},{"db":"wwpdb","id":"3tuz"},{"db":"wwpdb","id":"3tui"}],
		"expansion":{"id":"33","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P30750"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27376269",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-343"]
				},
				{
				"id":"14584601",
				"name":"meti binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-343"],
				"linkedFeatures":["8279380"]
				},
				{
				"id":"1315472",
				"name":"methionine binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-343"]
				},
				{
				"id":"30338202",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-343"],
				"linkedFeatures":["1023871"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P31547"},
			"bioRole":{"id":"MI:0684","name":"ancillary"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"28341487",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-217"]
				},
				{
				"id":"30226535",
				"name":"methionine binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-217"]
				},
				{
				"id":"8279380",
				"name":"metn binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-217"],
				"linkedFeatures":["14584601"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:36264"},
		"label":"molybdate"
	},
	{
		"object":"interactor",
		"sequence":"MQAEILLTLKLQQKLFADPRRISLLKHIALSGSISQGAKDAGISYKSAWDAINEMNQLSEHILVERATGGKGGGGAVLTRYGQRLIQLYDLLAQIQQKAFDVLSDDDALPLNSLLAAISRFSLQTSARNQWFGTITARDHDDVQQHVDVLLADGKTRLKVAITAQSGARLGLDEGKEVLILLKAPWVGITQDEAVAQNADNQLPGIISHIERGAEQCEVLMALPDGQTLCATVPVNEATSLQQGQNVTAYFNADSVIIATLC",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A9G8"},
		"label":"mode_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1b9m"},{"db":"wwpdb","id":"1h9r"},{"db":"intact","id":"EBI-8774452"},{"db":"wwpdb","id":"1o7l"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:36264"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0A9G8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MHNDKDLSTWQTFRRLWPTIAPFKAGLIVAGVALILNAASDTFMLSLLKPLLDDGFGKTDRSVLVWMPLVVIGLMILRGITSYVSSYCISWVSGKVVMTMRRRLFGHMMGMPVSFFDKQSTGTLLSRITYDSEQVASSSSGALITVVREGASIIGLFIMMFYYSWQLSIILIVLAPIVSIAIRVVSKRFRNISKNMQNTMGQVTTSAEQMLKGHKEVLIFGGQEVETKRFDKVSNRMRLQGMKMVSASSISDPIIQLIASLALAFVLYAASFPSVMDSLTAGTITVVFSSMIALMRPLKSLTNVNAQFQRGMAACQTLFTILDSEQEKDEGKRVIERATGDVEFRNVTFTYPGRDVPALRNINLKIPAGKTVALVGRSGSGKSTIASLITRFYDIDEGEILMDGHDLREYTLASLRNQVALVSQNVHLFNDTVANNIAYARTEQYSREQIEEAARMAYAMDFINKMDNGLDTVIGENGVLLSGGQRQRIAIARALLRDSPILILDEATSALDTESERAIQAALDELQKNRTSLVIAHRLSTIEKADEIVVVEDGVIVERGTHNDLLEHRGVYAQLHKMQFGQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P60752"},
		"label":"msba_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"3b5w"},{"db":"intact","id":"EBI-8784378"},{"db":"intenz","id":"EC 3.6.3"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P60752"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"3276652",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MRVITLAGSPRFPSRSSSLLEYAREKLNGLDVEVYHWNLQNFAPEDLLYARFDSPALKTFTEQLQQADGLIVATPVYKAAYSGALKTLLDLLPERALQGKVVLPLATGGTVAHLLAVDYALKPVLSALKAQEILHGVFADDSQVIDYHHRPQFTPNLQTRLDTALETFWQALHRRDVQVPDLLSLRGNAHA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P80644"},
		"label":"ssue_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 1.5.1.38"},{"db":"intact","id":"EBI-8786881"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P80644"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"7881983",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P80644"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"33158106",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSLNMFWFLPTHGDGHYLGTEEGSRPVDHGYLQQIAQAADRLGYTGVLIPTGRSCEDAWLVAASMIPVTQRLKFLVALRPSVTSPTVAARQAATLDRLSNGRALFNLVTGSDPQELAGDGVFLDHSERYEASAEFTQVWRRLLQRETVDFNGKHIHVRGAKLLFPAIQQPYPPLYFGGSSDVAQELAAEQVDLYLTWGEPPELVKEKIEQVRAKAAAHGRKIRFGIRLHVIVRETNDEAWQAAERLISHLDDETIAKAQAAFARTDSVGQQRMAALHNGKRDNLEISPNLWAGVGLVRGGAGTALVGDGPTVAARINEYAALGIDSFVLSGYPHLEEAYRVGELLFPLLDVAIPEIPQPQPLNPQGEAVANDFIPRKVAQS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P80645"},
		"label":"ssud_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"1m41"},{"db":"intact","id":"EBI-8786862"},{"db":"intenz","id":"EC 1.14.14.5"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P80645"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"16290074",
				"name":"tetramerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P80645"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"16666834",
				"name":"tetramerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:29033"},
		"label":"iron2plus"
	},
	{
		"object":"interactor",
		"sequence":"MSERLSITPLGPYIGAQISGADLTRPLSDNQFEQLYHAVLRHQVVFLRDQAITPQQQRALAQRFGELHIHPVYPHAEGVDEIIVLDTHNDNPPDNDNWHTDVTFIETPPAGAILAAKELPSTGGDTLWTSGIAAYEALSVPFRQLLSGLRAEHDFRKSFPEYKYRKTEEEHQRWREAVAKNPPLLHPVVRTHPVSGKQALFVNEGFTTRIVDVSEKESEALLSFLFAHITKPEFQVRWRWQPNDIAIWDNRVTQHYANADYLPQRRIMHRATILGDKPFYRAG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P37610"},
		"label":"taud_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 1.14.11.17"},{"db":"wwpdb","id":"1os7"},{"db":"wwpdb","id":"1otj"},{"db":"intact","id":"EBI-8789156"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:29033"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"},
			"bindingSites":[
				{
				"id":"7081095",
				"name":"taud binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["27948636"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P37610"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"4235841",
				"name":"tetramerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-283"]
				},
				{
				"id":"27948636",
				"name":"fe2+ binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-283"],
				"linkedFeatures":["7081095"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MNPYIYLGGAILAEVIGTTLMKFSEGFTRLWPSVGTIICYCASFWLLAQTLAYIPTGIAYAIWSGVGIVLISLLSWGFFGQRLDLPAIIGMMLICAGVLIINLLSRSTPH",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P23895"},
		"label":"emre_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"3b5d"},{"db":"intact","id":"EBI-8789430"},{"db":"emdb","id":"EMD-1087"},{"db":"wwpdb","id":"3b62"},{"db":"wwpdb","id":"3b61"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P23895"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P23895"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:17877"},
		"label":"fadh2"
	},
	{
		"object":"interactor",
		"sequence":"MSRNTEATDDVKTWTGGPLNYKEGFFTQLATDELAKGINEEVVRAISAKRNEPEWMLEFRLNAYRAWLEMEEPHWLKAHYDKLNYQDYSYYSAPSCGNCDDTCASEPGAVQQTGANAFLSKEVEAAFEQLGVPVREGKEVAVDAIFDSVSVATTYREKLAEQGIIFCSFGEAIHDHPELVRKYLGTVVPGNDNFFAALNAAVASDGTFIYVPKGVRCPMELSTYFRINAEKTGQFERTILVADEDSYVSYIEGCSAPVRDSYQLHAAVVEVIIHKNAEVKYSTVQNWFPGDNNTGGILNFVTKRALCEGENSKMSWTQSETGSAITWKYPSCILRGDNSIGEFYSVALTSGHQQADTGTKMIHIGKNTKSTIISKGISAGHSQNSYRGLVKIMPTATNARNFTQCDSMLIGANCGAHTFPYVECRNNSAQLEHEATTSRIGEDQLFYCLQRGISEEDAISMIVNGFCKDVFSELPLEFAVEAQKLLAISLEHSVG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P77522"},
		"label":"sufb_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-8792805"}],
		"expansion":{"id":"34","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:17877"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"}
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P77522"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"22844154",
				"name":"sufc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["11889977"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLSIKDLHVSVEDKAILRGLSLDVHPGEVHAIMGPNGSGKSTLSATLAGREDYEVTGGTVEFKGKDLLALSPEDRAGEGIFMAFQYPVEIPGVSNQFFLQTALNAVRSYRGQETLDRFDFQDLMEEKIALLKMPEDLLTRSVNVGFSGGEKKRNDILQMAVLEPELCILDESDSGLDIDALKVVADGVNSLRDGKRSFIIVTHYQRILDYIKPDYVHVLYQGRIVKSGDFTLVKQLEEQGYGWLTEQQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P77499"},
		"label":"sufc_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-8792805"}],
		"expansion":{"id":"34","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:17877"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"}
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P77499"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"18203335",
				"name":"sufd binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["27703872"]
				},
				{
				"id":"11889977",
				"name":"sufb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["22844154"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAGLPNSSNALQQWHHLFEAEGTKRSPQAQQHLQQLLRTGLPTRKHENWKYTPLEGLINSQFVSIAGEISPQQRDALALTLDSVRLVFVDGRYVPALSDATEGSGYEVSINDDRQGLPDAIQAEVFLHLTESLAQSVTHIAVKRGQRPAKPLLLMHITQGVAGEEVNTAHYRHHLDLAEGAEATVIEHFVSLNDARHFTGARFTINVAANAHLQHIKLAFENPLSHHFAHNDLLLAEDATAFSHSFLLGGAVLRHNTSTQLNGENSTLRINSLAMPVKNEVCDTRTWLEHNKGFCNSRQLHKTIVSDKGRAVFNGLINVAQHAIKTDGQMTNNNLLMGKLAEVDTKPQLEIYADDVKCSHGATVGRIDDEQIFYLRSRGINQQDAQQMIIYAFAAELTEALRDEGLKQQVLARIGQRLPGGAR",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P77689"},
		"label":"sufd_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-8792805"}],
		"expansion":{"id":"34","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:17877"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"-2","common":"chemical synthesis","scientific":"Chemical synthesis (Chemical synthesis)"}
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P77689"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"27703872",
				"name":"sufc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["18203335"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MIFSVDKVRADFPVLSREVNGLPLAYLDSAASAQKPSQVIDAEAEFYRHGYAAVHRGIHTLSAQATEKMENVRKRASLFINARSAEELVFVRGTTEGINLVANSWGNSNVRAGDNIIISQMEHHANIVPWQMLCARVGAELRVIPLNPDGTLQLETLPTLFDEKTRLLAITHVSNVLGTENPLAEMITLAHQHGAKVLVDGAQAVMHHPVDVQALDCDFYVFSGHKLYGPTGIGILYVKEALLQEMPPWEGGGSMIATVSLSEGTTWTKAPWRFEAGTPNTGGIIGLGAALEYVSALGLNNIAEYEQNLMHYALSQLESVPDLTLYGPQNRLGVIAFNLGKHHAYDVGSFLDNYGIAVRTGHHCAMPLMAYYNVPAMCRASLAMYNTHEEVDRLVTGLQRIHRLLG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P77444"},
		"label":"sufs_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 4.4.1.16"},{"db":"intenz","id":"EC 2.8.1.7"},{"db":"intact","id":"EBI-8793636"},{"db":"wwpdb","id":"1jf9"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P77444"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17681377",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P77444"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"12862251",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MALLPDKEKLLRNFLRCANWEEKYLYIIELGQRLPELRDEDRSPQNSIQGCQSQVWIVMRQNAQGIIELQGDSDAAIVKGLIAVVFILYDQMTPQDIVNFDVRPWFEKMALTQHLTPSRSQGLEAMIRAIRAKAAALS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P76194"},
		"label":"sufe_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1mzg"},{"db":"intact","id":"EBI-8794010"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P76194"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"18209854",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P76194"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"3051239",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAIKLEIKNLYKIFGEHPQRAFKYIEQGLSKEQILEKTGLSLGVKDASLAIEEGEIFVIMGLSGSGKSTMVRLLNRLIEPTRGQVLIDGVDIAKISDAELREVRRKKIAMVFQSFALMPHMTVLDNTAFGMELAGINAEERREKALDALRQVGLENYAHSYPDELSGGMRQRVGLARALAINPDILLMDEAFSALDPLIRTEMQDELVKLQAKHQRTIVFISHDLDEAMRIGDRIAIMQNGEVVQVGTPDEILNNPANDYVRTFFRGVDISQVFSAKDIARRTPNGLIRKTPGFGPRSALKLLQDEDREYGYVIERGNKFVGAVSIDSLKTALTQQQGLDAALIDAPLAVDAQTPLSELLSHVGQAPCAVPVVDEDQQYVGIISKGMLLRALDREGVNNG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P14175"},
		"label":"prov_ecoli"
	},
	{
		"object":"interactor",
		"sequence":"MRHSVLFATAFATLISTQTFAADLPGKGITVNPVQSTITEETFQTLLVSRALEKLGYTVNKPSEVDYNVGYTSLASGDATFTAVNWTPLHDNMYEAAGGDKKFYREGVFVNGAAQGYLIDKKTADQYKITNIAQLKDPKIAKLFDTNGDGKADLTGCNPGWGCEGAINHQLAAYELTNTVTHNQGNYAAMMADTISRYKEGKPVFYYTWTPYWVSNELKPGKDVVWLQVPFSALPGDKNADTKLPNGANYGFPVSTMHIVANKAWAEKNPAAAKLFAIMQLPVADINAQNAIMHDGKASEGDIQGHVDGWIKAHQQQFDGWVNEALAAQK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0AFM2"},
		"label":"prox_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-8795483"}],
		"expansion":{"id":"35","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P14175"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AFM2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MADQNNPWDTTPAADSAAQSADAWGTPTTAPTDGGGADWLTSTPAPNVEHFNILDPFHKTLIPLDSWVTEGIDWVVTHFRPVFQGVRVPVDYILNGFQQLLLGMPAPVAIIVFALIAWQISGVGMGVATLVSLIAIGAIGAWSQAMVTLALVLTALLFCIVIGLPLGIWLARSPRAAKIIRPLLDAMQTTPAFVYLVPIVMLFGIGNVPGVVVTIIFALPPIIRLTILGINQVPADLIEASRSFGASPRQMLFKVQLPLAMPTIMAGVNQTLMLALSMVVIASMIAVGGLGQMVLRGIGRLDMGLATVGGVGIVILAIILDRLTQAVGRDSRSRGNRRWYTTGPVGLLTRPFIK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P14176"},
		"label":"prow_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-8795483"}],
		"expansion":{"id":"35","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P14175"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P14176"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDMHSGTFNPQDFAWQGLTLTPAAAIHIRELVAKQPGMVGVRLGVKQTGCAGFGYVLDSVSEPDKDDLLFEHDGAKLFVPLQAMPFIDGTEVDFVREGLNQIFKFHNPKAQNECGCGESFGV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P77667"},
		"label":"sufa_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"2d2a"},{"db":"intact","id":"EBI-8871521"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P77667"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"11015981",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P77667"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"25804539",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSITLSDSAAARVNTFLANRGKGFGLRLGVRTSGCSGMAYVLEFVDEPTPEDIVFEDKGVKVVVDGKSLQFLDGTQLDFVKEGLNEGFKFTNPNVKDECGCGESFHV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0AAC8"},
		"label":"isca_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1s98"},{"db":"intact","id":"EBI-8849999"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0AAC8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"5864867",
				"name":"tetramerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AAC8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"21455556",
				"name":"tetramerization region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MPSAHSVKLRPLEREDLRYVHQLDNNASVMRYWFEEPYEAFVELSDLYDKHIHDQSERRFVVECDGEKAGLVELVEINHVHRRAEFQIIISPEYQGKGLATRAAKLAMDYGFTVLNLYKLYLIVDKENEKAIHIYRKLGFSVEGELMHEFFINGQYRNAIRMCIFQHQYLAEHKTPGQTLLKPTAQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A951"},
		"label":"atda_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 2.3.1.57"},{"db":"intact","id":"EBI-8850049"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A951"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"27620132",
				"name":"tetramerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0A951"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"19551441",
				"name":"tetramerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MQILFNDQAMQCAAGQTVHELLEQLDQRQAGAALAINQQIVPREQWAQHIVQDGDQILLFQVIAGG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"O32583"},
		"label":"this_ecoli"
	},
	{
		"object":"interactor",
		"sequence":"MNDRDFMRYSRQILLDDIALDGQQKLLDSQVLIIGLGGLGTPAALYLAGAGVGTLVLADDDDVHLSNLQRQILFTTEDIDRPKSQVSQQRLTQLNPDIQLTALQQRLTGEALKDAVARADVVLDCTDNMATRQEINAACVALNTPLITASAVGFGGQLMVLTPPWEQGCYRCLWPDNQEPERNCRTAGVVGPVVGVMGTLQALEAIKLLSGIETPAGELRLFDGKSSQWRSLALRRASGCPVCGGSNADPV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P30138"},
		"label":"thif_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 2.7.7.73"},{"db":"intact","id":"EBI-8850353"},{"db":"wwpdb","id":"1zud"},{"db":"intenz","id":"EC 5.3.4.1"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"O32583"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"2528806",
				"name":"thif binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21742579"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P30138"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"19767245",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				},
				{
				"id":"21742579",
				"name":"this binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["2528806"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLRIADKTFDSHLFTGTGKFASSQLMVEAIRASGSQLVTLAMKRVDLRQHNDAILEPLIAAGVTLLPNTSGAKTAEEAIFAAHLAREALGTNWLKLEIHPDARWLLPDPIETLKAAETLVQQGFVVLPYCGADPVLCKRLEEVGCAAVMPLGAPIGSNQGLETRAMLEIIIQQATVPVVVDAGIGVPSHAAQALEMGADAVLVNTAIAVADDPVNMAKAFRLAVEAGLLARQSGPGSRSYFAHATSPLTGFLEASA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P30139"},
		"label":"thig_ecoli"
	},
	{
		"object":"interactor",
		"sequence":"MKTFSDRWRQLDWDDIRLRINGKTAADVERALNASQLTRDDMMALLSPAASGYLEQLAQRAQRLTRQRFGNTVSFYVPLYLSNLCANDCTYCGFSMSNRIKRKTLDEADIARESAAIREMGFEHLLLVTGEHQAKVGMDYFRRHLPALREQFSSLQMEVQPLAETEYAELKQLGLDGVMVYQETYHEATYARHHLKGKKQDFFWRLETPDRLGRAGIDKIGLGALIGLSDNWRVDSYMVAEHLLWLQQHYWQSRYSVSFPRLRPCTGGIEPASIMDERQLVQTICAFRLLAPEIELSLSTRESPWFRDRVIPLAINNVSAFSKTQPGGYADNHPELEQFSPHDDRRPEAVAAALTAQGLQPVWKDWDSYLGRASQRL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P30140"},
		"label":"thih_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 2.8.1.10"},{"db":"intact","id":"EBI-8851217"},{"db":"intenz","id":"EC 4.1.99.19"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P30139"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"5668768",
				"name":"thih binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["13954261"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P30140"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"13954261",
				"name":"thig binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["5668768"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKLPIYLDYSATTPVDPRVAEKMMQFMTMDGTFGNPASRSHRFGWQAEEAVDIARNQIADLVGADPREIVFTSGATESDNLAIKGAANFYQKKGKHIITSKTEHKAVLDTCRQLEREGFEVTYLAPQRNGIIDLKELEAAMRDDTILVSIMHVNNEIGVVQDIAAIGEMCRARGIIYHVDATQSVGKLPIDLSQLKVDLMSFSGHKIYGPKGIGALYVRRKPRVRIEAQMHGGGHERGMRSGTLPVHQIVGMGEAYRIAKEEMATEMERLRGLRNRLWNGIKDIEEVYLNGDLEHGAPNILNVSFNYVEGESLIMALKDLAVSSGSACTSASLEPSYVLRALGLNDELAHSSIRFSLGRFTTEEEIDYTIELVRKSIGRLRDLSPLWEMYKQGVDLNSIEWAHH",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A6B7"},
		"label":"iscs_ecoli"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:597326"},
		"label":"pyridoxal 5'-phosphate(2-)"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1p3w"},{"db":"intact","id":"EBI-8851928"},{"db":"intenz","id":"EC 2.8.1.7"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A6B7"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"17340538",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				},
				{
				"id":"22191148",
				"name":"pyridoxal-5-phosphate binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["9124484"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:597326"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"9124484",
				"name":"iscs binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["22191148"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MNVFNPAQFRAQFPALQDAGVYLDSAATALKPEAVVEATQQFYSLSAGNVHRSQFAEAQRLTARYEAAREKVAQLLNAPDDKTIVWTRGTTESINMVAQCYARPRLQPGDEIIVSVAEHHANLVPWLMVAQQTGAKVVKLPLNAQRLPDVDLLPELITPRSRILALGQMSNVTGGCPDLARAITFAHSAGMVVMVDGAQGAVHFPADVQQLDIDFYAFSGHKLYGPTGIGVLYGKSELLEAMSPWLGGGKMVHEVSFDGFTTQSAPWKLEAGTPNVAGVIGLSAALEWLADYDINQAESWSRSLATLAEDALAKRPGFRSFRCQDSSLLAFDFAGVHHSDMVTLLAEYGIALRAGQHCAQPLLAELGVTGTLRASFAPYNTKSDVDALVNAVDRALELLVD",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"Q46925"},
		"label":"csda_ecoli"
	},
	{
		"object":"interactor",
		"sequence":"MTNPQFAGHPFGTTVTAETLRNTFAPLTQWEDKYRQLIMLGKQLPALPDELKAQAKEIAGCENRVWLGYTVAENGKMHFFGDSEGRIVRGLLAVLLTAVEGKTAAELQAQSPLALFDELGLRAQLSASRSQGLNALSEAIIAATKQV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0AGF2"},
		"label":"csde_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"4lw4"},{"db":"intact","id":"EBI-8852646"},{"db":"intenz","id":"EC 2.8.1.7"}],
		"expansion":{"id":"36","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q46925"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11456560",
				"name":"csde binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["15078183"]
				},
				{
				"id":"15955274",
				"name":"plp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["26826494"]
				},
				{
				"id":"1987861",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AGF2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"15078183",
				"name":"csda binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["11456560"]
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
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"4lw4"},{"db":"intact","id":"EBI-8852646"},{"db":"intenz","id":"EC 2.8.1.7"}],
		"expansion":{"id":"36","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q46925"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11456560",
				"name":"csde binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["15078183"]
				},
				{
				"id":"15955274",
				"name":"plp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["26826494"]
				},
				{
				"id":"1987861",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:18405"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26826494",
				"name":"csda binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["15955274"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 4.4.1.16"},{"db":"intenz","id":"EC 2.8.1.7"},{"db":"wwpdb","id":"4lw2"},{"db":"intact","id":"EBI-8852607"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:18405"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"23326042",
				"name":"csda binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["24368474"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q46925"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"29108289",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				},
				{
				"id":"24368474",
				"name":"plp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["23326042"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MACGEFSLIARYFDRVRSSRLDVELGIGDDCALLNIPEKQTLAISTDTLVAGNHFLPDIDPADLAYKALAVNLSDLAAMGADPAWLTLALTLPDVDEAWLESFSDSLFDLLNYYDMQLIGGDTTRGPLSMTLGIHGFVPMGRALTRSGAKPGDWIYVTGTPGDSAAGLAILQNRLQVADAKDADYLIKRHLRPSPRILQGQALRDLANSAIDLSDGLISDLGHIVKASDCGARIDLALLPFSDALSRHVEPEQALRWALSGGEDYELCFTVPELNRGALDVALGHLGVPFTCIGQMTADIEGLCFIRDGEPVTLDWKGYDHFATP",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0AGG0"},
		"label":"thil_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 2.8.1.7"},{"db":"intenz","id":"EC 2.7.4.16"},{"db":"intact","id":"EBI-8870047"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0AGG0"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32959301",
				"name":"iscs binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["30424728"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0A6B7"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"30424728",
				"name":"thil binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["32959301"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAYSEKVIDHYENPRNVGSFDNNDENVGSGMVGAPACGDVMKLQIKVNDEGIIEDARFKTYGCGSAIASSSLVTEWVKGKSLDEAQAIKNTDIAEELELPPVKIHCSILAEDAIKAAIADYKSKREAK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0ACD4"},
		"label":"iscu_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 2.8.1.7"},{"db":"wwpdb","id":"3lvl"},{"db":"intact","id":"EBI-8870238"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0ACD4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"12416324",
				"name":"iscs binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["6151259"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0A6B7"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"6151259",
				"name":"iscu binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["12416324"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MTDLFSSPDHTLDALGLRCPEPVMMVRKTVRNMQPGETLLIIADDPATTRDIPGFCTFMEHELVAKETDGLPYRYLIRKGG",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A890"},
		"label":"tusa_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"EC 2.8.1.7"},{"db":"wwpdb","id":"3lvj"},{"db":"wwpdb","id":"3lvk"},{"db":"intact","id":"EBI-8869931"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A890"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"ptms":[
				{
				"id":"3018462",
				"name":"iscs binding region",
				"type":{"id":"MOD:00274","name":"L-cysteine persulfide"},
				"sequenceData":["19-19"],
				"linkedFeatures":["30547782"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0A6B7"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"ptms":[
				{
				"id":"30547782",
				"name":"tusa binding region",
				"type":{"id":"MOD:00274","name":"L-cysteine persulfide"},
				"sequenceData":["328-328"],
				"linkedFeatures":["3018462"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLHTLHRSPWLTDFAALLRLLSEGDELLLLQDGVTAAVDGNRYLESLRNAPIKVYALNEDLIARGLTGQISNDIILIDYTDFVRLTVKHPSQMAW",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P45530"},
		"label":"tusb_ecoli"
	},
	{
		"object":"interactor",
		"sequence":"MKRIAFVFSTAPHGTAAGREGLDALLATSALTDDLAVFFIADGVFQLLPGQKPDAVLARDYIATFKLLGLYDIEQCWVCAASLRERGLDPQTPFVVEATPLEADALRRELANYDVILRF",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P45531"},
		"label":"tusc_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"2d1p"},{"db":"intenz","id":"EC 2.8.1.7"},{"db":"intact","id":"EBI-8872193"}],
		"expansion":{"id":"37","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P45530"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P45531"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLIFEGKEIETDTEGYLKESSQWSEPLAVVIAENEGISLSPEHWEVVRFVRDFYLEFNTSPAIRMLVKAMANKFGEEKGNSRYLYRLFPKGPAKQATKIAGLPKPVKCI",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0AB18"},
		"label":"tuse_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"2d1p"},{"db":"intenz","id":"EC 2.8.1.7"},{"db":"intact","id":"EBI-8872193"}],
		"expansion":{"id":"37","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P45530"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AB18"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MRFAIVVTGPAYGTQQASSAFQFAQALIADGHELSSVFFYREGVYNANQLTSPASDEFDLVRAWQQLNAQHGVALNICVAAALRRGVVDETEAGRLGLASSNLQQGFTLSGLGALAEASLTCDRVVQF",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P45532"},
		"label":"tusd_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"wwpdb","id":"2d1p"},{"db":"intenz","id":"EC 2.8.1.7"},{"db":"intact","id":"EBI-8872193"}],
		"expansion":{"id":"37","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P45530"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P45532"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSETAKKVIVGMSGGVDSSVSAWLLQQQGYQVEGLFMKNWEEDDGEEYCTAAADLADAQAVCDKLGIELHTVNFAAEYWDNVFELFLAEYKAGRTPNPDILCNKEIKFKAFLEFAAEDLGADYIATGHYVRRADVDGKSRLLRGLDSNKDQSYFLYTLSHEQIAQSLFPVGELEKPQVRKIAEDLGLVTAKKKDSTGICFIGERKFREFLGRYLPAQPGKIITVDGDEIGEHQGLMYHTLGQRKGLGIGGTKEGTEEPWYVVDKDVENNILVVAQGHEHPRLMSVGLIAQQLHWVDREPFTGTMRCTVKTRYRQTDIPCTVKALDDDRIEVIFDEPVAAVTPGQSAVFYNGEVCLGGGIIEQRLPLPV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P25745"},
		"label":"mnma_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 2.8.1.7"},{"db":"intact","id":"EBI-8872270"}],
		"expansion":{"id":"38","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0AB18"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"210644",
				"name":"mnma binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["17087803"]
				}],
			"ptms":[
				{
				"id":"2331383",
				"name":"persulfide binding site",
				"type":{"id":"MOD:00274","name":"L-cysteine persulfide"},
				"sequenceData":["108-108"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P25745"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17087803",
				"name":"tuse binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["210644"]
				},
				{
				"id":"25536682",
				"name":"trna binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["278275"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0325","name":"transfer rna"},
		"organism":{"taxid":"559292","common":"yeast","scientific":"Saccharomyces cerevisiae (strain ATCC 204508 \/ S288c)"},
		"identifier":{"db":"chebi","id":"CHEBI:17843"},
		"label":"trna"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 2.8.1.7"},{"db":"intact","id":"EBI-8872270"}],
		"expansion":{"id":"38","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0AB18"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"210644",
				"name":"mnma binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["17087803"]
				}],
			"ptms":[
				{
				"id":"2331383",
				"name":"persulfide binding site",
				"type":{"id":"MOD:00274","name":"L-cysteine persulfide"},
				"sequenceData":["108-108"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:17843"},
			"bioRole":{"id":"MI:0502","name":"enzyme target"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"278275",
				"name":"mnma binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["25536682"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MGTTKHSKLLILGSGPAGYTAAVYAARANLQPVLITGMEKGGQLTTTTEVENWPGDPNDLTGPLLMERMHEHATKFETEIIFDHINKVDLQNRPFRLNGDNGEYTCDALIIATGASARYLGLPSEEAFKGRGVSACATCDGFFYRNQKVAVIGGGNTAVEEALYLSNIASEVHLIHRRDGFRAEKILIKRLMDKVENGNIILHTNRTLEEVTGDQMGVTGVRLRDTQNSDNIESLDVAGLFVAIGHSPNTAIFEGQLELENGYIKVQSGIHGNATQTSIPGVFAAGDVMDHIYRQAITSAGTGCMAALDAERYLDGLADAK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A9P4"},
		"label":"trxb_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1tdf"},{"db":"wwpdb","id":"1f6m"},{"db":"intact","id":"EBI-8874189"},{"db":"intenz","id":"EC 1.8.1.9"}],
		"expansion":{"id":"39","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A9P4"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"12915009",
				"name":"nadp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				},
				{
				"id":"32500955",
				"name":"fad binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:16238"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"10953199",
				"name":"trxb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:25523"},
		"label":"nadp"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"1tdf"},{"db":"wwpdb","id":"1f6m"},{"db":"intact","id":"EBI-8874189"},{"db":"intenz","id":"EC 1.8.1.9"}],
		"expansion":{"id":"39","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A9P4"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"12915009",
				"name":"nadp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				},
				{
				"id":"32500955",
				"name":"fad binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:25523"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"10804878",
				"name":"trxb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAGLKLQAVTKSWDGKTQVIKPLTLDVADGEFIVMVGPSGCGKSTLLRMVAGLERVTEGDIWINDQRVTEMEPKDRGIAMVFQNYALYPHMSVEENMAWGLKIRGMGKQQIAERVKEAARILELDGLLKRRPRELSGGQRQRVAMGRAIVRDPAVFLFDEPLSNLDAKLRVQMRLELQQLHRRLKTTSLYVTHDQVEAMTLAQRVMVMNGGVAEQIGTPVEVYEKPASLFVASFIGSPAMNLLTGRVNNEGTHFELDGGIELPLNGGYRQYAGRKMTLGIRPEHIALSSQAEGGVPMVMDTLEILGADNLAHGRWGEQKLVVRLAHQERPTAGSTLWLHLAENQLHLFDGETGQRV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P10907"},
		"label":"ugpc_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC  3.6.3.20"},{"db":"intact","id":"EBI-8875874"}],
		"expansion":{"id":"40","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P10907"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"999171",
				"name":"ugpa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["15864135"]
				},
				{
				"id":"5005124",
				"name":"ugpe binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["160184"]
				},
				{
				"id":"7858717",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["11213641"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11213641",
				"name":"ugpc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["7858717"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKPLHYTASALALGLALMGNAQAVTTIPFWHSMEGELGKEVDSLAQRFNAENPDYKIVPTYKGNYEQNLSAGIAAFRTGNAPAILQVYEVGTATMMASKAIKPVYDVFKEAGIQFDESQFVPTVSGYYSDSKTGHLLSQPFNSSTPVLYYNKDAFKKAGLDPEQPPKTWQDLADYAAKLKASGMKCGYASGWQGWIQLENFSAWNGLPFASKNNGFDGTDAVLEFNKPEQVKHIAMLEEMNKKGDFSYVGRKDESTEKFYNGDCAMTTASSGSLANIREYAKFNYGVGMMPYDADAKDAPQNAIIGGASLWVMQGKDKETYTGVAKFLDFLAKPENAAEWHQKTGYLPITKAAYDLTREQGFYEKNPGADTATRQMLNKPPLPFTKGLRLGNMPQIRVIVDEELESVWTGKKTPQQALDTAVERGNQLLRRFEKSTKS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0AG80"},
		"label":"ugpb_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC  3.6.3.20"},{"db":"intact","id":"EBI-8875874"}],
		"expansion":{"id":"40","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P10907"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"999171",
				"name":"ugpa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["15864135"]
				},
				{
				"id":"5005124",
				"name":"ugpe binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["160184"]
				},
				{
				"id":"7858717",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["11213641"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AG80"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"25983454",
				"name":"ugpa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["26534846"]
				},
				{
				"id":"32762214",
				"name":"ugpe binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["6316803"]
				},
				{
				"id":"287585",
				"name":"g3p binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1618383"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MIENRPWLTIFSHTMLILGIAVILFPLYVAFVAATLDKQAVYAAPMTLIPGTHLLENIHNIWVNGVGTNSAPFWRMLLNSFVMAFSITLGKITVSMLSAFAIVWFRFPLRNLFFWMIFITLMLPVEVRIFPTVEVIANLQMLDSYAGLTLPLMASATATFLFRQFFMTLPDELVEAARIDGASPMRFFCDIVFPLSKTNLAALFVITFIYGWNQYLWPLLIITDVDLGTTVAGIKGMIATGEGTTEWNSVMVAMLLTLIPPVVIVLVMQRAFVRGLVDSEK",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P10906"},
		"label":"ugpe_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC  3.6.3.20"},{"db":"intact","id":"EBI-8875874"}],
		"expansion":{"id":"40","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P10907"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"999171",
				"name":"ugpa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["15864135"]
				},
				{
				"id":"5005124",
				"name":"ugpe binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["160184"]
				},
				{
				"id":"7858717",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["11213641"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P10906"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"21076587",
				"name":"ugpa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["68966"]
				},
				{
				"id":"6316803",
				"name":"ugpb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["32762214"]
				},
				{
				"id":"18269278",
				"name":"g3p binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["28703214"]
				},
				{
				"id":"160184",
				"name":"ugpc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["5005124"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSSSRPVFRSRWLPYLLVAPQLIITVIFFIWPAGEALWYSLQSVDPFGFSSQFVGLDNFVTLFHDSYYLDSFWTTIKFSTFVTVSGLLVSLFFAALVEYIVRGSRFYQTLMLLPYAVAPAVAAVLWIFLFNPGRGLITHFLAEFGYDWNHAQNSGQAMFLVVFASVWKQISYNFLFFYAALQSIPRSLIEAAAIDGAGPIRRFFKIALPLIAPVSFFLLVVNLVYAFFDTFPVIDAATSGGPVQATTTLIYKIYREGFTGLDLASSAAQSVVLMFLVIVLTVVQFRYVESKVRYQ",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P10905"},
		"label":"ugpa_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC  3.6.3.20"},{"db":"intact","id":"EBI-8875874"}],
		"expansion":{"id":"40","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P10907"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"999171",
				"name":"ugpa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["15864135"]
				},
				{
				"id":"5005124",
				"name":"ugpe binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["160184"]
				},
				{
				"id":"7858717",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["11213641"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P10905"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"68966",
				"name":"ugpe binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21076587"]
				},
				{
				"id":"15864135",
				"name":"ugpc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["999171"]
				},
				{
				"id":"26534846",
				"name":"ugpb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["25983454"]
				},
				{
				"id":"2852209",
				"name":"g3p binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["21363808"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:15978"},
		"label":"sn-glycerol 3-phosphate"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC  3.6.3.20"},{"db":"intact","id":"EBI-8875874"}],
		"expansion":{"id":"40","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P10907"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"999171",
				"name":"ugpa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["15864135"]
				},
				{
				"id":"5005124",
				"name":"ugpe binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["160184"]
				},
				{
				"id":"7858717",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["11213641"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15978"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"1618383",
				"name":"ugpb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["287585"]
				},
				{
				"id":"28703214",
				"name":"ugpe binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["18269278"]
				},
				{
				"id":"21363808",
				"name":"ugpa binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["2852209"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSKPFKLNSAFKPSGDQPEAIRRLEEGLEDGLAHQTLLGVTGSGKTFTIANVIADLQRPTMVLAPNKTLAAQLYGEMKEFFPENAVEYFVSYYDYYQPEAYVPSSDTFIEKDASVNEHIEQMRLSATKAMLERRDVVVVASVSAIYGLGDPDLYLKMMLHLTVGMIIDQRAILRRLAELQYARNDQAFQRGTFRVRGEVIDIFPAESDDIALRVELFDEEVERLSLFDPLTGQIVSTIPRFTIYPKTHYVTPRERIVQAMEEIKEELAARRKVLLENNKLLEEQRLTQRTQFDLEMMNELGYCSGIENYSRFLSGRGPGEPPPTLFDYLPADGLLVVDESHVTIPQIGGMYRGDRARKETLVEYGFRLPSALDNRPLKFEEFEALAPQTIYVSATPGNYELEKSGGDVVDQVVRPTGLLDPIIEVRPVATQVDDLLSEIRQRAAINERVLVTTLTKRMAEDLTEYLEEHGERVRYLHSDIDTVERMEIIRDLRLGEFDVLVGINLLREGLDMPEVSLVAILDADKEGFLRSERSLIQTIGRAARNVNGKAILYGDKITPSMAKAIGETERRREKQQKYNEEHGITPQGLNKKVVDILALGQNIAKTKAKGRGKSRPIVEPDNVPMDMSPKALQQKIHELEGLMMQHAQNLEFEEAAQIRDQLHQLRELFIAAS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A8F8"},
		"label":"uvrb_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"3.6.1.3"},{"db":"intact","id":"EBI-9004110"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"29106964",
				"name":"uvrb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["10681360"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0A8F8"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"10681360",
				"name":"atp binding region",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["1-660"],
				"linkedFeatures":["29106964"]
				},
				{
				"id":"5420584",
				"name":"dimerisation domain",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["1-660"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSDQFDAKAFLKTVTSQPGVYRMYDAGGTVIYVGKAKDLKKRLSSYFRSNLASRKTEALVAQIQQIDVTVTHTETEALLLEHNYIKLYQPRYNVLLRDDKSYPFIFLSGDTHPRLAMHRGAKHAKGEYFGPFPNGYAVRETLALLQKIFPIRQCENSVYRNRSRPCLQYQIGRCLGPCVEGLVSEEEYAQQVEYVRLFLSGKDDQVLTQLISRMETASQNLEFEEAARIRDQIQAVRRVTEKQFVSNTGDDLDVIGVAFDAGMACVHVLFIRQGKVLGSRSYFPKVPGGTELSEVVETFVGQFYLQGSQMRTLPGEILLDFNLSDKTLLADSLSELAGRKINVQTKPRGDRARYLKLARTNAATALTSKLSQQSTVHQRLTALASVLKLPEVKRMECFDISHTMGEQTVASCVVFDANGPLRAEYRRYNITGITPGDDYAAMNQVLRRRYGKAIDDSKIPDVILIDGGKGQLAQAKNVFAELDVSWDKNHPLLLGVAKGADRKAGLETLFFEPEGEGFSLPPDSPALHVIQHIRDESHDHAIGGHRKKRAKVKNTSSLETIEGVGPKRRQMLLKYMGGLQGLRNASVEEIAKVPGISQGLAEKIFWSLKH",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A8G0"},
		"label":"uvrc_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"3.6.1.3"},{"db":"intact","id":"EBI-9004163"}],
		"expansion":{"id":"41","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A8G0"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26340554",
				"name":"uvrb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["22078836"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"547780",
				"name":"uvrb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["12629348"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"3.6.1.3"},{"db":"intact","id":"EBI-9004163"}],
		"expansion":{"id":"41","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A8G0"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26340554",
				"name":"uvrb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["22078836"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0A8F8"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"29677413",
				"name":"dimerisation domain",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["1-660"]
				},
				{
				"id":"22078836",
				"name":"uvrc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["26340554"]
				},
				{
				"id":"12629348",
				"name":"atp binding region",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["1-660"],
				"linkedFeatures":["547780"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"3.6.1.3"},{"db":"intact","id":"EBI-9003834"}],
		"expansion":{"id":"42","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A8F8"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"1650681",
				"name":"atp binding region",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["1-660"],
				"linkedFeatures":["27043676"]
				},
				{
				"id":"28291808",
				"name":"dimerisation domain",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["1-660"]
				},
				{
				"id":"561668",
				"name":"uvra binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["11159213"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0499","name":"unspecified role"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27043676",
				"name":"uvrb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["1650681"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDKIEVRGARTHNLKNINLVIPRDKLIVVTGLSGSGKSSLAFDTLYAEGQRRYVESLSAYARQFLSLMEKPDVDHIEGLSPAISIEQKSTSHNPRSTVGTITEIHDYLRLLFARVGEPRCPDHDVPLAAQTVSQMVDNVLSQPEGKRLMLLAPIIKERKGEHTKTLENLASQGYIRARIDGEVCDLSDPPKLELQKKHTIEVVVDRFKVRDDLTQRLAESFETALELSGGTAVVADMDDPKAEELLFSANFACPICGYSMRELEPRLFSFNNPAGACPTCDGLGVQQYFDPDRVIQNPELSLAGGAIRGWDRRNFYYFQMLKSLADHYKFDVEAPWGSLSANVHKVVLYGSGKENIEFKYMNDRGDTSIRRHPFEGVLHNMERRYKETESSAVREELAKFISNRPCASCEGTRLRREARHVYVENTPLPAISDMSIGHAMEFFNNLKLAGQRAKIAEKILKEIGDRLKFLVNVGLNYLTLSRSAETLSGGEAQRIRLASQIGAGLVGVMYVLDEPSIGLHQRDNERLLGTLIHLRDLGNTVIVVEHDEDAIRAADHVIDIGPGAGVHGGEVVAEGPLEAIMAVPESLTGQYMSGKRKIEVPKKRVPANPEKVLKLTGARGNNLKDVTLTLPVGLFTCITGVSGSGKSTLINDTLFPIAQRQLNGATIAEPAPYRDIQGLEHFDKVIDIDQSPIGRTPRSNPATYTGVFTPVRELFAGVPESRARGYTPGRFSFNVRGGRCEACQGDGVIKVEMHFLPDIYVPCDQCKGKRYNRETLEIKYKGKTIHEVLDMTIEEAREFFDAVPALARKLQTLMDVGLTYIRLGQSATTLSGGEAQRVKLARELSKRGTGQTLYILDEPTTGLHFADIQQLLDVLHKLRDQGNTIVVIEHNLDVIKTADWIVDLGPEGGSGGGEILVSGTPETVAECEASHTARFLKPML",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0A698"},
		"label":"uvra_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intenz","id":"3.6.1.3"},{"db":"intact","id":"EBI-9003834"}],
		"expansion":{"id":"42","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A8F8"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"1650681",
				"name":"atp binding region",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["1-660"],
				"linkedFeatures":["27043676"]
				},
				{
				"id":"28291808",
				"name":"dimerisation domain",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["1-660"]
				},
				{
				"id":"561668",
				"name":"uvra binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["11159213"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0A698"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11159213",
				"name":"uvrb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["561668"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MPEQYRYTLPVKAGEQRLLGELTGAACATLVAEIAERHAGPVVLIAPDMQNALRLHDEISQFTDQMVMNLADWETLPYDSFSPHQDIISSRLSTLYQLPTMQRGVLIVPVNTLMQRVCPHSFLHGHALVMKKGQRLSRDALRTQLDSAGYRHVDQVMEHGEYATRGALLDLFPMGSELPYRLDFFDDEIDSLRVFDVDSQRTLEEVEAINLLPAHEFPTDKAAIELFRSQWRDTFEVKRDPEHIYQQVSKGTLPAGIEYWQPLFFSEPLPPLFSYFPANTLLVNTGDLETSAERFQADTLARFENRGVDPMRPLLPPQSLWLRVDELFSELKNWPRVQLKTEHLPTKAANANLGFQKLPDLAVQAQQKAPLDALRKFLETFDGPVVFSVESEGRREALGELLARIKIAPQRIMRLDEASDRGRYLMIGAAEHGFVDTVRNLALICESDLLGERVARRRQDSRRTINPDTLIRNLAELHIGQPVVHLEHGVGRYAGMTTLEAGGITGEYLMLTYANDAKLYVPVSSLHLISRYAGGAEENAPLHKLGGDAWSRARQKAAEKVRDVAAELLDIYAQRAAKEGFAFKHDREQYQLFCDSFPFETTPDQAQAINAVLSDMCQPLAMDRLVCGDVGFGKTEVAMRAAFLAVDNHKQVAVLVPTTLLAQQHYDNFRDRFANWPVRIEMISRFRSAKEQTQILAEVAEGKIDILIGTHKLLQSDVKFKDLGLLIVDEEHRFGVRHKERIKAMRANVDILTLTATPIPRTLNMAMSGMRDLSIIATPPARRLAVKTFVREYDSMVVREAILREILRGGQVYYLYNDVENIQKAAERLAELVPEARIAIGHGQMRERELERVMNDFHHQRFNVLVCTTIIETGIDIPTANTIIIERADHFGLAQLHQLRGRVGRSHHQAYAWLLTPHPKAMTTDAQKRLEAIASLEDLGAGFALATHDLEIRGAGELLGEEQSGSMETIGFSLYMELLENAVDALKAGREPSLEDLTSQQTEVELRMPSLLPDDFIPDVNTRLSFYKRIASAKTENELEEIKVELIDRFGLLPDPARTLLDIARLRQQAQKLGIRKLEGNEKGGVIEFAEKNHVNPAWLIGLLQKQPQHYRLDGPTRLKFIQDLSERKTRIEWVRQFMRELEENAIA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P30958"},
		"label":"mfd_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"4dfc"},{"db":"intact","id":"EBI-9007893"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0A698"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"17182772",
				"name":"mfd binding site",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["131-250"],
				"linkedFeatures":["21408922"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P30958"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"expressedIn":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"bindingSites":[
				{
				"id":"21408922",
				"name":"uvra binding site",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["127-213"],
				"linkedFeatures":["17182772"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSDLAREITPVNIEEELKSSYLDYAMSVIVGRALPDVRDGLKPVHRRVLYAMNVLGNDWNKAYKKSARVVGDVIGKYHPHGDSAVYDTIVRMAQPFSLRYMLVDGQGNFGSIDGDSAAAMRYTEIRLAKIAHELMADLEKETVDFVDNYDGTEKIPDVMPTKIPNLLVNGSSGIAVGMATNIPPHNLTEVINGCLAYIDDEDISIEGLMEHIPGPDFPTAAIINGRRGIEEAYRTGRGKVYIRARAEVEVDAKTGRETIIVHEIPYQVNKARLIEKIAELVKEKRVEGISALRDESDKDGMRIVIEVKRDAVGEVVLNNLYSQTQLQVSFGINMVALHHGQPKIMNLKDIIAAFVRHRREVVTRRTIFELRKARDRAHILEALAVALANIDPIIELIRHAPTPAEAKTALVANPWQLGNVAAMLERAGDDAARPEWLEPEFGVRDGLYYLTEQQAQAILDLRLQKLTGLEHEKLLDEYKELLDQIAELLRILGSADRLMEVIREELELVREQFGDKRRTEITANSADINLEDLITQEDVVVTLSHQGYVKYQPLSEYEAQRRGGKGKSAARIKEEDFIDRLLVANTHDHILCFSSRGRVYSMKVYQLPEATRGARGRPIVNLLPLEQDERITAILPVTEFEEGVKVFMATANGTVKKTVLTEFNRLRTAGKVAIKLVDGDELIGVDLTSGEDEVMLFSAEGKVVRFKESSVRAMGCNTTGVRGIRLGEGDKVVSLIVPRGDGAILTATQNGYGKRTAVAEYPTKSRATKGVISIKVTERNGLVVGAVQVDDCDQIMMITDAGTLVRTRVSEISIVGRNTQGVILIRTAEDENVVGLQRVAEPVDEEDLDTIDGSAAEGDDEIAPEVDVDDEPEEE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0AES4"},
		"label":"gyra_ecoli"
	},
	{
		"object":"interactor",
		"sequence":"MSNSYDSSSIKVLKGLDAVRKRPGMYIGDTDDGTGLHHMVFEVVDNAIDEALAGHCKEIIVTIHADNSVSVQDDGRGIPTGIHPEEGVSAAEVIMTVLHAGGKFDDNSYKVSGGLHGVGVSVVNALSQKLELVIQREGKIHRQIYEHGVPQAPLAVTGETEKTGTMVRFWPSLETFTNVTEFEYEILAKRLRELSFLNSGVSIRLRDKRDGKEDHFHYEGGIKAFVEYLNKNKTPIHPNIFYFSTEKDGIGVEVALQWNDGFQENIYCFTNNIPQRDGGTHLAGFRAAMTRTLNAYMDKEGYSKKAKVSATGDDAREGLIAVVSVKVPDPKFSSQTKDKLVSSEVKSAVEQQMNELLAEYLLENPTDAKIVVGKIIDAARAREAARRAREMTRRKGALDLAGLPGKLADCQERDPALSELYLVEGDSAGGSAKQGRNRKNQAILPLKGKILNVEKARFDKMLSSQEVATLITALGCGIGRDEYNPDKLRYHSIIIMTDADVDGSHIRTLLLTFFYRQMPEIVERGHVYIAQPPLYKVKKGKQEQYIKDDEAMDQYQISIALDGATLHTNASAPALAGEALEKLVSEYNATQKMINRMERRYPKAMLKELIYQPTLTEADLSDEQTVTRWVNALVSELNDKEQHGSQWKFDVHTNAEQNLFEPIVRVRTHGVDTDYPLDHEFITGGEYRRICTLGEKLRGLLEEDAFIERGERRQPVASFEQALDWLVKESRRGLSIQRYKGLGEMNPEQLWETTMDPESRRMLRVTVKDAIAADQLFTTLMGDAVEPRRAFIEENALKAANIDI",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0AES6"},
		"label":"gyrb_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"chembl","id":"CHEMBL2094139"},{"db":"intact","id":"EBI-9008779"},{"db":"wwpdb","id":"3nuh"},{"db":"intenz","id":"5.99.1.3"}],
		"expansion":{"id":"43","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0AES4"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"15579986",
				"name":"gyrb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["27599018"]
				},
				{
				"id":"234076",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AES6"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27599018",
				"name":"gyra binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["15579986"]
				},
				{
				"id":"8257294",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["n-n"],
				"linkedFeatures":["32767416"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"chembl","id":"CHEMBL2094139"},{"db":"intact","id":"EBI-9008779"},{"db":"wwpdb","id":"3nuh"},{"db":"intenz","id":"5.99.1.3"}],
		"expansion":{"id":"43","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P0AES4"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"15579986",
				"name":"gyrb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["27599018"]
				},
				{
				"id":"234076",
				"name":"dimerisation domain",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32767416",
				"name":"gyrb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["8257294"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLRVYHSNRLDVLEALMEFIVERERLDDPFEPEMILVQSTGMAQWLQMTLSQKFGIAANIDFPLPASFIWDMFVRVLPEIPKESAFNKQSMSWKLMTLLPQLLEREDFTLLRHYLTDDSDKRKLFQLSSKAADLFDQYLVYRPDWLAQWETGHLVEGLGEAQAWQAPLWKALVEYTHQLGQPRWHRANLYQRFIETLESATTCPPGLPSRVFICGISALPPVYLQALQALGKHIEIHLLFTNPCRYYWGDIKDPAYLAKLLTRQRRHSFEDRELPLFRDSENAGQLFNSDGEQDVGNPLLASWGKLGRDYIYLLSDLESSQELDAFVDVTPDNLLHNIQSDILELENRAVAGVNIEEFSRSDNKRPLDPLDSSITFHVCHSPQREVEVLHDRLLAMLEEDPTLTPRDIIVMVADIDSYSPFIQAVFGSAPADRYLPYAISDRRARQSHPVLEAFISLLSLPDSRFVSEDVLALLDVPVLAARFDITEEGLRYLRQWVNESGIRWGIDDDNVRELELPATGQHTWRFGLTRMLLGYAMESAQGEWQSVLPYDESSGLIAELVGHLASLLMQLNIWRRGLAQERPLEEWLPVCRDMLNAFFLPDAETEAAMTLIEQQWQAIIAEGLGAQYGDAVPLSLLRDELAQRLDQERISQRFLAGPVNICTLMPMRSIPFKVVCLLGMNDGVYPRQLAPLGFDLMSQKPKRGDRSRRDDDRYLFLEALISAQQKLYISYIGRSIQDNSERFPSVLVQELIDYIGQSHYLPGDEALNCDESEARVKAHLTCLHTRMPFDPQNYQPGERQSYAREWLPAASQAGKAHSEFVQPLPFTLPETVPLETLQRFWAHPVRAFFQMRLQVNFRTEDSEIPDTEPFILEGLSRYQINQQLLNALVEQDDAERLFRRFRAAGDLPYGAFGEIFWETQCQEMQQLADRVIACRQPGQSMEIDLACNGVQITGWLPQVQPDGLLRWRPSLLSVAQGMQLWLEHLVYCASGGNGESRLFLRKDGEWRFPPLAAEQALHYLSQLIEGYREGMSAPLLVLPESGGAWLKTCYDAQNDAMLDDDSTLQKARTKFLQAYEGNMMVRGEGDDIWYQRLWRQLTPETMEAIVEQSQRFLLPLFRFNQS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P07648"},
		"label":"recc_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"3.1.11.5"},{"db":"wwpdb","id":"1w36"},{"db":"intact","id":"EBI-9009144"},{"db":"chembl","id":"CHEMBL2095232"},{"db":"wwpdb","id":"3k70"}],
		"expansion":{"id":"44","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P07648"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26631913",
				"name":"recd binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["19996177"]
				},
				{
				"id":"28119181",
				"name":"recb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["18464978"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:15422"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"29501931",
				"name":"recd binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["5113409"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSDVAETLDPLRLPLQGERLIEASAGTGKTFTIAALYLRLLLGLGGSAAFPRPLTVEELLVVTFTEAATAELRGRIRSNIHELRIACLRETTDNPLYERLLEEIDDKAQAAQWLLLAERQMDEAAVFTIHGFCQRMLNLNAFESGMLFEQQLIEDESLLRYQACADFWRRHCYPLPREIAQVVFETWKGPQALLRDINRYLQGEAPVIKAPPPDDETLASRHAQIVARIDTVKQQWRDAVGELDALIESSGIDRRKFNRSNQAKWIDKISAWAEEETNSYQLPESLEKFSQRFLEDRTKAGGETPRHPLFEAIDQLLAEPLSIRDLVITRALAEIRETVAREKRRRGELGFDDMLSRLDSALRSESGEVLAAAIRTRFPVAMIDEFQDTDPQQYRIFRRIWHHQPETALLLIGDPKQAIYAFRGADIFTYMKARSEVHAHYTLDTNWRSAPGMVNSVNKLFSQTDDAFMFREIPFIPVKSAGKNQALRFVFKGETQPAMKMWLMEGESCGVGDYQSTMAQVCAAQIRDWLQAGQRGEALLMNGDDARPVRASDISVLVRSRQEAAQVRDALTLLEIPSVYLSNRDSVFETLEAQEMLWLLQAVMTPERENTLRSALATSMMGLNALDIETLNNDEHAWDVVVEEFDGYRQIWRKRGVMPMLRALMSARNIAENLLATAGGERRLTDILHISELLQEAGTQLESEHALVRWLSQHILEPDSNASSQQMRLESDKHLVQIVTIHKSKGLEYPLVWLPFITNFRVQEQAFYHDRHSFEAVLDLNAAPESVDLAEAERLAEDLRLLYVALTRSVWHCSLGVAPLVRRRGDKKGDTDVHQSALGRLLQKGEPQDAAGLRTCIEALCDDDIAWQTAQTGDNQPWQVNDVSTAELNAKTLQRLPGDNWRVTSYSGLQQRGHGIAQDLMPRLDVDAAGVASVVEEPTLTPHQFPRGASPGTFLHSLFEDLDFTQPVDPNWVREKLELGGFESQWEPVLTEWITAVLQAPLNETGVSLSQLSARNKQVEMEFYLPISEPLIASQLDTLIRQFDPLSAGCPPLEFMQVRGMLKGFIDLVFRHEGRYYLLDYKSNWLGEDSSAYTQQAMAAAMQAHRYDLQYQLYTLALHRYLRHRIADYDYEHHFGGVIYLFLRGVDKEHPQQGIYTTRPNAGLIALMDEMFAGMTLEEA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P08394"},
		"label":"recb_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"3.1.11.5"},{"db":"wwpdb","id":"1w36"},{"db":"intact","id":"EBI-9009144"},{"db":"chembl","id":"CHEMBL2095232"},{"db":"wwpdb","id":"3k70"}],
		"expansion":{"id":"44","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P07648"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26631913",
				"name":"recd binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["19996177"]
				},
				{
				"id":"28119181",
				"name":"recb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["18464978"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P08394"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"18464978",
				"name":"recc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["28119181"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKLQKQLLEAVEHKQLRPLDVQFALTVAGDEHPAVTLAAALLSHDAGEGHVCLPLSRLENNEASHPLLATCVSEIGELQNWEECLLASQAVSRGDEPTPMILCGDRLYLNRMWCNERTVARFFNEVNHAIEVDEALLAQTLDKLFPVSDEINWQKVAAAVALTRRISVISGGPGTGKTTTVAKLLAALIQMADGERCRIRLAAPTGKAAARLTESLGKALRQLPLTDEQKKRIPEDASTLHRLLGAQPGSQRLRHHAGNPLHLDVLVVDEASMIDLPMMSRLIDALPDHARVIFLGDRDQLASVEAGAVLGDICAYANAGFTAERARQLSRLTGTHVPAGTGTEAASLRDSLCLLQKSYRFGSDSGIGQLAAAINRGDKTAVKTVFQQDFTDIEKRLLQSGEDYIAMLEEALAGYGRYLDLLQARAEPDLIIQAFNEYQLLCALREGPFGVAGLNERIEQFMQQKRKIHRHPHSRWYEGRPVMIARNDSALGLFNGDIGIALDRGQGTRVWFAMPDGNIKSVQPSRLPEHETTWAMTVHKSQGSEFDHAALILPSQRTPVVTRELVYTAVTRARRRLSLYADERILSAAIATRTERRSGLAALFSSRE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P04993"},
		"label":"recd_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"3.1.11.5"},{"db":"wwpdb","id":"1w36"},{"db":"intact","id":"EBI-9009144"},{"db":"chembl","id":"CHEMBL2095232"},{"db":"wwpdb","id":"3k70"}],
		"expansion":{"id":"44","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P07648"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"26631913",
				"name":"recd binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["19996177"]
				},
				{
				"id":"28119181",
				"name":"recb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["18464978"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P04993"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19996177",
				"name":"recc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["26631913"]
				},
				{
				"id":"5113409",
				"name":"atp binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["29501931"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDQKQIEEIVRSVMASMGQAAPAPSEAKCATTNCAAPVTSESCALDLGSAEAKAWIGVENPHRADVLTELRRSTVARVCTGRAGPRPRTQALLRFLADHSRSKDTVLKEVPEEWVKAQGLLEVRSEISDKNLYLTRPDMGRRLCAEAVEALKAQCVANPDVQVVISDGLSTDAITVNYEEILPPLMAGLKQAGLKVGTPFFVRYGRVKIEDQIGEILGAKVVILLVGERPGLGQSESLSCYAVYSPRMATTVEADRTCISNIHQGGTPPVEAAAVIVDLAKRMLEQKASGINMTR",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P19636"},
		"label":"eutc_ecoli"
	},
	{
		"object":"interactor",
		"sequence":"MKLKTTLFGNVYQFKDVKEVLAKANELRSGDVLAGVAAASSQERVAAKQVLSEMTVADIRNNPVIAYEDDCVTRLIQDDVNETAYNQIKNWSISELREYVLSDETSVDDIAFTRKGLTSEVVAAVAKICSNADLIYGAKKMPVIKKANTTIGIPGTFSARLQPNDTRDDVQSIAAQIYEGLSFGVGDAVIGVNPVTDDVENLSRVLDTIYGVIDKFNIPTQGCVLAHVTTQIEAIRRGAPGGLIFQSICGSEKGLKEFGVELAMLDEARAVGAEFNRIAGENCLYFETGQGSALSAGANFGADQVTMEARNYGLARHYDPFIVNTVVGFIGPEYLYNDRQIIRAGLEDHFMGKLSGISMGCDCCYTNHADADQNLNENLMILLATAGCNYIMGMPLGDDIMLNYQTTAFHDTATVRQLLNLRPSPEFERWLESMGIMANGRLTKRAGDPSLFF",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
		"identifier":{"db":"uniprotkb","id":"P0AEJ6"},
		"label":"eutb_ecoli"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"3abo"},{"db":"intact","id":"EBI-9012157"},{"db":"wwpdb","id":"3abs"},{"db":"wwpdb","id":"3abq"},{"db":"intenz","id":"4.3.1.7"},{"db":"wwpdb","id":"3abr"}],
		"expansion":{"id":"45","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P19636"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"8166589",
				"name":"eutb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["44-295"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0AEJ6"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"18239233",
				"name":"eutc binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"83333","common":"ecoli","scientific":"Escherichia coli (strain K12)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"3abo"},{"db":"intact","id":"EBI-9012157"},{"db":"wwpdb","id":"3abs"},{"db":"wwpdb","id":"3abq"},{"db":"intenz","id":"4.3.1.7"},{"db":"wwpdb","id":"3abr"}],
		"expansion":{"id":"45","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P19636"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"8166589",
				"name":"eutb binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["44-295"]
				}]
		},
		"target":{
			"identifier":{"db":"chebi","id":"CHEBI:30411"},
			"bioRole":{"id":"MI:0682","name":"cofactor"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	}
	]
};
