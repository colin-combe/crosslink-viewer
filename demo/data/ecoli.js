var miJson = {
   "data":[
      {
         "object":"interactor",
         "id":"1",
         "sequence":"MAETKIVVGPQPFSVGEEYPWLAERDEDGAVVTFTGKVRNHNLGDSVNALTLEHYPGMTEKALAEIVDEARNRWPLGRVTVIHRIGELWPGDEIVFVGVTSAHRSSAFEAGQFIMDYLKTRAPFWKREATPEGDRWVEARESDQQAAKRW",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P30749"
         },
         "label":"moae_ecoli"
      },
      {
         "object":"interactor",
         "id":"2",
         "sequence":"MIKVLFFAQVRELVGTDATEVAADFPTVEALRQHMAAQSDRWALALEDGKLLAAVNQTLVSFDHPLTDGDEVAFFPPVTGG",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P30748"
         },
         "label":"moad_ecoli"
      },
      {
         "object":"interaction",
         "id":"3",
         "interactionType":{
            "id":"MI:0407",
            "name":"direct interaction"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"wwpdb",
               "id":"1fm0"
            },
            {
               "db":"wwpdb",
               "id":"1nvi"
            },
            {
               "db":"wwpdb",
               "id":"3bii"
            },
            {
               "db":"intenz",
               "id":"EC 2.8.1.12"
            },
            {
               "db":"wwpdb",
               "id":"1fma"
            },
            {
               "db":"intact",
               "id":"EBI-6876660"
            }
         ],
         "participants":[
            {
               "interactorRef":"1",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"4",
                     "name":"moad binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-150"
                     ],
                     "linkedFeatures":[
                        "5"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"2",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0918",
                  "name":"donor"
               },
               "bindingSites":[
                  {
                     "id":"5",
                     "name":"moae binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-81"
                     ],
                     "linkedFeatures":[
                        "4"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"6",
         "sequence":"MAELSDQEMLRYNRQIILRGFDFDGQEALKDSRVLIVGLGGLGCAASQYLASAGVGNLTLLDFDTVSLSNLQRQTLHSDATVGQPKVESARDALTRINPHIAITPVNALLDDAELAALIAEHDLVLDCTDNVAVRNQLNAGCFAAKVPLVSGAAIRMEGQITVFTYQDGEPCYRCLSRLFGENALTCVEAGVMAPLIGVIGSLQAMEAIKMLAGYGKPASGKIVMYDAMTCQFREMKLMRNPGCEVCGQ",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P12282"
         },
         "label":"moeb_ecoli"
      },
      {
         "object":"interactor",
         "id":"7",
         "type":{
            "id":"MI:0328",
            "name":"small molecule"
         },
         "identifier":{
            "db":"chebi",
            "id":"CHEBI:15422"
         },
         "label":"atp"
      },
      {
         "object":"interaction",
         "id":"8",
         "interactionType":{
            "id":"MI:0407",
            "name":"direct interaction"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"wwpdb",
               "id":"1jwb"
            },
            {
               "db":"wwpdb",
               "id":"1JWA"
            },
            {
               "db":"intenz",
               "id":"2.7.7.80"
            },
            {
               "db":"wwpdb",
               "id":"1jw9"
            },
            {
               "db":"intact",
               "id":"EBI-6868559"
            }
         ],
         "participants":[
            {
               "interactorRef":"6",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"9",
                     "name":"moab binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-249"
                     ],
                     "linkedFeatures":[
                        "10"
                     ]
                  },
                  {
                     "id":"11",
                     "name":"atp binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-249"
                     ],
                     "linkedFeatures":[
                        "12"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"7",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0918",
                  "name":"donor"
               },
               "bindingSites":[
                  {
                     "id":"12",
                     "name":"moeb binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "11"
                     ]
                  },
                  {
                     "id":"13",
                     "name":"moed binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "14"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"2",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0919",
                  "name":"acceptor"
               },
               "bindingSites":[
                  {
                     "id":"14",
                     "name":"atp binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-81"
                     ],
                     "linkedFeatures":[
                        "13"
                     ]
                  },
                  {
                     "id":"10",
                     "name":"moeb binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-81"
                     ],
                     "linkedFeatures":[
                        "9"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"15",
         "sequence":"MQFLNMFFFDIYPYIAGAVFLIGSWLRYDYGQYTWRAASSQMLDRKGMNLASNLFHIGILGIFVGHFFGMLTPHWMYEAWLPIEVKQKMAMFAGGASGVLCLIGGVLLLKRRLFSPRVRATTTGADILILSLLVIQCALGLLTIPFSAQHMDGSEMMKLVGWAQSVVTFHGGASQHLDGVAFIFRLHLVLGMTLFLLFPFSRLIHIWSVPVEYLTRKYQLVRARH",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P11350"
         },
         "label":"nari_ecoli"
      },
      {
         "object":"interactor",
         "id":"16",
         "sequence":"MKIRSQVGMVLNLDKCIGCHTCSVTCKNVWTSREGVEYAWFNNVETKPGQGFPTDWENQEKYKGGWIRKINGKLQPRMGNRAMLLGKIFANPHLPGIDDYYEPFDFDYQNLHTAPEGSKSQPIARPRSLITGERMAKIEKGPNWEDDLGGEFDKLAKDKNFDNIQKAMYSQFENTFMMYLPRLCEHCLNPACVATCPSGAIYKREEDGIVLIDQDKCRGWRMCITGCPYKKIYFNWKSGKSEKCIFCYPRIEAGQPTVCSETCVGRIRYLGVLLYDADAIERAASTENEKDLYQRQLDVFLDPNDPKVIEQAIKDGIPLSVIEAAQQSPVYKMAMEWKLALPLHPEYRTLPMVWYVPPLSPIQSAADAGELGSNGILPDVESLRIPVQYLANLLTAGDTKPVLRALKRMLAMRHYKRAETVDGKVDTRALEEVGLTEAQAQEMYRYLAIANYEDRFVVPSSHRELAREAFPEKNGCGFTFGDGCHGSDTKFNLFNSRRIDAIDVTSKTEPHP",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P11349"
         },
         "label":"narh_ecoli"
      },
      {
         "object":"interactor",
         "id":"17",
         "sequence":"MSKFLDRFRYFKQKGETFADGHGQLLNTNRDWEDGYRQRWQHDKIVRSTHGVNCTGSCSWKIYVKNGLVTWETQQTDYPRTRPDLPNHEPRGCPRGASYSWYLYSANRLKYPMMRKRLMKMWREAKALHSDPVEAWASIIEDADKAKSFKQARGRGGFVRSSWQEVNELIAASNVYTIKNYGPDRVAGFSPIPAMSMVSYASGARYLSLIGGTCLSFYDWYCDLPPASPQTWGEQTDVPESADWYNSSYIIAWGSNVPQTRTPDAHFFTEVRYKGTKTVAVTPDYAEIAKLCDLWLAPKQGTDAAMALAMGHVMLREFHLDNPSQYFTDYVRRYTDMPMLVMLEERDGYYAAGRMLRAADLVDALGQENNPEWKTVAFNTNGEMVAPNGSIGFRWGEKGKWNLEQRDGKTGEETELQLSLLGSQDEIAEVGFPYFGGDGTEHFNKVELENVLLHKLPVKRLQLADGSTALVTTVYDLTLANYGLERGLNDVNCATSYDDVKAYTPAWAEQITGVSRSQIIRIAREFADNADKTHGRSMIIVGAGLNHWYHLDMNYRGLINMLIFCGCVGQSGGGWAHYVGQEKLRPQTGWQPLAFALDWQRPARHMNSTSYFYNHSSQWRYETVTAEELLSPMADKSRYTGHLIDFNVRAERMGWLPSAPQLGTNPLTIAGEAEKAGMNPVDYTVKSLKEGSIRFAAEQPENGKNHPRNLFIWRSNLLGSSGKGHEFMLKYLLGTEHGIQGKDLGQQGGVKPEEVDWQDNGLEGKLDLVVTLDFRLSSTCLYSDIILPTATWYEKDDMNTSDMHPFIHPLSAAVDPAWEAKSDWEIYKAIAKKFSEVCVGHLGKETDIVTLPIQHDSAAELAQPLDVKDWKKGECDLIPGKTAPHIMVVERDYPATYERFTSIGPLMEKIGNGGKGIAWNTQSEMDLLRKLNYTKAEGPAKGQPMLNTAIDAAEMILTLAPETNGQVAVKAWAALSEFTGRDHTHLALNKEDEKIRFRDIQAQPRKIISSPTWSGLEDEHVSYNAGYTNVHELIPWRTLSGRQQLYQDHQWMRDFGESLLVYRPPIDTRSVKEVIGQKSNGNQEKALNFLTPHQKWGIHSTYSDNLLMLTLGRGGPVVWLSEADAKDLGIADNDWIEVFNSNGALTARAVVSQRVPAGMTMMYHAQERIVNLPGSEITQQRGGIHNSVTRITPKPTHMIGGYAHLAYGFNYYGTVGSNRDEFVVVRKMKNIDWLDGEGNDQVQESVK",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P09152"
         },
         "label":"narg_ecoli"
      },
      {
         "object":"interactor",
         "id":"18",
         "type":{
            "id":"MI:0328",
            "name":"small molecule"
         },
         "identifier":{
            "db":"chebi",
            "id":"CHEBI:17594"
         },
         "label":"hydroquinone"
      },
      {
         "object":"interactor",
         "id":"19",
         "type":{
            "id":"MI:0328",
            "name":"small molecule"
         },
         "identifier":{
            "db":"chebi",
            "id":"CHEBI:17632"
         },
         "label":"nitrate"
      },
      {
         "object":"interactor",
         "id":"20",
         "type":{
            "id":"MI:0328",
            "name":"small molecule"
         },
         "organism":{
            "taxid":"-2",
            "common":"chemical synthesis",
            "scientific":"Chemical synthesis (Chemical synthesis)"
         },
         "identifier":{
            "db":"chebi",
            "id":"CHEBI:47402"
         },
         "label":"fe3-s4"
      },
      {
         "object":"interactor",
         "id":"21",
         "type":{
            "id":"MI:0328",
            "name":"small molecule"
         },
         "organism":{
            "taxid":"-2",
            "common":"chemical synthesis",
            "scientific":"Chemical synthesis (Chemical synthesis)"
         },
         "identifier":{
            "db":"chebi",
            "id":"CHEBI:33725"
         },
         "label":"fe4-s4"
      },
      {
         "object":"interactor",
         "id":"22",
         "type":{
            "id":"MI:0328",
            "name":"small molecule"
         },
         "organism":{
            "taxid":"-2",
            "common":"chemical synthesis",
            "scientific":"Chemical synthesis (Chemical synthesis)"
         },
         "identifier":{
            "db":"chebi",
            "id":"CHEBI:61145"
         },
         "label":"mo-bismgd cofactor"
      },
      {
         "object":"interactor",
         "id":"23",
         "type":{
            "id":"MI:0328",
            "name":"small molecule"
         },
         "organism":{
            "taxid":"-2",
            "common":"chemical synthesis",
            "scientific":"Chemical synthesis (Chemical synthesis)"
         },
         "identifier":{
            "db":"chebi",
            "id":"CHEBI:30413"
         },
         "label":"heme"
      },
      {
         "object":"interaction",
         "id":"24",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"wwpdb",
               "id":"1y4z"
            },
            {
               "db":"wwpdb",
               "id":"1Q16"
            },
            {
               "db":"wwpdb",
               "id":"1siw"
            },
            {
               "db":"wwpdb",
               "id":"1y5n"
            },
            {
               "db":"wwpdb",
               "id":"3ir7"
            },
            {
               "db":"wwpdb",
               "id":"1y5l"
            },
            {
               "db":"wwpdb",
               "id":"1y5i"
            },
            {
               "db":"intenz",
               "id":"EC 1.7.99.4"
            },
            {
               "db":"wwpdb",
               "id":"3ir6"
            },
            {
               "db":"intenz",
               "id":"EC 1.9.6.1"
            },
            {
               "db":"wwpdb",
               "id":"3egw"
            },
            {
               "db":"wwpdb",
               "id":"3ir5"
            },
            {
               "db":"intact",
               "id":"EBI-6880351"
            }
         ],
         "participants":[
            {
               "interactorRef":"15",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0682",
                  "name":"cofactor"
               },
               "bindingSites":[
                  {
                     "id":"25",
                     "name":"heme binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-225"
                     ],
                     "linkedFeatures":[
                        "26"
                     ]
                  },
                  {
                     "id":"27",
                     "name":"narh binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-225"
                     ],
                     "linkedFeatures":[
                        "28"
                     ]
                  },
                  {
                     "id":"29",
                     "name":"hydroquinone binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-225"
                     ],
                     "linkedFeatures":[
                        "30"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"16",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"31",
                     "name":"4fe-4s binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-512"
                     ],
                     "linkedFeatures":[
                        "32"
                     ]
                  },
                  {
                     "id":"28",
                     "name":"nari binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-512"
                     ],
                     "linkedFeatures":[
                        "27"
                     ]
                  },
                  {
                     "id":"33",
                     "name":"narg binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-512"
                     ],
                     "linkedFeatures":[
                        "34"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"17",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"35",
                     "name":"3fe-4s binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-1247"
                     ],
                     "linkedFeatures":[
                        "36"
                     ]
                  },
                  {
                     "id":"37",
                     "name":"mo-bismgd binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-1247"
                     ],
                     "linkedFeatures":[
                        "38"
                     ]
                  },
                  {
                     "id":"39",
                     "name":"4fe-4s binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-1247"
                     ],
                     "linkedFeatures":[
                        "40"
                     ]
                  },
                  {
                     "id":"34",
                     "name":"narh binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-1247"
                     ],
                     "linkedFeatures":[
                        "33"
                     ]
                  },
                  {
                     "id":"41",
                     "name":"nitrate binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-1247"
                     ],
                     "linkedFeatures":[
                        "42"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"18",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0579",
                  "name":"electron donor"
               },
               "bindingSites":[
                  {
                     "id":"30",
                     "name":"nari binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "29"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"19",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0580",
                  "name":"electron acceptor"
               },
               "bindingSites":[
                  {
                     "id":"42",
                     "name":"narg binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "41"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"20",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0682",
                  "name":"cofactor"
               },
               "bindingSites":[
                  {
                     "id":"36",
                     "name":"narg binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "35"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"21",
               "stoichiometry":"8",
               "bioRole":{
                  "id":"MI:0682",
                  "name":"cofactor"
               },
               "bindingSites":[
                  {
                     "id":"40",
                     "name":"narg binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "39"
                     ]
                  },
                  {
                     "id":"32",
                     "name":"narh binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "31"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"22",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0682",
                  "name":"cofactor"
               },
               "bindingSites":[
                  {
                     "id":"38",
                     "name":"narg binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "37"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"23",
               "stoichiometry":"4",
               "bioRole":{
                  "id":"MI:0682",
                  "name":"cofactor"
               },
               "bindingSites":[
                  {
                     "id":"26",
                     "name":"nari binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "25"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"43",
         "sequence":"MKRMLINATQQEELRVALVDGQRLYDLDIESPGHEQKKANIYKGKITRIEPSLEAAFVDYGAERHGFLPLKEIAREYFPANYSAHGRPNIKDVLREGQEVIVQIDKEERGNKGAALTTFISLAGSYLVLMPNNPRAGGISRRIEGDDRTELKEALASLELPEGMGLIVRTAGVGKSAEALQWDLSFRLKHWEAIKKAAESRPAPFLIHQESNVIVRAFRDYLRQDIGEILIDNPKVLELARQHIAALGRPDFSSKIKLYTGEIPLFSHYQIESQIESAFQREVRLPSGGSIVIDSTEALTAIDINSARATRGGDIEETAFNTNLEAADEIARQLRLRDLGGLIVIDFIDMTPVRHQRAVENRLREAVRQDRARIQISHISRFGLLEMSRQRLSPSLGESSHHVCPRCSGTGTVRDNESLSLSILRLIEEEALKENTQEVHAIVPVPIASYLLNEKRSAVNAIETRQDGVRCVIVPNDQMETPHYHVLRVRKGEETPTLSYMLPKLHEEAMALPSEEEFAERKRPEQPALATFAMPDVPPAPTPAEPAAPVVAPAPKAAPATPAAPAQPGLLSRFFGALKALFSGGEETKPTEQPAPKAEAKPERQQDRRKPRQNNRRDRNERRDTRSERTEGSDNREENRRNRRQAQQQTAETRESRQQAEVTEKARTADEQQAPRRERSRRRNDDKRQAQQEAKALNVEEQSVQETEQEERVRPVQPRRKQRQLNQKVRYEQSVAEEAVVAPVVEETVAAEPIVQEAPAPRTELVKVPLPVVAQTAPEQQEENNADNRDNGGMPRRSRRSPRHLRVSGQRRRRYRDERYPTQSPMPLTVACASPELASGKVWIRYPIVRPQDVQVEEQREQEEVHVQPMVTEVPVAAAIEPVVSAPVVEEVAGVVEAPVQVAEPQPEVVETTHPEVIAAAVTEQPQVITESDVAVAQEVAEQAEPVVEPQEETADIEEVVETAEVVVAEPEVVAQPAAPVVAEVAAEVETVAAVEPEVTVEHNHATAPMTRAPAPEYVPEAPRHSDWQRPTFAFEGKGAAGGHTATHHASAAPARPQPVE",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P21513"
         },
         "label":"rne_ecoli"
      },
      {
         "object":"interactor",
         "id":"44",
         "sequence":"MSKIVKIIGREIIDSRGNPTVEAEVHLEGGFVGMAAAPSGASTGSREALELRDGDKSRFLGKGVTKAVAAVNGPIAQALIGKDAKDQAGIDKIMIDLDGTENKSKFGANAILAVSLANAKAAAAAKGMPLYEHIAELNGTPGKYSMPVPMMNIINGGEHADNNVDIQEFMIQPVGAKTVKEAIRMGSEVFHHLAKVLKAKGMNTAVGDEGGYAPNLGSNAEALAVIAEAVKAAGYELGKDITLAMDCAASEFYKDGKYVLAGEGNKAFTSEEFTHFLEELTKQYPIVSIEDGLDESDWDGFAYQTKVLGDKIQLVGDDLFVTNTKILKEGIEKGIANSILIKFNQIGSLTETLAAIKMAKDAGYTAVISHRSGETEDATIADLAVGTAAGQIKTGSMSRSDRVAKYNQLIRIEEALGEKAPYNGRKEIKGQA",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0A6P9"
         },
         "label":"eno_ecoli"
      },
      {
         "object":"interactor",
         "id":"45",
         "sequence":"MLNPIVRKFQYGQHTVTLETGMMARQATAAVMVSMDDTAVFVTVVGQKKAKPGQDFFPLTVNYQERTYAAGRIPGSFFRREGRPSEGETLIARLIDRPIRPLFPEGFVNEVQVIATVVSVNPQVNPDIVAMIGASAALSLSGIPFNGPIGAARVGYINDQYVLNPTQDELKESKLDLVVAGTEAAVLMVESEAQLLSEDQMLGAVVFGHEQQQVVIQNINELVKEAGKPRWDWQPEPVNEALNARVAALAEARLSDAYRITDKQERYAQVDVIKSETIATLLAEDETLDENELGEILHAIEKNVVRSRVLAGEPRIDGREKDMIRGLDVRTGVLPRTHGSALFTRGETQALVTATLGTARDAQVLDELMGERTDTFLFHYNFPPYSVGETGMVGSPKRREIGHGRLAKRGVLAVMPDMDKFPYTVRVVSEITESNGSSSMASVCGASLALMDAGVPIKAAVAGIAMGLVKEGDNYVVLSDILGDEDHLGDMDFKVAGSRDGISALQMDIKIEGITKEIMQVALNQAKGARLHILGVMEQAINAPRGDISEFAPRIHTIKINPDKIKDVIGKGGSVIRALTEETGTTIEIEDDGTVKIAATDGEKAKHAIRRIEEITAEIEVGRVYTGKVTRIVDFGAFVAIGGGKEGLVHISQIADKRVEKVTDYLQMGQEVPVKVLEVDRQGRIRLSIKEATEQSQPAAAPEAPAAEQGE",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P05055"
         },
         "label":"pnp_ecoli"
      },
      {
         "object":"interactor",
         "id":"46",
         "sequence":"MSKTHLTEQKFSDFALHPKVVEALEKKGFHNCTPIQALALPLTLAGRDVAGQAQTGTGKTMAFLTSTFHYLLSHPAIADRKVNQPRALIMAPTRELAVQIHADAEPLAEATGLKLGLAYGGDGYDKQLKVLESGVDILIGTTGRLIDYAKQNHINLGAIQVVVLDEADRMYDLGFIKDIRWLFRRMPPANQRLNMLFSATLSYRVRELAFEQMNNAEYIEVEPEQKTGHRIKEELFYPSNEEKMRLLQTLIEEEWPDRAIIFANTKHRCEEIWGHLAADGHRVGLLTGDVAQKKRLRILDEFTRGDLDILVATDVAARGLHIPAVTHVFNYDLPDDCEDYVHRIGRTGRAGASGHSISLACEEYALNLPAIETYIGHSIPVSKYNPDALMTDLPKPLRLTRPRTGNGPRRTGAPRNRRRSG",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0A8J8"
         },
         "label":"rhlb_ecoli"
      },
      {
         "object":"interaction",
         "id":"47",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intact",
               "id":"EBI-1169250"
            }
         ],
         "participants":[
            {
               "interactorRef":"43",
               "stoichiometry":"12",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"48",
                     "name":"rhlb binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "628-843"
                     ],
                     "linkedFeatures":[
                        "49"
                     ]
                  },
                  {
                     "id":"50",
                     "name":"pnp binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1021-1061"
                     ],
                     "linkedFeatures":[
                        "51"
                     ]
                  },
                  {
                     "id":"52",
                     "name":"enolase binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "839-850"
                     ],
                     "linkedFeatures":[
                        "53"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"44",
               "stoichiometry":"16",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"53",
                     "name":"region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "2-432"
                     ],
                     "linkedFeatures":[
                        "52"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"45",
               "stoichiometry":"12",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"51",
                     "name":"region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-711"
                     ],
                     "linkedFeatures":[
                        "50"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"46",
               "stoichiometry":"8",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"49",
                     "name":"region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "2-421"
                     ],
                     "linkedFeatures":[
                        "48"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"54",
         "sequence":"MKKRKTVKKRYVIALVIVIAGLITLWRILNAPVPTYQTLIVRPGDLQQSVLATGKLDALRKVDVGAQVSGQLKTLSVAIGDKVKKDQLLGVIDPEQAENQIKEVEATLMELRAQRQQAEAELKLARVTYSRQQRLAQTKAVSQQDLDTAATEMAVKQAQIGTIDAQIKRNQASLDTAKTNLDYTRIVAPMAGEVTQITTLQGQTVIAAQQAPNILTLADMSAMLVKAQVSEADVIHLKPGQKAWFTVLGDPLTRYEGQIKDVLPTPEKVNDAIFYYARFEVPNPNGLLRLDMTAQVHIQLTDVKNVLTIPLSALGDPVGDNRYKVKLLRNGETREREVTIGARNDTDVEIVKGLEAGDEVVIGEAKPGAAQ",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P75830"
         },
         "label":"maca_ecoli"
      },
      {
         "object":"interactor",
         "id":"55",
         "sequence":"MTPLLELKDIRRSYPAGDEQVEVLKGISLDIYAGEMVAIVGASGSGKSTLMNILGCLDKATSGTYRVAGQDVATLDADALAQLRREHFGFIFQRYHLLSHLTAEQNVEVPAVYAGLERKQRLLRAQELLQRLGLEDRTEYYPAQLSGGQQQRVSIARALMNGGQVILADEPTGALDSHSGEEVMAILHQLRDRGHTVIIVTHDPQVAAQAERVIEIRDGEIVRNPPAIEKVNVTGGTEPVVNTVSGWRQFVSGFNEALTMAWRALAANKMRTLLTMLGIIIGIASVVSIVVVGDAAKQMVLADIRSIGTNTIDVYPGKDFGDDDPQYQQALKYDDLIAIQKQPWVASATPAVSQNLRLRYNNVDVAASANGVSGDYFNVYGMTFSEGNTFNQEQLNGRAQVVVLDSNTRRQLFPHKADVVGEVILVGNMPARVIGVAEEKQSMFGSSKVLRVWLPYSTMSGRVMGQSWLNSITVRVKEGFDSAEAEQQLTRLLSLRHGKKDFFTWNMDGVLKTVEKTTRTLQLFLTLVAVISLVVGGIGVMNIMLVSVTERTREIGIRMAVGARASDVLQQFLIEAVLVCLVGGALGITLSLLIAFTLQLFLPGWEIGFSPLALLLAFLCSTVTGILFGWLPARNAARLDPVDALARE",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P75831"
         },
         "label":"macb_ecoli"
      },
      {
         "object":"interactor",
         "id":"56",
         "sequence":"MKKLLPILIGLSLSGFSSLSQAENLMQVYQQARLSNPELRKSAADRDAAFEKINEARSPLLPQLGLGADYTYSNGYRDANGINSNATSASLQLTQSIFDMSKWRALTLQEKAAGIQDVTYQTDQQTLILNTATAYFNVLNAIDVLSYTQAQKEAIYRQLDQTTQRFNVGLVAITDVQNARAQYDTVLANEVTARNNLDNAVEQLRQITGNYYPELAALNVENFKTDKPQPVNALLKEAEKRNLSLLQARLSQDLAREQIRQAQDGHLPTLDLTASTGISDTSYSGSKTRGAAGTQYDDSNMGQNKVGLSFSLPIYQGGMVNSQVKQAQYNFVGASEQLESAHRSVVQTVRSSFNNINASISSINAYKQAVVSAQSSLDAMEAGYSVGTRTIVDVLDATTTLYNAKQELANARYNYLINQLNIKSALGTLNEQDLLALNNALSKPVSTNPENVAPQTPEQNAIADGYAPDSPAPVVQQTSARTTTSNGHNPFRN",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P02930"
         },
         "label":"tolc_ecoli"
      },
      {
         "object":"interaction",
         "id":"57",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"wwpdb",
               "id":"3fpp"
            },
            {
               "db":"wwpdb",
               "id":"1ek9"
            },
            {
               "db":"intact",
               "id":"EBI-8761276"
            },
            {
               "db":"intenz",
               "id":"EC 3.6.3.44"
            }
         ],
         "participants":[
            {
               "interactorRef":"7",
               "bioRole":{
                  "id":"MI:0502",
                  "name":"enzyme target"
               },
               "bindingSites":[
                  {
                     "id":"58",
                     "name":"macb binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "59"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"54",
               "stoichiometry":"6",
               "bioRole":{
                  "id":"MI:0684",
                  "name":"ancillary"
               },
               "bindingSites":[
                  {
                     "id":"60",
                     "name":"macb binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "21-371"
                     ],
                     "linkedFeatures":[
                        "61"
                     ]
                  },
                  {
                     "id":"62",
                     "name":"hexamerization region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "42-301"
                     ]
                  },
                  {
                     "id":"63",
                     "name":"tolc binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "21-371"
                     ],
                     "linkedFeatures":[
                        "64"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"55",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"61",
                     "name":"maca binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-648"
                     ],
                     "linkedFeatures":[
                        "60"
                     ]
                  },
                  {
                     "id":"59",
                     "name":"atp binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-648"
                     ],
                     "linkedFeatures":[
                        "58"
                     ]
                  },
                  {
                     "id":"65",
                     "name":"dimerization region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-648"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"56",
               "stoichiometry":"3",
               "bioRole":{
                  "id":"MI:0684",
                  "name":"ancillary"
               },
               "bindingSites":[
                  {
                     "id":"66",
                     "name":"trimerization region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "23-450"
                     ]
                  },
                  {
                     "id":"64",
                     "name":"maca binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-493"
                     ],
                     "linkedFeatures":[
                        "63"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"67",
         "sequence":"MAYSVQKSRLAKVAGVSLVLLLAACSSDSRYKRQVSGDEAYLEAAPLAELHAPAGMILPVTSGDYAIPVTNGSGAVGKALDIRPPAQPLALVSGARTQFTGDTASLLVENGRGNTLWPQVVSVLQAKNYTITQRDDAGQTLTTDWVQWNRLDEDEQYRGRYQISVKPQGYQQAVTVKLLNLEQAGKPVADAASMQRYSTEMMNVISAGLDKSATDAANAAQNRASTTMDVQSAADDTGLPMLVVRGPFNVVWQRLPAALEKVGMKVTDSTRSQGNMAVTYKPLSDSDWQELGASDPGLASGDYKLQVGDLDNRSSLQFIDPKGHTLTQSQNDALVAVFQAAFSK",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0A903"
         },
         "label":"bamc_ecoli"
      },
      {
         "object":"interactor",
         "id":"68",
         "sequence":"MTRMKYLVAAATLSLFLAGCSGSKEEVPDNPPNEIYATAQQKLQDGNWRQAITQLEALDNRYPFGPYSQQVQLDLIYAYYKNADLPLAQAAIDRFIRLNPTHPNIDYVMYMRGLTNMALDDSALQGFFGVDRSDRDPQHARAAFSDFSKLVRGYPNSQYTTDATKRLVFLKDRLAKYEYSVAEYYTERGAWVAVVNRVEGMLRDYPDTQATRDALPLMENAYRQMQMNAQAEKVAKIIAANSSNT",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0AC02"
         },
         "label":"bamd_ecoli"
      },
      {
         "object":"interactor",
         "id":"69",
         "sequence":"MRCKTLTAAAAVLLMLTAGCSTLERVVYRPDINQGNYLTANDVSKIRVGMTQQQVAYALGTPLMSDPFGTNTWFYVFRQQPGHEGVTQQTLTLTFNSSGVLTNIDNKPALSGN",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0A937"
         },
         "label":"bame_ecoli"
      },
      {
         "object":"interactor",
         "id":"70",
         "sequence":"MAMKKLLIASLLFSSATVYGAEGFVVKDIHFEGLQRVAVGAALLSMPVRTGDTVNDEDISNTIRALFATGNFEDVRVLRDGDTLLVQVKERPTIASITFSGNKSVKDDMLKQNLEASGVRVGESLDRTTIADIEKGLEDFYYSVGKYSASVKAVVTPLPRNRVDLKLVFQEGVSAEIQQINIVGNHAFTTDELISHFQLRDEVPWWNVVGDRKYQKQKLAGDLETLRSYYLDRGYARFNIDSTQVSLTPDKKGIYVTVNITEGDQYKLSGVEVSGNLAGHSAEIEQLTKIEPGELYNGTKVTKMEDDIKKLLGRYGYAYPRVQSMPEINDADKTVKLRVNVDAGNRFYVRKIRFEGNDTSKDAVLRREMRQMEGAWLGSDLVDQGKERLNRLGFFETVDTDTQRVPGSPDQVDVVYKVKERNTGSFNFGIGYGTESGVSFQAGVQQDNWLGTGYAVGINGTKNDYQTYAELSVTNPYFTVDGVSLGGRLFYNDFQADDADLSDYTNKSYGTDVTLGFPINEYNSLRAGLGYVHNSLSNMQPQVAMWRYLYSMGEHPSTSDQDNSFKTDDFTFNYGWTYNKLDRGYFPTDGSRVNLTGKVTIPGSDNEYYKVTLDTATYVPIDDDHKWVVLGRTRWGYGDGLGGKEMPFYENFYAGGSSTVRGFQSNTIGPKAVYFPHQASNYDPDYDYECATQDGAKDLCKSDDAVGGNAMAVASLEFITPTPFISDKYANSVRTSFFWDMGTVWDTNWDSSQYSGYPDYSDPSNIRMSAGIALQWMSPLGPLVFSYAQPFKKYDGDKAEQFQFNIGKTW",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0A940"
         },
         "label":"bama_ecoli"
      },
      {
         "object":"interactor",
         "id":"71",
         "sequence":"MQLRKLLLPGLLSVTLLSGCSLFNSEEDVVKMSPLPTVENQFTPTTAWSTSVGSGIGNFYSNLHPALADNVVYAADRAGLVKALNADDGKEIWSVSLAEKDGWFSKEPALLSGGVTVSGGHVYIGSEKAQVYALNTSDGTVAWQTKVAGEALSRPVVSDGLVLIHTSNGQLQALNEADGAVKWTVNLDMPSLSLRGESAPTTAFGAAVVGGDNGRVSAVLMEQGQMIWQQRISQATGSTEIDRLSDVDTTPVVVNGVVFALAYNGNLTALDLRSGQIMWKRELGSVNDFIVDGNRIYLVDQNDRVMALTIDGGVTLWTQSDLLHRLLTSPVLYNGNLVVGDSEGYLHWINVEDGRFVAQQKVDSSGFQTEPVAADGKLLIQAKDGTVYSITR",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P77774"
         },
         "label":"bamb_ecoli"
      },
      {
         "object":"interaction",
         "id":"72",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intact",
               "id":"EBI-6397527"
            }
         ],
         "participants":[
            {
               "interactorRef":"67",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"73",
                     "name":"bama binding",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-344"
                     ],
                     "linkedFeatures":[
                        "74"
                     ]
                  },
                  {
                     "id":"75",
                     "name":"bamd binding",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-344"
                     ],
                     "linkedFeatures":[
                        "76"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"68",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"77",
                     "name":"bama binding",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-245"
                     ],
                     "linkedFeatures":[
                        "78"
                     ]
                  },
                  {
                     "id":"76",
                     "name":"bamc binding",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-245"
                     ],
                     "linkedFeatures":[
                        "75"
                     ]
                  },
                  {
                     "id":"79",
                     "name":"bame binding",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-245"
                     ],
                     "linkedFeatures":[
                        "80"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"69",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"81",
                     "name":"bama binding",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-113"
                     ],
                     "linkedFeatures":[
                        "82"
                     ]
                  },
                  {
                     "id":"80",
                     "name":"bamd binding",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-113"
                     ],
                     "linkedFeatures":[
                        "79"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"70",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"78",
                     "name":"bamd binding",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-810"
                     ],
                     "linkedFeatures":[
                        "77"
                     ]
                  },
                  {
                     "id":"83",
                     "name":"bamb binding",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-810"
                     ],
                     "linkedFeatures":[
                        "84"
                     ]
                  },
                  {
                     "id":"74",
                     "name":"bamc binding",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-810"
                     ],
                     "linkedFeatures":[
                        "73"
                     ]
                  },
                  {
                     "id":"82",
                     "name":"bame binding",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-810"
                     ],
                     "linkedFeatures":[
                        "81"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"71",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"84",
                     "name":"bama binding",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-392"
                     ],
                     "linkedFeatures":[
                        "83"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"85",
         "sequence":"MQVLPPSSTGGPSRLFIMRPVATTLLMVAILLAGIIGYRALPVSALPEVDYPTIQVVTLYPGASPDVMTSAVTAPLERQFGQMSGLKQMSSQSSGGASVITLQFQLTLPLDVAEQEVQAAINAATNLLPSDLPNPPVYSKVNPADPPIMTLAVTSTAMPMTQVEDMVETRVAQKISQISGVGLVTLSGGQRPAVRVKLNAQAIAALGLTSETVRTAITGANVNSAKGSLDGPSRAVTLSANDQMQSAEEYRQLIIAYQNGAPIRLGDVATVEQGAENSWLGAWANKEQAIVMNVQRQPGANIISTADSIRQMLPQLTESLPKSVKVTVLSDRTTNIRASVDDTQFELMMAIALVVMIIYLFLRNIPATIIPGVAVPLSLIGTFAVMVFLDFSINNLTLMALTIATGFVVDDAIVVIENISRYIEKGEKPLAAALKGAGEIGFTIISLTFSLIAVLIPLLFMGDIVGRLFREFAITLAVAILISAVVSLTLTPMMCARMLSQESLRKQNRFSRASEKMFDRIIAAYGRGLAKVLNHPWLTLSVALSTLLLSVLLWVFIPKGFFPVQDNGIIQGTLQAPQSSSFANMAQRQRQVADVILQDPAVQSLTSFVGVDGTNPSLNSARLQINLKPLDERDDRVQKVIARLQTAVDKVPGVDLFLQPTQDLTIDTQVSRTQYQFTLQATSLDALSTWVPQLMEKLQQLPQLSDVSSDWQDKGLVAYVNVDRDSASRLGISMADVDNALYNAFGQRLISTIYTQANQYRVVLEHNTENTPGLAALDTIRLTSSDGGVVPLSSIAKIEQRFAPLSINHLDQFPVTTISFNVPDNYSLGDAVQAIMDTEKTLNLPVDITTQFQGSTLAFQSALGSTVWLIVAAVVAMYIVLGILYESFIHPITILSTLPTAGVGALLALLIAGSELDVIAIIGIILLIGIVKKNAIMMIDFALAAEREQGMSPREAIYQACLLRFRPILMTTLAALLGALPLMLSTGVGAELRRPLGIGMVGGLIVSQVLTLFTTPVIYLLFDRLALWTKSRFARHEEEA",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P76398"
         },
         "label":"mdtb_ecoli"
      },
      {
         "object":"interactor",
         "id":"86",
         "sequence":"MKFFALFIYRPVATILLSVAITLCGILGFRMLPVAPLPQVDFPVIIVSASLPGASPETMASSVATPLERSLGRIAGVSEMTSSSSLGSTRIILQFDFDRDINGAARDVQAAINAAQSLLPSGMPSRPTYRKANPSDAPIMILTLTSDTYSQGELYDFASTQLAPTISQIDGVGDVDVGGSSLPAVRVGLNPQALFNQGVSLDDVRTAVSNANVRKPQGALEDGTHRWQIQTNDELKTAAEYQPLIIHYNNGGAVRLGDVATVTDSVQDVRNAGMTNAKPAILLMIRKLPEANIIQTVDSIRAKLPELQETIPAAIDLQIAQDRSPTIRASLEEVEQTLIISVALVILVVFLFLRSGRATIIPAVSVPVSLIGTFAAMYLCGFSLNNLSLMALTIATGFVVDDAIVVLENIARHLEAGMKPLQAALQGTREVGFTVLSMSLSLVAVFLPLLLMGGLPGRLLREFAVTLSVAIGISLLVSLTLTPMMCGWMLKASKPREQKRLRGFGRMLVALQQGYGKSLKWVLNHTRLVGVVLLGTIALNIWLYISIPKTFFPEQDTGVLMGGIQADQSISFQAMRGKLQDFMKIIRDDPAVDNVTGFTGGSRVNSGMMFITLKPRDERSETAQQIIDRLRVKLAKEPGANLFLMAVQDIRVGGRQSNASYQYTLLSDDLAALREWEPKIRKKLATLPELADVNSDQQDNGAEMNLVYDRDTMARLGIDVQAANSLLNNAFGQRQISTIYQPMNQYKVVMEVDPRYTQDISALEKMFVINNEGKAIPLSYFAKWQPANAPLSVNHQGLSAASTISFNLPTGKSLSDASAAIDRAMTQLGVPSTVRGSFAGTAQVFQETMNSQVILIIAAIATVYIVLGILYESYVHPLTILSTLPSAGVGALLALELFNAPFSLIALIGIMLLIGIVKKNAIMMVDFALEAQRHGNLTPQEAIFQACLLRFRPIMMTTLAALFGALPLVLSGGDGSELRQPLGITIVGGLVMSQLLTLYTTPVVYLFFDRLRLRFSRKPKQTVTE",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P76399"
         },
         "label":"mdtc_ecoli"
      },
      {
         "object":"interaction",
         "id":"87",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intact",
               "id":"EBI-8787893"
            }
         ],
         "participants":[
            {
               "interactorRef":"85",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"88",
                     "name":"mdtc binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-1040"
                     ],
                     "linkedFeatures":[
                        "89"
                     ]
                  },
                  {
                     "id":"90",
                     "name":"dimerisation domain",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-1040"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"86",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"89",
                     "name":"mdtb binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-1025"
                     ],
                     "linkedFeatures":[
                        "88"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"91",
         "sequence":"MRWYPWLRPDFEKLVASYQAGRGHHALLIQALPGMGDDALIYALSRYLLCQQPQGHKSCGHCRGCQLMQAGTHPDYYTLAPEKGKNTLGVDAVREVTEKLNEHARLGGAKVVWVTDAALLTDAAANALLKTLEEPPAETWFFLATREPERLLATLRSRCRLHYLAPPPEQYAVTWLSREVTMSQDALLAALRLSAGSPGAALALFQGDNWQARETLCQALAYSVPSGDWYSLLAALNHEQAPARLHWLATLLMDALKRHHGAAQVTNVDVPGLVAELANHLSPSRLQAILGDVCHIREQLMSVTGINRELLITDLLLRIEHYLQPGVVLPVPHL",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P28631"
         },
         "label":"holb_ecoli"
      },
      {
         "object":"interactor",
         "id":"92",
         "sequence":"MKNATFYLLDNDTTVDGLSAVEQLVCEIAAERWRSGKRVLIACEDEKQAYRLDEALWARPAESFVPHNLAGEGPRGGAPVEIAWPQKRSSSRRDILISLRTSFADFATAFTEVVDFVPYEDSLKQLARERYKAYRVAGFNLNTATWK",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P28905"
         },
         "label":"holc_ecoli"
      },
      {
         "object":"interactor",
         "id":"93",
         "sequence":"MSYQVLARKWRPQTFADVVGQEHVLTALANGLSLGRIHHAYLFSGTRGVGKTSIARLLAKGLNCETGITATPCGVCDNCREIEQGRFVDLIEIDAASRTKVEDTRDLLDNVQYAPARGRFKVYLIDEVHMLSRHSFNALLKTLEEPPEHVKFLLATTDPQKLPVTILSRCLQFHLKALDVEQIRHQLEHILNEEHIAHEPRALQLLARAAEGSLRDALSLTDQAIASGDGQVSTQAVSAMLGTLDDDQALSLVEAMVEANGERVMALINEAAARGIEWELLVEMLGLLHRIAMVQLSPAALGNDMAAIELRMRELARTIPPTDIQLYYQTLLIGRKELPYAPDRRMGVEMTLLRALAFHPRMPLPEPEVPRQSFAPVAPTAVMTPTQVPPQPQSAPQQAPTVPLPETTSQVLAARQQQRVQGATKAKKE",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"intact",
            "id":"EBI-2604194"
         },
         "label":"p06710-2"
      },
      {
         "object":"interactor",
         "id":"94",
         "sequence":"MTSRRDWQLQQLGITQWSLRRPGALQGEIAIAIPAHVRLVMVANDLPALTDPLVSDVLRALTVSPDQVLQLTPEKIAMLPQGSHCNSWRLGTDEPLSLEGAQVASPALTDLRANPTARAALWQQICTYEHDFFPRND",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P28632"
         },
         "label":"hold_ecoli"
      },
      {
         "object":"interactor",
         "id":"95",
         "sequence":"MIRLYPEQLRAQLNEGLRAAYLLLGNDPLLLQESQDAVRQVAAAQGFEEHHTFSIDPNTDWNAIFSLCQAMSLFASRQTLLLLLPENGPNAAINEQLLTLTGLLHDDLLLIVRGNKLSKAQENAAWFTALANRSVQVTCQTPEQAQLPRWVAARAKQLNLELDDAANQVLCYCYEGNLLALAQALERLSLLWPDGKLTLPRVEQAVNDAAHFTPFHWVDALLMGKSKRALHILQQLRLEGSEPVILLRTLQRELLLLVNLKRQSAHTPLRALFDKHRVWQNRRGMMGEALNRLSQTQLRQAVQLLTRTELTLKQDYGQSVWAELEGLSLLLCHKPLADVFIDG",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P28630"
         },
         "label":"hola_ecoli"
      },
      {
         "object":"interactor",
         "id":"96",
         "sequence":"MSYQVLARKWRPQTFADVVGQEHVLTALANGLSLGRIHHAYLFSGTRGVGKTSIARLLAKGLNCETGITATPCGVCDNCREIEQGRFVDLIEIDAASRTKVEDTRDLLDNVQYAPARGRFKVYLIDEVHMLSRHSFNALLKTLEEPPEHVKFLLATTDPQKLPVTILSRCLQFHLKALDVEQIRHQLEHILNEEHIAHEPRALQLLARAAEGSLRDALSLTDQAIASGDGQVSTQAVSAMLGTLDDDQALSLVEAMVEANGERVMALINEAAARGIEWEALLVEMLGLLHRIAMVQLSPAALGNDMAAIELRMRELARTIPPTDIQLYYQTLLIGRKELPYAPDRRMGVEMTLLRALAFHPRMPLPEPEVPRQSFAPVAPTAVMTPTQVPPQPQSAPQQAPTVPLPETTSQVLAARQQLQRVQGATKAKKSEPAAATRARPVNNAALERLASVTDRVQARPVPSALEKAPAKKEAYRWKATTPVMQQKEVVATPKALKKALEHEKTPELAAKLAAEAIERDPWAAQVSQLSLPKLVEQVALNAWKEESDNAVCLHLRSSQRHLNNRGAQQKLAEALSMLKGSTVELTIVEDDNPAVRTPLEWRQAIYEEKLAQARESIIADNNIQTLRRFFDAELDEESIRPI",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P06710-1"
         },
         "label":"p06710-1"
      },
      {
         "object":"interaction",
         "id":"97",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"wwpdb",
               "id":"3glh"
            },
            {
               "db":"wwpdb",
               "id":"3gli"
            },
            {
               "db":"wwpdb",
               "id":"3glf"
            },
            {
               "db":"intact",
               "id":"EBI-6467993"
            },
            {
               "db":"wwpdb",
               "id":"1em8"
            },
            {
               "db":"wwpdb",
               "id":"1jqj"
            },
            {
               "db":"wwpdb",
               "id":"1jql"
            },
            {
               "db":"wwpdb",
               "id":"1jre"
            },
            {
               "db":"intenz",
               "id":"EC 2.7.7.7"
            }
         ],
         "participants":[
            {
               "interactorRef":"7",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               }
            },
            {
               "interactorRef":"91",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"98",
                     "name":"gamma binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "207-334"
                     ],
                     "linkedFeatures":[
                        "99"
                     ]
                  },
                  {
                     "id":"100",
                     "name":"tau binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "207-334"
                     ],
                     "linkedFeatures":[
                        "101"
                     ]
                  },
                  {
                     "id":"102",
                     "name":"delta binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "207-334"
                     ],
                     "linkedFeatures":[
                        "103"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"92",
               "stoichiometry":"4",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"104",
                     "name":"ssb binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-147"
                     ]
                  },
                  {
                     "id":"105",
                     "name":"psi binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-79"
                     ],
                     "linkedFeatures":[
                        "106"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"93",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"99",
                     "name":"delta' binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "221-382"
                     ],
                     "linkedFeatures":[
                        "98"
                     ]
                  },
                  {
                     "id":"107",
                     "name":"tau binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "221-382"
                     ],
                     "linkedFeatures":[
                        "108"
                     ]
                  },
                  {
                     "id":"109",
                     "name":"delta binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "221-382"
                     ],
                     "linkedFeatures":[
                        "110"
                     ]
                  },
                  {
                     "id":"111",
                     "name":"psi binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "221-382"
                     ],
                     "linkedFeatures":[
                        "112"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"94",
               "stoichiometry":"4",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"106",
                     "name":"chi binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "57-57",
                        "121-125"
                     ],
                     "linkedFeatures":[
                        "105"
                     ]
                  },
                  {
                     "id":"112",
                     "name":"gamma\/tau binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "2-28"
                     ],
                     "linkedFeatures":[
                        "111"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"95",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"110",
                     "name":"gamma binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "207-343"
                     ],
                     "linkedFeatures":[
                        "109"
                     ]
                  },
                  {
                     "id":"113",
                     "name":"tau binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "207-343"
                     ],
                     "linkedFeatures":[
                        "114"
                     ]
                  },
                  {
                     "id":"115",
                     "name":"beta binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "60-74"
                     ]
                  },
                  {
                     "id":"103",
                     "name":"delta' binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "207-343"
                     ],
                     "linkedFeatures":[
                        "102"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"96",
               "stoichiometry":"3",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"101",
                     "name":"delta' binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "222-382"
                     ],
                     "linkedFeatures":[
                        "100"
                     ]
                  },
                  {
                     "id":"108",
                     "name":"gamma binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "222-382"
                     ],
                     "linkedFeatures":[
                        "107"
                     ]
                  },
                  {
                     "id":"116",
                     "name":"tau (self-)binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "222-382"
                     ]
                  },
                  {
                     "id":"117",
                     "name":"alpha binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "497-643"
                     ]
                  },
                  {
                     "id":"118",
                     "name":"dnab binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "430-496"
                     ]
                  },
                  {
                     "id":"114",
                     "name":"delta binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "222-382"
                     ],
                     "linkedFeatures":[
                        "113"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interaction",
         "id":"119",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"wwpdb",
               "id":"1em8"
            },
            {
               "db":"intact",
               "id":"EBI-6858099"
            },
            {
               "db":"wwpdb",
               "id":"3sxu"
            }
         ],
         "participants":[
            {
               "interactorRef":"92",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"120",
                     "name":"ssb binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-147"
                     ]
                  },
                  {
                     "id":"121",
                     "name":"psi binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-79"
                     ],
                     "linkedFeatures":[
                        "122"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"94",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"122",
                     "name":"chi binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "121-125",
                        "57-57"
                     ],
                     "linkedFeatures":[
                        "121"
                     ]
                  },
                  {
                     "id":"123",
                     "name":"gamma\/tau binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "2-28"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"124",
         "sequence":"MSTAITRQIVLDTETTGMNQIGAHYEGHKIIEIGAVEVVNRRLTGNNFHVYLKPDRLVDPEAFGVHGIADEFLLDKPTFAEVADEFMDYIRGAELVIHNAAFDIGFMDYEFSLLKRDIPKTNTFCKVTDSLAVARKMFPGKRNSLDALCARYEIDNSKRTLHGALLDAQILAEVYLAMTGGQTSMAFAMEGETQQQQGEATIQRIVRQASKLRVVFATDEEIAAHEARLDLVQKKGGSCLWRA",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P03007"
         },
         "label":"dpo3e_ecoli"
      },
      {
         "object":"interactor",
         "id":"125",
         "sequence":"MSEPRFVHLRVHSDYSMIDGLAKTAPLVKKAAALGMPALAITDFTNLCGLVKFYGAGHGAGIKPIVGADFNVQCDLLGDELTHLTVLAANNTGYQNLTLLISKAYQRGYGAAGPIIDRDWLIELNEGLILLSGGRMGDVGRSLLRGNSALVDECVAFYEEHFPDRYFLELIRTGRPDEESYLHAAVELAEARGLPVVATNDVRFIDSSDFDAHEIRVAIHDGFTLDDPKRPRNYSPQQYMRSEEEMCELFADIPEALANTVEIAKRCNVTVRLGEYFLPQFPTGDMSTEDYLVKRAKEGLEERLAFLFPDEEERLKRRPEYDERLETELQVINQMGFPGYFLIVMEFIQWSKDNGVPVGPGRGSGAGSLVAYALKITDLDPLEFDLLFERFLNPERVSMPDFDVDFCMEKRDQVIEHVADMYGRDAVSQIITFGTMAAKAVIRDVGRVLGHPYGFVDRISKLIPPDPGMTLAKAFEAEPQLPEIYEADEEVKALIDMARKLEGVTRNAGKHAGGVVIAPTKITDFAPLYCDEEGKHPVTQFDKSDVEYAGLVKFDFLGLRTLTIINWALEMINKRRAKNGEPPLDIAAIPLDDKKSFDMLQRSETTAVFQLESRGMKDLIKRLQPDCFEDMIALVALFRPGPLQSGMVDNFIDRKHGREEISYPDVQWQHESLKPVLEPTYGIILYQEQVMQIAQVLSGYTLGGADMLRRAMGKKKPEEMAKQRSVFAEGAEKNGINAELAMKIFDLVEKFAGYGFNKSHSAAYALVSYQTLWLKAHYPAEFMAAVMTADMDNTEKVVGLVDECWRMGLKILPPDINSGLYHFHVNDDGEIVYGIGAIKGVGEGPIEAIIEARNKGGYFRELFDLCARTDTKKLNRRVLEKLIMSGAFDRLGPHRAALMNSLGDALKAADQHAKAEAIGQADMFGVLAEEPEQIEQSYASCQPWPEQVVLDGERETLGLYLTGHPINQYLKEIERYVGGVRLKDMHPTERGKVITAAGLVVAARVMVTKRGNRIGICTLDDRSGRLEVMLFTDALDKYQQLLEKDRILIVSGQVSFDDFSGGLKMTAREVMDIDEAREKYARGLAISLTDRQIDDQLLNRLRQSLEPHRSGTIPVHLYYQRADARARLRFGATWRVSPSDRLLNDLRGLIGSEQVELEFD",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P10443"
         },
         "label":"dpo3a_ecoli"
      },
      {
         "object":"interactor",
         "id":"126",
         "sequence":"MLKNLAKLDQTEMDKVNVDLAAAGVAFKERYNMPVIAEAVEREQPEHLRSWFRERLIAHRLASVNLSRLPYEPKLK",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0ABS8"
         },
         "label":"hole_ecoli"
      },
      {
         "object":"interaction",
         "id":"127",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intenz",
               "id":"2.7.7.7"
            },
            {
               "db":"intact",
               "id":"EBI-6467979"
            }
         ],
         "participants":[
            {
               "interactorRef":"124",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"128",
                     "name":"theta binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-186"
                     ],
                     "linkedFeatures":[
                        "129"
                     ]
                  },
                  {
                     "id":"130",
                     "name":"alpha binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-243"
                     ],
                     "linkedFeatures":[
                        "131"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"125",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"132",
                     "name":"beta binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-1160"
                     ]
                  },
                  {
                     "id":"131",
                     "name":"epsilon binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-1160"
                     ],
                     "linkedFeatures":[
                        "130"
                     ]
                  },
                  {
                     "id":"133",
                     "name":"tau binding region",
                     "type":{
                        "id":"MI:0429",
                        "name":"necessary binding region"
                     },
                     "sequenceData":[
                        "1112-1160"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"126",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"129",
                     "name":"epsilon binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-76"
                     ],
                     "linkedFeatures":[
                        "128"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"134",
         "sequence":"MKFTVEREHLLKPLQQVSGPLGGRPTLPILGNLLLQVADGTLSLTGTDLEMEMVARVALVQPHEPGATTVPARKFFDICRGLPEGAEIAVQLEGERMLVRSGRSRFSLSTLPAADFPNLDDWQSEVEFTLPQATMKRLIEATQFSMAHQDVRYYLNGMLFETEGEELRTVATDGHRLAVCSMPIGQSLPSHSVIVPRKGVIELMRMLDGGDNPLRVQIGSNNIRAHVGDFIFTSKLVDGRFPDYRRVLPKNPDKHLEAGCDLLKQAFARAAILSNEKFRGVRLYVSENQLKITANNPEQEEAEEILDVTYSGAEMEIGFNVSYVLDVLNALKCENVRMMLTDSVSSVQIEDAASQSAAYVVMPMRL",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0A988"
         },
         "label":"dpo3b_ecoli"
      },
      {
         "object":"interaction",
         "id":"135",
         "interactionType":{
            "id":"MI:0407",
            "name":"direct interaction"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"wwpdb",
               "id":"1jql"
            },
            {
               "db":"wwpdb",
               "id":"1jqj"
            },
            {
               "db":"intenz",
               "id":"EC 2.7.7.7"
            },
            {
               "db":"wwpdb",
               "id":"2pol"
            },
            {
               "db":"intact",
               "id":"EBI-6468862"
            }
         ],
         "participants":[
            {
               "interactorRef":"134",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"136",
                     "name":"alpha binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-366"
                     ]
                  },
                  {
                     "id":"137",
                     "name":"beta dimerisation",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-125",
                        "272-273"
                     ]
                  },
                  {
                     "id":"138",
                     "name":"delta binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "242-242",
                        "36-36",
                        "362-362",
                        "274-278",
                        "177-177"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"139",
         "sequence":"MAGNKPFNKQQAEPRERDPQVAGLKVPPHSIEAEQSVLGGLMLDNERWDDVAERVVADDFYTRPHRHIFTEMARLQESGSPIDLITLAESLERQGQLDSVGGFAYLAELSKNTPSAANISAYADIVRERAVVREMISVANEIAEAGFDPQGRTSEDLLDLAESRVFKIAESRANKDEGPKNIADVLDATVARIEQLFQQPHDGVTGVNTGYDDLNKKTAGLQPSDLIIVAARPSMGKTTFAMNLVENAAMLQDKPVLIFSLEMPSEQIMMRSLASLSRVDQTKIRTGQLDDEDWARISGTMGILLEKRNIYIDDSSGLTPTEVRSRARRIAREHGGIGLIMIDYLQLMRVPALSDNRTLEIAEISRSLKALAKELNVPVVALSQLNRSLEQRADKRPVNSDLRESGSIEQDADLIMFIYRDEVYHENSDLKGIAEIIIGKQRNGPIGTVRLTFNGQWSRFDNYAGPQYDDE",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0ACB0"
         },
         "label":"dnab_ecoli"
      },
      {
         "object":"interaction",
         "id":"140",
         "interactionType":{
            "id":"MI:0407",
            "name":"direct interaction"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"emdb",
               "id":"EMD-2322"
            },
            {
               "db":"intact",
               "id":"EBI-6554207"
            },
            {
               "db":"intenz",
               "id":"EC 3.6.4.12"
            }
         ],
         "participants":[
            {
               "interactorRef":"7",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"141",
                     "name":"dnab binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "142"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"139",
               "stoichiometry":"6",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"142",
                     "name":"atp binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-471"
                     ],
                     "linkedFeatures":[
                        "141"
                     ]
                  },
                  {
                     "id":"143",
                     "name":"dnag hdb binding region",
                     "type":{
                        "id":"MI:0442",
                        "name":"sufficient binding region"
                     },
                     "sequenceData":[
                        "1-152"
                     ]
                  },
                  {
                     "id":"144",
                     "name":"hexamerisation",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-471"
                     ]
                  },
                  {
                     "id":"145",
                     "name":"dna binding site",
                     "type":{
                        "id":"MI:0442",
                        "name":"sufficient binding region"
                     },
                     "sequenceData":[
                        "186-454"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"146",
         "sequence":"MASRGVNKVILVGNLGQDPEVRYMPNGGAVANITLATSESWRDKATGEMKEQTEWHRVVLFGKLAEVASEYLRKGSQVYIEGQLRTRKWTDQSGQDRYTTEVVVNVGGTMQMLGGRQGGGAPAGGNIGGGQPQGGWGQPQQPQGGNQFSGGAQSRPQQSAPAAPSNEPPMDFDDDIPF",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0AGE0"
         },
         "label":"ssb_ecoli"
      },
      {
         "object":"interaction",
         "id":"147",
         "interactionType":{
            "id":"MI:0407",
            "name":"direct interaction"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"wwpdb",
               "id":"1eyg"
            },
            {
               "db":"intact",
               "id":"EBI-6469511"
            }
         ],
         "participants":[
            {
               "interactorRef":"146",
               "stoichiometry":"4",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"148",
                     "name":"primase binding region",
                     "type":{
                        "id":"MI:0442",
                        "name":"sufficient binding region"
                     },
                     "sequenceData":[
                        "c-c"
                     ]
                  },
                  {
                     "id":"149",
                     "name":"chi binding region",
                     "type":{
                        "id":"MI:0442",
                        "name":"sufficient binding region"
                     },
                     "sequenceData":[
                        "114-178"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"150",
         "sequence":"MTLETAFMLPVQDAQHSFRRLLKAMSEPGVIVALHQLKRGWQPLNIATTSVLLTLADNDTPVWLSTPLNNDIVNQSLRFHTNAPLVSQPEQATFAVTDEAISSEQLNALSTGTAVAPEAGATLILQVASLSGGRMLRLTGAGIAEERMIAPQLPECILHELTERPHPFPLGIDLILTCGERLLAIPRTTHVEVC",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P16686"
         },
         "label":"phnh_ecoli"
      },
      {
         "object":"interaction",
         "id":"151",
         "interactionType":{
            "id":"MI:0407",
            "name":"direct interaction"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"wwpdb",
               "id":"2fsu"
            },
            {
               "db":"intact",
               "id":"EBI-6471348"
            }
         ],
         "participants":[
            {
               "interactorRef":"150",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"152",
                     "name":"n-terminal alpha helix",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "n-n"
                     ],
                     "linkedFeatures":[
                        "153"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"150",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"153",
                     "name":"n-terminal alpha helix",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "n-n"
                     ],
                     "linkedFeatures":[
                        "152"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"154",
         "type":{
            "id":"MI:0328",
            "name":"small molecule"
         },
         "organism":{
            "taxid":"-2",
            "common":"chemical synthesis",
            "scientific":"Chemical synthesis (Chemical synthesis)"
         },
         "identifier":{
            "db":"chebi",
            "id":"CHEBI:18009"
         },
         "label":"nadp+"
      },
      {
         "object":"interactor",
         "id":"155",
         "sequence":"MKQLTILGSTGSIGCSTLDVVRHNPEHFRVVALVAGKNVTRMVEQCLEFSPRYAVMDDEASAKLLKTMLQQQGSRTEVLSGQQAACDMAALEDVDQVMAAIVGAAGLLPTLAAIRAGKTILLANKESLVTCGRLFMDAVKQSKAQLLPVDSEHNAIFQSLPQPIQHNLGYADLEQNGVVSILLTGSGGPFRETPLRDLATMTPDQACRHPNWSMGRKISVDSATMMNKGLEYIEARWLFNASASQMEVLIHPQSVIHSMVRYQDGSVLAQLGEPDMRTPIAHTMAWPNRVNSGVKPLDFCKLSALTFAAPDYDRYPCLKLAMEAFEQGQAATTALNAANEITVAAFLAQQIRFTDIAALNLSVLEKMDMREPQCVDDVLSVDANAREVARKEVMRLAS",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P45568"
         },
         "label":"dxr_ecoli"
      },
      {
         "object":"interaction",
         "id":"156",
         "interactionType":{
            "id":"MI:0407",
            "name":"direct interaction"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"wwpdb",
               "id":"1k5h"
            },
            {
               "db":"wwpdb",
               "id":"1t1s"
            },
            {
               "db":"intact",
               "id":"EBI-6475852"
            },
            {
               "db":"intenz",
               "id":"1.1.1.267"
            }
         ],
         "participants":[
            {
               "interactorRef":"154",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               }
            },
            {
               "interactorRef":"155",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"157",
                     "name":"dimerisation domain",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "150-312"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"158",
         "type":{
            "id":"MI:0328",
            "name":"small molecule"
         },
         "organism":{
            "taxid":"-2",
            "common":"chemical synthesis",
            "scientific":"Chemical synthesis (Chemical synthesis)"
         },
         "identifier":{
            "db":"chebi",
            "id":"CHEBI:36141"
         },
         "label":"quinone"
      },
      {
         "object":"interactor",
         "id":"159",
         "type":{
            "id":"MI:0328",
            "name":"small molecule"
         },
         "organism":{
            "taxid":"-2",
            "common":"chemical synthesis",
            "scientific":"Chemical synthesis (Chemical synthesis)"
         },
         "identifier":{
            "db":"chebi",
            "id":"CHEBI:33739"
         },
         "label":"fe2-s2"
      },
      {
         "object":"interactor",
         "id":"160",
         "type":{
            "id":"MI:0328",
            "name":"small molecule"
         },
         "identifier":{
            "db":"chebi",
            "id":"CHEBI:51381"
         },
         "label":"succinate salt"
      },
      {
         "object":"interactor",
         "id":"161",
         "sequence":"MKLPVREFDAVVIGAGGAGMRAALQISQSGQTCALLSKVFPTRSHTVSAQGGITVALGNTHEDNWEWHMYDTVKGSDYIGDQDAIEYMCKTGPEAILELEHMGLPFSRLDDGRIYQRPFGGQSKNFGGEQAARTAAAADRTGHALLHTLYQQNLKNHTTIFSEWYALDLVKNQDGAVVGCTALCIETGEVVYFKARATVLATGGAGRIYQSTTNAHINTGDGVGMAIRAGVPVQDMEMWQFHPTGIAGAGVLVTEGCRGEGGYLLNKHGERFMERYAPNAKDLAGRDVVARSIMIEIREGRGCDGPWGPHAKLKLDHLGKEVLESRLPGILELSRTFAHVDPVKEPIPVIPTCHYMMGGIPTKVTGQALTVNEKGEDVVVPGLFAVGEIACVSVHGANRLGGNSLLDLVVFGRAAGLHLQESIAEQGALRDASESDVEASLDRLNRWNNNRNGEDPVAIRKALQECMQHNFSVFREGDAMAKGLEQLKVIRERLKNARLDDTSSEFNTQRVECLELDNLMETAYATAVSANFRTESRGAHSRFDFPDRDDENWLCHSLYLPESESMTRRSVNMEPKLRPAFPPKIRTY",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0AC41"
         },
         "label":"sdha_ecoli"
      },
      {
         "object":"interactor",
         "id":"162",
         "sequence":"MRLEFSIYRYNPDVDDAPRMQDYTLEADEGRDMMLLDALIQLKEKDPSLSFRRSCREGVCGSDGLNMNGKNGLACITPISALNQPGKKIVIRPLPGLPVIRDLVVDMGQFYAQYEKIKPYLLNNGQNPPAREHLQMPEQREKLDGLYECILCACCSTSCPSFWWNPDKFIGPAGLLAAYRFLIDSRDTETDSRLDGLSDAFSVFRCHSIMNCVSVCPKGLNPTRAIGHIKSMLLQRNA",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P07014"
         },
         "label":"sdhb_ecoli"
      },
      {
         "object":"interactor",
         "id":"163",
         "sequence":"MVSNASALGRNGVHDFILVRATAIVLTLYIIYMVGFFATSGELTYEVWIGFFASAFTKVFTLLALFSILIHAWIGMWQVLTDYVKPLALRLMLQLVIVVALVVYVIYGFVVVWGV",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0AC44"
         },
         "label":"dhsd_ecoli"
      },
      {
         "object":"interactor",
         "id":"164",
         "sequence":"MIRNVKKQRPVNLDLQTIRFPITAIASILHRVSGVITFVAVGILLWLLGTSLSSPEGFEQASAIMGSFFVKFIMWGILTALAYHVVVGIRHMMMDFGYLEETFEAGKRSAKISFVITVVLSLLAGVLVW",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P69054"
         },
         "label":"dhsc_ecoli"
      },
      {
         "object":"interactor",
         "id":"165",
         "type":{
            "id":"MI:0328",
            "name":"small molecule"
         },
         "identifier":{
            "db":"chebi",
            "id":"CHEBI:16238"
         },
         "label":"fad"
      },
      {
         "object":"interaction",
         "id":"166",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"wwpdb",
               "id":"2wu2"
            },
            {
               "db":"wwpdb",
               "id":"2wp9"
            },
            {
               "db":"wwpdb",
               "id":"2ws3"
            },
            {
               "db":"wwpdb",
               "id":"2acz"
            },
            {
               "db":"wwpdb",
               "id":"2wdr"
            },
            {
               "db":"wwpdb",
               "id":"2wdq"
            },
            {
               "db":"wwpdb",
               "id":"1nek"
            },
            {
               "db":"intact",
               "id":"EBI-6476056"
            },
            {
               "db":"intenz",
               "id":"1.3.5.1"
            },
            {
               "db":"wwpdb",
               "id":"2wu5"
            },
            {
               "db":"wwpdb",
               "id":"2wdv"
            }
         ],
         "participants":[
            {
               "interactorRef":"158",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0580",
                  "name":"electron acceptor"
               },
               "bindingSites":[
                  {
                     "id":"167",
                     "name":"dhsb binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "168"
                     ]
                  },
                  {
                     "id":"169",
                     "name":"dhsd binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "170"
                     ]
                  },
                  {
                     "id":"171",
                     "name":"dhsc binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "172"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"20",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0682",
                  "name":"cofactor"
               },
               "bindingSites":[
                  {
                     "id":"173",
                     "name":"dhsb binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "174"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"21",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0682",
                  "name":"cofactor"
               },
               "bindingSites":[
                  {
                     "id":"175",
                     "name":"dhsb binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "176"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"159",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0682",
                  "name":"cofactor"
               },
               "bindingSites":[
                  {
                     "id":"177",
                     "name":"dhsb binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "178"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"160",
               "stoichiometry":"3",
               "bioRole":{
                  "id":"MI:0579",
                  "name":"electron donor"
               },
               "bindingSites":[
                  {
                     "id":"179",
                     "name":"fad binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "180"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"23",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0682",
                  "name":"cofactor"
               },
               "bindingSites":[
                  {
                     "id":"181",
                     "name":"dhsc binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "182"
                     ]
                  },
                  {
                     "id":"183",
                     "name":"dhsd binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "184"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"161",
               "stoichiometry":"3",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"185",
                     "name":"dhsb binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-588"
                     ],
                     "linkedFeatures":[
                        "186"
                     ]
                  },
                  {
                     "id":"187",
                     "name":"fad binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-588"
                     ],
                     "linkedFeatures":[
                        "188"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"162",
               "stoichiometry":"3",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"189",
                     "name":"dhsd binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-238"
                     ],
                     "linkedFeatures":[
                        "190"
                     ]
                  },
                  {
                     "id":"186",
                     "name":"dhsa binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-238"
                     ],
                     "linkedFeatures":[
                        "185"
                     ]
                  },
                  {
                     "id":"191",
                     "name":"dhsc binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-238"
                     ],
                     "linkedFeatures":[
                        "192"
                     ]
                  },
                  {
                     "id":"178",
                     "name":"fe2-s2 binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-238"
                     ],
                     "linkedFeatures":[
                        "177"
                     ]
                  },
                  {
                     "id":"174",
                     "name":"fe3-s4 binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-238"
                     ],
                     "linkedFeatures":[
                        "173"
                     ]
                  },
                  {
                     "id":"168",
                     "name":"quinone binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-238"
                     ],
                     "linkedFeatures":[
                        "167"
                     ]
                  },
                  {
                     "id":"176",
                     "name":"fe4-s4 binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-238"
                     ],
                     "linkedFeatures":[
                        "175"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"163",
               "stoichiometry":"3",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"190",
                     "name":"dhsb binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-115"
                     ],
                     "linkedFeatures":[
                        "189"
                     ]
                  },
                  {
                     "id":"193",
                     "name":"dhsc binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-115"
                     ],
                     "linkedFeatures":[
                        "194"
                     ]
                  },
                  {
                     "id":"184",
                     "name":"heme binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-115"
                     ],
                     "linkedFeatures":[
                        "183"
                     ]
                  },
                  {
                     "id":"170",
                     "name":"quinone binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-115"
                     ],
                     "linkedFeatures":[
                        "169"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"164",
               "stoichiometry":"3",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"194",
                     "name":"dhsd binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-129"
                     ],
                     "linkedFeatures":[
                        "193"
                     ]
                  },
                  {
                     "id":"192",
                     "name":"dhsb binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-129"
                     ],
                     "linkedFeatures":[
                        "191"
                     ]
                  },
                  {
                     "id":"182",
                     "name":"heme binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-129"
                     ],
                     "linkedFeatures":[
                        "181"
                     ]
                  },
                  {
                     "id":"172",
                     "name":"quinone binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-129"
                     ],
                     "linkedFeatures":[
                        "171"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"165",
               "bioRole":{
                  "id":"MI:0682",
                  "name":"cofactor"
               },
               "bindingSites":[
                  {
                     "id":"188",
                     "name":"sdha binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "187"
                     ]
                  },
                  {
                     "id":"180",
                     "name":"succinate binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "179"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"195",
         "sequence":"MASVQLQNVTKAWGEVVVSKDINLDIHEGEFVVFVGPSGCGKSTLLRMIAGLETITSGDLFIGEKRMNDTPPAERGVGMVFQSYALYPHLSVAENMSFGLKLAGAKKEVINQRVNQVAEVLQLAHLLDRKPKALSGGQRQRVAIGRTLVAEPSVFLLDEPLSNLDAALRVQMRIEISRLHKRLGRTMIYVTHDQVEAMTLADKIVVLDAGRVAQVGKPLELYHYPADRFVAGFIGSPKMNFLPVKVTATAIDQVQVELPMPNRQQVWLPVESRDVQVGANMSLGIRPEHLLPSDIADVILEGEVQVVEQLGNETQIHIQIPSIRQNLVYRQNDVVLVEEGATFAIGLPPERCHLFREDGTACRRLHKEPGV",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P68187"
         },
         "label":"malk_ecoli"
      },
      {
         "object":"interactor",
         "id":"196",
         "type":{
            "id":"MI:0328",
            "name":"small molecule"
         },
         "identifier":{
            "db":"chebi",
            "id":"CHEBI:17306"
         },
         "label":"maltose"
      },
      {
         "object":"interactor",
         "id":"197",
         "sequence":"MDVIKKKHWWQSDALKWSVLGLLGLLVGYLVVLMYAQGEYLFAITTLILSSAGLYIFANRKAYAWRYVYPGMAGMGLFVLFPLVCTIAIAFTNYSSTNQLTFERAQEVLLDRSWQAGKTYNFGLYPAGDEWQLALSDGETGKNYLSDAFKFGGEQKLQLKETTAQPEGERANLRVITQNRQALSDITAILPDGNKVMMSSLRQFSGTQPLYTLDGDGTLTNNQSGVKYRPNNQIGFYQSITADGNWGDEKLSPGYTVTTGWKNFTRVFTDEGIQKPFLAIFVWTVVFSLITVFLTVAVGMVLACLVQWEALRGKAVYRVLLILPYAVPSFISILIFKGLFNQSFGEINMMLSALFGVKPAWFSDPTTARTMLIIVNTWLGYPYMMILCMGLLKAIPDDLYEASAMDGAGPFQNFFKITLPLLIKPLTPLMIASFAFNFNNFVLIQLLTNGGPDRLGTTTPAGYTDLLVNYTYRIAFEGGGGQDFGLAAAIATLIFLLVGALAIVNLKATRMKFD",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P02916"
         },
         "label":"malf_ecoli"
      },
      {
         "object":"interactor",
         "id":"198",
         "sequence":"MKIKTGARILALSALTTMMFSASALAKIEEGKLVIWINGDKGYNGLAEVGKKFEKDTGIKVTVEHPDKLEEKFPQVAATGDGPDIIFWAHDRFGGYAQSGLLAEITPDKAFQDKLYPFTWDAVRYNGKLIAYPIAVEALSLIYNKDLLPNPPKTWEEIPALDKELKAKGKSALMFNLQEPYFTWPLIAADGGYAFKYENGKYDIKDVGVDNAGAKAGLTFLVDLIKNKHMNADTDYSIAEAAFNKGETAMTINGPWAWSNIDTSKVNYGVTVLPTFKGQPSKPFVGVLSAGINAASPNKELAKEFLENYLLTDEGLEAVNKDKPLGAVALKSYEEELAKDPRIAATMENAQKGEIMPNIPQMSAFWYAVRTAVINAASGRQTVDEALKDAQTRITK",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0AEX9"
         },
         "label":"male_ecoli"
      },
      {
         "object":"interactor",
         "id":"199",
         "sequence":"MAMVQPKSQKARLFITHLLLLLFIAAIMFPLLMVVAISLRQGNFATGSLIPEQISWDHWKLALGFSVEQADGRITPPPFPVLLWLWNSVKVAGISAIGIVALSTTCAYAFARMRFPGKATLLKGMLIFQMFPAVLSLVALYALFDRLGEYIPFIGLNTHGGVIFAYLGGIALHVWTIKGYFETIDSSLEEAAALDGATPWQAFRLVLLPLSVPILAVVFILSFIAAITEVPVASLLLRDVNSYTLAVGMQQYLNPQNYLWGDFAAAAVMSALPITIVFLLAQRWLVNGLTAGGVKG",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P68183"
         },
         "label":"malg_ecoli"
      },
      {
         "object":"interaction",
         "id":"200",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intenz",
               "id":"3.6.3.19"
            },
            {
               "db":"intact",
               "id":"EBI-6477643"
            },
            {
               "db":"wwpdb",
               "id":"3puy"
            }
         ],
         "participants":[
            {
               "interactorRef":"7",
               "bioRole":{
                  "id":"MI:0682",
                  "name":"cofactor"
               },
               "bindingSites":[
                  {
                     "id":"201",
                     "name":"malk binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "202"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"195",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"203",
                     "name":"maltose binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-371"
                     ],
                     "linkedFeatures":[
                        "204"
                     ]
                  },
                  {
                     "id":"205",
                     "name":"malg binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-371"
                     ],
                     "linkedFeatures":[
                        "206"
                     ]
                  },
                  {
                     "id":"207",
                     "name":"malf binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-371"
                     ],
                     "linkedFeatures":[
                        "208"
                     ]
                  },
                  {
                     "id":"209",
                     "name":"dimerisation site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-371"
                     ]
                  },
                  {
                     "id":"202",
                     "name":"atp binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-371"
                     ],
                     "linkedFeatures":[
                        "201"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"196",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"204",
                     "name":"malk binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "203"
                     ]
                  },
                  {
                     "id":"210",
                     "name":"malf binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "211"
                     ]
                  },
                  {
                     "id":"212",
                     "name":"malg binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "213"
                     ]
                  },
                  {
                     "id":"214",
                     "name":"male binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "215"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"197",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"208",
                     "name":"malk binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-514"
                     ],
                     "linkedFeatures":[
                        "207"
                     ]
                  },
                  {
                     "id":"216",
                     "name":"male binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-514"
                     ],
                     "linkedFeatures":[
                        "217"
                     ]
                  },
                  {
                     "id":"218",
                     "name":"malg binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-514"
                     ],
                     "linkedFeatures":[
                        "219"
                     ]
                  },
                  {
                     "id":"211",
                     "name":"maltose binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-514"
                     ],
                     "linkedFeatures":[
                        "210"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"198",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"215",
                     "name":"maltose binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-396"
                     ],
                     "linkedFeatures":[
                        "214"
                     ]
                  },
                  {
                     "id":"220",
                     "name":"malg binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-396"
                     ],
                     "linkedFeatures":[
                        "221"
                     ]
                  },
                  {
                     "id":"217",
                     "name":"malf binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-396"
                     ],
                     "linkedFeatures":[
                        "216"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"199",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"221",
                     "name":"male binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-296"
                     ],
                     "linkedFeatures":[
                        "220"
                     ]
                  },
                  {
                     "id":"219",
                     "name":"malf binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-296"
                     ],
                     "linkedFeatures":[
                        "218"
                     ]
                  },
                  {
                     "id":"213",
                     "name":"maltose binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-296"
                     ],
                     "linkedFeatures":[
                        "212"
                     ]
                  },
                  {
                     "id":"206",
                     "name":"malk binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-296"
                     ],
                     "linkedFeatures":[
                        "205"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interaction",
         "id":"222",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"wwpdb",
               "id":"3fh6"
            },
            {
               "db":"intact",
               "id":"EBI-8705175"
            },
            {
               "db":"wwpdb",
               "id":"2r6g"
            }
         ],
         "participants":[
            {
               "interactorRef":"197",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"223",
                     "name":"malk binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-514"
                     ],
                     "linkedFeatures":[
                        "224"
                     ]
                  },
                  {
                     "id":"225",
                     "name":"malg binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-514"
                     ],
                     "linkedFeatures":[
                        "226"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"195",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"224",
                     "name":"malf binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-371"
                     ],
                     "linkedFeatures":[
                        "223"
                     ]
                  },
                  {
                     "id":"227",
                     "name":"dimerisation site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-371"
                     ]
                  },
                  {
                     "id":"228",
                     "name":"malg binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-371"
                     ],
                     "linkedFeatures":[
                        "229"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"199",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"226",
                     "name":"malf binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-296"
                     ],
                     "linkedFeatures":[
                        "225"
                     ]
                  },
                  {
                     "id":"229",
                     "name":"malk binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-296"
                     ],
                     "linkedFeatures":[
                        "228"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"230",
         "sequence":"MGLFDKLKSLVSDDKKDTGTIEIIAPLSGEIVNIEDVPDVVFAEKIVGDGIAIKPTGNKMVAPVDGTIGKIFETNHAFSIESDSGVELFVHFGIDTVELKGEGFKRIAEEGQRVKVGDTVIEFDLPLLEEKAKSTLTPVVISNMDEIKELIKLSGSVTVGETPVIRIKK",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P69783"
         },
         "label":"ptga_ecoli"
      },
      {
         "object":"interaction",
         "id":"231",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"wwpdb",
               "id":"4jbw"
            },
            {
               "db":"intact",
               "id":"EBI-6913771"
            }
         ],
         "participants":[
            {
               "interactorRef":"230",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"232",
                     "name":"malk binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-169"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"195",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"233",
                     "name":"dimerisation site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-371"
                     ]
                  },
                  {
                     "id":"234",
                     "name":"malg binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-371"
                     ]
                  },
                  {
                     "id":"235",
                     "name":"malf binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-371"
                     ]
                  },
                  {
                     "id":"236",
                     "name":"ptga binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-371"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"197",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"237",
                     "name":"malg binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-514"
                     ]
                  },
                  {
                     "id":"238",
                     "name":"male binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-514"
                     ]
                  },
                  {
                     "id":"239",
                     "name":"malk binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-514"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"199",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"240",
                     "name":"malk binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-296"
                     ]
                  },
                  {
                     "id":"241",
                     "name":"malf binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-296"
                     ]
                  },
                  {
                     "id":"242",
                     "name":"male binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-296"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"243",
         "sequence":"MSLSLWQQCLARLQDELPATEFSMWIRPLQAELSDNTLALYAPNRFVLDWVRDKYLNNINGLLTSFCGADAPQLRFEVGTKPVTQTPQAAVTSNVAAPAQVAQTQPQRAAPSTRSGWDNVPAPAEPTYRSNVNVKHTFDNFVEGKSNQLARAAARQVADNPGGAYNPLFLYGGTGLGKTHLLHAVGNGIMARKPNAKVVYMHSERFVQDMVKALQNNAIEEFKRYYRSVDALLIDDIQFFANKERSQEEFFHTFNALLEGNQQIILTSDRYPKEINGVEDRLKSRFGWGLTVAIEPPELETRVAILMKKADENDIRLPGEVAFFIAKRLRSNVRELEGALNRVIANANFTGRAITIDFVREALRDLLALQEKLVTIDNIQKTVAEYYKIKVADLLSKRRSRSVARPRQMAMALAKELTNHSLPEIGDAFGGRDHTTVLHACRKIEQLREESHDIKEDFSNLIRTLSS",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P03004"
         },
         "label":"dnaa_ecoli"
      },
      {
         "object":"interactor",
         "id":"244",
         "type":{
            "id":"MI:0680",
            "name":"single stranded deoxyribonucleic acid"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"chebi",
            "id":"CHEBI:9160"
         },
         "label":"ssdna_generic_ecoli"
      },
      {
         "object":"interaction",
         "id":"245",
         "interactionType":{
            "id":"MI:0407",
            "name":"direct interaction"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intact",
               "id":"EBI-6508476"
            }
         ],
         "participants":[
            {
               "interactorRef":"139",
               "stoichiometry":"6",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"246",
                     "name":"dnaa binding region",
                     "type":{
                        "id":"MI:0442",
                        "name":"sufficient binding region"
                     },
                     "sequenceData":[
                        "1-206"
                     ],
                     "linkedFeatures":[
                        "247"
                     ]
                  },
                  {
                     "id":"248",
                     "name":"atp binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "249"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"243",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"250",
                     "name":"atp binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-467"
                     ],
                     "linkedFeatures":[
                        "251"
                     ]
                  },
                  {
                     "id":"247",
                     "name":"dnab binding region",
                     "type":{
                        "id":"MI:0429",
                        "name":"necessary binding region"
                     },
                     "sequenceData":[
                        "135-148",
                        "24-56",
                        "21-21"
                     ],
                     "linkedFeatures":[
                        "246"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"244",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               }
            },
            {
               "interactorRef":"7",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"251",
                     "name":"dnaa binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "250"
                     ]
                  },
                  {
                     "id":"249",
                     "name":"dnab binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "248"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"252",
         "sequence":"MAGRIPRVFINDLLARTDIVDLIDARVKLKKQGKNFHACCPFHNEKTPSFTVNGEKQFYHCFGCGAHGNAIDFLMNYDKLEFVETVEELAAMHNLEVPFEAGSGPSQIERHQRQTLYQLMDGLNTFYQQSLQQPVATSARQYLEKRGLSHEVIARFAIGFAPPGWDNVLKRFGGNPENRQSLIDAGMLVTNDQGRSYDRFRERVMFPIRDKRGRVIGFGGRVLGNDTPKYLNSPETDIFHKGRQLYGLYEAQQDNAEPNRLLVVEGYMDVVALAQYGINYAVASLGTSTTADHIQLLFRATNNVICCYDGDRAGRDAAWRALETALPYMTDGRQLRFMFLPDGEDPDTLVRKEGKEAFEARMEQAMPLSAFLFNSLMPQVDLSTPDGRARLSTLALPLISQVPGETLRIYLRQELGNKLGILDDSQLERLMPKAAESGVSRPVPQLKRTTMRILIGLLVQNPELATLVPPLENLDENKLPGLGLFRELVNTCLSQPGLTTGQLLEHYRGTNNAATLEKLSMWDDIADKNIAEQTFTDSLNHMFDSLLELRQEELIARERTHGLSNEERLELWTLNQELAKK",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0ABS5"
         },
         "label":"dnag_ecoli"
      },
      {
         "object":"interaction",
         "id":"253",
         "interactionType":{
            "id":"MI:0407",
            "name":"direct interaction"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intenz",
               "id":"3.6.4.12"
            },
            {
               "db":"intact",
               "id":"EBI-6502267"
            }
         ],
         "participants":[
            {
               "interactorRef":"7",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"254",
                     "name":"dnab binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "255"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"252",
               "stoichiometry":"3",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"256",
                     "name":"dnab binding region",
                     "type":{
                        "id":"MI:0429",
                        "name":"necessary binding region"
                     },
                     "sequenceData":[
                        "574-581"
                     ],
                     "linkedFeatures":[
                        "257"
                     ]
                  },
                  {
                     "id":"258",
                     "name":"ssb binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-581"
                     ]
                  },
                  {
                     "id":"259",
                     "name":"dna binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-581"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"139",
               "stoichiometry":"6",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"255",
                     "name":"atp binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-471"
                     ],
                     "linkedFeatures":[
                        "254"
                     ]
                  },
                  {
                     "id":"260",
                     "name":"dna binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-471"
                     ]
                  },
                  {
                     "id":"257",
                     "name":"dnag binding region",
                     "type":{
                        "id":"MI:0442",
                        "name":"sufficient binding region"
                     },
                     "sequenceData":[
                        "n-n"
                     ],
                     "linkedFeatures":[
                        "256"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"261",
         "sequence":"MKNVGDLMQRLQKMMPAHIKPAFKTGEELLAWQKEQGAIRSAALERENRAMKMQRTFNRSGIRPLHQNCSFENYRVECEGQMNALSKARQYVEEFDGNIASFIFSGKPGTGKNHLAAAICNELLLRGKSVLIITVADIMSAMKDTFRNSGTSEEQLLNDLSNVDLLVIDEIGVQTESKYEKVIINQIVDRRSSSKRPTGMLTNSNMEEMTKLLGERVMDRMRLGNSLWVIFNWDSYRSRVTGKEY",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0AEF0"
         },
         "label":"dnac_ecoli"
      },
      {
         "object":"interaction",
         "id":"262",
         "interactionType":{
            "id":"MI:0407",
            "name":"direct interaction"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"emdb",
               "id":"EMD-2321"
            },
            {
               "db":"intact",
               "id":"EBI-6508439"
            }
         ],
         "participants":[
            {
               "interactorRef":"7",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"263",
                     "name":"dnab binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "264"
                     ]
                  },
                  {
                     "id":"265",
                     "name":"dnac binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "266"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"139",
               "stoichiometry":"6",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"267",
                     "name":"dnac binding region",
                     "type":{
                        "id":"MI:0429",
                        "name":"necessary binding region"
                     },
                     "sequenceData":[
                        "c-c"
                     ],
                     "linkedFeatures":[
                        "268"
                     ]
                  },
                  {
                     "id":"264",
                     "name":"atp binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-471"
                     ],
                     "linkedFeatures":[
                        "263"
                     ]
                  },
                  {
                     "id":"269",
                     "name":"dna binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-471"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"261",
               "stoichiometry":"3",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"268",
                     "name":"dnab binding region",
                     "type":{
                        "id":"MI:0429",
                        "name":"necessary binding region"
                     },
                     "sequenceData":[
                        "n-n"
                     ],
                     "linkedFeatures":[
                        "267"
                     ]
                  },
                  {
                     "id":"266",
                     "name":"atp binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-245"
                     ],
                     "linkedFeatures":[
                        "265"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"270",
         "sequence":"MIKSALLVLEDGTQFHGRAIGATGSAVGEVVFNTSMTGYQEILTDPSYSRQIVTLTYPHIGNVGTNDADEESSQVHAQGLVIRDLPLIASNFRNTEDLSSYLKRHNIVAIADIDTRKLTRLLREKGAQNGCIIAGDNPDAALALEKARAFPGLNGMDLAKEVTTAEAYSWTQGSWTLTGGLPEAKKEDELPFHVVAYDFGAKRNILRMLVDRGCRLTIVPAQTSAEDVLKMNPDGIFLSNGPGDPAPCDYAITAIQKFLETDIPVFGICLGHQLLALASGAKTVKMKFGHHGGNHPVKDVEKNVVMITAQNHGFAVDEATLPANLRVTHKSLFDGTLQGIHRTDKPAFSFQGHPEASPGPHDAAPLFDHFIELIEQYRKTAK",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0A6F1"
         },
         "label":"cara_ecoli"
      },
      {
         "object":"interactor",
         "id":"271",
         "sequence":"MPKRTDIKSILILGAGPIVIGQACEFDYSGAQACKALREEGYRVILVNSNPATIMTDPEMADATYIEPIHWEVVRKIIEKERPDAVLPTMGGQTALNCALELERQGVLEEFGVTMIGATADAIDKAEDRRRFDVAMKKIGLETARSGIAHTMEEALAVAADVGFPCIIRPSFTMGGSGGGIAYNREEFEEICARGLDLSPTKELLIDESLIGWKEYEMEVVRDKNDNCIIVCSIENFDAMGIHTGDSITVAPAQTLTDKEYQIMRNASMAVLREIGVETGGSNVQFAVNPKNGRLIVIEMNPRVSRSSALASKATGFPIAKVAAKLAVGYTLDELMNDITGGRTPASFEPSIDYVVTKIPRFNFEKFAGANDRLTTQMKSVGEVMAIGRTQQESLQKALRGLEVGATGFDPKVSLDDPEALTKIRRELKDAGADRIWYIADAFRAGLSVDGVFNLTNIDRWFLVQIEELVRLEEKVAEVGITGLNADFLRQLKRKGFADARLAKLAGVREAEIRKLRDQYDLHPVYKRVDTCAAEFATDTAYMYSTYEEECEANPSTDREKIMVLGGGPNRIGQGIEFDYCCVHASLALREDGYETIMVNCNPETVSTDYDTSDRLYFEPVTLEDVLEIVRIEKPKGVIVQYGGQTPLKLARALEAAGVPVIGTSPDAIDRAEDRERFQHAVERLKLKQPANATVTAIEMAVEKAKEIGYPLVVRPSYVLGGRAMEIVYDEADLRRYFQTAVSVSNDAPVLLDHFLDDAVEVDVDAICDGEMVLIGGIMEHIEQAGVHSGDSACSLPAYTLSQEIQDVMRQQVQKLAFELQVRGLMNVQFAVKNNEVYLIEVNPRAARTVPFVSKATGVPLAKVAARVMAGKSLAEQGVTKEVIPPYYSVKEVVLPFNKFPGVDPLLGPEMRSTGEVMGVGRTFAEAFAKAQLGSNSTMKKHGRALLSVREGDKERVVDLAAKLLKQGFELDATHGTAIVLGEAGINPRLVNKVHEGRPHIQDRIKNGEYTYIINTTSGRRAIEDSRVIRRSALQYKVHYDTTLNGGFATAMALNADATEKVISVQEMHAQIK",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P00968"
         },
         "label":"carb_ecoli"
      },
      {
         "object":"interaction",
         "id":"272",
         "interactionType":{
            "id":"MI:0407",
            "name":"direct interaction"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"wwpdb",
               "id":"1CE8"
            },
            {
               "db":"intenz",
               "id":"6.3.5.5"
            },
            {
               "db":"wwpdb",
               "id":"1BXR"
            },
            {
               "db":"intact",
               "id":"EBI-6516404"
            },
            {
               "db":"wwpdb",
               "id":"1A9X"
            }
         ],
         "participants":[
            {
               "interactorRef":"270",
               "stoichiometry":"4",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               }
            },
            {
               "interactorRef":"271",
               "stoichiometry":"4",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               }
            }
         ]
      },
      {
         "object":"interactor",
         "id":"273",
         "sequence":"MQERIKACFTESIQTQIAAAEALPDAISRAAMTLVQSLLNGNKILCCGNGTSAANAQHFAASMINRFETERPSLPAIALNTDNVVLTAIANDRLHDEVYAKQVRALGHAGDVLLAISTRGNSRDIVKAVEAAVTRDMTIVALTGYDGGELAGLLGPQDVEIRIPSHRSARIQEMHMLTVNCLCDLIDNTLFPHQDD",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P66817"
         },
         "label":"diaa_ecoli"
      },
      {
         "object":"interaction",
         "id":"274",
         "interactionType":{
            "id":"MI:0407",
            "name":"direct interaction"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"wwpdb",
               "id":"2yva"
            },
            {
               "db":"intact",
               "id":"EBI-6550318"
            }
         ],
         "participants":[
            {
               "interactorRef":"273",
               "stoichiometry":"4",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               }
            }
         ]
      },
      {
         "object":"interaction",
         "id":"275",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intact",
               "id":"EBI-6552438"
            }
         ],
         "participants":[
            {
               "interactorRef":"243",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"276",
                     "name":"dnaa binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "164-366",
                        "4-63"
                     ],
                     "linkedFeatures":[
                        "277"
                     ]
                  },
                  {
                     "id":"278",
                     "name":"ssdna binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "164-467"
                     ],
                     "linkedFeatures":[
                        "279"
                     ]
                  },
                  {
                     "id":"280",
                     "name":"atp binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "164-366"
                     ],
                     "linkedFeatures":[
                        "281"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"244",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"279",
                     "name":"dnaa binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "278"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"7",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"281",
                     "name":"dnaa binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "280"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"7",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"282",
                     "name":"dnaa binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "283"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"244",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"284",
                     "name":"dnaa binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "285"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"243",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"277",
                     "name":"dnaa binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "164-366",
                        "4-63"
                     ],
                     "linkedFeatures":[
                        "276"
                     ]
                  },
                  {
                     "id":"283",
                     "name":"atp binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "164-366"
                     ],
                     "linkedFeatures":[
                        "282"
                     ]
                  },
                  {
                     "id":"285",
                     "name":"ssdna binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "164-467"
                     ],
                     "linkedFeatures":[
                        "284"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"286",
         "sequence":"MAVVKCKPTSPGRRHVVKVVNPELHKGKPFAPLLEKNSKSGGRNNNGRITTRHIGGGHKQAYRIVDFKRNKDGIPAVVERLEYDPNRSANIALVLYKDGERRYILAPKGLKAGDQIQSGVDAAIKPGNTLPMRNIPVGSTVHNVEMKPGKGGQLARSAGTYVQIVARDGAYVTLRLRSGEMRKVEADCRATLGEVGNAEHMLRVLGKAGAARWRGVRPTVRGTAMNPVDHPHGGGEGRNFGKHPVTPWGVQTKGKKTRSNKRTDKFIVRRRSK",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P60422"
         },
         "label":"rl2_ecoli"
      },
      {
         "object":"interaction",
         "id":"287",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intact",
               "id":"EBI-6553156"
            }
         ],
         "participants":[
            {
               "interactorRef":"243",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"288",
                     "name":"atp binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-467"
                     ],
                     "linkedFeatures":[
                        "289"
                     ]
                  },
                  {
                     "id":"290",
                     "name":"l2 binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-129"
                     ],
                     "linkedFeatures":[
                        "291"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"286",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"291",
                     "name":"dnaa binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "60-273"
                     ],
                     "linkedFeatures":[
                        "290"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"7",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"289",
                     "name":"dnaa binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "288"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"292",
         "sequence":"MNTPAQLSLPLYLPDDETFASFWPGDNSSLLAALQNVLRQEHSGYIYLWAREGAGRSHLLHAACAELSQRGDAVGYVPLDKRTWFVPEVLDGMEHLSLVCIDNIECIAGDELWEMAIFDLYNRILESGKTRLLITGDRPPRQLNLGLPDLASRLDWGQIYKLQPLSDEDKLQALQLRARLRGFELPEDVGRFLLKRLDREMRTLFMTLDQLDRASITAQRKLTIPFVKEILKL",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P69931"
         },
         "label":"hda_ecoli"
      },
      {
         "object":"interaction",
         "id":"293",
         "interactionType":{
            "id":"MI:0407",
            "name":"direct interaction"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intact",
               "id":"EBI-6656972"
            }
         ],
         "participants":[
            {
               "interactorRef":"292",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"294",
                     "name":"dnan binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "4-13"
                     ],
                     "linkedFeatures":[
                        "295"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"134",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"295",
                     "name":"hda binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-366"
                     ],
                     "linkedFeatures":[
                        "294"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"296",
         "type":{
            "id":"MI:0328",
            "name":"small molecule"
         },
         "identifier":{
            "db":"chebi",
            "id":"CHEBI:16761"
         },
         "label":"adp"
      },
      {
         "object":"interaction",
         "id":"297",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intact",
               "id":"EBI-6554171"
            }
         ],
         "participants":[
            {
               "interactorRef":"296",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"298",
                     "name":"hda binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "299"
                     ]
                  },
                  {
                     "id":"300",
                     "name":"dnaa binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "301"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"243",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"302",
                     "name":"hda binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-467"
                     ],
                     "linkedFeatures":[
                        "303"
                     ]
                  },
                  {
                     "id":"301",
                     "name":"adp binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-467"
                     ],
                     "linkedFeatures":[
                        "300"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"292",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"303",
                     "name":"dnaa binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-233"
                     ],
                     "linkedFeatures":[
                        "302"
                     ]
                  },
                  {
                     "id":"299",
                     "name":"adp binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-233"
                     ],
                     "linkedFeatures":[
                        "298"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"304",
         "type":{
            "id":"MI:0681",
            "name":"double stranded deoxyribonucleic acid"
         },
         "organism":{
            "taxid":"-2",
            "common":"chemical synthesis",
            "scientific":"Chemical synthesis (Chemical synthesis)"
         },
         "identifier":{
            "db":"chebi",
            "id":"chebi:4705"
         },
         "label":"dsdna_generic_ecoli"
      },
      {
         "object":"interactor",
         "id":"305",
         "sequence":"MSTAKLVKSKATNLLYTRNDVSDSEKKATVELLNRQVIQFIDLSLITKQAHWNMRGANFIAVHEMLDGFRTALIDHLDTMAERAVQLGGVALGTTQVINSKTPLKSYPLDIHNVQDHLKELADRYAIVANDVRKAIGEAKDDDTADILTAASRDLDKFLWFIESNIE",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0ABT2"
         },
         "label":"dps_ecoli"
      },
      {
         "object":"interaction",
         "id":"306",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"wwpdb",
               "id":"1dps"
            },
            {
               "db":"intact",
               "id":"EBI-6558261"
            }
         ],
         "participants":[
            {
               "interactorRef":"304",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"307",
                     "name":"dnaa binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "308"
                     ]
                  },
                  {
                     "id":"309",
                     "name":"dnaa binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "310"
                     ]
                  },
                  {
                     "id":"311",
                     "name":"dps binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "312"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"243",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"313",
                     "name":"1-129",
                     "type":{
                        "id":"MI:0429",
                        "name":"necessary binding region"
                     },
                     "sequenceData":[
                        "1-129"
                     ],
                     "linkedFeatures":[
                        "314"
                     ]
                  },
                  {
                     "id":"310",
                     "name":"dna binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-467"
                     ],
                     "linkedFeatures":[
                        "309"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"243",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"315",
                     "name":"1-129",
                     "type":{
                        "id":"MI:0429",
                        "name":"necessary binding region"
                     },
                     "sequenceData":[
                        "1-129"
                     ],
                     "linkedFeatures":[
                        "316"
                     ]
                  },
                  {
                     "id":"308",
                     "name":"dna binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-467"
                     ],
                     "linkedFeatures":[
                        "307"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"305",
               "stoichiometry":"12",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"316",
                     "name":"dnaa binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-167"
                     ],
                     "linkedFeatures":[
                        "315"
                     ]
                  },
                  {
                     "id":"314",
                     "name":"dnaa binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-167"
                     ],
                     "linkedFeatures":[
                        "313"
                     ]
                  },
                  {
                     "id":"312",
                     "name":"dna binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-167"
                     ],
                     "linkedFeatures":[
                        "311"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"317",
         "sequence":"MSSRVLTPDVVGIDALVHDHQTVLAKAEGGVVAVFANNAPAFYAVTPARLAELLALEEKLARPGSDVALDDQLYQEPQAAPVAVPMGKFAMYPDWQPDADFIRLAALWGVALREPVTTEELASFIAYWQAEGKVFHHVQWQQKLARSLQIGRASNGGLPKRDVNTVSEPDSQIPPGFRG",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0A8J2"
         },
         "label":"dnat_ecoli"
      },
      {
         "object":"interactor",
         "id":"318",
         "sequence":"MPVAHVALPVPLPRTFDYLLPEGMTVKAGCRVRVPFGKQQERIGIVVSVSDASELPLNELKAVVEVLDSEPVFTHSVWRLLLWAADYYHHPIGDVLFHALPILLRQGRPAANAPMWYWFATEQGQAVDLNSLKRSPKQQQALAALRQGKIWRDQVATLEFNDAALQALRKKGLCDLASETPEFSDWRTNYAVSGERLRLNTEQATAVGAIHSAADTFSAWLLAGVTGSGKTEVYLSVLENVLAQGKQALVMVPEIGLTPQTIARFRERFNAPVEVLHSGLNDSERLSAWLKAKNGEAAIVIGTRSALFTPFKNLGVIVIDEEHDSSYKQQEGWRYHARDLAVYRAHSEQIPIILGSATPALETLCNVQQKKYRLLRLTRRAGNARPAIQHVLDLKGQKVQAGLAPALITRMRQHLQADNQVILFLNRRGFAPALLCHDCGWIAECPRCDHYYTLHQAQHHLRCHHCDSQRPVPRQCPSCGSTHLVPVGLGTEQLEQTLAPLFPGVPISRIDRDTTSRKGALEQQLAEVHRGGARILIGTQMLAKGHHFPDVTLVALLDVDGALFSADFRSAERFAQLYTQVAGRAGRAGKQGEVVLQTHHPEHPLLQTLLYKGYDAFAEQALAERRMMQLPPWTSHVIVRAEDHNNQHAPLFLQQLRNLILSSPLADEKLWVLGPVPALAPKRGGRWRWQILLQHPSRVRLQHIINGTLALINTIPDSRKVKWVLDVDPIEG",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P17888"
         },
         "label":"pria_ecoli"
      },
      {
         "object":"interactor",
         "id":"319",
         "sequence":"MKTALLLEKLEGQLATLRQRCAPVSQFATLSARFDRHLFQTRATTLQACLDEAGDNLAALRHAVEQQQLPQVAWLAEHLAAQLEAIAREASAWSLREWDSAPPKIARWQRKRIQHQDFERRLREMVAERRARLARVTDLVEQQTLHREVEAYEARLARCRHALEKIENRLARLTR",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P23862"
         },
         "label":"pric_ecoli"
      },
      {
         "object":"interaction",
         "id":"320",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intenz",
               "id":"EC 3.6.4.12"
            },
            {
               "db":"intact",
               "id":"EBI-6655050"
            }
         ],
         "participants":[
            {
               "interactorRef":"139",
               "stoichiometry":"6",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"321",
                     "name":"dnac binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-471"
                     ],
                     "linkedFeatures":[
                        "322"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"317",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               }
            },
            {
               "interactorRef":"318",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               }
            },
            {
               "interactorRef":"261",
               "stoichiometry":"3",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"322",
                     "name":"dnab binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-245"
                     ],
                     "linkedFeatures":[
                        "321"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"319",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               }
            }
         ]
      },
      {
         "object":"interaction",
         "id":"323",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intenz",
               "id":"EC 3.6.4.12"
            },
            {
               "db":"intact",
               "id":"EBI-6654974"
            }
         ],
         "participants":[
            {
               "interactorRef":"139",
               "stoichiometry":"6",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"324",
                     "name":"dnac binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-471"
                     ],
                     "linkedFeatures":[
                        "325"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"261",
               "stoichiometry":"3",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"325",
                     "name":"dnab binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-245"
                     ],
                     "linkedFeatures":[
                        "324"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"243",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               }
            }
         ]
      },
      {
         "object":"interactor",
         "id":"326",
         "sequence":"MRLNPGQQQAVEFVTGPCLVLAGAGSGKTRVITNKIAHLIRGCGYQARHIAAVTFTNKAAREMKERVGQTLGRKEARGLMISTFHTLGLDIIKREYAALGMKANFSLFDDTDQLALLKELTEGLIEDDKVLLQQLISTISNWKNDLKTPSQAAASAIGERDRIFAHCYGLYDAHLKACNVLDFDDLILLPTLLLQRNEEVRKRWQNKIRYLLVDEYQDTNTSQYELVKLLVGSRARFTVVGDDDQSIYSWRGARPQNLVLLSQDFPALKVIKLEQNYRSSGRILKAANILIANNPHVFEKRLFSELGYGAELKVLSANNEEHEAERVTGELIAHHFVNKTQYKDYAILYRGNHQSRVFEKFLMQNRIPYKISGGTSFFSRPEIKDLLAYLRVLTNPDDDSAFLRIVNTPKREIGPATLKKLGEWAMTRNKSMFTASFDMGLSQTLSGRGYEALTRFTHWLAEIQRLAEREPIAAVRDLIHGMDYESWLYETSPSPKAAEMRMKNVNQLFSWMTEMLEGSELDEPMTLTQVVTRFTLRDMMERGESEEELDQVQLMTLHASKGLEFPYVYMVGMEEGFLPHQSSIDEDNIDEERRLAYVGITRAQKELTFTLCKERRQYGELVRPEPSRFLLELPQDDLIWEQERKVVSAEERMQKGQSHLANLKAMMAAKRGK",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P09980"
         },
         "label":"rep_ecoli"
      },
      {
         "object":"interaction",
         "id":"327",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intenz",
               "id":"EC 3.6.4.12"
            },
            {
               "db":"intact",
               "id":"EBI-6655066"
            }
         ],
         "participants":[
            {
               "interactorRef":"326",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               }
            },
            {
               "interactorRef":"139",
               "stoichiometry":"6",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"328",
                     "name":"dnac binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-471"
                     ],
                     "linkedFeatures":[
                        "329"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"319",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               }
            },
            {
               "interactorRef":"261",
               "stoichiometry":"3",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"329",
                     "name":"dnab binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-245"
                     ],
                     "linkedFeatures":[
                        "328"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"330",
         "sequence":"MTNRLVLSGTVCRAPLRKVSPSGIPHCQFVLEHRSVQEEAGFHRQAWCQMPVIVSGHENQAITHSITVGSRITVQGFISCHKAKNGLSKMVLHAEQIELIDSGD",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P07013"
         },
         "label":"prib_ecoli"
      },
      {
         "object":"interaction",
         "id":"331",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intenz",
               "id":"EC 3.6.4.12"
            },
            {
               "db":"intact",
               "id":"EBI-6655020"
            }
         ],
         "participants":[
            {
               "interactorRef":"330",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               }
            },
            {
               "interactorRef":"317",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               }
            },
            {
               "interactorRef":"318",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               }
            },
            {
               "interactorRef":"139",
               "stoichiometry":"6",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"332",
                     "name":"dnac binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-471"
                     ],
                     "linkedFeatures":[
                        "333"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"261",
               "stoichiometry":"3",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"333",
                     "name":"dnab binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-245"
                     ],
                     "linkedFeatures":[
                        "332"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"334",
         "sequence":"MKTIEVDDELYSYIASHTKHIGESASDILRRMLKFSAASQPAAPVTKEVRVASPAIVEAKPVKTIKDKVRAMRELLLSDEYAEQKRAVNRFMLLLSTLYSLDAQAFAEATESLHGRTRVYFAADEQTLLKNGNQTKPKHVPGTPYWVITNTNTGRKCSMIEHIMQSMQFPAELIEKVCGTI",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0AFY8"
         },
         "label":"seqa_ecoli"
      },
      {
         "object":"interactor",
         "id":"335",
         "type":{
            "id":"MI:0681",
            "name":"double stranded deoxyribonucleic acid"
         },
         "organism":{
            "taxid":"-2",
            "common":"chemical synthesis",
            "scientific":"Chemical synthesis (Chemical synthesis)"
         },
         "identifier":{
            "db":"intact",
            "id":"EBI-6672067"
         },
         "label":"hemimeth_dna_random"
      },
      {
         "object":"interaction",
         "id":"336",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"wwpdb",
               "id":"1xrx"
            },
            {
               "db":"intact",
               "id":"EBI-6672189"
            },
            {
               "db":"wwpdb",
               "id":"1lrr"
            }
         ],
         "participants":[
            {
               "interactorRef":"334",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               }
            },
            {
               "interactorRef":"335",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               }
            },
            {
               "interactorRef":"334",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               }
            }
         ]
      },
      {
         "object":"interactor",
         "id":"337",
         "sequence":"MTKSELIERLATQQSHIPAKTVEDAVKEMLEHMASTLAQGERIEIRGFGSFSLHYRAPRTGRNPKTGDKVELEGKYVPHFKPGKELRDRANIYG",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0A6Y1"
         },
         "label":"ihfb_ecoli"
      },
      {
         "object":"interactor",
         "id":"338",
         "sequence":"MALTKAEMSEYLFDKLGLSKRDAKELVELFFEEIRRALENGEQVKLSGFGNFDLRDKNQRPGRNPKTGEDIPITARRVVTFRPGQKLKSRVENASPKDE",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0A6X7"
         },
         "label":"ihfa_ecoli"
      },
      {
         "object":"interaction",
         "id":"339",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"wwpdb",
               "id":"2ht0"
            },
            {
               "db":"wwpdb",
               "id":"1ihf"
            },
            {
               "db":"intact",
               "id":"EBI-6676075"
            }
         ],
         "participants":[
            {
               "interactorRef":"337",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"340",
                     "name":"dna binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-94"
                     ]
                  },
                  {
                     "id":"341",
                     "name":"ihfa binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-94"
                     ],
                     "linkedFeatures":[
                        "342"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"338",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"342",
                     "name":"ihfb binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-99"
                     ],
                     "linkedFeatures":[
                        "341"
                     ]
                  },
                  {
                     "id":"343",
                     "name":"dna binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-99"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"344",
         "sequence":"MNKTQLIDVIAEKAELSKTQAKAALESTLAAITESLKEGDAVQLVGFGTFKVNHRAERTGRNPQTGKEIKIAAANVPAFVSGKALKDAVK",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0ACF0"
         },
         "label":"dbha_ecoli"
      },
      {
         "object":"interactor",
         "id":"345",
         "sequence":"MNKSQLIDKIAAGADISKAAAGRALDAIIASVTESLKEGDDVALVGFGTFAVKERAARTGRNPQTGKEITIAAAKVPSFRAGKALKDAVN",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0ACF4"
         },
         "label":"dbhb_ecoli"
      },
      {
         "object":"interaction",
         "id":"346",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intact",
               "id":"EBI-6691541"
            }
         ],
         "participants":[
            {
               "interactorRef":"344",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"347",
                     "name":"dnaa binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-90"
                     ],
                     "linkedFeatures":[
                        "348"
                     ]
                  },
                  {
                     "id":"349",
                     "name":"dbhb binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-90"
                     ],
                     "linkedFeatures":[
                        "350"
                     ]
                  },
                  {
                     "id":"351",
                     "name":"dna binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-90"
                     ],
                     "linkedFeatures":[
                        "352"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"304",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"353",
                     "name":"dbhb binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "354"
                     ]
                  },
                  {
                     "id":"355",
                     "name":"dnaa binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "356"
                     ]
                  },
                  {
                     "id":"352",
                     "name":"dbha binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "351"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"243",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"348",
                     "name":"dbha binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-129"
                     ],
                     "linkedFeatures":[
                        "347"
                     ]
                  },
                  {
                     "id":"356",
                     "name":"dna binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-467"
                     ],
                     "linkedFeatures":[
                        "355"
                     ]
                  },
                  {
                     "id":"357",
                     "name":"dbhb binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-467"
                     ],
                     "linkedFeatures":[
                        "358"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"345",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"350",
                     "name":"dbha binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-90"
                     ],
                     "linkedFeatures":[
                        "349"
                     ]
                  },
                  {
                     "id":"354",
                     "name":"dna binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-90"
                     ],
                     "linkedFeatures":[
                        "353"
                     ]
                  },
                  {
                     "id":"358",
                     "name":"dnaa binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-90"
                     ],
                     "linkedFeatures":[
                        "357"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interaction",
         "id":"359",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intact",
               "id":"EBI-6691075"
            }
         ],
         "participants":[
            {
               "interactorRef":"345",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               }
            }
         ]
      },
      {
         "object":"interaction",
         "id":"360",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intact",
               "id":"EBI-6691570"
            }
         ],
         "participants":[
            {
               "interactorRef":"344",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"361",
                     "name":"dna binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-90"
                     ],
                     "linkedFeatures":[
                        "362"
                     ]
                  },
                  {
                     "id":"363",
                     "name":"dnaa binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-90"
                     ],
                     "linkedFeatures":[
                        "364"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"243",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"364",
                     "name":"dbha binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-129"
                     ],
                     "linkedFeatures":[
                        "363"
                     ]
                  },
                  {
                     "id":"365",
                     "name":"dna binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-467"
                     ],
                     "linkedFeatures":[
                        "366"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"304",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"366",
                     "name":"dnaa binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "365"
                     ]
                  },
                  {
                     "id":"362",
                     "name":"dbha binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "361"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interaction",
         "id":"367",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intact",
               "id":"EBI-6691045"
            }
         ],
         "participants":[
            {
               "interactorRef":"344",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               }
            }
         ]
      },
      {
         "object":"interaction",
         "id":"368",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"wwpdb",
               "id":"2o97"
            },
            {
               "db":"intact",
               "id":"EBI-6676762"
            }
         ],
         "participants":[
            {
               "interactorRef":"344",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"369",
                     "name":"dbhb binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-90"
                     ],
                     "linkedFeatures":[
                        "370"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"345",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"370",
                     "name":"dbha binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-90"
                     ],
                     "linkedFeatures":[
                        "369"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interaction",
         "id":"371",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intact",
               "id":"EBI-6819726"
            }
         ],
         "participants":[
            {
               "interactorRef":"243",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"372",
                     "name":"dsdna binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "164-467"
                     ],
                     "linkedFeatures":[
                        "373"
                     ]
                  },
                  {
                     "id":"374",
                     "name":"atp binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "164-366"
                     ],
                     "linkedFeatures":[
                        "375"
                     ]
                  },
                  {
                     "id":"376",
                     "name":"dnaa binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "4-63",
                        "164-366"
                     ],
                     "linkedFeatures":[
                        "377"
                     ]
                  },
                  {
                     "id":"378",
                     "name":"diaa binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-108"
                     ],
                     "linkedFeatures":[
                        "379"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"7",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"375",
                     "name":"dnaa binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "374"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"304",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"373",
                     "name":"dnaa binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "372"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"7",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"380",
                     "name":"dnaa binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "381"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"273",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"379",
                     "name":"dnaa binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "c-c"
                     ],
                     "linkedFeatures":[
                        "378"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"243",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"381",
                     "name":"atp binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "164-366"
                     ],
                     "linkedFeatures":[
                        "380"
                     ]
                  },
                  {
                     "id":"382",
                     "name":"dsdna binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "164-467"
                     ],
                     "linkedFeatures":[
                        "383"
                     ]
                  },
                  {
                     "id":"384",
                     "name":"diaa binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-108"
                     ],
                     "linkedFeatures":[
                        "385"
                     ]
                  },
                  {
                     "id":"377",
                     "name":"dnaa binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "4-63",
                        "164-366"
                     ],
                     "linkedFeatures":[
                        "376"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"273",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"385",
                     "name":"dnaa binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "c-c"
                     ],
                     "linkedFeatures":[
                        "384"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"304",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"383",
                     "name":"dnaa binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "382"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"386",
         "sequence":"MSEALKILNNIRTLRAQARECTLETLEEMLEKLEVVVNERREEESAAAAEVEERTRKLQQYREMLIADGIDPNELLNSLAAVKSGTKAKRAQRPAKYSYVDENGETKTWTGQGRTPAVIKKAMDEQGKSLDDFLIKQ",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0ACF8"
         },
         "label":"hns_ecoli"
      },
      {
         "object":"interactor",
         "id":"387",
         "sequence":"MSEKPLTKTDYLMRLRRCQTIDTLERVIEKNKYELSDNELAVFYSAADHRLAELTMNKLYDKIPSSVWKFIR",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0ACE3"
         },
         "label":"hha_ecoli"
      },
      {
         "object":"interaction",
         "id":"388",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intact",
               "id":"EBI-6923225"
            }
         ],
         "participants":[
            {
               "interactorRef":"386",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"389",
                     "name":"hha binding site",
                     "type":{
                        "id":"MI:0442",
                        "name":"sufficient binding region"
                     },
                     "sequenceData":[
                        "1-47"
                     ],
                     "linkedFeatures":[
                        "390"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"387",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"390",
                     "name":"hns binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-72"
                     ],
                     "linkedFeatures":[
                        "389"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interaction",
         "id":"391",
         "interactionType":{
            "id":"MI:0407",
            "name":"direct interaction"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"wwpdb",
               "id":"1ni8"
            },
            {
               "db":"intact",
               "id":"EBI-6859852"
            }
         ],
         "participants":[
            {
               "interactorRef":"386",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"392",
                     "name":"dimerisation domain",
                     "type":{
                        "id":"MI:0442",
                        "name":"sufficient binding region"
                     },
                     "sequenceData":[
                        "21-46"
                     ]
                  },
                  {
                     "id":"393",
                     "name":"dna binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "2-46",
                        "80-96",
                        "110-117"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interaction",
         "id":"394",
         "interactionType":{
            "id":"MI:0407",
            "name":"direct interaction"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intact",
               "id":"EBI-6860189"
            }
         ],
         "participants":[
            {
               "interactorRef":"386",
               "stoichiometry":"4",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"395",
                     "name":"dna binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "2-46",
                        "80-96",
                        "110-117"
                     ]
                  },
                  {
                     "id":"396",
                     "name":"dimerisation domain",
                     "type":{
                        "id":"MI:0442",
                        "name":"sufficient binding region"
                     },
                     "sequenceData":[
                        "21-46"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"397",
         "sequence":"MTVQDYLLKFRKISSLESLEKLYDHLNYTLTDDQELINMYRAADHRRAELVSGGRLFDLGQVPKSVWHYVQ",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P64467"
         },
         "label":"cnu_ecoli"
      },
      {
         "object":"interaction",
         "id":"398",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intact",
               "id":"EBI-6923348"
            }
         ],
         "participants":[
            {
               "interactorRef":"397",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"399",
                     "name":"hns binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-71"
                     ],
                     "linkedFeatures":[
                        "400"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"386",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"400",
                     "name":"cnu binding site",
                     "type":{
                        "id":"MI:0442",
                        "name":"sufficient binding region"
                     },
                     "sequenceData":[
                        "1-47"
                     ],
                     "linkedFeatures":[
                        "399"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"401",
         "sequence":"MQTFQADLAIVGAGGAGLRAAIAAAQANPNAKIALISKVYPMRSHTVAAEGGSAAVAQDHDSFEYHFHDTVAGGDWLCEQDVVDYFVHHCPTEMTQLELWGCPWSRRPDGSVNVRRFGGMKIERTWFAADKTGFHMLHTLFQTSLQFPQIQRFDEHFVLDILVDDGHVRGLVAMNMMEGTLVQIRANAVVMATGGAGRVYRYNTNGGIVTGDGMGMALSHGVPLRDMEFVQYHPTGLPGSGILMTEGCRGEGGILVNKNGYRYLQDYGMGPETPLGEPKNKYMELGPRDKVSQAFWHEWRKGNTISTPRGDVVYLDLRHLGEKKLHERLPFICELAKAYVGVDPVKEPIPVRPTAHYTMGGIETDQNCETRIKGLFAVGECSSVGLHGANRLGSNSLAELVVFGRLAGEQATERAATAGNGNEAAIEAQAAGVEQRLKDLVNQDGGENWAKIRDEMGLAMEEGCGIYRTPELMQKTIDKLAELQERFKRVRITDTSSVFNTDLLYTIELGHGLNVAECMAHSAMARKESRGAHQRLDEGCTERDDVNFLKHTLAFRDADGTTRLEYSDVKITTLPPAKRVYGGEADAADKAEAANKKEKANG",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P00363"
         },
         "label":"frda_ecoli"
      },
      {
         "object":"interactor",
         "id":"402",
         "sequence":"MAEMKNLKIEVVRYNPEVDTAPHSAFYEVPYDATTSLLDALGYIKDNLAPDLSYRWSCRMAICGSCGMMVNNVPKLACKTFLRDYTDGMKVEALANFPIERDLVVDMTHFIESLEAIKPYIIGNSRTADQGTNIQTPAQMAKYHQFSGCINCGLCYAACPQFGLNPEFIGPAAITLAHRYNEDSRDHGKKERMAQLNSQNGVWSCTFVGYCSEVCPKHVDPAAAIQQGKVESSKDFLIATLKPR",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0AC47"
         },
         "label":"frdb_ecoli"
      },
      {
         "object":"interactor",
         "id":"403",
         "sequence":"MINPNPKRSDEPVFWGLFGAGGMWSAIIAPVMILLVGILLPLGLFPGDALSYERVLAFAQSFIGRVFLFLMIVLPLWCGLHRMHHAMHDLKIHVPAGKWVFYGLAAILTVVTLIGVVTI",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0A8Q3"
         },
         "label":"frdd_ecoli"
      },
      {
         "object":"interactor",
         "id":"404",
         "sequence":"MTTKRKPYVRPMTSTWWKKLPFYRFYMLREGTAVPAVWFSIELIFGLFALKNGPEAWAGFVDFLQNPVIVIINLITLAAALLHTKTWFELAPKAANIIVKDEKMGPEPIIKSLWAVTVVATIVILFVALYW",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0A8Q0"
         },
         "label":"frdc_ecoli"
      },
      {
         "object":"interaction",
         "id":"405",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"wwpdb",
               "id":"1l0v"
            },
            {
               "db":"intact",
               "id":"EBI-6867830"
            },
            {
               "db":"intenz",
               "id":"EC 1.3.5.4"
            }
         ],
         "participants":[
            {
               "interactorRef":"18",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0579",
                  "name":"electron donor"
               },
               "bindingSites":[
                  {
                     "id":"406",
                     "name":"frdd binding region 1",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "407"
                     ]
                  },
                  {
                     "id":"408",
                     "name":"frdd binding region 2",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "409"
                     ]
                  },
                  {
                     "id":"410",
                     "name":"frdc binding region 1",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "411"
                     ]
                  },
                  {
                     "id":"412",
                     "name":"frdc binding region 2",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "413"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"165",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0682",
                  "name":"cofactor"
               },
               "bindingSites":[
                  {
                     "id":"414",
                     "name":"frda binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "415"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"21",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0682",
                  "name":"cofactor"
               },
               "bindingSites":[
                  {
                     "id":"416",
                     "name":"frdb binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "417"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"20",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0682",
                  "name":"cofactor"
               },
               "bindingSites":[
                  {
                     "id":"418",
                     "name":"frdb binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "419"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"159",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0682",
                  "name":"cofactor"
               },
               "bindingSites":[
                  {
                     "id":"420",
                     "name":"frdb binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "421"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"401",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"415",
                     "name":"fad binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-602"
                     ],
                     "linkedFeatures":[
                        "414"
                     ]
                  },
                  {
                     "id":"422",
                     "name":"frdb binding site",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-602"
                     ],
                     "linkedFeatures":[
                        "423"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"402",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"423",
                     "name":"frda binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-244"
                     ],
                     "linkedFeatures":[
                        "422"
                     ]
                  },
                  {
                     "id":"424",
                     "name":"frdc binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-244"
                     ],
                     "linkedFeatures":[
                        "425"
                     ]
                  },
                  {
                     "id":"426",
                     "name":"frdd binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-244"
                     ],
                     "linkedFeatures":[
                        "427"
                     ]
                  },
                  {
                     "id":"421",
                     "name":"2fe-2s binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-244"
                     ],
                     "linkedFeatures":[
                        "420"
                     ]
                  },
                  {
                     "id":"419",
                     "name":"3fe-4s binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-244"
                     ],
                     "linkedFeatures":[
                        "418"
                     ]
                  },
                  {
                     "id":"417",
                     "name":"4fe-4s binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-244"
                     ],
                     "linkedFeatures":[
                        "416"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"403",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"428",
                     "name":"frdc binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-119"
                     ],
                     "linkedFeatures":[
                        "429"
                     ]
                  },
                  {
                     "id":"427",
                     "name":"frdb binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-119"
                     ],
                     "linkedFeatures":[
                        "426"
                     ]
                  },
                  {
                     "id":"407",
                     "name":"quinol binding region 1",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-119"
                     ],
                     "linkedFeatures":[
                        "406"
                     ]
                  },
                  {
                     "id":"409",
                     "name":"quinol binding region 2",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-119"
                     ],
                     "linkedFeatures":[
                        "408"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"404",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"425",
                     "name":"frdb binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-131"
                     ],
                     "linkedFeatures":[
                        "424"
                     ]
                  },
                  {
                     "id":"411",
                     "name":"quinol binding region 1",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-131"
                     ],
                     "linkedFeatures":[
                        "410"
                     ]
                  },
                  {
                     "id":"429",
                     "name":"frdd binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-131"
                     ],
                     "linkedFeatures":[
                        "428"
                     ]
                  },
                  {
                     "id":"413",
                     "name":"quinol binding region 2",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-131"
                     ],
                     "linkedFeatures":[
                        "412"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"430",
         "sequence":"MSKSKMIVRTKFIDRACHWTVVICFFLVALSGISFFFPTLQWLTQTFGTPQMGRILHPFFGIAIFVALMFMFVRFVHHNIPDKKDIPWLLNIVEVLKGNEHKVADVGKYNAGQKMMFWSIMSMIFVLLVTGVIIWRPYFAQYFPMQVVRYSLLIHAAAGIILIHAILIHMYMAFWVKGSIKGMIEGKVSRRWAKKHHPRWYREIEKAEAKKESEEGI",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0AEK7"
         },
         "label":"fdni_ecoli"
      },
      {
         "object":"interactor",
         "id":"431",
         "sequence":"MDVSRRQFFKICAGGMAGTTVAALGFAPKQALAQARNYKLLRAKEIRNTCTYCSVGCGLLMYSLGDGAKNAREAIYHIEGDPDHPVSRGALCPKGAGLLDYVNSENRLRYPEYRAPGSDKWQRISWEEAFSRIAKLMKADRDANFIEKNEQGVTVNRWLSTGMLCASGASNETGMLTQKFARSLGMLAVDNQARVUHGPTVASLAPTFGRGAMTNHWVDIKNANVVMVMGGNAAEAHPVGFRWAMEAKNNNDATLIVVDPRFTRTASVADIYAPIRSGTDITFLSGVLRYLIENNKINAEYVKHYTNASLLVRDDFAFEDGLFSGYDAEKRQYDKSSWNYQLDENGYAKRDETLTHPRCVWNLLKEHVSRYTPDVVENICGTPKADFLKVCEVLASTSAPDRTTTFLYALGWTQHTVGAQNIRTMAMIQLLLGNMGMAGGGVNALRGHSNIQGLTDLGLLSTSLPGYLTLPSEKQVDLQSYLEANTPKATLADQVNYWSNYPKFFVSLMKSFYGDAAQKENNWGYDWLPKWDQTYDVIKYFNMMDEGKVTGYFCQGFNPVASFPDKNKVVSCLSKLKYMVVIDPLVTETSTFWQNHGESNDVDPASIQTEVFRLPSTCFAEEDGSIANSGRWLQWHWKGQDAPGEARNDGEILAGIYHHLRELYQSEGGKGVEPLMKMSWNYKQPHEPQSDEVAKENNGYALEDLYDANGVLIAKKGQLLSSFAHLRDDGTTASSCWIYTGSWTEQGNQMANRDNSDPSGLGNTLGWAWAWPLNRRVLYNRASADINGKPWDPKRMLIQWNGSKWTGNDIPDFGNAAPGTPTGPFIMQPEGMGRLFAINKMAEGPFPEHYEPIETPLGTNPLHPNVVSNPVVRLYEQDALRMGKKEQFPYVGTTYRLTEHFHTWTKHALLNAIAQPEQFVEISETLAAAKGINNGDRVTVSSKRGFIRAVAVVTRRLKPLNVNGQQVETVGIPIHWGFEGVARKGYIANTLTPNVGDANSQTPEYKAFLVNIEKA",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P24183"
         },
         "label":"fdng_ecoli"
      },
      {
         "object":"interactor",
         "id":"432",
         "sequence":"MAMETQDIIKRSATNSITPPSQVRDYKAEVAKLIDVSTCIGCKACQVACSEWNDIRDEVGHCVGVYDNPADLSAKSWTVMRFSETEQNGKLEWLIRKDGCMHCEDPGCLKACPSAGAIIQYANGIVDFQSENCIGCGYCIAGCPFNIPRLNKEDNRVYKCTLCVDRVSVGQEPACVKTCPTGAIHFGTKKEMLELAEQRVAKLKARGYEHAGVYNPEGVGGTHVMYVLHHADQPELYHGLPKDPKIDTSVSLWKGALKPLAAAGFIATFAGLIFHYIGIGPNKEVDDDEEDHHE",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0AAJ3"
         },
         "label":"fdnh_ecoli"
      },
      {
         "object":"interactor",
         "id":"433",
         "type":{
            "id":"MI:0328",
            "name":"small molecule"
         },
         "identifier":{
            "db":"chebi",
            "id":"CHEBI:15378"
         },
         "label":"hydron"
      },
      {
         "object":"interaction",
         "id":"434",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"wwpdb",
               "id":"1kqg"
            },
            {
               "db":"intact",
               "id":"EBI-6894347"
            },
            {
               "db":"intenz",
               "id":"EC 1.1.5.6"
            },
            {
               "db":"wwpdb",
               "id":"1kqf"
            }
         ],
         "participants":[
            {
               "interactorRef":"21",
               "stoichiometry":"15",
               "bioRole":{
                  "id":"MI:0682",
                  "name":"cofactor"
               },
               "bindingSites":[
                  {
                     "id":"435",
                     "name":"fdng binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "436"
                     ]
                  },
                  {
                     "id":"437",
                     "name":"fdnh binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "438"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"430",
               "stoichiometry":"3",
               "bioRole":{
                  "id":"MI:0684",
                  "name":"ancillary"
               },
               "bindingSites":[
                  {
                     "id":"439",
                     "name":"heme binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-217"
                     ],
                     "linkedFeatures":[
                        "440"
                     ]
                  },
                  {
                     "id":"441",
                     "name":"fdnh binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-217"
                     ],
                     "linkedFeatures":[
                        "442"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"23",
               "stoichiometry":"6",
               "bioRole":{
                  "id":"MI:0682",
                  "name":"cofactor"
               },
               "bindingSites":[
                  {
                     "id":"440",
                     "name":"fdni binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "439"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"22",
               "stoichiometry":"3",
               "bioRole":{
                  "id":"MI:0682",
                  "name":"cofactor"
               },
               "bindingSites":[
                  {
                     "id":"443",
                     "name":"fdng binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "444"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"158",
               "stoichiometry":"3",
               "bioRole":{
                  "id":"MI:0580",
                  "name":"electron acceptor"
               },
               "bindingSites":[
                  {
                     "id":"445",
                     "name":"fdnh binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "446"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"431",
               "stoichiometry":"3",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"447",
                     "name":"fdnh binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-1015"
                     ],
                     "linkedFeatures":[
                        "448"
                     ]
                  },
                  {
                     "id":"436",
                     "name":"4fe-4s binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-1015"
                     ],
                     "linkedFeatures":[
                        "435"
                     ]
                  },
                  {
                     "id":"444",
                     "name":"mo-bismgd binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-1015"
                     ],
                     "linkedFeatures":[
                        "443"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"432",
               "stoichiometry":"3",
               "bioRole":{
                  "id":"MI:0684",
                  "name":"ancillary"
               },
               "bindingSites":[
                  {
                     "id":"448",
                     "name":"fdng binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-294"
                     ],
                     "linkedFeatures":[
                        "447"
                     ]
                  },
                  {
                     "id":"442",
                     "name":"fdni binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-294"
                     ],
                     "linkedFeatures":[
                        "441"
                     ]
                  },
                  {
                     "id":"449",
                     "name":"hydron binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-294"
                     ],
                     "linkedFeatures":[
                        "450"
                     ]
                  },
                  {
                     "id":"446",
                     "name":"quinone binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-294"
                     ],
                     "linkedFeatures":[
                        "445"
                     ]
                  },
                  {
                     "id":"438",
                     "name":"4fe-4s binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-294"
                     ],
                     "linkedFeatures":[
                        "437"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"433",
               "stoichiometry":"6",
               "bioRole":{
                  "id":"MI:0580",
                  "name":"electron acceptor"
               },
               "bindingSites":[
                  {
                     "id":"450",
                     "name":"fdnh binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "449"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"451",
         "sequence":"MDQTYSLESFLNHVQKRDPNQTEFAQAVREVMTTLWPFLEQNPKYRQMSLLERLVEPERVIQFRVVWVDDRNQIQVNRAWRVQFSSAIGPYKGGMRFHPSVNLSILKFLGFEQTFKNALTTLPMGGGKGGSDFDPKGKSEGEVMRFCQALMTELYRHLGADTDVPAGDIGVGGREVGFMAGMMKKLSNNTACVFTGKGLSFGGSLIRPEATGYGLVYFTEAMLKRHGMGFEGMRVSVSGSGNVAQYAIEKAMEFGARVITASDSSGTVVDESGFTKEKLARLIEIKASRDGRVADYAKEFGLVYLEGQQPWSLPVDIALPCATQNELDVDAAHQLIANGVKAVAEGANMPTTIEATELFQQAGVLFAPGKAANAGGVATSGLEMAQNAARLGWKAEKVDARLHHIMLDIHHACVEHGGEGEQTNYVQGANIAGFVKVADAMLAQGVI",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P00370"
         },
         "label":"dhe4_ecoli"
      },
      {
         "object":"interaction",
         "id":"452",
         "interactionType":{
            "id":"MI:0407",
            "name":"direct interaction"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intenz",
               "id":"EC 1.4.1.4"
            },
            {
               "db":"intact",
               "id":"EBI-6902099"
            },
            {
               "db":"wwpdb",
               "id":"4bht"
            }
         ],
         "participants":[
            {
               "interactorRef":"451",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"453",
                     "name":"dhe4 binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-447"
                     ],
                     "linkedFeatures":[
                        "454"
                     ]
                  },
                  {
                     "id":"455",
                     "name":"dhe4 binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-447"
                     ],
                     "linkedFeatures":[
                        "456"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"451",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"454",
                     "name":"dhe4 binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-447"
                     ],
                     "linkedFeatures":[
                        "453"
                     ]
                  },
                  {
                     "id":"457",
                     "name":"dhe4 binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-447"
                     ],
                     "linkedFeatures":[
                        "458"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"451",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"459",
                     "name":"dhe4 binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-447"
                     ],
                     "linkedFeatures":[
                        "460"
                     ]
                  },
                  {
                     "id":"458",
                     "name":"dhe4 binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-447"
                     ],
                     "linkedFeatures":[
                        "457"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"451",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"460",
                     "name":"dhe4 binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-447"
                     ],
                     "linkedFeatures":[
                        "459"
                     ]
                  },
                  {
                     "id":"461",
                     "name":"dhe4 binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-447"
                     ],
                     "linkedFeatures":[
                        "462"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"451",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"463",
                     "name":"dhe4 binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-447"
                     ],
                     "linkedFeatures":[
                        "464"
                     ]
                  },
                  {
                     "id":"462",
                     "name":"dhe4 binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-447"
                     ],
                     "linkedFeatures":[
                        "461"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"154",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0919",
                  "name":"acceptor"
               },
               "bindingSites":[
                  {
                     "id":"465",
                     "name":"dhe4 binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "466"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"451",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"466",
                     "name":"nadp+ binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-447"
                     ],
                     "linkedFeatures":[
                        "465"
                     ]
                  },
                  {
                     "id":"464",
                     "name":"dhe4 binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-447"
                     ],
                     "linkedFeatures":[
                        "463"
                     ]
                  },
                  {
                     "id":"456",
                     "name":"dhe4 binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-447"
                     ],
                     "linkedFeatures":[
                        "455"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"467",
         "type":{
            "id":"MI:0328",
            "name":"small molecule"
         },
         "identifier":{
            "db":"chebi",
            "id":"CHEBI:30411"
         },
         "label":"cobalamin"
      },
      {
         "object":"interactor",
         "id":"468",
         "sequence":"MLTLARQQQRQNIRWLLCLSVLMLLALLLSLCAGEQWISPGDWFTPRGELFVWQIRLPRTLAVLLVGAALAISGAVMQALFENPLAEPGLLGVSNGAGVGLIAAVLLGQGQLPNWALGLCAIAGALIITLILLRFARRHLSTSRLLLAGVALGIICSALMTWAIYFSTSVDLRQLMYWMMGGFGGVDWRQSWLMLALIPVLLWICCQSRPMNMLALGEISARQLGLPLWFWRNVLVAATGWMVGVSVALAGAIGFIGLVIPHILRLCGLTDHRVLLPGCALAGASALLLADIVARLALAAAELPIGVVTATLGAPVFIWLLLKAGR",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P06609"
         },
         "label":"btuc_ecoli"
      },
      {
         "object":"interactor",
         "id":"469",
         "sequence":"MSIVMQLQDVAESTRLGPLSGEVRAGEILHLVGPNGAGKSTLLARMAGMTSGKGSIQFAGQPLEAWSATKLALHRAYLSQQQTPPFATPVWHYLTLHQHDKTRTELLNDVAGALALDDKLGRSTNQLSGGEWQRVRLAAVVLQITPQANPAGQLLLLDEPMNSLDVAQQSALDKILSALCQQGLAIVMSSHDLNHTLRHAHRAWLLKGGKMLASGRREEVLTPPNLAQAYGMNFRRLDIEGHRMLISTI",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P06611"
         },
         "label":"btud_ecoli"
      },
      {
         "object":"interactor",
         "id":"470",
         "sequence":"MAKSLFRALVALSFLAPLWLNAAPRVITLSPANTELAFAAGITPVGVSSYSDYPPQAQKIEQVSTWQGMNLERIVALKPDLVIAWRGGNAERQVDQLASLGIKVMWVDATSIEQIANALRQLAPWSPQPDKAEQAAQSLLDQYAQLKAQYADKPKKRVFLQFGINPPFTSGKESIQNQVLEVCGGENIFKDSRVPWPQVSREQVLARSPQAIVITGGPDQIPKIKQYWGEQLKIPVIPLTSDWFERASPRIILAAQQLCNALSQVD",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P37028"
         },
         "label":"btuf_ecoli"
      },
      {
         "object":"interaction",
         "id":"471",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intenz",
               "id":"3.6.3.33"
            },
            {
               "db":"wwpdb",
               "id":"4fi3"
            },
            {
               "db":"wwpdb",
               "id":"2qi9"
            },
            {
               "db":"intact",
               "id":"EBI-8758197"
            }
         ],
         "participants":[
            {
               "interactorRef":"467",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"472",
                     "name":"btuc binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "473"
                     ]
                  },
                  {
                     "id":"474",
                     "name":"btuf binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "475"
                     ]
                  },
                  {
                     "id":"476",
                     "name":"btud binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "477"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"7",
               "bioRole":{
                  "id":"MI:0502",
                  "name":"enzyme target"
               },
               "bindingSites":[
                  {
                     "id":"478",
                     "name":"btud binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "479"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"468",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0684",
                  "name":"ancillary"
               },
               "bindingSites":[
                  {
                     "id":"473",
                     "name":"cobalamin binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-326"
                     ],
                     "linkedFeatures":[
                        "472"
                     ]
                  },
                  {
                     "id":"480",
                     "name":"btuc dimerization region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-326"
                     ]
                  },
                  {
                     "id":"481",
                     "name":"btud binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-326"
                     ],
                     "linkedFeatures":[
                        "482"
                     ]
                  },
                  {
                     "id":"483",
                     "name":"btuf binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-326"
                     ],
                     "linkedFeatures":[
                        "484"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"469",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"485",
                     "name":"btud dimerization region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-249"
                     ]
                  },
                  {
                     "id":"479",
                     "name":"atp binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-249"
                     ],
                     "linkedFeatures":[
                        "478"
                     ]
                  },
                  {
                     "id":"477",
                     "name":"cobalamin binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-249"
                     ],
                     "linkedFeatures":[
                        "476"
                     ]
                  },
                  {
                     "id":"482",
                     "name":"btuc binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-249"
                     ],
                     "linkedFeatures":[
                        "481"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"470",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0684",
                  "name":"ancillary"
               },
               "bindingSites":[
                  {
                     "id":"484",
                     "name":"btuc binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-266"
                     ],
                     "linkedFeatures":[
                        "483"
                     ]
                  },
                  {
                     "id":"475",
                     "name":"cobalamin binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-266"
                     ],
                     "linkedFeatures":[
                        "474"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interaction",
         "id":"486",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"wwpdb",
               "id":"1l7v"
            },
            {
               "db":"intact",
               "id":"EBI-8760580"
            }
         ],
         "participants":[
            {
               "interactorRef":"469",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"487",
                     "name":"btud dimerization region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-249"
                     ]
                  },
                  {
                     "id":"488",
                     "name":"btuc binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-249"
                     ],
                     "linkedFeatures":[
                        "489"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"468",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"489",
                     "name":"btud binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-326"
                     ],
                     "linkedFeatures":[
                        "488"
                     ]
                  },
                  {
                     "id":"490",
                     "name":"btuc dimerization region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-326"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"491",
         "sequence":"MKIKTILTPVTCALLISFSAHAANADNYKNVINRTGAPQYMKDYDYDDHQRFNPFFDLGAWHGHLLPDGPNTMGGFPGVALLTEEYINFMASNFDRLTVWQDGKKVDFTLEAYSIPGALVQKLTAKDVQVEMTLRFATPRTSLLETKITSNKPLDLVWDGELLEKLEAKEGKPLSDKTIAGEYPDYQRKISATRDGLKVTFGKVRATWDLLTSGESEYQVHKSLPVQTEINGNRFTSKAHINGSTTLYTTYSHLLTAQEVSKEQMQIRDILARPAFYLTASQQRWEEYLKKGLTNPDATPEQTRVAVKAIETLNGNWRSPGGAVKFNTVTPSVTGRWFSGNQTWPWDTWKQAFAMAHFNPDIAKENIRAVFSWQIQPGDSVRPQDVGFVPDLIAWNLSPERGGDGGNWNERNTKPSLAAWSVMEVYNVTQDKTWVAEMYPKLVAYHDWWLRNRDHNGNGVPEYGATRDKAHNTESGEMLFTVKKGDKEETQSGLNNYARVVEKGQYDSLEIPAQVAASWESGRDDAAVFGFIDKEQLDKYVANGGKRSDWTVKFAENRSQDGTLLGYSLLQESVDQASYMYSDNHYLAEMATILGKPEEAKRYRQLAQQLADYINTCMFDPTTQFYYDVRIEDKPLANGCAGKPIVERGKGPEGWSPLFNGAATQANADAVVKVMLDPKEFNTFVPLGTAALTNPAFGADIYWRGRVWVDQFWFGLKGMERYGYRDDALKLADTFFRHAKGLTADGPIQENYNPLTGAQQGAPNFSWSAAHLYMLYNDFFRKQ",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P42592"
         },
         "label":"ygjk_ecoli"
      },
      {
         "object":"interaction",
         "id":"492",
         "interactionType":{
            "id":"MI:0407",
            "name":"direct interaction"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intenz",
               "id":"EC 3.2.1.-"
            },
            {
               "db":"intact",
               "id":"EBI-9206905"
            },
            {
               "db":"wwpdb",
               "id":"3w7s"
            },
            {
               "db":"wwpdb",
               "id":"3W7X"
            },
            {
               "db":"wwpdb",
               "id":"3w7u"
            },
            {
               "db":"wwpdb",
               "id":"3W7W"
            },
            {
               "db":"wwpdb",
               "id":"3w7t"
            },
            {
               "db":"wwpdb",
               "id":"3d3i"
            }
         ],
         "participants":[
            {
               "interactorRef":"491",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"493",
                     "name":"dimerisation domain",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"494",
         "type":{
            "id":"MI:0328",
            "name":"small molecule"
         },
         "identifier":{
            "db":"chebi",
            "id":"CHEBI:49637"
         },
         "label":"hydrogen atom"
      },
      {
         "object":"interactor",
         "id":"495",
         "type":{
            "id":"MI:0328",
            "name":"small molecule"
         },
         "identifier":{
            "db":"chebi",
            "id":"CHEBI:25805"
         },
         "label":"oxygen atom"
      },
      {
         "object":"interactor",
         "id":"496",
         "sequence":"MFGKLSLDAVPFHEPIVMVTIAGIILGGLALVGLITYFGKWTYLWKEWLTSVDHKRLGIMYIIVAIVMLLRGFADAIMMRSQQALASAGEAGFLPPHHYDQIFTAHGVIMIFFVAMPFVIGLMNLVVPLQIGARDVAFPFLNNLSFWFTVVGVILVNVSLGVGEFAQTGWLAYPPLSGIEYSPGVGVDYWIWSLQLSGIGTTLTGINFFVTILKMRAPGMTMFKMPVFTWASLCANVLIIASFPILTVTVALLTLDRYLGTHFFTNDMGGNMMMYINLIWAWGHPEVYILILPVFGVFSEIAATFSRKRLFGYTSLVWATVCITVLSFIVWLHHFFTMGAGANVNAFFGITTMIIAIPTGVKIFNWLFTMYQGRIVFHSAMLWTIGFIVTFSVGGMTGVLLAVPGADFVLHNSLFLIAHFHNVIIGGVVFGCFAGMTYWWPKAFGFKLNETWGKRAFWFWIIGFFVAFMPLYALGFMGMTRRLSQQIDPQFHTMLMIAASGAVLIALGILCLVIQMYVSIRDRDQNRDLTGDPWGGRTLEWATSSPPPFYNFAVVPHVHERDAFWEMKEKGEAYKKPDHYEEIHMPKNSGAGIVIAAFSTIFGFAMIWHIWWLAIVGFAGMIITWIVKSFDEDVDYYVPVAEIEKLENQHFDEITKAGLKNGN",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0ABI8"
         },
         "label":"cyob_ecoli"
      },
      {
         "object":"interactor",
         "id":"497",
         "sequence":"MSHSTDHSGASHGSVKTYMTGFILSIILTVIPFWMVMTGAASPAVILGTILAMAVVQVLVHLVCFLHMNTKSDEGWNMTAFVFTVLIIAILVVGSIWIMWNLNYNMMMH",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0ABJ6"
         },
         "label":"cyod_ecoli"
      },
      {
         "object":"interactor",
         "id":"498",
         "type":{
            "id":"MI:0328",
            "name":"small molecule"
         },
         "identifier":{
            "db":"chebi",
            "id":"CHEBI:17976"
         },
         "label":"ubiquinol"
      },
      {
         "object":"interactor",
         "id":"499",
         "sequence":"MRLRKYNKSLGWLSLFAGTVLLSGCNSALLDPKGQIGLEQRSLILTAFGLMLIVVIPAILMAVGFAWKYRASNKDAKYSPNWSHSNKVEAVVWTVPILIIIFLAVLTWKTTHALEPSKPLAHDEKPITIEVVSMDWKWFFIYPEQGIATVNEIAFPANTPVYFKVTSNSVMNSFFIPRLGSQIYAMAGMQTRLHLIANEPGTYDGISASYSGPGFSGMKFKAIATPDRAAFDQWVAKAKQSPNTMSDMAAFEKLAAPSEYNQVEYFSNVKPDLFADVINKFMAHGKSMDMTQPEGEHSAHEGMEGMDMSHAESAH",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0ABJ1"
         },
         "label":"cyoa_ecoli"
      },
      {
         "object":"interactor",
         "id":"500",
         "sequence":"MATDTLTHATAHAHEHGHHDAGGTKIFGFWIYLMSDCILFSILFATYAVLVNGTAGGPTGKDIFELPFVLVETFLLLFSSITYGMAAIAMYKNNKSQVISWLALTWLFGAGFIGMEIYEFHHLIVNGMGPDRSGFLSAFFALVGTHGLHVTSGLIWMAVLMVQIARRGLTSTNRTRIMCLSLFWHFLDVVWICVFTVVYLMGAM",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0ABJ3"
         },
         "label":"cyoc_ecoli"
      },
      {
         "object":"interactor",
         "id":"501",
         "type":{
            "id":"MI:0328",
            "name":"small molecule"
         },
         "identifier":{
            "db":"chebi",
            "id":"CHEBI:24480"
         },
         "label":"heme o"
      },
      {
         "object":"interactor",
         "id":"502",
         "type":{
            "id":"MI:0328",
            "name":"small molecule"
         },
         "identifier":{
            "db":"chebi",
            "id":"CHEBI:28694"
         },
         "label":"copper atom"
      },
      {
         "object":"interactor",
         "id":"503",
         "type":{
            "id":"MI:0328",
            "name":"small molecule"
         },
         "identifier":{
            "db":"chebi",
            "id":"CHEBI:26355"
         },
         "label":"heme b"
      },
      {
         "object":"interaction",
         "id":"504",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intenz",
               "id":"EC 1.10.3.10"
            },
            {
               "db":"wwpdb",
               "id":"1fft"
            },
            {
               "db":"intact",
               "id":"EBI-8697969"
            }
         ],
         "participants":[
            {
               "interactorRef":"494",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"IA:2717",
                  "name":"proton donor"
               },
               "bindingSites":[
                  {
                     "id":"505",
                     "name":"heme o binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "506"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"495",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0579",
                  "name":"electron donor"
               },
               "bindingSites":[
                  {
                     "id":"507",
                     "name":"heme o binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "508"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"496",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"509",
                     "name":"cyoa binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-663"
                     ],
                     "linkedFeatures":[
                        "510"
                     ]
                  },
                  {
                     "id":"511",
                     "name":"cyoc binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-663"
                     ],
                     "linkedFeatures":[
                        "512"
                     ]
                  },
                  {
                     "id":"513",
                     "name":"cyod binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-663"
                     ],
                     "linkedFeatures":[
                        "514"
                     ]
                  },
                  {
                     "id":"515",
                     "name":"heme b binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-663"
                     ],
                     "linkedFeatures":[
                        "516"
                     ]
                  },
                  {
                     "id":"517",
                     "name":"copper binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-663"
                     ],
                     "linkedFeatures":[
                        "518"
                     ]
                  },
                  {
                     "id":"519",
                     "name":"heme o binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-663"
                     ],
                     "linkedFeatures":[
                        "520"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"497",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"514",
                     "name":"cyob binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-109"
                     ],
                     "linkedFeatures":[
                        "513"
                     ]
                  },
                  {
                     "id":"521",
                     "name":"cyoc binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-109"
                     ],
                     "linkedFeatures":[
                        "522"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"498",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0579",
                  "name":"electron donor"
               }
            },
            {
               "interactorRef":"499",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"510",
                     "name":"cyob binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-315"
                     ],
                     "linkedFeatures":[
                        "509"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"500",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"512",
                     "name":"cyob binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-204"
                     ],
                     "linkedFeatures":[
                        "511"
                     ]
                  },
                  {
                     "id":"522",
                     "name":"cyod binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-204"
                     ],
                     "linkedFeatures":[
                        "521"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"501",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0579",
                  "name":"electron donor"
               },
               "bindingSites":[
                  {
                     "id":"520",
                     "name":"cyob binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "519"
                     ]
                  },
                  {
                     "id":"506",
                     "name":"hydrogen binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "505"
                     ]
                  },
                  {
                     "id":"508",
                     "name":"oxygen binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "507"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"502",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0682",
                  "name":"cofactor"
               },
               "bindingSites":[
                  {
                     "id":"518",
                     "name":"cyob binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "517"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"503",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"IA:2715",
                  "name":"electron donor and electron acceptor"
               },
               "bindingSites":[
                  {
                     "id":"516",
                     "name":"cyob binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "515"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"523",
         "sequence":"MTTIVSVRRNGHVVIAGDGQATLGNTVMKGNVKKVRRLYNDKVIAGFAGGTADAFTLFELFERKLEMHQGHLVKAAVELAKDWRTDRMLRKLEALLAVADETASLIITGNGDVVQPENDLIAIGSGGPYAQAAARALLENTELSAREIAEKALDIAGDICIYTNHFHTIEELSYKA",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0A7B8"
         },
         "label":"hslv_ecoli"
      },
      {
         "object":"interactor",
         "id":"524",
         "sequence":"MSEMTPREIVSELDKHIIGQDNAKRSVAIALRNRWRRMQLNEELRHEVTPKNILMIGPTGVGKTEIARRLAKLANAPFIKVEATKFTEVGYVGKEVDSIIRDLTDAAVKMVRVQAIEKNRYRAEELAEERILDVLIPPAKNNWGQTEQQQEPSAARQAFRKKLREGQLDDKEIEIDLAAAPMGVEIMAPPGMEEMTSQLQSMFQNLGGQKQKARKLKIKDAMKLLIEEEAAKLVNPEELKQDAIDAVEQHGIVFIDEIDKICKRGESSGPDVSREGVQRDLLPLVEGCTVSTKHGMVKTDHILFIASGAFQIAKPSDLIPELQGRLPIRVELQALTTSDFERILTEPNASITVQYKALMATEGVNIEFTDSGIKRIAEAAWQVNESTENIGARRLHTVLERLMEEISYDASDLSGQNITIDADYVSKHLDALVADEDLSRFIL",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0A6H5"
         },
         "label":"hslu_ecoli"
      },
      {
         "object":"interaction",
         "id":"525",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"wwpdb",
               "id":"1hqy"
            },
            {
               "db":"wwpdb",
               "id":"1ht1"
            },
            {
               "db":"wwpdb",
               "id":"1e94"
            },
            {
               "db":"wwpdb",
               "id":"1g4b"
            },
            {
               "db":"intenz",
               "id":"3.4.25.2"
            },
            {
               "db":"wwpdb",
               "id":"1ht2"
            },
            {
               "db":"intact",
               "id":"EBI-8755316"
            },
            {
               "db":"wwpdb",
               "id":"1g3i"
            },
            {
               "db":"wwpdb",
               "id":"1g4a"
            }
         ],
         "participants":[
            {
               "interactorRef":"7",
               "stoichiometry":"6",
               "bioRole":{
                  "id":"MI:0682",
                  "name":"cofactor"
               },
               "bindingSites":[
                  {
                     "id":"526",
                     "name":"hslu binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "527"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"523",
               "stoichiometry":"12",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"528",
                     "name":"duodecamerization region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-176"
                     ]
                  },
                  {
                     "id":"529",
                     "name":"hslu binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-176"
                     ],
                     "linkedFeatures":[
                        "530"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"524",
               "stoichiometry":"6",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"530",
                     "name":"hslv binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "c-c"
                     ],
                     "linkedFeatures":[
                        "529"
                     ]
                  },
                  {
                     "id":"531",
                     "name":"hslu hexamerization region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-443"
                     ]
                  },
                  {
                     "id":"527",
                     "name":"atp binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-443"
                     ],
                     "linkedFeatures":[
                        "526"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"532",
         "sequence":"MAAKDVKFGNDARVKMLRGVNVLADAVKVTLGPKGRNVVLDKSFGAPTITKDGVSVAREIELEDKFENMGAQMVKEVASKANDAAGDGTTTATVLAQAIITEGLKAVAAGMNPMDLKRGIDKAVTAAVEELKALSVPCSDSKAIAQVGTISANSDETVGKLIAEAMDKVGKEGVITVEDGTGLQDELDVVEGMQFDRGYLSPYFINKPETGAVELESPFILLADKKISNIREMLPVLEAVAKAGKPLLIIAEDVEGEALATLVVNTMRGIVKVAAVKAPGFGDRRKAMLQDIATLTGGTVISEEIGMELEKATLEDLGQAKRVVINKDTTTIIDGVGEEAAIQGRVAQIRQQIEEATSDYDREKLQERVAKLAGGVAVIKVGAATEVEMKEKKARVEDALHATRAAVEEGVVAGGGVALIRVASKLADLRGQNEDQNVGIKVALRAMEAPLRQIVLNCGEEPSVVANTVKGGDGNYGYNAATEEYGNMIDMGILDPTKVTRSALQYAASVAGLMITTECMVTDLPKNDAADLGAAGGMGGMGGMGGMM",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0A6F5"
         },
         "label":"ch60_ecoli"
      },
      {
         "object":"interactor",
         "id":"533",
         "sequence":"MNIRPLHDRVIVKRKEVETKSAGGIVLTGSAAAKSTRGEVLAVGNGRILENGEVKPLDVKVGDIVIFNDGYGVKSEKIDNEEVLIMSESDILAIVEA",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0A6F9"
         },
         "label":"ch10_ecoli"
      },
      {
         "object":"interaction",
         "id":"534",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"emdb",
               "id":"2325"
            },
            {
               "db":"intact",
               "id":"EBI-8769099"
            },
            {
               "db":"wwpdb",
               "id":"1SVT"
            },
            {
               "db":"wwpdb",
               "id":"1PCQ"
            }
         ],
         "participants":[
            {
               "interactorRef":"7",
               "stoichiometry":"7",
               "bioRole":{
                  "id":"MI:0502",
                  "name":"enzyme target"
               }
            },
            {
               "interactorRef":"532",
               "stoichiometry":"14",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               }
            },
            {
               "interactorRef":"533",
               "stoichiometry":"7",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               }
            }
         ]
      },
      {
         "object":"interactor",
         "id":"535",
         "sequence":"MIKLSNITKVFHQGTRTIQALNNVSLHVPAGQIYGVIGASGAGKSTLIRCVNLLERPTEGSVLVDGQELTTLSESELTKARRQIGMIFQHFNLLSSRTVFGNVALPLELDNTPKDEVKRRVTELLSLVGLGDKHDSYPSNLSGGQKQRVAIARALASNPKVLLCDEATSALDPATTRSILELLKDINRRLGLTILLITHEMDVVKRICDCVAVISNGELIEQDTVSEVFSHPKTPLAQKFIQSTLHLDIPEDYQERLQAEPFTDCVPMLRLEFTGQSVDAPLLSETARRFNVNNNIISAQMDYAGGVKFGIMLTEMHGTQQDTQAAIAWLQEHHVKVEVLGYV",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P30750"
         },
         "label":"metn_ecoli"
      },
      {
         "object":"interactor",
         "id":"536",
         "sequence":"MSEPMMWLLVRGVWETLAMTFVSGFFGFVIGLPVGVLLYVTRPGQIIANAKLYRTVSAIVNIFRSIPFIILLVWMIPFTRVIVGTSIGLQAAIVPLTVGAAPFIARMVENALLEIPTGLIEASRAMGATPMQIVRKVLLPEALPGLVNAATITLITLVGYSAMGGAVGAGGLGQIGYQYGYIGYNATVMNTVLVLLVILVYLIQFAGDRIVRAVTRK",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P31547"
         },
         "label":"meti_ecoli"
      },
      {
         "object":"interaction",
         "id":"537",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intenz",
               "id":"EC 3.6.3"
            },
            {
               "db":"intact",
               "id":"EBI-8771827"
            },
            {
               "db":"wwpdb",
               "id":"3tuj"
            },
            {
               "db":"wwpdb",
               "id":"3tuz"
            },
            {
               "db":"wwpdb",
               "id":"3tui"
            }
         ],
         "participants":[
            {
               "interactorRef":"7",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0502",
                  "name":"enzyme target"
               },
               "bindingSites":[
                  {
                     "id":"538",
                     "name":"metn binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "539"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"535",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"540",
                     "name":"dimerisation domain",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-343"
                     ]
                  },
                  {
                     "id":"541",
                     "name":"meti binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-343"
                     ],
                     "linkedFeatures":[
                        "542"
                     ]
                  },
                  {
                     "id":"543",
                     "name":"methionine binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-343"
                     ]
                  },
                  {
                     "id":"539",
                     "name":"atp binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-343"
                     ],
                     "linkedFeatures":[
                        "538"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"536",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0684",
                  "name":"ancillary"
               },
               "bindingSites":[
                  {
                     "id":"544",
                     "name":"dimerisation domain",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-217"
                     ]
                  },
                  {
                     "id":"545",
                     "name":"methionine binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-217"
                     ]
                  },
                  {
                     "id":"542",
                     "name":"metn binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-217"
                     ],
                     "linkedFeatures":[
                        "541"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"546",
         "type":{
            "id":"MI:0328",
            "name":"small molecule"
         },
         "identifier":{
            "db":"chebi",
            "id":"CHEBI:36264"
         },
         "label":"molybdate"
      },
      {
         "object":"interactor",
         "id":"547",
         "sequence":"MQAEILLTLKLQQKLFADPRRISLLKHIALSGSISQGAKDAGISYKSAWDAINEMNQLSEHILVERATGGKGGGGAVLTRYGQRLIQLYDLLAQIQQKAFDVLSDDDALPLNSLLAAISRFSLQTSARNQWFGTITARDHDDVQQHVDVLLADGKTRLKVAITAQSGARLGLDEGKEVLILLKAPWVGITQDEAVAQNADNQLPGIISHIERGAEQCEVLMALPDGQTLCATVPVNEATSLQQGQNVTAYFNADSVIIATLC",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0A9G8"
         },
         "label":"mode_ecoli"
      },
      {
         "object":"interaction",
         "id":"548",
         "interactionType":{
            "id":"MI:0407",
            "name":"direct interaction"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"wwpdb",
               "id":"1b9m"
            },
            {
               "db":"wwpdb",
               "id":"1h9r"
            },
            {
               "db":"intact",
               "id":"EBI-8774452"
            },
            {
               "db":"wwpdb",
               "id":"1o7l"
            }
         ],
         "participants":[
            {
               "interactorRef":"546",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               }
            },
            {
               "interactorRef":"547",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               }
            }
         ]
      },
      {
         "object":"interactor",
         "id":"549",
         "sequence":"MHNDKDLSTWQTFRRLWPTIAPFKAGLIVAGVALILNAASDTFMLSLLKPLLDDGFGKTDRSVLVWMPLVVIGLMILRGITSYVSSYCISWVSGKVVMTMRRRLFGHMMGMPVSFFDKQSTGTLLSRITYDSEQVASSSSGALITVVREGASIIGLFIMMFYYSWQLSIILIVLAPIVSIAIRVVSKRFRNISKNMQNTMGQVTTSAEQMLKGHKEVLIFGGQEVETKRFDKVSNRMRLQGMKMVSASSISDPIIQLIASLALAFVLYAASFPSVMDSLTAGTITVVFSSMIALMRPLKSLTNVNAQFQRGMAACQTLFTILDSEQEKDEGKRVIERATGDVEFRNVTFTYPGRDVPALRNINLKIPAGKTVALVGRSGSGKSTIASLITRFYDIDEGEILMDGHDLREYTLASLRNQVALVSQNVHLFNDTVANNIAYARTEQYSREQIEEAARMAYAMDFINKMDNGLDTVIGENGVLLSGGQRQRIAIARALLRDSPILILDEATSALDTESERAIQAALDELQKNRTSLVIAHRLSTIEKADEIVVVEDGVIVERGTHNDLLEHRGVYAQLHKMQFGQ",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P60752"
         },
         "label":"msba_ecoli"
      },
      {
         "object":"interaction",
         "id":"550",
         "interactionType":{
            "id":"MI:0407",
            "name":"direct interaction"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"wwpdb",
               "id":"3b5w"
            },
            {
               "db":"intact",
               "id":"EBI-8784378"
            },
            {
               "db":"intenz",
               "id":"EC 3.6.3"
            }
         ],
         "participants":[
            {
               "interactorRef":"7",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0502",
                  "name":"enzyme target"
               }
            },
            {
               "interactorRef":"549",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"551",
                     "name":"dimerisation domain",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"552",
         "sequence":"MRVITLAGSPRFPSRSSSLLEYAREKLNGLDVEVYHWNLQNFAPEDLLYARFDSPALKTFTEQLQQADGLIVATPVYKAAYSGALKTLLDLLPERALQGKVVLPLATGGTVAHLLAVDYALKPVLSALKAQEILHGVFADDSQVIDYHHRPQFTPNLQTRLDTALETFWQALHRRDVQVPDLLSLRGNAHA",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P80644"
         },
         "label":"ssue_ecoli"
      },
      {
         "object":"interaction",
         "id":"553",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intenz",
               "id":"EC 1.5.1.38"
            },
            {
               "db":"intact",
               "id":"EBI-8786881"
            }
         ],
         "participants":[
            {
               "interactorRef":"552",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"554",
                     "name":"dimerisation domain",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"555",
         "sequence":"MSLNMFWFLPTHGDGHYLGTEEGSRPVDHGYLQQIAQAADRLGYTGVLIPTGRSCEDAWLVAASMIPVTQRLKFLVALRPSVTSPTVAARQAATLDRLSNGRALFNLVTGSDPQELAGDGVFLDHSERYEASAEFTQVWRRLLQRETVDFNGKHIHVRGAKLLFPAIQQPYPPLYFGGSSDVAQELAAEQVDLYLTWGEPPELVKEKIEQVRAKAAAHGRKIRFGIRLHVIVRETNDEAWQAAERLISHLDDETIAKAQAAFARTDSVGQQRMAALHNGKRDNLEISPNLWAGVGLVRGGAGTALVGDGPTVAARINEYAALGIDSFVLSGYPHLEEAYRVGELLFPLLDVAIPEIPQPQPLNPQGEAVANDFIPRKVAQS",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P80645"
         },
         "label":"ssud_ecoli"
      },
      {
         "object":"interaction",
         "id":"556",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"wwpdb",
               "id":"1m41"
            },
            {
               "db":"intact",
               "id":"EBI-8786862"
            },
            {
               "db":"intenz",
               "id":"EC 1.14.14.5"
            }
         ],
         "participants":[
            {
               "interactorRef":"555",
               "stoichiometry":"4",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"557",
                     "name":"tetramerisation domain",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"558",
         "type":{
            "id":"MI:0328",
            "name":"small molecule"
         },
         "identifier":{
            "db":"chebi",
            "id":"CHEBI:29033"
         },
         "label":"iron2plus"
      },
      {
         "object":"interactor",
         "id":"559",
         "sequence":"MSERLSITPLGPYIGAQISGADLTRPLSDNQFEQLYHAVLRHQVVFLRDQAITPQQQRALAQRFGELHIHPVYPHAEGVDEIIVLDTHNDNPPDNDNWHTDVTFIETPPAGAILAAKELPSTGGDTLWTSGIAAYEALSVPFRQLLSGLRAEHDFRKSFPEYKYRKTEEEHQRWREAVAKNPPLLHPVVRTHPVSGKQALFVNEGFTTRIVDVSEKESEALLSFLFAHITKPEFQVRWRWQPNDIAIWDNRVTQHYANADYLPQRRIMHRATILGDKPFYRAG",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P37610"
         },
         "label":"taud_ecoli"
      },
      {
         "object":"interaction",
         "id":"560",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intenz",
               "id":"EC 1.14.11.17"
            },
            {
               "db":"wwpdb",
               "id":"1os7"
            },
            {
               "db":"wwpdb",
               "id":"1otj"
            },
            {
               "db":"intact",
               "id":"EBI-8789156"
            }
         ],
         "participants":[
            {
               "interactorRef":"558",
               "stoichiometry":"4",
               "bioRole":{
                  "id":"MI:0682",
                  "name":"cofactor"
               },
               "bindingSites":[
                  {
                     "id":"561",
                     "name":"taud binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "562"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"559",
               "stoichiometry":"4",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"563",
                     "name":"tetramerization region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-283"
                     ]
                  },
                  {
                     "id":"562",
                     "name":"fe2+ binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-283"
                     ],
                     "linkedFeatures":[
                        "561"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"564",
         "sequence":"MNPYIYLGGAILAEVIGTTLMKFSEGFTRLWPSVGTIICYCASFWLLAQTLAYIPTGIAYAIWSGVGIVLISLLSWGFFGQRLDLPAIIGMMLICAGVLIINLLSRSTPH",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P23895"
         },
         "label":"emre_ecoli"
      },
      {
         "object":"interaction",
         "id":"565",
         "interactionType":{
            "id":"MI:0407",
            "name":"direct interaction"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"wwpdb",
               "id":"3b5d"
            },
            {
               "db":"intact",
               "id":"EBI-8789430"
            },
            {
               "db":"emdb",
               "id":"EMD-1087"
            },
            {
               "db":"wwpdb",
               "id":"3b62"
            },
            {
               "db":"wwpdb",
               "id":"3b61"
            }
         ],
         "participants":[
            {
               "interactorRef":"564",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               }
            }
         ]
      },
      {
         "object":"interactor",
         "id":"566",
         "type":{
            "id":"MI:0328",
            "name":"small molecule"
         },
         "identifier":{
            "db":"chebi",
            "id":"CHEBI:17877"
         },
         "label":"fadh2"
      },
      {
         "object":"interactor",
         "id":"567",
         "sequence":"MSRNTEATDDVKTWTGGPLNYKEGFFTQLATDELAKGINEEVVRAISAKRNEPEWMLEFRLNAYRAWLEMEEPHWLKAHYDKLNYQDYSYYSAPSCGNCDDTCASEPGAVQQTGANAFLSKEVEAAFEQLGVPVREGKEVAVDAIFDSVSVATTYREKLAEQGIIFCSFGEAIHDHPELVRKYLGTVVPGNDNFFAALNAAVASDGTFIYVPKGVRCPMELSTYFRINAEKTGQFERTILVADEDSYVSYIEGCSAPVRDSYQLHAAVVEVIIHKNAEVKYSTVQNWFPGDNNTGGILNFVTKRALCEGENSKMSWTQSETGSAITWKYPSCILRGDNSIGEFYSVALTSGHQQADTGTKMIHIGKNTKSTIISKGISAGHSQNSYRGLVKIMPTATNARNFTQCDSMLIGANCGAHTFPYVECRNNSAQLEHEATTSRIGEDQLFYCLQRGISEEDAISMIVNGFCKDVFSELPLEFAVEAQKLLAISLEHSVG",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P77522"
         },
         "label":"sufb_ecoli"
      },
      {
         "object":"interactor",
         "id":"568",
         "sequence":"MLSIKDLHVSVEDKAILRGLSLDVHPGEVHAIMGPNGSGKSTLSATLAGREDYEVTGGTVEFKGKDLLALSPEDRAGEGIFMAFQYPVEIPGVSNQFFLQTALNAVRSYRGQETLDRFDFQDLMEEKIALLKMPEDLLTRSVNVGFSGGEKKRNDILQMAVLEPELCILDESDSGLDIDALKVVADGVNSLRDGKRSFIIVTHYQRILDYIKPDYVHVLYQGRIVKSGDFTLVKQLEEQGYGWLTEQQ",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P77499"
         },
         "label":"sufc_ecoli"
      },
      {
         "object":"interactor",
         "id":"569",
         "sequence":"MAGLPNSSNALQQWHHLFEAEGTKRSPQAQQHLQQLLRTGLPTRKHENWKYTPLEGLINSQFVSIAGEISPQQRDALALTLDSVRLVFVDGRYVPALSDATEGSGYEVSINDDRQGLPDAIQAEVFLHLTESLAQSVTHIAVKRGQRPAKPLLLMHITQGVAGEEVNTAHYRHHLDLAEGAEATVIEHFVSLNDARHFTGARFTINVAANAHLQHIKLAFENPLSHHFAHNDLLLAEDATAFSHSFLLGGAVLRHNTSTQLNGENSTLRINSLAMPVKNEVCDTRTWLEHNKGFCNSRQLHKTIVSDKGRAVFNGLINVAQHAIKTDGQMTNNNLLMGKLAEVDTKPQLEIYADDVKCSHGATVGRIDDEQIFYLRSRGINQQDAQQMIIYAFAAELTEALRDEGLKQQVLARIGQRLPGGAR",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P77689"
         },
         "label":"sufd_ecoli"
      },
      {
         "object":"interaction",
         "id":"570",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intact",
               "id":"EBI-8792805"
            }
         ],
         "participants":[
            {
               "interactorRef":"566",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               }
            },
            {
               "interactorRef":"567",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"571",
                     "name":"sufc binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "572"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"568",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"573",
                     "name":"sufd binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "574"
                     ]
                  },
                  {
                     "id":"572",
                     "name":"sufb binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "571"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"569",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"574",
                     "name":"sufc binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "573"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"575",
         "sequence":"MIFSVDKVRADFPVLSREVNGLPLAYLDSAASAQKPSQVIDAEAEFYRHGYAAVHRGIHTLSAQATEKMENVRKRASLFINARSAEELVFVRGTTEGINLVANSWGNSNVRAGDNIIISQMEHHANIVPWQMLCARVGAELRVIPLNPDGTLQLETLPTLFDEKTRLLAITHVSNVLGTENPLAEMITLAHQHGAKVLVDGAQAVMHHPVDVQALDCDFYVFSGHKLYGPTGIGILYVKEALLQEMPPWEGGGSMIATVSLSEGTTWTKAPWRFEAGTPNTGGIIGLGAALEYVSALGLNNIAEYEQNLMHYALSQLESVPDLTLYGPQNRLGVIAFNLGKHHAYDVGSFLDNYGIAVRTGHHCAMPLMAYYNVPAMCRASLAMYNTHEEVDRLVTGLQRIHRLLG",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P77444"
         },
         "label":"sufs_ecoli"
      },
      {
         "object":"interaction",
         "id":"576",
         "interactionType":{
            "id":"MI:0407",
            "name":"direct interaction"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intenz",
               "id":"EC 4.4.1.16"
            },
            {
               "db":"intenz",
               "id":"EC 2.8.1.7"
            },
            {
               "db":"intact",
               "id":"EBI-8793636"
            },
            {
               "db":"wwpdb",
               "id":"1jf9"
            }
         ],
         "participants":[
            {
               "interactorRef":"575",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"577",
                     "name":"dimerisation domain",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"578",
         "sequence":"MALLPDKEKLLRNFLRCANWEEKYLYIIELGQRLPELRDEDRSPQNSIQGCQSQVWIVMRQNAQGIIELQGDSDAAIVKGLIAVVFILYDQMTPQDIVNFDVRPWFEKMALTQHLTPSRSQGLEAMIRAIRAKAAALS",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P76194"
         },
         "label":"sufe_ecoli"
      },
      {
         "object":"interaction",
         "id":"579",
         "interactionType":{
            "id":"MI:0407",
            "name":"direct interaction"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"wwpdb",
               "id":"1mzg"
            },
            {
               "db":"intact",
               "id":"EBI-8794010"
            }
         ],
         "participants":[
            {
               "interactorRef":"578",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"580",
                     "name":"dimerisation domain",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"581",
         "sequence":"MRHSVLFATAFATLISTQTFAADLPGKGITVNPVQSTITEETFQTLLVSRALEKLGYTVNKPSEVDYNVGYTSLASGDATFTAVNWTPLHDNMYEAAGGDKKFYREGVFVNGAAQGYLIDKKTADQYKITNIAQLKDPKIAKLFDTNGDGKADLTGCNPGWGCEGAINHQLAAYELTNTVTHNQGNYAAMMADTISRYKEGKPVFYYTWTPYWVSNELKPGKDVVWLQVPFSALPGDKNADTKLPNGANYGFPVSTMHIVANKAWAEKNPAAAKLFAIMQLPVADINAQNAIMHDGKASEGDIQGHVDGWIKAHQQQFDGWVNEALAAQK",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0AFM2"
         },
         "label":"prox_ecoli"
      },
      {
         "object":"interactor",
         "id":"582",
         "sequence":"MAIKLEIKNLYKIFGEHPQRAFKYIEQGLSKEQILEKTGLSLGVKDASLAIEEGEIFVIMGLSGSGKSTMVRLLNRLIEPTRGQVLIDGVDIAKISDAELREVRRKKIAMVFQSFALMPHMTVLDNTAFGMELAGINAEERREKALDALRQVGLENYAHSYPDELSGGMRQRVGLARALAINPDILLMDEAFSALDPLIRTEMQDELVKLQAKHQRTIVFISHDLDEAMRIGDRIAIMQNGEVVQVGTPDEILNNPANDYVRTFFRGVDISQVFSAKDIARRTPNGLIRKTPGFGPRSALKLLQDEDREYGYVIERGNKFVGAVSIDSLKTALTQQQGLDAALIDAPLAVDAQTPLSELLSHVGQAPCAVPVVDEDQQYVGIISKGMLLRALDREGVNNG",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P14175"
         },
         "label":"prov_ecoli"
      },
      {
         "object":"interactor",
         "id":"583",
         "sequence":"MADQNNPWDTTPAADSAAQSADAWGTPTTAPTDGGGADWLTSTPAPNVEHFNILDPFHKTLIPLDSWVTEGIDWVVTHFRPVFQGVRVPVDYILNGFQQLLLGMPAPVAIIVFALIAWQISGVGMGVATLVSLIAIGAIGAWSQAMVTLALVLTALLFCIVIGLPLGIWLARSPRAAKIIRPLLDAMQTTPAFVYLVPIVMLFGIGNVPGVVVTIIFALPPIIRLTILGINQVPADLIEASRSFGASPRQMLFKVQLPLAMPTIMAGVNQTLMLALSMVVIASMIAVGGLGQMVLRGIGRLDMGLATVGGVGIVILAIILDRLTQAVGRDSRSRGNRRWYTTGPVGLLTRPFIK",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P14176"
         },
         "label":"prow_ecoli"
      },
      {
         "object":"interaction",
         "id":"584",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intact",
               "id":"EBI-8795483"
            }
         ],
         "participants":[
            {
               "interactorRef":"581",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               }
            },
            {
               "interactorRef":"582",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               }
            },
            {
               "interactorRef":"583",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               }
            }
         ]
      },
      {
         "object":"interactor",
         "id":"585",
         "sequence":"MDMHSGTFNPQDFAWQGLTLTPAAAIHIRELVAKQPGMVGVRLGVKQTGCAGFGYVLDSVSEPDKDDLLFEHDGAKLFVPLQAMPFIDGTEVDFVREGLNQIFKFHNPKAQNECGCGESFGV",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P77667"
         },
         "label":"sufa_ecoli"
      },
      {
         "object":"interaction",
         "id":"586",
         "interactionType":{
            "id":"MI:0407",
            "name":"direct interaction"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"wwpdb",
               "id":"2d2a"
            },
            {
               "db":"intact",
               "id":"EBI-8871521"
            }
         ],
         "participants":[
            {
               "interactorRef":"585",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"587",
                     "name":"dimerisation domain",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"588",
         "sequence":"MSITLSDSAAARVNTFLANRGKGFGLRLGVRTSGCSGMAYVLEFVDEPTPEDIVFEDKGVKVVVDGKSLQFLDGTQLDFVKEGLNEGFKFTNPNVKDECGCGESFHV",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0AAC8"
         },
         "label":"isca_ecoli"
      },
      {
         "object":"interaction",
         "id":"589",
         "interactionType":{
            "id":"MI:0407",
            "name":"direct interaction"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"wwpdb",
               "id":"1s98"
            },
            {
               "db":"intact",
               "id":"EBI-8849999"
            }
         ],
         "participants":[
            {
               "interactorRef":"588",
               "stoichiometry":"4",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"590",
                     "name":"tetramerization region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"591",
         "sequence":"MPSAHSVKLRPLEREDLRYVHQLDNNASVMRYWFEEPYEAFVELSDLYDKHIHDQSERRFVVECDGEKAGLVELVEINHVHRRAEFQIIISPEYQGKGLATRAAKLAMDYGFTVLNLYKLYLIVDKENEKAIHIYRKLGFSVEGELMHEFFINGQYRNAIRMCIFQHQYLAEHKTPGQTLLKPTAQ",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0A951"
         },
         "label":"atda_ecoli"
      },
      {
         "object":"interaction",
         "id":"592",
         "interactionType":{
            "id":"MI:0407",
            "name":"direct interaction"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intenz",
               "id":"EC 2.3.1.57"
            },
            {
               "db":"intact",
               "id":"EBI-8850049"
            }
         ],
         "participants":[
            {
               "interactorRef":"591",
               "stoichiometry":"4",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"593",
                     "name":"tetramerisation domain",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"594",
         "sequence":"MQILFNDQAMQCAAGQTVHELLEQLDQRQAGAALAINQQIVPREQWAQHIVQDGDQILLFQVIAGG",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"O32583"
         },
         "label":"this_ecoli"
      },
      {
         "object":"interactor",
         "id":"595",
         "sequence":"MNDRDFMRYSRQILLDDIALDGQQKLLDSQVLIIGLGGLGTPAALYLAGAGVGTLVLADDDDVHLSNLQRQILFTTEDIDRPKSQVSQQRLTQLNPDIQLTALQQRLTGEALKDAVARADVVLDCTDNMATRQEINAACVALNTPLITASAVGFGGQLMVLTPPWEQGCYRCLWPDNQEPERNCRTAGVVGPVVGVMGTLQALEAIKLLSGIETPAGELRLFDGKSSQWRSLALRRASGCPVCGGSNADPV",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P30138"
         },
         "label":"thif_ecoli"
      },
      {
         "object":"interaction",
         "id":"596",
         "interactionType":{
            "id":"MI:0407",
            "name":"direct interaction"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intenz",
               "id":"EC 2.7.7.73"
            },
            {
               "db":"intact",
               "id":"EBI-8850353"
            },
            {
               "db":"wwpdb",
               "id":"1zud"
            },
            {
               "db":"intenz",
               "id":"EC 5.3.4.1"
            }
         ],
         "participants":[
            {
               "interactorRef":"594",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"597",
                     "name":"thif binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "598"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"595",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"599",
                     "name":"dimerisation domain",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ]
                  },
                  {
                     "id":"598",
                     "name":"this binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "597"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"600",
         "sequence":"MLRIADKTFDSHLFTGTGKFASSQLMVEAIRASGSQLVTLAMKRVDLRQHNDAILEPLIAAGVTLLPNTSGAKTAEEAIFAAHLAREALGTNWLKLEIHPDARWLLPDPIETLKAAETLVQQGFVVLPYCGADPVLCKRLEEVGCAAVMPLGAPIGSNQGLETRAMLEIIIQQATVPVVVDAGIGVPSHAAQALEMGADAVLVNTAIAVADDPVNMAKAFRLAVEAGLLARQSGPGSRSYFAHATSPLTGFLEASA",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P30139"
         },
         "label":"thig_ecoli"
      },
      {
         "object":"interactor",
         "id":"601",
         "sequence":"MKTFSDRWRQLDWDDIRLRINGKTAADVERALNASQLTRDDMMALLSPAASGYLEQLAQRAQRLTRQRFGNTVSFYVPLYLSNLCANDCTYCGFSMSNRIKRKTLDEADIARESAAIREMGFEHLLLVTGEHQAKVGMDYFRRHLPALREQFSSLQMEVQPLAETEYAELKQLGLDGVMVYQETYHEATYARHHLKGKKQDFFWRLETPDRLGRAGIDKIGLGALIGLSDNWRVDSYMVAEHLLWLQQHYWQSRYSVSFPRLRPCTGGIEPASIMDERQLVQTICAFRLLAPEIELSLSTRESPWFRDRVIPLAINNVSAFSKTQPGGYADNHPELEQFSPHDDRRPEAVAAALTAQGLQPVWKDWDSYLGRASQRL",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P30140"
         },
         "label":"thih_ecoli"
      },
      {
         "object":"interaction",
         "id":"602",
         "interactionType":{
            "id":"MI:0407",
            "name":"direct interaction"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intenz",
               "id":"EC 2.8.1.10"
            },
            {
               "db":"intact",
               "id":"EBI-8851217"
            },
            {
               "db":"intenz",
               "id":"EC 4.1.99.19"
            }
         ],
         "participants":[
            {
               "interactorRef":"600",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"603",
                     "name":"thih binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "604"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"601",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"604",
                     "name":"thig binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "603"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"605",
         "sequence":"MKLPIYLDYSATTPVDPRVAEKMMQFMTMDGTFGNPASRSHRFGWQAEEAVDIARNQIADLVGADPREIVFTSGATESDNLAIKGAANFYQKKGKHIITSKTEHKAVLDTCRQLEREGFEVTYLAPQRNGIIDLKELEAAMRDDTILVSIMHVNNEIGVVQDIAAIGEMCRARGIIYHVDATQSVGKLPIDLSQLKVDLMSFSGHKIYGPKGIGALYVRRKPRVRIEAQMHGGGHERGMRSGTLPVHQIVGMGEAYRIAKEEMATEMERLRGLRNRLWNGIKDIEEVYLNGDLEHGAPNILNVSFNYVEGESLIMALKDLAVSSGSACTSASLEPSYVLRALGLNDELAHSSIRFSLGRFTTEEEIDYTIELVRKSIGRLRDLSPLWEMYKQGVDLNSIEWAHH",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0A6B7"
         },
         "label":"iscs_ecoli"
      },
      {
         "object":"interactor",
         "id":"606",
         "type":{
            "id":"MI:0328",
            "name":"small molecule"
         },
         "identifier":{
            "db":"chebi",
            "id":"CHEBI:597326"
         },
         "label":"pyridoxal 5'-phosphate(2-)"
      },
      {
         "object":"interaction",
         "id":"607",
         "interactionType":{
            "id":"MI:0407",
            "name":"direct interaction"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"wwpdb",
               "id":"1p3w"
            },
            {
               "db":"intact",
               "id":"EBI-8851928"
            },
            {
               "db":"intenz",
               "id":"EC 2.8.1.7"
            }
         ],
         "participants":[
            {
               "interactorRef":"605",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"608",
                     "name":"dimerisation domain",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ]
                  },
                  {
                     "id":"609",
                     "name":"pyridoxal-5-phosphate binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "610"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"606",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0682",
                  "name":"cofactor"
               },
               "bindingSites":[
                  {
                     "id":"610",
                     "name":"iscs binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "609"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"611",
         "sequence":"MTNPQFAGHPFGTTVTAETLRNTFAPLTQWEDKYRQLIMLGKQLPALPDELKAQAKEIAGCENRVWLGYTVAENGKMHFFGDSEGRIVRGLLAVLLTAVEGKTAAELQAQSPLALFDELGLRAQLSASRSQGLNALSEAIIAATKQV",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0AGF2"
         },
         "label":"csde_ecoli"
      },
      {
         "object":"interactor",
         "id":"612",
         "type":{
            "id":"MI:0328",
            "name":"small molecule"
         },
         "identifier":{
            "db":"chebi",
            "id":"CHEBI:18405"
         },
         "label":"pyridoxal 5'-phosphate"
      },
      {
         "object":"interactor",
         "id":"613",
         "sequence":"MNVFNPAQFRAQFPALQDAGVYLDSAATALKPEAVVEATQQFYSLSAGNVHRSQFAEAQRLTARYEAAREKVAQLLNAPDDKTIVWTRGTTESINMVAQCYARPRLQPGDEIIVSVAEHHANLVPWLMVAQQTGAKVVKLPLNAQRLPDVDLLPELITPRSRILALGQMSNVTGGCPDLARAITFAHSAGMVVMVDGAQGAVHFPADVQQLDIDFYAFSGHKLYGPTGIGVLYGKSELLEAMSPWLGGGKMVHEVSFDGFTTQSAPWKLEAGTPNVAGVIGLSAALEWLADYDINQAESWSRSLATLAEDALAKRPGFRSFRCQDSSLLAFDFAGVHHSDMVTLLAEYGIALRAGQHCAQPLLAELGVTGTLRASFAPYNTKSDVDALVNAVDRALELLVD",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"Q46925"
         },
         "label":"csda_ecoli"
      },
      {
         "object":"interaction",
         "id":"614",
         "interactionType":{
            "id":"MI:0407",
            "name":"direct interaction"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"wwpdb",
               "id":"4lw4"
            },
            {
               "db":"intact",
               "id":"EBI-8852646"
            },
            {
               "db":"intenz",
               "id":"EC 2.8.1.7"
            }
         ],
         "participants":[
            {
               "interactorRef":"611",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"615",
                     "name":"csda binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "616"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"612",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0682",
                  "name":"cofactor"
               },
               "bindingSites":[
                  {
                     "id":"617",
                     "name":"csda binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "618"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"613",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"616",
                     "name":"csde binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "615"
                     ]
                  },
                  {
                     "id":"618",
                     "name":"plp binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "617"
                     ]
                  },
                  {
                     "id":"619",
                     "name":"dimerisation domain",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interaction",
         "id":"620",
         "interactionType":{
            "id":"MI:0407",
            "name":"direct interaction"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intenz",
               "id":"EC 4.4.1.16"
            },
            {
               "db":"intenz",
               "id":"EC 2.8.1.7"
            },
            {
               "db":"wwpdb",
               "id":"4lw2"
            },
            {
               "db":"intact",
               "id":"EBI-8852607"
            }
         ],
         "participants":[
            {
               "interactorRef":"612",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0682",
                  "name":"cofactor"
               },
               "bindingSites":[
                  {
                     "id":"621",
                     "name":"csda binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "622"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"613",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"623",
                     "name":"dimerisation domain",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ]
                  },
                  {
                     "id":"622",
                     "name":"plp binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "621"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"624",
         "sequence":"MACGEFSLIARYFDRVRSSRLDVELGIGDDCALLNIPEKQTLAISTDTLVAGNHFLPDIDPADLAYKALAVNLSDLAAMGADPAWLTLALTLPDVDEAWLESFSDSLFDLLNYYDMQLIGGDTTRGPLSMTLGIHGFVPMGRALTRSGAKPGDWIYVTGTPGDSAAGLAILQNRLQVADAKDADYLIKRHLRPSPRILQGQALRDLANSAIDLSDGLISDLGHIVKASDCGARIDLALLPFSDALSRHVEPEQALRWALSGGEDYELCFTVPELNRGALDVALGHLGVPFTCIGQMTADIEGLCFIRDGEPVTLDWKGYDHFATP",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0AGG0"
         },
         "label":"thil_ecoli"
      },
      {
         "object":"interaction",
         "id":"625",
         "interactionType":{
            "id":"MI:0407",
            "name":"direct interaction"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intenz",
               "id":"EC 2.8.1.7"
            },
            {
               "db":"intenz",
               "id":"EC 2.7.4.16"
            },
            {
               "db":"intact",
               "id":"EBI-8870047"
            }
         ],
         "participants":[
            {
               "interactorRef":"624",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"626",
                     "name":"iscs binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "627"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"605",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"627",
                     "name":"thil binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "626"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"628",
         "sequence":"MAYSEKVIDHYENPRNVGSFDNNDENVGSGMVGAPACGDVMKLQIKVNDEGIIEDARFKTYGCGSAIASSSLVTEWVKGKSLDEAQAIKNTDIAEELELPPVKIHCSILAEDAIKAAIADYKSKREAK",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0ACD4"
         },
         "label":"iscu_ecoli"
      },
      {
         "object":"interaction",
         "id":"629",
         "interactionType":{
            "id":"MI:0407",
            "name":"direct interaction"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intenz",
               "id":"EC 2.8.1.7"
            },
            {
               "db":"wwpdb",
               "id":"3lvl"
            },
            {
               "db":"intact",
               "id":"EBI-8870238"
            }
         ],
         "participants":[
            {
               "interactorRef":"628",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"630",
                     "name":"iscs binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "631"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"605",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"631",
                     "name":"iscu binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "630"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"632",
         "sequence":"MTDLFSSPDHTLDALGLRCPEPVMMVRKTVRNMQPGETLLIIADDPATTRDIPGFCTFMEHELVAKETDGLPYRYLIRKGG",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0A890"
         },
         "label":"tusa_ecoli"
      },
      {
         "object":"interaction",
         "id":"633",
         "interactionType":{
            "id":"MI:0407",
            "name":"direct interaction"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intenz",
               "id":"EC 2.8.1.7"
            },
            {
               "db":"wwpdb",
               "id":"3lvj"
            },
            {
               "db":"wwpdb",
               "id":"3lvk"
            },
            {
               "db":"intact",
               "id":"EBI-8869931"
            }
         ],
         "participants":[
            {
               "interactorRef":"632",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "ptms":[
                  {
                     "id":"634",
                     "name":"iscs binding region",
                     "type":{
                        "id":"MOD:00274",
                        "name":"L-cysteine persulfide"
                     },
                     "sequenceData":[
                        "19-19"
                     ],
                     "linkedFeatures":[
                        "635"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"605",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "ptms":[
                  {
                     "id":"635",
                     "name":"tusa binding region",
                     "type":{
                        "id":"MOD:00274",
                        "name":"L-cysteine persulfide"
                     },
                     "sequenceData":[
                        "328-328"
                     ],
                     "linkedFeatures":[
                        "634"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"636",
         "sequence":"MLHTLHRSPWLTDFAALLRLLSEGDELLLLQDGVTAAVDGNRYLESLRNAPIKVYALNEDLIARGLTGQISNDIILIDYTDFVRLTVKHPSQMAW",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P45530"
         },
         "label":"tusb_ecoli"
      },
      {
         "object":"interactor",
         "id":"637",
         "sequence":"MKRIAFVFSTAPHGTAAGREGLDALLATSALTDDLAVFFIADGVFQLLPGQKPDAVLARDYIATFKLLGLYDIEQCWVCAASLRERGLDPQTPFVVEATPLEADALRRELANYDVILRF",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P45531"
         },
         "label":"tusc_ecoli"
      },
      {
         "object":"interactor",
         "id":"638",
         "sequence":"MLIFEGKEIETDTEGYLKESSQWSEPLAVVIAENEGISLSPEHWEVVRFVRDFYLEFNTSPAIRMLVKAMANKFGEEKGNSRYLYRLFPKGPAKQATKIAGLPKPVKCI",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0AB18"
         },
         "label":"tuse_ecoli"
      },
      {
         "object":"interactor",
         "id":"639",
         "sequence":"MRFAIVVTGPAYGTQQASSAFQFAQALIADGHELSSVFFYREGVYNANQLTSPASDEFDLVRAWQQLNAQHGVALNICVAAALRRGVVDETEAGRLGLASSNLQQGFTLSGLGALAEASLTCDRVVQF",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P45532"
         },
         "label":"tusd_ecoli"
      },
      {
         "object":"interaction",
         "id":"640",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"wwpdb",
               "id":"2d1p"
            },
            {
               "db":"intenz",
               "id":"EC 2.8.1.7"
            },
            {
               "db":"intact",
               "id":"EBI-8872193"
            }
         ],
         "participants":[
            {
               "interactorRef":"636",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               }
            },
            {
               "interactorRef":"637",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               }
            },
            {
               "interactorRef":"638",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               }
            },
            {
               "interactorRef":"639",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               }
            }
         ]
      },
      {
         "object":"interactor",
         "id":"641",
         "sequence":"MSETAKKVIVGMSGGVDSSVSAWLLQQQGYQVEGLFMKNWEEDDGEEYCTAAADLADAQAVCDKLGIELHTVNFAAEYWDNVFELFLAEYKAGRTPNPDILCNKEIKFKAFLEFAAEDLGADYIATGHYVRRADVDGKSRLLRGLDSNKDQSYFLYTLSHEQIAQSLFPVGELEKPQVRKIAEDLGLVTAKKKDSTGICFIGERKFREFLGRYLPAQPGKIITVDGDEIGEHQGLMYHTLGQRKGLGIGGTKEGTEEPWYVVDKDVENNILVVAQGHEHPRLMSVGLIAQQLHWVDREPFTGTMRCTVKTRYRQTDIPCTVKALDDDRIEVIFDEPVAAVTPGQSAVFYNGEVCLGGGIIEQRLPLPV",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P25745"
         },
         "label":"mnma_ecoli"
      },
      {
         "object":"interactor",
         "id":"642",
         "type":{
            "id":"MI:0325",
            "name":"transfer rna"
         },
         "organism":{
            "taxid":"559292",
            "common":"yeast",
            "scientific":"Saccharomyces cerevisiae (strain ATCC 204508 \/ S288c)"
         },
         "identifier":{
            "db":"chebi",
            "id":"CHEBI:17843"
         },
         "label":"trna"
      },
      {
         "object":"interaction",
         "id":"643",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intenz",
               "id":"EC 2.8.1.7"
            },
            {
               "db":"intact",
               "id":"EBI-8872270"
            }
         ],
         "participants":[
            {
               "interactorRef":"638",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"644",
                     "name":"mnma binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "645"
                     ]
                  }
               ],
               "ptms":[
                  {
                     "id":"646",
                     "name":"persulfide binding site",
                     "type":{
                        "id":"MOD:00274",
                        "name":"L-cysteine persulfide"
                     },
                     "sequenceData":[
                        "108-108"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"641",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"645",
                     "name":"tuse binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "644"
                     ]
                  },
                  {
                     "id":"647",
                     "name":"trna binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "648"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"642",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0502",
                  "name":"enzyme target"
               },
               "bindingSites":[
                  {
                     "id":"648",
                     "name":"mnma binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "647"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"649",
         "sequence":"MGTTKHSKLLILGSGPAGYTAAVYAARANLQPVLITGMEKGGQLTTTTEVENWPGDPNDLTGPLLMERMHEHATKFETEIIFDHINKVDLQNRPFRLNGDNGEYTCDALIIATGASARYLGLPSEEAFKGRGVSACATCDGFFYRNQKVAVIGGGNTAVEEALYLSNIASEVHLIHRRDGFRAEKILIKRLMDKVENGNIILHTNRTLEEVTGDQMGVTGVRLRDTQNSDNIESLDVAGLFVAIGHSPNTAIFEGQLELENGYIKVQSGIHGNATQTSIPGVFAAGDVMDHIYRQAITSAGTGCMAALDAERYLDGLADAK",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0A9P4"
         },
         "label":"trxb_ecoli"
      },
      {
         "object":"interactor",
         "id":"650",
         "type":{
            "id":"MI:0328",
            "name":"small molecule"
         },
         "identifier":{
            "db":"chebi",
            "id":"CHEBI:25523"
         },
         "label":"nadp"
      },
      {
         "object":"interaction",
         "id":"651",
         "interactionType":{
            "id":"MI:0407",
            "name":"direct interaction"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"wwpdb",
               "id":"1tdf"
            },
            {
               "db":"wwpdb",
               "id":"1f6m"
            },
            {
               "db":"intact",
               "id":"EBI-8874189"
            },
            {
               "db":"intenz",
               "id":"EC 1.8.1.9"
            }
         ],
         "participants":[
            {
               "interactorRef":"165",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0682",
                  "name":"cofactor"
               },
               "bindingSites":[
                  {
                     "id":"652",
                     "name":"trxb binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"649",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"653",
                     "name":"nadp binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ]
                  },
                  {
                     "id":"654",
                     "name":"fad binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"650",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0682",
                  "name":"cofactor"
               },
               "bindingSites":[
                  {
                     "id":"655",
                     "name":"trxb binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"656",
         "sequence":"MAGLKLQAVTKSWDGKTQVIKPLTLDVADGEFIVMVGPSGCGKSTLLRMVAGLERVTEGDIWINDQRVTEMEPKDRGIAMVFQNYALYPHMSVEENMAWGLKIRGMGKQQIAERVKEAARILELDGLLKRRPRELSGGQRQRVAMGRAIVRDPAVFLFDEPLSNLDAKLRVQMRLELQQLHRRLKTTSLYVTHDQVEAMTLAQRVMVMNGGVAEQIGTPVEVYEKPASLFVASFIGSPAMNLLTGRVNNEGTHFELDGGIELPLNGGYRQYAGRKMTLGIRPEHIALSSQAEGGVPMVMDTLEILGADNLAHGRWGEQKLVVRLAHQERPTAGSTLWLHLAENQLHLFDGETGQRV",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P10907"
         },
         "label":"ugpc_ecoli"
      },
      {
         "object":"interactor",
         "id":"657",
         "sequence":"MKPLHYTASALALGLALMGNAQAVTTIPFWHSMEGELGKEVDSLAQRFNAENPDYKIVPTYKGNYEQNLSAGIAAFRTGNAPAILQVYEVGTATMMASKAIKPVYDVFKEAGIQFDESQFVPTVSGYYSDSKTGHLLSQPFNSSTPVLYYNKDAFKKAGLDPEQPPKTWQDLADYAAKLKASGMKCGYASGWQGWIQLENFSAWNGLPFASKNNGFDGTDAVLEFNKPEQVKHIAMLEEMNKKGDFSYVGRKDESTEKFYNGDCAMTTASSGSLANIREYAKFNYGVGMMPYDADAKDAPQNAIIGGASLWVMQGKDKETYTGVAKFLDFLAKPENAAEWHQKTGYLPITKAAYDLTREQGFYEKNPGADTATRQMLNKPPLPFTKGLRLGNMPQIRVIVDEELESVWTGKKTPQQALDTAVERGNQLLRRFEKSTKS",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0AG80"
         },
         "label":"ugpb_ecoli"
      },
      {
         "object":"interactor",
         "id":"658",
         "sequence":"MIENRPWLTIFSHTMLILGIAVILFPLYVAFVAATLDKQAVYAAPMTLIPGTHLLENIHNIWVNGVGTNSAPFWRMLLNSFVMAFSITLGKITVSMLSAFAIVWFRFPLRNLFFWMIFITLMLPVEVRIFPTVEVIANLQMLDSYAGLTLPLMASATATFLFRQFFMTLPDELVEAARIDGASPMRFFCDIVFPLSKTNLAALFVITFIYGWNQYLWPLLIITDVDLGTTVAGIKGMIATGEGTTEWNSVMVAMLLTLIPPVVIVLVMQRAFVRGLVDSEK",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P10906"
         },
         "label":"ugpe_ecoli"
      },
      {
         "object":"interactor",
         "id":"659",
         "sequence":"MSSSRPVFRSRWLPYLLVAPQLIITVIFFIWPAGEALWYSLQSVDPFGFSSQFVGLDNFVTLFHDSYYLDSFWTTIKFSTFVTVSGLLVSLFFAALVEYIVRGSRFYQTLMLLPYAVAPAVAAVLWIFLFNPGRGLITHFLAEFGYDWNHAQNSGQAMFLVVFASVWKQISYNFLFFYAALQSIPRSLIEAAAIDGAGPIRRFFKIALPLIAPVSFFLLVVNLVYAFFDTFPVIDAATSGGPVQATTTLIYKIYREGFTGLDLASSAAQSVVLMFLVIVLTVVQFRYVESKVRYQ",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P10905"
         },
         "label":"ugpa_ecoli"
      },
      {
         "object":"interactor",
         "id":"660",
         "type":{
            "id":"MI:0328",
            "name":"small molecule"
         },
         "identifier":{
            "db":"chebi",
            "id":"CHEBI:15978"
         },
         "label":"sn-glycerol 3-phosphate"
      },
      {
         "object":"interaction",
         "id":"661",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intenz",
               "id":"EC  3.6.3.20"
            },
            {
               "db":"intact",
               "id":"EBI-8875874"
            }
         ],
         "participants":[
            {
               "interactorRef":"656",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"662",
                     "name":"ugpa binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "663"
                     ]
                  },
                  {
                     "id":"664",
                     "name":"ugpe binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "665"
                     ]
                  },
                  {
                     "id":"666",
                     "name":"atp binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "667"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"7",
               "bioRole":{
                  "id":"MI:0682",
                  "name":"cofactor"
               },
               "bindingSites":[
                  {
                     "id":"667",
                     "name":"ugpc binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "666"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"657",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"668",
                     "name":"ugpa binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "669"
                     ]
                  },
                  {
                     "id":"670",
                     "name":"ugpe binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "671"
                     ]
                  },
                  {
                     "id":"672",
                     "name":"g3p binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "673"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"658",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"674",
                     "name":"ugpa binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "675"
                     ]
                  },
                  {
                     "id":"671",
                     "name":"ugpb binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "670"
                     ]
                  },
                  {
                     "id":"676",
                     "name":"g3p binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "677"
                     ]
                  },
                  {
                     "id":"665",
                     "name":"ugpc binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "664"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"659",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"675",
                     "name":"ugpe binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "674"
                     ]
                  },
                  {
                     "id":"663",
                     "name":"ugpc binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "662"
                     ]
                  },
                  {
                     "id":"669",
                     "name":"ugpb binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "668"
                     ]
                  },
                  {
                     "id":"678",
                     "name":"g3p binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "679"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"660",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"673",
                     "name":"ugpb binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "672"
                     ]
                  },
                  {
                     "id":"677",
                     "name":"ugpe binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "676"
                     ]
                  },
                  {
                     "id":"679",
                     "name":"ugpa binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "678"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"680",
         "sequence":"MSKPFKLNSAFKPSGDQPEAIRRLEEGLEDGLAHQTLLGVTGSGKTFTIANVIADLQRPTMVLAPNKTLAAQLYGEMKEFFPENAVEYFVSYYDYYQPEAYVPSSDTFIEKDASVNEHIEQMRLSATKAMLERRDVVVVASVSAIYGLGDPDLYLKMMLHLTVGMIIDQRAILRRLAELQYARNDQAFQRGTFRVRGEVIDIFPAESDDIALRVELFDEEVERLSLFDPLTGQIVSTIPRFTIYPKTHYVTPRERIVQAMEEIKEELAARRKVLLENNKLLEEQRLTQRTQFDLEMMNELGYCSGIENYSRFLSGRGPGEPPPTLFDYLPADGLLVVDESHVTIPQIGGMYRGDRARKETLVEYGFRLPSALDNRPLKFEEFEALAPQTIYVSATPGNYELEKSGGDVVDQVVRPTGLLDPIIEVRPVATQVDDLLSEIRQRAAINERVLVTTLTKRMAEDLTEYLEEHGERVRYLHSDIDTVERMEIIRDLRLGEFDVLVGINLLREGLDMPEVSLVAILDADKEGFLRSERSLIQTIGRAARNVNGKAILYGDKITPSMAKAIGETERRREKQQKYNEEHGITPQGLNKKVVDILALGQNIAKTKAKGRGKSRPIVEPDNVPMDMSPKALQQKIHELEGLMMQHAQNLEFEEAAQIRDQLHQLRELFIAAS",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0A8F8"
         },
         "label":"uvrb_ecoli"
      },
      {
         "object":"interaction",
         "id":"681",
         "interactionType":{
            "id":"MI:0407",
            "name":"direct interaction"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intenz",
               "id":"3.6.1.3"
            },
            {
               "db":"intact",
               "id":"EBI-9004110"
            }
         ],
         "participants":[
            {
               "interactorRef":"7",
               "bioRole":{
                  "id":"MI:0682",
                  "name":"cofactor"
               },
               "bindingSites":[
                  {
                     "id":"682",
                     "name":"uvrb binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "683"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"680",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"683",
                     "name":"atp binding region",
                     "type":{
                        "id":"MI:0442",
                        "name":"sufficient binding region"
                     },
                     "sequenceData":[
                        "1-660"
                     ],
                     "linkedFeatures":[
                        "682"
                     ]
                  },
                  {
                     "id":"684",
                     "name":"dimerisation domain",
                     "type":{
                        "id":"MI:0442",
                        "name":"sufficient binding region"
                     },
                     "sequenceData":[
                        "1-660"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"685",
         "sequence":"MSDQFDAKAFLKTVTSQPGVYRMYDAGGTVIYVGKAKDLKKRLSSYFRSNLASRKTEALVAQIQQIDVTVTHTETEALLLEHNYIKLYQPRYNVLLRDDKSYPFIFLSGDTHPRLAMHRGAKHAKGEYFGPFPNGYAVRETLALLQKIFPIRQCENSVYRNRSRPCLQYQIGRCLGPCVEGLVSEEEYAQQVEYVRLFLSGKDDQVLTQLISRMETASQNLEFEEAARIRDQIQAVRRVTEKQFVSNTGDDLDVIGVAFDAGMACVHVLFIRQGKVLGSRSYFPKVPGGTELSEVVETFVGQFYLQGSQMRTLPGEILLDFNLSDKTLLADSLSELAGRKINVQTKPRGDRARYLKLARTNAATALTSKLSQQSTVHQRLTALASVLKLPEVKRMECFDISHTMGEQTVASCVVFDANGPLRAEYRRYNITGITPGDDYAAMNQVLRRRYGKAIDDSKIPDVILIDGGKGQLAQAKNVFAELDVSWDKNHPLLLGVAKGADRKAGLETLFFEPEGEGFSLPPDSPALHVIQHIRDESHDHAIGGHRKKRAKVKNTSSLETIEGVGPKRRQMLLKYMGGLQGLRNASVEEIAKVPGISQGLAEKIFWSLKH",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0A8G0"
         },
         "label":"uvrc_ecoli"
      },
      {
         "object":"interaction",
         "id":"686",
         "interactionType":{
            "id":"MI:0407",
            "name":"direct interaction"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intenz",
               "id":"3.6.1.3"
            },
            {
               "db":"intact",
               "id":"EBI-9004163"
            }
         ],
         "participants":[
            {
               "interactorRef":"685",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"687",
                     "name":"uvrb binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "688"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"7",
               "bioRole":{
                  "id":"MI:0682",
                  "name":"cofactor"
               },
               "bindingSites":[
                  {
                     "id":"689",
                     "name":"uvrb binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "690"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"680",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"691",
                     "name":"dimerisation domain",
                     "type":{
                        "id":"MI:0442",
                        "name":"sufficient binding region"
                     },
                     "sequenceData":[
                        "1-660"
                     ]
                  },
                  {
                     "id":"688",
                     "name":"uvrc binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "687"
                     ]
                  },
                  {
                     "id":"690",
                     "name":"atp binding region",
                     "type":{
                        "id":"MI:0442",
                        "name":"sufficient binding region"
                     },
                     "sequenceData":[
                        "1-660"
                     ],
                     "linkedFeatures":[
                        "689"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"692",
         "sequence":"MDKIEVRGARTHNLKNINLVIPRDKLIVVTGLSGSGKSSLAFDTLYAEGQRRYVESLSAYARQFLSLMEKPDVDHIEGLSPAISIEQKSTSHNPRSTVGTITEIHDYLRLLFARVGEPRCPDHDVPLAAQTVSQMVDNVLSQPEGKRLMLLAPIIKERKGEHTKTLENLASQGYIRARIDGEVCDLSDPPKLELQKKHTIEVVVDRFKVRDDLTQRLAESFETALELSGGTAVVADMDDPKAEELLFSANFACPICGYSMRELEPRLFSFNNPAGACPTCDGLGVQQYFDPDRVIQNPELSLAGGAIRGWDRRNFYYFQMLKSLADHYKFDVEAPWGSLSANVHKVVLYGSGKENIEFKYMNDRGDTSIRRHPFEGVLHNMERRYKETESSAVREELAKFISNRPCASCEGTRLRREARHVYVENTPLPAISDMSIGHAMEFFNNLKLAGQRAKIAEKILKEIGDRLKFLVNVGLNYLTLSRSAETLSGGEAQRIRLASQIGAGLVGVMYVLDEPSIGLHQRDNERLLGTLIHLRDLGNTVIVVEHDEDAIRAADHVIDIGPGAGVHGGEVVAEGPLEAIMAVPESLTGQYMSGKRKIEVPKKRVPANPEKVLKLTGARGNNLKDVTLTLPVGLFTCITGVSGSGKSTLINDTLFPIAQRQLNGATIAEPAPYRDIQGLEHFDKVIDIDQSPIGRTPRSNPATYTGVFTPVRELFAGVPESRARGYTPGRFSFNVRGGRCEACQGDGVIKVEMHFLPDIYVPCDQCKGKRYNRETLEIKYKGKTIHEVLDMTIEEAREFFDAVPALARKLQTLMDVGLTYIRLGQSATTLSGGEAQRVKLARELSKRGTGQTLYILDEPTTGLHFADIQQLLDVLHKLRDQGNTIVVIEHNLDVIKTADWIVDLGPEGGSGGGEILVSGTPETVAECEASHTARFLKPML",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0A698"
         },
         "label":"uvra_ecoli"
      },
      {
         "object":"interaction",
         "id":"693",
         "interactionType":{
            "id":"MI:0407",
            "name":"direct interaction"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intenz",
               "id":"3.6.1.3"
            },
            {
               "db":"intact",
               "id":"EBI-9003834"
            }
         ],
         "participants":[
            {
               "interactorRef":"7",
               "bioRole":{
                  "id":"MI:0682",
                  "name":"cofactor"
               },
               "bindingSites":[
                  {
                     "id":"694",
                     "name":"uvrb binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "695"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"680",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"695",
                     "name":"atp binding region",
                     "type":{
                        "id":"MI:0442",
                        "name":"sufficient binding region"
                     },
                     "sequenceData":[
                        "1-660"
                     ],
                     "linkedFeatures":[
                        "694"
                     ]
                  },
                  {
                     "id":"696",
                     "name":"dimerisation domain",
                     "type":{
                        "id":"MI:0442",
                        "name":"sufficient binding region"
                     },
                     "sequenceData":[
                        "1-660"
                     ]
                  },
                  {
                     "id":"697",
                     "name":"uvra binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "698"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"692",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"698",
                     "name":"uvrb binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "697"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"699",
         "sequence":"MPEQYRYTLPVKAGEQRLLGELTGAACATLVAEIAERHAGPVVLIAPDMQNALRLHDEISQFTDQMVMNLADWETLPYDSFSPHQDIISSRLSTLYQLPTMQRGVLIVPVNTLMQRVCPHSFLHGHALVMKKGQRLSRDALRTQLDSAGYRHVDQVMEHGEYATRGALLDLFPMGSELPYRLDFFDDEIDSLRVFDVDSQRTLEEVEAINLLPAHEFPTDKAAIELFRSQWRDTFEVKRDPEHIYQQVSKGTLPAGIEYWQPLFFSEPLPPLFSYFPANTLLVNTGDLETSAERFQADTLARFENRGVDPMRPLLPPQSLWLRVDELFSELKNWPRVQLKTEHLPTKAANANLGFQKLPDLAVQAQQKAPLDALRKFLETFDGPVVFSVESEGRREALGELLARIKIAPQRIMRLDEASDRGRYLMIGAAEHGFVDTVRNLALICESDLLGERVARRRQDSRRTINPDTLIRNLAELHIGQPVVHLEHGVGRYAGMTTLEAGGITGEYLMLTYANDAKLYVPVSSLHLISRYAGGAEENAPLHKLGGDAWSRARQKAAEKVRDVAAELLDIYAQRAAKEGFAFKHDREQYQLFCDSFPFETTPDQAQAINAVLSDMCQPLAMDRLVCGDVGFGKTEVAMRAAFLAVDNHKQVAVLVPTTLLAQQHYDNFRDRFANWPVRIEMISRFRSAKEQTQILAEVAEGKIDILIGTHKLLQSDVKFKDLGLLIVDEEHRFGVRHKERIKAMRANVDILTLTATPIPRTLNMAMSGMRDLSIIATPPARRLAVKTFVREYDSMVVREAILREILRGGQVYYLYNDVENIQKAAERLAELVPEARIAIGHGQMRERELERVMNDFHHQRFNVLVCTTIIETGIDIPTANTIIIERADHFGLAQLHQLRGRVGRSHHQAYAWLLTPHPKAMTTDAQKRLEAIASLEDLGAGFALATHDLEIRGAGELLGEEQSGSMETIGFSLYMELLENAVDALKAGREPSLEDLTSQQTEVELRMPSLLPDDFIPDVNTRLSFYKRIASAKTENELEEIKVELIDRFGLLPDPARTLLDIARLRQQAQKLGIRKLEGNEKGGVIEFAEKNHVNPAWLIGLLQKQPQHYRLDGPTRLKFIQDLSERKTRIEWVRQFMRELEENAIA",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P30958"
         },
         "label":"mfd_ecoli"
      },
      {
         "object":"interaction",
         "id":"700",
         "interactionType":{
            "id":"MI:0407",
            "name":"direct interaction"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"wwpdb",
               "id":"4dfc"
            },
            {
               "db":"intact",
               "id":"EBI-9007893"
            }
         ],
         "participants":[
            {
               "interactorRef":"692",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"701",
                     "name":"mfd binding site",
                     "type":{
                        "id":"MI:0442",
                        "name":"sufficient binding region"
                     },
                     "sequenceData":[
                        "131-250"
                     ],
                     "linkedFeatures":[
                        "702"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"699",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"702",
                     "name":"uvra binding site",
                     "type":{
                        "id":"MI:0442",
                        "name":"sufficient binding region"
                     },
                     "sequenceData":[
                        "127-213"
                     ],
                     "linkedFeatures":[
                        "701"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"703",
         "sequence":"MSDLAREITPVNIEEELKSSYLDYAMSVIVGRALPDVRDGLKPVHRRVLYAMNVLGNDWNKAYKKSARVVGDVIGKYHPHGDSAVYDTIVRMAQPFSLRYMLVDGQGNFGSIDGDSAAAMRYTEIRLAKIAHELMADLEKETVDFVDNYDGTEKIPDVMPTKIPNLLVNGSSGIAVGMATNIPPHNLTEVINGCLAYIDDEDISIEGLMEHIPGPDFPTAAIINGRRGIEEAYRTGRGKVYIRARAEVEVDAKTGRETIIVHEIPYQVNKARLIEKIAELVKEKRVEGISALRDESDKDGMRIVIEVKRDAVGEVVLNNLYSQTQLQVSFGINMVALHHGQPKIMNLKDIIAAFVRHRREVVTRRTIFELRKARDRAHILEALAVALANIDPIIELIRHAPTPAEAKTALVANPWQLGNVAAMLERAGDDAARPEWLEPEFGVRDGLYYLTEQQAQAILDLRLQKLTGLEHEKLLDEYKELLDQIAELLRILGSADRLMEVIREELELVREQFGDKRRTEITANSADINLEDLITQEDVVVTLSHQGYVKYQPLSEYEAQRRGGKGKSAARIKEEDFIDRLLVANTHDHILCFSSRGRVYSMKVYQLPEATRGARGRPIVNLLPLEQDERITAILPVTEFEEGVKVFMATANGTVKKTVLTEFNRLRTAGKVAIKLVDGDELIGVDLTSGEDEVMLFSAEGKVVRFKESSVRAMGCNTTGVRGIRLGEGDKVVSLIVPRGDGAILTATQNGYGKRTAVAEYPTKSRATKGVISIKVTERNGLVVGAVQVDDCDQIMMITDAGTLVRTRVSEISIVGRNTQGVILIRTAEDENVVGLQRVAEPVDEEDLDTIDGSAAEGDDEIAPEVDVDDEPEEE",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0AES4"
         },
         "label":"gyra_ecoli"
      },
      {
         "object":"interactor",
         "id":"704",
         "sequence":"MSNSYDSSSIKVLKGLDAVRKRPGMYIGDTDDGTGLHHMVFEVVDNAIDEALAGHCKEIIVTIHADNSVSVQDDGRGIPTGIHPEEGVSAAEVIMTVLHAGGKFDDNSYKVSGGLHGVGVSVVNALSQKLELVIQREGKIHRQIYEHGVPQAPLAVTGETEKTGTMVRFWPSLETFTNVTEFEYEILAKRLRELSFLNSGVSIRLRDKRDGKEDHFHYEGGIKAFVEYLNKNKTPIHPNIFYFSTEKDGIGVEVALQWNDGFQENIYCFTNNIPQRDGGTHLAGFRAAMTRTLNAYMDKEGYSKKAKVSATGDDAREGLIAVVSVKVPDPKFSSQTKDKLVSSEVKSAVEQQMNELLAEYLLENPTDAKIVVGKIIDAARAREAARRAREMTRRKGALDLAGLPGKLADCQERDPALSELYLVEGDSAGGSAKQGRNRKNQAILPLKGKILNVEKARFDKMLSSQEVATLITALGCGIGRDEYNPDKLRYHSIIIMTDADVDGSHIRTLLLTFFYRQMPEIVERGHVYIAQPPLYKVKKGKQEQYIKDDEAMDQYQISIALDGATLHTNASAPALAGEALEKLVSEYNATQKMINRMERRYPKAMLKELIYQPTLTEADLSDEQTVTRWVNALVSELNDKEQHGSQWKFDVHTNAEQNLFEPIVRVRTHGVDTDYPLDHEFITGGEYRRICTLGEKLRGLLEEDAFIERGERRQPVASFEQALDWLVKESRRGLSIQRYKGLGEMNPEQLWETTMDPESRRMLRVTVKDAIAADQLFTTLMGDAVEPRRAFIEENALKAANIDI",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0AES6"
         },
         "label":"gyrb_ecoli"
      },
      {
         "object":"interaction",
         "id":"705",
         "interactionType":{
            "id":"MI:0407",
            "name":"direct interaction"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"chembl",
               "id":"CHEMBL2094139"
            },
            {
               "db":"intact",
               "id":"EBI-9008779"
            },
            {
               "db":"wwpdb",
               "id":"3nuh"
            },
            {
               "db":"intenz",
               "id":"5.99.1.3"
            }
         ],
         "participants":[
            {
               "interactorRef":"703",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"706",
                     "name":"gyrb binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "707"
                     ]
                  },
                  {
                     "id":"708",
                     "name":"dimerisation domain",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"704",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"707",
                     "name":"gyra binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "706"
                     ]
                  },
                  {
                     "id":"709",
                     "name":"atp binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "n-n"
                     ],
                     "linkedFeatures":[
                        "710"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"7",
               "bioRole":{
                  "id":"MI:0682",
                  "name":"cofactor"
               },
               "bindingSites":[
                  {
                     "id":"710",
                     "name":"gyrb binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "709"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"711",
         "sequence":"MLRVYHSNRLDVLEALMEFIVERERLDDPFEPEMILVQSTGMAQWLQMTLSQKFGIAANIDFPLPASFIWDMFVRVLPEIPKESAFNKQSMSWKLMTLLPQLLEREDFTLLRHYLTDDSDKRKLFQLSSKAADLFDQYLVYRPDWLAQWETGHLVEGLGEAQAWQAPLWKALVEYTHQLGQPRWHRANLYQRFIETLESATTCPPGLPSRVFICGISALPPVYLQALQALGKHIEIHLLFTNPCRYYWGDIKDPAYLAKLLTRQRRHSFEDRELPLFRDSENAGQLFNSDGEQDVGNPLLASWGKLGRDYIYLLSDLESSQELDAFVDVTPDNLLHNIQSDILELENRAVAGVNIEEFSRSDNKRPLDPLDSSITFHVCHSPQREVEVLHDRLLAMLEEDPTLTPRDIIVMVADIDSYSPFIQAVFGSAPADRYLPYAISDRRARQSHPVLEAFISLLSLPDSRFVSEDVLALLDVPVLAARFDITEEGLRYLRQWVNESGIRWGIDDDNVRELELPATGQHTWRFGLTRMLLGYAMESAQGEWQSVLPYDESSGLIAELVGHLASLLMQLNIWRRGLAQERPLEEWLPVCRDMLNAFFLPDAETEAAMTLIEQQWQAIIAEGLGAQYGDAVPLSLLRDELAQRLDQERISQRFLAGPVNICTLMPMRSIPFKVVCLLGMNDGVYPRQLAPLGFDLMSQKPKRGDRSRRDDDRYLFLEALISAQQKLYISYIGRSIQDNSERFPSVLVQELIDYIGQSHYLPGDEALNCDESEARVKAHLTCLHTRMPFDPQNYQPGERQSYAREWLPAASQAGKAHSEFVQPLPFTLPETVPLETLQRFWAHPVRAFFQMRLQVNFRTEDSEIPDTEPFILEGLSRYQINQQLLNALVEQDDAERLFRRFRAAGDLPYGAFGEIFWETQCQEMQQLADRVIACRQPGQSMEIDLACNGVQITGWLPQVQPDGLLRWRPSLLSVAQGMQLWLEHLVYCASGGNGESRLFLRKDGEWRFPPLAAEQALHYLSQLIEGYREGMSAPLLVLPESGGAWLKTCYDAQNDAMLDDDSTLQKARTKFLQAYEGNMMVRGEGDDIWYQRLWRQLTPETMEAIVEQSQRFLLPLFRFNQS",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P07648"
         },
         "label":"recc_ecoli"
      },
      {
         "object":"interactor",
         "id":"712",
         "sequence":"MSDVAETLDPLRLPLQGERLIEASAGTGKTFTIAALYLRLLLGLGGSAAFPRPLTVEELLVVTFTEAATAELRGRIRSNIHELRIACLRETTDNPLYERLLEEIDDKAQAAQWLLLAERQMDEAAVFTIHGFCQRMLNLNAFESGMLFEQQLIEDESLLRYQACADFWRRHCYPLPREIAQVVFETWKGPQALLRDINRYLQGEAPVIKAPPPDDETLASRHAQIVARIDTVKQQWRDAVGELDALIESSGIDRRKFNRSNQAKWIDKISAWAEEETNSYQLPESLEKFSQRFLEDRTKAGGETPRHPLFEAIDQLLAEPLSIRDLVITRALAEIRETVAREKRRRGELGFDDMLSRLDSALRSESGEVLAAAIRTRFPVAMIDEFQDTDPQQYRIFRRIWHHQPETALLLIGDPKQAIYAFRGADIFTYMKARSEVHAHYTLDTNWRSAPGMVNSVNKLFSQTDDAFMFREIPFIPVKSAGKNQALRFVFKGETQPAMKMWLMEGESCGVGDYQSTMAQVCAAQIRDWLQAGQRGEALLMNGDDARPVRASDISVLVRSRQEAAQVRDALTLLEIPSVYLSNRDSVFETLEAQEMLWLLQAVMTPERENTLRSALATSMMGLNALDIETLNNDEHAWDVVVEEFDGYRQIWRKRGVMPMLRALMSARNIAENLLATAGGERRLTDILHISELLQEAGTQLESEHALVRWLSQHILEPDSNASSQQMRLESDKHLVQIVTIHKSKGLEYPLVWLPFITNFRVQEQAFYHDRHSFEAVLDLNAAPESVDLAEAERLAEDLRLLYVALTRSVWHCSLGVAPLVRRRGDKKGDTDVHQSALGRLLQKGEPQDAAGLRTCIEALCDDDIAWQTAQTGDNQPWQVNDVSTAELNAKTLQRLPGDNWRVTSYSGLQQRGHGIAQDLMPRLDVDAAGVASVVEEPTLTPHQFPRGASPGTFLHSLFEDLDFTQPVDPNWVREKLELGGFESQWEPVLTEWITAVLQAPLNETGVSLSQLSARNKQVEMEFYLPISEPLIASQLDTLIRQFDPLSAGCPPLEFMQVRGMLKGFIDLVFRHEGRYYLLDYKSNWLGEDSSAYTQQAMAAAMQAHRYDLQYQLYTLALHRYLRHRIADYDYEHHFGGVIYLFLRGVDKEHPQQGIYTTRPNAGLIALMDEMFAGMTLEEA",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P08394"
         },
         "label":"recb_ecoli"
      },
      {
         "object":"interactor",
         "id":"713",
         "sequence":"MKLQKQLLEAVEHKQLRPLDVQFALTVAGDEHPAVTLAAALLSHDAGEGHVCLPLSRLENNEASHPLLATCVSEIGELQNWEECLLASQAVSRGDEPTPMILCGDRLYLNRMWCNERTVARFFNEVNHAIEVDEALLAQTLDKLFPVSDEINWQKVAAAVALTRRISVISGGPGTGKTTTVAKLLAALIQMADGERCRIRLAAPTGKAAARLTESLGKALRQLPLTDEQKKRIPEDASTLHRLLGAQPGSQRLRHHAGNPLHLDVLVVDEASMIDLPMMSRLIDALPDHARVIFLGDRDQLASVEAGAVLGDICAYANAGFTAERARQLSRLTGTHVPAGTGTEAASLRDSLCLLQKSYRFGSDSGIGQLAAAINRGDKTAVKTVFQQDFTDIEKRLLQSGEDYIAMLEEALAGYGRYLDLLQARAEPDLIIQAFNEYQLLCALREGPFGVAGLNERIEQFMQQKRKIHRHPHSRWYEGRPVMIARNDSALGLFNGDIGIALDRGQGTRVWFAMPDGNIKSVQPSRLPEHETTWAMTVHKSQGSEFDHAALILPSQRTPVVTRELVYTAVTRARRRLSLYADERILSAAIATRTERRSGLAALFSSRE",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P04993"
         },
         "label":"recd_ecoli"
      },
      {
         "object":"interaction",
         "id":"714",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"intenz",
               "id":"3.1.11.5"
            },
            {
               "db":"wwpdb",
               "id":"1w36"
            },
            {
               "db":"intact",
               "id":"EBI-9009144"
            },
            {
               "db":"chembl",
               "id":"CHEMBL2095232"
            },
            {
               "db":"wwpdb",
               "id":"3k70"
            }
         ],
         "participants":[
            {
               "interactorRef":"7",
               "stoichiometry":"2",
               "bioRole":{
                  "id":"MI:0682",
                  "name":"cofactor"
               },
               "bindingSites":[
                  {
                     "id":"715",
                     "name":"recd binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "716"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"711",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"717",
                     "name":"recd binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "718"
                     ]
                  },
                  {
                     "id":"719",
                     "name":"recb binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "720"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"712",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"720",
                     "name":"recc binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "719"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"713",
               "stoichiometry":"1",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"718",
                     "name":"recc binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "717"
                     ]
                  },
                  {
                     "id":"716",
                     "name":"atp binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ],
                     "linkedFeatures":[
                        "715"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"721",
         "sequence":"MDQKQIEEIVRSVMASMGQAAPAPSEAKCATTNCAAPVTSESCALDLGSAEAKAWIGVENPHRADVLTELRRSTVARVCTGRAGPRPRTQALLRFLADHSRSKDTVLKEVPEEWVKAQGLLEVRSEISDKNLYLTRPDMGRRLCAEAVEALKAQCVANPDVQVVISDGLSTDAITVNYEEILPPLMAGLKQAGLKVGTPFFVRYGRVKIEDQIGEILGAKVVILLVGERPGLGQSESLSCYAVYSPRMATTVEADRTCISNIHQGGTPPVEAAAVIVDLAKRMLEQKASGINMTR",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P19636"
         },
         "label":"eutc_ecoli"
      },
      {
         "object":"interactor",
         "id":"722",
         "sequence":"MKLKTTLFGNVYQFKDVKEVLAKANELRSGDVLAGVAAASSQERVAAKQVLSEMTVADIRNNPVIAYEDDCVTRLIQDDVNETAYNQIKNWSISELREYVLSDETSVDDIAFTRKGLTSEVVAAVAKICSNADLIYGAKKMPVIKKANTTIGIPGTFSARLQPNDTRDDVQSIAAQIYEGLSFGVGDAVIGVNPVTDDVENLSRVLDTIYGVIDKFNIPTQGCVLAHVTTQIEAIRRGAPGGLIFQSICGSEKGLKEFGVELAMLDEARAVGAEFNRIAGENCLYFETGQGSALSAGANFGADQVTMEARNYGLARHYDPFIVNTVVGFIGPEYLYNDRQIIRAGLEDHFMGKLSGISMGCDCCYTNHADADQNLNENLMILLATAGCNYIMGMPLGDDIMLNYQTTAFHDTATVRQLLNLRPSPEFERWLESMGIMANGRLTKRAGDPSLFF",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"83333",
            "common":"ecoli",
            "scientific":"Escherichia coli (strain K12)"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P0AEJ6"
         },
         "label":"eutb_ecoli"
      },
      {
         "object":"interaction",
         "id":"723",
         "interactionType":{
            "id":"MI:0407",
            "name":"direct interaction"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0364",
               "name":"inferred by curator"
            },
            "host":{
               "taxid":"83333",
               "common":"ecoli",
               "scientific":"Escherichia coli (strain K12)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"14681455"
               }
            ],
            "sourceDatabase":{
               "id":"MI:0469",
               "name":"European Bioinformatics Institute"
            }
         },
         "identifiers":[
            {
               "db":"wwpdb",
               "id":"3abo"
            },
            {
               "db":"intact",
               "id":"EBI-9012157"
            },
            {
               "db":"wwpdb",
               "id":"3abs"
            },
            {
               "db":"wwpdb",
               "id":"3abq"
            },
            {
               "db":"intenz",
               "id":"4.3.1.7"
            },
            {
               "db":"wwpdb",
               "id":"3abr"
            }
         ],
         "participants":[
            {
               "interactorRef":"721",
               "stoichiometry":"6",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"724",
                     "name":"eutb binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "44-295"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"722",
               "stoichiometry":"6",
               "bioRole":{
                  "id":"MI:0501",
                  "name":"enzyme"
               },
               "bindingSites":[
                  {
                     "id":"725",
                     "name":"eutc binding region",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "?-?"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"467",
               "stoichiometry":"6",
               "bioRole":{
                  "id":"MI:0682",
                  "name":"cofactor"
               }
            }
         ]
      }
   ]
};
