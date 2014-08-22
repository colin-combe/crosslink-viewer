var miJson = {
   "data":[
      {
         "object":"interactor",
         "id":"1",
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
         "id":"2",
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
         "id":"3",
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
               "interactorRef":"1",
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
               }
            },
            {
               "interactorRef":"1",
               "bioRole":{
                  "id":"MI:0499",
                  "name":"unspecified role"
               }
            }
         ]
      }
   ]
};
