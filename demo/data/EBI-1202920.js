var miJson = {
   "data":[
      {
         "object":"interactor",
         "id":"1",
         "sequence":"MFEARLVQGSILKKVLEALKDLINEACWDISSSGVNLQSMDSSHVSLVQLTLRSEGFDTYRCDRNLAMGVNLTSMSKILKCAGNEDIITLRAEDNADTLALVFEAPNQEKVSDYEMKLMDLDVEQLGIPEQEYSCVVKMPSGEFARICRDLSHIGDAVVISCAKDGVKFSASGELGNGNIKLSQTSNVDKEEEAVTIEMNEPVQLTFALRYLNFFTKATPLSSTVTLSMSADVPLVVEYKIADMGHLKYYLAPKIEDEEGS",
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
            "id":"P12004"
         },
         "label":"pcna_human"
      },
      {
         "object":"interaction",
         "id":"2",
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
               "taxid":"9606",
               "common":"human",
               "scientific":"Homo sapiens"
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
               "db":"reactome",
               "id":"REACT_2542.1"
            },
            {
               "db":"intact",
               "id":"EBI-1202920"
            }
         ],
         "participants":[
            {
               "interactorRef":"1",
               "stoichiometry":"3",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               }
            }
         ]
      }
   ]
};
