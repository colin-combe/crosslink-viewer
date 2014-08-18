/* Example ftp://ftp.ebi.ac.uk/pub/databases/intact/current/psi25/pmid/2005/15522217.xml */

var miJson = {
   "data":[
      {
         "object":"interactor",
         "id":"1",
         "sequence":"MSSARFDSSDRSAWYMGPVSRQEAQTRLQGQRHGMFLVRDSSTCPGDYVLSVSENSRVSHYIINSLPNRRFKIGDQEFDHLPALLEFYKIHYLDTTTLIEPAPRYPSPPMGSVSAPNLPTAEDNLEYVRTLYDFPGNDAEDLPFKKGEILVIIEKPEEQWWSARNKDGRVGMIPVPYVEKLVRSSPHGKHGNRNSNSYGIPEPAHAYAQPQTTTPLPAVSGSPGAAITPLPSTQNGPVFAKAIQKRVPCAYDKTALALEVGDIVKVTRMNINGQWEGEVNGRKGLFPFTHVKIFDPQNPDENE",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"9606",
            "common":"human",
            "scientific":"Homo sapiens"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P46109"
         },
         "label":"crkl_human"
      },
      {
         "object":"interactor",
         "id":"2",
         "sequence":"MATGGRRGAAAAPLLVAVAALLLGAAGHLYPGEVCPGMDIRNNLTRLHELENCSVIEGHLQILLMFKTRPEDFRDLSFPKLIMITDYLLLFRVYGLESLKDLFPNLTVIRGSRLFFNYALVIFEMVHLKELGLYNLMNITRGSVRIEKNNELCYLATIDWSRILDSVEDNYIVLNKDDNEECGDICPGTAKGKTNCPATVINGQFVERCWTHSHCQKVCPTICKSHGCTAEGLCCHSECLGNCSQPDDPTKCVACRNFYLDGRCVETCPPPYYHFQDWRCVNFSFCQDLHHKCKNSRRQGCHQYVIHNNKCIPECPSGYTMNSSNLLCTPCLGPCPKVCHLLEGEKTIDSVTSAQELRGCTVINGSLIINIRGGNNLAAELEANLGLIEEISGYLKIRRSYALVSLSFFRKLRLIRGETLEIGNYSFYALDNQNLRQLWDWSKHNLTITQGKLFFHYNPKLCLSEIHKMEEVSGTKGRQERNDIALKTNGDQASCENELLKFSYIRTSFDKILLRWEPYWPPDFRDLLGFMLFYKEAPYQNVTEFDGQDACGSNSWTVVDIDPPLRSNDPKSQNHPGWLMRGLKPWTQYAIFVKTLVTFSDERRTYGAKSDIIYVQTDATNPSVPLDPISVSNSSSQIILKWKPPSDPNGNITHYLVFWERQAEDSELFELDYCLKGLKLPSRTWSPPFESEDSQKHNQSEYEDSAGECCSCPKTDSQILKELEESSFRKTFEDYLHNVVFVPRKTSSGTGAEDPRPSRKRRSLGDVGNVTVAVPTVAAFPNTSSTSVPTSPEEHRPFEKVVNKESLVISGLRHFTGYRIELQACNQDTPEERCSVAAYVSARTMPEAKADDIVGPVTHEIFENNVVHLMWQEPKEPNGLIVLYEVSYRRYGDEELHLCVSRKHFALERGCRLRGLSPGNYSVRIRATSLAGNGSWTEPTYFYVTDYLDVPSNIAKIIIGPLIFVFLFSVVIGSIYLFLRKRQPDGPLGPLYASSNPEYLSASDVFPCSVYVPDEWEVSREKITLLRELGQGSFGMVYEGNARDIIKGEAETRVAVKTVNESASLRERIEFLNEASVMKGFTCHHVVRLLGVVSKGQPTLVVMELMAHGDLKSYLRSLRPEAENNPGRPPPTLQEMIQMAAEIADGMAYLNAKKFVHRDLAARNCMVAHDFTVKIGDFGMTRDIYETDYYRKGGKGLLPVRWMAPESLKDGVFTTSSDMWSFGVVLWEITSLAEQPYQGLSNEQVLKFVMDGGYLDQPDNCPERVTDLMRMCWQFNPKMRPTFLEIVNLLKDDLHPSFPEVSFFHSEENKAPESEELEMEFEDMENVPLDRSSHCQREEAGGRDGGSSLGFKRSYEEHIPYTHMNGGKKNGRILTLPRSNPS",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"9606",
            "common":"human",
            "scientific":"Homo sapiens"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P06213"
         },
         "label":"insr_human"
      },
      {
         "object":"interaction",
         "id":"3",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0018",
               "name":"two hybrid"
            },
            "host":{
               "taxid":"4932",
               "common":"yeasx",
               "scientific":"Saccharomyces cerevisiae (Baker's yeast)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"15522217"
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
               "id":"EBI-475939"
            }
         ],
         "participants":[
            {
               "interactorRef":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "pointMutations":[
                  {
                     "id":"4",
                     "name":"his33arg ser53pro lys72arg",
                     "type":{
                        "id":"MI:0119",
                        "name":"mutation decreasing interaction"
                     },
                     "sequenceData":[
                        "53-53",
                        "72-72",
                        "33-33"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"2",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "pointMutations":[
                  {
                     "id":"5",
                     "name":"lys1057ala",
                     "type":{
                        "id":"MI:0119",
                        "name":"mutation decreasing interaction"
                     },
                     "sequenceData":[
                        "1057-1057"
                     ]
                  }
               ],
               "bindingSites":[
                  {
                     "id":"6",
                     "name":"c-terminus",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "979-1382"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"7",
         "sequence":"MAGNFDSEERSSWYWGRLSRQEAVALLQGQRHGVFLVRDSSTSPGDYVLSVSENSRVSHYIINSSGPRPPVPPSPAQPPPGVSPSRLRIGDQEFDSLPALLEFYKIHYLDTTTLIEPVSRSRQGSGVILRQEEAEYVRALFDFNGNDEEDLPFKKGDILRIRDKPEEQWWNAEDSEGKRGMIPVPYVEKYRPASASVSALIGGR",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"9606",
            "common":"human",
            "scientific":"Homo sapiens"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P46108-2"
         },
         "label":"p46108-2"
      },
      {
         "object":"interaction",
         "id":"8",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0018",
               "name":"two hybrid"
            },
            "host":{
               "taxid":"4932",
               "common":"yeasx",
               "scientific":"Saccharomyces cerevisiae (Baker's yeast)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"15522217"
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
               "id":"EBI-475952"
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
               "interactorRef":"2",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"9",
                     "name":"c-terminus",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "979-1382"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"10",
         "sequence":"MAGNFDSEERSSWYWGRLSRQEAVALLQGQRHGVFLVRDSSTSPGDYVLSVSENSRVSHYIINSSGPRPPVPPSPAQPPPGVSPSRLRIGDQEFDSLPALLEFYKIHYLDTTTLIEPVSRSRQGSGVILRQEEAEYVRALFDFNGNDEEDLPFKKGDILRIRDKPEEQWWNAEDSEGKRGMIPVPYVEKYRPASASVSALIGGNQEGSHPQPLGGPEPGPYAQPSVNTPLPNLQNGPIYARVIQKRVPNAYDKTALALEVGELVKVTKINVSGQWEGECNGKRGHFPFTHVRLLDQQNPDEDFS",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"9606",
            "common":"human",
            "scientific":"Homo sapiens"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P46108-1"
         },
         "label":"p46108-1"
      },
      {
         "object":"interaction",
         "id":"11",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0018",
               "name":"two hybrid"
            },
            "host":{
               "taxid":"4932",
               "common":"yeasx",
               "scientific":"Saccharomyces cerevisiae (Baker's yeast)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"15522217"
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
               "id":"EBI-475961"
            }
         ],
         "participants":[
            {
               "interactorRef":"10",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               }
            },
            {
               "interactorRef":"2",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"12",
                     "name":"c-terminus",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "979-1382"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interaction",
         "id":"13",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0018",
               "name":"two hybrid"
            },
            "host":{
               "taxid":"4932",
               "common":"yeasx",
               "scientific":"Saccharomyces cerevisiae (Baker's yeast)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"15522217"
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
               "id":"EBI-475971"
            }
         ],
         "participants":[
            {
               "interactorRef":"10",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"14",
                     "name":"sh2 domain",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-114"
                     ],
                     "linkedFeatures":[
                        "15"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"2",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"15",
                     "name":"c-terminus",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "979-1382"
                     ],
                     "linkedFeatures":[
                        "14"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interactor",
         "id":"16",
         "sequence":"MKSGSGGGSPTSLWGLLFLSAALSLWPTSGEICGPGIDIRNDYQQLKRLENCTVIEGYLHILLISKAEDYRSYRFPKLTVITEYLLLFRVAGLESLGDLFPNLTVIRGWKLFYNYALVIFEMTNLKDIGLYNLRNITRGAIRIEKNADLCYLSTVDWSLILDAVSNNYIVGNKPPKECGDLCPGTMEEKPMCEKTTINNEYNYRCWTTNRCQKMCPSTCGKRACTENNECCHPECLGSCSAPDNDTACVACRHYYYAGVCVPACPPNTYRFEGWRCVDRDFCANILSAESSDSEGFVIHDGECMQECPSGFIRNGSQSMYCIPCEGPCPKVCEEEKKTKTIDSVTSAQMLQGCTIFKGNLLINIRRGNNIASELENFMGLIEVVTGYVKIRHSHALVSLSFLKNLRLILGEEQLEGNYSFYVLDNQNLQQLWDWDHRNLTIKAGKMYFAFNPKLCVSEIYRMEEVTGTKGRQSKGDINTRNNGERASCESDVLHFTSTTTSKNRIIITWHRYRPPDYRDLISFTVYYKEAPFKNVTEYDGQDACGSNSWNMVDVDLPPNKDVEPGILLHGLKPWTQYAVYVKAVTLTMVENDHIRGAKSEILYIRTNASVPSIPLDVLSASNSSSQLIVKWNPPSLPNGNLSYYIVRWQRQPQDGYLYRHNYCSKDKIPIRKYADGTIDIEEVTENPKTEVCGGEKGPCCACPKTEAEKQAEKEEAEYRKVFENFLHNSIFVPRPERKRRDVMQVANTTMSSRSRNTTAADTYNITDPEELETEYPFFESRVDNKERTVISNLRPFTLYRIDIHSCNHEAEKLGCSASNFVFARTMPAEGADDIPGPVTWEPRPENSIFLKWPEPENPNGLILMYEIKYGSQVEDQRECVSRQEYRKYGGAKLNRLNPGNYTARIQATSLSGNGSWTDPVFFYVQAKTGYENFIHLIIALPVAVLLIVGGLVIMLYVFHRKRNNSRLGNGVLYASVNPEYFSAADVYVPDEWEVAREKITMSRELGQGSFGMVYEGVAKGVVKDEPETRVAIKTVNEAASMRERIEFLNEASVMKEFNCHHVVRLLGVVSQGQPTLVIMELMTRGDLKSYLRSLRPEMENNPVLAPPSLSKMIQMAGEIADGMAYLNANKFVHRDLAARNCMVAEDFTVKIGDFGMTRDIYETDYYRKGGKGLLPVRWMSPESLKDGVFTTYSDVWSFGVVLWEIATLAEQPYQGLSNEQVLRFVMEGGLLDKPDNCPDMLFELMRMCWQYNPKMRPSFLEIISSIKEEMEPGFREVSFYYSEENKLPEPEELDLEPENMESVPLDPSASSSSLPLPDRHSGHKAENGPGPGVLVLRASFDERQPYAHMNGGRKNERALPLPQSSTC",
         "type":{
            "id":"MI:0326",
            "name":"protein"
         },
         "organism":{
            "taxid":"9606",
            "common":"human",
            "scientific":"Homo sapiens"
         },
         "identifier":{
            "db":"uniprotkb",
            "id":"P08069"
         },
         "label":"igf1r_human"
      },
      {
         "object":"interaction",
         "id":"17",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0018",
               "name":"two hybrid"
            },
            "host":{
               "taxid":"4932",
               "common":"yeasx",
               "scientific":"Saccharomyces cerevisiae (Baker's yeast)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"15522217"
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
               "id":"EBI-476005"
            }
         ],
         "participants":[
            {
               "interactorRef":"10",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               }
            },
            {
               "interactorRef":"16",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"18",
                     "name":"c-terminus",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "959-1367"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interaction",
         "id":"19",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0018",
               "name":"two hybrid"
            },
            "host":{
               "taxid":"4932",
               "common":"yeasx",
               "scientific":"Saccharomyces cerevisiae (Baker's yeast)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"15522217"
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
               "id":"EBI-476017"
            }
         ],
         "participants":[
            {
               "interactorRef":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "pointMutations":[
                  {
                     "id":"20",
                     "name":"his33arg ser53pro lys72arg",
                     "type":{
                        "id":"MI:0119",
                        "name":"mutation decreasing interaction"
                     },
                     "sequenceData":[
                        "53-53",
                        "33-33",
                        "72-72"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"2",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "pointMutations":[
                  {
                     "id":"21",
                     "name":"lys1057ala",
                     "type":{
                        "id":"MI:0119",
                        "name":"mutation decreasing interaction"
                     },
                     "sequenceData":[
                        "1057-1057"
                     ]
                  }
               ],
               "bindingSites":[
                  {
                     "id":"22",
                     "name":"c-terminus",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "979-1382"
                     ]
                  }
               ]
            }
         ]
      },
      {
         "object":"interaction",
         "id":"23",
         "interactionType":{
            "id":"MI:0915",
            "name":"physical association"
         },
         "experiment":{
            "detmethod":{
               "id":"MI:0018",
               "name":"two hybrid"
            },
            "host":{
               "taxid":"4932",
               "common":"yeasx",
               "scientific":"Saccharomyces cerevisiae (Baker's yeast)"
            },
            "pubid":[
               {
                  "db":"pubmed",
                  "id":"15522217"
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
               "id":"EBI-476030"
            }
         ],
         "participants":[
            {
               "interactorRef":"16",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"24",
                     "name":"c-terminus",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "959-1367"
                     ]
                  }
               ]
            },
            {
               "interactorRef":"10",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               },
               "bindingSites":[
                  {
                     "id":"25",
                     "name":"sh2 domain",
                     "type":{
                        "id":"MI:0117",
                        "name":"binding-associated region"
                     },
                     "sequenceData":[
                        "1-114"
                     ]
                  }
               ]
            }
         ]
      }
   ]
};
